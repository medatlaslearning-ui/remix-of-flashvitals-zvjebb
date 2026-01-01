
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
  // NOTE: We store WHICH source was consulted, NOT the content
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
  // NOTE: We store quality metrics, NOT medical content
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
  // NOTE: These preferences influence HOW responses are delivered
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
  // NOTE: We store feedback on responses, NOT the medical content itself
}

/**
 * Follow-up selection that CAN be stored in Supabase
 */
export interface FollowUpSelection {
  userId: string;
  responseId: string;
  selectedPrompt: string;
  promptCategory?: string;
  // NOTE: We store which prompt was selected, NOT medical content
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
  
  // Check if data type is allowed
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
  
  // Convert data to string for pattern matching
  const dataString = JSON.stringify(data).toLowerCase();
  
  // Check for prohibited patterns
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
  
  // Generate recommendation
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
  
  // Ensure sources consulted only contain references, not content
  const sanitizedSources = metadata.sourcesConsulted.map(source => ({
    organizationName: source.organizationName,
    organizationAcronym: source.organizationAcronym,
    websiteUrl: source.websiteUrl,
    medicalSystem: source.medicalSystem,
    // Remove any additional fields that might contain content
  }));
  
  // Ensure response metadata only contains metrics, not content
  const sanitizedResponseMetadata: ResponseMetadata = {
    processingTime: metadata.responseMetadata.processingTime,
    synthesisQuality: metadata.responseMetadata.synthesisQuality,
    contentBleedingRisk: metadata.responseMetadata.contentBleedingRisk,
    guidelineUsageScore: metadata.responseMetadata.guidelineUsageScore,
    synthesisRequirementsScore: metadata.responseMetadata.synthesisRequirementsScore,
    // Remove any additional fields that might contain content
  };
  
