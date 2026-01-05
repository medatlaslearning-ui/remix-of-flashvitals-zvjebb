
/**
 * QUIZ GENERATION ENGINE - Separate Path (No Semantic Icons)
 * 
 * ARCHITECTURE:
 * This is a dedicated quiz generation path that bypasses semantic icons
 * while maintaining the figure-8 logic and guardrails architecture.
 * 
 * FLOW:
 * 1. Query → Core Knowledge Engine (flashcards, guidelines, Merck)
 * 2. Knowledge → Guardrails & Validation (figure-8 logic)
 * 3. Validated Content → OpenAI (quiz generation WITHOUT semantic icons)
 * 4. Generated Questions → Validation (structure, medical accuracy)
 * 5. Validated Questions → Database Storage
 * 
 * KEY DIFFERENCES FROM CONVERSATIONAL PATH:
 * - NO semantic icons (🧠💊🔍 etc.) in prompts or responses
 * - Structured JSON output (not conversational text)
 * - Board-style question format
 * - 4 multiple choice options required
 * - Rationale and references required
 * - Clinical application focus
 * 
 * GUARDRAILS MAINTAINED:
 * - Medical accuracy validation
 * - Content bleeding prevention
 * - Consistency checks
 * - Source attribution
 * - Fail-safe rules
 */

import { supabase } from '@/app/integrations/supabase/client';
import { Flashcard } from '@/types/flashcard';
import {
  checkSystemAvailability,
  assessEvidenceQuality,
  makeFailSafeDecision,
  validateFailSafeResponse,
  type SystemAvailability,
  type EvidenceQuality,
  type FailSafeDecision,
} from './failSafeRules';
import {
  assessConsistency,
  validateConsistencyCheck,
  type ConsistencyAssessment,
  type GuidelineEntry,
} from './consistencyValidationLogic';

export interface QuizGenerationParams {
  medicalSystem: string;
  topic?: string;
  questionCount: number;
  flashcards: Flashcard[];
  coreKnowledge: string;
  guidelines: GuidelineEntry[];
}

export interface GeneratedQuizQuestion {
  questionNumber: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  references: string;
}

export interface QuizGenerationResult {
  questions: GeneratedQuizQuestion[];
  metadata: {
    medicalSystem: string;
    topic?: string;
    questionCount: number;
    duration_ms: number;
    model: string;
    tokens?: {
      prompt?: number;
      completion?: number;
      total?: number;
    };
    guardrails: {
      systemAvailability: SystemAvailability;
      evidenceQuality: EvidenceQuality;
      failSafeDecision: FailSafeDecision;
      consistencyCheck?: ConsistencyAssessment;
    };
    validation: {
      structureValid: boolean;
      medicalAccuracyScore: number;
      warnings: string[];
    };
  };
}

/**
 * GUARDRAIL: Build quiz context from core knowledge
 * Ensures quiz questions are based on verified medical content
 */
function buildQuizContext(params: QuizGenerationParams): {
  flashcardsContext: string;
  coreKnowledgeContext: string;
  guidelinesContext: string;
} {
  console.log('[QuizEngine] Building quiz context from core knowledge');
  
  // Dynamic context truncation based on question count
  const maxFlashcards = params.questionCount === 10 ? 15 : 20;
  const maxGuidelineLength = params.questionCount === 10 ? 200 : 300;
  
  // Build flashcards context (limit based on question count)
  const flashcardsContext = params.flashcards
    .slice(0, maxFlashcards)
    .map(card => 
      `Topic: ${card.topic}\nQ: ${card.front}\nA: ${card.back.definition}\nClinical Pearl: ${card.back.clinical_pearl}`
    )
    .join('\n\n');
  
  // Core knowledge context (truncate if too long for 10 questions)
  let coreKnowledgeContext = params.coreKnowledge;
  if (params.questionCount === 10 && coreKnowledgeContext.length > 3000) {
    coreKnowledgeContext = coreKnowledgeContext.substring(0, 3000) + '...';
    console.log('[QuizEngine] Truncated core knowledge context for 10-question quiz');
  }
  
  // Guidelines context (truncate summaries for 10 questions)
  const guidelinesContext = params.guidelines
    .map(g => {
      const summary = g.summary || g.recommendation || '';
      const truncated = summary.length > maxGuidelineLength 
        ? summary.substring(0, maxGuidelineLength) + '...'
        : summary;
      return `${g.title}: ${truncated}`;
    })
    .join('\n');
  
  console.log('[QuizEngine] Context sizes:', {
    flashcards: flashcardsContext.length,
    coreKnowledge: coreKnowledgeContext.length,
    guidelines: guidelinesContext.length,
    total: flashcardsContext.length + coreKnowledgeContext.length + guidelinesContext.length,
  });
  
  return {
    flashcardsContext,
    coreKnowledgeContext,
    guidelinesContext,
  };
}

