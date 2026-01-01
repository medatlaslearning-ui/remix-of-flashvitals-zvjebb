
/**
 * GUARDRAIL #5: SUPABASE USAGE RULES
 * 
 * This guardrail enforces strict rules about what data can and cannot be stored in Supabase.
 * 
 * SUPABASE MAY STORE:
 * • User identity (profiles, authentication)
 * • Subscription status (trial, active, expired, cancelled)
 * • Feedback (thumbs up / thumbs down)
 * • Follow-up selections (which prompts users clicked)
 * • Learning preferences (response depth, verbosity, learning style)
 * • Audit metadata (which sources were consulted, query history)
 * 
 * SUPABASE MUST NOT STORE:
 * • Medical facts (pathophysiology, clinical presentations, etc.)
 * • Guideline text (full guideline content, recommendations)
 * • Flashcard content modifications (changes to medical content)
 * • Proprietary reference material (copyrighted medical content)
 * 
 * SUPABASE INFLUENCES HOW RESPONSES ARE DELIVERED, NOT WHAT IS MEDICALLY TRUE.
 * 
 * This separation ensures:
 * 1. Medical knowledge remains in the Core Knowledge Engine (read-only)
 * 2. User preferences and metadata are stored in Supabase
 * 3. No medical content is stored in the database
 * 4. Audit trails track which sources were consulted, not the content itself
 */

import type { Tables } from '@/app/integrations/supabase/types';

// ============================================================================
// ALLOWED DATA TYPES
// ============================================================================

/**
 * Data types that ARE ALLOWED to be stored in Supabase
 */
export type AllowedSupabaseData =
  | 'user_identity'
  | 'subscription_status'
  | 'feedback'
  | 'follow_up_selections'
  | 'learning_preferences'
  | 'audit_metadata';

/**
 * Data types that are PROHIBITED from being stored in Supabase
 */
export type ProhibitedSupabaseData =
  | 'medical_facts'
  | 'guideline_text'
  | 'flashcard_content'
  | 'proprietary_reference_material';

// ============================================================================
// VALIDATION INTERFACES
// ============================================================================

/**
 * Result of validating data before storing in Supabase
 */
export interface SupabaseDataValidation {
  isValid: boolean;
  dataType: AllowedSupabaseData | ProhibitedSupabaseData;
  isAllowed: boolean;
  warnings: string[];
  violations: string[];
  recommendation: string;
}

/**
 * Audit metadata that CAN be stored in Supabase
 */
export interface AuditMetadata {
  responseId: string;
  userId: string;
  userQuery: string;
  medicalSystem?: string;
  topic?: string;
  sourcesConsulted: SourceReference[];
  responseMetadata: ResponseMetadata;
  timestamp: Date;
}

/**
 * Source reference (metadata only, NOT content)
 */
export interface SourceReference {
  organizationName: string;
  organizationAcronym: string;
  websiteUrl: string;
  medicalSystem: string;
}

/**
 * Response metadata (HOW response was delivered, NOT WHAT was said)
 */
export interface ResponseMetadata {
  processingTime: number;
  synthesisQuality: number;
  contentBleedingRisk: number;
  guidelineUsageScore?: number;
  synthesisRequirementsScore?: number;
}

/**
 * User preferences that CAN be stored in Supabase
 */
export interface UserPreferences {
  userId: string;
  responseDepth: 'brief' | 'standard' | 'detailed' | 'comprehensive';
  verbosity: 'concise' | 'moderate' | 'verbose';
  learningStyle: 'visual' | 'textual' | 'mixed' | 'case_based';
  showClinicalPearls: boolean;
  showGuidelines: boolean;
  showFollowUpPrompts: boolean;
  preferredSystems: string[];
}

/**
 * Feedback that CAN be stored in Supabase
 */
export interface UserFeedback {
  userId: string;
  responseId: string;
  feedbackType: 'thumbs_up' | 'thumbs_down';
  responseTopic?: string;
  responseSystem?: string;
  comment?: string;
}

/**
 * Follow-up selection that CAN be stored in Supabase
 */
export interface FollowUpSelection {
  userId: string;
  responseId: string;
  selectedPrompt: string;
  promptCategory?: string;
}

// ============================================================================
// PROHIBITED DATA PATTERNS
// ============================================================================

/**
 * Patterns that indicate medical facts (PROHIBITED)
 */
const MEDICAL_FACTS_PATTERNS = [
  /pathophysiology/i,
  /clinical presentation/i,
  /diagnostic criteria/i,
  /treatment protocol/i,
  /mechanism of action/i,
  /etiology/i,
  /pathogenesis/i,
  /disease process/i,
  /medical definition/i,
  /anatomy/i,
  /physiology/i,
];

