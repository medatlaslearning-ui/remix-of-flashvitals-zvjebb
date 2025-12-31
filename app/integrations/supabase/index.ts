
/**
 * Supabase Integration Index
 * Central export point for all Supabase services and hooks
 */

// Client
export { supabase } from './client';

// Types
export type { Database, Tables, TablesInsert, TablesUpdate, Enums } from './types';

// Services
export { authService } from './services/authService';
export type { Profile } from './services/authService';

export { subscriptionService } from './services/subscriptionService';
export type { Subscription, SubscriptionStatus } from './services/subscriptionService';

export { feedbackService } from './services/feedbackService';
export type {
  ResponseFeedback,
  FollowUpSelection,
  FeedbackType,
} from './services/feedbackService';

export { preferencesService } from './services/preferencesService';
export type {
  UserPreferences,
  ResponseDepth,
  VerbosityLevel,
  LearningStyle,
} from './services/preferencesService';

export { governanceService } from './services/governanceService';
export type { GuidelineSource, TopicSourceMapping } from './services/governanceService';

export { auditService } from './services/auditService';
export type { ResponseAuditLog, SourceConsulted } from './services/auditService';

// Hooks
export { useAuth } from './hooks/useAuth';
export { useSubscription } from './hooks/useSubscription';
export { usePreferences } from './hooks/usePreferences';
export { useFeedback } from './hooks/useFeedback';
export { useAudit } from './hooks/useAudit';
export { useGovernance } from './hooks/useGovernance';
