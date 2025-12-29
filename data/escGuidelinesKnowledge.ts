
/**
 * European Society of Cardiology (ESC) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the European Society of Cardiology.
 * The ESC provides evidence-based guidelines for cardiovascular disease management across Europe.
 * 
 * INTEGRATION PHASE: ESC Guidelines (Phase 12)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - ESC guideline URL for reference
 */

export interface ESCGuidelineEntry {
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
  escUrl: string;
  publicationYear: number;
}

export const escGuidelinesKnowledge: ESCGuidelineEntry[] = [
  // ACUTE CORONARY SYNDROMES - STEMI
  {
    topic: 'ST-Elevation Myocardial Infarction Management - ESC 2023 Guideline',
    keywords: ['stemi', 'st elevation myocardial infarction', 'acute mi', 'heart attack', 'primary pci', 'fibrinolysis', 'reperfusion', 'coronary intervention'],
    system: 'Cardiology',
    guidelineSummary: 'The 2023 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation provide comprehensive recommendations for diagnosis, reperfusion strategies, and post-MI care. The guideline emphasizes rapid diagnosis using ECG and high-sensitivity troponin, immediate reperfusion with primary PCI (preferred) or fibrinolysis, dual antiplatelet therapy, and comprehensive secondary prevention including statins, beta-blockers, ACE inhibitors, and cardiac rehabilitation.',
    classIRecommendations: [
      'In patients with STEMI, immediate reperfusion therapy with primary PCI (if available within 120 minutes) or fibrinolysis (if PCI not available within 120 minutes) is recommended (Class I, Level A)',
      'In patients with STEMI undergoing primary PCI, radial access is recommended over femoral access to reduce bleeding complications (Class I, Level A)',
      'In patients with STEMI, dual antiplatelet therapy with aspirin plus a P2Y12 inhibitor (ticagrelor or prasugrel preferred over clopidogrel) for 12 months is recommended (Class I, Level A)',
      'In patients with STEMI, high-intensity statin therapy should be initiated as early as possible and continued long-term (Class I, Level A)',
      'In patients with STEMI and LVEF ≤40%, ACE inhibitors (or ARBs if ACE inhibitor intolerant) are recommended to reduce mortality (Class I, Level A)',
      'In patients with STEMI without contraindications, beta-blockers should be initiated within 24 hours (Class I, Level A)',
      'In patients with STEMI and cardiogenic shock, emergency revascularization with PCI or CABG is recommended (Class I, Level B)',
      'In patients with STEMI, complete revascularization of significant stenoses in non-infarct-related arteries is recommended before hospital discharge (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with STEMI presenting to a non-PCI-capable hospital, immediate transfer for primary PCI is reasonable if first medical contact to device time can be achieved within 120 minutes (Class IIA, Level B)',
      'In patients with STEMI and multivessel disease, immediate complete revascularization during index PCI is reasonable in selected patients (Class IIA, Level B)',
      'In patients with STEMI, routine thrombus aspiration may be considered during primary PCI (Class IIA, Level B)',
      'In patients with STEMI and high bleeding risk, shorter duration of DAPT (3-6 months) followed by P2Y12 inhibitor monotherapy is reasonable (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with STEMI and successful fibrinolysis, routine early angiography (2-24 hours) may be considered (Class IIB, Level B)',
      'In patients with STEMI, intracoronary imaging (IVUS or OCT) may be considered to optimize PCI results (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with STEMI, fibrinolysis should not be given if symptom onset >12 hours unless ongoing ischemia (Class III, Level C)',
      'In patients with STEMI, routine use of glycoprotein IIb/IIIa inhibitors is not recommended (Class III, Level A)',
      'In patients with STEMI, NSAIDs (except aspirin) should be discontinued due to increased cardiovascular risk (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials and meta-analyses',
    clinicalImplementation: 'Implementation of ESC STEMI guidelines requires a systems-based approach with established STEMI networks for rapid diagnosis and reperfusion. For STEMI diagnosis, obtain 12-lead ECG within 10 minutes of first medical contact; ST elevation ≥1 mm in ≥2 contiguous leads or new LBBB indicates STEMI. Activate catheterization lab immediately for primary PCI (target door-to-balloon time <90 minutes for direct presentation, <120 minutes for transfer). Give aspirin 150-300 mg (chewed), P2Y12 inhibitor loading dose (ticagrelor 180 mg or prasugrel 60 mg preferred over clopidogrel 600 mg), anticoagulation (unfractionated heparin or bivalirudin), and consider morphine for pain. Radial access preferred over femoral to reduce bleeding. For patients presenting to non-PCI-capable hospitals, transfer for primary PCI if first medical contact to device time <120 minutes; otherwise, give fibrinolysis (tenecteplase preferred) within 30 minutes. Post-PCI: continue DAPT for 12 months, initiate high-intensity statin, beta-blocker, ACE inhibitor. Assess for complete revascularization of non-culprit lesions before discharge. Provide cardiac rehabilitation and secondary prevention counseling.',
    keyPoints: [
      'STEMI diagnosis: ST elevation ≥1 mm in ≥2 contiguous leads or new LBBB',
      'Primary PCI preferred if available within 120 minutes of first medical contact',
      'Radial access preferred over femoral access for primary PCI',
      'DAPT: aspirin + ticagrelor or prasugrel for 12 months',
      'Complete revascularization of non-culprit lesions before discharge',
      'High-intensity statin, beta-blocker, ACE inhibitor for secondary prevention',
      'Fibrinolysis if PCI not available within 120 minutes',
      'Cardiogenic shock requires emergency revascularization',
    ],
    escUrl: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Myocardial-Infarction-in-patients-presenting-with-ST-segment-elevation-Ma',
    publicationYear: 2023,
  },

  // ACUTE CORONARY SYNDROMES - NSTEMI
  {
    topic: 'Non-ST-Elevation Acute Coronary Syndromes - ESC 2023 Guideline',
    keywords: ['nstemi', 'non st elevation myocardial infarction', 'unstable angina', 'acs', 'acute coronary syndrome', 'troponin', 'grace score', 'early invasive strategy'],
    system: 'Cardiology',
    guidelineSummary: 'The 2023 ESC Guidelines for the management of acute coronary syndromes without persistent ST-segment elevation provide evidence-based recommendations for diagnosis, risk stratification, and management of NSTEMI and unstable angina. The guideline emphasizes high-sensitivity troponin for diagnosis, GRACE score for risk stratification, early invasive strategy for high-risk patients, dual antiplatelet therapy, and comprehensive secondary prevention.',
    classIRecommendations: [
      'In patients with suspected NSTE-ACS, high-sensitivity cardiac troponin should be measured at presentation and 1-3 hours later for diagnosis (Class I, Level A)',
      'In patients with NSTE-ACS, risk stratification using the GRACE score is recommended to guide management strategy (Class I, Level B)',
      'In patients with NSTE-ACS at very high risk (hemodynamic instability, cardiogenic shock, life-threatening arrhythmias, mechanical complications), immediate invasive strategy (<2 hours) is recommended (Class I, Level C)',
      'In patients with NSTE-ACS at high risk (GRACE score >140, dynamic ST/T changes, elevated troponin), early invasive strategy (<24 hours) is recommended (Class I, Level A)',
      'In patients with NSTE-ACS, dual antiplatelet therapy with aspirin plus a P2Y12 inhibitor (ticagrelor or prasugrel preferred over clopidogrel) for 12 months is recommended (Class I, Level A)',
      'In patients with NSTE-ACS, anticoagulation with fondaparinux, enoxaparin, or unfractionated heparin is recommended (Class I, Level A)',
      'In patients with NSTE-ACS, high-intensity statin therapy should be initiated immediately (Class I, Level A)',
      'In patients with NSTE-ACS and LVEF <40%, ACE inhibitors are recommended (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with NSTE-ACS at intermediate risk (GRACE score 109-140), invasive strategy within 24-72 hours is reasonable (Class IIA, Level A)',
      'In patients with NSTE-ACS at low risk (GRACE score <109) with recurrent symptoms or inducible ischemia, invasive strategy is reasonable (Class IIA, Level B)',
      'In patients with NSTE-ACS undergoing PCI, radial access is reasonable over femoral access to reduce bleeding (Class IIA, Level A)',
      'In patients with NSTE-ACS and high bleeding risk, shorter duration of DAPT (3-6 months) followed by P2Y12 inhibitor monotherapy is reasonable (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with NSTE-ACS at low risk without recurrent symptoms, conservative management with medical therapy may be considered (Class IIB, Level B)',
      'In patients with NSTE-ACS, routine use of glycoprotein IIb/IIIa inhibitors may be considered in selected high-risk patients (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with NSTE-ACS, routine invasive strategy is not recommended in patients with low risk and no recurrent symptoms (Class III, Level A)',
      'In patients with NSTE-ACS, NSAIDs (except aspirin) should be discontinued (Class III, Level B)',
      'In patients with NSTE-ACS, routine upstream use of glycoprotein IIb/IIIa inhibitors is not recommended (Class III, Level A)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of ESC NSTE-ACS guidelines requires systematic risk stratification and timing of invasive strategy. For diagnosis, measure high-sensitivity troponin at presentation and 1-3 hours later; elevated troponin with clinical context indicates NSTEMI. Calculate GRACE score (age, heart rate, systolic BP, creatinine, cardiac arrest, ST deviation, elevated troponin, Killip class) to stratify risk: very high risk (immediate invasive <2 hours), high risk (early invasive <24 hours), intermediate risk (invasive 24-72 hours), low risk (conservative or selective invasive). Give aspirin 150-300 mg loading dose, P2Y12 inhibitor (ticagrelor 180 mg or prasugrel 60 mg preferred over clopidogrel 600 mg), anticoagulation (fondaparinux 2.5 mg SC daily preferred, or enoxaparin 1 mg/kg SC BID, or UFH). Initiate high-intensity statin, beta-blocker, ACE inhibitor. For very high-risk patients (hemodynamic instability, cardiogenic shock, ventricular arrhythmias, mechanical complications), perform immediate angiography <2 hours. For high-risk patients (GRACE >140, dynamic ST/T changes, elevated troponin), perform early angiography <24 hours. For intermediate-risk patients (GRACE 109-140), perform angiography within 24-72 hours. Continue DAPT for 12 months post-ACS. Provide cardiac rehabilitation and secondary prevention.',
    keyPoints: [
      'High-sensitivity troponin at 0 and 1-3 hours for diagnosis',
      'GRACE score for risk stratification: very high, high, intermediate, low',
      'Very high risk: immediate invasive strategy <2 hours',
      'High risk: early invasive strategy <24 hours',
      'Intermediate risk: invasive strategy 24-72 hours',
      'DAPT: aspirin + ticagrelor or prasugrel for 12 months',
      'Fondaparinux preferred anticoagulant (lower bleeding risk)',
      'High-intensity statin, beta-blocker, ACE inhibitor for secondary prevention',
    ],
    escUrl: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Coronary-Syndromes-ACS-in-patients-presenting-without-persistent-ST-segm',
    publicationYear: 2023,
  },

  // HEART FAILURE
  {
    topic: 'Heart Failure Management - ESC 2021 Guideline',
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'hfmref', 'systolic heart failure', 'diastolic heart failure', 'gdmt', 'arni', 'sglt2 inhibitor'],
    system: 'Cardiology',
    guidelineSummary: 'The 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure provide comprehensive recommendations for HF management. The guideline emphasizes four pillars of therapy for HFrEF (ACE-I/ARB/ARNI, beta-blocker, MRA, SGLT2 inhibitor), early initiation and rapid uptitration of GDMT, device therapy (ICD, CRT), and management of HFpEF and HFmrEF. The guideline introduces the concept of HFmrEF (LVEF 41-49%) as a distinct entity.',
    classIRecommendations: [
      'In patients with HFrEF (LVEF ≤40%), ACE inhibitors are recommended to reduce mortality and HF hospitalizations (Class I, Level A)',
      'In patients with HFrEF, beta-blockers (bisoprolol, carvedilol, metoprolol succinate, or nebivolol) are recommended to reduce mortality and HF hospitalizations (Class I, Level A)',
      'In patients with HFrEF, mineralocorticoid receptor antagonists (spironolactone or eplerenone) are recommended to reduce mortality and HF hospitalizations (Class I, Level A)',
      'In patients with HFrEF, SGLT2 inhibitors (dapagliflozin or empagliflozin) are recommended to reduce mortality and HF hospitalizations (Class I, Level A)',
      'In patients with HFrEF who remain symptomatic despite ACE inhibitor, sacubitril/valsartan is recommended to replace ACE inhibitor to further reduce mortality and HF hospitalizations (Class I, Level B)',
      'In patients with symptomatic HF, diuretics are recommended to improve symptoms and reduce HF hospitalizations (Class I, Level B)',
      'In patients with HFrEF, LVEF ≤35%, NYHA class II-III on GDMT, and QRS ≥150 ms with LBBB, CRT is recommended (Class I, Level A)',
      'In patients with HFrEF, LVEF ≤35% on GDMT, and life expectancy >1 year, ICD is recommended for primary prevention of sudden cardiac death (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with HFrEF and heart rate ≥70 bpm in sinus rhythm despite maximally tolerated beta-blocker, ivabradine is reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with HFrEF and iron deficiency (ferritin <100 ng/mL or ferritin 100-299 ng/mL with transferrin saturation <20%), intravenous iron replacement is reasonable to improve symptoms and quality of life (Class IIA, Level A)',
      'In patients with HFmrEF (LVEF 41-49%), SGLT2 inhibitors are reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with HFpEF (LVEF ≥50%), SGLT2 inhibitors are reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with advanced HF despite GDMT, referral to an advanced HF center for consideration of mechanical circulatory support or transplantation is reasonable (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with HFrEF, vericiguat may be considered to reduce HF hospitalizations in patients with recent worsening HF (Class IIB, Level B)',
      'In patients with HFpEF, MRAs may be considered to reduce HF hospitalizations (Class IIB, Level B)',
      'In patients with HFpEF, ARBs may be considered to reduce HF hospitalizations (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with HFrEF, calcium channel blockers (diltiazem, verapamil) are not recommended as they may worsen HF (Class III, Level C)',
      'In patients with HF, NSAIDs and COX-2 inhibitors should be avoided as they can worsen HF and increase hospitalizations (Class III, Level B)',
      'In patients with HFrEF, thiazolidinediones should be avoided as they increase HF hospitalizations (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of ESC HF guidelines requires systematic initiation and rapid uptitration of all four pillars of GDMT for HFrEF. Start medications at low doses and uptitrate to target or maximally tolerated doses over 4-6 weeks. Four pillars: (1) ACE-I (or ARB if intolerant, or ARNI if symptomatic despite ACE-I): enalapril 10 mg BID, ramipril 5 mg BID, or sacubitril/valsartan 97/103 mg BID; (2) Beta-blocker: bisoprolol 10 mg daily, carvedilol 25 mg BID, or metoprolol succinate 200 mg daily; (3) MRA: spironolactone 25-50 mg daily or eplerenone 50 mg daily; (4) SGLT2i: dapagliflozin 10 mg daily or empagliflozin 10 mg daily. Monitor renal function, potassium, and blood pressure during uptitration. For symptomatic patients, add diuretics (furosemide, bumetanide, or torsemide) titrated to euvolemia. Consider device therapy: CRT for LVEF ≤35%, NYHA II-III, QRS ≥150 ms with LBBB; ICD for LVEF ≤35% on GDMT. For HFpEF, focus on treating comorbidities (hypertension, AF, diabetes, obesity), managing volume with diuretics, and consider SGLT2 inhibitors. Ensure patient education on daily weights, sodium restriction (<2 g/day), fluid restriction if severe HF, and medication adherence. Provide cardiac rehabilitation and regular follow-up.',
    keyPoints: [
      'Four pillars of GDMT for HFrEF: ACE-I/ARB/ARNI + beta-blocker + MRA + SGLT2i',
      'SGLT2 inhibitors are Class I recommendation for HFrEF',
      'Sacubitril/valsartan (ARNI) replaces ACE-I in symptomatic patients',
      'Start GDMT early and uptitrate rapidly to target doses',
      'HFmrEF (LVEF 41-49%) is a distinct entity; SGLT2i recommended',
      'HFpEF (LVEF ≥50%): treat comorbidities, diuretics, consider SGLT2i',
      'CRT for LVEF ≤35%, NYHA II-III, QRS ≥150 ms with LBBB',
      'ICD for LVEF ≤35% on GDMT for primary prevention',
    ],
    escUrl: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Heart-Failure-Acute-and-Chronic',
    publicationYear: 2021,
  },

  // ATRIAL FIBRILLATION
  {
    topic: 'Atrial Fibrillation Management - ESC 2020 Guideline',
    keywords: ['atrial fibrillation', 'afib', 'af', 'a-fib', 'atrial fib', 'rate control', 'rhythm control', 'anticoagulation', 'stroke prevention', 'cha2ds2-vasc', 'has-bled', 'doac', 'catheter ablation'],
    system: 'Cardiology',
    guidelineSummary: 'The 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation provide comprehensive recommendations for AF management using the ABC pathway: A (Anticoagulation/Avoid stroke), B (Better symptom management), C (Cardiovascular and Comorbidity optimization). The guideline emphasizes systematic stroke risk assessment using CHA2DS2-VASc score, preference for DOACs over warfarin, early rhythm control for symptomatic patients, and catheter ablation as first-line therapy for selected patients.',
    classIRecommendations: [
      'In patients with AF and CHA2DS2-VASc score ≥2 in men or ≥3 in women, oral anticoagulation with a DOAC or VKA is recommended to reduce stroke risk (Class I, Level A)',
      'In patients with AF and CHA2DS2-VASc score ≥2, DOACs (apixaban, dabigatran, edoxaban, rivaroxaban) are recommended over VKA unless contraindicated (mechanical heart valve, moderate-severe mitral stenosis) (Class I, Level A)',
      'In patients with AF, assessment of bleeding risk using HAS-BLED score is recommended to identify modifiable bleeding risk factors (Class I, Level B)',
      'In patients with symptomatic AF, rate control with beta-blockers or non-dihydropyridine calcium channel blockers is recommended as initial therapy (Class I, Level B)',
      'In patients with symptomatic AF despite adequate rate control, rhythm control with antiarrhythmic drugs or catheter ablation is recommended (Class I, Level A)',
      'In patients with AF and heart failure with reduced ejection fraction, catheter ablation is recommended to improve symptoms and reduce hospitalizations (Class I, Level A)',
      'In patients with AF undergoing cardioversion, anticoagulation for at least 3 weeks before and 4 weeks after cardioversion is recommended (Class I, Level B)',
      'In patients with AF, integrated management of cardiovascular risk factors and comorbidities (hypertension, heart failure, diabetes, obesity, sleep apnea) is recommended (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with symptomatic paroxysmal AF, catheter ablation is reasonable as first-line therapy to improve symptoms and quality of life (Class IIA, Level B)',
      'In patients with AF and CHA2DS2-VASc score 1 in men or 2 in women, anticoagulation is reasonable based on individual risk-benefit assessment (Class IIA, Level B)',
      'In patients with AF and rapid ventricular response causing hemodynamic instability, urgent electrical cardioversion is reasonable (Class IIA, Level C)',
      'In patients with AF and contraindications to long-term anticoagulation, left atrial appendage occlusion is reasonable for stroke prevention (Class IIA, Level B)',
      'In patients with early persistent AF (<1 year), early rhythm control is reasonable to improve outcomes (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with persistent AF, rhythm control with antiarrhythmic drugs may be considered to improve symptoms (Class IIB, Level B)',
      'In patients with AF and heart rate >110 bpm at rest despite beta-blocker or calcium channel blocker, digoxin may be considered for additional rate control (Class IIB, Level B)',
      'In patients with AF and obesity, weight loss may be considered to reduce AF burden (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with AF and no stroke risk factors (CHA2DS2-VASc score 0 in men or 1 in women), anticoagulation is not recommended (Class III, Level B)',
      'In patients with AF, aspirin alone is not recommended for stroke prevention as it is less effective than anticoagulation (Class III, Level A)',
      'In patients with AF, dual antiplatelet therapy (aspirin + clopidogrel) is not recommended for stroke prevention unless there is a separate indication (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of ESC AF guidelines follows the ABC pathway. A (Anticoagulation): Calculate CHA2DS2-VASc score (CHF, Hypertension, Age ≥75 [2 points], Diabetes, Stroke/TIA [2 points], Vascular disease, Age 65-74, Sex [female]). Anticoagulate if score ≥2 (men) or ≥3 (women). DOACs preferred: apixaban 5 mg BID, dabigatran 150 mg BID, edoxaban 60 mg daily, rivaroxaban 20 mg daily. Assess bleeding risk with HAS-BLED score (Hypertension, Abnormal renal/liver function, Stroke, Bleeding, Labile INR, Elderly >65, Drugs/alcohol); score ≥3 indicates high bleeding risk but is not a contraindication to anticoagulation. B (Better symptom management): For rate control, use beta-blocker (metoprolol, bisoprolol) or non-dihydropyridine CCB (diltiazem, verapamil) targeting resting HR <110 bpm (lenient) or <80 bpm (strict). For rhythm control, consider early rhythm control in symptomatic patients, especially if AF <1 year. Catheter ablation is first-line for AF with HFrEF and reasonable as first-line for symptomatic paroxysmal AF. C (Cardiovascular and Comorbidity optimization): Treat hypertension (target <130/80 mmHg), optimize HF therapy, control diabetes (HbA1c <7%), encourage weight loss if obese (target BMI <27), screen and treat sleep apnea, limit alcohol. Continue anticoagulation indefinitely regardless of rhythm status.',
    keyPoints: [
      'ABC pathway: Anticoagulation, Better symptom management, Cardiovascular optimization',
      'CHA2DS2-VASc ≥2 (men) or ≥3 (women) requires anticoagulation',
      'DOACs preferred over warfarin for most patients',
      'HAS-BLED score identifies modifiable bleeding risk factors',
      'Rate control: beta-blocker or non-dihydropyridine CCB, target HR <110 bpm',
      'Early rhythm control improves outcomes in newly diagnosed AF',
      'Catheter ablation is first-line for AF with HFrEF',
      'Catheter ablation reasonable as first-line for symptomatic paroxysmal AF',
      'Treat comorbidities: hypertension, HF, diabetes, obesity, sleep apnea',
    ],
    escUrl: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Atrial-Fibrillation-Management',
    publicationYear: 2020,
  },

  // VALVULAR HEART DISEASE
  {
    topic: 'Valvular Heart Disease Management - ESC/EACTS 2021 Guideline',
    keywords: ['valvular heart disease', 'valve disease', 'aortic stenosis', 'aortic regurgitation', 'mitral stenosis', 'mitral regurgitation', 'tricuspid regurgitation', 'valve replacement', 'tavr', 'savr', 'tavi'],
    system: 'Cardiology',
    guidelineSummary: 'The 2021 ESC/EACTS Guidelines for the management of valvular heart disease provide comprehensive recommendations for diagnosis, evaluation, and management of valvular disorders. The guideline emphasizes the role of echocardiography for diagnosis and serial monitoring, timing of intervention based on symptoms and ventricular function, Heart Team approach for treatment decisions, and selection between surgical (SAVR) and transcatheter (TAVR/TAVI) valve replacement based on surgical risk, age, and anatomic factors.',
    classIRecommendations: [
      'In patients with severe symptomatic aortic stenosis, aortic valve replacement (SAVR or TAVR) is recommended (Class I, Level A)',
      'In patients with severe aortic stenosis undergoing cardiac surgery for other indications, concomitant AVR is recommended (Class I, Level B)',
      'In patients with severe aortic stenosis and LVEF <50%, AVR is recommended regardless of symptoms (Class I, Level B)',
      'In patients with severe primary mitral regurgitation and symptoms, mitral valve surgery is recommended (Class I, Level B)',
      'In patients with severe primary mitral regurgitation and LVEF <60% or LV end-systolic diameter >40 mm, mitral valve surgery is recommended even if asymptomatic (Class I, Level B)',
      'In patients with severe mitral stenosis and symptoms, percutaneous mitral commissurotomy (PMC) is recommended if favorable valve anatomy (Class I, Level A)',
      'In patients with severe symptomatic tricuspid regurgitation, tricuspid valve surgery is recommended if undergoing left-sided valve surgery (Class I, Level B)',
      'In patients with prosthetic valves, anticoagulation with VKA is recommended for mechanical valves (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with severe asymptomatic aortic stenosis and rapid progression (Vmax increase ≥0.3 m/s/year), AVR is reasonable (Class IIA, Level B)',
      'In patients with severe aortic stenosis at low surgical risk (<4% mortality), SAVR is reasonable (Class IIA, Level A)',
      'In patients with severe aortic stenosis at intermediate or high surgical risk, TAVR is reasonable (Class IIA, Level A)',
      'In patients with severe primary mitral regurgitation and preserved LV function who are symptomatic, transcatheter edge-to-edge repair (TEER) is reasonable if high surgical risk (Class IIA, Level B)',
      'In patients with severe secondary mitral regurgitation despite GDMT, TEER can be beneficial to improve symptoms (Class IIA, Level B)',
      'In patients with severe aortic stenosis and low-flow, low-gradient despite normal LVEF, AVR is reasonable if valve is truly stenotic on dobutamine stress echo (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with moderate aortic stenosis undergoing cardiac surgery for other indications, concomitant AVR may be considered (Class IIB, Level C)',
      'In patients with asymptomatic severe aortic stenosis and very low surgical risk, AVR may be considered (Class IIB, Level B)',
      'In patients with severe tricuspid regurgitation and symptoms without left-sided valve disease, isolated tricuspid valve surgery may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with mild or moderate valvular heart disease without symptoms or LV dysfunction, valve intervention is not recommended (Class III, Level C)',
      'In patients with severe secondary mitral regurgitation and prohibitive surgical risk, TEER should not be performed if unlikely to benefit (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of ESC/EACTS valvular heart disease guidelines requires systematic echocardiographic assessment and Heart Team approach. For aortic stenosis, assess severity: valve area <1.0 cm² (severe), mean gradient >40 mmHg (severe), peak velocity >4 m/s (severe). Monitor asymptomatic patients with serial echocardiography (every 6-12 months for severe AS). Perform exercise testing in asymptomatic patients to unmask symptoms or abnormal BP response. For symptomatic severe AS, refer to Heart Team for AVR decision. Choose between SAVR and TAVR based on surgical risk (STS/EuroSCORE), age, frailty, and anatomic factors: SAVR for low surgical risk (<4% mortality), TAVR for intermediate-high risk or elderly patients. For mitral regurgitation, distinguish primary (degenerative, prolapse, flail) from secondary (functional, ischemic). Assess severity, LV function (LVEF, LVESD), and symptoms. Refer for surgery if symptomatic or if asymptomatic with LVEF <60% or LVESD >40 mm. Mitral valve repair preferred over replacement for primary MR. Consider TEER (MitraClip) for high surgical risk patients with primary or secondary MR. For mitral stenosis, assess valve anatomy (Wilkins score) and suitability for PMC. PMC preferred if favorable anatomy (Wilkins score ≤8, no LA thrombus, no/mild MR). For tricuspid regurgitation, repair during left-sided valve surgery if severe or moderate with annular dilatation. Mechanical valves require lifelong VKA anticoagulation (target INR based on valve type/position). Bioprosthetic valves do not require long-term anticoagulation unless AF or other indication.',
    keyPoints: [
      'Severe symptomatic aortic stenosis requires AVR (SAVR or TAVR)',
      'SAVR for low surgical risk; TAVR for intermediate-high risk',
      'Asymptomatic severe AS: monitor with serial echo, consider AVR if LVEF <50% or rapid progression',
      'Severe primary MR: surgery if symptomatic or if asymptomatic with LVEF <60% or LVESD >40 mm',
      'Mitral valve repair preferred over replacement for primary MR',
      'TEER (MitraClip) for high surgical risk patients with primary or secondary MR',
      'PMC for severe mitral stenosis with favorable anatomy',
      'Mechanical valves require lifelong VKA anticoagulation',
      'Heart Team approach for treatment decisions',
    ],
    escUrl: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Valvular-Heart-Disease',
    publicationYear: 2021,
  },

  // HYPERTENSION
  {
    topic: 'Hypertension Management - ESC/ESH 2018 Guideline',
    keywords: ['hypertension', 'high blood pressure', 'htn', 'elevated blood pressure', 'blood pressure management', 'antihypertensive therapy', 'bp control'],
    system: 'Cardiology',
    guidelineSummary: 'The 2018 ESC/ESH Guidelines for the management of arterial hypertension provide evidence-based recommendations for BP measurement, diagnosis, risk assessment, and treatment. The guideline emphasizes accurate BP measurement, out-of-office BP monitoring, cardiovascular risk assessment, lifestyle modifications, and pharmacologic therapy. Target BP is <140/90 mmHg for most adults, with lower targets (<130/80 mmHg) for younger patients if tolerated. First-line therapy is combination of ACE inhibitor or ARB plus calcium channel blocker or thiazide diuretic.',
    classIRecommendations: [
      'In adults with hypertension, out-of-office BP measurements (home BP monitoring or ambulatory BP monitoring) are recommended to confirm diagnosis and assess BP control (Class I, Level A)',
      'In adults with hypertension, lifestyle modifications including weight loss, DASH diet, sodium reduction (<5 g/day), increased physical activity (150 min/week moderate intensity), and limited alcohol intake are recommended (Class I, Level A)',
      'In adults with grade 2-3 hypertension (BP ≥160/100 mmHg) or grade 1 hypertension (BP 140-159/90-99 mmHg) with high cardiovascular risk, antihypertensive medication is recommended in addition to lifestyle modifications (Class I, Level A)',
      'In adults with hypertension, target BP is <140/90 mmHg for all patients (Class I, Level A)',
      'In adults with hypertension aged <65 years, target systolic BP 120-129 mmHg is recommended if treatment is well tolerated (Class I, Level A)',
      'In adults with hypertension, initial therapy with combination of ACE inhibitor or ARB plus calcium channel blocker or thiazide diuretic is recommended (Class I, Level A)',
      'In adults with hypertension and CKD, ACE inhibitors or ARBs are recommended as first-line therapy (Class I, Level A)',
      'In adults with hypertension and diabetes, ACE inhibitors or ARBs are recommended as first-line therapy (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In adults with grade 1 hypertension and low-moderate cardiovascular risk, antihypertensive medication is reasonable in addition to lifestyle modifications (Class IIA, Level C)',
      'In adults with resistant hypertension (BP not controlled on 3 medications including diuretic), addition of spironolactone is reasonable (Class IIA, Level B)',
      'In adults with hypertension, self-measured BP monitoring is reasonable to improve BP control and medication adherence (Class IIA, Level A)',
      'In adults with white coat hypertension (elevated office BP but normal out-of-office BP), close monitoring without antihypertensive medication is reasonable (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In adults with high-normal BP (130-139/85-89 mmHg) and high cardiovascular risk, antihypertensive medication may be considered (Class IIB, Level C)',
      'In adults with resistant hypertension, renal denervation may be considered as adjunctive therapy (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In adults with high-normal BP (130-139/85-89 mmHg) without high cardiovascular risk, antihypertensive medication is not recommended (Class III, Level C)',
      'In adults with hypertension, beta-blockers are not recommended as first-line therapy unless there is a compelling indication (heart failure, post-MI, angina, AF) (Class III, Level A)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from randomized controlled trials and meta-analyses',
    clinicalImplementation: 'Implementation of ESC/ESH hypertension guidelines requires accurate BP measurement and systematic treatment approach. Measure BP using proper technique: patient seated quietly for 5 minutes, back supported, feet flat on floor, arm at heart level, appropriate cuff size, average of 2-3 readings. Confirm diagnosis with out-of-office BP measurements (home BP monitoring or ABPM). Classify hypertension: grade 1 (140-159/90-99 mmHg), grade 2 (160-179/100-109 mmHg), grade 3 (≥180/110 mmHg). Assess cardiovascular risk using SCORE (Systematic COronary Risk Evaluation) or equivalent. Initiate lifestyle modifications for all patients: weight loss if overweight (target BMI <25), DASH diet, sodium restriction (<5 g/day), increased physical activity (150 min/week moderate intensity), limited alcohol (≤2 drinks/day men, ≤1 drink/day women). For pharmacologic therapy, start with combination therapy (single-pill combination preferred for adherence): ACE-I or ARB + CCB or thiazide diuretic. Preferred combinations: ACE-I + CCB, ACE-I + thiazide, ARB + CCB, ARB + thiazide. Avoid ACE-I + ARB combination. Target BP <140/90 mmHg for all; <130/80 mmHg for patients <65 years if tolerated. For resistant hypertension (uncontrolled on 3 drugs including diuretic), add spironolactone 25-50 mg daily. Screen for secondary hypertension in young patients (<40 years) or resistant hypertension. Monitor BP and adjust medications to achieve target.',
    keyPoints: [
      'Hypertension: grade 1 (140-159/90-99), grade 2 (160-179/100-109), grade 3 (≥180/110)',
      'Target BP <140/90 mmHg for all; <130/80 mmHg for age <65 if tolerated',
      'Confirm diagnosis with out-of-office BP measurements (home BP or ABPM)',
      'Lifestyle modifications for all: weight loss, DASH diet, sodium <5 g/day, exercise 150 min/week',
      'Initial therapy: combination of ACE-I or ARB + CCB or thiazide diuretic',
      'Single-pill combination preferred for adherence',
      'ACE-I/ARB preferred for diabetes or CKD',
      'Spironolactone for resistant hypertension',
      'Beta-blockers not first-line unless compelling indication',
    ],
    escUrl: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Arterial-Hypertension-Management-of',
    publicationYear: 2018,
  },
];

/**
 * Search function to find relevant ESC guideline entries based on query
 */
export function searchESCGuidelines(query: string): ESCGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = escGuidelinesKnowledge.map(entry => {
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

  console.log(`ESC Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ESC guideline by exact topic name
 */
export function getESCGuidelineByTopic(topic: string): ESCGuidelineEntry | undefined {
  return escGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ESC guidelines for a specific system
 */
export function getESCGuidelinesBySystem(system: string): ESCGuidelineEntry[] {
  return escGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
