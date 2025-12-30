
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Linking,
  Alert,
  Modal,
} from 'react-native';
import { Stack } from 'expo-router';
import { WebView } from 'react-native-webview';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { getAllGuidelineWebsites } from '@/data/allGuidelineWebsites';
import { getAllAcademicReferences, searchAcademicReferences, type AcademicReference } from '@/data/allAcademicReferences';
import { searchMerckManualKnowledge, type MerckManualEntry } from '@/data/merckManualKnowledge';
import { searchACCGuidelines, type ACCGuidelineEntry } from '@/data/accGuidelinesKnowledge';
import { searchAHAGuidelines, type AHAGuidelineEntry } from '@/data/ahaGuidelinesKnowledge';
import { searchESCGuidelines, type ESCGuidelineEntry } from '@/data/escGuidelinesKnowledge';
import { searchHFSAGuidelines, type HFSAGuidelineEntry } from '@/data/hfsaGuidelinesKnowledge';
import { searchHRSGuidelines, type HRSGuidelineEntry } from '@/data/hrsGuidelinesKnowledge';
import { searchSCAIGuidelines, type SCAIGuidelineEntry } from '@/data/scaiGuidelinesKnowledge';
import { searchEACTSGuidelines, type EACTSGuidelineEntry } from '@/data/eactsGuidelinesKnowledge';
import { searchATSGuidelines, type ATSGuidelineEntry } from '@/data/atsGuidelinesKnowledge';
import { searchCHESTGuidelines, type CHESTGuidelineEntry } from '@/data/chestGuidelinesKnowledge';
import { searchSCCMGuidelines, type SCCMGuidelineEntry } from '@/data/sccmGuidelinesKnowledge';
import { searchKDIGOGuidelines, type KDIGOGuidelineEntry } from '@/data/kdigoGuidelinesKnowledge';
import { searchNIDDKGuidelines, type NIDDKGuidelineEntry } from '@/data/niddkGuidelinesKnowledge';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';
import { pulmonaryFlashcards } from '@/data/pulmonaryFlashcards';
import { neurologyFlashcards } from '@/data/neurologyFlashcards';
import { gastroenterologyFlashcards } from '@/data/gastroenterologyFlashcards';
import { endocrineFlashcards } from '@/data/endocrineFlashcards';
import { hematologyFlashcards } from '@/data/hematologyFlashcards';
import { renalFlashcards } from '@/data/renalFlashcards';
import { emergencyMedicineFlashcards } from '@/data/emergencyMedicineFlashcards';
import { infectiousDiseaseFlashcards } from '@/data/infectiousDiseaseFlashcards';
import { urologyFlashcards } from '@/data/urologyFlashcards';
import { Flashcard } from '@/types/flashcard';
import { perpetualLearningEngine, type FollowUpQuestion } from '@/data/perpetualLearningEngine';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  websites?: {
    name: string;
    url: string;
    description: string;
    system: string;
  }[];
  references?: AcademicReference[];
  merckManualLinks?: {
    title: string;
    url: string;
    description: string;
  }[];
  merckManualEntries?: MerckManualEntry[];
  accGuidelines?: ACCGuidelineEntry[];
  ahaGuidelines?: AHAGuidelineEntry[];
  escGuidelines?: ESCGuidelineEntry[];
  hfsaGuidelines?: HFSAGuidelineEntry[];
  hrsGuidelines?: HRSGuidelineEntry[];
  scaiGuidelines?: SCAIGuidelineEntry[];
  eactsGuidelines?: EACTSGuidelineEntry[];
  atsGuidelines?: ATSGuidelineEntry[];
  chestGuidelines?: CHESTGuidelineEntry[];
  sccmGuidelines?: SCCMGuidelineEntry[];
  kdigoGuidelines?: KDIGOGuidelineEntry[];
  niddkGuidelines?: NIDDKGuidelineEntry[];
  flashcards?: Flashcard[];
  interactionId?: string;
  feedback?: 'positive' | 'negative';
  followUpQuestions?: FollowUpQuestion[];
  system?: string;
}

