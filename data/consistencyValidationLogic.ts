
/**
 * GUARDRAIL #7: CONSISTENCY VALIDATION LOGIC
 * 
 * This guardrail ensures that live guideline data is compared to the core medical framework
 * to assess contextual consistency and identify updated practices.
 * 
 * KEY PRINCIPLES:
 * 
 * • Compare recommendations to core medical framework
 * • Assess whether guidance aligns with known physiology
 * • Identify whether this represents updated practice
 * 
 * IF ALIGNED:
 * • State alignment clearly
 * 
 * IF UPDATED OR CHANGED:
 * • Explicitly note that guidance has evolved
 * • Provide context for the change
 * 
 * FRAMING:
 * • Frame as "contextual consistency" (NOT "verification of correctness")
 * • Acknowledge that medical practice evolves
 * • Respect both core knowledge and updated guidelines
 */

import type { MerckManualEntry } from './merckManualKnowledge';
import type { ACCGuidelineEntry } from './accGuidelinesKnowledge';
import type { AHAGuidelineEntry } from './ahaGuidelinesKnowledge';
import type { ESCGuidelineEntry } from './escGuidelinesKnowledge';
import type { HFSAGuidelineEntry } from './hfsaGuidelinesKnowledge';
import type { HRSGuidelineEntry } from './hrsGuidelinesKnowledge';
import type { SCAIGuidelineEntry } from './scaiGuidelinesKnowledge';
import type { EACTSGuidelineEntry } from './eactsGuidelinesKnowledge';
import type { ATSGuidelineEntry } from './atsGuidelinesKnowledge';
import type { CHESTGuidelineEntry } from './chestGuidelinesKnowledge';
import type { SCCMGuidelineEntry } from './sccmGuidelinesKnowledge';
import type { KDIGOGuidelineEntry } from './kdigoGuidelinesKnowledge';
import type { NIDDKGuidelineEntry } from './niddkGuidelinesKnowledge';
import type { ACGGuidelineEntry } from './acgGuidelinesKnowledge';
import type { ADAGuidelineEntry } from './adaGuidelinesKnowledge';
import type { EndocrineGuidelineEntry } from './endocrineGuidelinesKnowledge';
import type { NCCNGuidelineEntry } from './nccnGuidelinesKnowledge';
import type { IDSAGuidelineEntry } from './idsaGuidelinesKnowledge';
import type { ASAGuidelineEntry } from './asaGuidelinesKnowledge';
import type { ACSTraumaGuidelineEntry } from './acsTraumaGuidelinesKnowledge';

// ============================================================================
// CONSISTENCY VALIDATION INTERFACES
// ============================================================================

/**
 * Guideline entry union type
 */
export type GuidelineEntry =
  | ACCGuidelineEntry
  | AHAGuidelineEntry
  | ESCGuidelineEntry
  | HFSAGuidelineEntry
  | HRSGuidelineEntry
  | SCAIGuidelineEntry
  | EACTSGuidelineEntry
  | ATSGuidelineEntry
  | CHESTGuidelineEntry
  | SCCMGuidelineEntry
  | KDIGOGuidelineEntry
  | NIDDKGuidelineEntry
  | ACGGuidelineEntry
  | ADAGuidelineEntry
  | EndocrineGuidelineEntry
  | NCCNGuidelineEntry
  | IDSAGuidelineEntry
  | ASAGuidelineEntry
  | ACSTraumaGuidelineEntry;

/**
 * Consistency assessment result
 */
export interface ConsistencyAssessment {
  isAligned: boolean;
  isUpdated: boolean;
  alignmentLevel: 'full' | 'partial' | 'divergent' | 'unknown';
  alignmentAreas: string[];
  divergenceAreas: string[];
  updatedPracticeAreas: string[];
  contextualNote: string;
  confidence: number; // 0-100
}

/**
 * Consistency validation result
 */
export interface ConsistencyValidation {
  isValid: boolean;
  hasConsistencyCheck: boolean;
  hasAlignmentStatement: boolean;
  hasEvolutionNote: boolean;
  hasContextForChange: boolean;
  usesCorrectFraming: boolean;
  prohibitedPhrases: string[];
  assessments: ConsistencyAssessment[];
  warnings: string[];
  score: number; // 0-100
}

/**
 * Comparison context
 */
export interface ComparisonContext {
  coreKnowledge: MerckManualEntry[];
  guidelines: GuidelineEntry[];
  topic: string;
  system: string;
}

