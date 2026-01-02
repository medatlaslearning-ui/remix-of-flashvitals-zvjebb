
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
  
  try {
    // Validate inputs
    if (params.medicalContent.length < 10) {
      console.log('[OPENAI INTEGRATION] Medical content too short - using fallback');
      return {
        conversationalText: params.medicalContent,
        duration_ms: 0,
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'Medical content too short',
      };
    }
    
    if (params.userQuery.length < 3) {
      console.log('[OPENAI INTEGRATION] User query too short - using fallback');
      return {
        conversationalText: params.medicalContent,
        duration_ms: 0,
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'User query too short',
      };
    }
    
    // Call OpenAI edge function
    const startTime = performance.now();
    
    console.log('[OPENAI INTEGRATION] Calling Edge Function: generate-conversational-response');
    
    const { data, error } = await supabase.functions.invoke('generate-conversational-response', {
      body: {
        medicalContent: params.medicalContent,
        userQuery: params.userQuery,
        temperature: params.temperature ?? 0.3,
        max_tokens: params.max_tokens ?? 1500,
      },
    });
    
    if (error) {
      console.error('[OPENAI INTEGRATION] Edge function error:', JSON.stringify(error, null, 2));
      console.log('[OPENAI INTEGRATION] Falling back to original content');
      return {
        conversationalText: params.medicalContent,
        duration_ms: Math.round(performance.now() - startTime),
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: `Edge function error: ${error.message || JSON.stringify(error)}`,
      };
    }
    
    if (!data) {
      console.error('[OPENAI INTEGRATION] No data returned from Edge Function');
      console.log('[OPENAI INTEGRATION] Falling back to original content');
      return {
        conversationalText: params.medicalContent,
        duration_ms: Math.round(performance.now() - startTime),
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'No data returned from Edge Function',
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
      console.log('[OPENAI INTEGRATION] Falling back to original content');
      return {
        conversationalText: params.medicalContent,
        duration_ms: Math.round(performance.now() - startTime),
        model: 'fallback',
        usedOpenAI: false,
        fallbackReason: 'No conversational text in response',
      };
    }
    
    console.log('[OPENAI INTEGRATION] Success:', {
      model: result.model,
      duration: result.duration_ms,
      tokens: result.tokens?.total,
      textLength: result.conversationalText.length,
    });
    
    return {
      ...result,
      usedOpenAI: true,
    };
  } catch (error) {
    console.error('[OPENAI INTEGRATION] Unexpected error:', error);
    console.error('[OPENAI INTEGRATION] Error details:', JSON.stringify(error, null, 2));
    console.log('[OPENAI INTEGRATION] Falling back to original content');
    
    return {
      conversationalText: params.medicalContent,
      duration_ms: 0,
      model: 'fallback',
      usedOpenAI: false,
      fallbackReason: `Unexpected error: ${String(error)}`,
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