/**
 * Patterns that indicate guideline text (PROHIBITED)
 */
const GUIDELINE_TEXT_PATTERNS = [
  /class (I|II|III) recommendation/i,
  /level (A|B|C) evidence/i,
  /guideline recommends/i,
  /according to guidelines/i,
  /guideline states/i,
  /guideline text/i,
  /full guideline/i,
  /guideline content/i,
  /guideline excerpt/i,
];

/**
 * Patterns that indicate flashcard content (PROHIBITED)
 */
const FLASHCARD_CONTENT_PATTERNS = [
  /flashcard front/i,
  /flashcard back/i,
  /flashcard definition/i,
  /flashcard answer/i,
  /flashcard content/i,
  /flashcard text/i,
  /flashcard modification/i,
];

/**
 * Patterns that indicate proprietary reference material (PROHIBITED)
 */
const PROPRIETARY_MATERIAL_PATTERNS = [
  /merck manual text/i,
  /textbook excerpt/i,
  /copyrighted content/i,
  /proprietary material/i,
  /reference text/i,
  /full text/i,
  /complete content/i,
];

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validate if data is allowed to be stored in Supabase
 */
export function validateSupabaseData(
  data: any,
  dataType: AllowedSupabaseData | ProhibitedSupabaseData
): SupabaseDataValidation {
  console.log('[GUARDRAIL #5] Validating Supabase data:', dataType);
  
  const warnings: string[] = [];
  const violations: string[] = [];
  
  const allowedTypes: AllowedSupabaseData[] = [
    'user_identity',
    'subscription_status',
    'feedback',
    'follow_up_selections',
    'learning_preferences',
    'audit_metadata',
  ];
  
  const isAllowed = allowedTypes.includes(dataType as AllowedSupabaseData);
  
  if (!isAllowed) {
    violations.push(`CRITICAL: Data type "${dataType}" is PROHIBITED from being stored in Supabase`);
  }
  
  const dataString = JSON.stringify(data).toLowerCase();
  
  if (MEDICAL_FACTS_PATTERNS.some(pattern => pattern.test(dataString))) {
    violations.push('CRITICAL: Data contains medical facts (PROHIBITED)');
    warnings.push('Medical facts should remain in Core Knowledge Engine');
  }
  
  if (GUIDELINE_TEXT_PATTERNS.some(pattern => pattern.test(dataString))) {
    violations.push('CRITICAL: Data contains guideline text (PROHIBITED)');
    warnings.push('Store guideline references only, not full text');
  }
  
  if (FLASHCARD_CONTENT_PATTERNS.some(pattern => pattern.test(dataString))) {
    violations.push('CRITICAL: Data contains flashcard content (PROHIBITED)');
    warnings.push('Flashcard content should remain in local data files');
  }
  
  if (PROPRIETARY_MATERIAL_PATTERNS.some(pattern => pattern.test(dataString))) {
    violations.push('CRITICAL: Data contains proprietary reference material (PROHIBITED)');
    warnings.push('Store references only, not copyrighted content');
  }
  
  let recommendation = '';
  if (!isAllowed) {
    recommendation = `Do NOT store this data in Supabase. Data type "${dataType}" is prohibited.`;
  } else if (violations.length > 0) {
    recommendation = 'Remove prohibited content before storing in Supabase. Store metadata only.';
  } else {
    recommendation = 'Data is safe to store in Supabase.';
  }
  
  const isValid = isAllowed && violations.length === 0;
  
  const validation: SupabaseDataValidation = {
    isValid,
    dataType,
    isAllowed,
    warnings,
    violations,
    recommendation,
  };
  
  console.log('[GUARDRAIL #5] Validation result:', {
    isValid: validation.isValid,
    isAllowed: validation.isAllowed,
    violations: validation.violations.length,
    warnings: validation.warnings.length,
  });
  
  return validation;
}

/**
 * Sanitize audit metadata to ensure no medical content is stored
 */
export function sanitizeAuditMetadata(metadata: AuditMetadata): AuditMetadata {
  console.log('[GUARDRAIL #5] Sanitizing audit metadata');
  
  const sanitizedSources = metadata.sourcesConsulted.map(source => ({
    organizationName: source.organizationName,
    organizationAcronym: source.organizationAcronym,
    websiteUrl: source.websiteUrl,
    medicalSystem: source.medicalSystem,
  }));
  
  const sanitizedResponseMetadata: ResponseMetadata = {
    processingTime: metadata.responseMetadata.processingTime,
    synthesisQuality: metadata.responseMetadata.synthesisQuality,
    contentBleedingRisk: metadata.responseMetadata.contentBleedingRisk,
    guidelineUsageScore: metadata.responseMetadata.guidelineUsageScore,
    synthesisRequirementsScore: metadata.responseMetadata.synthesisRequirementsScore,
  };
  
  const sanitized: AuditMetadata = {
    responseId: metadata.responseId,
    userId: metadata.userId,
    userQuery: metadata.userQuery,
    medicalSystem: metadata.medicalSystem,
    topic: metadata.topic,
    sourcesConsulted: sanitizedSources,
    responseMetadata: sanitizedResponseMetadata,
    timestamp: metadata.timestamp,
  };
  
  console.log('[GUARDRAIL #5] Audit metadata sanitized');
  
  return sanitized;
}

