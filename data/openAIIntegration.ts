
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
  tokens?: {
    prompt: number;
    completion: number;
    total: number;
  };
}

export interface OpenAIValidationResult {
  isValid: boolean;
  score: number;
  warnings: string[];
  fallbackReason?: string;
}

/**
 * Generate conversational response using OpenAI
 */
export async function generateConversationalResponse(
  params: OpenAILanguageGenerationParams
): Promise<OpenAILanguageGenerationResult | null> {
  try {
    console.log('[OpenAI] Generating conversational response...');
    
    // Validate inputs
    if (!params.medicalContent || params.medicalContent.length < 10) {
      console.log('[OpenAI] Content too short, skipping OpenAI');
      return null;
    }

    if (!params.userQuery || params.userQuery.length < 3) {
      console.log('[OpenAI] Query too short, skipping OpenAI');
      return null;
    }

    const { data, error } = await supabase.functions.invoke('generate-conversational-response', {
      body: {
        medicalContent: params.medicalContent,
        userQuery: params.userQuery,
        temperature: params.temperature || 0.3,
        max_tokens: params.max_tokens || 1500,
      },
    });

    if (error) {
      console.error('[OpenAI] Error:', error);
      return null;
    }

    console.log('[OpenAI] ✓ Response generated successfully');
    return data as OpenAILanguageGenerationResult;
  } catch (error) {
    console.error('[OpenAI] Unexpected error:', error);
    return null;
  }
}

/**
 * Validate OpenAI response against original content
 */
export function validateOpenAIResponse(
  originalContent: string,
  openAIResponse: string
): OpenAIValidationResult {
  const warnings: string[] = [];
  let score = 100;

  // Length check - response shouldn't be >1.5x original
  const lengthRatio = openAIResponse.length / originalContent.length;
  if (lengthRatio > 1.5) {
    warnings.push('Response is significantly longer than original content');
    score -= 15;
  }

  // Prohibited phrases check
  const prohibitedPhrases = [
    'according to recent studies',
    'research shows',
    'studies have shown',
    'recent research',
    'new evidence suggests',
  ];

  const prohibitedPattern = new RegExp(prohibitedPhrases.join('|'), 'gi');
  if (prohibitedPattern.test(openAIResponse) && !prohibitedPattern.test(originalContent)) {
    warnings.push('Response contains speculative phrases not in original');
    score -= 20;
  }

  // Medical term preservation check
  // Fixed regex with 'u' flag for proper emoji/unicode handling
  const medicalTermPattern = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/gu;
  const originalTerms = originalContent.match(medicalTermPattern) || [];
  const responseTerms = openAIResponse.match(medicalTermPattern) || [];
  
  const preservedTerms = originalTerms.filter(term => 
    responseTerms.some(rt => rt.toLowerCase() === term.toLowerCase())
  );
  
  const preservationRate = originalTerms.length > 0 
    ? preservedTerms.length / originalTerms.length 
    : 1;

  if (preservationRate < 0.7) {
    warnings.push('Less than 70% of medical terms preserved');
    score -= 25;
  }

  // Semantic icon preservation check
  // Fixed regex with 'u' flag for proper emoji handling
  const semanticIconPattern = /[\u{1F9E0}\u{1F50D}\u{1F48A}\u{1F4CC}\u{26A0}\u{2705}\u{1F512}\u{270D}][\u{FE0F}]?/gu;
  const originalIcons = originalContent.match(semanticIconPattern) || [];
  const responseIcons = openAIResponse.match(semanticIconPattern) || [];
  
  if (originalIcons.length > 0 && responseIcons.length === 0) {
    warnings.push('Semantic icons were removed from response');
    score -= 10;
  }

  const isValid = score >= 70;
  const fallbackReason = !isValid ? `Validation score too low: ${score}%` : undefined;

  return {
    isValid,
    score,
    warnings,
    fallbackReason,
  };
}

/**
 * Extract semantic icons from text
 */
export function extractSemanticIcons(text: string): string[] {
  // Fixed regex with 'u' flag for proper emoji handling
  const iconPattern = /[\u{1F9E0}\u{1F50D}\u{1F48A}\u{1F4CC}\u{26A0}\u{2705}\u{1F512}\u{270D}][\u{FE0F}]?/gu;
  return text.match(iconPattern) || [];
}

/**
 * Count semantic icons in text
 */
export function countSemanticIcons(text: string): number {
  return extractSemanticIcons(text).length;
}

/**
 * Check if text contains semantic icons
 */
export function hasSemanticIcons(text: string): boolean {
  return countSemanticIcons(text) > 0;
}
