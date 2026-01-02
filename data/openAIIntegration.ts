
/**
 * OPENAI INTEGRATION - Language Generation Layer
 * 
 * ROLE DEFINITION:
 * 
 * The OpenAI LLM functions as:
 * • The language generator
 * • The reasoning and explanation surface
 * • The conversational interface
 * 
 * The OpenAI LLM does NOT function as:
 * • The source of medical truth
 * • A replacement for the core knowledge engine
 * • A decision-maker for guidelines
 * • A memory store
 * 
 * ARCHITECTURE:
 * 
 * Core Knowledge Engine → Synthesizer Engine → OpenAI (Language Generator) → User
 * 
 * The OpenAI LLM receives factual medical content from the synthesizer engine
 * and presents it in a clear, conversational, educational manner WITHOUT
 * adding any medical facts not present in the provided content.
 */

import { supabase } from '@/app/integrations/supabase/client';

export interface OpenAILanguageGenerationParams {
  medicalContent: string;
  userQuery: string;
  temperature?: number;
  max_tokens?: number;
}

export interface OpenAILanguageGenerationResult {
  conversationalText: string;
  duration_ms: number;
  model: string;
  tokens?: { prompt?: number; completion?: number; total?: number };
  usedOpenAI: boolean;
  fallbackReason?: string;
}

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
  params: OpenAILanguageGenerationParams,
  attempt: number = 0
): Promise<any> {
  try {
    console.log(`[OPENAI INTEGRATION] Attempt ${attempt + 1}/${MAX_RETRIES + 1} - Calling Edge Function`);
    
    const edgeFunctionCall = supabase.functions.invoke('generate-conversational-response', {
      body: {
        medicalContent: params.medicalContent,
        userQuery: params.userQuery,
        temperature: params.temperature ?? 0.3,
        max_tokens: params.max_tokens ?? 1500,
      },
    });
    
    // Wrap with timeout
    const { data, error } = await withTimeout(edgeFunctionCall, REQUEST_TIMEOUT_MS);
    
    if (error) {
      console.error(`[OPENAI INTEGRATION] Edge function error on attempt ${attempt + 1}:`, JSON.stringify(error, null, 2));
      
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
          console.log(`[OPENAI INTEGRATION] Retryable error detected. Retrying in ${delay}ms...`);
          await sleep(delay);
          return callEdgeFunctionWithRetry(params, attempt + 1);
        }
      }
      
      throw error;
    }
    
    return data;
  } catch (error: any) {
    console.error(`[OPENAI INTEGRATION] Exception on attempt ${attempt + 1}:`, error);
    
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
        console.log(`[OPENAI INTEGRATION] Retryable exception detected. Retrying in ${delay}ms...`);
        await sleep(delay);
        return callEdgeFunctionWithRetry(params, attempt + 1);
      }
    }
    
    throw error;
  }
}

/**
 * GUARDRAIL: OpenAI Role Enforcement
 * 
 * This function ensures OpenAI is used ONLY as a language generator,
 * not as a source of medical truth.
 */