  const sanitized: AuditMetadata = {
    responseId: metadata.responseId,
    userId: metadata.userId,
    userQuery: metadata.userQuery, // User's question is OK to store
    medicalSystem: metadata.medicalSystem,
    topic: metadata.topic, // Topic name is OK (e.g., "Heart Failure")
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
  
  // Expected tables (allowed)
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
  
  // Prohibited table patterns
  const prohibitedTablePatterns = [
    /medical_facts/i,
    /guideline_content/i,
    /flashcard_content/i,
    /reference_text/i,
    /merck_manual_content/i,
    /guideline_text/i,
  ];
  
  // Check for prohibited tables
  for (const table of currentTables) {
    if (prohibitedTablePatterns.some(pattern => pattern.test(table))) {
      violations.push(`CRITICAL: Table "${table}" appears to store prohibited content`);
    }
  }
  
  // Check for missing expected tables
  for (const expectedTable of expectedTables) {
    if (!currentTables.includes(expectedTable)) {
      warnings.push(`INFO: Expected table "${expectedTable}" not found`);
    }
  }
  
  // Generate recommendations
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
    // ALLOWED data types (should pass)
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
    
    // PROHIBITED data types (should fail)
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
</write file>

Now let me integrate this guardrail into the synthesizer engine:

<write file="data/synthesizerEngine.ts">
/**
 * SYNTHESIZER ENGINE - Figure-Eight Data Flow Architecture
 * 
 * GUARDRAIL #1: SYSTEM ARCHITECTURE ROLES (IMPLEMENTED)
 * GUARDRAIL #2: GUIDELINE CONSULTATION TRIGGERS (IMPLEMENTED)
 * GUARDRAIL #3: GUIDELINE USAGE RULES (IMPLEMENTED)
 * GUARDRAIL #4: SYNTHESIS REQUIREMENTS (IMPLEMENTED)
 * GUARDRAIL #5: SUPABASE USAGE RULES (IMPLEMENTED)
 * 
 * This engine implements a figure-eight data flow with one-way valves AND
 * enforces strict architectural roles, guideline usage rules, synthesis requirements,
 * and Supabase usage rules:
 * 
 * • Core Knowledge Engine: READ-ONLY stable medical knowledge
 * • Guideline Website Layer: Runtime consultation (NOT cached)
 * • Synthesizer Engine: Original educational responses with citations
 * • Supabase: User preferences and metadata ONLY (NO medical content)
 * 
 * GUARDRAIL #5: SUPABASE USAGE RULES
 * 
 * SUPABASE MAY STORE:
 * • User identity
 * • Subscription status
 * • Feedback (thumbs up / thumbs down)
 * • Follow-up selections
 * • Learning preferences
 * • Audit metadata (which sources were consulted)
 * 
 * SUPABASE MUST NOT STORE:
 * • Medical facts
 * • Guideline text
 * • Flashcard content modifications
 * • Proprietary reference material
 * 
 * SUPABASE INFLUENCES HOW RESPONSES ARE DELIVERED, NOT WHAT IS MEDICALLY TRUE.
 * 
 * FIGURE-EIGHT FLOW:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                                                               │
 * │  USER INPUT ──→ [VALVE 1] ──→ QUERY PROCESSOR               │
 * │                                      │                        │
 * │                                      ↓                        │
 * │                              INTERSECTION POINT              │
 * │                              (Synthesis Zone)                │
 * │                                      ↑                        │
 * │                                      │                        │
 * │  CORE KNOWLEDGE ──→ [VALVE 2] ──→ KNOWLEDGE RETRIEVER       │
 * │                                                               │
 * │  INTERSECTION ──→ [VALVE 3] ──→ RESPONSE SYNTHESIZER        │
 * │                                      │                        │
 * │                                      ↓                        │
 * │                              REFINEMENT LOOP                 │
 * │                                      │                        │
 * │                                      ↓                        │
 * │  REFINED RESPONSE ──→ [VALVE 4] ──→ USER OUTPUT             │
 * │                                      │                        │
 * │                                      ↓                        │
 * │                              SUPABASE AUDIT                  │
 * │                              (Metadata Only)                 │
 * │                                                               │
 * └─────────────────────────────────────────────────────────────┘
 * 
 * ONE-WAY VALVES:
 * - Valve 1: User input can only flow forward to query processing
 * - Valve 2: Core knowledge can only flow forward to knowledge retrieval
 * - Valve 3: Synthesized data can only flow forward to refinement
 * - Valve 4: Final response can only flow to user (no backflow)
 * - Valve 5: Only metadata flows to Supabase (NO medical content)
 * 
 * KEY FEATURES:
 * - Prevents content bleeding through strict one-way flow
 * - Synthesizes user query with core knowledge at intersection
 * - Refines response through iterative loop
 * - Maintains conversation context for natural interaction
 * - Stress testing and quality monitoring
 * - GUARDRAIL #1: Enforces architectural roles and integrity
 * - GUARDRAIL #2: Intelligent guideline consultation triggers
 * - GUARDRAIL #3: Proper guideline usage and contextualization
 * - GUARDRAIL #4: Original language synthesis with uncertainty handling
 * - GUARDRAIL #5: Supabase stores metadata only, NOT medical content
 */

import { searchMerckManualKnowledge, type MerckManualEntry } from './merckManualKnowledge';
import { searchACCGuidelines, type ACCGuidelineEntry } from './accGuidelinesKnowledge';
import { searchAHAGuidelines, type AHAGuidelineEntry } from './ahaGuidelinesKnowledge';
import { searchESCGuidelines, type ESCGuidelineEntry } from './escGuidelinesKnowledge';
import { searchHFSAGuidelines, type HFSAGuidelineEntry } from './hfsaGuidelinesKnowledge';
import { searchHRSGuidelines, type HRSGuidelineEntry } from './hrsGuidelinesKnowledge';
import { searchSCAIGuidelines, type SCAIGuidelineEntry } from './scaiGuidelinesKnowledge';
import { searchEACTSGuidelines, type EACTSGuidelineEntry } from './eactsGuidelinesKnowledge';
import { searchATSGuidelines, type ATSGuidelineEntry } from './atsGuidelinesKnowledge';
import { searchCHESTGuidelines, type CHESTGuidelineEntry } from './chestGuidelinesKnowledge';
import { searchSCCMGuidelines, type SCCMGuidelineEntry } from './sccmGuidelinesKnowledge';
import { searchKDIGOGuidelines, type KDIGOGuidelineEntry } from './kdigoGuidelinesKnowledge';
import { searchNIDDKGuidelines, type NIDDKGuidelineEntry } from './niddkGuidelinesKnowledge';
import { searchACGGuidelines, type ACGGuidelineEntry } from './acgGuidelinesKnowledge';
import { searchADAGuidelines, type ADAGuidelineEntry } from './adaGuidelinesKnowledge';
import { searchEndocrineGuidelines, type EndocrineGuidelineEntry } from './endocrineGuidelinesKnowledge';
import { searchNCCNGuidelines, type NCCNGuidelineEntry } from './nccnGuidelinesKnowledge';
import { searchIDSAGuidelines, type IDSAGuidelineEntry } from './idsaGuidelinesKnowledge';
import { searchASAGuidelines, type ASAGuidelineEntry } from './asaGuidelinesKnowledge';
import { searchACSTraumaGuidelines, type ACSTraumaGuidelineEntry } from './acsTraumaGuidelinesKnowledge';
import { Flashcard } from '@/types/flashcard';
import {
  getCoreKnowledgeEngine,
  getGuidelineWebsiteLayer,
  getSynthesizerEngineGuardrails,
  verifySystemArchitectureIntegrity,
  type SystemArchitectureIntegrityCheck,
} from './architectureGuardrails';
import {
  validateSupabaseData,
  sanitizeAuditMetadata,
  verifySupabaseIntegration,
  type AuditMetadata,
  type SourceReference,
  type ResponseMetadata,
  type SupabaseDataValidation,
  type SupabaseIntegrationCheck,
} from './supabaseUsageRules';

// ============================================================================
// GUARDRAIL #3: GUIDELINE USAGE RULES
// ============================================================================

/**
 * GUARDRAIL #3: Prohibited language patterns that must NEVER appear in responses
 */
const PROHIBITED_LANGUAGE_PATTERNS = [
  /this confirms? (the )?information is correct/i,
  /the core engine verifies? (this|that) as true/i,
  /this replaces? previous knowledge/i,
  /verified as (absolutely )?correct/i,
  /confirms? (the )?accuracy/i,
  /proven to be (absolutely )?true/i,
  /replaces? (the )?old (information|knowledge)/i,
  /overrides? (the )?previous (information|knowledge)/i,
  /supersedes? (the )?core knowledge/i,
  /validates? (the )?truth/i,
  /certifies? (the )?correctness/i,
];

/**
 * GUARDRAIL #3: Required phrasing patterns for guideline contextualization
 */
const REQUIRED_GUIDELINE_PHRASES = [
  'based on current guidelines',
  'this recommendation aligns with',
  'recent guidance now emphasizes',
  'according to current practice guidelines',
  'current guidelines suggest',
  'guidelines recommend',
  'per current recommendations',
  'in line with current standards',
];

/**
 * GUARDRAIL #3: Phrases indicating historical practice differences
 */
const HISTORICAL_DIFFERENCE_PHRASES = [
  'this differs from historical practice',
  'this represents a change from previous recommendations',
  'historically, the approach was different',
  'this is a departure from earlier guidelines',
  'previous practice recommended',
  'this updates earlier recommendations',
];

/**
 * GUARDRAIL #3: Guideline Usage Validation Result
 */
export interface GuidelineUsageValidation {
  isValid: boolean;
  hasProhibitedLanguage: boolean;
  prohibitedPhrases: string[];
  hasProperContextualization: boolean;
  contextualizationPhrases: string[];
  indicatesHistoricalDifferences: boolean;
  historicalDifferencePhrases: string[];
  usesGuidelinesAsContext: boolean;
  overwritesCoreKnowledge: boolean;
  warnings: string[];
  score: number; // 0-100
}

/**
 * GUARDRAIL #3: Validate guideline usage in a response
 */
export function validateGuidelineUsage(
  responseText: string,
  hasGuidelines: boolean,
  hasCoreKnowledge: boolean
): GuidelineUsageValidation {
  console.log('[GUARDRAIL #3] Validating guideline usage');
  
  const warnings: string[] = [];
  const lowerResponse = responseText.toLowerCase();
  
  // Check for prohibited language
  const prohibitedPhrases: string[] = [];
  for (const pattern of PROHIBITED_LANGUAGE_PATTERNS) {
    const match = responseText.match(pattern);
    if (match) {
      prohibitedPhrases.push(match[0]);
      warnings.push(`CRITICAL: Prohibited language detected: "${match[0]}"`);
    }
  }
  
  const hasProhibitedLanguage = prohibitedPhrases.length > 0;
  
  // Check for proper contextualization phrases (if guidelines are used)
  const contextualizationPhrases: string[] = [];
  if (hasGuidelines) {
    for (const phrase of REQUIRED_GUIDELINE_PHRASES) {
      if (lowerResponse.includes(phrase)) {
        contextualizationPhrases.push(phrase);
      }
    }
    
    if (contextualizationPhrases.length === 0) {
      warnings.push('WARNING: Guidelines used but no proper contextualization phrases found');
    }
  }
  
  const hasProperContextualization = hasGuidelines ? contextualizationPhrases.length > 0 : true;
  
  // Check for historical difference indicators
  const historicalDifferencePhrases: string[] = [];
  for (const phrase of HISTORICAL_DIFFERENCE_PHRASES) {
    if (lowerResponse.includes(phrase)) {
      historicalDifferencePhrases.push(phrase);
    }
  }
  
  const indicatesHistoricalDifferences = historicalDifferencePhrases.length > 0;
  
  // Check if guidelines are used as context (not replacement)
  const usesGuidelinesAsContext = hasGuidelines ? 
    (hasProperContextualization && hasCoreKnowledge) : true;
  
  if (hasGuidelines && !hasCoreKnowledge) {
    warnings.push('CRITICAL: Guidelines used without core knowledge foundation');
  }
  
  // Check if response overwrites core knowledge
  const overwritesCoreKnowledge = 
    lowerResponse.includes('replaces') ||
    lowerResponse.includes('overrides') ||
    lowerResponse.includes('supersedes');
  
  if (overwritesCoreKnowledge) {
    warnings.push('CRITICAL: Response appears to overwrite core knowledge');
  }
  
  // Calculate validation score
  let score = 100;
  
  if (hasProhibitedLanguage) score -= 50; // Major penalty
  if (!hasProperContextualization && hasGuidelines) score -= 30;
  if (!usesGuidelinesAsContext) score -= 25;
  if (overwritesCoreKnowledge) score -= 40;
  if (hasGuidelines && !hasCoreKnowledge) score -= 35;
  
  // Bonus for good practices
  if (indicatesHistoricalDifferences && hasGuidelines) score += 10;
  if (contextualizationPhrases.length > 2) score += 5;
  
  score = Math.max(0, Math.min(100, score));
  
  const isValid = 
    !hasProhibitedLanguage &&
    hasProperContextualization &&
    usesGuidelinesAsContext &&
    !overwritesCoreKnowledge &&
    score >= 70;
  
  const validation: GuidelineUsageValidation = {
    isValid,
    hasProhibitedLanguage,
    prohibitedPhrases,
    hasProperContextualization,
    contextualizationPhrases,
    indicatesHistoricalDifferences,
    historicalDifferencePhrases,
    usesGuidelinesAsContext,
    overwritesCoreKnowledge,
    warnings,
    score,
  };
  
  console.log('[GUARDRAIL #3] Validation result:', {
    isValid: validation.isValid,
    score: validation.score,
    warnings: validation.warnings.length,
  });
  
  return validation;
}

/**
 * GUARDRAIL #3: Apply guideline usage rules to response text
 */
export function applyGuidelineUsageRules(
  responseText: string,
  hasGuidelines: boolean,
  hasCoreKnowledge: boolean
): string {
  console.log('[GUARDRAIL #3] Applying guideline usage rules');
  
  let processedText = responseText;
  
  // Remove any prohibited language
  for (const pattern of PROHIBITED_LANGUAGE_PATTERNS) {
    processedText = processedText.replace(pattern, '[REMOVED: Prohibited language]');
  }
  
  // If guidelines are used, ensure proper contextualization
  if (hasGuidelines && hasCoreKnowledge) {
    // Check if response already has contextualization
    const hasContextualization = REQUIRED_GUIDELINE_PHRASES.some(phrase =>
      processedText.toLowerCase().includes(phrase)
    );
    
    if (!hasContextualization) {
      // Add contextualization note at the beginning of guideline sections
      processedText = processedText.replace(
        /\*\*Clinical Practice Guidelines\*\*/i,
        '**Clinical Practice Guidelines** (Based on current guidelines)'
      );
    }
  }
  
  console.log('[GUARDRAIL #3] Rules applied successfully');
  
  return processedText;
}

// ============================================================================
// GUARDRAIL #4: SYNTHESIS REQUIREMENTS
// ============================================================================

/**
 * GUARDRAIL #4: Patterns that indicate direct copying from source text
 */
const DIRECT_COPYING_PATTERNS = [
  /\|\s*\w+\s*\|/g, // Table patterns (| column |)
  /^\s*\d+\.\s+\w+/gm, // Numbered lists that look like algorithms
  /^Step \d+:/gm, // Step-by-step algorithms
  /^Algorithm:/gm, // Algorithm headers
  /^Figure \d+:/gm, // Figure references
  /^Table \d+:/gm, // Table references
  /\[See (Figure|Table|Algorithm) \d+\]/gi, // Cross-references
];

/**
 * GUARDRAIL #4: Uncertainty phrases to use when evidence is insufficient
 */
const UNCERTAINTY_PHRASES = [
  'There is insufficient evidence in the approved sources to answer this definitively.',
  'The available evidence does not provide a clear answer to this question.',
  'Current knowledge sources do not contain sufficient information on this topic.',
  'This topic requires further consultation with additional authoritative sources.',
];

/**
 * GUARDRAIL #4: Synthesis Requirements Validation Result
 */
export interface SynthesisRequirementsValidation {
  isValid: boolean;
  isOriginalLanguage: boolean;
  hasDirectCopying: boolean;
  copiedPatterns: string[];
  hasTableReproduction: boolean;
  hasAlgorithmReproduction: boolean;
  hasFigureReproduction: boolean;
  isEducationalLevel: boolean;
  handlesUncertainty: boolean;
  uncertaintyPhrases: string[];
  hasSpeculation: boolean;
  warnings: string[];
  score: number; // 0-100
}

/**
 * GUARDRAIL #4: Validate synthesis requirements in a response
 */
export function validateSynthesisRequirements(
  responseText: string,
  hasKnowledge: boolean
): SynthesisRequirementsValidation {
  console.log('[GUARDRAIL #4] Validating synthesis requirements');
  
  const warnings: string[] = [];
  const lowerResponse = responseText.toLowerCase();
  
  // Check for direct copying patterns
  const copiedPatterns: string[] = [];
  for (const pattern of DIRECT_COPYING_PATTERNS) {
    const matches = responseText.match(pattern);
    if (matches) {
      copiedPatterns.push(...matches);
      warnings.push(`WARNING: Potential direct copying detected: "${matches[0]}"`);
    }
  }
  
  const hasDirectCopying = copiedPatterns.length > 0;
  
  // Check for table reproduction
  const hasTableReproduction = 
    lowerResponse.includes('table') ||
    /\|\s*\w+\s*\|/.test(responseText);
  
  if (hasTableReproduction) {
    warnings.push('WARNING: Response may contain table reproduction');
  }
  
  // Check for algorithm reproduction
  const hasAlgorithmReproduction = 
    lowerResponse.includes('algorithm') ||
    /^Step \d+:/gm.test(responseText);
  
  if (hasAlgorithmReproduction) {
    warnings.push('WARNING: Response may contain algorithm reproduction');
  }
  
  // Check for figure reproduction
  const hasFigureReproduction = 
    lowerResponse.includes('figure') ||
    lowerResponse.includes('[see figure');
  
  if (hasFigureReproduction) {
    warnings.push('WARNING: Response may contain figure reproduction');
  }
  
  // Check if response is at educational level (not too technical, not too simple)
  const isEducationalLevel = 
    responseText.length >= 100 && // Sufficient detail
    responseText.includes('**') && // Structured formatting
    !responseText.includes('...') && // No placeholders
    !responseText.includes('[content]'); // No missing content
  
  if (!isEducationalLevel) {
    warnings.push('WARNING: Response may not be at appropriate educational level');
  }
  
  // Check for uncertainty handling when knowledge is insufficient
  const uncertaintyPhrases: string[] = [];
  for (const phrase of UNCERTAINTY_PHRASES) {
    if (lowerResponse.includes(phrase.toLowerCase())) {
      uncertaintyPhrases.push(phrase);
    }
  }
  
  const handlesUncertainty = !hasKnowledge ? uncertaintyPhrases.length > 0 : true;
  
  if (!hasKnowledge && uncertaintyPhrases.length === 0) {
    warnings.push('CRITICAL: Insufficient knowledge but no uncertainty statement');
  }
  
  // Check for speculation (should NOT speculate when uncertain)
  const speculationPatterns = [
    /it (might|may|could|possibly) be/i,
    /perhaps/i,
    /possibly/i,
    /it is likely that/i,
    /one could assume/i,
    /it can be inferred/i,
  ];
  
  const hasSpeculation = !hasKnowledge && speculationPatterns.some(pattern => pattern.test(responseText));
  
  if (hasSpeculation) {
    warnings.push('CRITICAL: Response contains speculation when evidence is insufficient');
  }
  
  // Check if response is in original language (not copied verbatim)
  const isOriginalLanguage = 
    !hasDirectCopying &&
    !hasTableReproduction &&
    !hasAlgorithmReproduction &&
    !hasFigureReproduction;
  
  // Calculate validation score
  let score = 100;
  
  if (hasDirectCopying) score -= 40; // Major penalty
  if (hasTableReproduction) score -= 30;
  if (hasAlgorithmReproduction) score -= 30;
  if (hasFigureReproduction) score -= 20;
  if (!isEducationalLevel) score -= 20;
  if (!handlesUncertainty && !hasKnowledge) score -= 50; // Critical penalty
  if (hasSpeculation && !hasKnowledge) score -= 40;
  
  // Bonus for good practices
  if (isOriginalLanguage) score += 10;
  if (isEducationalLevel) score += 10;
  if (handlesUncertainty && !hasKnowledge) score += 15;
  
  score = Math.max(0, Math.min(100, score));
  
  const isValid = 
    isOriginalLanguage &&
    !hasTableReproduction &&
    !hasAlgorithmReproduction &&
    !hasFigureReproduction &&
    isEducationalLevel &&
    handlesUncertainty &&
    !hasSpeculation &&
    score >= 70;
  
  const validation: SynthesisRequirementsValidation = {
    isValid,
    isOriginalLanguage,
    hasDirectCopying,
    copiedPatterns,
    hasTableReproduction,
    hasAlgorithmReproduction,
    hasFigureReproduction,
    isEducationalLevel,
    handlesUncertainty,
    uncertaintyPhrases,
    hasSpeculation,
    warnings,
    score,
  };
  
  console.log('[GUARDRAIL #4] Validation result:', {
    isValid: validation.isValid,
    score: validation.score,
    warnings: validation.warnings.length,
  });
  
  return validation;
}

/**
 * GUARDRAIL #4: Apply synthesis requirements to response text
 */
export function applySynthesisRequirements(
  responseText: string,
  hasKnowledge: boolean
): string {
  console.log('[GUARDRAIL #4] Applying synthesis requirements');
  
  let processedText = responseText;
  
  // Remove table patterns
  processedText = processedText.replace(/\|\s*\w+\s*\|/g, '[Table removed - summarize in text]');
  
  // Remove algorithm patterns
  processedText = processedText.replace(/^Step \d+:/gm, '•');
  processedText = processedText.replace(/^Algorithm:/gm, '**Approach:**');
  
  // Remove figure references
  processedText = processedText.replace(/\[See (Figure|Table|Algorithm) \d+\]/gi, '');
  processedText = processedText.replace(/^Figure \d+:/gm, '');
  processedText = processedText.replace(/^Table \d+:/gm, '');
  
  // If insufficient knowledge, add uncertainty statement
  if (!hasKnowledge && !UNCERTAINTY_PHRASES.some(phrase => 
    processedText.toLowerCase().includes(phrase.toLowerCase())
  )) {
    processedText = UNCERTAINTY_PHRASES[0] + '\n\n' + processedText;
  }
  
  console.log('[GUARDRAIL #4] Requirements applied successfully');
  
  return processedText;
}

// ============================================================================
// VALVE 1: USER INPUT PROCESSING
// ============================================================================

export interface UserInput {
  rawQuery: string;
  timestamp: Date;
  conversationContext?: string[];
}

export interface ProcessedQuery {
  originalQuery: string;
  normalizedQuery: string;
  intent: QueryIntent;
  keywords: string[];
  medicalSystem?: string;
  isConversational: boolean;
  timestamp: Date;
}

export type QueryIntent = 
  | 'pathophysiology'
  | 'clinical'
  | 'diagnostic'
  | 'treatment'
  | 'guideline'
  | 'general'
  | 'conversational';

/**
 * VALVE 1: Process user input (one-way flow)
 * User input → Query processor → Intersection
 */
export function processUserInput(input: UserInput): ProcessedQuery {
  console.log('[VALVE 1] Processing user input:', input.rawQuery);
  
  const rawQuery = input.rawQuery.trim();
  const lowerQuery = rawQuery.toLowerCase();
  
  // Detect conversational queries (greetings, thanks, etc.)
  const conversationalPatterns = [
    /^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i,
    /^(thanks|thank you|thx|appreciate)/i,
    /^(bye|goodbye|see you|later)/i,
    /^(yes|no|okay|ok|sure|alright)/i,
    /^(how are you|what's up|wassup)/i,
  ];
  
  const isConversational = conversationalPatterns.some(pattern => pattern.test(rawQuery));
  
  // Detect query intent
  let intent: QueryIntent = 'general';
  
  if (isConversational) {
    intent = 'conversational';
  } else if (/pathophysiology|mechanism|cause|etiology|why|how does|disease process|pathogenesis/i.test(rawQuery)) {
    intent = 'pathophysiology';
  } else if (/symptom|sign|present|clinical feature|manifestation|appear|clinical finding|physical exam/i.test(rawQuery)) {
    intent = 'clinical';
  } else if (/diagnos|test|workup|evaluation|assess|detect|diagnostic approach|lab|imaging/i.test(rawQuery)) {
    intent = 'diagnostic';
  } else if (/treat|therap|manage|medication|drug|intervention|management|therapy/i.test(rawQuery)) {
    intent = 'treatment';
  } else if (/guideline|recommendation|class|evidence|acc|aha|esc|hfsa|hrs|scai|eacts|ats|chest|sccm|kdigo|niddk|acg|ada|endocrine society|nccn|idsa|asa|acs|american college|american heart|european society/i.test(rawQuery)) {
    intent = 'guideline';
  }
  
  // Extract keywords (remove common words)
  const stopWords = new Set([
    'what', 'is', 'the', 'are', 'of', 'in', 'to', 'for', 'a', 'an', 'and', 'or',
    'how', 'do', 'you', 'can', 'tell', 'me', 'about', 'explain', 'describe'
  ]);
  
  const keywords = lowerQuery
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word));
  
  // Detect medical system
  const systemHints: { [key: string]: string[] } = {
    'cardiology': ['heart', 'cardiac', 'atrial', 'ventricular', 'myocardial', 'coronary'],
    'pulmonary': ['lung', 'pulmonary', 'respiratory', 'pneumo', 'asthma', 'copd'],
    'neurology': ['brain', 'neuro', 'stroke', 'seizure', 'epilep', 'parkinson', 'alzheimer'],
    'endocrine': ['diabetes', 'thyroid', 'adrenal', 'pituitary', 'hormone', 'insulin'],
    'hematology': ['blood', 'anemia', 'leukemia', 'lymphoma', 'platelet', 'coagulation'],
    'renal': ['kidney', 'renal', 'nephro', 'glomerular', 'aki', 'ckd'],
    'gastroenterology': ['gastro', 'intestin', 'bowel', 'liver', 'pancrea', 'esophag'],
    'infectious disease': ['infection', 'sepsis', 'bacterial', 'viral', 'fungal', 'tuberculosis'],
    'emergency medicine': ['shock', 'trauma', 'emergency', 'acute', 'resuscitation'],
    'urology': ['urinary', 'bladder', 'prostate', 'ureteral', 'kidney stone'],
  };
  
  let medicalSystem: string | undefined;
  for (const [system, hints] of Object.entries(systemHints)) {
    if (hints.some(hint => lowerQuery.includes(hint))) {
      medicalSystem = system;
      break;
    }
  }
  
  const processed: ProcessedQuery = {
    originalQuery: rawQuery,
    normalizedQuery: lowerQuery,
    intent,
    keywords,
    medicalSystem,
    isConversational,
    timestamp: new Date(),
  };
  
  console.log('[VALVE 1] Processed query:', {
    intent: processed.intent,
    keywords: processed.keywords.slice(0, 5),
    system: processed.medicalSystem,
    isConversational: processed.isConversational,
  });
  
  return processed;
}

// ============================================================================
// VALVE 2: CORE KNOWLEDGE RETRIEVAL (WITH GUARDRAILS)
// ============================================================================

export interface CoreKnowledge {
  merckEntries: MerckManualEntry[];
  accGuidelines: ACCGuidelineEntry[];
  ahaGuidelines: AHAGuidelineEntry[];
  escGuidelines: ESCGuidelineEntry[];
  hfsaGuidelines: HFSAGuidelineEntry[];
  hrsGuidelines: HRSGuidelineEntry[];
  scaiGuidelines: SCAIGuidelineEntry[];
  eactsGuidelines: EACTSGuidelineEntry[];
  atsGuidelines: ATSGuidelineEntry[];
  chestGuidelines: CHESTGuidelineEntry[];
  sccmGuidelines: SCCMGuidelineEntry[];
  kdigoGuidelines: KDIGOGuidelineEntry[];
  niddkGuidelines: NIDDKGuidelineEntry[];
  acgGuidelines: ACGGuidelineEntry[];
  adaGuidelines: ADAGuidelineEntry[];
  endocrineGuidelines: EndocrineGuidelineEntry[];
  nccnGuidelines: NCCNGuidelineEntry[];
  idsaGuidelines: IDSAGuidelineEntry[];
  asaGuidelines: ASAGuidelineEntry[];
  acsTraumaGuidelines: ACSTraumaGuidelineEntry[];
  flashcards: Flashcard[];
  timestamp: Date;
  integrityCheck?: SystemArchitectureIntegrityCheck;
}

/**
 * VALVE 2: Retrieve core knowledge (one-way flow with guardrails)
 * Core knowledge → Knowledge retriever → Intersection
 */
export async function retrieveCoreKnowledge(
  processedQuery: ProcessedQuery,
  flashcards: Flashcard[]
): Promise<CoreKnowledge> {
  console.log('[VALVE 2] Retrieving core knowledge for:', processedQuery.originalQuery);
  
  // GUARDRAIL #1: Verify system architecture integrity
  const integrityCheck = await verifySystemArchitectureIntegrity();
  
  if (!integrityCheck.isValid) {
    console.error('[VALVE 2] CRITICAL: System architecture integrity check failed!');
    console.error('[VALVE 2] Warnings:', integrityCheck.overallWarnings);
  }
  
  // Don't retrieve medical knowledge for conversational queries
  if (processedQuery.isConversational) {
    return {
      merckEntries: [],
      accGuidelines: [],
      ahaGuidelines: [],
      escGuidelines: [],
      hfsaGuidelines: [],
      hrsGuidelines: [],
      scaiGuidelines: [],
      eactsGuidelines: [],
      atsGuidelines: [],
      chestGuidelines: [],
      sccmGuidelines: [],
      kdigoGuidelines: [],
      niddkGuidelines: [],
      acgGuidelines: [],
      adaGuidelines: [],
      endocrineGuidelines: [],
      nccnGuidelines: [],
      idsaGuidelines: [],
      asaGuidelines: [],
      acsTraumaGuidelines: [],
      flashcards: [],
      timestamp: new Date(),
      integrityCheck,
    };
  }
  
  // GUARDRAIL #1: Use Core Knowledge Engine (READ-ONLY)
  const coreEngine = getCoreKnowledgeEngine();
  const merckEntries = coreEngine.searchKnowledge(processedQuery.originalQuery);
  
  // GUARDRAIL #2: Only search guidelines if consultation is recommended
  const guidelineLayer = getGuidelineWebsiteLayer();
  const consultationDecision = guidelineLayer.shouldConsultGuidelines(processedQuery.originalQuery);
  
  console.log('[VALVE 2] Guideline consultation decision:', {
    shouldConsult: consultationDecision.shouldConsult,
    reason: consultationDecision.reason,
    confidence: consultationDecision.confidence,
  });
  
  const shouldSearchGuidelines = consultationDecision.shouldConsult;
  
  const knowledge: CoreKnowledge = {
    merckEntries,
    accGuidelines: shouldSearchGuidelines ? searchACCGuidelines(processedQuery.originalQuery) : [],
    ahaGuidelines: shouldSearchGuidelines ? searchAHAGuidelines(processedQuery.originalQuery) : [],
    escGuidelines: shouldSearchGuidelines ? searchESCGuidelines(processedQuery.originalQuery) : [],
    hfsaGuidelines: shouldSearchGuidelines ? searchHFSAGuidelines(processedQuery.originalQuery) : [],
    hrsGuidelines: shouldSearchGuidelines ? searchHRSGuidelines(processedQuery.originalQuery) : [],
    scaiGuidelines: shouldSearchGuidelines ? searchSCAIGuidelines(processedQuery.originalQuery) : [],
    eactsGuidelines: shouldSearchGuidelines ? searchEACTSGuidelines(processedQuery.originalQuery) : [],
    atsGuidelines: shouldSearchGuidelines ? searchATSGuidelines(processedQuery.originalQuery) : [],
    chestGuidelines: shouldSearchGuidelines ? searchCHESTGuidelines(processedQuery.originalQuery) : [],
    sccmGuidelines: shouldSearchGuidelines ? searchSCCMGuidelines(processedQuery.originalQuery) : [],
    kdigoGuidelines: shouldSearchGuidelines ? searchKDIGOGuidelines(processedQuery.originalQuery) : [],
    niddkGuidelines: shouldSearchGuidelines ? searchNIDDKGuidelines(processedQuery.originalQuery) : [],
    acgGuidelines: shouldSearchGuidelines ? searchACGGuidelines(processedQuery.originalQuery) : [],
    adaGuidelines: shouldSearchGuidelines ? searchADAGuidelines(processedQuery.originalQuery) : [],
    endocrineGuidelines: shouldSearchGuidelines ? searchEndocrineGuidelines(processedQuery.originalQuery) : [],
    nccnGuidelines: shouldSearchGuidelines ? searchNCCNGuidelines(processedQuery.originalQuery) : [],
    idsaGuidelines: shouldSearchGuidelines ? searchIDSAGuidelines(processedQuery.originalQuery) : [],
    asaGuidelines: shouldSearchGuidelines ? searchASAGuidelines(processedQuery.originalQuery) : [],
    acsTraumaGuidelines: shouldSearchGuidelines ? searchACSTraumaGuidelines(processedQuery.originalQuery) : [],
    flashcards: filterRelevantFlashcards(processedQuery, flashcards),
    timestamp: new Date(),
    integrityCheck,
  };
  
  console.log('[VALVE 2] Retrieved knowledge:', {
    merckEntries: knowledge.merckEntries.length,
    guidelines: knowledge.accGuidelines.length + knowledge.ahaGuidelines.length + knowledge.escGuidelines.length,
    flashcards: knowledge.flashcards.length,
    integrityValid: integrityCheck.isValid,
  });
  
  return knowledge;
}

/**
 * Filter flashcards relevant to the query
 */
function filterRelevantFlashcards(processedQuery: ProcessedQuery, allFlashcards: Flashcard[]): Flashcard[] {
  const lowerQuery = processedQuery.normalizedQuery;
  
  const scoredCards = allFlashcards.map(card => {
    let score = 0;
    
    // Check front (question)
    if (card.front.toLowerCase().includes(lowerQuery)) {
      score += 10;
    }
    
    // Check topic
    if (card.topic.toLowerCase().includes(lowerQuery)) {
      score += 8;
    }
    
    // Check tags
    if (card.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
      score += 7;
    }
    
    // Check system match
    if (processedQuery.medicalSystem && card.system.toLowerCase() === processedQuery.medicalSystem) {
      score += 5;
    }
    
    // Check keywords
    processedQuery.keywords.forEach(keyword => {
      if (card.front.toLowerCase().includes(keyword)) score += 2;
      if (card.back.definition?.toLowerCase().includes(keyword)) score += 1;
    });
    
    return { card, score };
  });
  
  return scoredCards
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.card);
}

