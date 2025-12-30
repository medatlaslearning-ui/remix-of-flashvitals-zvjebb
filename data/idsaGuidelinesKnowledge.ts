
/**
 * IDSA (Infectious Diseases Society of America) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the Infectious Diseases Society of America.
 * IDSA provides evidence-based guidelines for diagnosis, treatment, and prevention of infectious diseases.
 * 
 * INTEGRATION PHASE: IDSA Guidelines (Phase 24 - Infectious Disease Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Strong = A, Moderate = B, Weak = C)
 * - Quality of evidence (High = I, Moderate = II, Low = III)
 * - Clinical implementation guidance
 * - IDSA guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from IDSA guidelines but presented
 * in an original format for medical education purposes.
 */

export interface IDSAGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  strongRecommendations: string[];
  moderateRecommendations: string[];
  weakRecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  idsaUrl: string;
  publicationYear: number;
}

export const idsaGuidelinesKnowledge: IDSAGuidelineEntry[] = [
  // COMMUNITY-ACQUIRED PNEUMONIA
  {
    topic: 'Community-Acquired Pneumonia (CAP) - IDSA Guideline',
    keywords: ['community-acquired pneumonia', 'cap', 'pneumonia', 'idsa pneumonia', 'pneumonia guideline', 'pneumonia treatment', 'cap management'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for community-acquired pneumonia provides evidence-based recommendations for diagnosis, treatment, and prevention of CAP in adults. The guideline emphasizes early recognition, appropriate antibiotic selection based on severity and risk factors, and timely initiation of therapy. Severity assessment using CURB-65 or PSI determines outpatient vs. inpatient management. Empiric therapy targets common pathogens including Streptococcus pneumoniae, Haemophilus influenzae, Mycoplasma pneumoniae, and Chlamydophila pneumoniae. Severe CAP requires ICU admission and broader coverage including Pseudomonas and MRSA in select patients. Duration of therapy is typically 5-7 days for most patients. Prevention includes pneumococcal and influenza vaccination.',
    strongRecommendations: [
      'Obtain chest radiograph or other imaging to establish diagnosis of pneumonia in patients with suspected CAP (Strong recommendation, Moderate quality evidence)',
      'Obtain blood cultures and sputum Gram stain and culture before initiating antibiotic therapy in hospitalized patients with severe CAP (Strong recommendation, Moderate quality evidence)',
      'Initiate empiric antibiotic therapy within 4-8 hours of presentation for hospitalized patients with CAP (Strong recommendation, Moderate quality evidence)',
      'For outpatient treatment of CAP in previously healthy adults without risk factors for drug-resistant S. pneumoniae, use amoxicillin 1g TID, doxycycline 100mg BID, or macrolide (azithromycin, clarithromycin) (Strong recommendation, Moderate quality evidence)',
      'For outpatient treatment of CAP in adults with comorbidities or risk factors for drug-resistant S. pneumoniae, use combination therapy with beta-lactam (amoxicillin-clavulanate, cefpodoxime, cefuroxime) plus macrolide, or respiratory fluoroquinolone (levofloxacin, moxifloxacin) monotherapy (Strong recommendation, Moderate quality evidence)',
      'For hospitalized patients with non-severe CAP, use combination therapy with beta-lactam (ceftriaxone, cefotaxime, ampicillin-sulbactam) plus macrolide, or respiratory fluoroquinolone monotherapy (Strong recommendation, High quality evidence)',
      'For hospitalized patients with severe CAP requiring ICU admission, use combination therapy with beta-lactam (ceftriaxone, cefotaxime, ampicillin-sulbactam) plus either azithromycin or respiratory fluoroquinolone (Strong recommendation, High quality evidence)',
      'Treat CAP for minimum of 5 days, patient should be afebrile for 48-72 hours and have no more than 1 CAP-associated sign of clinical instability before discontinuation (Strong recommendation, Moderate quality evidence)',
    ],
    moderateRecommendations: [
      'Use CURB-65 or Pneumonia Severity Index (PSI) to assess severity and determine site of care (outpatient vs. inpatient) (Moderate recommendation, Moderate quality evidence)',
      'Obtain urinary antigen tests for Legionella pneumophila and Streptococcus pneumoniae in patients with severe CAP (Moderate recommendation, Moderate quality evidence)',
      'For patients with severe CAP and risk factors for Pseudomonas aeruginosa (structural lung disease, recent hospitalization, recent antibiotic use), use antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, imipenem, meropenem) plus either ciprofloxacin or levofloxacin 750mg, OR antipseudomonal beta-lactam plus aminoglycoside plus azithromycin or respiratory fluoroquinolone (Moderate recommendation, Moderate quality evidence)',
      'For patients with severe CAP and risk factors for MRSA (prior MRSA infection, recent hospitalization, IV drug use), add vancomycin or linezolid to empiric regimen (Moderate recommendation, Moderate quality evidence)',
      'Administer pneumococcal vaccination (PCV13 followed by PPSV23) and annual influenza vaccination to all adults to prevent CAP (Moderate recommendation, High quality evidence)',
      'De-escalate antibiotic therapy based on culture results and clinical response (Moderate recommendation, Low quality evidence)',
      'Consider procalcitonin-guided therapy to reduce antibiotic duration in stable patients (Moderate recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'Consider corticosteroids (methylprednisolone 0.5mg/kg/day for 5 days) for patients with severe CAP and refractory septic shock (Weak recommendation, Moderate quality evidence)',
      'Consider extended-spectrum beta-lactam therapy for patients with risk factors for aspiration (Weak recommendation, Low quality evidence)',
      'Consider atypical pathogen coverage (macrolide or fluoroquinolone) for all hospitalized patients with CAP (Weak recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and observational studies; Moderate recommendations are based on Moderate quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA CAP guidelines requires systematic approach to diagnosis, severity assessment, and treatment. DIAGNOSIS: Clinical presentation: Cough, fever, dyspnea, pleuritic chest pain, sputum production. Physical examination: Fever, tachypnea, tachycardia, crackles, bronchial breath sounds, dullness to percussion. Chest radiograph: Infiltrate, consolidation, or pleural effusion confirms diagnosis. CT chest if chest X-ray negative but high clinical suspicion. SEVERITY ASSESSMENT: CURB-65 score (1 point each): Confusion, Urea >20 mg/dL (BUN >7 mmol/L), Respiratory rate ≥30/min, Blood pressure (SBP <90 or DBP ≤60 mmHg), Age ≥65 years. Score 0-1: Outpatient treatment, Score 2: Inpatient treatment, Score ≥3: Consider ICU admission. Pneumonia Severity Index (PSI): More complex scoring system incorporating age, comorbidities, vital signs, and laboratory values. Class I-II: Outpatient, Class III: Brief inpatient or observation, Class IV-V: Inpatient. DIAGNOSTIC TESTING: Outpatient: No routine testing required. Inpatient: Blood cultures (2 sets) before antibiotics, Sputum Gram stain and culture if productive cough, Urinary antigen tests for Legionella and Pneumococcus if severe CAP, Procalcitonin to guide antibiotic duration. Severe CAP: All above plus consider bronchoscopy with BAL if intubated, Respiratory viral panel (influenza, RSV, COVID-19), Legionella culture if urinary antigen positive. EMPIRIC ANTIBIOTIC THERAPY: Outpatient (previously healthy, no recent antibiotics): Amoxicillin 1g PO TID, OR Doxycycline 100mg PO BID, OR Macrolide (azithromycin 500mg day 1, then 250mg daily; clarithromycin 500mg BID). Outpatient (comorbidities or recent antibiotics): Combination: Amoxicillin-clavulanate 875/125mg PO BID or Cefpodoxime 200mg PO BID or Cefuroxime 500mg PO BID PLUS Macrolide (azithromycin or clarithromycin), OR Respiratory fluoroquinolone monotherapy: Levofloxacin 750mg PO daily or Moxifloxacin 400mg PO daily. Inpatient (non-severe): Combination: Ceftriaxone 1-2g IV daily or Cefotaxime 1-2g IV q8h or Ampicillin-sulbactam 1.5-3g IV q6h PLUS Macrolide (azithromycin 500mg IV daily), OR Respiratory fluoroquinolone monotherapy: Levofloxacin 750mg IV daily or Moxifloxacin 400mg IV daily. Inpatient (severe CAP, ICU): Combination: Beta-lactam (ceftriaxone 2g IV daily or cefotaxime 2g IV q8h or ampicillin-sulbactam 3g IV q6h) PLUS Azithromycin 500mg IV daily OR Respiratory fluoroquinolone (levofloxacin 750mg IV daily or moxifloxacin 400mg IV daily). Pseudomonas risk factors (structural lung disease, recent hospitalization, recent antibiotics, bronchiectasis): Antipseudomonal beta-lactam (piperacillin-tazobactam 4.5g IV q6h, cefepime 2g IV q8h, imipenem 500mg IV q6h, meropenem 1g IV q8h) PLUS Ciprofloxacin 400mg IV q8h or Levofloxacin 750mg IV daily, OR Antipseudomonal beta-lactam PLUS Aminoglycoside (gentamicin or tobramycin) PLUS Azithromycin or respiratory fluoroquinolone. MRSA risk factors (prior MRSA infection, recent hospitalization, IV drug use, cavitary infiltrates): Add Vancomycin 15-20mg/kg IV q8-12h (target trough 15-20 mcg/mL) OR Linezolid 600mg IV q12h. DURATION OF THERAPY: Minimum 5 days. Patient should be afebrile for 48-72 hours. No more than 1 CAP-associated sign of clinical instability (temperature >37.8°C, heart rate >100 bpm, respiratory rate >24/min, SBP <90 mmHg, oxygen saturation <90%, inability to maintain oral intake, abnormal mental status). Longer duration (7-14 days) if: Severe CAP, Bacteremia, Extrapulmonary infection, Pseudomonas or MRSA, Slow clinical response. Procalcitonin-guided therapy: Discontinue antibiotics when procalcitonin <0.25 ng/mL or decreased by 80% from peak in stable patients. DE-ESCALATION: Switch from IV to oral antibiotics when: Hemodynamically stable, Improving clinically, Able to tolerate oral intake, Normal GI function. Narrow spectrum based on culture results: If S. pneumoniae isolated and susceptible, switch to amoxicillin or penicillin. If atypical pathogen (Mycoplasma, Chlamydophila, Legionella), continue macrolide or fluoroquinolone. COMPLICATIONS: Parapneumonic effusion/empyema: Thoracentesis if effusion >10mm on lateral decubitus film. Drain if pH <7.2, glucose <60 mg/dL, LDH >1000 U/L, or positive Gram stain/culture. Chest tube drainage or VATS if loculated. Lung abscess: Prolonged antibiotics (4-6 weeks), consider percutaneous or surgical drainage if large or not responding. Septic shock: Aggressive fluid resuscitation, vasopressors (norepinephrine first-line), consider corticosteroids (hydrocortisone 200mg/day or methylprednisolone 0.5mg/kg/day for 5-7 days). PREVENTION: Pneumococcal vaccination: PCV13 (Prevnar 13) followed by PPSV23 (Pneumovax 23) 8 weeks later for adults ≥65 years or immunocompromised. Influenza vaccination: Annual inactivated influenza vaccine for all adults. Smoking cessation: Reduces CAP risk. MONITORING: Clinical response: Expect improvement in 48-72 hours (defervescence, decreased respiratory rate, improved oxygenation). Failure to improve: Consider resistant organism, wrong diagnosis (PE, CHF, malignancy), complications (empyema, abscess), or inadequate source control. Repeat chest X-ray: Not routinely needed if improving clinically. Obtain if not improving or to document resolution in high-risk patients (smokers, age >50, immunocompromised) at 6-8 weeks.',
    keyPoints: [
      'CURB-65 or PSI guides severity assessment and site of care',
      'Initiate antibiotics within 4-8 hours for hospitalized patients',
      'Outpatient: amoxicillin, doxycycline, or macrolide for previously healthy; combination or fluoroquinolone for comorbidities',
      'Inpatient: beta-lactam plus macrolide or fluoroquinolone monotherapy',
      'Severe CAP: beta-lactam plus azithromycin or fluoroquinolone; add antipseudomonal or anti-MRSA coverage if risk factors',
      'Minimum 5 days therapy; afebrile 48-72 hours before discontinuation',
      'Pneumococcal and influenza vaccination for prevention',
    ],
    idsaUrl: 'https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults/',
    publicationYear: 2019,
  },

  // HEALTHCARE-ASSOCIATED PNEUMONIA
  {
    topic: 'Healthcare-Associated Pneumonia and Ventilator-Associated Pneumonia - IDSA Guideline',
    keywords: ['healthcare-associated pneumonia', 'hap', 'ventilator-associated pneumonia', 'vap', 'hospital-acquired pneumonia', 'nosocomial pneumonia', 'idsa hap vap'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for healthcare-associated pneumonia (HAP) and ventilator-associated pneumonia (VAP) provides evidence-based recommendations for diagnosis, treatment, and prevention. HAP is pneumonia occurring ≥48 hours after hospital admission. VAP is pneumonia occurring >48 hours after endotracheal intubation. The guideline emphasizes early appropriate antibiotic therapy targeting multidrug-resistant (MDR) pathogens including Pseudomonas aeruginosa, MRSA, and Acinetobacter. Empiric therapy selection based on local antibiogram and patient risk factors. De-escalation based on culture results. Duration typically 7 days for most patients. Prevention strategies include ventilator bundles, oral care, and minimizing sedation.',
    strongRecommendations: [
      'Obtain lower respiratory tract samples (endotracheal aspirate, BAL, or protected specimen brush) for culture before initiating antibiotics in patients with suspected VAP (Strong recommendation, Moderate quality evidence)',
      'Initiate empiric antibiotic therapy promptly (within 1 hour) in patients with suspected HAP or VAP (Strong recommendation, Moderate quality evidence)',
      'For empiric treatment of HAP or VAP, use antibiotics with activity against Staphylococcus aureus, Pseudomonas aeruginosa, and other gram-negative bacilli (Strong recommendation, Moderate quality evidence)',
      'For patients with HAP or VAP and risk factors for MRSA (prior MRSA infection, recent hospitalization, recent antibiotics, high local MRSA prevalence), include vancomycin or linezolid in empiric regimen (Strong recommendation, Moderate quality evidence)',
      'For patients with HAP or VAP and risk factors for MDR gram-negative bacteria (prior MDR infection, recent hospitalization, recent antibiotics, structural lung disease), use two antipseudomonal antibiotics from different classes (Strong recommendation, Moderate quality evidence)',
      'De-escalate antibiotic therapy based on culture results and clinical response (Strong recommendation, Moderate quality evidence)',
      'Treat HAP and VAP for 7 days in patients who have good clinical response (Strong recommendation, High quality evidence)',
    ],
    moderateRecommendations: [
      'Use clinical criteria (new or progressive infiltrate plus ≥2 of: fever, leukocytosis, purulent secretions) to diagnose HAP or VAP (Moderate recommendation, Low quality evidence)',
      'Consider procalcitonin to guide initiation and duration of antibiotic therapy in patients with suspected VAP (Moderate recommendation, Moderate quality evidence)',
      'For empiric treatment of HAP or VAP without risk factors for MDR pathogens, use single-agent therapy with piperacillin-tazobactam, cefepime, levofloxacin, imipenem, or meropenem (Moderate recommendation, Moderate quality evidence)',
      'For empiric treatment of HAP or VAP with risk factors for MDR pathogens, use combination therapy with antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, ceftazidime, imipenem, meropenem) plus antipseudomonal fluoroquinolone (ciprofloxacin, levofloxacin) or aminoglycoside (gentamicin, tobramycin, amikacin) (Moderate recommendation, Moderate quality evidence)',
      'Implement ventilator bundle to prevent VAP: head of bed elevation 30-45 degrees, daily sedation vacation and assessment of readiness to extubate, peptic ulcer disease prophylaxis, DVT prophylaxis, oral care with chlorhexidine (Moderate recommendation, Moderate quality evidence)',
      'Avoid routine use of aerosolized antibiotics for treatment of HAP or VAP (Moderate recommendation, Low quality evidence)',
    ],
    weakRecommendations: [
      'Consider inhaled antibiotics as adjunctive therapy for patients with VAP due to MDR gram-negative bacteria not responding to IV antibiotics alone (Weak recommendation, Low quality evidence)',
      'Consider shorter duration of therapy (5-7 days) for patients with uncomplicated VAP who have good clinical response (Weak recommendation, Moderate quality evidence)',
      'Consider longer duration of therapy (>7 days) for patients with VAP due to non-fermenting gram-negative bacilli (Pseudomonas, Acinetobacter) or with slow clinical response (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Moderate recommendations are based on Moderate quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA HAP/VAP guidelines requires systematic approach to diagnosis, empiric therapy, and prevention. DEFINITIONS: HAP: Pneumonia occurring ≥48 hours after hospital admission, not incubating at time of admission. VAP: Pneumonia occurring >48 hours after endotracheal intubation. DIAGNOSIS: Clinical criteria: New or progressive infiltrate on chest X-ray PLUS ≥2 of: Fever (>38°C) or hypothermia (<36°C), Leukocytosis (>12,000/μL) or leukopenia (<4,000/μL), Purulent respiratory secretions. Microbiologic diagnosis: Obtain lower respiratory tract samples before antibiotics: Endotracheal aspirate (quantitative culture ≥10^5 CFU/mL), Bronchoalveolar lavage (quantitative culture ≥10^4 CFU/mL), Protected specimen brush (quantitative culture ≥10^3 CFU/mL). Blood cultures (2 sets). Procalcitonin: Consider to guide antibiotic initiation and duration. RISK FACTORS FOR MDR PATHOGENS: Prior IV antibiotics within 90 days, Hospitalization ≥5 days, High frequency of antibiotic resistance in community or hospital unit, Immunosuppression, Structural lung disease (COPD, bronchiectasis), Septic shock at time of VAP. EMPIRIC ANTIBIOTIC THERAPY: No risk factors for MDR pathogens: Single-agent therapy: Piperacillin-tazobactam 4.5g IV q6h, OR Cefepime 2g IV q8h, OR Levofloxacin 750mg IV daily, OR Imipenem 500mg IV q6h or Meropenem 1g IV q8h. Risk factors for MDR pathogens: Combination therapy: Antipseudomonal beta-lactam: Piperacillin-tazobactam 4.5g IV q6h (extended infusion over 4 hours preferred), OR Cefepime 2g IV q8h, OR Ceftazidime 2g IV q8h, OR Imipenem 500mg IV q6h or Meropenem 1g IV q8h, OR Ceftazidime-avibactam 2.5g IV q8h (if carbapenem-resistant), OR Ceftolozane-tazobactam 3g IV q8h (if MDR Pseudomonas), PLUS Second antipseudomonal agent: Ciprofloxacin 400mg IV q8h, OR Levofloxacin 750mg IV daily, OR Gentamicin or Tobramycin 7mg/kg IV daily (monitor levels), OR Amikacin 20mg/kg IV daily (monitor levels). Risk factors for MRSA: Add Vancomycin 15-20mg/kg IV q8-12h (target trough 15-20 mcg/mL), OR Linezolid 600mg IV q12h. Carbapenem-resistant Enterobacterales (CRE): Ceftazidime-avibactam 2.5g IV q8h, OR Meropenem-vaborbactam 4g IV q8h, OR Imipenem-relebactam 500mg IV q6h, OR Polymyxin B or Colistin (last resort). Acinetobacter baumannii (carbapenem-resistant): Ampicillin-sulbactam 3g IV q4h (high-dose), OR Polymyxin B or Colistin, OR Cefiderocol 2g IV q8h. DE-ESCALATION: Narrow spectrum based on culture results: If MSSA isolated, switch to nafcillin or cefazolin. If MRSA isolated, continue vancomycin or linezolid. If Pseudomonas isolated and susceptible, switch to single agent (cefepime, piperacillin-tazobactam, or fluoroquinolone). If Enterobacterales isolated, switch to ceftriaxone or fluoroquinolone if susceptible. Discontinue antibiotics if: Cultures negative and low clinical suspicion, Alternative diagnosis identified, Procalcitonin <0.5 ng/mL or decreased by 80% from peak. DURATION OF THERAPY: Standard duration: 7 days for most patients with good clinical response. Shorter duration (5-7 days): Uncomplicated VAP with good clinical response. Longer duration (>7 days): Non-fermenting gram-negative bacilli (Pseudomonas, Acinetobacter), Slow clinical response, Bacteremia, Empyema or lung abscess. MONITORING: Clinical response: Expect improvement in 48-72 hours (defervescence, decreased WBC, improved oxygenation, decreased purulent secretions). Failure to improve: Consider resistant organism, inadequate source control, wrong diagnosis, complications (empyema, abscess), or drug fever. Repeat cultures if not improving. Adjust antibiotics based on susceptibilities. PREVENTION OF VAP: Ventilator bundle: Head of bed elevation 30-45 degrees (unless contraindicated), Daily sedation vacation and spontaneous breathing trial, Assess readiness to extubate daily, Peptic ulcer disease prophylaxis (H2 blocker or PPI), DVT prophylaxis (LMWH or sequential compression devices), Oral care with chlorhexidine 0.12% BID. Additional measures: Minimize duration of mechanical ventilation, Avoid reintubation, Use endotracheal tubes with subglottic secretion drainage, Avoid gastric overdistension, Maintain endotracheal cuff pressure 20-30 cm H2O. COMPLICATIONS: Septic shock: Aggressive fluid resuscitation, vasopressors (norepinephrine first-line), consider corticosteroids (hydrocortisone 200mg/day). Empyema: Chest tube drainage, consider VATS if loculated. Lung abscess: Prolonged antibiotics, consider percutaneous or surgical drainage. ARDS: Lung-protective ventilation (tidal volume 6 mL/kg ideal body weight, plateau pressure <30 cm H2O), prone positioning if severe.',
    keyPoints: [
      'HAP occurs ≥48 hours after admission; VAP occurs >48 hours after intubation',
      'Obtain lower respiratory tract cultures before antibiotics',
      'Initiate empiric antibiotics within 1 hour',
      'Cover MRSA and Pseudomonas in empiric regimen if risk factors present',
      'Use two antipseudomonal antibiotics if risk factors for MDR gram-negative bacteria',
      'De-escalate based on culture results',
      'Standard duration 7 days for good clinical response',
      'Ventilator bundle prevents VAP',
    ],
    idsaUrl: 'https://www.idsociety.org/practice-guideline/healthcare-associated-pneumonia/',
    publicationYear: 2016,
  },

  // SKIN AND SOFT TISSUE INFECTIONS
  {
    topic: 'Skin and Soft Tissue Infections - IDSA Guideline',
    keywords: ['skin and soft tissue infections', 'ssti', 'cellulitis', 'abscess', 'necrotizing fasciitis', 'idsa cellulitis', 'skin infection', 'soft tissue infection'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for skin and soft tissue infections provides evidence-based recommendations for diagnosis and management of SSTIs. The guideline classifies SSTIs into uncomplicated (simple cellulitis, erysipelas, simple abscess) and complicated (necrotizing infections, infected ulcers, major abscesses). Uncomplicated infections typically caused by Streptococcus pyogenes and Staphylococcus aureus. Empiric therapy for uncomplicated cellulitis targets streptococci; MRSA coverage added if purulent or abscess present. Incision and drainage is primary treatment for abscesses. Necrotizing fasciitis requires emergent surgical debridement plus broad-spectrum antibiotics. Duration typically 5-7 days for uncomplicated infections.',
    strongRecommendations: [
      'Incision and drainage is the primary treatment for cutaneous abscesses (Strong recommendation, High quality evidence)',
      'For uncomplicated cellulitis without purulence, use antibiotics targeting streptococci: cephalexin, dicloxacillin, or clindamycin (Strong recommendation, Moderate quality evidence)',
      'For purulent cellulitis or abscess with systemic signs of infection, add antibiotics with MRSA coverage: trimethoprim-sulfamethoxazole, doxycycline, clindamycin, or linezolid (Strong recommendation, Moderate quality evidence)',
      'For necrotizing fasciitis, perform emergent surgical debridement plus broad-spectrum antibiotics (Strong recommendation, Moderate quality evidence)',
      'For necrotizing fasciitis, use combination therapy with vancomycin or linezolid (for MRSA) plus piperacillin-tazobactam or carbapenem plus clindamycin (for toxin suppression) (Strong recommendation, Moderate quality evidence)',
      'Treat uncomplicated cellulitis for 5-7 days (Strong recommendation, Moderate quality evidence)',
    ],
    moderateRecommendations: [
      'For uncomplicated cellulitis in areas with high prevalence of MRSA (>10-15%), consider empiric MRSA coverage (Moderate recommendation, Low quality evidence)',
      'For complicated SSTIs (infected ulcers, major abscesses, surgical site infections), use broad-spectrum antibiotics covering MRSA and gram-negative bacteria: vancomycin plus piperacillin-tazobactam, cefepime, or carbapenem (Moderate recommendation, Moderate quality evidence)',
      'For diabetic foot infections, use antibiotics covering MRSA, streptococci, gram-negative bacteria, and anaerobes (Moderate recommendation, Moderate quality evidence)',
      'Obtain blood cultures in patients with systemic signs of infection (fever, hypotension, tachycardia) (Moderate recommendation, Low quality evidence)',
      'Consider imaging (CT or MRI) if necrotizing infection suspected (gas in tissues, crepitus, severe pain out of proportion, rapid progression) (Moderate recommendation, Moderate quality evidence)',
      'Add clindamycin to beta-lactam therapy for severe streptococcal infections to suppress toxin production (Moderate recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'Consider adjunctive antibiotics for simple abscesses >2 cm or with surrounding cellulitis (Weak recommendation, Low quality evidence)',
      'Consider IVIG for necrotizing fasciitis due to Streptococcus pyogenes with toxic shock syndrome (Weak recommendation, Low quality evidence)',
      'Consider hyperbaric oxygen therapy as adjunct to surgery and antibiotics for necrotizing infections (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Moderate recommendations are based on Moderate to Low quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA SSTI guidelines requires systematic approach to classification, diagnosis, and treatment. CLASSIFICATION: Uncomplicated SSTIs: Simple cellulitis, Erysipelas, Simple abscess (<2 cm without systemic signs). Complicated SSTIs: Infected ulcers (diabetic foot, pressure ulcers, vascular insufficiency), Major abscesses (>2 cm or with systemic signs), Surgical site infections, Necrotizing infections. UNCOMPLICATED CELLULITIS: Clinical presentation: Erythema, warmth, swelling, tenderness, well-demarcated borders (erysipelas), ill-defined borders (cellulitis). Systemic signs: Fever, chills, malaise. Microbiology: Streptococcus pyogenes (Group A Strep) most common, Staphylococcus aureus less common. Diagnosis: Clinical diagnosis, blood cultures not routinely needed unless systemic signs. Treatment: Outpatient oral antibiotics for 5-7 days: Cephalexin 500mg PO QID, OR Dicloxacillin 500mg PO QID, OR Clindamycin 300-450mg PO TID (if penicillin allergy). Severe allergy: Doxycycline 100mg PO BID or Levofloxacin 750mg PO daily. Inpatient IV antibiotics if severe or unable to tolerate oral: Cefazolin 1-2g IV q8h, OR Nafcillin 1-2g IV q4h, OR Clindamycin 600-900mg IV q8h. PURULENT CELLULITIS/ABSCESS: Clinical presentation: Fluctuant collection, purulent drainage, surrounding erythema. Microbiology: Staphylococcus aureus (including MRSA) most common. Treatment: Incision and drainage (I&D) is primary treatment for abscesses. Send purulent material for Gram stain and culture. Antibiotics with MRSA coverage if: Abscess >2 cm, Surrounding cellulitis, Systemic signs of infection, Immunocompromised, Failed I&D alone. Outpatient oral antibiotics: Trimethoprim-sulfamethoxazole (TMP-SMX) 1-2 DS tablets PO BID, OR Doxycycline 100mg PO BID, OR Clindamycin 300-450mg PO TID, OR Linezolid 600mg PO BID. Inpatient IV antibiotics: Vancomycin 15-20mg/kg IV q8-12h (target trough 15-20 mcg/mL), OR Daptomycin 4mg/kg IV daily, OR Linezolid 600mg IV q12h, OR Ceftaroline 600mg IV q12h. COMPLICATED SSTIs: Infected ulcers (diabetic foot, pressure ulcers): Broad-spectrum antibiotics covering MRSA, streptococci, gram-negative bacteria, anaerobes: Vancomycin 15-20mg/kg IV q8-12h PLUS Piperacillin-tazobactam 3.375-4.5g IV q6h, OR Vancomycin PLUS Cefepime 2g IV q8h PLUS Metronidazole 500mg IV q8h, OR Vancomycin PLUS Carbapenem (imipenem 500mg IV q6h or meropenem 1g IV q8h). Surgical debridement of necrotic tissue. Wound care and offloading. Vascular assessment and revascularization if indicated. Major abscesses: I&D plus antibiotics as above. Surgical site infections: Antibiotics based on surgical procedure and likely pathogens. Remove infected hardware if present. NECROTIZING FASCIITIS: Clinical presentation: Severe pain out of proportion to exam, Rapid progression, Skin changes (dusky, bullae, necrosis), Crepitus (gas in tissues), Systemic toxicity (fever, hypotension, altered mental status). Microbiology: Type I (polymicrobial): Mixed aerobic and anaerobic bacteria (Streptococcus, Staphylococcus, Enterobacterales, Bacteroides, Clostridium). Type II (monomicrobial): Streptococcus pyogenes (Group A Strep) or Staphylococcus aureus. Diagnosis: Clinical suspicion (LRINEC score ≥6 suggests necrotizing infection). Imaging: CT or MRI shows gas in tissues, fascial thickening, fluid collections. Surgical exploration is diagnostic and therapeutic. Treatment: EMERGENT surgical debridement (within 6 hours). Repeat debridement as needed until all necrotic tissue removed. Broad-spectrum antibiotics: Vancomycin 15-20mg/kg IV q8-12h (for MRSA) PLUS Piperacillin-tazobactam 3.375-4.5g IV q6h or Carbapenem (imipenem 500mg IV q6h or meropenem 1g IV q8h) PLUS Clindamycin 600-900mg IV q8h (for toxin suppression). Streptococcal toxic shock syndrome: Add IVIG 2g/kg single dose (controversial but may reduce mortality). Supportive care: Aggressive fluid resuscitation, vasopressors, ICU monitoring. ANIMAL BITES: Dog bites: Amoxicillin-clavulanate 875/125mg PO BID for 5-7 days. Cat bites: Amoxicillin-clavulanate 875/125mg PO BID for 5-7 days (higher infection risk than dog bites). Human bites: Amoxicillin-clavulanate 875/125mg PO BID for 5-7 days. Penicillin allergy: Doxycycline 100mg PO BID plus metronidazole 500mg PO TID, OR Moxifloxacin 400mg PO daily. Rabies prophylaxis: Assess need based on animal type and availability for observation. Tetanus prophylaxis: Update if >5 years since last dose. MONITORING: Clinical response: Expect improvement in 48-72 hours (decreased erythema, pain, swelling). Mark borders of erythema to assess progression. Failure to improve: Consider resistant organism, abscess formation, necrotizing infection, alternative diagnosis (DVT, gout, contact dermatitis), or inadequate source control. Obtain imaging if necrotizing infection suspected. Adjust antibiotics based on culture results. DURATION OF THERAPY: Uncomplicated cellulitis: 5-7 days. Purulent cellulitis/abscess: 5-7 days after I&D. Complicated SSTIs: 7-14 days depending on severity and response. Necrotizing fasciitis: 7-14 days after source control achieved.',
    keyPoints: [
      'Incision and drainage is primary treatment for abscesses',
      'Uncomplicated cellulitis: cephalexin, dicloxacillin, or clindamycin for 5-7 days',
      'Purulent cellulitis/abscess: add MRSA coverage (TMP-SMX, doxycycline, clindamycin)',
      'Complicated SSTIs: broad-spectrum antibiotics covering MRSA and gram-negatives',
      'Necrotizing fasciitis: emergent surgical debridement plus broad-spectrum antibiotics',
      'Add clindamycin for severe streptococcal infections (toxin suppression)',
    ],
    idsaUrl: 'https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/',
    publicationYear: 2014,
  },

  // URINARY TRACT INFECTIONS
  {
    topic: 'Urinary Tract Infections - IDSA Guideline',
    keywords: ['urinary tract infection', 'uti', 'cystitis', 'pyelonephritis', 'idsa uti', 'uti guideline', 'uti treatment', 'bladder infection'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for urinary tract infections provides evidence-based recommendations for diagnosis and management of uncomplicated and complicated UTIs. Uncomplicated UTI occurs in healthy, non-pregnant women without structural or functional urinary tract abnormalities. Complicated UTI includes pyelonephritis, UTI in men, pregnant women, immunocompromised hosts, or those with urinary tract abnormalities. Empiric therapy selection based on local resistance patterns. Nitrofurantoin, TMP-SMX, and fosfomycin are first-line for uncomplicated cystitis. Fluoroquinolones or beta-lactams for pyelonephritis. Duration typically 3 days for uncomplicated cystitis, 5-7 days for pyelonephritis.',
    strongRecommendations: [
      'For uncomplicated cystitis in women, use nitrofurantoin 100mg BID for 5 days, TMP-SMX DS BID for 3 days, or fosfomycin 3g single dose (Strong recommendation, High quality evidence)',
      'For uncomplicated pyelonephritis in women, use ciprofloxacin 500mg BID or levofloxacin 750mg daily for 5-7 days, OR ceftriaxone 1g IV daily plus oral fluoroquinolone for 5-7 days (Strong recommendation, High quality evidence)',
      'Obtain urine culture before initiating antibiotics in patients with suspected pyelonephritis or complicated UTI (Strong recommendation, Moderate quality evidence)',
      'For complicated UTI or pyelonephritis requiring hospitalization, use IV antibiotics: ceftriaxone 1-2g daily, cefepime 1-2g q12h, or fluoroquinolone (Strong recommendation, Moderate quality evidence)',
      'Treat uncomplicated cystitis for 3 days (TMP-SMX or fluoroquinolone) or 5 days (nitrofurantoin) (Strong recommendation, High quality evidence)',
      'Treat uncomplicated pyelonephritis for 5-7 days (fluoroquinolone) or 10-14 days (beta-lactam) (Strong recommendation, Moderate quality evidence)',
    ],
    moderateRecommendations: [
      'Avoid fluoroquinolones for uncomplicated cystitis if other options available due to adverse effects and resistance concerns (Moderate recommendation, Moderate quality evidence)',
      'For uncomplicated cystitis, avoid TMP-SMX if local resistance >20% or recent TMP-SMX use (Moderate recommendation, Moderate quality evidence)',
      'For complicated UTI with risk factors for ESBL-producing organisms (recent hospitalization, recent antibiotics, travel to endemic areas), use carbapenem (ertapenem, meropenem) pending culture results (Moderate recommendation, Moderate quality evidence)',
      'For catheter-associated UTI, remove or replace catheter if possible before initiating antibiotics (Moderate recommendation, Moderate quality evidence)',
      'Do not treat asymptomatic bacteriuria except in pregnant women or before urologic procedures (Moderate recommendation, High quality evidence)',
    ],
    weakRecommendations: [
      'Consider beta-lactams (amoxicillin-clavulanate, cefpodoxime, cefdinir) for uncomplicated cystitis if other options not available (Weak recommendation, Moderate quality evidence)',
      'Consider longer duration of therapy (7-14 days) for complicated UTI or pyelonephritis with slow clinical response (Weak recommendation, Low quality evidence)',
      'Consider imaging (CT or ultrasound) for patients with pyelonephritis not improving after 48-72 hours of appropriate antibiotics (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Moderate recommendations are based on Moderate quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA UTI guidelines requires systematic approach to classification, diagnosis, and treatment. CLASSIFICATION: Uncomplicated cystitis: Acute cystitis in healthy, non-pregnant women without structural or functional urinary tract abnormalities. Uncomplicated pyelonephritis: Acute pyelonephritis in healthy, non-pregnant women without structural or functional urinary tract abnormalities. Complicated UTI: UTI in men, pregnant women, children, immunocompromised hosts, structural abnormalities (obstruction, stones, neurogenic bladder), functional abnormalities (vesicoureteral reflux), catheter-associated UTI, recent urologic procedure. UNCOMPLICATED CYSTITIS: Clinical presentation: Dysuria, frequency, urgency, suprapubic pain. No fever or flank pain (suggests pyelonephritis). Diagnosis: Clinical diagnosis in women with typical symptoms. Urinalysis: Pyuria (>10 WBC/hpf), positive leukocyte esterase, positive nitrites. Urine culture not routinely needed for uncomplicated cystitis. Treatment: First-line options: Nitrofurantoin monohydrate/macrocrystals 100mg PO BID for 5 days (avoid if CrCl <30 mL/min), OR TMP-SMX DS (160/800mg) PO BID for 3 days (avoid if local resistance >20% or recent use), OR Fosfomycin 3g PO single dose (lower efficacy than nitrofurantoin or TMP-SMX). Alternative options (if first-line not available): Ciprofloxacin 250mg PO BID for 3 days or Levofloxacin 250mg PO daily for 3 days (avoid due to adverse effects and resistance concerns), OR Beta-lactams: Amoxicillin-clavulanate 500/125mg PO TID for 5-7 days, Cefpodoxime 100mg PO BID for 5-7 days, Cefdinir 300mg PO BID for 5-7 days (less effective than other options). UNCOMPLICATED PYELONEPHRITIS: Clinical presentation: Fever, chills, flank pain, nausea, vomiting, costovertebral angle tenderness. May have dysuria, frequency, urgency. Diagnosis: Clinical diagnosis plus urinalysis and urine culture. Urinalysis: Pyuria, bacteriuria, WBC casts. Urine culture: Obtain before antibiotics. Blood cultures: Obtain if severe or hospitalized. Treatment: Outpatient (mild-moderate severity): Ciprofloxacin 500mg PO BID for 5-7 days (if local resistance <10%), OR Levofloxacin 750mg PO daily for 5-7 days (if local resistance <10%), OR Ceftriaxone 1g IV/IM once PLUS Ciprofloxacin 500mg PO BID or Levofloxacin 750mg PO daily for 5-7 days (if local resistance >10%). Inpatient (severe or unable to tolerate oral): Ceftriaxone 1-2g IV daily, OR Cefepime 1-2g IV q12h, OR Ciprofloxacin 400mg IV q12h or Levofloxacin 750mg IV daily, OR Piperacillin-tazobactam 3.375-4.5g IV q6h (if Pseudomonas risk). Switch to oral antibiotics when clinically improved and able to tolerate oral intake. Total duration 5-7 days (fluoroquinolone) or 10-14 days (beta-lactam). COMPLICATED UTI: Men: Treat as complicated UTI. Obtain urine culture. Fluoroquinolone or TMP-SMX for 7-14 days. Consider prostatitis if recurrent UTIs. Pregnant women: Treat asymptomatic bacteriuria and symptomatic UTI. Obtain urine culture. Avoid fluoroquinolones and TMP-SMX (especially first trimester). Use nitrofurantoin (avoid near term), amoxicillin-clavulanate, or cephalosporin for 7 days. Pyelonephritis: Hospitalize for IV antibiotics (ceftriaxone), then oral antibiotics for total 10-14 days. Catheter-associated UTI (CAUTI): Remove or replace catheter if possible. Obtain urine culture. Empiric antibiotics: Ceftriaxone 1-2g IV daily, Cefepime 1-2g IV q12h, Ciprofloxacin 400mg IV q12h, or Piperacillin-tazobactam 3.375-4.5g IV q6h. Duration 7-14 days. ESBL-producing organisms: Risk factors: Recent hospitalization, recent antibiotics, travel to endemic areas (India, Middle East). Empiric therapy: Carbapenem (ertapenem 1g IV daily, meropenem 1g IV q8h) pending culture results. De-escalate based on susceptibilities. ASYMPTOMATIC BACTERIURIA: Definition: Positive urine culture (≥10^5 CFU/mL) without symptoms. Do NOT treat except: Pregnant women (treat to prevent pyelonephritis and adverse pregnancy outcomes), Before urologic procedures with anticipated mucosal bleeding. Do NOT screen or treat: Healthy women, Diabetic patients, Elderly patients, Catheterized patients (unless undergoing urologic procedure). RECURRENT UTI: Definition: ≥2 UTIs in 6 months or ≥3 UTIs in 12 months. Evaluation: Urine culture to confirm infection. Consider imaging (ultrasound or CT) to rule out structural abnormalities. Consider post-void residual to assess for incomplete bladder emptying. Prevention: Behavioral modifications: Increase fluid intake, void after intercourse, avoid spermicides. Vaginal estrogen for postmenopausal women. Prophylactic antibiotics: TMP-SMX SS daily or 3 times weekly, Nitrofurantoin 50-100mg daily, Cephalexin 250mg daily. Methenamine hippurate 1g BID (non-antibiotic option). MONITORING: Clinical response: Expect improvement in 48-72 hours (resolution of fever, decreased dysuria). Failure to improve: Consider resistant organism, abscess, obstruction, or alternative diagnosis. Obtain imaging (CT or ultrasound) if not improving. Adjust antibiotics based on culture results. Urine culture: Repeat culture not needed if clinical improvement. Repeat culture if persistent symptoms or recurrent infection.',
    keyPoints: [
      'Uncomplicated cystitis: nitrofurantoin, TMP-SMX, or fosfomycin for 3-5 days',
      'Uncomplicated pyelonephritis: fluoroquinolone for 5-7 days or beta-lactam for 10-14 days',
      'Obtain urine culture for pyelonephritis and complicated UTI',
      'Avoid fluoroquinolones for uncomplicated cystitis if other options available',
      'Do not treat asymptomatic bacteriuria except in pregnant women or before urologic procedures',
      'Complicated UTI: 7-14 days therapy; consider ESBL risk factors',
    ],
    idsaUrl: 'https://www.idsociety.org/practice-guideline/urinary-tract-infection/',
    publicationYear: 2011,
  },

  // INTRA-ABDOMINAL INFECTIONS
  {
    topic: 'Intra-Abdominal Infections - IDSA Guideline',
    keywords: ['intra-abdominal infection', 'iai', 'peritonitis', 'appendicitis', 'diverticulitis', 'cholecystitis', 'idsa iai', 'abdominal infection'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for intra-abdominal infections provides evidence-based recommendations for diagnosis and management of IAIs. IAIs classified as uncomplicated (contained within single organ) or complicated (extends beyond organ into peritoneal cavity). Source control (surgical or percutaneous drainage) is essential for complicated IAIs. Empiric antibiotics target enteric gram-negative bacteria and anaerobes. Community-acquired IAIs use narrower spectrum agents (ceftriaxone plus metronidazole, ertapenem). Healthcare-associated IAIs require broader coverage for resistant organisms (piperacillin-tazobactam, carbapenems). Duration typically 4-7 days after source control achieved.',
    strongRecommendations: [
      'Achieve adequate source control (surgical or percutaneous drainage) for complicated intra-abdominal infections (Strong recommendation, High quality evidence)',
      'Initiate empiric antibiotic therapy promptly in patients with suspected complicated IAI (Strong recommendation, Moderate quality evidence)',
      'For community-acquired IAI of mild-moderate severity, use single-agent therapy: ertapenem, moxifloxacin, or tigecycline, OR combination therapy: ceftriaxone, cefotaxime, or ciprofloxacin plus metronidazole (Strong recommendation, High quality evidence)',
      'For healthcare-associated IAI or high-risk community-acquired IAI, use broad-spectrum antibiotics: piperacillin-tazobactam, carbapenems (imipenem, meropenem, doripenem), or ceftazidime/cefepime plus metronidazole (Strong recommendation, Moderate quality evidence)',
      'Limit duration of antibiotic therapy to 4-7 days after adequate source control achieved (Strong recommendation, High quality evidence)',
      'Obtain intraoperative cultures to guide antibiotic therapy (Strong recommendation, Moderate quality evidence)',
    ],
    moderateRecommendations: [
      'For community-acquired IAI in critically ill patients, use combination therapy with beta-lactam/beta-lactamase inhibitor or carbapenem plus fluoroquinolone or aminoglycoside (Moderate recommendation, Moderate quality evidence)',
      'For healthcare-associated IAI with risk factors for resistant organisms, consider empiric coverage for MRSA (vancomycin or linezolid) and Candida (fluconazole or echinocandin) (Moderate recommendation, Low quality evidence)',
      'De-escalate antibiotic therapy based on culture results and clinical response (Moderate recommendation, Moderate quality evidence)',
      'For uncomplicated appendicitis or cholecystitis, use antibiotics for 24 hours after surgery (Moderate recommendation, Moderate quality evidence)',
      'For complicated IAI with adequate source control and good clinical response, discontinue antibiotics after 4 days (Moderate recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'Consider longer duration of antibiotics (>7 days) for patients with inadequate source control, persistent fever, or ongoing organ dysfunction (Weak recommendation, Low quality evidence)',
      'Consider procalcitonin-guided therapy to determine duration of antibiotics in patients with IAI (Weak recommendation, Low quality evidence)',
      'Consider antifungal therapy for patients with recurrent perforation, anastomotic leak, or severe immunosuppression (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Moderate recommendations are based on Moderate to Low quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA IAI guidelines requires systematic approach to source control, empiric therapy, and duration. CLASSIFICATION: Uncomplicated IAI: Infection contained within single organ without peritoneal contamination. Examples: Uncomplicated appendicitis, uncomplicated cholecystitis, uncomplicated diverticulitis. Complicated IAI: Infection extends beyond organ into peritoneal cavity. Examples: Perforated appendicitis, gangrenous cholecystitis, perforated diverticulitis, secondary peritonitis, intra-abdominal abscess, anastomotic leak. SOURCE CONTROL: Essential for complicated IAIs. Surgical intervention: Appendectomy for appendicitis, Cholecystectomy for cholecystitis, Colectomy for perforated diverticulitis, Repair of perforated viscus, Debridement of necrotic tissue. Percutaneous drainage: For well-defined abscesses ≥3 cm. Inadequate source control: Persistent fever, ongoing organ dysfunction, failure to improve clinically. EMPIRIC ANTIBIOTIC THERAPY: Community-acquired IAI (mild-moderate severity): Single-agent therapy: Ertapenem 1g IV daily, OR Moxifloxacin 400mg IV daily, OR Tigecycline 100mg IV loading dose, then 50mg IV q12h. Combination therapy: Ceftriaxone 1-2g IV daily or Cefotaxime 1-2g IV q6-8h or Ciprofloxacin 400mg IV q12h PLUS Metronidazole 500mg IV q8h. Community-acquired IAI (high severity or high risk): Piperacillin-tazobactam 3.375-4.5g IV q6h (extended infusion preferred), OR Imipenem 500mg IV q6h or Meropenem 1g IV q8h or Doripenem 500mg IV q8h, OR Ceftazidime 2g IV q8h or Cefepime 2g IV q8h PLUS Metronidazole 500mg IV q8h. Healthcare-associated IAI: Broader spectrum coverage for resistant organisms: Piperacillin-tazobactam 4.5g IV q6h (extended infusion), OR Imipenem 500mg IV q6h or Meropenem 1g IV q8h or Doripenem 500mg IV q8h, OR Ceftazidime-avibactam 2.5g IV q8h (if carbapenem-resistant), OR Ceftolozane-tazobactam 1.5g IV q8h (if MDR Pseudomonas). Risk factors for MRSA (prior MRSA infection, recent hospitalization): Add Vancomycin 15-20mg/kg IV q8-12h (target trough 15-20 mcg/mL) OR Linezolid 600mg IV q12h. Risk factors for Candida (recurrent perforation, anastomotic leak, immunosuppression, Candida isolated from peritoneal cultures): Add Fluconazole 800mg IV loading dose, then 400mg IV daily (if susceptible), OR Echinocandin (caspofungin 70mg IV loading dose, then 50mg IV daily; micafungin 100mg IV daily; anidulafungin 200mg IV loading dose, then 100mg IV daily). SPECIFIC INFECTIONS: Appendicitis: Uncomplicated: Antibiotics for 24 hours after appendectomy. Complicated (perforated, gangrenous, abscess): Antibiotics for 4-7 days after source control. Cholecystitis: Uncomplicated: Antibiotics for 24 hours after cholecystectomy. Complicated (gangrenous, emphysematous, perforation): Antibiotics for 4-7 days after source control. Diverticulitis: Uncomplicated: Outpatient oral antibiotics (amoxicillin-clavulanate, ciprofloxacin plus metronidazole) for 7-10 days. Complicated (perforation, abscess, fistula): IV antibiotics plus source control (percutaneous drainage or surgery) for 4-7 days. Secondary peritonitis: Perforated viscus (peptic ulcer, bowel perforation): Surgical repair plus antibiotics for 4-7 days. Tertiary peritonitis: Persistent or recurrent peritonitis despite adequate source control. Broad-spectrum antibiotics covering resistant organisms and fungi. DURATION OF THERAPY: Uncomplicated IAI: 24 hours after surgery. Complicated IAI with adequate source control: 4 days (if good clinical response). Complicated IAI with inadequate source control: Continue antibiotics until source control achieved, then 4-7 days. Persistent fever or organ dysfunction: Continue antibiotics until clinical improvement, typically 7-14 days. DE-ESCALATION: Narrow spectrum based on culture results: If Enterobacterales isolated and susceptible, switch to ceftriaxone or fluoroquinolone. If anaerobes isolated, continue metronidazole. If MRSA not isolated, discontinue vancomycin. If Candida not isolated or not causing infection, discontinue antifungal. MONITORING: Clinical response: Expect improvement in 48-72 hours (defervescence, decreased WBC, improved bowel function, decreased abdominal pain). Failure to improve: Consider inadequate source control, resistant organism, abscess formation, or alternative diagnosis. Obtain imaging (CT) if not improving. Repeat cultures if persistent fever. Adjust antibiotics based on susceptibilities. COMPLICATIONS: Intra-abdominal abscess: Percutaneous drainage if ≥3 cm. Antibiotics for 4-7 days after drainage. Anastomotic leak: Surgical repair or diversion plus antibiotics. Tertiary peritonitis: Broad-spectrum antibiotics plus aggressive source control. Abdominal compartment syndrome: Surgical decompression.',
    keyPoints: [
      'Source control (surgical or percutaneous drainage) is essential for complicated IAI',
      'Community-acquired IAI: ertapenem, moxifloxacin, or ceftriaxone plus metronidazole',
      'Healthcare-associated IAI: piperacillin-tazobactam or carbapenems',
      'Add MRSA coverage (vancomycin) if risk factors present',
      'Add antifungal coverage (fluconazole or echinocandin) if high risk for Candida',
      'Duration 4-7 days after adequate source control',
      'Obtain intraoperative cultures to guide therapy',
    ],
    idsaUrl: 'https://www.idsociety.org/practice-guideline/intra-abdominal-infection/',
    publicationYear: 2010,
  },

  // INFECTIVE ENDOCARDITIS
  {
    topic: 'Infective Endocarditis - IDSA Guideline',
    keywords: ['infective endocarditis', 'bacterial endocarditis', 'endocarditis', 'ie', 'idsa endocarditis', 'endocarditis guideline', 'valve infection'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for infective endocarditis provides evidence-based recommendations for diagnosis, treatment, and prevention of IE. The guideline emphasizes the Modified Duke Criteria for diagnosis, requiring blood cultures and echocardiography. Treatment consists of prolonged IV antibiotics (4-6 weeks) targeting common pathogens including viridans streptococci, Staphylococcus aureus, and enterococci. Native valve endocarditis typically treated with penicillin or ceftriaxone for streptococci, nafcillin or vancomycin for staphylococci. Prosthetic valve endocarditis requires longer treatment and often surgery. Surgical indications include heart failure, uncontrolled infection, large vegetations, and recurrent emboli. Antibiotic prophylaxis recommended only for high-risk patients undergoing dental procedures.',
    strongRecommendations: [
      'Obtain at least 3 sets of blood cultures from separate venipuncture sites before initiating antibiotic therapy in patients with suspected IE (Strong recommendation, High quality evidence)',
      'Perform echocardiography (TTE initially, TEE if TTE negative or prosthetic valve) in all patients with suspected IE (Strong recommendation, High quality evidence)',
      'For native valve IE due to penicillin-susceptible viridans streptococci, use penicillin G 12-18 million units/day IV continuously or in 6 divided doses, or ceftriaxone 2g IV daily for 4 weeks (Strong recommendation, High quality evidence)',
      'For native valve IE due to methicillin-susceptible S. aureus (MSSA), use nafcillin or oxacillin 12g/day IV in 4-6 divided doses for 6 weeks (Strong recommendation, High quality evidence)',
      'For native valve IE due to methicillin-resistant S. aureus (MRSA), use vancomycin 15-20mg/kg IV q8-12h (target trough 15-20 mcg/mL) for 6 weeks (Strong recommendation, High quality evidence)',
      'For native valve IE due to enterococci, use ampicillin 12g/day IV in 6 divided doses plus gentamicin 3mg/kg/day IV in 2-3 divided doses for 4-6 weeks (Strong recommendation, High quality evidence)',
      'Consult cardiac surgery for patients with IE and heart failure, uncontrolled infection, large vegetations (>10mm), recurrent emboli, or prosthetic valve IE with complications (Strong recommendation, Moderate quality evidence)',
    ],
    moderateRecommendations: [
      'Use Modified Duke Criteria to diagnose IE: 2 major criteria, 1 major + 3 minor criteria, or 5 minor criteria (Moderate recommendation, Moderate quality evidence)',
      'For prosthetic valve IE, use combination therapy with vancomycin plus gentamicin plus rifampin for 6 weeks (Moderate recommendation, Moderate quality evidence)',
      'Provide antibiotic prophylaxis for high-risk patients (prosthetic valve, prior IE, unrepaired cyanotic congenital heart disease, repaired congenital heart disease with residual defects) undergoing dental procedures with gingival manipulation (Moderate recommendation, Moderate quality evidence)',
      'Use amoxicillin 2g PO 30-60 minutes before dental procedure for antibiotic prophylaxis (clindamycin 600mg if penicillin allergy) (Moderate recommendation, Moderate quality evidence)',
      'Monitor for complications: heart failure, embolic events, abscess formation, conduction abnormalities (Moderate recommendation, Low quality evidence)',
    ],
    weakRecommendations: [
      'Consider shorter duration of therapy (2 weeks) for uncomplicated native valve IE due to highly susceptible viridans streptococci in select patients (Weak recommendation, Moderate quality evidence)',
      'Consider outpatient parenteral antibiotic therapy (OPAT) for stable patients after initial inpatient treatment (Weak recommendation, Low quality evidence)',
      'Consider adding gentamicin to beta-lactam therapy for first 2 weeks of treatment for S. aureus IE to accelerate bacterial clearance (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from observational studies and expert consensus; Moderate recommendations are based on Moderate quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA IE guidelines requires systematic approach to diagnosis, treatment, and surgical consultation. DIAGNOSIS: Modified Duke Criteria: Major criteria: (1) Positive blood cultures: Typical organisms (viridans streptococci, S. aureus, enterococci, HACEK) from 2 separate cultures, OR Persistently positive blood cultures (≥2 cultures >12 hours apart, or 3/3 or majority of ≥4 cultures positive). (2) Endocardial involvement on echocardiography: Vegetation, abscess, new valve dehiscence, or new valvular regurgitation. Minor criteria: Predisposing condition (prosthetic valve, structural heart disease, IV drug use), Fever ≥38°C, Vascular phenomena (arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, Janeway lesions), Immunologic phenomena (glomerulonephritis, Osler nodes, Roth spots), Positive blood culture not meeting major criteria, Echocardiographic findings not meeting major criteria. Definite IE: 2 major, 1 major + 3 minor, or 5 minor criteria. Possible IE: 1 major + 1 minor, or 3 minor criteria. BLOOD CULTURES: Obtain 3 sets from separate venipuncture sites over 1-2 hours before antibiotics. Each set = 1 aerobic + 1 anaerobic bottle. Hold cultures for 3 weeks if HACEK organisms or Brucella suspected. Culture-negative IE: Consider fastidious organisms (HACEK, Bartonella, Coxiella, Tropheryma), fungi, or prior antibiotic therapy. ECHOCARDIOGRAPHY: Transthoracic echocardiogram (TTE): Initial test, 60-70% sensitivity for vegetations. Transesophageal echocardiogram (TEE): More sensitive (90-95%), better for prosthetic valves, abscess detection. Indications for TEE: Prosthetic valve, TTE negative but high clinical suspicion, Suspected complications (abscess, perforation). TREATMENT: Native Valve IE - Viridans Streptococci (Penicillin-Susceptible, MIC ≤0.12 mcg/mL): Penicillin G 12-18 million units/day IV continuously or in 6 divided doses for 4 weeks, OR Ceftriaxone 2g IV daily for 4 weeks, OR Penicillin G or ceftriaxone for 2 weeks PLUS Gentamicin 3mg/kg/day IV in 1 dose for 2 weeks (for uncomplicated cases). Native Valve IE - Viridans Streptococci (Relatively Resistant, MIC >0.12 to ≤0.5 mcg/mL): Penicillin G 24 million units/day IV continuously or in 6 divided doses for 4 weeks PLUS Gentamicin 3mg/kg/day IV in 1 dose for 2 weeks, OR Ceftriaxone 2g IV daily for 4 weeks PLUS Gentamicin for 2 weeks. Native Valve IE - Staphylococcus aureus (MSSA): Nafcillin or oxacillin 12g/day IV in 4-6 divided doses for 6 weeks, OR Cefazolin 6g/day IV in 3 divided doses for 6 weeks. Consider adding gentamicin 3mg/kg/day IV for first 3-5 days (controversial). Native Valve IE - Staphylococcus aureus (MRSA): Vancomycin 15-20mg/kg IV q8-12h (target trough 15-20 mcg/mL) for 6 weeks, OR Daptomycin 8-10mg/kg IV daily for 6 weeks (if vancomycin intolerant or resistant). Native Valve IE - Enterococci: Ampicillin 12g/day IV in 6 divided doses PLUS Gentamicin 3mg/kg/day IV in 2-3 divided doses for 4-6 weeks, OR Vancomycin 15-20mg/kg IV q8-12h PLUS Gentamicin for 6 weeks (if ampicillin-resistant or penicillin allergy). Prosthetic Valve IE - Staphylococci: Vancomycin 15-20mg/kg IV q8-12h PLUS Rifampin 300mg PO/IV q8h PLUS Gentamicin 3mg/kg/day IV in 2-3 divided doses for 6 weeks (all three drugs). Prosthetic Valve IE - Streptococci: Penicillin G or ceftriaxone PLUS Gentamicin for 6 weeks. HACEK Organisms (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella): Ceftriaxone 2g IV daily for 4 weeks (native valve) or 6 weeks (prosthetic valve). Culture-Negative IE: Ampicillin-sulbactam 12g/day IV in 4 divided doses PLUS Gentamicin 3mg/kg/day IV for 4-6 weeks, OR Vancomycin PLUS Gentamicin PLUS Ciprofloxacin. SURGICAL INDICATIONS: Heart failure: Valve dysfunction causing pulmonary edema or cardiogenic shock. Most common indication for surgery. Uncontrolled infection: Persistent fever and bacteremia >5-7 days despite appropriate antibiotics, Abscess, fistula, or enlarging vegetation. Prevention of embolism: Large vegetations (>10mm) with high embolic risk, especially if mobile and on anterior mitral leaflet. Recurrent emboli despite appropriate antibiotics. Prosthetic valve IE: Especially if heart failure, dehiscence, or persistent infection. Fungal IE: Almost always requires surgery (medical therapy alone rarely successful). Timing of surgery: Emergent (within 24 hours): Severe heart failure, cardiogenic shock. Urgent (within days): Uncontrolled infection, abscess, conduction abnormalities. Elective (within 1-2 weeks): Large vegetations, recurrent emboli. ANTIBIOTIC PROPHYLAXIS: High-risk patients: Prosthetic cardiac valve, Prior IE, Unrepaired cyanotic congenital heart disease, Repaired congenital heart disease with residual defects, Cardiac transplant with valvulopathy. Procedures requiring prophylaxis: Dental procedures with gingival manipulation or perforation of oral mucosa. Prophylaxis NOT recommended: Respiratory tract procedures (bronchoscopy), GI or GU procedures (colonoscopy, cystoscopy), Skin procedures. Regimen: Amoxicillin 2g PO 30-60 minutes before procedure, OR Ampicillin 2g IV/IM 30-60 minutes before procedure, OR Cefazolin or ceftriaxone 1g IV/IM 30-60 minutes before procedure (if unable to take oral), OR Clindamycin 600mg PO/IV 30-60 minutes before procedure (if penicillin allergy). MONITORING: Blood cultures: Repeat daily until negative (typically 2-3 days for streptococci, 5-7 days for S. aureus). Echocardiography: Repeat if clinical deterioration, new murmur, or persistent fever. Monitor for complications: Heart failure (daily exam, chest X-ray), Embolic events (neurologic exam, fundoscopy), Abscess (ECG for conduction abnormalities, repeat echo), Renal dysfunction (creatinine, urinalysis). Antibiotic levels: Vancomycin trough 15-20 mcg/mL, Gentamicin peak 3-4 mcg/mL and trough <1 mcg/mL. COMPLICATIONS: Heart failure: Most common cause of death. Valve dysfunction, perforation, or dehiscence. Requires urgent surgery. Embolic events: Stroke, splenic infarct, renal infarct, mycotic aneurysm. Occur in 20-50% of patients. Risk highest in first 2 weeks. Abscess: Perivalvular extension. Presents with persistent fever, new conduction abnormalities (PR prolongation, AV block). Requires surgery. Mycotic aneurysm: Intracranial or peripheral. Risk of rupture. Requires surgical repair. Glomerulonephritis: Immune complex deposition. Presents with hematuria, proteinuria, renal insufficiency. PROGNOSIS: Overall mortality: 15-20% in-hospital, 25-30% at 1 year. Worse prognosis: S. aureus (especially MRSA), Prosthetic valve IE, Heart failure, Abscess, Stroke.',
    idsaUrl: 'https://www.idsociety.org/practice-guideline/infective-endocarditis/',
    publicationYear: 2015,
  },

  // CLOSTRIDIOIDES DIFFICILE INFECTION
  {
    topic: 'Clostridioides difficile Infection - IDSA Guideline',
    keywords: ['clostridioides difficile', 'clostridium difficile', 'c diff', 'c difficile', 'cdiff', 'idsa c diff', 'pseudomembranous colitis', 'antibiotic-associated diarrhea'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA guideline for Clostridioides difficile infection provides evidence-based recommendations for diagnosis, treatment, and prevention of CDI. The guideline emphasizes nucleic acid amplification testing (NAAT) for diagnosis in patients with diarrhea. Treatment stratified by severity: non-severe (vancomycin or fidaxomicin), severe (vancomycin), fulminant (vancomycin plus metronidazole, consider surgery). Recurrent CDI treated with tapered/pulsed vancomycin, fidaxomicin, or fecal microbiota transplantation (FMT). Bezlotoxumab reduces recurrence risk. Prevention includes antibiotic stewardship, contact precautions, and environmental cleaning with sporicidal agents.',
    strongRecommendations: [
      'Test for C. difficile only in patients with unexplained diarrhea (≥3 unformed stools in 24 hours) (Strong recommendation, Moderate quality evidence)',
      'Use nucleic acid amplification test (NAAT) or two-step algorithm (NAAT plus toxin EIA) for diagnosis of CDI (Strong recommendation, Moderate quality evidence)',
      'For initial episode of non-severe CDI, use vancomycin 125mg PO QID for 10 days or fidaxomicin 200mg PO BID for 10 days (Strong recommendation, High quality evidence)',
      'For initial episode of severe CDI (WBC ≥15,000/μL or serum creatinine ≥1.5mg/dL), use vancomycin 125mg PO QID for 10 days (Strong recommendation, Moderate quality evidence)',
      'For fulminant CDI (hypotension, shock, ileus, megacolon), use vancomycin 500mg PO/NG QID plus metronidazole 500mg IV TID, and consider surgical consultation (Strong recommendation, Moderate quality evidence)',
      'For first recurrence of CDI, use vancomycin tapered/pulsed regimen or fidaxomicin 200mg PO BID for 10 days (Strong recommendation, Moderate quality evidence)',
      'For multiple recurrences of CDI (≥2 recurrences), use fecal microbiota transplantation (FMT) (Strong recommendation, High quality evidence)',
    ],
    moderateRecommendations: [
      'Discontinue inciting antibiotic as soon as possible in patients with CDI (Moderate recommendation, Moderate quality evidence)',
      'Do not perform repeat testing (test of cure) during same episode of diarrhea (Moderate recommendation, Moderate quality evidence)',
      'For severe-complicated or fulminant CDI with ileus, consider rectal vancomycin (500mg in 100mL saline q6h as retention enema) in addition to oral/NG vancomycin and IV metronidazole (Moderate recommendation, Low quality evidence)',
      'Consider bezlotoxumab (monoclonal antibody against C. difficile toxin B) 10mg/kg IV single dose for patients at high risk for recurrence (Moderate recommendation, Moderate quality evidence)',
      'Implement contact precautions (gloves and gown) for patients with CDI (Moderate recommendation, Moderate quality evidence)',
      'Clean environment with sporicidal agents (bleach-containing products) (Moderate recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'Consider probiotics for primary prevention of CDI in patients receiving antibiotics (Weak recommendation, Low quality evidence)',
      'Consider subtotal colectomy with preservation of rectum for fulminant CDI with toxic megacolon, perforation, or refractory shock (Weak recommendation, Low quality evidence)',
      'Consider diverting loop ileostomy with colonic lavage followed by antegrade vancomycin flushes as alternative to colectomy for fulminant CDI (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Moderate recommendations are based on Moderate to Low quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of IDSA CDI guidelines requires systematic approach to diagnosis, treatment, and prevention. DIAGNOSIS: Clinical presentation: Diarrhea (≥3 unformed stools in 24 hours), Abdominal pain, cramping, Fever, Leukocytosis. Severe CDI: WBC ≥15,000/μL, Serum creatinine ≥1.5mg/dL (or 1.5× baseline). Fulminant CDI: Hypotension, shock, ileus, megacolon. Testing: Test only patients with diarrhea (≥3 unformed stools in 24 hours). Do NOT test: Asymptomatic patients, Formed stools, Test of cure. Diagnostic tests: NAAT (PCR): Detects toxin genes (tcdB). High sensitivity, detects colonization and infection. Two-step algorithm (preferred): NAAT plus toxin EIA. NAAT screens, toxin EIA confirms active infection. Toxin EIA alone: Low sensitivity, not recommended as sole test. Stool culture: Not routinely used (slow, requires anaerobic culture). Imaging: CT abdomen if severe disease: Colonic wall thickening, pericolonic stranding, ascites. Colonoscopy: Shows pseudomembranes (yellow-white plaques) in severe cases. Not routinely needed. TREATMENT: Initial Episode - Non-Severe CDI: Vancomycin 125mg PO QID for 10 days (preferred), OR Fidaxomicin 200mg PO BID for 10 days (preferred - lower recurrence rate but expensive). Metronidazole 500mg PO TID for 10 days (alternative if vancomycin/fidaxomicin unavailable). Initial Episode - Severe CDI (WBC ≥15,000 or Cr ≥1.5): Vancomycin 125mg PO QID for 10 days. Fulminant CDI (Hypotension, Shock, Ileus, Megacolon): Vancomycin 500mg PO/NG QID (higher dose), PLUS Metronidazole 500mg IV TID, PLUS Rectal vancomycin 500mg in 100mL saline q6h as retention enema (if ileus), PLUS Surgical consultation (consider subtotal colectomy if refractory). First Recurrence: Vancomycin tapered/pulsed regimen: 125mg PO QID for 10-14 days, then BID for 7 days, then daily for 7 days, then every 2-3 days for 2-8 weeks, OR Fidaxomicin 200mg PO BID for 10 days (preferred - lower recurrence rate). Second or Subsequent Recurrence (≥2 recurrences): Fecal Microbiota Transplantation (FMT): >90% cure rate. Administered via colonoscopy, nasogastric tube, or oral capsules. Donor screening required. OR Vancomycin tapered/pulsed regimen (as above), OR Fidaxomicin 200mg PO BID for 10 days, OR Bezlotoxumab 10mg/kg IV single dose (monoclonal antibody against toxin B) - reduces recurrence risk by 40%. ADJUNCTIVE THERAPIES: Bezlotoxumab: Monoclonal antibody against C. difficile toxin B. Indications: High risk for recurrence (age >65, severe CDI, immunosuppression, prior CDI). Dose: 10mg/kg IV single dose during antibiotic therapy. Reduces recurrence by 40%. Fecal Microbiota Transplantation (FMT): Restores normal colonic flora. Indications: Multiple recurrences (≥2 recurrences). Efficacy: >90% cure rate after 1-2 treatments. Administration: Colonoscopy (most common), nasogastric tube, oral capsules. Donor screening: Extensive testing for infectious diseases. SURGICAL MANAGEMENT: Indications: Fulminant CDI with: Toxic megacolon, Colonic perforation, Refractory shock despite medical therapy, Worsening clinical status despite antibiotics. Procedure: Subtotal colectomy with end ileostomy (preservation of rectum). Alternative: Diverting loop ileostomy with colonic lavage and antegrade vancomycin flushes (less morbidity but limited data). Timing: Early surgery (within 24-48 hours) improves outcomes. Mortality: 30-50% with surgery, higher without surgery in fulminant cases. PREVENTION: Antibiotic stewardship: Minimize unnecessary antibiotic use, Limit fluoroquinolones, clindamycin, cephalosporins (high CDI risk). Infection control: Contact precautions (gloves and gown) for patients with CDI, Private room if possible, Continue precautions until diarrhea resolved. Environmental cleaning: Sporicidal agents (bleach-containing products) to kill C. difficile spores, Clean high-touch surfaces daily. Hand hygiene: Soap and water (alcohol-based hand sanitizers do not kill spores). Probiotics: Insufficient evidence to recommend for CDI prevention. MONITORING: Clinical response: Expect improvement in 2-3 days (decreased diarrhea, abdominal pain). Failure to improve: Consider resistant strain, inadequate therapy, alternative diagnosis (IBD, ischemic colitis), or complications (toxic megacolon). Laboratory: Monitor WBC and creatinine in severe CDI. Imaging: CT abdomen if worsening or not improving. Test of cure: Do NOT perform (toxins persist after successful treatment). RECURRENCE: Risk factors: Age >65 years, Severe CDI, Immunosuppression, Continued antibiotic use, Prior CDI, Proton pump inhibitors. Prevention: Bezlotoxumab for high-risk patients, Antibiotic stewardship, Avoid unnecessary PPIs. Treatment: See recurrence treatment above.',
    keyPoints: [
      'Test only patients with diarrhea (≥3 unformed stools in 24 hours)',
      'NAAT or two-step algorithm for diagnosis',
      'Non-severe CDI: vancomycin 125mg QID or fidaxomicin for 10 days',
      'Severe CDI: vancomycin 125mg QID for 10 days',
      'Fulminant CDI: vancomycin 500mg QID + IV metronidazole + surgical consultation',
      'Recurrent CDI: tapered/pulsed vancomycin, fidaxomicin, or FMT',
      'FMT >90% cure rate for multiple recurrences',
      'Bezlotoxumab reduces recurrence by 40%',
      'Do not test for cure',
    ],
    idsaUrl: 'https://www.idsociety.org/practice-guideline/clostridium-difficile/',
    publicationYear: 2021,
  },

  // SEPSIS AND SEPTIC SHOCK
  {
    topic: 'Sepsis and Septic Shock - IDSA/SCCM Guideline (Surviving Sepsis Campaign)',
    keywords: ['sepsis', 'septic shock', 'severe sepsis', 'idsa sepsis', 'surviving sepsis campaign', 'sepsis guideline', 'sepsis management', 'sepsis bundles'],
    system: 'Infectious Disease',
    guidelineSummary: 'The IDSA/SCCM Surviving Sepsis Campaign guideline provides evidence-based recommendations for early recognition and management of sepsis and septic shock. Sepsis is life-threatening organ dysfunction caused by dysregulated host response to infection (SOFA score increase ≥2). Septic shock is sepsis with persistent hypotension requiring vasopressors (MAP ≥65 mmHg) and lactate >2 mmol/L despite adequate fluid resuscitation. The guideline emphasizes early recognition, prompt antibiotic administration (within 1 hour), aggressive fluid resuscitation (30 mL/kg crystalloid), and vasopressor support (norepinephrine first-line). Source control is essential. Empiric antibiotics target likely pathogens based on infection source. De-escalation based on cultures. Avoid corticosteroids unless refractory shock.',
    strongRecommendations: [
      'Recognize sepsis using clinical criteria: suspected infection plus organ dysfunction (SOFA score increase ≥2 points) (Strong recommendation, Moderate quality evidence)',
      'Obtain blood cultures before administering antibiotics (Strong recommendation, Moderate quality evidence)',
      'Administer broad-spectrum IV antibiotics within 1 hour of recognition of sepsis or septic shock (Strong recommendation, Moderate quality evidence)',
      'Administer 30 mL/kg IV crystalloid fluid within first 3 hours for sepsis-induced hypoperfusion (Strong recommendation, Moderate quality evidence)',
      'Use norepinephrine as first-line vasopressor for septic shock (target MAP ≥65 mmHg) (Strong recommendation, High quality evidence)',
      'Achieve adequate source control (drain abscesses, remove infected devices, debride infected tissue) as soon as possible (Strong recommendation, Moderate quality evidence)',
      'Measure lactate level; if elevated (>2 mmol/L), remeasure within 2-4 hours (Strong recommendation, Moderate quality evidence)',
    ],
    moderateRecommendations: [
      'Use qSOFA (quick SOFA) to identify patients at high risk for poor outcomes: altered mental status, SBP ≤100 mmHg, respiratory rate ≥22/min (Moderate recommendation, Moderate quality evidence)',
      'Target MAP ≥65 mmHg during vasopressor therapy (Moderate recommendation, Moderate quality evidence)',
      'Add vasopressin (0.03-0.04 units/min) or epinephrine as second-line vasopressor if norepinephrine insufficient (Moderate recommendation, Moderate quality evidence)',
      'Use balanced crystalloids (lactated Ringer\'s, Plasma-Lyte) rather than normal saline for fluid resuscitation (Moderate recommendation, Moderate quality evidence)',
      'De-escalate antibiotics based on culture results and clinical improvement (Moderate recommendation, Moderate quality evidence)',
      'Limit duration of antibiotic therapy to 7-10 days for most infections (Moderate recommendation, Moderate quality evidence)',
      'Use procalcitonin to guide antibiotic discontinuation in patients with sepsis (Moderate recommendation, Moderate quality evidence)',
    ],
    weakRecommendations: [
      'Consider corticosteroids (hydrocortisone 200mg/day) for patients with septic shock refractory to fluid resuscitation and vasopressors (Weak recommendation, Moderate quality evidence)',
      'Consider albumin in addition to crystalloids for initial resuscitation in patients with septic shock (Weak recommendation, Low quality evidence)',
      'Avoid hydroxyethyl starches (HES) for fluid resuscitation in sepsis (Weak recommendation, High quality evidence)',
      'Consider stress ulcer prophylaxis (H2 blocker or PPI) for patients with sepsis and risk factors for GI bleeding (Weak recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials (ARISE, ProCESS, ProMISe, VANISH, SMART); Moderate recommendations are based on Moderate quality evidence; Weak recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of Surviving Sepsis Campaign guidelines requires systematic approach to recognition, resuscitation, and source control. RECOGNITION: Sepsis definition (Sepsis-3): Suspected or documented infection PLUS Organ dysfunction (SOFA score increase ≥2 points from baseline). SOFA score components: Respiration (PaO2/FiO2 ratio), Coagulation (platelets), Liver (bilirubin), Cardiovascular (MAP, vasopressors), CNS (Glasgow Coma Scale), Renal (creatinine, urine output). qSOFA (quick SOFA): Bedside screening tool for sepsis. Altered mental status (GCS <15), SBP ≤100 mmHg, Respiratory rate ≥22/min. ≥2 criteria suggests high risk for poor outcomes. Septic Shock definition: Sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg AND Lactate >2 mmol/L despite adequate fluid resuscitation. INITIAL RESUSCITATION (Hour 1 Bundle): Measure lactate level. Remeasure if >2 mmol/L. Obtain blood cultures before antibiotics. Administer broad-spectrum antibiotics within 1 hour. Begin rapid IV fluid resuscitation with 30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L. Apply vasopressors if hypotension persists during or after fluid resuscitation (target MAP ≥65 mmHg). FLUID RESUSCITATION: Initial: 30 mL/kg crystalloid within first 3 hours. Use balanced crystalloids (lactated Ringer\'s, Plasma-Lyte) preferred over normal saline (reduces risk of hyperchloremic acidosis). Assess fluid responsiveness: Passive leg raise, fluid challenge (250-500 mL bolus), dynamic measures (pulse pressure variation, stroke volume variation). Avoid fluid overload: Monitor for pulmonary edema, peripheral edema. Consider albumin if large volumes of crystalloid required. AVOID hydroxyethyl starches (HES) - increased mortality and AKI risk. VASOPRESSORS: First-line: Norepinephrine 0.05-2 mcg/kg/min IV infusion. Target MAP ≥65 mmHg. Second-line (if norepinephrine insufficient): Vasopressin 0.03-0.04 units/min IV infusion (fixed dose, not titrated), OR Epinephrine 0.05-2 mcg/kg/min IV infusion. Third-line: Phenylephrine (if norepinephrine contraindicated or arrhythmias). Inotropes: Dobutamine 2-20 mcg/kg/min if myocardial dysfunction with elevated cardiac filling pressures and low cardiac output. ANTIBIOTICS: Empiric broad-spectrum antibiotics within 1 hour. Selection based on: Infection source (pneumonia, UTI, intra-abdominal, skin/soft tissue), Local resistance patterns, Patient factors (recent hospitalization, recent antibiotics, immunosuppression). Common regimens: Community-acquired: Ceftriaxone 2g IV daily plus azithromycin 500mg IV daily (pneumonia), OR Piperacillin-tazobactam 4.5g IV q6h (intra-abdominal), OR Ceftriaxone 2g IV daily (UTI). Healthcare-associated or immunocompromised: Vancomycin 15-20mg/kg IV q8-12h PLUS Piperacillin-tazobactam 4.5g IV q6h or Cefepime 2g IV q8h or Carbapenem. Neutropenic fever: Cefepime 2g IV q8h or Piperacillin-tazobactam 4.5g IV q6h. Add vancomycin if skin/soft tissue infection, catheter infection, or hemodynamic instability. De-escalation: Narrow spectrum based on culture results. Discontinue antibiotics if cultures negative and alternative diagnosis identified. Duration: 7-10 days for most infections (adjust based on source and response). SOURCE CONTROL: Identify and control infection source within 6-12 hours. Drain abscesses (percutaneous or surgical). Remove infected devices (catheters, prosthetic materials). Debride infected or necrotic tissue. Repair perforated viscus. ADJUNCTIVE THERAPIES: Corticosteroids: Hydrocortisone 200mg/day IV (50mg q6h or 100mg q12h) for septic shock refractory to fluid resuscitation and vasopressors. Controversial - may reduce time to shock resolution but no mortality benefit. Taper when vasopressors discontinued. Stress ulcer prophylaxis: H2 blocker or PPI for patients with risk factors for GI bleeding (coagulopathy, mechanical ventilation, prior GI bleeding). DVT prophylaxis: LMWH or unfractionated heparin (unless contraindicated). Glycemic control: Target glucose <180 mg/dL. Avoid tight control (<110 mg/dL) - increases hypoglycemia risk. Nutrition: Enteral nutrition preferred over parenteral. Start within 24-48 hours if tolerated. Transfusion: RBC transfusion for hemoglobin <7 g/dL (unless active bleeding, ischemic heart disease, or severe hypoxemia). Avoid liberal transfusion strategy. MONITORING: Vital signs: Continuous monitoring in ICU. Lactate: Remeasure within 2-4 hours if initially elevated. Goal: lactate clearance (decrease by ≥50% or normalize). Urine output: Goal >0.5 mL/kg/hour. Central venous oxygen saturation (ScvO2): Goal >70% (if central line present). Organ function: Monitor for worsening organ dysfunction (respiratory, renal, hepatic, coagulation). COMPLICATIONS: Acute respiratory distress syndrome (ARDS): Lung-protective ventilation (tidal volume 6 mL/kg ideal body weight, plateau pressure <30 cm H2O). Prone positioning if severe (PaO2/FiO2 <150). Acute kidney injury (AKI): Avoid nephrotoxic agents. Renal replacement therapy if severe (oliguria, hyperkalemia, acidosis, volume overload). Disseminated intravascular coagulation (DIC): Treat underlying infection. Transfuse platelets if <10,000/μL or <50,000/μL with bleeding. FFP if active bleeding and prolonged PT/PTT. PROGNOSIS: Mortality: Sepsis 10-20%, Septic shock 40-50%. Worse prognosis: Advanced age, immunosuppression, multiple organ dysfunction, delayed antibiotics, inadequate source control.',
    keyPoints: [
      'Sepsis = infection + organ dysfunction (SOFA score increase ≥2)',
      'Septic shock = sepsis + hypotension requiring vasopressors + lactate >2 mmol/L',
      'Hour 1 Bundle: lactate, blood cultures, antibiotics, fluids, vasopressors',
      'Administer antibiotics within 1 hour',
      '30 mL/kg crystalloid fluid resuscitation within 3 hours',
      'Norepinephrine first-line vasopressor (target MAP ≥65 mmHg)',
      'Source control within 6-12 hours',
      'De-escalate antibiotics based on cultures',
      'Duration 7-10 days for most infections',
    ],
    idsaUrl: 'https://www.sccm.org/SurvivingSepsisCampaign/Guidelines',
    publicationYear: 2021,
  },
];

/**
 * Search function to find relevant IDSA guideline entries based on query
 */
export function searchIDSAGuidelines(query: string): IDSAGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = idsaGuidelinesKnowledge.map(entry => {
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

  console.log(`IDSA Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get IDSA guideline by exact topic name
 */
export function getIDSAGuidelineByTopic(topic: string): IDSAGuidelineEntry | undefined {
  return idsaGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all IDSA guidelines for a specific system
 */
export function getIDSAGuidelinesBySystem(system: string): IDSAGuidelineEntry[] {
  return idsaGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
