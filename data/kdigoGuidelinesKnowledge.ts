
/**
 * KDIGO (Kidney Disease: Improving Global Outcomes) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from KDIGO.
 * KDIGO provides evidence-based guidelines for kidney disease management.
 * 
 * INTEGRATION PHASE: KDIGO Guidelines (Phase 18 - Renal Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (1 = Strong, 2 = Weak/Conditional)
 * - Quality of evidence (A = High, B = Moderate, C = Low, D = Very Low)
 * - Clinical implementation guidance
 * - KDIGO guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from KDIGO guidelines but presented
 * in an original format for medical education purposes.
 */

export interface KDIGOGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  strongRecommendations: string[];
  weakRecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  kdigoUrl: string;
  publicationYear: number;
}

export const kdigoGuidelinesKnowledge: KDIGOGuidelineEntry[] = [
  // ACUTE KIDNEY INJURY GUIDELINES
  {
    topic: 'Acute Kidney Injury (AKI) - KDIGO Guideline',
    keywords: ['acute kidney injury', 'aki', 'acute renal failure', 'arf', 'acute tubular necrosis', 'atn', 'kdigo aki', 'aki staging', 'aki criteria'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for acute kidney injury provides evidence-based recommendations for the definition, staging, prevention, and management of AKI. The guideline defines AKI using standardized criteria: increase in serum creatinine ≥0.3 mg/dL within 48 hours, or increase to ≥1.5 times baseline within 7 days, or urine output <0.5 mL/kg/h for 6 hours. AKI is staged from 1 (mild) to 3 (severe). The guideline emphasizes prevention in high-risk patients, avoidance of nephrotoxins, hemodynamic optimization, and appropriate use of renal replacement therapy.',
    strongRecommendations: [
      'We recommend using the KDIGO criteria to diagnose and stage AKI (Grade 1A)',
      'We recommend discontinuing all nephrotoxic agents when possible in patients with AKI (Grade 1B)',
      'We recommend using isotonic crystalloids rather than colloids (starches) for volume expansion in patients at risk for AKI (Grade 1A)',
      'We recommend not using diuretics to prevent AKI or to treat AKI except in the management of volume overload (Grade 1B)',
      'We recommend initiating renal replacement therapy (RRT) emergently when life-threatening changes in fluid, electrolyte, and acid-base balance exist (Grade 1C)',
      'We recommend using either continuous or intermittent RRT in hemodynamically unstable patients (Grade 1B)',
    ],
    weakRecommendations: [
      'We suggest using functional hemodynamic monitoring to guide fluid management in patients with or at risk for AKI (Grade 2C)',
      'We suggest not using low-dose dopamine to prevent or treat AKI (Grade 2B)',
      'We suggest not using fenoldopam to prevent or treat AKI (Grade 2B)',
      'We suggest not using atrial natriuretic peptide (ANP) to prevent or treat AKI (Grade 2C)',
      'We suggest using protocols/bundles to prevent AKI in high-risk patients (Grade 2C)',
      'We suggest initiating RRT when AKI is severe (Stage 3) and there is no response to conservative management (Grade 2C)',
      'We suggest using bicarbonate therapy in patients with AKI and severe metabolic acidosis (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on High to Moderate quality evidence (A-B) from randomized controlled trials and meta-analyses; Grade 2 recommendations are based on Low to Very Low quality evidence (C-D)',
    clinicalImplementation: 'Implementation of KDIGO AKI guidelines requires systematic approach to diagnosis, staging, and management. DIAGNOSIS: Use KDIGO criteria: (1) SCr increase ≥0.3 mg/dL within 48 hours, OR (2) SCr increase ≥1.5× baseline within 7 days, OR (3) Urine output <0.5 mL/kg/h for 6 hours. STAGING: Stage 1 (SCr 1.5-1.9× baseline or ≥0.3 mg/dL increase, UO <0.5 mL/kg/h for 6-12h), Stage 2 (SCr 2.0-2.9× baseline, UO <0.5 mL/kg/h for ≥12h), Stage 3 (SCr ≥3.0× baseline or ≥4.0 mg/dL or initiation of RRT, UO <0.3 mL/kg/h for ≥24h or anuria for ≥12h). PREVENTION: Identify high-risk patients (elderly, CKD, diabetes, heart failure, sepsis, major surgery). Avoid nephrotoxins (NSAIDs, aminoglycosides, contrast). Optimize hemodynamics with isotonic crystalloids (normal saline or lactated Ringer). Use functional hemodynamic monitoring (passive leg raise, pulse pressure variation) to guide fluid therapy. Implement AKI prevention bundles in high-risk settings. MANAGEMENT: Discontinue nephrotoxic agents. Adjust medication doses for renal function. Avoid diuretics unless volume overload. Monitor electrolytes (especially potassium), acid-base status, and fluid balance. RENAL REPLACEMENT THERAPY: Emergent indications: severe hyperkalemia (>6.5 mEq/L with ECG changes), severe metabolic acidosis (pH <7.1), severe volume overload (pulmonary edema refractory to diuretics), uremic complications (pericarditis, encephalopathy, bleeding). Consider RRT for Stage 3 AKI not responding to conservative management. Use either continuous (CRRT) or intermittent (IHD) RRT based on hemodynamic stability and institutional resources.',
    keyPoints: [
      'KDIGO AKI criteria: SCr ≥0.3 mg/dL in 48h, or ≥1.5× baseline in 7 days, or UO <0.5 mL/kg/h for 6h',
      'Stage AKI from 1 (mild) to 3 (severe) based on SCr and urine output',
      'Discontinue all nephrotoxic agents when possible',
      'Use isotonic crystalloids (not colloids/starches) for volume expansion',
      'Avoid low-dose dopamine, fenoldopam, ANP for AKI prevention/treatment',
      'Diuretics only for volume overload, not to prevent or treat AKI',
      'Emergent RRT indications: severe hyperkalemia, acidosis, volume overload, uremic complications',
      'Either CRRT or IHD acceptable for hemodynamically unstable patients',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/acute-kidney-injury/',
    publicationYear: 2012,
  },

  // CHRONIC KIDNEY DISEASE GUIDELINES
  {
    topic: 'Chronic Kidney Disease (CKD) Evaluation and Management - KDIGO Guideline',
    keywords: ['chronic kidney disease', 'ckd', 'chronic renal failure', 'end stage renal disease', 'esrd', 'kdigo ckd', 'egfr', 'albuminuria', 'ckd staging'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for chronic kidney disease provides evidence-based recommendations for the evaluation, classification, and management of CKD. The guideline defines CKD as abnormalities of kidney structure or function present for >3 months with implications for health. CKD is classified by cause, GFR category (G1-G5), and albuminuria category (A1-A3). The guideline emphasizes early detection, risk stratification, slowing progression with ACE inhibitors/ARBs and SGLT2 inhibitors, managing complications (anemia, mineral bone disease, metabolic acidosis), and timely referral to nephrology.',
    strongRecommendations: [
      'We recommend using the CKD-EPI creatinine equation to estimate GFR in adults (Grade 1A)',
      'We recommend measuring albuminuria in patients with CKD to guide prognosis and treatment (Grade 1A)',
      'We recommend ACE inhibitors or ARBs for adults with CKD and albuminuria (Grade 1B)',
      'We recommend targeting blood pressure <120/80 mmHg in adults with CKD and albuminuria (Grade 1B)',
      'We recommend SGLT2 inhibitors for adults with CKD and type 2 diabetes to slow progression (Grade 1A)',
      'We recommend referring patients to nephrology when eGFR <30 mL/min/1.73m² (Grade 1B)',
      'We recommend preparing for renal replacement therapy or transplantation when eGFR <20 mL/min/1.73m² (Grade 1B)',
    ],
    weakRecommendations: [
      'We suggest targeting HbA1c ~7% in patients with diabetes and CKD to prevent progression (Grade 2C)',
      'We suggest dietary protein restriction (0.8 g/kg/day) in adults with CKD not on dialysis (Grade 2B)',
      'We suggest sodium restriction (<2 g/day) in adults with CKD (Grade 2C)',
      'We suggest treating metabolic acidosis (serum bicarbonate <22 mEq/L) with oral alkali therapy (Grade 2B)',
      'We suggest using erythropoiesis-stimulating agents (ESAs) when hemoglobin <10 g/dL in CKD (Grade 2C)',
      'We suggest not initiating ESAs when hemoglobin >10 g/dL (Grade 2B)',
      'We suggest using phosphate binders to control serum phosphate in CKD (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on High to Moderate quality evidence (A-B) from randomized controlled trials; Grade 2 recommendations are based on Low to Very Low quality evidence (C-D)',
    clinicalImplementation: 'Implementation of KDIGO CKD guidelines requires systematic approach to diagnosis, staging, and management. DIAGNOSIS: CKD defined as abnormalities of kidney structure or function present for >3 months. Criteria: (1) eGFR <60 mL/min/1.73m² for >3 months, OR (2) Markers of kidney damage (albuminuria, hematuria, structural abnormalities) for >3 months. STAGING: Use CKD-EPI equation to calculate eGFR. GFR categories: G1 (≥90), G2 (60-89), G3a (45-59), G3b (30-44), G4 (15-29), G5 (<15). Albuminuria categories: A1 (<30 mg/g), A2 (30-300 mg/g), A3 (>300 mg/g). Risk stratification: Green (low risk), Yellow (moderately increased risk), Orange (high risk), Red (very high risk) based on GFR and albuminuria. SLOW PROGRESSION: ACE inhibitors or ARBs for albuminuria (start low, titrate up, monitor SCr and K+). SGLT2 inhibitors (dapagliflozin, empagliflozin, canagliflozin) for CKD with or without diabetes. Target BP <120/80 mmHg if albuminuria present. Glycemic control (HbA1c ~7%) if diabetes. Dietary modifications: protein 0.8 g/kg/day, sodium <2 g/day. MANAGE COMPLICATIONS: Anemia: ESAs (epoetin, darbepoetin) if Hb <10 g/dL, target 10-11.5 g/dL, supplement iron. Mineral bone disease: phosphate binders (calcium acetate, sevelamer), vitamin D analogs, target PTH 2-9× upper limit of normal. Metabolic acidosis: oral sodium bicarbonate if serum HCO3 <22 mEq/L. NEPHROLOGY REFERRAL: Refer when eGFR <30, rapidly declining eGFR (>5 mL/min/1.73m² per year), persistent albuminuria (>300 mg/g), or difficult-to-manage complications. PREPARE FOR RRT: When eGFR <20, discuss dialysis options (hemodialysis, peritoneal dialysis) and kidney transplantation. Place vascular access (AV fistula preferred) when eGFR <20.',
    keyPoints: [
      'CKD defined as kidney abnormalities present for >3 months',
      'Use CKD-EPI equation to estimate GFR in adults',
      'Stage CKD by GFR category (G1-G5) and albuminuria category (A1-A3)',
      'ACE inhibitors/ARBs for CKD with albuminuria to slow progression',
      'SGLT2 inhibitors slow CKD progression in patients with or without diabetes',
      'Target BP <120/80 mmHg if albuminuria present',
      'Refer to nephrology when eGFR <30 mL/min/1.73m²',
      'Prepare for RRT when eGFR <20 mL/min/1.73m²',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
    publicationYear: 2024,
  },

  // DIABETES AND CKD GUIDELINES
  {
    topic: 'Diabetes and Chronic Kidney Disease - KDIGO Guideline',
    keywords: ['diabetic kidney disease', 'dkd', 'diabetic nephropathy', 'diabetes ckd', 'sglt2 inhibitor', 'gla-1 agonist', 'finerenone', 'albuminuria diabetes'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for diabetes and chronic kidney disease provides evidence-based recommendations for the prevention and management of diabetic kidney disease (DKD). The guideline emphasizes comprehensive diabetes management with glycemic control, blood pressure control, and use of kidney-protective medications. SGLT2 inhibitors and GLP-1 receptor agonists are recommended for adults with type 2 diabetes and CKD to reduce kidney disease progression and cardiovascular events. The guideline also addresses the use of non-steroidal mineralocorticoid receptor antagonists (finerenone) and ACE inhibitors/ARBs.',
    strongRecommendations: [
      'We recommend SGLT2 inhibitors for adults with type 2 diabetes and CKD (eGFR ≥20) to reduce kidney disease progression and cardiovascular events (Grade 1A)',
      'We recommend GLP-1 receptor agonists for adults with type 2 diabetes and CKD who have not achieved glycemic targets with metformin and SGLT2 inhibitors (Grade 1A)',
      'We recommend ACE inhibitors or ARBs (but not both) for adults with diabetes, hypertension, and albuminuria (Grade 1A)',
      'We recommend targeting HbA1c of approximately 7% to prevent or delay progression of diabetic kidney disease (Grade 1A)',
      'We recommend targeting blood pressure <120/80 mmHg in adults with diabetes and CKD with albuminuria (Grade 1B)',
    ],
    weakRecommendations: [
      'We suggest finerenone (non-steroidal MRA) for adults with type 2 diabetes and CKD with albuminuria despite ACE inhibitor/ARB therapy (Grade 2B)',
      'We suggest continuing metformin in patients with eGFR ≥30 mL/min/1.73m² (Grade 2B)',
      'We suggest discontinuing metformin when eGFR <30 mL/min/1.73m² (Grade 2C)',
      'We suggest avoiding thiazolidinediones in patients with heart failure or at risk for fractures (Grade 2C)',
      'We suggest monitoring albuminuria annually in patients with diabetes and CKD (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on High quality evidence (A) from large randomized controlled trials (CREDENCE, DAPA-CKD, EMPA-KIDNEY, LEADER, SUSTAIN-6); Grade 2 recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of KDIGO diabetes and CKD guidelines requires comprehensive approach to kidney-protective therapy. INITIAL ASSESSMENT: Measure eGFR and urine albumin-to-creatinine ratio (UACR) at diagnosis and annually. Diagnose DKD if albuminuria (UACR ≥30 mg/g) or declining eGFR in patient with diabetes. KIDNEY-PROTECTIVE MEDICATIONS: (1) SGLT2 INHIBITORS: First-line for type 2 diabetes and CKD. Options: dapagliflozin 10 mg daily (eGFR ≥25), empagliflozin 10 mg daily (eGFR ≥20), canagliflozin 100 mg daily (eGFR ≥30). Benefits: reduce albuminuria, slow eGFR decline, reduce cardiovascular events and heart failure hospitalizations. Monitor for genital mycotic infections, volume depletion, DKA (rare). (2) ACE INHIBITORS/ARBs: Use for hypertension and albuminuria. Start low, titrate to maximum tolerated dose. Monitor SCr and K+ at 2-4 weeks after initiation or dose increase. Acceptable SCr increase up to 30% from baseline. Hold if K+ >5.5 mEq/L. (3) GLP-1 RECEPTOR AGONISTS: Use if HbA1c not at target with metformin and SGLT2 inhibitor. Options: semaglutide, dulaglutide, liraglutide. Benefits: improve glycemic control, reduce cardiovascular events, promote weight loss. (4) FINERENONE: Non-steroidal MRA for type 2 diabetes with albuminuria despite ACE inhibitor/ARB. Dose: 10-20 mg daily based on eGFR. Monitor K+ closely (hold if >5.5 mEq/L). GLYCEMIC CONTROL: Target HbA1c ~7% (individualize based on age, comorbidities, hypoglycemia risk). Continue metformin if eGFR ≥30, discontinue if eGFR <30. Avoid sulfonylureas (hypoglycemia risk) and thiazolidinediones (fluid retention, fractures) in advanced CKD. BLOOD PRESSURE CONTROL: Target <120/80 mmHg if albuminuria present. Use ACE inhibitor/ARB as first-line. Add calcium channel blocker or diuretic as needed. LIFESTYLE MODIFICATIONS: Dietary sodium restriction (<2 g/day), weight loss if overweight, regular physical activity, smoking cessation. MONITORING: Check eGFR and UACR annually. More frequent monitoring if rapidly declining eGFR or high-risk features.',
    keyPoints: [
      'SGLT2 inhibitors are first-line for type 2 diabetes and CKD (eGFR ≥20)',
      'GLP-1 receptor agonists if HbA1c not at target with metformin and SGLT2 inhibitor',
      'ACE inhibitors/ARBs for diabetes with hypertension and albuminuria',
      'Finerenone (non-steroidal MRA) for albuminuria despite ACE inhibitor/ARB',
      'Target HbA1c ~7% to prevent DKD progression',
      'Target BP <120/80 mmHg if albuminuria present',
      'Continue metformin if eGFR ≥30, discontinue if eGFR <30',
      'Monitor eGFR and albuminuria annually',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/diabetes-ckd/',
    publicationYear: 2022,
  },

  // GLOMERULONEPHRITIS GUIDELINES
  {
    topic: 'Glomerulonephritis - KDIGO Guideline',
    keywords: ['glomerulonephritis', 'gn', 'glomerular disease', 'nephritic syndrome', 'rapidly progressive gn', 'rpgn', 'iga nephropathy', 'membranous nephropathy', 'fsgs', 'minimal change disease'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for glomerulonephritis provides evidence-based recommendations for the diagnosis and management of glomerular diseases. The guideline covers primary glomerular diseases (IgA nephropathy, membranous nephropathy, focal segmental glomerulosclerosis, minimal change disease) and secondary glomerular diseases (lupus nephritis, ANCA-associated vasculitis). The guideline emphasizes kidney biopsy for diagnosis, immunosuppressive therapy for specific diseases, and supportive care with ACE inhibitors/ARBs and blood pressure control.',
    strongRecommendations: [
      'We recommend kidney biopsy for adults with glomerular hematuria and proteinuria to establish diagnosis (Grade 1B)',
      'We recommend ACE inhibitors or ARBs for adults with glomerulonephritis and proteinuria (Grade 1B)',
      'We recommend corticosteroids for adults with minimal change disease and nephrotic syndrome (Grade 1B)',
      'We recommend immunosuppressive therapy (cyclophosphamide or rituximab) for adults with ANCA-associated vasculitis (Grade 1A)',
      'We recommend immunosuppressive therapy for adults with lupus nephritis (Grade 1A)',
    ],
    weakRecommendations: [
      'We suggest corticosteroids for adults with IgA nephropathy and persistent proteinuria >1 g/day despite ACE inhibitor/ARB therapy (Grade 2B)',
      'We suggest immunosuppressive therapy (cyclophosphamide or calcineurin inhibitors) for adults with membranous nephropathy and nephrotic syndrome (Grade 2C)',
      'We suggest immunosuppressive therapy (corticosteroids with or without calcineurin inhibitors) for adults with FSGS and nephrotic syndrome (Grade 2C)',
      'We suggest targeting blood pressure <120/80 mmHg in adults with glomerulonephritis and proteinuria (Grade 2C)',
      'We suggest monitoring proteinuria and kidney function regularly to assess treatment response (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on High to Moderate quality evidence (A-B) from randomized controlled trials; Grade 2 recommendations are based on Low to Very Low quality evidence (C-D)',
    clinicalImplementation: 'Implementation of KDIGO glomerulonephritis guidelines requires systematic approach to diagnosis and treatment. DIAGNOSIS: Kidney biopsy is gold standard for diagnosis. Indications: glomerular hematuria (dysmorphic RBCs, RBC casts) with proteinuria, nephrotic syndrome, rapidly progressive GN (rapid decline in kidney function with active urine sediment). Biopsy provides histologic diagnosis and guides treatment. SUPPORTIVE CARE (ALL GLOMERULAR DISEASES): ACE inhibitors or ARBs to reduce proteinuria (titrate to maximum tolerated dose). Target BP <120/80 mmHg if proteinuria present. Dietary sodium restriction (<2 g/day). Statin for hyperlipidemia. Anticoagulation if nephrotic syndrome with albumin <2.5 g/dL (high thrombotic risk). DISEASE-SPECIFIC TREATMENT: (1) IGA NEPHROPATHY: ACE inhibitor/ARB first-line. If proteinuria >1 g/day despite 3-6 months of optimal supportive care, consider corticosteroids (methylprednisolone 0.6-0.8 mg/kg/day, taper over 6-8 months). Monitor for steroid side effects. (2) MINIMAL CHANGE DISEASE: Prednisone 1 mg/kg/day (max 80 mg) or 2 mg/kg every other day for 4-16 weeks, then taper. Most patients achieve remission within 8 weeks. For relapses, repeat corticosteroids or use steroid-sparing agents (cyclophosphamide, calcineurin inhibitors). (3) MEMBRANOUS NEPHROPATHY: If nephrotic syndrome, use cyclophosphamide (2 mg/kg/day for 6 months) alternating with corticosteroids, OR tacrolimus/cyclosporine with low-dose corticosteroids for 6 months. Rituximab is alternative. (4) FSGS: Prednisone 1 mg/kg/day for 4-16 weeks. If no response, consider calcineurin inhibitors (tacrolimus, cyclosporine). (5) ANCA-ASSOCIATED VASCULITIS: Induction: cyclophosphamide (15 mg/kg IV every 2-3 weeks for 3-6 months) OR rituximab (375 mg/m² weekly × 4 doses) PLUS corticosteroids (methylprednisolone 500-1000 mg IV × 3 days, then prednisone 1 mg/kg/day, taper). Maintenance: azathioprine or rituximab for 18-24 months. (6) LUPUS NEPHRITIS: Induction (Class III/IV): mycophenolate mofetil (2-3 g/day) OR cyclophosphamide (500 mg IV every 2 weeks × 6 doses) PLUS corticosteroids. Maintenance: mycophenolate mofetil or azathioprine for ≥3 years. MONITORING: Proteinuria (UPCR), serum creatinine, and eGFR at baseline and regularly during treatment. Assess treatment response: complete remission (proteinuria <0.3 g/day), partial remission (proteinuria <3.5 g/day with ≥50% reduction from baseline).',
    keyPoints: [
      'Kidney biopsy for diagnosis of glomerulonephritis',
      'ACE inhibitors/ARBs and BP control for all glomerular diseases',
      'IgA nephropathy: corticosteroids if proteinuria >1 g/day despite ACE inhibitor/ARB',
      'Minimal change disease: corticosteroids (prednisone 1 mg/kg/day)',
      'Membranous nephropathy: cyclophosphamide or calcineurin inhibitors if nephrotic',
      'FSGS: corticosteroids, consider calcineurin inhibitors if no response',
      'ANCA vasculitis: cyclophosphamide or rituximab plus corticosteroids',
      'Lupus nephritis: mycophenolate or cyclophosphamide plus corticosteroids',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/glomerular-diseases/',
    publicationYear: 2021,
  },

  // ANEMIA IN CKD GUIDELINES
  {
    topic: 'Anemia in Chronic Kidney Disease - KDIGO Guideline',
    keywords: ['anemia ckd', 'anemia chronic kidney disease', 'esa', 'erythropoietin', 'epoetin', 'darbepoetin', 'iron deficiency ckd', 'hemoglobin target ckd'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for anemia in chronic kidney disease provides evidence-based recommendations for the diagnosis and management of anemia in CKD. The guideline emphasizes evaluation for reversible causes of anemia, iron supplementation to maintain adequate iron stores, and judicious use of erythropoiesis-stimulating agents (ESAs) when hemoglobin is <10 g/dL. The guideline recommends against targeting hemoglobin >11.5 g/dL due to increased cardiovascular risks. Iron status should be assessed before and during ESA therapy.',
    strongRecommendations: [
      'We recommend evaluating for reversible causes of anemia (iron deficiency, blood loss, inflammation) before initiating ESA therapy (Grade 1A)',
      'We recommend iron supplementation to maintain TSAT >20% and ferritin >100 ng/mL in CKD patients not on dialysis (Grade 1B)',
      'We recommend iron supplementation to maintain TSAT >20% and ferritin >200 ng/mL in CKD patients on dialysis (Grade 1B)',
      'We recommend not using ESAs to maintain hemoglobin >11.5 g/dL (Grade 1A)',
    ],
    weakRecommendations: [
      'We suggest initiating ESA therapy when hemoglobin is <10 g/dL to avoid transfusion (Grade 2C)',
      'We suggest individualizing hemoglobin target (generally 10-11.5 g/dL) based on patient factors (Grade 2C)',
      'We suggest using IV iron rather than oral iron in hemodialysis patients (Grade 2B)',
      'We suggest monitoring hemoglobin monthly during ESA therapy and adjusting dose to maintain target (Grade 2C)',
      'We suggest evaluating for ESA hyporesponsiveness if hemoglobin does not increase despite adequate ESA dose and iron stores (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on High quality evidence (A) from randomized controlled trials showing harm with high hemoglobin targets; Grade 2 recommendations are based on Low to Very Low quality evidence (C-D)',
    clinicalImplementation: 'Implementation of KDIGO anemia in CKD guidelines requires systematic approach to diagnosis and treatment. DIAGNOSIS: Anemia in CKD defined as hemoglobin <13 g/dL in males, <12 g/dL in females. Evaluate for reversible causes: iron deficiency (check TSAT, ferritin), blood loss (GI bleeding, menstruation), inflammation (CRP, ESR), vitamin B12/folate deficiency, hypothyroidism, hyperparathyroidism. IRON SUPPLEMENTATION: Check iron studies (TSAT, ferritin) before initiating ESA. TARGETS: Non-dialysis CKD: TSAT >20%, ferritin >100 ng/mL. Dialysis CKD: TSAT >20%, ferritin >200 ng/mL. ORAL IRON: Ferrous sulfate 325 mg TID (65 mg elemental iron per tablet) for non-dialysis CKD. Take on empty stomach, separate from other medications. Side effects: constipation, nausea, dark stools. IV IRON: Preferred for hemodialysis patients. Options: iron sucrose (100-200 mg per dialysis session), ferric gluconate (125 mg per dialysis session), iron dextran (requires test dose), ferumoxytol (510 mg × 2 doses). Monitor for hypersensitivity reactions. ERYTHROPOIESIS-STIMULATING AGENTS (ESAs): Indications: Hemoglobin <10 g/dL with adequate iron stores and no reversible causes. Options: Epoetin alfa (start 50-100 units/kg SC 3× per week), Darbepoetin alfa (start 0.45 mcg/kg SC weekly or 0.75 mcg/kg every 2 weeks). TARGET HEMOGLOBIN: 10-11.5 g/dL (individualize based on patient factors). Do NOT target >11.5 g/dL (increased risk of stroke, thrombosis, death). MONITORING: Check hemoglobin monthly during ESA therapy. Adjust ESA dose by 25% if hemoglobin increases >1 g/dL per month or falls below target. Check iron studies every 3 months. ESA HYPORESPONSIVENESS: Defined as failure to achieve target hemoglobin despite adequate ESA dose (>450 units/kg/week epoetin or >1.5 mcg/kg/week darbepoetin) and adequate iron stores. Evaluate for: iron deficiency (most common), inflammation/infection, hyperparathyroidism, aluminum toxicity, hemoglobinopathy, blood loss. BLOOD TRANSFUSION: Reserve for symptomatic anemia or hemoglobin <7 g/dL. Avoid unnecessary transfusions in transplant candidates (alloimmunization).',
    keyPoints: [
      'Evaluate for reversible causes of anemia before initiating ESA',
      'Iron supplementation: TSAT >20%, ferritin >100 ng/mL (non-dialysis) or >200 ng/mL (dialysis)',
      'IV iron preferred over oral iron in hemodialysis patients',
      'Initiate ESA when hemoglobin <10 g/dL to avoid transfusion',
      'Target hemoglobin 10-11.5 g/dL (do NOT target >11.5 g/dL)',
      'Monitor hemoglobin monthly and adjust ESA dose to maintain target',
      'Evaluate for ESA hyporesponsiveness if no response despite adequate dose and iron',
      'Avoid unnecessary transfusions in transplant candidates',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/anemia-in-ckd/',
    publicationYear: 2012,
  },

  // MINERAL AND BONE DISORDER GUIDELINES
  {
    topic: 'Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) - KDIGO Guideline',
    keywords: ['ckd-mbd', 'mineral bone disorder', 'secondary hyperparathyroidism', 'hyperphosphatemia', 'hypocalcemia', 'phosphate binder', 'vitamin d ckd', 'calcimimetic', 'cinacalcet'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for chronic kidney disease-mineral and bone disorder (CKD-MBD) provides evidence-based recommendations for the diagnosis and management of mineral and bone abnormalities in CKD. CKD-MBD is a systemic disorder characterized by abnormalities in calcium, phosphate, PTH, and vitamin D metabolism, leading to bone disease and vascular calcification. The guideline emphasizes monitoring calcium, phosphate, PTH, and vitamin D levels; treating hyperphosphatemia with dietary restriction and phosphate binders; managing secondary hyperparathyroidism with vitamin D analogs and calcimimetics; and avoiding hypercalcemia.',
    strongRecommendations: [
      'We recommend measuring serum calcium, phosphate, PTH, and alkaline phosphatase in patients with CKD G3a-G5D (Grade 1B)',
      'We recommend lowering elevated phosphate levels toward the normal range in patients with CKD G3a-G5D (Grade 1C)',
      'We recommend restricting dietary phosphate intake in patients with CKD G3a-G5D and hyperphosphatemia (Grade 1C)',
      'We recommend using phosphate binders in patients with CKD G3a-G5D who cannot achieve phosphate targets with dietary restriction alone (Grade 1C)',
    ],
    weakRecommendations: [
      'We suggest monitoring PTH levels every 3-6 months in CKD G3a-G3b, every 3 months in CKD G4, and every 1-3 months in CKD G5D (Grade 2C)',
      'We suggest maintaining PTH in the range of 2-9 times the upper limit of normal in CKD G5D (Grade 2C)',
      'We suggest using calcitriol or vitamin D analogs to lower PTH in CKD G3a-G5D (Grade 2C)',
      'We suggest using calcimimetics (cinacalcet) to lower PTH in CKD G5D with severe hyperparathyroidism (Grade 2B)',
      'We suggest avoiding hypercalcemia (calcium >10.5 mg/dL) in CKD G3a-G5D (Grade 2C)',
      'We suggest limiting the dose of calcium-based phosphate binders in CKD G3a-G5D (Grade 2C)',
      'We suggest measuring 25-hydroxyvitamin D levels and treating deficiency (<30 ng/mL) in CKD (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on Moderate quality evidence (B-C) from observational studies and expert opinion; Grade 2 recommendations are based on Low to Very Low quality evidence (C-D)',
    clinicalImplementation: 'Implementation of KDIGO CKD-MBD guidelines requires systematic approach to monitoring and treatment. MONITORING: CKD G3a-G3b (eGFR 30-59): Check calcium, phosphate, PTH, alkaline phosphatase every 6-12 months. CKD G4 (eGFR 15-29): Check every 3-6 months. CKD G5/G5D (eGFR <15 or dialysis): Check every 1-3 months. HYPERPHOSPHATEMIA MANAGEMENT: Target: Phosphate 2.5-4.5 mg/dL (normal range). (1) DIETARY RESTRICTION: Limit phosphate intake to 800-1000 mg/day. Avoid high-phosphate foods (dairy, processed meats, cola, nuts). (2) PHOSPHATE BINDERS: Initiate if hyperphosphatemia persists despite dietary restriction. Take with meals. Options: Calcium-based binders: Calcium acetate (667 mg elemental calcium per tablet, start 1-2 tablets with meals), Calcium carbonate (500 mg elemental calcium per tablet, start 1-2 tablets with meals). Limit total elemental calcium from binders to <1500 mg/day to avoid hypercalcemia and vascular calcification. Non-calcium-based binders: Sevelamer carbonate (800 mg, start 1-2 tablets with meals), Lanthanum carbonate (500-1000 mg with meals), Ferric citrate (210 mg, start 2 tablets with meals, also treats iron deficiency). SECONDARY HYPERPARATHYROIDISM MANAGEMENT: Target PTH: CKD G3-G4: 2-9× upper limit of normal (approximately 70-110 pg/mL). CKD G5D: 2-9× upper limit of normal (approximately 150-600 pg/mL). (1) VITAMIN D THERAPY: Correct vitamin D deficiency (25-OH vitamin D <30 ng/mL) with ergocalciferol or cholecalciferol. For elevated PTH despite vitamin D repletion, use active vitamin D analogs: Calcitriol (0.25-0.5 mcg daily), Paricalcitol (1-2 mcg daily or 2-4 mcg 3× per week with dialysis), Doxercalciferol (2.5-10 mcg 3× per week with dialysis). Monitor calcium and phosphate closely (risk of hypercalcemia and hyperphosphatemia). (2) CALCIMIMETICS: Cinacalcet (30-180 mg daily) for severe hyperparathyroidism (PTH >600 pg/mL) in dialysis patients. Lowers PTH by increasing sensitivity of calcium-sensing receptor. Monitor for hypocalcemia and GI side effects (nausea). HYPOCALCEMIA MANAGEMENT: Correct with calcium supplementation (calcium carbonate 500-1000 mg elemental calcium TID) and active vitamin D (calcitriol 0.25-0.5 mcg daily). BONE DISEASE: Consider bone biopsy if unclear diagnosis or before starting bisphosphonates. Avoid bisphosphonates in CKD G4-G5 (risk of adynamic bone disease). PARATHYROIDECTOMY: Consider for severe refractory hyperparathyroidism (PTH >800 pg/mL) with hypercalcemia or calciphylaxis despite medical therapy.',
    keyPoints: [
      'Monitor calcium, phosphate, PTH, alkaline phosphatase in CKD G3a-G5D',
      'Target phosphate 2.5-4.5 mg/dL with dietary restriction and phosphate binders',
      'Limit calcium-based binders to <1500 mg/day elemental calcium',
      'Non-calcium binders: sevelamer, lanthanum, ferric citrate',
      'Target PTH 2-9× upper limit of normal in CKD G3-G5D',
      'Use vitamin D analogs (calcitriol, paricalcitol) to lower PTH',
      'Cinacalcet for severe hyperparathyroidism (PTH >600 pg/mL) in dialysis',
      'Avoid hypercalcemia (calcium >10.5 mg/dL) and bisphosphonates in advanced CKD',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/ckd-mbd/',
    publicationYear: 2017,
  },

  // BLOOD PRESSURE MANAGEMENT IN CKD GUIDELINES
  {
    topic: 'Blood Pressure Management in Chronic Kidney Disease - KDIGO Guideline',
    keywords: ['hypertension ckd', 'blood pressure ckd', 'bp target ckd', 'ace inhibitor ckd', 'arb ckd', 'raas blockade', 'albuminuria hypertension'],
    system: 'Renal',
    guidelineSummary: 'The KDIGO guideline for blood pressure management in chronic kidney disease provides evidence-based recommendations for blood pressure targets and antihypertensive therapy in CKD. The guideline recommends lower blood pressure targets (<120/80 mmHg) for adults with CKD and albuminuria to slow kidney disease progression and reduce cardiovascular events. ACE inhibitors or ARBs are first-line agents for CKD with albuminuria due to their antiproteinuric and kidney-protective effects. The guideline emphasizes lifestyle modifications, home blood pressure monitoring, and individualized treatment based on albuminuria status.',
    strongRecommendations: [
      'We recommend targeting systolic blood pressure <120 mmHg in adults with CKD and albuminuria (UACR ≥30 mg/g) (Grade 1B)',
      'We recommend ACE inhibitors or ARBs as first-line antihypertensive therapy in adults with CKD, hypertension, and albuminuria (Grade 1A)',
      'We recommend not using ACE inhibitors and ARBs together in adults with CKD (Grade 1A)',
      'We recommend lifestyle modifications (sodium restriction, weight loss, exercise) for all adults with CKD and hypertension (Grade 1B)',
    ],
    weakRecommendations: [
      'We suggest targeting systolic blood pressure <120 mmHg in adults with CKD without albuminuria (UACR <30 mg/g) (Grade 2C)',
      'We suggest using home blood pressure monitoring to guide treatment in adults with CKD and hypertension (Grade 2C)',
      'We suggest adding calcium channel blockers or diuretics as second-line agents if blood pressure not controlled with ACE inhibitor/ARB (Grade 2C)',
      'We suggest continuing ACE inhibitor/ARB if serum creatinine increases <30% within 4 weeks of initiation (Grade 2C)',
      'We suggest discontinuing ACE inhibitor/ARB if serum creatinine increases >30% or potassium >5.5 mEq/L (Grade 2C)',
    ],
    qualityOfEvidence: 'Multiple levels: Grade 1 recommendations are based on High to Moderate quality evidence (A-B) from randomized controlled trials (SPRINT, ACCORD-BP); Grade 2 recommendations are based on Low quality evidence (C)',
    clinicalImplementation: 'Implementation of KDIGO blood pressure management guidelines requires systematic approach to BP targets and antihypertensive therapy. BLOOD PRESSURE TARGETS: CKD with albuminuria (UACR ≥30 mg/g): Target systolic BP <120 mmHg (based on SPRINT trial showing reduced cardiovascular events and slower CKD progression). CKD without albuminuria (UACR <30 mg/g): Consider target systolic BP <120 mmHg (weaker evidence, individualize based on patient factors). BLOOD PRESSURE MEASUREMENT: Use standardized technique: patient seated, back supported, feet flat, arm at heart level, after 5 minutes rest. Average 2-3 readings. Home BP monitoring preferred over office BP (eliminates white coat effect, provides more readings). LIFESTYLE MODIFICATIONS: Dietary sodium restriction (<2 g/day or <5 g salt/day), Weight loss if overweight (target BMI 20-25), Regular aerobic exercise (30 minutes most days), Limit alcohol (≤2 drinks/day for men, ≤1 drink/day for women), Smoking cessation. ANTIHYPERTENSIVE THERAPY: (1) FIRST-LINE: ACE INHIBITORS or ARBs for CKD with albuminuria. ACE inhibitors: Lisinopril (start 10 mg daily, titrate to 40 mg daily), Enalapril (start 5 mg daily, titrate to 20 mg BID), Ramipril (start 2.5 mg daily, titrate to 10 mg daily). ARBs: Losartan (start 50 mg daily, titrate to 100 mg daily), Irbesartan (start 150 mg daily, titrate to 300 mg daily), Telmisartan (start 40 mg daily, titrate to 80 mg daily). Titrate to maximum tolerated dose for optimal antiproteinuric effect. Monitor SCr and K+ at 2-4 weeks after initiation or dose increase. Acceptable SCr increase up to 30% from baseline. Hold if K+ >5.5 mEq/L or SCr increases >30%. DO NOT combine ACE inhibitor and ARB (increased risk of hyperkalemia, AKI, no additional benefit). (2) SECOND-LINE: Add calcium channel blocker (amlodipine 5-10 mg daily, nifedipine XL 30-90 mg daily) or thiazide-like diuretic (chlorthalidone 12.5-25 mg daily, indapamide 1.25-2.5 mg daily) if BP not controlled. Loop diuretic (furosemide 20-80 mg daily or BID) if eGFR <30 or volume overload. (3) THIRD-LINE: Add additional agents as needed (beta-blocker, alpha-blocker, vasodilator) to achieve BP target. MONITORING: Check BP at every visit. Home BP monitoring daily or several times per week. Check SCr, K+, and eGFR at baseline, 2-4 weeks after starting/changing RAAS blocker, then every 3-6 months. Monitor albuminuria every 3-6 months to assess treatment response.',
    keyPoints: [
      'Target systolic BP <120 mmHg in CKD with albuminuria',
      'ACE inhibitors or ARBs are first-line for CKD with albuminuria',
      'Do NOT combine ACE inhibitor and ARB (increased risk, no benefit)',
      'Lifestyle modifications: sodium restriction, weight loss, exercise',
      'Home BP monitoring preferred over office BP',
      'Monitor SCr and K+ at 2-4 weeks after starting RAAS blocker',
      'Acceptable SCr increase up to 30% from baseline',
      'Add calcium channel blocker or diuretic as second-line agent',
    ],
    kdigoUrl: 'https://kdigo.org/guidelines/blood-pressure-in-ckd/',
    publicationYear: 2021,
  },
];

/**
 * Search function to find relevant KDIGO guideline entries based on query
 */
export function searchKDIGOGuidelines(query: string): KDIGOGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = kdigoGuidelinesKnowledge.map(entry => {
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

  console.log(`KDIGO Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get KDIGO guideline by exact topic name
 */
export function getKDIGOGuidelineByTopic(topic: string): KDIGOGuidelineEntry | undefined {
  return kdigoGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all KDIGO guidelines for a specific system
 */
export function getKDIGOGuidelinesBySystem(system: string): KDIGOGuidelineEntry[] {
  return kdigoGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