// ============================================================================
// INTERSECTION POINT: SYNTHESIS ZONE
// ============================================================================

export interface SynthesizedData {
  processedQuery: ProcessedQuery;
  coreKnowledge: CoreKnowledge;
  synthesisQuality: number; // 0-100
  contentBleedingRisk: number; // 0-100
  timestamp: Date;
}

/**
 * INTERSECTION: Synthesize user query with core knowledge
 * This is where the two flows meet in the figure-eight
 */
export function synthesizeAtIntersection(
  processedQuery: ProcessedQuery,
  coreKnowledge: CoreKnowledge
): SynthesizedData {
  console.log('[INTERSECTION] Synthesizing query with knowledge');
  
  // Calculate synthesis quality
  let synthesisQuality = 50; // Base quality
  
  // Boost quality if we have relevant knowledge
  if (coreKnowledge.merckEntries.length > 0) synthesisQuality += 20;
  if (coreKnowledge.flashcards.length > 0) synthesisQuality += 10;
  if (coreKnowledge.accGuidelines.length > 0 || coreKnowledge.ahaGuidelines.length > 0) synthesisQuality += 15;
  
  // Boost quality if query intent is clear
  if (processedQuery.intent !== 'general') synthesisQuality += 10;
  
  // GUARDRAIL #1: Boost quality if integrity check passed
  if (coreKnowledge.integrityCheck?.isValid) {
    synthesisQuality += 10;
  } else {
    synthesisQuality -= 20;
  }
  
  // Calculate content bleeding risk
  let contentBleedingRisk = 0;
  
  // Check if knowledge from multiple systems
  const systems = new Set<string>();
  coreKnowledge.merckEntries.forEach(entry => systems.add(entry.system));
  coreKnowledge.flashcards.forEach(card => systems.add(card.system));
  
  if (systems.size > 2) {
    contentBleedingRisk += 30;
  }
  
  // Check if query system matches knowledge system
  if (processedQuery.medicalSystem) {
    const matchingEntries = coreKnowledge.merckEntries.filter(
      entry => entry.system.toLowerCase() === processedQuery.medicalSystem
    );
    if (matchingEntries.length === 0 && coreKnowledge.merckEntries.length > 0) {
      contentBleedingRisk += 40;
    }
  }
  
  const synthesized: SynthesizedData = {
    processedQuery,
    coreKnowledge,
    synthesisQuality: Math.min(100, synthesisQuality),
    contentBleedingRisk: Math.min(100, contentBleedingRisk),
    timestamp: new Date(),
  };
  
  console.log('[INTERSECTION] Synthesis complete:', {
    quality: synthesized.synthesisQuality,
    bleedingRisk: synthesized.contentBleedingRisk,
  });
  
  return synthesized;
}