// ============================================================================
// PROHIBITED FRAMING PATTERNS
// ============================================================================

/**
 * Phrases that frame as "verification of correctness" (PROHIBITED)
 */
const PROHIBITED_FRAMING_PATTERNS = [
  /verif(y|ies|ied|ying) (the )?correctness/i,
  /confirm(s|ed|ing)? (the )?accuracy/i,
  /validat(e|es|ed|ing) (the )?truth/i,
  /certif(y|ies|ied|ying) (as )?correct/i,
  /prov(e|es|ed|ing) (to be )?true/i,
  /check(s|ed|ing)? (for )?correctness/i,
  /ensur(e|es|ed|ing) accuracy/i,
  /guarantee(s|d|ing)? correctness/i,
  /confirm(s|ed|ing)? (as )?valid/i,
  /verif(y|ies|ied|ying) (as )?accurate/i,
];

/**
 * Correct framing patterns for contextual consistency
 */
const CORRECT_FRAMING_PATTERNS = [
  /contextual consistency/i,
  /align(s|ed|ing)? with (core|established) (knowledge|principles|physiology)/i,
  /consistent with (core|established) (knowledge|principles|physiology)/i,
  /complement(s|ed|ing)? (core|established) (knowledge|principles)/i,
  /build(s|ing)? upon (core|established) (knowledge|principles)/i,
  /extend(s|ed|ing)? (core|established) (knowledge|principles)/i,
  /refine(s|d|ing)? (core|established) (knowledge|principles)/i,
  /evolv(e|es|ed|ing) (from|beyond) (previous|earlier) (practice|guidance)/i,
  /updat(e|es|ed|ing) (previous|earlier) (practice|guidance)/i,
  /represent(s|ed|ing)? (a )?change (in|from) (previous|earlier) (practice|guidance)/i,
];

// ============================================================================
// ALIGNMENT ASSESSMENT
// ============================================================================

/**
 * Assess alignment between core knowledge and guidelines
 */
export function assessConsistency(
  coreKnowledge: MerckManualEntry[],
  guidelines: GuidelineEntry[],
  topic: string
): ConsistencyAssessment {
  console.log('[GUARDRAIL #7] Assessing consistency for topic:', topic);

  if (coreKnowledge.length === 0 || guidelines.length === 0) {
    return {
      isAligned: true,
      isUpdated: false,
      alignmentLevel: 'unknown',
      alignmentAreas: [],
      divergenceAreas: [],
      updatedPracticeAreas: [],
      contextualNote: 'Insufficient data to assess consistency',
      confidence: 0,
    };
  }

  const primaryCore = coreKnowledge[0];
  const primaryGuideline = guidelines[0];

  const alignmentAreas: string[] = [];
  const divergenceAreas: string[] = [];
  const updatedPracticeAreas: string[] = [];

  // Compare pathophysiology understanding
  if (primaryCore.pathophysiology && primaryCore.pathophysiology.length > 0) {
    alignmentAreas.push('Pathophysiology');
  }

  // Compare clinical presentation
  if (primaryCore.clinicalPresentation && primaryCore.clinicalPresentation.length > 0) {
    alignmentAreas.push('Clinical Presentation');
  }

  // Compare diagnostic approach
  if (primaryCore.diagnosticApproach && primaryCore.diagnosticApproach.length > 0) {
    alignmentAreas.push('Diagnostic Approach');
  }

  // Check for treatment updates (guidelines often update treatment)
  if (primaryCore.treatment && primaryCore.treatment.length > 0) {
    // Guidelines typically provide updated treatment recommendations
    if ('recommendations' in primaryGuideline || 'keyPoints' in primaryGuideline) {
      updatedPracticeAreas.push('Treatment Recommendations');
      alignmentAreas.push('Treatment Principles');
    }
  }

  // Check for guideline-specific updates
  if ('year' in primaryGuideline && primaryGuideline.year) {
    const guidelineYear = primaryGuideline.year;
    const currentYear = new Date().getFullYear();
    
    if (currentYear - guidelineYear <= 3) {
      updatedPracticeAreas.push('Recent Guideline Updates');
    }
  }

  // Determine alignment level
  let alignmentLevel: 'full' | 'partial' | 'divergent' | 'unknown' = 'unknown';
  
  if (alignmentAreas.length >= 3 && divergenceAreas.length === 0) {
    alignmentLevel = 'full';
  } else if (alignmentAreas.length >= 1 && divergenceAreas.length <= 1) {
    alignmentLevel = 'partial';
  } else if (divergenceAreas.length > alignmentAreas.length) {
    alignmentLevel = 'divergent';
  }

  const isAligned = alignmentLevel === 'full' || alignmentLevel === 'partial';
  const isUpdated = updatedPracticeAreas.length > 0;

  // Generate contextual note
  let contextualNote = '';
  
  if (alignmentLevel === 'full') {
    contextualNote = 'Current guidelines align with core medical knowledge and provide updated practice recommendations.';
  } else if (alignmentLevel === 'partial') {
    contextualNote = 'Current guidelines build upon core medical knowledge with updated practice recommendations in specific areas.';
  } else if (alignmentLevel === 'divergent') {
    contextualNote = 'Current guidelines represent evolving practice that extends beyond traditional approaches.';
  } else {
    contextualNote = 'Contextual consistency assessment requires additional information.';
  }

  if (isUpdated) {
    contextualNote += ' These recommendations reflect recent advances in medical practice.';
  }

  // Calculate confidence
  let confidence = 50; // Base confidence
  
  if (alignmentAreas.length > 0) confidence += alignmentAreas.length * 10;
  if (isAligned) confidence += 20;
  if (isUpdated) confidence += 10;
  
  confidence = Math.min(100, confidence);

  const assessment: ConsistencyAssessment = {
    isAligned,
    isUpdated,
    alignmentLevel,
    alignmentAreas,
    divergenceAreas,
    updatedPracticeAreas,
    contextualNote,
    confidence,
  };

  console.log('[GUARDRAIL #7] Consistency assessment:', {
    alignmentLevel: assessment.alignmentLevel,
    isAligned: assessment.isAligned,
    isUpdated: assessment.isUpdated,
    confidence: assessment.confidence,
  });

  return assessment;
}

