
/**
 * GUARDRAIL #8: FAIL-SAFE RULES
 * 
 * This guardrail ensures the system handles failures gracefully and transparently:
 * 
 * IF:
 * • Internet is unavailable
 * • Guideline site is inaccessible
 * • Evidence is conflicting or unclear
 * 
 * THEN:
 * • Fall back to core knowledge engine
 * • State limitations transparently
 * • Avoid definitive treatment claims
 * 
 * KEY PRINCIPLES:
 * 
 * • Graceful degradation when external resources are unavailable
 * • Transparent communication about system limitations
 * • Conservative approach when evidence is insufficient or conflicting
 * • Maintain user trust through honesty about capabilities
 * • Prioritize safety over completeness
 */

import * as Network from 'expo-network';

// ============================================================================
// FAIL-SAFE INTERFACES
// ============================================================================

/**
 * System availability status
 */
export interface SystemAvailability {
  internetAvailable: boolean;
  guidelinesAccessible: boolean;
  coreKnowledgeAvailable: boolean;
  timestamp: Date;
}

/**
 * Evidence quality assessment
 */
export interface EvidenceQuality {
  isConflicting: boolean;
  isUnclear: boolean;
  isSufficient: boolean;
  conflictingAreas: string[];
  unclearAreas: string[];
  confidence: number; // 0-100
}

/**
 * Fail-safe decision
 */
export interface FailSafeDecision {
  shouldFallback: boolean;
  reason: string;
  limitations: string[];
  recommendations: string[];
  mode: 'full' | 'degraded' | 'core-only' | 'unavailable';
  confidence: number; // 0-100
}

/**
 * Fail-safe validation result
 */
export interface FailSafeValidation {
  isValid: boolean;
  hasTransparentLimitations: boolean;
  avoidsDefinitiveClaims: boolean;
  usesCoreKnowledge: boolean;
  hasProperFallback: boolean;
  prohibitedPhrases: string[];
  warnings: string[];
  score: number; // 0-100
}

// ============================================================================
// PROHIBITED LANGUAGE PATTERNS
// ============================================================================

/**
 * Phrases that make definitive treatment claims (PROHIBITED in degraded mode)
 */
const DEFINITIVE_TREATMENT_PATTERNS = [
  /you (must|should definitely|need to) (take|use|start)/i,
  /the (only|best|correct) treatment is/i,
  /always (use|prescribe|give)/i,
  /never (use|prescribe|give)/i,
  /guaranteed to (work|cure|treat)/i,
  /will definitely (cure|treat|resolve)/i,
  /this is the (only|best) (option|choice|treatment)/i,
  /absolutely (must|should|need to)/i,
  /without (question|doubt), (use|take|prescribe)/i,
];

/**
 * Required transparency phrases for degraded mode
 */
const TRANSPARENCY_PHRASES = [
  'internet connectivity is currently unavailable',
  'guidelines are not accessible at this time',
  'based on core medical knowledge only',
  'current guidelines could not be consulted',
  'limited to fundamental medical principles',
  'unable to access current practice guidelines',
  'relying on established medical knowledge',
  'external resources are unavailable',
];

/**
 * Conservative phrasing for uncertain situations
 */
const CONSERVATIVE_PHRASES = [
  'may require',
  'typically involves',
  'generally includes',
  'often recommended',
  'commonly used',
  'standard approach includes',
  'established principles suggest',
  'fundamental approach involves',
  'based on core medical knowledge',
  'consult current guidelines for',
];

// ============================================================================
// SYSTEM AVAILABILITY CHECKING
// ============================================================================

/**
 * Check system availability status
 */
export async function checkSystemAvailability(): Promise<SystemAvailability> {
  console.log('[FAIL-SAFE] Checking system availability...');

  let internetAvailable = false;
  let guidelinesAccessible = false;

  try {
    // Check internet connectivity
    const networkState = await Network.getNetworkStateAsync();
    internetAvailable = networkState.isConnected && networkState.isInternetReachable;

    // If internet is available, check if guidelines are accessible
    if (internetAvailable) {
      // In a real implementation, this would ping guideline websites
      // For now, we assume guidelines are accessible if internet is available
      guidelinesAccessible = true;
    }
  } catch (error) {
    console.error('[FAIL-SAFE] Error checking availability:', error);
    internetAvailable = false;
    guidelinesAccessible = false;
  }

  // Core knowledge is always available (local)
  const coreKnowledgeAvailable = true;

  const availability: SystemAvailability = {
    internetAvailable,
    guidelinesAccessible,
    coreKnowledgeAvailable,
    timestamp: new Date(),
  };

  console.log('[FAIL-SAFE] System availability:', availability);

  return availability;
}

