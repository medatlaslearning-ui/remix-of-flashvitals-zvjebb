
/**
 * American College of Chest Physicians (CHEST) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American College of Chest Physicians.
 * CHEST provides evidence-based guidelines for pulmonary, critical care, and sleep medicine.
 * 
 * INTEGRATION PHASE: CHEST Guidelines (Phase 17 - Pulmonary Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Grading of recommendations (Grade 1, Grade 2)
 * - Quality of evidence (A, B, C)
 * - Clinical implementation guidance
 * - CHEST guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from CHEST guidelines but presented
 * in an original format for medical education purposes.
 */

export interface CHESTGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  grade1Recommendations: string[];
  grade2Recommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  chestUrl: string;
  publicationYear: number;
}

export const chestGuidelinesKnowledge: CHESTGuidelineEntry[] = [
  // ANTITHROMBOTIC THERAPY GUIDELINES
  {
    topic: 'Antithrombotic Therapy for VTE Disease - CHEST Guideline',
    keywords: ['venous thromboembolism', 'vte', 'deep vein thrombosis', 'dvt', 'pulmonary embolism', 'pe', 'anticoagulation', 'anticoagulant', 'doac', 'warfarin', 'heparin', 'lmwh'],
    system: 'Pulmonary',
    guidelineSummary: 'The CHEST guideline for antithrombotic therapy in VTE disease provides evidence-based recommendations for the treatment and prevention of venous thromboembolism. The guideline emphasizes the use of direct oral anticoagulants (DOACs) over vitamin K antagonists (VKAs) for most patients with DVT and PE. Treatment duration is based on whether the VTE was provoked or unprovoked, with extended anticoagulation recommended for unprovoked VTE if bleeding risk is acceptable. The guideline also addresses special populations including cancer-associated thrombosis and pregnancy.',
    grade1Recommendations: [
      'For patients with acute DVT or PE, we recommend treatment with anticoagulation over no anticoagulation (Grade 1B)',
      'For patients with acute DVT or PE, we recommend DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) over VKA therapy (Grade 1B)',
      'For patients with acute proximal DVT or PE, we recommend initial treatment with therapeutic anticoagulation over initial treatment with thrombolysis (Grade 1B)',
      'For patients with acute DVT of the leg or PE, we recommend treatment with anticoagulation for at least 3 months over shorter durations (Grade 1B)',
      'For patients with unprovoked proximal DVT or PE who have completed 3 months of anticoagulation and have low to moderate bleeding risk, we recommend extended anticoagulation (no scheduled stop date) over stopping anticoagulation (Grade 1B)',
      'For patients with cancer-associated VTE, we recommend LMWH or edoxaban over VKA therapy for the first 6 months (Grade 1B)',
      'For patients with VTE and active cancer, we recommend extended anticoagulation (no scheduled stop date) over 3-6 months of anticoagulation (Grade 1B)',
    ],
    grade2Recommendations: [
      'For patients with acute isolated distal DVT of the leg and without severe symptoms or risk factors for extension, we suggest serial imaging of the deep veins over initial anticoagulation (Grade 2C)',
      'For patients with acute isolated distal DVT of the leg who are managed with anticoagulation, we suggest 3 months of anticoagulation over shorter durations (Grade 2C)',
      'For patients with provoked DVT or PE (surgery or transient risk factor), we suggest stopping anticoagulation after 3 months over extended therapy (Grade 2B)',
      'For patients with unprovoked DVT or PE who have high bleeding risk, we suggest stopping anticoagulation after 3 months over extended therapy (Grade 2B)',
      'For patients on extended anticoagulation for unprovoked VTE, we suggest using standard-dose anticoagulation over reduced-dose anticoagulation (Grade 2B)',
      'For patients with acute PE and hemodynamic instability, we suggest systemic thrombolytic therapy over no thrombolytic therapy (Grade 2B)',
      'For patients with acute PE without hemodynamic instability, we suggest anticoagulation alone over systemic thrombolytic therapy (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on moderate quality evidence (B) from randomized controlled trials; Grade 2 recommendations are based on low to moderate quality evidence',
    clinicalImplementation: 'Implementation of CHEST VTE guidelines requires systematic assessment of VTE type (provoked vs unprovoked), location (proximal vs distal DVT, PE severity), and bleeding risk. For acute DVT/PE, initiate DOAC therapy: apixaban 10mg BID x7 days then 5mg BID, rivaroxaban 15mg BID x21 days then 20mg daily, edoxaban 60mg daily (after 5-10 days parenteral anticoagulation), or dabigatran 150mg BID (after 5-10 days parenteral anticoagulation). Alternative: LMWH (enoxaparin 1mg/kg BID) bridged to warfarin (target INR 2-3). Treat for minimum 3 months. For unprovoked VTE with low-moderate bleeding risk, continue anticoagulation indefinitely with periodic reassessment. For provoked VTE, stop after 3 months. For cancer-associated VTE, use LMWH or edoxaban for first 6 months, then continue indefinitely while cancer active. Assess bleeding risk using HAS-BLED or similar tool. Consider IVC filter only if contraindication to anticoagulation.',
    keyPoints: [
      'DOACs preferred over warfarin for most patients with DVT/PE',
      'Minimum 3 months anticoagulation for all acute VTE',
      'Extended anticoagulation (indefinite) for unprovoked VTE with low-moderate bleeding risk',
      'Stop anticoagulation after 3 months for provoked VTE',
      'Cancer-associated VTE: LMWH or edoxaban for first 6 months, then extended therapy',
      'Avoid thrombolysis for PE unless hemodynamically unstable',
      'Isolated distal DVT: consider serial imaging vs anticoagulation based on symptoms',
      'IVC filter only if contraindication to anticoagulation',
    ],
    chestUrl: 'https://journal.chestnet.org/article/S0012-3692(21)00395-6/fulltext',
    publicationYear: 2021,
  },

  // MECHANICAL VENTILATION GUIDELINES
  {
    topic: 'Mechanical Ventilation in Adult Patients - CHEST Guideline',
    keywords: ['mechanical ventilation', 'ventilator', 'intubation', 'respiratory failure', 'ards', 'acute respiratory distress syndrome', 'peep', 'tidal volume', 'plateau pressure', 'ventilator management'],
    system: 'Pulmonary',
    guidelineSummary: 'The CHEST guideline for mechanical ventilation in adult patients provides evidence-based recommendations for the initiation, management, and weaning of mechanical ventilation. The guideline emphasizes lung-protective ventilation strategies with low tidal volumes (6-8 mL/kg predicted body weight) and plateau pressure limitation (<30 cm H2O) for patients with ARDS. The guideline also addresses PEEP titration, sedation strategies, spontaneous breathing trials, and liberation from mechanical ventilation.',
    grade1Recommendations: [
      'For patients with ARDS, we recommend using low tidal volume ventilation (6 mL/kg predicted body weight) over higher tidal volumes (Grade 1A)',
      'For patients with ARDS, we recommend limiting plateau pressure to ≤30 cm H2O (Grade 1B)',
      'For patients with moderate to severe ARDS (PaO2/FiO2 <200), we recommend using higher PEEP (>10 cm H2O) over lower PEEP (Grade 1B)',
      'For patients receiving mechanical ventilation, we recommend using a sedation protocol with a sedation goal (Grade 1B)',
      'For patients receiving mechanical ventilation, we recommend daily sedation interruption or light sedation over deep sedation (Grade 1B)',
      'For patients receiving mechanical ventilation who are ready for weaning, we recommend conducting spontaneous breathing trials (SBTs) (Grade 1A)',
      'For patients who pass an SBT, we recommend extubation over continued mechanical ventilation (Grade 1A)',
    ],
    grade2Recommendations: [
      'For patients with ARDS, we suggest using recruitment maneuvers in patients with refractory hypoxemia (Grade 2C)',
      'For patients with severe ARDS (PaO2/FiO2 <150), we suggest prone positioning for ≥12 hours per day (Grade 2B)',
      'For patients with severe ARDS and refractory hypoxemia, we suggest neuromuscular blockade for 48 hours (Grade 2C)',
      'For patients receiving mechanical ventilation, we suggest using pressure support ventilation (PSV) over T-piece for SBTs (Grade 2B)',
      'For patients receiving mechanical ventilation, we suggest using weaning protocols over no protocols (Grade 2B)',
      'For patients at high risk for extubation failure, we suggest using noninvasive ventilation (NIV) immediately after extubation (Grade 2B)',
      'For patients with COPD receiving mechanical ventilation, we suggest using NIV for weaning over continued invasive ventilation (Grade 2B)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on high to moderate quality evidence (A-B) from randomized controlled trials; Grade 2 recommendations are based on low to moderate quality evidence',
    clinicalImplementation: 'Implementation of CHEST mechanical ventilation guidelines requires systematic approach to ventilator management. For ARDS, use lung-protective ventilation: tidal volume 6 mL/kg PBW (calculate PBW: males = 50 + 2.3[height in inches - 60]; females = 45.5 + 2.3[height in inches - 60]), plateau pressure ≤30 cm H2O, PEEP 10-15 cm H2O titrated to oxygenation and compliance. For moderate-severe ARDS (PaO2/FiO2 <150), implement prone positioning ≥12-16 hours daily. Use sedation protocol targeting RASS -1 to 0 (light sedation) with daily sedation interruption. Assess readiness for weaning daily: adequate oxygenation (PaO2/FiO2 >150-200, PEEP ≤5-8 cm H2O, FiO2 ≤0.4-0.5), hemodynamic stability, ability to initiate breaths. Conduct SBT: PSV 5-8 cm H2O or T-piece for 30-120 minutes. Pass criteria: RR <35, SpO2 >90%, HR <140 or <20% change, SBP 90-180 mmHg, no distress. If pass SBT, proceed to extubation. For high-risk patients (age >65, cardiac disease, hypercapnia), consider prophylactic NIV post-extubation.',
    keyPoints: [
      'Lung-protective ventilation for ARDS: 6 mL/kg PBW, plateau pressure ≤30 cm H2O',
      'Higher PEEP (>10 cm H2O) for moderate-severe ARDS',
      'Prone positioning ≥12 hours daily for severe ARDS (PaO2/FiO2 <150)',
      'Light sedation (RASS -1 to 0) with daily interruption',
      'Daily SBT assessment for weaning readiness',
      'PSV preferred over T-piece for SBTs',
      'Extubate if SBT passed (RR <35, SpO2 >90%, stable hemodynamics)',
      'Prophylactic NIV post-extubation for high-risk patients',
    ],
    chestUrl: 'https://journal.chestnet.org/article/S0012-3692(20)30328-1/fulltext',
    publicationYear: 2020,
  },

  // PLEURAL DISEASE GUIDELINES
  {
    topic: 'Management of Malignant Pleural Effusions - CHEST Guideline',
    keywords: ['pleural effusion', 'malignant pleural effusion', 'mpe', 'pleurodesis', 'thoracentesis', 'chest tube', 'indwelling pleural catheter', 'ipc', 'pleural disease'],
    system: 'Pulmonary',
    guidelineSummary: 'The CHEST guideline for management of malignant pleural effusions provides evidence-based recommendations for the diagnosis and treatment of MPE. The guideline emphasizes symptom-directed management with therapeutic thoracentesis as initial intervention. For recurrent symptomatic MPE, options include indwelling pleural catheter (IPC) or chemical pleurodesis. IPC is preferred for patients with trapped lung or limited life expectancy. The guideline also addresses talc pleurodesis techniques and management of complications.',
    grade1Recommendations: [
      'For patients with suspected malignant pleural effusion, we recommend diagnostic thoracentesis with pleural fluid cytology (Grade 1C)',
      'For patients with symptomatic malignant pleural effusion, we recommend therapeutic thoracentesis for symptom relief (Grade 1C)',
      'For patients with recurrent symptomatic malignant pleural effusion, we recommend definitive management with IPC or pleurodesis over repeated thoracentesis (Grade 1B)',
    ],
    grade2Recommendations: [
      'For patients with recurrent symptomatic MPE and expandable lung, we suggest chemical pleurodesis over IPC (Grade 2B)',
      'For patients with recurrent symptomatic MPE and trapped lung, we suggest IPC over pleurodesis (Grade 2C)',
      'For patients with recurrent symptomatic MPE and limited life expectancy (<3 months), we suggest IPC over pleurodesis (Grade 2C)',
      'For patients undergoing chemical pleurodesis, we suggest using talc over other sclerosing agents (Grade 2B)',
      'For patients undergoing talc pleurodesis, we suggest talc slurry via chest tube over thoracoscopic talc poudrage (Grade 2C)',
      'For patients with MPE undergoing pleurodesis, we suggest using small-bore chest tubes (≤14 Fr) over large-bore tubes (Grade 2B)',
      'For patients with MPE and IPC, we suggest attempting IPC removal after successful pleurodesis (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on low quality evidence (C) due to lack of RCTs; Grade 2 recommendations are based on low to moderate quality evidence from observational studies',
    clinicalImplementation: 'Implementation of CHEST MPE guidelines requires systematic approach to diagnosis and management. For suspected MPE, perform diagnostic thoracentesis: send pleural fluid for cell count, protein, LDH, glucose, pH, cytology, and consider additional tests (adenosine deaminase for TB, triglycerides for chylothorax). Classify as exudate using Light criteria. If symptomatic, perform therapeutic thoracentesis (remove up to 1-1.5 L to avoid re-expansion pulmonary edema). For recurrent symptomatic MPE, assess lung expandability with chest X-ray post-thoracentesis. If expandable lung and life expectancy >3 months, offer chemical pleurodesis: insert small-bore chest tube (10-14 Fr), drain fluid, instill talc slurry (4-5 g in 50 mL saline), clamp for 1-2 hours, then suction. Remove tube when drainage <150 mL/day. If trapped lung or life expectancy <3 months, place IPC (tunneled pleural catheter): drain 3 times per week at home, monitor for spontaneous pleurodesis (decreasing drainage), attempt IPC removal if successful. Complications: re-expansion pulmonary edema (limit drainage), empyema (antibiotics + drainage), tumor seeding (rare).',
    keyPoints: [
      'Diagnostic thoracentesis with cytology for suspected MPE',
      'Therapeutic thoracentesis for symptomatic relief (remove up to 1-1.5 L)',
      'Recurrent MPE: IPC or pleurodesis over repeated thoracentesis',
      'Expandable lung + life expectancy >3 months: pleurodesis preferred',
      'Trapped lung or life expectancy <3 months: IPC preferred',
      'Talc is preferred sclerosing agent for pleurodesis',
      'Small-bore chest tubes (≤14 Fr) as effective as large-bore',
      'IPC can be removed after spontaneous pleurodesis',
    ],
    chestUrl: 'https://journal.chestnet.org/article/S0012-3692(18)30447-5/fulltext',
    publicationYear: 2018,
  },

  // COUGH GUIDELINES
  {
    topic: 'Diagnosis and Management of Cough - CHEST Guideline',
    keywords: ['cough', 'chronic cough', 'acute cough', 'subacute cough', 'postinfectious cough', 'upper airway cough syndrome', 'uacs', 'gerd', 'asthma', 'cough variant asthma'],
    system: 'Pulmonary',
    guidelineSummary: 'The CHEST guideline for diagnosis and management of cough provides evidence-based recommendations for the evaluation and treatment of acute, subacute, and chronic cough in adults. The guideline classifies cough by duration: acute (<3 weeks), subacute (3-8 weeks), chronic (>8 weeks). For chronic cough, the most common causes are upper airway cough syndrome (UACS), asthma, and gastroesophageal reflux disease (GERD). The guideline emphasizes systematic evaluation and empiric treatment trials for common causes.',
    grade1Recommendations: [
      'For patients with acute cough likely due to common cold, we recommend symptomatic treatment over antibiotics (Grade 1A)',
      'For patients with acute cough and suspected bacterial pneumonia, we recommend antibiotics (Grade 1A)',
      'For patients with chronic cough, we recommend chest X-ray to exclude serious underlying disease (Grade 1C)',
      'For patients with chronic cough and normal chest X-ray, we recommend evaluation and treatment for UACS, asthma, and GERD (Grade 1C)',
    ],
    grade2Recommendations: [
      'For patients with subacute cough following respiratory infection, we suggest treatment with ipratropium bromide or inhaled corticosteroids (Grade 2B)',
      'For patients with chronic cough and suspected UACS, we suggest empiric treatment with first-generation antihistamine/decongestant (Grade 2B)',
      'For patients with chronic cough and suspected asthma, we suggest empiric treatment with inhaled corticosteroids (Grade 2B)',
      'For patients with chronic cough and suspected GERD, we suggest empiric treatment with proton pump inhibitors (Grade 2B)',
      'For patients with chronic cough refractory to treatment of UACS, asthma, and GERD, we suggest referral to cough specialist (Grade 2C)',
      'For patients with refractory chronic cough, we suggest trial of gabapentin or pregabalin (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on high quality evidence (A) for acute cough and low quality evidence (C) for chronic cough; Grade 2 recommendations are based on low to moderate quality evidence',
    clinicalImplementation: 'Implementation of CHEST cough guidelines requires systematic approach based on duration. For acute cough (<3 weeks): if common cold symptoms (rhinorrhea, nasal congestion, sore throat), recommend symptomatic treatment (dextromethorphan, guaifenesin, honey). If fever, productive cough, dyspnea, suspect pneumonia: obtain chest X-ray and treat with antibiotics if confirmed. For subacute cough (3-8 weeks): likely postinfectious, treat with ipratropium inhaler or ICS. For chronic cough (>8 weeks): obtain chest X-ray to exclude malignancy, TB, ILD. If normal, evaluate for common causes: (1) UACS (postnasal drip, throat clearing, nasal discharge): treat with first-generation antihistamine/decongestant (chlorpheniramine + pseudoephedrine) for 2-4 weeks; (2) Asthma (wheezing, dyspnea, variable symptoms): perform spirometry with bronchodilator, consider methacholine challenge if normal, treat with ICS ± LABA; (3) GERD (heartburn, regurgitation, worse when lying down): treat with PPI BID for 2-3 months. If refractory to empiric treatment, refer to pulmonologist or ENT. Consider gabapentin 300-1800 mg/day or pregabalin 75-300 mg/day for refractory chronic cough.',
    keyPoints: [
      'Acute cough (<3 weeks): symptomatic treatment unless pneumonia suspected',
      'Subacute cough (3-8 weeks): likely postinfectious, treat with ipratropium or ICS',
      'Chronic cough (>8 weeks): chest X-ray to exclude serious disease',
      'Common causes of chronic cough: UACS, asthma, GERD',
      'UACS: treat with first-generation antihistamine/decongestant',
      'Asthma: treat with ICS ± LABA, consider methacholine challenge',
      'GERD: treat with PPI BID for 2-3 months',
      'Refractory chronic cough: consider gabapentin or pregabalin',
    ],
    chestUrl: 'https://journal.chestnet.org/article/S0012-3692(17)33122-8/fulltext',
    publicationYear: 2018,
  },

  // SLEEP APNEA GUIDELINES
  {
    topic: 'Obstructive Sleep Apnea Management - CHEST Guideline',
    keywords: ['obstructive sleep apnea', 'osa', 'sleep apnea', 'cpap', 'continuous positive airway pressure', 'apnea hypopnea index', 'ahi', 'polysomnography', 'sleep study'],
    system: 'Pulmonary',
    guidelineSummary: 'The CHEST guideline for obstructive sleep apnea management provides evidence-based recommendations for the diagnosis and treatment of OSA in adults. The guideline emphasizes the use of polysomnography or home sleep apnea testing for diagnosis. Continuous positive airway pressure (CPAP) is the first-line treatment for moderate to severe OSA. The guideline also addresses alternative therapies including oral appliances, positional therapy, and surgical interventions for patients who cannot tolerate CPAP.',
    grade1Recommendations: [
      'For patients with suspected OSA, we recommend diagnostic testing with polysomnography or home sleep apnea testing (Grade 1B)',
      'For patients with moderate to severe OSA (AHI ≥15), we recommend CPAP therapy over no treatment (Grade 1A)',
      'For patients with OSA on CPAP, we recommend using heated humidification to improve adherence and reduce side effects (Grade 1B)',
    ],
    grade2Recommendations: [
      'For patients with mild OSA (AHI 5-14) and daytime sleepiness, we suggest CPAP therapy (Grade 2B)',
      'For patients with OSA who cannot tolerate CPAP, we suggest oral appliance therapy (mandibular advancement device) (Grade 2B)',
      'For patients with positional OSA (AHI ≥2 times higher in supine position), we suggest positional therapy (Grade 2C)',
      'For patients with OSA and obesity, we suggest weight loss as adjunctive therapy (Grade 2B)',
      'For patients with OSA who cannot tolerate CPAP or oral appliance, we suggest surgical evaluation (uvulopalatopharyngoplasty, maxillomandibular advancement) (Grade 2C)',
      'For patients with severe OSA and anatomic obstruction who fail CPAP, we suggest hypoglossal nerve stimulation (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on high to moderate quality evidence (A-B) from randomized controlled trials; Grade 2 recommendations are based on low to moderate quality evidence',
    clinicalImplementation: 'Implementation of CHEST OSA guidelines requires systematic approach to diagnosis and treatment. For suspected OSA (snoring, witnessed apneas, daytime sleepiness, obesity, hypertension), perform diagnostic testing: polysomnography (in-lab sleep study) or home sleep apnea testing (HSAT). Diagnose OSA if AHI ≥5 events/hour. Classify severity: mild (AHI 5-14), moderate (AHI 15-29), severe (AHI ≥30). For moderate-severe OSA, initiate CPAP therapy: start with auto-titrating CPAP (APAP) or perform in-lab CPAP titration study. Target pressure to eliminate apneas/hypopneas and snoring. Use heated humidification to reduce nasal congestion and improve adherence. Educate on proper mask fit and CPAP use. Monitor adherence (goal >4 hours/night for >70% of nights). For CPAP intolerance, try different mask styles, adjust pressure settings, or consider bilevel PAP (BiPAP). If still intolerant, refer for oral appliance (mandibular advancement device) fitted by dentist. For positional OSA, recommend positional therapy (tennis ball technique, positional alarm, positional pillow). Encourage weight loss if obese (10% weight loss can reduce AHI by 30%). For refractory cases, refer to ENT for surgical evaluation.',
    keyPoints: [
      'Diagnose OSA with polysomnography or home sleep apnea testing',
      'OSA severity: mild (AHI 5-14), moderate (AHI 15-29), severe (AHI ≥30)',
      'CPAP is first-line treatment for moderate-severe OSA',
      'Heated humidification improves CPAP adherence',
      'Oral appliance (mandibular advancement device) for CPAP intolerance',
      'Positional therapy for positional OSA',
      'Weight loss reduces AHI in obese patients',
      'Surgical options (UPPP, MMA, hypoglossal nerve stimulation) for refractory cases',
    ],
    chestUrl: 'https://journal.chestnet.org/article/S0012-3692(15)00015-1/fulltext',
    publicationYear: 2015,
  },
];

/**
 * Search function to find relevant CHEST guideline entries based on query
 */
export function searchCHESTGuidelines(query: string): CHESTGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = chestGuidelinesKnowledge.map(entry => {
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

  console.log(`CHEST Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get CHEST guideline by exact topic name
 */
export function getCHESTGuidelineByTopic(topic: string): CHESTGuidelineEntry | undefined {
  return chestGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all CHEST guidelines for a specific system
 */
export function getCHESTGuidelinesBySystem(system: string): CHESTGuidelineEntry[] {
  return chestGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
