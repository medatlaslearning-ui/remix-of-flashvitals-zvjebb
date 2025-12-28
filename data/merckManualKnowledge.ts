
/**
 * Merck Manual Professional Knowledge Base
 * 
 * PHASE 7 COMPLETE: Comprehensive Medical Knowledge Base with Enhanced Keyword Hooks
 * 
 * This file contains comprehensive medical knowledge extracted from the Merck Manual Professional.
 * 
 * COMPLETE SYSTEM COVERAGE:
 * - Cardiology: Arrhythmias, heart failure, ischemic heart disease, valvular disorders, cardiomyopathies
 * - Pulmonary: Airway disorders, infections, vascular disorders, interstitial diseases, pleural disorders
 * - Gastroenterology: Esophageal, peptic ulcer, IBD, liver, pancreatic disorders
 * - Endocrine: Diabetes, thyroid, adrenal, pituitary, calcium/bone disorders
 * - Hematology: Anemias, bleeding disorders, thrombotic disorders, malignancies
 * - Neurology: Stroke, seizures, movement disorders, dementia, MS, headaches, neuropathy
 * - Renal: AKI, CKD, glomerular diseases, electrolyte disorders, tubular disorders
 * - Infectious Disease: Bacterial, viral, fungal, parasitic infections, STIs
 * 
 * PHASE 7 ENHANCEMENTS:
 * - Complete Infectious Disease system with comprehensive coverage
 * - Enhanced keyword specificity to prevent content bleeding
 * - Keyword hooks for focused responses (pathophysiology, clinical, diagnostic, treatment)
 * - Disease-specific term matching ensures precision
 * - Doctor-patient interaction model for targeted answers
 * - Topic-specific flashcard filtering
 * 
 * Each entry includes:
 * - Topic name and keywords for matching
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 */

// Import knowledge from separate files
import { cardiologyKnowledge } from './cardiologyKnowledge';
import { pulmonaryKnowledge } from './pulmonaryKnowledge';
import { renalKnowledge } from './renalKnowledge';
import { gastroenterologyKnowledge } from './gastroenterologyKnowledge';
import { endocrineSystemKnowledge } from './endocrineSystemKnowledge';
import { hematologyKnowledge } from './hematologyKnowledge';
import { neurologyKnowledge } from './neurologyKnowledge';
import { infectiousDiseaseKnowledge } from './infectiousDiseaseKnowledge';

export interface MerckManualEntry {
  topic: string;
  keywords: string[];
  system: string;
  pathophysiology: string;
  clinicalPresentation: string;
  diagnosticApproach: string;
  treatment: string;
  clinicalPearls: string[];
  merckUrl: string;
}

export const merckManualKnowledge: MerckManualEntry[] = [
  // ============================================================================
  // COMPREHENSIVE CARDIOLOGY SECTION - IMPORTED FROM SEPARATE FILE
  // ============================================================================
  ...cardiologyKnowledge,

  // ============================================================================
  // COMPREHENSIVE PULMONARY SECTION - IMPORTED FROM SEPARATE FILE
  // ============================================================================
  ...pulmonaryKnowledge,

  // ============================================================================
  // COMPREHENSIVE RENAL SECTION - IMPORTED FROM SEPARATE FILE
  // ============================================================================
  ...renalKnowledge,

  // ============================================================================
  // COMPREHENSIVE GASTROENTEROLOGY SECTION - IMPORTED FROM SEPARATE FILE
  // ============================================================================
  ...gastroenterologyKnowledge,

  // ============================================================================
  // COMPREHENSIVE ENDOCRINE SYSTEM - IMPORTED FROM SEPARATE FILE (PHASE 4)
  // ============================================================================
  ...endocrineSystemKnowledge,

  // ============================================================================
  // COMPREHENSIVE HEMATOLOGY SYSTEM - IMPORTED FROM SEPARATE FILE (PHASE 5)
  // ============================================================================
  ...hematologyKnowledge,

  // ============================================================================
  // COMPREHENSIVE NEUROLOGY SYSTEM - IMPORTED FROM SEPARATE FILE (PHASE 6)
  // ============================================================================
  ...neurologyKnowledge,

  // ============================================================================
  // COMPREHENSIVE INFECTIOUS DISEASE SYSTEM - IMPORTED FROM SEPARATE FILE (PHASE 7)
  // ============================================================================
  ...infectiousDiseaseKnowledge,
];

