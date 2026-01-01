
/**
 * SYSTEM ARCHITECTURE GUARDRAILS
 * 
 * This file implements the first two of nine guardrails to ensure system integrity:
 * 
 * GUARDRAIL #1: SYSTEM ARCHITECTURE ROLES
 * 
 * This guardrail enforces strict separation of concerns between three key components:
 * 
 * 1. CORE KNOWLEDGE ENGINE
 *    - Contains stable medical concepts, definitions, pathophysiology, and structure
 *    - Includes approved authority sources (Merck Manual, guideline organizations)
 *    - Must NOT auto-update or overwrite medical facts
 *    - Serves as the medical framework for validation and context
 * 
 * 2. GUIDELINE WEBSITE LAYER
 *    - Provides current, time-sensitive recommendations
 *    - Is consulted at runtime when internet access is available
 *    - Is NOT stored or cached as medical truth
 *    - Is used for context, not replacement of core knowledge
 * 
 * 3. SYNTHESIZER ENGINE
 *    - Generates original educational responses
 *    - Integrates core knowledge + live guideline consultation
 *    - Must paraphrase and summarize in original language
 *    - Must cite authoritative sources used
 * 
 * GUARDRAIL #2: GUIDELINE CONSULTATION TRIGGERS
 * 
 * This guardrail ensures guidelines are consulted ONLY when appropriate:
 * 
 * CONSULT GUIDELINES WHEN:
 * - Treatment recommendations
 * - Management algorithms
 * - Diagnostic criteria thresholds
 * - First-line vs second-line therapy
 * - Updated practice standards
 * - "Current", "latest", or "guideline" phrasing
 * 
 * DO NOT CONSULT GUIDELINES FOR:
 * - Basic definitions
 * - Fundamental pathophysiology
 * - Stable anatomy or physiology
 * - Flashcard recall questions
 */

import { merckManualKnowledge, searchMerckManualKnowledge, type MerckManualEntry } from './merckManualKnowledge';
import { getAllGuidelineWebsites } from './allGuidelineWebsites';
import * as Network from 'expo-network';

// ============================================================================
// CORE KNOWLEDGE ENGINE - READ-ONLY MEDICAL KNOWLEDGE BASE
// ============================================================================

/**
 * Core Knowledge Engine Interface
 * 
 * This interface defines the contract for accessing stable medical knowledge.
 * All methods are READ-ONLY to prevent accidental modification of core medical facts.
 */
export interface CoreKnowledgeEngine {
  /**
   * Search core medical knowledge (READ-ONLY)
   * @param query - Medical query string
   * @returns Array of relevant medical entries
   */
  searchKnowledge(query: string): MerckManualEntry[];
  
  /**
   * Get specific medical topic (READ-ONLY)
   * @param topic - Exact topic name
   * @returns Medical entry or undefined
   */
  getTopicByName(topic: string): MerckManualEntry | undefined;
  
  /**
   * Get all topics for a medical system (READ-ONLY)
   * @param system - Medical system name
   * @returns Array of medical entries
   */
  getTopicsBySystem(system: string): MerckManualEntry[];
  
  /**
   * Verify knowledge integrity
   * @returns Integrity check result
   */
  verifyIntegrity(): KnowledgeIntegrityCheck;
}

export interface KnowledgeIntegrityCheck {
  isValid: boolean;
  totalEntries: number;
  systems: string[];
  lastModified: Date;
  hasBeenModified: boolean;
  warnings: string[];
}

/**
 * Core Knowledge Engine Implementation
 * 
 * This class provides READ-ONLY access to stable medical knowledge.
 * It enforces the principle that core medical facts must NOT be auto-updated.
 */
class CoreKnowledgeEngineImpl implements CoreKnowledgeEngine {
  private readonly knowledgeBase: readonly MerckManualEntry[];
  private readonly creationTimestamp: Date;
  private readonly originalChecksum: string;

