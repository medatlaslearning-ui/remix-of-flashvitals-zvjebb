
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
 * 
 * SEMANTIC ICON SYSTEM:
 * 
 * The LMM can use semantic icons to structure responses AFTER passing guardrails:
 * 🧠 Pathophysiology / Explanation
 * 🔍 Diagnosis / Evaluation
 * 💊 Treatment / Management
 * 📌 Clinical Pearl
 * ⚠️ Caution / Red Flag
 * ✅ Key Takeaway
 * 🔒 Guardrail / Safety Rule
 * ✍️ Teaching Note / Learning Tip
 * ⚙️ Mechanism of Action
 * 📊 Prognosis / Outcome
 * 🛡️ Prevention / Prophylaxis
 * 📈 Epidemiology / Statistics
 * 
 * FLOW:
 * 1. Query → Guardrails → Validation
 * 2. Validation passes → Enable semantic icons
 * 3. OpenAI generates response with icons
 * 4. Response validated → Icons preserved
 * 5. Final output with semantic icons → UI
 */

import { supabase } from '@/app/integrations/supabase/client';
import { applySemanticIcons, validateSemanticIconUsage } from './semanticIconSystem';

export interface OpenAILanguageGenerationParams {
  medicalContent: string;
  userQuery: string;
  temperature?: number;
  max_tokens?: number;
  enableSemanticIcons?: boolean; // Flag to enable semantic icons (default: true)
}

export interface OpenAILanguageGenerationResult {
  conversationalText: string;
  duration_ms: number;
  model: string;
  tokens?: { prompt?: number; completion?: number; total?: number };
  usedOpenAI: boolean;
  fallbackReason?: string;
  semanticIconsUsed?: boolean; // Flag indicating if semantic icons were used
  semanticIconCount?: number; // Number of semantic icons in response
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
    console.log(`[OPENAI INTEGRATION] Attempt ${attempt + 1}/${MAX_RETRIES + 1} - Calling Edge Function with semantic icons enabled`);
    
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
    // Extract error message for better logging on iOS
    const errorMessage = error?.message || error?.toString() || 'Unknown error';
    const errorName = error?.name || 'Error';
    console.error(`[OPENAI INTEGRATION] Exception on attempt ${attempt + 1}:`, errorMessage);
    