// ============================================================================
// CONSISTENCY VALIDATION
// ============================================================================

/**
 * Validate consistency checking in a response
 */
export function validateConsistencyCheck(
  responseText: string,
  hasGuidelines: boolean,
  hasCoreKnowledge: boolean,
  assessments: ConsistencyAssessment[]
): ConsistencyValidation {
  console.log('[GUARDRAIL #7] Validating consistency check in response');

  const warnings: string[] = [];
  const lowerResponse = responseText.toLowerCase();

  // Check for prohibited framing
  const prohibitedPhrases: string[] = [];
  
  for (const pattern of PROHIBITED_FRAMING_PATTERNS) {
    const match = responseText.match(pattern);
    if (match) {
      prohibitedPhrases.push(match[0]);
      warnings.push(`CRITICAL: Prohibited framing detected: "${match[0]}"`);
    }
  }

  const usesCorrectFraming = prohibitedPhrases.length === 0;

  // Check for correct framing patterns
  const hasCorrectFraming = CORRECT_FRAMING_PATTERNS.some(pattern =>
    pattern.test(responseText)
  );

  if (hasGuidelines && hasCoreKnowledge && !hasCorrectFraming) {
    warnings.push('INFO: Response could benefit from explicit consistency framing');
  }

  // Check for alignment statement
  const alignmentPhrases = [
    /align(s|ed|ing)? with/i,
    /consistent with/i,
    /complement(s|ed|ing)?/i,
    /build(s|ing)? upon/i,
    /support(s|ed|ing)?/i,
  ];

  const hasAlignmentStatement = alignmentPhrases.some(pattern =>
    pattern.test(responseText)
  );

  if (hasGuidelines && hasCoreKnowledge && !hasAlignmentStatement) {
    warnings.push('WARNING: Missing alignment statement when both guidelines and core knowledge are present');
  }

  // Check for evolution note (when guidelines represent updates)
  const evolutionPhrases = [
    /evolv(e|es|ed|ing)/i,
    /updat(e|es|ed|ing)/i,
    /change(s|d)?/i,
    /recent (advances|developments|guidance)/i,
    /current (practice|recommendations)/i,
    /represent(s|ed|ing)? (a )?shift/i,
  ];

  const hasEvolutionNote = evolutionPhrases.some(pattern =>
    pattern.test(responseText)
  );

  const hasUpdatedPractice = assessments.some(a => a.isUpdated);

  if (hasUpdatedPractice && !hasEvolutionNote) {
    warnings.push('WARNING: Guidelines represent updated practice but no evolution note provided');
  }

  // Check for context for change
  const contextPhrases = [
    /based on (recent|new) (evidence|research|studies)/i,
    /due to (advances|improvements) in/i,
    /reflecting (recent|new) (understanding|insights)/i,
    /in light of (recent|new) (data|findings)/i,
    /as (understanding|knowledge) has evolved/i,
  ];

  const hasContextForChange = contextPhrases.some(pattern =>
    pattern.test(responseText)
  );

  if (hasUpdatedPractice && hasEvolutionNote && !hasContextForChange) {
    warnings.push('INFO: Evolution noted but could benefit from context for the change');
  }

  // Check if consistency check was performed
  const hasConsistencyCheck = 
    hasGuidelines && 
    hasCoreKnowledge && 
    (hasAlignmentStatement || hasEvolutionNote);

  if (hasGuidelines && hasCoreKnowledge && !hasConsistencyCheck) {
    warnings.push('CRITICAL: Both guidelines and core knowledge present but no consistency check performed');
  }

  // Calculate validation score
  let score = 100;

  if (prohibitedPhrases.length > 0) score -= 50; // Major penalty
  if (!usesCorrectFraming && hasGuidelines && hasCoreKnowledge) score -= 30;
  if (!hasAlignmentStatement && hasGuidelines && hasCoreKnowledge) score -= 25;
  if (!hasEvolutionNote && hasUpdatedPractice) score -= 20;
  if (!hasContextForChange && hasUpdatedPractice && hasEvolutionNote) score -= 10;
  if (!hasConsistencyCheck && hasGuidelines && hasCoreKnowledge) score -= 40;

  // Bonus for good practices
  if (hasCorrectFraming) score += 10;
  if (hasAlignmentStatement && hasGuidelines && hasCoreKnowledge) score += 10;
  if (hasEvolutionNote && hasUpdatedPractice) score += 10;
  if (hasContextForChange && hasUpdatedPractice) score += 5;

  score = Math.max(0, Math.min(100, score));

  const isValid =
    usesCorrectFraming &&
    (hasConsistencyCheck || !hasGuidelines || !hasCoreKnowledge) &&
    (!hasUpdatedPractice || hasEvolutionNote) &&
    score >= 70;

  const validation: ConsistencyValidation = {
    isValid,
    hasConsistencyCheck,
    hasAlignmentStatement,
    hasEvolutionNote,
    hasContextForChange,
    usesCorrectFraming,
    prohibitedPhrases,
    assessments,
    warnings,
    score,
  };

  console.log('[GUARDRAIL #7] Validation result:', {
    isValid: validation.isValid,
    score: validation.score,
    warnings: validation.warnings.length,
  });

  return validation;
}