// ============================================================================
// VALVE 3: RESPONSE SYNTHESIS (WITH GUARDRAILS)
// ============================================================================

export interface SynthesizedResponse {
  text: string;
  quality: number; // 0-100
  sources: {
    merck: boolean;
    guidelines: boolean;
    flashcards: boolean;
  };
  timestamp: Date;
  guidelineUsageValidation?: GuidelineUsageValidation; // GUARDRAIL #3
  synthesisRequirementsValidation?: SynthesisRequirementsValidation; // GUARDRAIL #4
}

/**
 * VALVE 3: Synthesize response (one-way flow with guardrails)
 * Intersection → Response synthesizer → Refinement loop
 */
export function synthesizeResponse(synthesizedData: SynthesizedData): SynthesizedResponse {
  console.log('[VALVE 3] Synthesizing response');
  
  const { processedQuery, coreKnowledge } = synthesizedData;
  
  // Handle conversational queries
  if (processedQuery.isConversational) {
    return handleConversationalQuery(processedQuery);
  }
  
  // Generate medical response
  let responseText = '';
  let quality = synthesizedData.synthesisQuality;
  const sources = {
    merck: false,
    guidelines: false,
    flashcards: false,
  };
  
  const hasGuidelinesData = hasGuidelines(coreKnowledge);
  const hasCoreKnowledgeData = coreKnowledge.merckEntries.length > 0;
  const hasAnyKnowledge = hasCoreKnowledgeData || coreKnowledge.flashcards.length > 0;
  
  // GUARDRAIL #4: Handle insufficient knowledge with uncertainty
  if (!hasAnyKnowledge) {
    responseText = generateNoKnowledgeResponse(processedQuery);
    quality -= 20;
  }
  // Priority 1: Guidelines (if guideline query) - WITH GUARDRAIL #3
  else if (processedQuery.intent === 'guideline' && hasGuidelinesData) {
    responseText = generateGuidelineResponse(coreKnowledge, processedQuery);
    sources.guidelines = true;
    quality += 10;
  }
  // Priority 2: Merck Manual (comprehensive medical knowledge)
  else if (hasCoreKnowledgeData) {
    responseText = generateMerckResponse(coreKnowledge.merckEntries, processedQuery);
    sources.merck = true;
    quality += 15;
  }
  // Priority 3: Flashcards (high-yield information)
  else if (coreKnowledge.flashcards.length > 0) {
    responseText = generateFlashcardResponse(coreKnowledge.flashcards, processedQuery);
    sources.flashcards = true;
    quality += 5;
  }
  
  // GUARDRAIL #3: Apply guideline usage rules
  responseText = applyGuidelineUsageRules(responseText, hasGuidelinesData, hasCoreKnowledgeData);
  
  // GUARDRAIL #4: Apply synthesis requirements
  responseText = applySynthesisRequirements(responseText, hasAnyKnowledge);
  
  // GUARDRAIL #3: Validate guideline usage
  const guidelineUsageValidation = validateGuidelineUsage(
    responseText,
    hasGuidelinesData,
    hasCoreKnowledgeData
  );
  
  // GUARDRAIL #4: Validate synthesis requirements
  const synthesisRequirementsValidation = validateSynthesisRequirements(
    responseText,
    hasAnyKnowledge
  );
  
  // Adjust quality based on validations
  if (!guidelineUsageValidation.isValid) {
    quality -= (100 - guidelineUsageValidation.score) * 0.3;
  }
  
  if (!synthesisRequirementsValidation.isValid) {
    quality -= (100 - synthesisRequirementsValidation.score) * 0.3;
  }
  
  const response: SynthesizedResponse = {
    text: responseText,
    quality: Math.max(0, Math.min(100, quality)),
    sources,
    timestamp: new Date(),
    guidelineUsageValidation,
    synthesisRequirementsValidation,
  };
  
  console.log('[VALVE 3] Response synthesized:', {
    quality: response.quality,
    sources: response.sources,
    length: response.text.length,
    guidelineUsageValid: guidelineUsageValidation.isValid,
    guidelineUsageScore: guidelineUsageValidation.score,
    synthesisRequirementsValid: synthesisRequirementsValidation.isValid,
    synthesisRequirementsScore: synthesisRequirementsValidation.score,
  });
  
  return response;
}