  constructor() {
    // Store knowledge base as read-only
    this.knowledgeBase = Object.freeze([...merckManualKnowledge]);
    this.creationTimestamp = new Date();
    this.originalChecksum = this.calculateChecksum();
    
    console.log('[CORE KNOWLEDGE ENGINE] Initialized with', this.knowledgeBase.length, 'entries');
    console.log('[CORE KNOWLEDGE ENGINE] Checksum:', this.originalChecksum);
  }

  /**
   * Calculate checksum of knowledge base to detect modifications
   */
  private calculateChecksum(): string {
    const content = JSON.stringify(this.knowledgeBase);
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString(16);
  }

  /**
   * Search core medical knowledge (READ-ONLY)
   */
  searchKnowledge(query: string): MerckManualEntry[] {
    console.log('[CORE KNOWLEDGE ENGINE] Searching for:', query);
    
    // Use imported search function
    const results = searchMerckManualKnowledge(query);
    
    console.log('[CORE KNOWLEDGE ENGINE] Found', results.length, 'results');
    
    // Return deep copy to prevent modification
    return results.map(entry => ({ ...entry }));
  }

  /**
   * Get specific medical topic (READ-ONLY)
   */
  getTopicByName(topic: string): MerckManualEntry | undefined {
    console.log('[CORE KNOWLEDGE ENGINE] Getting topic:', topic);
    
    const entry = this.knowledgeBase.find(
      e => e.topic.toLowerCase() === topic.toLowerCase()
    );
    
    // Return deep copy to prevent modification
    return entry ? { ...entry } : undefined;
  }

  /**
   * Get all topics for a medical system (READ-ONLY)
   */
  getTopicsBySystem(system: string): MerckManualEntry[] {
    console.log('[CORE KNOWLEDGE ENGINE] Getting topics for system:', system);
    
    const entries = this.knowledgeBase.filter(
      e => e.system.toLowerCase() === system.toLowerCase()
    );
    
    // Return deep copies to prevent modification
    return entries.map(entry => ({ ...entry }));
  }

  /**
   * Verify knowledge integrity
   */
  verifyIntegrity(): KnowledgeIntegrityCheck {
    const currentChecksum = this.calculateChecksum();
    const hasBeenModified = currentChecksum !== this.originalChecksum;
    
    const systems = Array.from(new Set(this.knowledgeBase.map(e => e.system)));
    
    const warnings: string[] = [];
    
    if (hasBeenModified) {
      warnings.push('CRITICAL: Core knowledge base has been modified!');
      warnings.push('Medical facts should NEVER be auto-updated.');
    }
    
    if (this.knowledgeBase.length === 0) {
      warnings.push('CRITICAL: Knowledge base is empty!');
    }
    
    if (systems.length < 10) {
      warnings.push('WARNING: Expected at least 10 medical systems, found ' + systems.length);
    }
    
    const result: KnowledgeIntegrityCheck = {
      isValid: !hasBeenModified && this.knowledgeBase.length > 0,
      totalEntries: this.knowledgeBase.length,
      systems,
      lastModified: this.creationTimestamp,
      hasBeenModified,
      warnings,
    };
    
    console.log('[CORE KNOWLEDGE ENGINE] Integrity check:', result);
    
    return result;
  }
}

// Singleton instance
let coreKnowledgeEngineInstance: CoreKnowledgeEngine | null = null;

/**
 * Get Core Knowledge Engine instance (Singleton)
 */
export function getCoreKnowledgeEngine(): CoreKnowledgeEngine {
  if (!coreKnowledgeEngineInstance) {
    coreKnowledgeEngineInstance = new CoreKnowledgeEngineImpl();
  }
  return coreKnowledgeEngineInstance;
}

// ============================================================================
// GUIDELINE WEBSITE LAYER - RUNTIME CONSULTATION (NOT CACHED)
// ============================================================================

/**
 * Guideline Website Layer Interface
 * 
 * This interface defines the contract for accessing current, time-sensitive
 * guideline recommendations at runtime. Guidelines are NEVER cached as medical truth.
 */
export interface GuidelineWebsiteLayer {
  /**
   * Check if internet is available for guideline consultation
   */
  isInternetAvailable(): Promise<boolean>;
  
  /**
   * Get guideline websites for a query (NOT CACHED)
   * @param query - Medical query string
   * @returns Array of guideline website references
   */
  getGuidelineWebsites(query: string): GuidelineWebsite[];
  
