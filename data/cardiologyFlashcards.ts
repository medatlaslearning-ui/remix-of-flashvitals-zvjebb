
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

  // NEW Arrhythmias Flashcards (Cards #6-17)
  {
    id: '26',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What ECG pattern defines atrial flutter?',
    back: {
      definition: 'Atrial flutter shows sawtooth "F-waves" due to rapid atrial activity.',
      high_yield: 'Atrial rate 250–350 bpm; fixed AV conduction (2:1 or 4:1).',
      clinical_pearl: 'Flutter may convert to AFib; radiofrequency ablation is highly effective.'
    },
    tags: ['Atrial Flutter', 'ECG', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '27',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What causes AV nodal reentrant tachycardia (AVNRT)?',
    back: {
      definition: 'Reentry circuit within the AV node using slow and fast pathways.',
      high_yield: 'Regular narrow-complex tachycardia 150–250 bpm.',
      clinical_pearl: 'Vagal maneuvers or adenosine terminate most episodes.'
    },
    tags: ['AVNRT', 'Arrhythmia', 'Mechanism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '28',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines atrioventricular reentrant tachycardia (AVRT)?',
    back: {
      definition: 'A reentry circuit involving an accessory pathway (e.g., WPW).',
      high_yield: 'Orthodromic = narrow QRS; Antidromic = wide QRS.',
      clinical_pearl: 'Avoid AV nodal blockers in WPW with AF — use procainamide.'
    },
    tags: ['AVRT', 'WPW', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '29',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What are the classic ECG findings of WPW?',
    back: {
      definition: 'WPW involves a congenital accessory pathway (Bundle of Kent).',
      high_yield: 'Short PR interval, delta wave, wide QRS.',
      clinical_pearl: 'Risk of rapid conduction in AF → unstable ventricular response.'
    },
    tags: ['WPW', 'ECG', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '30',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the hallmark of paroxysmal supraventricular tachycardia (PSVT)?',
    back: {
      definition: 'Abrupt onset and termination of narrow-complex tachycardia.',
      high_yield: 'HR 150–250; usually AVNRT.',
      clinical_pearl: 'Vagal maneuvers and adenosine are first-line.'
    },
    tags: ['PSVT', 'SVT', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '31',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What suggests VT instead of SVT with aberrancy?',
    back: {
      definition: 'VT originates from the ventricles with wide QRS.',
      high_yield: 'AV dissociation, fusion beats, capture beats.',
      clinical_pearl: 'If unsure → treat as VT for safety.'
    },
    tags: ['VT', 'SVT', 'Differential Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '32',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines ventricular tachycardia (VT)?',
    back: {
      definition: '≥3 consecutive ventricular beats at >100 bpm.',
      high_yield: 'Wide QRS; monomorphic vs polymorphic.',
      clinical_pearl: 'Most common after MI due to scar reentry.'
    },
    tags: ['VT', 'Arrhythmia', 'Definition'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '33',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What increases risk of Torsades de Pointes?',
    back: {
      definition: 'Polymorphic VT associated with prolonged QT interval.',
      high_yield: 'Hypokalemia, hypomagnesemia, medications (e.g., sotalol).',
      clinical_pearl: 'Treat acute torsades with IV magnesium.'
    },
    tags: ['Torsades', 'QT', 'Risk Factors'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '34',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines a bradyarrhythmia?',
    back: {
      definition: 'HR < 60 bpm with symptomatic beats or conduction issues.',
      high_yield: 'Sinus bradycardia, AV block, junctional rhythms.',
      clinical_pearl: 'Evaluate medications (BB, CCB), hypothyroidism.'
    },
    tags: ['Bradycardia', 'Arrhythmia', 'Definition'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '35',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What characterizes first-degree AV block?',
    back: {
      definition: 'Prolonged PR interval > 200 ms.',
      high_yield: 'All P waves conducted; usually benign.',
      clinical_pearl: 'Can worsen with AV nodal–blocking medications.'
    },
    tags: ['AV Block', 'First-Degree', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '36',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines Mobitz I?',
    back: {
      definition: 'Progressive PR lengthening → dropped QRS.',
      high_yield: 'Usually at AV node; usually benign.',
      clinical_pearl: 'Often vagally mediated; improves with exercise.'
    },
    tags: ['AV Block', 'Mobitz I', 'Wenckebach'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '37',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines Mobitz II?',
    back: {
      definition: 'Intermittent dropped QRS without PR changes.',
      high_yield: 'Typically below AV node; unstable.',
      clinical_pearl: 'High risk of complete heart block → needs pacemaker.'
    },
    tags: ['AV Block', 'Mobitz II', 'Pacemaker'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // NEW Arrhythmias Flashcards (Cards #18-33)
  {
    id: '38',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines complete heart block?',
    back: {
      definition: 'No atrial impulses conduct; atria and ventricles beat independently.',
      high_yield: 'Slow junctional or ventricular escape rhythm.',
      clinical_pearl: 'Requires urgent pacing.'
    },
    tags: ['AV Block', 'Third-Degree', 'Complete Heart Block'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '39',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is sick sinus syndrome?',
    back: {
      definition: 'Dysfunction of SA node causing bradycardia or pauses.',
      high_yield: 'Brady-tachy syndrome common.',
      clinical_pearl: 'Often requires permanent pacemaker.'
    },
    tags: ['Sick Sinus Syndrome', 'Bradycardia', 'Pacemaker'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '40',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What are premature atrial contractions (PACs)?',
    back: {
      definition: 'Early atrial beats originating outside the SA node.',
      high_yield: 'Abnormal P-wave morphology.',
      clinical_pearl: 'Common and usually benign.'
    },
    tags: ['PACs', 'Arrhythmia', 'Atrial'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '41',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines a premature ventricular contraction (PVC)?',
    back: {
      definition: 'Early beat originating from ventricles.',
      high_yield: 'Wide, bizarre QRS not preceded by P wave.',
      clinical_pearl: 'Evaluate for structural heart disease if frequent.'
    },
    tags: ['PVCs', 'Arrhythmia', 'Ventricular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '42',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is ventricular bigeminy?',
    back: {
      definition: 'PVC every other beat.',
      high_yield: 'May occur with ischemia or electrolyte imbalance.',
      clinical_pearl: 'Check magnesium and potassium.'
    },
    tags: ['Bigeminy', 'PVCs', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '43',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is trigeminy?',
    back: {
      definition: 'PVC every third beat.',
      high_yield: 'Patterned ventricular irritability.',
      clinical_pearl: 'Consider Holter monitor for burden.'
    },
    tags: ['Trigeminy', 'PVCs', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '44',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What rate defines a junctional escape rhythm?',
    back: {
      definition: 'AV junction pacemaker takes over.',
      high_yield: 'HR 40–60 bpm.',
      clinical_pearl: 'Often occurs with sick sinus syndrome.'
    },
    tags: ['Junctional Rhythm', 'Bradycardia', 'Escape Rhythm'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '45',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is accelerated junctional rhythm?',
    back: {
      definition: 'Junctional rhythm faster than escape but <100 bpm.',
      high_yield: 'HR 60–100 bpm; narrow QRS.',
      clinical_pearl: 'Seen with digoxin toxicity.'
    },
    tags: ['Junctional Rhythm', 'Digoxin Toxicity', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '46',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines atrial tachycardia?',
    back: {
      definition: 'Ectopic atrial focus firing rapidly.',
      high_yield: 'HR 150–250; abnormal P waves.',
      clinical_pearl: 'May be triggered by stimulants or infection.'
    },
    tags: ['Atrial Tachycardia', 'Arrhythmia', 'Tachycardia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '47',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines MAT?',
    back: {
      definition: '≥3 P-wave morphologies and irregular rhythm.',
      high_yield: 'Seen in COPD.',
      clinical_pearl: 'Treat underlying pulmonary disease.'
    },
    tags: ['MAT', 'Multifocal Atrial Tachycardia', 'COPD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '48',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is wandering atrial pacemaker?',
    back: {
      definition: 'Multiple atrial pacemaker sites.',
      high_yield: 'Irregular rhythm with varying P waves.',
      clinical_pearl: 'MAT precursor in COPD.'
    },
    tags: ['Wandering Atrial Pacemaker', 'Arrhythmia', 'COPD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '49',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines sinus tachycardia?',
    back: {
      definition: 'SA node firing >100 bpm.',
      high_yield: 'Upright P waves before each QRS.',
      clinical_pearl: 'Treat underlying cause, not the rhythm.'
    },
    tags: ['Sinus Tachycardia', 'Tachycardia', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '50',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines sinus bradycardia?',
    back: {
      definition: 'SA node firing <60 bpm.',
      high_yield: 'Normal P-QRS-T pattern.',
      clinical_pearl: 'Common in athletes.'
    },
    tags: ['Sinus Bradycardia', 'Bradycardia', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '51',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is a sinus pause?',
    back: {
      definition: 'Temporary failure of SA node to fire.',
      high_yield: 'Pause >2 seconds.',
      clinical_pearl: 'Can cause dizziness or syncope.'
    },
    tags: ['Sinus Pause', 'Bradycardia', 'SA Node'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '52',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is sinus arrest?',
    back: {
      definition: 'Prolonged SA node cessation.',
      high_yield: 'Pause >3 seconds.',
      clinical_pearl: 'Consider pacemaker.'
    },
    tags: ['Sinus Arrest', 'Bradycardia', 'Pacemaker'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '53',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is an escape beat?',
    back: {
      definition: 'Backup pacemaker fires after a pause.',
      high_yield: 'Junctional or ventricular.',
      clinical_pearl: 'Protective mechanism.'
    },
    tags: ['Escape Beat', 'Arrhythmia', 'Bradycardia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
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
  {
    id: '21',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is the defining feature of systolic heart failure (HFrEF)?',
    back: {
      definition: 'Systolic HF is characterized by reduced left ventricular ejection fraction (LVEF < 40%), indicating impaired contraction.',
      high_yield: '↓ EF, thin ventricular walls, dilated LV on echo.',
      clinical_pearl: 'Most common cause is ischemic heart disease. Patients often have fatigue, dyspnea, and volume overload.'
    },
    tags: ['Heart Failure', 'HFrEF', 'Systolic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '22',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is the main pathophysiology of diastolic heart failure (HFpEF)?',
    back: {
      definition: 'HFpEF occurs when the heart contracts normally but has impaired relaxation and filling during diastole.',
      high_yield: 'Preserved EF (>50%), stiff LV, normal ventricular size.',
      clinical_pearl: 'Common in older adults, hypertensive patients, and those with diabetes. Often presents with exertional dyspnea.'
    },
    tags: ['Heart Failure', 'HFpEF', 'Diastolic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '23',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What are the classic symptoms of heart failure?',
    back: {
      definition: 'Heart failure causes symptoms due to congestion (fluid backup) and low cardiac output.',
      high_yield: 'Dyspnea on exertion, orthopnea, paroxysmal nocturnal dyspnea, edema, fatigue.',
      clinical_pearl: 'Weight gain over days may indicate fluid retention and worsening HF.'
    },
    tags: ['Heart Failure', 'Symptoms', 'Clinical Presentation'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '24',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Which labs and imaging findings support a diagnosis of heart failure?',
    back: {
      definition: 'HF diagnosis is supported by elevated biomarkers and structural changes on imaging.',
      high_yield: '↑ BNP/NT-proBNP, CXR: cardiomegaly, pulmonary congestion; Echo: reduced EF (HFrEF) or normal EF with diastolic dysfunction (HFpEF).',
      clinical_pearl: 'BNP helps differentiate dyspnea from HF vs. lung disease.'
    },
    tags: ['Heart Failure', 'Diagnosis', 'Labs', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '25',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What are first-line medications for systolic heart failure (HFrEF)?',
    back: {
      definition: 'Pharmacologic therapy improves survival and symptoms in HFrEF.',
      high_yield: 'ACE inhibitors/ARBs/ARNIs, beta-blockers, mineralocorticoid receptor antagonists, SGLT2 inhibitors.',
      clinical_pearl: 'Start low and titrate carefully; monitor kidney function and electrolytes.'
    },
    tags: ['Heart Failure', 'HFrEF', 'Medications', 'Treatment'],
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
