
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
  diseaseDiscussion?: string;
  merckManualLinks?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Medical Guidelines Chatbot with integrated Merck Manual Professional access.\n\nI can help you understand disease processes and provide evidence-based information from:\n• Medical guidelines and academic references\n• Merck Manual Professional (comprehensive medical encyclopedia)\n• Clinical practice guidelines\n\nAsk me about any medical topic, such as:\n• Disease processes (e.g., "Tell me about congestive heart failure")\n• Management strategies (e.g., "How is diabetes managed?")\n• Clinical guidelines (e.g., "What are the guidelines for stroke?")\n• Infectious diseases (e.g., "Tell me about sepsis management")\n\nI\'ll provide detailed information and direct links to Merck Manual Professional for comprehensive coverage.',
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
      'heart failure': [
        {
          title: 'Heart Failure - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/heart-failure/heart-failure-hf`,
          description: 'Comprehensive overview of heart failure pathophysiology, diagnosis, and management'
        },
        {
          title: 'Acute Decompensated Heart Failure',
          url: `${baseUrl}/cardiovascular-disorders/heart-failure/acute-decompensated-heart-failure-adhf`,
          description: 'Management of acute heart failure exacerbations'
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
        },
        {
          title: 'Type 1 Diabetes',
          url: `${baseUrl}/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm`,
          description: 'Type 1 diabetes pathophysiology and treatment'
        },
        {
          title: 'Type 2 Diabetes',
          url: `${baseUrl}/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm`,
          description: 'Type 2 diabetes management and complications'
        }
      ],
      'stroke': [
        {
          title: 'Stroke Overview - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/stroke/overview-of-stroke`,
          description: 'Comprehensive stroke pathophysiology, diagnosis, and acute management'
        },
        {
          title: 'Ischemic Stroke',
          url: `${baseUrl}/neurologic-disorders/stroke/ischemic-stroke`,
          description: 'Ischemic stroke evaluation and treatment'
        },
        {
          title: 'Hemorrhagic Stroke',
          url: `${baseUrl}/neurologic-disorders/stroke/hemorrhagic-stroke`,
          description: 'Intracerebral and subarachnoid hemorrhage management'
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
        },
        {
          title: 'Community-Acquired Pneumonia',
          url: `${baseUrl}/pulmonary-disorders/pneumonia/community-acquired-pneumonia`,
          description: 'CAP evaluation and antibiotic selection'
        },
        {
          title: 'Hospital-Acquired Pneumonia',
          url: `${baseUrl}/pulmonary-disorders/pneumonia/hospital-acquired-pneumonia`,
          description: 'HAP and VAP management strategies'
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
        },
        {
          title: 'Hypertensive Emergencies',
          url: `${baseUrl}/cardiovascular-disorders/hypertension/hypertensive-emergencies`,
          description: 'Management of hypertensive crises'
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
      'mi': [
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
      'pe': [
        {
          title: 'Pulmonary Embolism - Merck Manual Professional',
          url: `${baseUrl}/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe`,
          description: 'PE diagnosis and management strategies'
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
      'cirrhosis': [
        {
          title: 'Cirrhosis - Merck Manual Professional',
          url: `${baseUrl}/hepatic-and-biliary-disorders/fibrosis-and-cirrhosis/cirrhosis`,
          description: 'Cirrhosis complications and management'
        }
      ],
      'hepatitis': [
        {
          title: 'Viral Hepatitis Overview - Merck Manual Professional',
          url: `${baseUrl}/hepatic-and-biliary-disorders/hepatitis/overview-of-acute-viral-hepatitis`,
          description: 'Hepatitis A, B, C diagnosis and treatment'
        }
      ],
      'pancreatitis': [
        {
          title: 'Acute Pancreatitis - Merck Manual Professional',
          url: `${baseUrl}/gastrointestinal-disorders/pancreatitis/acute-pancreatitis`,
          description: 'Acute pancreatitis diagnosis and management'
        }
      ],
      'gerd': [
        {
          title: 'Gastroesophageal Reflux Disease - Merck Manual Professional',
          url: `${baseUrl}/gastrointestinal-disorders/esophageal-and-swallowing-disorders/gastroesophageal-reflux-disease-gerd`,
          description: 'GERD diagnosis and treatment options'
        }
      ],
      'ibd': [
        {
          title: 'Inflammatory Bowel Disease Overview - Merck Manual Professional',
          url: `${baseUrl}/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/overview-of-inflammatory-bowel-disease`,
          description: 'Crohn disease and ulcerative colitis management'
        }
      ],
      'crohn': [
        {
          title: 'Crohn Disease - Merck Manual Professional',
          url: `${baseUrl}/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/crohn-disease`,
          description: 'Crohn disease pathophysiology and management'
        }
      ],
      'ulcerative colitis': [
        {
          title: 'Ulcerative Colitis - Merck Manual Professional',
          url: `${baseUrl}/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/ulcerative-colitis`,
          description: 'Ulcerative colitis diagnosis and treatment'
        }
      ],
      'hypothyroidism': [
        {
          title: 'Hypothyroidism - Merck Manual Professional',
          url: `${baseUrl}/endocrine-and-metabolic-disorders/thyroid-disorders/hypothyroidism`,
          description: 'Hypothyroidism diagnosis and levothyroxine management'
        }
      ],
      'hyperthyroidism': [
        {
          title: 'Hyperthyroidism - Merck Manual Professional',
          url: `${baseUrl}/endocrine-and-metabolic-disorders/thyroid-disorders/hyperthyroidism`,
          description: 'Hyperthyroidism causes and treatment options'
        }
      ],
      'seizure': [
        {
          title: 'Seizure Disorders - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/seizure-disorders/seizure-disorders`,
          description: 'Epilepsy classification and antiepileptic drug selection'
        }
      ],
      'epilepsy': [
        {
          title: 'Seizure Disorders - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/seizure-disorders/seizure-disorders`,
          description: 'Epilepsy classification and antiepileptic drug selection'
        }
      ],
      'dementia': [
        {
          title: 'Dementia Overview - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/delirium-and-dementia/dementia`,
          description: 'Dementia diagnosis and management approach'
        }
      ],
      'alzheimer': [
        {
          title: 'Alzheimer Disease - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/delirium-and-dementia/alzheimer-disease`,
          description: 'Alzheimer disease pathophysiology and treatment'
        }
      ],
      'parkinson': [
        {
          title: 'Parkinson Disease - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/movement-and-cerebellar-disorders/parkinson-disease`,
          description: 'Parkinson disease diagnosis and treatment'
        }
      ],
      'depression': [
        {
          title: 'Depressive Disorders - Merck Manual Professional',
          url: `${baseUrl}/psychiatric-disorders/mood-disorders/depressive-disorders`,
          description: 'Depression diagnosis and treatment options'
        }
      ],
      'anxiety': [
        {
          title: 'Anxiety Disorders - Merck Manual Professional',
          url: `${baseUrl}/psychiatric-disorders/anxiety-and-stressor-related-disorders/overview-of-anxiety-disorders`,
          description: 'Anxiety disorder classification and management'
        }
      ],
      'tuberculosis': [
        {
          title: 'Tuberculosis - Merck Manual Professional',
          url: `${baseUrl}/infectious-diseases/mycobacteria/tuberculosis-tb`,
          description: 'TB diagnosis, treatment, and drug-resistant TB management'
        }
      ],
      'tb': [
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
      'covid': [
        {
          title: 'COVID-19 - Merck Manual Professional',
          url: `${baseUrl}/infectious-diseases/respiratory-viruses/covid-19`,
          description: 'COVID-19 diagnosis, treatment, and management'
        }
      ],
      'endocarditis': [
        {
          title: 'Infective Endocarditis - Merck Manual Professional',
          url: `${baseUrl}/cardiovascular-disorders/endocarditis/infective-endocarditis`,
          description: 'Infective endocarditis diagnosis and antibiotic therapy'
        }
      ],
      'malaria': [
        {
          title: 'Malaria - Merck Manual Professional',
          url: `${baseUrl}/infectious-diseases/extraintestinal-protozoa/malaria`,
          description: 'Malaria diagnosis, treatment, and prophylaxis'
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
      cardiology: ['heart', 'cardiac', 'cardio', 'arrhythmia', 'afib', 'valve', 'coronary', 'myocardial', 'hypertension', 'blood pressure', 'chf', 'congestive heart failure', 'heart failure', 'mi', 'myocardial infarction'],
      pulmonary: ['lung', 'pulmonary', 'respiratory', 'asthma', 'copd', 'pneumonia', 'breathing', 'airway', 'bronch', 'pe', 'pulmonary embolism'],
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

  const generateDiseaseDiscussion = (query: string, references: AcademicReference[], websites: any[], merckLinks: any[]): string => {
    const lowerQuery = query.toLowerCase();
    
    // Detect if this is a disease process question
    const isDiseaseQuestion = 
      lowerQuery.includes('disease process') ||
      lowerQuery.includes('pathophysiology') ||
      lowerQuery.includes('tell me about') ||
      lowerQuery.includes('what is') ||
      lowerQuery.includes('explain') ||
      lowerQuery.includes('management') ||
      lowerQuery.includes('treatment') ||
      lowerQuery.includes('how is') ||
      lowerQuery.includes('guidelines') ||
      lowerQuery.includes('diagnosis') ||
      lowerQuery.includes('symptoms') ||
      lowerQuery.includes('signs');

    if (!isDiseaseQuestion || (references.length === 0 && websites.length === 0 && merckLinks.length === 0)) {
      return '';
    }

    // Comprehensive disease-specific responses
    
    // Congestive Heart Failure
    if (lowerQuery.includes('heart failure') || lowerQuery.includes('chf') || lowerQuery.includes('congestive heart failure')) {
      return `**Congestive Heart Failure (CHF): Comprehensive Overview**

**Pathophysiology:**
Heart failure is a clinical syndrome resulting from structural or functional cardiac disorders that impair the ability of the ventricle to fill with or eject blood. It can be classified as heart failure with reduced ejection fraction (HFrEF, EF <40%) or preserved ejection fraction (HFpEF, EF ≥50%).

The pathophysiology involves:
- Impaired cardiac output leading to inadequate tissue perfusion
- Neurohormonal activation (RAAS, sympathetic nervous system)
- Ventricular remodeling and progressive cardiac dysfunction
- Fluid retention and systemic/pulmonary congestion

**Clinical Presentation:**
- Dyspnea (exertional, orthopnea, paroxysmal nocturnal dyspnea)
- Fatigue and exercise intolerance
- Peripheral edema and weight gain
- Elevated jugular venous pressure
- Pulmonary rales and S3 gallop

**Diagnostic Approach:**
- Clinical assessment and physical examination
- BNP or NT-proBNP levels
- Echocardiography to assess ejection fraction
- Chest X-ray, ECG, and laboratory tests

**Evidence-Based Management:**

*1. Pharmacologic Therapy for HFrEF:*
- ACE inhibitors or ARBs (reduce mortality and hospitalization)
- Beta-blockers (carvedilol, metoprolol succinate, bisoprolol)
- Mineralocorticoid receptor antagonists (spironolactone, eplerenone)
- SGLT2 inhibitors (dapagliflozin, empagliflozin) - newer guideline-directed therapy
- ARNI (sacubitril/valsartan) for eligible patients
- Diuretics for volume management (loop diuretics for congestion)
- Hydralazine/nitrates for African American patients or ACE-I intolerant

*2. Device Therapy:*
- Implantable cardioverter-defibrillator (ICD) for primary prevention of sudden cardiac death
- Cardiac resynchronization therapy (CRT) for selected patients with wide QRS

*3. Lifestyle Modifications:*
- Sodium restriction (<2-3g/day)
- Fluid management (monitor daily weights)
- Regular aerobic exercise as tolerated
- Smoking cessation and alcohol moderation
- Medication adherence

*4. Advanced Therapies:*
- Mechanical circulatory support (LVAD)
- Heart transplantation for end-stage disease
- Palliative care consultation when appropriate

**Monitoring and Follow-up:**
- Regular assessment of symptoms and functional status
- Weight monitoring for fluid retention
- Laboratory monitoring (renal function, electrolytes)
- Medication titration to guideline-directed doses
- Patient education on self-management

**References:** See academic references below for the latest AHA/ACC/HFSA guidelines and evidence-based recommendations.`;
    }
    
    // Diabetes
    else if (lowerQuery.includes('diabetes')) {
      return `**Diabetes Mellitus: Comprehensive Overview**

**Pathophysiology:**
Diabetes mellitus is characterized by chronic hyperglycemia resulting from defects in insulin secretion, insulin action, or both.

*Type 1 Diabetes:*
- Autoimmune destruction of pancreatic beta cells
- Absolute insulin deficiency
- Typically presents in childhood/adolescence but can occur at any age

*Type 2 Diabetes:*
- Insulin resistance in peripheral tissues
- Progressive beta-cell dysfunction
- Associated with obesity, sedentary lifestyle, and genetic factors
- Accounts for 90-95% of diabetes cases

**Clinical Presentation:**
- Classic symptoms: polyuria, polydipsia, polyphagia, weight loss
- Fatigue and blurred vision
- Recurrent infections
- Slow wound healing
- May be asymptomatic in Type 2 (detected on screening)

**Diagnostic Criteria:**
- Fasting plasma glucose ≥126 mg/dL
- HbA1c ≥6.5%
- 2-hour plasma glucose ≥200 mg/dL during OGTT
- Random plasma glucose ≥200 mg/dL with symptoms

**Comprehensive Management Approach:**

*1. Glycemic Control:*
- Target HbA1c typically <7% (individualized based on patient factors)
- More stringent goals (<6.5%) for selected patients
- Less stringent goals (7.5-8%) for elderly or high-risk patients

*2. Pharmacologic Therapy:*

For Type 2 Diabetes:
- Metformin: First-line therapy (improves insulin sensitivity)
- GLP-1 receptor agonists: Cardiovascular and renal benefits
- SGLT2 inhibitors: Cardiovascular, renal, and heart failure benefits
- DPP-4 inhibitors: Weight-neutral option
- Insulin therapy: When needed for glycemic control
- Sulfonylureas/meglitinides: Insulin secretagogues
- Thiazolidinediones: Insulin sensitizers

For Type 1 Diabetes:
- Multiple daily insulin injections or insulin pump therapy
- Continuous glucose monitoring recommended
- Carbohydrate counting and insulin-to-carb ratios

*3. Cardiovascular Risk Reduction:*
- Blood pressure control (target <130/80 mmHg)
- Lipid management with statin therapy
- Antiplatelet therapy (aspirin) for secondary prevention
- Smoking cessation

*4. Complication Screening and Prevention:*
- Annual comprehensive eye examination (retinopathy screening)
- Annual urine albumin and eGFR (nephropathy screening)
- Comprehensive foot examination (neuropathy and vascular assessment)
- Cardiovascular risk assessment

*5. Lifestyle Interventions:*
- Medical nutrition therapy (individualized meal planning)
- Regular physical activity (150 min/week moderate-intensity)
- Weight management (5-10% weight loss beneficial)
- Diabetes self-management education and support (DSMES)

**Special Considerations:**
- Hypoglycemia prevention and management
- Sick day management protocols
- Preconception counseling for women of childbearing age
- Psychosocial assessment and support

**References:** See academic references below for current ADA and endocrine society guidelines.`;
    }
    
    // Stroke
    else if (lowerQuery.includes('stroke')) {
      return `**Stroke: Comprehensive Overview**

**Pathophysiology:**
Stroke is caused by interruption of blood supply to the brain, classified into two main types:

*Ischemic Stroke (87% of cases):*
- Thrombotic: In-situ clot formation in cerebral vessels
- Embolic: Clot from distant source (often cardiac)
- Lacunar: Small vessel disease affecting deep brain structures
- Results in neuronal death within minutes (ischemic core) and potentially salvageable tissue (penumbra)

*Hemorrhagic Stroke (13% of cases):*
- Intracerebral hemorrhage: Bleeding into brain parenchyma
- Subarachnoid hemorrhage: Bleeding into subarachnoid space
- Often related to hypertension, aneurysm, or vascular malformation

**Clinical Presentation (FAST Assessment):**
- Face drooping (facial weakness)
- Arm weakness (unilateral weakness)
- Speech difficulty (aphasia, dysarthria)
- Time to call emergency services

Additional symptoms:
- Sudden severe headache (especially hemorrhagic)
- Visual disturbances
- Ataxia and vertigo
- Altered consciousness

**Acute Management - Time is Brain:**

*Ischemic Stroke:*
1. Immediate Assessment:
   - CT/MRI to rule out hemorrhage
   - Vascular imaging (CTA, MRA)
   - Laboratory evaluation
   - NIH Stroke Scale assessment

2. Reperfusion Therapy:
   - IV alteplase (tPA) within 4.5 hours of symptom onset
   - Mechanical thrombectomy for large vessel occlusion (up to 24 hours in selected patients)
   - Blood pressure management (permissive hypertension initially)

3. Supportive Care:
   - Airway protection and oxygenation
   - Glucose management
   - Temperature control
   - DVT prophylaxis

*Hemorrhagic Stroke:*
1. Blood pressure control (target SBP 140-160 mmHg)
2. Reversal of anticoagulation if applicable
3. ICP monitoring and management
4. Neurosurgical consultation for potential intervention

**Secondary Prevention:**

*Risk Factor Modification:*
- Blood pressure control (target <130/80 mmHg)
- Lipid management with high-intensity statin
- Diabetes management
- Smoking cessation
- Weight management and physical activity

*Antithrombotic Therapy:*
- Antiplatelet therapy (aspirin, clopidogrel, or combination)
- Anticoagulation for cardioembolic stroke (atrial fibrillation)
- Dual antiplatelet therapy for minor stroke/TIA (short-term)

*Specific Interventions:*
- Carotid endarterectomy or stenting for significant stenosis
- Patent foramen ovale closure in selected patients
- Atrial fibrillation management (anticoagulation, rate/rhythm control)

**Rehabilitation:**
- Early mobilization (within 24 hours if stable)
- Physical therapy for motor deficits
- Occupational therapy for ADL training
- Speech and language therapy for aphasia/dysphagia
- Cognitive rehabilitation
- Psychosocial support and depression screening

**References:** See academic references below for AHA/ASA stroke guidelines and evidence-based protocols.`;
    }
    
    // Sepsis
    else if (lowerQuery.includes('sepsis') || lowerQuery.includes('septic shock')) {
      return `**Sepsis and Septic Shock: Comprehensive Overview**

**Pathophysiology:**
Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection. Septic shock is a subset of sepsis with profound circulatory, cellular, and metabolic abnormalities.

*Key Mechanisms:*
- Overwhelming inflammatory response to infection
- Endothelial dysfunction and increased vascular permeability
- Microvascular thrombosis and impaired tissue perfusion
- Mitochondrial dysfunction and cellular metabolic failure
- Multi-organ dysfunction syndrome (MODS)

**Clinical Presentation:**
- Fever or hypothermia
- Tachycardia and tachypnea
- Altered mental status
- Hypotension (septic shock)
- Signs of end-organ dysfunction
- Source of infection may be apparent or occult

**Diagnostic Criteria:**

*Sepsis (Sepsis-3 Definition):*
- Suspected or documented infection
- Acute increase in SOFA score ≥2 points
- Represents organ dysfunction

*Septic Shock:*
- Sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg
- Serum lactate >2 mmol/L despite adequate fluid resuscitation

**Evidence-Based Management (Surviving Sepsis Campaign Guidelines):**

*1. Initial Resuscitation (First Hour):*
- Measure lactate level; remeasure if elevated (>2 mmol/L)
- Obtain blood cultures before antibiotics
- Administer broad-spectrum antibiotics within 1 hour
- Begin rapid fluid resuscitation (30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L)
- Apply vasopressors if hypotensive during or after fluid resuscitation to maintain MAP ≥65 mmHg

*2. Antimicrobial Therapy:*
- Broad-spectrum antibiotics within 1 hour of recognition
- Empiric coverage based on likely source and local resistance patterns
- De-escalate based on culture results and clinical improvement
- Source control (drainage, debridement, device removal) as soon as possible

*3. Hemodynamic Support:*
- Crystalloids (normal saline or balanced crystalloids) for initial resuscitation
- Norepinephrine as first-line vasopressor
- Add vasopressin or epinephrine for refractory shock
- Consider dobutamine for myocardial dysfunction
- Target MAP ≥65 mmHg

*4. Adjunctive Therapies:*
- Corticosteroids (hydrocortisone 200 mg/day) for refractory septic shock
- Mechanical ventilation with lung-protective strategies if ARDS develops
- Glucose control (target <180 mg/dL)
- DVT prophylaxis
- Stress ulcer prophylaxis in high-risk patients

**References:** See academic references below for Surviving Sepsis Campaign guidelines and IDSA recommendations.`;
    }
    
    // Pneumonia
    else if (lowerQuery.includes('pneumonia')) {
      return `**Pneumonia: Comprehensive Overview**

**Pathophysiology:**
Pneumonia is an acute infection of the pulmonary parenchyma caused by bacteria, viruses, fungi, or other pathogens. It results in alveolar inflammation, fluid accumulation, and impaired gas exchange.

*Classification:*
- Community-Acquired Pneumonia (CAP): Acquired outside healthcare settings
- Hospital-Acquired Pneumonia (HAP): Develops ≥48 hours after hospital admission
- Ventilator-Associated Pneumonia (VAP): Develops ≥48 hours after intubation
- Healthcare-Associated Pneumonia (HCAP): In patients with recent healthcare exposure

**Clinical Presentation:**
- Fever, chills, and rigors
- Productive cough with purulent sputum
- Dyspnea and tachypnea
- Pleuritic chest pain
- Crackles on auscultation
- Hypoxemia

**Diagnostic Approach:**
- Chest X-ray or CT scan (infiltrates, consolidation)
- Sputum culture and Gram stain
- Blood cultures (before antibiotics)
- Procalcitonin and inflammatory markers
- Severity assessment (CURB-65, PSI/PORT score)

**Evidence-Based Management:**

*1. Community-Acquired Pneumonia:*

Outpatient Treatment:
- Previously healthy, no risk factors: Amoxicillin or doxycycline
- Comorbidities or recent antibiotic use: Respiratory fluoroquinolone OR beta-lactam + macrolide

Inpatient Treatment (Non-ICU):
- Beta-lactam (ceftriaxone, cefotaxime, ampicillin-sulbactam) + macrolide
- OR respiratory fluoroquinolone (levofloxacin, moxifloxacin)

ICU Treatment:
- Beta-lactam (ceftriaxone, cefotaxime, ampicillin-sulbactam) + azithromycin
- OR beta-lactam + respiratory fluoroquinolone
- Add vancomycin or linezolid if MRSA suspected
- Add antipseudomonal coverage if risk factors present

*2. Hospital-Acquired/Ventilator-Associated Pneumonia:*
- Empiric broad-spectrum coverage based on local antibiogram
- Consider MRSA coverage (vancomycin or linezolid)
- Antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, meropenem)
- De-escalate based on culture results

*3. Supportive Care:*
- Oxygen therapy to maintain SpO2 >90%
- Fluid management
- Respiratory support (non-invasive ventilation or mechanical ventilation if needed)
- DVT prophylaxis

**Duration of Therapy:**
- CAP: Minimum 5 days if clinically stable
- HAP/VAP: 7 days (may extend for complicated cases)

**Prevention:**
- Pneumococcal vaccination (PCV20, PPSV23)
- Influenza vaccination
- Smoking cessation
- Hand hygiene

**References:** See academic references below for IDSA/ATS pneumonia guidelines and treatment recommendations.`;
    }
    
    // COPD
    else if (lowerQuery.includes('copd') || lowerQuery.includes('chronic obstructive pulmonary')) {
      return `**Chronic Obstructive Pulmonary Disease (COPD): Comprehensive Overview**

**Pathophysiology:**
COPD is a progressive lung disease characterized by persistent airflow limitation due to chronic inflammation and structural changes in the airways and alveoli.

*Key Components:*
- Chronic bronchitis: Mucus hypersecretion and airway inflammation
- Emphysema: Alveolar destruction and loss of elastic recoil
- Small airway disease: Fibrosis and narrowing of bronchioles

*Risk Factors:*
- Cigarette smoking (primary cause)
- Occupational exposures (dust, chemicals)
- Air pollution
- Alpha-1 antitrypsin deficiency (genetic)

**Clinical Presentation:**
- Progressive dyspnea (initially with exertion, later at rest)
- Chronic cough with or without sputum production
- Wheezing and chest tightness
- Frequent respiratory infections
- Barrel chest and pursed-lip breathing
- Decreased breath sounds and prolonged expiration

**Diagnostic Approach:**
- Spirometry: FEV1/FVC <0.70 confirms airflow limitation
- GOLD classification based on FEV1 (% predicted)
- Chest X-ray or CT scan
- Arterial blood gas (in severe disease)
- Alpha-1 antitrypsin level (if early onset or family history)

**Evidence-Based Management:**

*1. Pharmacologic Therapy:*

Initial Treatment (GOLD A-B):
- Short-acting bronchodilators (SABA or SAMA) as needed
- Long-acting bronchodilators (LABA or LAMA) for persistent symptoms

Moderate to Severe (GOLD C-D):
- LAMA + LABA combination
- Add inhaled corticosteroid (ICS) if frequent exacerbations or eosinophilia
- Triple therapy (LAMA + LABA + ICS) for severe disease with exacerbations

*2. Acute Exacerbation Management:*
- Increase bronchodilator frequency
- Systemic corticosteroids (prednisone 40mg x 5 days)
- Antibiotics if increased sputum purulence or severe exacerbation
- Oxygen therapy to maintain SpO2 88-92%
- Non-invasive ventilation if respiratory failure

*3. Non-Pharmacologic Interventions:*
- Smoking cessation (most important intervention)
- Pulmonary rehabilitation
- Oxygen therapy (if chronic hypoxemia)
- Vaccinations (influenza, pneumococcal, COVID-19)
- Nutritional support

*4. Advanced Therapies:*
- Lung volume reduction surgery (selected patients with emphysema)
- Endobronchial valves
- Lung transplantation (end-stage disease)

**Monitoring and Follow-up:**
- Regular spirometry
- Assess symptom burden (CAT, mMRC scores)
- Screen for comorbidities (cardiovascular disease, osteoporosis, depression)
- Inhaler technique review
- Exacerbation prevention strategies

**References:** See academic references below for GOLD guidelines and evidence-based COPD management.`;
    }
    
    // Asthma
    else if (lowerQuery.includes('asthma')) {
      return `**Asthma: Comprehensive Overview**

**Pathophysiology:**
Asthma is a chronic inflammatory disorder of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway inflammation.

*Key Mechanisms:*
- Airway inflammation (eosinophilic or neutrophilic)
- Bronchial smooth muscle contraction
- Mucus hypersecretion
- Airway remodeling (in chronic disease)

*Triggers:*
- Allergens (pollen, dust mites, pet dander)
- Respiratory infections
- Exercise
- Cold air
- Air pollution and irritants
- Medications (aspirin, NSAIDs, beta-blockers)

**Clinical Presentation:**
- Episodic wheezing
- Shortness of breath
- Chest tightness
- Cough (often worse at night)
- Symptoms vary in intensity and frequency
- Symptom-free intervals between exacerbations

**Diagnostic Approach:**
- Spirometry with bronchodilator reversibility (FEV1 increase ≥12% and ≥200 mL)
- Peak expiratory flow (PEF) monitoring
- Fractional exhaled nitric oxide (FeNO) - marker of eosinophilic inflammation
- Allergy testing (skin prick or specific IgE)
- Methacholine challenge (if spirometry normal but asthma suspected)

**Evidence-Based Management (Stepwise Approach):**

*Step 1 (Intermittent):*
- As-needed short-acting beta-agonist (SABA)
- Consider low-dose ICS-formoterol as needed

*Step 2 (Mild Persistent):*
- Low-dose inhaled corticosteroid (ICS) daily
- OR as-needed low-dose ICS-formoterol

*Step 3 (Moderate Persistent):*
- Low-dose ICS-LABA combination
- OR medium-dose ICS

*Step 4 (Moderate-Severe Persistent):*
- Medium-dose ICS-LABA
- Consider adding LAMA (tiotropium)

*Step 5 (Severe Persistent):*
- High-dose ICS-LABA + LAMA
- Consider biologics:
  - Anti-IgE (omalizumab) for allergic asthma
  - Anti-IL-5 (mepolizumab, reslizumab) for eosinophilic asthma
  - Anti-IL-4R (dupilumab) for type 2 inflammation
- Oral corticosteroids (minimize use)

**Acute Exacerbation Management:**
- Oxygen to maintain SpO2 >90%
- Inhaled SABA (albuterol) via nebulizer or MDI with spacer
- Systemic corticosteroids (prednisone 40-60mg or equivalent)
- Ipratropium bromide (for severe exacerbations)
- Magnesium sulfate IV (for severe, refractory cases)
- Consider ICU admission if impending respiratory failure

**Monitoring and Follow-up:**
- Assess control using ACT (Asthma Control Test) or ACQ
- Regular spirometry
- Review inhaler technique
- Written asthma action plan
- Identify and avoid triggers
- Annual influenza vaccination

**References:** See academic references below for GINA guidelines and evidence-based asthma management.`;
    }
    
    // Atrial Fibrillation
    else if (lowerQuery.includes('atrial fibrillation') || lowerQuery.includes('afib') || lowerQuery.includes('a fib')) {
      return `**Atrial Fibrillation: Comprehensive Overview**

**Pathophysiology:**
Atrial fibrillation is characterized by rapid, disorganized atrial electrical activity resulting in irregular ventricular response and loss of effective atrial contraction.

*Mechanisms:*
- Ectopic foci (often from pulmonary veins)
- Multiple reentrant wavelets
- Atrial remodeling and fibrosis
- Autonomic nervous system dysregulation

*Risk Factors:*
- Hypertension
- Heart failure
- Valvular heart disease
- Coronary artery disease
- Hyperthyroidism
- Obesity and sleep apnea
- Alcohol consumption

**Clinical Presentation:**
- Palpitations
- Dyspnea and fatigue
- Chest discomfort
- Dizziness or syncope
- May be asymptomatic (detected incidentally)
- Irregular pulse on examination

**Diagnostic Approach:**
- 12-lead ECG: Irregularly irregular rhythm, absent P waves, fibrillatory waves
- Holter monitor or event recorder (for paroxysmal AFib)
- Echocardiography (assess structural heart disease, left atrial size)
- Thyroid function tests
- CHA2DS2-VASc score (stroke risk stratification)
- HAS-BLED score (bleeding risk assessment)

**Evidence-Based Management:**

*1. Anticoagulation (Stroke Prevention):*

CHA2DS2-VASc Score:
- Score 0 (men) or 1 (women): No anticoagulation
- Score 1 (men): Consider anticoagulation
- Score ≥2: Anticoagulation recommended

Anticoagulation Options:
- Direct oral anticoagulants (DOACs) - preferred:
  - Apixaban, rivaroxaban, edoxaban, dabigatran
- Warfarin (target INR 2-3)
- Left atrial appendage occlusion (if anticoagulation contraindicated)

*2. Rate Control:*

Target: Resting heart rate <110 bpm (lenient) or <80 bpm (strict, if symptomatic)

First-line agents:
- Beta-blockers (metoprolol, carvedilol, bisoprolol)
- Non-dihydropyridine calcium channel blockers (diltiazem, verapamil)
- Digoxin (adjunctive or if heart failure)

*3. Rhythm Control:*

Indications:
- Symptomatic despite rate control
- First episode of AFib
- Young patients
- AFib-induced cardiomyopathy

Antiarrhythmic Drugs:
- Flecainide or propafenone (no structural heart disease)
- Amiodarone or dofetilide (structural heart disease)
- Sotalol (alternative option)

Cardioversion:
- Electrical cardioversion (synchronized DC shock)
- Pharmacologic cardioversion (ibutilide, flecainide)
- Anticoagulation required (3 weeks before or TEE-guided)

Catheter Ablation:
- Pulmonary vein isolation
- Consider for symptomatic paroxysmal AFib
- Increasingly used as first-line therapy

*4. Lifestyle Modifications:*
- Weight loss (if overweight)
- Alcohol moderation
- Treatment of sleep apnea
- Blood pressure control
- Exercise (moderate intensity)

**Monitoring and Follow-up:**
- Regular assessment of symptoms
- ECG or rhythm monitoring
- Anticoagulation monitoring (if on warfarin)
- Assess for complications (stroke, heart failure)
- Screen for bleeding

**References:** See academic references below for AHA/ACC/HRS AFib guidelines and anticoagulation recommendations.`;
    }
    
    // Hypertension
    else if (lowerQuery.includes('hypertension') || lowerQuery.includes('high blood pressure')) {
      return `**Hypertension: Comprehensive Overview**

**Pathophysiology:**
Hypertension is sustained elevation of blood pressure resulting from increased peripheral vascular resistance, increased cardiac output, or both.

*Classification (ACC/AHA 2017):*
- Normal: <120/80 mmHg
- Elevated: 120-129/<80 mmHg
- Stage 1: 130-139/80-89 mmHg
- Stage 2: ≥140/90 mmHg
- Hypertensive crisis: ≥180/120 mmHg

*Types:*
- Primary (essential) hypertension: 90-95% of cases, multifactorial
- Secondary hypertension: Identifiable cause (renal disease, endocrine disorders, medications)

**Clinical Presentation:**
- Often asymptomatic ("silent killer")
- Headache (severe hypertension)
- Dizziness
- Blurred vision
- Chest pain or dyspnea (if target organ damage)

**Diagnostic Approach:**
- Multiple BP measurements on separate occasions
- Home BP monitoring or ambulatory BP monitoring
- Assess for target organ damage:
  - ECG (left ventricular hypertrophy)
  - Echocardiography
  - Urinalysis and urine albumin-to-creatinine ratio
  - Serum creatinine and eGFR
  - Fundoscopic examination
- Screen for secondary causes if indicated

**Evidence-Based Management:**

*1. Lifestyle Modifications (All Patients):*
- Weight loss (if overweight): 5-10 kg can reduce BP by 5-20 mmHg
- DASH diet (rich in fruits, vegetables, low-fat dairy)
- Sodium restriction (<2.3 g/day, ideally <1.5 g/day)
- Regular aerobic exercise (150 min/week moderate intensity)
- Alcohol moderation (≤2 drinks/day men, ≤1 drink/day women)
- Smoking cessation

*2. Pharmacologic Therapy:*

BP Target:
- <130/80 mmHg for most patients
- <140/90 mmHg for adults ≥65 years (individualized)

First-line Agents:
- ACE inhibitors (lisinopril, enalapril, ramipril)
- ARBs (losartan, valsartan, olmesartan)
- Calcium channel blockers (amlodipine, nifedipine)
- Thiazide diuretics (chlorthalidone, hydrochlorothiazide)

Combination Therapy:
- Stage 2 hypertension: Initiate 2-drug combination
- Common combinations:
  - ACE-I or ARB + CCB
  - ACE-I or ARB + thiazide diuretic
  - CCB + thiazide diuretic

Resistant Hypertension (≥3 drugs including diuretic):
- Add spironolactone
- Consider secondary causes
- Refer to hypertension specialist

*3. Special Populations:*

Diabetes or CKD:
- ACE-I or ARB preferred (renoprotective)
- Target BP <130/80 mmHg

Heart Failure:
- ACE-I or ARB + beta-blocker + diuretic
- Consider ARNI (sacubitril/valsartan)

Post-MI:
- Beta-blocker + ACE-I or ARB

African American Patients:
- CCB or thiazide diuretic as initial therapy
- ACE-I or ARB less effective as monotherapy

**Hypertensive Emergency:**
- BP ≥180/120 mmHg with acute target organ damage
- IV antihypertensives (nicardipine, labetalol, nitroprusside)
- Reduce BP by 10-20% in first hour
- Hospitalization required

**Monitoring and Follow-up:**
- Monthly visits until BP controlled
- Every 3-6 months once stable
- Home BP monitoring
- Annual labs (creatinine, electrolytes, lipids)
- Assess medication adherence and side effects

**References:** See academic references below for ACC/AHA hypertension guidelines and treatment algorithms.`;
    }
    
    // Acute Kidney Injury (AKI)
    else if (lowerQuery.includes('aki') || lowerQuery.includes('acute kidney injury') || lowerQuery.includes('acute renal failure')) {
      return `**Acute Kidney Injury (AKI): Comprehensive Overview**

**Pathophysiology:**
AKI is characterized by a rapid decline in kidney function, resulting in accumulation of nitrogenous waste products and dysregulation of fluid, electrolyte, and acid-base balance.

*Classification (KDIGO Criteria):*
- Stage 1: Cr increase ≥0.3 mg/dL or 1.5-1.9x baseline, or urine output <0.5 mL/kg/hr for 6-12 hours
- Stage 2: Cr increase 2.0-2.9x baseline, or urine output <0.5 mL/kg/hr for ≥12 hours
- Stage 3: Cr increase ≥3x baseline or ≥4.0 mg/dL, or urine output <0.3 mL/kg/hr for ≥24 hours, or anuria for ≥12 hours, or initiation of RRT

*Categories:*
- Prerenal: Decreased renal perfusion (hypovolemia, hypotension, heart failure)
- Intrinsic renal: Direct kidney damage (ATN, glomerulonephritis, interstitial nephritis)
- Postrenal: Urinary tract obstruction (BPH, stones, malignancy)

**Clinical Presentation:**
- Decreased urine output (oliguria <400 mL/day)
- Fluid overload (edema, pulmonary congestion)
- Uremic symptoms (nausea, confusion, pericarditis)
- Electrolyte abnormalities (hyperkalemia, metabolic acidosis)
- May be asymptomatic (detected on labs)

**Diagnostic Approach:**
- Serum creatinine and BUN
- Urinalysis and urine microscopy
- Urine sodium, FENa, FEUrea
- Renal ultrasound (assess for obstruction, kidney size)
- Review medications (nephrotoxins)
- Assess volume status

*Prerenal vs. Intrinsic AKI:*
- Prerenal: FENa <1%, BUN/Cr >20:1, urine Na <20 mEq/L
- Intrinsic (ATN): FENa >2%, BUN/Cr <20:1, urine Na >40 mEq/L, muddy brown casts

**Evidence-Based Management:**

*1. Identify and Treat Underlying Cause:*

Prerenal:
- Volume resuscitation (crystalloids)
- Optimize cardiac output
- Discontinue nephrotoxic medications (NSAIDs, ACE-I/ARBs in acute setting)

Intrinsic:
- Acute tubular necrosis: Supportive care, avoid further insults
- Glomerulonephritis: Immunosuppression (corticosteroids, cyclophosphamide)
- Acute interstitial nephritis: Discontinue offending drug, consider corticosteroids

Postrenal:
- Urinary catheter (bladder outlet obstruction)
- Nephrostomy or ureteral stent (upper tract obstruction)

*2. Supportive Care:*
- Fluid management: Balance intake and output
- Electrolyte management:
  - Hyperkalemia: Calcium gluconate, insulin/glucose, sodium polystyrene sulfonate, dialysis
  - Metabolic acidosis: Sodium bicarbonate (if severe)
- Avoid nephrotoxins (NSAIDs, aminoglycosides, contrast)
- Adjust medication doses for renal function

*3. Renal Replacement Therapy (RRT):*

Indications:
- Severe hyperkalemia refractory to medical management
- Severe metabolic acidosis
- Volume overload refractory to diuretics
- Uremic complications (pericarditis, encephalopathy)
- Certain intoxications

Modalities:
- Intermittent hemodialysis (hemodynamically stable)
- Continuous renal replacement therapy (CRRT) - hemodynamically unstable
- Peritoneal dialysis (less common)

*4. Prevention:*
- Adequate hydration before contrast or nephrotoxic drugs
- Avoid NSAIDs in high-risk patients
- Monitor renal function in hospitalized patients
- Adjust drug doses for renal function

**Monitoring and Follow-up:**
- Daily creatinine and electrolytes
- Fluid balance (strict intake/output)
- Urine output monitoring
- Assess for complications
- Nephrology consultation for severe or complex cases
- Post-discharge: Monitor for CKD development

**References:** See academic references below for KDIGO AKI guidelines and management recommendations.`;
    }
    
    // Chronic Kidney Disease (CKD)
    else if (lowerQuery.includes('ckd') || lowerQuery.includes('chronic kidney disease') || lowerQuery.includes('chronic renal')) {
      return `**Chronic Kidney Disease (CKD): Comprehensive Overview**

**Pathophysiology:**
CKD is progressive loss of kidney function over ≥3 months, characterized by structural or functional abnormalities with implications for health.

*Staging (KDIGO):*
- Stage 1: GFR ≥90 mL/min/1.73m² with kidney damage
- Stage 2: GFR 60-89 mL/min/1.73m² with kidney damage
- Stage 3a: GFR 45-59 mL/min/1.73m²
- Stage 3b: GFR 30-44 mL/min/1.73m²
- Stage 4: GFR 15-29 mL/min/1.73m²
- Stage 5: GFR <15 mL/min/1.73m² (kidney failure)

*Common Causes:*
- Diabetes mellitus (leading cause)
- Hypertension
- Glomerulonephritis
- Polycystic kidney disease
- Chronic interstitial nephritis

**Clinical Presentation:**
- Often asymptomatic in early stages
- Fatigue and weakness
- Decreased appetite and weight loss
- Edema
- Nocturia
- Uremic symptoms (advanced CKD): nausea, pruritus, altered mental status

**Diagnostic Approach:**
- Serum creatinine and estimated GFR (eGFR)
- Urine albumin-to-creatinine ratio (UACR)
- Urinalysis
- Renal ultrasound
- Identify underlying cause
- Screen for complications

**Evidence-Based Management:**

*1. Slow CKD Progression:*

Blood Pressure Control:
- Target <130/80 mmHg (especially if albuminuria)
- ACE inhibitors or ARBs preferred (renoprotective)
- Reduce proteinuria

Glycemic Control (Diabetes):
- HbA1c target <7% (individualized)
- SGLT2 inhibitors (empagliflozin, dapagliflozin) - renoprotective
- GLP-1 receptor agonists - cardiovascular and renal benefits

Proteinuria Reduction:
- ACE-I or ARB (even if normotensive with significant proteinuria)
- SGLT2 inhibitors
- Mineralocorticoid receptor antagonists (finerenone)

*2. Manage Complications:*

Anemia:
- Target hemoglobin 10-11.5 g/dL
- Erythropoiesis-stimulating agents (ESAs): epoetin, darbepoetin
- Iron supplementation (IV preferred if severe)

Mineral and Bone Disorder:
- Phosphate binders (calcium-based, sevelamer, lanthanum)
- Vitamin D supplementation (cholecalciferol, calcitriol)
- Calcimimetics (cinacalcet) for secondary hyperparathyroidism
- Target: Phosphorus 2.5-4.5 mg/dL, PTH 2-9x upper limit of normal

Metabolic Acidosis:
- Sodium bicarbonate if serum bicarbonate <22 mEq/L
- May slow CKD progression

Hyperkalemia:
- Dietary potassium restriction
- Potassium binders (patiromer, sodium zirconium cyclosilicate)
- Adjust medications (reduce/discontinue ACE-I/ARBs if severe)

Volume Overload:
- Sodium restriction (<2 g/day)
- Loop diuretics (furosemide, torsemide)

*3. Cardiovascular Risk Reduction:*
- Statin therapy (all CKD patients)
- Antiplatelet therapy (if cardiovascular disease)
- Smoking cessation
- Lifestyle modifications

*4. Dietary Management:*
- Protein restriction (0.6-0.8 g/kg/day in advanced CKD)
- Sodium restriction (<2 g/day)
- Potassium restriction (if hyperkalemia)
- Phosphorus restriction

*5. Medication Management:*
- Adjust doses for renal function
- Avoid nephrotoxins (NSAIDs, aminoglycosides)
- Contrast precautions

*6. Prepare for Renal Replacement Therapy (Stage 4-5):*
- Nephrology referral
- Discuss dialysis options (hemodialysis, peritoneal dialysis)
- Kidney transplant evaluation
- Vascular access planning (AV fistula preferred)

**Monitoring and Follow-up:**
- eGFR and creatinine: Every 3-12 months (based on stage)
- UACR: Annually
- Electrolytes, calcium, phosphorus, PTH
- CBC (anemia screening)
- Lipid panel
- Blood pressure monitoring
- Assess for complications

**References:** See academic references below for KDIGO CKD guidelines and evidence-based management strategies.`;
    }
    
    // Urinary Tract Infection (UTI)
    else if (lowerQuery.includes('uti') || lowerQuery.includes('urinary tract infection') || lowerQuery.includes('cystitis') || lowerQuery.includes('pyelonephritis')) {
      return `**Urinary Tract Infection (UTI): Comprehensive Overview**

**Pathophysiology:**
UTIs result from bacterial colonization and infection of the urinary tract, most commonly by Escherichia coli (80-85% of cases).

*Classification:*
- Uncomplicated cystitis: Bladder infection in healthy, non-pregnant women
- Complicated UTI: Infection with structural/functional abnormalities, immunosuppression, or pregnancy
- Pyelonephritis: Kidney infection
- Catheter-associated UTI (CAUTI)
- Recurrent UTI: ≥2 infections in 6 months or ≥3 in 12 months

**Clinical Presentation:**

*Cystitis:*
- Dysuria
- Urinary frequency and urgency
- Suprapubic pain
- Hematuria
- No systemic symptoms

*Pyelonephritis:*
- Fever and chills
- Flank pain
- Nausea and vomiting
- Costovertebral angle tenderness
- May have cystitis symptoms

**Diagnostic Approach:**
- Urinalysis: Pyuria, bacteriuria, nitrites, leukocyte esterase
- Urine culture (if complicated UTI, pyelonephritis, or treatment failure)
- Blood cultures (if pyelonephritis or sepsis)
- Imaging (CT or ultrasound) if complicated or recurrent infections

**Evidence-Based Management:**

*1. Uncomplicated Cystitis (Non-Pregnant Women):*

First-line:
- Nitrofurantoin 100 mg BID x 5 days
- Trimethoprim-sulfamethoxazole DS BID x 3 days (if local resistance <20%)
- Fosfomycin 3 g single dose

Second-line:
- Fluoroquinolones (ciprofloxacin, levofloxacin) x 3 days - reserve for complicated cases

*2. Complicated UTI:*
- Fluoroquinolones (ciprofloxacin, levofloxacin) x 7-14 days
- Beta-lactams (amoxicillin-clavulanate, cephalosporins) x 7-14 days
- Tailor therapy based on culture results

*3. Acute Pyelonephritis:*

Outpatient (Mild):
- Fluoroquinolone (ciprofloxacin, levofloxacin) x 7 days
- OR ceftriaxone 1 g IV/IM x 1 dose, then oral fluoroquinolone or TMP-SMX x 7-14 days

Inpatient (Severe):
- IV antibiotics: Fluoroquinolone, ceftriaxone, or piperacillin-tazobactam
- Transition to oral when clinically improved
- Total duration: 7-14 days

*4. Catheter-Associated UTI:*
- Remove or replace catheter if possible
- Antibiotics based on culture results x 7-14 days
- Asymptomatic bacteriuria: No treatment unless pregnancy or urologic procedure

*5. Recurrent UTI Prevention:*

Non-Antibiotic:
- Increase fluid intake
- Post-coital voiding
- Cranberry products (modest benefit)
- Vaginal estrogen (postmenopausal women)
- D-mannose

Antibiotic Prophylaxis:
- Continuous: TMP-SMX or nitrofurantoin daily or 3x/week
- Post-coital: Single dose after intercourse
- Self-start therapy: Patient-initiated treatment at symptom onset

*6. Special Populations:*

Pregnancy:
- Screen and treat asymptomatic bacteriuria
- Antibiotics: Nitrofurantoin, amoxicillin, cephalexin x 7 days
- Avoid fluoroquinolones and TMP-SMX (first trimester)

Men:
- Consider prostatitis
- Longer treatment duration (7-14 days)
- Evaluate for structural abnormalities

**Monitoring and Follow-up:**
- Symptom resolution expected within 48-72 hours
- Urine culture if no improvement
- Imaging if recurrent or complicated infections
- Address modifiable risk factors

**References:** See academic references below for IDSA UTI guidelines and antimicrobial stewardship recommendations.`;
    }
    
    // Tuberculosis (TB)
    else if (lowerQuery.includes('tuberculosis') || lowerQuery.includes(' tb ') || lowerQuery.includes('mycobacterium')) {
      return `**Tuberculosis (TB): Comprehensive Overview**

**Pathophysiology:**
TB is caused by Mycobacterium tuberculosis, an acid-fast bacillus transmitted via airborne droplets. It primarily affects the lungs but can involve any organ system.

*Stages:*
- Primary infection: Initial exposure, often asymptomatic
- Latent TB infection (LTBI): Dormant bacteria, no symptoms, not contagious
- Active TB disease: Symptomatic, contagious (if pulmonary)
- Reactivation TB: Latent infection becomes active (immunosuppression, aging)

*Risk Factors:*
- HIV infection
- Immunosuppression (biologics, corticosteroids, transplant)
- Close contact with active TB
- Homelessness, incarceration
- Healthcare workers
- Immigration from high-prevalence countries

**Clinical Presentation:**

*Pulmonary TB:*
- Chronic cough (>3 weeks)
- Hemoptysis
- Fever, night sweats
- Weight loss
- Chest pain
- Fatigue

*Extrapulmonary TB:*
- Lymphadenitis (most common)
- Pleural effusion
- Meningitis
- Pericarditis
- Genitourinary TB
- Bone/joint TB (Pott's disease)

**Diagnostic Approach:**
- Tuberculin skin test (TST) or interferon-gamma release assay (IGRA)
- Chest X-ray: Upper lobe infiltrates, cavitation, lymphadenopathy
- Sputum AFB smear and culture (3 samples)
- Nucleic acid amplification test (NAAT) - rapid diagnosis
- Drug susceptibility testing
- HIV testing (all TB patients)

**Evidence-Based Management:**

*1. Active TB Disease:*

Standard Regimen (Drug-Susceptible TB):
- Intensive phase (2 months): Isoniazid + Rifampin + Pyrazinamide + Ethambutol (HRZE)
- Continuation phase (4 months): Isoniazid + Rifampin (HR)
- Total duration: 6 months

Directly Observed Therapy (DOT):
- Recommended for all patients to ensure adherence
- Reduces treatment failure and drug resistance

Monitoring:
- Monthly clinical assessment
- Sputum cultures at 2 months (should be negative)
- Liver function tests (baseline and monthly if abnormal)
- Visual acuity and color vision (ethambutol)

*2. Drug-Resistant TB:*

Multidrug-Resistant TB (MDR-TB): Resistant to isoniazid and rifampin
- Longer treatment (18-24 months)
- Second-line drugs: Fluoroquinolones, bedaquiline, linezolid, clofazimine
- Requires infectious disease/TB specialist

Extensively Drug-Resistant TB (XDR-TB):
- MDR-TB plus resistance to fluoroquinolones and second-line injectables
- Very limited treatment options
- High mortality

*3. Latent TB Infection (LTBI):*

Indications for Treatment:
- HIV infection
- Recent TB contact
- Immunosuppression
- Radiographic evidence of prior TB
- High-risk populations

Treatment Regimens:
- Isoniazid + rifapentine weekly x 12 weeks (3HP) - preferred
- Rifampin daily x 4 months (4R)
- Isoniazid daily x 6-9 months (6-9H)

*4. TB in Special Populations:*

HIV-Coinfected:
- Start TB treatment first
- Initiate antiretroviral therapy (ART) within 2-8 weeks
- Monitor for immune reconstitution inflammatory syndrome (IRIS)

Pregnancy:
- Standard regimen (avoid streptomycin)
- Pyridoxine (vitamin B6) supplementation

Children:
- Adjust doses by weight
- Shorter treatment for LTBI (3HP preferred)

*5. Infection Control:*
- Airborne isolation (negative pressure room)
- N95 respirators for healthcare workers
- Continue isolation until 3 consecutive negative sputum smears
- Contact investigation and screening

**Prevention:**
- BCG vaccination (limited efficacy in adults)
- LTBI screening and treatment
- Infection control measures
- Address social determinants (housing, nutrition)

**Monitoring and Follow-up:**
- Monthly visits during treatment
- Sputum cultures at 2, 4, and 6 months
- Chest X-ray at completion
- Monitor for adverse drug reactions
- Ensure treatment completion

**References:** See academic references below for WHO TB guidelines and CDC treatment recommendations.`;
    }
    
    // HIV/AIDS
    else if (lowerQuery.includes('hiv') || lowerQuery.includes('aids') || lowerQuery.includes('human immunodeficiency')) {
      return `**HIV/AIDS: Comprehensive Overview**

**Pathophysiology:**
HIV is a retrovirus that infects CD4+ T lymphocytes, leading to progressive immunodeficiency. Without treatment, it progresses to AIDS (acquired immunodeficiency syndrome).

*Stages:*
- Acute HIV infection: Flu-like illness 2-4 weeks after exposure
- Chronic HIV infection: Asymptomatic or mild symptoms, progressive CD4 decline
- AIDS: CD4 count <200 cells/μL or AIDS-defining illness

*Transmission:*
- Sexual contact (most common)
- Blood exposure (needle sharing, transfusion)
- Mother-to-child (pregnancy, delivery, breastfeeding)

**Clinical Presentation:**

*Acute HIV:*
- Fever, fatigue
- Pharyngitis
- Lymphadenopathy
- Rash
- Myalgias

*Chronic HIV:*
- Often asymptomatic
- Persistent generalized lymphadenopathy
- Oral thrush
- Herpes zoster

*AIDS:*
- Opportunistic infections (PCP, CMV, toxoplasmosis, cryptococcosis)
- AIDS-defining malignancies (Kaposi sarcoma, lymphoma)
- Wasting syndrome
- HIV-associated dementia

**Diagnostic Approach:**
- HIV antibody/antigen combination test (4th generation)
- HIV RNA viral load (if acute infection suspected)
- CD4 count
- Resistance testing (genotype)
- Screen for coinfections (hepatitis B/C, syphilis, TB)
- Baseline labs (CBC, CMP, lipids)

**Evidence-Based Management:**

*1. Antiretroviral Therapy (ART):*

Initiation:
- Start ART immediately upon diagnosis (regardless of CD4 count)
- Benefits: Viral suppression, immune restoration, prevention of transmission

Preferred Regimens (Treatment-Naive):
- Integrase strand transfer inhibitor (INSTI) + 2 NRTIs:
  - Bictegravir/tenofovir alafenamide/emtricitabine (Biktarvy)
  - Dolutegravir/abacavir/lamivudine (Triumeq) - if HLA-B*5701 negative
  - Dolutegravir + tenofovir/emtricitabine

Alternative Regimens:
- Boosted protease inhibitor (PI/r) + 2 NRTIs
- NNRTI-based regimens (less preferred)

Goals:
- Viral load <50 copies/mL (undetectable = untransmittable, U=U)
- CD4 count recovery
- Prevent opportunistic infections

*2. Monitoring:*
- Viral load: At initiation, 4-8 weeks, then every 3-6 months
- CD4 count: Every 3-6 months (can extend if stable)
- Resistance testing if virologic failure
- Screen for drug toxicities and interactions
- Adherence assessment

*3. Opportunistic Infection Prophylaxis:*

Pneumocystis jirovecii pneumonia (PCP):
- CD4 <200: TMP-SMX daily or 3x/week

Toxoplasmosis:
- CD4 <100 and toxoplasma IgG positive: TMP-SMX (also covers PCP)

Mycobacterium avium complex (MAC):
- CD4 <50: Azithromycin weekly

*4. Treatment of Opportunistic Infections:*
- PCP: TMP-SMX + prednisone (if severe)
- Toxoplasmosis: Pyrimethamine + sulfadiazine + leucovorin
- CMV retinitis: Ganciclovir or foscarnet
- Cryptococcal meningitis: Amphotericin B + flucytosine, then fluconazole
- TB: Standard TB regimen (adjust for drug interactions)

*5. Prevention:*

Pre-Exposure Prophylaxis (PrEP):
- Tenofovir/emtricitabine daily (Truvada, Descovy)
- Injectable cabotegravir every 2 months
- Reduces HIV acquisition risk by >90%

Post-Exposure Prophylaxis (PEP):
- Start within 72 hours of exposure
- 3-drug ART regimen x 28 days

Prevention of Mother-to-Child Transmission:
- ART during pregnancy
- Cesarean delivery if viral load >1000 copies/mL
- Avoid breastfeeding (in resource-rich settings)

*6. Comorbidity Management:*
- Cardiovascular disease screening and prevention
- Bone health (DEXA scan, vitamin D/calcium)
- Mental health support
- Substance use treatment
- Hepatitis B/C coinfection management

**Monitoring and Follow-up:**
- Regular clinic visits (every 3-6 months if stable)
- Adherence support
- Screen for complications and comorbidities
- Vaccinations (pneumococcal, influenza, hepatitis A/B)
- Cancer screening (cervical, anal, liver)

**References:** See academic references below for DHHS HIV treatment guidelines and prevention strategies.`;
    }
    
    // COVID-19
    else if (lowerQuery.includes('covid') || lowerQuery.includes('coronavirus') || lowerQuery.includes('sars-cov-2')) {
      return `**COVID-19: Comprehensive Overview**

**Pathophysiology:**
COVID-19 is caused by SARS-CoV-2, a novel coronavirus that primarily affects the respiratory system but can cause multi-organ dysfunction.

*Transmission:*
- Respiratory droplets and aerosols
- Close contact with infected individuals
- Contaminated surfaces (less common)

*Disease Spectrum:*
- Asymptomatic infection
- Mild to moderate illness
- Severe illness (pneumonia, hypoxemia)
- Critical illness (ARDS, septic shock, multi-organ failure)

**Clinical Presentation:**
- Fever or chills
- Cough
- Shortness of breath
- Fatigue
- Myalgias
- Loss of taste or smell (anosmia, ageusia)
- Sore throat
- Congestion or rhinorrhea
- Nausea, vomiting, diarrhea
- Headache

**Diagnostic Approach:**
- SARS-CoV-2 RT-PCR (gold standard)
- Rapid antigen test (less sensitive)
- Chest X-ray or CT (bilateral infiltrates, ground-glass opacities)
- Laboratory: Lymphopenia, elevated inflammatory markers (CRP, D-dimer, ferritin)
- Oxygen saturation monitoring

**Evidence-Based Management:**

*1. Mild to Moderate COVID-19 (Outpatient):*

High-Risk Patients (within 5-7 days of symptom onset):
- Nirmatrelvir/ritonavir (Paxlovid) x 5 days - preferred
- Remdesivir IV x 3 days
- Molnupiravir x 5 days (if other options unavailable)

Supportive Care:
- Symptomatic treatment (acetaminophen, NSAIDs)
- Hydration
- Rest
- Pulse oximetry monitoring

*2. Severe COVID-19 (Hospitalized, Requiring Oxygen):*

Antiviral Therapy:
- Remdesivir IV x 5 days (or until discharge)

Immunomodulatory Therapy:
- Dexamethasone 6 mg daily x 10 days (or until discharge)
- Tocilizumab or baricitinib (if rapidly increasing oxygen needs)

Supportive Care:
- Supplemental oxygen (target SpO2 92-96%)
- Prone positioning (if hypoxemic)
- Thromboprophylaxis (prophylactic or therapeutic anticoagulation)
- Avoid routine antibiotics unless bacterial superinfection suspected

*3. Critical COVID-19 (ICU, Mechanical Ventilation):*
- Remdesivir + dexamethasone
- Consider tocilizumab or baricitinib
- Lung-protective ventilation strategies
- Prone positioning (12-16 hours/day)
- ECMO (for refractory hypoxemia)
- Therapeutic anticoagulation (if not contraindicated)

*4. Post-COVID Conditions (Long COVID):*

Common Symptoms:
- Fatigue
- Dyspnea
- Cognitive dysfunction ("brain fog")
- Post-exertional malaise
- Chest pain, palpitations
- Sleep disturbances

Management:
- Multidisciplinary approach
- Symptom-directed therapy
- Pulmonary rehabilitation
- Cognitive rehabilitation
- Mental health support
- Rule out complications (pulmonary embolism, myocarditis)

*5. Prevention:*

Vaccination:
- mRNA vaccines (Pfizer-BioNTech, Moderna) - preferred
- Primary series + boosters
- Updated vaccines targeting current variants

Non-Pharmaceutical Interventions:
- Masking (N95 or KN95 in high-risk settings)
- Physical distancing
- Hand hygiene
- Ventilation improvement
- Isolation if infected (5 days minimum)

*6. Special Populations:*

Immunocompromised:
- Extended antiviral therapy
- Monoclonal antibodies (if available and effective against current variant)
- Pre-exposure prophylaxis (tixagevimab/cilgavimab) - if available

Pregnancy:
- Vaccination recommended
- Nirmatrelvir/ritonavir or remdesivir for treatment
- Dexamethasone if severe disease

**Monitoring and Follow-up:**
- Pulse oximetry at home (if outpatient)
- Clinical deterioration warning signs
- Follow-up for persistent symptoms
- Screen for post-COVID conditions
- Mental health assessment

**References:** See academic references below for NIH COVID-19 treatment guidelines and CDC recommendations.`;
    }
    
    // Meningitis
    else if (lowerQuery.includes('meningitis')) {
      return `**Meningitis: Comprehensive Overview**

**Pathophysiology:**
Meningitis is inflammation of the meninges (protective membranes covering the brain and spinal cord) caused by bacterial, viral, fungal, or other pathogens.

*Types:*
- Bacterial meningitis: Medical emergency, high mortality
- Viral meningitis: Usually self-limited, better prognosis
- Fungal meningitis: Primarily in immunocompromised
- Tuberculous meningitis: Subacute presentation

*Common Bacterial Pathogens:*
- Streptococcus pneumoniae (most common in adults)
- Neisseria meningitidis
- Listeria monocytogenes (elderly, immunocompromised)
- Group B Streptococcus (neonates)
- Haemophilus influenzae (rare post-vaccination)

**Clinical Presentation:**

*Classic Triad (only 44% have all three):*
- Fever
- Neck stiffness
- Altered mental status

*Other Symptoms:*
- Severe headache
- Photophobia
- Nausea and vomiting
- Seizures
- Focal neurologic deficits
- Petechial or purpuric rash (meningococcemia)

*Physical Examination:*
- Kernig sign: Pain with knee extension when hip flexed
- Brudzinski sign: Involuntary hip flexion with neck flexion

**Diagnostic Approach:**
- Blood cultures (before antibiotics)
- Lumbar puncture (LP) - DO NOT DELAY if no contraindications
- CSF analysis:
  - Cell count and differential
  - Glucose and protein
  - Gram stain and culture
  - PCR (bacterial, viral, TB)
- CT head (before LP if concern for increased ICP, focal deficits, or immunocompromised)
- Procalcitonin (elevated in bacterial meningitis)

*CSF Findings:*
- Bacterial: High WBC (>1000, PMN predominant), low glucose (<40 mg/dL), high protein (>200 mg/dL)
- Viral: Moderate WBC (10-1000, lymphocyte predominant), normal glucose, mildly elevated protein
- Fungal/TB: Moderate WBC (lymphocyte predominant), low glucose, very high protein

**Evidence-Based Management:**

*1. Bacterial Meningitis:*

Empiric Antibiotic Therapy (Start Immediately):
- Adults <50 years: Vancomycin + ceftriaxone (or cefotaxime)
- Adults ≥50 years or immunocompromised: Vancomycin + ceftriaxone + ampicillin (for Listeria)
- Penicillin allergy: Vancomycin + moxifloxacin

Adjunctive Dexamethasone:
- 10 mg IV before or with first antibiotic dose
- Continue every 6 hours x 4 days
- Reduces mortality and neurologic sequelae in pneumococcal meningitis

Pathogen-Specific Therapy (After Culture Results):
- S. pneumoniae: Ceftriaxone (or penicillin if susceptible)
- N. meningitidis: Ceftriaxone (or penicillin)
- Listeria: Ampicillin + gentamicin
- H. influenzae: Ceftriaxone

Duration:
- N. meningitidis: 7 days
- H. influenzae: 7 days
- S. pneumoniae: 10-14 days
- Listeria: ≥21 days
- Gram-negative bacilli: 21 days

*2. Viral Meningitis:*
- Supportive care (hydration, analgesia)
- Acyclovir if HSV encephalitis suspected (until ruled out)
- Usually self-limited, resolves in 7-10 days

*3. Fungal Meningitis:*

Cryptococcal (HIV/immunocompromised):
- Induction: Amphotericin B + flucytosine x 2 weeks
- Consolidation: Fluconazole x 8 weeks
- Maintenance: Fluconazole (lifelong if HIV with low CD4)

*4. Tuberculous Meningitis:*
- Standard TB regimen (HRZE) x 2 months, then HR x 7-10 months
- Adjunctive corticosteroids (dexamethasone or prednisone)

*5. Supportive Care:*
- ICU admission for severe cases
- Seizure management (antiepileptics)
- ICP monitoring and management
- Fluid management (avoid overhydration)
- Treat complications (SIADH, cerebral edema)

*6. Chemoprophylaxis (Close Contacts):*

N. meningitidis:
- Rifampin, ciprofloxacin, or ceftriaxone
- Household contacts, healthcare workers with direct exposure

H. influenzae:
- Rifampin for household contacts with unvaccinated children

**Prevention:**
- Vaccinations:
  - Pneumococcal (PCV20, PPSV23)
  - Meningococcal (MenACWY, MenB)
  - Haemophilus influenzae type b (Hib)
- Chemoprophylaxis for close contacts

**Monitoring and Follow-up:**
- Repeat LP if no clinical improvement in 48-72 hours
- Neuroimaging if complications suspected
- Hearing assessment (bacterial meningitis can cause hearing loss)
- Neurologic follow-up for sequelae

**References:** See academic references below for IDSA meningitis guidelines and antimicrobial recommendations.`;
    }
    
    // Cellulitis
    else if (lowerQuery.includes('cellulitis')) {
      return `**Cellulitis: Comprehensive Overview**

**Pathophysiology:**
Cellulitis is a bacterial infection of the dermis and subcutaneous tissue, characterized by spreading erythema, warmth, and edema.

*Common Pathogens:*
- Beta-hemolytic streptococci (Group A Streptococcus) - most common
- Staphylococcus aureus (including MRSA)
- Other: Gram-negative bacteria (diabetics, immunocompromised)

*Risk Factors:*
- Skin barrier disruption (trauma, wounds, ulcers)
- Lymphedema
- Obesity
- Diabetes mellitus
- Peripheral vascular disease
- Immunosuppression
- Prior cellulitis

**Clinical Presentation:**
- Erythema (redness)
- Warmth
- Edema (swelling)
- Tenderness
- Poorly demarcated borders
- Fever (may be absent)
- Regional lymphadenopathy
- Lymphangitis (red streaking)

**Diagnostic Approach:**
- Clinical diagnosis (based on appearance)
- Blood cultures (if systemic symptoms or immunocompromised)
- Wound culture (if purulent drainage)
- Imaging (ultrasound, CT, MRI) if concern for abscess or necrotizing infection
- Exclude mimics: DVT, venous stasis dermatitis, contact dermatitis

**Evidence-Based Management:**

*1. Uncomplicated Cellulitis (Outpatient):*

Non-Purulent (No Abscess):
- Cephalexin 500 mg PO QID x 5-7 days
- OR dicloxacillin 500 mg PO QID x 5-7 days
- Penicillin allergy: Clindamycin 300-450 mg PO TID x 5-7 days

Purulent (Abscess Present):
- Incision and drainage (I&D) - primary treatment
- Add antibiotics if:
  - Severe infection
  - Systemic symptoms
  - Immunocompromised
  - Failed I&D alone
- MRSA coverage: TMP-SMX DS BID or doxycycline 100 mg BID x 5-7 days

*2. Complicated Cellulitis (Inpatient):*

Empiric IV Antibiotics:
- Vancomycin (for MRSA coverage)
- OR cefazolin (if MRSA unlikely)
- Add gram-negative coverage if:
  - Diabetic foot infection
  - Immunocompromised
  - Water exposure: Add fluoroquinolone or ceftazidime

Severe/Necrotizing:
- Broad-spectrum: Vancomycin + piperacillin-tazobactam (or carbapenem)
- Urgent surgical consultation
- Consider clindamycin (toxin suppression)

*3. Special Situations:*

Diabetic Foot Infection:
- Mild: Oral antibiotics (cephalexin, amoxicillin-clavulanate)
- Moderate-Severe: IV antibiotics with gram-negative and anaerobic coverage
- Wound care and offloading
- Vascular assessment

Facial Cellulitis:
- Consider MRSA coverage
- Evaluate for orbital or periorbital involvement
- Dental source evaluation

Perianal Cellulitis:
- Add anaerobic coverage
- Rule out perirectal abscess

*4. Supportive Care:*
- Elevation of affected limb
- Analgesia (NSAIDs, acetaminophen)
- Mark borders of erythema (monitor progression)
- Compression therapy (after acute phase)

*5. Prevention of Recurrence:*
- Treat underlying conditions (lymphedema, venous insufficiency)
- Skin care and moisturization
- Treat tinea pedis (athlete's foot)
- Weight loss if obese
- Compression stockings (if lymphedema)
- Antibiotic prophylaxis (if ≥3 episodes/year):
  - Penicillin VK 250-500 mg daily or BID
  - OR erythromycin 250 mg BID

**Monitoring and Follow-up:**
- Reassess in 48-72 hours
- Expect improvement within 24-48 hours of appropriate antibiotics
- If worsening: Consider resistant organism, abscess, or alternative diagnosis
- Transition to oral antibiotics when improving
- Complete full antibiotic course

**References:** See academic references below for IDSA skin and soft tissue infection guidelines.`;
    }
    
    // Generic response for other conditions with available references
    else if (references.length > 0 || websites.length > 0 || merckLinks.length > 0) {
      const systems = [...new Set(references.map(r => r.system))];
      const topics = [...new Set(references.map(r => r.topic))];
      
      // Extract key information from references
      let specificInfo = '';
      if (topics.length > 0) {
        specificInfo = `\n**Relevant Clinical Topics:**\nBased on your query, the following clinical areas are most relevant: ${topics.join(', ')}.\n\n`;
      }
      
      discussion = `**Medical Information**

Based on your query, I found relevant evidence-based information from ${systems.length > 0 ? systems.join(', ') : 'multiple medical'} sources, including the Merck Manual Professional and clinical practice guidelines.

${specificInfo}**Clinical Approach:**
For comprehensive information on this condition, including detailed pathophysiology, clinical presentation, diagnostic criteria, and evidence-based treatment recommendations, please review the academic references, clinical guidelines, and Merck Manual Professional links provided below.

**Key Resources:**
The academic references listed below represent current evidence-based guidelines and peer-reviewed literature on this topic. The Merck Manual Professional provides comprehensive, regularly updated clinical information including:
- Detailed disease pathophysiology and mechanisms
- Clinical presentation and diagnostic criteria
- Evidence-based treatment algorithms
- Monitoring recommendations and outcome measures
- Special population considerations
- Drug information and dosing guidelines

**Clinical Guidelines:**
The guideline websites below provide authoritative, evidence-based recommendations from leading medical societies and organizations. These resources offer:
- Current clinical practice guidelines
- Treatment algorithms and protocols
- Quality measures and performance indicators
- Patient education materials
- Continuing medical education resources

**Next Steps:**
1. Review the academic references for evidence-based recommendations
2. Consult the clinical guideline websites for detailed management protocols
3. Access the Merck Manual Professional for comprehensive clinical information
4. Consider consultation with appropriate specialists for complex cases

Please review the linked references, guideline websites, and Merck Manual Professional pages below for detailed, evidence-based information specific to your query.`;
    }

    return discussion;
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
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking and respond
    setTimeout(() => {
      const relevantWebsites = findRelevantWebsites(inputText);
      const relevantReferences = findRelevantReferences(inputText);
      const merckManualLinks = getMerckManualLinks(inputText);
      const diseaseDiscussion = generateDiseaseDiscussion(inputText, relevantReferences, relevantWebsites, merckManualLinks);
      
      let botText = '';
      
      if (diseaseDiscussion) {
        botText = diseaseDiscussion;
      } else if (relevantWebsites.length > 0 || relevantReferences.length > 0 || merckManualLinks.length > 0) {
        botText = `I found relevant information for your query. Please see the references, guideline websites, and Merck Manual Professional links below for detailed information.`;
      } else {
        botText = 'I couldn\'t find specific information for that query. Try asking about:\n\n• Specific diseases (e.g., "heart failure", "diabetes", "stroke", "asthma", "COPD")\n• Infectious diseases (e.g., "sepsis", "pneumonia", "meningitis", "tuberculosis", "HIV")\n• Disease processes or pathophysiology\n• Management and treatment approaches\n• Clinical guidelines for specific conditions';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        websites: relevantWebsites.length > 0 ? relevantWebsites : undefined,
        references: relevantReferences.length > 0 ? relevantReferences : undefined,
        diseaseDiscussion: diseaseDiscussion || undefined,
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
                Comprehensive, evidence-based medical information from the trusted Merck Manual Professional:
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
                The information above is supported by the following academic references. Tap any reference to view the full article:
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
                For the most current clinical guidelines and recommendations, visit these authoritative sources:
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
            placeholder="Ask about disease processes, management..."
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