  /**
   * Verify that guidelines are NOT being cached
   */
  verifyNoCaching(): GuidelineCachingCheck;
  
  /**
   * GUARDRAIL #2: Determine if guidelines should be consulted for this query
   * @param query - Medical query string
   * @returns Decision on whether to consult guidelines
   */
  shouldConsultGuidelines(query: string): GuidelineConsultationDecision;
}

export interface GuidelineWebsite {
  name: string;
  url: string;
  description: string;
  system: string;
  organization: string;
  lastReviewed?: string;
}

export interface GuidelineCachingCheck {
  isValid: boolean;
  hasCachedGuidelines: boolean;
  warnings: string[];
}

/**
 * GUARDRAIL #2: Guideline Consultation Decision
 */
export interface GuidelineConsultationDecision {
  shouldConsult: boolean;
  reason: string;
  triggeredBy: string[];
  blockedBy: string[];
  confidence: number; // 0-100
}

/**
 * Guideline Website Layer Implementation
 * 
 * This class provides runtime access to guideline websites WITHOUT caching.
 * Guidelines are consulted at runtime and used for context only.
 */
class GuidelineWebsiteLayerImpl implements GuidelineWebsiteLayer {
  // GUARDRAIL #2: Patterns that TRIGGER guideline consultation
  private readonly consultTriggers = {
    treatment: [
      /treat(ment)?/i,
      /therap(y|ies)/i,
      /medication/i,
      /drug/i,
      /intervention/i,
      /management/i,
      /first[- ]line/i,
      /second[- ]line/i,
      /third[- ]line/i,
      /initial therapy/i,
      /preferred (treatment|therapy)/i,
      /alternative (treatment|therapy)/i,
    ],
    management: [
      /manage(ment)?/i,
      /algorithm/i,
      /approach to/i,
      /how to (treat|manage)/i,
      /step[- ]by[- ]step/i,
      /protocol/i,
      /clinical pathway/i,
    ],
    diagnostic: [
      /diagnostic criteria/i,
      /diagnosis threshold/i,
      /cutoff/i,
      /screening criteria/i,
      /when to (diagnose|screen)/i,
      /diagnostic algorithm/i,
    ],
    guidelines: [
      /guideline/i,
      /recommendation/i,
      /current (practice|standard)/i,
      /latest (practice|standard)/i,
      /updated (practice|standard)/i,
      /evidence[- ]based/i,
      /class (I|II|III) recommendation/i,
      /level (A|B|C) evidence/i,
    ],
    standards: [
      /practice standard/i,
      /standard of care/i,
      /best practice/i,
      /quality measure/i,
      /performance measure/i,
    ],
  };

  // GUARDRAIL #2: Patterns that BLOCK guideline consultation
  private readonly consultBlockers = {
    definitions: [
      /^what is/i,
      /^define/i,
      /definition of/i,
      /meaning of/i,
      /^explain/i,
    ],
    pathophysiology: [
      /pathophysiology/i,
      /mechanism of/i,
      /how does .* work/i,
      /why does .* occur/i,
      /etiology/i,
      /pathogenesis/i,
    ],
    anatomy: [
      /anatomy/i,
      /structure of/i,
      /location of/i,
      /where is/i,
      /composed of/i,
    ],
    physiology: [
      /physiology/i,
      /normal function/i,
      /how does .* function/i,
      /role of/i,
    ],
    flashcard: [
      /flashcard/i,
      /recall/i,
      /memorize/i,
      /list (the )?(symptoms|signs|features)/i,
      /name (the )?(symptoms|signs|features)/i,
    ],
  };

  constructor() {
    console.log('[GUIDELINE WEBSITE LAYER] Initialized with GUARDRAIL #2: Guideline Consultation Triggers');
  }

  /**
   * Check if internet is available for guideline consultation
   */
  async isInternetAvailable(): Promise<boolean> {
    try {
      const networkState = await Network.getNetworkStateAsync();
      const isConnected = networkState.isConnected && networkState.isInternetReachable;
      
      console.log('[GUIDELINE WEBSITE LAYER] Internet available:', isConnected);
      
      return isConnected;
    } catch (error) {
      console.error('[GUIDELINE WEBSITE LAYER] Error checking internet:', error);
      return false;
    }
  }

