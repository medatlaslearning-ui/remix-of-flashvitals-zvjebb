
# OpenAI Integration Guide

## Overview

This medical learning app now integrates OpenAI as a **language generator and conversational interface** while maintaining the Core Knowledge Engine as the **source of medical truth**.

## Architecture

```
User Query
    ↓
[Valve 1] Query Processor
    ↓
[Valve 2] Core Knowledge Retrieval (Merck Manual, Guidelines, Flashcards)
    ↓
[Intersection] Synthesis Zone (Query + Knowledge)
    ↓
[Valve 3] Response Synthesis (with Guardrails)
    ↓
[Refinement Loop] Quality Improvement
    ↓
[Valve 4] OpenAI Language Generation
    ↓
[Validation] Ensure no medical facts added
    ↓
User Response (Conversational, Accurate, Clear)
```

## OpenAI Role Definition

### What OpenAI DOES:
1. **Language Generator** - Transforms technical medical content into clear, conversational language
2. **Reasoning Surface** - Explains medical concepts in an educational, approachable manner
3. **Conversational Interface** - Provides warm, professional tone while maintaining accuracy

### What OpenAI DOES NOT DO:
1. **Source of Medical Truth** - All medical facts come from the Core Knowledge Engine
2. **Knowledge Engine Replacement** - OpenAI only formats existing knowledge
3. **Guideline Decision-Maker** - Clinical decisions are based on core knowledge, not LLM
4. **Memory Store** - No medical information is stored or retrieved from OpenAI

## Implementation Details

### Edge Function: `generate-conversational-response`

**Location:** Supabase Edge Functions

**Purpose:** Calls OpenAI GPT-4o to generate conversational responses from medical content

**Input:**
```typescript
{
  medicalContent: string;  // Factual content from synthesizer engine
  userQuery: string;       // Original user question
  temperature?: number;    // Default: 0.3 (low for consistency)
  max_tokens?: number;     // Default: 1500
}
```

**Output:**
```typescript
{
  conversationalText: string;  // OpenAI-generated response
  duration_ms: number;         // Processing time
  model: string;               // Model used (gpt-4o)
  tokens?: {
    prompt: number;
    completion: number;
    total: number;
  };
}
```

### System Prompt

The OpenAI system prompt enforces strict guardrails:

```
You are a medical education assistant. Your role is to:

1. Take factual medical content from the core knowledge engine
2. Present it in a clear, conversational, educational manner
3. NEVER add medical facts not present in the provided content
4. NEVER contradict the provided medical content
5. Format responses with proper structure and emphasis
6. Use a warm, professional, educational tone
7. Maintain accuracy while being approachable

You are the LANGUAGE GENERATOR and CONVERSATIONAL INTERFACE.
You are NOT the source of medical truth.
You do NOT make medical decisions.
You do NOT replace the core knowledge engine.

Your job is to make the medical content engaging and easy to understand 
while preserving 100% accuracy.
```

### Validation Guardrails

After OpenAI generates a response, it's validated to ensure:

1. **Length Check** - Response shouldn't be >1.5x original content length
2. **Prohibited Additions** - No phrases like "according to recent studies" or "research shows" unless in original
3. **Term Preservation** - At least 70% of medical terms from original content are preserved
4. **Validation Score** - Must score ≥70% to be used

If validation fails, the system falls back to the original synthesizer engine output.

## Usage in Code

### Hook: `useOpenAI`

```typescript
import { useOpenAI } from '@/hooks/useOpenAI';

const { generateConversationalResponse, loading, error, data } = useOpenAI();

const result = await generateConversationalResponse({
  medicalContent: "Heart failure is...",
  userQuery: "What is heart failure?",
  temperature: 0.3,
  max_tokens: 1500,
});
```

### Integration Module: `openAIIntegration.ts`