export async function generateConversationalResponse(
  params: OpenAILanguageGenerationParams
): Promise<OpenAILanguageGenerationResult> {
  console.log('[OPENAI INTEGRATION] Generating conversational response');
  console.log('[OPENAI INTEGRATION] Medical content length:', params.medicalContent.length);
  console.log('[OPENAI INTEGRATION] User query:', params.userQuery);
  
  const startTime = performance.now();
  
  try {
    // Validate inputs
    if (params.medicalContent.length < 10) {
      console.log('[OPENAI INTEGRATION] Medical content too short - using fallback');
      return {
        conversationalText: params.medicalContent,
        duration_ms: 0,
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'Medical content too short (minimum 10 characters)',
      };
    }
    
    if (params.userQuery.length < 3) {
      console.log('[OPENAI INTEGRATION] User query too short - using fallback');
      return {
        conversationalText: params.medicalContent,
        duration_ms: 0,
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'User query too short (minimum 3 characters)',
      };
    }
    
    // Call Edge Function with retry logic and timeout
    console.log('[OPENAI INTEGRATION] Starting Edge Function call with retry logic');
    
    const data = await callEdgeFunctionWithRetry(params);
    
    if (!data) {
      console.error('[OPENAI INTEGRATION] No data returned from Edge Function after retries');
      return {
        conversationalText: params.medicalContent,
        duration_ms: Math.round(performance.now() - startTime),
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'No data returned from Edge Function after retries',
      };
    }
    
    const result = data as {
      conversationalText: string;
      duration_ms: number;
      model: string;
      tokens?: { prompt?: number; completion?: number; total?: number };
    };
    
    if (!result.conversationalText) {
      console.error('[OPENAI INTEGRATION] No conversational text in response');
      return {
        conversationalText: params.medicalContent,
        duration_ms: Math.round(performance.now() - startTime),
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'No conversational text in Edge Function response',
      };
    }
    
    const totalDuration = Math.round(performance.now() - startTime);
    
    console.log('[OPENAI INTEGRATION] Success:', {
      model: result.model,
      edgeFunctionDuration: result.duration_ms,
      totalDuration,
      tokens: result.tokens?.total,
      textLength: result.conversationalText.length,
    });
    
    return {
      ...result,
      duration_ms: totalDuration,
      usedOpenAI: true,
    };
  } catch (error: any) {
    const totalDuration = Math.round(performance.now() - startTime);
    
    console.error('[OPENAI INTEGRATION] All retry attempts failed:', error);
    console.error('[OPENAI INTEGRATION] Error details:', JSON.stringify(error, null, 2));
    
    // Provide detailed fallback reason
    let fallbackReason = 'Unknown error';
    
    if (error.message?.includes('timeout')) {
      fallbackReason = `Request timeout after ${REQUEST_TIMEOUT_MS / 1000}s`;
    } else if (error.message?.includes('Failed to send')) {
      fallbackReason = 'Network error: Failed to send request to Edge Function';
    } else if (error.message?.includes('network')) {
      fallbackReason = 'Network error: Unable to reach Edge Function';
    } else if (error.message?.includes('OPENAI_API_KEY')) {
      fallbackReason = 'OpenAI API key not configured in Supabase';
    } else if (error.status === 401) {
      fallbackReason = 'Authentication error with OpenAI API';
    } else if (error.status === 429) {
      fallbackReason = 'OpenAI API rate limit exceeded';
    } else if (error.status === 500 || error.status === 502 || error.status === 503) {
      fallbackReason = `Edge Function server error (${error.status})`;
    } else if (error.message) {
      fallbackReason = `Error: ${error.message}`;
    }
    
    console.log('[OPENAI INTEGRATION] Falling back to original content');
    console.log('[OPENAI INTEGRATION] Fallback reason:', fallbackReason);
    
    return {
      conversationalText: params.medicalContent,
      duration_ms: totalDuration,
      model: 'fallback',
      usedOpenAI: false,
      fallbackReason,
    };
  }
}

/**
 * GUARDRAIL: Validate OpenAI Response
 * 
 * Ensures the OpenAI response doesn't add medical facts not present
 * in the original content.
 */
export function validateOpenAIResponse(
  originalContent: string,
  openAIResponse: string
): {
  isValid: boolean;
  warnings: string[];
  score: number;
} {
  console.log('[OPENAI INTEGRATION] Validating OpenAI response');
  
  const warnings: string[] = [];
  let score = 100;
  
  // Check if response is significantly longer (might indicate added content)
  const originalLength = originalContent.length;
  const responseLength = openAIResponse.length;
  const lengthRatio = responseLength / originalLength;
  
  if (lengthRatio > 1.5) {
    warnings.push('Response is significantly longer than original content');
    score -= 20;
  }
  
  // Check for common medical fact patterns that shouldn't be added
  const prohibitedAdditions = [
    /according to (recent )?studies/i,
    /research shows/i,
    /evidence suggests/i,
    /clinical trials (have )?demonstrated/i,
  ];
  
  for (const pattern of prohibitedAdditions) {
    if (pattern.test(openAIResponse) && !pattern.test(originalContent)) {
      warnings.push(`Added prohibited phrase: ${pattern.source}`);
      score -= 30;
    }
  }
  
  // Check if key medical terms from original are preserved
  const medicalTerms = originalContent.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g) || [];
  const uniqueTerms = [...new Set(medicalTerms)];
  
  let preservedTerms = 0;
  for (const term of uniqueTerms) {
    if (openAIResponse.includes(term)) {
      preservedTerms++;
    }
  }
  
  const preservationRate = uniqueTerms.length > 0 ? preservedTerms / uniqueTerms.length : 1;
  
  if (preservationRate < 0.7) {
    warnings.push('Many medical terms from original content are missing');
    score -= 25;
  }
  
  const isValid = score >= 70 && warnings.length === 0;
  
  console.log('[OPENAI INTEGRATION] Validation result:', {
    isValid,
    score,
    warnings: warnings.length,
  });
  
  return {
    isValid,
    warnings,
    score,
  };
}
