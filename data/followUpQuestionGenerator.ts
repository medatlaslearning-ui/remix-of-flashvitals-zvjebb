
/**
 * FOLLOW-UP QUESTION GENERATOR - LMM Integration
 * 
 * This module generates contextual follow-up questions through the LMM pipeline
 * AFTER the synthesizer and guardrails have processed the initial response.
 * 
 * ARCHITECTURE FLOW:
 * User Query → Synthesizer → Guardrails → OpenAI (Main Response) → 
 * Follow-Up Generator → OpenAI (Follow-Up Questions) → Guardrails → User
 * 
 * KEY PRINCIPLES:
 * - Follow-up questions are generated AFTER the main response
 * - Questions flow through the same guardrails as main responses
 * - Questions are contextual and based on the synthesized response
 * - Questions help the LMM learn individual learner patterns
 * - Questions are stored in Supabase for personalized learning
 * 
 * GUARDRAILS:
 * - Questions must be medically relevant
 * - Questions must be based on the response content
 * - Questions must not add new medical facts
 * - Questions must be appropriate for the medical system
 */

import { supabase } from '@/app/integrations/supabase/client';
import { FollowUpQuestion } from './perpetualLearningEngine';

export interface FollowUpQuestionGenerationParams {
  userQuery: string;
  botResponse: string;
  medicalSystem: string;
  responseMetadata?: {
    quality: number;
    sources: {
      merck: boolean;
      guidelines: boolean;
      flashcards: boolean;
    };
  };
}

export interface FollowUpQuestionGenerationResult {
  questions: FollowUpQuestion[];
  usedLMM: boolean;
  generationTime: number;
  fallbackReason?: string;
}

// Configuration
const MAX_FOLLOW_UP_QUESTIONS = 3;
const REQUEST_TIMEOUT_MS = 15000; // 15 seconds
const FALLBACK_TO_RULE_BASED = true; // Enable fallback to rule-based generation

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
 * Generate follow-up questions through LMM pipeline
 * 
 * This function calls OpenAI to generate contextual follow-up questions
 * based on the user's query and the bot's response. The questions are
 * designed to deepen understanding and explore related topics.
 */
export async function generateFollowUpQuestionsWithLMM(
  params: FollowUpQuestionGenerationParams
): Promise<FollowUpQuestionGenerationResult> {
  console.log('[FOLLOW-UP GENERATOR] Generating follow-up questions through LMM pipeline');
  console.log('[FOLLOW-UP GENERATOR] User query:', params.userQuery);
  console.log('[FOLLOW-UP GENERATOR] Medical system:', params.medicalSystem);
  
  const startTime = performance.now();
  
  try {
    // GUARDRAIL: Validate inputs
    if (params.userQuery.length < 3) {
      console.log('[FOLLOW-UP GENERATOR] User query too short - using fallback');
      return generateFallbackQuestions(params, startTime, 'User query too short');
    }
    
    if (params.botResponse.length < 50) {
      console.log('[FOLLOW-UP GENERATOR] Bot response too short - using fallback');
      return generateFallbackQuestions(params, startTime, 'Bot response too short');
    }
    
    // Call Edge Function to generate follow-up questions
    console.log('[FOLLOW-UP GENERATOR] Calling Edge Function for LMM generation');
    
    const edgeFunctionCall = supabase.functions.invoke('generate-follow-up-questions', {
      body: {
        userQuery: params.userQuery,
        botResponse: params.botResponse,
        medicalSystem: params.medicalSystem,
        maxQuestions: MAX_FOLLOW_UP_QUESTIONS,
      },
    });
    
    // Wrap with timeout
    const { data, error } = await withTimeout(edgeFunctionCall, REQUEST_TIMEOUT_MS);
    
    if (error) {
      console.error('[FOLLOW-UP GENERATOR] Edge function error:', error);
      
      if (FALLBACK_TO_RULE_BASED) {
        console.log('[FOLLOW-UP GENERATOR] Falling back to rule-based generation');
        return generateFallbackQuestions(params, startTime, `Edge function error: ${error.message}`);
      }
      
      throw error;
    }
    
    if (!data || !data.questions || !Array.isArray(data.questions)) {
      console.error('[FOLLOW-UP GENERATOR] Invalid response from Edge Function');
      
      if (FALLBACK_TO_RULE_BASED) {
        console.log('[FOLLOW-UP GENERATOR] Falling back to rule-based generation');
        return generateFallbackQuestions(params, startTime, 'Invalid Edge Function response');
      }
      
      return {
        questions: [],
        usedLMM: false,
        generationTime: Math.round(performance.now() - startTime),
        fallbackReason: 'Invalid Edge Function response',
      };
    }
    
    // Parse and validate questions
    const questions: FollowUpQuestion[] = data.questions.map((q: any, index: number) => ({
      id: `followup_${Date.now()}_${index}`,
      question: q.question || q.text || '',
      category: q.category || 'related',
      relevance: q.relevance || 80,
    })).filter((q: FollowUpQuestion) => q.question.length > 10);
    
    const generationTime = Math.round(performance.now() - startTime);
    
    console.log('[FOLLOW-UP GENERATOR] ✓ LMM generation successful:', {
      questionCount: questions.length,
      generationTime,
      model: data.model,
    });
    
    return {
      questions: questions.slice(0, MAX_FOLLOW_UP_QUESTIONS),
      usedLMM: true,
      generationTime,
    };
  } catch (error: any) {
    // Extract error message for better logging on iOS
    const errorMessage = error?.message || error?.toString() || 'Unknown error';
    console.error('[FOLLOW-UP GENERATOR] Error generating follow-up questions:', errorMessage);
    
    if (FALLBACK_TO_RULE_BASED) {
      console.log('[FOLLOW-UP GENERATOR] Falling back to rule-based generation');
      return generateFallbackQuestions(
        params,
        startTime,
        errorMessage
      );
    }
    
    return {
      questions: [],
      usedLMM: false,
      generationTime: Math.round(performance.now() - startTime),
      fallbackReason: errorMessage,
    };
  }
}