```typescript
import { generateConversationalResponse, validateOpenAIResponse } from '@/data/openAIIntegration';

// Generate conversational response
const result = await generateConversationalResponse({
  medicalContent: synthesizerOutput,
  userQuery: userQuestion,
});

// Validate response
const validation = validateOpenAIResponse(
  originalContent,
  result.conversationalText
);

if (validation.isValid) {
  // Use OpenAI response
} else {
  // Fall back to original content
}
```

## Metadata Tracking

Every response includes OpenAI metadata:

```typescript
{
  openAI: {
    usedOpenAI: boolean;           // Whether OpenAI was used
    model?: string;                // Model name (gpt-4o)
    duration_ms?: number;          // OpenAI processing time
    tokens?: {
      prompt: number;
      completion: number;
      total: number;
    };
    validationScore?: number;      // Validation score (0-100)
    validationWarnings?: string[]; // Any validation warnings
    fallbackReason?: string;       // Why fallback was used (if applicable)
  }
}
```

## Fallback Behavior

OpenAI integration includes robust fallback:

1. **Short Content** - If medical content <10 chars, use original
2. **Short Query** - If user query <3 chars, use original
3. **API Error** - If OpenAI API fails, use original
4. **Validation Failure** - If response doesn't pass validation, use original
5. **Unexpected Error** - Any other error, use original

The system ALWAYS provides a response, even if OpenAI is unavailable.

## Environment Variables

Required in Supabase:

```bash
OPENAI_API_KEY=sk-...
```

## Testing

### Manual Testing

1. Ask a medical question: "What is atrial fibrillation?"
2. Check synthesizer metadata in response
3. Verify `openAI.usedOpenAI` is `true`
4. Verify `openAI.model` is `gpt-4o`
5. Verify `openAI.validationScore` is ≥70

### Stress Testing

The synthesizer engine stress test now includes OpenAI metrics:

```typescript
const results = await synthesizerEngine.runStressTest();

console.log('OpenAI Usage:', results.results.map(r => ({
  query: r.query,
  usedOpenAI: r.synthesizerMetadata?.openAI?.usedOpenAI,
  model: r.synthesizerMetadata?.openAI?.model,
  validationScore: r.synthesizerMetadata?.openAI?.validationScore,
})));
```

## Benefits

1. **Clearer Responses** - Medical content is presented in a more conversational, educational manner
2. **Better Engagement** - Warm, professional tone improves user experience
3. **Maintained Accuracy** - Strict validation ensures no medical facts are added or changed
4. **Robust Fallback** - System always works, even if OpenAI is unavailable
5. **Full Transparency** - Metadata shows exactly when and how OpenAI was used

## Guardrails Summary

| Guardrail | Purpose | Implementation |
|-----------|---------|----------------|
| System Prompt | Define OpenAI role | Edge function |
| Length Check | Prevent content addition | Validation function |
| Prohibited Phrases | Prevent speculation | Validation function |
| Term Preservation | Maintain medical accuracy | Validation function |
| Validation Score | Overall quality check | Validation function |
| Fallback System | Ensure availability | Integration module |
| Metadata Tracking | Full transparency | Synthesizer engine |

## Monitoring

Monitor OpenAI usage in the chatbot UI:

- **Synthesizer Metadata** section shows OpenAI status
- **Green ✓ Active** - OpenAI successfully generated response
- **Yellow ✗ Fallback** - Original content used (with reason)
- **Model** - Shows which model was used
- **Duration** - Shows OpenAI processing time
- **Tokens** - Shows token usage
- **Validation Score** - Shows validation quality

## Future Enhancements

Potential improvements:

1. **Adaptive Temperature** - Adjust based on query complexity
2. **Multi-turn Context** - Include conversation history
3. **Personalization** - Adjust tone based on user preferences
4. **A/B Testing** - Compare OpenAI vs. original responses
5. **Cost Tracking** - Monitor token usage and costs
6. **Model Selection** - Allow switching between GPT-4o and GPT-4o-mini

## Conclusion

This integration maintains the integrity of your medical knowledge engine while significantly improving the conversational quality of responses. OpenAI serves purely as a language generator, never as a source of medical truth, ensuring both accuracy and engagement.
