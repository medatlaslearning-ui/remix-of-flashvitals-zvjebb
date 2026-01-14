
/**
 * Timeout Wrapper for Supabase Edge Function Calls
 * 
 * Wraps Supabase Edge Function invocations with:
 * - Configurable timeout (default 15 seconds)
 * - Automatic cleanup
 * - Error handling
 * - Loading state management
 */

import { supabase } from '../client';

export interface TimeoutWrapperOptions {
  timeoutMs?: number;
  functionName: string;
  body?: any;
  onStart?: () => void;
  onFinish?: () => void;
  onError?: (error: Error) => void;
}

export interface TimeoutWrapperResult<T> {
  data: T | null;
  error: Error | null;
  timedOut: boolean;
}

/**
 * Wraps a Supabase Edge Function call with timeout protection
 * 
 * @param options Configuration options
 * @returns Promise with data, error, and timeout status
 */
export async function invokeWithTimeout<T = any>(
  options: TimeoutWrapperOptions
): Promise<TimeoutWrapperResult<T>> {
  const {
    timeoutMs = 15000, // Default 15 seconds
    functionName,
    body,
    onStart,
    onFinish,
    onError,
  } = options;

  console.log(`[TimeoutWrapper] Invoking ${functionName} with ${timeoutMs}ms timeout`);
  
  // Call onStart callback
  if (onStart) {
    onStart();
  }

  // Create AbortController for timeout
  const controller = new AbortController();
  let timeoutId: NodeJS.Timeout | null = null;
  let timedOut = false;

  try {
    // Set timeout
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => {
        console.warn(`[TimeoutWrapper] ⏱️ ${functionName} timed out after ${timeoutMs}ms`);
        timedOut = true;
        controller.abort();
        reject(new Error(`Request timed out after ${timeoutMs / 1000} seconds`));
      }, timeoutMs);
    });

    // Make the Edge Function call
    const callPromise = supabase.functions.invoke(functionName, {
      body,
    });

    // Race between timeout and actual call
    const { data, error } = await Promise.race([
      callPromise,
      timeoutPromise,
    ]) as any;

    // Clear timeout if we got here
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (error) {
      console.error(`[TimeoutWrapper] ${functionName} error:`, error);
      const err = new Error(error.message || `${functionName} failed`);
      if (onError) {
        onError(err);
      }
      return { data: null, error: err, timedOut: false };
    }

    console.log(`[TimeoutWrapper] ✅ ${functionName} completed successfully`);
    return { data, error: null, timedOut: false };
  } catch (err) {
    // Clear timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    const error = err instanceof Error ? err : new Error('Unknown error');
    console.error(`[TimeoutWrapper] ${functionName} exception:`, error);
    
    if (onError) {
      onError(error);
    }

    return { data: null, error, timedOut };
  } finally {
    // Always call onFinish
    if (onFinish) {
      onFinish();
    }
  }
}

/**
 * Helper function specifically for LMM chat requests
 */
export async function invokeLMMChat(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>,
  options?: Partial<TimeoutWrapperOptions>
): Promise<TimeoutWrapperResult<{ response: string }>> {
  return invokeWithTimeout({
    functionName: 'lmm-chat',
    body: { message, conversationHistory },
    timeoutMs: 15000, // 15 seconds for chat
    ...options,
  });
}

/**
 * Helper function specifically for quiz generation requests
 */
export async function invokeQuizGeneration(
  params: {
    medicalSystem: string;
    questionCount: number;
    flashcardsContext?: string;
    coreKnowledgeContext?: string;
    guidelinesContext?: string;
  },
  options?: Partial<TimeoutWrapperOptions>
): Promise<TimeoutWrapperResult<any>> {
  return invokeWithTimeout({
    functionName: 'generate-quiz',
    body: params,
    timeoutMs: 90000, // 90 seconds for quiz generation (more complex)
    ...options,
  });
}
