
# Supabase Integration Guide

## Overview

This guide explains how Supabase is integrated into the medical learning app. Supabase is used **ONLY** for memory, identity, and governance - **NOT** for generating or modifying medical knowledge.

## Architecture

### Core Principle: Separation of Concerns

```
┌─────────────────────────────────────────────────────────────┐
│                    MEDICAL KNOWLEDGE ENGINE                  │
│  (Core Knowledge + Synthesizer - Independent of Supabase)   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      SUPABASE LAYER                          │
│  (Memory, Identity, Governance - Never modifies knowledge)  │
└─────────────────────────────────────────────────────────────┘
```

## Database Schema

### 1. User Identity (`profiles` table)
- Stores user accounts and authentication IDs
- Maintains one user identity across sessions
- Supports future expansion to website or LMS access

**Fields:**
- `id`: UUID primary key
- `user_id`: References auth.users (unique)
- `email`: User email
- `full_name`: User's full name
- `created_at`, `updated_at`: Timestamps

### 2. Access & Subscriptions (`subscriptions` table)
- Stores subscription status (trial, active, expired, cancelled)
- Gates access to premium features
- Tracks trial periods and expiration dates

**Fields:**
- `id`: UUID primary key
- `user_id`: References auth.users (unique)
- `status`: Enum (trial, active, expired, cancelled)
- `plan_name`: Name of subscription plan
- `started_at`: When subscription started
- `expires_at`: When subscription expires
- `trial_ends_at`: When trial period ends
- `created_at`, `updated_at`: Timestamps

**Functions:**
- `has_premium_access(user_id)`: Returns boolean indicating if user has access

### 3. Feedback & Learning Signals

#### `response_feedback` table
- Stores thumbs up/down feedback
- Aggregates feedback to adjust response style (NOT medical facts)

**Fields:**
- `id`: UUID primary key
- `user_id`: References auth.users
- `response_id`: Unique identifier for the response
- `feedback_type`: Enum (thumbs_up, thumbs_down)
- `response_topic`: Topic of the response
- `response_system`: Medical system (e.g., Cardiology)
- `comment`: Optional user comment
- `created_at`: Timestamp

#### `follow_up_selections` table
- Stores which follow-up prompts users select
- Helps understand user learning patterns

**Fields:**
- `id`: UUID primary key
- `user_id`: References auth.users
- `response_id`: Related response ID
- `selected_prompt`: The prompt text selected
- `prompt_category`: Category of prompt
- `created_at`: Timestamp

### 4. Personalization Memory (`user_preferences` table)
- Stores user preferences for response delivery
- Informs HOW responses are delivered, NOT WHAT is medically true

**Fields:**
- `id`: UUID primary key
- `user_id`: References auth.users (unique)
- `response_depth`: Enum (brief, standard, detailed, comprehensive)
- `verbosity`: Enum (concise, moderate, verbose)
- `learning_style`: Enum (visual, textual, mixed, case_based)
- `show_clinical_pearls`: Boolean
- `show_guidelines`: Boolean
- `show_follow_up_prompts`: Boolean
- `preferred_systems`: Array of medical systems
- `created_at`, `updated_at`: Timestamps

### 5. Reference Governance

#### `guideline_sources` table
- Stores approved guideline/authority website allowlist
- Stores metadata ONLY (organization, URL, last-reviewed date)
- Does NOT store guideline text or proprietary content

**Fields:**
- `id`: UUID primary key
- `organization_name`: Full name (e.g., "American College of Cardiology")
- `organization_acronym`: Short name (e.g., "ACC")
- `website_url`: Official website URL
- `description`: Brief description
- `medical_system`: System (e.g., "Cardiology")
- `is_approved`: Boolean flag
- `last_reviewed_date`: Date of last review
- `created_at`, `updated_at`: Timestamps

#### `topic_source_mappings` table
- Maps topics to their authoritative sources
- Example: "Heart Failure" → AHA/ACC

**Fields:**
- `id`: UUID primary key
- `topic_name`: Name of the topic
- `medical_system`: Medical system
- `guideline_source_id`: References guideline_sources
- `priority`: Integer (higher = more important)
- `notes`: Optional notes
- `created_at`, `updated_at`: Timestamps

### 6. Audit & Traceability (`response_audit_log` table)
- Logs which authority sources were consulted for each response
- Maintains evidence trail for educational transparency
- Enables review without rewriting past answers

**Fields:**
- `id`: UUID primary key
- `user_id`: References auth.users
- `response_id`: Unique identifier (unique)
- `user_query`: The user's original question
- `medical_system`: System addressed
- `topic`: Topic addressed
- `sources_consulted`: JSONB array of source objects
- `response_metadata`: JSONB with additional metadata
- `created_at`: Timestamp