/**
 * Generate fallback follow-up questions using rule-based logic
 * 
 * This function provides a fallback mechanism when the LMM is unavailable
 * or encounters an error. It uses pattern matching and medical system
 * knowledge to generate relevant follow-up questions.
 */
function generateFallbackQuestions(
  params: FollowUpQuestionGenerationParams,
  startTime: number,
  fallbackReason: string
): FollowUpQuestionGenerationResult {
  console.log('[FOLLOW-UP GENERATOR] Using rule-based fallback generation');
  
  const questions: FollowUpQuestion[] = [];
  const queryLower = params.userQuery.toLowerCase();
  const responseLower = params.botResponse.toLowerCase();
  
  // Analyze query intent
  const isPathophysiology = /pathophysiology|mechanism|cause|etiology/i.test(params.userQuery);
  const isClinical = /symptom|sign|present|clinical|manifestation/i.test(params.userQuery);
  const isDiagnostic = /diagnos|test|workup|evaluation|investigation/i.test(params.userQuery);
  const isTreatment = /treat|therap|manage|intervention/i.test(params.userQuery);
  
  // Extract disease/condition from query
  const diseaseMatch = extractDisease(params.userQuery);
  
  // Generate complementary questions based on what wasn't asked
  if (!isPathophysiology && diseaseMatch) {
    questions.push({
      id: `followup_${Date.now()}_1`,
      question: `What is the pathophysiology of ${diseaseMatch}?`,
      category: 'pathophysiology',
      relevance: 90,
    });
  }
  
  if (!isClinical && diseaseMatch) {
    questions.push({
      id: `followup_${Date.now()}_2`,
      question: `What are the clinical findings of ${diseaseMatch}?`,
      category: 'clinical',
      relevance: 85,
    });
  }
  
  if (!isDiagnostic && diseaseMatch) {
    questions.push({
      id: `followup_${Date.now()}_3`,
      question: `How do you diagnose ${diseaseMatch}?`,
      category: 'diagnostic',
      relevance: 85,
    });
  }
  
  if (!isTreatment && diseaseMatch) {
    questions.push({
      id: `followup_${Date.now()}_4`,
      question: `What is the treatment for ${diseaseMatch}?`,
      category: 'treatment',
      relevance: 90,
    });
  }
  
  // Add system-specific questions
  const systemQuestions = getSystemSpecificQuestions(params.medicalSystem, diseaseMatch);
  questions.push(...systemQuestions);
  
  // Sort by relevance and return top questions
  const sortedQuestions = questions
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, MAX_FOLLOW_UP_QUESTIONS);
  
  const generationTime = Math.round(performance.now() - startTime);
  
  console.log('[FOLLOW-UP GENERATOR] ✓ Fallback generation complete:', {
    questionCount: sortedQuestions.length,
    generationTime,
    fallbackReason,
  });
  
  return {
    questions: sortedQuestions,
    usedLMM: false,
    generationTime,
    fallbackReason,
  };
}

