
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
} from 'react-native';
import { Stack } from 'expo-router';
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
}

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Medical Guidelines Chatbot. I can help you understand disease processes and provide evidence-based information from medical guidelines and academic references.\n\nAsk me about any medical topic, such as:\n• Disease processes (e.g., "Tell me about congestive heart failure")\n• Management strategies (e.g., "How is diabetes managed?")\n• Clinical guidelines (e.g., "What are the guidelines for stroke?")',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const findRelevantWebsites = (query: string) => {
    const allWebsites = getAllGuidelineWebsites();
    const lowerQuery = query.toLowerCase();
    
    // Keywords for different medical systems
    const keywords: { [key: string]: string[] } = {
      cardiology: ['heart', 'cardiac', 'cardio', 'arrhythmia', 'afib', 'valve', 'coronary', 'myocardial', 'hypertension', 'blood pressure', 'chf', 'congestive heart failure', 'heart failure'],
      pulmonary: ['lung', 'pulmonary', 'respiratory', 'asthma', 'copd', 'pneumonia', 'breathing', 'airway', 'bronch'],
      renal: ['kidney', 'renal', 'nephro', 'dialysis', 'urinary', 'glomerulo', 'proteinuria'],
      gastroenterology: ['stomach', 'gastro', 'intestin', 'liver', 'hepat', 'pancrea', 'esophag', 'colon', 'bowel', 'digestive', 'crohn', 'colitis', 'celiac'],
      endocrine: ['diabetes', 'thyroid', 'hormone', 'endocrine', 'pituitary', 'adrenal', 'insulin', 'glucose', 'metabolic'],
      hematology: ['blood', 'anemia', 'hemato', 'leukemia', 'lymphoma', 'coagulation', 'thrombosis', 'platelet'],
      neurology: ['brain', 'neuro', 'stroke', 'seizure', 'epilepsy', 'headache', 'migraine', 'dementia', 'alzheimer', 'parkinson', 'multiple sclerosis'],
      'emergency medicine': ['emergency', 'trauma', 'acute', 'critical', 'shock', 'resuscitation'],
      'infectious disease': ['infection', 'infectious', 'bacteria', 'virus', 'antibiotic', 'sepsis', 'fever'],
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

  const generateDiseaseDiscussion = (query: string, references: AcademicReference[], websites: any[]): string => {
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

    if (!isDiseaseQuestion || (references.length === 0 && websites.length === 0)) {
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

The management approach is supported by extensive clinical trial evidence and is continuously updated based on emerging research. For the most current guidelines and detailed protocols, please refer to the authoritative sources listed below.`;
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

**Emerging Therapies:**
- Newer GLP-1/GIP dual agonists
- Automated insulin delivery systems
- Continuous glucose monitoring technology

The management of diabetes requires a comprehensive, patient-centered approach with regular monitoring and adjustment of therapy. For detailed, evidence-based guidelines and the latest recommendations, please consult the authoritative sources listed below.`;
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

**Long-term Management:**
- Regular follow-up and medication adherence
- Continued risk factor modification
- Monitoring for complications (seizures, depression, spasticity)
- Caregiver support and education

**Prognosis:**
- Depends on stroke severity, location, and time to treatment
- Early intervention significantly improves outcomes
- Rehabilitation potential varies by individual

The management of stroke requires rapid recognition, immediate intervention, and comprehensive long-term care. For the most current evidence-based guidelines and detailed protocols, please refer to the authoritative sources listed below.`;
    }
    // Asthma
    else if (lowerQuery.includes('asthma')) {
      discussion = `**Asthma: Comprehensive Overview**

**Pathophysiology:**
Asthma is a chronic inflammatory disorder of the airways characterized by:
- Airway inflammation (eosinophils, mast cells, T lymphocytes)
- Bronchial hyperresponsiveness to various stimuli
- Variable and reversible airflow obstruction
- Airway remodeling in chronic disease

The inflammatory cascade involves:
- Release of inflammatory mediators (histamine, leukotrienes, cytokines)
- Bronchial smooth muscle contraction
- Mucus hypersecretion
- Airway edema

**Clinical Presentation:**
- Episodic wheezing
- Shortness of breath
- Chest tightness
- Cough (often worse at night or early morning)
- Symptoms triggered by allergens, exercise, cold air, infections, or irritants
- Variable symptom severity and frequency

**Diagnosis:**
- Clinical history and physical examination
- Spirometry showing reversible obstruction (FEV1 improvement ≥12% and ≥200 mL after bronchodilator)
- Peak flow monitoring
- Bronchoprovocation testing if spirometry normal
- Allergy testing to identify triggers

**Asthma Severity Classification:**
- Intermittent: Symptoms ≤2 days/week
- Mild persistent: Symptoms >2 days/week but not daily
- Moderate persistent: Daily symptoms
- Severe persistent: Symptoms throughout the day

**Comprehensive Management Approach:**

*1. Controller Medications (Long-term):*
- Inhaled corticosteroids (ICS): First-line anti-inflammatory therapy
- ICS + Long-acting beta-agonists (LABA): For moderate-severe asthma
- Leukotriene modifiers (montelukast): Alternative or add-on therapy
- Long-acting muscarinic antagonists (LAMA): Add-on for severe asthma
- Biologic therapies for severe asthma:
  • Anti-IgE (omalizumab) for allergic asthma
  • Anti-IL-5 (mepolizumab, reslizumab) for eosinophilic asthma
  • Anti-IL-4/IL-13 (dupilumab) for Type 2 inflammation

*2. Reliever Medications (Quick-relief):*
- Short-acting beta-agonists (SABA): Albuterol for acute symptoms
- Short-acting anticholinergics: Alternative bronchodilator
- Systemic corticosteroids: For exacerbations

*3. Stepwise Approach to Therapy:*
- Step 1: As-needed SABA alone
- Step 2: Low-dose ICS + as-needed SABA
- Step 3: Low-dose ICS-LABA + as-needed SABA
- Step 4: Medium-dose ICS-LABA + as-needed SABA
- Step 5: High-dose ICS-LABA + consider add-on therapies
- Step 6: High-dose ICS-LABA + oral corticosteroids + biologics

*4. Asthma Action Plan:*
- Green zone: Well-controlled, continue regular medications
- Yellow zone: Worsening symptoms, increase treatment
- Red zone: Severe symptoms, seek emergency care
- Peak flow monitoring and symptom tracking

*5. Trigger Identification and Avoidance:*
- Allergen avoidance (dust mites, pets, pollen, mold)
- Smoking cessation and avoid secondhand smoke
- Avoid air pollution and irritants
- Influenza and pneumococcal vaccination
- Manage comorbidities (GERD, rhinitis, obesity)

*6. Patient Education:*
- Proper inhaler technique (critical for medication delivery)
- Understanding of disease and treatment goals
- Self-monitoring and symptom recognition
- When to seek medical attention
- Adherence to controller medications

**Monitoring and Follow-up:**
- Regular assessment of asthma control
- Spirometry at diagnosis and periodically
- Review of inhaler technique at each visit
- Medication adjustment based on control
- Step-down therapy when well-controlled for 3+ months

**Special Considerations:**
- Exercise-induced bronchoconstriction: Pre-treatment with SABA
- Pregnancy: Continue controller therapy (most ICS safe)
- Occupational asthma: Identify and remove from exposure
- Aspirin-exacerbated respiratory disease: Avoid NSAIDs

**Acute Exacerbation Management:**
- Assess severity (mild, moderate, severe, life-threatening)
- Oxygen to maintain SpO2 >90%
- Repeated SABA administration
- Systemic corticosteroids (oral or IV)
- Ipratropium bromide for severe exacerbations
- Magnesium sulfate for severe cases
- ICU admission for respiratory failure

The management of asthma requires ongoing assessment, patient education, and adjustment of therapy to achieve optimal control. For detailed, evidence-based guidelines and the latest recommendations, please consult the authoritative sources listed below.`;
    }
    // COPD
    else if (lowerQuery.includes('copd') || lowerQuery.includes('chronic obstructive')) {
      discussion = `**Chronic Obstructive Pulmonary Disease (COPD): Comprehensive Overview**

**Pathophysiology:**
COPD is a progressive lung disease characterized by persistent airflow limitation that is not fully reversible. It encompasses:

*Chronic Bronchitis:*
- Chronic productive cough for ≥3 months in 2 consecutive years
- Mucus hypersecretion and airway inflammation
- Bronchial wall thickening

*Emphysema:*
- Destruction of alveolar walls
- Loss of elastic recoil
- Air trapping and hyperinflation

Primary cause: Cigarette smoking (85-90% of cases)
Other causes: Alpha-1 antitrypsin deficiency, occupational exposures, biomass fuel exposure

**Clinical Presentation:**
- Progressive dyspnea (hallmark symptom)
- Chronic cough (may be productive)
- Wheezing
- Chest tightness
- Reduced exercise tolerance
- Frequent respiratory infections

**Diagnosis:**
- Spirometry: Post-bronchodilator FEV1/FVC <0.70 confirms airflow limitation
- Chest X-ray or CT: Assess for hyperinflation, bullae, other pathology
- Alpha-1 antitrypsin level: Screen in young patients or non-smokers
- Arterial blood gas: Assess for hypoxemia and hypercapnia in severe disease

**COPD Severity Classification (GOLD Criteria):**
- GOLD 1 (Mild): FEV1 ≥80% predicted
- GOLD 2 (Moderate): FEV1 50-79% predicted
- GOLD 3 (Severe): FEV1 30-49% predicted
- GOLD 4 (Very Severe): FEV1 <30% predicted

**Comprehensive Management Approach:**

*1. Smoking Cessation:*
- Most important intervention to slow disease progression
- Counseling + pharmacotherapy (nicotine replacement, varenicline, bupropion)
- Repeated interventions at every visit

*2. Pharmacologic Therapy:*

Bronchodilators (cornerstone of treatment):
- Short-acting beta-agonists (SABA): Albuterol for acute relief
- Short-acting anticholinergics (SAMA): Ipratropium
- Long-acting beta-agonists (LABA): Formoterol, salmeterol
- Long-acting muscarinic antagonists (LAMA): Tiotropium, umeclidinium
- Combination LABA-LAMA: Preferred for most patients

Anti-inflammatory therapy:
- Inhaled corticosteroids (ICS): For patients with frequent exacerbations or eosinophilia
- ICS-LABA-LAMA triple therapy: For severe disease with exacerbations
- Roflumilast (PDE4 inhibitor): For severe COPD with chronic bronchitis

Other medications:
- Systemic corticosteroids: For acute exacerbations only
- Antibiotics: For bacterial exacerbations
- Mucolytics: May reduce exacerbations in selected patients

*3. Oxygen Therapy:*
- Long-term oxygen therapy (LTOT) for:
  • Resting PaO2 ≤55 mmHg or SpO2 ≤88%
  • PaO2 56-59 mmHg with evidence of cor pulmonale or polycythemia
- Goal: SpO2 ≥90% for ≥15 hours/day
- Improves survival in hypoxemic patients

*4. Pulmonary Rehabilitation:*
- Exercise training
- Education and self-management
- Nutritional counseling
- Psychosocial support
- Improves symptoms, quality of life, and reduces hospitalizations

*5. Vaccinations:*
- Annual influenza vaccine
- Pneumococcal vaccines (PCV20 or PCV15 + PPSV23)
- COVID-19 vaccination
- Consider pertussis vaccine

*6. Surgical and Interventional Options:*
- Lung volume reduction surgery: Selected patients with upper lobe emphysema
- Endobronchial valve placement: For severe emphysema with hyperinflation
- Bullectomy: For large bullae causing compression
- Lung transplantation: End-stage disease in selected patients

**Exacerbation Management:**
- Increased bronchodilator therapy (SABA ± SAMA)
- Systemic corticosteroids (prednisone 40mg x 5 days)
- Antibiotics if increased sputum purulence or pneumonia
- Oxygen to maintain SpO2 88-92%
- Non-invasive ventilation for respiratory failure
- Hospital admission for severe exacerbations

**Monitoring and Follow-up:**
- Regular spirometry to assess progression
- Symptom assessment (CAT score, mMRC dyspnea scale)
- Exacerbation frequency
- Oxygen saturation monitoring
- Comorbidity management (cardiovascular disease, osteoporosis, depression)

**Comorbidities:**
- Cardiovascular disease (common and important)
- Osteoporosis (screen and treat)
- Depression and anxiety
- Lung cancer (increased risk)
- Gastroesophageal reflux disease

The management of COPD requires a comprehensive approach addressing smoking cessation, pharmacotherapy, rehabilitation, and comorbidities. For detailed, evidence-based guidelines and the latest recommendations, please consult the authoritative sources listed below.`;
    }
    // Hypertension
    else if (lowerQuery.includes('hypertension') || lowerQuery.includes('high blood pressure')) {
      discussion = `**Hypertension: Comprehensive Overview**

**Definition and Classification:**
Hypertension is defined as persistently elevated blood pressure. Current guidelines classify:

- Normal: <120/80 mmHg
- Elevated: 120-129/<80 mmHg
- Stage 1 Hypertension: 130-139/80-89 mmHg
- Stage 2 Hypertension: ≥140/90 mmHg
- Hypertensive Crisis: ≥180/120 mmHg

**Pathophysiology:**
Hypertension results from increased peripheral vascular resistance and/or increased cardiac output due to:
- Increased sympathetic nervous system activity
- Renin-angiotensin-aldosterone system (RAAS) activation
- Endothelial dysfunction
- Increased sodium retention
- Vascular remodeling

*Primary (Essential) Hypertension (90-95%):*
- Multifactorial etiology
- Genetic and environmental factors
- Associated with obesity, high sodium intake, alcohol, stress

*Secondary Hypertension (5-10%):*
- Renal disease (most common)
- Renovascular disease
- Primary aldosteronism
- Pheochromocytoma
- Cushing syndrome
- Coarctation of aorta
- Medications (NSAIDs, oral contraceptives, steroids)

**Clinical Presentation:**
- Often asymptomatic ("silent killer")
- Headache (usually with severe hypertension)
- Dizziness
- Blurred vision
- Chest pain or dyspnea (if target organ damage)

**Diagnosis:**
- Multiple BP measurements on separate occasions
- Proper technique: Seated, arm supported, appropriate cuff size
- Ambulatory BP monitoring or home BP monitoring for confirmation
- Assess for secondary causes in young patients, resistant hypertension, or sudden onset

**Initial Evaluation:**
- Complete history and physical examination
- Laboratory tests: Urinalysis, creatinine, eGFR, electrolytes, fasting glucose, lipid panel
- ECG to assess for LVH
- Consider echocardiogram if LVH suspected

**Comprehensive Management Approach:**

*1. Lifestyle Modifications (First-line for all patients):*
- Weight loss: 5-10 kg can reduce BP by 5-20 mmHg
- DASH diet: Rich in fruits, vegetables, low-fat dairy, reduced saturated fat
- Sodium restriction: <2.3 g/day (ideally <1.5 g/day)
- Physical activity: 150 min/week moderate-intensity aerobic exercise
- Alcohol moderation: ≤2 drinks/day for men, ≤1 drink/day for women
- Smoking cessation
- Stress management

*2. Pharmacologic Therapy:*

First-line agents:
- ACE inhibitors (lisinopril, enalapril): Preferred for diabetes, CKD, heart failure
- ARBs (losartan, valsartan): Alternative to ACE-I
- Calcium channel blockers (amlodipine, diltiazem): Effective in African Americans, elderly
- Thiazide diuretics (hydrochlorothiazide, chlorthalidone): Cost-effective, proven mortality benefit

Initiation strategy:
- Stage 1 HTN: Lifestyle modifications, consider single agent if high CV risk
- Stage 2 HTN: Two first-line agents from different classes
- Start low, go slow in elderly patients

Combination therapy:
- ACE-I or ARB + CCB
- ACE-I or ARB + thiazide diuretic
- CCB + thiazide diuretic
- Avoid ACE-I + ARB combination

Additional agents for resistant hypertension:
- Spironolactone (most effective fourth agent)
- Beta-blockers (if compelling indication)
- Alpha-blockers
- Direct vasodilators (hydralazine, minoxidil)

*3. Blood Pressure Targets:*
- General population: <130/80 mmHg
- Diabetes: <130/80 mmHg
- CKD: <130/80 mmHg
- Elderly (≥65 years): <130/80 mmHg if tolerated
- Individualize based on comorbidities and tolerability

*4. Management of Resistant Hypertension:*
- Confirm true resistance (proper BP measurement, medication adherence)
- Screen for secondary causes
- Optimize lifestyle modifications
- Ensure adequate diuretic therapy
- Add spironolactone or other fourth agent
- Consider renal denervation in selected cases

**Target Organ Damage Assessment:**
- Cardiovascular: LVH, heart failure, coronary artery disease
- Cerebrovascular: Stroke, TIA, cognitive impairment
- Renal: CKD, proteinuria
- Retinal: Hypertensive retinopathy
- Peripheral vascular disease

**Special Populations:**

*Pregnancy:*
- Methyldopa, labetalol, nifedipine are safe
- Avoid ACE-I, ARBs, and direct renin inhibitors (teratogenic)

*African Americans:*
- Higher prevalence and more severe disease
- CCBs and thiazides particularly effective
- May require combination therapy

*Elderly:*
- Start with lower doses
- Monitor for orthostatic hypotension
- Benefits of treatment extend to age >80

**Hypertensive Emergencies:**
- BP ≥180/120 mmHg with acute target organ damage
- Requires immediate BP reduction (not necessarily to normal)
- IV medications in ICU setting
- Reduce BP by 25% in first hour, then gradually to 160/100-110 mmHg

**Monitoring and Follow-up:**
- Monthly visits until BP controlled
- Every 3-6 months once stable
- Home BP monitoring encouraged
- Annual assessment of target organ damage
- Medication adherence and side effect monitoring

The management of hypertension requires a comprehensive approach with lifestyle modifications and appropriate pharmacotherapy to reduce cardiovascular risk. For detailed, evidence-based guidelines and the latest recommendations, please consult the authoritative sources listed below.`;
    }
    // Generic response for other conditions
    else if (references.length > 0 || websites.length > 0) {
      const systems = [...new Set(references.map(r => r.system))];
      const topics = [...new Set(references.map(r => r.topic))];
      
      discussion = `**Medical Information**

Based on your query, I found relevant evidence-based information from ${systems.length > 0 ? systems.join(', ') : 'multiple medical'} sources.

**Overview:**
The topic you're asking about is an important area in clinical medicine that requires comprehensive evaluation and evidence-based management. Medical guidelines and academic literature provide structured approaches to understanding the pathophysiology, diagnosis, and treatment of this condition.

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
The academic references and guideline websites listed below provide comprehensive, peer-reviewed information including:
- Detailed pathophysiology and disease mechanisms
- Diagnostic criteria and evaluation protocols
- Treatment algorithms and management strategies
- Monitoring recommendations and outcome measures
- Special population considerations
- Emerging therapies and research directions

Please review the linked references and guideline websites below for detailed, evidence-based information specific to your query.`;
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
      const diseaseDiscussion = generateDiseaseDiscussion(inputText, relevantReferences, relevantWebsites);
      
      let botText = '';
      
      if (diseaseDiscussion) {
        botText = diseaseDiscussion;
      } else if (relevantWebsites.length > 0 || relevantReferences.length > 0) {
        botText = `I found relevant information for your query. Please see the references and guideline websites below for detailed information.`;
      } else {
        botText = 'I couldn\'t find specific information for that query. Try asking about:\n\n• Specific diseases (e.g., "heart failure", "diabetes", "stroke", "asthma", "COPD")\n• Disease processes or pathophysiology\n• Management and treatment approaches\n• Clinical guidelines for specific conditions';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        websites: relevantWebsites.length > 0 ? relevantWebsites : undefined,
        references: relevantReferences.length > 0 ? relevantReferences : undefined,
        diseaseDiscussion: diseaseDiscussion || undefined,
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
                <Text style={styles.sectionTitle}>References Used</Text>
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
                <Text style={styles.sectionTitle}>Guideline Websites</Text>
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
          title: 'Medical Guidelines Chatbot',
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
  sectionSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 18,
    fontStyle: 'italic',
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
});
