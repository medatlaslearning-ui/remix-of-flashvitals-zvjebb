
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

  // NEW Arrhythmias Flashcards (Cards #34-35 - MISSING CARDS NOW ADDED!)
  {
    id: '69',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the difference between LBBB and RBBB?',
    back: {
      definition: 'LBBB affects left bundle; RBBB affects right bundle.',
      high_yield: 'LBBB: wide R in I, V6; RBBB: rsR\' in V1.',
      clinical_pearl: 'New LBBB may indicate acute MI; RBBB often benign.'
    },
    tags: ['Bundle Branch Block', 'LBBB', 'RBBB'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '70',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the clinical significance of bundle branch blocks?',
    back: {
      definition: 'BBBs indicate conduction system disease.',
      high_yield: 'RBBB often benign; LBBB suggests structural heart disease.',
      clinical_pearl: 'New LBBB with chest pain = STEMI equivalent.'
    },
    tags: ['Bundle Branch Block', 'Clinical Significance', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },

  // NEW Arrhythmias Flashcards (Cards #36-50 / IDs 54-68)
  {
    id: '54',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the hallmark of right bundle branch block?',
    back: {
      definition: 'Delayed right ventricular activation.',
      high_yield: 'rsR\' pattern in V1–V2.',
      clinical_pearl: 'Often benign in young adults.'
    },
    tags: ['RBBB', 'Bundle Branch Block', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '55',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines left bundle branch block?',
    back: {
      definition: 'Delayed left ventricular activation.',
      high_yield: 'Broad notched R in I, V6; deep S in V1.',
      clinical_pearl: 'New LBBB with chest pain = possible MI.'
    },
    tags: ['LBBB', 'Bundle Branch Block', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '56',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines a ventricular escape rhythm?',
    back: {
      definition: 'Ventricles fire at 20–40 bpm.',
      high_yield: 'Wide QRS; regular rhythm.',
      clinical_pearl: 'Indicates failure of higher pacemakers.'
    },
    tags: ['Ventricular Escape', 'Bradycardia', 'Escape Rhythm'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '57',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What characterizes polymorphic VT?',
    back: {
      definition: 'VT with varying QRS morphology.',
      high_yield: 'Often associated with ischemia.',
      clinical_pearl: 'Differentiate from torsades (QT prolongation).'
    },
    tags: ['Polymorphic VT', 'VT', 'Arrhythmia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '58',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines idioventricular rhythm?',
    back: {
      definition: 'Ventricular rhythm <40 bpm.',
      high_yield: 'Wide QRS without P waves.',
      clinical_pearl: 'Common post-reperfusion rhythm.'
    },
    tags: ['Idioventricular Rhythm', 'Bradycardia', 'Ventricular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '59',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is AIVR?',
    back: {
      definition: 'Ventricular rhythm 40–100 bpm.',
      high_yield: 'Wide but stable.',
      clinical_pearl: 'Seen after MI reperfusion; usually benign.'
    },
    tags: ['AIVR', 'Accelerated Idioventricular Rhythm', 'Post-MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '60',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines ventricular fibrillation (VF)?',
    back: {
      definition: 'Chaotic ventricular activity → no cardiac output.',
      high_yield: 'Irregular, disorganized waves.',
      clinical_pearl: 'Immediate defibrillation required.'
    },
    tags: ['VF', 'Ventricular Fibrillation', 'Cardiac Arrest'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '61',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines asystole?',
    back: {
      definition: 'Absence of electrical activity.',
      high_yield: 'Straight-line ECG.',
      clinical_pearl: 'Check leads; poor prognosis.'
    },
    tags: ['Asystole', 'Cardiac Arrest', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '62',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is pulseless electrical activity?',
    back: {
      definition: 'ECG activity without perfusing pulse.',
      high_yield: 'Caused by Hs and Ts.',
      clinical_pearl: 'Start CPR and fix underlying cause.'
    },
    tags: ['PEA', 'Pulseless Electrical Activity', 'Cardiac Arrest'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '63',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What arrhythmia is most specific for digoxin toxicity?',
    back: {
      definition: 'Ectopic atrial tachycardia with AV block.',
      high_yield: '"Scooped" ST segments.',
      clinical_pearl: 'Treat with digoxin-immune Fab if severe.'
    },
    tags: ['Digoxin Toxicity', 'Arrhythmia', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '64',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What ECG finding suggests right atrial enlargement?',
    back: {
      definition: 'Tall peaked P waves.',
      high_yield: 'P pulmonale in II.',
      clinical_pearl: 'Often seen in pulmonary hypertension.'
    },
    tags: ['Right Atrial Enlargement', 'P-wave', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '65',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What indicates left atrial enlargement?',
    back: {
      definition: 'Broad, notched P waves.',
      high_yield: 'P mitrale in II; biphasic P in V1.',
      clinical_pearl: 'Common in mitral valve disease.'
    },
    tags: ['Left Atrial Enlargement', 'P-wave', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '66',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is early repolarization?',
    back: {
      definition: 'Benign ST elevation variant.',
      high_yield: 'J-point notching; concave ST elevation.',
      clinical_pearl: 'Important to differentiate from STEMI.'
    },
    tags: ['Early Repolarization', 'ST Elevation', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '67',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What defines atrial standstill?',
    back: {
      definition: 'Absence of atrial electrical activity.',
      high_yield: 'No P waves; junctional or ventricular rhythm.',
      clinical_pearl: 'Rare; associated with hyperkalemia.'
    },
    tags: ['Atrial Standstill', 'Hyperkalemia', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: '68',
    system: 'Cardiology',
    topic: 'Arrhythmias',
    front: 'What is the ECG progression of hyperkalemia?',
    back: {
      definition: 'Progressive changes with rising potassium.',
      high_yield: 'Peaked T waves → PR prolongation → wide QRS → sine wave.',
      clinical_pearl: 'Treat immediately with IV calcium.'
    },
    tags: ['Hyperkalemia', 'ECG', 'Electrolytes'],
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

  // NEW Heart Failure Flashcards (Cards 1-5 already added as IDs 71-75)
  {
    id: '71',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is HFrEF?',
    back: {
      definition: 'EF <40% with impaired contraction',
      high_yield: 'Dilated LV',
      clinical_pearl: 'Ischemic disease common'
    },
    tags: ['Heart Failure', 'HFrEF', 'Definition'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '72',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is HFpEF?',
    back: {
      definition: 'Preserved EF with impaired relaxation',
      high_yield: 'Stiff LV',
      clinical_pearl: 'HTN and aging related'
    },
    tags: ['Heart Failure', 'HFpEF', 'Definition'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '73',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Main HF symptoms?',
    back: {
      definition: 'DOE, orthopnea, PND',
      high_yield: 'Volume overload signs',
      clinical_pearl: 'Weight gain = early clue'
    },
    tags: ['Heart Failure', 'Symptoms', 'Clinical Presentation'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '74',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Key HF labs?',
    back: {
      definition: 'BNP/NT-proBNP elevation',
      high_yield: 'Rule out pulmonary causes',
      clinical_pearl: 'Higher BNP = worse prognosis'
    },
    tags: ['Heart Failure', 'Labs', 'BNP'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '75',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'First-line HFrEF meds?',
    back: {
      definition: 'ARNI/ACEI/ARB + BB',
      high_yield: 'Add MRA, SGLT2i',
      clinical_pearl: 'Start low and titrate'
    },
    tags: ['Heart Failure', 'HFrEF', 'Treatment', 'Medications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },

  // NEW Heart Failure Flashcards (Cards 6-40 / IDs 76-110)
  {
    id: '76',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'CXR findings in HF?',
    back: {
      definition: 'Cardiomegaly + pulmonary edema',
      high_yield: 'Kerley B lines',
      clinical_pearl: 'Pleural effusions common'
    },
    tags: ['Heart Failure', 'CXR', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '77',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is NICM?',
    back: {
      definition: 'HF not caused by ischemia',
      high_yield: 'Dilated cardiomyopathy pattern',
      clinical_pearl: 'Often reversible'
    },
    tags: ['Heart Failure', 'NICM', 'Cardiomyopathy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '78',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Causes of NICM?',
    back: {
      definition: 'Viral, alcohol, chemo',
      high_yield: 'Tachycardia-induced',
      clinical_pearl: 'Check for myocarditis'
    },
    tags: ['Heart Failure', 'NICM', 'Etiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '79',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Main HF imaging test?',
    back: {
      definition: 'Echocardiogram',
      high_yield: 'EF, wall motion',
      clinical_pearl: 'Detect valve disease'
    },
    tags: ['Heart Failure', 'Echo', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '80',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'HF physical signs?',
    back: {
      definition: 'JVD, rales, edema',
      high_yield: 'Hepatomegaly',
      clinical_pearl: 'S3 in HFrEF'
    },
    tags: ['Heart Failure', 'Physical Exam', 'Signs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '81',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Acute HF treatment?',
    back: {
      definition: 'IV diuretics, O2, nitrates',
      high_yield: 'Avoid fluids',
      clinical_pearl: 'Check for cardiogenic shock'
    },
    tags: ['Heart Failure', 'Acute', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '82',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'HFpEF management?',
    back: {
      definition: 'Treat BP, diuretics',
      high_yield: 'SGLT2i useful',
      clinical_pearl: 'Avoid tachycardia'
    },
    tags: ['Heart Failure', 'HFpEF', 'Management'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '83',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Cardiorenal syndrome?',
    back: {
      definition: 'HF worsens renal function',
      high_yield: 'Reduced perfusion',
      clinical_pearl: 'Adjust diuretics carefully'
    },
    tags: ['Heart Failure', 'Cardiorenal', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '84',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'HF risk stratification tool?',
    back: {
      definition: 'NYHA class',
      high_yield: 'I–IV functional limits',
      clinical_pearl: 'Prognosis worsens with class'
    },
    tags: ['Heart Failure', 'NYHA', 'Classification'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '85',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Stages of HF?',
    back: {
      definition: 'A–D disease progression',
      high_yield: 'A risk, D refractory',
      clinical_pearl: 'Earlier stages reversible'
    },
    tags: ['Heart Failure', 'Staging', 'Classification'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '86',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'SGLT2i benefit?',
    back: {
      definition: 'Reduce HF hospitalization',
      high_yield: 'Work independent of diabetes',
      clinical_pearl: 'Renal protective'
    },
    tags: ['Heart Failure', 'SGLT2i', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '87',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Beta-blocker choices?',
    back: {
      definition: 'Metoprolol succ, carvedilol, bisoprolol',
      high_yield: 'Mortality benefit',
      clinical_pearl: 'Start post-euvolemia'
    },
    tags: ['Heart Failure', 'Beta-blockers', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '88',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'MRA uses?',
    back: {
      definition: 'Spironolactone/eplerenone',
      high_yield: 'Reduce mortality',
      clinical_pearl: 'Monitor K+'
    },
    tags: ['Heart Failure', 'MRA', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '89',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'GDMT definition?',
    back: {
      definition: 'Guideline-directed medical therapy',
      high_yield: 'Combo HF meds',
      clinical_pearl: 'Improves survival'
    },
    tags: ['Heart Failure', 'GDMT', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '90',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'HF lifestyle changes?',
    back: {
      definition: 'Low-sodium diet, daily weights',
      high_yield: 'Fluid control',
      clinical_pearl: 'Exercise improves symptoms'
    },
    tags: ['Heart Failure', 'Lifestyle', 'Management'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '91',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is dilated cardiomyopathy?',
    back: {
      definition: 'LV dilation + systolic dysfunction',
      high_yield: 'Large LV cavity',
      clinical_pearl: 'Alcohol major cause'
    },
    tags: ['Heart Failure', 'Cardiomyopathy', 'DCM'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '92',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Hypertrophic cardiomyopathy key?',
    back: {
      definition: 'LV hypertrophy with obstruction',
      high_yield: 'Systolic anterior motion',
      clinical_pearl: 'Syncope risk'
    },
    tags: ['Heart Failure', 'Cardiomyopathy', 'HCM'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '93',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Restrictive cardiomyopathy?',
    back: {
      definition: 'Stiff myocardium',
      high_yield: 'Normal EF',
      clinical_pearl: 'Amyloidosis common cause'
    },
    tags: ['Heart Failure', 'Cardiomyopathy', 'Restrictive'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '94',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Alcoholic cardiomyopathy?',
    back: {
      definition: 'Direct toxin effect',
      high_yield: 'Dilated LV',
      clinical_pearl: 'Improves with cessation'
    },
    tags: ['Heart Failure', 'Cardiomyopathy', 'Alcohol'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '95',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Peripartum cardiomyopathy?',
    back: {
      definition: 'Late pregnancy HF',
      high_yield: 'Dilated LV',
      clinical_pearl: 'Risk of recurrence'
    },
    tags: ['Heart Failure', 'Cardiomyopathy', 'Peripartum'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '96',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Differentiating HFpEF vs COPD exacerbation?',
    back: {
      definition: 'BNP elevated in HF',
      high_yield: 'CXR congestion',
      clinical_pearl: 'HF = preserved EF'
    },
    tags: ['Heart Failure', 'Differential', 'COPD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '97',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Low-output HF?',
    back: {
      definition: 'Poor cardiac output',
      high_yield: 'Cold extremities',
      clinical_pearl: 'Consider in shock'
    },
    tags: ['Heart Failure', 'Low-output', 'Hemodynamics'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '98',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'High-output HF?',
    back: {
      definition: 'Normal heart overwhelmed',
      high_yield: 'Thyrotoxicosis, anemia',
      clinical_pearl: 'Warm extremities'
    },
    tags: ['Heart Failure', 'High-output', 'Hemodynamics'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '99',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Tachycardia-induced cardiomyopathy?',
    back: {
      definition: 'Chronic rapid HR weakens LV',
      high_yield: 'Reversible',
      clinical_pearl: 'Treat arrhythmia'
    },
    tags: ['Heart Failure', 'Cardiomyopathy', 'Tachycardia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '100',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Cardiac amyloidosis clue?',
    back: {
      definition: 'Thick walls + low voltage ECG',
      high_yield: 'Restrictive pattern',
      clinical_pearl: 'Apical sparing on strain'
    },
    tags: ['Heart Failure', 'Amyloidosis', 'Cardiomyopathy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '101',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Sarcoid cardiomyopathy?',
    back: {
      definition: 'Granulomas disrupt conduction',
      high_yield: 'VT risk',
      clinical_pearl: 'Cardiac MRI helpful'
    },
    tags: ['Heart Failure', 'Sarcoidosis', 'Cardiomyopathy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '102',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Chemotherapy-induced HF?',
    back: {
      definition: 'Anthracyclines cause toxicity',
      high_yield: 'Dilated cardiomyopathy',
      clinical_pearl: 'Monitor EF during chemo'
    },
    tags: ['Heart Failure', 'Chemotherapy', 'Cardiomyopathy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '103',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Chagas cardiomyopathy?',
    back: {
      definition: 'Trypanosoma infection',
      high_yield: 'Apical aneurysm',
      clinical_pearl: 'Latin America risk'
    },
    tags: ['Heart Failure', 'Chagas', 'Cardiomyopathy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '104',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Genetic DCM genes?',
    back: {
      definition: 'TTN most common',
      high_yield: 'Autosomal dominant',
      clinical_pearl: 'Consider family screening'
    },
    tags: ['Heart Failure', 'Genetics', 'DCM'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '105',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'What is pulsus alternans?',
    back: {
      definition: 'Alternating pulse strength',
      high_yield: 'Advanced HF',
      clinical_pearl: 'Indicates poor prognosis'
    },
    tags: ['Heart Failure', 'Physical Exam', 'Pulsus Alternans'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '106',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'LV thrombus risk in HF?',
    back: {
      definition: 'Low EF promotes stasis',
      high_yield: 'Seen post-MI',
      clinical_pearl: 'Anticoagulate if present'
    },
    tags: ['Heart Failure', 'Thrombus', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '107',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'HF and hyponatremia?',
    back: {
      definition: 'High ADH from low perfusion',
      high_yield: 'Poor prognosis',
      clinical_pearl: 'Correct slowly'
    },
    tags: ['Heart Failure', 'Hyponatremia', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '108',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Cardiogenic shock sign?',
    back: {
      definition: 'Hypotension + hypoperfusion',
      high_yield: 'Cool, clammy',
      clinical_pearl: 'Urgent inotropes/mechanical support'
    },
    tags: ['Heart Failure', 'Cardiogenic Shock', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '109',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'Advanced HF therapies?',
    back: {
      definition: 'LVAD, transplant',
      high_yield: 'For stage D',
      clinical_pearl: 'Consider early referral'
    },
    tags: ['Heart Failure', 'Advanced', 'LVAD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '110',
    system: 'Cardiology',
    topic: 'Heart Failure',
    front: 'NICM vs ICM clue?',
    back: {
      definition: 'NICM = global hypokinesis',
      high_yield: 'ICM = regional defects',
      clinical_pearl: 'Use echo to differentiate'
    },
    tags: ['Heart Failure', 'Differential', 'Echo'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
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

  // NEW Ischemic Heart Disease Flashcards (38 cards / IDs 111-148)
  {
    id: '111',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is stable angina?',
    back: {
      definition: 'Predictable chest pain with exertion',
      high_yield: 'Fixed plaque',
      clinical_pearl: 'Relieved by rest/nitro'
    },
    tags: ['Angina', 'Stable Angina', 'IHD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '112',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is unstable angina?',
    back: {
      definition: 'New or worsening angina',
      high_yield: 'No troponin rise',
      clinical_pearl: 'ACS spectrum'
    },
    tags: ['Angina', 'Unstable Angina', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '113',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is NSTEMI?',
    back: {
      definition: 'Ischemia with troponin elevation',
      high_yield: 'ST depression/T-wave changes',
      clinical_pearl: 'Subendocardial infarct'
    },
    tags: ['NSTEMI', 'ACS', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '114',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is STEMI?',
    back: {
      definition: 'Acute transmural MI',
      high_yield: 'ST elevation in contiguous leads',
      clinical_pearl: 'Urgent PCI needed'
    },
    tags: ['STEMI', 'ACS', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '115',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Main MI symptoms?',
    back: {
      definition: 'Chest pressure, diaphoresis',
      high_yield: 'Radiation to arm/jaw',
      clinical_pearl: 'Atypical in women/elderly'
    },
    tags: ['MI', 'Symptoms', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '116',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'MI cardiac biomarker?',
    back: {
      definition: 'Troponin I/T',
      high_yield: 'Rises 3–4 hrs',
      clinical_pearl: 'Peak 24 hrs'
    },
    tags: ['MI', 'Troponin', 'Biomarkers'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '117',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Immediate ACS meds?',
    back: {
      definition: 'Aspirin + nitrates',
      high_yield: 'O2 if hypoxic',
      clinical_pearl: 'Statin early'
    },
    tags: ['ACS', 'Treatment', 'Medications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '118',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is angina decubitus?',
    back: {
      definition: 'Chest pain at rest when lying down',
      high_yield: 'Increased preload',
      clinical_pearl: 'Seen in HF + IHD'
    },
    tags: ['Angina', 'Angina Decubitus', 'IHD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '119',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What relieves stable angina?',
    back: {
      definition: 'Rest and nitroglycerin',
      high_yield: '↓ O2 demand',
      clinical_pearl: 'Predictable pattern'
    },
    tags: ['Angina', 'Stable Angina', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '120',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Exercise stress test use?',
    back: {
      definition: 'Diagnose ischemia',
      high_yield: 'ST depression',
      clinical_pearl: 'Avoid in STEMI'
    },
    tags: ['Stress Test', 'Diagnosis', 'IHD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },
  {
    id: '121',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Coronary artery supplying anterior wall?',
    back: {
      definition: 'LAD',
      high_yield: 'Most lethal MI',
      clinical_pearl: 'Causes cardiogenic shock'
    },
    tags: ['Coronary Anatomy', 'LAD', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '122',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Inferior wall MI vessel?',
    back: {
      definition: 'RCA',
      high_yield: 'Bradyarrhythmias common',
      clinical_pearl: 'Check for RV infarct'
    },
    tags: ['Coronary Anatomy', 'RCA', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '123',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Circumflex MI trait?',
    back: {
      definition: 'Lateral ST elevation',
      high_yield: 'Leads I, aVL, V5–V6',
      clinical_pearl: 'May be subtle'
    },
    tags: ['Coronary Anatomy', 'Circumflex', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '124',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'When to avoid nitrates?',
    back: {
      definition: 'RV infarction',
      high_yield: 'Preload dependent',
      clinical_pearl: 'Use fluids instead'
    },
    tags: ['Treatment', 'Nitrates', 'RV Infarct'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '125',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Goal door-to-balloon time?',
    back: {
      definition: '<90 minutes',
      high_yield: 'PCI preferred',
      clinical_pearl: 'Better outcomes'
    },
    tags: ['STEMI', 'PCI', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '126',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Dual antiplatelet therapy?',
    back: {
      definition: 'Aspirin + P2Y12 inhibitor',
      high_yield: 'Post-PCI standard',
      clinical_pearl: 'Reduces stent thrombosis'
    },
    tags: ['Treatment', 'Antiplatelet', 'PCI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '127',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'TIMI risk score use?',
    back: {
      definition: 'ACS risk stratification',
      high_yield: 'Age, risk factors, ECG',
      clinical_pearl: 'Higher score = worse outcomes'
    },
    tags: ['Risk Stratification', 'TIMI', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '128',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'GRACE score use?',
    back: {
      definition: 'Mortality prediction in ACS',
      high_yield: 'Troponin, vitals',
      clinical_pearl: 'Guides invasive strategy'
    },
    tags: ['Risk Stratification', 'GRACE', 'ACS'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '129',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'STEMI ECG rule?',
    back: {
      definition: '≥1 mm ST elevation in 2 contiguous leads',
      high_yield: 'Except V2–V3 higher cutoff',
      clinical_pearl: 'New LBBB equivalent'
    },
    tags: ['STEMI', 'ECG', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '130',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'MI complications timeline?',
    back: {
      definition: 'Arrhythmias early',
      high_yield: 'Rupture 3–7 days',
      clinical_pearl: 'Dressler weeks later'
    },
    tags: ['MI', 'Complications', 'Timeline'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '131',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'What is Prinzmetal angina?',
    back: {
      definition: 'Coronary vasospasm',
      high_yield: 'ST elevation during pain',
      clinical_pearl: 'Treat with CCBs'
    },
    tags: ['Angina', 'Prinzmetal', 'Vasospasm'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '132',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Risk factors for IHD?',
    back: {
      definition: 'HTN, DM, smoking, lipids',
      high_yield: 'Age, family history',
      clinical_pearl: 'Smoking biggest modifiable'
    },
    tags: ['Risk Factors', 'IHD', 'Prevention'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '133',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Coronary steal phenomenon?',
    back: {
      definition: 'Vasodilators divert blood',
      high_yield: 'Worse ischemia',
      clinical_pearl: 'Seen with dipyridamole'
    },
    tags: ['Pathophysiology', 'Coronary Steal', 'IHD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '134',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Ischemia mechanism?',
    back: {
      definition: 'O2 demand > supply',
      high_yield: 'Atherosclerosis common',
      clinical_pearl: 'Spasm, anemia other causes'
    },
    tags: ['Pathophysiology', 'Ischemia', 'IHD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '135',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Silent ischemia?',
    back: {
      definition: 'Ischemia without symptoms',
      high_yield: 'Common in diabetics',
      clinical_pearl: 'Detected on ECG/stress test'
    },
    tags: ['Ischemia', 'Silent Ischemia', 'Diabetes'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '136',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Troponin trend importance?',
    back: {
      definition: 'Rise and fall confirms MI',
      high_yield: 'Isolated elevation not enough',
      clinical_pearl: 'Repeat testing needed'
    },
    tags: ['Troponin', 'Diagnosis', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '137',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'ST depression meaning?',
    back: {
      definition: 'Subendocardial ischemia',
      high_yield: 'NSTEMI/UA',
      clinical_pearl: 'Horizontal worst'
    },
    tags: ['ECG', 'ST Depression', 'Ischemia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '138',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'T-wave inversion meaning?',
    back: {
      definition: 'Ischemia or reperfusion',
      high_yield: 'Dynamic changes',
      clinical_pearl: 'Compare to old ECG'
    },
    tags: ['ECG', 'T-wave', 'Ischemia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '139',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'When to use fibrinolysis?',
    back: {
      definition: 'If PCI unavailable <120 min',
      high_yield: 'STEMI only',
      clinical_pearl: 'Contraindications strict'
    },
    tags: ['Treatment', 'Fibrinolysis', 'STEMI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: '140',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Ventricular septal rupture sign?',
    back: {
      definition: 'Acute HF + new murmur',
      high_yield: 'Post-MI day 3–5',
      clinical_pearl: 'Emergency surgery'
    },
    tags: ['Complications', 'VSD', 'Post-MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '141',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Free wall rupture clue?',
    back: {
      definition: 'Sudden tamponade',
      high_yield: 'Electromechanical dissociation',
      clinical_pearl: 'Usually fatal'
    },
    tags: ['Complications', 'Free Wall Rupture', 'Post-MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '142',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Papillary muscle rupture?',
    back: {
      definition: 'Acute MR',
      high_yield: 'Severe pulmonary edema',
      clinical_pearl: 'Posteromedial muscle vulnerable'
    },
    tags: ['Complications', 'Papillary Muscle', 'Post-MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '143',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Cardiogenic shock pathophys?',
    back: {
      definition: 'LV failure → low output',
      high_yield: 'Hypotension, cold extremities',
      clinical_pearl: 'Needs inotropes or support'
    },
    tags: ['Complications', 'Cardiogenic Shock', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '144',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'No-reflow phenomenon?',
    back: {
      definition: 'Poor flow post-PCI',
      high_yield: 'Microvascular obstruction',
      clinical_pearl: 'Worse prognosis'
    },
    tags: ['Complications', 'No-reflow', 'PCI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '145',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'MINOCA?',
    back: {
      definition: 'MI with non-obstructive coronaries',
      high_yield: 'Spasm, dissection, emboli',
      clinical_pearl: 'Needs MRI/advanced imaging'
    },
    tags: ['MINOCA', 'MI', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '146',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'SCAD?',
    back: {
      definition: 'Spontaneous coronary artery dissection',
      high_yield: 'Young women',
      clinical_pearl: 'Associated with pregnancy'
    },
    tags: ['SCAD', 'Dissection', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '147',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Reperfusion arrhythmia?',
    back: {
      definition: 'AIVR common',
      high_yield: 'Usually benign',
      clinical_pearl: 'Seen post-PCI'
    },
    tags: ['Arrhythmia', 'Reperfusion', 'Post-PCI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '148',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Hibernating myocardium?',
    back: {
      definition: 'Chronically underperfused but viable',
      high_yield: 'Improves with revascularization',
      clinical_pearl: 'Detect with stress echo or PET'
    },
    tags: ['Hibernating Myocardium', 'Viability', 'IHD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '149',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Coronary microvascular disease?',
    back: {
      definition: 'Small vessel dysfunction',
      high_yield: 'Normal angiogram',
      clinical_pearl: 'Common in women'
    },
    tags: ['Microvascular Disease', 'IHD', 'Women'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '150',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Left main disease clue?',
    back: {
      definition: 'Diffuse ST depression + aVR elevation',
      high_yield: 'High mortality',
      clinical_pearl: 'Urgent revascularization'
    },
    tags: ['Left Main Disease', 'ECG', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '151',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Wellens syndrome?',
    back: {
      definition: 'Deep T-wave inversions V2–V3',
      high_yield: 'Critical LAD stenosis',
      clinical_pearl: 'Do NOT stress test'
    },
    tags: ['Wellens Syndrome', 'LAD', 'ECG'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '152',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'De Winter pattern?',
    back: {
      definition: 'Up-sloping ST depression V1–V3 + tall T waves',
      high_yield: 'LAD occlusion',
      clinical_pearl: 'STEMI equivalent'
    },
    tags: ['De Winter Pattern', 'LAD', 'STEMI Equivalent'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '153',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Posterior MI clues?',
    back: {
      definition: 'ST depression V1–V3',
      high_yield: 'Tall R waves',
      clinical_pearl: 'Get posterior leads'
    },
    tags: ['Posterior MI', 'ECG', 'MI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '154',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Type 2 MI?',
    back: {
      definition: 'Supply–demand mismatch',
      high_yield: 'Sepsis, anemia, tachycardia',
      clinical_pearl: 'Not plaque rupture'
    },
    tags: ['Type 2 MI', 'MI', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
  },
  {
    id: '155',
    system: 'Cardiology',
    topic: 'Ischemic Heart Disease',
    front: 'Takotsubo mimic?',
    back: {
      definition: 'Stress-induced cardiomyopathy',
      high_yield: 'Apical ballooning',
      clinical_pearl: 'Normal coronaries'
    },
    tags: ['Takotsubo', 'Stress Cardiomyopathy', 'MI Mimic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'difficult'
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