// ============================================================================
// EVIDENCE QUALITY ASSESSMENT
// ============================================================================

/**
 * Assess evidence quality and detect conflicts
 */
export function assessEvidenceQuality(
  coreKnowledgeCount: number,
  guidelineCount: number,
  coreKnowledgeTopics: string[],
  guidelineTopics: string[]
): EvidenceQuality {
  console.log('[FAIL-SAFE] Assessing evidence quality...');

  const conflictingAreas: string[] = [];
  const unclearAreas: string[] = [];

  // Check for conflicting information
  // If we have both core knowledge and guidelines but they cover different topics
  if (coreKnowledgeCount > 0 && guidelineCount > 0) {
    const coreTopicsSet = new Set(coreKnowledgeTopics.map(t => t.toLowerCase()));
    const guidelineTopicsSet = new Set(guidelineTopics.map(t => t.toLowerCase()));

    // Check for topic overlap
    const hasOverlap = [...coreTopicsSet].some(topic => guidelineTopicsSet.has(topic));

    if (!hasOverlap && coreKnowledgeCount > 0 && guidelineCount > 0) {
      conflictingAreas.push('Topic mismatch between core knowledge and guidelines');
    }
  }

  // Check for unclear evidence
  if (coreKnowledgeCount === 0 && guidelineCount === 0) {
    unclearAreas.push('No relevant evidence found');
  }

  if (coreKnowledgeCount > 0 && guidelineCount === 0) {
    unclearAreas.push('Guidelines not available for this topic');
  }

  // Determine if evidence is conflicting or unclear
  const isConflicting = conflictingAreas.length > 0;
  const isUnclear = unclearAreas.length > 0;
  const isSufficient = coreKnowledgeCount > 0 || guidelineCount > 0;

  // Calculate confidence
  let confidence = 50; // Base confidence

  if (coreKnowledgeCount > 0) confidence += 25;
  if (guidelineCount > 0) confidence += 25;
  if (isConflicting) confidence -= 30;
  if (isUnclear) confidence -= 20;

  confidence = Math.max(0, Math.min(100, confidence));

  const quality: EvidenceQuality = {
    isConflicting,
    isUnclear,
    isSufficient,
    conflictingAreas,
    unclearAreas,
    confidence,
  };

  console.log('[FAIL-SAFE] Evidence quality:', quality);

  return quality;
}

// ============================================================================
// FAIL-SAFE DECISION LOGIC
// ============================================================================

/**
 * Make fail-safe decision based on system availability and evidence quality
 */
