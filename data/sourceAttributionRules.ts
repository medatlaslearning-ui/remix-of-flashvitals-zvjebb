
/**
 * GUARDRAIL #6: SOURCE ATTRIBUTION RULES
 * 
 * This guardrail enforces proper attribution of medical sources to:
 * 1. Give credit to authoritative medical references
 * 2. Provide direct links to original sources
 * 3. Avoid embedding proprietary text
 * 4. Encourage users to consult original references for complete details
 * 
 * ATTRIBUTION REQUIREMENTS:
 * 
 * • Attribute sources using:
 *   - "Based on information from the Merck Manual (Professional Edition)…"
 *   - "According to current AHA/ACC guidelines…"
 * 
 * • Provide a direct link to the original source when available
 * • Do NOT embed proprietary text
 * • Encourage users to consult the original reference for full details
 * 
 * GLOBAL FOOTER (optional but recommended):
 * "This response is an original educational summary based on authoritative medical references. 
 * For complete clinical guidance, consult the original source."
 */

import type { Reference } from './medicalReferences';

// ============================================================================
// SOURCE ATTRIBUTION INTERFACES
// ============================================================================

/**
 * Source attribution for a response
 */
export interface SourceAttribution {
  sourceName: string;
  sourceType: 'merck_manual' | 'guideline' | 'flashcard' | 'reference';
  organization?: string;
  url?: string;
  year?: number;
  attributionPhrase: string;
  linkText?: string;
}

/**
 * Attribution validation result
 */
export interface AttributionValidation {
  isValid: boolean;
  hasProperAttribution: boolean;
  hasDirectLinks: boolean;
  hasProprietaryText: boolean;
  encouragesConsultation: boolean;
  hasGlobalFooter: boolean;
  attributionPhrases: string[];
  proprietaryTextPatterns: string[];
  warnings: string[];
  score: number; // 0-100
}

/**
 * Response with source attribution
 */
export interface AttributedResponse {
  text: string;
  attributions: SourceAttribution[];
  hasGlobalFooter: boolean;
  timestamp: Date;
}

// ============================================================================
// ATTRIBUTION PHRASE TEMPLATES
// ============================================================================

/**
 * Templates for proper source attribution
 */