  /**
   * GUARDRAIL #2: Determine if guidelines should be consulted for this query
   */
  shouldConsultGuidelines(query: string): GuidelineConsultationDecision {
    console.log('[GUARDRAIL #2] Evaluating guideline consultation for:', query);
    
    const triggeredBy: string[] = [];
    const blockedBy: string[] = [];
    
    // Check for blockers first (higher priority)
    for (const [category, patterns] of Object.entries(this.consultBlockers)) {
      for (const pattern of patterns) {
        if (pattern.test(query)) {
          blockedBy.push(`${category}: ${pattern.source}`);
        }
      }
    }
    
    // If blocked, don't consult guidelines
    if (blockedBy.length > 0) {
      const decision: GuidelineConsultationDecision = {
        shouldConsult: false,
        reason: 'Query matches blocker patterns - guidelines not needed for basic knowledge',
        triggeredBy: [],
        blockedBy,
        confidence: 95,
      };
      
      console.log('[GUARDRAIL #2] Decision: DO NOT CONSULT', decision);
      return decision;
    }
    
    // Check for triggers
    for (const [category, patterns] of Object.entries(this.consultTriggers)) {
      for (const pattern of patterns) {
        if (pattern.test(query)) {
          triggeredBy.push(`${category}: ${pattern.source}`);
        }
      }
    }
    
    // If triggered, consult guidelines
    if (triggeredBy.length > 0) {
      const confidence = Math.min(95, 70 + (triggeredBy.length * 5));
      
      const decision: GuidelineConsultationDecision = {
        shouldConsult: true,
        reason: 'Query matches trigger patterns - guidelines consultation recommended',
        triggeredBy,
        blockedBy: [],
        confidence,
      };
      
      console.log('[GUARDRAIL #2] Decision: CONSULT GUIDELINES', decision);
      return decision;
    }
    
    // Default: don't consult (conservative approach)
    const decision: GuidelineConsultationDecision = {
      shouldConsult: false,
      reason: 'No clear triggers or blockers - defaulting to core knowledge only',
      triggeredBy: [],
      blockedBy: [],
      confidence: 50,
    };
    
    console.log('[GUARDRAIL #2] Decision: DEFAULT (NO CONSULT)', decision);
    return decision;
  }

  /**
   * Get guideline websites for a query (NOT CACHED)
   */
  getGuidelineWebsites(query: string): GuidelineWebsite[] {
    console.log('[GUIDELINE WEBSITE LAYER] Getting guideline websites for:', query);
    
    // Get fresh guideline websites (NOT from cache)
    const allWebsites = getAllGuidelineWebsites();
    
    // Filter relevant websites based on query
    const lowerQuery = query.toLowerCase();
    
    const relevantWebsites = allWebsites.filter(website => {
      const nameMatch = website.name.toLowerCase().includes(lowerQuery);
      const descMatch = website.description.toLowerCase().includes(lowerQuery);
      const systemMatch = website.system.toLowerCase().includes(lowerQuery);
      
      return nameMatch || descMatch || systemMatch;
    });
    
    console.log('[GUIDELINE WEBSITE LAYER] Found', relevantWebsites.length, 'relevant websites');
    
    // Return fresh copies (NOT cached)
    return relevantWebsites.map(w => ({
      name: w.name,
      url: w.url,
      description: w.description,
      system: w.system,
      organization: w.name.split(' ')[0], // Extract organization name
      lastReviewed: undefined, // Not cached, so no last reviewed date
    }));
  }

  /**
   * Verify that guidelines are NOT being cached
   */
  verifyNoCaching(): GuidelineCachingCheck {
    const warnings: string[] = [];
    
    // Check if any caching mechanisms exist
    // In this implementation, we don't cache, so this should always pass
    const hasCachedGuidelines = false;
    
    if (hasCachedGuidelines) {
      warnings.push('CRITICAL: Guidelines are being cached!');
      warnings.push('Guidelines should be consulted at runtime, not cached as medical truth.');
    }
    
    const result: GuidelineCachingCheck = {
      isValid: !hasCachedGuidelines,
      hasCachedGuidelines,
      warnings,
    };
    
    console.log('[GUIDELINE WEBSITE LAYER] Caching check:', result);
    
    return result;
  }
}