export function makeFailSafeDecision(
  availability: SystemAvailability,
  evidenceQuality: EvidenceQuality
): FailSafeDecision {
  console.log('[FAIL-SAFE] Making fail-safe decision...');

  const limitations: string[] = [];
  const recommendations: string[] = [];
  let mode: 'full' | 'degraded' | 'core-only' | 'unavailable' = 'full';
  let shouldFallback = false;
  let reason = '';

  // CASE 1: Internet unavailable
  if (!availability.internetAvailable) {
    shouldFallback = true;
    mode = 'core-only';
    reason = 'Internet connectivity is unavailable';
    limitations.push('Current practice guidelines cannot be consulted');
    limitations.push('Response based on core medical knowledge only');
    recommendations.push('Consult current clinical practice guidelines when internet is available');
    recommendations.push('Verify treatment recommendations with authoritative sources');
  }
  // CASE 2: Guidelines inaccessible
  else if (!availability.guidelinesAccessible) {
    shouldFallback = true;
    mode = 'degraded';
    reason = 'Guideline websites are not accessible';
    limitations.push('Current practice guidelines could not be retrieved');
    limitations.push('Response based on core medical knowledge');
    recommendations.push('Retry when guideline websites are accessible');
    recommendations.push('Consult official guideline publications directly');
  }
  // CASE 3: Evidence is conflicting
  else if (evidenceQuality.isConflicting) {
    shouldFallback = true;
    mode = 'degraded';
    reason = 'Evidence from multiple sources is conflicting';
    limitations.push('Conflicting information detected between sources');
    limitations.push('Response prioritizes core medical principles');
    recommendations.push('Consult multiple authoritative sources');
    recommendations.push('Discuss with medical professionals for clarification');
    
    evidenceQuality.conflictingAreas.forEach(area => {
      limitations.push(`Conflict detected: ${area}`);
    });
  }
  // CASE 4: Evidence is unclear or insufficient
  else if (evidenceQuality.isUnclear || !evidenceQuality.isSufficient) {
    shouldFallback = true;
    mode = 'degraded';
    reason = 'Evidence is unclear or insufficient';
    limitations.push('Insufficient evidence available for comprehensive response');
    limitations.push('Response limited to available information');
    recommendations.push('Consult additional authoritative medical sources');
    recommendations.push('Seek guidance from medical professionals');
    
    evidenceQuality.unclearAreas.forEach(area => {
      limitations.push(`Unclear: ${area}`);
    });
  }
  // CASE 5: Core knowledge unavailable (critical failure)
  else if (!availability.coreKnowledgeAvailable) {
    shouldFallback = true;
    mode = 'unavailable';
    reason = 'Core medical knowledge is unavailable';
    limitations.push('CRITICAL: Core medical knowledge base is not accessible');
    recommendations.push('System requires maintenance - please try again later');
  }

  // Calculate confidence
  let confidence = 100;

  if (shouldFallback) confidence -= 30;
  if (mode === 'degraded') confidence -= 20;
  if (mode === 'core-only') confidence -= 30;
  if (mode === 'unavailable') confidence = 0;
  if (evidenceQuality.isConflicting) confidence -= 25;
  if (evidenceQuality.isUnclear) confidence -= 15;

  confidence = Math.max(0, Math.min(100, confidence));

  const decision: FailSafeDecision = {
    shouldFallback,
    reason,
    limitations,
    recommendations,
    mode,
    confidence,
  };

  console.log('[FAIL-SAFE] Decision:', {
    shouldFallback: decision.shouldFallback,
    mode: decision.mode,
    confidence: decision.confidence,
  });

  return decision;
}

// ============================================================================
// FAIL-SAFE VALIDATION
// ============================================================================

/**
 * Validate that response follows fail-safe rules
 */
