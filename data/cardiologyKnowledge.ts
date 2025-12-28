
/**
 * Cardiology System Knowledge Base - Merck Manual Professional
 * 
 * Comprehensive cardiology knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major cardiovascular conditions.
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const cardiologyKnowledge: MerckManualEntry[] = [
  // ARRHYTHMIAS & CONDUCTION DISORDERS
  {
    topic: 'Atrial Fibrillation',
    keywords: ['atrial fibrillation', 'afib', 'af', 'a-fib', 'a fib', 'atrial fib'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, atrial fibrillation is characterized by rapid, disorganized atrial electrical activity resulting in ineffective atrial contraction and an irregularly irregular ventricular response. The condition arises from multiple reentrant wavelets in the atria, often triggered by ectopic foci near the pulmonary veins. This leads to loss of coordinated atrial mechanical function and increased risk of thrombus formation in the left atrial appendage.',
    clinicalPresentation: 'Patients may be asymptomatic or present with palpitations, dyspnea, chest discomfort, fatigue, or lightheadedness. Physical examination reveals an irregularly irregular pulse. Some patients present with complications such as stroke or heart failure exacerbation.',
    diagnosticApproach: 'Diagnosis is confirmed by ECG showing absence of P waves, irregularly irregular R-R intervals, and fibrillatory waves. Evaluation includes assessment for underlying causes (thyroid disease, valvular disease, hypertension), echocardiography to evaluate cardiac structure and function, and risk stratification using CHA2DS2-VASc score for stroke risk.',
    treatment: 'Management involves rate control (beta-blockers, calcium channel blockers, or digoxin), rhythm control (cardioversion, antiarrhythmic drugs, or catheter ablation), and anticoagulation based on CHA2DS2-VASc score. Direct oral anticoagulants (DOACs) are preferred over warfarin for most patients. Catheter ablation is increasingly used for symptomatic patients, particularly those with paroxysmal AF.',
    clinicalPearls: [
      'Always assess CHA2DS2-VASc score to determine anticoagulation need',
      'Rate control is often sufficient for asymptomatic elderly patients',
      'New-onset AF with hemodynamic instability requires urgent cardioversion',
      'Screen for sleep apnea and treat modifiable risk factors'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/atrial-fibrillation'
  },

  {
    topic: 'Heart Failure',
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'cardiac failure', 'systolic heart failure', 'diastolic heart failure'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, heart failure is a clinical syndrome resulting from structural or functional cardiac disorders that impair ventricular filling or ejection. HFrEF (reduced ejection fraction <40%) involves impaired systolic function, while HFpEF (preserved EF ≥50%) involves diastolic dysfunction with impaired ventricular relaxation and filling. Neurohormonal activation (RAAS, sympathetic nervous system) initially compensates but ultimately contributes to disease progression through adverse remodeling.',
    clinicalPresentation: 'Patients present with dyspnea (exertional, orthopnea, paroxysmal nocturnal dyspnea), fatigue, fluid retention (peripheral edema, ascites), and reduced exercise tolerance. Physical examination may reveal elevated jugular venous pressure, S3 gallop, pulmonary rales, hepatomegaly, and peripheral edema.',
    diagnosticApproach: 'Diagnosis requires clinical assessment plus objective evidence of cardiac dysfunction. BNP or NT-proBNP levels support diagnosis. Echocardiography is essential to assess ejection fraction, valvular function, and diastolic parameters. Chest X-ray may show cardiomegaly and pulmonary congestion.',
    treatment: 'HFrEF management includes guideline-directed medical therapy (GDMT): ACE inhibitors/ARBs/ARNI, beta-blockers, mineralocorticoid receptor antagonists, and SGLT2 inhibitors. Diuretics manage volume overload. Device therapy (ICD, CRT) for selected patients. HFpEF treatment focuses on managing comorbidities, diuretics for congestion, and SGLT2 inhibitors.',
    clinicalPearls: [
      'Start all four pillars of GDMT early and titrate to target doses',
      'SGLT2 inhibitors benefit both HFrEF and HFpEF patients',
      'Daily weights help detect early decompensation',
      'Sodium restriction (<2g/day) and fluid management are essential'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/heart-failure-hf'
  },

  {
    topic: 'Myocardial Infarction',
    keywords: ['myocardial infarction', 'mi', 'heart attack', 'stemi', 'nstemi', 'acute coronary syndrome', 'acs'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, myocardial infarction results from acute coronary artery occlusion, typically due to atherosclerotic plaque rupture with superimposed thrombosis. STEMI involves complete occlusion with transmural infarction, while NSTEMI involves partial occlusion or transient complete occlusion with subendocardial infarction.',
    clinicalPresentation: 'Classic presentation includes substernal chest pressure or pain radiating to left arm, jaw, or back, often accompanied by diaphoresis, nausea, and dyspnea. Symptoms typically last >20 minutes. Atypical presentations (dyspnea, fatigue, epigastric pain) are common in elderly, diabetic, and female patients.',
    diagnosticApproach: 'ECG is critical: STEMI shows ST elevation ≥1mm in 2 contiguous leads. NSTEMI shows ST depression, T-wave inversion, or may be normal. Cardiac troponin is the preferred biomarker. Echocardiography assesses wall motion abnormalities and complications.',
    treatment: 'Immediate management includes aspirin 325mg, antiplatelet therapy, anticoagulation, and pain control. STEMI requires urgent reperfusion: primary PCI (preferred, <90 minutes) or fibrinolysis if PCI unavailable. Post-MI care includes beta-blockers, ACE inhibitors, statins, and cardiac rehabilitation.',
    clinicalPearls: [
      'Time is muscle - door-to-balloon time <90 minutes for STEMI',
      'Aspirin should be given immediately and chewed for faster absorption',
      'New LBBB with chest pain is a STEMI equivalent',
      'Posterior MI shows ST depression in V1-V3'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/acute-myocardial-infarction-mi'
  },

  {
    topic: 'Hypertension',
    keywords: ['hypertension', 'high blood pressure', 'htn', 'elevated blood pressure', 'essential hypertension'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, hypertension is sustained elevation of blood pressure (≥130/80 mmHg). Primary (essential) hypertension (90-95%) has multifactorial etiology. Chronic hypertension causes vascular remodeling, left ventricular hypertrophy, and end-organ damage.',
    clinicalPresentation: 'Most patients are asymptomatic; hypertension is often detected on routine screening. Severe hypertension may cause headache, dizziness, or blurred vision. Hypertensive emergency presents with severe elevation plus acute end-organ damage.',
    diagnosticApproach: 'Diagnosis requires elevated blood pressure on ≥2 occasions. Evaluate for secondary causes in young patients or resistant hypertension. Assess for target organ damage: ECG, echocardiography, fundoscopy, urine albumin.',
    treatment: 'Lifestyle modifications: weight loss, DASH diet, sodium restriction, exercise. Pharmacotherapy: ACE inhibitors, ARBs, calcium channel blockers, thiazide diuretics. Most patients require ≥2 drugs. Target <130/80 for most patients.',
    clinicalPearls: [
      'White coat hypertension requires home BP monitoring',
      'ACE inhibitors/ARBs preferred in diabetes or CKD with proteinuria',
      'Avoid abrupt BP reduction in hypertensive emergency',
      'Screen for secondary causes if age <30 or resistant to 3 drugs'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/hypertension/hypertension'
  },

  {
    topic: 'Aortic Stenosis',
    keywords: ['aortic stenosis', 'as', 'aortic valve stenosis', 'calcific aortic stenosis'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, aortic stenosis involves progressive narrowing of the aortic valve orifice, most commonly due to age-related calcific degeneration. The obstruction increases left ventricular afterload, leading to compensatory concentric hypertrophy.',
    clinicalPresentation: 'The classic triad includes angina, syncope, and dyspnea. Physical examination reveals a crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, delayed and diminished carotid upstroke, and narrow pulse pressure.',
    diagnosticApproach: 'Echocardiography is diagnostic, measuring valve area (<1.0 cm² = severe), mean gradient (>40 mmHg = severe), and peak velocity (>4 m/s = severe).',
    treatment: 'Symptomatic severe AS requires aortic valve replacement. Surgical AVR is preferred for low-risk patients. TAVR is indicated for high surgical risk or inoperable patients.',
    clinicalPearls: [
      'Once symptoms develop, average survival is <2 years without intervention',
      'Avoid vasodilators as they can cause hypotension',
      'Low-flow, low-gradient AS requires dobutamine stress echo',
      'Screen for coronary disease before valve replacement'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/aortic-stenosis'
  },

  {
    topic: 'Infective Endocarditis',
    keywords: ['endocarditis', 'infective endocarditis', 'bacterial endocarditis', 'ie', 'valve infection'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, infective endocarditis is infection of endocardial surface, typically heart valves, caused by bacteria (Streptococcus viridans, Staphylococcus aureus, enterococci) or fungi. Bacteremia seeds damaged or abnormal valves, forming vegetations.',
    clinicalPresentation: 'Fever (90%), new or changing murmur, and signs of systemic illness. Embolic phenomena: stroke, splenic infarct. Immunologic phenomena: Osler nodes, Janeway lesions, Roth spots, glomerulonephritis.',
    diagnosticApproach: 'Modified Duke criteria. Echocardiography: TTE first, TEE if TTE negative or prosthetic valve. Blood cultures before antibiotics (three sets from different sites).',
    treatment: 'Prolonged IV antibiotics (4-6 weeks). Surgery indicated for heart failure, uncontrolled infection, large vegetations, recurrent emboli, or prosthetic valve IE.',
    clinicalPearls: [
      'Three sets of blood cultures before starting antibiotics',
      'TEE more sensitive than TTE for vegetations',
      'S. aureus IE often requires surgery',
      'Antibiotic prophylaxis only for high-risk patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/endocarditis/infective-endocarditis'
  },
];