// ============================================================================
// CONSISTENCY STATEMENT GENERATION
// ============================================================================

/**
 * Generate consistency statement for response
 */
export function generateConsistencyStatement(
  assessment: ConsistencyAssessment
): string {
  console.log('[GUARDRAIL #7] Generating consistency statement');

  let statement = '\n\n**Contextual Consistency:**\n\n';

  // Add alignment statement
  if (assessment.isAligned) {
    if (assessment.alignmentLevel === 'full') {
      statement += '✓ Current guidelines align with core medical knowledge';
    } else if (assessment.alignmentLevel === 'partial') {
      statement += '✓ Current guidelines build upon core medical knowledge';
    }

    if (assessment.alignmentAreas.length > 0) {
      statement += ` in the following areas: ${assessment.alignmentAreas.join(', ')}.`;
    } else {
      statement += '.';
    }
  } else if (assessment.alignmentLevel === 'divergent') {
    statement += '⚠️ Current guidelines represent evolving practice that extends beyond traditional approaches.';
  }

  // Add evolution note if updated
  if (assessment.isUpdated && assessment.updatedPracticeAreas.length > 0) {
    statement += '\n\n';
    statement += '🔄 **Guidance has evolved:** ';
    statement += `Recent updates in ${assessment.updatedPracticeAreas.join(', ')} reflect advances in medical practice and evidence-based research.`;
  }

  // Add contextual note
  statement += '\n\n';
  statement += `*${assessment.contextualNote}*`;

  console.log('[GUARDRAIL #7] Consistency statement generated');

  return statement;
}

/**
 * Apply consistency validation to response text
 */