export const ATTRIBUTION_TEMPLATES = {
  merckManual: [
    'Based on information from the Merck Manual (Professional Edition)',
    'According to the Merck Manual (Professional Edition)',
    'As described in the Merck Manual (Professional Edition)',
    'The Merck Manual (Professional Edition) describes',
  ],
  
  guidelines: {
    acc: [
      'According to current ACC guidelines',
      'Based on ACC clinical practice guidelines',
      'ACC guidelines recommend',
      'Per ACC recommendations',
    ],
    aha: [
      'According to current AHA guidelines',
      'Based on AHA clinical practice guidelines',
      'AHA guidelines recommend',
      'Per AHA recommendations',
    ],
    esc: [
      'According to current ESC guidelines',
      'Based on ESC clinical practice guidelines',
      'ESC guidelines recommend',
      'Per ESC recommendations',
    ],
    hfsa: [
      'According to current HFSA guidelines',
      'Based on HFSA clinical practice guidelines',
      'HFSA guidelines recommend',
      'Per HFSA recommendations',
    ],
    hrs: [
      'According to current HRS guidelines',
      'Based on HRS clinical practice guidelines',
      'HRS guidelines recommend',
      'Per HRS recommendations',
    ],
    scai: [
      'According to current SCAI guidelines',
      'Based on SCAI clinical practice guidelines',
      'SCAI guidelines recommend',
      'Per SCAI recommendations',
    ],
    eacts: [
      'According to current EACTS guidelines',
      'Based on EACTS clinical practice guidelines',
      'EACTS guidelines recommend',
      'Per EACTS recommendations',
    ],
    ats: [
      'According to current ATS guidelines',
      'Based on ATS clinical practice guidelines',
      'ATS guidelines recommend',
      'Per ATS recommendations',
    ],
    chest: [
      'According to current CHEST guidelines',
      'Based on CHEST clinical practice guidelines',
      'CHEST guidelines recommend',
      'Per CHEST recommendations',
    ],
    sccm: [
      'According to current SCCM guidelines',
      'Based on SCCM clinical practice guidelines',
      'SCCM guidelines recommend',
      'Per SCCM recommendations',
    ],
    kdigo: [
      'According to current KDIGO guidelines',
      'Based on KDIGO clinical practice guidelines',
      'KDIGO guidelines recommend',
      'Per KDIGO recommendations',
    ],
    niddk: [
      'According to current NIDDK guidelines',
      'Based on NIDDK clinical practice guidelines',
      'NIDDK guidelines recommend',
      'Per NIDDK recommendations',
    ],
    acg: [
      'According to current ACG guidelines',
      'Based on ACG clinical practice guidelines',
      'ACG guidelines recommend',
      'Per ACG recommendations',
    ],
    ada: [
      'According to current ADA guidelines',
      'Based on ADA clinical practice guidelines',
      'ADA guidelines recommend',
      'Per ADA recommendations',
    ],
    endocrine: [
      'According to current Endocrine Society guidelines',
      'Based on Endocrine Society clinical practice guidelines',
      'Endocrine Society guidelines recommend',
      'Per Endocrine Society recommendations',
    ],
    nccn: [
      'According to current NCCN guidelines',
      'Based on NCCN clinical practice guidelines',
      'NCCN guidelines recommend',
      'Per NCCN recommendations',
    ],
    idsa: [
      'According to current IDSA guidelines',
      'Based on IDSA clinical practice guidelines',
      'IDSA guidelines recommend',
      'Per IDSA recommendations',
    ],
    asa: [
      'According to current ASA guidelines',
      'Based on ASA clinical practice guidelines',
      'ASA guidelines recommend',
      'Per ASA recommendations',
    ],
    acs: [
      'According to current ACS guidelines',
      'Based on ACS clinical practice guidelines',
      'ACS guidelines recommend',
      'Per ACS recommendations',
    ],
  },
  
  flashcard: [
    'Based on clinical flashcard database',
    'According to high-yield clinical information',
    'From clinical flashcard summary',
  ],
  
  reference: [
    'Based on authoritative medical references',
    'According to current medical literature',
    'From evidence-based medical sources',
  ],
};

/**
 * Consultation encouragement phrases
 */
export const CONSULTATION_PHRASES = [
  'For complete clinical guidance, consult the original source',
  'Please refer to the original guideline for full details',
  'Consult the original reference for comprehensive information',
  'For detailed recommendations, see the complete guideline',
  'Review the original source for complete clinical context',
];

/**
 * Global footer template
 */
export const GLOBAL_FOOTER = 
  '\n\n---\n\n' +
  '*This response is an original educational summary based on authoritative medical references. ' +
  'For complete clinical guidance, consult the original source.*';

// ============================================================================
// PROPRIETARY TEXT DETECTION
// ============================================================================

/**
 * Patterns that indicate proprietary text embedding (PROHIBITED)
 */
const PROPRIETARY_TEXT_PATTERNS = [
  /copyright \d{4}/i,
  /all rights reserved/i,
  /reproduced with permission/i,
  /reprinted from/i,
  /©\s*\d{4}/,
  /\(c\)\s*\d{4}/i,
  /proprietary content/i,
  /licensed material/i,
  /verbatim excerpt/i,
  /direct quote from/i,
  /exact text from/i,
  /copied from/i,
  /full text of/i,
  /complete guideline text/i,
  /guideline states:/i,
  /guideline reads:/i,
  /according to the guideline text:/i,
];

// ============================================================================
// ATTRIBUTION GENERATION
// ============================================================================

/**
 * Generate source attribution for Merck Manual
 */