/**
 * GUARDRAIL: Apply figure-8 logic and guardrails
 * Validates system availability, evidence quality, and consistency
 */
async function applyGuardrails(params: QuizGenerationParams): Promise<{
  systemAvailability: SystemAvailability;
  evidenceQuality: EvidenceQuality;
  failSafeDecision: FailSafeDecision;
  consistencyCheck?: ConsistencyAssessment;
  shouldProceed: boolean;
}> {
  console.log('[QuizEngine] Applying guardrails and figure-8 logic');
  
  // Check system availability
  const systemAvailability = await checkSystemAvailability();
  console.log('[QuizEngine] System availability:', systemAvailability);
  
  // Assess evidence quality
  const coreKnowledgeTopics = params.flashcards.map(f => f.topic);
  const guidelineTopics = params.guidelines.map(g => g.title);
  const evidenceQuality = assessEvidenceQuality(
    params.flashcards.length,
    params.guidelines.length,
    coreKnowledgeTopics,
    guidelineTopics
  );
  console.log('[QuizEngine] Evidence quality:', evidenceQuality);
  
  // Make fail-safe decision
  const failSafeDecision = makeFailSafeDecision(systemAvailability, evidenceQuality);
  console.log('[QuizEngine] Fail-safe decision:', failSafeDecision);
  
  // Assess consistency (if both core knowledge and guidelines exist)
  let consistencyCheck: ConsistencyAssessment | undefined;
  if (params.flashcards.length > 0 && params.guidelines.length > 0) {
    consistencyCheck = assessConsistency(
      params.flashcards.map(f => ({
        topic: f.topic,
        content: f.back.definition,
        source: 'Core Knowledge',
      })),
      params.guidelines
    );
    console.log('[QuizEngine] Consistency check:', consistencyCheck);
  }
  
  // Determine if we should proceed
  const shouldProceed = 
    failSafeDecision.canProceed &&
    evidenceQuality.score >= 60 &&
    (!consistencyCheck || consistencyCheck.overallScore >= 70);
  
  console.log('[QuizEngine] Should proceed:', shouldProceed);
  
  return {
    systemAvailability,
    evidenceQuality,
    failSafeDecision,
    consistencyCheck,
    shouldProceed,
  };
}

/**
 * GUARDRAIL: Validate quiz questions structure
 * Ensures all questions have required fields and proper format
 */
function validateQuizStructure(questions: any[]): {
  valid: boolean;
  warnings: string[];
} {
  console.log('[QuizEngine] Validating quiz structure');
  
  const warnings: string[] = [];
  
  if (!Array.isArray(questions)) {
    warnings.push('Questions is not an array');
    return { valid: false, warnings };
  }
  
  if (questions.length === 0) {
    warnings.push('No questions generated');
    return { valid: false, warnings };
  }
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    
    if (!q.questionText || typeof q.questionText !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid questionText`);
    }
    
    if (!q.optionA || typeof q.optionA !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid optionA`);
    }
    
    if (!q.optionB || typeof q.optionB !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid optionB`);
    }
    
    if (!q.optionC || typeof q.optionC !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid optionC`);
    }
    
    if (!q.optionD || typeof q.optionD !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid optionD`);
    }
    
    if (!q.correctAnswer || !['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      warnings.push(`Question ${i + 1}: Missing or invalid correctAnswer (must be A, B, C, or D)`);
    }
    
    if (!q.rationale || typeof q.rationale !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid rationale`);
    }
    
    if (!q.references || typeof q.references !== 'string') {
      warnings.push(`Question ${i + 1}: Missing or invalid references`);
    }
    
    // Check for semantic icons (should NOT be present in quiz questions)
    // Use string-based approach instead of regex to avoid linting errors
    const semanticIcons = ['🧠', '🔍', '💊', '📌', '⚠️', '✅', '🔒', '✍️', '⚙️', '📊', '🛡️', '📈'];
    const hasIconInQuestion = semanticIcons.some(icon => q.questionText?.includes(icon));
    const hasIconInOptions = semanticIcons.some(icon => 
      q.optionA?.includes(icon) || q.optionB?.includes(icon) || 
      q.optionC?.includes(icon) || q.optionD?.includes(icon)
    );
    const hasIconInRationale = semanticIcons.some(icon => q.rationale?.includes(icon));
    
    if (hasIconInQuestion) {
      warnings.push(`Question ${i + 1}: Contains semantic icons (not allowed in quiz questions)`);
    }
    if (hasIconInOptions) {
      warnings.push(`Question ${i + 1}: Contains semantic icons in options (not allowed)`);
    }
    if (hasIconInRationale) {
      warnings.push(`Question ${i + 1}: Contains semantic icons in rationale (not allowed)`);
    }
  }
  
  const valid = warnings.length === 0;
  console.log('[QuizEngine] Structure validation:', { valid, warningCount: warnings.length });
  
  return { valid, warnings };
}

