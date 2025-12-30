
/**
 * Society of Critical Care Medicine (SCCM) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the Society of Critical Care Medicine.
 * SCCM provides evidence-based guidelines for critical care and intensive care medicine.
 * 
 * INTEGRATION PHASE: SCCM Guidelines (Phase 17 - Pulmonary/Critical Care Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Strong, Weak)
 * - Quality of evidence (High, Moderate, Low, Very Low)
 * - Clinical implementation guidance
 * - SCCM guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from SCCM guidelines but presented
 * in an original format for medical education purposes.
 */

export interface SCCMGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  strongRecommendations: string[];
  weakRecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  sccmUrl: string;
  publicationYear: number;
}

export const sccmGuidelinesKnowledge: SCCMGuidelineEntry[] = [
  // SEPSIS AND SEPTIC SHOCK GUIDELINES (SURVIVING SEPSIS CAMPAIGN)
  {
    topic: 'Surviving Sepsis Campaign: Management of Sepsis and Septic Shock - SCCM Guideline',
    keywords: ['sepsis', 'septic shock', 'severe sepsis', 'sepsis management', 'surviving sepsis', 'lactate', 'fluid resuscitation', 'vasopressor', 'norepinephrine', 'antibiotics', 'source control'],
    system: 'Pulmonary',
    guidelineSummary: 'The Surviving Sepsis Campaign guideline provides evidence-based recommendations for the management of sepsis and septic shock. The guideline emphasizes early recognition, prompt administration of antibiotics within 1 hour, aggressive fluid resuscitation with crystalloids, and vasopressor support (norepinephrine first-line) to maintain MAP ≥65 mmHg. Source control of infection should be achieved as soon as possible. The guideline also addresses corticosteroids, blood product transfusion, glucose control, and mechanical ventilation in sepsis.',
    strongRecommendations: [
      'For patients with sepsis or septic shock, we recommend administration of IV antimicrobials within 1 hour of recognition (Strong recommendation, Moderate quality evidence)',
      'For patients with septic shock, we recommend initial fluid resuscitation with at least 30 mL/kg of IV crystalloid within the first 3 hours (Strong recommendation, Low quality evidence)',
      'For patients with septic shock requiring vasopressors, we recommend norepinephrine as the first-line vasopressor (Strong recommendation, Moderate quality evidence)',
      'For patients with septic shock, we recommend targeting a mean arterial pressure (MAP) of 65 mmHg (Strong recommendation, Moderate quality evidence)',
      'For patients with sepsis, we recommend measuring lactate levels and remeasuring if initial lactate is elevated (Strong recommendation, Low quality evidence)',
      'For patients with sepsis and a source of infection amenable to source control, we recommend achieving source control as soon as medically and logistically practical (Strong recommendation, Low quality evidence)',
      'For patients with sepsis-induced ARDS, we recommend using low tidal volume ventilation (6 mL/kg predicted body weight) (Strong recommendation, High quality evidence)',
      'For patients with septic shock and inadequate response to fluids and norepinephrine, we recommend adding vasopressin (0.03-0.04 units/min) or epinephrine (Strong recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'For patients with septic shock, we suggest using dynamic measures (passive leg raise, fluid challenge) over static measures (CVP) to guide fluid resuscitation (Weak recommendation, Low quality evidence)',
      'For patients with septic shock and persistent hypotension despite adequate fluid resuscitation and norepinephrine, we suggest adding IV hydrocortisone (200 mg/day) (Weak recommendation, Low quality evidence)',
      'For patients with sepsis, we suggest against using IV immunoglobulins (Weak recommendation, Low quality evidence)',
      'For patients with septic shock, we suggest transfusing red blood cells when hemoglobin <7 g/dL rather than higher thresholds (Weak recommendation, Moderate quality evidence)',
      'For patients with sepsis, we suggest targeting blood glucose <180 mg/dL rather than tight glucose control (Weak recommendation, Moderate quality evidence)',
      'For patients with septic shock, we suggest using balanced crystalloids over normal saline (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and meta-analyses; Weak recommendations are based on Low quality evidence',
    clinicalImplementation: 'Implementation of Surviving Sepsis Campaign guidelines requires systematic approach with sepsis bundles. HOUR-1 BUNDLE: (1) Measure lactate level (remeasure if >2 mmol/L); (2) Obtain blood cultures before antibiotics; (3) Administer broad-spectrum antibiotics within 1 hour; (4) Begin rapid fluid resuscitation with 30 mL/kg crystalloid (lactated Ringer or balanced crystalloid preferred over normal saline) for hypotension or lactate ≥4 mmol/L; (5) Apply vasopressors if hypotensive during or after fluid resuscitation to maintain MAP ≥65 mmHg. VASOPRESSOR MANAGEMENT: First-line: norepinephrine (start 0.05 mcg/kg/min, titrate to MAP ≥65 mmHg). Second-line: add vasopressin 0.03-0.04 units/min or epinephrine 0.05-0.5 mcg/kg/min. Consider hydrocortisone 200 mg/day (50 mg IV q6h or continuous infusion) if refractory shock. SOURCE CONTROL: Identify and control source of infection within 6-12 hours (drain abscess, remove infected device, debride necrotic tissue). SUPPORTIVE CARE: Lung-protective ventilation if ARDS (6 mL/kg PBW, plateau pressure <30 cm H2O). Transfuse RBCs if Hb <7 g/dL. Target glucose <180 mg/dL. DVT prophylaxis. Stress ulcer prophylaxis if risk factors.',
    keyPoints: [
      'Antibiotics within 1 hour of sepsis recognition',
      'Fluid resuscitation: 30 mL/kg crystalloid within 3 hours',
      'Norepinephrine is first-line vasopressor (target MAP ≥65 mmHg)',
      'Measure lactate and remeasure if elevated',
      'Source control within 6-12 hours if feasible',
      'Add vasopressin or epinephrine if inadequate response to norepinephrine',
      'Consider hydrocortisone 200 mg/day for refractory shock',
      'Lung-protective ventilation (6 mL/kg PBW) if ARDS',
    ],
    sccmUrl: 'https://www.sccm.org/SurvivingSepsisCampaign/Guidelines',
    publicationYear: 2021,
  },

  // PAIN, AGITATION, DELIRIUM GUIDELINES
  {
    topic: 'Pain, Agitation, Delirium, Immobility, and Sleep Disruption (PADIS) - SCCM Guideline',
    keywords: ['pain', 'agitation', 'delirium', 'sedation', 'icu delirium', 'rass', 'cam-icu', 'analgesia', 'sedation protocol', 'early mobilization', 'sleep disruption'],
    system: 'Pulmonary',
    guidelineSummary: 'The SCCM PADIS guideline provides evidence-based recommendations for the assessment, prevention, and management of pain, agitation, delirium, immobility, and sleep disruption in critically ill adults. The guideline emphasizes routine pain assessment, analgesia-first sedation approach, light sedation targets, daily sedation interruption, delirium monitoring with CAM-ICU, non-pharmacologic delirium prevention, early mobilization, and sleep promotion strategies.',
    strongRecommendations: [
      'For critically ill adults, we recommend routine pain assessment using validated tools (BPS, CPOT) (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults with pain, we recommend IV opioids as first-line therapy (Strong recommendation, Low quality evidence)',
      'For critically ill adults receiving mechanical ventilation, we recommend using light sedation (RASS -1 to 0) over deep sedation (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults receiving mechanical ventilation, we recommend daily sedation interruption or light sedation protocols (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults, we recommend routine delirium monitoring using validated tools (CAM-ICU, ICDSC) (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults at risk for delirium, we recommend early mobilization and exercise (Strong recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'For critically ill adults with pain, we suggest using multimodal analgesia (opioids + non-opioids) over opioids alone (Weak recommendation, Low quality evidence)',
      'For critically ill adults requiring sedation, we suggest using propofol or dexmedetomidine over benzodiazepines (Weak recommendation, Moderate quality evidence)',
      'For critically ill adults with delirium, we suggest against routine use of antipsychotics (haloperidol, quetiapine) (Weak recommendation, Moderate quality evidence)',
      'For critically ill adults with delirium, we suggest using dexmedetomidine over benzodiazepines for sedation (Weak recommendation, Low quality evidence)',
      'For critically ill adults, we suggest implementing strategies to promote sleep (noise reduction, light management, clustering care) (Weak recommendation, Low quality evidence)',
      'For critically ill adults, we suggest using non-pharmacologic interventions (reorientation, cognitive stimulation, sleep hygiene) to prevent delirium (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on Moderate quality evidence from randomized controlled trials; Weak recommendations are based on Low to Moderate quality evidence',
    clinicalImplementation: 'Implementation of PADIS guidelines requires systematic approach with ABCDEF bundle. A - ASSESS, PREVENT, AND MANAGE PAIN: Use BPS or CPOT for pain assessment (target <3). Treat pain first with IV opioids (fentanyl 25-100 mcg q1-2h PRN, morphine 2-5 mg q2-4h PRN). Add non-opioids (acetaminophen, gabapentin) for multimodal analgesia. B - BOTH SAT AND SBT: Daily sedation interruption (SAT) and spontaneous breathing trial (SBT). C - CHOICE OF SEDATION: Target light sedation (RASS -1 to 0). Prefer propofol (25-75 mcg/kg/min) or dexmedetomidine (0.2-0.7 mcg/kg/h) over benzodiazepines. Use sedation protocol. D - DELIRIUM MONITORING AND MANAGEMENT: Screen for delirium twice daily with CAM-ICU. Prevent delirium with non-pharmacologic interventions (reorientation, glasses/hearing aids, early mobilization, sleep promotion). Avoid antipsychotics for routine delirium treatment. E - EARLY MOBILIZATION: Start mobilization within 24-48 hours of ICU admission. Progress from passive range of motion to sitting, standing, walking. F - FAMILY ENGAGEMENT: Encourage family presence and participation in care. SLEEP PROMOTION: Reduce noise, dim lights at night, cluster care, avoid unnecessary nighttime procedures.',
    keyPoints: [
      'Routine pain assessment with BPS or CPOT (target <3)',
      'Analgesia-first approach: treat pain before sedation',
      'Light sedation target (RASS -1 to 0) over deep sedation',
      'Daily sedation interruption (SAT) and spontaneous breathing trial (SBT)',
      'Prefer propofol or dexmedetomidine over benzodiazepines',
      'Routine delirium monitoring with CAM-ICU twice daily',
      'Non-pharmacologic delirium prevention (reorientation, early mobilization)',
      'Early mobilization within 24-48 hours of ICU admission',
    ],
    sccmUrl: 'https://www.sccm.org/Clinical-Resources/Guidelines/Guidelines/Clinical-Practice-Guidelines-for-the-Prevention-and-Management-of-Pain-Agitation-Delirium-Immobility-and-Sleep-Disruption-in-Adult-Patients-in-the-ICU',
    publicationYear: 2018,
  },

  // NUTRITION GUIDELINES
  {
    topic: 'Nutrition Therapy in Critically Ill Adults - SCCM/ASPEN Guideline',
    keywords: ['nutrition', 'enteral nutrition', 'parenteral nutrition', 'feeding', 'icu nutrition', 'malnutrition', 'nutritional support', 'tube feeding', 'trophic feeding'],
    system: 'Pulmonary',
    guidelineSummary: 'The SCCM/ASPEN guideline for nutrition therapy in critically ill adults provides evidence-based recommendations for nutritional assessment, route of feeding, timing of initiation, and nutritional targets. The guideline emphasizes early enteral nutrition (within 24-48 hours) over parenteral nutrition for most patients. Trophic (low-dose) feeding is recommended initially for patients with shock or high vasopressor requirements. The guideline also addresses protein targets, supplemental parenteral nutrition, and special populations.',
    strongRecommendations: [
      'For critically ill adults who require nutrition support, we recommend enteral nutrition over parenteral nutrition (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults who can be fed enterally, we recommend initiating enteral nutrition within 24-48 hours of ICU admission (Strong recommendation, Low quality evidence)',
      'For critically ill adults receiving enteral nutrition, we recommend using a feeding protocol to optimize delivery (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults with shock requiring vasopressors, we recommend initiating trophic (low-dose) enteral feeding rather than full-dose feeding (Strong recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'For critically ill adults receiving enteral nutrition, we suggest targeting 25-30 kcal/kg/day (Weak recommendation, Low quality evidence)',
      'For critically ill adults receiving enteral nutrition, we suggest targeting 1.2-2.0 g/kg/day of protein (Weak recommendation, Low quality evidence)',
      'For critically ill adults who cannot meet nutritional needs with enteral nutrition alone after 7-10 days, we suggest adding supplemental parenteral nutrition (Weak recommendation, Low quality evidence)',
      'For critically ill adults with high nutrition risk, we suggest early supplemental parenteral nutrition (within 2-3 days) if enteral nutrition is not feasible (Weak recommendation, Low quality evidence)',
      'For critically ill adults receiving enteral nutrition, we suggest using gastric feeding over post-pyloric feeding (Weak recommendation, Moderate quality evidence)',
      'For critically ill adults receiving enteral nutrition, we suggest using continuous feeding over bolus feeding (Weak recommendation, Low quality evidence)',
      'For critically ill adults with obesity (BMI ≥30), we suggest hypocaloric, high-protein feeding (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on Moderate quality evidence from randomized controlled trials; Weak recommendations are based on Low quality evidence',
    clinicalImplementation: 'Implementation of SCCM/ASPEN nutrition guidelines requires systematic approach to nutritional support. NUTRITIONAL ASSESSMENT: Assess nutrition risk using NUTRIC score. Identify malnutrition using ASPEN/AND criteria. ROUTE OF FEEDING: Prefer enteral nutrition (EN) over parenteral nutrition (PN) unless contraindications (bowel obstruction, ischemia, high-output fistula). TIMING: Initiate EN within 24-48 hours of ICU admission. Start with trophic feeding (10-20 mL/h) if shock or high vasopressor requirements, advance to goal over 3-7 days as tolerated. ENTERAL ACCESS: Use nasogastric tube initially. Consider post-pyloric feeding (nasoduodenal, nasojejunal) if high aspiration risk or gastric intolerance. FEEDING PROTOCOL: Use nurse-driven feeding protocol to optimize delivery. Check gastric residual volumes (GRV) q4-6h, hold feeding if GRV >500 mL. Elevate head of bed 30-45 degrees. NUTRITIONAL TARGETS: Energy: 25-30 kcal/kg/day (use indirect calorimetry if available). Protein: 1.2-2.0 g/kg/day (higher for burns, trauma, obesity). SUPPLEMENTAL PN: Add PN after 7-10 days if unable to meet >60% of energy needs with EN. For high nutrition risk, consider early PN (within 2-3 days). SPECIAL POPULATIONS: Obesity (BMI ≥30): hypocaloric (60-70% of energy needs), high-protein (2.0-2.5 g/kg ideal body weight). Acute kidney injury: standard protein targets, adjust for renal replacement therapy.',
    keyPoints: [
      'Enteral nutrition preferred over parenteral nutrition',
      'Initiate enteral nutrition within 24-48 hours of ICU admission',
      'Trophic (low-dose) feeding initially if shock or high vasopressors',
      'Energy target: 25-30 kcal/kg/day; Protein target: 1.2-2.0 g/kg/day',
      'Use feeding protocol to optimize delivery',
      'Gastric feeding preferred over post-pyloric feeding',
      'Add supplemental parenteral nutrition after 7-10 days if enteral inadequate',
      'Obesity: hypocaloric (60-70% energy), high-protein (2.0-2.5 g/kg IBW)',
    ],
    sccmUrl: 'https://www.sccm.org/Clinical-Resources/Guidelines/Guidelines/Guidelines-for-the-Provision-and-Assessment-of-Nutrition-Support-Therapy-in-the-Adult-Critically-Ill-Patient',
    publicationYear: 2016,
  },

  // HEMODYNAMIC MONITORING GUIDELINES
  {
    topic: 'Hemodynamic Monitoring in Critically Ill Adults - SCCM Guideline',
    keywords: ['hemodynamic monitoring', 'central venous pressure', 'cvp', 'pulmonary artery catheter', 'pac', 'swan ganz', 'cardiac output', 'fluid responsiveness', 'passive leg raise', 'plr', 'arterial line'],
    system: 'Pulmonary',
    guidelineSummary: 'The SCCM guideline for hemodynamic monitoring in critically ill adults provides evidence-based recommendations for the use of invasive and non-invasive hemodynamic monitoring techniques. The guideline emphasizes the use of dynamic measures (passive leg raise, pulse pressure variation, stroke volume variation) over static measures (CVP) to assess fluid responsiveness. Pulmonary artery catheter (PAC) is not routinely recommended but may be useful in selected patients with refractory shock or complex hemodynamics.',
    strongRecommendations: [
      'For critically ill adults with shock, we recommend using dynamic measures (passive leg raise with cardiac output monitoring, pulse pressure variation, stroke volume variation) over static measures (CVP) to predict fluid responsiveness (Strong recommendation, Moderate quality evidence)',
      'For critically ill adults with shock, we recommend against using CVP alone to guide fluid resuscitation (Strong recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'For critically ill adults with shock, we suggest using arterial catheterization for continuous blood pressure monitoring over intermittent non-invasive blood pressure monitoring (Weak recommendation, Low quality evidence)',
      'For critically ill adults with refractory shock or complex hemodynamics, we suggest using pulmonary artery catheter (PAC) to guide management (Weak recommendation, Low quality evidence)',
      'For critically ill adults with shock, we suggest using echocardiography to assess cardiac function and guide management (Weak recommendation, Low quality evidence)',
      'For critically ill adults receiving mechanical ventilation, we suggest using pulse pressure variation (PPV) or stroke volume variation (SVV) to predict fluid responsiveness (Weak recommendation, Moderate quality evidence)',
      'For critically ill adults, we suggest using passive leg raise (PLR) with cardiac output monitoring to predict fluid responsiveness (Weak recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on Moderate quality evidence from randomized controlled trials and meta-analyses; Weak recommendations are based on Low to Moderate quality evidence',
    clinicalImplementation: 'Implementation of SCCM hemodynamic monitoring guidelines requires systematic approach to assess fluid responsiveness and guide resuscitation. FLUID RESPONSIVENESS ASSESSMENT: Use dynamic measures over static measures. (1) PASSIVE LEG RAISE (PLR): Elevate legs 45 degrees for 1-2 minutes, measure cardiac output (CO) change with echocardiography, pulse contour analysis, or other CO monitor. Positive if CO increases ≥10-15%. Predicts fluid responsiveness. (2) PULSE PRESSURE VARIATION (PPV): Calculate PPV = (PPmax - PPmin) / [(PPmax + PPmin)/2] × 100%. PPV >13% predicts fluid responsiveness in mechanically ventilated patients with tidal volume ≥8 mL/kg and regular rhythm. (3) STROKE VOLUME VARIATION (SVV): Similar to PPV, SVV >13% predicts fluid responsiveness. Requires arterial line and pulse contour analysis. AVOID CVP: CVP does not reliably predict fluid responsiveness. Do not use CVP alone to guide fluid resuscitation. ARTERIAL LINE: Place arterial catheter for continuous blood pressure monitoring in patients with shock requiring vasopressors. PULMONARY ARTERY CATHETER (PAC): Consider PAC in refractory shock (unclear etiology, not responding to initial resuscitation), cardiogenic shock, right ventricular failure, or complex hemodynamics. Measure cardiac output, pulmonary artery pressures, PCWP, SVR. ECHOCARDIOGRAPHY: Use bedside echocardiography to assess LV/RV function, volume status, valvular disease, pericardial effusion.',
    keyPoints: [
      'Dynamic measures (PLR, PPV, SVV) predict fluid responsiveness better than CVP',
      'Avoid using CVP alone to guide fluid resuscitation',
      'Passive leg raise (PLR) with CO monitoring predicts fluid responsiveness',
      'PPV >13% or SVV >13% predicts fluid responsiveness (mechanically ventilated)',
      'Arterial line for continuous BP monitoring in shock',
      'Pulmonary artery catheter (PAC) for refractory or complex shock',
      'Echocardiography to assess cardiac function and guide management',
      'Static measures (CVP, PCWP) do not reliably predict fluid responsiveness',
    ],
    sccmUrl: 'https://www.sccm.org/Clinical-Resources/Guidelines/Guidelines/Hemodynamic-Monitoring',
    publicationYear: 2014,
  },

  // BLOOD TRANSFUSION GUIDELINES
  {
    topic: 'Red Blood Cell Transfusion in Critically Ill Adults - SCCM Guideline',
    keywords: ['blood transfusion', 'red blood cell transfusion', 'rbc transfusion', 'hemoglobin', 'anemia', 'transfusion threshold', 'restrictive transfusion', 'liberal transfusion'],
    system: 'Pulmonary',
    guidelineSummary: 'The SCCM guideline for red blood cell transfusion in critically ill adults provides evidence-based recommendations for transfusion thresholds and strategies. The guideline emphasizes a restrictive transfusion strategy (hemoglobin threshold 7 g/dL) over a liberal strategy (hemoglobin threshold 9-10 g/dL) for most critically ill patients. Exceptions include patients with acute coronary syndrome, severe thrombocytopenia, or chronic transfusion-dependent anemia. The guideline also addresses single-unit vs two-unit transfusion and use of leukoreduced blood products.',
    strongRecommendations: [
      'For critically ill adults without acute coronary syndrome, we recommend a restrictive RBC transfusion strategy (transfusion threshold hemoglobin 7 g/dL) over a liberal strategy (Strong recommendation, High quality evidence)',
      'For critically ill adults with septic shock, we recommend transfusing RBCs when hemoglobin <7 g/dL rather than higher thresholds (Strong recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'For critically ill adults with acute coronary syndrome, we suggest a higher transfusion threshold (hemoglobin 8 g/dL) (Weak recommendation, Low quality evidence)',
      'For critically ill adults requiring RBC transfusion, we suggest transfusing one unit at a time and reassessing rather than routinely transfusing two units (Weak recommendation, Low quality evidence)',
      'For critically ill adults, we suggest using leukoreduced RBC products over non-leukoreduced products (Weak recommendation, Moderate quality evidence)',
      'For critically ill adults with traumatic brain injury, we suggest a transfusion threshold of hemoglobin 7 g/dL (Weak recommendation, Low quality evidence)',
      'For critically ill adults undergoing cardiac surgery, we suggest a restrictive transfusion strategy (hemoglobin 7.5 g/dL) (Weak recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from large randomized controlled trials; Weak recommendations are based on Low to Moderate quality evidence',
    clinicalImplementation: 'Implementation of SCCM transfusion guidelines requires systematic approach to RBC transfusion decisions. TRANSFUSION THRESHOLDS: (1) Most critically ill adults: Transfuse if hemoglobin <7 g/dL. Target hemoglobin 7-9 g/dL. (2) Septic shock: Transfuse if hemoglobin <7 g/dL. (3) Acute coronary syndrome: Consider transfusion if hemoglobin <8 g/dL. (4) Traumatic brain injury: Transfuse if hemoglobin <7 g/dL. (5) Cardiac surgery: Transfuse if hemoglobin <7.5 g/dL. TRANSFUSION STRATEGY: Transfuse one unit of RBCs at a time, then reassess hemoglobin and clinical status before transfusing additional units. Avoid routine two-unit transfusions. BLOOD PRODUCTS: Use leukoreduced RBC products to reduce febrile non-hemolytic transfusion reactions and alloimmunization. MONITORING: Check hemoglobin 15-30 minutes after transfusion to assess response (expect 1 g/dL increase per unit). Monitor for transfusion reactions (fever, chills, dyspnea, hypotension, rash). SPECIAL CONSIDERATIONS: Patients with chronic transfusion-dependent anemia (sickle cell disease, thalassemia) may require higher transfusion thresholds based on baseline hemoglobin. Patients with active bleeding may require higher transfusion thresholds and more aggressive transfusion. Jehovah Witnesses: respect patient autonomy, use blood conservation strategies (cell salvage, erythropoietin, iron).',
    keyPoints: [
      'Restrictive transfusion strategy: hemoglobin threshold 7 g/dL for most ICU patients',
      'Target hemoglobin 7-9 g/dL (not higher)',
      'Septic shock: transfuse if hemoglobin <7 g/dL',
      'Acute coronary syndrome: consider transfusion if hemoglobin <8 g/dL',
      'Transfuse one unit at a time and reassess',
      'Use leukoreduced RBC products',
      'Avoid liberal transfusion strategy (hemoglobin >9-10 g/dL)',
      'Higher thresholds may be appropriate for active bleeding or ACS',
    ],
    sccmUrl: 'https://www.sccm.org/Clinical-Resources/Guidelines/Guidelines/Red-Blood-Cell-Transfusion',
    publicationYear: 2016,
  },
];

/**
 * Search function to find relevant SCCM guideline entries based on query
 */
export function searchSCCMGuidelines(query: string): SCCMGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = sccmGuidelinesKnowledge.map(entry => {
    let score = 0;

    // Exact topic match
    if (entry.topic.toLowerCase() === lowerQuery) {
      score += 100000;
    }

    // Exact keyword match
    entry.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (keywordLower === lowerQuery) {
        score += 50000;
      } else if (keywordLower.includes(lowerQuery)) {
        score += 10000;
      }
    });

    // Multi-word matching
    if (queryWords.length > 1) {
      let matchedWords = 0;
      queryWords.forEach(word => {
        if (entry.topic.toLowerCase().includes(word) ||
            entry.keywords.some(k => k.toLowerCase().includes(word))) {
          matchedWords++;
        }
      });
      const matchPercentage = matchedWords / queryWords.length;
      if (matchPercentage >= 0.6) {
        score += 8000 * matchPercentage;
      }
    }

    // Single word matching
    if (queryWords.length === 1) {
      const word = queryWords[0];
      if (entry.topic.toLowerCase().includes(word)) {
        score += 5000;
      }
      entry.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(word)) {
          score += 3000;
        }
      });
    }

    return { entry, score };
  });

  const filteredEntries = scoredEntries
    .filter(item => item.score >= 1000)
    .sort((a, b) => b.score - a.score);

  console.log(`SCCM Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get SCCM guideline by exact topic name
 */
export function getSCCMGuidelineByTopic(topic: string): SCCMGuidelineEntry | undefined {
  return sccmGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all SCCM guidelines for a specific system
 */
export function getSCCMGuidelinesBySystem(system: string): SCCMGuidelineEntry[] {
  return sccmGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
