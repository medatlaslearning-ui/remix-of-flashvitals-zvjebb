
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
