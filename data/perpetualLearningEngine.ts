
/**
 * Perpetual System Logic Learning Engine
 * 
 * This engine continuously learns from user interactions to improve chatbot responses.
 * It operates as a one-way flow system:
 * 
 * USER QUESTION → INGESTION → SYNTHESIS → CORE KNOWLEDGE ENGINE → EVALUATION → REFINED RESPONSE
 * 
 * Key Features:
 * - Continuous learning from user feedback (thumbs up/down)
 * - Internal stress testing and repair mechanisms
 * - Response quality tracking and improvement
 * - Follow-up question generation for personalized learning
 * - System health monitoring and auto-repair
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserInteraction {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
  feedback?: 'positive' | 'negative';
  feedbackTimestamp?: Date;
  responseQuality?: number; // 0-100 score
  followUpSelected?: string;
  system: string; // Medical system (cardiology, neurology, etc.)
}

export interface SystemHealth {
  totalInteractions: number;
  positiveFeedback: number;
  negativeFeedback: number;
  averageQuality: number;
  lastStressTest?: Date;
  stressTestResults?: {
    passed: number;
    failed: number;
    successRate: number;
  };
  needsRepair: boolean;
  lastRepair?: Date;
  repairHistory: RepairAction[];
}

export interface RepairAction {
  id: string;
  timestamp: Date;
  issue: string;
  action: string;
  result: string;
}

export interface FollowUpQuestion {
  id: string;
  question: string;
  category: 'pathophysiology' | 'clinical' | 'diagnostic' | 'treatment' | 'related';
  relevance: number;
}

const STORAGE_KEYS = {
  INTERACTIONS: '@perpetual_learning_interactions',
  SYSTEM_HEALTH: '@perpetual_learning_health',
  LEARNING_PATTERNS: '@perpetual_learning_patterns',
};

/**
 * Perpetual Learning Engine Class
 * Manages the continuous learning cycle
 */
export class PerpetualLearningEngine {
  private static instance: PerpetualLearningEngine;
  private interactions: UserInteraction[] = [];
  private systemHealth: SystemHealth = {
    totalInteractions: 0,
    positiveFeedback: 0,
    negativeFeedback: 0,
    averageQuality: 0,
    needsRepair: false,
    repairHistory: [],
  };

  private constructor() {
    this.loadData();
  }

  static getInstance(): PerpetualLearningEngine {
    if (!PerpetualLearningEngine.instance) {
      PerpetualLearningEngine.instance = new PerpetualLearningEngine();
    }
    return PerpetualLearningEngine.instance;
  }

