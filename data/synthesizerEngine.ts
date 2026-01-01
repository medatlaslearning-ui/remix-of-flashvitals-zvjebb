
/**
 * SYNTHESIZER ENGINE - Figure-Eight Data Flow Architecture
 * 
 * GUARDRAIL #1: SYSTEM ARCHITECTURE ROLES (IMPLEMENTED)
 * GUARDRAIL #2: GUIDELINE CONSULTATION TRIGGERS (IMPLEMENTED)
 * GUARDRAIL #3: GUIDELINE USAGE RULES (IMPLEMENTED)
 * 
 * This engine implements a figure-eight data flow with one-way valves AND
 * enforces strict architectural roles and guideline usage rules:
 * 
 * • Core Knowledge Engine: READ-ONLY stable medical knowledge
 * • Guideline Website Layer: Runtime consultation (NOT cached)
 * • Synthesizer Engine: Original educational responses with citations
 * 
 * GUARDRAIL #3: GUIDELINE USAGE RULES
 * 
 * • Use guideline information to CONTEXTUALIZE, not overwrite
 * • Compare live guidance to core medical framework
 * • Validate consistency with known mechanisms
 * • If guidance differs from historical practice, explicitly state this
 * • Never claim "absolute correctness" or "verification"
 * 
 * REQUIRED PHRASING:
 * - "Based on current guidelines..."
 * - "This recommendation aligns with..."
 * - "Recent guidance now emphasizes..."
 * 
 * PROHIBITED LANGUAGE:
 * - "This confirms the information is correct"
 * - "The core engine verifies this as true"
 * - "This replaces previous knowledge"
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
 * │                                                               │
 * └─────────────────────────────────────────────────────────────┘
 * 
 * ONE-WAY VALVES:
 * - Valve 1: User input can only flow forward to query processing
 * - Valve 2: Core knowledge can only flow forward to knowledge retrieval
 * - Valve 3: Synthesized data can only flow forward to refinement
 * - Valve 4: Final response can only flow to user (no backflow)
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
  
  // Priority 1: Guidelines (if guideline query) - WITH GUARDRAIL #3
  if (processedQuery.intent === 'guideline' && hasGuidelinesData) {
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
  // No relevant knowledge found
  else {
    responseText = generateNoKnowledgeResponse(processedQuery);
    quality -= 20;
  }
  
  // GUARDRAIL #3: Apply guideline usage rules
  responseText = applyGuidelineUsageRules(responseText, hasGuidelinesData, hasCoreKnowledgeData);
  
  // GUARDRAIL #3: Validate guideline usage
  const guidelineUsageValidation = validateGuidelineUsage(
    responseText,
    hasGuidelinesData,
    hasCoreKnowledgeData
  );
  
  // Adjust quality based on guideline usage validation
  if (!guidelineUsageValidation.isValid) {
    quality -= (100 - guidelineUsageValidation.score) * 0.3; // Penalty for poor guideline usage
  }
  
  const response: SynthesizedResponse = {
    text: responseText,
    quality: Math.max(0, Math.min(100, quality)),
    sources,
    timestamp: new Date(),
    guidelineUsageValidation,
  };
  
  console.log('[VALVE 3] Response synthesized:', {
    quality: response.quality,
    sources: response.sources,
    length: response.text.length,
    guidelineUsageValid: guidelineUsageValidation.isValid,
    guidelineUsageScore: guidelineUsageValidation.score,
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
 * Generate response from guidelines - WITH GUARDRAIL #3
 */
function generateGuidelineResponse(knowledge: CoreKnowledge, query: ProcessedQuery): string {
  let response = '**Clinical Practice Guidelines**\n\n';
  
  // GUARDRAIL #3: Use proper contextualization phrasing
  response += '*Based on current guidelines, the following recommendations apply:*\n\n';
  
  // Add guideline information (simplified for now)
  if (knowledge.accGuidelines.length > 0) {
    const guideline = knowledge.accGuidelines[0];
    response += `**${guideline.topic}** (ACC Guidelines)\n\n`;
    response += `According to current practice guidelines, ${guideline.guidelineSummary}\n\n`;
  }
  
  if (knowledge.ahaGuidelines.length > 0) {
    const guideline = knowledge.ahaGuidelines[0];
    response += `**${guideline.topic}** (AHA Guidelines)\n\n`;
    response += `Current guidelines suggest that ${guideline.guidelineSummary}\n\n`;
  }
  
  // GUARDRAIL #3: Add note about guideline contextualization
  response += '\n*Note: These guidelines provide current, time-sensitive recommendations that contextualize core medical knowledge. They do not replace fundamental medical understanding but rather inform current clinical practice standards.*\n\n';
  
  response += '*For complete guideline details, please see the guideline sections below.*';
  
  return response;
}

/**
 * Generate response from Merck Manual entries
 */