/**
 * Search function to find relevant Merck Manual entries based on query
 * 
 * PHASE 7 ENHANCEMENTS:
 * - Keyword hooks for specific phrases (pathophysiology, clinical presentation, diagnosis, treatment)
 * - Enhanced content bleeding prevention across all phases
 * - Improved precision for disease-specific queries
 * - Maintains comprehensive textbook-style responses from Phase 3
 * - Infectious Disease system integration with same integrity as previous phases
 * 
 * PHASE 3 IMPROVEMENTS:
 * - Loosened keyword matching to allow broader, contextually relevant results
 * - Reduced minimum score threshold (500, down from 2500) for more comprehensive coverage
 * - Enhanced content matching in pathophysiology, clinical presentation, and treatment sections
 * - Maintained precision for exact matches while allowing semantic relevance
 * - Supports comprehensive textbook-style responses with detailed information
 * - Removed overly strict penalties that limited relevant results
 * - Increased result count from 3 to 5 for more thorough responses
 * - Lowered multi-word match requirement from 80% to 60% for better flexibility
 */
export function searchMerckManualKnowledge(query: string): MerckManualEntry[] {
  // PHASE 5: Detect query intent with keyword hooks
  const lowerQuery = query.toLowerCase().trim();
  
  // Keyword hooks for specific aspects of disease
  const isPathophysiologyQuery = /pathophysiology|mechanism|cause|etiology|why|how does|disease process/i.test(query);
  const isClinicalQuery = /symptom|sign|present|clinical feature|manifestation|appear|clinical finding/i.test(query);
  const isDiagnosticQuery = /diagnos|test|workup|evaluation|assess|detect|diagnostic approach/i.test(query);
  const isTreatmentQuery = /treat|therap|manage|medication|drug|intervention/i.test(query);
  
  console.log('Query intent detection:', {
    query,
    isPathophysiologyQuery,
    isClinicalQuery,
    isDiagnosticQuery,
    isTreatmentQuery
  });
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);
  
  // PHASE 7: Enhanced system detection for better filtering
  const systemHints = {
    'infectious disease': ['sepsis', 'infection', 'bacterial', 'viral', 'fungal', 'parasite', 
                          'tuberculosis', 'tb', 'hiv', 'aids', 'hepatitis', 'influenza', 'flu',
                          'covid', 'coronavirus', 'candida', 'aspergillus', 'cryptococcus',
                          'malaria', 'toxoplasma', 'syphilis', 'gonorrhea', 'chlamydia',
                          'endocarditis', 'meningitis', 'encephalitis', 'lyme', 'clostridium'],
    neurology: ['stroke', 'seizure', 'epilep', 'parkinson', 'alzheimer', 'dementia', 'tremor', 
                'sclerosis', 'migraine', 'headache', 'neuropathy', 'myasthenia', 'meningitis', 
                'encephalitis', 'bell', 'trigeminal', 'als', 'hydrocephalus', 'vertigo', 
                'guillain', 'facial palsy', 'brain', 'cerebral', 'neurologic'],
    cardiology: ['heart', 'cardiac', 'atrial', 'ventricular', 'myocardial', 'coronary', 
                 'valve', 'arrhythmia', 'fibrillation', 'flutter', 'tachycardia'],
    pulmonary: ['lung', 'pulmonary', 'respiratory', 'pneumo', 'asthma', 'copd', 'bronch'],
    endocrine: ['diabetes', 'thyroid', 'adrenal', 'pituitary', 'hormone', 'insulin', 'glucose'],
    hematology: ['anemia', 'blood', 'leukemia', 'lymphoma', 'platelet', 'coagulation', 
                 'hemophilia', 'sickle', 'thalassemia'],
    renal: ['kidney', 'renal', 'nephro', 'urine', 'creatinine'],
    gastroenterology: ['gastro', 'intestin', 'bowel', 'liver', 'pancrea', 'esophag']
  };
  
  // Detect likely system from query
  let detectedSystem: string | null = null;
  for (const [system, hints] of Object.entries(systemHints)) {
    if (hints.some(hint => lowerQuery.includes(hint))) {
      detectedSystem = system;
      console.log('Detected system:', system);
      break;
    }
  }
  
  // Helper function to escape regex special characters
  const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // PHASE 5: Enhanced keyword checking to prevent content bleeding
  // Extract disease-specific terms to ensure precision
  const diseaseSpecificTerms = new Set<string>();
  
  // Common disease modifiers that should be matched precisely
  const diseaseModifiers = [
    'acute', 'chronic', 'primary', 'secondary', 'type 1', 'type 2', 'type i', 'type ii',
    'iron', 'vitamin', 'b12', 'folate', 'renal', 'tubular', 'metabolic', 'respiratory',
    'diabetic', 'immune', 'autoimmune', 'infectious', 'bacterial', 'viral',
    'sickle', 'sickle cell', 'hemoglobin s', 'sickling', 'heart', 'cardiac', 'ventricular',
    'thalassemia', 'hemophilia', 'von willebrand', 'thrombocytopenia', 'leukemia', 'lymphoma',
    'myeloma', 'anemia', 'deficiency', 'polycythemia', 'thrombocythemia',
    // PHASE 6: Neurology-specific terms
    'ischemic', 'hemorrhagic', 'stroke', 'cerebral', 'brain', 'neurologic', 'neural',
    'seizure', 'epileptic', 'convulsive', 'parkinson', 'alzheimer', 'dementia',
    'tremor', 'movement', 'huntington', 'multiple sclerosis', 'demyelinating',
    'migraine', 'cluster', 'headache', 'neuropathy', 'peripheral', 'guillain',
    'myasthenia', 'neuromuscular', 'meningitis', 'encephalitis', 'bell',
    'trigeminal', 'facial', 'als', 'motor neuron', 'hydrocephalus', 'restless',
    'carpal tunnel', 'vertigo', 'vestibular', 'subarachnoid', 'transient',
    // PHASE 7: Infectious Disease-specific terms
    'sepsis', 'septic', 'infection', 'bacterial', 'viral', 'fungal', 'parasitic',
    'tuberculosis', 'tb', 'mycobacterium', 'hiv', 'aids', 'hepatitis', 'influenza',
    'covid', 'coronavirus', 'sars', 'candida', 'aspergillus', 'cryptococcus',
    'malaria', 'plasmodium', 'toxoplasma', 'syphilis', 'gonorrhea', 'chlamydia',
    'endocarditis', 'meningitis', 'encephalitis', 'lyme', 'borrelia', 'clostridium',
    'herpes', 'hsv', 'sexually transmitted', 'sti'
  ];
  
  diseaseModifiers.forEach(modifier => {
    if (lowerQuery.includes(modifier)) {
      diseaseSpecificTerms.add(modifier);
    }
  });
  
  console.log('Disease-specific terms detected:', Array.from(diseaseSpecificTerms));
  
  const scoredEntries = merckManualKnowledge.map(entry => {
    let score = 0;
    let hasExactMatch = false;
    let hasStrongMatch = false;
    let hasSpecificTermMatch = true; // Assume match unless proven otherwise
    
    // PHASE 5: Check for disease-specific term matches to prevent content bleeding
    if (diseaseSpecificTerms.size > 0) {
      const entryText = `${entry.topic} ${entry.keywords.join(' ')}`.toLowerCase();
      
      // Check if ALL disease-specific terms are present in the entry
      const matchedTerms = Array.from(diseaseSpecificTerms).filter(term => 
        entryText.includes(term)
      );
      
      hasSpecificTermMatch = matchedTerms.length === diseaseSpecificTerms.size;
      
      // If specific terms don't match, heavily penalize
      if (!hasSpecificTermMatch) {
        score -= 100000; // Increased penalty to ensure mismatches are excluded
      } else {
        // Bonus for matching all specific terms
        score += 10000 * matchedTerms.length;
      }
    }
    
    // PRIORITY 1: EXACT TOPIC MATCH - Highest priority
    const topicLower = entry.topic.toLowerCase();
    if (topicLower === lowerQuery) {
      score += 100000; // Massive boost for perfect topic match
      hasExactMatch = true;
    }
    
    // PRIORITY 2: EXACT KEYWORD MATCH - Very high priority
    entry.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      
      // Perfect exact match (entire query matches entire keyword)
      if (keywordLower === lowerQuery) {
        score += 50000;
        hasExactMatch = true;
      }
      // Exact phrase match with word boundaries
      else if (new RegExp(`\\b${escapeRegex(lowerQuery)}\\b`).test(keywordLower)) {
        score += 25000;
        hasStrongMatch = true;
      }
      // PHASE 3: Partial keyword match (loosened for broader results)
      else if (keywordLower.includes(lowerQuery)) {
        score += 5000;
        hasStrongMatch = true;
      }
    });
    
    // PRIORITY 3: MULTI-WORD MATCHING (PHASE 3: Loosened from 80% to 60%)
    if (queryWords.length > 1 && !hasExactMatch) {
      let matchedWords = 0;
      let totalSignificantWords = queryWords.length;
      
      queryWords.forEach(word => {
        let wordMatched = false;
        
        // Check topic for word match
        if (new RegExp(`\\b${escapeRegex(word)}\\b`).test(topicLower)) {
          wordMatched = true;
        }
        
        // Check keywords for word match
        if (!wordMatched) {
          entry.keywords.forEach(keyword => {
            const keywordLower = keyword.toLowerCase();
            if (new RegExp(`\\b${escapeRegex(word)}\\b`).test(keywordLower)) {
              wordMatched = true;
            }
          });
        }
        
        // PHASE 3: Also check content sections for semantic relevance
        if (!wordMatched) {
          const contentSections = [
            entry.pathophysiology.toLowerCase(),
            entry.clinicalPresentation.toLowerCase(),
            entry.diagnosticApproach.toLowerCase(),
            entry.treatment.toLowerCase()
          ];
          
          contentSections.forEach(section => {
            if (new RegExp(`\\b${escapeRegex(word)}\\b`).test(section)) {
              wordMatched = true;
            }
          });
        }
        
        if (wordMatched) {
          matchedWords++;
        }
      });
      
      // Calculate match percentage
      const matchPercentage = matchedWords / totalSignificantWords;
      
      // PHASE 3: Lowered threshold from 80% to 60% for broader results
      if (matchPercentage >= 0.6) {
        score += 8000 * matchPercentage * matchedWords;
        hasStrongMatch = true;
      } else if (matchPercentage >= 0.4) {
        // Partial match with moderate score
        score += 2000 * matchPercentage;
      }
    }
    
    // PRIORITY 4: SINGLE WORD MATCHING
    if (queryWords.length === 1 && !hasExactMatch && !hasStrongMatch) {
      const singleWord = queryWords[0];
      
      // Check for word boundary match in topic
      if (new RegExp(`\\b${escapeRegex(singleWord)}\\b`).test(topicLower)) {
        score += 5000;
        hasStrongMatch = true;
      }
      
      // Check for word boundary match in keywords
      entry.keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase();
        if (new RegExp(`\\b${escapeRegex(singleWord)}\\b`).test(keywordLower)) {
          score += 3000;
          hasStrongMatch = true;
        }
      });
      
      // PHASE 3: Check content sections for single word matches
      if (!hasStrongMatch) {
        const contentSections = [
          entry.pathophysiology.toLowerCase(),
          entry.clinicalPresentation.toLowerCase(),
          entry.diagnosticApproach.toLowerCase(),
          entry.treatment.toLowerCase()
        ];
        
        contentSections.forEach(section => {
          if (new RegExp(`\\b${escapeRegex(singleWord)}\\b`).test(section)) {
            score += 1000; // Moderate score for content matches
          }
        });
      }
      
      // PHASE 3: Allow prefix matching for longer queries (5+ characters, lowered from 6)
      if (!hasStrongMatch && singleWord.length >= 5) {
        entry.keywords.forEach(keyword => {
          const keywordLower = keyword.toLowerCase();
          if (keywordLower.startsWith(singleWord)) {
            score += 500; // Increased from 100 for better prefix matching
          }
        });
      }
    }
    
    // PHASE 3: REMOVED PENALTY SYSTEM - Allow related topics to appear
    // This enables the chatbot to provide comprehensive information about related conditions
    
    // SYSTEM MATCH - Low priority, but useful for system-wide queries
    if (entry.system.toLowerCase().includes(lowerQuery)) {
      score += 100; // Increased from 10 for better system matching
    }
    
    // PHASE 7: System-based filtering to prevent cross-system bleeding
    if (detectedSystem) {
      const entrySystemLower = entry.system.toLowerCase();
      if (entrySystemLower === detectedSystem) {
        // Boost entries from detected system
        score += 5000;
      } else {
        // Penalize entries from other systems unless strong keyword match
        if (!hasExactMatch && !hasStrongMatch) {
          score -= 5000;
        }
      }
    }
    
    return { entry, score };
  });
  
  // PHASE 3: LOOSENED FILTERING - Lower threshold for broader, more comprehensive results
  // This allows the chatbot to provide textbook-style comprehensive information
  const MIN_SCORE_THRESHOLD = 500; // Reduced from 2500 to allow more relevant results
  
  const filteredEntries = scoredEntries
    .filter(item => item.score >= MIN_SCORE_THRESHOLD)
    .sort((a, b) => b.score - a.score);
  
  // Log top matches for debugging
  if (filteredEntries.length > 0) {
    console.log(`Search for "${query}":`, filteredEntries.slice(0, 5).map(item => ({
      topic: item.entry.topic,
      score: item.score,
      system: item.entry.system
    })));
  } else {
    console.log(`No matches found for "${query}"`);
    console.log('Disease-specific terms:', Array.from(diseaseSpecificTerms));
  }
  
  // PHASE 3: Return top 5 matches (increased from 3) for more comprehensive responses
  return filteredEntries
    .slice(0, 5)
    .map(item => item.entry);
}