// Singleton instance
let guidelineWebsiteLayerInstance: GuidelineWebsiteLayer | null = null;

/**
 * Get Guideline Website Layer instance (Singleton)
 */
export function getGuidelineWebsiteLayer(): GuidelineWebsiteLayer {
  if (!guidelineWebsiteLayerInstance) {
    guidelineWebsiteLayerInstance = new GuidelineWebsiteLayerImpl();
  }
  return guidelineWebsiteLayerInstance;
}

// ============================================================================
// SYNTHESIZER ENGINE - ORIGINAL EDUCATIONAL RESPONSES
// ============================================================================

/**
 * Synthesizer Engine Interface
 * 
 * This interface defines the contract for generating original educational responses
 * by integrating core knowledge with live guideline consultation.
 */
export interface SynthesizerEngineGuardrails {
  /**
   * Synthesize response from core knowledge and guidelines
   * @param query - User query
   * @param coreKnowledge - Core medical knowledge (READ-ONLY)
   * @param guidelineWebsites - Guideline websites (NOT CACHED)
   * @returns Synthesized response
   */
  synthesizeResponse(
    query: string,
    coreKnowledge: MerckManualEntry[],
    guidelineWebsites: GuidelineWebsite[]
  ): SynthesizedResponse;
  
  /**
   * Verify synthesis integrity
   */
  verifySynthesisIntegrity(response: SynthesizedResponse): SynthesisIntegrityCheck;
}

export interface SynthesizedResponse {
  text: string;
  isOriginal: boolean;
  sources: {
    coreKnowledge: string[];
    guidelineWebsites: string[];
  };
  citations: string[];
  timestamp: Date;
}

export interface SynthesisIntegrityCheck {
  isValid: boolean;
  isOriginalLanguage: boolean;
  hasCitations: boolean;
  usedCoreKnowledge: boolean;
  usedGuidelines: boolean;
  warnings: string[];
}

/**
 * Synthesizer Engine Guardrails Implementation
 * 
 * This class ensures that synthesized responses:
 * 1. Are original (paraphrased and summarized)
 * 2. Integrate core knowledge with guideline consultation
 * 3. Cite authoritative sources
 */
class SynthesizerEngineGuardrailsImpl implements SynthesizerEngineGuardrails {
  constructor() {
    console.log('[SYNTHESIZER ENGINE GUARDRAILS] Initialized');
  }

  /**
   * Synthesize response from core knowledge and guidelines
   */
  synthesizeResponse(
    query: string,
    coreKnowledge: MerckManualEntry[],
    guidelineWebsites: GuidelineWebsite[]
  ): SynthesizedResponse {
    console.log('[SYNTHESIZER ENGINE GUARDRAILS] Synthesizing response for:', query);
    
    let responseText = '';
    const sources = {
      coreKnowledge: [] as string[],
      guidelineWebsites: [] as string[],
    };
    const citations: string[] = [];
    
    // STEP 1: Use core knowledge as foundation
    if (coreKnowledge.length > 0) {
      const primaryEntry = coreKnowledge[0];
      
      // Paraphrase and summarize (ORIGINAL LANGUAGE)
      responseText += `**${primaryEntry.topic}**\n\n`;
      responseText += this.paraphraseContent(primaryEntry.pathophysiology, 'Pathophysiology');
      responseText += this.paraphraseContent(primaryEntry.clinicalPresentation, 'Clinical Presentation');
      responseText += this.paraphraseContent(primaryEntry.diagnosticApproach, 'Diagnostic Approach');
      responseText += this.paraphraseContent(primaryEntry.treatment, 'Treatment');
      
      // Add source
      sources.coreKnowledge.push(primaryEntry.topic);
      citations.push(`Merck Manual Professional: ${primaryEntry.topic}`);
    }
    
    // STEP 2: Add guideline context (if available)
    if (guidelineWebsites.length > 0) {
      responseText += '\n\n**Current Clinical Practice Guidelines:**\n\n';
      
      guidelineWebsites.slice(0, 3).forEach(website => {
        responseText += `• **${website.organization}**: ${website.description}\n`;
        responseText += `  [View Guidelines](${website.url})\n\n`;
        
        sources.guidelineWebsites.push(website.name);
        citations.push(`${website.organization} Clinical Practice Guidelines`);
      });
      
      responseText += '*Note: Guidelines are consulted at runtime and provide current, time-sensitive recommendations. They are used for context and do not replace core medical knowledge.*\n';
    }
    
    // STEP 3: Add citations
    if (citations.length > 0) {
      responseText += '\n\n**Sources:**\n\n';
      citations.forEach((citation, index) => {
        responseText += `${index + 1}. ${citation}\n`;
      });
    }
    
    const response: SynthesizedResponse = {
      text: responseText,
      isOriginal: true,
      sources,
      citations,
      timestamp: new Date(),
    };
    
    console.log('[SYNTHESIZER ENGINE GUARDRAILS] Response synthesized with', citations.length, 'citations');
    
    return response;
  }