## Services

### Authentication Service (`authService`)
- `signUp(email, password, fullName?)`: Register new user
- `signIn(email, password)`: Sign in existing user
- `signOut()`: Sign out current user
- `getSession()`: Get current session
- `getCurrentUser()`: Get current user
- `getProfile(userId)`: Get user profile
- `updateProfile(userId, updates)`: Update profile
- `resetPassword(email)`: Send password reset email
- `updatePassword(newPassword)`: Update password

### Subscription Service (`subscriptionService`)
- `getSubscription(userId)`: Get user's subscription
- `hasPremiumAccess(userId)`: Check if user has premium access
- `updateSubscription(userId, updates)`: Update subscription
- `activateSubscription(userId, planName, expiresAt?)`: Activate subscription
- `cancelSubscription(userId)`: Cancel subscription
- `isTrialActive(subscription)`: Check if trial is active
- `getTrialDaysRemaining(subscription)`: Get days remaining in trial

### Feedback Service (`feedbackService`)
- `submitFeedback(userId, responseId, feedbackType, options?)`: Submit feedback
- `recordFollowUpSelection(userId, responseId, selectedPrompt, promptCategory?)`: Record follow-up selection
- `getFeedbackStats(userId)`: Get user's feedback statistics
- `getRecentFeedback(userId, limit?)`: Get recent feedback
- `getFeedbackForResponse(userId, responseId)`: Get feedback for specific response

### Preferences Service (`preferencesService`)
- `getPreferences(userId)`: Get user preferences
- `updatePreferences(userId, updates)`: Update preferences
- `getDefaultPreferences()`: Get default preferences
- `applyPreferencesToResponse(response, preferences)`: Apply preferences to response

### Governance Service (`governanceService`)
- `getApprovedSources(medicalSystem?)`: Get approved guideline sources
- `getSourcesForTopic(topic, system?)`: Get sources for specific topic
- `getSourceById(sourceId)`: Get source by ID
- `getMedicalSystems()`: Get all medical systems
- `formatSourcesForDisplay(sources)`: Format sources for display
- `getSourceMetadata(sources)`: Get source metadata for logging

### Audit Service (`auditService`)
- `logResponse(userId, responseId, userQuery, options?)`: Log a response
- `getQueryHistory(userId, limit?)`: Get user's query history
- `getMostConsultedSources(userId)`: Get most consulted sources
- `getAuditLogForResponse(userId, responseId)`: Get audit log for response
- `getAuditLogsBySystem(userId, medicalSystem, limit?)`: Get logs by system
- `getAuditLogsByTopic(userId, topic, limit?)`: Get logs by topic

## React Hooks

### `useAuth()`
Returns:
- `user`: Current user object
- `profile`: User profile
- `session`: Current session
- `loading`: Loading state
- `isAuthenticated`: Boolean
- `signUp`, `signIn`, `signOut`: Auth methods
- `updateProfile`, `resetPassword`, `updatePassword`: Profile methods

### `useSubscription()`
Returns:
- `subscription`: Current subscription
- `hasPremiumAccess`: Boolean
- `loading`: Loading state
- `isTrialActive`: Boolean
- `trialDaysRemaining`: Number
- `refreshSubscription`: Refresh subscription data
- `activateSubscription`, `cancelSubscription`: Subscription methods

### `usePreferences()`
Returns:
- `preferences`: User preferences
- `loading`: Loading state
- `updatePreferences`: Update preferences method
- `defaultPreferences`: Default preferences object

### `useFeedback()`
Returns:
- `submitFeedback`: Submit feedback method
- `recordFollowUpSelection`: Record follow-up selection method
- `getFeedbackStats`: Get feedback stats method
- `submitting`: Submitting state

### `useAudit()`
Returns:
- `logResponse`: Log response method
- `getQueryHistory`: Get query history method
- `getMostConsultedSources`: Get most consulted sources method
- `logging`: Logging state

### `useGovernance(medicalSystem?)`
Returns:
- `sources`: Guideline sources
- `loading`: Loading state
- `getSourcesForTopic`: Get sources for topic method
- `getMedicalSystems`: Get medical systems method
- `formatSourcesForDisplay`: Format sources method
- `getSourceMetadata`: Get source metadata method

## Usage Examples

### Example 1: Authentication Flow

```typescript
import { useAuth } from '@/integrations/supabase';

function LoginScreen() {
  const { signIn, loading } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      // User is now authenticated
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    // Your login UI
  );
}
```

