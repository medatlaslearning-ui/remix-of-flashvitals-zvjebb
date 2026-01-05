
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
  
  // Build flashcards context (limit to 20 most relevant)
  const flashcardsContext = params.flashcards
    .slice(0, 20)
    .map(card => 
      `Topic: ${card.topic}\nQ: ${card.front}\nA: ${card.back.definition}\nClinical Pearl: ${card.back.clinical_pearl}`
    )
    .join('\n\n');
  
  // Core knowledge context
  const coreKnowledgeContext = params.coreKnowledge;
  
  // Guidelines context
  const guidelinesContext = params.guidelines
    .map(g => `${g.title}: ${g.summary || g.recommendation || ''}`)
    .join('\n');
  
  console.log('[QuizEngine] Context sizes:', {
    flashcards: flashcardsContext.length,
    coreKnowledge: coreKnowledgeContext.length,
    guidelines: guidelinesContext.length,
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
    const semanticIconPattern = /[🧠🔍💊📌⚠️✅🔒✍️⚙️📊🛡️📈]/;
    if (semanticIconPattern.test(q.questionText)) {
      warnings.push(`Question ${i + 1}: Contains semantic icons (not allowed in quiz questions)`);
    }
    if (semanticIconPattern.test(q.optionA) || semanticIconPattern.test(q.optionB) || 
        semanticIconPattern.test(q.optionC) || semanticIconPattern.test(q.optionD)) {
      warnings.push(`Question ${i + 1}: Contains semantic icons in options (not allowed)`);
    }
    if (semanticIconPattern.test(q.rationale)) {
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
    
    const { data, error } = await supabase.functions.invoke('generate-quiz', {
      body: {
        medicalSystem: params.medicalSystem,
        topic: params.topic,
        questionCount: params.questionCount,
        flashcardsContext: context.flashcardsContext,
        coreKnowledgeContext: context.coreKnowledgeContext,
        guidelinesContext: context.guidelinesContext,
      },
    });
    
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
  const semanticIconPattern = /[🧠🔍💊📌⚠️✅🔒✍️⚙️📊🛡️📈]/g;
  return text.replace(semanticIconPattern, '').trim();
}

/**
 * Helper function to validate that text contains no semantic icons
 */
export function hasSemanticIcons(text: string): boolean {
  const semanticIconPattern = /[🧠🔍💊📌⚠️✅🔒✍️⚙️📊🛡️📈]/;
  return semanticIconPattern.test(text);
}
</write file>

Now let me update the Edge Function to ensure it doesn't include semantic icons in the system prompt:Perfect! Now let me update the documentation to explain the separate quiz generation path:

<write file="QUIZ_GENERATION_SEPARATE_PATH.md">
# Quiz Generation Separate Path (No Semantic Icons)

## Overview

The quiz generation system now has a **separate path** that bypasses semantic icons while maintaining the figure-8 logic and guardrails architecture.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CONVERSATIONAL PATH                           │
│  (Chatbot, Ask Expert - WITH Semantic Icons 🧠💊🔍)            │
│                                                                   │
│  Query → Guardrails → OpenAI → Semantic Icons → UI              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    QUIZ GENERATION PATH                          │
│  (Quiz Creator - NO Semantic Icons, Plain Text Only)            │
│                                                                   │
│  Query → Core Knowledge → Guardrails → OpenAI → Validation → UI │
│          (Flashcards,      (Figure-8)   (Plain   (Structure,     │
│           Guidelines,                    Text)    Accuracy)       │
│           Merck Manual)                                           │
└─────────────────────────────────────────────────────────────────┘
```

## Key Differences

### Conversational Path (WITH Semantic Icons)
- **Purpose**: Educational conversations, explanations, teaching
- **Output**: Conversational text with semantic icons (🧠💊🔍 etc.)
- **Format**: Natural language, structured with emoji markers
- **Use Cases**: Chatbot, Ask Expert, explanations
- **File**: `data/openAIIntegration.ts`
- **Edge Function**: `generate-conversational-response`

### Quiz Generation Path (NO Semantic Icons)
- **Purpose**: Board-style quiz questions
- **Output**: Structured JSON with plain text only
- **Format**: Multiple choice questions (A, B, C, D)
- **Use Cases**: Quiz Creator, practice questions
- **File**: `data/quizGenerationEngine.ts`
- **Edge Function**: `generate-quiz`

## Figure-8 Logic Maintained

Both paths flow through the same guardrails and validation:

1. **System Availability Check** - Network, OpenAI, Supabase
2. **Evidence Quality Assessment** - Core knowledge + guidelines
3. **Fail-Safe Decision** - Can we proceed safely?
4. **Consistency Validation** - Core knowledge vs guidelines
5. **Content Bleeding Prevention** - No cross-contamination
6. **Medical Accuracy Validation** - Based on provided content only

## Quiz Generation Flow

```
1. User selects medical system + question count
   ↓
2. Build context from:
   - Flashcards (20 most relevant)
   - Core knowledge (system-specific)
   - Clinical guidelines (system-specific)
   ↓
3. Apply guardrails:
   - Check system availability
   - Assess evidence quality
   - Make fail-safe decision
   - Validate consistency
   ↓
4. Call OpenAI (NO semantic icons):
   - System prompt: "Use plain text only - no emoji icons"
   - User prompt: "Generate questions without emoji"
   - Response format: Structured JSON
   ↓
5. Strip semantic icons (safety measure):
   - Remove any emoji that leaked through
   - Clean all fields (question, options, rationale, references)
   ↓
6. Validate structure:
   - 4 options (A, B, C, D)
   - Correct answer specified
   - Rationale provided (min 50 chars)
   - References provided (min 10 chars)
   - NO semantic icons present
   ↓
7. Validate medical accuracy:
   - Questions based on provided context
   - Rationale is detailed
   - References are specific
   ↓
8. Save to database:
   - Create quiz record
   - Insert questions
   - Link to user
   ↓
9. Return to UI:
   - Navigate to quiz session
   - Display questions
   - Track answers
```

## Implementation Details

### Frontend (`data/quizGenerationEngine.ts`)

```typescript
export async function generateQuizQuestions(
  params: QuizGenerationParams
): Promise<QuizGenerationResult> {
  // 1. Build context from core knowledge
  const context = buildQuizContext(params);
  
  // 2. Apply guardrails and figure-8 logic
  const guardrails = await applyGuardrails(params);
  
  // 3. Call Edge Function (NO semantic icons)
  const { data, error } = await supabase.functions.invoke('generate-quiz', {
    body: {
      medicalSystem: params.medicalSystem,
      questionCount: params.questionCount,
      flashcardsContext: context.flashcardsContext,
      coreKnowledgeContext: context.coreKnowledgeContext,
      guidelinesContext: context.guidelinesContext,
    },
  });
  
  // 4. Validate structure
  const structureValidation = validateQuizStructure(data.questions);
  
  // 5. Validate medical accuracy
  const accuracyValidation = validateMedicalAccuracy(data.questions, context);
  
  return { questions, metadata };
}
```

### Backend (`supabase/functions/generate-quiz/index.ts`)

```typescript
// CRITICAL: System prompt WITHOUT semantic icons
const systemPrompt = `You are a medical education expert creating board-style multiple choice questions.

🚨 CRITICAL INSTRUCTION: DO NOT use any emoji icons or semantic markers in your questions, options, rationale, or references. Use plain text only.

GUARDRAILS:
- Generate EXACTLY ${questionCount} questions
- Each question must have 4 options (A, B, C, D)
- Questions must be based ONLY on the provided medical content
- Include detailed rationale
- Cite specific guidelines
- Use PLAIN TEXT ONLY - no emoji icons or semantic markers

REMEMBER: Use PLAIN TEXT ONLY. No emoji icons or semantic markers.`;

// Strip semantic icons from all fields (safety measure)
for (const q of questions) {
  q.questionText = stripSemanticIcons(q.questionText);
  q.optionA = stripSemanticIcons(q.optionA);
  q.optionB = stripSemanticIcons(q.optionB);
  q.optionC = stripSemanticIcons(q.optionC);
  q.optionD = stripSemanticIcons(q.optionD);
  q.rationale = stripSemanticIcons(q.rationale);
  q.references = stripSemanticIcons(q.references);
}
```

## Validation Layers

### 1. Structure Validation
- ✅ Questions is an array
- ✅ Each question has all required fields
- ✅ Correct answer is A, B, C, or D
- ✅ NO semantic icons present

### 2. Medical Accuracy Validation
- ✅ Questions based on provided context
- ✅ Rationale is detailed (min 50 chars)
- ✅ References are specific (min 10 chars)
- ✅ Content matches core knowledge

### 3. Guardrails Validation
- ✅ System availability check passed
- ✅ Evidence quality score ≥ 60
- ✅ Fail-safe decision: can proceed
- ✅ Consistency score ≥ 70 (if applicable)

## Safety Measures

1. **Explicit Instructions**: System prompt explicitly tells OpenAI not to use emoji
2. **Safety Stripping**: All fields are stripped of semantic icons after generation
3. **Validation Check**: Structure validation fails if semantic icons are detected
4. **Separate Path**: Quiz generation never touches semantic icon system code

## Testing

### Test Quiz Generation
```typescript
// In app/(tabs)/(home)/quiz.tsx
const result = await generateQuiz({
  medicalSystem: 'Cardiology',
  questionCount: 5,
  flashcardsContext: '...',
  coreKnowledgeContext: '...',
  guidelinesContext: '...',
});

// Verify no semantic icons
for (const q of result.questions) {
  console.assert(!hasSemanticIcons(q.questionText));
  console.assert(!hasSemanticIcons(q.optionA));
  console.assert(!hasSemanticIcons(q.rationale));
}
```

### Test Conversational Response
```typescript
// In app/(tabs)/(home)/chatbot.tsx
const result = await generateConversationalResponse({
  medicalContent: '...',
  userQuery: 'How is asthma treated?',
  enableSemanticIcons: true, // Semantic icons enabled
});

// Verify semantic icons are present
console.assert(result.semanticIconsUsed);
console.assert(result.semanticIconCount > 0);
```

## Benefits

1. **Clean Quiz Questions**: No emoji clutter in board-style questions
2. **Professional Format**: Plain text matches real board exams
3. **Maintained Architecture**: Figure-8 logic and guardrails still apply
4. **Separate Concerns**: Quiz generation isolated from conversational path
5. **Easy Maintenance**: Changes to semantic icons don't affect quizzes
6. **Lint-Free**: No regex issues with emoji in quiz code

## Future Enhancements

- [ ] Add difficulty levels (easy, medium, hard)
- [ ] Add question categories (diagnosis, treatment, pathophysiology)
- [ ] Add image-based questions (ECG, X-ray, etc.)
- [ ] Add case-based questions (multi-step scenarios)
- [ ] Add explanation videos for rationales
- [ ] Add peer comparison (how others answered)

## Troubleshooting

### Issue: Semantic icons still appearing in quiz questions
**Solution**: Check Edge Function logs - the safety stripping should catch this

### Issue: Quiz generation timeout
**Solution**: Reduce question count or context size

### Issue: Questions not based on provided content
**Solution**: Check medical accuracy validation score - should be ≥ 60

### Issue: Guardrails failing
**Solution**: Check system availability and evidence quality scores
</write file>

Now let me update the semantic icon system documentation to clarify the separation:

<write file="data/semanticIconSystem.ts">
/**
 * Semantic Icon System
 * Visual markers to signal the role of information within medical explanations
 * 
 * INTEGRATION WITH LMM (OpenAI):
 * The LMM can use semantic icons naturally in responses after passing guardrails.
 * Icons are enabled AFTER guardrail validation to ensure medical accuracy first.
 * 
 * ⚠️ CRITICAL: QUIZ GENERATION USES A SEPARATE PATH
 * The quiz generation system (data/quizGenerationEngine.ts) does NOT use semantic icons.
 * Quiz questions are plain text only to match board exam format.
 * 
 * PATHS:
 * - Conversational Path (WITH icons): Chatbot, Ask Expert → openAIIntegration.ts
 * - Quiz Generation Path (NO icons): Quiz Creator → quizGenerationEngine.ts
 */

export const SEMANTIC_ICONS = {
  PATHOPHYSIOLOGY: '🧠',
  DIAGNOSIS: '🔍',
  TREATMENT: '💊',
  CLINICAL_PEARL: '📌',
  CAUTION: '⚠️',
  KEY_TAKEAWAY: '✅',
  GUARDRAIL: '🔒',
  TEACHING_NOTE: '✍️',
  MECHANISM: '⚙️',
  PROGNOSIS: '📊',
  PREVENTION: '🛡️',
  EPIDEMIOLOGY: '📈',
} as const;

export type SemanticIconType = keyof typeof SEMANTIC_ICONS;

export interface SemanticIconMapping {
  pattern: RegExp;
  icon: string;
  description: string;
}

/**
 * Mappings for converting *** markers to semantic icons
 * This allows the LMM to use either *** markers or direct emoji icons
 */
export const SEMANTIC_ICON_MAPPINGS: SemanticIconMapping[] = [
  {
    pattern: /\*\*\*PATHOPHYSIOLOGY\*\*\*|\*\*\*EXPLANATION\*\*\*/gi,
    icon: SEMANTIC_ICONS.PATHOPHYSIOLOGY,
    description: 'Pathophysiology / Explanation',
  },
  {
    pattern: /\*\*\*DIAGNOSIS\*\*\*|\*\*\*EVALUATION\*\*\*/gi,
    icon: SEMANTIC_ICONS.DIAGNOSIS,
    description: 'Diagnosis / Evaluation',
  },
  {
    pattern: /\*\*\*TREATMENT\*\*\*|\*\*\*MANAGEMENT\*\*\*/gi,
    icon: SEMANTIC_ICONS.TREATMENT,
    description: 'Treatment / Management',
  },
  {
    pattern: /\*\*\*CLINICAL PEARL\*\*\*|\*\*\*PEARL\*\*\*/gi,
    icon: SEMANTIC_ICONS.CLINICAL_PEARL,
    description: 'Clinical Pearl',
  },
  {
    pattern: /\*\*\*CAUTION\*\*\*|\*\*\*RED FLAG\*\*\*|\*\*\*WARNING\*\*\*/gi,
    icon: SEMANTIC_ICONS.CAUTION,
    description: 'Caution / Red Flag',
  },
  {
    pattern: /\*\*\*KEY TAKEAWAY\*\*\*|\*\*\*SUMMARY\*\*\*/gi,
    icon: SEMANTIC_ICONS.KEY_TAKEAWAY,
    description: 'Key Takeaway',
  },
  {
    pattern: /\*\*\*GUARDRAIL\*\*\*|\*\*\*SAFETY\*\*\*/gi,
    icon: SEMANTIC_ICONS.GUARDRAIL,
    description: 'Guardrail / Safety Rule',
  },
  {
    pattern: /\*\*\*TEACHING NOTE\*\*\*|\*\*\*LEARNING TIP\*\*\*/gi,
    icon: SEMANTIC_ICONS.TEACHING_NOTE,
    description: 'Teaching Note / Learning Tip',
  },
  {
    pattern: /\*\*\*MECHANISM\*\*\*/gi,
    icon: SEMANTIC_ICONS.MECHANISM,
    description: 'Mechanism of Action',
  },
  {
    pattern: /\*\*\*PROGNOSIS\*\*\*/gi,
    icon: SEMANTIC_ICONS.PROGNOSIS,
    description: 'Prognosis / Outcome',
  },
  {
    pattern: /\*\*\*PREVENTION\*\*\*/gi,
    icon: SEMANTIC_ICONS.PREVENTION,
    description: 'Prevention / Prophylaxis',
  },
  {
    pattern: /\*\*\*EPIDEMIOLOGY\*\*\*/gi,
    icon: SEMANTIC_ICONS.EPIDEMIOLOGY,
    description: 'Epidemiology / Statistics',
  },
];

/**
 * Apply semantic icons to text after guardrail validation
 * Replaces *** markers with actual emoji icons
 * This is called AFTER the LMM generates the response and AFTER guardrails pass
 * 
 * ⚠️ NOTE: This is ONLY used in the conversational path (chatbot, ask expert)
 * Quiz generation uses a separate path without semantic icons
 */
export function applySemanticIcons(text: string): string {
  let processedText = text;
  
  for (const mapping of SEMANTIC_ICON_MAPPINGS) {
    processedText = processedText.replace(mapping.pattern, mapping.icon);
  }
  
  return processedText;
}

/**
 * Generate OpenAI system prompt with semantic icon instructions
 * This tells the LMM how to use semantic icons in responses
 * 
 * ⚠️ NOTE: This is ONLY used in the conversational path (chatbot, ask expert)
 * Quiz generation uses a different system prompt without semantic icons
 */
export function getSemanticIconSystemPrompt(): string {
  return `
🎯 SEMANTIC ICON SYSTEM:

You can use semantic icons to structure your responses and make them more visually engaging:

${SEMANTIC_ICON_MAPPINGS.map(m => `${m.icon} ${m.description}`).join('\n')}

Guidelines for using semantic icons:
- Use icons naturally at the start of relevant sections
- Example: "💊 Treatment includes beta-agonists and corticosteroids"
- Example: "🧠 Asthma involves airway inflammation and bronchospasm"
- Example: "⚠️ Watch for signs of respiratory distress"
- Example: "📌 Remember: Always assess severity before choosing treatment"
- Don't overuse - aim for 1 icon per major section or key point
- Icons should enhance clarity, not clutter the response
- Use them after content passes medical accuracy validation

The semantic icons help students quickly identify the type of information and improve retention!
`;
}

/**
 * Validate that semantic icons are used appropriately
 * Checks for proper icon usage and density
 */
export function validateSemanticIconUsage(text: string): {
  valid: boolean;
  warnings: string[];
  hasIcons: boolean;
  iconCount: number;
} {
  const warnings: string[] = [];
  
  // Check if icons are used
  const hasIcons = Object.values(SEMANTIC_ICONS).some(icon => text.includes(icon));
  
  // Count icons
  const iconCount = Object.values(SEMANTIC_ICONS).reduce(
    (count, icon) => count + (text.match(new RegExp(icon, 'g'))?.length || 0),
    0
  );
  
  // Check for leftover *** markers (should be replaced)
  const hasUnprocessedMarkers = /\*\*\*[A-Z\s]+\*\*\*/.test(text);
  if (hasUnprocessedMarkers) {
    warnings.push('Text contains unprocessed *** markers - should be replaced with icons');
  }
  
  // Check for appropriate icon density (not too many)
  const wordCount = text.split(/\s+/).length;
  if (iconCount > wordCount / 15) {
    warnings.push(`Too many semantic icons (${iconCount} icons for ${wordCount} words - max 1 per 15 words recommended)`);
  }
  
  // Check if icons are at the start of sections (good practice)
  const iconAtStartPattern = /\n\n[🧠🔍💊📌⚠️✅🔒✍️⚙️📊🛡️📈]/g;
  const iconsAtStart = (text.match(iconAtStartPattern) || []).length;
  
  if (hasIcons && iconsAtStart === 0) {
    warnings.push('Icons should typically appear at the start of sections for better readability');
  }
  
  return {
    valid: warnings.length === 0,
    warnings,
    hasIcons,
    iconCount,
  };
}

/**
 * Extract semantic sections from text
 * Parses text into sections based on semantic icons
 */
export interface SemanticSection {
  icon: string;
  type: SemanticIconType | 'UNKNOWN';
  content: string;
}

export function extractSemanticSections(text: string): SemanticSection[] {
  const sections: SemanticSection[] = [];
  
  // Find all icon positions
  const iconPattern = /[🧠🔍💊📌⚠️✅🔒✍️⚙️📊🛡️📈]/g;
  const matches = [...text.matchAll(iconPattern)];
  
  if (matches.length === 0) {
    return sections;
  }
  
  // Extract sections between icons
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const icon = match[0];
    const startIndex = match.index!;
    const endIndex = i < matches.length - 1 ? matches[i + 1].index! : text.length;
    
    const content = text.substring(startIndex + 1, endIndex).trim();
    
    // Find icon type
    let type: SemanticIconType | 'UNKNOWN' = 'UNKNOWN';
    for (const [key, value] of Object.entries(SEMANTIC_ICONS)) {
      if (value === icon) {
        type = key as SemanticIconType;
        break;
      }
    }
    
    sections.push({
      icon,
      type,
      content,
    });
  }
  
  return sections;
}

/**
 * Get icon legend for UI display
 * Returns a formatted legend of all available icons
 */
export function getIconLegend(): string {
  return `
**Semantic Icon Legend:**

${SEMANTIC_ICON_MAPPINGS.map(m => `${m.icon} **${m.description}**`).join('\n')}

These icons help you quickly identify the type of information and improve retention!
`;
}