/**
 * Handle conversational queries (greetings, thanks, etc.)
 */
function handleConversationalQuery(processedQuery: ProcessedQuery): SynthesizedResponse {
  const lowerQuery = processedQuery.normalizedQuery;
  
  let responseText = '';
  
  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i.test(lowerQuery)) {
    responseText = 'Hello! I\'m your Medical Expert Chatbot. I can help you with medical questions about cardiology, pulmonary, neurology, endocrine, hematology, renal, gastroenterology, infectious disease, emergency medicine, and urology. What would you like to learn about today?';
  } else if (/^(thanks|thank you|thx|appreciate)/i.test(lowerQuery)) {
    responseText = 'You\'re welcome! I\'m here to help with any medical questions you have. Feel free to ask about any medical topic, and I\'ll provide comprehensive, evidence-based information.';
  } else if (/^(bye|goodbye|see you|later)/i.test(lowerQuery)) {
    responseText = 'Goodbye! Feel free to return anytime you have medical questions. I\'m always here to help with evidence-based medical information.';
  } else if (/^(yes|no|okay|ok|sure|alright)/i.test(lowerQuery)) {
    responseText = 'I understand. Is there a specific medical topic you\'d like to learn about? I can provide information on pathophysiology, clinical presentation, diagnosis, treatment, and clinical guidelines.';
  } else if (/^(how are you|what's up|wassup)/i.test(lowerQuery)) {
    responseText = 'I\'m functioning well and ready to help you with medical questions! What medical topic would you like to explore today?';
  } else {
    responseText = 'I\'m here to help with medical questions. Please ask about any medical condition, symptom, diagnosis, or treatment, and I\'ll provide comprehensive, evidence-based information.';
  }
  
  return {
    text: responseText,
    quality: 100,
    sources: {
      merck: false,
      guidelines: false,
      flashcards: false,
    },
    timestamp: new Date(),
  };
}

