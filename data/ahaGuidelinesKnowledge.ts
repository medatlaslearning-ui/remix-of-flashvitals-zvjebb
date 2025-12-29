
/**
 * American Heart Association (AHA) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American Heart Association.
 * The AHA provides evidence-based guidelines for cardiovascular disease prevention and management.
 * 
 * INTEGRATION PHASE: AHA Guidelines (Phase 11)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - AHA guideline URL for reference
 */

export interface AHAGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  classIRecommendations: string[];
  classIIARecommendations: string[];
  classIIBRecommendations: string[];
  classIIIRecommendations: string[];
  levelOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  ahaUrl: string;
  publicationYear: number;
}

export const ahaGuidelinesKnowledge: AHAGuidelineEntry[] = [
  // CARDIOVASCULAR DISEASE PREVENTION GUIDELINES
  {
    topic: 'Primary Prevention of Cardiovascular Disease - AHA/ACC 2019 Guideline',
    keywords: ['primary prevention', 'cardiovascular disease prevention', 'cvd prevention', 'ascvd prevention', 'risk assessment', 'lifestyle modification', 'preventive cardiology'],
    system: 'Cardiology',
    guidelineSummary: 'The 2019 AHA/ACC Guideline on the Primary Prevention of Cardiovascular Disease provides comprehensive recommendations for preventing first cardiovascular events. The guideline emphasizes team-based care, shared decision-making, and a life-course approach to cardiovascular health. Key components include cardiovascular risk assessment using the Pooled Cohort Equations, lifestyle modifications (diet, physical activity, weight management, smoking cessation), and appropriate use of aspirin and statin therapy for primary prevention.',
    classIRecommendations: [
      'All adults should consume a healthy diet that emphasizes vegetables, fruits, whole grains, low-fat dairy products, poultry, fish, legumes, non-tropical vegetable oils, and nuts (COR 1, LOE B)',
      'Adults should engage in at least 150 minutes per week of moderate-intensity or 75 minutes per week of vigorous-intensity aerobic physical activity (COR 1, LOE B)',
      'For adults with overweight or obesity, counseling and caloric restriction are recommended for weight loss to reduce cardiovascular risk (COR 1, LOE A)',
      'All adults should be assessed for tobacco use at every healthcare visit, and those who use tobacco should be assisted and strongly advised to quit (COR 1, LOE A)',
      'Adults 40-75 years of age should be assessed for cardiovascular risk factors and have a 10-year ASCVD risk estimation (COR 1, LOE B)',
      'Adults 40-75 years of age with LDL-C ≥70 mg/dL and 10-year ASCVD risk ≥7.5% should be treated with moderate-intensity statin therapy (COR 1, LOE A)',
      'Adults with diabetes mellitus aged 40-75 years should be treated with moderate-intensity statin therapy (COR 1, LOE A)',
      'Adults with LDL-C ≥190 mg/dL should be treated with high-intensity statin therapy (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'In adults 40-75 years of age with LDL-C ≥70 mg/dL and 10-year ASCVD risk 7.5%-19.9%, it is reasonable to measure coronary artery calcium (CAC) to guide statin therapy decisions (COR IIA, LOE B)',
      'Low-dose aspirin (75-100 mg daily) might be considered for primary prevention in select adults 40-70 years of age at higher ASCVD risk but not at increased bleeding risk (COR IIA, LOE B)',
      'In adults with intermediate risk (10-year ASCVD risk 7.5%-19.9%), risk-enhancing factors can be used to guide statin therapy decisions (COR IIA, LOE B)',
      'Adults with diabetes mellitus aged 40-75 years at higher ASCVD risk should be treated with high-intensity statin therapy (COR IIA, LOE B)',
      'In adults with borderline risk (10-year ASCVD risk 5%-7.4%) and risk-enhancing factors, it is reasonable to initiate moderate-intensity statin therapy (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In adults 40-75 years of age with diabetes mellitus and 10-year ASCVD risk ≥20%, it may be reasonable to add ezetimibe to maximally tolerated statin therapy (COR IIB, LOE B)',
      'In adults with intermediate or borderline risk, high-sensitivity C-reactive protein (hs-CRP), ankle-brachial index (ABI), or lipoprotein(a) may be considered to refine risk assessment (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'Low-dose aspirin should not be administered for primary prevention to adults >70 years of age due to increased bleeding risk (COR III, LOE B)',
      'Low-dose aspirin should not be administered for primary prevention to adults at increased bleeding risk (COR III, LOE B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials and meta-analyses',
    clinicalImplementation: 'Implementation of primary prevention guidelines requires a systematic, team-based approach. Begin with comprehensive cardiovascular risk assessment using the Pooled Cohort Equations for adults 40-75 years. Emphasize lifestyle modifications as the foundation: Mediterranean or DASH diet, ≥150 min/week moderate-intensity exercise, weight loss if BMI ≥25, and smoking cessation. For pharmacologic prevention, initiate statin therapy based on risk stratification: high-intensity for LDL ≥190 or diabetes with high risk; moderate-intensity for 10-year ASCVD risk ≥7.5%. Consider CAC scoring for intermediate-risk patients to guide therapy. Use shared decision-making for aspirin in select patients 40-70 years with higher risk but low bleeding risk. Monitor adherence, side effects, and LDL-C response. Reassess risk every 4-6 years.',
    keyPoints: [
      'Life-course approach: cardiovascular health begins in childhood',
      'Team-based care with shared decision-making',
      'Lifestyle modifications are the foundation of prevention',
      'Mediterranean or DASH diet recommended for all adults',
      '≥150 min/week moderate-intensity or 75 min/week vigorous-intensity exercise',
      'Statin therapy based on 10-year ASCVD risk assessment',
      'CAC scoring can guide statin decisions in intermediate-risk patients',
      'Aspirin for primary prevention has limited role due to bleeding risk',
    ],
    ahaUrl: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000678',
    publicationYear: 2019,
  },

  // CHOLESTEROL MANAGEMENT GUIDELINES
  {
    topic: 'Management of Blood Cholesterol - AHA/ACC 2018 Guideline',
    keywords: ['cholesterol', 'lipid management', 'ldl cholesterol', 'statin therapy', 'hyperlipidemia', 'dyslipidemia', 'ascvd risk', 'ezetimibe', 'pcsk9 inhibitor'],
    system: 'Cardiology',
    guidelineSummary: 'The 2018 AHA/ACC Guideline on the Management of Blood Cholesterol provides evidence-based recommendations for cholesterol management to reduce ASCVD risk. The guideline emphasizes four major statin benefit groups, intensity of statin therapy based on risk, and use of non-statin therapies (ezetimibe, PCSK9 inhibitors) for high-risk patients not achieving LDL-C goals. The guideline introduces the concept of risk-enhancing factors and coronary artery calcium scoring to guide treatment decisions in intermediate-risk patients.',
    classIRecommendations: [
      'In patients with clinical ASCVD, high-intensity statin therapy should be initiated or continued with the aim of achieving ≥50% reduction in LDL-C (COR 1, LOE A)',
      'In patients with severe primary hypercholesterolemia (LDL-C ≥190 mg/dL), high-intensity statin therapy should be initiated without calculating 10-year ASCVD risk (COR 1, LOE B)',
      'In patients with diabetes mellitus aged 40-75 years with LDL-C ≥70 mg/dL, moderate-intensity statin therapy should be initiated (COR 1, LOE A)',
      'In patients 40-75 years of age with LDL-C ≥70 mg/dL and 10-year ASCVD risk ≥7.5%, moderate-intensity statin therapy should be initiated (COR 1, LOE A)',
      'In patients with clinical ASCVD at very high risk, if LDL-C ≥70 mg/dL on maximally tolerated statin therapy, adding ezetimibe is recommended (COR 1, LOE B)',
      'In patients with clinical ASCVD at very high risk, if LDL-C ≥70 mg/dL on maximally tolerated statin and ezetimibe therapy, adding a PCSK9 inhibitor is recommended (COR 1, LOE A)',
    ],
    classIIARecommendations: [
      'In patients with diabetes mellitus aged 40-75 years at higher ASCVD risk, it is reasonable to initiate high-intensity statin therapy (COR IIA, LOE B)',
      'In patients 40-75 years of age with 10-year ASCVD risk 7.5%-19.9% (intermediate risk), measurement of coronary artery calcium is reasonable to guide statin therapy decisions (COR IIA, LOE B)',
      'In patients with clinical ASCVD not at very high risk, if LDL-C ≥70 mg/dL on maximally tolerated statin therapy, adding ezetimibe is reasonable (COR IIA, LOE B)',
      'In patients with severe primary hypercholesterolemia (LDL-C ≥190 mg/dL), if LDL-C ≥100 mg/dL on maximally tolerated statin and ezetimibe therapy, adding a PCSK9 inhibitor is reasonable (COR IIA, LOE B)',
      'In patients 40-75 years of age with diabetes mellitus and 10-year ASCVD risk ≥20%, it is reasonable to add ezetimibe to maximally tolerated statin therapy (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In patients 40-75 years of age with 10-year ASCVD risk 5%-7.4% (borderline risk) and risk-enhancing factors, initiation of moderate-intensity statin therapy may be considered (COR IIB, LOE B)',
      'In patients with clinical ASCVD, measurement of lipoprotein(a) may be considered to identify patients at very high risk who may benefit from more aggressive LDL-C lowering (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'PCSK9 inhibitors should not be used in patients without clinical ASCVD or severe hypercholesterolemia unless LDL-C remains elevated despite maximally tolerated statin and ezetimibe therapy (COR III, LOE C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of cholesterol management guidelines requires systematic risk stratification and intensity-based statin therapy. For secondary prevention (clinical ASCVD), initiate high-intensity statin (atorvastatin 40-80 mg or rosuvastatin 20-40 mg) targeting ≥50% LDL-C reduction. For very high-risk ASCVD patients (recent ACS, multiple events, or high-risk conditions), target LDL-C <70 mg/dL; add ezetimibe if not achieved, then PCSK9 inhibitor if still ≥70 mg/dL. For primary prevention, use Pooled Cohort Equations to estimate 10-year ASCVD risk. Initiate moderate-intensity statin if risk ≥7.5% or high-intensity if diabetes with high risk. For intermediate-risk patients (7.5%-19.9%), consider CAC scoring: if CAC=0, defer statin; if CAC 1-99, favor statin; if CAC ≥100, initiate statin. Monitor LDL-C response at 4-12 weeks and adjust therapy. Assess adherence and side effects. Lifestyle modifications (diet, exercise) remain essential.',
    keyPoints: [
      'Four major statin benefit groups: clinical ASCVD, LDL ≥190, diabetes 40-75 years, 10-year risk ≥7.5%',
      'High-intensity statin for clinical ASCVD and LDL ≥190',
      'Moderate-intensity statin for diabetes and 10-year risk ≥7.5%',
      'Very high-risk ASCVD: target LDL <70 mg/dL with statin + ezetimibe ± PCSK9i',
      'CAC scoring guides statin decisions in intermediate-risk patients',
      'Risk-enhancing factors help refine borderline and intermediate risk',
      'Non-statin therapies (ezetimibe, PCSK9i) for high-risk patients not at goal',
      'Lifestyle modifications remain foundation of therapy',
    ],
    ahaUrl: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000625',
    publicationYear: 2018,
  },

  // HYPERTENSION MANAGEMENT GUIDELINES
  {
    topic: 'Prevention, Detection, Evaluation, and Management of High Blood Pressure - AHA/ACC 2017 Guideline',
    keywords: ['hypertension', 'high blood pressure', 'blood pressure management', 'bp control', 'antihypertensive therapy', 'hypertensive emergency', 'resistant hypertension'],
    system: 'Cardiology',
    guidelineSummary: 'The 2017 AHA/ACC Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults redefined hypertension as BP ≥130/80 mmHg (previously ≥140/90 mmHg). The guideline emphasizes accurate BP measurement, out-of-office BP monitoring, cardiovascular risk assessment, lifestyle modifications, and individualized pharmacologic therapy. Target BP is <130/80 mmHg for most adults. First-line medications include ACE inhibitors, ARBs, calcium channel blockers, and thiazide diuretics. The guideline provides specific recommendations for special populations including elderly, CKD, diabetes, and resistant hypertension.',
    classIRecommendations: [
      'In adults with confirmed hypertension, out-of-office BP measurements (home BP monitoring or ambulatory BP monitoring) are recommended to confirm diagnosis and assess BP control (COR 1, LOE A)',
      'In adults with hypertension, lifestyle modifications including weight loss, DASH diet, sodium reduction (<1500 mg/day ideal), increased physical activity (150 min/week moderate intensity), and limited alcohol intake are recommended (COR 1, LOE A)',
      'In adults with stage 1 hypertension (BP 130-139/80-89 mmHg) and ASCVD or 10-year ASCVD risk ≥10%, antihypertensive medication is recommended in addition to lifestyle modifications (COR 1, LOE A)',
      'In adults with stage 2 hypertension (BP ≥140/90 mmHg), antihypertensive medication is recommended in addition to lifestyle modifications (COR 1, LOE A)',
      'In adults with hypertension, target BP is <130/80 mmHg (COR 1, LOE A)',
      'In adults with hypertension and CKD, ACE inhibitors or ARBs are recommended as first-line therapy (COR 1, LOE A)',
      'In adults with hypertension and diabetes, ACE inhibitors or ARBs are recommended as first-line therapy (COR 1, LOE A)',
      'In Black adults with hypertension without CKD, initial therapy with thiazide diuretic or calcium channel blocker is recommended (COR 1, LOE A)',
      'In adults with hypertensive emergency (severe BP elevation with acute end-organ damage), immediate BP reduction with IV antihypertensive agents in intensive care setting is recommended (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'In adults with stage 1 hypertension and 10-year ASCVD risk <10%, antihypertensive medication is reasonable in addition to lifestyle modifications (COR IIA, LOE C)',
      'In adults with resistant hypertension (BP not controlled on 3 medications including diuretic), addition of spironolactone is reasonable (COR IIA, LOE B)',
      'In adults with hypertension, self-measured BP monitoring is reasonable to improve BP control and medication adherence (COR IIA, LOE A)',
      'In adults with white coat hypertension (elevated office BP but normal out-of-office BP), close monitoring without antihypertensive medication is reasonable (COR IIA, LOE C)',
      'In adults ≥65 years with hypertension and high burden of comorbidity and limited life expectancy, clinical judgment, patient preference, and team-based approach to assess risk/benefit is reasonable for decisions regarding intensity of BP lowering and choice of antihypertensive drugs (COR IIA, LOE C)',
    ],
    classIIBRecommendations: [
      'In adults with elevated BP (120-129/<80 mmHg) and low ASCVD risk, antihypertensive medication may be considered if lifestyle modifications are ineffective (COR IIB, LOE C)',
      'In adults with resistant hypertension, renal denervation may be considered as adjunctive therapy (COR IIB, LOE B)',
      'In adults with hypertension and stable ischemic heart disease, beta-blockers may be considered as initial therapy (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In adults with elevated BP (120-129/<80 mmHg) without additional ASCVD risk factors, antihypertensive medication is not recommended (COR III, LOE C)',
      'In adults with hypertension, beta-blockers are not recommended as first-line therapy unless there is a compelling indication (heart failure, post-MI, angina) (COR III, LOE A)',
      'In adults with hypertensive urgency (severe BP elevation without acute end-organ damage), immediate BP reduction is not recommended; gradual outpatient BP reduction over days to weeks is preferred (COR III, LOE C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from randomized controlled trials and meta-analyses',
    clinicalImplementation: 'Implementation of the 2017 hypertension guideline requires accurate BP measurement using proper technique: patient seated quietly for 5 minutes, back supported, feet flat on floor, arm at heart level, appropriate cuff size, average of 2-3 readings. Confirm diagnosis with out-of-office BP measurements (home BP monitoring or ABPM). Assess 10-year ASCVD risk using Pooled Cohort Equations. Initiate lifestyle modifications for all patients: weight loss if overweight (target BMI <25), DASH diet, sodium restriction (<1500 mg/day ideal, <2300 mg/day minimum), increased physical activity (150 min/week moderate intensity), limited alcohol (≤2 drinks/day men, ≤1 drink/day women). For pharmacologic therapy, start with single agent for stage 1 hypertension or two agents for stage 2 hypertension. First-line agents: ACE-I/ARB (especially with diabetes or CKD), calcium channel blocker, or thiazide diuretic. Monitor BP and titrate medications to achieve target <130/80 mmHg. For resistant hypertension (uncontrolled on 3 drugs including diuretic), add spironolactone. Screen for secondary hypertension in young patients (<30 years) or resistant hypertension.',
    keyPoints: [
      'Hypertension redefined as BP ≥130/80 mmHg (stage 1) or ≥140/90 mmHg (stage 2)',
      'Target BP <130/80 mmHg for most adults',
      'Confirm diagnosis with out-of-office BP measurements (home BP or ABPM)',
      'Lifestyle modifications for all: weight loss, DASH diet, sodium <1500 mg/day, exercise 150 min/week',
      'First-line medications: ACE-I/ARB, CCB, thiazide diuretic',
      'ACE-I/ARB preferred for diabetes or CKD',
      'Most patients require ≥2 medications to achieve BP control',
      'Spironolactone for resistant hypertension',
      'Hypertensive emergency requires immediate IV therapy in ICU',
    ],
    ahaUrl: 'https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065',
    publicationYear: 2017,
  },

  // STROKE PREVENTION IN ATRIAL FIBRILLATION
  {
    topic: 'Stroke Prevention in Atrial Fibrillation - AHA/ACC/HRS 2019 Guideline',
    keywords: ['atrial fibrillation', 'stroke prevention', 'anticoagulation', 'afib', 'cha2ds2-vasc', 'doac', 'warfarin', 'left atrial appendage occlusion'],
    system: 'Cardiology',
    guidelineSummary: 'The 2019 AHA/ACC/HRS Focused Update on Atrial Fibrillation provides evidence-based recommendations for stroke prevention in patients with AF. The guideline emphasizes systematic stroke risk assessment using CHA2DS2-VASc score, bleeding risk assessment using HAS-BLED score, and preference for direct oral anticoagulants (DOACs) over warfarin for most patients. The guideline also addresses left atrial appendage occlusion for patients with contraindications to long-term anticoagulation.',
    classIRecommendations: [
      'In patients with AF and CHA2DS2-VASc score ≥2 in men or ≥3 in women, oral anticoagulation with a DOAC or warfarin is recommended to reduce stroke risk (COR 1, LOE A)',
      'In patients with AF and CHA2DS2-VASc score ≥2, DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) are recommended over warfarin unless contraindicated (mechanical heart valve, moderate-severe mitral stenosis) (COR 1, LOE A)',
      'In patients with AF and CHA2DS2-VASc score ≥2, anticoagulation should be continued indefinitely regardless of whether normal sinus rhythm is restored (COR 1, LOE B)',
      'In patients with AF undergoing cardioversion, anticoagulation for at least 3 weeks before and 4 weeks after cardioversion is recommended (COR 1, LOE B)',
      'In patients with AF and mechanical heart valves, warfarin is recommended (target INR based on valve type and position) (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'In patients with AF and CHA2DS2-VASc score 1 in men or 2 in women, anticoagulation is reasonable based on individual risk-benefit assessment (COR IIA, LOE B)',
      'In patients with AF and contraindications to long-term anticoagulation, left atrial appendage occlusion is reasonable for stroke prevention (COR IIA, LOE B)',
      'In patients with AF on warfarin with difficulty maintaining therapeutic INR, switching to a DOAC is reasonable (COR IIA, LOE C)',
      'In patients with AF and end-stage CKD on dialysis, warfarin or apixaban is reasonable for stroke prevention (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In patients with AF and CHA2DS2-VASc score 0 in men or 1 in women, anticoagulation may be considered based on individual risk factors and patient preference (COR IIB, LOE C)',
      'In patients with AF at low stroke risk (CHA2DS2-VASc score 1 in men or 2 in women) who decline anticoagulation, aspirin may be considered, though less effective than anticoagulation (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In patients with AF and no stroke risk factors (CHA2DS2-VASc score 0 in men or 1 in women), anticoagulation is not recommended (COR III, LOE B)',
      'In patients with AF, aspirin alone is not recommended for stroke prevention as it is less effective than anticoagulation (COR III, LOE A)',
      'In patients with AF, dual antiplatelet therapy (aspirin + clopidogrel) is not recommended for stroke prevention unless there is a separate indication (COR III, LOE B)',
      'In patients with AF and mechanical heart valves, DOACs are not recommended (COR III, LOE B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of stroke prevention in AF requires systematic assessment of stroke risk using CHA2DS2-VASc score (Congestive HF, Hypertension, Age ≥75 [2 points], Diabetes, Stroke/TIA/thromboembolism [2 points], Vascular disease, Age 65-74, Sex category [female]). For patients with CHA2DS2-VASc ≥2 (men) or ≥3 (women), initiate oral anticoagulation. DOACs are preferred over warfarin for most patients due to lower risk of intracranial hemorrhage, no need for INR monitoring, and fewer drug-food interactions. DOAC options: apixaban 5 mg BID (2.5 mg BID if ≥2 of: age ≥80, weight ≤60 kg, Cr ≥1.5), rivaroxaban 20 mg daily (15 mg if CrCl 15-50), edoxaban 60 mg daily (30 mg if CrCl 15-50, weight ≤60 kg, or certain P-gp inhibitors), dabigatran 150 mg BID (110 mg BID if age ≥80 or high bleeding risk). Assess bleeding risk using HAS-BLED score (Hypertension, Abnormal renal/liver function, Stroke, Bleeding history, Labile INR, Elderly >65, Drugs/alcohol). For patients with contraindications to anticoagulation, consider left atrial appendage occlusion (Watchman device). Continue anticoagulation indefinitely regardless of rhythm status.',
    keyPoints: [
      'CHA2DS2-VASc score guides anticoagulation decisions: ≥2 (men) or ≥3 (women) requires anticoagulation',
      'DOACs are preferred over warfarin for most patients',
      'DOAC options: apixaban, rivaroxaban, edoxaban, dabigatran',
      'Anticoagulation required for 3 weeks before and 4 weeks after cardioversion',
      'Continue anticoagulation indefinitely regardless of rhythm status',
      'Left atrial appendage occlusion for patients with contraindications to anticoagulation',
      'Warfarin required for mechanical heart valves (DOACs contraindicated)',
      'Aspirin alone is not recommended for stroke prevention in AF',
    ],
    ahaUrl: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000665',
    publicationYear: 2019,
  },

  // SUDDEN CARDIAC ARREST AND CPR
  {
    topic: 'CPR and Emergency Cardiovascular Care - AHA 2020 Guidelines',
    keywords: ['cpr', 'cardiopulmonary resuscitation', 'cardiac arrest', 'sudden cardiac death', 'acls', 'bls', 'resuscitation', 'ventricular fibrillation', 'pulseless vt', 'asystole', 'pea'],
    system: 'Cardiology',
    guidelineSummary: 'The 2020 AHA Guidelines for CPR and Emergency Cardiovascular Care provide evidence-based recommendations for resuscitation of cardiac arrest victims. The guidelines emphasize high-quality CPR (adequate rate and depth, full chest recoil, minimal interruptions), early defibrillation for shockable rhythms (VF/pulseless VT), effective teamwork, and post-cardiac arrest care. Key updates include recommendations for dispatcher-assisted CPR, use of mechanical CPR devices, extracorporeal CPR (ECPR) for select patients, and targeted temperature management.',
    classIRecommendations: [
      'For adults in cardiac arrest, high-quality CPR should be performed: compression rate 100-120/min, depth 2-2.4 inches (5-6 cm), full chest recoil, minimal interruptions, compression-to-ventilation ratio 30:2 (COR 1, LOE B)',
      'For adults in cardiac arrest with shockable rhythm (VF/pulseless VT), defibrillation should be performed as soon as possible (COR 1, LOE B)',
      'For adults in cardiac arrest, epinephrine 1 mg IV/IO should be administered every 3-5 minutes (COR 1, LOE B)',
      'For adults in cardiac arrest with shockable rhythm, amiodarone 300 mg IV/IO (or lidocaine 1-1.5 mg/kg if amiodarone unavailable) should be considered after failed defibrillation (COR 1, LOE B)',
      'For adults with return of spontaneous circulation (ROSC) after cardiac arrest, targeted temperature management (32-36°C) for at least 24 hours is recommended (COR 1, LOE B)',
      'For adults with ROSC after cardiac arrest, coronary angiography should be performed emergently for STEMI or suspected cardiac etiology (COR 1, LOE B)',
      'For witnessed out-of-hospital cardiac arrest with shockable rhythm, dispatcher should provide CPR instructions (compression-only CPR for untrained rescuers) (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'For adults in cardiac arrest in settings with available resources and expertise, mechanical CPR devices are reasonable as an alternative to manual CPR (COR IIA, LOE B)',
      'For adults in cardiac arrest refractory to initial resuscitation attempts in settings with ECMO capability, extracorporeal CPR (ECPR) is reasonable for select patients (COR IIA, LOE C)',
      'For adults in cardiac arrest with non-shockable rhythm (asystole/PEA), it is reasonable to administer epinephrine as soon as feasible (COR IIA, LOE C)',
      'For adults with ROSC after cardiac arrest, it is reasonable to avoid and treat hypotension (SBP <90 mmHg, MAP <65 mmHg) (COR IIA, LOE C)',
      'For adults with ROSC after cardiac arrest, it is reasonable to avoid hypoxia and hyperoxia by titrating FiO2 to target SpO2 92-98% (COR IIA, LOE C)',
      'For adults with ROSC after cardiac arrest, it is reasonable to avoid and treat hyperthermia (temperature >37.5°C) (COR IIA, LOE C)',
    ],
    classIIBRecommendations: [
      'For adults in cardiac arrest, double sequential defibrillation or vector change defibrillation may be considered for refractory VF/pulseless VT (COR IIB, LOE C)',
      'For adults in cardiac arrest with non-shockable rhythm, routine use of vasopressin may be considered as alternative to epinephrine (COR IIB, LOE B)',
      'For adults with ROSC after cardiac arrest, prophylactic lidocaine may be considered to prevent recurrent VF/VT (COR IIB, LOE C)',
    ],
    classIIIRecommendations: [
      'For adults in cardiac arrest, routine use of calcium is not recommended unless hyperkalemia, hypocalcemia, or calcium channel blocker overdose (COR III, LOE C)',
      'For adults in cardiac arrest, routine use of sodium bicarbonate is not recommended unless severe metabolic acidosis or hyperkalemia (COR III, LOE B)',
      'For adults with ROSC after cardiac arrest, routine use of prophylactic antiarrhythmic drugs is not recommended (COR III, LOE C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B evidence from observational studies and randomized trials',
    clinicalImplementation: 'Implementation of CPR guidelines requires systematic training and team-based approach. For witnessed cardiac arrest, immediately activate emergency response system and begin CPR. High-quality CPR: push hard (depth 2-2.4 inches) and fast (rate 100-120/min), allow full chest recoil, minimize interruptions (<10 seconds), avoid excessive ventilation. For shockable rhythm (VF/pulseless VT), defibrillate immediately (biphasic 120-200 J or monophasic 360 J), resume CPR immediately for 2 minutes, then reassess rhythm. Administer epinephrine 1 mg IV/IO every 3-5 minutes. After failed defibrillation, give amiodarone 300 mg IV/IO (first dose) or 150 mg (second dose). For non-shockable rhythm (asystole/PEA), perform high-quality CPR, administer epinephrine as soon as feasible, identify and treat reversible causes (Hs and Ts: Hypovolemia, Hypoxia, Hydrogen ion [acidosis], Hypo/hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis pulmonary/coronary). After ROSC, provide post-cardiac arrest care: targeted temperature management 32-36°C for 24 hours, emergent coronary angiography if STEMI or suspected cardiac cause, avoid hypotension/hypoxia/hyperoxia/hyperthermia, neuroprognostication after 72 hours.',
    keyPoints: [
      'High-quality CPR: rate 100-120/min, depth 2-2.4 inches, full recoil, minimal interruptions',
      'Early defibrillation for VF/pulseless VT',
      'Epinephrine 1 mg IV/IO every 3-5 minutes',
      'Amiodarone 300 mg IV/IO after failed defibrillation',
      'Identify and treat reversible causes (Hs and Ts)',
      'Post-ROSC care: targeted temperature management, coronary angiography, avoid hypotension/hypoxia',
      'Dispatcher-assisted CPR for witnessed out-of-hospital arrest',
      'ECPR for select patients with refractory arrest in capable centers',
    ],
    ahaUrl: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916',
    publicationYear: 2020,
  },

  // PERIPHERAL ARTERY DISEASE
  {
    topic: 'Management of Patients with Lower Extremity Peripheral Artery Disease - AHA/ACC 2016 Guideline',
    keywords: ['peripheral artery disease', 'pad', 'claudication', 'critical limb ischemia', 'cli', 'ankle brachial index', 'abi', 'revascularization', 'peripheral vascular disease'],
    system: 'Cardiology',
    guidelineSummary: 'The 2016 AHA/ACC Guideline on the Management of Patients with Lower Extremity Peripheral Artery Disease provides comprehensive recommendations for diagnosis, medical management, and revascularization of PAD. The guideline emphasizes ankle-brachial index (ABI) for diagnosis, aggressive cardiovascular risk factor modification (smoking cessation, statin therapy, antiplatelet therapy, BP and diabetes control), supervised exercise therapy for claudication, and appropriate use of revascularization for severe claudication or critical limb ischemia.',
    classIRecommendations: [
      'In patients with suspected PAD, resting ankle-brachial index (ABI) should be performed for diagnosis (COR 1, LOE B)',
      'In patients with PAD, smoking cessation counseling and pharmacotherapy are recommended (COR 1, LOE A)',
      'In patients with PAD, statin therapy (high-intensity preferred) is recommended to reduce cardiovascular events (COR 1, LOE A)',
      'In patients with PAD, antiplatelet therapy with aspirin 75-325 mg daily or clopidogrel 75 mg daily is recommended to reduce cardiovascular events (COR 1, LOE A)',
      'In patients with PAD and hypertension, antihypertensive therapy targeting BP <140/90 mmHg is recommended (COR 1, LOE A)',
      'In patients with PAD and diabetes, glycemic control targeting HbA1c <7% is recommended (COR 1, LOE B)',
      'In patients with PAD and claudication, supervised exercise therapy (30-45 min sessions, ≥3 times/week for ≥12 weeks) is recommended to improve walking distance (COR 1, LOE A)',
      'In patients with critical limb ischemia (rest pain, ulcers, gangrene), revascularization is recommended to prevent limb loss (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'In patients with PAD and claudication, cilostazol 100 mg BID is reasonable to improve walking distance (COR IIA, LOE A)',
      'In patients with PAD and claudication not responding to exercise therapy and cilostazol, revascularization is reasonable to improve symptoms (COR IIA, LOE B)',
      'In patients with PAD undergoing revascularization, dual antiplatelet therapy (aspirin + clopidogrel) for at least 1 month after endovascular intervention is reasonable (COR IIA, LOE C)',
      'In patients with PAD and claudication, structured community-based or home-based exercise programs are reasonable alternatives to supervised exercise (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In patients with PAD and claudication, pentoxifylline may be considered as alternative to cilostazol if cilostazol is not tolerated (COR IIB, LOE B)',
      'In patients with PAD and claudication, ramipril may be considered to improve walking distance (COR IIB, LOE B)',
      'In patients with PAD at high cardiovascular risk, dual antiplatelet therapy (aspirin + clopidogrel or aspirin + rivaroxaban 2.5 mg BID) may be considered to reduce cardiovascular events (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In patients with PAD, chelation therapy is not recommended (COR III, LOE A)',
      'In patients with PAD, vasodilator prostaglandins are not recommended for claudication (COR III, LOE A)',
      'In patients with PAD and claudication, revascularization is not recommended as initial therapy (exercise and medical therapy should be tried first) (COR III, LOE C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of PAD management requires systematic approach. Diagnose PAD with resting ABI: normal 1.00-1.40, borderline 0.91-0.99, PAD ≤0.90, non-compressible >1.40. For patients with PAD, aggressive cardiovascular risk factor modification is essential: smoking cessation (counseling + pharmacotherapy with varenicline or bupropion), high-intensity statin (atorvastatin 40-80 mg or rosuvastatin 20-40 mg), antiplatelet therapy (aspirin 75-325 mg daily or clopidogrel 75 mg daily), BP control (<140/90 mmHg, ACE-I/ARB preferred), diabetes control (HbA1c <7%). For claudication, initiate supervised exercise therapy as first-line: 30-45 min treadmill walking, ≥3 times/week for ≥12 weeks, walk to near-maximal pain then rest. If exercise alone insufficient, add cilostazol 100 mg BID (contraindicated in heart failure). Consider revascularization for severe claudication limiting quality of life despite exercise and medical therapy, or for critical limb ischemia (rest pain, ulcers, gangrene). Revascularization options: endovascular (angioplasty ± stenting) preferred for focal lesions, surgical bypass for extensive disease. Post-revascularization: dual antiplatelet therapy for ≥1 month after endovascular, lifelong single antiplatelet after surgical bypass.',
    keyPoints: [
      'ABI for diagnosis: ≤0.90 indicates PAD',
      'Aggressive cardiovascular risk factor modification: smoking cessation, statin, antiplatelet, BP control',
      'Supervised exercise therapy is first-line for claudication',
      'Cilostazol 100 mg BID improves walking distance',
      'Revascularization for critical limb ischemia or severe claudication refractory to medical therapy',
      'Endovascular preferred for focal lesions, surgical bypass for extensive disease',
      'Dual antiplatelet therapy for ≥1 month after endovascular intervention',
      'PAD is marker of systemic atherosclerosis - screen for CAD and cerebrovascular disease',
    ],
    ahaUrl: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000470',
    publicationYear: 2016,
  },
];

/**
 * Search function to find relevant AHA guideline entries based on query
 */
export function searchAHAGuidelines(query: string): AHAGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = ahaGuidelinesKnowledge.map(entry => {
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

  console.log(`AHA Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get AHA guideline by exact topic name
 */
export function getAHAGuidelineByTopic(topic: string): AHAGuidelineEntry | undefined {
  return ahaGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all AHA guidelines for a specific system
 */
export function getAHAGuidelinesBySystem(system: string): AHAGuidelineEntry[] {
  return ahaGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