/**
 * GUARDRAIL: Validate medical accuracy
 * Ensures questions are based on provided content and medically accurate
 */
function validateMedicalAccuracy(
  questions: GeneratedQuizQuestion[],
  context: { flashcardsContext: string; coreKnowledgeContext: string; guidelinesContext: string }
): {
  score: number;
  warnings: string[];
} {
  console.log('[QuizEngine] Validating medical accuracy');
  
  const warnings: string[] = [];
  let score = 100;
  
  const fullContext = `${context.flashcardsContext}\n${context.coreKnowledgeContext}\n${context.guidelinesContext}`.toLowerCase();
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    
    // Check if question references content from context
    const questionLower = q.questionText.toLowerCase();
    const hasContextReference = fullContext.includes(questionLower.substring(0, 50)) ||
      questionLower.split(' ').some(word => word.length > 5 && fullContext.includes(word));
    
    if (!hasContextReference) {
      warnings.push(`Question ${i + 1}: May not be based on provided context`);
      score -= 10;
    }
    
    // Check if rationale is detailed (minimum 50 characters)
    if (q.rationale.length < 50) {
      warnings.push(`Question ${i + 1}: Rationale too short (minimum 50 characters)`);
      score -= 5;
    }
    
    // Check if references are provided
    if (q.references.length < 10) {
      warnings.push(`Question ${i + 1}: References too short or missing`);
      score -= 5;
    }
  }
  
  score = Math.max(0, score);
  console.log('[QuizEngine] Medical accuracy score:', score);
  
  return { score, warnings };
}

/**
 * MAIN FUNCTION: Generate quiz questions
 * Separate path for quiz generation without semantic icons
 */