export function generateMerckAttribution(topic: string): SourceAttribution {
  const template = ATTRIBUTION_TEMPLATES.merckManual[0];
  
  return {
    sourceName: 'Merck Manual (Professional Edition)',
    sourceType: 'merck_manual',
    organization: 'Merck & Co., Inc.',
    url: 'https://www.merckmanuals.com/professional',
    attributionPhrase: `${template}: ${topic}`,
    linkText: 'View Merck Manual',
  };
}

/**
 * Generate source attribution for guidelines
 */
export function generateGuidelineAttribution(
  organization: string,
  topic: string,
  url?: string,
  year?: number
): SourceAttribution {
  const orgKey = organization.toLowerCase().replace(/\s+/g, '_');
  const templates = ATTRIBUTION_TEMPLATES.guidelines[orgKey as keyof typeof ATTRIBUTION_TEMPLATES.guidelines] || 
                   ATTRIBUTION_TEMPLATES.reference;
  
  const template = templates[0];
  
  return {
    sourceName: `${organization} Guidelines`,
    sourceType: 'guideline',
    organization,
    url,
    year,
    attributionPhrase: `${template}: ${topic}`,
    linkText: `View ${organization} Guidelines`,
  };
}

/**
 * Generate source attribution for flashcards
 */
export function generateFlashcardAttribution(system: string): SourceAttribution {
  const template = ATTRIBUTION_TEMPLATES.flashcard[0];
  
  return {
    sourceName: 'Clinical Flashcard Database',
    sourceType: 'flashcard',
    attributionPhrase: `${template} (${system})`,
  };
}

/**
 * Generate source attribution for general references
 */
export function generateReferenceAttribution(reference: Reference): SourceAttribution {
  return {
    sourceName: reference.citation,
    sourceType: 'reference',
    organization: reference.category,
    url: reference.link,
    year: reference.year,
    attributionPhrase: `Based on: ${reference.citation}`,
    linkText: 'View Reference',
  };
}

// ============================================================================
// ATTRIBUTION FORMATTING
// ============================================================================

/**
 * Format source attributions as text
 */
export function formatAttributions(attributions: SourceAttribution[]): string {
  if (attributions.length === 0) {
    return '';
  }
  
  let formatted = '\n\n**Sources:**\n\n';
  
  attributions.forEach((attribution, index) => {
    formatted += `${index + 1}. ${attribution.attributionPhrase}\n`;
    
    if (attribution.url) {
      formatted += `   [${attribution.linkText || 'View Source'}](${attribution.url})\n`;
    }
    
    if (attribution.year) {
      formatted += `   (${attribution.year})\n`;
    }
    
    formatted += '\n';
  });
  
  // Add consultation encouragement
  const consultationPhrase = CONSULTATION_PHRASES[0];
  formatted += `*${consultationPhrase}.*\n`;
  
  return formatted;
}

/**
 * Add global footer to response
 */
export function addGlobalFooter(responseText: string): string {
  // Check if footer already exists
  if (responseText.includes(GLOBAL_FOOTER.trim())) {
    return responseText;
  }
  
  return responseText + GLOBAL_FOOTER;
}

// ============================================================================
// ATTRIBUTION VALIDATION
// ============================================================================

/**
 * Validate source attribution in a response
 */
