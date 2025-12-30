
/**
 * American Thoracic Society (ATS) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American Thoracic Society.
 * The ATS provides evidence-based guidelines for pulmonary and critical care medicine.
 * 
 * INTEGRATION PHASE: ATS Guidelines (Phase 17 - Pulmonary Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Strong, Conditional)
 * - Quality of evidence (High, Moderate, Low, Very Low)
 * - Clinical implementation guidance
 * - ATS guideline URL for reference
 */

export interface ATSGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  strongRecommendations: string[];
  conditionalRecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  atsUrl: string;
  publicationYear: number;
}

export const atsGuidelinesKnowledge: ATSGuidelineEntry[] = [
  // ASTHMA GUIDELINES
  {
    topic: 'Asthma Diagnosis and Management - ATS Guideline',
    keywords: ['asthma', 'reactive airway disease', 'bronchospasm', 'asthmatic', 'wheezing', 'bronchodilator', 'inhaled corticosteroid', 'ics', 'laba', 'asthma exacerbation', 'asthma control'],
    system: 'Pulmonary',
    guidelineSummary: 'The ATS guideline for asthma diagnosis and management provides evidence-based recommendations for the diagnosis, assessment, and treatment of asthma in adults and children. The guideline emphasizes the importance of spirometry for diagnosis, assessment of asthma control, and stepwise approach to pharmacologic therapy. Inhaled corticosteroids (ICS) are the cornerstone of asthma management, with add-on therapies (LABA, LAMA, biologics) for inadequate control. The guideline also addresses asthma exacerbation management and special populations.',
    strongRecommendations: [
      'For adults and children with persistent asthma, we recommend daily inhaled corticosteroids (ICS) as the preferred controller therapy (Strong recommendation, High quality evidence)',
      'For adults and children with asthma not controlled on low-dose ICS, we recommend adding a long-acting beta-agonist (LABA) rather than increasing ICS dose (Strong recommendation, High quality evidence)',
      'For adults and children with acute asthma exacerbation, we recommend systemic corticosteroids (oral or IV) to reduce hospitalization and relapse (Strong recommendation, High quality evidence)',
      'For adults and children with acute asthma exacerbation, we recommend inhaled short-acting beta-agonists (SABA) as first-line bronchodilator therapy (Strong recommendation, High quality evidence)',
      'For diagnosis of asthma, we recommend spirometry with bronchodilator reversibility testing rather than clinical assessment alone (Strong recommendation, Moderate quality evidence)',
      'For adults with severe asthma and elevated eosinophils despite high-dose ICS/LABA, we recommend anti-IL-5 biologics (mepolizumab, reslizumab, benralizumab) to reduce exacerbations (Strong recommendation, High quality evidence)',
      'For adults with severe allergic asthma and elevated IgE, we recommend omalizumab (anti-IgE) to reduce exacerbations (Strong recommendation, High quality evidence)',
    ],
    conditionalRecommendations: [
      'For adults with asthma not controlled on ICS/LABA, we suggest adding a long-acting muscarinic antagonist (LAMA) such as tiotropium (Conditional recommendation, Moderate quality evidence)',
      'For adults with severe asthma and type 2 inflammation, we suggest dupilumab (anti-IL-4/IL-13) to improve asthma control and reduce exacerbations (Conditional recommendation, Moderate quality evidence)',
      'For children with mild persistent asthma, we suggest daily low-dose ICS rather than as-needed ICS (Conditional recommendation, Moderate quality evidence)',
      'For adults with asthma, we suggest fractional exhaled nitric oxide (FeNO) testing to guide ICS therapy in selected patients (Conditional recommendation, Low quality evidence)',
      'For adults with aspirin-exacerbated respiratory disease (AERD), we suggest leukotriene receptor antagonists (montelukast) as add-on therapy (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High or Moderate quality evidence from randomized controlled trials and systematic reviews',
    clinicalImplementation: 'Implementation of ATS asthma guidelines requires accurate diagnosis with spirometry showing reversible airflow obstruction (FEV1 improvement ≥12% and ≥200 mL after bronchodilator). Assess asthma control using validated tools (ACT, ACQ). Initiate stepwise therapy: Step 1 (intermittent): as-needed SABA; Step 2 (mild persistent): low-dose ICS; Step 3 (moderate persistent): low-dose ICS/LABA or medium-dose ICS; Step 4 (moderate-severe): medium-dose ICS/LABA; Step 5 (severe): high-dose ICS/LABA + consider add-on therapy (LAMA, biologics). For exacerbations, give systemic corticosteroids (prednisone 40-60 mg daily for 5-7 days) and frequent SABA. Identify and treat triggers (allergens, irritants, infections). Provide asthma action plan and inhaler technique education. For severe asthma, measure biomarkers (eosinophils, IgE, FeNO) to guide biologic selection.',
    keyPoints: [
      'ICS are the cornerstone of asthma controller therapy',
      'Add LABA to ICS for inadequate control rather than increasing ICS dose',
      'LABA should never be used as monotherapy (without ICS)',
      'Systemic corticosteroids are essential for acute exacerbations',
      'Spirometry with bronchodilator reversibility confirms asthma diagnosis',
      'Biologics (anti-IL-5, anti-IgE, anti-IL-4/IL-13) for severe asthma with type 2 inflammation',
      'Assess asthma control regularly and adjust therapy accordingly',
      'Inhaler technique and adherence are critical for asthma control',
    ],
    atsUrl: 'https://www.thoracic.org/statements/asthma.php',
    publicationYear: 2020,
  },

  // COPD GUIDELINES
  {
    topic: 'Chronic Obstructive Pulmonary Disease (COPD) Management - ATS/ERS Guideline',
    keywords: ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'bronchodilator', 'lama', 'laba', 'copd exacerbation', 'smoking cessation', 'pulmonary rehabilitation', 'oxygen therapy'],
    system: 'Pulmonary',
    guidelineSummary: 'The ATS/ERS guideline for COPD management provides evidence-based recommendations for the diagnosis, pharmacologic treatment, and non-pharmacologic management of COPD. The guideline emphasizes smoking cessation as the most important intervention to slow disease progression. Long-acting bronchodilators (LAMA and/or LABA) are the mainstay of pharmacologic therapy. Inhaled corticosteroids (ICS) are reserved for patients with frequent exacerbations and elevated eosinophils. Pulmonary rehabilitation and long-term oxygen therapy improve outcomes in selected patients.',
    strongRecommendations: [
      'For all patients with COPD who smoke, we recommend smoking cessation interventions including counseling and pharmacotherapy (Strong recommendation, High quality evidence)',
      'For patients with symptomatic COPD, we recommend long-acting bronchodilators (LAMA and/or LABA) over short-acting bronchodilators (Strong recommendation, High quality evidence)',
      'For patients with COPD and chronic hypoxemia (PaO2 ≤55 mmHg or SpO2 ≤88%), we recommend long-term oxygen therapy (LTOT) to improve survival (Strong recommendation, High quality evidence)',
      'For patients with COPD and moderate to severe symptoms, we recommend pulmonary rehabilitation to improve exercise capacity and quality of life (Strong recommendation, High quality evidence)',
      'For patients with COPD exacerbation, we recommend systemic corticosteroids (oral or IV) to reduce treatment failure and hospitalization (Strong recommendation, High quality evidence)',
      'For patients with COPD exacerbation, we recommend antibiotics for patients with increased sputum purulence (Strong recommendation, Moderate quality evidence)',
      'For diagnosis of COPD, we recommend post-bronchodilator spirometry showing FEV1/FVC <0.70 (Strong recommendation, High quality evidence)',
    ],
    conditionalRecommendations: [
      'For patients with COPD and frequent exacerbations (≥2 per year) despite LAMA/LABA, we suggest adding inhaled corticosteroids (ICS) if blood eosinophils ≥300 cells/μL (Conditional recommendation, Moderate quality evidence)',
      'For patients with COPD and frequent exacerbations despite ICS/LABA/LAMA, we suggest roflumilast (PDE4 inhibitor) if FEV1 <50% and chronic bronchitis (Conditional recommendation, Moderate quality evidence)',
      'For patients with COPD and alpha-1 antitrypsin deficiency, we suggest alpha-1 antitrypsin augmentation therapy (Conditional recommendation, Low quality evidence)',
      'For patients with severe emphysema and hyperinflation, we suggest bronchoscopic lung volume reduction in selected patients (Conditional recommendation, Moderate quality evidence)',
      'For patients with COPD and chronic bronchitis, we suggest mucolytics (N-acetylcysteine) to reduce exacerbations in selected patients (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High or Moderate quality evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of ATS/ERS COPD guidelines requires spirometry confirmation of airflow obstruction (post-bronchodilator FEV1/FVC <0.70). Assess symptom burden using mMRC or CAT score and exacerbation history. Initiate smoking cessation: counseling + pharmacotherapy (varenicline, bupropion, or nicotine replacement). Start long-acting bronchodilators: LAMA (tiotropium, umeclidinium) or LABA (formoterol, salmeterol) for symptomatic patients. Escalate to LAMA/LABA combination if inadequate symptom control. Add ICS to LAMA/LABA if ≥2 exacerbations per year and eosinophils ≥300 cells/μL. For exacerbations, give prednisone 40 mg daily for 5 days and antibiotics if increased sputum purulence. Prescribe LTOT if PaO2 ≤55 mmHg or SpO2 ≤88% at rest. Refer to pulmonary rehabilitation for all symptomatic patients. Vaccinate against influenza and pneumococcus. Screen for alpha-1 antitrypsin deficiency in patients <45 years or with basilar emphysema.',
    keyPoints: [
      'Smoking cessation is the only intervention that slows FEV1 decline',
      'Long-acting bronchodilators (LAMA/LABA) are first-line therapy',
      'ICS should be added only for frequent exacerbations with elevated eosinophils',
      'LTOT improves survival in chronic hypoxemia (PaO2 ≤55 mmHg)',
      'Pulmonary rehabilitation improves exercise capacity and quality of life',
      'Systemic corticosteroids and antibiotics for COPD exacerbations',
      'Avoid oxygen goal >88-92% to prevent CO2 retention',
      'Screen for alpha-1 antitrypsin deficiency in young patients',
    ],
    atsUrl: 'https://www.thoracic.org/statements/copd.php',
    publicationYear: 2021,
  },

  // COMMUNITY-ACQUIRED PNEUMONIA GUIDELINES
  {
    topic: 'Community-Acquired Pneumonia (CAP) Management - ATS/IDSA Guideline',
    keywords: ['pneumonia', 'cap', 'community acquired pneumonia', 'bacterial pneumonia', 'pneumococcal pneumonia', 'atypical pneumonia', 'legionella', 'mycoplasma', 'antibiotic therapy', 'pneumonia severity'],
    system: 'Pulmonary',
    guidelineSummary: 'The ATS/IDSA guideline for community-acquired pneumonia provides evidence-based recommendations for the diagnosis, severity assessment, and antibiotic treatment of CAP in adults. The guideline emphasizes early recognition, severity assessment using validated tools (CURB-65, PSI), and prompt initiation of appropriate empiric antibiotic therapy. Antibiotic selection is based on severity, risk factors for drug-resistant pathogens, and local resistance patterns. The guideline also addresses duration of therapy, failure to improve, and prevention strategies.',
    strongRecommendations: [
      'For outpatients with CAP and no comorbidities, we recommend amoxicillin, doxycycline, or a macrolide (azithromycin, clarithromycin) as empiric therapy (Strong recommendation, Moderate quality evidence)',
      'For outpatients with CAP and comorbidities (heart disease, lung disease, diabetes, etc.), we recommend combination therapy with amoxicillin/clavulanate or cephalosporin PLUS a macrolide or doxycycline, OR monotherapy with a respiratory fluoroquinolone (levofloxacin, moxifloxacin) (Strong recommendation, Moderate quality evidence)',
      'For hospitalized patients with CAP (non-ICU), we recommend combination therapy with a beta-lactam (ceftriaxone, cefotaxime, ampicillin/sulbactam) PLUS a macrolide, OR monotherapy with a respiratory fluoroquinolone (Strong recommendation, High quality evidence)',
      'For ICU patients with CAP, we recommend combination therapy with a beta-lactam (ceftriaxone, cefotaxime, ampicillin/sulbactam) PLUS either azithromycin or a respiratory fluoroquinolone (Strong recommendation, High quality evidence)',
      'For patients with CAP, we recommend a minimum duration of 5 days of antibiotic therapy if clinically stable with resolution of fever and tachypnea (Strong recommendation, Moderate quality evidence)',
      'For severity assessment of CAP, we recommend using validated tools (CURB-65 or PSI) to guide site-of-care decisions (Strong recommendation, Moderate quality evidence)',
      'For patients with CAP and suspected Pseudomonas aeruginosa (structural lung disease, recent antibiotics, recent hospitalization), we recommend anti-pseudomonal beta-lactam (piperacillin/tazobactam, cefepime, meropenem) PLUS either ciprofloxacin or levofloxacin (Strong recommendation, Low quality evidence)',
    ],
    conditionalRecommendations: [
      'For patients with CAP, we suggest obtaining blood cultures before antibiotic therapy in hospitalized patients (Conditional recommendation, Low quality evidence)',
      'For patients with CAP, we suggest obtaining sputum Gram stain and culture in hospitalized patients with severe disease (Conditional recommendation, Low quality evidence)',
      'For patients with CAP, we suggest testing for Legionella and Pneumococcus urinary antigens in severe CAP or ICU admission (Conditional recommendation, Moderate quality evidence)',
      'For patients with CAP who fail to improve within 72 hours, we suggest reassessment including chest imaging and consideration of alternative diagnoses (Conditional recommendation, Low quality evidence)',
      'For prevention of CAP, we suggest pneumococcal vaccination (PCV13 and PPSV23) in adults ≥65 years and high-risk adults (Conditional recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High or Moderate quality evidence from randomized controlled trials and observational studies',
    clinicalImplementation: 'Implementation of ATS/IDSA CAP guidelines requires early recognition of pneumonia (cough, fever, dyspnea, chest pain) and confirmation with chest X-ray or CT. Assess severity using CURB-65 (Confusion, Urea >20 mg/dL, Respiratory rate ≥30, Blood pressure <90/60, age ≥65) or PSI score. CURB-65 ≥2 suggests need for hospitalization. Obtain blood cultures and sputum cultures before antibiotics in hospitalized patients. Initiate empiric antibiotics within 4-8 hours of presentation. Outpatient therapy: amoxicillin 1g TID, doxycycline 100mg BID, or azithromycin 500mg day 1 then 250mg daily. Inpatient non-ICU: ceftriaxone 1-2g daily + azithromycin 500mg daily, or levofloxacin 750mg daily. ICU: ceftriaxone 2g daily + azithromycin 500mg daily, or ceftriaxone + levofloxacin 750mg daily. Add vancomycin or linezolid if MRSA risk factors. Treat for minimum 5 days if clinically stable. Reassess if no improvement in 72 hours. Provide smoking cessation counseling and pneumococcal vaccination.',
    keyPoints: [
      'CURB-65 ≥2 or PSI class IV-V suggests need for hospitalization',
      'Initiate empiric antibiotics within 4-8 hours of presentation',
      'Combination therapy (beta-lactam + macrolide) for hospitalized patients',
      'Respiratory fluoroquinolone (levofloxacin, moxifloxacin) is alternative monotherapy',
      'Minimum 5 days of antibiotics if clinically stable',
      'Test for Legionella and Pneumococcus urinary antigens in severe CAP',
      'Reassess if no improvement within 72 hours',
      'Pneumococcal vaccination for prevention in adults ≥65 years',
    ],
    atsUrl: 'https://www.thoracic.org/statements/pneumonia.php',
    publicationYear: 2019,
  },

  // PULMONARY EMBOLISM GUIDELINES
  {
    topic: 'Pulmonary Embolism Diagnosis and Management - ATS Guideline',
    keywords: ['pulmonary embolism', 'pe', 'venous thromboembolism', 'vte', 'deep vein thrombosis', 'dvt', 'anticoagulation', 'thrombolysis', 'massive pe', 'submassive pe', 'ctpa', 'wells criteria'],
    system: 'Pulmonary',
    guidelineSummary: 'The ATS guideline for pulmonary embolism provides evidence-based recommendations for the diagnosis, risk stratification, and treatment of acute PE. The guideline emphasizes clinical probability assessment using validated tools (Wells criteria, Geneva score), appropriate use of D-dimer testing, and CT pulmonary angiography (CTPA) as the gold standard for diagnosis. Treatment recommendations are based on PE severity: anticoagulation for all patients, thrombolysis for massive PE with hemodynamic instability, and consideration of catheter-directed therapy for submassive PE with right ventricular dysfunction.',
    strongRecommendations: [
      'For patients with suspected PE, we recommend clinical probability assessment using validated tools (Wells criteria or Geneva score) to guide diagnostic testing (Strong recommendation, High quality evidence)',
      'For patients with low clinical probability of PE and D-dimer <500 ng/mL, we recommend against further testing for PE (Strong recommendation, High quality evidence)',
      'For patients with intermediate or high clinical probability of PE, we recommend CT pulmonary angiography (CTPA) as the diagnostic test of choice (Strong recommendation, High quality evidence)',
      'For patients with acute PE, we recommend anticoagulation with direct oral anticoagulants (DOACs: apixaban, rivaroxaban, edoxaban, dabigatran) over warfarin (Strong recommendation, High quality evidence)',
      'For patients with massive PE (hemodynamic instability), we recommend systemic thrombolysis (alteplase) in the absence of contraindications (Strong recommendation, Moderate quality evidence)',
      'For patients with acute PE, we recommend anticoagulation for at least 3 months (Strong recommendation, High quality evidence)',
      'For patients with unprovoked PE, we recommend extended anticoagulation beyond 3 months if low bleeding risk (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'For patients with submassive PE (right ventricular dysfunction without hypotension), we suggest against routine systemic thrombolysis (Conditional recommendation, Moderate quality evidence)',
      'For patients with submassive PE and clinical deterioration, we suggest catheter-directed therapy or systemic thrombolysis (Conditional recommendation, Low quality evidence)',
      'For patients with PE and contraindications to anticoagulation, we suggest inferior vena cava (IVC) filter placement (Conditional recommendation, Low quality evidence)',
      'For patients with chronic thromboembolic pulmonary hypertension (CTEPH), we suggest pulmonary thromboendarterectomy in selected patients (Conditional recommendation, Moderate quality evidence)',
      'For patients with recurrent PE despite anticoagulation, we suggest increasing anticoagulation intensity or switching anticoagulant class (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High or Moderate quality evidence from randomized controlled trials and meta-analyses',
    clinicalImplementation: 'Implementation of ATS PE guidelines requires systematic clinical probability assessment using Wells criteria (clinical signs of DVT, PE most likely diagnosis, heart rate >100, immobilization/surgery, prior VTE, hemoptysis, malignancy). Low probability + D-dimer <500 ng/mL rules out PE. Intermediate/high probability requires CTPA. Assess PE severity: massive PE (hypotension, shock), submassive PE (RV dysfunction on echo/CT, elevated troponin/BNP), low-risk PE (normal RV function, normal biomarkers). Initiate anticoagulation immediately if high suspicion. DOACs preferred: apixaban 10mg BID x7 days then 5mg BID, rivaroxaban 15mg BID x21 days then 20mg daily, edoxaban 60mg daily (after 5-10 days heparin), dabigatran 150mg BID (after 5-10 days heparin). For massive PE, give alteplase 100mg IV over 2 hours if no contraindications. For submassive PE, monitor closely and consider catheter-directed therapy if deterioration. Anticoagulate for ≥3 months for provoked PE, extended duration for unprovoked PE if low bleeding risk. Screen for thrombophilia in young patients or recurrent VTE.',
    keyPoints: [
      'Wells criteria + D-dimer guides diagnostic approach',
      'CTPA is gold standard for PE diagnosis',
      'DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) preferred over warfarin',
      'Systemic thrombolysis for massive PE with hemodynamic instability',
      'Avoid routine thrombolysis for submassive PE',
      'Anticoagulate for ≥3 months; extended duration for unprovoked PE',
      'IVC filter only if contraindications to anticoagulation',
      'Screen for CTEPH in patients with persistent dyspnea after PE',
    ],
    atsUrl: 'https://www.thoracic.org/statements/pulmonary-embolism.php',
    publicationYear: 2019,
  },

  // ACUTE RESPIRATORY DISTRESS SYNDROME (ARDS) GUIDELINES
  {
    topic: 'Acute Respiratory Distress Syndrome (ARDS) Management - ATS Guideline',
    keywords: ['ards', 'acute respiratory distress syndrome', 'acute lung injury', 'mechanical ventilation', 'lung protective ventilation', 'low tidal volume', 'prone positioning', 'peep', 'ecmo', 'ards management'],
    system: 'Pulmonary',
    guidelineSummary: 'The ATS guideline for ARDS management provides evidence-based recommendations for the diagnosis, mechanical ventilation strategies, and adjunctive therapies for ARDS. The guideline emphasizes lung-protective ventilation with low tidal volumes (6 mL/kg predicted body weight) and plateau pressure <30 cm H2O as the cornerstone of ARDS management. Prone positioning is strongly recommended for severe ARDS (PaO2/FiO2 <150). Conservative fluid management and neuromuscular blockade in early severe ARDS improve outcomes. ECMO is a rescue therapy for refractory hypoxemia.',
    strongRecommendations: [
      'For patients with ARDS, we recommend lung-protective ventilation with tidal volume of 6 mL/kg predicted body weight and plateau pressure <30 cm H2O (Strong recommendation, High quality evidence)',
      'For patients with severe ARDS (PaO2/FiO2 <150), we recommend prone positioning for ≥12-16 hours per day (Strong recommendation, High quality evidence)',
      'For patients with ARDS, we recommend conservative fluid management strategy targeting neutral to negative fluid balance (Strong recommendation, Moderate quality evidence)',
      'For patients with early severe ARDS (PaO2/FiO2 <150 within 48 hours), we recommend neuromuscular blockade with cisatracurium for 48 hours (Strong recommendation, Moderate quality evidence)',
      'For patients with ARDS, we recommend using higher PEEP (10-15 cm H2O) rather than lower PEEP (5-8 cm H2O) in moderate to severe ARDS (Strong recommendation, Moderate quality evidence)',
      'For diagnosis of ARDS, we recommend using Berlin criteria: acute onset (<1 week), bilateral infiltrates, PaO2/FiO2 ≤300, not fully explained by cardiac failure (Strong recommendation, High quality evidence)',
    ],
    conditionalRecommendations: [
      'For patients with severe ARDS refractory to conventional ventilation, we suggest venovenous ECMO in experienced centers (Conditional recommendation, Low quality evidence)',
      'For patients with ARDS, we suggest against routine use of high-frequency oscillatory ventilation (HFOV) (Conditional recommendation, Moderate quality evidence)',
      'For patients with ARDS, we suggest against routine use of inhaled nitric oxide (Conditional recommendation, Moderate quality evidence)',
      'For patients with ARDS, we suggest recruitment maneuvers in selected patients with severe hypoxemia (Conditional recommendation, Low quality evidence)',
      'For patients with ARDS, we suggest against routine use of corticosteroids (Conditional recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High or Moderate quality evidence from landmark randomized controlled trials',
    clinicalImplementation: 'Implementation of ATS ARDS guidelines requires early recognition using Berlin criteria: acute onset (<1 week), bilateral infiltrates on chest X-ray/CT, PaO2/FiO2 ≤300 (mild 200-300, moderate 100-200, severe <100), not fully explained by heart failure or fluid overload. Initiate lung-protective ventilation immediately: tidal volume 6 mL/kg predicted body weight (PBW), plateau pressure <30 cm H2O, PEEP 10-15 cm H2O titrated to oxygenation. For severe ARDS (PaO2/FiO2 <150), implement prone positioning for ≥12-16 hours daily. Use conservative fluid management: target CVP <4 mmHg or negative fluid balance. For early severe ARDS, administer cisatracurium 15 mg/h IV infusion for 48 hours. Treat underlying cause (sepsis, pneumonia, aspiration, trauma). Avoid excessive oxygen (target SpO2 88-95%). If refractory hypoxemia despite maximal conventional therapy, consider ECMO at experienced center. Wean ventilator support as ARDS improves. Provide supportive care: nutrition, DVT prophylaxis, stress ulcer prophylaxis, sedation minimization.',
    keyPoints: [
      'Lung-protective ventilation (6 mL/kg PBW, plateau pressure <30 cm H2O) reduces mortality',
      'Prone positioning for ≥12-16 hours daily in severe ARDS (PaO2/FiO2 <150)',
      'Conservative fluid management improves oxygenation and reduces ventilator days',
      'Neuromuscular blockade (cisatracurium) for 48 hours in early severe ARDS',
      'Higher PEEP (10-15 cm H2O) for moderate to severe ARDS',
      'ECMO is rescue therapy for refractory hypoxemia in experienced centers',
      'Avoid routine corticosteroids, inhaled nitric oxide, and HFOV',
      'Treat underlying cause (sepsis, pneumonia, aspiration)',
    ],
    atsUrl: 'https://www.thoracic.org/statements/ards.php',
    publicationYear: 2017,
  },

  // IDIOPATHIC PULMONARY FIBROSIS (IPF) GUIDELINES
  {
    topic: 'Idiopathic Pulmonary Fibrosis (IPF) Diagnosis and Management - ATS/ERS/JRS/ALAT Guideline',
    keywords: ['idiopathic pulmonary fibrosis', 'ipf', 'interstitial lung disease', 'ild', 'pulmonary fibrosis', 'usual interstitial pneumonia', 'uip', 'antifibrotic therapy', 'pirfenidone', 'nintedanib', 'lung transplant'],
    system: 'Pulmonary',
    guidelineSummary: 'The ATS/ERS/JRS/ALAT guideline for idiopathic pulmonary fibrosis provides evidence-based recommendations for the diagnosis and management of IPF. The guideline emphasizes the importance of high-resolution CT (HRCT) and multidisciplinary discussion for accurate diagnosis. Antifibrotic therapy with pirfenidone or nintedanib is recommended for most patients with IPF to slow disease progression. Lung transplantation should be considered early in eligible patients. The guideline recommends against corticosteroids, immunosuppressants, and anticoagulation in IPF.',
    strongRecommendations: [
      'For patients with IPF, we recommend antifibrotic therapy with pirfenidone or nintedanib to slow disease progression (Strong recommendation, Moderate quality evidence)',
      'For diagnosis of IPF, we recommend high-resolution CT (HRCT) of the chest to identify usual interstitial pneumonia (UIP) pattern (Strong recommendation, High quality evidence)',
      'For patients with IPF, we recommend against corticosteroid monotherapy (Strong recommendation, Moderate quality evidence)',
      'For patients with IPF, we recommend against combination therapy with corticosteroids, azathioprine, and N-acetylcysteine (Strong recommendation, High quality evidence)',
      'For patients with IPF, we recommend against anticoagulation with warfarin (Strong recommendation, Moderate quality evidence)',
      'For patients with IPF and progressive disease, we recommend early referral for lung transplant evaluation (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'For patients with suspected IPF and indeterminate HRCT pattern, we suggest surgical lung biopsy to establish diagnosis (Conditional recommendation, Low quality evidence)',
      'For patients with IPF, we suggest pulmonary rehabilitation to improve exercise capacity and quality of life (Conditional recommendation, Low quality evidence)',
      'For patients with IPF and hypoxemia, we suggest supplemental oxygen therapy (Conditional recommendation, Low quality evidence)',
      'For patients with IPF, we suggest against endothelin receptor antagonists (bosentan, ambrisentan) (Conditional recommendation, Moderate quality evidence)',
      'For patients with IPF, we suggest against phosphodiesterase-5 inhibitors (sildenafil) (Conditional recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High or Moderate quality evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of ATS/ERS/JRS/ALAT IPF guidelines requires accurate diagnosis through multidisciplinary discussion (pulmonologist, radiologist, pathologist). Obtain HRCT chest to identify UIP pattern: subpleural, basilar-predominant reticular abnormalities with honeycombing, traction bronchiectasis, absence of features inconsistent with UIP (upper/mid-lung predominance, peribronchovascular predominance, extensive ground-glass, mosaic attenuation). If HRCT shows definite UIP pattern in appropriate clinical context (age >60, insidious dyspnea, bibasilar crackles, no alternative cause), diagnose IPF without biopsy. If HRCT indeterminate, consider surgical lung biopsy. Initiate antifibrotic therapy: pirfenidone 801 mg TID (titrate from 267 mg TID) or nintedanib 150 mg BID. Monitor for side effects: pirfenidone (photosensitivity, GI upset, elevated LFTs), nintedanib (diarrhea, nausea, elevated LFTs). Refer early for lung transplant evaluation if progressive disease. Provide supplemental oxygen for hypoxemia. Offer pulmonary rehabilitation. Avoid corticosteroids, immunosuppressants, and anticoagulation. Treat comorbidities: GERD, pulmonary hypertension, sleep apnea.',
    keyPoints: [
      'Antifibrotic therapy (pirfenidone or nintedanib) slows IPF progression',
      'HRCT with definite UIP pattern + appropriate clinical context = IPF diagnosis',
      'Surgical lung biopsy if HRCT indeterminate',
      'Avoid corticosteroids, immunosuppressants, and anticoagulation',
      'Early referral for lung transplant evaluation',
      'Pulmonary rehabilitation improves exercise capacity',
      'Supplemental oxygen for hypoxemia',
      'Treat comorbidities: GERD, pulmonary hypertension',
    ],
    atsUrl: 'https://www.thoracic.org/statements/ipf.php',
    publicationYear: 2018,
  },
];

/**
 * Search function to find relevant ATS guideline entries based on query
 */
export function searchATSGuidelines(query: string): ATSGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = atsGuidelinesKnowledge.map(entry => {
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

  console.log(`ATS Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ATS guideline by exact topic name
 */
export function getATSGuidelineByTopic(topic: string): ATSGuidelineEntry | undefined {
  return atsGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ATS guidelines for a specific system
 */
export function getATSGuidelinesBySystem(system: string): ATSGuidelineEntry[] {
  return atsGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