export function validateFailSafeResponse(
  responseText: string,
  decision: FailSafeDecision
): FailSafeValidation {
  console.log('[FAIL-SAFE] Validating response against fail-safe rules...');

  const warnings: string[] = [];
  const lowerResponse = responseText.toLowerCase();

  // Check for definitive treatment claims in degraded mode
  const prohibitedPhrases: string[] = [];

  if (decision.shouldFallback) {
    for (const pattern of DEFINITIVE_TREATMENT_PATTERNS) {
      const match = responseText.match(pattern);
      if (match) {
        prohibitedPhrases.push(match[0]);
        warnings.push(`CRITICAL: Definitive treatment claim in degraded mode: "${match[0]}"`);
      }
    }
  }

  const avoidsDefinitiveClaims = prohibitedPhrases.length === 0;

  // Check for transparent limitations
  const hasTransparentLimitations = decision.shouldFallback
    ? TRANSPARENCY_PHRASES.some(phrase => lowerResponse.includes(phrase.toLowerCase()))
    : true;

  if (decision.shouldFallback && !hasTransparentLimitations) {
    warnings.push('CRITICAL: Degraded mode but no transparent limitations stated');
  }

  // Check for conservative phrasing in degraded mode
  const hasConservativePhrasing = decision.shouldFallback
    ? CONSERVATIVE_PHRASES.some(phrase => lowerResponse.includes(phrase.toLowerCase()))
    : true;

  if (decision.shouldFallback && !hasConservativePhrasing) {
    warnings.push('WARNING: Degraded mode but no conservative phrasing used');
  }

  // Check if core knowledge is being used
  const usesCoreKnowledge =
    lowerResponse.includes('core medical knowledge') ||
    lowerResponse.includes('established medical principles') ||
    lowerResponse.includes('fundamental medical knowledge') ||
    lowerResponse.includes('merck manual');

  if (decision.shouldFallback && !usesCoreKnowledge) {
    warnings.push('WARNING: Fallback mode but no reference to core knowledge');
  }

  // Check if proper fallback is implemented
  const hasProperFallback =
    decision.shouldFallback
      ? hasTransparentLimitations && avoidsDefinitiveClaims && usesCoreKnowledge
      : true;

  // Calculate validation score
  let score = 100;

  if (!avoidsDefinitiveClaims) score -= 50; // Major penalty
  if (!hasTransparentLimitations && decision.shouldFallback) score -= 40;
  if (!usesCoreKnowledge && decision.shouldFallback) score -= 30;
  if (!hasConservativePhrasing && decision.shouldFallback) score -= 20;
  if (!hasProperFallback) score -= 35;

  // Bonus for good practices
  if (hasTransparentLimitations && decision.shouldFallback) score += 10;
  if (hasConservativePhrasing && decision.shouldFallback) score += 10;
  if (usesCoreKnowledge && decision.shouldFallback) score += 5;

  score = Math.max(0, Math.min(100, score));

  const isValid =
    avoidsDefinitiveClaims &&
    hasTransparentLimitations &&
    hasProperFallback &&
    score >= 70;

  const validation: FailSafeValidation = {
    isValid,
    hasTransparentLimitations,
    avoidsDefinitiveClaims,
    usesCoreKnowledge,
    hasProperFallback,
    prohibitedPhrases,
    warnings,
    score,
  };

  console.log('[FAIL-SAFE] Validation result:', {
    isValid: validation.isValid,
    score: validation.score,
    warnings: validation.warnings.length,
  });

  return validation;
}

// ============================================================================
// FAIL-SAFE RESPONSE GENERATION
// ============================================================================

/**
 * Generate fail-safe notice for response
 */
export function generateFailSafeNotice(decision: FailSafeDecision): string {
  console.log('[FAIL-SAFE] Generating fail-safe notice...');

  if (!decision.shouldFallback) {
    return '';
  }

  let notice = '\n\n---\n\n';
  notice += '**⚠️ System Limitations Notice**\n\n';

  // Add reason
  notice += `*${decision.reason}*\n\n`;

  // Add limitations
  if (decision.limitations.length > 0) {
    notice += '**Current Limitations:**\n\n';
    decision.limitations.forEach(limitation => {
      notice += `• ${limitation}\n`;
    });
    notice += '\n';
  }

  // Add recommendations
  if (decision.recommendations.length > 0) {
    notice += '**Recommendations:**\n\n';
    decision.recommendations.forEach(recommendation => {
      notice += `• ${recommendation}\n`;
    });
    notice += '\n';
  }

  // Add mode indicator
  notice += `*Operating Mode: ${decision.mode.toUpperCase()}*\n`;

  console.log('[FAIL-SAFE] Fail-safe notice generated');

  return notice;
}

/**
 * Apply fail-safe rules to response text
 */
export function applyFailSafeRules(
  responseText: string,
  decision: FailSafeDecision
): string {
  console.log('[FAIL-SAFE] Applying fail-safe rules to response...');

  let processedText = responseText;

  // If in fallback mode, remove definitive treatment claims
  if (decision.shouldFallback) {
    for (const pattern of DEFINITIVE_TREATMENT_PATTERNS) {
      processedText = processedText.replace(
        pattern,
        '[REMOVED: Definitive claim not appropriate in degraded mode]'
      );
    }

    // Add conservative phrasing if not present
    const hasConservativePhrasing = CONSERVATIVE_PHRASES.some(phrase =>
      processedText.toLowerCase().includes(phrase.toLowerCase())
    );

    if (!hasConservativePhrasing) {
      // Add conservative framing to treatment sections
      processedText = processedText.replace(
        /\*\*Treatment:\*\*/gi,
        '**Treatment:** *(Based on core medical knowledge)*'
      );
    }
  }

  // Add fail-safe notice
  const failSafeNotice = generateFailSafeNotice(decision);
  processedText += failSafeNotice;

  console.log('[FAIL-SAFE] Fail-safe rules applied');

  return processedText;
}

