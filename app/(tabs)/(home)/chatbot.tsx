
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
import { searchACGGuidelines, type ACGGuidelineEntry } from '@/data/acgGuidelinesKnowledge';
import { searchADAGuidelines, type ADAGuidelineEntry } from '@/data/adaGuidelinesKnowledge';
import { searchEndocrineGuidelines, type EndocrineGuidelineEntry } from '@/data/endocrineGuidelinesKnowledge';
import { searchNCCNGuidelines, type NCCNGuidelineEntry } from '@/data/nccnGuidelinesKnowledge';
import { searchIDSAGuidelines, type IDSAGuidelineEntry } from '@/data/idsaGuidelinesKnowledge';
import { searchASAGuidelines, type ASAGuidelineEntry } from '@/data/asaGuidelinesKnowledge';
import { searchACSTraumaGuidelines, type ACSTraumaGuidelineEntry } from '@/data/acsTraumaGuidelinesKnowledge';
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
import { synthesizerEngine } from '@/data/synthesizerEngine';
import { useFeedback } from '@/app/integrations/supabase/hooks/useFeedback';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { validateFeedback, type UserFeedback } from '@/data/supabaseUsageRules';

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
  acgGuidelines?: ACGGuidelineEntry[];
  adaGuidelines?: ADAGuidelineEntry[];
  endocrineGuidelines?: EndocrineGuidelineEntry[];
  nccnGuidelines?: NCCNGuidelineEntry[];
  idsaGuidelines?: IDSAGuidelineEntry[];
  asaGuidelines?: ASAGuidelineEntry[];
  acsTraumaGuidelines?: ACSTraumaGuidelineEntry[];
  flashcards?: Flashcard[];
  interactionId?: string;
  responseId?: string;
  feedback?: 'positive' | 'negative';
  feedbackReversible?: boolean;
  followUpQuestions?: FollowUpQuestion[];
  system?: string;
  synthesizerMetadata?: {
    quality: number;
    processingTime: number;
    contentBleedingRisk: number;
    consistencyScore?: number;
    consistencyValid?: boolean;
    hasConsistencyCheck?: boolean;
  };
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

// Feedback reversal window (30 seconds)
const FEEDBACK_REVERSAL_WINDOW_MS = 30000;