export function validateSourceAttribution(
  responseText: string,
  hasAttributions: boolean
): AttributionValidation {
  console.log('[GUARDRAIL #6] Validating source attribution');
  
  const warnings: string[] = [];
  const lowerResponse = responseText.toLowerCase();
  
  // Check for proper attribution phrases
  const attributionPhrases: string[] = [];
  
  // Check Merck Manual attribution
  ATTRIBUTION_TEMPLATES.merckManual.forEach(template => {
    if (lowerResponse.includes(template.toLowerCase())) {
      attributionPhrases.push(template);
    }
  });
  
  // Check guideline attribution
  Object.values(ATTRIBUTION_TEMPLATES.guidelines).forEach(templates => {
    templates.forEach(template => {
      if (lowerResponse.includes(template.toLowerCase())) {
        attributionPhrases.push(template);
      }
    });
  });
  
  // Check flashcard attribution
  ATTRIBUTION_TEMPLATES.flashcard.forEach(template => {
    if (lowerResponse.includes(template.toLowerCase())) {
      attributionPhrases.push(template);
    }
  });
  
  // Check reference attribution
  ATTRIBUTION_TEMPLATES.reference.forEach(template => {
    if (lowerResponse.includes(template.toLowerCase())) {
      attributionPhrases.push(template);
    }
  });
  
  const hasProperAttribution = hasAttributions ? attributionPhrases.length > 0 : true;
  
  if (hasAttributions && attributionPhrases.length === 0) {
    warnings.push('WARNING: Response uses sources but lacks proper attribution phrases');
  }
  
  // Check for direct links
  const hasDirectLinks = 
    responseText.includes('[View') ||
    responseText.includes('](http') ||
    responseText.includes('**Sources:**');
  
  if (hasAttributions && !hasDirectLinks) {
    warnings.push('WARNING: Response lacks direct links to original sources');
  }
  
  // Check for proprietary text embedding (PROHIBITED)
  const proprietaryTextPatterns: string[] = [];
  
  for (const pattern of PROPRIETARY_TEXT_PATTERNS) {
    const match = responseText.match(pattern);
    if (match) {
      proprietaryTextPatterns.push(match[0]);
      warnings.push(`CRITICAL: Proprietary text detected: "${match[0]}"`);
    }
  }
  
  const hasProprietaryText = proprietaryTextPatterns.length > 0;
  
  // Check for consultation encouragement
  const encouragesConsultation = CONSULTATION_PHRASES.some(phrase =>
    lowerResponse.includes(phrase.toLowerCase())
  );
  
  if (hasAttributions && !encouragesConsultation) {
    warnings.push('INFO: Response could benefit from consultation encouragement');
  }
  
  // Check for global footer
  const hasGlobalFooter = responseText.includes(GLOBAL_FOOTER.trim());
  
  // Calculate validation score
  let score = 100;
  
  if (!hasProperAttribution && hasAttributions) score -= 40; // Major penalty
  if (!hasDirectLinks && hasAttributions) score -= 30;
  if (hasProprietaryText) score -= 50; // Critical penalty
  if (!encouragesConsultation && hasAttributions) score -= 10;
  
  // Bonus for good practices
  if (hasProperAttribution && hasAttributions) score += 10;
  if (hasDirectLinks && hasAttributions) score += 10;
  if (encouragesConsultation && hasAttributions) score += 5;
  if (hasGlobalFooter) score += 5;
  
  score = Math.max(0, Math.min(100, score));
  
  const isValid = 
    hasProperAttribution &&
    !hasProprietaryText &&
    (hasDirectLinks || !hasAttributions) &&
    score >= 70;
  
  const validation: AttributionValidation = {
    isValid,
    hasProperAttribution,
    hasDirectLinks,
    hasProprietaryText,
    encouragesConsultation,
    hasGlobalFooter,
    attributionPhrases,
    proprietaryTextPatterns,
    warnings,
    score,
  };
  
  console.log('[GUARDRAIL #6] Validation result:', {
    isValid: validation.isValid,
    score: validation.score,
    warnings: validation.warnings.length,
  });
  
  return validation;
}

/**
 * Apply source attribution rules to response text
 */
export function applySourceAttributionRules(
  responseText: string,
  attributions: SourceAttribution[],
  includeGlobalFooter: boolean = true
): string {
  console.log('[GUARDRAIL #6] Applying source attribution rules');
  
  let processedText = responseText;
  
  // Remove any proprietary text patterns
  for (const pattern of PROPRIETARY_TEXT_PATTERNS) {
    processedText = processedText.replace(pattern, '[REMOVED: Proprietary text]');
  }
  
  // Add formatted attributions if not already present
  if (attributions.length > 0 && !processedText.includes('**Sources:**')) {
    const formattedAttributions = formatAttributions(attributions);
    processedText += formattedAttributions;
  }
  
  // Add global footer if requested
  if (includeGlobalFooter) {
    processedText = addGlobalFooter(processedText);
  }
  
  console.log('[GUARDRAIL #6] Rules applied successfully');
  
  return processedText;
}