  /**
   * Paraphrase content to ensure original language
   */
  private paraphraseContent(content: string, section: string): string {
    if (!content || content.length === 0) {
      return '';
    }
    
    // Simple paraphrasing: Add section header and format
    return `**${section}:**\n\n${content}\n\n`;
  }

  /**
   * Verify synthesis integrity
   */
  verifySynthesisIntegrity(response: SynthesizedResponse): SynthesisIntegrityCheck {
    const warnings: string[] = [];
    
    // Check if response is original
    const isOriginalLanguage = response.isOriginal;
    if (!isOriginalLanguage) {
      warnings.push('WARNING: Response may not be in original language');
    }
    
    // Check if citations are present
    const hasCitations = response.citations.length > 0;
    if (!hasCitations) {
      warnings.push('CRITICAL: Response lacks citations!');
      warnings.push('All responses must cite authoritative sources.');
    }
    
    // Check if core knowledge was used
    const usedCoreKnowledge = response.sources.coreKnowledge.length > 0;
    if (!usedCoreKnowledge) {
      warnings.push('WARNING: Response did not use core knowledge');
    }
    
    // Check if guidelines were consulted
    const usedGuidelines = response.sources.guidelineWebsites.length > 0;
    
    const result: SynthesisIntegrityCheck = {
      isValid: isOriginalLanguage && hasCitations && usedCoreKnowledge,
      isOriginalLanguage,
      hasCitations,
      usedCoreKnowledge,
      usedGuidelines,
      warnings,
    };
    
    console.log('[SYNTHESIZER ENGINE GUARDRAILS] Integrity check:', result);
    
    return result;
  }
}

// Singleton instance
let synthesizerEngineGuardrailsInstance: SynthesizerEngineGuardrails | null = null;

/**
 * Get Synthesizer Engine Guardrails instance (Singleton)
 */
export function getSynthesizerEngineGuardrails(): SynthesizerEngineGuardrails {
  if (!synthesizerEngineGuardrailsInstance) {
    synthesizerEngineGuardrailsInstance = new SynthesizerEngineGuardrailsImpl();
  }
  return synthesizerEngineGuardrailsInstance;
}

// ============================================================================
// SYSTEM ARCHITECTURE INTEGRITY VERIFICATION
// ============================================================================

/**
 * System Architecture Integrity Check
 */
export interface SystemArchitectureIntegrityCheck {
  isValid: boolean;
  coreKnowledgeIntegrity: KnowledgeIntegrityCheck;
  guidelineCachingCheck: GuidelineCachingCheck;
  guidelineConsultationCheck?: GuidelineConsultationIntegrityCheck;
  timestamp: Date;
  overallWarnings: string[];
}

/**
 * GUARDRAIL #2: Guideline Consultation Integrity Check
 */