/**
 * Extract disease/condition name from query
 */
function extractDisease(query: string): string {
  // Remove common question words
  let cleaned = query
    .replace(/what is|what are|how do you|tell me about|explain|describe/gi, '')
    .replace(/pathophysiology|clinical findings|diagnosis|treatment|management|of|the/gi, '')
    .trim();
  
  // Capitalize first letter of each word
  return cleaned
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Get system-specific follow-up questions
 */
function getSystemSpecificQuestions(
  medicalSystem: string,
  disease: string
): FollowUpQuestion[] {
  const questions: FollowUpQuestion[] = [];
  const systemLower = medicalSystem.toLowerCase();
  const diseaseLower = disease.toLowerCase();
  
  // System-specific question templates
  const systemQuestions: { [key: string]: { [key: string]: string[] } } = {
    cardiology: {
      'atrial fibrillation': [
        'What are the stroke risk stratification tools for atrial fibrillation?',
        'How do you choose between rate control and rhythm control in AFib?',
      ],
      'heart failure': [
        'What are the stages of heart failure according to ACC/AHA guidelines?',
        'How do you differentiate HFrEF from HFpEF?',
      ],
      'myocardial infarction': [
        'What are the ECG changes in acute myocardial infarction?',
        'What is the role of cardiac biomarkers in MI diagnosis?',
      ],
    },
    pulmonary: {
      'asthma': [
        'What is the stepwise approach to asthma management?',
        'How do you differentiate asthma from COPD?',
      ],
      'copd': [
        'What are the GOLD criteria for COPD classification?',
        'What is the role of pulmonary rehabilitation in COPD?',
      ],
      'pneumonia': [
        'What are the CURB-65 criteria for pneumonia severity?',
        'How do you choose empiric antibiotics for community-acquired pneumonia?',
      ],
    },
    neurology: {
      'stroke': [
        'What is the time window for thrombolytic therapy in ischemic stroke?',
        'How do you differentiate ischemic from hemorrhagic stroke?',
      ],
      'seizure': [
        'What are the first-line medications for different seizure types?',
        'When should you start antiepileptic therapy after a first seizure?',
      ],
    },
    hematology: {
      'anemia': [
        'How do you approach the workup of microcytic anemia?',
        'What are the causes of macrocytic anemia?',
      ],
      'thrombocytopenia': [
        'What is the differential diagnosis of thrombocytopenia?',
        'When should you transfuse platelets?',
      ],
    },
    endocrine: {
      'diabetes': [
        'What are the target HbA1c goals for different patient populations?',
        'How do you choose between different classes of diabetes medications?',
      ],
      'thyroid': [
        'How do you interpret thyroid function tests?',
        'What is the approach to subclinical hypothyroidism?',
      ],
    },
    renal: {
      'aki': [
        'What are the KDIGO criteria for acute kidney injury?',
        'How do you differentiate prerenal, intrinsic, and postrenal AKI?',
      ],
      'ckd': [
        'What are the stages of chronic kidney disease?',
        'When should you refer a CKD patient to nephrology?',
      ],
    },
    'infectious disease': {
      'sepsis': [
        'What are the qSOFA criteria for sepsis screening?',
        'What is the Surviving Sepsis Campaign bundle?',
      ],
      'meningitis': [
        'What is the empiric antibiotic regimen for bacterial meningitis?',
        'When should you give dexamethasone in meningitis?',
      ],
    },
  };
  
  // Find matching questions
  if (systemQuestions[systemLower] && systemQuestions[systemLower][diseaseLower]) {
    const matchedQuestions = systemQuestions[systemLower][diseaseLower];
    matchedQuestions.forEach((q, index) => {
      questions.push({
        id: `followup_${Date.now()}_system_${index}`,
        question: q,
        category: 'related',
        relevance: 80,
      });
    });
  }
  
  return questions;
}