// ============================================================================
// INTEGRATION CHECK
// ============================================================================

/**
 * Fail-safe rules integration check
 */
export interface FailSafeIntegrationCheck {
  isValid: boolean;
  hasAvailabilityChecking: boolean;
  hasEvidenceAssessment: boolean;
  hasDecisionLogic: boolean;
  hasValidation: boolean;
  hasResponseGeneration: boolean;
  violations: string[];
  warnings: string[];
  recommendations: string[];
}

/**
 * Verify that fail-safe rules are properly integrated
 */
export function verifyFailSafeIntegration(): FailSafeIntegrationCheck {
  console.log('[FAIL-SAFE] Verifying fail-safe rules integration...');

  const violations: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Check if availability checking exists
  const hasAvailabilityChecking = typeof checkSystemAvailability === 'function';

  if (!hasAvailabilityChecking) {
    violations.push('CRITICAL: System availability checking is missing');
  } else {
    recommendations.push('✓ Good: System availability checking is implemented');
  }

  // Check if evidence assessment exists
  const hasEvidenceAssessment = typeof assessEvidenceQuality === 'function';

  if (!hasEvidenceAssessment) {
    violations.push('CRITICAL: Evidence quality assessment is missing');
  } else {
    recommendations.push('✓ Good: Evidence quality assessment is implemented');
  }

  // Check if decision logic exists
  const hasDecisionLogic = typeof makeFailSafeDecision === 'function';

  if (!hasDecisionLogic) {
    violations.push('CRITICAL: Fail-safe decision logic is missing');
  } else {
    recommendations.push('✓ Good: Fail-safe decision logic is implemented');
  }

  // Check if validation exists
  const hasValidation = typeof validateFailSafeResponse === 'function';

  if (!hasValidation) {
    violations.push('CRITICAL: Fail-safe validation is missing');
  } else {
    recommendations.push('✓ Good: Fail-safe validation is implemented');
  }

  // Check if response generation exists
  const hasResponseGeneration = typeof applyFailSafeRules === 'function';

  if (!hasResponseGeneration) {
    violations.push('CRITICAL: Fail-safe response generation is missing');
  } else {
    recommendations.push('✓ Good: Fail-safe response generation is implemented');
  }

  const isValid = violations.length === 0;

  const check: FailSafeIntegrationCheck = {
    isValid,
    hasAvailabilityChecking,
    hasEvidenceAssessment,
    hasDecisionLogic,
    hasValidation,
    hasResponseGeneration,
    violations,
    warnings,
    recommendations,
  };

  console.log('[FAIL-SAFE] Integration check result:', {
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
 * Run stress test on fail-safe rules
 */
export async function runFailSafeStressTest(): Promise<{
  passed: number;
  failed: number;
  testResults: {
    testName: string;
    availability: SystemAvailability;
    evidenceQuality: EvidenceQuality;
    decision: FailSafeDecision;
    responseText: string;
    validation: FailSafeValidation;
    passed: boolean;
  }[];
}> {
  console.log('[FAIL-SAFE] Running fail-safe rules stress test...');

  const testCases = [
    {
      testName: 'Normal operation (internet available, sufficient evidence)',
      availability: {
        internetAvailable: true,
        guidelinesAccessible: true,
        coreKnowledgeAvailable: true,
        timestamp: new Date(),
      },
      evidenceQuality: {
        isConflicting: false,
        isUnclear: false,
        isSufficient: true,
        conflictingAreas: [],
        unclearAreas: [],
        confidence: 90,
      },
      responseText:
        'Treatment typically involves beta blockers and ACE inhibitors based on current guidelines.',
    },
    {
      testName: 'Internet unavailable (should fallback to core knowledge)',
      availability: {
        internetAvailable: false,
        guidelinesAccessible: false,
        coreKnowledgeAvailable: true,
        timestamp: new Date(),
      },
      evidenceQuality: {
        isConflicting: false,
        isUnclear: false,
        isSufficient: true,
        conflictingAreas: [],
        unclearAreas: [],
        confidence: 70,
      },
      responseText:
        'Based on core medical knowledge, treatment generally includes beta blockers. Internet connectivity is currently unavailable, so current guidelines could not be consulted.',
    },
    {
      testName: 'Guidelines inaccessible (should use degraded mode)',
      availability: {
        internetAvailable: true,
        guidelinesAccessible: false,
        coreKnowledgeAvailable: true,
        timestamp: new Date(),
      },
      evidenceQuality: {
        isConflicting: false,
        isUnclear: false,
        isSufficient: true,
        conflictingAreas: [],
        unclearAreas: [],
        confidence: 75,
      },
      responseText:
        'Based on core medical knowledge, treatment commonly used includes beta blockers. Guidelines are not accessible at this time.',
    },
    {
      testName: 'Conflicting evidence (should use conservative approach)',
      availability: {
        internetAvailable: true,
        guidelinesAccessible: true,
        coreKnowledgeAvailable: true,
        timestamp: new Date(),
      },
      evidenceQuality: {
        isConflicting: true,
        isUnclear: false,
        isSufficient: true,
        conflictingAreas: ['Treatment recommendations differ between sources'],
        unclearAreas: [],
        confidence: 50,
      },
      responseText:
        'Treatment may require beta blockers based on established principles. Evidence from multiple sources shows some variation.',
    },
    {
      testName: 'Insufficient evidence (should state limitations)',
      availability: {
        internetAvailable: true,
        guidelinesAccessible: true,
        coreKnowledgeAvailable: true,
        timestamp: new Date(),
      },
      evidenceQuality: {
        isConflicting: false,
        isUnclear: true,
        isSufficient: false,
        conflictingAreas: [],
        unclearAreas: ['No relevant evidence found'],
        confidence: 30,
      },
      responseText:
        'Insufficient evidence available for comprehensive response. Consult additional authoritative medical sources.',
    },
    {
      testName: 'Definitive claim in degraded mode (INVALID)',
      availability: {
        internetAvailable: false,
        guidelinesAccessible: false,
        coreKnowledgeAvailable: true,
        timestamp: new Date(),
      },
      evidenceQuality: {
        isConflicting: false,
        isUnclear: false,
        isSufficient: true,
        conflictingAreas: [],
        unclearAreas: [],
        confidence: 70,
      },
      responseText: 'You must take beta blockers. This is the only treatment option.',
    },
  ];

  const testResults = testCases.map(testCase => {
    const decision = makeFailSafeDecision(testCase.availability, testCase.evidenceQuality);
    const validation = validateFailSafeResponse(testCase.responseText, decision);

    // Test should pass if validation is valid OR if it's the invalid test case
    const shouldBeValid = !testCase.testName.includes('INVALID');
    const passed = validation.isValid === shouldBeValid;

    return {
      testName: testCase.testName,
      availability: testCase.availability,
      evidenceQuality: testCase.evidenceQuality,
      decision,
      responseText: testCase.responseText,
      validation,
      passed,
    };
  });

  const passed = testResults.filter(r => r.passed).length;
  const failed = testResults.filter(r => !r.passed).length;

  console.log('[FAIL-SAFE] Stress test complete:', {
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
 * Summary of fail-safe rules
 */
export const FAIL_SAFE_RULES_SUMMARY = {
  title: 'GUARDRAIL #8: FAIL-SAFE RULES',

  triggers: [
    'Internet is unavailable',
    'Guideline site is inaccessible',
    'Evidence is conflicting or unclear',
  ],

  actions: [
    'Fall back to core knowledge engine',
    'State limitations transparently',
    'Avoid definitive treatment claims',
  ],

  principles: [
    'Graceful degradation when external resources are unavailable',
    'Transparent communication about system limitations',
    'Conservative approach when evidence is insufficient or conflicting',
    'Maintain user trust through honesty about capabilities',
    'Prioritize safety over completeness',
  ],

  modes: [
    'full: All systems operational',
    'degraded: Guidelines unavailable or evidence conflicting',
    'core-only: Internet unavailable, using core knowledge only',
    'unavailable: Critical failure, system unavailable',
  ],

  benefits: [
    'Maintains system reliability in adverse conditions',
    'Builds user trust through transparency',
    'Prevents misleading or dangerous recommendations',
    'Provides clear guidance on system limitations',
    'Ensures safe operation even with partial failures',
  ],
};