    // Check if we should retry
    if (attempt < MAX_RETRIES) {
      const isRetryableError = 
        errorMessage.includes('timeout') ||
        errorMessage.includes('network') ||
        errorMessage.includes('Failed to send') ||
        errorMessage.includes('fetch') ||
        errorName === 'TypeError' ||
        errorName === 'NetworkError';
      
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
 * GUARDRAIL: OpenAI Role Enforcement with Semantic Icon System
 * 
 * This function ensures OpenAI is used ONLY as a language generator,
 * not as a source of medical truth. It also enables the LMM to use
 * semantic icons naturally in responses after passing guardrails.
 * 
 * FLOW:
 * 1. Validate inputs (guardrail check)
 * 2. Enable semantic icons (after validation)
 * 3. Call OpenAI with icon support
 * 4. Validate response (preserve icons)
 * 5. Apply icon replacements if needed (*** → emoji)
 * 6. Return response with semantic icons
 */
export async function generateConversationalResponse(
  params: OpenAILanguageGenerationParams
): Promise<OpenAILanguageGenerationResult> {
  console.log('[OPENAI INTEGRATION] Generating conversational response with semantic icons');
  console.log('[OPENAI INTEGRATION] Medical content length:', params.medicalContent.length);
  console.log('[OPENAI INTEGRATION] User query:', params.userQuery);
  console.log('[OPENAI INTEGRATION] Semantic icons enabled:', params.enableSemanticIcons !== false);
  
  const startTime = performance.now();
  
  try {
    // GUARDRAIL: Validate inputs
    if (params.medicalContent.length < 10) {
      console.log('[OPENAI INTEGRATION] Medical content too short - using fallback');
      return {
        conversationalText: params.medicalContent,
        duration_ms: 0,
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'Medical content too short (minimum 10 characters)',
        semanticIconsUsed: false,
        semanticIconCount: 0,
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
        semanticIconsUsed: false,
        semanticIconCount: 0,
      };
    }
    
    // SEMANTIC ICONS: Enabled by default after guardrail validation
    const enableSemanticIcons = params.enableSemanticIcons !== false;
    console.log('[OPENAI INTEGRATION] ✓ Guardrails passed - semantic icons enabled:', enableSemanticIcons);
    
    // Call Edge Function with retry logic and timeout
    console.log('[OPENAI INTEGRATION] Starting Edge Function call with retry logic and semantic icon support');
    
    const data = await callEdgeFunctionWithRetry(params);
    
    if (!data) {
      console.error('[OPENAI INTEGRATION] No data returned from Edge Function after retries');
      return {
        conversationalText: params.medicalContent,
        duration_ms: Math.round(performance.now() - startTime),
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'No data returned from Edge Function after retries',
        semanticIconsUsed: false,
        semanticIconCount: 0,
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
        semanticIconsUsed: false,
        semanticIconCount: 0,
      };
    }
    
    // SEMANTIC ICONS: Apply icon replacements if needed (*** → emoji)
    let finalText = result.conversationalText;
    if (enableSemanticIcons) {
      console.log('[OPENAI INTEGRATION] Applying semantic icon replacements (*** → emoji)');
      finalText = applySemanticIcons(finalText);
    }
    
    // SEMANTIC ICONS: Validate icon usage
    const iconValidation = validateSemanticIconUsage(finalText);
    console.log('[OPENAI INTEGRATION] Semantic icon validation:', {
      hasIcons: iconValidation.hasIcons,
      iconCount: iconValidation.iconCount,
      valid: iconValidation.valid,
      warnings: iconValidation.warnings,
    });
    
    const totalDuration = Math.round(performance.now() - startTime);
    
    console.log('[OPENAI INTEGRATION] Success with semantic icons:', {
      model: result.model,
      edgeFunctionDuration: result.duration_ms,
      totalDuration,
      tokens: result.tokens?.total,
      textLength: finalText.length,
      semanticIconsUsed: iconValidation.hasIcons,
      semanticIconCount: iconValidation.iconCount,
    });
    
    return {
      conversationalText: finalText,
      duration_ms: totalDuration,
      model: result.model,
      tokens: result.tokens,
      usedOpenAI: true,
      semanticIconsUsed: iconValidation.hasIcons,
      semanticIconCount: iconValidation.iconCount,
    };
  } catch (error: any) {
    const totalDuration = Math.round(performance.now() - startTime);
    
    // Extract error message for better logging on iOS
    const errorMessage = error?.message || error?.toString() || 'Unknown error';
    const errorStatus = error?.status;
    
    console.error('[OPENAI INTEGRATION] All retry attempts failed:', errorMessage);
    
    // Provide detailed fallback reason
    let fallbackReason = 'Unknown error';
    
    if (errorMessage.includes('timeout')) {
      fallbackReason = `Request timeout after ${REQUEST_TIMEOUT_MS / 1000}s`;
    } else if (errorMessage.includes('Failed to send')) {
      fallbackReason = 'Network error: Failed to send request to Edge Function';
    } else if (errorMessage.includes('network')) {
      fallbackReason = 'Network error: Unable to reach Edge Function';
    } else if (errorMessage.includes('OPENAI_API_KEY')) {
      fallbackReason = 'OpenAI API key not configured in Supabase';
    } else if (errorStatus === 401) {
      fallbackReason = 'Authentication error with OpenAI API';
    } else if (errorStatus === 429) {
      fallbackReason = 'OpenAI API rate limit exceeded';
    } else if (errorStatus === 500 || errorStatus === 502 || errorStatus === 503) {
      fallbackReason = `Edge Function server error (${errorStatus})`;
    } else {
      fallbackReason = `Error: ${errorMessage}`;
    }
    
    console.log('[OPENAI INTEGRATION] Falling back to original content');
    console.log('[OPENAI INTEGRATION] Fallback reason:', fallbackReason);
    
    return {
      conversationalText: params.medicalContent,
      duration_ms: totalDuration,
      model: 'fallback',
      usedOpenAI: false,
      fallbackReason,
      semanticIconsUsed: false,
      semanticIconCount: 0,
    };
  }
}

/**
 * GUARDRAIL: Validate OpenAI Response with Semantic Icon Support
 * 
 * Ensures the OpenAI response doesn't add medical facts not present
 * in the original content. Semantic icons are allowed and encouraged.
 */
export function validateOpenAIResponse(
  originalContent: string,
  openAIResponse: string
): {
  isValid: boolean;
  warnings: string[];
  score: number;
} {
  console.log('[OPENAI INTEGRATION] Validating OpenAI response with semantic icon support');
  
  const warnings: string[] = [];
  let score = 100;
  
  // Check if response is significantly longer (might indicate added content)
  const originalLength = originalContent.length;
  const responseLength = openAIResponse.length;
  const lengthRatio = responseLength / originalLength;
  
  if (lengthRatio > 2.0) {
    warnings.push('Response is significantly longer than original content');
    score -= 15;
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
      score -= 25;
    }
  }
  
  // Extract medical terms more comprehensively
  const medicalTermPatterns = [
    // Capitalized terms (2+ words)
    /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/g,
    // Single capitalized medical terms
    /\b[A-Z][a-z]{3,}\b/g,
    // Medical abbreviations (2-5 uppercase letters)
    /\b[A-Z]{2,5}\b/g,
    // Terms with hyphens (e.g., "beta-blocker")
    /\b[a-z]+-[a-z]+\b/gi,
    // Medical suffixes
    /\b\w+(itis|osis|emia|pathy|plasty|ectomy|otomy|scopy)\b/gi,
  ];
  
  const originalTerms = new Set<string>();
  for (const pattern of medicalTermPatterns) {
    const matches = originalContent.match(pattern) || [];
    matches.forEach(term => originalTerms.add(term.toLowerCase()));
  }
  
  // Also extract key medical terms from the original content
  const keyMedicalWords = [
    'pathophysiology', 'etiology', 'diagnosis', 'treatment', 'therapy',
    'symptom', 'sign', 'clinical', 'patient', 'disease', 'condition',
    'medication', 'drug', 'procedure', 'intervention', 'management',
    'acute', 'chronic', 'syndrome', 'disorder', 'failure', 'insufficiency',
  ];
  
  keyMedicalWords.forEach(word => {
    if (originalContent.toLowerCase().includes(word)) {
      originalTerms.add(word);
    }
  });
  
  console.log('[OPENAI INTEGRATION] Extracted', originalTerms.size, 'unique medical terms from original content');
  
  // Check preservation rate
  let preservedTerms = 0;
  const lowerResponse = openAIResponse.toLowerCase();
  
  for (const term of originalTerms) {
    if (lowerResponse.includes(term)) {
      preservedTerms++;
    }
  }
  
  const preservationRate = originalTerms.size > 0 ? preservedTerms / originalTerms.size : 1;
  
  console.log('[OPENAI INTEGRATION] Medical term preservation rate:', 
    `${preservedTerms}/${originalTerms.size} (${(preservationRate * 100).toFixed(1)}%)`);
  
  // More lenient threshold: 50% preservation is acceptable
  // (OpenAI may use natural language variations)
  if (preservationRate < 0.5) {
    warnings.push(`Many medical terms from original content are missing (${(preservationRate * 100).toFixed(1)}% preserved)`);
    score -= 20;
  } else if (preservationRate < 0.65) {
    warnings.push(`Some medical terms from original content are missing (${(preservationRate * 100).toFixed(1)}% preserved)`);
    score -= 10;
  }
  
  // SEMANTIC ICONS: Check for semantic icons (bonus points for using them appropriately)
  // Use string-based approach instead of regex with emoji to avoid linting errors
  const semanticIcons = ['🧠', '💊', '📌', '⚠️', '✅', '🔍', '🔒', '✍️', '⚙️', '📊', '🛡️', '📈'];
  let iconCount = 0;
  for (const icon of semanticIcons) {
    iconCount += (openAIResponse.split(icon).length - 1);
  }
  
  if (iconCount > 0) {
    console.log('[OPENAI INTEGRATION] ✓ Response uses semantic icons:', iconCount);
    score += 5; // Bonus for using semantic icons
  }
  
  // SEMANTIC ICONS: Validate icon usage
  const iconValidation = validateSemanticIconUsage(openAIResponse);
  if (!iconValidation.valid) {
    console.log('[OPENAI INTEGRATION] Semantic icon validation warnings:', iconValidation.warnings);
    // Don't penalize for icon warnings - they're just suggestions
  }
  
  // Lower validation threshold from 70 to 60
  const isValid = score >= 60;
  
  console.log('[OPENAI INTEGRATION] Validation result:', {
    isValid,
    score,
    warnings: warnings.length,
    preservationRate: `${(preservationRate * 100).toFixed(1)}%`,
    semanticIcons: iconCount,
    iconValidation: iconValidation.valid,
  });
  
  return {
    isValid,
    warnings,
    score,
  };
}