export default function ChatbotScreen() {
  const { user } = useAuth();
  const { submitFeedback, submitting } = useFeedback();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Medical Expert Chatbot powered by the **Synthesizer Engine** with figure-eight data flow.\n\n**🔄 Synthesizer Engine Architecture:**\n\nI use a sophisticated figure-eight data flow with one-way valves to ensure accurate, focused responses:\n\n• **Valve 1** - Your question flows into the query processor\n• **Valve 2** - Core medical knowledge flows into the knowledge retriever\n• **Intersection Point** - Your query meets the knowledge base for synthesis\n• **Valve 3** - Synthesized information flows to response generation\n• **Refinement Loop** - Response is refined for quality and accuracy\n• **Valve 4** - Final response flows to you (no backflow)\n\nThis architecture prevents content bleeding and ensures you get precise, relevant information.\n\n**📚 Complete Knowledge Base:**\n\n• **Cardiology** - Arrhythmias, heart failure, ischemic heart disease, valvular disorders\n• **Pulmonary** - Asthma, COPD, pneumonia, interstitial lung diseases\n• **Gastroenterology** - GI disorders, liver disease, IBD, pancreatic conditions\n• **Endocrine** - Diabetes, thyroid disorders, adrenal disorders\n• **Hematology** - Anemias, bleeding disorders, thrombotic disorders, malignancies\n• **Renal** - AKI, CKD, glomerular diseases, electrolyte disorders\n• **Neurology** - Stroke, seizures, movement disorders, dementia, MS\n• **Infectious Disease** - Bacterial, viral, fungal, parasitic infections\n• **Emergency Medicine** - Shock, trauma, cardiovascular emergencies, toxicology\n• **Urology** - Urinary tract disorders, prostate conditions, kidney stones\n\n**📋 Clinical Practice Guidelines:**\n\n• ACC, AHA, ESC, HFSA, HRS, SCAI, EACTS (Cardiology)\n• ATS, CHEST, SCCM (Pulmonary/Critical Care)\n• KDIGO, NIDDK (Renal/Nephrology)\n• ACG (Gastroenterology)\n• ADA, Endocrine Society (Endocrine)\n• NCCN (Hematology/Oncology)\n• IDSA (Infectious Disease)\n• ASA (Stroke/Neurology)\n• ACS Trauma Programs (Emergency Medicine)\n\n**🎯 Ask Specific Questions:**\n\n• "What is the **pathophysiology** of..."\n• "What are the **clinical findings** of..."\n• "How do you **diagnose**..."\n• "What is the **treatment** for..."\n• "What are the **guidelines** for..."\n\n**💡 Natural Conversation:**\n\nI can also engage in normal conversation! Feel free to say hello, ask follow-up questions, or thank me. The synthesizer engine understands context and intent.\n\n**🔐 Feedback Guardrails:**\n\nYour feedback (thumbs up/down) is stored securely in Supabase and used ONLY to personalize HOW responses are delivered (length, depth, style), NOT to change medical facts. You can reverse feedback within 30 seconds.\n\n**✅ Enhanced Quality Controls:**\n\n• Improved keyword specificity to prevent condition confusion\n• Enhanced error handling for robust performance\n• Better distinction between similar conditions (e.g., COPD vs Asthma)\n• Comprehensive validation at every step\n\nLet\'s begin your medical learning journey!',
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
    try {
      const health = perpetualLearningEngine.getSystemHealth();
      if (health.needsRepair) {
        setSystemNeedsRefresh(true);
      }
    } catch (error) {
      console.error('[CHATBOT] Error checking system health:', error);
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
      endocrine: ['diabetes', 'thyroid', 'adrenal', 'pituitary', 'hormone', 'insulin', 'glucose', 'metabolic', 'hypothyroidism', 'hyperthyroidism'],
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

  const handleSend = async () => {
    if (!inputText.trim()) {
      return;
    }

    console.log('[CHATBOT] handleSend called with text:', inputText);

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

    // Process the query through the synthesizer engine
    setTimeout(async () => {
      console.log('[CHATBOT] Processing query through synthesizer engine:', currentQuery);
      
      try {
        // Get all flashcards
        const allFlashcards = getAllFlashcards();
        
        // Process through synthesizer engine
        const synthesizerOutput = await synthesizerEngine.processQuery(
          currentQuery,
          allFlashcards
        );
        
        console.log('[CHATBOT] Synthesizer output:', {
          quality: synthesizerOutput.quality,
          processingTime: synthesizerOutput.metadata.processingTime,
          bleedingRisk: synthesizerOutput.metadata.contentBleedingRisk,
        });
        
        // Search all data sources for additional context
        const merckEntries = searchMerckManualKnowledge(currentQuery);
        const isGuidelineQuery = /guideline|recommendation|class|evidence|acc|aha|esc|hfsa|hrs|scai|eacts|ats|chest|sccm|kdigo|niddk|acg|ada|endocrine society|nccn|idsa|asa|acs|american college|american heart|european society/i.test(currentQuery);
        
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
        const acgGuidelines = isGuidelineQuery ? searchACGGuidelines(currentQuery) : [];
        const adaGuidelines = isGuidelineQuery ? searchADAGuidelines(currentQuery) : [];
        const endocrineGuidelines = isGuidelineQuery ? searchEndocrineGuidelines(currentQuery) : [];
        const nccnGuidelines = isGuidelineQuery ? searchNCCNGuidelines(currentQuery) : [];
        const idsaGuidelines = isGuidelineQuery ? searchIDSAGuidelines(currentQuery) : [];
        const asaGuidelines = isGuidelineQuery ? searchASAGuidelines(currentQuery) : [];
        const acsTraumaGuidelines = isGuidelineQuery ? searchACSTraumaGuidelines(currentQuery) : [];
        
        const relevantReferences = findRelevantReferences(currentQuery);
        const relevantWebsites = findRelevantWebsites(currentQuery);
        const merckManualLinks = getMerckManualLinks(currentQuery);
        
        // Detect medical system
        const system = detectMedicalSystem(currentQuery, merckEntries);

        // Generate unique response ID for Supabase feedback
        const responseId = `resp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Ingest interaction into Perpetual Learning Engine
        const interactionId = await perpetualLearningEngine.ingestInteraction(
          currentQuery,
          synthesizerOutput.response,
          system
        );

        // Generate follow-up questions
        const followUpQuestions = perpetualLearningEngine.generateFollowUpQuestions(
          currentQuery,
          synthesizerOutput.response,
          system
        );

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: synthesizerOutput.response,
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
          acgGuidelines: acgGuidelines.length > 0 ? acgGuidelines : undefined,
          adaGuidelines: adaGuidelines.length > 0 ? adaGuidelines : undefined,
          endocrineGuidelines: endocrineGuidelines.length > 0 ? endocrineGuidelines : undefined,
          nccnGuidelines: nccnGuidelines.length > 0 ? nccnGuidelines : undefined,
          idsaGuidelines: idsaGuidelines.length > 0 ? idsaGuidelines : undefined,
          asaGuidelines: asaGuidelines.length > 0 ? asaGuidelines : undefined,
          acsTraumaGuidelines: acsTraumaGuidelines.length > 0 ? acsTraumaGuidelines : undefined,
          references: relevantReferences.length > 0 ? relevantReferences : undefined,
          websites: relevantWebsites.length > 0 ? relevantWebsites : undefined,
          merckManualLinks: merckManualLinks.length > 0 ? merckManualLinks : undefined,
          interactionId,
          responseId,
          feedbackReversible: true,
          followUpQuestions,
          system,
          synthesizerMetadata: {
            quality: synthesizerOutput.quality,
            processingTime: synthesizerOutput.metadata.processingTime,
            contentBleedingRisk: synthesizerOutput.metadata.contentBleedingRisk,
            consistencyScore: synthesizerOutput.metadata.consistencyValidation?.score,
            consistencyValid: synthesizerOutput.metadata.consistencyValidation?.isValid,
            hasConsistencyCheck: synthesizerOutput.metadata.consistencyValidation?.hasConsistencyCheck,
          },
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);

        // Set timer to disable feedback reversal after 30 seconds
        setTimeout(() => {
          setMessages(prev =>
            prev.map(m =>
              m.id === botMessage.id ? { ...m, feedbackReversible: false } : m
            )
          );
        }, FEEDBACK_REVERSAL_WINDOW_MS);

        // Check if system needs refresh after interaction
        await checkSystemHealth();
      } catch (error) {
        console.error('[CHATBOT] ERROR processing query:', error);
        setIsTyping(false);
        
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'I apologize, but I encountered an error processing your query. This has been logged for review. Please try rephrasing your question or ask about a different topic.',
          isBot: true,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, errorMessage]);
      }
    }, 1500);
  };

  const handleFeedback = async (messageId: string, feedback: 'positive' | 'negative') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    const message = messages.find(m => m.id === messageId);
    if (!message || !message.responseId) {
      console.error('[CHATBOT] Message or response ID not found');
      Alert.alert('Error', 'Cannot submit feedback for this message');
      return;
    }

    // Check if user is authenticated
    if (!user) {
      Alert.alert(
        'Authentication Required',
        'Please sign in to provide feedback. Your feedback helps us personalize your learning experience.',
        [{ text: 'OK' }]
      );
      return;
    }

    // If negative feedback, ask for confirmation (double-check)
    if (feedback === 'negative') {
      Alert.alert(
        'Negative Feedback',
        'Are you sure this response was not helpful? This will help us improve future responses.\n\n⚠️ Note: Feedback influences HOW responses are delivered (length, depth, style), NOT medical facts.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Confirm',
            style: 'destructive',
            onPress: async () => {
              await submitFeedbackToSupabase(message, feedback);
            },
          },
        ]
      );
    } else {
      // Positive feedback - submit immediately
      await submitFeedbackToSupabase(message, feedback);
    }
  };

  const submitFeedbackToSupabase = async (message: Message, feedback: 'positive' | 'negative') => {
    try {
      console.log('[CHATBOT] Submitting feedback to Supabase');
      
      // Validate feedback data before submitting (GUARDRAIL #5)
      const feedbackData: UserFeedback = {
        userId: user!.id,
        responseId: message.responseId!,
        feedbackType: feedback === 'positive' ? 'thumbs_up' : 'thumbs_down',
        responseTopic: message.system,
        responseSystem: message.system,
      };

      const validation = validateFeedback(feedbackData);
      
      if (!validation.isValid) {
        console.error('[CHATBOT] Validation failed:', validation.violations);
        Alert.alert(
          'Validation Error',
          'Feedback data validation failed. Please try again.'
        );
        return;
      }

      console.log('[CHATBOT] Validation passed, submitting to Supabase');

      // Submit to Supabase
      await submitFeedback(
        message.responseId!,
        feedback === 'positive' ? 'thumbs_up' : 'thumbs_down',
        {
          topic: message.system,
          system: message.system,
        }
      );

      // Also record in Perpetual Learning Engine for local learning
      if (message.interactionId) {
        await perpetualLearningEngine.recordFeedback(
          message.interactionId,
          feedback,
          feedback === 'negative'
        );
      }

      // Update message with feedback
      setMessages(prev =>
        prev.map(m =>
          m.id === message.id ? { ...m, feedback } : m
        )
      );

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      // Show appropriate message
      if (feedback === 'negative') {
        Alert.alert(
          'Feedback Recorded',
          'Thank you for your feedback. The system will use this to personalize HOW future responses are delivered (not WHAT is medically true).\n\n✓ Stored securely in Supabase\n✓ Used only for presentation preferences\n✓ Does not change medical facts'
        );
      }

      // Check if system needs refresh
      await checkSystemHealth();
    } catch (error) {
      console.error('[CHATBOT] Error submitting feedback:', error);
      
      // Fallback: If Supabase is unavailable, still record locally
      if (message.interactionId) {
        try {
          await perpetualLearningEngine.recordFeedback(
            message.interactionId,
            feedback,
            feedback === 'negative'
          );
          
          setMessages(prev =>
            prev.map(m =>
              m.id === message.id ? { ...m, feedback } : m
            )
          );

          Alert.alert(
            'Feedback Recorded Locally',
            'Supabase is currently unavailable, but your feedback has been recorded locally. It will sync when the connection is restored.'
          );
        } catch (localError) {
          console.error('[CHATBOT] Error recording feedback locally:', localError);
          Alert.alert(
            'Error',
            'Failed to submit feedback. Please try again later.'
          );
        }
      } else {
        Alert.alert(
          'Error',
          'Failed to submit feedback. Please try again later.'
        );
      }
    }
  };

  const handleFollowUpQuestion = async (messageId: string, question: string) => {
    try {
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
    } catch (error) {
      console.error('[CHATBOT] Error handling follow-up question:', error);
      Alert.alert('Error', 'Failed to process follow-up question. Please try again.');
    }
  };

  const handleRefreshSystemLogic = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    Alert.alert(
      'Refresh System Logic',
      'This will refresh the Perpetual Learning Engine and run stress tests on the Synthesizer Engine. Continue?',
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
              // Refresh perpetual learning engine
              await perpetualLearningEngine.refreshSystemLogic();
              
              // Run synthesizer stress test
              const stressTestResults = await synthesizerEngine.runStressTest();
              
              setIsTyping(false);
              setSystemNeedsRefresh(false);
              
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              
              Alert.alert(
                'System Refreshed',
                `Perpetual Learning Engine refreshed successfully.\n\nSynthesizer Engine Stress Test:\n• Passed: ${stressTestResults.passed}\n• Failed: ${stressTestResults.failed}\n• Average Quality: ${Math.round(stressTestResults.averageQuality)}%\n• Average Processing Time: ${Math.round(stressTestResults.averageProcessingTime)}ms`
              );
            } catch (error) {
              console.error('[CHATBOT] Error refreshing system:', error);
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
    console.log('[CHATBOT] Opening website:', url);
    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error('[CHATBOT] Error opening URL:', error);
      Alert.alert('Error', 'Failed to open the website');
    }
  };

  const handleReferencePress = async (link?: string) => {
    if (!link) {
      Alert.alert('Info', 'No direct link available for this reference');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('[CHATBOT] Opening reference:', link);
    
    try {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      } else {
        Alert.alert('Error', `Cannot open URL: ${link}`);
      }
    } catch (error) {
      console.error('[CHATBOT] Error opening URL:', error);
      Alert.alert('Error', 'Failed to open the reference');
    }
  };

  const handleMerckLinkPress = (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('[CHATBOT] Opening Merck Manual:', url);
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
          
          {/* Synthesizer Metadata */}
          {message.isBot && message.synthesizerMetadata && (
            <View style={styles.synthesizerMetadata}>
              <Text style={styles.metadataTitle}>⚙️ Synthesizer Engine Metrics:</Text>
              <View style={styles.metadataRow}>
                <Text style={styles.metadataLabel}>Quality:</Text>
                <Text style={[
                  styles.metadataValue,
                  message.synthesizerMetadata.quality >= 80 ? styles.metadataGood :
                  message.synthesizerMetadata.quality >= 60 ? styles.metadataWarning :
                  styles.metadataBad
                ]}>
                  {Math.round(message.synthesizerMetadata.quality)}%
                </Text>
              </View>
              <View style={styles.metadataRow}>
                <Text style={styles.metadataLabel}>Processing Time:</Text>
                <Text style={styles.metadataValue}>
                  {message.synthesizerMetadata.processingTime}ms
                </Text>
              </View>
              <View style={styles.metadataRow}>
                <Text style={styles.metadataLabel}>Content Bleeding Risk:</Text>
                <Text style={[
                  styles.metadataValue,
                  message.synthesizerMetadata.contentBleedingRisk < 30 ? styles.metadataGood :
                  message.synthesizerMetadata.contentBleedingRisk < 60 ? styles.metadataWarning :
                  styles.metadataBad
                ]}>
                  {Math.round(message.synthesizerMetadata.contentBleedingRisk)}%
                </Text>
              </View>
              {message.synthesizerMetadata.consistencyScore !== undefined && (
                <View style={styles.metadataRow}>
                  <Text style={styles.metadataLabel}>Consistency Score:</Text>
                  <Text style={[
                    styles.metadataValue,
                    message.synthesizerMetadata.consistencyScore >= 80 ? styles.metadataGood :
                    message.synthesizerMetadata.consistencyScore >= 60 ? styles.metadataWarning :
                    styles.metadataBad
                  ]}>
                    {Math.round(message.synthesizerMetadata.consistencyScore)}%
                  </Text>
                </View>
              )}
              {message.synthesizerMetadata.hasConsistencyCheck !== undefined && (
                <View style={styles.metadataRow}>
                  <Text style={styles.metadataLabel}>Consistency Check:</Text>
                  <Text style={[
                    styles.metadataValue,
                    message.synthesizerMetadata.hasConsistencyCheck ? styles.metadataGood : styles.metadataBad
                  ]}>
                    {message.synthesizerMetadata.hasConsistencyCheck ? '✓ Performed' : '✗ Not Performed'}
                  </Text>
                </View>
              )}
            </View>
          )}
          
          {/* Feedback Buttons for Bot Messages */}
          {message.isBot && message.responseId && (
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackLabel}>
                Was this response helpful?
                {message.feedbackReversible && message.feedback && (
                  <Text style={styles.feedbackReversibleHint}> (reversible for 30s)</Text>
                )}
              </Text>
              <View style={styles.feedbackButtons}>
                <Pressable
                  style={[
                    styles.feedbackButton,
                    message.feedback === 'positive' && styles.feedbackButtonActive,
                  ]}
                  onPress={() => handleFeedback(message.id, 'positive')}
                  disabled={message.feedback !== undefined && !message.feedbackReversible}
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
                  disabled={message.feedback !== undefined && !message.feedbackReversible}
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
                <View style={styles.feedbackInfoBox}>
                  <Text style={styles.feedbackThankYou}>
                    ✓ Feedback recorded in Supabase
                  </Text>
                  <Text style={styles.feedbackGuardrail}>
                    🔐 Guardrail: Feedback influences HOW responses are delivered (length, depth, style), NOT medical facts
                  </Text>
                  {!message.feedbackReversible && (
                    <Text style={styles.feedbackLocked}>
                      🔒 Feedback locked (30s window expired)
                    </Text>
                  )}
                </View>
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
                <Text style={styles.typingText}>Synthesizing response...</Text>
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
            enablesReturnKeyAutomatically={true}
            onSubmitEditing={() => {
              console.log('[CHATBOT] onSubmitEditing triggered');
              handleSend();
            }}
          />
          <Pressable
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={() => {
              console.log('[CHATBOT] Send button pressed');
              handleSend();
            }}
            disabled={!inputText.trim()}
          >
            <IconSymbol
              ios_icon_name="arrow.up.circle.fill"
              android_material_icon_name="send"
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
  typingText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 8,
    fontStyle: 'italic',
  },
  synthesizerMetadata: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  metadataTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  metadataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  metadataLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  metadataValue: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  metadataGood: {
    color: '#27AE60',
  },
  metadataWarning: {
    color: '#F39C12',
  },
  metadataBad: {
    color: '#E74C3C',
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
  feedbackReversibleHint: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.textSecondary,
    fontStyle: 'italic',
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
  feedbackInfoBox: {
    marginTop: 12,
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  feedbackThankYou: {
    fontSize: 12,
    color: '#27AE60',
    fontWeight: '600',
    marginBottom: 4,
  },
  feedbackGuardrail: {
    fontSize: 11,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: 16,
    marginBottom: 4,
  },
  feedbackLocked: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: '600',
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
    padding: 4,
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
