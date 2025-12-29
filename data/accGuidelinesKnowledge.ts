
/**
 * American College of Cardiology (ACC) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American College of Cardiology.
 * The ACC provides evidence-based guidelines for cardiovascular disease management.
 * 
 * INTEGRATION PHASE: ACC Guidelines (Phase 1)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - ACC guideline URL for reference
 */

export interface ACCGuidelineEntry {
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
  accUrl: string;
  publicationYear: number;
}

export const accGuidelinesKnowledge: ACCGuidelineEntry[] = [
  // HEART FAILURE GUIDELINES
  {
    topic: 'Heart Failure Management - ACC/AHA/HFSA 2022 Guideline',
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'systolic heart failure', 'diastolic heart failure', 'heart failure management', 'gdmt'],
    system: 'Cardiology',
    guidelineSummary: 'The 2022 ACC/AHA/HFSA Guideline for the Management of Heart Failure provides comprehensive, evidence-based recommendations for the diagnosis, treatment, and management of heart failure. The guideline emphasizes guideline-directed medical therapy (GDMT) with four pillars of therapy for HFrEF: ACE inhibitors/ARBs/ARNI, beta-blockers, mineralocorticoid receptor antagonists (MRAs), and SGLT2 inhibitors. The guideline also addresses HFpEF management, device therapy, and advanced heart failure therapies.',
    classIRecommendations: [
      'In patients with HFrEF, ACE inhibitors (or ARBs if ACE inhibitor intolerant) are recommended to reduce morbidity and mortality (COR 1, LOE A)',
      'In patients with HFrEF, evidence-based beta-blockers (carvedilol, metoprolol succinate, or bisoprolol) are recommended to reduce morbidity and mortality (COR 1, LOE A)',
      'In patients with HFrEF, mineralocorticoid receptor antagonists (spironolactone or eplerenone) are recommended to reduce morbidity and mortality (COR 1, LOE A)',
      'In patients with HFrEF, SGLT2 inhibitors (dapagliflozin or empagliflozin) are recommended to reduce hospitalizations and cardiovascular mortality (COR 1, LOE A)',
      'In selected patients with HFrEF, sacubitril/valsartan (ARNI) is recommended to replace ACE inhibitors or ARBs to further reduce morbidity and mortality (COR 1, LOE B)',
      'In patients with symptomatic HF, diuretics are recommended to improve symptoms and reduce hospitalizations (COR 1, LOE C)',
      'In patients with HFrEF and LVEF ≤35%, NYHA class II-III on GDMT, and QRS ≥150 ms with LBBB, CRT is recommended (COR 1, LOE A)',
      'In patients with HFrEF and LVEF ≤35% on GDMT who are at risk for sudden cardiac death, ICD is recommended for primary prevention (COR 1, LOE A)',
    ],
    classIIARecommendations: [
      'In patients with HFrEF, ivabradine can be beneficial to reduce HF hospitalizations in patients with LVEF ≤35%, sinus rhythm with heart rate ≥70 bpm on maximally tolerated beta-blocker (COR IIA, LOE B)',
      'In patients with HFrEF and iron deficiency, intravenous iron replacement is reasonable to improve functional status and quality of life (COR IIA, LOE A)',
      'In patients with HFpEF, SGLT2 inhibitors can be beneficial to reduce hospitalizations (COR IIA, LOE B)',
      'In patients with advanced HF despite GDMT, referral to an advanced HF center for consideration of mechanical circulatory support or transplantation is reasonable (COR IIA, LOE C)',
    ],
    classIIBRecommendations: [
      'In patients with HFrEF, hydralazine and isosorbide dinitrate may be considered in self-identified African American patients with NYHA class III-IV HF on GDMT (COR IIB, LOE B)',
      'In patients with HFpEF, ARBs may be considered to decrease hospitalizations (COR IIB, LOE B)',
      'In patients with HFpEF, MRAs may be considered to decrease hospitalizations (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In patients with HFrEF, calcium channel blockers (diltiazem, verapamil) are not recommended as they may worsen HF (COR III, LOE C)',
      'In patients with HF, NSAIDs and COX-2 inhibitors should be avoided as they can worsen HF and increase hospitalizations (COR III, LOE B)',
      'In patients with HFrEF, thiazolidinediones (rosiglitazone, pioglitazone) should be avoided as they increase HF hospitalizations (COR III, LOE B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of the 2022 HF guideline requires a systematic approach to initiate and titrate all four pillars of GDMT (ACE-I/ARB/ARNI, beta-blocker, MRA, SGLT2i) as early as possible. Start medications at low doses and uptitrate to target or maximally tolerated doses. Monitor renal function, potassium, and blood pressure during titration. Consider device therapy (ICD, CRT) in appropriate patients. For HFpEF, focus on treating comorbidities, managing volume status with diuretics, and consider SGLT2 inhibitors. Ensure patient education on daily weights, sodium restriction, and medication adherence.',
    keyPoints: [
      'Four pillars of GDMT for HFrEF: ACE-I/ARB/ARNI + beta-blocker + MRA + SGLT2i',
      'SGLT2 inhibitors are now Class I recommendation for HFrEF and Class IIA for HFpEF',
      'Start GDMT early and uptitrate to target doses',
      'CRT improves outcomes in patients with LBBB and QRS ≥150 ms',
      'ICD for primary prevention in patients with LVEF ≤35% on GDMT',
      'Daily weights and sodium restriction are essential for volume management',
      'Referral to advanced HF center for refractory symptoms despite GDMT',
    ],
    accUrl: 'https://www.acc.org/guidelines/heart-failure',
    publicationYear: 2022,
  },

  // ATRIAL FIBRILLATION GUIDELINES
  {
    topic: 'Atrial Fibrillation Management - ACC/AHA 2023 Guideline',
    keywords: ['atrial fibrillation', 'afib', 'af', 'a-fib', 'atrial fib', 'rate control', 'rhythm control', 'anticoagulation', 'stroke prevention', 'cha2ds2-vasc'],
    system: 'Cardiology',
    guidelineSummary: 'The 2023 ACC/AHA Guideline for the Management of Patients with Atrial Fibrillation provides updated recommendations for AF diagnosis, stroke risk assessment, anticoagulation, rate control, rhythm control, and catheter ablation. The guideline emphasizes individualized treatment based on patient symptoms, stroke risk (CHA2DS2-VASc score), and bleeding risk. Direct oral anticoagulants (DOACs) are preferred over warfarin for most patients. Early rhythm control and catheter ablation are increasingly recommended for symptomatic patients.',
    classIRecommendations: [
      'In patients with AF and CHA2DS2-VASc score ≥2 in men or ≥3 in women, oral anticoagulation with a DOAC or warfarin is recommended to reduce stroke risk (COR 1, LOE A)',
      'In patients with AF and CHA2DS2-VASc score ≥2, DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) are recommended over warfarin unless contraindicated (COR 1, LOE A)',
      'In patients with symptomatic AF, rate control with beta-blockers or non-dihydropyridine calcium channel blockers is recommended (COR 1, LOE B)',
      'In patients with symptomatic AF despite adequate rate control, rhythm control with antiarrhythmic drugs or catheter ablation is recommended (COR 1, LOE A)',
      'In patients with AF and heart failure with reduced ejection fraction, catheter ablation is recommended to improve symptoms and reduce hospitalizations (COR 1, LOE A)',
      'In patients with AF undergoing cardioversion, anticoagulation for at least 3 weeks before and 4 weeks after cardioversion is recommended (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'In patients with symptomatic paroxysmal AF, catheter ablation is reasonable as first-line therapy to improve symptoms and quality of life (COR IIA, LOE B)',
      'In patients with AF and HFpEF, catheter ablation can be beneficial to improve symptoms (COR IIA, LOE B)',
      'In patients with AF and rapid ventricular response causing hemodynamic instability, urgent electrical cardioversion is reasonable (COR IIA, LOE C)',
      'In patients with AF and low stroke risk (CHA2DS2-VASc score 1 in men or 2 in women), anticoagulation or aspirin may be considered based on individual risk-benefit assessment (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In patients with persistent AF, rhythm control with antiarrhythmic drugs may be considered to improve symptoms (COR IIB, LOE B)',
      'In patients with AF and contraindications to anticoagulation, left atrial appendage occlusion may be considered for stroke prevention (COR IIB, LOE B)',
      'In patients with AF and heart rate >110 bpm at rest despite beta-blocker or calcium channel blocker, digoxin may be considered for additional rate control (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In patients with AF and no stroke risk factors (CHA2DS2-VASc score 0 in men or 1 in women), anticoagulation is not recommended (COR III, LOE B)',
      'In patients with AF, aspirin alone is not recommended for stroke prevention as it is less effective than anticoagulation (COR III, LOE A)',
      'In patients with AF, dual antiplatelet therapy (aspirin + clopidogrel) is not recommended for stroke prevention unless there is a separate indication (COR III, LOE B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of the 2023 AF guideline requires systematic assessment of stroke risk using CHA2DS2-VASc score and bleeding risk using HAS-BLED score. For patients with CHA2DS2-VASc ≥2 (men) or ≥3 (women), initiate DOAC therapy (preferred over warfarin). For rate control, start with beta-blocker or non-dihydropyridine calcium channel blocker targeting resting heart rate <110 bpm (lenient control) or <80 bpm (strict control) based on symptoms. For symptomatic patients despite rate control, consider rhythm control with antiarrhythmic drugs (amiodarone, dronedarone, flecainide, sotalol) or catheter ablation. Catheter ablation is increasingly used as first-line therapy for symptomatic paroxysmal AF and is strongly recommended for AF with HFrEF.',
    keyPoints: [
      'CHA2DS2-VASc score guides anticoagulation decisions: ≥2 (men) or ≥3 (women) requires anticoagulation',
      'DOACs are preferred over warfarin for most patients',
      'Rate control targets: <110 bpm (lenient) or <80 bpm (strict) based on symptoms',
      'Early rhythm control improves outcomes in newly diagnosed AF',
      'Catheter ablation is first-line for AF with HFrEF',
      'Catheter ablation can be first-line for symptomatic paroxysmal AF',
      'Anticoagulation required for 3 weeks before and 4 weeks after cardioversion',
    ],
    accUrl: 'https://www.acc.org/guidelines/atrial-fibrillation',
    publicationYear: 2023,
  },

  // ACUTE CORONARY SYNDROME GUIDELINES
  {
    topic: 'Acute Coronary Syndromes - ACC/AHA Guideline',
    keywords: ['acute coronary syndrome', 'acs', 'myocardial infarction', 'mi', 'stemi', 'nstemi', 'unstable angina', 'heart attack', 'coronary artery disease', 'pci', 'percutaneous coronary intervention'],
    system: 'Cardiology',
    guidelineSummary: 'The ACC/AHA Guidelines for Acute Coronary Syndromes provide evidence-based recommendations for the diagnosis and management of STEMI, NSTEMI, and unstable angina. The guidelines emphasize rapid reperfusion for STEMI (primary PCI within 90 minutes or fibrinolysis within 30 minutes), early risk stratification for NSTEMI, dual antiplatelet therapy, and secondary prevention with statins, beta-blockers, and ACE inhibitors.',
    classIRecommendations: [
      'In patients with STEMI, immediate reperfusion with primary PCI (door-to-balloon time <90 minutes) or fibrinolysis (door-to-needle time <30 minutes if PCI unavailable) is recommended (COR 1, LOE A)',
      'In patients with ACS, aspirin 162-325 mg should be given immediately and continued indefinitely (COR 1, LOE A)',
      'In patients with ACS undergoing PCI, dual antiplatelet therapy (aspirin + P2Y12 inhibitor) for at least 12 months is recommended (COR 1, LOE A)',
      'In patients with ACS, high-intensity statin therapy should be initiated or continued (COR 1, LOE A)',
      'In patients with ACS and LVEF <40%, ACE inhibitors (or ARBs if ACE inhibitor intolerant) are recommended (COR 1, LOE A)',
      'In patients with ACS without contraindications, beta-blockers should be initiated within 24 hours (COR 1, LOE A)',
      'In patients with STEMI and cardiogenic shock, emergency revascularization with PCI or CABG is recommended (COR 1, LOE B)',
      'In patients with NSTEMI at high risk (elevated troponin, dynamic ECG changes, GRACE score >140), early invasive strategy within 24 hours is recommended (COR 1, LOE A)',
    ],
    classIIARecommendations: [
      'In patients with STEMI presenting to a non-PCI-capable hospital, transfer for primary PCI is reasonable if door-to-balloon time can be achieved within 120 minutes (COR IIA, LOE B)',
      'In patients with ACS, ticagrelor or prasugrel (if no prior stroke/TIA) is reasonable over clopidogrel as the P2Y12 inhibitor (COR IIA, LOE B)',
      'In patients with NSTEMI at intermediate risk, early invasive strategy within 24-72 hours is reasonable (COR IIA, LOE B)',
      'In patients with ACS and diabetes, SGLT2 inhibitors can be beneficial to reduce cardiovascular events (COR IIA, LOE A)',
    ],
    classIIBRecommendations: [
      'In patients with STEMI and multivessel disease, complete revascularization may be considered either during index PCI or as staged procedure (COR IIB, LOE B)',
      'In patients with NSTEMI at low risk (negative troponin, no high-risk features), conservative management with medical therapy may be considered (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In patients with STEMI, fibrinolysis should not be given if symptom onset >12 hours unless ongoing ischemia (COR III, LOE C)',
      'In patients with ACS, NSAIDs (except aspirin) should be discontinued due to increased cardiovascular risk (COR III, LOE B)',
      'In patients with ACS, routine use of fibrinolysis before PCI (facilitated PCI) is not recommended (COR III, LOE B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of ACS guidelines requires a systems-based approach with established STEMI protocols for rapid reperfusion. For STEMI, activate catheterization lab immediately and aim for door-to-balloon time <90 minutes. Give aspirin 325 mg (chewed), P2Y12 inhibitor loading dose, anticoagulation (heparin or bivalirudin), and consider GP IIb/IIIa inhibitors. For NSTEMI, perform risk stratification using GRACE or TIMI score. High-risk patients (elevated troponin, dynamic ST changes, hemodynamic instability) require early invasive strategy within 24 hours. Initiate GDMT: aspirin, P2Y12 inhibitor, high-intensity statin, beta-blocker, ACE inhibitor. Provide cardiac rehabilitation and secondary prevention counseling.',
    keyPoints: [
      'STEMI: Primary PCI within 90 minutes or fibrinolysis within 30 minutes',
      'Aspirin 325 mg immediately (chewed) and continued indefinitely',
      'DAPT (aspirin + P2Y12 inhibitor) for at least 12 months post-ACS',
      'High-intensity statin for all ACS patients',
      'Beta-blocker and ACE inhibitor for secondary prevention',
      'NSTEMI: Risk stratification with GRACE/TIMI score guides timing of invasive strategy',
      'Cardiac rehabilitation improves outcomes and is recommended for all ACS patients',
    ],
    accUrl: 'https://www.acc.org/guidelines/acute-coronary-syndromes',
    publicationYear: 2021,
  },

  // HYPERTENSION GUIDELINES
  {
    topic: 'Hypertension Management - ACC/AHA 2017 Guideline',
    keywords: ['hypertension', 'high blood pressure', 'htn', 'elevated blood pressure', 'blood pressure management', 'antihypertensive therapy'],
    system: 'Cardiology',
    guidelineSummary: 'The 2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults redefined hypertension as BP ≥130/80 mmHg (previously ≥140/90 mmHg). The guideline emphasizes accurate BP measurement, cardiovascular risk assessment, lifestyle modifications, and individualized pharmacologic therapy. Target BP is <130/80 mmHg for most adults. First-line medications include ACE inhibitors, ARBs, calcium channel blockers, and thiazide diuretics.',
    classIRecommendations: [
      'In adults with confirmed hypertension, out-of-office BP measurements (home BP monitoring or ambulatory BP monitoring) are recommended to confirm diagnosis and assess BP control (COR 1, LOE A)',
      'In adults with hypertension, lifestyle modifications including weight loss, DASH diet, sodium reduction, increased physical activity, and limited alcohol intake are recommended (COR 1, LOE A)',
      'In adults with stage 1 hypertension (BP 130-139/80-89 mmHg) and ASCVD or 10-year ASCVD risk ≥10%, antihypertensive medication is recommended in addition to lifestyle modifications (COR 1, LOE A)',
      'In adults with stage 2 hypertension (BP ≥140/90 mmHg), antihypertensive medication is recommended in addition to lifestyle modifications (COR 1, LOE A)',
      'In adults with hypertension, target BP is <130/80 mmHg (COR 1, LOE A)',
      'In adults with hypertension and CKD, ACE inhibitors or ARBs are recommended as first-line therapy (COR 1, LOE A)',
      'In adults with hypertension and diabetes, ACE inhibitors or ARBs are recommended as first-line therapy (COR 1, LOE A)',
      'In Black adults with hypertension without CKD, initial therapy with thiazide diuretic or calcium channel blocker is recommended (COR 1, LOE A)',
    ],
    classIIARecommendations: [
      'In adults with stage 1 hypertension and 10-year ASCVD risk <10%, antihypertensive medication is reasonable in addition to lifestyle modifications (COR IIA, LOE C)',
      'In adults with resistant hypertension (BP not controlled on 3 medications including diuretic), addition of spironolactone is reasonable (COR IIA, LOE B)',
      'In adults with hypertension, self-measured BP monitoring is reasonable to improve BP control and medication adherence (COR IIA, LOE A)',
    ],
    classIIBRecommendations: [
      'In adults with elevated BP (120-129/<80 mmHg) and low ASCVD risk, antihypertensive medication may be considered if lifestyle modifications are ineffective (COR IIB, LOE C)',
      'In adults with resistant hypertension, renal denervation may be considered as adjunctive therapy (COR IIB, LOE B)',
    ],
    classIIIRecommendations: [
      'In adults with elevated BP (120-129/<80 mmHg) without additional ASCVD risk factors, antihypertensive medication is not recommended (COR III, LOE C)',
      'In adults with hypertension, beta-blockers are not recommended as first-line therapy unless there is a compelling indication (COR III, LOE A)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from randomized controlled trials and meta-analyses',
    clinicalImplementation: 'Implementation of the 2017 hypertension guideline requires accurate BP measurement using proper technique (patient seated, back supported, feet flat, arm at heart level, appropriate cuff size). Confirm diagnosis with out-of-office BP measurements (home BP monitoring or ABPM). Assess 10-year ASCVD risk using pooled cohort equations. Initiate lifestyle modifications for all patients: weight loss if overweight, DASH diet, sodium restriction (<1500 mg/day ideal, <2300 mg/day minimum), increased physical activity (150 min/week moderate intensity), limited alcohol. For pharmacologic therapy, start with single agent for stage 1 hypertension or two agents for stage 2 hypertension. First-line agents: ACE-I/ARB (especially with diabetes or CKD), calcium channel blocker, or thiazide diuretic. Monitor BP and titrate medications to achieve target <130/80 mmHg. Screen for secondary hypertension in young patients or resistant hypertension.',
    keyPoints: [
      'Hypertension redefined as BP ≥130/80 mmHg (stage 1) or ≥140/90 mmHg (stage 2)',
      'Target BP <130/80 mmHg for most adults',
      'Confirm diagnosis with out-of-office BP measurements (home BP or ABPM)',
      'Lifestyle modifications for all: weight loss, DASH diet, sodium restriction, exercise',
      'First-line medications: ACE-I/ARB, CCB, thiazide diuretic',
      'ACE-I/ARB preferred for diabetes or CKD',
      'Most patients require ≥2 medications to achieve BP control',
    ],
    accUrl: 'https://www.acc.org/guidelines/hypertension',
    publicationYear: 2017,
  },

  // VALVULAR HEART DISEASE GUIDELINES
  {
    topic: 'Valvular Heart Disease Management - ACC/AHA 2020 Guideline',
    keywords: ['valvular heart disease', 'valve disease', 'aortic stenosis', 'aortic regurgitation', 'mitral stenosis', 'mitral regurgitation', 'tricuspid regurgitation', 'valve replacement', 'tavr', 'savr'],
    system: 'Cardiology',
    guidelineSummary: 'The 2020 ACC/AHA Guideline for the Management of Patients with Valvular Heart Disease provides comprehensive recommendations for diagnosis, evaluation, and management of valvular heart disease. The guideline emphasizes the role of echocardiography for diagnosis and serial monitoring, timing of intervention based on symptoms and ventricular function, and selection between surgical (SAVR) and transcatheter (TAVR) valve replacement based on surgical risk and patient factors.',
    classIRecommendations: [
      'In patients with severe symptomatic aortic stenosis, aortic valve replacement (SAVR or TAVR) is recommended (COR 1, LOE A)',
      'In patients with severe aortic stenosis undergoing cardiac surgery for other indications, concomitant AVR is recommended (COR 1, LOE B)',
      'In patients with severe aortic stenosis and LVEF <50%, AVR is recommended regardless of symptoms (COR 1, LOE B)',
      'In patients with severe primary mitral regurgitation and symptoms, mitral valve surgery is recommended (COR 1, LOE B)',
      'In patients with severe primary mitral regurgitation and LVEF <60% or LV end-systolic dimension >40 mm, mitral valve surgery is recommended even if asymptomatic (COR 1, LOE B)',
      'In patients with severe mitral stenosis and symptoms, percutaneous mitral balloon commissurotomy (PMBC) is recommended if favorable valve anatomy (COR 1, LOE A)',
      'In patients with severe symptomatic tricuspid regurgitation, tricuspid valve surgery is recommended if undergoing left-sided valve surgery (COR 1, LOE B)',
      'In patients with prosthetic valves, anticoagulation with warfarin is recommended for mechanical valves (COR 1, LOE A)',
    ],
    classIIARecommendations: [
      'In patients with severe asymptomatic aortic stenosis and rapid progression (Vmax increase ≥0.3 m/s/year), AVR is reasonable (COR IIA, LOE B)',
      'In patients with severe aortic stenosis at low surgical risk, SAVR is reasonable (COR IIA, LOE A)',
      'In patients with severe aortic stenosis at intermediate or high surgical risk, TAVR is reasonable (COR IIA, LOE A)',
      'In patients with severe primary mitral regurgitation and preserved LV function who are symptomatic, transcatheter edge-to-edge repair (TEER) is reasonable if high surgical risk (COR IIA, LOE B)',
      'In patients with severe secondary mitral regurgitation despite GDMT, TEER can be beneficial to improve symptoms (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In patients with moderate aortic stenosis undergoing cardiac surgery for other indications, concomitant AVR may be considered (COR IIB, LOE C)',
      'In patients with asymptomatic severe aortic stenosis and very low surgical risk, AVR may be considered (COR IIB, LOE B)',
      'In patients with severe tricuspid regurgitation and symptoms without left-sided valve disease, isolated tricuspid valve surgery may be considered (COR IIB, LOE C)',
    ],
    classIIIRecommendations: [
      'In patients with mild or moderate valvular heart disease without symptoms or LV dysfunction, valve intervention is not recommended (COR III, LOE C)',
      'In patients with severe secondary mitral regurgitation and prohibitive surgical risk, TEER should not be performed if unlikely to benefit (COR III, LOE C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of valvular heart disease guidelines requires systematic echocardiographic assessment to determine severity (mild, moderate, severe) and hemodynamic consequences. For aortic stenosis, assess valve area (<1.0 cm² = severe), mean gradient (>40 mmHg = severe), and peak velocity (>4 m/s = severe). Monitor asymptomatic patients with serial echocardiography (every 6-12 months for severe AS). Perform exercise testing in asymptomatic patients to unmask symptoms. For symptomatic severe AS, refer for AVR. Choose between SAVR and TAVR based on surgical risk (STS score), age, frailty, and anatomic factors. For mitral regurgitation, distinguish primary (degenerative) from secondary (functional) MR. Assess severity, LV function (LVEF, LVESD), and symptoms. Refer for surgery if symptomatic or if asymptomatic with LVEF <60% or LVESD >40 mm. Consider TEER for high surgical risk patients.',
    keyPoints: [
      'Severe symptomatic aortic stenosis requires AVR (SAVR or TAVR)',
      'TAVR preferred for intermediate-high surgical risk; SAVR for low risk',
      'Asymptomatic severe AS: monitor with serial echo, consider AVR if LVEF <50% or rapid progression',
      'Severe primary MR: surgery if symptomatic or if asymptomatic with LVEF <60% or LVESD >40 mm',
      'TEER (MitraClip) for high surgical risk patients with primary or secondary MR',
      'Mechanical valves require lifelong warfarin anticoagulation',
      'Bioprosthetic valves do not require long-term anticoagulation (unless AF or other indication)',
    ],
    accUrl: 'https://www.acc.org/guidelines/valvular-heart-disease',
    publicationYear: 2020,
  },

  // VENTRICULAR ARRHYTHMIAS AND SUDDEN CARDIAC DEATH GUIDELINES
  {
    topic: 'Ventricular Arrhythmias and Sudden Cardiac Death Prevention - ACC/AHA/HRS 2023 Guideline',
    keywords: ['ventricular arrhythmia', 'ventricular tachycardia', 'vt', 'ventricular fibrillation', 'vf', 'sudden cardiac death', 'scd', 'icd', 'implantable cardioverter defibrillator', 'cardiac arrest'],
    system: 'Cardiology',
    guidelineSummary: 'The 2023 ACC/AHA/HRS Guideline for the Management of Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death provides evidence-based recommendations for risk stratification, ICD implantation for primary and secondary prevention, catheter ablation for VT, and management of inherited arrhythmia syndromes. The guideline emphasizes shared decision-making, consideration of quality of life, and appropriate ICD programming to reduce inappropriate shocks.',
    classIRecommendations: [
      'In patients with prior cardiac arrest due to VF or hemodynamically unstable VT, ICD implantation is recommended for secondary prevention of SCD (COR 1, LOE A)',
      'In patients with ischemic cardiomyopathy, LVEF ≤35%, NYHA class II-III on GDMT for ≥3 months, ICD is recommended for primary prevention of SCD (COR 1, LOE A)',
      'In patients with nonischemic cardiomyopathy, LVEF ≤35%, NYHA class II-III on GDMT for ≥3 months, ICD is recommended for primary prevention of SCD (COR 1, LOE B)',
      'In patients with sustained VT and structural heart disease, catheter ablation is recommended to reduce VT recurrence (COR 1, LOE A)',
      'In patients with long QT syndrome and QTc >500 ms or prior syncope, beta-blockers are recommended to reduce SCD risk (COR 1, LOE B)',
      'In patients with hypertrophic cardiomyopathy and high SCD risk (≥6% 5-year risk), ICD is recommended (COR 1, LOE B)',
      'In patients with Brugada syndrome and prior cardiac arrest or sustained VT, ICD is recommended (COR 1, LOE B)',
    ],
    classIIARecommendations: [
      'In patients with ischemic cardiomyopathy and LVEF 36-40%, ICD can be beneficial for primary prevention if additional risk factors present (COR IIA, LOE B)',
      'In patients with recurrent VT despite antiarrhythmic drugs, catheter ablation is reasonable (COR IIA, LOE B)',
      'In patients with long QT syndrome and QTc 470-499 ms, beta-blockers are reasonable (COR IIA, LOE C)',
      'In patients with arrhythmogenic right ventricular cardiomyopathy and high-risk features, ICD is reasonable (COR IIA, LOE B)',
    ],
    classIIBRecommendations: [
      'In patients with nonischemic cardiomyopathy and LVEF 36-40%, ICD may be considered for primary prevention (COR IIB, LOE C)',
      'In patients with Brugada syndrome and syncope of unknown etiology, ICD may be considered (COR IIB, LOE C)',
      'In patients with catecholaminergic polymorphic VT, ICD may be considered if high-risk features despite beta-blocker therapy (COR IIB, LOE C)',
    ],
    classIIIRecommendations: [
      'In patients with NYHA class IV heart failure who are not candidates for cardiac transplantation or mechanical circulatory support, ICD is not recommended (COR III, LOE C)',
      'In patients with life expectancy <1 year due to non-cardiac causes, ICD is not recommended (COR III, LOE C)',
      'In patients with incessant VT or VF, ICD implantation should not be performed until arrhythmia is controlled (COR III, LOE C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of ventricular arrhythmia guidelines requires systematic risk stratification for SCD. For primary prevention, assess LVEF, NYHA class, and duration of GDMT. ICD indicated if LVEF ≤35% and NYHA II-III on GDMT ≥3 months (ischemic: ≥40 days post-MI; nonischemic: ≥3 months). For secondary prevention, ICD indicated after cardiac arrest or sustained VT. Ensure optimal GDMT before ICD implantation. Program ICD appropriately to minimize inappropriate shocks (detection zones, antitachycardia pacing). Consider catheter ablation for recurrent VT, especially in patients with frequent ICD shocks. For inherited arrhythmia syndromes (long QT, Brugada, ARVC, CPVT), perform genetic testing, family screening, and risk stratification. Beta-blockers are first-line for long QT syndrome. Shared decision-making is essential, considering quality of life, psychological impact, and patient preferences.',
    keyPoints: [
      'ICD for secondary prevention after cardiac arrest or sustained VT',
      'ICD for primary prevention if LVEF ≤35% and NYHA II-III on GDMT ≥3 months',
      'Ischemic cardiomyopathy: wait ≥40 days post-MI before ICD',
      'Nonischemic cardiomyopathy: wait ≥3 months on GDMT before ICD',
      'Catheter ablation reduces VT recurrence in structural heart disease',
      'Beta-blockers are first-line for long QT syndrome',
      'Appropriate ICD programming minimizes inappropriate shocks',
    ],
    accUrl: 'https://www.acc.org/guidelines/ventricular-arrhythmias',
    publicationYear: 2023,
  },
];

/**
 * Search function to find relevant ACC guideline entries based on query
 */
export function searchACCGuidelines(query: string): ACCGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = accGuidelinesKnowledge.map(entry => {
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

  console.log(`ACC Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ACC guideline by exact topic name
 */
export function getACCGuidelineByTopic(topic: string): ACCGuidelineEntry | undefined {
  return accGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ACC guidelines for a specific system
 */
export function getACCGuidelinesBySystem(system: string): ACCGuidelineEntry[] {
  return accGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
