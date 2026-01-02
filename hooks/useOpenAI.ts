
import { useCallback, useState } from 'react';
import { supabase } from '@/app/integrations/supabase/client';

export type OpenAIParams = {
  medicalContent: string;
  userQuery: string;
  system?: string;
  temperature?: number;
  max_tokens?: number;
};

export type OpenAIResult = {
  conversationalText: string;
  duration_ms: number;
  model: string;
  tokens?: { prompt?: number; completion?: number; total?: number };
};

type State =
  | { status: 'idle'; data: null; error: null }
  | { status: 'loading'; data: null; error: null }
  | { status: 'success'; data: OpenAIResult; error: null }
  | { status: 'error'; data: null; error: string };

// Configuration
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY_MS = 1000;
const MAX_RETRY_DELAY_MS = 8000;
const REQUEST_TIMEOUT_MS = 30000; // 30 seconds

/**
 * Sleep utility for retry delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Calculate exponential backoff delay
 */
function getRetryDelay(attempt: number): number {
  const delay = INITIAL_RETRY_DELAY_MS * Math.pow(2, attempt);
  return Math.min(delay, MAX_RETRY_DELAY_MS);
}

/**
 * Timeout wrapper for promises
 */
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Request timeout after ${timeoutMs}ms`)), timeoutMs)
    ),
  ]);
}

/**
 * Call Edge Function with retry logic and timeout
 */
async function callEdgeFunctionWithRetry(
  params: OpenAIParams,
  attempt: number = 0
): Promise<any> {
  try {
    console.log(`[useOpenAI] Attempt ${attempt + 1}/${MAX_RETRIES + 1} - Calling Edge Function`);
    
    const edgeFunctionCall = supabase.functions.invoke('generate-conversational-response', {
      body: {
        medicalContent: params.medicalContent,
        userQuery: params.userQuery,
        system: params.system,
        temperature: params.temperature,
        max_tokens: params.max_tokens,
      },
    });
    
    // Wrap with timeout
    const { data, error } = await withTimeout(edgeFunctionCall, REQUEST_TIMEOUT_MS);
    
    if (error) {
      console.error(`[useOpenAI] Edge function error on attempt ${attempt + 1}:`, JSON.stringify(error, null, 2));
      
      // Check if we should retry
      if (attempt < MAX_RETRIES) {
        const isRetryableError = 
          error.message?.includes('timeout') ||
          error.message?.includes('network') ||
          error.message?.includes('Failed to send') ||
          error.message?.includes('fetch') ||
          error.status === 500 ||
          error.status === 502 ||
          error.status === 503 ||
          error.status === 504;
        
        if (isRetryableError) {
          const delay = getRetryDelay(attempt);
          console.log(`[useOpenAI] Retryable error detected. Retrying in ${delay}ms...`);
          await sleep(delay);
          return callEdgeFunctionWithRetry(params, attempt + 1);
        }
      }
      
      throw error;
    }
    
    return data;
  } catch (error: any) {
    console.error(`[useOpenAI] Exception on attempt ${attempt + 1}:`, error);
    
    // Check if we should retry
    if (attempt < MAX_RETRIES) {
      const isRetryableError = 
        error.message?.includes('timeout') ||
        error.message?.includes('network') ||
        error.message?.includes('Failed to send') ||
        error.message?.includes('fetch') ||
        error.name === 'TypeError' ||
        error.name === 'NetworkError';
      
      if (isRetryableError) {
        const delay = getRetryDelay(attempt);
        console.log(`[useOpenAI] Retryable exception detected. Retrying in ${delay}ms...`);
        await sleep(delay);
        return callEdgeFunctionWithRetry(params, attempt + 1);
      }
    }
    
    throw error;
  }
}

export function useOpenAI() {
  const [state, setState] = useState<State>({ status: 'idle', data: null, error: null });

  const reset = useCallback(() => setState({ status: 'idle', data: null, error: null }), []);

  const generateConversationalResponse = useCallback(async (params: OpenAIParams): Promise<OpenAIResult | null> => {
    const medicalContent = (params.medicalContent ?? '').trim();
    const userQuery = (params.userQuery ?? '').trim();
    
    if (medicalContent.length < 10) {
      const errorMsg = 'Medical content must be at least 10 characters.';
      console.log('[useOpenAI] Validation error:', errorMsg);
      setState({ status: 'error', data: null, error: errorMsg });
      return null;
    }
    
    if (userQuery.length < 3) {
      const errorMsg = 'User query must be at least 3 characters.';
      console.log('[useOpenAI] Validation error:', errorMsg);
      setState({ status: 'error', data: null, error: errorMsg });
      return null;
    }
    
    setState({ status: 'loading', data: null, error: null });
    
    try {
      console.log('[useOpenAI] Starting Edge Function call with retry logic');
      console.log('[useOpenAI] Medical content length:', medicalContent.length);
      console.log('[useOpenAI] User query:', userQuery);
      
      const data = await callEdgeFunctionWithRetry({
        medicalContent,
        userQuery,
        system: params.system,
        temperature: params.temperature,
        max_tokens: params.max_tokens,
      });

      if (!data) {
        console.error('[useOpenAI] No data returned from Edge Function after retries');
        throw new Error('No data returned from Edge Function after retries');
      }

      const result = data as OpenAIResult;
      
      if (!result.conversationalText) {
        console.error('[useOpenAI] No conversational text in response');
        throw new Error('No conversational text in Edge Function response');
      }
      
      console.log('[useOpenAI] Success:', {
        model: result.model,
        duration: result.duration_ms,
        tokens: result.tokens?.total,
        textLength: result.conversationalText.length,
      });
      
      setState({ status: 'success', data: result, error: null });
      return result;
    } catch (e: any) {
      console.error('[useOpenAI] All retry attempts failed:', e);
      console.error('[useOpenAI] Error details:', JSON.stringify(e, null, 2));
      
      // Provide detailed error message
      let errorMessage = 'Unknown error';
      
      if (e.message?.includes('timeout')) {
        errorMessage = `Request timeout after ${REQUEST_TIMEOUT_MS / 1000}s`;
      } else if (e.message?.includes('Failed to send')) {
        errorMessage = 'Network error: Failed to send request to Edge Function';
      } else if (e.message?.includes('network')) {
        errorMessage = 'Network error: Unable to reach Edge Function';
      } else if (e.message?.includes('OPENAI_API_KEY')) {
        errorMessage = 'OpenAI API key not configured in Supabase';
      } else if (e.status === 401) {
        errorMessage = 'Authentication error with OpenAI API';
      } else if (e.status === 429) {
        errorMessage = 'OpenAI API rate limit exceeded';
      } else if (e.status === 500 || e.status === 502 || e.status === 503) {
        errorMessage = `Edge Function server error (${e.status})`;
      } else if (e.message) {
        errorMessage = e.message;
      }
      
      setState({ status: 'error', data: null, error: errorMessage });
      return null;
    }
  }, []);

  const loading = state.status === 'loading';
  const error = state.status === 'error' ? state.error : null;
  const data = state.status === 'success' ? state.data : null;

  return { generateConversationalResponse, loading, error, data, reset };
}