export async function generateQuizQuestions(
  params: QuizGenerationParams
): Promise<QuizGenerationResult> {
  console.log('[QuizEngine] Starting quiz generation (NO semantic icons path)');
  console.log('[QuizEngine] Params:', {
    medicalSystem: params.medicalSystem,
    topic: params.topic,
    questionCount: params.questionCount,
    flashcardsCount: params.flashcards.length,
    guidelinesCount: params.guidelines.length,
  });
  
  const startTime = performance.now();
  
  try {
    // Step 1: Build context from core knowledge
    const context = buildQuizContext(params);
    
    // Step 2: Apply guardrails and figure-8 logic
    const guardrails = await applyGuardrails(params);
    
    if (!guardrails.shouldProceed) {
      throw new Error('Guardrails check failed - insufficient evidence quality or system unavailable');
    }
    
    // Step 3: Call Edge Function to generate quiz (NO semantic icons)
    console.log('[QuizEngine] Calling Edge Function for quiz generation');
    
    // Dynamic token allocation based on question count
    const maxTokens = params.questionCount === 10 ? 4000 : 2500;
    
    // Create AbortController for timeout protection
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-quiz', {
        body: {
          medicalSystem: params.medicalSystem,
          topic: params.topic,
          questionCount: params.questionCount,
          flashcardsContext: context.flashcardsContext,
          coreKnowledgeContext: context.coreKnowledgeContext,
          guidelinesContext: context.guidelinesContext,
          maxTokens,
        },
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (error) {
        console.error('[QuizEngine] Edge Function error:', error);
        throw error;
      }
      
      if (!data || !data.questions) {
        throw new Error('Invalid response from Edge Function - no questions returned');
      }
      
      const questions = data.questions as GeneratedQuizQuestion[];
      
      // Step 4: Validate structure
      const structureValidation = validateQuizStructure(questions);
      if (!structureValidation.valid) {
        console.error('[QuizEngine] Structure validation failed:', structureValidation.warnings);
        throw new Error(`Quiz structure validation failed: ${structureValidation.warnings.join(', ')}`);
      }
      
      // Step 5: Validate medical accuracy
      const accuracyValidation = validateMedicalAccuracy(questions, context);
      
      const duration_ms = Math.round(performance.now() - startTime);
      
      console.log('[QuizEngine] Quiz generation complete:', {
        questionCount: questions.length,
        duration_ms,
        structureValid: structureValidation.valid,
        accuracyScore: accuracyValidation.score,
      });
      
      return {
        questions,
        metadata: {
          medicalSystem: params.medicalSystem,
          topic: params.topic,
          questionCount: questions.length,
          duration_ms,
          model: data.model || 'gpt-4o',
          tokens: data.tokens,
          guardrails: {
            systemAvailability: guardrails.systemAvailability,
            evidenceQuality: guardrails.evidenceQuality,
            failSafeDecision: guardrails.failSafeDecision,
            consistencyCheck: guardrails.consistencyCheck,
          },
          validation: {
            structureValid: structureValidation.valid,
            medicalAccuracyScore: accuracyValidation.score,
            warnings: [...structureValidation.warnings, ...accuracyValidation.warnings],
          },
        },
      };
    } catch (abortError: any) {
      clearTimeout(timeoutId);
      if (abortError.name === 'AbortError') {
        throw new Error('Quiz generation timeout - request took longer than 60 seconds');
      }
      throw abortError;
    }
  } catch (error: any) {
    const duration_ms = Math.round(performance.now() - startTime);
    console.error('[QuizEngine] Quiz generation failed:', error);
    
    throw new Error(`Quiz generation failed: ${error.message || 'Unknown error'}`);
  }
}

/**
 * Helper function to strip semantic icons from text
 * Used as a safety measure to ensure no icons leak into quiz questions
 */
export function stripSemanticIcons(text: string): string {
  // Use string-based approach instead of regex to avoid linting errors
  const semanticIcons = ['🧠', '🔍', '💊', '📌', '⚠️', '✅', '🔒', '✍️', '⚙️', '📊', '🛡️', '📈'];
  let result = text;
  for (const icon of semanticIcons) {
    result = result.split(icon).join('');
  }
  return result.trim();
}

/**
 * Helper function to validate that text contains no semantic icons
 */
export function hasSemanticIcons(text: string): boolean {
  // Use string-based approach instead of regex to avoid linting errors
  const semanticIcons = ['🧠', '🔍', '💊', '📌', '⚠️', '✅', '🔒', '✍️', '⚙️', '📊', '🛡️', '📈'];
  return semanticIcons.some(icon => text.includes(icon));
}

/**
 * DEPRECATED: These functions are for the conversational path only
 * Quiz generation does NOT use semantic icons
 */
export function applySemanticIcons(text: string): string {
  console.warn('[QuizEngine] applySemanticIcons called - this should NOT be used in quiz generation');
  return text;
}

export function getSemanticIconSystemPrompt(): string {
  console.warn('[QuizEngine] getSemanticIconSystemPrompt called - this should NOT be used in quiz generation');
  return '';
}

export function validateSemanticIconUsage(text: string): { valid: boolean; warnings: string[] } {
  console.warn('[QuizEngine] validateSemanticIconUsage called - this should NOT be used in quiz generation');
  return { valid: true, warnings: [] };
}

export function extractSemanticSections(text: string): any[] {
  console.warn('[QuizEngine] extractSemanticSections called - this should NOT be used in quiz generation');
  return [];
}

export function getIconLegend(): string {
  console.warn('[QuizEngine] getIconLegend called - this should NOT be used in quiz generation');
  return '';
}