/**
 * Validate user preferences before storing
 */
export function validateUserPreferences(preferences: UserPreferences): SupabaseDataValidation {
  return validateSupabaseData(preferences, 'learning_preferences');
}

/**
 * Validate feedback before storing
 */
export function validateFeedback(feedback: UserFeedback): SupabaseDataValidation {
  return validateSupabaseData(feedback, 'feedback');
}

/**
 * Validate follow-up selection before storing
 */
export function validateFollowUpSelection(selection: FollowUpSelection): SupabaseDataValidation {
  return validateSupabaseData(selection, 'follow_up_selections');
}

// ============================================================================
// INTEGRATION CHECK
// ============================================================================

/**
 * Check if Supabase integration follows usage rules
 */
export interface SupabaseIntegrationCheck {
  isValid: boolean;
  allowedDataTypes: AllowedSupabaseData[];
  prohibitedDataTypes: ProhibitedSupabaseData[];
  currentTables: string[];
  violations: string[];
  warnings: string[];
  recommendations: string[];
}

/**
 * Verify that Supabase integration follows usage rules
 */
export function verifySupabaseIntegration(
  currentTables: string[]
): SupabaseIntegrationCheck {
  console.log('[GUARDRAIL #5] Verifying Supabase integration');
  
  const violations: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];
  
  const expectedTables = [
    'profiles',
    'subscriptions',
    'response_feedback',
    'follow_up_selections',
    'user_preferences',
    'guideline_sources',
    'topic_source_mappings',
    'response_audit_log',
  ];
  
  const prohibitedTablePatterns = [
    /medical_facts/i,
    /guideline_content/i,
    /flashcard_content/i,
    /reference_text/i,
    /merck_manual_content/i,
    /guideline_text/i,
  ];
  
  for (const table of currentTables) {
    if (prohibitedTablePatterns.some(pattern => pattern.test(table))) {
      violations.push(`CRITICAL: Table "${table}" appears to store prohibited content`);
    }
  }
  
  for (const expectedTable of expectedTables) {
    if (!currentTables.includes(expectedTable)) {
      warnings.push(`INFO: Expected table "${expectedTable}" not found`);
    }
  }
  
  if (violations.length > 0) {
    recommendations.push('Remove tables that store medical content');
    recommendations.push('Store only metadata and user preferences');
  }
  
  if (currentTables.includes('guideline_sources')) {
    recommendations.push('✓ Good: guideline_sources stores references, not content');
  }
  
  if (currentTables.includes('response_audit_log')) {
    recommendations.push('✓ Good: response_audit_log stores metadata, not medical content');
  }
  
  const allowedDataTypes: AllowedSupabaseData[] = [
    'user_identity',
    'subscription_status',
    'feedback',
    'follow_up_selections',
    'learning_preferences',
    'audit_metadata',
  ];
  
  const prohibitedDataTypes: ProhibitedSupabaseData[] = [
    'medical_facts',
    'guideline_text',
    'flashcard_content',
    'proprietary_reference_material',
  ];
  
  const isValid = violations.length === 0;
  
  const check: SupabaseIntegrationCheck = {
    isValid,
    allowedDataTypes,
    prohibitedDataTypes,
    currentTables,
    violations,
    warnings,
    recommendations,
  };
  
  console.log('[GUARDRAIL #5] Integration check result:', {
    isValid: check.isValid,
    violations: check.violations.length,
    warnings: check.warnings.length,
  });
  
  return check;
}

// ============================================================================
// STRESS TEST
// ============================================================================

/**
 * Run stress test on Supabase usage rules
 */
