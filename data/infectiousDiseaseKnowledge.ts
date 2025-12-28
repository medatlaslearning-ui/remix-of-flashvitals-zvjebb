
/**
 * Infectious Disease System Knowledge Base - Merck Manual Professional
 * 
 * PHASE 7: COMPLETE INFECTIOUS DISEASE SYSTEM
 * 
 * Comprehensive infectious disease knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major infectious diseases including:
 * - Bacterial infections (pneumonia, meningitis, endocarditis, sepsis, tuberculosis)
 * - Viral infections (influenza, COVID-19, HIV/AIDS, hepatitis, herpes viruses)
 * - Fungal infections (candidiasis, aspergillosis, cryptococcosis)
 * - Parasitic infections (malaria, toxoplasmosis)
 * - Sexually transmitted infections (syphilis, gonorrhea, chlamydia)
 * - Opportunistic infections
 * 
 * Each entry includes:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * PHASE 7 ENHANCEMENTS:
 * - Enhanced keyword specificity to prevent content bleeding
 * - Disease-specific modifiers ensure precise matching
 * - Keyword hooks enable focused responses (pathophysiology, clinical, diagnostic, treatment)
 * - Maintains same integrity as Cardiology, Pulmonary, Gastroenterology, Endocrine, Hematology, and Neurology sections
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const infectiousDiseaseKnowledge: MerckManualEntry[] = [
  // BACTERIAL INFECTIONS
  {
    topic: 'Sepsis and Septic Shock',
    keywords: ['sepsis', 'septic shock', 'severe sepsis', 'septicemia', 'bloodstream infection', 'bacteremia sepsis'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, sepsis is life-threatening organ dysfunction caused by dysregulated host response to infection. Pathogen-associated molecular patterns (PAMPs) trigger excessive inflammatory response via toll-like receptors, causing widespread endothelial dysfunction, increased vascular permeability, microvascular thrombosis, and tissue hypoperfusion. Septic shock is sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg and lactate >2 mmol/L despite adequate fluid resuscitation. Common sources include pneumonia, urinary tract infections, intra-abdominal infections, and skin/soft tissue infections. Mortality 10-20% for sepsis, 40% for septic shock.',
    clinicalPresentation: 'Fever or hypothermia, tachycardia, tachypnea, altered mental status, and signs of organ dysfunction. Septic shock presents with hypotension (SBP <90 mmHg), cool extremities, mottled skin, oliguria, and elevated lactate. Physical examination reveals fever or hypothermia, tachycardia, tachypnea, hypotension, altered consciousness, and signs of infection source. Sequential Organ Failure Assessment (SOFA) score quantifies organ dysfunction. Quick SOFA (qSOFA) screens for sepsis: altered mental status, SBP ≤100 mmHg, respiratory rate ≥22/min.',
    diagnosticApproach: 'Clinical diagnosis based on infection plus organ dysfunction (SOFA score increase ≥2). Blood cultures (two sets from different sites) before antibiotics. Lactate level (>2 mmol/L indicates tissue hypoperfusion). CBC, comprehensive metabolic panel, coagulation studies. Procalcitonin may help distinguish bacterial from viral infection. Identify infection source: urinalysis and culture, chest X-ray, imaging for intra-abdominal source. Arterial blood gas shows metabolic acidosis. Monitor for complications: acute kidney injury, ARDS, DIC, liver dysfunction.',
    treatment: 'Sepsis bundles (Surviving Sepsis Campaign): 1) Measure lactate, 2) Obtain blood cultures before antibiotics, 3) Administer broad-spectrum antibiotics within 1 hour, 4) Begin rapid fluid resuscitation (30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L), 5) Apply vasopressors if hypotension persists (norepinephrine first-line, target MAP ≥65 mmHg). Empiric antibiotics: vancomycin plus piperacillin-tazobactam or cefepime or carbapenem. De-escalate based on cultures. Source control: drain abscesses, remove infected devices. Supportive care: mechanical ventilation for ARDS, renal replacement therapy for AKI. Avoid corticosteroids unless refractory shock. Monitor closely in ICU.',
    clinicalPearls: [
      'Time is critical - antibiotics within 1 hour reduces mortality',
      'Lactate >2 mmol/L indicates tissue hypoperfusion',
      'Norepinephrine is first-line vasopressor',
      'Source control essential - drain abscesses, remove infected devices'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock'
  },

  {
    topic: 'Infective Endocarditis',
    keywords: ['infective endocarditis', 'bacterial endocarditis', 'endocarditis', 'ie', 'valve infection', 'heart valve infection'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, infective endocarditis is infection of endocardial surface, typically heart valves, caused by bacteria (Streptococcus viridans, Staphylococcus aureus, enterococci) or fungi. Bacteremia seeds damaged or abnormal valves, forming vegetations (infected thrombi). Vegetations cause valve destruction and emboli. Risk factors include prosthetic valves, prior IE, structural heart disease, IV drug use, and poor dentition. Native valve endocarditis most commonly affects mitral and aortic valves. Prosthetic valve endocarditis has higher mortality. Complications include heart failure, embolic events, and metastatic infections.',
    clinicalPresentation: 'Fever (90%), new or changing murmur, and signs of systemic illness (fatigue, weight loss, night sweats). Embolic phenomena: stroke, splenic infarct, renal infarct, septic pulmonary emboli (right-sided IE). Immunologic phenomena: Osler nodes (painful finger/toe nodules), Janeway lesions (painless palmar/plantar macules), Roth spots (retinal hemorrhages), glomerulonephritis. Acute S. aureus IE presents with sepsis and rapid valve destruction. Physical examination reveals fever, new murmur, petechiae, splinter hemorrhages, Osler nodes, Janeway lesions, splenomegaly, and signs of heart failure.',
    diagnosticApproach: 'Modified Duke criteria: 2 major, 1 major + 3 minor, or 5 minor criteria. Major: positive blood cultures (2 separate cultures with typical organisms - S. viridans, S. aureus, enterococci, HACEK), endocardial involvement on echo (vegetation, abscess, new valve dysfunction). Minor: predisposing condition, fever >38°C, vascular phenomena (emboli, septic infarcts), immunologic phenomena (Osler nodes, Roth spots, glomerulonephritis), positive blood culture not meeting major criteria. Echocardiography: TTE first, TEE if TTE negative or prosthetic valve (TEE more sensitive). Blood cultures before antibiotics (three sets from different sites).',
    treatment: 'Prolonged IV antibiotics (4-6 weeks): Native valve streptococcal IE - penicillin G or ceftriaxone. S. aureus - nafcillin or vancomycin (MRSA). Enterococcal - ampicillin + gentamicin. Prosthetic valve IE requires longer treatment. Surgery indicated for heart failure, uncontrolled infection (persistent fever, bacteremia >5-7 days), large vegetations (>10 mm), recurrent emboli, abscess, or prosthetic valve IE with complications. Antibiotic prophylaxis only for high-risk patients (prosthetic valve, prior IE) undergoing dental procedures. Monitor for complications: heart failure, embolic events, abscess formation.',
    clinicalPearls: [
      'Three sets of blood cultures before starting antibiotics',
      'TEE more sensitive than TTE for vegetations and complications',
      'S. aureus IE often requires surgery',
      'Antibiotic prophylaxis no longer recommended for most patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/endocarditis/infective-endocarditis'
  },

  {
    topic: 'Tuberculosis',
    keywords: ['tuberculosis', 'tb', 'mycobacterium tuberculosis', 'latent tb', 'active tb', 'pulmonary tb', 'tuberculous'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, tuberculosis is caused by Mycobacterium tuberculosis, transmitted via airborne droplet nuclei. Primary infection occurs when inhaled bacilli reach alveoli, where they are phagocytosed by macrophages. In most immunocompetent individuals, cell-mediated immunity contains infection, forming granulomas with central caseating necrosis (latent TB - positive tuberculin skin test but no active disease). Reactivation occurs when immunity wanes (HIV, immunosuppression, malnutrition, diabetes, aging), causing active disease. Extrapulmonary TB can affect any organ (lymph nodes, pleura, CNS, bones, genitourinary tract). Multidrug-resistant TB (MDR-TB) and extensively drug-resistant TB (XDR-TB) are increasing concerns.',
    clinicalPresentation: 'Latent TB is asymptomatic. Active pulmonary TB presents with chronic cough (>3 weeks), hemoptysis, fever, drenching night sweats, weight loss, and fatigue. Often preceded by viral prodrome. Physical examination may reveal crackles, dullness to percussion over affected areas, or be normal. Extrapulmonary TB: lymphadenitis (scrofula - painless cervical lymphadenopathy), meningitis (headache, altered mental status, cranial nerve palsies), pericarditis, genitourinary TB (sterile pyuria), skeletal TB (Pott disease - vertebral involvement). Miliary TB is disseminated disease with multi-organ involvement, presenting with fever, hepatosplenomegaly, and diffuse pulmonary infiltrates.',
    diagnosticApproach: 'Latent TB: tuberculin skin test (TST - Mantoux test) or interferon-gamma release assay (IGRA - QuantiFERON, T-SPOT). Positive test with normal chest X-ray indicates latent TB. Active TB: chest X-ray shows upper lobe infiltrates, cavitation (classic for reactivation TB), or miliary pattern (diffuse small nodules). Sputum acid-fast bacilli (AFB) smear (3 samples) and culture (gold standard, takes 2-8 weeks). Nucleic acid amplification test (NAAT - GeneXpert MTB/RIF) provides rapid diagnosis (2 hours) and detects rifampin resistance. Drug susceptibility testing essential for all isolates. Extrapulmonary TB requires tissue/fluid sampling (lymph node biopsy, pleural fluid analysis, CSF analysis). HIV testing in all TB patients.',
    treatment: 'Latent TB: isoniazid for 9 months, rifampin for 4 months, or isoniazid/rifapentine weekly for 3 months. Active TB: intensive phase (2 months) with isoniazid, rifampin, pyrazinamide, and ethambutol (RIPE), followed by continuation phase (4 months) with isoniazid and rifampin. Directly observed therapy (DOT) improves adherence. MDR-TB (resistant to isoniazid and rifampin) requires longer treatment (18-24 months) with second-line drugs (fluoroquinolones, injectable agents, linezolid, bedaquiline). Monitor for hepatotoxicity (transaminases), optic neuritis (ethambutol), and peripheral neuropathy (isoniazid - give pyridoxine). Isolate patients until non-infectious (3 negative sputum smears on consecutive days). Report to public health.',
    clinicalPearls: [
      'Upper lobe cavitary lesions are classic for reactivation TB',
      'HIV patients with TB require longer treatment and concurrent ART',
      'Rifampin interacts with many medications (anticoagulants, antiretrovirals, oral contraceptives)',
      'Pyridoxine (vitamin B6) prevents isoniazid-induced peripheral neuropathy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/mycobacteria/tuberculosis-tb'
  },

  {
    topic: 'Clostridium difficile Infection',
    keywords: ['clostridium difficile', 'c diff', 'c difficile', 'cdiff', 'pseudomembranous colitis', 'antibiotic associated diarrhea'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, Clostridium difficile (now Clostridioides difficile) infection is the most common cause of healthcare-associated diarrhea. Spore-forming anaerobic bacterium produces toxins A and B causing colonic inflammation. Antibiotic use disrupts normal colonic flora, allowing C. difficile overgrowth. Risk factors include antibiotics (especially fluoroquinolones, clindamycin, cephalosporins), hospitalization, advanced age, immunosuppression, and proton pump inhibitors. Ranges from mild diarrhea to fulminant colitis with toxic megacolon. Recurrence occurs in 20-30% after initial treatment.',
    clinicalPresentation: 'Watery diarrhea (≥3 unformed stools per day), abdominal pain, cramping, fever, and leukocytosis. Severe cases: profuse diarrhea, severe abdominal pain, distension, fever, hypotension, and signs of sepsis. Fulminant colitis: toxic megacolon, ileus, peritonitis, shock. Physical examination reveals abdominal tenderness, distension, and signs of volume depletion. Severe cases show peritoneal signs and hemodynamic instability. Complications include toxic megacolon, colonic perforation, sepsis, and death.',
    diagnosticApproach: 'Stool testing for C. difficile toxins: nucleic acid amplification test (NAAT) most sensitive, enzyme immunoassay (EIA) for toxins A and B less sensitive but more specific. Two-step algorithm (NAAT plus EIA) recommended. Test only patients with diarrhea (≥3 unformed stools in 24 hours). Do not test for cure (toxins persist after treatment). CT abdomen if severe disease: shows colonic wall thickening, pericolonic stranding, ascites. Colonoscopy shows pseudomembranes (yellow-white plaques) in severe cases. Laboratory: leukocytosis (often >15,000/μL), elevated creatinine, hypoalbuminemia.',
    treatment: 'Discontinue inciting antibiotic if possible. Mild-moderate infection: oral vancomycin 125 mg QID for 10 days or fidaxomicin 200 mg BID for 10 days (preferred - lower recurrence rate). Severe infection (WBC >15,000, Cr >1.5): oral vancomycin 125 mg QID. Fulminant colitis: oral vancomycin 500 mg QID plus IV metronidazole 500 mg TID; consider rectal vancomycin if ileus. Surgical consultation for fulminant colitis (subtotal colectomy if refractory). Recurrent CDI: tapered/pulsed vancomycin, fidaxomicin, or fecal microbiota transplantation (FMT - highly effective, >90% cure rate). Bezlotoxumab (monoclonal antibody against toxin B) reduces recurrence. Avoid antidiarrheals and opioids.',
    clinicalPearls: [
      'Most common cause of healthcare-associated diarrhea',
      'Vancomycin or fidaxomicin are first-line (not metronidazole)',
      'Fecal microbiota transplantation highly effective for recurrent CDI',
      'Do not test for cure - toxins persist after successful treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/anaerobic-bacteria/clostridioides-formerly-clostridium-difficile-induced-diarrhea'
  },

  {
    topic: 'Lyme Disease',
    keywords: ['lyme disease', 'lyme', 'borrelia burgdorferi', 'erythema migrans', 'tick borne disease'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, Lyme disease is caused by spirochete Borrelia burgdorferi, transmitted by Ixodes tick bite. Most common vector-borne disease in US and Europe. Tick must be attached ≥36-48 hours for transmission. Three stages: early localized (erythema migrans), early disseminated (multiple erythema migrans, neurologic, cardiac), and late (arthritis, chronic neurologic). Immune-mediated inflammation causes manifestations. Endemic areas: Northeast, Mid-Atlantic, Upper Midwest US, and parts of Europe.',
    clinicalPresentation: 'Early localized (3-30 days post-bite): erythema migrans (EM) - expanding red rash with central clearing ("bull\'s-eye"), often at site of tick bite, accompanied by fever, fatigue, headache, myalgias. Early disseminated (days to weeks): multiple EM lesions, facial nerve palsy (bilateral in 25%), meningitis, carditis (AV block). Late (months to years): oligoarticular arthritis (knee most common), chronic neurologic manifestations (encephalopathy, polyneuropathy). Physical examination: EM rash (≥5 cm, expanding), cranial nerve palsies, arthritis. Many patients do not recall tick bite.',
    diagnosticApproach: 'Clinical diagnosis for early localized disease with EM rash - no testing needed. Serology for disseminated or late disease: two-tier testing - ELISA screening, then Western blot confirmation if positive or equivocal. IgM appears 2-4 weeks, IgG appears 4-6 weeks. False negatives early in disease. Do not test asymptomatic patients or for cure (antibodies persist). CSF analysis if neurologic symptoms: lymphocytic pleocytosis, elevated protein, intrathecal antibody production. ECG if cardiac symptoms (AV block). Synovial fluid analysis if arthritis (inflammatory, PCR for Borrelia).',
    treatment: 'Early localized or early disseminated: doxycycline 100 mg BID for 10-21 days (preferred), or amoxicillin or cefuroxime. Neurologic Lyme: ceftriaxone 2g IV daily for 14-28 days. Lyme carditis with high-degree AV block: ceftriaxone IV, temporary pacemaker if needed. Lyme arthritis: doxycycline for 28 days; if persistent, repeat course or IV ceftriaxone. Post-treatment Lyme disease syndrome (persistent symptoms after treatment): supportive care, no benefit from prolonged antibiotics. Prevention: avoid tick-infested areas, use DEET, perform tick checks, remove ticks promptly. Single-dose doxycycline 200 mg within 72 hours of tick bite in endemic areas prevents Lyme disease.',
    clinicalPearls: [
      'Erythema migrans is diagnostic - no testing needed',
      'Bilateral facial nerve palsy is classic for Lyme disease',
      'Two-tier serology (ELISA then Western blot) for disseminated disease',
      'Single-dose doxycycline after tick bite prevents Lyme disease in endemic areas'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/spirochetes/lyme-disease'
  },

  // VIRAL INFECTIONS
  {
    topic: 'Influenza',
    keywords: ['influenza', 'flu', 'influenza virus', 'seasonal flu', 'influenza a', 'influenza b'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, influenza is an acute respiratory infection caused by influenza A or B viruses. Transmitted via respiratory droplets. Influenza A causes seasonal epidemics and pandemics (antigenic shift), while influenza B causes milder seasonal outbreaks. Virus infects respiratory epithelium, causing inflammation and cell death. Incubation period 1-4 days. Complications include primary viral pneumonia, secondary bacterial pneumonia (S. pneumoniae, S. aureus), exacerbation of chronic diseases, myocarditis, and encephalitis. High-risk groups: elderly, young children, pregnant women, immunocompromised, chronic diseases.',
    clinicalPresentation: 'Abrupt onset of fever, chills, headache, myalgias, malaise, and dry cough. Respiratory symptoms: cough, sore throat, rhinorrhea, nasal congestion. Systemic symptoms predominate early. Physical examination reveals fever, pharyngeal erythema, and clear nasal discharge. Complications: dyspnea, hypoxemia (pneumonia), altered mental status (encephalitis). Symptoms typically resolve in 3-7 days, but cough and fatigue may persist for weeks. Distinguish from common cold (gradual onset, milder symptoms, no fever).',
    diagnosticApproach: 'Clinical diagnosis during influenza season. Rapid influenza diagnostic tests (RIDTs) have low sensitivity (50-70%). Molecular tests (RT-PCR) are more sensitive and specific, distinguish influenza A from B, and identify subtypes. Nasopharyngeal swab or nasal aspirate. Testing recommended for hospitalized patients, high-risk patients, and when results will influence treatment. Chest X-ray if pneumonia suspected. Bacterial cultures if secondary bacterial pneumonia suspected.',
    treatment: 'Neuraminidase inhibitors: oseltamivir 75 mg BID for 5 days (oral), zanamivir 10 mg inhaled BID for 5 days, peramivir 600 mg IV single dose, or baloxavir 40-80 mg single dose. Most effective if started within 48 hours of symptom onset. Recommended for hospitalized patients, high-risk patients, and severe illness regardless of symptom duration. Supportive care: rest, hydration, antipyretics (avoid aspirin in children - Reye syndrome risk). Treat secondary bacterial pneumonia with antibiotics. Prevention: annual influenza vaccination (all persons ≥6 months), antiviral chemoprophylaxis for high-risk exposures. Isolate hospitalized patients (droplet precautions).',
    clinicalPearls: [
      'Neuraminidase inhibitors most effective if started within 48 hours',
      'Annual vaccination is best prevention',
      'Secondary bacterial pneumonia common complication',
      'Distinguish from COVID-19 - similar presentation, requires testing'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/respiratory-viruses/influenza'
  },

  {
    topic: 'COVID-19',
    keywords: ['covid-19', 'covid', 'coronavirus', 'sars-cov-2', 'coronavirus disease', 'covid 19'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, COVID-19 is caused by SARS-CoV-2, a novel coronavirus that emerged in 2019. Transmitted via respiratory droplets and aerosols. Virus binds ACE2 receptors on respiratory epithelium, causing direct viral cytopathic effects and dysregulated immune response. Ranges from asymptomatic to critical illness with ARDS, multiorgan failure, and death. Risk factors for severe disease: age >65, obesity, diabetes, cardiovascular disease, chronic lung disease, immunosuppression. Complications include ARDS, thromboembolism, myocarditis, acute kidney injury, and post-acute sequelae (long COVID).',
    clinicalPresentation: 'Fever, cough, dyspnea, fatigue, myalgias, headache, anosmia (loss of smell), ageusia (loss of taste), sore throat, and GI symptoms (nausea, diarrhea). Incubation period 2-14 days (median 5 days). Mild disease: upper respiratory symptoms without dyspnea. Moderate: dyspnea, hypoxemia (SpO2 90-94%). Severe: SpO2 <90%, respiratory distress, shock, or multiorgan dysfunction. Physical examination: fever, tachypnea, hypoxemia, crackles. Long COVID: persistent symptoms (fatigue, dyspnea, cognitive impairment) >4 weeks after acute infection.',
    diagnosticApproach: 'Molecular testing (RT-PCR or antigen test) of nasopharyngeal swab confirms diagnosis. PCR more sensitive than antigen tests. Chest X-ray or CT shows bilateral ground-glass opacities, consolidation. Laboratory: lymphopenia, elevated inflammatory markers (CRP, ferritin, D-dimer, LDH), elevated troponin (myocardial injury). Procalcitonin low unless bacterial superinfection. Assess severity: oxygen saturation, respiratory rate, chest imaging. Monitor for complications: thromboembolism (D-dimer), cardiac injury (troponin), kidney injury (creatinine).',
    treatment: 'Mild-moderate outpatient: supportive care, isolation. High-risk patients: nirmatrelvir/ritonavir (Paxlovid) or remdesivir within 5-7 days of symptom onset reduces hospitalization. Hospitalized patients: dexamethasone 6 mg daily for up to 10 days (reduces mortality in patients requiring oxygen), remdesivir for 5 days, tocilizumab or baricitinib if rapidly increasing oxygen needs. Anticoagulation for hospitalized patients (prophylactic or therapeutic dose based on severity). Supplemental oxygen to maintain SpO2 >90%. Prone positioning for ARDS. Mechanical ventilation if refractory hypoxemia. Avoid hydroxychloroquine, ivermectin (no benefit). Prevention: vaccination (primary series plus boosters), masking, physical distancing.',
    clinicalPearls: [
      'Dexamethasone reduces mortality in hospitalized patients requiring oxygen',
      'Nirmatrelvir/ritonavir (Paxlovid) reduces hospitalization in high-risk outpatients',
      'Anosmia and ageusia are characteristic symptoms',
      'Vaccination is most effective prevention'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/respiratory-viruses/covid-19'
  },

  {
    topic: 'HIV/AIDS',
    keywords: ['hiv', 'aids', 'human immunodeficiency virus', 'acquired immunodeficiency syndrome', 'hiv infection', 'hiv aids'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, HIV is a retrovirus that infects CD4+ T cells, causing progressive immunodeficiency. Virus binds CD4 and coreceptors (CCR5 or CXCR4), enters cell, reverse transcribes RNA to DNA, integrates into host genome, and produces new virions. CD4 count declines over years, leading to opportunistic infections and malignancies. AIDS defined as CD4 <200 cells/μL or AIDS-defining illness. Transmitted via sexual contact, blood exposure, or mother-to-child. Acute HIV infection causes flu-like illness. Chronic infection is asymptomatic for years. Without treatment, median time to AIDS is 10 years.',
    clinicalPresentation: 'Acute HIV (2-4 weeks post-exposure): fever, pharyngitis, rash, lymphadenopathy, myalgias, headache (mononucleosis-like). Chronic HIV: asymptomatic for years. AIDS: opportunistic infections (Pneumocystis pneumonia, toxoplasmosis, cryptococcosis, CMV, MAC), malignancies (Kaposi sarcoma, lymphoma), wasting syndrome, HIV-associated dementia. Physical examination: generalized lymphadenopathy, oral thrush, hairy leukoplakia, Kaposi sarcoma lesions, neurologic deficits. Complications depend on CD4 count: <200 (PCP, toxoplasmosis), <100 (cryptococcosis, histoplasmosis), <50 (CMV, MAC).',
    diagnosticApproach: 'HIV screening: 4th generation antigen/antibody immunoassay detects HIV-1/2 antibodies and p24 antigen (detects infection 2-4 weeks post-exposure). Positive screening confirmed with HIV-1/HIV-2 differentiation assay. HIV RNA (viral load) detects acute infection before antibodies develop. Baseline: CD4 count, HIV RNA viral load, resistance testing, HLA-B*5701 (abacavir hypersensitivity), hepatitis B and C, syphilis, tuberculosis, toxoplasmosis serology. Monitor CD4 count and viral load every 3-6 months. Screen for opportunistic infections based on CD4 count.',
    treatment: 'Antiretroviral therapy (ART) for all HIV-positive patients regardless of CD4 count. Combination therapy with ≥3 drugs from ≥2 classes: integrase strand transfer inhibitors (INSTIs - dolutegravir, bictegravir), nucleoside reverse transcriptase inhibitors (NRTIs - tenofovir, emtricitabine), non-nucleoside reverse transcriptase inhibitors (NNRTIs - efavirenz), protease inhibitors (PIs - darunavir). Preferred regimen: bictegravir/tenofovir/emtricitabine or dolutegravir plus tenofovir/emtricitabine. Goal: undetectable viral load (<50 copies/mL). Prophylaxis: TMP-SMX for PCP if CD4 <200, azithromycin for MAC if CD4 <50. Pre-exposure prophylaxis (PrEP) for high-risk individuals. Post-exposure prophylaxis (PEP) within 72 hours of exposure.',
    clinicalPearls: [
      'Start ART immediately after diagnosis - improves outcomes and prevents transmission',
      'Undetectable viral load = untransmittable (U=U)',
      'PrEP prevents HIV acquisition in high-risk individuals',
      'Screen for opportunistic infections based on CD4 count'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/human-immunodeficiency-virus-hiv/human-immunodeficiency-virus-hiv-infection'
  },

  {
    topic: 'Hepatitis B',
    keywords: ['hepatitis b', 'hbv', 'hepatitis b virus', 'chronic hepatitis b', 'hep b'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, hepatitis B is caused by hepatitis B virus (HBV), a DNA virus transmitted via blood, sexual contact, or perinatally. Acute infection causes hepatitis; most adults clear virus, but 5-10% develop chronic infection. Chronic HBV causes progressive liver disease, cirrhosis, and hepatocellular carcinoma. Immune-mediated liver injury from cytotoxic T cells targeting infected hepatocytes. HBV replicates in hepatocytes, producing viral antigens (HBsAg, HBeAg) and DNA. Chronic infection phases: immune-tolerant (high viral load, minimal inflammation), immune-active (elevated ALT, active inflammation), inactive carrier (low viral load, normal ALT), reactivation.',
    clinicalPresentation: 'Acute hepatitis B: jaundice, fatigue, nausea, abdominal pain, dark urine, and pale stools. Many asymptomatic. Physical examination reveals jaundice, hepatomegaly, and right upper quadrant tenderness. Chronic HBV: often asymptomatic until cirrhosis develops. Cirrhosis complications: ascites, variceal bleeding, hepatic encephalopathy, hepatocellular carcinoma. Extrahepatic manifestations: polyarteritis nodosa, glomerulonephritis, cryoglobulinemia.',
    diagnosticApproach: 'Serologic markers: HBsAg (surface antigen - indicates infection), anti-HBs (surface antibody - indicates immunity from vaccination or recovery), anti-HBc (core antibody - indicates past or current infection), HBeAg (e antigen - indicates high infectivity), anti-HBe (e antibody - indicates low infectivity), HBV DNA (viral load - quantifies replication). Acute HBV: HBsAg+, anti-HBc IgM+. Chronic HBV: HBsAg+ for >6 months. Immunity: anti-HBs+ alone (vaccination) or anti-HBs+ and anti-HBc+ (prior infection). Assess liver disease: ALT, AST, bilirubin, albumin, PT/INR, platelet count. Liver biopsy or elastography (FibroScan) stages fibrosis. Screen for HCC: AFP and ultrasound every 6 months if cirrhosis.',
    treatment: 'Acute HBV: supportive care, most resolve spontaneously. Chronic HBV: treat if elevated ALT, HBV DNA >2,000 IU/mL, or significant fibrosis. First-line: entecavir or tenofovir (nucleos(t)ide analogues) - suppress viral replication, improve liver histology, reduce cirrhosis and HCC risk. Pegylated interferon alternative (finite duration but lower response rate and more side effects). Treatment often lifelong. Monitor HBV DNA and ALT every 3-6 months. HCC surveillance: AFP and ultrasound every 6 months. Vaccination prevents infection (3-dose series). Post-exposure prophylaxis: HBIG plus vaccination within 24 hours of exposure.',
    clinicalPearls: [
      'HBsAg positive for >6 months defines chronic hepatitis B',
      'Entecavir or tenofovir are first-line treatments',
      'HCC surveillance essential in chronic HBV (AFP and ultrasound every 6 months)',
      'Vaccination is highly effective prevention'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/hepatitis/hepatitis-b-acute'
  },

  {
    topic: 'Hepatitis C',
    keywords: ['hepatitis c', 'hcv', 'hepatitis c virus', 'chronic hepatitis c', 'hep c'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, hepatitis C is caused by hepatitis C virus (HCV), an RNA virus transmitted primarily via blood exposure (IV drug use, transfusions before 1992, needlestick injuries). Sexual and perinatal transmission less common. Acute infection is usually asymptomatic; 75-85% develop chronic infection. Chronic HCV causes progressive liver disease, cirrhosis (20-30% over 20-30 years), and hepatocellular carcinoma. Direct viral cytopathic effects and immune-mediated injury cause liver damage. Six major genotypes; genotype 1 most common in US. Extrahepatic manifestations: cryoglobulinemia, glomerulonephritis, porphyria cutanea tarda.',
    clinicalPresentation: 'Acute HCV: usually asymptomatic, occasionally jaundice and fatigue. Chronic HCV: asymptomatic for decades until cirrhosis develops. Cirrhosis complications: ascites, variceal bleeding, hepatic encephalopathy, hepatocellular carcinoma. Physical examination: often normal until advanced disease, then jaundice, hepatomegaly, splenomegaly, ascites, spider angiomata, palmar erythema. Extrahepatic: palpable purpura (cryoglobulinemia), skin lesions (porphyria cutanea tarda).',
    diagnosticApproach: 'Screening: anti-HCV antibody (indicates exposure). Positive antibody confirmed with HCV RNA (viral load - indicates active infection). Antibody may be negative in early acute infection or immunocompromised - test HCV RNA if high suspicion. Genotype testing guides treatment duration. Assess liver disease: ALT, AST, bilirubin, albumin, PT/INR, platelet count. Liver biopsy or elastography (FibroScan) stages fibrosis. Screen for HCC: AFP and ultrasound every 6 months if cirrhosis. Test for HIV and hepatitis B coinfection.',
    treatment: 'Direct-acting antivirals (DAAs) cure >95% of patients. Pangenotypic regimens: sofosbuvir/velpatasvir for 12 weeks, glecaprevir/pibrentasvir for 8-16 weeks. Treatment duration depends on genotype, fibrosis stage, and prior treatment. Sustained virologic response (SVR - undetectable HCV RNA 12 weeks after treatment) indicates cure. Monitor HCV RNA at week 4, end of treatment, and 12 weeks post-treatment. No vaccine available. Prevention: avoid sharing needles, screen blood products, universal precautions. HCC surveillance continues after SVR if cirrhosis present.',
    clinicalPearls: [
      'Direct-acting antivirals cure >95% of patients',
      'All adults should be screened once for hepatitis C',
      'SVR (cure) reduces but does not eliminate HCC risk in cirrhosis',
      'No vaccine available - prevention focuses on reducing transmission'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/hepatitis/hepatitis-c-acute'
  },

  {
    topic: 'Herpes Simplex Virus',
    keywords: ['herpes simplex', 'hsv', 'herpes simplex virus', 'hsv-1', 'hsv-2', 'genital herpes', 'oral herpes'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, herpes simplex virus (HSV) causes recurrent mucocutaneous infections. HSV-1 primarily causes orolabial herpes, HSV-2 primarily causes genital herpes, but either can infect either site. Transmitted via direct contact with lesions or asymptomatic viral shedding. Primary infection causes vesicular lesions, then virus establishes latency in sensory ganglia (trigeminal for oral, sacral for genital). Reactivation triggered by stress, illness, immunosuppression, UV exposure. Complications include HSV encephalitis (HSV-1), neonatal herpes (HSV-2), and disseminated disease in immunocompromised.',
    clinicalPresentation: 'Primary infection: painful grouped vesicles on erythematous base, fever, malaise, lymphadenopathy. Orolabial: vesicles on lips, oral mucosa, pharyngitis. Genital: vesicles on genitals, dysuria, inguinal lymphadenopathy. Vesicles rupture forming ulcers, then crust and heal in 2-3 weeks. Recurrent episodes: prodrome (tingling, burning), then vesicles, milder and shorter duration than primary. Physical examination: grouped vesicles or ulcers on erythematous base, tender lymphadenopathy. HSV encephalitis: fever, altered mental status, seizures, focal neurologic deficits.',
    diagnosticApproach: 'Clinical diagnosis based on characteristic lesions. Viral culture or PCR of vesicle fluid confirms diagnosis and types virus (HSV-1 vs HSV-2). PCR more sensitive than culture. Tzanck smear shows multinucleated giant cells (not specific for HSV). Serology (type-specific IgG) distinguishes HSV-1 from HSV-2, useful for asymptomatic patients or recurrent genital symptoms without lesions. HSV encephalitis: CSF PCR for HSV (highly sensitive and specific), MRI shows temporal lobe involvement.',
    treatment: 'Antiviral therapy: acyclovir, valacyclovir, or famciclovir. Primary infection: valacyclovir 1g BID for 7-10 days (shortens duration and severity). Recurrent episodes: valacyclovir 500 mg BID for 3 days (most effective if started during prodrome). Suppressive therapy for frequent recurrences (≥6 episodes/year): valacyclovir 500 mg daily (reduces recurrences by 70-80% and transmission). Severe or disseminated: acyclovir IV. HSV encephalitis: acyclovir 10 mg/kg IV q8h for 14-21 days. Neonatal herpes: acyclovir IV. Counsel patients: avoid contact during outbreaks, use condoms (reduce but do not eliminate transmission), disclose to partners.',
    clinicalPearls: [
      'Grouped vesicles on erythematous base are characteristic',
      'Suppressive therapy reduces recurrences and transmission',
      'HSV encephalitis requires immediate IV acyclovir',
      'Asymptomatic viral shedding can transmit infection'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/herpesviruses/herpes-simplex-virus-hsv-infections'
  },

  // FUNGAL INFECTIONS
  {
    topic: 'Candidiasis',
    keywords: ['candidiasis', 'candida', 'yeast infection', 'thrush', 'candida albicans', 'fungal infection candida'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, candidiasis is caused by Candida species (C. albicans most common), opportunistic fungi that are part of normal flora. Infection occurs when host defenses are impaired (immunosuppression, antibiotics, diabetes, corticosteroids, indwelling catheters). Ranges from superficial mucocutaneous infections (oral thrush, vulvovaginal candidiasis, cutaneous) to invasive disease (candidemia, disseminated candidiasis). Invasive candidiasis has high mortality (40%) in critically ill patients. Risk factors for invasive disease: broad-spectrum antibiotics, central venous catheters, total parenteral nutrition, abdominal surgery, immunosuppression.',
    clinicalPresentation: 'Oral thrush: white plaques on tongue, buccal mucosa, palate, removable with scraping, leaving erythematous base. Vulvovaginal: pruritus, white discharge, dysuria, dyspareunia. Cutaneous: erythematous rash in intertriginous areas (groin, axillae, under breasts), satellite lesions. Esophageal: odynophagia, dysphagia, retrosternal pain. Candidemia: fever unresponsive to antibiotics, sepsis. Disseminated: endophthalmitis (eye pain, vision loss), endocarditis, osteomyelitis, hepatosplenic candidiasis. Physical examination: oral plaques, vaginal erythema and discharge, intertriginous rash, retinal lesions (endophthalmitis).',
    diagnosticApproach: 'Superficial candidiasis: clinical diagnosis, KOH preparation shows budding yeasts and pseudohyphae. Culture confirms species. Invasive candidiasis: blood cultures (may be negative despite infection), beta-D-glucan elevated (non-specific fungal marker), fundoscopic exam for endophthalmitis. Imaging: CT or ultrasound for hepatosplenic candidiasis (multiple small abscesses). Esophageal: endoscopy shows white plaques, biopsy confirms invasion. Remove and culture central venous catheters if candidemia.',
    treatment: 'Oral thrush: clotrimazole troches or nystatin suspension, fluconazole 100-200 mg daily for 7-14 days if refractory. Vulvovaginal: topical azoles (miconazole, clotrimazole) or oral fluconazole 150 mg single dose. Esophageal: fluconazole 200-400 mg daily for 14-21 days. Candidemia: echinocandin (caspofungin, micafungin, anidulafungin) first-line, or fluconazole if not critically ill and susceptible. Remove central venous catheters. Treat for 14 days after last positive blood culture and resolution of symptoms. Disseminated: echinocandin, longer duration (weeks to months). Prophylaxis in high-risk ICU patients controversial.',
    clinicalPearls: [
      'Oral thrush is AIDS-defining illness if CD4 <200',
      'Remove central venous catheters in candidemia',
      'Echinocandins are first-line for invasive candidiasis',
      'Fundoscopic exam essential in candidemia to detect endophthalmitis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/fungi/candidiasis-mucocutaneous'
  },

  {
    topic: 'Aspergillosis',
    keywords: ['aspergillosis', 'aspergillus', 'invasive aspergillosis', 'allergic bronchopulmonary aspergillosis', 'abpa'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, aspergillosis is caused by Aspergillus species (A. fumigatus most common), ubiquitous environmental molds. Inhalation of spores causes disease in susceptible hosts. Invasive aspergillosis occurs in severely immunocompromised patients (neutropenia, hematopoietic stem cell transplant, solid organ transplant, high-dose corticosteroids), causing angioinvasion, thrombosis, and tissue necrosis. Chronic pulmonary aspergillosis occurs in patients with underlying lung disease (COPD, prior TB). Allergic bronchopulmonary aspergillosis (ABPA) is hypersensitivity reaction in asthma or cystic fibrosis patients. Aspergilloma (fungus ball) forms in pre-existing lung cavities.',
    clinicalPresentation: 'Invasive pulmonary aspergillosis: fever, cough, dyspnea, hemoptysis, pleuritic chest pain in neutropenic or immunosuppressed patient. Dissemination to brain, skin, heart. Physical examination: fever, tachypnea, crackles. ABPA: asthma exacerbation, productive cough with brown mucus plugs, wheezing. Aspergilloma: hemoptysis (may be massive), cough. Chronic pulmonary aspergillosis: chronic cough, weight loss, fatigue, hemoptysis. Complications: massive hemoptysis, respiratory failure, disseminated disease.',
    diagnosticApproach: 'Invasive aspergillosis: CT chest shows nodules with halo sign (ground-glass opacity surrounding nodule) early, air-crescent sign late. Serum galactomannan (fungal antigen) elevated. Bronchoalveolar lavage: galactomannan, culture, histopathology shows septate hyphae with acute-angle branching. Biopsy shows tissue invasion. ABPA: elevated IgE, Aspergillus-specific IgE and IgG, eosinophilia, central bronchiectasis on CT. Aspergilloma: chest X-ray or CT shows fungus ball within cavity, mobile with position change. Chronic pulmonary aspergillosis: CT shows cavitation, pleural thickening, Aspergillus IgG elevated.',
    treatment: 'Invasive aspergillosis: voriconazole 6 mg/kg IV q12h x 2 doses, then 4 mg/kg q12h (first-line), or isavuconazole or liposomal amphotericin B. Duration ≥6-12 weeks, longer if immunosuppression persists. Reverse immunosuppression if possible. Surgical resection for localized disease or hemoptysis. ABPA: corticosteroids (prednisone 0.5 mg/kg/day, taper over months), itraconazole or voriconazole as steroid-sparing agent. Aspergilloma: observation if asymptomatic, surgical resection for massive hemoptysis. Chronic pulmonary aspergillosis: itraconazole or voriconazole for months to years.',
    clinicalPearls: [
      'Halo sign on CT is characteristic of invasive aspergillosis',
      'Voriconazole is first-line treatment for invasive aspergillosis',
      'ABPA causes central bronchiectasis in asthma/CF patients',
      'Aspergilloma can cause life-threatening hemoptysis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/fungi/aspergillosis'
  },

  {
    topic: 'Cryptococcosis',
    keywords: ['cryptococcosis', 'cryptococcus', 'cryptococcal meningitis', 'cryptococcus neoformans'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, cryptococcosis is caused by Cryptococcus neoformans (associated with pigeon droppings) or C. gattii (associated with trees). Encapsulated yeast acquired via inhalation. Primarily affects immunocompromised patients (HIV with CD4 <100, solid organ transplant, corticosteroids, malignancy), but C. gattii can infect immunocompetent hosts. Pulmonary infection may disseminate to CNS (meningitis most common), skin, bones, prostate. Cryptococcal meningitis is AIDS-defining illness and leading cause of death in HIV patients in resource-limited settings. Thick polysaccharide capsule inhibits phagocytosis.',
    clinicalPresentation: 'Pulmonary: asymptomatic to cough, dyspnea, fever, chest pain. Meningitis: headache, fever, altered mental status, neck stiffness, photophobia, cranial nerve palsies. Symptoms may be subacute over weeks. Physical examination: fever, meningismus, papilledema (increased intracranial pressure), focal neurologic deficits, skin lesions (umbilicated papules resembling molluscum). Complications: increased intracranial pressure (leading cause of death), hydrocephalus, vision loss, seizures.',
    diagnosticApproach: 'Serum cryptococcal antigen (CrAg) highly sensitive and specific screening test. Lumbar puncture: opening pressure often elevated (>25 cm H2O), CSF shows lymphocytic pleocytosis, elevated protein, low glucose. India ink stain shows encapsulated yeast (50-80% sensitive). CSF CrAg nearly 100% sensitive. CSF culture is gold standard. Chest X-ray or CT: nodules, infiltrates, or normal. Brain MRI: cryptococcomas (enhancing lesions), hydrocephalus. Screen HIV patients with CD4 <100 for cryptococcal antigen.',
    treatment: 'Meningitis: induction (2 weeks) with amphotericin B 0.7-1 mg/kg/day IV plus flucytosine 100 mg/kg/day divided q6h, consolidation (8 weeks) with fluconazole 400 mg daily, maintenance (≥1 year) with fluconazole 200 mg daily. Manage increased intracranial pressure: serial lumbar punctures to reduce opening pressure <20 cm H2O, or lumbar drain/ventriculoperitoneal shunt. Pulmonary (mild-moderate): fluconazole 400 mg daily for 6-12 months. Pulmonary (severe) or disseminated: amphotericin B plus flucytosine. HIV patients: start ART after 2-10 weeks of antifungal therapy (reduce IRIS risk). Discontinue maintenance therapy when CD4 >100 for ≥3 months.',
    clinicalPearls: [
      'Cryptococcal antigen is highly sensitive screening test',
      'Manage increased intracranial pressure aggressively - leading cause of death',
      'Amphotericin B plus flucytosine for induction therapy',
      'Screen HIV patients with CD4 <100 for cryptococcal antigen'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/fungi/cryptococcosis'
  },

  // PARASITIC INFECTIONS
  {
    topic: 'Malaria',
    keywords: ['malaria', 'plasmodium', 'malaria parasite', 'falciparum malaria', 'malaria infection'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, malaria is caused by Plasmodium parasites (P. falciparum, P. vivax, P. ovale, P. malariae, P. knowlesi) transmitted by Anopheles mosquitoes. Sporozoites injected by mosquito travel to liver, multiply, then infect red blood cells. RBC rupture releases merozoites causing fever paroxysms. P. falciparum causes severe malaria with complications (cerebral malaria, severe anemia, acute kidney injury, ARDS, hypoglycemia). P. vivax and P. ovale form dormant liver stages (hypnozoites) causing relapses. Endemic in sub-Saharan Africa, South Asia, and parts of South America. Sickle cell trait and G6PD deficiency provide partial protection.',
    clinicalPresentation: 'Fever, chills, headache, myalgias, nausea, vomiting, and diarrhea. Fever paroxysms (cyclical fever every 48-72 hours) classic but uncommon. Physical examination: fever, tachycardia, splenomegaly, hepatomegaly, jaundice. Severe malaria (P. falciparum): altered mental status (cerebral malaria), seizures, severe anemia, acute kidney injury, pulmonary edema, hypoglycemia, shock, DIC. Complications: cerebral malaria (coma, seizures), blackwater fever (massive hemolysis, hemoglobinuria), splenic rupture.',
    diagnosticApproach: 'Thick and thin blood smears: thick smear screens for parasites, thin smear identifies species and quantifies parasitemia. Giemsa stain. Repeat smears every 12-24 hours if initial negative but high suspicion. Rapid diagnostic tests (RDTs) detect parasite antigens (HRP-2, pLDH). PCR more sensitive but not widely available. Laboratory: anemia, thrombocytopenia, elevated bilirubin, elevated LDH, hypoglycemia. Severe malaria: parasitemia >5%, altered mental status, severe anemia (Hgb <7 g/dL), acute kidney injury, pulmonary edema, hypoglycemia, acidosis.',
    treatment: 'Uncomplicated malaria: artemisinin-based combination therapy (ACT) - artemether-lumefantrine, artesunate-mefloquine, or atovaquone-proguanil. Chloroquine for chloroquine-sensitive P. vivax, P. ovale, P. malariae. Primaquine for P. vivax and P. ovale to eradicate hypnozoites (check G6PD before giving). Severe malaria: IV artesunate (preferred) or IV quinidine plus doxycycline or clindamycin. Supportive care: treat hypoglycemia, transfuse for severe anemia, dialysis for acute kidney injury. Exchange transfusion for parasitemia >10%. Prevention: chemoprophylaxis (atovaquone-proguanil, doxycycline, mefloquine), insecticide-treated bed nets, insect repellent.',
    clinicalPearls: [
      'P. falciparum causes severe malaria - medical emergency',
      'Thick and thin blood smears are diagnostic',
      'IV artesunate is treatment of choice for severe malaria',
      'Primaquine eradicates hypnozoites but causes hemolysis in G6PD deficiency'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/extraintestinal-protozoa/malaria'
  },

  {
    topic: 'Toxoplasmosis',
    keywords: ['toxoplasmosis', 'toxoplasma', 'toxoplasma gondii', 'toxoplasma infection'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, toxoplasmosis is caused by Toxoplasma gondii, an intracellular protozoan parasite. Cats are definitive host; humans acquire infection via ingestion of oocysts (cat feces, contaminated food/water) or tissue cysts (undercooked meat). Primary infection usually asymptomatic in immunocompetent hosts, but parasite forms dormant cysts in brain, heart, skeletal muscle. Reactivation occurs in immunocompromised patients (HIV with CD4 <100, transplant recipients). Congenital toxoplasmosis occurs when primary infection during pregnancy causes transplacental transmission, causing severe fetal damage.',
    clinicalPresentation: 'Immunocompetent: asymptomatic or mild flu-like illness with lymphadenopathy (cervical most common). Immunocompromised: encephalitis (headache, confusion, seizures, focal neurologic deficits), chorioretinitis (blurred vision, floaters, eye pain), pneumonitis, myocarditis. Physical examination: fever, lymphadenopathy, altered mental status, focal deficits, retinal lesions. Congenital: chorioretinitis, hydrocephalus, intracranial calcifications, seizures, developmental delay. Classic triad: chorioretinitis, hydrocephalus, intracranial calcifications.',
    diagnosticApproach: 'Serology: IgG indicates past infection, IgM indicates recent infection (but can persist for months). Avidity testing distinguishes recent from remote infection. Immunocompromised: brain MRI shows multiple ring-enhancing lesions with edema (typically basal ganglia, corticomedullary junction). CSF PCR for Toxoplasma DNA. Brain biopsy if diagnosis uncertain. Congenital: maternal serology, fetal ultrasound (hydrocephalus, intracranial calcifications), amniocentesis (PCR). Newborn: serology, head CT, ophthalmologic exam. Screen HIV patients with positive Toxoplasma IgG and CD4 <100.',
    treatment: 'Immunocompetent: no treatment unless severe or prolonged symptoms. Immunocompromised: pyrimethamine plus sulfadiazine plus leucovorin (folinic acid) for ≥6 weeks, then secondary prophylaxis with lower doses until immune reconstitution (CD4 >200 for ≥3 months). Alternative: pyrimethamine plus clindamycin. Corticosteroids for mass effect. Congenital: pyrimethamine plus sulfadiazine plus leucovorin for 1 year. Pregnant women with acute infection: spiramycin to reduce transmission. Primary prophylaxis for HIV patients with CD4 <100 and positive Toxoplasma IgG: TMP-SMX (also prevents PCP). Avoid undercooked meat and cat litter during pregnancy.',
    clinicalPearls: [
      'Multiple ring-enhancing brain lesions in HIV patient suggests toxoplasmosis',
      'Pyrimethamine plus sulfadiazine is treatment of choice',
      'TMP-SMX prophylaxis prevents both toxoplasmosis and PCP',
      'Pregnant women should avoid cat litter and undercooked meat'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/extraintestinal-protozoa/toxoplasmosis'
  },

  // SEXUALLY TRANSMITTED INFECTIONS
  {
    topic: 'Syphilis',
    keywords: ['syphilis', 'treponema pallidum', 'primary syphilis', 'secondary syphilis', 'tertiary syphilis', 'neurosyphilis'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, syphilis is caused by spirochete Treponema pallidum, transmitted via sexual contact or congenitally. Incubation period 10-90 days (average 21 days). Stages: primary (chancre at inoculation site), secondary (disseminated infection with rash and systemic symptoms), latent (asymptomatic), and tertiary (cardiovascular, gummatous, or neurosyphilis). Neurosyphilis can occur at any stage. Congenital syphilis causes severe fetal damage. Syphilis increases HIV transmission risk. Incidence increasing, especially in men who have sex with men.',
    clinicalPresentation: 'Primary: painless ulcer (chancre) at inoculation site (genitals, oral, anal), firm, indurated, clean base, heals spontaneously in 3-6 weeks. Regional lymphadenopathy. Secondary (6 weeks to 6 months after primary): diffuse maculopapular rash involving palms and soles, mucous patches (oral ulcers), condyloma lata (genital warts), generalized lymphadenopathy, fever, malaise, alopecia. Latent: asymptomatic. Tertiary (years later): cardiovascular (aortitis, aortic aneurysm), gummatous (granulomas in skin, bones, organs), neurosyphilis (meningitis, stroke, tabes dorsalis, general paresis). Physical examination: chancre, rash, lymphadenopathy, neurologic deficits.',
    diagnosticApproach: 'Serology: nontreponemal tests (RPR, VDRL) screen and monitor treatment response (titers decline with treatment). Treponemal tests (FTA-ABS, TP-PA, EIA) confirm diagnosis (remain positive for life). Positive nontreponemal test confirmed with treponemal test. Darkfield microscopy or PCR of chancre exudate identifies spirochetes. Neurosyphilis: CSF VDRL specific but insensitive, CSF FTA-ABS sensitive but less specific, CSF pleocytosis and elevated protein support diagnosis. Lumbar puncture if neurologic symptoms, ocular symptoms, tertiary syphilis, treatment failure, or HIV with late latent syphilis.',
    treatment: 'Primary, secondary, early latent (<1 year): benzathine penicillin G 2.4 million units IM single dose. Late latent (>1 year), latent of unknown duration, tertiary: benzathine penicillin G 2.4 million units IM weekly for 3 weeks. Neurosyphilis: aqueous penicillin G 18-24 million units IV daily for 10-14 days. Penicillin allergy: doxycycline or ceftriaxone (but desensitization preferred for neurosyphilis or pregnancy). Jarisch-Herxheimer reaction (fever, rash, hypotension) may occur within 24 hours of treatment. Monitor nontreponemal titers at 6 and 12 months (4-fold decline indicates cure). Screen and treat sexual partners. HIV testing recommended.',
    clinicalPearls: [
      'Painless chancre is hallmark of primary syphilis',
      'Rash involving palms and soles is classic for secondary syphilis',
      'Benzathine penicillin G is treatment of choice',
      'Nontreponemal titers (RPR, VDRL) monitor treatment response'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/sexually-transmitted-infections-stis/syphilis'
  },

  {
    topic: 'Gonorrhea',
    keywords: ['gonorrhea', 'neisseria gonorrhoeae', 'gonococcal infection', 'gc', 'gonorrhea infection'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, gonorrhea is caused by Neisseria gonorrhoeae, a gram-negative diplococcus transmitted via sexual contact. Infects mucosal surfaces (urethra, cervix, rectum, pharynx, conjunctiva). Incubation period 2-7 days. Complications include pelvic inflammatory disease (PID), epididymitis, disseminated gonococcal infection (DGI), and gonococcal arthritis. Neonates acquire infection during delivery, causing ophthalmia neonatorum. Increasing antibiotic resistance is major concern. Often coinfected with Chlamydia trachomatis.',
    clinicalPresentation: 'Men: urethritis (purulent urethral discharge, dysuria), epididymitis (testicular pain, swelling). Women: often asymptomatic, cervicitis (vaginal discharge, dysuria), PID (lower abdominal pain, fever, cervical motion tenderness). Rectal: proctitis (rectal pain, discharge, bleeding) or asymptomatic. Pharyngeal: pharyngitis or asymptomatic. DGI: fever, migratory polyarthralgias, tenosynovitis, pustular skin lesions, septic arthritis (knee most common). Physical examination: purulent discharge, cervical motion tenderness, joint effusion, pustular lesions.',
    diagnosticApproach: 'Nucleic acid amplification test (NAAT) of urine (men), endocervical swab (women), or rectal/pharyngeal swab. NAAT more sensitive than culture. Culture with antibiotic susceptibility testing for treatment failures or pharyngeal infections. Gram stain of urethral discharge shows intracellular gram-negative diplococci (sensitive in men, less so in women). Test for Chlamydia coinfection. DGI: blood cultures (often negative), synovial fluid culture and Gram stain. Screen for other STIs (HIV, syphilis). Test of cure not routinely recommended unless pharyngeal infection or persistent symptoms.',
    treatment: 'Uncomplicated urogenital, rectal, pharyngeal: ceftriaxone 500 mg IM single dose (1g if weight >150 kg). Treat presumptively for Chlamydia: doxycycline 100 mg BID for 7 days or azithromycin 1g single dose. PID: ceftriaxone 500 mg IM plus doxycycline 100 mg BID for 14 days, with or without metronidazole. DGI: ceftriaxone 1-2g IV daily for 7-14 days. Gonococcal arthritis: ceftriaxone 1-2g IV daily for 7-14 days, joint drainage. Ophthalmia neonatorum: ceftriaxone 25-50 mg/kg IV/IM single dose. Treat sexual partners. Avoid sexual contact until treatment completed and symptoms resolved.',
    clinicalPearls: [
      'Ceftriaxone is treatment of choice due to increasing resistance',
      'Always treat for Chlamydia coinfection',
      'Test of cure not routinely needed unless pharyngeal infection',
      'DGI presents with triad: tenosynovitis, dermatitis, polyarthralgias'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/sexually-transmitted-infections-stis/gonorrhea'
  },

  {
    topic: 'Chlamydia',
    keywords: ['chlamydia', 'chlamydia trachomatis', 'chlamydial infection', 'chlamydia infection'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, chlamydia is caused by Chlamydia trachomatis, an obligate intracellular bacterium transmitted via sexual contact. Most common bacterial STI in US. Infects mucosal surfaces (urethra, cervix, rectum, pharynx, conjunctiva). Incubation period 7-14 days. Complications include pelvic inflammatory disease (PID), ectopic pregnancy, infertility, epididymitis, reactive arthritis (Reiter syndrome), and lymphogranuloma venereum (LGV - caused by serovars L1-L3). Neonates acquire infection during delivery, causing conjunctivitis and pneumonia. Often asymptomatic, especially in women.',
    clinicalPresentation: 'Men: urethritis (clear or white urethral discharge, dysuria), epididymitis (testicular pain, swelling). Women: often asymptomatic (70-80%), cervicitis (vaginal discharge, dysuria, intermenstrual bleeding), PID (lower abdominal pain, fever, cervical motion tenderness). Rectal: proctitis (rectal pain, discharge, bleeding) or asymptomatic. Pharyngeal: pharyngitis or asymptomatic. LGV: painless genital ulcer, then painful inguinal lymphadenopathy (buboes), proctocolitis. Reactive arthritis: arthritis, urethritis, conjunctivitis. Physical examination: mucopurulent discharge, cervical friability, cervical motion tenderness, inguinal lymphadenopathy.',
    diagnosticApproach: 'Nucleic acid amplification test (NAAT) of urine (men), endocervical or vaginal swab (women), or rectal/pharyngeal swab. NAAT is most sensitive and specific test. Culture not routinely available. Screen sexually active women <25 years annually, and older women with risk factors. Screen men who have sex with men annually (urethral, rectal, pharyngeal sites). Test for gonorrhea coinfection. Screen for other STIs (HIV, syphilis). Test of cure 3 weeks after treatment if pregnant or symptoms persist.',
    treatment: 'Uncomplicated urogenital, rectal, pharyngeal: doxycycline 100 mg BID for 7 days (preferred) or azithromycin 1g single dose. Pregnancy: azithromycin 1g single dose. LGV: doxycycline 100 mg BID for 21 days. Treat sexual partners (expedited partner therapy - provide prescription or medication to patient to give to partners). Avoid sexual contact until treatment completed (7 days after single-dose therapy, or completion of 7-day regimen) and symptoms resolved. Retest 3 months after treatment (high reinfection rate).',
    clinicalPearls: [
      'Most common bacterial STI in US',
      'Often asymptomatic, especially in women',
      'Doxycycline for 7 days is preferred treatment',
      'Screen sexually active women <25 years annually'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/sexually-transmitted-infections-stis/chlamydial-and-other-nongonococcal-urethritis-ngu'
  },
];