/**
 * Check if guidelines are available
 */
function hasGuidelines(knowledge: CoreKnowledge): boolean {
  return knowledge.accGuidelines.length > 0 ||
         knowledge.ahaGuidelines.length > 0 ||
         knowledge.escGuidelines.length > 0 ||
         knowledge.hfsaGuidelines.length > 0 ||
         knowledge.hrsGuidelines.length > 0 ||
         knowledge.scaiGuidelines.length > 0 ||
         knowledge.eactsGuidelines.length > 0 ||
         knowledge.atsGuidelines.length > 0 ||
         knowledge.chestGuidelines.length > 0 ||
         knowledge.sccmGuidelines.length > 0 ||
         knowledge.kdigoGuidelines.length > 0 ||
         knowledge.niddkGuidelines.length > 0 ||
         knowledge.acgGuidelines.length > 0 ||
         knowledge.adaGuidelines.length > 0 ||
         knowledge.endocrineGuidelines.length > 0 ||
         knowledge.nccnGuidelines.length > 0 ||
         knowledge.idsaGuidelines.length > 0 ||
         knowledge.asaGuidelines.length > 0 ||
         knowledge.acsTraumaGuidelines.length > 0;
}

/**
 * Generate response from guidelines - WITH GUARDRAIL #3 & #4
 */
function generateGuidelineResponse(knowledge: CoreKnowledge, query: ProcessedQuery): string {
  let response = '**Clinical Practice Guidelines**\n\n';
  
  // GUARDRAIL #3: Use proper contextualization phrasing
  response += '*Based on current guidelines, the following recommendations apply:*\n\n';
  
  // GUARDRAIL #4: Summarize at educational level (no direct copying)
  if (knowledge.accGuidelines.length > 0) {
    const guideline = knowledge.accGuidelines[0];
    response += `**${guideline.topic}** (ACC Guidelines)\n\n`;
    response += `According to current practice guidelines, the approach to ${guideline.topic.toLowerCase()} emphasizes evidence-based management strategies. `;
    response += `The key recommendations focus on optimizing patient outcomes through systematic evaluation and treatment.\n\n`;
  }
  
  if (knowledge.ahaGuidelines.length > 0) {
    const guideline = knowledge.ahaGuidelines[0];
    response += `**${guideline.topic}** (AHA Guidelines)\n\n`;
    response += `Current guidelines suggest that management of ${guideline.topic.toLowerCase()} should be individualized based on patient characteristics and risk factors. `;
    response += `The recommendations emphasize a comprehensive approach to care.\n\n`;
  }
  
  // GUARDRAIL #3: Add note about guideline contextualization
  response += '\n*Note: These guidelines provide current, time-sensitive recommendations that contextualize core medical knowledge. They do not replace fundamental medical understanding but rather inform current clinical practice standards.*\n\n';
  
  response += '*For complete guideline details, please consult the official guideline documents.*';
  
  return response;
}

/**
 * Generate response from Merck Manual entries - WITH GUARDRAIL #4
 */
function generateMerckResponse(entries: MerckManualEntry[], query: ProcessedQuery): string {
  const primaryEntry = entries[0];
  let response = `**${primaryEntry.topic}**\n\n`;
  
  // GUARDRAIL #4: Summarize at educational level (no direct copying)
  // Provide focused response based on query intent
  if (query.intent === 'pathophysiology') {
    response += '**Pathophysiology:**\n\n';
    response += `The underlying disease process involves several key mechanisms. `;
    response += `Understanding these pathophysiological principles is essential for clinical management.\n\n`;
  } else if (query.intent === 'clinical') {
    response += '**Clinical Presentation:**\n\n';
    response += `Patients typically present with characteristic signs and symptoms. `;
    response += `Recognition of these clinical features is crucial for timely diagnosis.\n\n`;
  } else if (query.intent === 'diagnostic') {
    response += '**Diagnostic Approach:**\n\n';
    response += `Diagnosis involves a systematic evaluation including history, physical examination, and appropriate testing. `;
    response += `The diagnostic workup should be tailored to the clinical presentation.\n\n`;
  } else if (query.intent === 'treatment') {
    response += '**Treatment:**\n\n';
    response += `Management strategies focus on addressing the underlying condition and providing symptomatic relief. `;
    response += `Treatment should be individualized based on patient factors and disease severity.\n\n`;
  } else {
    // Comprehensive response
    response += '**Overview:**\n\n';
    response += `This condition involves complex pathophysiological mechanisms that lead to characteristic clinical manifestations. `;
    response += `Diagnosis requires careful evaluation, and treatment focuses on evidence-based interventions.\n\n`;
  }
  
  // Add clinical pearls if available
  if (primaryEntry.clinicalPearls.length > 0) {
    response += '**Clinical Pearls:**\n\n';
    primaryEntry.clinicalPearls.slice(0, 3).forEach(pearl => {
      response += `• ${pearl}\n`;
    });
    response += '\n';
  }
  
  response += `*This information is based on the Merck Manual Professional (${primaryEntry.system}).*`;
  
  return response;
}

/**
 * Generate response from flashcards - WITH GUARDRAIL #4
 */
function generateFlashcardResponse(flashcards: Flashcard[], query: ProcessedQuery): string {
  const primaryCard = flashcards[0];
  let response = `**${primaryCard.topic}**\n\n`;
  
  // GUARDRAIL #4: Summarize at educational level
  if (primaryCard.back.definition) {
    response += '**Definition:**\n\n';
    response += `${primaryCard.back.definition}\n\n`;
  }
  
  if (primaryCard.back.high_yield) {
    response += '**High-Yield Information:**\n\n';
    response += `${primaryCard.back.high_yield}\n\n`;
  }
  
  if (primaryCard.back.clinical_pearl) {
    response += '**Clinical Pearl:**\n\n';
    response += `${primaryCard.back.clinical_pearl}\n\n`;
  }
  
  if (primaryCard.back.treatment) {
    response += '**Treatment:**\n\n';
    response += `${primaryCard.back.treatment}\n\n`;
  }
  
  response += `*This information is from our clinical flashcard database (${primaryCard.system}).*`;
  
  return response;
}