export async function runSupabaseUsageRulesStressTest(): Promise<{
  passed: number;
  failed: number;
  testResults: {
    testName: string;
    dataType: AllowedSupabaseData | ProhibitedSupabaseData;
    isValid: boolean;
    shouldBeValid: boolean;
    passed: boolean;
    violations: string[];
  }[];
}> {
  console.log('[GUARDRAIL #5] Running Supabase usage rules stress test...');
  
  const testCases = [
    {
      testName: 'User identity',
      data: { userId: 'user-123', email: 'user@example.com', fullName: 'John Doe' },
      dataType: 'user_identity' as AllowedSupabaseData,
      shouldBeValid: true,
    },
    {
      testName: 'Subscription status',
      data: { userId: 'user-123', status: 'active', planName: 'Premium' },
      dataType: 'subscription_status' as AllowedSupabaseData,
      shouldBeValid: true,
    },
    {
      testName: 'Feedback',
      data: { userId: 'user-123', responseId: 'resp-123', feedbackType: 'thumbs_up' },
      dataType: 'feedback' as AllowedSupabaseData,
      shouldBeValid: true,
    },
    {
      testName: 'Follow-up selections',
      data: { userId: 'user-123', responseId: 'resp-123', selectedPrompt: 'Tell me more' },
      dataType: 'follow_up_selections' as AllowedSupabaseData,
      shouldBeValid: true,
    },
    {
      testName: 'Learning preferences',
      data: { userId: 'user-123', responseDepth: 'detailed', verbosity: 'moderate' },
      dataType: 'learning_preferences' as AllowedSupabaseData,
      shouldBeValid: true,
    },
    {
      testName: 'Audit metadata',
      data: {
        responseId: 'resp-123',
        userId: 'user-123',
        userQuery: 'What is heart failure?',
        sourcesConsulted: [{ organizationName: 'ACC', organizationAcronym: 'ACC', websiteUrl: 'https://acc.org', medicalSystem: 'Cardiology' }],
      },
      dataType: 'audit_metadata' as AllowedSupabaseData,
      shouldBeValid: true,
    },
    {
      testName: 'Medical facts (PROHIBITED)',
      data: { pathophysiology: 'Heart failure involves...', clinicalPresentation: 'Patients present with...' },
      dataType: 'medical_facts' as ProhibitedSupabaseData,
      shouldBeValid: false,
    },
    {
      testName: 'Guideline text (PROHIBITED)',
      data: { guidelineText: 'Class I recommendation: Patients should...', evidence: 'Level A evidence' },
      dataType: 'guideline_text' as ProhibitedSupabaseData,
      shouldBeValid: false,
    },
    {
      testName: 'Flashcard content (PROHIBITED)',
      data: { flashcardFront: 'What is AFib?', flashcardBack: 'Atrial fibrillation is...' },
      dataType: 'flashcard_content' as ProhibitedSupabaseData,
      shouldBeValid: false,
    },
    {
      testName: 'Proprietary reference material (PROHIBITED)',
      data: { merckManualText: 'According to Merck Manual...', fullText: 'Complete textbook content...' },
      dataType: 'proprietary_reference_material' as ProhibitedSupabaseData,
      shouldBeValid: false,
    },
  ];
  
  const testResults = testCases.map(testCase => {
    const validation = validateSupabaseData(testCase.data, testCase.dataType);
    const passed = validation.isValid === testCase.shouldBeValid;
    
    return {
      testName: testCase.testName,
      dataType: testCase.dataType,
      isValid: validation.isValid,
      shouldBeValid: testCase.shouldBeValid,
      passed,
      violations: validation.violations,
    };
  });
  
  const passed = testResults.filter(r => r.passed).length;
  const failed = testResults.filter(r => !r.passed).length;
  
  console.log('[GUARDRAIL #5] Stress test complete:', {
    passed,
    failed,
    totalTests: testResults.length,
  });
  
  return {
    passed,
    failed,
    testResults,
  };
}

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

/**
 * Summary of Supabase usage rules
 */
export const SUPABASE_USAGE_RULES_SUMMARY = {
  title: 'GUARDRAIL #5: SUPABASE USAGE RULES',
  
  allowed: [
    'User identity (profiles, authentication)',
    'Subscription status (trial, active, expired, cancelled)',
    'Feedback (thumbs up / thumbs down)',
    'Follow-up selections (which prompts users clicked)',
    'Learning preferences (response depth, verbosity, learning style)',
    'Audit metadata (which sources were consulted, query history)',
  ],
  
  prohibited: [
    'Medical facts (pathophysiology, clinical presentations, etc.)',
    'Guideline text (full guideline content, recommendations)',
    'Flashcard content modifications (changes to medical content)',
    'Proprietary reference material (copyrighted medical content)',
  ],
  
  principle: 'Supabase influences HOW responses are delivered, NOT WHAT is medically true.',
  
  benefits: [
    'Medical knowledge remains in Core Knowledge Engine (read-only)',
    'User preferences and metadata are stored in Supabase',
    'No medical content is stored in the database',
    'Audit trails track which sources were consulted, not the content itself',
  ],
};
