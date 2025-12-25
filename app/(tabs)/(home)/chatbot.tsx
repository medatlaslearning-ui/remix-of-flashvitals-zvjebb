
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

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  websites?: Array<{
    name: string;
    url: string;
    description: string;
    system: string;
  }>;
  references?: AcademicReference[];
  merckManualLinks?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
  merckManualEntries?: MerckManualEntry[];
  flashcards?: Flashcard[];
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
      text: 'Hello! I\'m your Medical Expert Chatbot powered by the Merck Manual Professional and comprehensive medical resources.\n\n**My Enhanced Knowledge Base (Phase 3):**\n\n• **Merck Manual Professional** - Comprehensive medical encyclopedia with detailed disease information\n• **Clinical Flashcard Database** - High-yield, board-relevant information\n• **Academic References** - Peer-reviewed literature and clinical trials\n• **Clinical Practice Guidelines** - Evidence-based recommendations from leading organizations\n\n**I Provide Comprehensive, Textbook-Style Responses:**\n\n• **Expanded Explanations** - Detailed, original responses utilizing the Merck Manual as a textbook\n• **Comprehensive Coverage** - Pathophysiology, clinical findings, diagnostic approaches, and treatment plans presented in depth\n• **Contextual Relevance** - Broader keyword matching provides related information for thorough understanding\n• **Original Synthesis** - I generate original responses based on the Merck Manual, not direct copying\n• **Integrated Knowledge** - Seamlessly combines Merck Manual content with flashcard insights and clinical pearls\n• **Referenced Responses** - All information cites authoritative sources\n\n**According to Merck Manual Professional**, I can explain complex medical topics in clear, academically sound language with comprehensive detail, similar to how information is presented in medical textbooks.\n\n**Try Asking:**\n\n• "What is the pathophysiology of atrial fibrillation?" (detailed mechanistic explanation)\n• "What are the clinical findings of COPD?" (comprehensive clinical presentation)\n• "How do you diagnose acute kidney injury?" (complete diagnostic approach)\n• "What is the treatment for metabolic acidosis?" (evidence-based treatment strategies)\n• "Tell me about renal tubular acidosis" (comprehensive overview with related conditions)\n\n**Phase 3 Enhancements:**\n\nMy keyword matching has been optimized to provide comprehensive, textbook-style responses while maintaining accuracy. I now provide broader context and related information to enhance your understanding of disease processes, clinical presentations, and treatment approaches.',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const getMerckManualLinks = (query: string): Array<{title: string; url: string; description: string}> => {
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
    const matchedLinks: Array<{title: string; url: string; description: string}> = [];
    
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

  const generateDynamicResponse = (
    query: string,
    flashcards: Flashcard[],
    merckEntries: MerckManualEntry[],
    references: AcademicReference[],
    websites: any[],
    merckLinks: any[]
  ): string => {
    console.log('Generating dynamic response for:', query);
    console.log('Found flashcards:', flashcards.length);
    console.log('Found Merck entries:', merckEntries.length);
    console.log('Found references:', references.length);
    console.log('Found websites:', websites.length);
    console.log('Found Merck links:', merckLinks.length);

    // Detect query intent (what aspect of disease is being asked about)
    const lowerQuery = query.toLowerCase();
    const isPathophysiologyQuery = /pathophysiology|mechanism|cause|etiology|why|how does/i.test(query);
    const isClinicalQuery = /symptom|sign|present|clinical feature|manifestation|appear/i.test(query);
    const isDiagnosticQuery = /diagnos|test|workup|evaluation|assess|detect/i.test(query);
    const isTreatmentQuery = /treat|therap|manage|medication|drug|intervention/i.test(query);

    // Priority 1: Use Merck Manual Professional knowledge base (most comprehensive)
    if (merckEntries.length > 0) {
      const primaryEntry = merckEntries[0];
      let response = `**${primaryEntry.topic}**\n\n`;
      
      // If specific aspect requested, provide only that section with expanded detail
      if (isPathophysiologyQuery) {
        response += '**Pathophysiology and Disease Mechanisms:**\n\n';
        response += `${primaryEntry.pathophysiology}\n\n`;
        
        // PHASE 3: Include related entries for comprehensive understanding
        if (merckEntries.length > 1) {
          response += '**Related Pathophysiological Concepts:**\n\n';
          merckEntries.slice(1, 3).forEach((entry, index) => {
            response += `**${entry.topic}:**\n${entry.pathophysiology.substring(0, 300)}...\n\n`;
          });
        }
        
        // Add related flashcard insights for pathophysiology
        if (flashcards.length > 0) {
          const relevantCards = flashcards.filter(card => 
            card.back.definition && card.back.definition.length > 50
          );
          if (relevantCards.length > 0) {
            response += '**Additional Mechanistic Insights:**\n\n';
            relevantCards.slice(0, 3).forEach(card => {
              if (card.back.definition) {
                response += `• ${card.back.definition}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += '*This pathophysiological explanation is synthesized from the Merck Manual Professional, representing current understanding of disease mechanisms. The information is presented in a textbook-style format for comprehensive learning.*\n';
        return response;
      }
      
      if (isClinicalQuery) {
        response += '**Clinical Presentation and Manifestations:**\n\n';
        response += `${primaryEntry.clinicalPresentation}\n\n`;
        
        // PHASE 3: Include related entries for comprehensive clinical understanding
        if (merckEntries.length > 1) {
          response += '**Related Clinical Presentations:**\n\n';
          merckEntries.slice(1, 3).forEach((entry, index) => {
            response += `**${entry.topic}:**\n${entry.clinicalPresentation.substring(0, 300)}...\n\n`;
          });
        }
        
        // Add high-yield clinical features from flashcards
        if (flashcards.length > 0) {
          const clinicalCards = flashcards.filter(card => 
            card.back.high_yield || card.back.clinical_pearl
          );
          if (clinicalCards.length > 0) {
            response += '**High-Yield Clinical Features:**\n\n';
            clinicalCards.slice(0, 4).forEach(card => {
              if (card.back.high_yield) {
                response += `• ${card.back.high_yield}\n`;
              }
              if (card.back.clinical_pearl) {
                response += `  Clinical Pearl: ${card.back.clinical_pearl}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += '*This clinical presentation is based on the Merck Manual Professional and clinical experience documented in our flashcard database. The information is presented in a comprehensive, textbook-style format.*\n';
        return response;
      }
      
      if (isDiagnosticQuery) {
        response += '**Diagnostic Approach and Evaluation:**\n\n';
        response += `${primaryEntry.diagnosticApproach}\n\n`;
        
        // Add diagnostic pearls from flashcards
        if (flashcards.length > 0) {
          const diagnosticCards = flashcards.filter(card => 
            card.back.clinical_pearl && /diagnos|test|lab|imaging/i.test(card.back.clinical_pearl)
          );
          if (diagnosticCards.length > 0) {
            response += '**Diagnostic Pearls:**\n\n';
            diagnosticCards.slice(0, 2).forEach(card => {
              if (card.back.clinical_pearl) {
                response += `• ${card.back.clinical_pearl}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += '*This diagnostic approach follows evidence-based guidelines from the Merck Manual Professional.*\n';
        return response;
      }
      
      if (isTreatmentQuery) {
        response += '**Treatment and Management:**\n\n';
        response += `${primaryEntry.treatment}\n\n`;
        
        // PHASE 3: Include related treatment approaches for comprehensive understanding
        if (merckEntries.length > 1) {
          response += '**Related Treatment Approaches:**\n\n';
          merckEntries.slice(1, 3).forEach((entry, index) => {
            response += `**${entry.topic}:**\n${entry.treatment.substring(0, 300)}...\n\n`;
          });
        }
        
        // Add treatment insights from flashcards
        if (flashcards.length > 0) {
          const treatmentCards = flashcards.filter(card => card.back.treatment);
          if (treatmentCards.length > 0) {
            response += '**Additional Treatment Considerations:**\n\n';
            treatmentCards.slice(0, 3).forEach(card => {
              if (card.back.treatment) {
                response += `• ${card.back.treatment}\n`;
              }
            });
            response += '\n';
          }
        }
        
        response += '*Treatment recommendations are based on current evidence-based guidelines from the Merck Manual Professional. The information is presented in a comprehensive, textbook-style format for thorough understanding.*\n';
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
      
      // PHASE 3: Add related conditions for comprehensive textbook-style learning
      if (merckEntries.length > 1) {
        response += '**Related Conditions and Differential Diagnosis:**\n\n';
        merckEntries.slice(1, 3).forEach((entry, index) => {
          response += `**${entry.topic}:**\n`;
          response += `${entry.pathophysiology.substring(0, 200)}...\n\n`;
        });
      }
      
      // Add supplementary high-yield information from flashcards
      if (flashcards.length > 0) {
        response += '**Additional High-Yield Clinical Information:**\n\n';
        const uniquePearls = new Set<string>();
        flashcards.slice(0, 5).forEach(card => {
          if (card.back.clinical_pearl && !uniquePearls.has(card.back.clinical_pearl)) {
            uniquePearls.add(card.back.clinical_pearl);
            response += `• ${card.back.clinical_pearl}\n`;
          }
        });
        response += '\n';
      }
      
      response += '*This comprehensive information is synthesized from the Merck Manual Professional and supplemented with high-yield clinical insights from our flashcard database. The information is presented in a textbook-style format to provide thorough understanding of the disease process, clinical presentation, diagnostic approach, and evidence-based treatment strategies.*\n\n';
      
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
      
      // Provide targeted response based on query intent
      if (isPathophysiologyQuery && primaryCard.back.definition) {
        response += '**Pathophysiology/Definition:**\n\n';
        response += `${primaryCard.back.definition}\n\n`;
        
        // Add related definitions from other cards
        const relatedCards = flashcards.slice(1, 3).filter(card => card.back.definition);
        if (relatedCards.length > 0) {
          response += '**Related Concepts:**\n\n';
          relatedCards.forEach(card => {
            response += `• **${card.front}**: ${card.back.definition}\n`;
          });
          response += '\n';
        }
      } else if (isClinicalQuery && primaryCard.back.high_yield) {
        response += '**Clinical Features:**\n\n';
        response += `${primaryCard.back.high_yield}\n\n`;
        
        if (primaryCard.back.clinical_pearl) {
          response += '**Clinical Pearl:**\n\n';
          response += `${primaryCard.back.clinical_pearl}\n\n`;
        }
        
        // Add related clinical features
        const clinicalCards = flashcards.slice(1, 3).filter(card => card.back.high_yield);
        if (clinicalCards.length > 0) {
          response += '**Additional Clinical Features:**\n\n';
          clinicalCards.forEach(card => {
            response += `• ${card.back.high_yield}\n`;
          });
          response += '\n';
        }
      } else if (isTreatmentQuery && primaryCard.back.treatment) {
        response += '**Treatment:**\n\n';
        response += `${primaryCard.back.treatment}\n\n`;
        
        // Add related treatment information
        const treatmentCards = flashcards.slice(1, 3).filter(card => card.back.treatment);
        if (treatmentCards.length > 0) {
          response += '**Additional Treatment Considerations:**\n\n';
          treatmentCards.forEach(card => {
            response += `• ${card.back.treatment}\n`;
          });
          response += '\n';
        }
      } else {
        // Comprehensive response from flashcards
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
        
        // Add additional relevant information from other flashcards
        if (flashcards.length > 1) {
          response += '**Additional Clinical Information:**\n\n';
          for (let i = 1; i < Math.min(flashcards.length, 3); i++) {
            const card = flashcards[i];
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
      
      response += `*Source: Clinical flashcard database (${primaryCard.system} - ${primaryCard.topic})*\n\n`;
      
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

  const handleSend = () => {
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
    setTimeout(() => {
      console.log('Processing query:', currentQuery);
      
      // Search all data sources
      const merckEntries = searchMerckManualKnowledge(currentQuery);
      const relevantFlashcards = findRelevantFlashcards(currentQuery);
      const relevantReferences = findRelevantReferences(currentQuery);
      const relevantWebsites = findRelevantWebsites(currentQuery);
      const merckManualLinks = getMerckManualLinks(currentQuery);
      
      console.log('Search results:');
      console.log('- Merck entries:', merckEntries.length);
      if (merckEntries.length > 0) {
        console.log('  Top Merck entry:', merckEntries[0].topic);
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
        merckManualLinks
      );

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        merckManualEntries: merckEntries.length > 0 ? merckEntries : undefined,
        flashcards: relevantFlashcards.length > 0 ? relevantFlashcards : undefined,
        references: relevantReferences.length > 0 ? relevantReferences : undefined,
        websites: relevantWebsites.length > 0 ? relevantWebsites : undefined,
        merckManualLinks: merckManualLinks.length > 0 ? merckManualLinks : undefined,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
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
