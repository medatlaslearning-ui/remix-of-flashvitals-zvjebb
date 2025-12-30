
/**
 * ADA (American Diabetes Association) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American Diabetes Association.
 * ADA provides evidence-based guidelines for diabetes prevention, diagnosis, and management.
 * 
 * INTEGRATION PHASE: ADA Guidelines (Phase 21 - Endocrine Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (A = Strong, B = Moderate, C = Weak, E = Expert Opinion)
 * - Quality of evidence (High, Moderate, Low)
 * - Clinical implementation guidance
 * - ADA guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from ADA guidelines but presented
 * in an original format for medical education purposes.
 */

export interface ADAGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  levelARecommendations: string[];
  levelBRecommendations: string[];
  levelCRecommendations: string[];
  levelERecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  adaUrl: string;
  publicationYear: number;
}

export const adaGuidelinesKnowledge: ADAGuidelineEntry[] = [
  // TYPE 2 DIABETES MANAGEMENT
  {
    topic: 'Type 2 Diabetes Management - ADA Guideline',
    keywords: ['type 2 diabetes', 't2dm', 'diabetes mellitus type 2', 'diabetes management', 'glycemic control', 'ada diabetes', 'diabetes treatment', 'metformin', 'insulin'],
    system: 'Endocrine',
    guidelineSummary: 'The ADA guideline for type 2 diabetes management provides comprehensive evidence-based recommendations for glycemic control, cardiovascular risk reduction, and prevention of complications. The guideline emphasizes individualized HbA1c targets (generally <7% for most adults), lifestyle modifications (medical nutrition therapy, physical activity, weight management), and pharmacotherapy selection based on patient-specific factors including ASCVD, heart failure, CKD, and hypoglycemia risk. Metformin is first-line therapy. SGLT2 inhibitors and GLP-1 receptor agonists are recommended for patients with ASCVD, heart failure, or CKD. The guideline also addresses screening for complications, blood pressure and lipid management, and patient education.',
    levelARecommendations: [
      'Metformin is the preferred initial pharmacologic agent for type 2 diabetes (Level A)',
      'For patients with type 2 diabetes and established ASCVD or indicators of high ASCVD risk, a GLP-1 receptor agonist or SGLT2 inhibitor with demonstrated cardiovascular benefit is recommended (Level A)',
      'For patients with type 2 diabetes and heart failure (especially HFrEF), an SGLT2 inhibitor with proven benefit in heart failure is recommended (Level A)',
      'For patients with type 2 diabetes and CKD (eGFR ≥20), an SGLT2 inhibitor with evidence of reducing CKD progression is recommended (Level A)',
      'Target HbA1c <7% for most nonpregnant adults to reduce microvascular complications (Level A)',
      'Screen for diabetic retinopathy at diagnosis and at least annually thereafter (Level A)',
      'Screen for diabetic kidney disease with urine albumin and eGFR at diagnosis and at least annually (Level A)',
      'Use ACE inhibitors or ARBs for patients with diabetes, hypertension, and albuminuria (Level A)',
      'Use statins for primary prevention in adults with diabetes aged 40-75 years (Level A)',
    ],
    levelBRecommendations: [
      'Consider more stringent HbA1c target (<6.5%) for select patients if achievable without significant hypoglycemia or adverse effects (Level B)',
      'Consider less stringent HbA1c target (<8%) for patients with limited life expectancy, advanced complications, or extensive comorbidities (Level B)',
      'For patients with type 2 diabetes inadequately controlled on metformin, add a second agent based on patient-specific considerations (ASCVD, heart failure, CKD, hypoglycemia risk, weight, cost) (Level B)',
      'GLP-1 receptor agonists are preferred over insulin when possible due to lower hypoglycemia risk and weight benefits (Level B)',
      'For patients requiring insulin, basal insulin is preferred initial insulin regimen (Level B)',
      'Target blood pressure <130/80 mmHg for most patients with diabetes (Level B)',
      'Aspirin 75-162 mg daily for secondary prevention in patients with diabetes and ASCVD (Level B)',
      'Screen for diabetic neuropathy at diagnosis and at least annually with comprehensive foot examination (Level B)',
    ],
    levelCRecommendations: [
      'Consider aspirin 75-162 mg daily for primary prevention in patients with diabetes at increased cardiovascular risk after comprehensive discussion of benefits and risks (Level C)',
      'Consider DPP-4 inhibitors, thiazolidinediones, or sulfonylureas as alternative second-line agents when GLP-1 RA or SGLT2 inhibitor not appropriate (Level C)',
      'Consider combination therapy with basal insulin and GLP-1 RA for patients requiring intensification beyond basal insulin (Level C)',
      'Consider continuous glucose monitoring (CGM) for patients on intensive insulin regimens (Level C)',
      'Medical nutrition therapy by registered dietitian is recommended for all patients with diabetes (Level C)',
      'Recommend at least 150 minutes per week of moderate-intensity aerobic physical activity (Level C)',
    ],
    levelERecommendations: [
      'Diabetes self-management education and support (DSMES) should be offered to all patients at diagnosis and ongoing as needed (Level E)',
      'Assess psychosocial issues (depression, diabetes distress, anxiety, eating disorders) and provide appropriate referrals (Level E)',
      'Provide smoking cessation counseling and treatment for all patients who smoke (Level E)',
      'Immunizations (influenza annually, pneumococcal, hepatitis B) should be administered according to age-appropriate guidelines (Level E)',
    ],
    qualityOfEvidence: 'Multiple levels: Level A recommendations are based on High quality evidence from large randomized controlled trials (UKPDS, ACCORD, ADVANCE, EMPA-REG, LEADER, CANVAS, DECLARE-TIMI, CREDENCE, DAPA-CKD); Level B recommendations are based on Moderate quality evidence; Level C and E recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of ADA type 2 diabetes guidelines requires comprehensive, patient-centered approach. DIAGNOSIS: Type 2 diabetes diagnosed by: (1) HbA1c ≥6.5%, OR (2) Fasting plasma glucose ≥126 mg/dL, OR (3) 2-hour plasma glucose ≥200 mg/dL during OGTT, OR (4) Random plasma glucose ≥200 mg/dL with classic symptoms. Confirm with repeat testing unless unequivocal hyperglycemia. GLYCEMIC TARGETS: HbA1c <7% for most nonpregnant adults (reduces microvascular complications). More stringent target (<6.5%) for select patients: short disease duration, long life expectancy, no significant CVD, if achievable without significant hypoglycemia. Less stringent target (<8%) for: limited life expectancy, advanced complications, extensive comorbidities, long-standing diabetes difficult to control, hypoglycemia unawareness. Individualize targets based on patient factors. LIFESTYLE MODIFICATIONS: Medical Nutrition Therapy (MNT): Individualized meal planning by registered dietitian. Emphasize vegetables, fruits, whole grains, legumes, low-fat dairy, lean proteins. Limit refined carbohydrates, added sugars, saturated fats. Carbohydrate counting or plate method for meal planning. Weight loss of 5-10% for overweight/obese patients improves glycemic control. Physical Activity: At least 150 minutes/week moderate-intensity aerobic activity (brisk walking, cycling, swimming) spread over at least 3 days/week. Resistance training 2-3 times/week. Reduce sedentary time. Weight Management: Intensive lifestyle intervention (diet, physical activity, behavioral therapy) for weight loss. Consider weight loss medications (GLP-1 RA, orlistat) or metabolic surgery for BMI ≥35 with inadequate weight loss with lifestyle alone. PHARMACOTHERAPY: (1) FIRST-LINE: Metformin 500-2000 mg daily (start 500 mg daily or BID, titrate every 1-2 weeks). Take with meals to reduce GI side effects. Contraindications: eGFR <30, metabolic acidosis. Benefits: lowers HbA1c 1-2%, weight neutral, low hypoglycemia risk, inexpensive. (2) SECOND-LINE (add to metformin): Patient-Centered Selection: ASCVD or high ASCVD risk: GLP-1 RA (semaglutide, dulaglutide, liraglutide) or SGLT2 inhibitor (empagliflozin, canagliflozin, dapagliflozin) with proven CV benefit. Heart Failure (especially HFrEF): SGLT2 inhibitor (empagliflozin, dapagliflozin, canagliflozin). CKD (eGFR ≥20): SGLT2 inhibitor (empagliflozin, canagliflozin, dapagliflozin). Weight loss priority: GLP-1 RA (semaglutide most effective). Hypoglycemia risk concern: GLP-1 RA, SGLT2 inhibitor, DPP-4 inhibitor (avoid sulfonylureas, insulin). Cost concern: Sulfonylureas (glipizide, glimepiride), thiazolidinediones (pioglitazone). GLP-1 RECEPTOR AGONISTS: Semaglutide 0.25 mg SC weekly × 4 weeks, then 0.5 mg weekly (can increase to 1 mg weekly), Dulaglutide 0.75 mg SC weekly (can increase to 1.5 mg weekly), Liraglutide 0.6 mg SC daily × 1 week, then 1.2 mg daily (can increase to 1.8 mg daily). Benefits: lower HbA1c 1-1.5%, weight loss 2-5 kg, reduce CV events and mortality (LEADER, SUSTAIN-6, REWIND), low hypoglycemia risk. Side effects: nausea (transient), diarrhea, pancreatitis (rare), contraindicated in personal/family history of medullary thyroid cancer or MEN2. SGLT2 INHIBITORS: Empagliflozin 10 mg daily (can increase to 25 mg), Canagliflozin 100 mg daily (can increase to 300 mg), Dapagliflozin 5 mg daily (can increase to 10 mg). Benefits: lower HbA1c 0.5-1%, weight loss 2-3 kg, reduce CV events, heart failure hospitalizations, CKD progression (EMPA-REG, CANVAS, DECLARE-TIMI, CREDENCE, DAPA-CKD), BP reduction. Side effects: genital mycotic infections, UTI, volume depletion, DKA (rare), avoid if eGFR <20. DPP-4 INHIBITORS: Sitagliptin 100 mg daily, Linagliptin 5 mg daily, Saxagliptin 5 mg daily. Benefits: lower HbA1c 0.5-0.8%, weight neutral, low hypoglycemia risk, well tolerated. Neutral CV effects. SULFONYLUREAS: Glipizide 5-20 mg daily or BID, Glimepiride 1-8 mg daily. Benefits: lower HbA1c 1-2%, inexpensive. Side effects: hypoglycemia, weight gain. THIAZOLIDINEDIONES: Pioglitazone 15-45 mg daily. Benefits: lower HbA1c 0.5-1.4%, improve insulin sensitivity. Side effects: weight gain, edema, heart failure exacerbation (contraindicated in NYHA Class III-IV HF), fracture risk, bladder cancer risk. (3) INSULIN THERAPY: Indications: HbA1c >10%, glucose >300 mg/dL with symptoms, inadequate control despite oral agents. Basal Insulin (preferred initial regimen): Glargine U-100 (10 units SC daily at bedtime, titrate by 2 units every 3 days to achieve fasting glucose 80-130 mg/dL), Detemir (10 units SC daily or BID), Degludec (10 units SC daily). Benefits: effective glucose lowering, flexible dosing. Side effects: hypoglycemia, weight gain. Intensification: If HbA1c not at goal with basal insulin, add: GLP-1 RA (preferred - reduces hypoglycemia and weight gain), OR Prandial insulin (rapid-acting: lispro, aspart, glulisine) before largest meal, then expand to other meals as needed. Premixed Insulin: 70/30 (70% NPH, 30% regular) or 75/25 (75% insulin lispro protamine, 25% lispro) BID before breakfast and dinner. Less flexible but simpler regimen. MONITORING: HbA1c every 3 months if not at goal or therapy changed, every 6 months if at goal and stable. Self-monitoring blood glucose (SMBG): Before meals and bedtime for patients on insulin or medications causing hypoglycemia. Continuous glucose monitoring (CGM) for patients on intensive insulin regimens. COMPLICATIONS SCREENING: Diabetic Retinopathy: Dilated eye exam at diagnosis, then annually. Diabetic Kidney Disease: Urine albumin-to-creatinine ratio (UACR) and eGFR at diagnosis, then annually. Diabetic Neuropathy: Comprehensive foot exam (10-g monofilament, vibration, ankle reflexes) at diagnosis, then annually. Screen for symptoms of peripheral neuropathy (numbness, tingling, pain) and autonomic neuropathy (gastroparesis, erectile dysfunction, orthostatic hypotension). CARDIOVASCULAR RISK MANAGEMENT: Blood Pressure: Target <130/80 mmHg for most patients. ACE inhibitor or ARB first-line for hypertension with albuminuria. Lipids: Statin therapy for primary prevention in adults 40-75 years (moderate-intensity: atorvastatin 10-20 mg or rosuvastatin 5-10 mg daily). High-intensity statin (atorvastatin 40-80 mg or rosuvastatin 20-40 mg) for patients with ASCVD or age >75 years. Target LDL <70 mg/dL for ASCVD. Antiplatelet Therapy: Aspirin 75-162 mg daily for secondary prevention (established ASCVD). Consider aspirin for primary prevention in high-risk patients after discussion of benefits/risks. PATIENT EDUCATION: Diabetes Self-Management Education and Support (DSMES) at diagnosis and ongoing. Topics: glucose monitoring, medication administration, nutrition, physical activity, hypoglycemia recognition and treatment, sick day management, foot care. Hypoglycemia Treatment: 15-20 g fast-acting carbohydrate (4 oz juice, 3-4 glucose tablets, 1 tablespoon honey), recheck glucose in 15 minutes, repeat if still <70 mg/dL. Glucagon for severe hypoglycemia. PSYCHOSOCIAL CARE: Screen for depression (PHQ-2, PHQ-9), diabetes distress, anxiety, eating disorders. Provide referrals to mental health professionals as needed. IMMUNIZATIONS: Influenza vaccine annually. Pneumococcal vaccine (PPSV23 and PCV13) per age-appropriate guidelines. Hepatitis B vaccine series for unvaccinated adults.',
    keyPoints: [
      'Metformin is first-line pharmacotherapy for type 2 diabetes',
      'Target HbA1c <7% for most adults (individualize based on patient factors)',
      'GLP-1 RA or SGLT2 inhibitor for patients with ASCVD, heart failure, or CKD',
      'SGLT2 inhibitor preferred for heart failure (especially HFrEF) or CKD',
      'Lifestyle modifications: MNT, 150 min/week physical activity, weight loss',
      'Screen for complications: retinopathy, nephropathy, neuropathy annually',
      'BP target <130/80 mmHg, use ACE inhibitor/ARB for albuminuria',
      'Statin for primary prevention in adults 40-75 years',
      'Diabetes self-management education and support (DSMES) for all patients',
    ],
    adaUrl: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    publicationYear: 2024,
  },

  // TYPE 1 DIABETES MANAGEMENT
  {
    topic: 'Type 1 Diabetes Management - ADA Guideline',
    keywords: ['type 1 diabetes', 't1dm', 'diabetes mellitus type 1', 'insulin therapy', 'basal bolus', 'insulin pump', 'continuous glucose monitoring', 'cgm', 'ada type 1'],
    system: 'Endocrine',
    guidelineSummary: 'The ADA guideline for type 1 diabetes management provides evidence-based recommendations for insulin therapy, glucose monitoring, and prevention of complications. Type 1 diabetes requires lifelong insulin therapy with multiple daily injections (MDI) or continuous subcutaneous insulin infusion (insulin pump). The guideline recommends HbA1c target <7% for most adults, continuous glucose monitoring (CGM) for all patients on intensive insulin therapy, and comprehensive diabetes self-management education. Insulin regimens include basal-bolus therapy with rapid-acting insulin before meals and long-acting basal insulin. Insulin pump therapy and automated insulin delivery systems offer improved glycemic control with reduced hypoglycemia risk.',
    levelARecommendations: [
      'Multiple daily injections (MDI) of insulin or continuous subcutaneous insulin infusion (CSII/insulin pump) is required for type 1 diabetes (Level A)',
      'Target HbA1c <7% for most nonpregnant adults with type 1 diabetes to reduce microvascular complications (Level A)',
      'Continuous glucose monitoring (CGM) is recommended for all children, adolescents, and adults with type 1 diabetes (Level A)',
      'Basal-bolus insulin regimen with rapid-acting insulin analogs before meals and long-acting basal insulin is recommended (Level A)',
      'Insulin pump therapy should be offered to adults with type 1 diabetes who are capable of using the device safely (Level A)',
      'Screen for diabetic retinopathy within 5 years of diagnosis and at least annually thereafter (Level A)',
      'Screen for diabetic kidney disease with urine albumin and eGFR annually starting 5 years after diagnosis (Level A)',
    ],
    levelBRecommendations: [
      'Consider more stringent HbA1c target (<6.5%) for select patients if achievable without significant hypoglycemia (Level B)',
      'Consider less stringent HbA1c target (<7.5%) for patients with hypoglycemia unawareness or severe hypoglycemia (Level B)',
      'Automated insulin delivery (AID) systems (hybrid closed-loop) should be offered to patients with type 1 diabetes capable of using safely (Level B)',
      'Educate patients on carbohydrate counting for prandial insulin dosing (Level B)',
      'Use insulin-to-carbohydrate ratios and correction factors for prandial insulin dosing (Level B)',
      'Glucagon should be prescribed for all patients at risk of severe hypoglycemia (Level B)',
      'Screen for diabetic neuropathy annually starting 5 years after diagnosis (Level B)',
    ],
    levelCRecommendations: [
      'Consider adjunctive therapy with pramlintide or SGLT2 inhibitors in select patients with type 1 diabetes (Level C)',
      'Consider psychosocial screening and support for all patients with type 1 diabetes (Level C)',
      'Provide diabetes self-management education and support (DSMES) at diagnosis and ongoing (Level C)',
    ],
    levelERecommendations: [
      'Assess for and treat psychosocial issues including depression, diabetes distress, anxiety, and eating disorders (Level E)',
      'Provide education on sick day management, exercise adjustments, and alcohol consumption (Level E)',
      'Immunizations (influenza annually, pneumococcal) should be administered according to age-appropriate guidelines (Level E)',
    ],
    qualityOfEvidence: 'Multiple levels: Level A recommendations are based on High quality evidence from randomized controlled trials (DCCT, EDIC); Level B recommendations are based on Moderate quality evidence; Level C and E recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of ADA type 1 diabetes guidelines requires intensive insulin management and patient education. DIAGNOSIS: Type 1 diabetes diagnosed by: (1) Hyperglycemia with classic symptoms (polyuria, polydipsia, weight loss), (2) Positive autoantibodies (GAD65, IA-2, ZnT8, insulin autoantibodies), (3) Low or absent C-peptide. Typically presents in children/adolescents but can occur at any age (LADA in adults). GLYCEMIC TARGETS: HbA1c <7% for most nonpregnant adults (reduces microvascular complications). More stringent target (<6.5%) for select patients if achievable without significant hypoglycemia. Less stringent target (<7.5%) for: hypoglycemia unawareness, severe hypoglycemia history, limited life expectancy, advanced complications. Preprandial glucose 80-130 mg/dL. Postprandial glucose <180 mg/dL. INSULIN THERAPY: (1) BASAL-BOLUS REGIMEN (Multiple Daily Injections - MDI): Basal Insulin: Long-acting insulin analogs provide 24-hour coverage. Glargine U-100 or U-300 (once daily at same time), Detemir (once or twice daily), Degludec (once daily, most stable). Dose: Start 0.2-0.3 units/kg/day, adjust based on fasting glucose. Goal: fasting glucose 80-130 mg/dL. Bolus Insulin: Rapid-acting insulin analogs before meals. Lispro, Aspart, Glulisine (onset 10-15 min, peak 1-2 hours, duration 3-5 hours). Dose: Calculate using insulin-to-carbohydrate ratio (I:C ratio) and correction factor. I:C Ratio: Start with 1 unit per 10-15 g carbohydrate, adjust based on postprandial glucose. Example: If eating 60 g carb and I:C ratio is 1:10, give 6 units. Correction Factor (Sensitivity Factor): How much 1 unit insulin lowers glucose. Calculate: 1800 ÷ total daily insulin dose. Example: If total daily dose is 50 units, correction factor is 1800 ÷ 50 = 36 mg/dL per unit. If glucose is 200 mg/dL and target is 110 mg/dL, correction dose is (200-110) ÷ 36 = 2.5 units. Total Prandial Dose = Carbohydrate dose + Correction dose. Total Daily Insulin: Typically 0.5-1.0 units/kg/day (50% basal, 50% bolus). (2) INSULIN PUMP THERAPY (Continuous Subcutaneous Insulin Infusion - CSII): Delivers rapid-acting insulin continuously via subcutaneous catheter. Basal rates: Programmed hourly rates (can vary throughout day for dawn phenomenon). Bolus doses: Patient-initiated before meals using pump bolus calculator. Advantages: Precise insulin delivery, flexible basal rates, reduced hypoglycemia, improved quality of life. Requires: Motivated patient, frequent glucose monitoring, carbohydrate counting skills. (3) AUTOMATED INSULIN DELIVERY (AID) SYSTEMS (Hybrid Closed-Loop): Integrates insulin pump with CGM. Algorithm automatically adjusts basal insulin based on CGM readings. Patient still gives meal boluses. Examples: Medtronic 670G/780G, Tandem Control-IQ, Omnipod 5. Benefits: Improved time in range (70-180 mg/dL), reduced hypoglycemia, reduced burden. CONTINUOUS GLUCOSE MONITORING (CGM): Real-time CGM: Displays glucose readings every 5 minutes with trend arrows and alerts. Examples: Dexcom G6/G7, Freestyle Libre 2/3, Medtronic Guardian. Benefits: Improved HbA1c, reduced hypoglycemia, increased time in range, hypoglycemia awareness. Recommended for ALL patients with type 1 diabetes on intensive insulin therapy. CGM Metrics: Time in Range (TIR) 70-180 mg/dL: Goal >70%. Time Below Range (TBR) <70 mg/dL: Goal <4%. Time Above Range (TAR) >180 mg/dL: Goal <25%. Glucose Management Indicator (GMI): Estimated HbA1c from CGM data. CARBOHYDRATE COUNTING: Essential skill for prandial insulin dosing. Read food labels for total carbohydrates. Use measuring cups, food scales, or visual estimation. Adjust insulin dose based on carbohydrate content of meal. HYPOGLYCEMIA MANAGEMENT: Mild-Moderate Hypoglycemia (<70 mg/dL): 15-20 g fast-acting carbohydrate (4 oz juice, 3-4 glucose tablets, 1 tablespoon honey). Recheck glucose in 15 minutes, repeat if still <70 mg/dL. Severe Hypoglycemia (unable to self-treat): Glucagon injection (1 mg IM/SC) or intranasal glucagon (3 mg). Educate family/friends on glucagon administration. Prescribe glucagon for all patients at risk. Hypoglycemia Unawareness: Loss of warning symptoms. Increase glucose targets temporarily to restore awareness. Consider CGM with predictive low glucose alerts. EXERCISE ADJUSTMENTS: Check glucose before, during, and after exercise. If glucose <90 mg/dL before exercise, consume 15-30 g carbohydrate. Reduce prandial insulin by 25-50% for meal before exercise. Reduce basal insulin by 20-50% during prolonged exercise (pump users). Monitor for delayed hypoglycemia up to 24 hours post-exercise. SICK DAY MANAGEMENT: Continue insulin (never stop). Check glucose every 2-4 hours. Check ketones if glucose >250 mg/dL. Increase insulin by 10-20% if hyperglycemic. Drink fluids to prevent dehydration. Seek medical attention if persistent vomiting, moderate-large ketones, or glucose >300 mg/dL. COMPLICATIONS SCREENING: Diabetic Retinopathy: Dilated eye exam within 5 years of diagnosis, then annually. Diabetic Kidney Disease: UACR and eGFR annually starting 5 years after diagnosis. Diabetic Neuropathy: Comprehensive foot exam annually starting 5 years after diagnosis. Screen for symptoms of peripheral and autonomic neuropathy. CARDIOVASCULAR RISK MANAGEMENT: Blood Pressure: Target <130/80 mmHg. ACE inhibitor or ARB for hypertension with albuminuria. Lipids: Statin for primary prevention in adults >40 years or >10 years duration with additional CV risk factors. Target LDL <100 mg/dL (or <70 mg/dL if ASCVD). PATIENT EDUCATION: Diabetes Self-Management Education and Support (DSMES) at diagnosis and ongoing. Topics: insulin administration (injection technique, pump use), glucose monitoring (SMBG, CGM), carbohydrate counting, hypoglycemia recognition and treatment, sick day management, exercise adjustments, ketone testing. PSYCHOSOCIAL CARE: Screen for depression, diabetes distress, anxiety, eating disorders (especially diabulimia - insulin omission for weight loss). Provide referrals to mental health professionals. Address diabetes burnout and treatment fatigue. TECHNOLOGY: Insulin pumps, CGM, and AID systems improve outcomes. Offer to all appropriate candidates. Provide comprehensive training and ongoing support. IMMUNIZATIONS: Influenza vaccine annually. Pneumococcal vaccine per age-appropriate guidelines.',
    keyPoints: [
      'Type 1 diabetes requires lifelong insulin therapy (MDI or insulin pump)',
      'Target HbA1c <7% for most adults (individualize based on hypoglycemia risk)',
      'Continuous glucose monitoring (CGM) recommended for ALL patients with type 1 diabetes',
      'Basal-bolus regimen: rapid-acting insulin before meals + long-acting basal insulin',
      'Insulin pump therapy and automated insulin delivery (AID) systems improve outcomes',
      'Carbohydrate counting essential for prandial insulin dosing',
      'Glucagon prescribed for all patients at risk of severe hypoglycemia',
      'Screen for complications starting 5 years after diagnosis',
      'Diabetes self-management education and support (DSMES) critical',
    ],
    adaUrl: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    publicationYear: 2024,
  },

  // GESTATIONAL DIABETES
  {
    topic: 'Gestational Diabetes Mellitus (GDM) - ADA Guideline',
    keywords: ['gestational diabetes', 'gdm', 'diabetes in pregnancy', 'pregnancy diabetes', 'glucose tolerance test', 'ogtt pregnancy', 'ada gestational diabetes'],
    system: 'Endocrine',
    guidelineSummary: 'The ADA guideline for gestational diabetes mellitus provides evidence-based recommendations for screening, diagnosis, and management of diabetes during pregnancy. GDM is defined as diabetes diagnosed in the second or third trimester that is not clearly overt diabetes. The guideline recommends universal screening at 24-28 weeks gestation with 75-g oral glucose tolerance test (OGTT) or two-step approach (50-g glucose challenge test followed by 100-g OGTT if abnormal). Management includes medical nutrition therapy, glucose monitoring, and pharmacotherapy (insulin or metformin) if targets not met. Glycemic targets are more stringent than non-pregnant adults: fasting <95 mg/dL, 1-hour postprandial <140 mg/dL, 2-hour postprandial <120 mg/dL. GDM increases risk of future type 2 diabetes; postpartum screening is essential.',
    levelARecommendations: [
      'Screen for gestational diabetes at 24-28 weeks gestation in pregnant women not previously diagnosed with diabetes (Level A)',
      'Use 75-g oral glucose tolerance test (OGTT) for diagnosis of GDM (one-step approach) (Level A)',
      'Medical nutrition therapy is the initial treatment for GDM (Level A)',
      'If medical nutrition therapy alone does not achieve glycemic targets, add pharmacotherapy (insulin or metformin) (Level A)',
      'Target fasting glucose <95 mg/dL and either 1-hour postprandial <140 mg/dL or 2-hour postprandial <120 mg/dL (Level A)',
      'Screen for persistent diabetes at 4-12 weeks postpartum with 75-g OGTT (Level A)',
      'Screen for type 2 diabetes every 1-3 years in women with history of GDM (Level A)',
    ],
    levelBRecommendations: [
      'Consider two-step approach: 50-g glucose challenge test (GCT) followed by 100-g OGTT if GCT abnormal (Level B)',
      'Screen for undiagnosed diabetes at first prenatal visit in women with risk factors (obesity, prior GDM, family history, high-risk ethnicity) (Level B)',
      'Self-monitoring blood glucose (SMBG) is recommended: fasting and postprandial (Level B)',
      'Insulin is preferred pharmacotherapy for GDM; metformin is alternative if patient declines insulin or cannot afford (Level B)',
      'Encourage breastfeeding to reduce risk of future type 2 diabetes in mother and child (Level B)',
      'Lifestyle modifications (diet, physical activity) postpartum to prevent type 2 diabetes (Level B)',
    ],
    levelCRecommendations: [
      'Consider glyburide as alternative to insulin if patient declines insulin and metformin not appropriate (Level C)',
      'Consider continuous glucose monitoring (CGM) in select patients with GDM on insulin (Level C)',
      'Provide preconception counseling for women with history of GDM planning future pregnancy (Level C)',
    ],
    levelERecommendations: [
      'Diabetes self-management education should be provided to all women with GDM (Level E)',
      'Assess for postpartum depression and provide appropriate referrals (Level E)',
      'Counsel on importance of postpartum screening and long-term diabetes prevention (Level E)',
    ],
    qualityOfEvidence: 'Multiple levels: Level A recommendations are based on High quality evidence from randomized controlled trials (HAPO study); Level B recommendations are based on Moderate quality evidence; Level C and E recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of ADA gestational diabetes guidelines requires systematic screening and management during pregnancy. SCREENING: Universal screening at 24-28 weeks gestation for all pregnant women without known diabetes. ONE-STEP APPROACH (75-g OGTT): Fasting glucose, then 75 g glucose load, measure glucose at 1 hour and 2 hours. GDM diagnosed if ANY value meets or exceeds: Fasting ≥92 mg/dL, 1-hour ≥180 mg/dL, 2-hour ≥153 mg/dL. TWO-STEP APPROACH: Step 1: 50-g glucose challenge test (GCT) - non-fasting, measure glucose at 1 hour. If ≥140 mg/dL (or ≥130 mg/dL for higher sensitivity), proceed to Step 2. Step 2: 100-g OGTT - fasting, then 100 g glucose load, measure glucose at 1, 2, and 3 hours. GDM diagnosed if TWO or more values meet or exceed: Fasting ≥95 mg/dL, 1-hour ≥180 mg/dL, 2-hour ≥155 mg/dL, 3-hour ≥140 mg/dL. EARLY SCREENING (First Prenatal Visit): Screen women with risk factors for undiagnosed pre-existing diabetes: Obesity (BMI ≥30), Prior GDM, Strong family history of diabetes, High-risk ethnicity (Hispanic, African American, Native American, Asian, Pacific Islander), History of PCOS. Use standard diabetes criteria (HbA1c ≥6.5%, fasting glucose ≥126 mg/dL, random glucose ≥200 mg/dL). If negative, rescreen at 24-28 weeks. GLYCEMIC TARGETS: Fasting glucose <95 mg/dL. 1-hour postprandial <140 mg/dL OR 2-hour postprandial <120 mg/dL. MANAGEMENT: (1) MEDICAL NUTRITION THERAPY (MNT): Initial treatment for all women with GDM. Individualized meal plan by registered dietitian. Distribute carbohydrates throughout day (3 meals, 2-3 snacks). Emphasize complex carbohydrates, fiber, lean proteins, healthy fats. Limit simple sugars and refined carbohydrates. Calorie goals: Normal weight (BMI 18.5-24.9): 30 kcal/kg/day, Overweight (BMI 25-29.9): 25 kcal/kg/day, Obese (BMI ≥30): 25 kcal/kg/day (avoid excessive restriction). Carbohydrate distribution: Breakfast 15-30 g, Lunch 45-60 g, Dinner 45-60 g, Snacks 15-30 g. (2) PHYSICAL ACTIVITY: Moderate-intensity exercise 30 minutes most days (walking, swimming, prenatal yoga). Improves insulin sensitivity and glucose control. Avoid activities with fall risk or abdominal trauma. (3) GLUCOSE MONITORING: Self-monitoring blood glucose (SMBG) 4 times daily: Fasting (upon waking), 1-hour or 2-hour postprandial after each meal. Record values in logbook or app. (4) PHARMACOTHERAPY: Indications: Fasting glucose ≥95 mg/dL despite MNT, OR Postprandial glucose above target (>25% of values) despite MNT. INSULIN (Preferred): Basal Insulin: NPH or long-acting analog (glargine, detemir) at bedtime for fasting hyperglycemia. Start 0.2 units/kg, titrate by 2 units every 3 days to achieve fasting <95 mg/dL. Prandial Insulin: Rapid-acting analog (lispro, aspart) before meals for postprandial hyperglycemia. Start 2-4 units before largest meal, titrate based on postprandial glucose. METFORMIN (Alternative): Start 500 mg daily or BID with meals, titrate to 1000 mg BID as needed. Crosses placenta (limited long-term safety data). Use if patient declines insulin or cannot afford. GLYBURIDE (Second-line alternative): Start 2.5 mg daily, titrate to max 20 mg/day in divided doses. Higher risk of neonatal hypoglycemia and macrosomia compared to insulin. FETAL MONITORING: Ultrasound for fetal growth assessment (detect macrosomia). Non-stress test or biophysical profile starting at 32-36 weeks if on medication or poor control. DELIVERY PLANNING: Timing: 39-40 weeks for well-controlled GDM on diet alone. 37-39 weeks for GDM on medication or poor control. Consider induction if estimated fetal weight >4000-4500 g (macrosomia). Mode: Vaginal delivery preferred if no obstetric contraindications. Cesarean section if estimated fetal weight >4500 g (reduce shoulder dystocia risk). INTRAPARTUM MANAGEMENT: Target glucose 70-110 mg/dL during labor. Check glucose every 1-2 hours. Insulin infusion if needed (typically not required for diet-controlled GDM). POSTPARTUM CARE: Discontinue diabetes medications immediately after delivery. Check fasting glucose before discharge (rule out persistent hyperglycemia). Screen for persistent diabetes at 4-12 weeks postpartum with 75-g OGTT. Interpret using non-pregnant criteria: Normal: Fasting <100 mg/dL and 2-hour <140 mg/dL, Prediabetes: Fasting 100-125 mg/dL or 2-hour 140-199 mg/dL, Diabetes: Fasting ≥126 mg/dL or 2-hour ≥200 mg/dL. LONG-TERM FOLLOW-UP: Women with history of GDM have 50% risk of developing type 2 diabetes within 10 years. Screen for type 2 diabetes every 1-3 years with fasting glucose or HbA1c. Lifestyle modifications: Weight loss if overweight, healthy diet, regular physical activity (150 min/week). Consider metformin for diabetes prevention in high-risk women (prediabetes, obesity, age <60). Breastfeeding reduces diabetes risk in mother and child. PRECONCEPTION COUNSELING: Women with history of GDM planning future pregnancy: Achieve healthy weight before conception. Screen for diabetes before pregnancy. Optimize glycemic control if diabetes present (HbA1c <6.5% before conception). Folic acid supplementation 400-800 mcg daily.',
    keyPoints: [
      'Screen for GDM at 24-28 weeks gestation with 75-g OGTT (one-step) or two-step approach',
      'GDM diagnosed if fasting ≥92 mg/dL, 1-hour ≥180 mg/dL, or 2-hour ≥153 mg/dL (75-g OGTT)',
      'Medical nutrition therapy is initial treatment for all women with GDM',
      'Glycemic targets: fasting <95 mg/dL, 1-hour postprandial <140 mg/dL, 2-hour <120 mg/dL',
      'Add insulin (preferred) or metformin if targets not met with MNT alone',
      'Screen for persistent diabetes at 4-12 weeks postpartum with 75-g OGTT',
      'Screen for type 2 diabetes every 1-3 years in women with history of GDM',
      'Lifestyle modifications and breastfeeding reduce future diabetes risk',
    ],
    adaUrl: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    publicationYear: 2024,
  },

  // DIABETIC KETOACIDOSIS AND HYPERGLYCEMIC HYPEROSMOLAR STATE
  {
    topic: 'Diabetic Ketoacidosis (DKA) and Hyperglycemic Hyperosmolar State (HHS) - ADA Guideline',
    keywords: ['diabetic ketoacidosis', 'dka', 'hyperglycemic hyperosmolar state', 'hhs', 'diabetic emergency', 'ketoacidosis', 'hyperosmolar hyperglycemia', 'ada dka'],
    system: 'Endocrine',
    guidelineSummary: 'The ADA guideline for diabetic ketoacidosis (DKA) and hyperglycemic hyperosmolar state (HHS) provides evidence-based recommendations for diagnosis and management of acute hyperglycemic emergencies. DKA is characterized by hyperglycemia (>250 mg/dL), metabolic acidosis (pH <7.3, bicarbonate <18 mEq/L), and ketonemia/ketonuria. HHS is characterized by severe hyperglycemia (>600 mg/dL), hyperosmolality (>320 mOsm/kg), and absence of significant ketoacidosis. Management includes aggressive IV fluid resuscitation, insulin therapy, electrolyte replacement (especially potassium), and treatment of precipitating factors. DKA typically occurs in type 1 diabetes; HHS in type 2 diabetes. Common precipitants include infection, insulin omission, and new-onset diabetes.',
    levelARecommendations: [
      'Aggressive IV fluid resuscitation with 0.9% normal saline is the initial treatment for DKA and HHS (Level A)',
      'IV insulin infusion (regular insulin 0.1 units/kg/hour) after initial fluid resuscitation and potassium replacement (Level A)',
      'Potassium replacement is essential when serum potassium <5.3 mEq/L to prevent life-threatening hypokalemia (Level A)',
      'Identify and treat precipitating factors (infection, MI, medication non-adherence) (Level A)',
      'Monitor glucose, electrolytes, and acid-base status frequently during treatment (Level A)',
    ],
    levelBRecommendations: [
      'Switch to subcutaneous insulin when DKA resolved (glucose <200 mg/dL, pH >7.3, bicarbonate >18 mEq/L, anion gap <12) (Level B)',
      'Add dextrose to IV fluids when glucose <200 mg/dL to allow continued insulin administration until ketoacidosis resolved (Level B)',
      'Consider bicarbonate therapy only for severe acidosis (pH <6.9) (Level B)',
      'Overlap IV insulin with subcutaneous insulin by 1-2 hours before discontinuing IV insulin to prevent recurrence (Level B)',
    ],
    levelCRecommendations: [
      'Consider subcutaneous rapid-acting insulin analogs as alternative to IV insulin for mild DKA in appropriate settings (Level C)',
      'Phosphate replacement if severe hypophosphatemia (<1.0 mg/dL) with cardiac or respiratory dysfunction (Level C)',
    ],
    levelERecommendations: [
      'Provide diabetes education to prevent recurrence, including sick day management and insulin administration (Level E)',
      'Address psychosocial factors contributing to DKA (insulin omission, eating disorders, access to care) (Level E)',
    ],
    qualityOfEvidence: 'Multiple levels: Level A recommendations are based on High quality evidence from observational studies and expert consensus; Level B recommendations are based on Moderate quality evidence; Level C and E recommendations are based on Low quality evidence or expert opinion',
    clinicalImplementation: 'Implementation of ADA DKA/HHS guidelines requires prompt recognition and aggressive treatment. DIAGNOSIS: DIABETIC KETOACIDOSIS (DKA): Hyperglycemia: Glucose >250 mg/dL (typically 250-600 mg/dL). Metabolic acidosis: pH <7.3, bicarbonate <18 mEq/L. Ketonemia/Ketonuria: Positive serum or urine ketones (beta-hydroxybutyrate >3 mmol/L). Anion gap: Elevated (>10-12 mEq/L). Severity: Mild DKA (pH 7.25-7.30, bicarbonate 15-18 mEq/L), Moderate DKA (pH 7.00-7.24, bicarbonate 10-14 mEq/L), Severe DKA (pH <7.00, bicarbonate <10 mEq/L). HYPERGLYCEMIC HYPEROSMOLAR STATE (HHS): Severe hyperglycemia: Glucose >600 mg/dL (often >1000 mg/dL). Hyperosmolality: Effective serum osmolality >320 mOsm/kg. Calculated: 2[Na] + glucose/18. Absence of significant ketoacidosis: pH >7.3, bicarbonate >18 mEq/L, small ketones. Altered mental status common (lethargy, confusion, coma). PRECIPITATING FACTORS: Infection (most common): Pneumonia, UTI, sepsis. Insulin omission or inadequate dosing. New-onset diabetes (first presentation). Medications: Corticosteroids, thiazide diuretics, atypical antipsychotics, SGLT2 inhibitors. Acute illness: MI, stroke, pancreatitis, trauma. Alcohol or drug abuse. INITIAL ASSESSMENT: History: Diabetes type, insulin regimen, recent illness, medication changes. Symptoms: Polyuria, polydipsia, nausea, vomiting, abdominal pain, altered mental status. Physical exam: Volume status (orthostatic hypotension, tachycardia, dry mucous membranes), respiratory pattern (Kussmaul breathing in DKA), mental status. Labs: Glucose, electrolytes (Na, K, Cl, bicarbonate), BUN, creatinine, anion gap, arterial or venous blood gas, serum ketones (beta-hydroxybutyrate preferred) or urine ketones, CBC, urinalysis, blood cultures if infection suspected. ECG: Rule out MI, assess for hyperkalemia (peaked T waves) or hypokalemia (U waves, flattened T waves). MANAGEMENT: (1) FLUID RESUSCITATION: CRITICAL first step. Corrects dehydration, improves tissue perfusion, lowers glucose. Initial: 0.9% normal saline (NS) 1-1.5 L/hour for first 1-2 hours (15-20 mL/kg/hour). Subsequent: If serum Na normal or low: 0.9% NS at 250-500 mL/hour. If serum Na high: 0.45% half-normal saline at 250-500 mL/hour. Goal: Positive fluid balance 3-6 L in first 12 hours. When glucose <200 mg/dL: Add dextrose (D5 or D10) to IV fluids to allow continued insulin until ketoacidosis resolved. (2) INSULIN THERAPY: Start AFTER initial fluid resuscitation (1-2 hours) and potassium replacement. IV Regular Insulin: Bolus: 0.1 units/kg IV push (optional, can omit and start infusion). Infusion: 0.1 units/kg/hour (typically 5-10 units/hour for 70 kg adult). If glucose not decreasing by 50-75 mg/dL/hour, increase infusion rate. When glucose <200 mg/dL: Decrease infusion to 0.02-0.05 units/kg/hour (2-3 units/hour) AND add dextrose to IV fluids. Continue insulin infusion until DKA resolved (pH >7.3, bicarbonate >18 mEq/L, anion gap <12). Alternative (Mild DKA): Subcutaneous rapid-acting insulin analog (lispro, aspart) 0.2 units/kg initial, then 0.1 units/kg every 1-2 hours. (3) POTASSIUM REPLACEMENT: ESSENTIAL to prevent life-threatening hypokalemia. Insulin drives potassium into cells, lowering serum potassium. If K+ <3.3 mEq/L: Hold insulin, give potassium 20-30 mEq/hour until K+ >3.3 mEq/L. If K+ 3.3-5.3 mEq/L: Add potassium 20-30 mEq to each liter of IV fluid (goal K+ 4-5 mEq/L). If K+ >5.3 mEq/L: Do not give potassium, recheck in 2 hours. (4) BICARBONATE THERAPY: Generally NOT recommended (may worsen hypokalemia, paradoxical CNS acidosis). Consider ONLY if pH <6.9: Give 100 mEq sodium bicarbonate in 400 mL sterile water with 20 mEq KCl over 2 hours. Recheck pH in 2 hours, repeat if still <7.0. (5) PHOSPHATE REPLACEMENT: Routine replacement NOT recommended (risk of hypocalcemia). Consider if severe hypophosphatemia (<1.0 mg/dL) with cardiac dysfunction, respiratory depression, or hemolytic anemia. Give potassium phosphate 20-30 mEq/L in IV fluids (replace 1/3 to 1/2 of potassium as phosphate). MONITORING: Glucose: Every 1 hour until stable, then every 2-4 hours. Electrolytes (Na, K, Cl, bicarbonate): Every 2-4 hours until stable. Anion gap: Calculate with each electrolyte check. Venous pH: Every 2-4 hours until DKA resolved (pH >7.3). Urine output: Hourly (goal >0.5 mL/kg/hour). Mental status: Frequent assessment. RESOLUTION OF DKA: Glucose <200 mg/dL AND pH >7.3 AND bicarbonate >18 mEq/L AND anion gap <12. TRANSITION TO SUBCUTANEOUS INSULIN: When DKA resolved and patient able to eat: Calculate total daily insulin dose (0.5-0.8 units/kg/day). Give 50% as basal insulin (glargine, detemir, degludec) and 50% as prandial insulin (lispro, aspart, glulisine) divided before meals. Give first dose of subcutaneous insulin 1-2 hours BEFORE stopping IV insulin (prevent rebound hyperglycemia/ketoacidosis). MANAGEMENT OF HHS: Similar to DKA but: More aggressive fluid resuscitation (often 6-10 L deficit). Lower insulin infusion rate (0.05-0.1 units/kg/hour) - glucose falls more slowly. Monitor for cerebral edema (rare but serious complication). Correct hypernatremia slowly (risk of osmotic demyelination). COMPLICATIONS: Hypoglycemia: From excessive insulin. Treat with D50 IV or decrease insulin infusion. Hypokalemia: From insulin therapy and correction of acidosis. Aggressive potassium replacement. Cerebral edema: Rare but life-threatening, more common in children. Presents with headache, altered mental status, seizures. Treat with mannitol or hypertonic saline. Thrombosis: Hyperosmolality increases thrombotic risk. Consider prophylactic anticoagulation. PREVENTION OF RECURRENCE: Diabetes education: Sick day management (never stop insulin, check glucose and ketones frequently, stay hydrated). Insulin administration technique. Recognize early signs of DKA (nausea, vomiting, abdominal pain, fruity breath). Address psychosocial factors: Insulin omission (cost, eating disorders, diabetes distress). Access to care and medications. Follow-up: Endocrinology referral for diabetes management optimization.',
    keyPoints: [
      'DKA: glucose >250 mg/dL, pH <7.3, bicarbonate <18 mEq/L, positive ketones',
      'HHS: glucose >600 mg/dL, osmolality >320 mOsm/kg, pH >7.3, minimal ketones',
      'Initial treatment: aggressive IV fluid resuscitation with 0.9% normal saline',
      'IV insulin infusion 0.1 units/kg/hour after initial fluids and potassium replacement',
      'Potassium replacement essential when K+ <5.3 mEq/L to prevent hypokalemia',
      'Add dextrose to IV fluids when glucose <200 mg/dL, continue insulin until DKA resolved',
      'DKA resolved: glucose <200 mg/dL, pH >7.3, bicarbonate >18 mEq/L, anion gap <12',
      'Overlap subcutaneous insulin with IV insulin by 1-2 hours before stopping IV',
      'Identify and treat precipitating factors (infection, insulin omission)',
    ],
    adaUrl: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    publicationYear: 2024,
  },
];

/**
 * Search function to find relevant ADA guideline entries based on query
 */
export function searchADAGuidelines(query: string): ADAGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = adaGuidelinesKnowledge.map(entry => {
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

  console.log(`ADA Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ADA guideline by exact topic name
 */
export function getADAGuidelineByTopic(topic: string): ADAGuidelineEntry | undefined {
  return adaGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ADA guidelines for a specific system
 */
export function getADAGuidelinesBySystem(system: string): ADAGuidelineEntry[] {
  return adaGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