/**
 * Get Merck Manual entry by exact topic name
 */
export function getMerckManualByTopic(topic: string): MerckManualEntry | undefined {
  return merckManualKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all Merck Manual entries for a specific system
 */
export function getMerckManualBySystem(system: string): MerckManualEntry[] {
  return merckManualKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}

/**
 * STRESS TEST FUNCTION
 * Tests keyword search precision to prevent content bleeding
 * 
 * This function runs automated tests on similar disease names to ensure
 * the search algorithm correctly differentiates between them.
 */
export function runKeywordStressTest(): {
  passed: number;
  failed: number;
  results: {
    query: string;
    expectedTopic: string;
    actualTopic: string | null;
    passed: boolean;
    score?: number;
  }[];
} {
  const testCases = [
    // RENAL/NEPHROLOGY STRESS TESTS
    { query: 'acute kidney injury', expectedTopic: 'Acute Kidney Injury' },
    { query: 'aki', expectedTopic: 'Acute Kidney Injury' },
    { query: 'chronic kidney disease', expectedTopic: 'Chronic Kidney Disease' },
    { query: 'ckd', expectedTopic: 'Chronic Kidney Disease' },
    { query: 'hyponatremia', expectedTopic: 'Hyponatremia' },
    { query: 'hyperkalemia', expectedTopic: 'Hyperkalemia' },
    { query: 'urinary tract infection', expectedTopic: 'Urinary Tract Infection' },
    { query: 'uti', expectedTopic: 'Urinary Tract Infection' },
    
    // CARDIOLOGY STRESS TESTS
    { query: 'atrial fibrillation', expectedTopic: 'Atrial Fibrillation' },
    { query: 'afib', expectedTopic: 'Atrial Fibrillation' },
    { query: 'heart failure', expectedTopic: 'Heart Failure' },
    { query: 'myocardial infarction', expectedTopic: 'Myocardial Infarction' },
    { query: 'stemi', expectedTopic: 'Myocardial Infarction' },
    { query: 'aortic stenosis', expectedTopic: 'Aortic Stenosis' },
    { query: 'hypertension', expectedTopic: 'Hypertension' },
    { query: 'endocarditis', expectedTopic: 'Infective Endocarditis' },
    
    // PULMONARY STRESS TESTS
    { query: 'asthma', expectedTopic: 'Asthma' },
    { query: 'copd', expectedTopic: 'Chronic Obstructive Pulmonary Disease' },
    { query: 'pneumonia', expectedTopic: 'Community-Acquired Pneumonia' },
    { query: 'pulmonary embolism', expectedTopic: 'Pulmonary Embolism' },
    { query: 'pe', expectedTopic: 'Pulmonary Embolism' },
    { query: 'ards', expectedTopic: 'Acute Respiratory Distress Syndrome' },
    
    // ENDOCRINE STRESS TESTS (PHASE 4)
    { query: 'type 1 diabetes', expectedTopic: 'Type 1 Diabetes Mellitus' },
    { query: 'type 2 diabetes', expectedTopic: 'Type 2 Diabetes Mellitus' },
    { query: 't1dm', expectedTopic: 'Type 1 Diabetes Mellitus' },
    { query: 't2dm', expectedTopic: 'Type 2 Diabetes Mellitus' },
    { query: 'diabetic ketoacidosis', expectedTopic: 'Diabetic Ketoacidosis' },
    { query: 'dka', expectedTopic: 'Diabetic Ketoacidosis' },
    { query: 'hyperosmolar hyperglycemic state', expectedTopic: 'Hyperosmolar Hyperglycemic State' },
    { query: 'hhs', expectedTopic: 'Hyperosmolar Hyperglycemic State' },
    { query: 'hypoglycemia', expectedTopic: 'Hypoglycemia' },
    { query: 'hypothyroidism', expectedTopic: 'Hypothyroidism' },
    { query: 'hyperthyroidism', expectedTopic: 'Hyperthyroidism' },
    { query: 'graves disease', expectedTopic: 'Hyperthyroidism' },
    { query: 'cushing syndrome', expectedTopic: 'Cushing Syndrome' },
    { query: 'addison disease', expectedTopic: 'Addison Disease' },
    
    // HEMATOLOGY STRESS TESTS (PHASE 5)
    { query: 'iron deficiency anemia', expectedTopic: 'Iron Deficiency Anemia' },
    { query: 'vitamin b12 deficiency', expectedTopic: 'Vitamin B12 Deficiency' },
    { query: 'folate deficiency', expectedTopic: 'Folate Deficiency' },
    { query: 'anemia of chronic disease', expectedTopic: 'Anemia of Chronic Disease' },
    { query: 'sickle cell disease', expectedTopic: 'Sickle Cell Disease' },
    { query: 'thalassemia', expectedTopic: 'Thalassemia' },
    { query: 'g6pd deficiency', expectedTopic: 'Glucose-6-Phosphate Dehydrogenase Deficiency' },
    { query: 'immune thrombocytopenia', expectedTopic: 'Immune Thrombocytopenia' },
    { query: 'itp', expectedTopic: 'Immune Thrombocytopenia' },
    { query: 'hemophilia a', expectedTopic: 'Hemophilia A' },
    { query: 'von willebrand disease', expectedTopic: 'Von Willebrand Disease' },
    { query: 'disseminated intravascular coagulation', expectedTopic: 'Disseminated Intravascular Coagulation' },
    { query: 'dic', expectedTopic: 'Disseminated Intravascular Coagulation' },
    { query: 'deep vein thrombosis', expectedTopic: 'Deep Vein Thrombosis' },
    { query: 'dvt', expectedTopic: 'Deep Vein Thrombosis' },
    { query: 'thrombotic thrombocytopenic purpura', expectedTopic: 'Thrombotic Thrombocytopenic Purpura' },
    { query: 'ttp', expectedTopic: 'Thrombotic Thrombocytopenic Purpura' },
    { query: 'acute myeloid leukemia', expectedTopic: 'Acute Myeloid Leukemia' },
    { query: 'aml', expectedTopic: 'Acute Myeloid Leukemia' },
    { query: 'chronic myeloid leukemia', expectedTopic: 'Chronic Myeloid Leukemia' },
    { query: 'cml', expectedTopic: 'Chronic Myeloid Leukemia' },
    { query: 'multiple myeloma', expectedTopic: 'Multiple Myeloma' },
    { query: 'hodgkin lymphoma', expectedTopic: 'Hodgkin Lymphoma' },
    { query: 'non hodgkin lymphoma', expectedTopic: 'Non-Hodgkin Lymphoma' },
    { query: 'polycythemia vera', expectedTopic: 'Polycythemia Vera' },
    { query: 'essential thrombocythemia', expectedTopic: 'Essential Thrombocythemia' },
    { query: 'acute lymphoblastic leukemia', expectedTopic: 'Acute Lymphoblastic Leukemia' },
    { query: 'all', expectedTopic: 'Acute Lymphoblastic Leukemia' },
    { query: 'chronic lymphocytic leukemia', expectedTopic: 'Chronic Lymphocytic Leukemia' },
    { query: 'cll', expectedTopic: 'Chronic Lymphocytic Leukemia' },
    
    // NEUROLOGY STRESS TESTS (PHASE 6)
    { query: 'ischemic stroke', expectedTopic: 'Ischemic Stroke' },
    { query: 'hemorrhagic stroke', expectedTopic: 'Hemorrhagic Stroke' },
    { query: 'intracerebral hemorrhage', expectedTopic: 'Hemorrhagic Stroke' },
    { query: 'subarachnoid hemorrhage', expectedTopic: 'Subarachnoid Hemorrhage' },
    { query: 'sah', expectedTopic: 'Subarachnoid Hemorrhage' },
    { query: 'transient ischemic attack', expectedTopic: 'Transient Ischemic Attack' },
    { query: 'tia', expectedTopic: 'Transient Ischemic Attack' },
    { query: 'epilepsy', expectedTopic: 'Epilepsy' },
    { query: 'status epilepticus', expectedTopic: 'Status Epilepticus' },
    { query: 'parkinson disease', expectedTopic: 'Parkinson Disease' },
    { query: 'essential tremor', expectedTopic: 'Essential Tremor' },
    { query: 'huntington disease', expectedTopic: 'Huntington Disease' },
    { query: 'alzheimer disease', expectedTopic: 'Alzheimer Disease' },
    { query: 'vascular dementia', expectedTopic: 'Vascular Dementia' },
    { query: 'multiple sclerosis', expectedTopic: 'Multiple Sclerosis' },
    { query: 'ms', expectedTopic: 'Multiple Sclerosis' },
    { query: 'migraine', expectedTopic: 'Migraine' },
    { query: 'cluster headache', expectedTopic: 'Cluster Headache' },
    { query: 'diabetic neuropathy', expectedTopic: 'Diabetic Neuropathy' },
    { query: 'guillain barre syndrome', expectedTopic: 'Guillain-Barré Syndrome' },
    { query: 'gbs', expectedTopic: 'Guillain-Barré Syndrome' },
    { query: 'myasthenia gravis', expectedTopic: 'Myasthenia Gravis' },
    { query: 'meningitis', expectedTopic: 'Meningitis' },
    { query: 'encephalitis', expectedTopic: 'Encephalitis' },
    { query: 'bell palsy', expectedTopic: 'Bell Palsy' },
    { query: 'trigeminal neuralgia', expectedTopic: 'Trigeminal Neuralgia' },
    { query: 'als', expectedTopic: 'Amyotrophic Lateral Sclerosis' },
    { query: 'normal pressure hydrocephalus', expectedTopic: 'Normal Pressure Hydrocephalus' },
    { query: 'nph', expectedTopic: 'Normal Pressure Hydrocephalus' },
    { query: 'restless legs syndrome', expectedTopic: 'Restless Legs Syndrome' },
    { query: 'rls', expectedTopic: 'Restless Legs Syndrome' },
    { query: 'carpal tunnel syndrome', expectedTopic: 'Carpal Tunnel Syndrome' },
    { query: 'vertigo', expectedTopic: 'Vertigo' },
    
    // INFECTIOUS DISEASE STRESS TESTS (PHASE 7)
    { query: 'sepsis', expectedTopic: 'Sepsis and Septic Shock' },
    { query: 'septic shock', expectedTopic: 'Sepsis and Septic Shock' },
    { query: 'infective endocarditis', expectedTopic: 'Infective Endocarditis' },
    { query: 'bacterial endocarditis', expectedTopic: 'Infective Endocarditis' },
    { query: 'tuberculosis', expectedTopic: 'Tuberculosis' },
    { query: 'tb', expectedTopic: 'Tuberculosis' },
    { query: 'latent tb', expectedTopic: 'Tuberculosis' },
    { query: 'active tb', expectedTopic: 'Tuberculosis' },
    { query: 'clostridium difficile', expectedTopic: 'Clostridium difficile Infection' },
    { query: 'c diff', expectedTopic: 'Clostridium difficile Infection' },
    { query: 'lyme disease', expectedTopic: 'Lyme Disease' },
    { query: 'influenza', expectedTopic: 'Influenza' },
    { query: 'flu', expectedTopic: 'Influenza' },
    { query: 'covid-19', expectedTopic: 'COVID-19' },
    { query: 'covid', expectedTopic: 'COVID-19' },
    { query: 'coronavirus', expectedTopic: 'COVID-19' },
    { query: 'hiv', expectedTopic: 'HIV/AIDS' },
    { query: 'aids', expectedTopic: 'HIV/AIDS' },
    { query: 'hepatitis b', expectedTopic: 'Hepatitis B' },
    { query: 'hbv', expectedTopic: 'Hepatitis B' },
    { query: 'hepatitis c', expectedTopic: 'Hepatitis C' },
    { query: 'hcv', expectedTopic: 'Hepatitis C' },
    { query: 'herpes simplex', expectedTopic: 'Herpes Simplex Virus' },
    { query: 'hsv', expectedTopic: 'Herpes Simplex Virus' },
    { query: 'candidiasis', expectedTopic: 'Candidiasis' },
    { query: 'thrush', expectedTopic: 'Candidiasis' },
    { query: 'aspergillosis', expectedTopic: 'Aspergillosis' },
    { query: 'cryptococcosis', expectedTopic: 'Cryptococcosis' },
    { query: 'malaria', expectedTopic: 'Malaria' },
    { query: 'toxoplasmosis', expectedTopic: 'Toxoplasmosis' },
    { query: 'syphilis', expectedTopic: 'Syphilis' },
    { query: 'gonorrhea', expectedTopic: 'Gonorrhea' },
    { query: 'chlamydia', expectedTopic: 'Chlamydia' },
    
    // CRITICAL CONTENT BLEEDING PREVENTION TESTS (ALL PHASES)
    { query: 'what is the pathophysiology of sepsis', expectedTopic: 'Sepsis and Septic Shock' },
    { query: 'what is the pathophysiology of tuberculosis', expectedTopic: 'Tuberculosis' },
    { query: 'what is the pathophysiology of sickle cell disease', expectedTopic: 'Sickle Cell Disease' },
    { query: 'what is the pathophysiology of heart failure', expectedTopic: 'Heart Failure' },
    { query: 'what is the pathophysiology of type 1 diabetes', expectedTopic: 'Type 1 Diabetes Mellitus' },
    { query: 'what is the pathophysiology of type 2 diabetes', expectedTopic: 'Type 2 Diabetes Mellitus' },
    { query: 'what is the pathophysiology of ischemic stroke', expectedTopic: 'Ischemic Stroke' },
    { query: 'what is the pathophysiology of hemorrhagic stroke', expectedTopic: 'Hemorrhagic Stroke' },
    { query: 'clinical presentation of hiv', expectedTopic: 'HIV/AIDS' },
    { query: 'clinical presentation of parkinson disease', expectedTopic: 'Parkinson Disease' },
    { query: 'clinical presentation of alzheimer disease', expectedTopic: 'Alzheimer Disease' },
    { query: 'treatment of influenza', expectedTopic: 'Influenza' },
    { query: 'treatment of epilepsy', expectedTopic: 'Epilepsy' },
    { query: 'treatment of status epilepticus', expectedTopic: 'Status Epilepticus' },
    { query: 'treatment of malaria', expectedTopic: 'Malaria' },
    { query: 'diagnosis of covid-19', expectedTopic: 'COVID-19' },
    { query: 'diagnosis of multiple sclerosis', expectedTopic: 'Multiple Sclerosis' },
    { query: 'diagnosis of myasthenia gravis', expectedTopic: 'Myasthenia Gravis' },
  ];
  
  const results = testCases.map(testCase => {
    const searchResults = searchMerckManualKnowledge(testCase.query);
    const actualTopic = searchResults.length > 0 ? searchResults[0].topic : null;
    const passed = actualTopic === testCase.expectedTopic;
    
    return {
      query: testCase.query,
      expectedTopic: testCase.expectedTopic,
      actualTopic,
      passed,
    };
  });
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  
  return {
    passed,
    failed,
    results,
  };
}