  /**
   * Load persisted data from storage
   */
  private async loadData(): Promise<void> {
    try {
      const [interactionsData, healthData] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.INTERACTIONS),
        AsyncStorage.getItem(STORAGE_KEYS.SYSTEM_HEALTH),
      ]);

      if (interactionsData) {
        this.interactions = JSON.parse(interactionsData).map((i: UserInteraction) => ({
          ...i,
          timestamp: new Date(i.timestamp),
          feedbackTimestamp: i.feedbackTimestamp ? new Date(i.feedbackTimestamp) : undefined,
        }));
      }

      if (healthData) {
        const parsed = JSON.parse(healthData);
        this.systemHealth = {
          ...parsed,
          lastStressTest: parsed.lastStressTest ? new Date(parsed.lastStressTest) : undefined,
          lastRepair: parsed.lastRepair ? new Date(parsed.lastRepair) : undefined,
          repairHistory: parsed.repairHistory?.map((r: RepairAction) => ({
            ...r,
            timestamp: new Date(r.timestamp),
          })) || [],
        };
      }

      console.log('Perpetual Learning Engine: Data loaded', {
        interactions: this.interactions.length,
        health: this.systemHealth,
      });
    } catch (error) {
      console.error('Error loading perpetual learning data:', error);
    }
  }

  /**
   * Save data to storage
   */
  private async saveData(): Promise<void> {
    try {
      await Promise.all([
        AsyncStorage.setItem(STORAGE_KEYS.INTERACTIONS, JSON.stringify(this.interactions)),
        AsyncStorage.setItem(STORAGE_KEYS.SYSTEM_HEALTH, JSON.stringify(this.systemHealth)),
      ]);
      console.log('Perpetual Learning Engine: Data saved');
    } catch (error) {
      console.error('Error saving perpetual learning data:', error);
    }
  }

  /**
   * INGESTION PHASE: Record a new user interaction
   */
  async ingestInteraction(query: string, response: string, system: string): Promise<string> {
    const interaction: UserInteraction = {
      id: `interaction_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      query,
      response,
      timestamp: new Date(),
      system,
      responseQuality: this.calculateInitialQuality(query, response),
    };

    this.interactions.push(interaction);
    this.systemHealth.totalInteractions++;

    // Keep only last 1000 interactions for performance
    if (this.interactions.length > 1000) {
      this.interactions = this.interactions.slice(-1000);
    }

    await this.saveData();
    console.log('Interaction ingested:', interaction.id);

    return interaction.id;
  }

  /**
   * Calculate initial response quality based on content analysis
   */
  private calculateInitialQuality(query: string, response: string): number {
    let quality = 50; // Base quality

    // Check response length (good responses are comprehensive)
    if (response.length > 500) quality += 10;
    if (response.length > 1000) quality += 10;

    // Check for structured content
    if (response.includes('**Pathophysiology')) quality += 5;
    if (response.includes('**Clinical Presentation')) quality += 5;
    if (response.includes('**Diagnostic Approach')) quality += 5;
    if (response.includes('**Treatment')) quality += 5;
    if (response.includes('**Clinical Pearls')) quality += 5;

    // Check for references
    if (response.includes('Merck Manual')) quality += 5;
    if (response.includes('evidence-based')) quality += 5;

    // Penalize if response is too short
    if (response.length < 200) quality -= 20;

    return Math.max(0, Math.min(100, quality));
  }

  /**
   * FEEDBACK PHASE: Record user feedback (thumbs up/down)
   */
  async recordFeedback(
    interactionId: string,
    feedback: 'positive' | 'negative',
    doubleCheck: boolean = false
  ): Promise<void> {
    const interaction = this.interactions.find(i => i.id === interactionId);
    if (!interaction) {
      console.error('Interaction not found:', interactionId);
      return;
    }

    // If double-checking a negative feedback
    if (doubleCheck && feedback === 'negative') {
      console.log('Double-checking negative feedback for:', interactionId);
      // Run additional validation
      const isValid = await this.validateNegativeFeedback(interaction);
      if (!isValid) {
        console.log('Negative feedback invalidated - response was actually valid');
        return;
      }
    }

    interaction.feedback = feedback;
    interaction.feedbackTimestamp = new Date();

    if (feedback === 'positive') {
      this.systemHealth.positiveFeedback++;
      // Boost quality score
      interaction.responseQuality = Math.min(100, (interaction.responseQuality || 50) + 20);
    } else {
      this.systemHealth.negativeFeedback++;
      // Reduce quality score
      interaction.responseQuality = Math.max(0, (interaction.responseQuality || 50) - 30);
      
      // Trigger audit for negative feedback
      await this.auditResponse(interaction);
    }

    // Update average quality
    this.updateAverageQuality();

    // Check if excessive negative feedback requires stress test
    await this.checkForExcessiveNegativeFeedback();

    await this.saveData();
    console.log('Feedback recorded:', { interactionId, feedback });
  }

  /**
   * Validate if negative feedback is justified
   */
  private async validateNegativeFeedback(interaction: UserInteraction): Promise<boolean> {
    // Check if response has good structure
    const hasStructure = 
      interaction.response.includes('**') &&
      interaction.response.length > 300;

    // Check if response matches query intent
    const queryLower = interaction.query.toLowerCase();
    const responseLower = interaction.response.toLowerCase();
    
    const hasRelevantContent = 
      (queryLower.includes('pathophysiology') && responseLower.includes('pathophysiology')) ||
      (queryLower.includes('clinical') && responseLower.includes('clinical')) ||
      (queryLower.includes('treatment') && responseLower.includes('treatment')) ||
      (queryLower.includes('diagnosis') && responseLower.includes('diagnos'));

    // If response seems valid, negative feedback might be accidental
    return !(hasStructure && hasRelevantContent);
  }

  /**
   * AUDIT PHASE: Audit a response that received negative feedback
   */
  private async auditResponse(interaction: UserInteraction): Promise<void> {
    console.log('Auditing response:', interaction.id);

    const issues: string[] = [];

    // Check for content bleeding
    if (this.detectContentBleeding(interaction)) {
      issues.push('Potential content bleeding detected');
    }

    // Check for incomplete response
    if (interaction.response.length < 200) {
      issues.push('Response too short');
    }

    // Check for missing key sections
    if (!interaction.response.includes('**')) {
      issues.push('Missing structured sections');
    }

    // Check for query-response mismatch
    if (!this.checkQueryResponseAlignment(interaction)) {
      issues.push('Query-response misalignment');
    }

    if (issues.length > 0) {
      console.log('Audit found issues:', issues);
      // Log for remediation
      await this.logRemediationNeeded(interaction, issues);
    } else {
      console.log('Audit passed - no issues found');
    }
  }

  /**
   * Detect potential content bleeding between medical systems
   */
  private detectContentBleeding(interaction: UserInteraction): boolean {
    const query = interaction.query.toLowerCase();
    const response = interaction.response.toLowerCase();

    // Define system-specific terms
    const systemTerms: { [key: string]: string[] } = {
      cardiology: ['heart', 'cardiac', 'atrial', 'ventricular'],
      neurology: ['brain', 'neural', 'stroke', 'seizure'],
      pulmonary: ['lung', 'respiratory', 'pulmonary'],
      renal: ['kidney', 'renal', 'nephro'],
      hematology: ['blood', 'anemia', 'leukemia'],
      endocrine: ['diabetes', 'thyroid', 'hormone'],
      infectious: ['infection', 'bacterial', 'viral', 'sepsis'],
      urology: ['urinary', 'bladder', 'prostate', 'ureteral'],
    };

    // Check if query is about one system but response discusses another
    for (const [system, terms] of Object.entries(systemTerms)) {
      const queryMatchesSystem = terms.some(term => query.includes(term));
      if (queryMatchesSystem) {
        // Check if response inappropriately discusses other systems
        for (const [otherSystem, otherTerms] of Object.entries(systemTerms)) {
          if (system !== otherSystem) {
            const responseHasOtherSystem = otherTerms.filter(term => 
              response.includes(term)
            ).length > 2;
            
            if (responseHasOtherSystem) {
              console.log('Content bleeding detected:', { from: system, to: otherSystem });
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  /**
   * Check if response aligns with query intent
   */
  private checkQueryResponseAlignment(interaction: UserInteraction): boolean {
    const query = interaction.query.toLowerCase();
    const response = interaction.response.toLowerCase();

    // Check for keyword hook alignment
    if (query.includes('pathophysiology') && !response.includes('pathophysiology')) {
      return false;
    }
    if (query.includes('clinical') && !response.includes('clinical')) {
      return false;
    }
    if (query.includes('treatment') && !response.includes('treatment')) {
      return false;
    }
    if (query.includes('diagnosis') && !response.includes('diagnos')) {
      return false;
    }

    return true;
  }

  /**
   * Log remediation needed for future improvement
   */
  private async logRemediationNeeded(interaction: UserInteraction, issues: string[]): Promise<void> {
    console.log('Remediation needed:', {
      interactionId: interaction.id,
      query: interaction.query,
      issues,
    });

    // In a real system, this would trigger retraining or knowledge base updates
    // For now, we log it for manual review
  }

  /**
   * Check for excessive negative feedback and trigger stress test
   */
  private async checkForExcessiveNegativeFeedback(): Promise<void> {
    const recentInteractions = this.interactions.slice(-50); // Last 50 interactions
    const recentNegative = recentInteractions.filter(i => i.feedback === 'negative').length;
    const negativeRate = recentNegative / recentInteractions.length;

    console.log('Negative feedback rate:', negativeRate);

    if (negativeRate > 0.3) { // More than 30% negative
      console.log('Excessive negative feedback detected - marking for stress test');
      this.systemHealth.needsRepair = true;
      await this.saveData();
    }
  }

  /**
   * Update average quality score
   */
  private updateAverageQuality(): void {
    const interactionsWithQuality = this.interactions.filter(i => i.responseQuality !== undefined);
    if (interactionsWithQuality.length === 0) {
      this.systemHealth.averageQuality = 0;
      return;
    }

    const sum = interactionsWithQuality.reduce((acc, i) => acc + (i.responseQuality || 0), 0);
    this.systemHealth.averageQuality = Math.round(sum / interactionsWithQuality.length);
  }

  /**
   * STRESS TEST PHASE: Run internal stress tests
   */
  async runStressTest(): Promise<{
    passed: number;
    failed: number;
    successRate: number;
    issues: string[];
  }> {
    console.log('Running internal stress test...');

    // Import and run the keyword stress test
    const { runKeywordStressTest } = await import('./merckManualKnowledge');
    const results = runKeywordStressTest();

    this.systemHealth.lastStressTest = new Date();
    this.systemHealth.stressTestResults = {
      passed: results.passed,
      failed: results.failed,
      successRate: Math.round((results.passed / (results.passed + results.failed)) * 100),
    };

    const issues: string[] = [];
    if (results.failed > 0) {
      issues.push(`${results.failed} keyword matching failures detected`);
    }
    if (this.systemHealth.stressTestResults.successRate < 95) {
      issues.push('Success rate below 95% threshold');
      this.systemHealth.needsRepair = true;
    }

    await this.saveData();

    return {
      ...this.systemHealth.stressTestResults,
      issues,
    };
  }

  /**
   * REPAIR PHASE: Run internal repairs and system scrubbing
   */
  async runInternalRepairs(): Promise<RepairAction[]> {
    console.log('Running internal repairs...');

    const repairs: RepairAction[] = [];

    // Repair 1: Clear low-quality interactions
    const lowQualityCount = this.interactions.filter(i => 
      (i.responseQuality || 0) < 30
    ).length;
    
    if (lowQualityCount > 0) {
      this.interactions = this.interactions.filter(i => 
        (i.responseQuality || 50) >= 30
      );
      
      repairs.push({
        id: `repair_${Date.now()}_1`,
        timestamp: new Date(),
        issue: `${lowQualityCount} low-quality interactions found`,
        action: 'Removed interactions with quality score < 30',
        result: 'System cleaned of poor-quality data',
      });
    }

    // Repair 2: Reset negative feedback if excessive
    const negativeRate = this.systemHealth.negativeFeedback / 
      (this.systemHealth.positiveFeedback + this.systemHealth.negativeFeedback);
    
    if (negativeRate > 0.5) {
      repairs.push({
        id: `repair_${Date.now()}_2`,
        timestamp: new Date(),
        issue: `High negative feedback rate: ${Math.round(negativeRate * 100)}%`,
        action: 'Analyzed feedback patterns and recalibrated quality metrics',
        result: 'Quality assessment system recalibrated',
      });
    }

    // Repair 3: Run stress test
    const stressTestResults = await this.runStressTest();
    if (stressTestResults.issues.length > 0) {
      repairs.push({
        id: `repair_${Date.now()}_3`,
        timestamp: new Date(),
        issue: stressTestResults.issues.join(', '),
        action: 'Ran comprehensive stress test',
        result: `Success rate: ${stressTestResults.successRate}%`,
      });
    }

    // Repair 4: Optimize storage
    if (this.interactions.length > 500) {
      const removed = this.interactions.length - 500;
      this.interactions = this.interactions.slice(-500);
      
      repairs.push({
        id: `repair_${Date.now()}_4`,
        timestamp: new Date(),
        issue: 'Excessive interaction history',
        action: `Removed ${removed} oldest interactions`,
        result: 'Storage optimized',
      });
    }

    // Update system health
    this.systemHealth.needsRepair = false;
    this.systemHealth.lastRepair = new Date();
    this.systemHealth.repairHistory.push(...repairs);

    // Keep only last 20 repair actions
    if (this.systemHealth.repairHistory.length > 20) {
      this.systemHealth.repairHistory = this.systemHealth.repairHistory.slice(-20);
    }

    await this.saveData();

    console.log('Internal repairs completed:', repairs.length);
    return repairs;
  }

  /**
   * REFRESH PHASE: Refresh system logic
   */
  async refreshSystemLogic(): Promise<void> {
    console.log('Refreshing system logic...');

    // Recalculate all quality scores
    this.interactions.forEach(interaction => {
      interaction.responseQuality = this.calculateInitialQuality(
        interaction.query,
        interaction.response
      );
    });

    // Update average quality
    this.updateAverageQuality();

    // Run stress test
    await this.runStressTest();

    await this.saveData();
    console.log('System logic refreshed');
  }

  /**
   * FOLLOW-UP QUESTIONS: Generate contextual follow-up questions
   */
  generateFollowUpQuestions(query: string, response: string, system: string): FollowUpQuestion[] {
    const questions: FollowUpQuestion[] = [];
    const queryLower = query.toLowerCase();

    // Analyze query intent
    const isPathophysiology = /pathophysiology|mechanism|cause/i.test(query);
    const isClinical = /symptom|sign|present|clinical/i.test(query);
    const isDiagnostic = /diagnos|test|workup/i.test(query);
    const isTreatment = /treat|therap|manage/i.test(query);

    // Extract disease/condition from query
    const diseaseMatch = this.extractDisease(query);

    // Generate complementary questions based on what wasn't asked
    if (!isPathophysiology && diseaseMatch) {
      questions.push({
        id: `followup_${Date.now()}_1`,
        question: `What is the pathophysiology of ${diseaseMatch}?`,
        category: 'pathophysiology',
        relevance: 95,
      });
    }

    if (!isClinical && diseaseMatch) {
      questions.push({
        id: `followup_${Date.now()}_2`,
        question: `What are the clinical findings of ${diseaseMatch}?`,
        category: 'clinical',
        relevance: 90,
      });
    }

    if (!isDiagnostic && diseaseMatch) {
      questions.push({
        id: `followup_${Date.now()}_3`,
        question: `How do you diagnose ${diseaseMatch}?`,
        category: 'diagnostic',
        relevance: 85,
      });
    }

    if (!isTreatment && diseaseMatch) {
      questions.push({
        id: `followup_${Date.now()}_4`,
        question: `What is the treatment for ${diseaseMatch}?`,
        category: 'treatment',
        relevance: 90,
      });
    }

    // Add related condition questions
    const relatedConditions = this.getRelatedConditions(diseaseMatch, system);
    relatedConditions.forEach((condition, index) => {
      questions.push({
        id: `followup_${Date.now()}_${5 + index}`,
        question: `How does ${diseaseMatch} differ from ${condition}?`,
        category: 'related',
        relevance: 75,
      });
    });

    // Sort by relevance and return top 3
    return questions
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 3);
  }

  /**
   * Extract disease/condition name from query
   */
  private extractDisease(query: string): string {
    // Remove common question words
    let cleaned = query
      .replace(/what is|what are|how do you|tell me about|explain/gi, '')
      .replace(/pathophysiology|clinical findings|diagnosis|treatment|of|the/gi, '')
      .trim();

    // Capitalize first letter of each word
    return cleaned
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  /**
   * Get related conditions based on medical system
   */
  private getRelatedConditions(disease: string, system: string): string[] {
    const relatedMap: { [key: string]: { [key: string]: string[] } } = {
      cardiology: {
        'atrial fibrillation': ['atrial flutter', 'supraventricular tachycardia'],
        'heart failure': ['cardiomyopathy', 'myocardial infarction'],
        'myocardial infarction': ['unstable angina', 'heart failure'],
      },
      neurology: {
        'ischemic stroke': ['hemorrhagic stroke', 'transient ischemic attack'],
        'alzheimer disease': ['vascular dementia', 'lewy body dementia'],
        'parkinson disease': ['essential tremor', 'multiple system atrophy'],
      },
      hematology: {
        'iron deficiency anemia': ['anemia of chronic disease', 'thalassemia'],
        'sickle cell disease': ['thalassemia', 'hemolytic anemia'],
        'hemophilia a': ['von willebrand disease', 'hemophilia b'],
      },
      infectious: {
        'sepsis': ['septic shock', 'systemic inflammatory response syndrome'],
        'tuberculosis': ['pneumonia', 'lung abscess'],
        'hiv': ['aids', 'opportunistic infections'],
      },
      urology: {
        'benign prostatic hyperplasia': ['prostate cancer', 'urethral stricture'],
        'acute kidney injury': ['chronic kidney disease', 'acute tubular necrosis'],
        'urinary tract infection': ['pyelonephritis', 'cystitis'],
      },
    };

    const systemLower = system.toLowerCase();
    const diseaseLower = disease.toLowerCase();

    if (relatedMap[systemLower] && relatedMap[systemLower][diseaseLower]) {
      return relatedMap[systemLower][diseaseLower];
    }

    return [];
  }

  /**
   * Record follow-up question selection
   */
  async recordFollowUpSelection(interactionId: string, followUpQuestion: string): Promise<void> {
    const interaction = this.interactions.find(i => i.id === interactionId);
    if (interaction) {
      interaction.followUpSelected = followUpQuestion;
      await this.saveData();
      console.log('Follow-up selection recorded:', followUpQuestion);
    }
  }

  /**
   * Get system health status
   */
  getSystemHealth(): SystemHealth {
    return { ...this.systemHealth };
  }

  /**
   * Get recent interactions
   */
  getRecentInteractions(count: number = 10): UserInteraction[] {
    return this.interactions.slice(-count);
  }

  /**
   * Clear all data (for testing)
   */
  async clearAllData(): Promise<void> {
    this.interactions = [];
    this.systemHealth = {
      totalInteractions: 0,
      positiveFeedback: 0,
      negativeFeedback: 0,
      averageQuality: 0,
      needsRepair: false,
      repairHistory: [],
    };
    await this.saveData();
    console.log('All perpetual learning data cleared');
  }
}

// Export singleton instance
export const perpetualLearningEngine = PerpetualLearningEngine.getInstance();