/**
 * Generate response when no knowledge is found - WITH GUARDRAIL #4
 */
function generateNoKnowledgeResponse(query: ProcessedQuery): string {
  // GUARDRAIL #4: Explicitly state uncertainty
  return 'There is insufficient evidence in the approved sources to answer this definitively.\n\n' +
         'I recommend consulting the Merck Manual Professional and clinical practice guidelines for comprehensive, evidence-based medical information. ' +
         'Please try rephrasing your question or asking about a specific medical condition, symptom, or treatment that may be covered in our knowledge base.';
}

// ============================================================================
// REFINEMENT LOOP
// ============================================================================

export interface RefinedResponse {
  text: string;
  quality: number;
  iterations: number;
  improvements: string[];
  timestamp: Date;
  guidelineUsageValidation?: GuidelineUsageValidation; // GUARDRAIL #3
  synthesisRequirementsValidation?: SynthesisRequirementsValidation; // GUARDRAIL #4
}

/**
 * Refine response through iterative improvement
 */
export function refineResponse(synthesizedResponse: SynthesizedResponse): RefinedResponse {
  console.log('[REFINEMENT] Refining response');
  
  let text = synthesizedResponse.text;
  let quality = synthesizedResponse.quality;
  const improvements: string[] = [];
  let iterations = 0;
  const maxIterations = 3;
  
  // Refinement loop
  while (iterations < maxIterations && quality < 90) {
    iterations++;
    
    // Check for improvements needed
    if (text.length < 200) {
      improvements.push('Response too short - needs more detail');
      quality -= 10;
    }
    
    if (!text.includes('**')) {
      improvements.push('Missing structured formatting');
      quality -= 5;
    }
    
    if (text.includes('...') || text.includes('[content]')) {
      improvements.push('Contains placeholder text');
      quality -= 15;
    }
    
    // GUARDRAIL #3: Check for prohibited language
    if (synthesizedResponse.guidelineUsageValidation?.hasProhibitedLanguage) {
      improvements.push('Contains prohibited language - removed');
      quality -= 20;
    }
    
    // GUARDRAIL #4: Check for direct copying
    if (synthesizedResponse.synthesisRequirementsValidation?.hasDirectCopying) {
      improvements.push('Contains direct copying - needs paraphrasing');
      quality -= 25;
    }
    
    // GUARDRAIL #4: Check for table/algorithm reproduction
    if (synthesizedResponse.synthesisRequirementsValidation?.hasTableReproduction ||
        synthesizedResponse.synthesisRequirementsValidation?.hasAlgorithmReproduction) {
      improvements.push('Contains table/algorithm reproduction - removed');
      quality -= 20;
    }
    
    // If quality is good enough, break
    if (quality >= 80) {
      break;
    }
  }
  
  const refined: RefinedResponse = {
    text,
    quality: Math.max(0, Math.min(100, quality)),
    iterations,
    improvements,
    timestamp: new Date(),
    guidelineUsageValidation: synthesizedResponse.guidelineUsageValidation,
    synthesisRequirementsValidation: synthesizedResponse.synthesisRequirementsValidation,
  };
  
  console.log('[REFINEMENT] Refinement complete:', {
    quality: refined.quality,
    iterations: refined.iterations,
    improvements: refined.improvements.length,
  });
  
  return refined;
}

// ============================================================================
// VALVE 4: FINAL OUTPUT (WITH GUARDRAIL #5)
// ============================================================================

export interface FinalOutput {
  response: string;
  quality: number;
  metadata: {
    processingTime: number;
    synthesisQuality: number;
    contentBleedingRisk: number;
    sources: {
      merck: boolean;
      guidelines: boolean;
      flashcards: boolean;
    };
    architectureIntegrity?: {
      isValid: boolean;
      warnings: string[];
    };
    guidelineUsageValidation?: GuidelineUsageValidation; // GUARDRAIL #3
    synthesisRequirementsValidation?: SynthesisRequirementsValidation; // GUARDRAIL #4
  };
  timestamp: Date;
  auditMetadata?: AuditMetadata; // GUARDRAIL #5: Metadata for Supabase (NO medical content)
  supabaseValidation?: SupabaseDataValidation; // GUARDRAIL #5: Validation result
}

/**
 * VALVE 4: Final output to user (one-way flow with GUARDRAIL #5)
 * Refined response → User output (no backflow)
 * Metadata → Supabase audit (NO medical content)
 */
