
# Quiz vs Chat: Quick Reference Guide

## When to Use Which Path?

### Use Quiz Generation Path (NO Semantic Icons)
- ✅ Generating board-style questions
- ✅ Multiple choice quizzes
- ✅ Practice exams
- ✅ Assessment tools
- ✅ Professional format needed

**Files**: `data/quizGenerationEngine.ts`, `supabase/functions/generate-quiz/index.ts`

### Use Conversational Path (WITH Semantic Icons)
- ✅ Educational conversations
- ✅ Explanations and teaching
- ✅ Chatbot responses
- ✅ Ask Expert feature
- ✅ Learning interactions

**Files**: `data/openAIIntegration.ts`, `data/semanticIconSystem.ts`

## Code Comparison

### Quiz Generation (NO Icons)

```typescript
// Import quiz engine (NOT semantic icon system)
import { generateQuizQuestions } from '@/data/quizGenerationEngine';

// Generate quiz
const result = await generateQuizQuestions({
  medicalSystem: 'Cardiology',
  topic: 'Heart Failure',
  questionCount: 10,
  flashcards: cardiologyFlashcards,
  coreKnowledge: 'Heart failure is...',
  guidelines: accGuidelines,
});

// Result: Plain text questions, NO emoji
// Example: "A 65-year-old patient presents with dyspnea..."
```

### Conversational Response (WITH Icons)

```typescript
// Import OpenAI integration (includes semantic icons)
import { generateConversationalResponse } from '@/data/openAIIntegration';

// Generate response
const result = await generateConversationalResponse({
  medicalContent: 'Heart failure is...',
  userQuery: 'How is heart failure treated?',
  enableSemanticIcons: true, // Enable icons
});

// Result: Conversational text WITH emoji
// Example: "💊 Treatment includes ACE inhibitors and beta-blockers..."
```

## Key Differences

| Feature | Quiz Path | Chat Path |
|---------|-----------|-----------|
| **Semantic Icons** | ❌ NO | ✅ YES |
| **Output Format** | Structured JSON | Conversational text |
| **Purpose** | Assessment | Education |
| **Tone** | Professional | Warm & engaging |
| **Emoji** | Plain text only | 🧠💊🔍✅ etc. |
| **Validation** | Structure + accuracy | Content + icons |
| **Edge Function** | `generate-quiz` | `generate-conversational-response` |

## File Structure

```
data/
├── quizGenerationEngine.ts       ← Quiz path (NO icons)
├── openAIIntegration.ts          ← Chat path (WITH icons)
├── semanticIconSystem.ts         ← Icon definitions (chat only)
└── synthesizerEngine.ts          ← Shared (figure-8 logic)

supabase/functions/
├── generate-quiz/                ← Quiz Edge Function (NO icons)
│   └── index.ts
└── generate-conversational-response/  ← Chat Edge Function (WITH icons)
    └── index.ts

app/(tabs)/(home)/
├── quiz.tsx                      ← Uses quiz path
└── chatbot.tsx                   ← Uses chat path
```

## Guardrails (Both Paths)

Both paths flow through the same guardrails:

1. ✅ System Availability Check
2. ✅ Evidence Quality Assessment
3. ✅ Fail-Safe Decision
4. ✅ Consistency Validation
5. ✅ Content Bleeding Prevention
6. ✅ Medical Accuracy Validation

**Difference**: Quiz path adds structure validation (NO icons check)

## Testing

### Test Quiz Path

```typescript
// Should have NO semantic icons
const quiz = await generateQuizQuestions({...});
console.assert(!hasSemanticIcons(quiz.questions[0].questionText));
console.assert(!hasSemanticIcons(quiz.questions[0].rationale));
```

### Test Chat Path

```typescript
// Should have semantic icons
const response = await generateConversationalResponse({...});
console.assert(response.semanticIconsUsed === true);
console.assert(response.semanticIconCount > 0);
```

## Common Mistakes

### ❌ DON'T: Import semantic icons in quiz code

```typescript
// WRONG - Don't do this in quiz files
import { applySemanticIcons } from '@/data/semanticIconSystem';
```

### ✅ DO: Use quiz engine directly

```typescript
// CORRECT - Use quiz engine
import { generateQuizQuestions } from '@/data/quizGenerationEngine';
```

### ❌ DON'T: Enable semantic icons for quizzes

```typescript
// WRONG - Quizzes should NOT have icons
const result = await generateConversationalResponse({
  enableSemanticIcons: true, // Don't use this for quizzes
});
```

### ✅ DO: Use quiz generation function

```typescript
// CORRECT - Use dedicated quiz function
const result = await generateQuizQuestions({
  // No semantic icon parameter - they're disabled by default
});
```

## Edge Function Prompts

### Quiz Edge Function (NO Icons)

```typescript
const systemPrompt = `
🚨 CRITICAL INSTRUCTION: DO NOT use any emoji icons or semantic markers.
Use plain text only.

Generate board-style multiple choice questions...
REMEMBER: Use PLAIN TEXT ONLY. No emoji icons.
`;
```

### Chat Edge Function (WITH Icons)

```typescript
const systemPrompt = `
🎯 SEMANTIC ICON SYSTEM:
You can use semantic icons to structure your responses:
🧠 Pathophysiology
💊 Treatment
🔍 Diagnosis
...
`;
```

## Validation

### Quiz Validation (NO Icons)

```typescript
// Check for semantic icons (should be NONE)
const semanticIconPattern = /[🧠🔍💊📌⚠️✅🔒✍️⚙️📊🛡️📈]/;
if (semanticIconPattern.test(questionText)) {
  throw new Error('Semantic icons not allowed in quiz questions');
}
```

### Chat Validation (WITH Icons)

```typescript
// Check for semantic icons (should be PRESENT)
const iconValidation = validateSemanticIconUsage(responseText);
if (!iconValidation.hasIcons) {
  console.warn('Response has no semantic icons');
}
```

## Summary

**Quiz Path**: Plain text, professional, board-style questions, NO emoji
**Chat Path**: Conversational, engaging, educational, WITH emoji

Both paths maintain the same figure-8 logic and guardrails, but serve different purposes and have different output formats.

**Remember**: Quiz = NO icons, Chat = WITH icons
