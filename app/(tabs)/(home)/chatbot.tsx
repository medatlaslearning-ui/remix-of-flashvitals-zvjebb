
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
      'pe': [
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
      'dementia': [
        {
          title: 'Dementia Overview - Merck Manual Professional',
          url: `${baseUrl}/neurologic-disorders/delirium-and-dementia/dementia`,
          description: 'Dementia diagnosis and management approach'
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
      cardiology: ['heart', 'cardiac', 'cardio', 'arrhythmia', 'afib', 'valve', 'coronary', 'myocardial', 'hypertension', 'blood pressure', 'chf', 'congestive heart failure', 'heart failure'],
      pulmonary: ['lung', 'pulmonary', 'respiratory', 'asthma', 'copd', 'pneumonia', 'breathing', 'airway', 'bronch'],
      renal: ['kidney', 'renal', 'nephro', 'dialysis', 'urinary', 'glomerulo', 'proteinuria', 'aki', 'ckd'],
      gastroenterology: ['stomach', 'gastro', 'intestin', 'liver', 'hepat', 'pancrea', 'esophag', 'colon', 'bowel', 'digestive', 'crohn', 'colitis', 'celiac', 'cirrhosis', 'gerd', 'ibd'],
      endocrine: ['diabetes', 'thyroid', 'hormone', 'endocrine', 'pituitary', 'adrenal', 'insulin', 'glucose', 'metabolic'],
      hematology: ['blood', 'anemia', 'hemato', 'leukemia', 'lymphoma', 'coagulation', 'thrombosis', 'platelet', 'dvt'],
      neurology: ['brain', 'neuro', 'stroke', 'seizure', 'epilepsy', 'headache', 'migraine', 'dementia', 'alzheimer', 'parkinson', 'multiple sclerosis'],
      'emergency medicine': ['emergency', 'trauma', 'acute', 'critical', 'shock', 'resuscitation'],
      'infectious disease': ['infection', 'infectious', 'bacteria', 'virus', 'antibiotic', 'sepsis', 'fever', 'fungal', 'parasitic', 'sti', 'hiv', 'hepatitis', 'covid', 'pneumonia', 'meningitis', 'endocarditis', 'tuberculosis', 'malaria', 'uti', 'cellulitis'],
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
      lowerQuery.includes('guidelines');

    if (!isDiseaseQuestion || (references.length === 0 && websites.length === 0 && merckLinks.length === 0)) {
      return '';
    }

    // Generate a discussion based on the query and available references
    let discussion = '';

    // Congestive Heart Failure
    if (lowerQuery.includes('heart failure') || lowerQuery.includes('chf') || lowerQuery.includes('congestive heart failure')) {
      discussion = `**Congestive Heart Failure (CHF): Comprehensive Overview**

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

**For More Comprehensive Information:**
The Merck Manual Professional provides detailed, regularly updated information on heart failure including the latest evidence-based guidelines, diagnostic algorithms, and treatment protocols. See the Merck Manual links below for in-depth coverage.`;
    }
    // Diabetes
    else if (lowerQuery.includes('diabetes')) {
      discussion = `**Diabetes Mellitus: Comprehensive Overview**

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

**For More Comprehensive Information:**
The Merck Manual Professional provides extensive coverage of diabetes mellitus including detailed pathophysiology, diagnostic algorithms, medication selection, and complication management. See the Merck Manual links below for complete clinical guidance.`;
    }
    // Stroke
    else if (lowerQuery.includes('stroke')) {
      discussion = `**Stroke: Comprehensive Overview**

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

**For More Comprehensive Information:**
The Merck Manual Professional provides detailed stroke protocols including acute management algorithms, secondary prevention strategies, and rehabilitation approaches. See the Merck Manual links below for complete clinical guidance.`;
    }
    // Sepsis
    else if (lowerQuery.includes('sepsis') || lowerQuery.includes('septic shock')) {
      discussion = `**Sepsis and Septic Shock: Comprehensive Overview**

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

**For More Comprehensive Information:**
The Merck Manual Professional provides detailed sepsis management protocols including the latest Surviving Sepsis Campaign guidelines, antimicrobial selection, and hemodynamic support strategies. See the Merck Manual links below for complete clinical guidance.`;
    }
    // Generic response for other conditions
    else if (references.length > 0 || websites.length > 0 || merckLinks.length > 0) {
      const systems = [...new Set(references.map(r => r.system))];
      
      discussion = `**Medical Information**

Based on your query, I found relevant evidence-based information from ${systems.length > 0 ? systems.join(', ') : 'multiple medical'} sources, including the Merck Manual Professional.

**Overview:**
The topic you're asking about is an important area in clinical medicine that requires comprehensive evaluation and evidence-based management. Medical guidelines, academic literature, and the Merck Manual Professional provide structured approaches to understanding the pathophysiology, diagnosis, and treatment of this condition.

**Key Clinical Considerations:**
- Accurate diagnosis requires thorough clinical assessment and appropriate diagnostic testing
- Management should be individualized based on patient-specific factors including age, comorbidities, and disease severity
- Evidence-based guidelines provide recommendations for optimal therapeutic approaches
- Regular monitoring and follow-up are essential for assessing treatment response and adjusting therapy
- Patient education and shared decision-making improve outcomes and adherence

**Approach to Care:**
The comprehensive management of this condition involves:
1. Detailed history and physical examination
2. Appropriate diagnostic evaluation
3. Risk stratification and prognostic assessment
4. Evidence-based therapeutic interventions
5. Monitoring for complications and treatment response
6. Addressing comorbidities and psychosocial factors
7. Long-term follow-up and disease management

**Evidence-Based Resources:**
The academic references, guideline websites, and Merck Manual Professional links listed below provide comprehensive, peer-reviewed information including:
- Detailed pathophysiology and disease mechanisms
- Diagnostic criteria and evaluation protocols
- Treatment algorithms and management strategies
- Monitoring recommendations and outcome measures
- Special population considerations
- Emerging therapies and research directions

**Merck Manual Professional Integration:**
The Merck Manual Professional is a comprehensive medical encyclopedia that provides:
- Regularly updated, evidence-based clinical information
- Detailed disease monographs with pathophysiology, diagnosis, and treatment
- Clinical pearls and practical management tips
- Drug information and dosing guidelines
- Differential diagnosis tools

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
        botText = 'I couldn\'t find specific information for that query. Try asking about:\n\n• Specific diseases (e.g., "heart failure", "diabetes", "stroke", "asthma", "COPD")\n• Infectious diseases (e.g., "sepsis", "pneumonia", "meningitis")\n• Disease processes or pathophysiology\n• Management and treatment approaches\n• Clinical guidelines for specific conditions';
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