// Combine all flashcards
const getAllFlashcards = (): Flashcard[] => {
  return [
    ...cardiologyFlashcards,
    ...pulmonaryFlashcards,
    ...neurologyFlashcards,
    ...gastroenterologyFlashcards,
    ...endocrineFlashcards,
    ...hematologyFlashcards,
    ...renalFlashcards,
    ...emergencyMedicineFlashcards,
    ...infectiousDiseaseFlashcards,
    ...urologyFlashcards,
  ];
};

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Medical Expert Chatbot powered by the **Perpetual System Logic Learning Engine**.\n\n**🔄 Continuous Learning System:**\n\nI continuously learn from your interactions to provide better responses:\n\n• **Feedback Loop** - Rate my responses with 👍 or 👎 to help me improve\n• **Follow-Up Questions** - I suggest related questions to enhance your learning\n• **Self-Monitoring** - I run internal audits and stress tests to maintain quality\n• **Auto-Repair** - I fix issues automatically and alert you when needed\n\n**📚 Complete Knowledge Base:**\n\n• **Cardiology** - Arrhythmias, heart failure, ischemic heart disease, valvular disorders\n• **Pulmonary** - Asthma, COPD, pneumonia, interstitial lung diseases\n• **Gastroenterology** - GI disorders, liver disease, IBD, pancreatic conditions\n• **Endocrine** - Diabetes, thyroid disorders, adrenal disorders\n• **Hematology** - Anemias, bleeding disorders, thrombotic disorders, malignancies\n• **Renal** - AKI, CKD, glomerular diseases, electrolyte disorders\n• **Neurology** - Stroke, seizures, movement disorders, dementia, MS\n• **Infectious Disease** - Bacterial, viral, fungal, parasitic infections\n• **Emergency Medicine** - Shock, trauma, cardiovascular emergencies, toxicology\n• **Urology** - Urinary tract disorders, prostate conditions, kidney stones\n\n**📋 Clinical Practice Guidelines (NEW!):**\n\n• **ACC Guidelines** - American College of Cardiology evidence-based recommendations\n• **AHA Guidelines** - American Heart Association cardiovascular disease prevention and management\n• **ESC Guidelines** - European Society of Cardiology comprehensive cardiovascular guidelines\n• **HFSA Guidelines** - Heart Failure Society of America heart failure management\n• **HRS Guidelines** - Heart Rhythm Society arrhythmia and device therapy guidelines\n• **SCAI Guidelines** - Society for Cardiovascular Angiography and Interventions procedural guidelines\n• **EACTS Guidelines** - European Association for Cardio-Thoracic Surgery surgical guidelines\n• **ATS Guidelines** - American Thoracic Society pulmonary and critical care guidelines\n• **CHEST Guidelines** - American College of Chest Physicians pulmonary and critical care guidelines\n• **SCCM Guidelines** - Society of Critical Care Medicine critical care guidelines\n• **KDIGO Guidelines** - Kidney Disease: Improving Global Outcomes renal guidelines\n• **NIDDK Guidelines** - National Institute of Diabetes and Digestive and Kidney Diseases guidelines\n\nAsk about guidelines using keywords like "ACC guideline", "AHA guideline", "ESC guideline", "HFSA guideline", "HRS guideline", "SCAI guideline", "EACTS guideline", "ATS guideline", "CHEST guideline", "SCCM guideline", "KDIGO guideline", "NIDDK guideline", "recommendation", or "evidence"\n\n**🎯 Focused Responses:**\n\nAsk specific questions using keywords:\n• "What is the **pathophysiology** of..."\n• "What are the **clinical findings** of..."\n• "How do you **diagnose**..."\n• "What is the **treatment** for..."\n• "What are the **ACC/AHA/ESC/HFSA/HRS/SCAI/EACTS/ATS guidelines** for..."\n\n**💡 Interactive Learning:**\n\nAfter each response, I\'ll suggest 3 follow-up questions to deepen your understanding. Select one to continue learning!\n\nLet\'s begin your medical learning journey!',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');
  const [systemNeedsRefresh, setSystemNeedsRefresh] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  // Check system health on mount
  useEffect(() => {
    checkSystemHealth();
  }, []);

  const checkSystemHealth = async () => {
    const health = perpetualLearningEngine.getSystemHealth();
    if (health.needsRepair) {
      setSystemNeedsRefresh(true);
    }
  };

  const getMerckManualLinks = (query: string): {title: string; url: string; description: string}[] => {
    const lowerQuery = query.toLowerCase();
    const baseUrl = 'https://www.merckmanuals.com/professional';
    
    // Map common medical topics to Merck Manual sections
    const topicMap: {[key: string]: {title: string; url: string; description: string}[]} = {
      'pleural effusion': [
        {
          title: 'Pleural Effusion - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/mediastinal-and-pleural-disorders/pleural-effusion`,
          description: 'Comprehensive overview of pleural effusion causes, diagnosis, and management'
        }
      ],
      'pneumothorax': [
        {
          title: 'Pneumothorax - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/mediastinal-and-pleural-disorders/pneumothorax`,
          description: 'Diagnosis and treatment of pneumothorax'
        }
      ],
      'heart failure': [
        {
          title: 'Heart Failure - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/heart-failure/heart-failure-hf`,
          description: 'Comprehensive overview of heart failure pathophysiology, diagnosis, and management'
        }
      ],
      'chf': [
        {
          title: 'Heart Failure - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/heart-failure/heart-failure-hf`,
          description: 'Comprehensive overview of congestive heart failure'
        }
      ],
      'diabetes': [
        {
          title: 'Diabetes Mellitus - Merck Manual Professional',
          url: `${baseUrl}/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm`,
          description: 'Complete guide to diabetes mellitus diagnosis and management'
        }
      ],
      'stroke': [
        {
          title: 'Stroke Overview - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/stroke/overview-of-stroke`,
          description: 'Comprehensive stroke pathophysiology, diagnosis, and acute management'
        }
      ],
      'sepsis': [
        {
          title: 'Sepsis and Septic Shock - Merck Manual Professional',
          url: `${baseUrl}/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock`,
          description: 'Evidence-based approach to sepsis recognition and management'
        }
      ],
      'pneumonia': [
        {
          title: 'Pneumonia Overview - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/pneumonia/overview-of-pneumonia`,
          description: 'Comprehensive pneumonia diagnosis and treatment'
        }
      ],
      'asthma': [
        {
          title: 'Asthma - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/asthma-and-related-disorders/asthma`,
          description: 'Asthma pathophysiology, diagnosis, and stepwise management'
        }
      ],
      'copd': [
        {
          title: 'Chronic Obstructive Pulmonary Disease - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/chronic-obstructive-pulmonary-disease-and-related-disorders/chronic-obstructive-pulmonary-disease-copd`,
          description: 'COPD diagnosis, management, and exacerbation treatment'
        }
      ],
      'hypertension': [
        {
          title: 'Hypertension - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/hypertension/hypertension`,
          description: 'Hypertension evaluation, classification, and treatment'
        }
      ],
      'atrial fibrillation': [
        {
          title: 'Atrial Fibrillation - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/arrhythmias-and-conduction-disorders/atrial-fibrillation`,
          description: 'AFib diagnosis, rate/rhythm control, and anticoagulation'
        }
      ],
      'afib': [
        {
          title: 'Atrial Fibrillation - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/arrhythmias-and-conduction-disorders/atrial-fibrillation`,
          description: 'AFib diagnosis, rate/rhythm control, and anticoagulation'
        }
      ],
      'myocardial infarction': [
        {
          title: 'Acute Myocardial Infarction - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/coronary-artery-disease/acute-myocardial-infarction-mi`,
          description: 'STEMI and NSTEMI diagnosis and management'
        }
      ],
      'aki': [
        {
          title: 'Acute Kidney Injury - Merck Manual Professional',
          url: `${baseUrl}/genitourinary-disorders/acute-kidney-injury/acute-kidney-injury-aki`,
          description: 'AKI classification, causes, and management'
        }
      ],
      'ckd': [
        {
          title: 'Chronic Kidney Disease - Merck Manual Professional',
          url: `${baseUrl}/genitourinary-disorders/chronic-kidney-disease/chronic-kidney-disease`,
          description: 'CKD staging, complications, and management'
        }
      ],
      'meningitis': [
        {
          title: 'Acute Bacterial Meningitis - Merck Manual Professional',
          url: `${baseUrl}/infectious-diseases/central-nervous-system-infections/acute-bacterial-meningitis`,
          description: 'Bacterial meningitis diagnosis and empiric treatment'
        }
      ],
      'uti': [
        {
          title: 'Urinary Tract Infection - Merck Manual Professional',
          url: `${baseUrl}/genitourinary-disorders/urinary-tract-infections-utis/overview-of-urinary-tract-infections-utis`,
          description: 'UTI diagnosis and antibiotic selection'
        }
      ],
      'cellulitis': [
        {
          title: 'Cellulitis - Merck Manual Professional',
          url: `${baseUrl}/dermatologic-disorders/bacterial-skin-infections/cellulitis`,
          description: 'Cellulitis diagnosis and treatment'
        }
      ],
      'dvt': [
        {
          title: 'Deep Venous Thrombosis - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/peripheral-venous-disorders/deep-venous-thrombosis-dvt`,
          description: 'DVT diagnosis, risk stratification, and anticoagulation'
        }
      ],
      'pulmonary embolism': [
        {
          title: 'Pulmonary Embolism - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe`,
          description: 'PE diagnosis and management strategies'
        }
      ],
      'anemia': [
        {
          title: 'Anemia Overview - Merck Manual Professional',
          url: `${baseUrl}/hematology-and-oncology/anemias/overview-of-anemia`,
          description: 'Anemia classification, diagnosis, and treatment approach'
        }
      ],
      'tuberculosis': [
        {
          title: 'Tuberculosis - Merck Manual Professional',
          url: `${baseUrl}/infectious-diseases/mycobacteria/tuberculosis-tb`,
          description: 'TB diagnosis, treatment, and drug-resistant TB management'
        }
      ],
      'hiv': [
        {
          title: 'Human Immunodeficiency Virus - Merck Manual Professional',
          url: `${baseUrl}/infectious-diseases/human-immunodeficiency-virus-hiv/human-immunodeficiency-virus-hiv-infection`,
          description: 'HIV pathophysiology, antiretroviral therapy, and complications'
        }
      ],
    };

    // Find matching topics
    const matchedLinks: {title: string; url: string; description: string}[] = [];
    
    for (const [keyword, links] of Object.entries(topicMap)) {
      if (lowerQuery.includes(keyword)) {
        matchedLinks.push(...links);
      }
    }

    // If no specific matches, provide general search link
    if (matchedLinks.length === 0) {
      matchedLinks.push({
        title: 'Search Merck Manual Professional',
        url: `${baseUrl}/search?query=${encodeURIComponent(query)}`,
        description: 'Search the Merck Manual Professional for your query'
      });
    }

    return matchedLinks;
  };

  const findRelevantWebsites = (query: string) => {
    const allWebsites = getAllGuidelineWebsites();
    const lowerQuery = query.toLowerCase();
    
    // Keywords for different medical systems
    const keywords: { [key: string]: string[] } = {
      cardiology: ['heart', 'cardiac', 'cardio', 'arrhythmia', 'afib', 'atrial fibrillation', 'valve', 'coronary', 'myocardial', 'hypertension', 'blood pressure', 'chf', 'congestive heart failure', 'heart failure', 'mi', 'myocardial infarction'],
      pulmonary: ['lung', 'pulmonary', 'respiratory', 'asthma', 'copd', 'pneumonia', 'breathing', 'airway', 'bronch', 'pe', 'pulmonary embolism', 'pleural', 'effusion', 'pneumothorax', 'pleura'],
      renal: ['kidney', 'renal', 'nephro', 'dialysis', 'urinary', 'glomerulo', 'proteinuria', 'aki', 'ckd'],
      gastroenterology: ['stomach', 'gastro', 'intestin', 'liver', 'hepat', 'pancrea', 'esophag', 'colon', 'bowel', 'digestive', 'crohn', 'colitis', 'celiac', 'cirrhosis', 'gerd', 'ibd'],
      endocrine: ['diabetes', 'thyroid', 'hormone', 'endocrine', 'pituitary', 'adrenal', 'insulin', 'glucose', 'metabolic', 'hypothyroidism', 'hyperthyroidism'],
      hematology: ['blood', 'anemia', 'hemato', 'leukemia', 'lymphoma', 'coagulation', 'thrombosis', 'platelet', 'dvt'],
      neurology: ['brain', 'neuro', 'stroke', 'seizure', 'epilepsy', 'headache', 'migraine', 'dementia', 'alzheimer', 'parkinson', 'multiple sclerosis'],
      'emergency medicine': ['emergency', 'trauma', 'acute', 'critical', 'shock', 'resuscitation'],
      'infectious disease': ['infection', 'infectious', 'bacteria', 'virus', 'antibiotic', 'sepsis', 'fever', 'fungal', 'parasitic', 'sti', 'hiv', 'hepatitis', 'covid', 'pneumonia', 'meningitis', 'endocarditis', 'tuberculosis', 'tb', 'malaria', 'uti', 'cellulitis'],
      urology: ['urolog', 'prostate', 'bladder', 'urinary tract'],
    };

    // Find matching systems
    const matchingSystems = new Set<string>();
    for (const [system, terms] of Object.entries(keywords)) {
      if (terms.some(term => lowerQuery.includes(term))) {
        matchingSystems.add(system);
      }
    }

    // If no specific system matches, search in all descriptions
    if (matchingSystems.size === 0) {
      return allWebsites.filter(website => 
        website.name.toLowerCase().includes(lowerQuery) ||
        website.description.toLowerCase().includes(lowerQuery)
      ).slice(0, 5);
    }

    // Return websites from matching systems
    const results = allWebsites.filter(website => 
      matchingSystems.has(website.system.toLowerCase())
    );

    return results.slice(0, 5);
  };

  const findRelevantReferences = (query: string): AcademicReference[] => {
    const lowerQuery = query.toLowerCase();
    const allReferences = getAllAcademicReferences();
    
    // Search through references
    const matchingRefs = allReferences.filter(ref => {
      const citationMatch = ref.citation.toLowerCase().includes(lowerQuery);
      const topicMatch = ref.topic.toLowerCase().includes(lowerQuery);
      const systemMatch = ref.system.toLowerCase().includes(lowerQuery);
      const appliesToMatch = ref.appliesTo && ref.appliesTo.toLowerCase().includes(lowerQuery);
      
      return citationMatch || topicMatch || systemMatch || appliesToMatch;
    });

    // Return top 5 most relevant references
    return matchingRefs.slice(0, 5);
  };

  const findRelevantFlashcards = (query: string): Flashcard[] => {
    const lowerQuery = query.toLowerCase();
    const allFlashcards = getAllFlashcards();
    
    // Enhanced search with better scoring
    const scoredCards = allFlashcards.map(card => {
      let score = 0;
      
      // Check front (question) - highest priority
      if (card.front.toLowerCase().includes(lowerQuery)) {
        score += 10;
      }
      
      // Check topic - high priority
      if (card.topic.toLowerCase().includes(lowerQuery)) {
        score += 8;
      }
      
      // Check tags - high priority
      if (card.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
        score += 7;
      }
      
      // Check back content - medium priority
      if (card.back.definition?.toLowerCase().includes(lowerQuery)) {
        score += 6;
      }
      if (card.back.high_yield?.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }
      if (card.back.clinical_pearl?.toLowerCase().includes(lowerQuery)) {
        score += 4;
      }
      if (card.back.treatment?.toLowerCase().includes(lowerQuery)) {
        score += 4;
      }
      
      // Check system - lower priority
      if (card.system.toLowerCase().includes(lowerQuery)) {
        score += 2;
      }
      
      // Exact matches get bonus
      const queryWords = lowerQuery.split(' ');
      queryWords.forEach(word => {
        if (word.length > 3) { // Only check meaningful words
          if (card.front.toLowerCase().includes(word)) score += 2;
          if (card.tags.some(tag => tag.toLowerCase() === word)) score += 3;
        }
      });
      
      return { card, score };
    });
    
    // Filter cards with score > 0 and sort by score
    const matchingCards = scoredCards
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.card);

    // Return top 5 most relevant flashcards
    return matchingCards.slice(0, 5);
  };

  const detectMedicalSystem = (query: string, merckEntries: MerckManualEntry[]): string => {
    if (merckEntries.length > 0) {
      return merckEntries[0].system;
    }

    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('heart') || lowerQuery.includes('cardiac')) return 'Cardiology';
    if (lowerQuery.includes('lung') || lowerQuery.includes('pulmonary')) return 'Pulmonary';
    if (lowerQuery.includes('kidney') || lowerQuery.includes('renal')) return 'Renal';
    if (lowerQuery.includes('brain') || lowerQuery.includes('neuro')) return 'Neurology';
    if (lowerQuery.includes('blood') || lowerQuery.includes('anemia')) return 'Hematology';
    if (lowerQuery.includes('diabetes') || lowerQuery.includes('thyroid')) return 'Endocrine';
    if (lowerQuery.includes('infection') || lowerQuery.includes('sepsis')) return 'Infectious Disease';
    
    return 'General Medicine';
  };

  const generateDynamicResponse = (
    query: string,
    flashcards: Flashcard[],
    merckEntries: MerckManualEntry[],
    references: AcademicReference[],
    websites: any[],
    merckLinks: any[],
    accGuidelines: ACCGuidelineEntry[],
    ahaGuidelines: AHAGuidelineEntry[],
    escGuidelines: ESCGuidelineEntry[],
    hfsaGuidelines: HFSAGuidelineEntry[],
    hrsGuidelines: HRSGuidelineEntry[],
    scaiGuidelines: SCAIGuidelineEntry[],
    eactsGuidelines: EACTSGuidelineEntry[],
    atsGuidelines: ATSGuidelineEntry[],
    chestGuidelines: CHESTGuidelineEntry[],
    sccmGuidelines: SCCMGuidelineEntry[],
    kdigoGuidelines: KDIGOGuidelineEntry[],
    niddkGuidelines: NIDDKGuidelineEntry[]
  ): string => {
    console.log('Generating dynamic response for:', query);
    console.log('Found flashcards:', flashcards.length);
    console.log('Found Merck entries:', merckEntries.length);
    console.log('Found ACC guidelines:', accGuidelines.length);
    console.log('Found AHA guidelines:', ahaGuidelines.length);
    console.log('Found ESC guidelines:', escGuidelines.length);
    console.log('Found HFSA guidelines:', hfsaGuidelines.length);
    console.log('Found HRS guidelines:', hrsGuidelines.length);
    console.log('Found SCAI guidelines:', scaiGuidelines.length);
    console.log('Found EACTS guidelines:', eactsGuidelines.length);
    console.log('Found ATS guidelines:', atsGuidelines.length);
    console.log('Found CHEST guidelines:', chestGuidelines.length);
    console.log('Found SCCM guidelines:', sccmGuidelines.length);
    console.log('Found KDIGO guidelines:', kdigoGuidelines.length);
    console.log('Found NIDDK guidelines:', niddkGuidelines.length);
    console.log('Found references:', references.length);
    console.log('Found websites:', websites.length);
    console.log('Found Merck links:', merckLinks.length);

    // Enhanced query intent detection with keyword hooks
    const lowerQuery = query.toLowerCase();
    const isPathophysiologyQuery = /pathophysiology|mechanism|cause|etiology|why|how does|disease process|pathogenesis/i.test(query);
    const isClinicalQuery = /symptom|sign|present|clinical feature|manifestation|appear|clinical finding|physical exam/i.test(query);
    const isDiagnosticQuery = /diagnos|test|workup|evaluation|assess|detect|diagnostic approach|lab|imaging/i.test(query);
    const isTreatmentQuery = /treat|therap|manage|medication|drug|intervention|management|therapy/i.test(query);
    const isGuidelineQuery = /guideline|recommendation|class|evidence|acc|aha|esc|hfsa|hrs|scai|eacts|ats|chest|sccm|kdigo|niddk|american college|american heart|european society|heart failure society|heart rhythm society|cardiovascular angiography|interventions|cardio-thoracic surgery|european association|american thoracic society|thoracic society|chest physicians|critical care medicine|society of critical care|kidney disease improving global outcomes|national institute of diabetes|digestive and kidney diseases/i.test(query);
    
    console.log('Query intent hooks:', {
      isPathophysiologyQuery,
      isClinicalQuery,
      isDiagnosticQuery,
      isTreatmentQuery,
      isGuidelineQuery
    });

    // Priority 0: Clinical Practice Guidelines (ACC/AHA/ESC/HFSA/HRS/SCAI/EACTS/ATS/CHEST/SCCM/KDIGO/NIDDK) - Highest priority for guideline queries
    if (isGuidelineQuery && (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0 || eactsGuidelines.length > 0 || atsGuidelines.length > 0 || chestGuidelines.length > 0 || sccmGuidelines.length > 0 || kdigoGuidelines.length > 0 || niddkGuidelines.length > 0)) {
      let response = '';
      
      // ACC Guidelines
      if (accGuidelines.length > 0) {
        const guideline = accGuidelines[0];
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the American College of Cardiology (ACC) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation (COR) and Level of Evidence (LOE) ratings.*\n\n`;
      }
      
      // AHA Guidelines
      if (ahaGuidelines.length > 0) {
        const guideline = ahaGuidelines[0];
        if (accGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the American Heart Association (AHA) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation (COR) and Level of Evidence (LOE) ratings.*\n\n`;
      }
      
      // ESC Guidelines
      if (escGuidelines.length > 0) {
        const guideline = escGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the European Society of Cardiology (ESC) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation and Level of Evidence ratings.*\n\n`;
      }
      
      // HFSA Guidelines
      if (hfsaGuidelines.length > 0) {
        const guideline = hfsaGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the Heart Failure Society of America (HFSA) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation and Level of Evidence ratings.*\n\n`;
      }
      
      // HRS Guidelines
      if (hrsGuidelines.length > 0) {
        const guideline = hrsGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the Heart Rhythm Society (HRS) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation and Level of Evidence ratings.*\n\n`;
      }
      
      // SCAI Guidelines
      if (scaiGuidelines.length > 0) {
        const guideline = scaiGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the Society for Cardiovascular Angiography and Interventions (SCAI) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation and Level of Evidence ratings.*\n\n`;
      }
      
      // EACTS Guidelines
      if (eactsGuidelines.length > 0) {
        const guideline = eactsGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.classIRecommendations.length > 0) {
          response += '**Class I Recommendations (Strong Recommendation):**\n\n';
          guideline.classIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIARecommendations.length > 0) {
          response += '**Class IIA Recommendations (Moderate Recommendation):**\n\n';
          guideline.classIIARecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIBRecommendations.length > 0) {
          response += '**Class IIB Recommendations (Weak Recommendation):**\n\n';
          guideline.classIIBRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.classIIIRecommendations.length > 0) {
          response += '**Class III Recommendations (Not Recommended):**\n\n';
          guideline.classIIIRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Level of Evidence:** ${guideline.levelOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the European Association for Cardio-Thoracic Surgery (EACTS) clinical practice guidelines. These are evidence-based recommendations with specific Class of Recommendation and Level of Evidence ratings.*\n\n`;
      }
      
      // ATS Guidelines
      if (atsGuidelines.length > 0) {
        const guideline = atsGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0 || eactsGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.strongRecommendations.length > 0) {
          response += '**Strong Recommendations:**\n\n';
          guideline.strongRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.conditionalRecommendations.length > 0) {
          response += '**Conditional Recommendations:**\n\n';
          guideline.conditionalRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Quality of Evidence:** ${guideline.qualityOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the American Thoracic Society (ATS) clinical practice guidelines. These are evidence-based recommendations with specific strength of recommendation and quality of evidence ratings.*\n\n`;
      }
      
      // CHEST Guidelines
      if (chestGuidelines.length > 0) {
        const guideline = chestGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0 || eactsGuidelines.length > 0 || atsGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.grade1Recommendations.length > 0) {
          response += '**Grade 1 Recommendations (Strong Recommendation):**\n\n';
          guideline.grade1Recommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.grade2Recommendations.length > 0) {
          response += '**Grade 2 Recommendations (Weak Recommendation):**\n\n';
          guideline.grade2Recommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Quality of Evidence:** ${guideline.qualityOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the American College of Chest Physicians (CHEST) clinical practice guidelines. These are evidence-based recommendations with specific grade of recommendation and quality of evidence ratings.*\n\n`;
      }
      
      // SCCM Guidelines
      if (sccmGuidelines.length > 0) {
        const guideline = sccmGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0 || eactsGuidelines.length > 0 || atsGuidelines.length > 0 || chestGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.strongRecommendations.length > 0) {
          response += '**Strong Recommendations:**\n\n';
          guideline.strongRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.weakRecommendations.length > 0) {
          response += '**Weak Recommendations:**\n\n';
          guideline.weakRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Quality of Evidence:** ${guideline.qualityOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the Society of Critical Care Medicine (SCCM) clinical practice guidelines. These are evidence-based recommendations with specific strength of recommendation and quality of evidence ratings.*\n\n`;
      }
      
      // KDIGO Guidelines
      if (kdigoGuidelines.length > 0) {
        const guideline = kdigoGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0 || eactsGuidelines.length > 0 || atsGuidelines.length > 0 || chestGuidelines.length > 0 || sccmGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.strongRecommendations.length > 0) {
          response += '**Strong Recommendations:**\n\n';
          guideline.strongRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.weakRecommendations.length > 0) {
          response += '**Weak Recommendations:**\n\n';
          guideline.weakRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Quality of Evidence:** ${guideline.qualityOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the Kidney Disease: Improving Global Outcomes (KDIGO) clinical practice guidelines. These are evidence-based recommendations with specific grade of recommendation and quality of evidence ratings.*\n\n`;
      }
      
      // NIDDK Guidelines
      if (niddkGuidelines.length > 0) {
        const guideline = niddkGuidelines[0];
        if (accGuidelines.length > 0 || ahaGuidelines.length > 0 || escGuidelines.length > 0 || hfsaGuidelines.length > 0 || hrsGuidelines.length > 0 || scaiGuidelines.length > 0 || eactsGuidelines.length > 0 || atsGuidelines.length > 0 || chestGuidelines.length > 0 || sccmGuidelines.length > 0 || kdigoGuidelines.length > 0) {
          response += '\n---\n\n';
        }
        response += `**${guideline.topic}**\n\n`;
        response += `**Guideline Summary:**\n\n${guideline.guidelineSummary}\n\n`;
        
        if (guideline.strongRecommendations.length > 0) {
          response += '**Strong Recommendations:**\n\n';
          guideline.strongRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        if (guideline.conditionalRecommendations.length > 0) {
          response += '**Conditional Recommendations:**\n\n';
          guideline.conditionalRecommendations.forEach(rec => {
            response += `• ${rec}\n`;
          });
          response += '\n';
        }
        
        response += '**Clinical Implementation:**\n\n';
        response += `${guideline.clinicalImplementation}\n\n`;
        
        if (guideline.keyPoints.length > 0) {
          response += '**Key Points:**\n\n';
          guideline.keyPoints.forEach(point => {
            response += `• ${point}\n`;
          });
          response += '\n';
        }
        
        response += `**Quality of Evidence:** ${guideline.qualityOfEvidence}\n\n`;
        response += `**Publication Year:** ${guideline.publicationYear}\n\n`;
        response += `*This information is from the National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) clinical practice guidelines. These are evidence-based recommendations with specific strength of recommendation and quality of evidence ratings.*\n\n`;
      }
      
      return response;
    }

    // Priority 1: Use Merck Manual Professional knowledge base (most comprehensive)
    if (merckEntries.length > 0) {
      const primaryEntry = merckEntries[0];
      let response = `**${primaryEntry.topic}**\n\n`;
      
      // Enhanced keyword hooks - provide focused, doctor-like responses
      
      if (isPathophysiologyQuery) {
        response += '**Pathophysiology and Disease Mechanisms:**\n\n';
        response += `${primaryEntry.pathophysiology}\n\n`;
        
        // Add clinical pearls related to pathophysiology
        const pathophysiologyPearls = primaryEntry.clinicalPearls.filter(pearl =>
          /mechanism|cause|pathogen|develop|result|lead/i.test(pearl)
        );
        if (pathophysiologyPearls.length > 0) {
          response += '**Key Mechanistic Insights:**\n\n';
          pathophysiologyPearls.forEach(pearl => {
            response += `• ${pearl}\n`;
          });
          response += '\n';
        }
        
        // Add related flashcard insights for pathophysiology (only if highly relevant)
        if (flashcards.length > 0) {
          const relevantCards = flashcards.filter(card => 
            card.back.definition && card.back.definition.length > 50 &&
            card.topic === primaryEntry.topic // Only same topic to prevent bleeding
          );
          if (relevantCards.length > 0) {
            response += '**Additional Mechanistic Details:**\n\n';
            relevantCards.slice(0, 2).forEach(card => {
              if (card.back.definition) {
                response += `• ${card.back.definition}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += `*This pathophysiological explanation is based on the Merck Manual Professional. As your medical expert, I've focused specifically on the disease mechanisms and underlying processes of ${primaryEntry.topic} to answer your question about pathophysiology.*\n`;
        return response;
      }
      
      if (isClinicalQuery) {
        response += '**Clinical Presentation and Manifestations:**\n\n';
        response += `${primaryEntry.clinicalPresentation}\n\n`;
        
        // Add clinical pearls related to presentation
        const clinicalPearls = primaryEntry.clinicalPearls.filter(pearl =>
          /symptom|sign|present|exam|finding|appear/i.test(pearl)
        );
        if (clinicalPearls.length > 0) {
          response += '**Key Clinical Findings:**\n\n';
          clinicalPearls.forEach(pearl => {
            response += `• ${pearl}\n`;
          });
          response += '\n';
        }
        
        // Add high-yield clinical features from flashcards (only same topic)
        if (flashcards.length > 0) {
          const clinicalCards = flashcards.filter(card => 
            (card.back.high_yield || card.back.clinical_pearl) &&
            card.topic === primaryEntry.topic // Prevent content bleeding
          );
          if (clinicalCards.length > 0) {
            response += '**High-Yield Clinical Features:**\n\n';
            clinicalCards.slice(0, 3).forEach(card => {
              if (card.back.high_yield) {
                response += `• ${card.back.high_yield}\n`;
              }
              if (card.back.clinical_pearl) {
                response += `  Pearl: ${card.back.clinical_pearl}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += `*As your medical expert, I've focused specifically on the clinical presentation and physical examination findings of ${primaryEntry.topic} to answer your question. This information is based on the Merck Manual Professional.*\n`;
        return response;
      }
      
      if (isDiagnosticQuery) {
        response += '**Diagnostic Approach and Evaluation:**\n\n';
        response += `${primaryEntry.diagnosticApproach}\n\n`;
        
        // Add diagnostic-specific clinical pearls
        const diagnosticPearls = primaryEntry.clinicalPearls.filter(pearl =>
          /diagnos|test|lab|imaging|screen|detect|measure/i.test(pearl)
        );
        if (diagnosticPearls.length > 0) {
          response += '**Diagnostic Pearls:**\n\n';
          diagnosticPearls.forEach(pearl => {
            response += `• ${pearl}\n`;
          });
          response += '\n';
        }
        
        // Add diagnostic insights from flashcards (only same topic)
        if (flashcards.length > 0) {
          const diagnosticCards = flashcards.filter(card => 
            card.back.clinical_pearl && 
            /diagnos|test|lab|imaging/i.test(card.back.clinical_pearl) &&
            card.topic === primaryEntry.topic // Prevent content bleeding
          );
          if (diagnosticCards.length > 0) {
            response += '**Additional Diagnostic Insights:**\n\n';
            diagnosticCards.slice(0, 2).forEach(card => {
              if (card.back.clinical_pearl) {
                response += `• ${card.back.clinical_pearl}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += `*As your medical expert, I've focused specifically on the diagnostic approach and evaluation for ${primaryEntry.topic}. This information follows evidence-based guidelines from the Merck Manual Professional.*\n`;
        return response;
      }
      
      if (isTreatmentQuery) {
        response += '**Treatment and Management:**\n\n';
        response += `${primaryEntry.treatment}\n\n`;
        
        // Add treatment-specific clinical pearls
        const treatmentPearls = primaryEntry.clinicalPearls.filter(pearl =>
          /treat|therap|drug|medication|dose|management/i.test(pearl)
        );
        if (treatmentPearls.length > 0) {
          response += '**Treatment Pearls:**\n\n';
          treatmentPearls.forEach(pearl => {
            response += `• ${pearl}\n`;
          });
          response += '\n';
        }
        
        // Add treatment insights from flashcards (only same topic)
        if (flashcards.length > 0) {
          const treatmentCards = flashcards.filter(card => 
            card.back.treatment &&
            card.topic === primaryEntry.topic // Prevent content bleeding
          );
          if (treatmentCards.length > 0) {
            response += '**Additional Treatment Considerations:**\n\n';
            treatmentCards.slice(0, 2).forEach(card => {
              if (card.back.treatment) {
                response += `• ${card.back.treatment}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += `*As your medical expert, I've focused specifically on the treatment and management strategies for ${primaryEntry.topic}. These recommendations are based on current evidence-based guidelines from the Merck Manual Professional.*\n`;
        return response;
      }
      
      // If no specific aspect requested, provide comprehensive overview
      response += '**Comprehensive Medical Overview:**\n\n';
      
      // Pathophysiology
      response += '**Pathophysiology:**\n\n';
      response += `${primaryEntry.pathophysiology}\n\n`;
      
      // Clinical Presentation
      response += '**Clinical Presentation:**\n\n';
      response += `${primaryEntry.clinicalPresentation}\n\n`;
      
      // Diagnostic Approach
      response += '**Diagnostic Approach:**\n\n';
      response += `${primaryEntry.diagnosticApproach}\n\n`;
      
      // Treatment
      response += '**Treatment:**\n\n';
      response += `${primaryEntry.treatment}\n\n`;
      
      // Clinical Pearls
      if (primaryEntry.clinicalPearls.length > 0) {
        response += '**Clinical Pearls:**\n\n';
        primaryEntry.clinicalPearls.forEach(pearl => {
          response += `• ${pearl}\n`;
        });
        response += '\n';
      }
      
      // Add supplementary information from flashcards (only same topic to prevent bleeding)
      if (flashcards.length > 0) {
        const topicSpecificCards = flashcards.filter(card => 
          card.topic === primaryEntry.topic || 
          card.front.toLowerCase().includes(primaryEntry.topic.toLowerCase())
        );
        
        if (topicSpecificCards.length > 0) {
          response += '**Additional High-Yield Clinical Information:**\n\n';
          const uniquePearls = new Set<string>();
          topicSpecificCards.slice(0, 3).forEach(card => {
            if (card.back.clinical_pearl && !uniquePearls.has(card.back.clinical_pearl)) {
              uniquePearls.add(card.back.clinical_pearl);
              response += `• ${card.back.clinical_pearl}\n`;
            }
          });
          response += '\n';
        }
      }
      
      response += `*This comprehensive information about ${primaryEntry.topic} is synthesized from the Merck Manual Professional. As your medical expert, I've provided a complete overview covering pathophysiology, clinical presentation, diagnostic approach, and evidence-based treatment strategies.*\n\n`;
      
      // Add context about additional resources
      if (references.length > 0 || websites.length > 0) {
        response += '**For Further Reading:**\n\n';
        response += 'For the most current clinical practice guidelines, peer-reviewed literature, and evidence-based recommendations, ';
        response += 'please review the academic references and guideline websites provided below.\n';
      }
      
      return response;
    }

    // Priority 2: Use flashcard data if no Merck entry but flashcards available
    if (flashcards.length > 0) {
      let response = '**Medical Information**\n\n';
      
      const primaryCard = flashcards[0];
      
      // Provide targeted response based on query intent with content bleeding prevention
      if (isPathophysiologyQuery && primaryCard.back.definition) {
        response += '**Pathophysiology/Definition:**\n\n';
        response += `${primaryCard.back.definition}\n\n`;
        
        // Only add related cards from same topic to prevent bleeding
        const relatedCards = flashcards.slice(1, 3).filter(card => 
          card.back.definition && 
          card.topic === primaryCard.topic // Same topic only
        );
        if (relatedCards.length > 0) {
          response += '**Related Concepts:**\n\n';
          relatedCards.forEach(card => {
            response += `• **${card.front}**: ${card.back.definition}\n`;
          });
          response += '\n';
        }
        
        response += `*As your medical expert, I've focused on the pathophysiology of ${primaryCard.topic} based on our clinical flashcard database.*\n`;
        return response;
      } else if (isClinicalQuery && primaryCard.back.high_yield) {
        response += '**Clinical Features:**\n\n';
        response += `${primaryCard.back.high_yield}\n\n`;
        
        if (primaryCard.back.clinical_pearl) {
          response += '**Clinical Pearl:**\n\n';
          response += `${primaryCard.back.clinical_pearl}\n\n`;
        }
        
        // Only add related cards from same topic
        const clinicalCards = flashcards.slice(1, 3).filter(card => 
          card.back.high_yield &&
          card.topic === primaryCard.topic // Same topic only
        );
        if (clinicalCards.length > 0) {
          response += '**Additional Clinical Features:**\n\n';
          clinicalCards.forEach(card => {
            response += `• ${card.back.high_yield}\n`;
          });
          response += '\n';
        }
        
        response += `*As your medical expert, I've focused on the clinical presentation of ${primaryCard.topic} based on our clinical flashcard database.*\n`;
        return response;
      } else if (isTreatmentQuery && primaryCard.back.treatment) {
        response += '**Treatment:**\n\n';
        response += `${primaryCard.back.treatment}\n\n`;
        
        // Only add related cards from same topic
        const treatmentCards = flashcards.slice(1, 3).filter(card => 
          card.back.treatment &&
          card.topic === primaryCard.topic // Same topic only
        );
        if (treatmentCards.length > 0) {
          response += '**Additional Treatment Considerations:**\n\n';
          treatmentCards.forEach(card => {
            response += `• ${card.back.treatment}\n`;
          });
          response += '\n';
        }
        
        response += `*As your medical expert, I've focused on the treatment of ${primaryCard.topic} based on our clinical flashcard database.*\n`;
        return response;
      } else {
        // Comprehensive response from flashcards with content bleeding prevention
        if (primaryCard.back.definition) {
          response += '**Pathophysiology/Definition:**\n\n';
          response += `${primaryCard.back.definition}\n\n`;
        }
        
        if (primaryCard.back.high_yield) {
          response += '**Clinical Features:**\n\n';
          response += `${primaryCard.back.high_yield}\n\n`;
        }
        
        if (primaryCard.back.clinical_pearl) {
          response += '**Clinical Pearls:**\n\n';
          response += `${primaryCard.back.clinical_pearl}\n\n`;
        }
        
        if (primaryCard.back.treatment) {
          response += '**Treatment:**\n\n';
          response += `${primaryCard.back.treatment}\n\n`;
        }
        
        // Add additional information only from same topic to prevent bleeding
        if (flashcards.length > 1) {
          const topicSpecificCards = flashcards.slice(1).filter(card =>
            card.topic === primaryCard.topic // Same topic only
          );
          
          if (topicSpecificCards.length > 0) {
            response += '**Additional Clinical Information:**\n\n';
            for (let i = 0; i < Math.min(topicSpecificCards.length, 2); i++) {
              const card = topicSpecificCards[i];
              response += `• **${card.front}**\n`;
              if (card.back.definition) {
                response += `  ${card.back.definition}\n`;
              }
              if (card.back.clinical_pearl) {
                response += `  Pearl: ${card.back.clinical_pearl}\n`;
              }
              response += '\n';
            }
          }
        }
      }
      
      response += `*As your medical expert, I've provided comprehensive information about ${primaryCard.topic} from our clinical flashcard database (${primaryCard.system}).*\n\n`;
      
      // Add context about Merck Manual and other resources
      if (merckLinks.length > 0 || references.length > 0 || websites.length > 0) {
        response += '**For Comprehensive Details:**\n\n';
        response += 'For in-depth pathophysiology, diagnostic criteria, treatment protocols, and clinical management strategies, ';
        response += 'please consult the Merck Manual Professional and clinical practice guidelines listed below.\n';
      }
      
      return response;
    }
    
    // Priority 3: If no flashcard or Merck data but we have other resources
    if (references.length > 0 || websites.length > 0 || merckLinks.length > 0) {
      let response = '**Medical Information**\n\n';
      
      response += '**Clinical Overview:**\n\n';
      response += 'While I don\'t have specific detailed information on this exact topic in my core knowledge base, ';
      response += 'I\'ve identified relevant clinical guidelines and authoritative resources that provide ';
      response += 'comprehensive, evidence-based information.\n\n';
      
      if (merckLinks.length > 0) {
        response += '**According to Merck Manual Professional:**\n\n';
        response += 'The Merck Manual Professional provides detailed information including:\n\n';
        response += '• Detailed disease mechanisms and pathophysiology\n';
        response += '• Evidence-based diagnostic approaches\n';
        response += '• Treatment algorithms and medication guidelines\n';
        response += '• Monitoring recommendations\n';
        response += '• Special population considerations\n\n';
        response += 'Please review the Merck Manual Professional links below for comprehensive information.\n\n';
      }
      
      if (websites.length > 0) {
        response += '**Clinical Practice Guidelines:**\n\n';
        response += 'Leading medical organizations provide authoritative clinical practice guidelines ';
        response += 'with evidence-based recommendations. Please review the guideline websites below.\n\n';
      }
      
      if (references.length > 0) {
        response += '**Academic References:**\n\n';
        response += 'Peer-reviewed literature and clinical guidelines are available below for detailed information.\n';
      }
      
      return response;
    }

    // Priority 4: If no data found at all
    return 'I cannot provide specific information on this topic from my current database. However, I recommend consulting the Merck Manual Professional and clinical practice guidelines for comprehensive, evidence-based medical information. Please try rephrasing your question or asking about a specific medical condition, symptom, or treatment.';
  };

  const handleSend = async () => {
    if (!inputText.trim()) {
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentQuery = inputText;
    setInputText('');
    setIsTyping(true);

    // Process the query
    setTimeout(async () => {
      console.log('Processing query:', currentQuery);
      
      // Detect if query is asking for guidelines
      const lowerQuery = currentQuery.toLowerCase();
      const isGuidelineQuery = /guideline|recommendation|class|evidence|acc|aha|esc|hfsa|hrs|scai|eacts|ats|chest|sccm|kdigo|niddk|american college|american heart|european society|heart failure society|heart rhythm society|cardiovascular angiography|interventions|cardio-thoracic surgery|european association|american thoracic society|thoracic society|chest physicians|critical care medicine|society of critical care|kidney disease improving global outcomes|national institute of diabetes|digestive and kidney diseases/i.test(currentQuery);
      
      // Search all data sources
      const merckEntries = searchMerckManualKnowledge(currentQuery);
      const accGuidelines = isGuidelineQuery ? searchACCGuidelines(currentQuery) : [];
      const ahaGuidelines = isGuidelineQuery ? searchAHAGuidelines(currentQuery) : [];
      const escGuidelines = isGuidelineQuery ? searchESCGuidelines(currentQuery) : [];
      const hfsaGuidelines = isGuidelineQuery ? searchHFSAGuidelines(currentQuery) : [];
      const hrsGuidelines = isGuidelineQuery ? searchHRSGuidelines(currentQuery) : [];
      const scaiGuidelines = isGuidelineQuery ? searchSCAIGuidelines(currentQuery) : [];
      const eactsGuidelines = isGuidelineQuery ? searchEACTSGuidelines(currentQuery) : [];
      const atsGuidelines = isGuidelineQuery ? searchATSGuidelines(currentQuery) : [];
      const chestGuidelines = isGuidelineQuery ? searchCHESTGuidelines(currentQuery) : [];
      const sccmGuidelines = isGuidelineQuery ? searchSCCMGuidelines(currentQuery) : [];
      const kdigoGuidelines = isGuidelineQuery ? searchKDIGOGuidelines(currentQuery) : [];
      const niddkGuidelines = isGuidelineQuery ? searchNIDDKGuidelines(currentQuery) : [];
      const relevantFlashcards = findRelevantFlashcards(currentQuery);
      const relevantReferences = findRelevantReferences(currentQuery);
      const relevantWebsites = findRelevantWebsites(currentQuery);
      const merckManualLinks = getMerckManualLinks(currentQuery);
      
      console.log('Search results:');
      console.log('- Merck entries:', merckEntries.length);
      if (merckEntries.length > 0) {
        console.log('  Top Merck entry:', merckEntries[0].topic);
      }
      console.log('- ACC Guidelines:', accGuidelines.length);
      if (accGuidelines.length > 0) {
        console.log('  Top ACC guideline:', accGuidelines[0].topic);
      }
      console.log('- AHA Guidelines:', ahaGuidelines.length);
      if (ahaGuidelines.length > 0) {
        console.log('  Top AHA guideline:', ahaGuidelines[0].topic);
      }
      console.log('- ESC Guidelines:', escGuidelines.length);
      if (escGuidelines.length > 0) {
        console.log('  Top ESC guideline:', escGuidelines[0].topic);
      }
      console.log('- HFSA Guidelines:', hfsaGuidelines.length);
      if (hfsaGuidelines.length > 0) {
        console.log('  Top HFSA guideline:', hfsaGuidelines[0].topic);
      }
      console.log('- HRS Guidelines:', hrsGuidelines.length);
      if (hrsGuidelines.length > 0) {
        console.log('  Top HRS guideline:', hrsGuidelines[0].topic);
      }
      console.log('- SCAI Guidelines:', scaiGuidelines.length);
      if (scaiGuidelines.length > 0) {
        console.log('  Top SCAI guideline:', scaiGuidelines[0].topic);
      }
      console.log('- EACTS Guidelines:', eactsGuidelines.length);
      if (eactsGuidelines.length > 0) {
        console.log('  Top EACTS guideline:', eactsGuidelines[0].topic);
      }
      console.log('- ATS Guidelines:', atsGuidelines.length);
      if (atsGuidelines.length > 0) {
        console.log('  Top ATS guideline:', atsGuidelines[0].topic);
      }
      console.log('- CHEST Guidelines:', chestGuidelines.length);
      if (chestGuidelines.length > 0) {
        console.log('  Top CHEST guideline:', chestGuidelines[0].topic);
      }
      console.log('- SCCM Guidelines:', sccmGuidelines.length);
      if (sccmGuidelines.length > 0) {
        console.log('  Top SCCM guideline:', sccmGuidelines[0].topic);
      }
      console.log('- KDIGO Guidelines:', kdigoGuidelines.length);
      if (kdigoGuidelines.length > 0) {
        console.log('  Top KDIGO guideline:', kdigoGuidelines[0].topic);
      }
      console.log('- NIDDK Guidelines:', niddkGuidelines.length);
      if (niddkGuidelines.length > 0) {
        console.log('  Top NIDDK guideline:', niddkGuidelines[0].topic);
      }
      console.log('- Flashcards:', relevantFlashcards.length);
      if (relevantFlashcards.length > 0) {
        console.log('  Top flashcard:', relevantFlashcards[0].front);
      }
      console.log('- References:', relevantReferences.length);
      console.log('- Websites:', relevantWebsites.length);
      console.log('- Merck links:', merckManualLinks.length);
      
      // Generate dynamic response
      const botText = generateDynamicResponse(
        currentQuery,
        relevantFlashcards,
        merckEntries,
        relevantReferences,
        relevantWebsites,
        merckManualLinks,
        accGuidelines,
        ahaGuidelines,
        escGuidelines,
        hfsaGuidelines,
        hrsGuidelines,
        scaiGuidelines,
        eactsGuidelines,
        atsGuidelines,
        chestGuidelines,
        sccmGuidelines,
        kdigoGuidelines,
        niddkGuidelines
      );

      // Detect medical system
      const system = detectMedicalSystem(currentQuery, merckEntries);

      // Ingest interaction into Perpetual Learning Engine
      const interactionId = await perpetualLearningEngine.ingestInteraction(
        currentQuery,
        botText,
        system
      );

      // Generate follow-up questions
      const followUpQuestions = perpetualLearningEngine.generateFollowUpQuestions(
        currentQuery,
        botText,
        system
      );

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        merckManualEntries: merckEntries.length > 0 ? merckEntries : undefined,
        accGuidelines: accGuidelines.length > 0 ? accGuidelines : undefined,
        ahaGuidelines: ahaGuidelines.length > 0 ? ahaGuidelines : undefined,
        escGuidelines: escGuidelines.length > 0 ? escGuidelines : undefined,
        hfsaGuidelines: hfsaGuidelines.length > 0 ? hfsaGuidelines : undefined,
        hrsGuidelines: hrsGuidelines.length > 0 ? hrsGuidelines : undefined,
        scaiGuidelines: scaiGuidelines.length > 0 ? scaiGuidelines : undefined,
        eactsGuidelines: eactsGuidelines.length > 0 ? eactsGuidelines : undefined,
        atsGuidelines: atsGuidelines.length > 0 ? atsGuidelines : undefined,
        chestGuidelines: chestGuidelines.length > 0 ? chestGuidelines : undefined,
        sccmGuidelines: sccmGuidelines.length > 0 ? sccmGuidelines : undefined,
        kdigoGuidelines: kdigoGuidelines.length > 0 ? kdigoGuidelines : undefined,
        niddkGuidelines: niddkGuidelines.length > 0 ? niddkGuidelines : undefined,
        flashcards: relevantFlashcards.length > 0 ? relevantFlashcards : undefined,
        references: relevantReferences.length > 0 ? relevantReferences : undefined,
        websites: relevantWebsites.length > 0 ? relevantWebsites : undefined,
        merckManualLinks: merckManualLinks.length > 0 ? merckManualLinks : undefined,
        interactionId,
        followUpQuestions,
        system,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Check if system needs refresh after interaction
      await checkSystemHealth();
    }, 1500);
  };

  const handleFeedback = async (messageId: string, feedback: 'positive' | 'negative') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    const message = messages.find(m => m.id === messageId);
    if (!message || !message.interactionId) {
      console.error('Message or interaction ID not found');
      return;
    }

    // If negative feedback, ask for confirmation (double-check)
    if (feedback === 'negative') {
      Alert.alert(
        'Negative Feedback',
        'Are you sure this response was not helpful? This will trigger an internal audit to improve future responses.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Confirm',
            style: 'destructive',
            onPress: async () => {
              await perpetualLearningEngine.recordFeedback(message.interactionId!, feedback, true);
              
              // Update message with feedback
              setMessages(prev =>
                prev.map(m =>
                  m.id === messageId ? { ...m, feedback } : m
                )
              );

              Alert.alert(
                'Feedback Recorded',
                'Thank you for your feedback. The system will audit this response and learn from it to provide better answers in the future.'
              );

              // Check if system needs refresh
              await checkSystemHealth();
            },
          },
        ]
      );
    } else {
      // Positive feedback - record immediately
      await perpetualLearningEngine.recordFeedback(message.interactionId, feedback);
      
      // Update message with feedback
      setMessages(prev =>
        prev.map(m =>
          m.id === messageId ? { ...m, feedback } : m
        )
      );

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  const handleFollowUpQuestion = async (messageId: string, question: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const message = messages.find(m => m.id === messageId);
    if (message && message.interactionId) {
      await perpetualLearningEngine.recordFollowUpSelection(message.interactionId, question);
    }

    // Set the follow-up question as input and send it
    setInputText(question);
    
    // Trigger send after a short delay to allow state update
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  const handleRefreshSystemLogic = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    Alert.alert(
      'Refresh System Logic',
      'This will refresh the Perpetual Learning Engine, recalculate quality scores, and run stress tests. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Refresh',
          onPress: async () => {
            setIsTyping(true);
            
            try {
              await perpetualLearningEngine.refreshSystemLogic();
              
              setIsTyping(false);
              setSystemNeedsRefresh(false);
              
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              
              Alert.alert(
                'System Refreshed',
                'The Perpetual Learning Engine has been refreshed successfully. All quality scores have been recalculated and stress tests completed.'
              );
            } catch (error) {
              console.error('Error refreshing system:', error);
              setIsTyping(false);
              Alert.alert('Error', 'Failed to refresh system logic');
            }
          },
        },
      ]
    );
  };

  const handleWebsitePress = async (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Opening website:', url);
    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      Alert.alert('Error', 'Failed to open the website');
    }
  };

  const handleReferencePress = async (link?: string) => {
    if (!link) {
      Alert.alert('Info', 'No direct link available for this reference');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Opening reference:', link);
    
    try {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      } else {
        Alert.alert('Error', `Cannot open URL: ${link}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      Alert.alert('Error', 'Failed to open the reference');
    }
  };

  const handleMerckLinkPress = (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Opening Merck Manual:', url);
    setWebViewUrl(url);
    setWebViewVisible(true);
  };

  const renderMessage = (message: Message) => {
    return (
      <View
        key={message.id}
        style={[
          styles.messageContainer,
          message.isBot ? styles.botMessageContainer : styles.userMessageContainer,
        ]}
      >
        <View
          style={[
            styles.messageBubble,
            message.isBot ? styles.botBubble : styles.userBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              message.isBot ? styles.botText : styles.userText,
            ]}
          >
            {message.text}
          </Text>
          
          {/* Feedback Buttons for Bot Messages */}
          {message.isBot && message.interactionId && (
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackLabel}>Was this response helpful?</Text>
              <View style={styles.feedbackButtons}>
                <Pressable
                  style={[
                    styles.feedbackButton,
                    message.feedback === 'positive' && styles.feedbackButtonActive,
                  ]}
                  onPress={() => handleFeedback(message.id, 'positive')}
                  disabled={message.feedback !== undefined}
                >
                  <IconSymbol
                    ios_icon_name="hand.thumbsup.fill"
                    android_material_icon_name="thumb_up"
                    size={20}
                    color={message.feedback === 'positive' ? '#27AE60' : colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.feedbackButtonText,
                      message.feedback === 'positive' && styles.feedbackButtonTextActive,
                    ]}
                  >
                    Helpful
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.feedbackButton,
                    message.feedback === 'negative' && styles.feedbackButtonActive,
                  ]}
                  onPress={() => handleFeedback(message.id, 'negative')}
                  disabled={message.feedback !== undefined}
                >
                  <IconSymbol
                    ios_icon_name="hand.thumbsdown.fill"
                    android_material_icon_name="thumb_down"
                    size={20}
                    color={message.feedback === 'negative' ? '#E74C3C' : colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.feedbackButtonText,
                      message.feedback === 'negative' && styles.feedbackButtonTextActive,
                    ]}
                  >
                    Not Helpful
                  </Text>
                </Pressable>
              </View>
              {message.feedback && (
                <Text style={styles.feedbackThankYou}>
                  Thank you for your feedback! The Perpetual Learning Engine is learning from your input.
                </Text>
              )}
            </View>
          )}

          {/* Follow-Up Questions */}
          {message.isBot && message.followUpQuestions && message.followUpQuestions.length > 0 && (
            <View style={styles.followUpContainer}>
              <Text style={styles.followUpTitle}>
                💡 Continue Learning - Suggested Questions:
              </Text>
              {message.followUpQuestions.map((fq, index) => (
                <Pressable
                  key={fq.id}
                  style={styles.followUpButton}
                  onPress={() => handleFollowUpQuestion(message.id, fq.question)}
                >
                  <View style={styles.followUpNumber}>
                    <Text style={styles.followUpNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.followUpQuestion}>{fq.question}</Text>
                  <IconSymbol
                    ios_icon_name="arrow.right.circle.fill"
                    android_material_icon_name="arrow_circle_right"
                    size={20}
                    color={colors.primary}
                  />
                </Pressable>
              ))}
              <Text style={styles.followUpHint}>
                Tap a question to explore related topics and deepen your understanding
              </Text>
            </View>
          )}
          
          {/* Merck Manual Professional Knowledge Base Section */}
          {message.merckManualEntries && message.merckManualEntries.length > 0 && (
            <View style={styles.merckKnowledgeContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  ios_icon_name="book.closed.fill"
                  android_material_icon_name="menu_book"
                  size={18}
                  color="#0066CC"
                />
                <Text style={styles.merckKnowledgeSectionTitle}>Merck Manual Professional Knowledge Base</Text>
              </View>
              <Text style={styles.sectionSubtitle}>
                Comprehensive medical information synthesized from the Merck Manual Professional:
              </Text>
              {message.merckManualEntries.map((entry, index) => (
                <View key={index} style={styles.merckKnowledgeCard}>
                  <Text style={styles.merckKnowledgeTopic}>{entry.topic}</Text>
                  <Text style={styles.merckKnowledgeSystem}>{entry.system}</Text>
                  
                  <View style={styles.merckKnowledgeSection}>
                    <Text style={styles.merckKnowledgeLabel}>Pathophysiology:</Text>
                    <Text style={styles.merckKnowledgeContent}>{entry.pathophysiology}</Text>
                  </View>
                  
                  <View style={styles.merckKnowledgeSection}>
                    <Text style={styles.merckKnowledgeLabel}>Clinical Presentation:</Text>
                    <Text style={styles.merckKnowledgeContent}>{entry.clinicalPresentation}</Text>
                  </View>
                  
                  <View style={styles.merckKnowledgeSection}>
                    <Text style={styles.merckKnowledgeLabel}>Diagnostic Approach:</Text>
                    <Text style={styles.merckKnowledgeContent}>{entry.diagnosticApproach}</Text>
                  </View>
                  
                  <View style={styles.merckKnowledgeSection}>
                    <Text style={styles.merckKnowledgeLabel}>Treatment:</Text>
                    <Text style={styles.merckKnowledgeContent}>{entry.treatment}</Text>
                  </View>
                  
                  {entry.clinicalPearls.length > 0 && (
                    <View style={styles.merckKnowledgeSection}>
                      <Text style={styles.merckKnowledgeLabel}>Clinical Pearls:</Text>
                      {entry.clinicalPearls.map((pearl, pearlIndex) => (
                        <Text key={pearlIndex} style={styles.merckKnowledgePearl}>• {pearl}</Text>
                      ))}
                    </View>
                  )}
                  
                  <Pressable
                    style={styles.merckKnowledgeLink}
                    onPress={() => handleWebsitePress(entry.merckUrl)}
                  >
                    <IconSymbol
                      ios_icon_name="arrow.up.right.square.fill"
                      android_material_icon_name="open_in_new"
                      size={14}
                      color="#0066CC"
                    />
                    <Text style={styles.merckKnowledgeLinkText}>View full article on Merck Manual Professional</Text>
                  </Pressable>
                </View>
              ))}
            </View>
          )}

          {/* Flashcards Section */}
          {message.flashcards && message.flashcards.length > 0 && (
            <View style={styles.flashcardsContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  ios_icon_name="rectangle.stack.fill"
                  android_material_icon_name="style"
                  size={18}
                  color="#FF6B35"
                />
                <Text style={styles.flashcardsSectionTitle}>Related Clinical Flashcards</Text>
              </View>
              <Text style={styles.sectionSubtitle}>
                High-yield clinical information from our flashcard database:
              </Text>
              {message.flashcards.map((card, index) => (
                <View key={index} style={styles.flashcardCard}>
                  <View style={styles.flashcardHeader}>
                    <Text style={styles.flashcardSystem}>{card.system}</Text>
                    <Text style={styles.flashcardTopic}> • {card.topic}</Text>
                  </View>
                  <Text style={styles.flashcardFront}>{card.front}</Text>
                  {card.back.definition && (
                    <View style={styles.flashcardSection}>
                      <Text style={styles.flashcardLabel}>Definition:</Text>
                      <Text style={styles.flashcardContent}>{card.back.definition}</Text>
                    </View>
                  )}
                  {card.back.high_yield && (
                    <View style={styles.flashcardSection}>
                      <Text style={styles.flashcardLabel}>High-Yield:</Text>
                      <Text style={styles.flashcardContent}>{card.back.high_yield}</Text>
                    </View>
                  )}
                  {card.back.clinical_pearl && (
                    <View style={styles.flashcardSection}>
                      <Text style={styles.flashcardLabel}>Clinical Pearl:</Text>
                      <Text style={styles.flashcardContent}>{card.back.clinical_pearl}</Text>
                    </View>
                  )}
                  {card.back.treatment && (
                    <View style={styles.flashcardSection}>
                      <Text style={styles.flashcardLabel}>Treatment:</Text>
                      <Text style={styles.flashcardContent}>{card.back.treatment}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}

          {/* Merck Manual Professional Links Section */}
          {message.merckManualLinks && message.merckManualLinks.length > 0 && (
            <View style={styles.merckContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  ios_icon_name="book.closed.fill"
                  android_material_icon_name="menu_book"
                  size={18}
                  color="#0066CC"
                />
                <Text style={styles.merckSectionTitle}>Merck Manual Professional</Text>
              </View>
              <Text style={styles.sectionSubtitle}>
                Comprehensive, evidence-based medical information:
              </Text>
              {message.merckManualLinks.map((link, index) => (
                <Pressable
                  key={index}
                  style={styles.merckCard}
                  onPress={() => handleMerckLinkPress(link.url)}
                >
                  <View style={styles.merckHeader}>
                    <IconSymbol
                      ios_icon_name="doc.text.fill"
                      android_material_icon_name="description"
                      size={16}
                      color="#0066CC"
                    />
                    <Text style={styles.merckTitle} numberOfLines={2}>
                      {link.title}
                    </Text>
                  </View>
                  <Text style={styles.merckDescription} numberOfLines={2}>
                    {link.description}
                  </Text>
                  <View style={styles.merckLinkIndicator}>
                    <IconSymbol
                      ios_icon_name="arrow.up.right.square.fill"
                      android_material_icon_name="open_in_new"
                      size={14}
                      color="#0066CC"
                    />
                    <Text style={styles.merckLinkText}>Tap to view in Merck Manual</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          )}

          {/* Academic References Section */}
          {message.references && message.references.length > 0 && (
            <View style={styles.referencesContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  ios_icon_name="book.fill"
                  android_material_icon_name="book"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.sectionTitle}>Academic References</Text>
              </View>
              <Text style={styles.sectionSubtitle}>
                Peer-reviewed literature and clinical guidelines:
              </Text>
              {message.references.map((reference, index) => (
                <Pressable
                  key={index}
                  style={styles.referenceCard}
                  onPress={() => handleReferencePress(reference.link)}
                >
                  <View style={styles.referenceNumberContainer}>
                    <Text style={styles.referenceNumber}>[{index + 1}]</Text>
                  </View>
                  <View style={styles.referenceContent}>
                    <View style={styles.referenceHeader}>
                      <Text style={styles.referenceSystem}>{reference.system}</Text>
                      {reference.year && (
                        <Text style={styles.referenceYear}>({reference.year})</Text>
                      )}
                    </View>
                    <Text style={styles.referenceTopic}>{reference.topic}</Text>
                    <Text style={styles.referenceCitation} numberOfLines={3}>
                      {reference.citation}
                    </Text>
                    {reference.appliesTo && (
                      <Text style={styles.referenceAppliesTo} numberOfLines={2}>
                        Applies to: {reference.appliesTo}
                      </Text>
                    )}
                    {reference.link && (
                      <View style={styles.linkIndicator}>
                        <IconSymbol
                          ios_icon_name="link"
                          android_material_icon_name="link"
                          size={14}
                          color={colors.primary}
                        />
                        <Text style={styles.linkText}>Tap to view full article</Text>
                      </View>
                    )}
                  </View>
                </Pressable>
              ))}
            </View>
          )}

          {/* Guideline Websites Section */}
          {message.websites && message.websites.length > 0 && (
            <View style={styles.websitesContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  ios_icon_name="globe"
                  android_material_icon_name="public"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.sectionTitle}>Clinical Guidelines</Text>
              </View>
              <Text style={styles.sectionSubtitle}>
                Authoritative clinical practice guidelines:
              </Text>
              {message.websites.map((website, index) => (
                <Pressable
                  key={index}
                  style={styles.websiteCard}
                  onPress={() => handleWebsitePress(website.url)}
                >
                  <View style={styles.websiteHeader}>
                    <Text style={styles.websiteSystem}>{website.system}</Text>
                  </View>
                  <Text style={styles.websiteName}>{website.name}</Text>
                  <Text style={styles.websiteDescription} numberOfLines={2}>
                    {website.description}
                  </Text>
                  <View style={styles.websiteUrlContainer}>
                    <IconSymbol
                      ios_icon_name="arrow.up.right.square"
                      android_material_icon_name="open_in_new"
                      size={14}
                      color={colors.primary}
                    />
                    <Text style={styles.websiteUrl} numberOfLines={1}>
                      {website.url}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          )}
        </View>
        <Text style={styles.timestamp}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Medical Expert Chatbot',
          headerLargeTitle: false,
          headerRight: () => (
            systemNeedsRefresh ? (
              <Pressable
                onPress={handleRefreshSystemLogic}
                style={styles.headerButton}
              >
                <IconSymbol
                  ios_icon_name="arrow.clockwise.circle.fill"
                  android_material_icon_name="refresh"
                  size={28}
                  color={colors.primary}
                />
              </Pressable>
            ) : null
          ),
        }}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map(renderMessage)}
          
          {isTyping && (
            <View style={[styles.messageContainer, styles.botMessageContainer]}>
              <View style={[styles.messageBubble, styles.botBubble]}>
                <ActivityIndicator size="small" color={colors.text} />
              </View>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask about any medical topic..."
            placeholderTextColor={colors.textSecondary}
            multiline
            maxLength={500}
            returnKeyType="send"
            onSubmitEditing={handleSend}
            blurOnSubmit={false}
          />
          <Pressable
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <IconSymbol
              ios_icon_name="arrow.up.circle.fill"
              android_material_icon_name="arrow_circle_up"
              size={36}
              color={inputText.trim() ? colors.primary : colors.textSecondary}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      {/* Merck Manual WebView Modal */}
      <Modal
        visible={webViewVisible}
        animationType="slide"
        onRequestClose={() => setWebViewVisible(false)}
      >
        <View style={styles.webViewContainer}>
          <View style={styles.webViewHeader}>
            <Text style={styles.webViewTitle}>Merck Manual Professional</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setWebViewVisible(false)}
            >
              <IconSymbol
                ios_icon_name="xmark.circle.fill"
                android_material_icon_name="cancel"
                size={28}
                color={colors.text}
              />
            </Pressable>
          </View>
          <WebView
            source={{ uri: webViewUrl }}
            style={styles.webView}
            startInLoadingState={true}
            renderLoading={() => (
              <View style={styles.webViewLoading}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={styles.webViewLoadingText}>Loading Merck Manual...</Text>
              </View>
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerButton: {
    marginRight: 8,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    paddingBottom: 8,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '85%',
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 1,
  },
  botBubble: {
    backgroundColor: colors.card,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  botText: {
    color: colors.text,
  },
  userText: {
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
    marginHorizontal: 4,
  },
  feedbackContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  feedbackLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  feedbackButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  feedbackButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  feedbackButtonActive: {
    backgroundColor: colors.highlight,
    borderColor: colors.primary,
  },
  feedbackButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  feedbackButtonTextActive: {
    color: colors.primary,
  },
  feedbackThankYou: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: 8,
    textAlign: 'center',
  },
  followUpContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  followUpTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  followUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  followUpNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followUpNumberText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  followUpQuestion: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 18,
  },
  followUpHint: {
    fontSize: 11,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: 4,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
  },
  flashcardsSectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FF6B35',
  },
  merckSectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0066CC',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  merckKnowledgeContainer: {
    marginTop: 8,
    backgroundColor: '#E6F2FF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0066CC',
  },
  merckKnowledgeSectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0066CC',
  },
  merckKnowledgeCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0066CC',
    marginBottom: 8,
  },
  merckKnowledgeTopic: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0066CC',
    marginBottom: 4,
  },
  merckKnowledgeSystem: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 12,
  },
  merckKnowledgeSection: {
    marginTop: 10,
  },
  merckKnowledgeLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0066CC',
    marginBottom: 4,
  },
  merckKnowledgeContent: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  merckKnowledgePearl: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 19,
    marginTop: 4,
  },
  merckKnowledgeLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  merckKnowledgeLinkText: {
    fontSize: 13,
    color: '#0066CC',
    fontWeight: '600',
  },
  flashcardsContainer: {
    marginTop: 8,
    backgroundColor: '#FFF5F0',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  flashcardCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF6B35',
    marginBottom: 8,
  },
  flashcardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flashcardSystem: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B35',
  },
  flashcardTopic: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  flashcardFront: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  flashcardSection: {
    marginTop: 6,
  },
  flashcardLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 2,
  },
  flashcardContent: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  merckContainer: {
    marginTop: 8,
    backgroundColor: '#F0F7FF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0066CC',
  },
  merckCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0066CC',
    marginBottom: 8,
  },
  merckHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 6,
  },
  merckTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#0066CC',
    lineHeight: 20,
  },
  merckDescription: {
    fontSize: 13,
    color: colors.text,
    marginBottom: 8,
    lineHeight: 18,
  },
  merckLinkIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  merckLinkText: {
    fontSize: 12,
    color: '#0066CC',
    fontWeight: '600',
  },
  referencesContainer: {
    marginTop: 8,
  },
  referenceCard: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
    flexDirection: 'row',
    gap: 10,
  },
  referenceNumberContainer: {
    width: 32,
    alignItems: 'center',
    paddingTop: 2,
  },
  referenceNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  referenceContent: {
    flex: 1,
  },
  referenceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  referenceSystem: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  referenceYear: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  referenceTopic: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },
  referenceCitation: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
    marginBottom: 6,
  },
  referenceAppliesTo: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  linkIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  linkText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  websitesContainer: {
    marginTop: 8,
  },
  websiteCard: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },
  websiteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  websiteSystem: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'capitalize',
  },
  websiteName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  websiteDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 6,
    lineHeight: 18,
  },
  websiteUrlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  websiteUrl: {
    fontSize: 12,
    color: colors.primary,
    fontStyle: 'italic',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    paddingBottom: Platform.OS === 'ios' ? 100 : 110,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.text,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  webViewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 48,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  webViewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  closeButton: {
    padding: 4,
  },
  webView: {
    flex: 1,
  },
  webViewLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  webViewLoadingText: {
    marginTop: 12,
    fontSize: 16,
    color: colors.textSecondary,
  },
});