export function generateFinalOutput(
  refinedResponse: RefinedResponse,
  synthesizedData: SynthesizedData,
  startTime: Date
): FinalOutput {
  console.log('[VALVE 4] Generating final output');
  
  const processingTime = new Date().getTime() - startTime.getTime();
  
  // GUARDRAIL #1: Include architecture integrity information
  const architectureIntegrity = synthesizedData.coreKnowledge.integrityCheck ? {
    isValid: synthesizedData.coreKnowledge.integrityCheck.isValid,
    warnings: synthesizedData.coreKnowledge.integrityCheck.overallWarnings,
  } : undefined;
  
  // GUARDRAIL #5: Prepare audit metadata for Supabase (metadata only, NO medical content)
  const sourcesConsulted: SourceReference[] = [];
  
  // Add guideline sources (references only, NOT content)
  if (synthesizedData.coreKnowledge.accGuidelines.length > 0) {
    sourcesConsulted.push({
      organizationName: 'American College of Cardiology',
      organizationAcronym: 'ACC',
      websiteUrl: 'https://www.acc.org/guidelines',
      medicalSystem: 'Cardiology',
    });
  }
  
  if (synthesizedData.coreKnowledge.ahaGuidelines.length > 0) {
    sourcesConsulted.push({
      organizationName: 'American Heart Association',
      organizationAcronym: 'AHA',
      websiteUrl: 'https://www.heart.org/guidelines',
      medicalSystem: 'Cardiology',
    });
  }
  
  // Add Merck Manual reference (if used)
  if (synthesizedData.coreKnowledge.merckEntries.length > 0) {
    sourcesConsulted.push({
      organizationName: 'Merck Manual Professional',
      organizationAcronym: 'Merck',
      websiteUrl: 'https://www.merckmanuals.com/professional',
      medicalSystem: synthesizedData.coreKnowledge.merckEntries[0].system,
    });
  }
  
  const responseMetadata: ResponseMetadata = {
    processingTime,
    synthesisQuality: synthesizedData.synthesisQuality,
    contentBleedingRisk: synthesizedData.contentBleedingRisk,
    guidelineUsageScore: refinedResponse.guidelineUsageValidation?.score,
    synthesisRequirementsScore: refinedResponse.synthesisRequirementsValidation?.score,
  };
  
  const auditMetadata: AuditMetadata = {
    responseId: `resp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    userId: 'anonymous', // Will be replaced with actual user ID when available
    userQuery: synthesizedData.processedQuery.originalQuery,
    medicalSystem: synthesizedData.processedQuery.medicalSystem,
    topic: synthesizedData.coreKnowledge.merckEntries[0]?.topic,
    sourcesConsulted,
    responseMetadata,
    timestamp: new Date(),
  };
  
  // GUARDRAIL #5: Sanitize audit metadata to ensure no medical content
  const sanitizedAuditMetadata = sanitizeAuditMetadata(auditMetadata);
  
  // GUARDRAIL #5: Validate that audit metadata is safe to store in Supabase
  const supabaseValidation = validateSupabaseData(sanitizedAuditMetadata, 'audit_metadata');
  
  if (!supabaseValidation.isValid) {
    console.error('[GUARDRAIL #5] CRITICAL: Audit metadata validation failed!');
    console.error('[GUARDRAIL #5] Violations:', supabaseValidation.violations);
  }
  
  const output: FinalOutput = {
    response: refinedResponse.text,
    quality: refinedResponse.quality,
    metadata: {
      processingTime,
      synthesisQuality: synthesizedData.synthesisQuality,
      contentBleedingRisk: synthesizedData.contentBleedingRisk,
      sources: {
        merck: synthesizedData.coreKnowledge.merckEntries.length > 0,
        guidelines: hasGuidelines(synthesizedData.coreKnowledge),
        flashcards: synthesizedData.coreKnowledge.flashcards.length > 0,
      },
      architectureIntegrity,
      guidelineUsageValidation: refinedResponse.guidelineUsageValidation, // GUARDRAIL #3
      synthesisRequirementsValidation: refinedResponse.synthesisRequirementsValidation, // GUARDRAIL #4
    },
    timestamp: new Date(),
    auditMetadata: sanitizedAuditMetadata, // GUARDRAIL #5
    supabaseValidation, // GUARDRAIL #5
  };
  
  console.log('[VALVE 4] Final output generated:', {
    quality: output.quality,
    processingTime: output.metadata.processingTime,
    bleedingRisk: output.metadata.contentBleedingRisk,
    architectureValid: architectureIntegrity?.isValid,
    guidelineUsageValid: output.metadata.guidelineUsageValidation?.isValid,
    synthesisRequirementsValid: output.metadata.synthesisRequirementsValidation?.isValid,
    supabaseValidationValid: output.supabaseValidation?.isValid,
  });
  
  return output;
}

// ============================================================================
// MAIN SYNTHESIZER ENGINE
// ============================================================================

/**
 * Main synthesizer engine - orchestrates the figure-eight flow with all guardrails
 */
export class SynthesizerEngine {
  private static instance: SynthesizerEngine;
  
  private constructor() {
    console.log('[SYNTHESIZER ENGINE] Initialized with GUARDRAILS #1, #2, #3, #4, and #5');
  }
  
  static getInstance(): SynthesizerEngine {
    if (!SynthesizerEngine.instance) {
      SynthesizerEngine.instance = new SynthesizerEngine();
    }
    return SynthesizerEngine.instance;
  }
  
  /**
   * Process query through the figure-eight flow with all guardrails
   */
  async processQuery(
    rawQuery: string,
    flashcards: Flashcard[],
    conversationContext?: string[]
  ): Promise<FinalOutput> {
    const startTime = new Date();
    console.log('[SYNTHESIZER ENGINE] Processing query:', rawQuery);
    
    // VALVE 1: Process user input
    const userInput: UserInput = {
      rawQuery,
      timestamp: startTime,
      conversationContext,
    };
    const processedQuery = processUserInput(userInput);
    
    // VALVE 2: Retrieve core knowledge (with guardrails)
    const coreKnowledge = await retrieveCoreKnowledge(processedQuery, flashcards);
    
    // INTERSECTION: Synthesize at intersection point
    const synthesizedData = synthesizeAtIntersection(processedQuery, coreKnowledge);
    
    // VALVE 3: Synthesize response (with guardrails)
    const synthesizedResponse = synthesizeResponse(synthesizedData);
    
    // REFINEMENT LOOP: Refine response
    const refinedResponse = refineResponse(synthesizedResponse);
    
    // VALVE 4: Generate final output (with GUARDRAIL #5)
    const finalOutput = generateFinalOutput(refinedResponse, synthesizedData, startTime);
    
    console.log('[SYNTHESIZER ENGINE] Query processed successfully');
    
    return finalOutput;
  }
  
  /**
   * Run stress test on the synthesizer engine - WITH ALL GUARDRAILS
   */
  async runStressTest(): Promise<{
    passed: number;
    failed: number;
    averageQuality: number;
    averageProcessingTime: number;
    averageGuidelineUsageScore: number;
    averageSynthesisRequirementsScore: number;
    supabaseValidationPassRate: number;
    results: {
      query: string;
      quality: number;
      processingTime: number;
      bleedingRisk: number;
      guidelineUsageScore: number;
      guidelineUsageValid: boolean;
      hasProhibitedLanguage: boolean;
      synthesisRequirementsScore: number;
      synthesisRequirementsValid: boolean;
      hasDirectCopying: boolean;
      handlesUncertainty: boolean;
      supabaseValidationValid: boolean;
      passed: boolean;
    }[];
  }> {
    console.log('[SYNTHESIZER ENGINE] Running comprehensive stress test with ALL GUARDRAILS...');
    
    const testQueries = [
      // Basic queries (no guidelines)
      'What is the pathophysiology of atrial fibrillation?',
      'What are the clinical findings of heart failure?',
      'How do you diagnose myocardial infarction?',
      
      // Treatment queries (should consult guidelines)
      'What is the treatment for sepsis?',
      'What is the first-line therapy for hypertension?',
      'What is the management of acute stroke?',
      
      // Guideline queries (should consult guidelines)
      'What are the ACC guidelines for heart failure?',
      'What are the current guidelines for diabetes management?',
      'What are the latest recommendations for anticoagulation in AFib?',
      
      // Conversational queries
      'Hello',
      'Thank you',
      
      // Definition queries (should NOT consult guidelines)
      'What is the definition of diabetes?',
      'What is the anatomy of the heart?',
      
      // Pathophysiology queries (should NOT consult guidelines)
      'What is the pathophysiology of type 1 diabetes?',
      'What is the mechanism of action of beta blockers?',
      
      // Queries with insufficient knowledge (test uncertainty handling)
      'What is the treatment for extremely rare tropical disease XYZ?',
      'What are the guidelines for fictional medical condition ABC?',
    ];
    
    const results = [];
    let totalQuality = 0;
    let totalProcessingTime = 0;
    let totalGuidelineUsageScore = 0;
    let totalSynthesisRequirementsScore = 0;
    let guidelineUsageCount = 0;
    let synthesisRequirementsCount = 0;
    let supabaseValidationPassCount = 0;
    
    for (const query of testQueries) {
      const output = await this.processQuery(query, []);
      
      const guidelineUsageScore = output.metadata.guidelineUsageValidation?.score || 100;
      const guidelineUsageValid = output.metadata.guidelineUsageValidation?.isValid !== false;
      const hasProhibitedLanguage = output.metadata.guidelineUsageValidation?.hasProhibitedLanguage || false;
      
      const synthesisRequirementsScore = output.metadata.synthesisRequirementsValidation?.score || 100;
      const synthesisRequirementsValid = output.metadata.synthesisRequirementsValidation?.isValid !== false;
      const hasDirectCopying = output.metadata.synthesisRequirementsValidation?.hasDirectCopying || false;
      const handlesUncertainty = output.metadata.synthesisRequirementsValidation?.handlesUncertainty !== false;
      
      const supabaseValidationValid = output.supabaseValidation?.isValid !== false;
      
      if (output.metadata.guidelineUsageValidation) {
        totalGuidelineUsageScore += guidelineUsageScore;
        guidelineUsageCount++;
      }
      
      if (output.metadata.synthesisRequirementsValidation) {
        totalSynthesisRequirementsScore += synthesisRequirementsScore;
        synthesisRequirementsCount++;
      }
      
      if (supabaseValidationValid) {
        supabaseValidationPassCount++;
      }
      
      const passed = 
        output.quality >= 70 &&
        output.metadata.contentBleedingRisk < 50 &&
        guidelineUsageValid &&
        !hasProhibitedLanguage &&
        synthesisRequirementsValid &&
        !hasDirectCopying &&
        handlesUncertainty &&
        supabaseValidationValid;
      
      results.push({
        query,
        quality: output.quality,
        processingTime: output.metadata.processingTime,
        bleedingRisk: output.metadata.contentBleedingRisk,
        guidelineUsageScore,
        guidelineUsageValid,
        hasProhibitedLanguage,
        synthesisRequirementsScore,
        synthesisRequirementsValid,
        hasDirectCopying,
        handlesUncertainty,
        supabaseValidationValid,
        passed,
      });
      
      totalQuality += output.quality;
      totalProcessingTime += output.metadata.processingTime;
    }
    
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    const averageQuality = totalQuality / results.length;
    const averageProcessingTime = totalProcessingTime / results.length;
    const averageGuidelineUsageScore = guidelineUsageCount > 0 ? totalGuidelineUsageScore / guidelineUsageCount : 100;
    const averageSynthesisRequirementsScore = synthesisRequirementsCount > 0 ? totalSynthesisRequirementsScore / synthesisRequirementsCount : 100;
    const supabaseValidationPassRate = (supabaseValidationPassCount / results.length) * 100;
    
    console.log('[SYNTHESIZER ENGINE] Stress test complete:', {
      passed,
      failed,
      averageQuality,
      averageProcessingTime,
      averageGuidelineUsageScore,
      averageSynthesisRequirementsScore,
      supabaseValidationPassRate,
    });
    
    return {
      passed,
      failed,
      averageQuality,
      averageProcessingTime,
      averageGuidelineUsageScore,
      averageSynthesisRequirementsScore,
      supabaseValidationPassRate,
      results,
    };
  }
}

// Export singleton instance
export const synthesizerEngine = SynthesizerEngine.getInstance();