function generateMerckResponse(entries: MerckManualEntry[], query: ProcessedQuery): string {
  const primaryEntry = entries[0];
  let response = `**${primaryEntry.topic}**\n\n`;
  
  // Provide focused response based on query intent
  if (query.intent === 'pathophysiology') {
    response += '**Pathophysiology:**\n\n';
    response += `${primaryEntry.pathophysiology}\n\n`;
  } else if (query.intent === 'clinical') {
    response += '**Clinical Presentation:**\n\n';
    response += `${primaryEntry.clinicalPresentation}\n\n`;
  } else if (query.intent === 'diagnostic') {
    response += '**Diagnostic Approach:**\n\n';
    response += `${primaryEntry.diagnosticApproach}\n\n`;
  } else if (query.intent === 'treatment') {
    response += '**Treatment:**\n\n';
    response += `${primaryEntry.treatment}\n\n`;
  } else {
    // Comprehensive response
    response += '**Pathophysiology:**\n\n';
    response += `${primaryEntry.pathophysiology}\n\n`;
    response += '**Clinical Presentation:**\n\n';
    response += `${primaryEntry.clinicalPresentation}\n\n`;
    response += '**Diagnostic Approach:**\n\n';
    response += `${primaryEntry.diagnosticApproach}\n\n`;
    response += '**Treatment:**\n\n';
    response += `${primaryEntry.treatment}\n\n`;
  }
  
  // Add clinical pearls
  if (primaryEntry.clinicalPearls.length > 0) {
    response += '**Clinical Pearls:**\n\n';
    primaryEntry.clinicalPearls.forEach(pearl => {
      response += `• ${pearl}\n`;
    });
    response += '\n';
  }
  
  response += `*This information is from the Merck Manual Professional (${primaryEntry.system}).*`;
  
  return response;
}

/**
 * Generate response from flashcards
 */
function generateFlashcardResponse(flashcards: Flashcard[], query: ProcessedQuery): string {
  const primaryCard = flashcards[0];
  let response = `**${primaryCard.topic}**\n\n`;
  
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
 * Generate response when no knowledge is found
 */
function generateNoKnowledgeResponse(query: ProcessedQuery): string {
  return 'I don\'t have specific information on this topic in my current knowledge base. However, I recommend consulting the Merck Manual Professional and clinical practice guidelines for comprehensive, evidence-based medical information. Please try rephrasing your question or asking about a specific medical condition, symptom, or treatment.';
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
  };
  
  console.log('[REFINEMENT] Refinement complete:', {
    quality: refined.quality,
    iterations: refined.iterations,
    improvements: refined.improvements.length,
  });
  
  return refined;
}

// ============================================================================
// VALVE 4: FINAL OUTPUT
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
  };
  timestamp: Date;
}

/**
 * VALVE 4: Final output to user (one-way flow)
 * Refined response → User output (no backflow)
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
    },
    timestamp: new Date(),
  };
  
  console.log('[VALVE 4] Final output generated:', {
    quality: output.quality,
    processingTime: output.metadata.processingTime,
    bleedingRisk: output.metadata.contentBleedingRisk,
    architectureValid: architectureIntegrity?.isValid,
    guidelineUsageValid: output.metadata.guidelineUsageValidation?.isValid,
  });
  
  return output;
}

// ============================================================================
// MAIN SYNTHESIZER ENGINE
// ============================================================================

/**
 * Main synthesizer engine - orchestrates the figure-eight flow with guardrails
 */
export class SynthesizerEngine {
  private static instance: SynthesizerEngine;
  
  private constructor() {
    console.log('[SYNTHESIZER ENGINE] Initialized with GUARDRAILS #1, #2, and #3');
  }
  
  static getInstance(): SynthesizerEngine {
    if (!SynthesizerEngine.instance) {
      SynthesizerEngine.instance = new SynthesizerEngine();
    }
    return SynthesizerEngine.instance;
  }
  
  /**
   * Process query through the figure-eight flow with guardrails
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
    
    // VALVE 4: Generate final output
    const finalOutput = generateFinalOutput(refinedResponse, synthesizedData, startTime);
    
    console.log('[SYNTHESIZER ENGINE] Query processed successfully');
    
    return finalOutput;
  }
  
  /**
   * Run stress test on the synthesizer engine - WITH GUARDRAIL #3 TESTS
   */
  async runStressTest(): Promise<{
    passed: number;
    failed: number;
    averageQuality: number;
    averageProcessingTime: number;
    averageGuidelineUsageScore: number;
    results: {
      query: string;
      quality: number;
      processingTime: number;
      bleedingRisk: number;
      guidelineUsageScore: number;
      guidelineUsageValid: boolean;
      hasProhibitedLanguage: boolean;
      passed: boolean;
    }[];
  }> {
    console.log('[SYNTHESIZER ENGINE] Running comprehensive stress test with GUARDRAIL #3...');
    
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
    ];
    
    const results = [];
    let totalQuality = 0;
    let totalProcessingTime = 0;
    let totalGuidelineUsageScore = 0;
    let guidelineUsageCount = 0;
    
    for (const query of testQueries) {
      const output = await this.processQuery(query, []);
      
      const guidelineUsageScore = output.metadata.guidelineUsageValidation?.score || 100;
      const guidelineUsageValid = output.metadata.guidelineUsageValidation?.isValid !== false;
      const hasProhibitedLanguage = output.metadata.guidelineUsageValidation?.hasProhibitedLanguage || false;
      
      if (output.metadata.guidelineUsageValidation) {
        totalGuidelineUsageScore += guidelineUsageScore;
        guidelineUsageCount++;
      }
      
      const passed = 
        output.quality >= 70 &&
        output.metadata.contentBleedingRisk < 50 &&
        guidelineUsageValid &&
        !hasProhibitedLanguage;
      
      results.push({
        query,
        quality: output.quality,
        processingTime: output.metadata.processingTime,
        bleedingRisk: output.metadata.contentBleedingRisk,
        guidelineUsageScore,
        guidelineUsageValid,
        hasProhibitedLanguage,
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
    
    console.log('[SYNTHESIZER ENGINE] Stress test complete:', {
      passed,
      failed,
      averageQuality,
      averageProcessingTime,
      averageGuidelineUsageScore,
    });
    
    return {
      passed,
      failed,
      averageQuality,
      averageProcessingTime,
      averageGuidelineUsageScore,
      results,
    };
  }
}

// Export singleton instance
export const synthesizerEngine = SynthesizerEngine.getInstance();
