
# Feedback Guardrail Implementation Guide

## Overview

This document describes the implementation of **GUARDRAIL #6: FEEDBACK GUARDRAILS & SUPABASE MEMORY RULES** in the medical learning application.

## Architecture

### Figure-Eight Data Flow with Feedback Loop

```
┌─────────────────────────────────────────────────────────────┐
│                    USER QUERY INPUT                          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
              ┌────────────────┐
              │  Valve 1: Query│
              │   Processor    │
              └────────┬───────┘
                       │
                       ▼
         ┌─────────────────────────┐
         │  Core Knowledge Engine  │
         │  (Read-Only Medical     │
         │   Facts & Guidelines)   │
         └────────┬────────────────┘
                  │
                  ▼
         ┌────────────────────┐
         │ Valve 2: Knowledge │
         │    Retrieval       │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────────┐
         │  Intersection:     │
         │  Query + Knowledge │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────────┐
         │ Valve 3: Synthesis │
         │    & Generation    │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────────┐
         │  Refinement Loop   │
         │  (Quality Check)   │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────────┐
         │ Valve 4: Response  │
         │     Delivery       │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────────┐
         │  USER RECEIVES     │
         │    RESPONSE        │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────────────────────┐
         │  FEEDBACK COLLECTION           │
         │  (Thumbs Up / Thumbs Down)     │
         └────────┬───────────────────────┘
                  │
                  ▼
         ┌────────────────────────────────┐
         │  GUARDRAIL #6 VALIDATION       │
         │  - Validate feedback data      │
         │  - Ensure no medical content   │
         │  - Check user authentication   │
         └────────┬───────────────────────┘
                  │
                  ▼
         ┌────────────────────────────────┐
         │  SUPABASE STORAGE              │
         │  - Store feedback event        │
         │  - Link to user & response     │
         │  - Timestamp for reversal      │
         └────────┬───────────────────────┘
                  │
                  ▼
         ┌────────────────────────────────┐
         │  FEEDBACK AGGREGATION          │
         │  - Collect patterns over time  │
         │  - Weight by consistency       │
         │  - Ignore single events        │
         └────────┬───────────────────────┘
                  │
                  ▼
         ┌────────────────────────────────┐
         │  PERSONALIZATION ENGINE        │
         │  - Adjust response length      │
         │  - Modify explanation depth    │
         │  - Refine teaching style       │
         │  - Optimize follow-ups         │
         └────────┬───────────────────────┘
                  │
                  ▼
         ┌────────────────────────────────┐
         │  FUTURE RESPONSE DELIVERY      │
         │  (HOW, not WHAT)               │
         └────────────────────────────────┘
```

## Key Principles

### 1. Feedback as UX Signal Only

**Feedback influences HOW responses are delivered, NOT WHAT is medically true.**

- ✅ **Allowed**: Adjust response length, depth, style, follow-up sequencing
- ❌ **Prohibited**: Change medical facts, alter guidelines, modify core knowledge

### 2. Supabase Storage Rules

**What CAN be stored in Supabase:**
- User identity (profiles, authentication)
- Subscription status (trial, active, expired, cancelled)
- Feedback events (thumbs up/down with timestamps)
- Follow-up selections (which prompts users clicked)
- Learning preferences (response depth, verbosity, learning style)
- Audit metadata (which sources were consulted, query history)

**What CANNOT be stored in Supabase:**
- Medical facts (pathophysiology, clinical presentations)
- Guideline text (full guideline content, recommendations)
- Flashcard content modifications
- Proprietary reference material (copyrighted medical content)

### 3. Noise Handling

**Single feedback events are treated as noisy signals:**
- Behavioral adjustments require aggregated feedback over multiple interactions
- Feedback weighting increases only when patterns are consistent over time
- Outlier feedback is logged but not immediately acted upon

### 4. Undo Safety

**Users can reverse feedback within 30 seconds:**
- Feedback reversal window: 30 seconds after submission
- Reversed feedback updates Supabase records accordingly
- After 30 seconds, feedback is locked and cannot be changed

### 5. Fallback Behavior

**If Supabase is unavailable:**
- Feedback is recorded locally in Perpetual Learning Engine
- Default response behavior is used (no personalization)
- Feedback syncs to Supabase when connection is restored

## Implementation Details

### Database Schema

```sql
-- response_feedback table
CREATE TABLE response_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  response_id TEXT NOT NULL,
  feedback_type feedback_type NOT NULL, -- 'thumbs_up' or 'thumbs_down'
  response_topic TEXT,
  response_system TEXT,
  comment TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE response_feedback ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own feedback"
  ON response_feedback
  FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert their own feedback"
  ON response_feedback
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update their own feedback"
  ON response_feedback
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id);

-- Index for performance
CREATE INDEX idx_response_feedback_user_id ON response_feedback(user_id);
CREATE INDEX idx_response_feedback_response_id ON response_feedback(response_id);
CREATE INDEX idx_response_feedback_created_at ON response_feedback(created_at);
```

### Validation Logic

```typescript
// Validate feedback before storing (GUARDRAIL #6)
const feedbackData: UserFeedback = {
  userId: user.id,
  responseId: message.responseId,
  feedbackType: feedback === 'positive' ? 'thumbs_up' : 'thumbs_down',
  responseTopic: message.system,
  responseSystem: message.system,
};

const validation = validateFeedback(feedbackData);

if (!validation.isValid) {
  console.error('[FEEDBACK GUARDRAIL] Validation failed:', validation.violations);
  Alert.alert('Validation Error', 'Feedback data validation failed.');
  return;
}
```

### Feedback Submission Flow

1. **User clicks thumbs up/down**
   - Haptic feedback for immediate response
   - Check if user is authenticated
   - If negative feedback, show confirmation dialog

