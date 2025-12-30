
/**
 * NIDDK (National Institute of Diabetes and Digestive and Kidney Diseases) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from NIDDK.
 * NIDDK provides evidence-based guidelines for kidney disease, diabetes, and digestive disorders.
 * 
 * INTEGRATION PHASE: NIDDK Guidelines (Phase 19 - Renal Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Strong = high confidence, Conditional = lower confidence)
 * - Quality of evidence (High, Moderate, Low, Very Low)
 * - Clinical implementation guidance
 * - NIDDK guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from NIDDK guidelines but presented
 * in an original format for medical education purposes.
 */

export interface NIDDKGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  strongRecommendations: string[];
  conditionalRecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  niddkUrl: string;
  publicationYear: number;
}

export const niddkGuidelinesKnowledge: NIDDKGuidelineEntry[] = [
  // CHRONIC KIDNEY DISEASE EDUCATION AND MANAGEMENT
  {
    topic: 'Chronic Kidney Disease (CKD) Education and Management - NIDDK Guideline',
    keywords: ['chronic kidney disease', 'ckd', 'kidney disease education', 'ckd management', 'kidney function', 'egfr', 'proteinuria', 'niddk ckd', 'kidney disease stages'],
    system: 'Renal',
    guidelineSummary: 'The NIDDK guideline for chronic kidney disease provides comprehensive education and management recommendations for patients and healthcare providers. CKD is defined as kidney damage or decreased kidney function (GFR <60 mL/min/1.73m²) for 3 or more months. The guideline emphasizes early detection through screening high-risk populations (diabetes, hypertension, family history), staging CKD by GFR and albuminuria, slowing progression with blood pressure control and RAAS blockade, managing complications (anemia, bone disease, metabolic acidosis), and preparing for kidney replacement therapy. Patient education about CKD, dietary modifications, and medication management are critical components.',
    strongRecommendations: [
      'Screen high-risk patients (diabetes, hypertension, cardiovascular disease, family history of kidney disease) for CKD with serum creatinine, eGFR, and urine albumin testing',
      'Use eGFR and urine albumin to stage CKD and guide prognosis and treatment decisions',
      'Control blood pressure to slow CKD progression, targeting <130/80 mmHg in most patients with CKD',
      'Use ACE inhibitors or ARBs for patients with CKD and albuminuria to reduce proteinuria and slow progression',
      'Educate patients about CKD, including causes, progression, complications, and treatment options',
      'Refer patients to nephrology when eGFR <30 mL/min/1.73m² or for rapidly declining kidney function',
      'Prepare patients for kidney replacement therapy (dialysis or transplantation) when eGFR approaches 20 mL/min/1.73m²',
    ],
    conditionalRecommendations: [
      'Consider dietary protein restriction (0.8 g/kg/day) in patients with CKD not on dialysis to slow progression',
      'Consider sodium restriction (<2 g/day) to help control blood pressure and reduce proteinuria',
      'Monitor and treat CKD complications including anemia, bone disease, metabolic acidosis, and hyperkalemia',
      'Consider SGLT2 inhibitors for patients with CKD and type 2 diabetes to slow progression',
      'Adjust medication doses based on kidney function to prevent drug accumulation and toxicity',
      'Encourage physical activity and weight management to improve overall health and slow CKD progression',
      'Provide psychosocial support and counseling for patients and families coping with CKD',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from large observational studies and randomized controlled trials; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of NIDDK CKD guidelines requires comprehensive patient-centered approach. SCREENING AND DIAGNOSIS: Screen high-risk patients annually with serum creatinine (calculate eGFR using CKD-EPI equation) and urine albumin-to-creatinine ratio (UACR). High-risk groups: diabetes mellitus, hypertension, cardiovascular disease, family history of kidney disease, age >60 years, obesity, smoking. CKD defined as: (1) eGFR <60 mL/min/1.73m² for ≥3 months, OR (2) Kidney damage (albuminuria, hematuria, structural abnormalities) for ≥3 months. STAGING: Stage 1 (eGFR ≥90 with kidney damage), Stage 2 (eGFR 60-89 with kidney damage), Stage 3a (eGFR 45-59), Stage 3b (eGFR 30-44), Stage 4 (eGFR 15-29), Stage 5 (eGFR <15 or dialysis). Albuminuria categories: A1 (<30 mg/g normal), A2 (30-300 mg/g moderately increased), A3 (>300 mg/g severely increased). SLOW PROGRESSION: Blood pressure control is critical. Target BP <130/80 mmHg (individualize based on age, comorbidities). Use ACE inhibitors (lisinopril 10-40 mg daily, enalapril 5-20 mg BID) or ARBs (losartan 50-100 mg daily, irbesartan 150-300 mg daily) for patients with albuminuria. Monitor serum creatinine and potassium 2-4 weeks after starting RAAS blockade. Acceptable creatinine increase up to 30% from baseline. Hold if potassium >5.5 mEq/L. SGLT2 inhibitors (dapagliflozin 10 mg daily, empagliflozin 10 mg daily) for CKD with type 2 diabetes. Glycemic control: target HbA1c ~7% in diabetes. DIETARY MODIFICATIONS: Protein restriction 0.8 g/kg/day (avoid high-protein diets). Sodium restriction <2 g/day (<5 g salt/day). Potassium restriction if hyperkalemia (avoid bananas, oranges, tomatoes, potatoes). Phosphorus restriction if hyperphosphatemia (limit dairy, processed foods). MANAGE COMPLICATIONS: Anemia: ESAs (epoetin, darbepoetin) if Hb <10 g/dL, target 10-11.5 g/dL, supplement iron. Bone disease: phosphate binders (calcium acetate, sevelamer), vitamin D analogs (calcitriol, paricalcitol), target PTH 2-9× upper limit of normal. Metabolic acidosis: oral sodium bicarbonate if serum HCO3 <22 mEq/L. Hyperkalemia: dietary restriction, diuretics, potassium binders (patiromer, sodium zirconium cyclosilicate). MEDICATION MANAGEMENT: Adjust doses for kidney function (antibiotics, antivirals, diabetes medications). Avoid nephrotoxins (NSAIDs, contrast dye, aminoglycosides). PATIENT EDUCATION: Explain CKD causes, stages, and prognosis. Discuss treatment options including lifestyle modifications, medications, and kidney replacement therapy. Provide resources for dietary counseling, medication management, and psychosocial support. NEPHROLOGY REFERRAL: Refer when eGFR <30, rapidly declining eGFR (>5 mL/min/1.73m² per year), persistent albuminuria (>300 mg/g), difficult-to-manage complications (anemia, bone disease, hyperkalemia), or patient preference. PREPARE FOR KIDNEY REPLACEMENT THERAPY: When eGFR <20, discuss dialysis options (hemodialysis, peritoneal dialysis) and kidney transplantation. Evaluate for transplant candidacy. Place vascular access (AV fistula preferred) when eGFR <20. Educate about dialysis modalities and home dialysis options.',
    keyPoints: [
      'Screen high-risk patients (diabetes, hypertension, family history) for CKD annually',
      'Stage CKD by eGFR and albuminuria to guide prognosis and treatment',
      'Control blood pressure <130/80 mmHg to slow CKD progression',
      'ACE inhibitors/ARBs for CKD with albuminuria to reduce proteinuria',
      'SGLT2 inhibitors for CKD with type 2 diabetes',
      'Dietary modifications: protein 0.8 g/kg/day, sodium <2 g/day',
      'Manage complications: anemia, bone disease, metabolic acidosis, hyperkalemia',
      'Refer to nephrology when eGFR <30 mL/min/1.73m²',
      'Prepare for kidney replacement therapy when eGFR <20 mL/min/1.73m²',
    ],
    niddkUrl: 'https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd',
    publicationYear: 2023,
  },

  // DIABETIC KIDNEY DISEASE
  {
    topic: 'Diabetic Kidney Disease (DKD) - NIDDK Guideline',
    keywords: ['diabetic kidney disease', 'dkd', 'diabetic nephropathy', 'diabetes kidney', 'diabetes ckd', 'albuminuria diabetes', 'microalbuminuria', 'macroalbuminuria', 'niddk diabetes kidney'],
    system: 'Renal',
    guidelineSummary: 'The NIDDK guideline for diabetic kidney disease provides evidence-based recommendations for prevention, early detection, and management of kidney disease in patients with diabetes. DKD is the leading cause of chronic kidney disease and end-stage renal disease in the United States. The guideline emphasizes annual screening for albuminuria and eGFR in all patients with diabetes, intensive glycemic control (HbA1c <7%), blood pressure control (<130/80 mmHg), use of ACE inhibitors or ARBs for albuminuria, SGLT2 inhibitors to slow progression, and lifestyle modifications including dietary sodium restriction and weight management. Early detection and aggressive management can prevent or delay progression to kidney failure.',
    strongRecommendations: [
      'Screen all patients with type 1 diabetes (starting 5 years after diagnosis) and type 2 diabetes (at diagnosis) annually for albuminuria and eGFR',
      'Target HbA1c <7% to prevent or delay onset of diabetic kidney disease',
      'Control blood pressure to <130/80 mmHg in patients with diabetes and kidney disease',
      'Use ACE inhibitors or ARBs for patients with diabetes and albuminuria (UACR ≥30 mg/g)',
      'Use SGLT2 inhibitors for patients with type 2 diabetes and CKD (eGFR ≥20) to slow kidney disease progression',
      'Educate patients about diabetic kidney disease risk factors, prevention, and treatment',
    ],
    conditionalRecommendations: [
      'Consider GLP-1 receptor agonists for patients with type 2 diabetes and CKD who have not achieved glycemic targets',
      'Consider finerenone (non-steroidal MRA) for patients with type 2 diabetes and CKD with albuminuria despite ACE inhibitor/ARB therapy',
      'Restrict dietary sodium to <2 g/day to help control blood pressure and reduce albuminuria',
      'Encourage weight loss in overweight or obese patients to improve glycemic control and reduce kidney disease risk',
      'Monitor for and treat cardiovascular disease risk factors (dyslipidemia, smoking) in patients with diabetic kidney disease',
      'Refer to nephrology when eGFR <30 mL/min/1.73m² or for rapidly declining kidney function',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High quality evidence from large randomized controlled trials (DCCT, UKPDS, CREDENCE, DAPA-CKD); Conditional recommendations are based on Moderate quality evidence',
    clinicalImplementation: 'Implementation of NIDDK diabetic kidney disease guidelines requires comprehensive diabetes and kidney care. SCREENING: Screen all patients with type 1 diabetes starting 5 years after diagnosis and all patients with type 2 diabetes at diagnosis. Annual screening includes: (1) Urine albumin-to-creatinine ratio (UACR) - spot urine sample, (2) Serum creatinine and eGFR calculation. DKD stages: Normoalbuminuria (UACR <30 mg/g), Microalbuminuria (UACR 30-300 mg/g), Macroalbuminuria (UACR >300 mg/g). GLYCEMIC CONTROL: Target HbA1c <7% for most patients (individualize based on age, comorbidities, hypoglycemia risk). Intensive glycemic control reduces risk of developing albuminuria by 30-40% and slows progression of existing kidney disease. Use diabetes medications with kidney benefits: SGLT2 inhibitors (first-line for type 2 diabetes with CKD), GLP-1 receptor agonists (if HbA1c not at target), Metformin (continue if eGFR ≥30, discontinue if eGFR <30). Avoid sulfonylureas (hypoglycemia risk) and thiazolidinediones (fluid retention) in advanced CKD. BLOOD PRESSURE CONTROL: Target BP <130/80 mmHg. ACE inhibitors or ARBs are first-line for patients with albuminuria. ACE inhibitors: Lisinopril (start 10 mg daily, titrate to 40 mg daily), Enalapril (start 5 mg daily, titrate to 20 mg BID), Ramipril (start 2.5 mg daily, titrate to 10 mg daily). ARBs: Losartan (start 50 mg daily, titrate to 100 mg daily), Irbesartan (start 150 mg daily, titrate to 300 mg daily), Telmisartan (start 40 mg daily, titrate to 80 mg daily). Titrate to maximum tolerated dose for optimal antiproteinuric effect. Monitor serum creatinine and potassium 2-4 weeks after initiation or dose increase. Do NOT combine ACE inhibitor and ARB (increased risk of hyperkalemia, AKI, no additional benefit). Add calcium channel blocker (amlodipine 5-10 mg daily) or diuretic (chlorthalidone 12.5-25 mg daily) as second-line. SGLT2 INHIBITORS: First-line for type 2 diabetes with CKD. Dapagliflozin 10 mg daily (eGFR ≥25), Empagliflozin 10 mg daily (eGFR ≥20), Canagliflozin 100 mg daily (eGFR ≥30). Benefits: reduce albuminuria, slow eGFR decline, reduce cardiovascular events and heart failure hospitalizations. Monitor for genital mycotic infections, volume depletion, euglycemic DKA (rare). ADDITIONAL THERAPIES: Finerenone (non-steroidal MRA) 10-20 mg daily for type 2 diabetes with albuminuria despite ACE inhibitor/ARB. Monitor potassium closely (hold if >5.5 mEq/L). GLP-1 receptor agonists (semaglutide, dulaglutide, liraglutide) if HbA1c not at target with metformin and SGLT2 inhibitor. LIFESTYLE MODIFICATIONS: Dietary sodium restriction <2 g/day, Weight loss if overweight (target BMI 20-25), Regular physical activity (150 minutes/week moderate-intensity exercise), Smoking cessation, Limit alcohol. MONITORING: Check eGFR and UACR annually (more frequently if rapidly declining or high-risk). Monitor HbA1c every 3 months. Check blood pressure at every visit. Screen for cardiovascular disease and retinopathy. NEPHROLOGY REFERRAL: Refer when eGFR <30, rapidly declining eGFR (>5 mL/min/1.73m² per year), persistent macroalbuminuria (>300 mg/g), or difficult-to-manage complications.',
    keyPoints: [
      'Screen all patients with diabetes annually for albuminuria and eGFR',
      'Target HbA1c <7% to prevent or delay diabetic kidney disease',
      'Control blood pressure <130/80 mmHg',
      'ACE inhibitors/ARBs for diabetes with albuminuria (UACR ≥30 mg/g)',
      'SGLT2 inhibitors are first-line for type 2 diabetes with CKD',
      'GLP-1 receptor agonists if HbA1c not at target',
      'Finerenone for albuminuria despite ACE inhibitor/ARB',
      'Lifestyle modifications: sodium restriction, weight loss, exercise',
      'Refer to nephrology when eGFR <30 mL/min/1.73m²',
    ],
    niddkUrl: 'https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease',
    publicationYear: 2023,
  },

  // KIDNEY STONES (NEPHROLITHIASIS)
  {
    topic: 'Kidney Stones (Nephrolithiasis) - NIDDK Guideline',
    keywords: ['kidney stones', 'nephrolithiasis', 'renal calculi', 'urolithiasis', 'calcium stones', 'uric acid stones', 'struvite stones', 'cystine stones', 'kidney stone prevention', 'niddk kidney stones'],
    system: 'Renal',
    guidelineSummary: 'The NIDDK guideline for kidney stones provides comprehensive recommendations for prevention, diagnosis, and management of nephrolithiasis. Kidney stones affect approximately 10% of the population and have a high recurrence rate (50% within 5-10 years). The guideline emphasizes increased fluid intake (goal urine output >2.5 L/day) as the cornerstone of prevention, dietary modifications based on stone composition (limit sodium, animal protein, oxalate), medical therapy for recurrent stone formers (thiazide diuretics for calcium stones, potassium citrate for uric acid stones, allopurinol for hyperuricosuria), and metabolic evaluation for high-risk patients. Acute management includes pain control, medical expulsive therapy for small stones, and urologic intervention for large or obstructing stones.',
    strongRecommendations: [
      'Increase fluid intake to achieve urine output >2.5 L/day to prevent kidney stone formation and recurrence',
      'Perform metabolic evaluation (24-hour urine collection) in patients with recurrent kidney stones or high-risk features',
      'Limit dietary sodium to <2 g/day to reduce urinary calcium excretion and stone risk',
      'Maintain normal dietary calcium intake (1000-1200 mg/day) - do NOT restrict calcium',
      'Use thiazide diuretics for patients with recurrent calcium stones and hypercalciuria',
      'Use potassium citrate for patients with recurrent uric acid or calcium stones and low urinary citrate',
    ],
    conditionalRecommendations: [
      'Consider limiting animal protein intake to reduce uric acid and calcium excretion',
      'Consider limiting dietary oxalate (spinach, nuts, chocolate, tea) in patients with calcium oxalate stones and hyperoxaluria',
      'Consider allopurinol for patients with recurrent uric acid stones and hyperuricosuria',
      'Consider medical expulsive therapy (alpha-blockers like tamsulosin) for small distal ureteral stones (5-10 mm)',
      'Refer to urology for stones >10 mm, obstructing stones with infection, or stones not passing with conservative management',
      'Encourage weight loss in overweight or obese patients to reduce stone risk',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and large observational studies; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of NIDDK kidney stone guidelines requires comprehensive prevention and management strategy. ACUTE MANAGEMENT: Pain control with NSAIDs (ketorolac 30 mg IV or ibuprofen 800 mg PO) or opioids (morphine, hydromorphone) if severe. Antiemetics (ondansetron 4-8 mg IV/PO) for nausea. Imaging: non-contrast CT abdomen/pelvis (gold standard) to confirm stone, assess size, location, and degree of obstruction. Medical expulsive therapy: tamsulosin 0.4 mg daily for 4 weeks for distal ureteral stones 5-10 mm to facilitate passage. Urologic intervention: Indications include stones >10 mm (unlikely to pass spontaneously), obstructing stones with infection (urosepsis - emergency), persistent pain despite analgesia, solitary kidney with obstruction, bilateral obstruction, renal insufficiency. Options: Extracorporeal shock wave lithotripsy (ESWL) for stones <20 mm, Ureteroscopy with laser lithotripsy for ureteral stones, Percutaneous nephrolithotomy (PCNL) for large kidney stones >20 mm. PREVENTION - FLUID INTAKE: Increase fluid intake to achieve urine output >2.5 L/day (approximately 3 L fluid intake/day). Distribute fluid intake throughout day and evening. Water is preferred; avoid sugary drinks and excessive caffeine. Monitor urine color (goal: light yellow). DIETARY MODIFICATIONS: Sodium restriction <2 g/day (<5 g salt/day) - reduces urinary calcium excretion. Normal calcium intake 1000-1200 mg/day - do NOT restrict calcium (low calcium diet increases oxalate absorption and stone risk). Limit animal protein (meat, poultry, fish) to 0.8-1.0 g/kg/day - reduces uric acid and calcium excretion. Limit oxalate-rich foods (spinach, rhubarb, nuts, chocolate, tea, beets) if calcium oxalate stones with hyperoxaluria. Increase fruits and vegetables (citrus fruits increase urinary citrate). METABOLIC EVALUATION: Indications for 24-hour urine collection: Recurrent stone formers (≥2 stones), First-time stone former with high-risk features (family history, young age <25 years, solitary kidney, GI disease, chronic diarrhea, osteoporosis), Occupational risk (pilots, military). Collect two 24-hour urine samples on usual diet. Measure: volume, pH, calcium, oxalate, uric acid, citrate, sodium, creatinine. MEDICAL THERAPY: Thiazide diuretics for hypercalciuria (urinary calcium >200 mg/day in women, >250 mg/day in men): Hydrochlorothiazide 25-50 mg daily or Chlorthalidone 25 mg daily. Monitor potassium (risk of hypokalemia). Potassium citrate for hypocitraturia (urinary citrate <320 mg/day) or uric acid stones: 10-20 mEq TID (30-60 mEq/day total). Increases urinary pH and citrate (inhibits stone formation). Allopurinol for hyperuricosuria (urinary uric acid >800 mg/day in men, >750 mg/day in women): 100-300 mg daily. Reduces uric acid production. STONE COMPOSITION: Calcium oxalate (most common 70-80%): Increase fluids, limit sodium, normal calcium, limit oxalate if hyperoxaluria, thiazide if hypercalciuria. Calcium phosphate (10-20%): Increase fluids, limit sodium, potassium citrate if low urinary citrate. Uric acid (5-10%): Increase fluids, limit animal protein, potassium citrate to alkalinize urine (target pH 6.5-7.0), allopurinol if hyperuricosuria. Struvite (infection stones, 10-15%): Treat underlying UTI, complete stone removal (stones harbor bacteria), long-term antibiotic suppression. Cystine (rare, 1-2%): Increase fluids (goal urine output >3 L/day), potassium citrate to alkalinize urine (target pH >7.0), thiol-binding drugs (tiopronin, penicillamine) if refractory. FOLLOW-UP: Repeat imaging (ultrasound or low-dose CT) at 6-12 months to assess for new stone formation. Repeat 24-hour urine collection at 3-6 months after starting medical therapy to assess response.',
    keyPoints: [
      'Increase fluid intake to achieve urine output >2.5 L/day',
      'Limit dietary sodium <2 g/day to reduce urinary calcium',
      'Maintain normal calcium intake 1000-1200 mg/day (do NOT restrict)',
      'Metabolic evaluation (24-hour urine) for recurrent stone formers',
      'Thiazide diuretics for recurrent calcium stones with hypercalciuria',
      'Potassium citrate for low urinary citrate or uric acid stones',
      'Allopurinol for hyperuricosuria',
      'Medical expulsive therapy (tamsulosin) for small distal ureteral stones',
      'Urologic intervention for stones >10 mm or obstructing stones with infection',
    ],
    niddkUrl: 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones',
    publicationYear: 2023,
  },

  // POLYCYSTIC KIDNEY DISEASE
  {
    topic: 'Polycystic Kidney Disease (PKD) - NIDDK Guideline',
    keywords: ['polycystic kidney disease', 'pkd', 'autosomal dominant pkd', 'adpkd', 'kidney cysts', 'polycystic kidneys', 'pkd1', 'pkd2', 'niddk pkd'],
    system: 'Renal',
    guidelineSummary: 'The NIDDK guideline for polycystic kidney disease provides evidence-based recommendations for diagnosis, monitoring, and management of PKD. Autosomal dominant PKD (ADPKD) is the most common inherited kidney disease, affecting 1 in 400-1000 people. The guideline emphasizes genetic counseling and family screening, blood pressure control (<110/75 mmHg in young patients with preserved kidney function), use of tolvaptan in select patients to slow cyst growth and kidney function decline, management of complications (hypertension, pain, infections, kidney stones), and preparation for kidney replacement therapy. Early diagnosis and aggressive blood pressure control can slow disease progression.',
    strongRecommendations: [
      'Diagnose ADPKD using ultrasound criteria (age-dependent number of cysts) or genetic testing in patients with family history',
      'Control blood pressure aggressively, targeting <110/75 mmHg in young patients (<50 years) with preserved kidney function',
      'Screen first-degree relatives of patients with ADPKD for kidney cysts and hypertension',
      'Provide genetic counseling to patients with ADPKD and their families',
      'Monitor kidney function (eGFR) and kidney size (imaging) regularly to assess disease progression',
    ],
    conditionalRecommendations: [
      'Consider tolvaptan (vasopressin V2 receptor antagonist) for adults with ADPKD at high risk of rapid progression (age <55 years, eGFR ≥25, evidence of rapid kidney growth)',
      'Consider ACE inhibitors or ARBs as first-line antihypertensive therapy in ADPKD',
      'Manage pain with conservative measures (heat, NSAIDs) and consider cyst aspiration or nephrectomy for refractory pain',
      'Treat cyst infections with lipophilic antibiotics (fluoroquinolones, trimethoprim-sulfamethoxazole) that penetrate cysts',
      'Screen for and manage intracranial aneurysms in high-risk patients (family history of aneurysm or subarachnoid hemorrhage)',
      'Encourage adequate hydration and avoid caffeine to potentially slow cyst growth',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from observational studies and expert consensus; Conditional recommendations are based on Moderate to Low quality evidence including the TEMPO trials for tolvaptan',
    clinicalImplementation: 'Implementation of NIDDK PKD guidelines requires comprehensive disease management. DIAGNOSIS: ADPKD diagnosed by ultrasound criteria (Ravine criteria): Age 15-39 years: ≥3 cysts (unilateral or bilateral), Age 40-59 years: ≥2 cysts in each kidney, Age ≥60 years: ≥4 cysts in each kidney. Genetic testing (PKD1, PKD2 genes) if ultrasound inconclusive or for young patients considering living kidney donation. PKD1 mutation (85% of cases): more severe, ESRD by age 50-60. PKD2 mutation (15% of cases): milder, ESRD by age 70-80. BLOOD PRESSURE CONTROL: Aggressive BP control is critical to slow progression. Target BP <110/75 mmHg in young patients (<50 years) with preserved kidney function (eGFR >60). Target BP <130/80 mmHg in older patients or those with reduced kidney function. ACE inhibitors or ARBs are first-line: Lisinopril 10-40 mg daily, Losartan 50-100 mg daily. Add additional agents (calcium channel blockers, diuretics, beta-blockers) as needed to achieve target. Monitor BP at home. TOLVAPTAN THERAPY: Vasopressin V2 receptor antagonist that slows cyst growth and kidney function decline. Indications: Adults 18-55 years with ADPKD at high risk of rapid progression (evidence of rapid kidney growth on imaging, declining eGFR, PKD1 mutation, early-onset hypertension, family history of early ESRD). Contraindications: eGFR <25, liver disease, inability to sense or respond to thirst. Dosing: Start 45 mg AM + 15 mg PM, titrate weekly to 60 mg AM + 30 mg PM, then 90 mg AM + 30 mg PM. Side effects: Polyuria, polydipsia, nocturia (due to aquaresis), hepatotoxicity (monitor LFTs monthly for 18 months, then every 3 months). Benefits: Slows eGFR decline by ~30% and reduces kidney volume growth. MANAGE COMPLICATIONS: Hypertension (present in 60% by age 35): Aggressive BP control as above. Pain (common, due to cyst enlargement, hemorrhage, infection, stones): Conservative management (heat, acetaminophen, short-term NSAIDs). Avoid chronic opioids. Consider cyst aspiration with sclerotherapy for large symptomatic cysts. Nephrectomy for refractory pain (last resort). Cyst infections (difficult to diagnose - fever, flank pain, no pyuria): Lipophilic antibiotics that penetrate cysts: Fluoroquinolones (ciprofloxacin 500 mg BID, levofloxacin 750 mg daily) for 4-6 weeks, Trimethoprim-sulfamethoxazole DS BID for 4-6 weeks. Kidney stones (20% of patients): Increase fluid intake, metabolic evaluation, medical therapy as per kidney stone guidelines. Hematuria (common, due to cyst rupture): Conservative management (rest, hydration), avoid anticoagulants if possible. Intracranial aneurysms (8-10% of patients): Screen with MRA in high-risk patients (family history of aneurysm or subarachnoid hemorrhage, high-risk occupation). Treat aneurysms >7 mm or symptomatic. LIFESTYLE MODIFICATIONS: Adequate hydration (goal urine output >3 L/day may slow cyst growth). Avoid caffeine (may stimulate cyst growth via cAMP). Maintain healthy weight and regular exercise. Avoid contact sports (risk of cyst rupture). MONITORING: Check BP at every visit and encourage home BP monitoring. Monitor eGFR every 6-12 months. Imaging (ultrasound or MRI) every 1-3 years to assess kidney size and cyst growth. Screen for extrarenal manifestations (liver cysts, cardiac valve abnormalities, hernias, diverticulosis). GENETIC COUNSELING AND FAMILY SCREENING: Counsel patients about 50% risk of transmission to offspring. Screen first-degree relatives starting at age 18-20 years with ultrasound. Discuss reproductive options (prenatal diagnosis, preimplantation genetic diagnosis). PREPARE FOR KIDNEY REPLACEMENT THERAPY: When eGFR <20, discuss dialysis and transplantation options. Evaluate for transplant candidacy. Consider native nephrectomy if massive kidneys causing symptoms or limiting space for transplant. Living donor transplantation is preferred (screen potential donors for PKD).',
    keyPoints: [
      'Diagnose ADPKD with ultrasound (age-dependent cyst criteria) or genetic testing',
      'Aggressive blood pressure control <110/75 mmHg in young patients',
      'Tolvaptan for high-risk patients to slow progression (age <55, eGFR ≥25)',
      'ACE inhibitors/ARBs are first-line antihypertensive therapy',
      'Manage complications: pain, cyst infections, kidney stones, hematuria',
      'Screen for intracranial aneurysms in high-risk patients',
      'Genetic counseling and family screening for first-degree relatives',
      'Adequate hydration and avoid caffeine',
      'Monitor eGFR every 6-12 months and imaging every 1-3 years',
    ],
    niddkUrl: 'https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease',
    publicationYear: 2023,
  },

  // GLOMERULAR DISEASES
  {
    topic: 'Glomerular Diseases - NIDDK Guideline',
    keywords: ['glomerular disease', 'glomerulonephritis', 'gn', 'nephrotic syndrome', 'nephritic syndrome', 'proteinuria', 'hematuria', 'glomerular disorders', 'niddk glomerular'],
    system: 'Renal',
    guidelineSummary: 'The NIDDK guideline for glomerular diseases provides comprehensive recommendations for diagnosis and management of glomerulonephritis and nephrotic syndrome. Glomerular diseases are a major cause of chronic kidney disease and kidney failure. The guideline emphasizes kidney biopsy for definitive diagnosis, classification by clinical syndrome (nephrotic vs nephritic), immunosuppressive therapy for specific glomerular diseases, supportive care with ACE inhibitors/ARBs and blood pressure control, management of complications (edema, hyperlipidemia, thrombosis), and monitoring for disease progression. Early diagnosis and appropriate treatment can prevent progression to kidney failure.',
    strongRecommendations: [
      'Perform kidney biopsy in adults with glomerular hematuria and proteinuria to establish diagnosis and guide treatment',
      'Use ACE inhibitors or ARBs for patients with glomerular disease and proteinuria to reduce proteinuria and slow progression',
      'Control blood pressure to <130/80 mmHg in patients with glomerular disease and proteinuria',
      'Treat edema in nephrotic syndrome with sodium restriction and diuretics (loop diuretics, thiazides)',
      'Use statins for hyperlipidemia in nephrotic syndrome to reduce cardiovascular risk',
    ],
    conditionalRecommendations: [
      'Consider immunosuppressive therapy (corticosteroids, cyclophosphamide, rituximab, calcineurin inhibitors) for specific glomerular diseases based on biopsy findings',
      'Consider anticoagulation in nephrotic syndrome with serum albumin <2.5 g/dL due to high thrombotic risk',
      'Monitor for and treat complications of immunosuppressive therapy (infections, bone disease, glucose intolerance)',
      'Refer to nephrology for all patients with glomerular disease for diagnosis and management',
      'Monitor proteinuria and kidney function regularly to assess treatment response and disease progression',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from observational studies and expert consensus; Conditional recommendations are based on Moderate to Low quality evidence from small randomized trials',
    clinicalImplementation: 'Implementation of NIDDK glomerular disease guidelines requires systematic approach. CLINICAL SYNDROMES: Nephrotic syndrome: Heavy proteinuria (>3.5 g/day), hypoalbuminemia (<3 g/dL), edema, hyperlipidemia. Causes: Minimal change disease, focal segmental glomerulosclerosis (FSGS), membranous nephropathy, diabetic nephropathy. Nephritic syndrome: Hematuria (dysmorphic RBCs, RBC casts), proteinuria (<3.5 g/day), hypertension, edema, acute kidney injury. Causes: IgA nephropathy, post-infectious glomerulonephritis, ANCA-associated vasculitis, lupus nephritis. DIAGNOSIS: Kidney biopsy is gold standard. Indications: Glomerular hematuria (dysmorphic RBCs, RBC casts) with proteinuria, Nephrotic syndrome in adults, Rapidly progressive glomerulonephritis (rapid decline in kidney function with active urine sediment), Systemic disease with kidney involvement (lupus, vasculitis). Biopsy provides: Light microscopy (histologic pattern), Immunofluorescence (immune deposits), Electron microscopy (ultrastructural changes). SUPPORTIVE CARE (ALL GLOMERULAR DISEASES): ACE inhibitors or ARBs to reduce proteinuria: Lisinopril 10-40 mg daily, Losartan 50-100 mg daily. Titrate to maximum tolerated dose. Target BP <130/80 mmHg if proteinuria present. Dietary sodium restriction <2 g/day. Edema management: Loop diuretics (furosemide 20-80 mg daily or BID, bumetanide 1-2 mg daily), Thiazide diuretics (metolazone 2.5-10 mg daily) for refractory edema. Hyperlipidemia: Statins (atorvastatin 10-80 mg daily, rosuvastatin 5-40 mg daily) for LDL >100 mg/dL. Anticoagulation: Consider in nephrotic syndrome with albumin <2.5 g/dL (high thrombotic risk - DVT, PE, renal vein thrombosis). Options: Warfarin (target INR 2-3), DOACs (apixaban, rivaroxaban). DISEASE-SPECIFIC TREATMENT: Minimal change disease: Prednisone 1 mg/kg/day (max 80 mg) or 2 mg/kg every other day for 4-16 weeks, then taper. Most achieve remission within 8 weeks. For relapses: Repeat corticosteroids or use steroid-sparing agents (cyclophosphamide, calcineurin inhibitors). FSGS: Prednisone 1 mg/kg/day for 4-16 weeks. If no response, consider calcineurin inhibitors (tacrolimus 0.05-0.1 mg/kg/day, cyclosporine 3-5 mg/kg/day). Membranous nephropathy: If nephrotic syndrome: Cyclophosphamide (2 mg/kg/day for 6 months) alternating with corticosteroids (Ponticelli regimen), OR Tacrolimus/cyclosporine with low-dose corticosteroids for 6 months, OR Rituximab (375 mg/m² weekly × 4 doses or 1000 mg × 2 doses). IgA nephropathy: ACE inhibitor/ARB first-line. If proteinuria >1 g/day despite 3-6 months of optimal supportive care: Corticosteroids (methylprednisolone 0.6-0.8 mg/kg/day, taper over 6-8 months). Monitor for steroid side effects. ANCA-associated vasculitis: Induction: Cyclophosphamide (15 mg/kg IV every 2-3 weeks for 3-6 months) OR Rituximab (375 mg/m² weekly × 4 doses) PLUS Corticosteroids (methylprednisolone 500-1000 mg IV × 3 days, then prednisone 1 mg/kg/day, taper). Maintenance: Azathioprine (2 mg/kg/day) or rituximab for 18-24 months. Lupus nephritis: Induction (Class III/IV): Mycophenolate mofetil (2-3 g/day) OR Cyclophosphamide (500 mg IV every 2 weeks × 6 doses) PLUS Corticosteroids (methylprednisolone 500-1000 mg IV × 3 days, then prednisone 0.5-1 mg/kg/day, taper). Maintenance: Mycophenolate mofetil (1-2 g/day) or azathioprine (2 mg/kg/day) for ≥3 years. MONITORING: Proteinuria (UPCR) and serum creatinine/eGFR at baseline and regularly during treatment. Assess treatment response: Complete remission (proteinuria <0.3 g/day), Partial remission (proteinuria <3.5 g/day with ≥50% reduction from baseline). Monitor for complications of immunosuppression: Infections (PCP prophylaxis with trimethoprim-sulfamethoxazole if on high-dose corticosteroids or cyclophosphamide), Bone disease (calcium, vitamin D, bisphosphonates for osteoporosis prevention), Glucose intolerance (monitor blood glucose on corticosteroids). NEPHROLOGY REFERRAL: Refer all patients with suspected glomerular disease to nephrology for kidney biopsy, diagnosis, and management.',
    keyPoints: [
      'Kidney biopsy for definitive diagnosis of glomerular disease',
      'ACE inhibitors/ARBs and BP control <130/80 mmHg for all glomerular diseases',
      'Nephrotic syndrome: heavy proteinuria, hypoalbuminemia, edema, hyperlipidemia',
      'Nephritic syndrome: hematuria, proteinuria, hypertension, AKI',
      'Minimal change disease: corticosteroids (prednisone 1 mg/kg/day)',
      'FSGS: corticosteroids, consider calcineurin inhibitors if no response',
      'Membranous nephropathy: cyclophosphamide or calcineurin inhibitors or rituximab',
      'IgA nephropathy: ACE inhibitor/ARB, corticosteroids if proteinuria >1 g/day',
      'ANCA vasculitis: cyclophosphamide or rituximab plus corticosteroids',
      'Lupus nephritis: mycophenolate or cyclophosphamide plus corticosteroids',
    ],
    niddkUrl: 'https://www.niddk.nih.gov/health-information/kidney-disease/glomerular-diseases',
    publicationYear: 2023,
  },

  // HEMODIALYSIS
  {
    topic: 'Hemodialysis - NIDDK Guideline',
    keywords: ['hemodialysis', 'dialysis', 'hd', 'kidney dialysis', 'renal replacement therapy', 'esrd', 'end stage renal disease', 'vascular access', 'av fistula', 'niddk hemodialysis'],
    system: 'Renal',
    guidelineSummary: 'The NIDDK guideline for hemodialysis provides comprehensive recommendations for patients with end-stage renal disease requiring kidney replacement therapy. Hemodialysis is the most common form of dialysis in the United States. The guideline emphasizes early vascular access placement (AV fistula preferred, placed when eGFR <20), adequate dialysis dose (Kt/V ≥1.2), management of dialysis complications (hypotension, cramping, infection), dietary modifications (fluid restriction, potassium restriction, phosphorus restriction), medication management, and preparation for kidney transplantation. Patient education about dialysis options, home hemodialysis, and self-care is critical for optimal outcomes.',
    strongRecommendations: [
      'Place vascular access (AV fistula preferred) when eGFR <20 mL/min/1.73m² in preparation for hemodialysis',
      'Initiate hemodialysis when eGFR <15 mL/min/1.73m² with uremic symptoms or complications',
      'Provide adequate dialysis dose with Kt/V ≥1.2 per treatment (typically 3-4 hours, 3 times per week)',
      'Use AV fistula as preferred vascular access (lower infection and thrombosis risk compared to catheter or graft)',
      'Educate patients about hemodialysis procedure, vascular access care, dietary restrictions, and medication management',
      'Evaluate all hemodialysis patients for kidney transplantation candidacy',
    ],
    conditionalRecommendations: [
      'Consider home hemodialysis for motivated patients with adequate support and training',
      'Restrict fluid intake to limit interdialytic weight gain to <5% of dry weight',
      'Restrict dietary potassium (2-3 g/day) to prevent hyperkalemia',
      'Restrict dietary phosphorus (800-1000 mg/day) and use phosphate binders to control serum phosphorus',
      'Use erythropoiesis-stimulating agents (ESAs) to maintain hemoglobin 10-11.5 g/dL',
      'Monitor and treat mineral bone disease with phosphate binders, vitamin D analogs, and calcimimetics',
      'Screen for and manage cardiovascular disease risk factors (hypertension, dyslipidemia, diabetes)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from observational studies and expert consensus; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of NIDDK hemodialysis guidelines requires comprehensive patient care. VASCULAR ACCESS: AV fistula (preferred): Created surgically by connecting artery to vein (usually radial artery to cephalic vein in forearm). Advantages: Lower infection risk, longer lifespan, better blood flow. Disadvantages: Requires 2-6 months to mature before use. Place when eGFR <20 mL/min/1.73m². AV graft (second choice): Synthetic tube connecting artery to vein. Advantages: Matures faster (2-4 weeks). Disadvantages: Higher infection and thrombosis risk than fistula. Central venous catheter (last resort): Tunneled catheter in internal jugular or femoral vein. Advantages: Immediate use. Disadvantages: Highest infection risk (bacteremia, endocarditis), thrombosis, central vein stenosis. Use only temporarily while fistula/graft matures. Vascular access care: Avoid blood pressure measurements, IV access, or blood draws in access arm. Check for thrill (vibration) and bruit (whooshing sound) daily. Report signs of infection (redness, warmth, drainage) or clotting (loss of thrill/bruit) immediately. HEMODIALYSIS PRESCRIPTION: Frequency: Typically 3 times per week (Monday-Wednesday-Friday or Tuesday-Thursday-Saturday). Duration: 3-4 hours per session. Dialysis adequacy: Kt/V ≥1.2 (K = dialyzer clearance, t = time, V = volume of distribution). Measured monthly. Dry weight: Target weight after dialysis when euvolemic. Adjusted based on blood pressure, edema, symptoms. Ultrafiltration: Fluid removal during dialysis to achieve dry weight. Rate typically 0.5-1.0 L/hour. DIETARY MODIFICATIONS: Fluid restriction: Limit to 1-1.5 L/day (32-48 oz/day) to prevent excessive interdialytic weight gain. Goal: <5% dry weight gain between sessions. Monitor urine output (decreases over time on dialysis). Sodium restriction: <2 g/day to reduce thirst and fluid retention. Potassium restriction: 2-3 g/day (2000-3000 mg/day). Avoid high-potassium foods (bananas, oranges, tomatoes, potatoes, spinach, avocados). Check serum potassium before each dialysis session. Phosphorus restriction: 800-1000 mg/day. Limit dairy products, processed foods, colas, nuts. Use phosphate binders with meals (calcium acetate, sevelamer, lanthanum, ferric citrate). Protein intake: 1.2 g/kg/day (higher than non-dialysis CKD due to protein loss during dialysis). MEDICATION MANAGEMENT: Phosphate binders: Take with meals. Calcium acetate (667 mg elemental calcium, 1-2 tablets with meals), Sevelamer carbonate (800 mg, 1-2 tablets with meals), Lanthanum carbonate (500-1000 mg with meals), Ferric citrate (210 mg, 2 tablets with meals). Vitamin D analogs: Calcitriol (0.25-0.5 mcg daily), Paricalcitol (1-2 mcg daily or 2-4 mcg 3× per week with dialysis). Monitor calcium and phosphorus. Calcimimetics: Cinacalcet (30-180 mg daily) for severe hyperparathyroidism (PTH >600 pg/mL). Monitor for hypocalcemia. Erythropoiesis-stimulating agents (ESAs): Epoetin alfa (50-100 units/kg SC 3× per week), Darbepoetin alfa (0.45 mcg/kg SC weekly or 0.75 mcg/kg every 2 weeks). Target hemoglobin 10-11.5 g/dL. Supplement iron (IV iron preferred). Antihypertensives: Continue home blood pressure medications. May need to hold on dialysis days if hypotension-prone. Target BP <140/90 mmHg pre-dialysis, <130/80 mmHg post-dialysis. MANAGE DIALYSIS COMPLICATIONS: Intradialytic hypotension: Lower ultrafiltration rate, reduce dry weight, hold antihypertensives on dialysis days, midodrine 5-10 mg before dialysis. Muscle cramps: Reduce ultrafiltration rate, adjust dry weight, quinine sulfate 260 mg at bedtime. Infection: Catheter-related bloodstream infection (CRBSI): Fever, chills during or after dialysis. Treat with IV antibiotics (vancomycin + gentamicin or ceftazidime) through catheter. Remove catheter if persistent bacteremia. AV access infection: Redness, warmth, drainage. Treat with antibiotics (vancomycin + ceftazidime). May require surgical drainage or access removal. Thrombosis: AV fistula/graft clotting. Loss of thrill/bruit. Urgent thrombectomy or thrombolysis within 48 hours. Catheter malfunction: Poor blood flow. Attempt thrombolysis with tPA. Replace catheter if unsuccessful. PATIENT EDUCATION: Explain hemodialysis procedure, schedule, and what to expect. Teach vascular access care and monitoring. Provide dietary counseling (fluid, sodium, potassium, phosphorus restrictions). Medication adherence and timing (some medications dialyzed off). Recognize and report complications (hypotension, cramping, infection, access problems). KIDNEY TRANSPLANTATION: Evaluate all suitable patients for transplant candidacy. Living donor transplantation is preferred (shorter wait time, better outcomes). Continue dialysis while on transplant waiting list. Maintain vascular access after transplant (may need dialysis if graft fails).',
    keyPoints: [
      'Place AV fistula when eGFR <20 mL/min/1.73m² (preferred vascular access)',
      'Initiate hemodialysis when eGFR <15 with uremic symptoms',
      'Adequate dialysis dose: Kt/V ≥1.2, typically 3-4 hours, 3 times per week',
      'Fluid restriction to limit interdialytic weight gain <5% dry weight',
      'Dietary restrictions: potassium 2-3 g/day, phosphorus 800-1000 mg/day',
      'Phosphate binders with meals to control serum phosphorus',
      'ESAs to maintain hemoglobin 10-11.5 g/dL',
      'Vascular access care: check thrill/bruit daily, avoid BP/IV in access arm',
      'Evaluate all patients for kidney transplantation',
    ],
    niddkUrl: 'https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis',
    publicationYear: 2023,
  },
];

/**
 * Search function to find relevant NIDDK guideline entries based on query
 */
export function searchNIDDKGuidelines(query: string): NIDDKGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = niddkGuidelinesKnowledge.map(entry => {
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

  console.log(`NIDDK Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get NIDDK guideline by exact topic name
 */
export function getNIDDKGuidelineByTopic(topic: string): NIDDKGuidelineEntry | undefined {
  return niddkGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all NIDDK guidelines for a specific system
 */
export function getNIDDKGuidelinesBySystem(system: string): NIDDKGuidelineEntry[] {
  return niddkGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
