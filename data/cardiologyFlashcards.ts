
import { Flashcard } from '@/types/flashcard';

export const cardiologyFlashcards: Flashcard[] = [
  // Arrhythmias
  {
    id: '1',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What are ECG features of atrial fibrillation?',
    back: {
      definition: 'AFib is an irregularly irregular rhythm with no P waves.',
      high_yield: 'Irregular R-R intervals, narrow QRS (unless aberrant conduction)',
      clinical_pearl: 'Check for AFib in patients with palpitations, stroke risk, or heart failure. Always assess CHA2DS2-VASc score for anticoagulation.'
    },
    tags: ['ECG', 'AFib', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '2',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the first-line treatment for stable SVT?',
    back: {
      definition: 'Vagal maneuvers (Valsalva, carotid massage) followed by adenosine if unsuccessful.',
      high_yield: 'Adenosine 6mg rapid IV push, then 12mg if needed. Have crash cart ready.',
      clinical_pearl: 'Warn patients adenosine causes brief chest discomfort and feeling of impending doom. Document rhythm strip during administration.'
    },
    tags: ['SVT', 'Arrhythmia', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '3',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What are the ECG criteria for ventricular tachycardia?',
    back: {
      definition: 'Wide QRS complex (>120ms) with rate >100 bpm, typically regular rhythm.',
      high_yield: 'Look for AV dissociation, fusion beats, and capture beats - these confirm VT.',
      clinical_pearl: 'When in doubt, treat wide complex tachycardia as VT until proven otherwise. Assume VT in patients with known heart disease.'
    },
    tags: ['VT', 'ECG', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '4',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the significance of a prolonged QT interval?',
    back: {
      definition: 'QTc >450ms (men) or >460ms (women) increases risk of Torsades de Pointes.',
      high_yield: 'Calculate QTc using Bazett formula: QT/√RR. Many drugs prolong QT.',
      clinical_pearl: 'Check QTc before starting antiarrhythmics, antipsychotics, or antibiotics like azithromycin. Correct electrolytes (K+, Mg2+).'
    },
    tags: ['QT', 'ECG', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '5',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the treatment for Torsades de Pointes?',
    back: {
      definition: 'Magnesium sulfate 2g IV push, correct underlying QT prolongation.',
      high_yield: 'Stop QT-prolonging drugs, correct K+ and Mg2+, consider overdrive pacing.',
      clinical_pearl: 'Torsades often self-terminates but can degenerate to VFib. Avoid Class Ia and III antiarrhythmics as they worsen QT prolongation.'
    },
    tags: ['Torsades', 'Arrhythmia', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // Heart Failure
  {
    id: '6',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What are the classic signs of right-sided heart failure?',
    back: {
      definition: 'Peripheral edema, JVD, hepatomegaly, ascites.',
      high_yield: 'Look for elevated JVP, hepatojugular reflux, and dependent edema.',
      clinical_pearl: 'Right heart failure often results from left heart failure. Consider pulmonary hypertension and RV infarction in differential.'
    },
    tags: ['Heart Failure', 'Physical Exam'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '7',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is the GDMT for HFrEF?',
    back: {
      definition: 'Guideline-Directed Medical Therapy: ACE-I/ARB/ARNI, beta-blocker, MRA, SGLT2i.',
      high_yield: 'Start all four pillars unless contraindicated. Titrate to target doses.',
      clinical_pearl: 'SGLT2 inhibitors (dapagliflozin, empagliflozin) reduce mortality even in non-diabetics. Start early and together with other therapies.'
    },
    tags: ['Heart Failure', 'Treatment', 'HFrEF'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '8',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is the difference between HFrEF and HFpEF?',
    back: {
      definition: 'HFrEF: EF <40%. HFpEF: EF ≥50% with evidence of diastolic dysfunction.',
      high_yield: 'HFrEF responds to GDMT. HFpEF treatment focuses on comorbidities and diuretics.',
      clinical_pearl: 'HFpEF patients are typically older, female, hypertensive, and obese. SGLT2i show benefit in HFpEF too.'
    },
    tags: ['Heart Failure', 'HFrEF', 'HFpEF'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '9',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is BNP and when is it useful?',
    back: {
      definition: 'B-type Natriuretic Peptide released by ventricles in response to stretch.',
      high_yield: 'BNP >100 or NT-proBNP >300 suggests heart failure. Higher levels = worse prognosis.',
      clinical_pearl: 'Use BNP to differentiate cardiac vs pulmonary dyspnea. Obesity lowers BNP, renal failure raises it. Trend values over time.'
    },
    tags: ['Heart Failure', 'Diagnostics', 'BNP'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '10',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What are the indications for ICD in heart failure?',
    back: {
      definition: 'Primary prevention: EF ≤35% despite 3 months GDMT, life expectancy >1 year.',
      high_yield: 'Secondary prevention: survived cardiac arrest or sustained VT.',
      clinical_pearl: 'Wait 40 days post-MI and 90 days post-revascularization before ICD for primary prevention. CRT-D if QRS ≥150ms with LBBB.'
    },
    tags: ['Heart Failure', 'ICD', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // Ischemic Heart Disease
  {
    id: '11',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What are the ECG changes in STEMI?',
    back: {
      definition: 'ST elevation ≥1mm in 2 contiguous leads (≥2mm in V2-V3).',
      high_yield: 'Look for reciprocal ST depression, Q waves develop later.',
      clinical_pearl: 'Posterior MI shows ST depression in V1-V3 with tall R waves. Check posterior leads V7-V9. Time is muscle - door to balloon <90 min.'
    },
    tags: ['STEMI', 'ECG', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '12',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is the immediate treatment for STEMI?',
    back: {
      definition: 'MONA-B: Morphine, Oxygen (if hypoxic), Nitrates, Aspirin, Beta-blocker.',
      high_yield: 'Aspirin 325mg chewed immediately. Dual antiplatelet therapy. Urgent PCI or thrombolytics.',
      clinical_pearl: 'Give aspirin first - it saves lives. Avoid NSAIDs. Start high-intensity statin. Clopidogrel 600mg or ticagrelor 180mg loading dose.'
    },
    tags: ['STEMI', 'Treatment', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '13',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is the difference between STEMI and NSTEMI?',
    back: {
      definition: 'STEMI: ST elevation with troponin rise. NSTEMI: troponin rise without ST elevation.',
      high_yield: 'Both are ACS. STEMI needs immediate reperfusion. NSTEMI risk-stratified with TIMI/GRACE scores.',
      clinical_pearl: 'NSTEMI can be higher risk than STEMI. Check troponin at 0 and 3 hours. Wellens syndrome (deep T-wave inversions V2-V4) = critical LAD stenosis.'
    },
    tags: ['STEMI', 'NSTEMI', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '14',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What are the contraindications to thrombolytic therapy?',
    back: {
      definition: 'Absolute: prior ICH, active bleeding, recent surgery/trauma, suspected aortic dissection.',
      high_yield: 'Relative: uncontrolled HTN >180/110, pregnancy, recent CPR.',
      clinical_pearl: 'PCI preferred over thrombolytics when available. If using thrombolytics, give within 30 minutes. Alteplase, tenecteplase, or reteplase.'
    },
    tags: ['STEMI', 'Thrombolytics', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '15',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is Dressler syndrome?',
    back: {
      definition: 'Post-MI pericarditis occurring 2-10 weeks after MI.',
      high_yield: 'Presents with chest pain, fever, pericardial friction rub, elevated ESR/CRP.',
      clinical_pearl: 'Treat with NSAIDs or colchicine. Avoid steroids initially. ECG shows diffuse ST elevation. Echo may show pericardial effusion.'
    },
    tags: ['Post-MI', 'Pericarditis', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // Valvular Disease
  {
    id: '16',
    system: 'Cardiology',
    topic: 'Valvular Disease',
    front: 'What is the classic murmur of aortic stenosis?',
    back: {
      definition: 'Crescendo-decrescendo systolic ejection murmur at right upper sternal border.',
      high_yield: 'Radiates to carotids. Louder with squatting, softer with standing/Valsalva.',
      clinical_pearl: 'Classic triad: angina, syncope, dyspnea. Once symptomatic, average survival <2 years without valve replacement. Pulsus parvus et tardus.'
    },
    tags: ['Aortic Stenosis', 'Murmur', 'Valvular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '17',
    system: 'Cardiology',
    topic: 'Valvular Disease',
    front: 'What is the classic murmur of mitral regurgitation?',
    back: {
      definition: 'Holosystolic murmur at apex radiating to axilla.',
      high_yield: 'Best heard with patient in left lateral decubitus position. S3 gallop may be present.',
      clinical_pearl: 'Acute MR (papillary muscle rupture post-MI) causes pulmonary edema. Chronic MR well-tolerated until LV dysfunction develops.'
    },
    tags: ['Mitral Regurgitation', 'Murmur', 'Valvular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '18',
    system: 'Cardiology',
    topic: 'Valvular Disease',
    front: 'What are the indications for aortic valve replacement?',
    back: {
      definition: 'Symptomatic severe AS, or asymptomatic with EF <50% or undergoing cardiac surgery.',
      high_yield: 'Severe AS: valve area <1cm², mean gradient >40mmHg, peak velocity >4m/s.',
      clinical_pearl: 'TAVR preferred in high surgical risk patients. Surgical AVR in low-risk young patients. Balloon valvuloplasty only palliative.'
    },
    tags: ['Aortic Stenosis', 'Treatment', 'Valvular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '19',
    system: 'Cardiology',
    topic: 'Valvular Disease',
    front: 'What is the classic murmur of aortic regurgitation?',
    back: {
      definition: 'High-pitched, blowing diastolic decrescendo murmur at left sternal border.',
      high_yield: 'Best heard with patient sitting up, leaning forward, in expiration.',
      clinical_pearl: 'Look for wide pulse pressure, bounding pulses, head bobbing (de Musset sign). Acute AR causes cardiogenic shock - needs urgent surgery.'
    },
    tags: ['Aortic Regurgitation', 'Murmur', 'Valvular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '20',
    system: 'Cardiology',
    topic: 'Valvular Disease',
    front: 'What is mitral stenosis and its most common cause?',
    back: {
      definition: 'Narrowing of mitral valve, most commonly from rheumatic heart disease.',
      high_yield: 'Low-pitched diastolic rumble with opening snap at apex. Loud S1.',
      clinical_pearl: 'AFib common complication - increases stroke risk. Anticoagulate all MS patients with AFib. Percutaneous balloon valvuloplasty if no LA clot.'
    },
    tags: ['Mitral Stenosis', 'Murmur', 'Valvular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  }
];