2. **Validate feedback data**
   - Run through GUARDRAIL #6 validation
   - Ensure no medical content is included
   - Check that only metadata is being stored

3. **Submit to Supabase**
   - Call `submitFeedback()` from `useFeedback` hook
   - Store feedback event with timestamp
   - Link to user ID and response ID

4. **Record locally**
   - Also record in Perpetual Learning Engine
   - Enables local learning and fallback

5. **Update UI**
   - Show feedback confirmation
   - Display guardrail message
   - Start 30-second reversal timer

6. **Lock feedback after 30 seconds**
   - Disable reversal after window expires
   - Show "locked" indicator in UI

### Feedback Reversal

```typescript
// Feedback reversal window (30 seconds)
const FEEDBACK_REVERSAL_WINDOW_MS = 30000;

// Set timer to disable feedback reversal
setTimeout(() => {
  setMessages(prev =>
    prev.map(m =>
      m.id === botMessage.id ? { ...m, feedbackReversible: false } : m
    )
  );
}, FEEDBACK_REVERSAL_WINDOW_MS);
```

### Error Handling

```typescript
try {
  // Submit to Supabase
  await submitFeedback(responseId, feedbackType, options);
} catch (error) {
  console.error('[FEEDBACK GUARDRAIL] Error submitting feedback:', error);
  
  // Fallback: Record locally if Supabase is unavailable
  if (message.interactionId) {
    await perpetualLearningEngine.recordFeedback(
      message.interactionId,
      feedback,
      feedback === 'negative'
    );
    
    Alert.alert(
      'Feedback Recorded Locally',
      'Supabase is currently unavailable, but your feedback has been recorded locally.'
    );
  }
}
```

## User Experience

### Feedback UI

**Before feedback:**
```
Was this response helpful?
[👍 Helpful] [👎 Not Helpful]
```

**After positive feedback:**
```
✓ Feedback recorded in Supabase
🔐 Guardrail: Feedback influences HOW responses are delivered (length, depth, style), NOT medical facts
```

**After negative feedback (within 30s):**
```
✓ Feedback recorded in Supabase
🔐 Guardrail: Feedback influences HOW responses are delivered (length, depth, style), NOT medical facts
(reversible for 30s)
```

**After 30 seconds:**
```
✓ Feedback recorded in Supabase
🔐 Guardrail: Feedback influences HOW responses are delivered (length, depth, style), NOT medical facts
🔒 Feedback locked (30s window expired)
```

### Confirmation Dialogs

**Negative feedback confirmation:**
```
Are you sure this response was not helpful? This will help us improve future responses.

⚠️ Note: Feedback influences HOW responses are delivered (length, depth, style), NOT medical facts.

[Cancel] [Confirm]
```

**Authentication required:**
```
Please sign in to provide feedback. Your feedback helps us personalize your learning experience.

[OK]
```

## Testing

### Manual Testing Checklist

- [ ] Submit positive feedback (authenticated user)
- [ ] Submit negative feedback (authenticated user)
- [ ] Attempt to submit feedback (unauthenticated user)
- [ ] Reverse feedback within 30 seconds
- [ ] Attempt to reverse feedback after 30 seconds
- [ ] Submit feedback when Supabase is unavailable
- [ ] Verify feedback is stored in Supabase
- [ ] Verify RLS policies prevent unauthorized access
- [ ] Check that no medical content is stored
- [ ] Verify feedback aggregation over time

### Automated Testing

```typescript
// Run Supabase usage rules stress test
const results = await runSupabaseUsageRulesStressTest();

console.log('Stress test results:', {
  passed: results.passed,
  failed: results.failed,
  totalTests: results.testResults.length,
});
```

## Monitoring

### Admin Dashboard

The admin page includes a **Supabase Usage Rules Monitor** component that displays:

- Integration status (valid/invalid)
- Current tables in Supabase
- Allowed data types
- Prohibited data types
- Violations (if any)
- Recommendations
- Stress test results

### Logs

All feedback operations are logged with the `[FEEDBACK GUARDRAIL]` prefix:

```
[FEEDBACK GUARDRAIL] Submitting feedback to Supabase
[FEEDBACK GUARDRAIL] Validation passed, submitting to Supabase
[FEEDBACK GUARDRAIL] Error submitting feedback: <error>
```

## Security

### Row Level Security (RLS)

All feedback tables have RLS enabled with policies that:
- Allow users to view only their own feedback
- Allow users to insert only their own feedback
- Allow users to update only their own feedback
- Prevent users from viewing or modifying other users' feedback

### Data Validation

All feedback data is validated before storage to ensure:
- No medical facts are included
- No guideline text is included
- No flashcard content is included
- No proprietary reference material is included
- Only metadata and UX signals are stored

## Future Enhancements

### Planned Features

1. **Feedback Analytics Dashboard**
   - Visualize feedback trends over time
   - Identify patterns in user preferences
   - Track personalization effectiveness

2. **Advanced Personalization**
   - Use aggregated feedback to adjust response style
   - Implement adaptive learning algorithms
   - Optimize follow-up question generation

3. **Feedback Comments**
   - Allow users to add optional comments to feedback
   - Use NLP to extract insights from comments
   - Ensure comments don't contain medical content

4. **Feedback Export**
   - Allow users to export their feedback history
   - Generate personalized learning reports
   - Track progress over time

## Conclusion

The feedback guardrail implementation ensures that:

1. **User feedback is captured securely** in Supabase with proper RLS policies
2. **Feedback influences presentation, not medical truth** through strict validation
3. **Users can reverse feedback** within a 30-second window for safety
4. **Fallback behavior exists** when Supabase is unavailable
5. **No medical content is stored** in the database, only metadata

This architecture maintains the integrity of medical knowledge while enabling personalized learning experiences.