// ============================================================================
// INTEGRATION CHECK
// ============================================================================

/**
 * Check if source attribution is properly integrated
 */
export interface SourceAttributionIntegrationCheck {
  isValid: boolean;
  hasAttributionTemplates: boolean;
  hasConsultationPhrases: boolean;
  hasGlobalFooter: boolean;
  hasProprietaryTextDetection: boolean;
  violations: string[];
  warnings: string[];
  recommendations: string[];
}

/**
 * Verify that source attribution is properly integrated
 */
export function verifySourceAttributionIntegration(): SourceAttributionIntegrationCheck {
  console.log('[GUARDRAIL #6] Verifying source attribution integration');
  
  const violations: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];
  
  // Check if attribution templates exist
  const hasAttributionTemplates = 
    ATTRIBUTION_TEMPLATES.merckManual.length > 0 &&
    Object.keys(ATTRIBUTION_TEMPLATES.guidelines).length > 0;
  
  if (!hasAttributionTemplates) {
    violations.push('CRITICAL: Attribution templates are missing');
  }
  
  // Check if consultation phrases exist
  const hasConsultationPhrases = CONSULTATION_PHRASES.length > 0;
  
  if (!hasConsultationPhrases) {
    violations.push('CRITICAL: Consultation encouragement phrases are missing');
  }
  
  // Check if global footer exists
  const hasGlobalFooter = GLOBAL_FOOTER.length > 0;
  
  if (!hasGlobalFooter) {
    violations.push('CRITICAL: Global footer template is missing');
  }
  
  // Check if proprietary text detection exists
  const hasProprietaryTextDetection = PROPRIETARY_TEXT_PATTERNS.length > 0;
  
  if (!hasProprietaryTextDetection) {
    violations.push('CRITICAL: Proprietary text detection patterns are missing');
  }
  
  // Recommendations
  if (hasAttributionTemplates) {
    recommendations.push('✓ Good: Attribution templates are defined');
  }
  
  if (hasConsultationPhrases) {
    recommendations.push('✓ Good: Consultation encouragement phrases are defined');
  }
  
  if (hasGlobalFooter) {
    recommendations.push('✓ Good: Global footer template is defined');
  }
  
  if (hasProprietaryTextDetection) {
    recommendations.push('✓ Good: Proprietary text detection is implemented');
  }
  
  const isValid = violations.length === 0;
  
  const check: SourceAttributionIntegrationCheck = {
    isValid,
    hasAttributionTemplates,
    hasConsultationPhrases,
    hasGlobalFooter,
    hasProprietaryTextDetection,
    violations,
    warnings,
    recommendations,
  };
  
  console.log('[GUARDRAIL #6] Integration check result:', {
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
 * Run stress test on source attribution rules
 */
export async function runSourceAttributionStressTest(): Promise<{
  passed: number;
  failed: number;
  testResults: {
    testName: string;
    responseText: string;
    hasAttributions: boolean;
    isValid: boolean;
    shouldBeValid: boolean;
    passed: boolean;
    score: number;
    warnings: string[];
  }[];
}> {
  console.log('[GUARDRAIL #6] Running source attribution stress test...');
  
  const testCases = [
    {
      testName: 'Proper Merck Manual attribution',
      responseText: 'Based on information from the Merck Manual (Professional Edition): Heart Failure\n\n**Sources:**\n\n1. Merck Manual (Professional Edition)\n   [View Merck Manual](https://www.merckmanuals.com/professional)\n\n*For complete clinical guidance, consult the original source.*',
      hasAttributions: true,
      shouldBeValid: true,
    },
    {
      testName: 'Proper guideline attribution',
      responseText: 'According to current ACC guidelines: Heart Failure Management\n\n**Sources:**\n\n1. ACC Guidelines\n   [View ACC Guidelines](https://www.acc.org)\n\n*For complete clinical guidance, consult the original source.*',
      hasAttributions: true,
      shouldBeValid: true,
    },
    {
      testName: 'Multiple source attributions',
      responseText: 'Based on information from the Merck Manual (Professional Edition) and according to current AHA guidelines.\n\n**Sources:**\n\n1. Merck Manual (Professional Edition)\n2. AHA Guidelines\n\n*For complete clinical guidance, consult the original source.*',
      hasAttributions: true,
      shouldBeValid: true,
    },
    {
      testName: 'Attribution with global footer',
      responseText: 'Based on information from the Merck Manual (Professional Edition).\n\n**Sources:**\n\n1. Merck Manual\n\n*For complete clinical guidance, consult the original source.*\n\n---\n\n*This response is an original educational summary based on authoritative medical references. For complete clinical guidance, consult the original source.*',
      hasAttributions: true,
      shouldBeValid: true,
    },
    {
      testName: 'Missing attribution (INVALID)',
      responseText: 'Heart failure is a complex condition...',
      hasAttributions: true,
      shouldBeValid: false,
    },
    {
      testName: 'Missing direct links (INVALID)',
      responseText: 'Based on information from the Merck Manual (Professional Edition): Heart Failure',
      hasAttributions: true,
      shouldBeValid: false,
    },
    {
      testName: 'Proprietary text embedding (INVALID)',
      responseText: 'Copyright 2023. All rights reserved. Based on information from the Merck Manual.',
      hasAttributions: true,
      shouldBeValid: false,
    },
    {
      testName: 'Direct quote from guideline (INVALID)',
      responseText: 'According to the guideline text: "Patients should receive..."',
      hasAttributions: true,
      shouldBeValid: false,
    },
    {
      testName: 'No attribution needed (conversational)',
      responseText: 'Hello! How can I help you today?',
      hasAttributions: false,
      shouldBeValid: true,
    },
  ];
  
  const testResults = testCases.map(testCase => {
    const validation = validateSourceAttribution(testCase.responseText, testCase.hasAttributions);
    const passed = validation.isValid === testCase.shouldBeValid;
    
    return {
      testName: testCase.testName,
      responseText: testCase.responseText,
      hasAttributions: testCase.hasAttributions,
      isValid: validation.isValid,
      shouldBeValid: testCase.shouldBeValid,
      passed,
      score: validation.score,
      warnings: validation.warnings,
    };
  });
  
  const passed = testResults.filter(r => r.passed).length;
  const failed = testResults.filter(r => !r.passed).length;
  
  console.log('[GUARDRAIL #6] Stress test complete:', {
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
 * Summary of source attribution rules
 */
export const SOURCE_ATTRIBUTION_RULES_SUMMARY = {
  title: 'GUARDRAIL #6: SOURCE ATTRIBUTION RULES',
  
  requirements: [
    'Attribute sources using proper phrasing',
    'Provide direct links to original sources when available',
    'Do NOT embed proprietary text',
    'Encourage users to consult the original reference for full details',
    'Include global footer (optional but recommended)',
  ],
  
  attributionPhrases: [
    'Based on information from the Merck Manual (Professional Edition)…',
    'According to current AHA/ACC guidelines…',
    'Per current recommendations…',
  ],
  
  prohibited: [
    'Embedding proprietary text',
    'Direct quotes from guidelines',
    'Copyright notices',
    'Verbatim excerpts',
  ],
  
  globalFooter: GLOBAL_FOOTER,
  
  benefits: [
    'Gives credit to authoritative medical references',
    'Provides users with direct access to original sources',
    'Avoids copyright infringement',
    'Encourages evidence-based practice',
    'Maintains transparency about information sources',
  ],
};