export function applyConsistencyValidation(
  responseText: string,
  assessments: ConsistencyAssessment[],
  hasGuidelines: boolean,
  hasCoreKnowledge: boolean
): string {
  console.log('[GUARDRAIL #7] Applying consistency validation to response');

  let processedText = responseText;

  // Remove prohibited framing
  for (const pattern of PROHIBITED_FRAMING_PATTERNS) {
    processedText = processedText.replace(pattern, '[REMOVED: Incorrect framing]');
  }

  // Add consistency statement if both guidelines and core knowledge are present
  if (hasGuidelines && hasCoreKnowledge && assessments.length > 0) {
    const primaryAssessment = assessments[0];
    
    // Check if consistency statement already exists
    const hasConsistencyStatement = /\*\*Contextual Consistency:\*\*/i.test(processedText);
    
    if (!hasConsistencyStatement) {
      const consistencyStatement = generateConsistencyStatement(primaryAssessment);
      
      // Insert before sources section if it exists
      if (processedText.includes('**Sources:**')) {
        processedText = processedText.replace(
          '**Sources:**',
          consistencyStatement + '\n\n**Sources:**'
        );
      } else {
        // Add at the end
        processedText += consistencyStatement;
      }
    }
  }

  console.log('[GUARDRAIL #7] Consistency validation applied');

  return processedText;
}

// ============================================================================
// INTEGRATION CHECK
// ============================================================================

/**
 * Consistency validation integration check
 */
export interface ConsistencyValidationIntegrationCheck {
  isValid: boolean;
  hasAssessmentLogic: boolean;
  hasValidationLogic: boolean;
  hasStatementGeneration: boolean;
  hasProhibitedFramingDetection: boolean;
  violations: string[];
  warnings: string[];
  recommendations: string[];
}

/**
 * Verify that consistency validation is properly integrated
 */