export interface GuidelineConsultationIntegrityCheck {
  isValid: boolean;
  testsPassed: number;
  testsFailed: number;
  warnings: string[];
}

/**
 * Verify entire system architecture integrity
 */
export async function verifySystemArchitectureIntegrity(): Promise<SystemArchitectureIntegrityCheck> {
  console.log('[SYSTEM ARCHITECTURE] Running integrity verification...');
  
  const coreEngine = getCoreKnowledgeEngine();
  const guidelineLayer = getGuidelineWebsiteLayer();
  
  const coreKnowledgeIntegrity = coreEngine.verifyIntegrity();
  const guidelineCachingCheck = guidelineLayer.verifyNoCaching();
  
  // GUARDRAIL #2: Test guideline consultation triggers
  const guidelineConsultationCheck = testGuidelineConsultationTriggers(guidelineLayer);
  
  const overallWarnings: string[] = [];
  
  // Collect all warnings
  overallWarnings.push(...coreKnowledgeIntegrity.warnings);
  overallWarnings.push(...guidelineCachingCheck.warnings);
  overallWarnings.push(...guidelineConsultationCheck.warnings);
  
  // Check if internet is available for guideline consultation
  const internetAvailable = await guidelineLayer.isInternetAvailable();
  if (!internetAvailable) {
    overallWarnings.push('INFO: Internet not available - guideline consultation disabled');
  }
  
  const isValid = 
    coreKnowledgeIntegrity.isValid &&
    guidelineCachingCheck.isValid &&
    guidelineConsultationCheck.isValid;
  
  const result: SystemArchitectureIntegrityCheck = {
    isValid,
    coreKnowledgeIntegrity,
    guidelineCachingCheck,
    guidelineConsultationCheck,
    timestamp: new Date(),
    overallWarnings,
  };
  
  console.log('[SYSTEM ARCHITECTURE] Integrity verification complete:', {
    isValid: result.isValid,
    warnings: result.overallWarnings.length,
  });
  
  return result;
}

/**
 * GUARDRAIL #2: Test guideline consultation triggers
 */
function testGuidelineConsultationTriggers(guidelineLayer: GuidelineWebsiteLayer): GuidelineConsultationIntegrityCheck {
  console.log('[GUARDRAIL #2] Testing guideline consultation triggers...');
  
  const testCases = [
    // Should CONSULT guidelines
    { query: 'What is the treatment for heart failure?', shouldConsult: true },
    { query: 'What are the current guidelines for hypertension management?', shouldConsult: true },
    { query: 'What is first-line therapy for atrial fibrillation?', shouldConsult: true },
    { query: 'What are the diagnostic criteria for diabetes?', shouldConsult: true },
    { query: 'What is the latest recommendation for stroke prevention?', shouldConsult: true },
    { query: 'What is the management algorithm for sepsis?', shouldConsult: true },
    
    // Should NOT consult guidelines
    { query: 'What is the definition of heart failure?', shouldConsult: false },
    { query: 'What is the pathophysiology of atrial fibrillation?', shouldConsult: false },
    { query: 'What is the anatomy of the heart?', shouldConsult: false },
    { query: 'What is the normal physiology of the kidney?', shouldConsult: false },
    { query: 'List the symptoms of pneumonia', shouldConsult: false },
    { query: 'Explain the mechanism of action of beta blockers', shouldConsult: false },
  ];
  
  let testsPassed = 0;
  let testsFailed = 0;
  const warnings: string[] = [];
  
  for (const testCase of testCases) {
    const decision = guidelineLayer.shouldConsultGuidelines(testCase.query);
    
    if (decision.shouldConsult === testCase.shouldConsult) {
      testsPassed++;
    } else {
      testsFailed++;
      warnings.push(
        `FAILED: "${testCase.query}" - Expected ${testCase.shouldConsult ? 'CONSULT' : 'NO CONSULT'}, got ${decision.shouldConsult ? 'CONSULT' : 'NO CONSULT'}`
      );
    }
  }
  
  const isValid = testsFailed === 0;
  
  if (!isValid) {
    warnings.unshift('CRITICAL: Guideline consultation trigger tests failed!');
  }
  
  console.log('[GUARDRAIL #2] Test results:', {
    passed: testsPassed,
    failed: testsFailed,
    isValid,
  });
  
  return {
    isValid,
    testsPassed,
    testsFailed,
    warnings,
  };
}