### Example 2: Check Premium Access

```typescript
import { useSubscription } from '@/integrations/supabase';

function PremiumFeature() {
  const { hasPremiumAccess, isTrialActive, trialDaysRemaining } = useSubscription();

  if (!hasPremiumAccess) {
    return (
      <View>
        <Text>
          {isTrialActive
            ? `Trial: ${trialDaysRemaining} days remaining`
            : 'Upgrade to access this feature'}
        </Text>
      </View>
    );
  }

  return <PremiumContent />;
}
```

### Example 3: Submit Feedback

```typescript
import { useFeedback } from '@/integrations/supabase';

function ChatbotResponse({ responseId, response }) {
  const { submitFeedback } = useFeedback();

  const handleThumbsUp = async () => {
    await submitFeedback(responseId, 'thumbs_up', {
      topic: 'Heart Failure',
      system: 'Cardiology',
    });
  };

  return (
    <View>
      <Text>{response}</Text>
      <TouchableOpacity onPress={handleThumbsUp}>
        <Text>👍</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### Example 4: Log Response with Sources

```typescript
import { useAudit, useGovernance } from '@/integrations/supabase';

function ChatbotEngine() {
  const { logResponse } = useAudit();
  const { getSourcesForTopic, getSourceMetadata } = useGovernance();

  const generateResponse = async (userQuery: string) => {
    // 1. Generate response using core knowledge engine
    const response = await coreKnowledgeEngine.generate(userQuery);

    // 2. Get relevant sources
    const sources = await getSourcesForTopic('Heart Failure', 'Cardiology');

    // 3. Log the response with sources
    const responseId = generateUniqueId();
    await logResponse(responseId, userQuery, {
      medicalSystem: 'Cardiology',
      topic: 'Heart Failure',
      sourcesConsulted: getSourceMetadata(sources),
    });

    return { responseId, response };
  };
}
```

### Example 5: Personalize Response Delivery

```typescript
import { usePreferences } from '@/integrations/supabase';

function ChatbotEngine() {
  const { preferences } = usePreferences();

  const formatResponse = (rawResponse: string) => {
    if (!preferences) {
      return rawResponse; // Fallback if Supabase unavailable
    }

    // Apply preferences to HOW response is delivered
    let formatted = rawResponse;

    if (preferences.response_depth === 'brief') {
      // Show condensed version
    } else if (preferences.response_depth === 'comprehensive') {
      // Show expanded version
    }

    if (!preferences.show_clinical_pearls) {
      // Remove clinical pearls section
    }

    return formatted;
  };
}
```

## Important Rules

### ✅ DO:
- Use Supabase for user authentication and identity
- Store subscription status and gate premium features
- Log user feedback to improve response style
- Store user preferences for personalization
- Maintain an allowlist of approved guideline sources
- Log which sources were consulted for each response
- Query Supabase AFTER generating a response or BEFORE delivery

### ❌ DON'T:
- Use Supabase to generate medical knowledge
- Store guideline text or proprietary content
- Let Supabase modify flashcards, definitions, or guideline logic
- Allow feedback to change medical facts
- Depend on Supabase for core medical reasoning
- Stop the chatbot from functioning if Supabase is unavailable

## Fallback Behavior

If Supabase is unavailable:
- The chatbot MUST still function with correct medical reasoning
- Use default preferences for response formatting
- Skip audit logging (but continue generating responses)
- Disable premium feature gating temporarily
- Show appropriate error messages for user-facing features

## Security

All tables implement Row Level Security (RLS):
- Users can only access their own data
- Guideline sources are publicly readable (approved sources only)
- Authentication is required for all user-specific operations

## Testing

To test the integration:

1. **Authentication**: Sign up, sign in, sign out
2. **Subscriptions**: Check trial status, premium access
3. **Feedback**: Submit thumbs up/down, record follow-up selections
4. **Preferences**: Update and retrieve user preferences
5. **Governance**: Fetch guideline sources, get sources for topics
6. **Audit**: Log responses, retrieve query history

## Migration Status

All migrations have been applied:
- ✅ User profiles
- ✅ Subscriptions
- ✅ Feedback and learning signals
- ✅ User preferences
- ✅ Reference governance
- ✅ Audit and traceability
- ✅ Guideline sources populated

## Next Steps

1. Integrate authentication UI (login, signup screens)
2. Add subscription management UI
3. Add feedback buttons to chatbot responses
4. Add preferences screen for users
5. Display guideline sources in chatbot responses
6. Implement audit log viewer for users
7. Test fallback behavior when Supabase is unavailable