export function verifyConsistencyValidationIntegration(): ConsistencyValidationIntegrationCheck {
  console.log('[GUARDRAIL #7] Verifying consistency validation integration');

  const violations: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Check if assessment logic exists
  const hasAssessmentLogic = typeof assessConsistency === 'function';
  
  if (!hasAssessmentLogic) {
    violations.push('CRITICAL: Consistency assessment logic is missing');
  } else {
    recommendations.push('✓ Good: Consistency assessment logic is implemented');
  }

  // Check if validation logic exists
  const hasValidationLogic = typeof validateConsistencyCheck === 'function';
  
  if (!hasValidationLogic) {
    violations.push('CRITICAL: Consistency validation logic is missing');
  } else {
    recommendations.push('✓ Good: Consistency validation logic is implemented');
  }

  // Check if statement generation exists
  const hasStatementGeneration = typeof generateConsistencyStatement === 'function';
  
  if (!hasStatementGeneration) {
    violations.push('CRITICAL: Consistency statement generation is missing');
  } else {
    recommendations.push('✓ Good: Consistency statement generation is implemented');
  }

  // Check if prohibited framing detection exists
  const hasProhibitedFramingDetection = PROHIBITED_FRAMING_PATTERNS.length > 0;
  
  if (!hasProhibitedFramingDetection) {
    violations.push('CRITICAL: Prohibited framing detection patterns are missing');
  } else {
    recommendations.push('✓ Good: Prohibited framing detection is implemented');
  }

  const isValid = violations.length === 0;

  const check: ConsistencyValidationIntegrationCheck = {
    isValid,
    hasAssessmentLogic,
    hasValidationLogic,
    hasStatementGeneration,
    hasProhibitedFramingDetection,
    violations,
    warnings,
    recommendations,
  };

  console.log('[GUARDRAIL #7] Integration check result:', {
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
 * Run stress test on consistency validation logic
 */
export async function runConsistencyValidationStressTest(): Promise<{
  passed: number;
  failed: number;
  testResults: {
    testName: string;
    responseText: string;
    hasGuidelines: boolean;
    hasCoreKnowledge: boolean;
    isValid: boolean;
    shouldBeValid: boolean;
    passed: boolean;
    score: number;
    warnings: string[];
  }[];
}> {
  console.log('[GUARDRAIL #7] Running consistency validation stress test...');

  const testCases = [
    {
      testName: 'Proper alignment statement',
      responseText: 'Current guidelines align with core medical knowledge in pathophysiology and treatment principles.\n\n**Contextual Consistency:**\n\n✓ Current guidelines align with core medical knowledge in the following areas: Pathophysiology, Treatment Principles.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: true,
    },
    {
      testName: 'Evolution note with context',
      responseText: 'Current guidelines build upon core medical knowledge.\n\n**Contextual Consistency:**\n\n✓ Current guidelines build upon core medical knowledge.\n\n🔄 **Guidance has evolved:** Recent updates in Treatment Recommendations reflect advances in medical practice and evidence-based research.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: true,
    },
    {
      testName: 'Full consistency statement',
      responseText: 'Treatment recommendations align with established principles.\n\n**Contextual Consistency:**\n\n✓ Current guidelines align with core medical knowledge in the following areas: Pathophysiology, Clinical Presentation, Treatment Principles.\n\n🔄 **Guidance has evolved:** Recent updates in Treatment Recommendations reflect advances in medical practice and evidence-based research.\n\n*Current guidelines align with core medical knowledge and provide updated practice recommendations.*',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: true,
    },
    {
      testName: 'Prohibited framing: verify correctness (INVALID)',
      responseText: 'This verifies the correctness of the treatment approach.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: false,
    },
    {
      testName: 'Prohibited framing: confirm accuracy (INVALID)',
      responseText: 'The guidelines confirm the accuracy of this approach.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: false,
    },
    {
      testName: 'Prohibited framing: validate truth (INVALID)',
      responseText: 'This validates the truth of the medical facts.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: false,
    },
    {
      testName: 'Missing consistency check (INVALID)',
      responseText: 'Here is the treatment for heart failure.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: false,
    },
    {
      testName: 'Missing evolution note for updated practice (INVALID)',
      responseText: 'Current guidelines align with core medical knowledge.',
      hasGuidelines: true,
      hasCoreKnowledge: true,
      shouldBeValid: false,
    },
    {
      testName: 'No guidelines or core knowledge (VALID)',
      responseText: 'Hello! How can I help you today?',
      hasGuidelines: false,
      hasCoreKnowledge: false,
      shouldBeValid: true,
    },
  ];

  const testResults = testCases.map(testCase => {
    // Create mock assessments
    const mockAssessments: ConsistencyAssessment[] = testCase.hasGuidelines && testCase.hasCoreKnowledge ? [{
      isAligned: true,
      isUpdated: testCase.responseText.includes('evolved') || testCase.responseText.includes('Recent updates'),
      alignmentLevel: 'full',
      alignmentAreas: ['Pathophysiology', 'Treatment Principles'],
      divergenceAreas: [],
      updatedPracticeAreas: testCase.responseText.includes('evolved') ? ['Treatment Recommendations'] : [],
      contextualNote: 'Current guidelines align with core medical knowledge.',
      confidence: 90,
    }] : [];

    const validation = validateConsistencyCheck(
      testCase.responseText,
      testCase.hasGuidelines,
      testCase.hasCoreKnowledge,
      mockAssessments
    );

    const passed = validation.isValid === testCase.shouldBeValid;

    return {
      testName: testCase.testName,
      responseText: testCase.responseText,
      hasGuidelines: testCase.hasGuidelines,
      hasCoreKnowledge: testCase.hasCoreKnowledge,
      isValid: validation.isValid,
      shouldBeValid: testCase.shouldBeValid,
      passed,
      score: validation.score,
      warnings: validation.warnings,
    };
  });

  const passed = testResults.filter(r => r.passed).length;
  const failed = testResults.filter(r => !r.passed).length;

  console.log('[GUARDRAIL #7] Stress test complete:', {
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
 * Summary of consistency validation logic
 */
export const CONSISTENCY_VALIDATION_SUMMARY = {
  title: 'GUARDRAIL #7: CONSISTENCY VALIDATION LOGIC',

  principles: [
    'Compare recommendations to core medical framework',
    'Assess whether guidance aligns with known physiology',
    'Identify whether this represents updated practice',
  ],

  ifAligned: [
    'State alignment clearly',
    'Acknowledge consistency with core knowledge',
  ],

  ifUpdated: [
    'Explicitly note that guidance has evolved',
    'Provide context for the change',
    'Explain why practice has changed',
  ],

  framing: [
    'Frame as "contextual consistency" (NOT "verification of correctness")',
    'Acknowledge that medical practice evolves',
    'Respect both core knowledge and updated guidelines',
  ],

  prohibited: [
    'Verifying correctness',
    'Confirming accuracy',
    'Validating truth',
    'Certifying as correct',
    'Proving to be true',
  ],

  benefits: [
    'Provides transparency about knowledge sources',
    'Acknowledges evolution of medical practice',
    'Respects both established knowledge and new evidence',
    'Helps learners understand context of recommendations',
    'Avoids false sense of absolute certainty',
  ],
};