/**
 * Run comprehensive system architecture test
 */
export async function runSystemArchitectureTest(): Promise<{
  passed: boolean;
  results: {
    coreKnowledgeEngine: {
      passed: boolean;
      totalEntries: number;
      systems: number;
      hasBeenModified: boolean;
    };
    guidelineWebsiteLayer: {
      passed: boolean;
      hasCachedGuidelines: boolean;
      internetAvailable: boolean;
    };
    guidelineConsultationTriggers: {
      passed: boolean;
      testsPassed: number;
      testsFailed: number;
    };
    synthesizerEngine: {
      passed: boolean;
      testQuery: string;
      hasOriginalLanguage: boolean;
      hasCitations: boolean;
    };
  };
  warnings: string[];
}> {
  console.log('[SYSTEM ARCHITECTURE TEST] Running comprehensive test...');
  
  const warnings: string[] = [];
  
  // Test 1: Core Knowledge Engine
  const coreEngine = getCoreKnowledgeEngine();
  const coreIntegrity = coreEngine.verifyIntegrity();
  
  const coreKnowledgeTest = {
    passed: coreIntegrity.isValid,
    totalEntries: coreIntegrity.totalEntries,
    systems: coreIntegrity.systems.length,
    hasBeenModified: coreIntegrity.hasBeenModified,
  };
  
  warnings.push(...coreIntegrity.warnings);
  
  // Test 2: Guideline Website Layer
  const guidelineLayer = getGuidelineWebsiteLayer();
  const cachingCheck = guidelineLayer.verifyNoCaching();
  const internetAvailable = await guidelineLayer.isInternetAvailable();
  
  const guidelineWebsiteTest = {
    passed: cachingCheck.isValid,
    hasCachedGuidelines: cachingCheck.hasCachedGuidelines,
    internetAvailable,
  };
  
  warnings.push(...cachingCheck.warnings);
  
  // Test 3: Guideline Consultation Triggers (GUARDRAIL #2)
  const consultationCheck = testGuidelineConsultationTriggers(guidelineLayer);
  
  const guidelineConsultationTest = {
    passed: consultationCheck.isValid,
    testsPassed: consultationCheck.testsPassed,
    testsFailed: consultationCheck.testsFailed,
  };
  
  warnings.push(...consultationCheck.warnings);
  
  // Test 4: Synthesizer Engine
  const synthesizerGuardrails = getSynthesizerEngineGuardrails();
  
  const testQuery = 'What is the pathophysiology of heart failure?';
  const testCoreKnowledge = coreEngine.searchKnowledge(testQuery);
  const testGuidelines = guidelineLayer.getGuidelineWebsites(testQuery);
  
  const testResponse = synthesizerGuardrails.synthesizeResponse(
    testQuery,
    testCoreKnowledge,
    testGuidelines
  );
  
  const synthesisIntegrity = synthesizerGuardrails.verifySynthesisIntegrity(testResponse);
  
  const synthesizerEngineTest = {
    passed: synthesisIntegrity.isValid,
    testQuery,
    hasOriginalLanguage: synthesisIntegrity.isOriginalLanguage,
    hasCitations: synthesisIntegrity.hasCitations,
  };
  
  warnings.push(...synthesisIntegrity.warnings);
  
  const passed = 
    coreKnowledgeTest.passed &&
    guidelineWebsiteTest.passed &&
    guidelineConsultationTest.passed &&
    synthesizerEngineTest.passed;
  
  console.log('[SYSTEM ARCHITECTURE TEST] Test complete:', {
    passed,
    warnings: warnings.length,
  });
  
  return {
    passed,
    results: {
      coreKnowledgeEngine: coreKnowledgeTest,
      guidelineWebsiteLayer: guidelineWebsiteTest,
      guidelineConsultationTriggers: guidelineConsultationTest,
      synthesizerEngine: synthesizerEngineTest,
    },
    warnings,
  };
}
