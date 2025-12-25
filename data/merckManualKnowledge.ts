
/**
 * Merck Manual Professional Knowledge Base
 * 
 * This file contains comprehensive medical knowledge extracted from the Merck Manual Professional.
 * Each entry includes:
 * - Topic name and keywords for matching
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Merck Manual URL for reference
 * 
 * COMPREHENSIVE CARDIOLOGY, PULMONARY & RENAL COVERAGE - ALL MAJOR TOPICS
 */

export interface MerckManualEntry {
  topic: string;
  keywords: string[];
  system: string;
  pathophysiology: string;
  clinicalPresentation: string;
  diagnosticApproach: string;
  treatment: string;
  clinicalPearls: string[];
  merckUrl: string;
}

export const merckManualKnowledge: MerckManualEntry[] = [
  // ============================================================================
  // COMPREHENSIVE CARDIOLOGY SECTION - ALL MAJOR TOPICS
  // ============================================================================

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
    topic: 'Atrial Flutter',
    keywords: ['atrial flutter', 'aflutter', 'sawtooth pattern', 'f waves', 'flutter waves'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, atrial flutter is a macroreentrant atrial tachycardia, typically involving a circuit around the tricuspid annulus (typical flutter) or other atrial structures (atypical flutter). The atrial rate is usually 250-350 bpm with a characteristic sawtooth pattern on ECG. AV node conduction typically occurs in a 2:1 or 4:1 ratio, resulting in ventricular rates of 125-175 bpm or 75-100 bpm respectively.',
    clinicalPresentation: 'Patients present with palpitations, dyspnea, chest discomfort, or lightheadedness. Some patients are asymptomatic. Physical examination may reveal a regular or regularly irregular pulse depending on AV conduction ratio. Symptoms are often more pronounced than in atrial fibrillation due to faster ventricular rates.',
    diagnosticApproach: 'ECG shows characteristic sawtooth flutter waves (F waves) best seen in leads II, III, aVF, and V1. Atrial rate is typically 250-350 bpm. Carotid sinus massage or adenosine can transiently slow AV conduction to unmask flutter waves. Echocardiography evaluates for structural heart disease. Electrophysiology study may be needed for atypical flutter.',
    treatment: 'Rate control with beta-blockers or calcium channel blockers. Cardioversion (electrical or pharmacologic with ibutilide) for rhythm control. Catheter ablation of the cavotricuspid isthmus is highly effective for typical flutter (>90% success rate). Anticoagulation based on CHA2DS2-VASc score as stroke risk similar to atrial fibrillation. Treat underlying causes.',
    clinicalPearls: [
      'Flutter often coexists with or converts to atrial fibrillation',
      'Catheter ablation is curative for typical flutter with high success rates',
      'Anticoagulation requirements same as atrial fibrillation',
      'Class IC antiarrhythmics can paradoxically increase ventricular rate by slowing flutter rate and improving AV conduction'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/atrial-flutter'
  },

  {
    topic: 'Supraventricular Tachycardia',
    keywords: ['svt', 'supraventricular tachycardia', 'psvt', 'paroxysmal supraventricular tachycardia', 'avnrt', 'avrt', 'av nodal reentrant tachycardia', 'av reentrant tachycardia'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, supraventricular tachycardia encompasses narrow-complex tachycardias originating above the ventricles. The most common mechanisms are AV nodal reentrant tachycardia (AVNRT, 60% of cases) involving dual AV nodal pathways, and AV reentrant tachycardia (AVRT, 30%) involving an accessory pathway. Atrial tachycardia accounts for the remaining 10%. These arrhythmias typically have abrupt onset and termination.',
    clinicalPresentation: 'Patients experience sudden onset of rapid, regular palpitations, often described as "fluttering" in the chest. Associated symptoms include dyspnea, chest discomfort, lightheadedness, diaphoresis, and anxiety. Polyuria may occur due to atrial natriuretic peptide release. Episodes may last seconds to hours. Physical examination during tachycardia reveals rapid, regular pulse (typically 150-250 bpm).',
    diagnosticApproach: 'ECG during tachycardia shows narrow QRS complex (<120 ms) with regular rhythm at 150-250 bpm. P waves may be buried in QRS (AVNRT), visible after QRS (AVRT), or precede QRS (atrial tachycardia). Vagal maneuvers or adenosine administration can terminate tachycardia or reveal underlying mechanism. Baseline ECG may show delta wave in Wolff-Parkinson-White syndrome. Electrophysiology study defines mechanism and guides ablation.',
    treatment: 'Acute management: vagal maneuvers (Valsalva, carotid massage) first-line. If unsuccessful, adenosine 6 mg rapid IV push, then 12 mg if needed. Alternative agents include diltiazem or metoprolol. Unstable patients require synchronized cardioversion. Long-term management: catheter ablation is curative (>95% success for AVNRT). Beta-blockers or calcium channel blockers for infrequent episodes. Avoid AV nodal blockers in WPW with atrial fibrillation.',
    clinicalPearls: [
      'Adenosine causes brief asystole and chest discomfort - warn patients',
      'Document rhythm strip during adenosine administration',
      'Catheter ablation is highly effective and curative',
      'WPW with atrial fibrillation requires procainamide, not AV nodal blockers'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/paroxysmal-supraventricular-tachycardia-psvt'
  },

  {
    topic: 'Ventricular Tachycardia',
    keywords: ['ventricular tachycardia', 'vt', 'v-tach', 'v tach', 'vtach', 'ventricular tachy'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, ventricular tachycardia is defined as three or more consecutive ventricular beats at a rate >100 bpm. Monomorphic VT (uniform QRS morphology) typically results from reentry around myocardial scar, most commonly post-MI. Polymorphic VT (varying QRS morphology) suggests acute ischemia or channelopathy. VT impairs cardiac output due to loss of AV synchrony, rapid rate, and underlying ventricular dysfunction.',
    clinicalPresentation: 'Presentation ranges from asymptomatic to cardiac arrest. Symptoms include palpitations, dyspnea, chest pain, presyncope, or syncope. Sustained VT (>30 seconds) often causes hemodynamic compromise. Physical examination may reveal cannon A waves in jugular venous pulse (AV dissociation), variable S1 intensity, and signs of heart failure. Pulseless VT is a cardiac arrest rhythm.',
    diagnosticApproach: 'ECG shows wide QRS complex (>120 ms) tachycardia at 100-250 bpm. Features favoring VT over SVT with aberrancy include: AV dissociation, fusion beats, capture beats, QRS >140 ms, extreme axis deviation, and specific QRS morphology criteria (Brugada criteria). Assume wide complex tachycardia is VT until proven otherwise, especially in patients with structural heart disease. Echocardiography and cardiac MRI evaluate for structural disease.',
    treatment: 'Pulseless VT: immediate defibrillation per ACLS protocol. Stable monomorphic VT: amiodarone or procainamide IV. Unstable VT: synchronized cardioversion. Polymorphic VT: treat underlying cause (ischemia, electrolytes, QT prolongation). Long-term: ICD for secondary prevention. Catheter ablation for recurrent VT despite medical therapy. Beta-blockers reduce VT recurrence. Treat underlying heart disease and ischemia.',
    clinicalPearls: [
      'Assume wide complex tachycardia is VT in patients with known heart disease',
      'AV dissociation, fusion beats, and capture beats are diagnostic of VT',
      'ICD is indicated for sustained VT with structural heart disease',
      'Polymorphic VT requires evaluation for acute ischemia and QT prolongation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/ventricular-tachycardia'
  },

  {
    topic: 'Ventricular Fibrillation',
    keywords: ['ventricular fibrillation', 'vfib', 'vf', 'v-fib', 'v fib'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, ventricular fibrillation is chaotic, disorganized ventricular electrical activity resulting in no effective cardiac output. Multiple reentrant wavelets cause rapid, irregular ventricular depolarization without coordinated contraction. VF is the most common initial rhythm in sudden cardiac arrest. Common causes include acute MI, severe ischemia, cardiomyopathy, channelopathies, electrolyte abnormalities, and drug toxicity.',
    clinicalPresentation: 'VF causes immediate loss of consciousness and cardiac arrest. No pulse, blood pressure, or cardiac output. Agonal respirations may be present initially. Without immediate intervention, death occurs within minutes. Witnessed arrest may have brief prodrome of chest pain, palpitations, or dyspnea.',
    diagnosticApproach: 'ECG shows irregular, chaotic waveforms without identifiable QRS complexes, P waves, or T waves. Amplitude may be coarse (>3 mm) or fine (<3 mm). Diagnosis is clinical: unresponsive patient without pulse. Confirm pulselessness and begin CPR immediately. Post-resuscitation evaluation includes ECG, cardiac biomarkers, echocardiography, coronary angiography, and electrolyte assessment.',
    treatment: 'Immediate defibrillation is critical - survival decreases 7-10% per minute delay. Follow ACLS protocol: CPR with high-quality chest compressions, defibrillation, epinephrine, and amiodarone. Treat reversible causes (Hs and Ts). Post-cardiac arrest care includes targeted temperature management, coronary angiography/PCI if indicated, and ICD placement for secondary prevention. Address underlying cause.',
    clinicalPearls: [
      'Immediate defibrillation is the only effective treatment',
      'Survival decreases dramatically with each minute of delay',
      'ICD is indicated for survivors without reversible cause',
      'Evaluate for inherited arrhythmia syndromes in young patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/ventricular-fibrillation'
  },

  {
    topic: 'Torsades de Pointes',
    keywords: ['torsades de pointes', 'torsades', 'polymorphic vt', 'long qt'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, torsades de pointes is a specific form of polymorphic ventricular tachycardia associated with QT interval prolongation. The name describes the characteristic "twisting of the points" appearance as QRS amplitude oscillates around the baseline. Caused by early afterdepolarizations from delayed ventricular repolarization. Triggers include hypokalemia, hypomagnesemia, bradycardia, and QT-prolonging drugs.',
    clinicalPresentation: 'Episodes are typically brief and self-terminating, causing palpitations, lightheadedness, or syncope. May degenerate into sustained VT or ventricular fibrillation causing cardiac arrest. Patients often have history of recurrent syncope. Physical examination between episodes may be normal. Prolonged QTc on baseline ECG is key finding.',
    diagnosticApproach: 'ECG during episode shows polymorphic VT with characteristic twisting QRS morphology and rate 200-250 bpm. Baseline ECG shows prolonged QTc (>500 ms high risk). Measure QTc using Bazett formula: QT/√RR. Identify precipitants: check electrolytes (K+, Mg2+, Ca2+), review medications, assess for congenital long QT syndrome. Genetic testing if suspected inherited channelopathy.',
    treatment: 'Acute: IV magnesium sulfate 2g over 1-2 minutes, even if serum magnesium normal. Correct electrolytes (K+ >4.5, Mg2+ >2). Discontinue QT-prolonging drugs. Temporary pacing or isoproterenol to increase heart rate and shorten QT. Defibrillation if degenerates to VF. Long-term: avoid QT-prolonging drugs, correct electrolytes, beta-blockers for congenital LQTS, ICD for high-risk patients.',
    clinicalPearls: [
      'Magnesium is first-line treatment even if serum level normal',
      'Avoid Class Ia and III antiarrhythmics as they prolong QT',
      'Increasing heart rate (pacing or isoproterenol) shortens QT and prevents recurrence',
      'Screen family members if congenital long QT syndrome suspected'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/torsades-de-pointes'
  },

  {
    topic: 'Wolff-Parkinson-White Syndrome',
    keywords: ['wpw', 'wolff parkinson white', 'accessory pathway', 'delta wave', 'pre-excitation'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, WPW syndrome results from an accessory pathway (Bundle of Kent) that bypasses the AV node, allowing direct electrical connection between atria and ventricles. This causes ventricular pre-excitation with characteristic delta wave on ECG. The accessory pathway can conduct rapidly, creating risk of life-threatening arrhythmias, particularly if atrial fibrillation develops and conducts rapidly to ventricles.',
    clinicalPresentation: 'Many patients are asymptomatic with incidental ECG findings. Symptomatic patients experience paroxysmal supraventricular tachycardia (orthodromic AVRT most common). Palpitations, dyspnea, chest discomfort, presyncope, or syncope. Atrial fibrillation with rapid ventricular response via accessory pathway can cause hemodynamic collapse or degenerate to ventricular fibrillation. Physical examination between episodes is typically normal.',
    diagnosticApproach: 'Baseline ECG shows short PR interval (<120 ms), delta wave (slurred upstroke of QRS), and wide QRS complex (>120 ms). During orthodromic AVRT, ECG shows narrow complex tachycardia with retrograde P waves. During atrial fibrillation, irregular wide complex tachycardia with varying QRS morphology. Electrophysiology study localizes accessory pathway and assesses risk. Exercise testing may unmask intermittent pre-excitation.',
    treatment: 'Asymptomatic patients: observation vs. catheter ablation based on occupation and patient preference. Symptomatic patients: catheter ablation is curative (>95% success rate) and first-line therapy. Acute AVRT: vagal maneuvers, adenosine, or cardioversion. Atrial fibrillation with WPW: procainamide or ibutilide (NOT AV nodal blockers which can accelerate conduction via accessory pathway). Avoid digoxin, beta-blockers, and calcium channel blockers in WPW with AF.',
    clinicalPearls: [
      'Never use AV nodal blockers (digoxin, beta-blockers, CCBs) in WPW with atrial fibrillation',
      'Catheter ablation is curative and preferred for symptomatic patients',
      'Rapid irregular wide complex tachycardia in WPW suggests AF with pre-excitation',
      'High-risk occupations (pilots, athletes) may warrant prophylactic ablation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/wolff-parkinson-white-wpw-syndrome'
  },

  {
    topic: 'Sick Sinus Syndrome',
    keywords: ['sick sinus syndrome', 'sinus node dysfunction', 'brady-tachy syndrome', 'sinus pause'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, sick sinus syndrome encompasses various sinus node dysfunctions including sinus bradycardia, sinus arrest, sinoatrial block, and alternating bradycardia-tachycardia (brady-tachy syndrome). Results from degenerative fibrosis of sinus node, often age-related. May be exacerbated by medications (beta-blockers, calcium channel blockers, digoxin). Associated with atrial fibrillation in 50% of cases.',
    clinicalPresentation: 'Symptoms result from bradycardia or tachycardia episodes: fatigue, exercise intolerance, dyspnea, presyncope, syncope, palpitations, or confusion. Brady-tachy syndrome causes alternating symptoms. Many patients are asymptomatic. Physical examination may reveal bradycardia, irregular pulse, or be normal between episodes. Symptoms often correlate with medication changes.',
    diagnosticApproach: 'ECG may show sinus bradycardia (<50 bpm), sinus pauses (>3 seconds), sinoatrial block, or alternating bradycardia and tachycardia. Holter monitor or event recorder correlates symptoms with rhythm. Exercise testing evaluates chronotropic incompetence (failure to increase heart rate appropriately). Electrophysiology study measures sinus node recovery time if diagnosis uncertain. Exclude reversible causes (hypothyroidism, medications, sleep apnea).',
    treatment: 'Discontinue or reduce AV nodal blocking medications if possible. Symptomatic bradycardia requires permanent pacemaker (dual-chamber preferred). Brady-tachy syndrome: pacemaker allows safe use of rate-controlling drugs for tachycardia. Anticoagulation for atrial fibrillation based on CHA2DS2-VASc score. Treat underlying conditions. Asymptomatic patients may be observed.',
    clinicalPearls: [
      'Pacemaker indicated for symptomatic bradycardia or pauses >3 seconds',
      'Brady-tachy syndrome requires pacemaker before treating tachycardia',
      'Dual-chamber pacing preferred to maintain AV synchrony',
      'Screen for sleep apnea which can worsen sinus node dysfunction'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/sick-sinus-syndrome'
  },

  {
    topic: 'Atrioventricular Block',
    keywords: ['av block', 'heart block', 'first degree av block', 'second degree av block', 'third degree av block', 'complete heart block', 'mobitz'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, AV block represents impaired conduction from atria to ventricles. First-degree: prolonged AV conduction (PR >200 ms) but all impulses conducted. Second-degree Mobitz I (Wenckebach): progressive PR prolongation until dropped beat, typically at AV node level. Second-degree Mobitz II: intermittent non-conducted P waves without PR prolongation, typically infranodal. Third-degree (complete): no atrial impulses conducted, atria and ventricles beat independently.',
    clinicalPresentation: 'First-degree AV block is asymptomatic. Mobitz I often asymptomatic or causes mild symptoms. Mobitz II and third-degree block cause fatigue, dyspnea, presyncope, syncope (Stokes-Adams attacks), or heart failure. Physical examination may reveal bradycardia, cannon A waves (AV dissociation), and variable S1 intensity in complete heart block.',
    diagnosticApproach: 'ECG diagnosis: First-degree shows PR >200 ms with all P waves conducted. Mobitz I shows progressive PR lengthening then dropped QRS (Wenckebach periodicity). Mobitz II shows constant PR with intermittent non-conducted P waves. Third-degree shows complete AV dissociation with regular P-P and R-R intervals but no relationship between them. Evaluate for reversible causes (medications, electrolytes, Lyme disease, ischemia). Echocardiography assesses structural disease.',
    treatment: 'First-degree: observation, no treatment needed. Mobitz I: observation if asymptomatic; pacemaker if symptomatic. Mobitz II: permanent pacemaker indicated due to high risk of progression to complete block. Third-degree: temporary pacing if acute (MI, medications, Lyme disease) with treatment of underlying cause; permanent pacemaker if chronic or symptomatic. Atropine or transcutaneous pacing for acute symptomatic bradycardia.',
    clinicalPearls: [
      'Mobitz II has high risk of sudden progression to complete heart block',
      'Third-degree block with narrow QRS escape suggests junctional escape (more stable)',
      'Third-degree block with wide QRS escape suggests ventricular escape (less stable)',
      'New AV block in setting of MI may be temporary but requires monitoring'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/atrioventricular-block'
  },

  // HEART FAILURE
  {
    topic: 'Heart Failure',
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'cardiac failure', 'systolic heart failure', 'diastolic heart failure', 'heart failure with reduced ejection fraction', 'heart failure with preserved ejection fraction'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, heart failure is a clinical syndrome resulting from structural or functional cardiac disorders that impair ventricular filling or ejection. HFrEF (reduced ejection fraction <40%) involves impaired systolic function, while HFpEF (preserved EF ≥50%) involves diastolic dysfunction with impaired ventricular relaxation and filling. Neurohormonal activation (RAAS, sympathetic nervous system) initially compensates but ultimately contributes to disease progression through adverse remodeling.',
    clinicalPresentation: 'Patients present with dyspnea (exertional, orthopnea, paroxysmal nocturnal dyspnea), fatigue, fluid retention (peripheral edema, ascites), and reduced exercise tolerance. Physical examination may reveal elevated jugular venous pressure, S3 gallop, pulmonary rales, hepatomegaly, and peripheral edema. Right heart failure manifests with systemic congestion, while left heart failure causes pulmonary congestion.',
    diagnosticApproach: 'Diagnosis requires clinical assessment plus objective evidence of cardiac dysfunction. BNP or NT-proBNP levels support diagnosis. Echocardiography is essential to assess ejection fraction, valvular function, and diastolic parameters. Chest X-ray may show cardiomegaly and pulmonary congestion. ECG and laboratory tests identify underlying causes and comorbidities.',
    treatment: 'HFrEF management includes guideline-directed medical therapy (GDMT): ACE inhibitors/ARBs/ARNI, beta-blockers, mineralocorticoid receptor antagonists, and SGLT2 inhibitors. Diuretics manage volume overload. Device therapy (ICD, CRT) for selected patients. HFpEF treatment focuses on managing comorbidities, diuretics for congestion, and SGLT2 inhibitors. Advanced therapies include mechanical circulatory support and transplantation.',
    clinicalPearls: [
      'Start all four pillars of GDMT early and titrate to target doses',
      'SGLT2 inhibitors benefit both HFrEF and HFpEF patients',
      'Daily weights help detect early decompensation',
      'Sodium restriction (<2g/day) and fluid management are essential'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/heart-failure-hf'
  },

  {
    topic: 'Acute Decompensated Heart Failure',
    keywords: ['acute heart failure', 'adhf', 'decompensated heart failure', 'acute decompensated heart failure', 'flash pulmonary edema', 'cardiogenic pulmonary edema', 'acute chf'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, acute decompensated heart failure represents rapid worsening of heart failure signs and symptoms requiring urgent evaluation and treatment. Results from increased preload (volume overload), increased afterload (hypertension), decreased contractility (ischemia, arrhythmia), or combination. Pulmonary and systemic congestion develop rapidly. Common precipitants include medication non-compliance, dietary indiscretion, arrhythmias, ischemia, infection, and uncontrolled hypertension.',
    clinicalPresentation: 'Acute dyspnea at rest, orthopnea, paroxysmal nocturnal dyspnea, and cough with frothy sputum. Physical examination reveals tachypnea, hypoxemia, pulmonary rales, elevated JVP, S3 gallop, and peripheral edema. Patients may be hypertensive (flash pulmonary edema) or hypotensive (cardiogenic shock). Severe cases present with respiratory failure requiring mechanical ventilation.',
    diagnosticApproach: 'Clinical diagnosis supported by elevated BNP/NT-proBNP. Chest X-ray shows pulmonary edema (Kerley B lines, cephalization, pleural effusions) and cardiomegaly. ECG may reveal ischemia, arrhythmia, or LVH. Echocardiography assesses ventricular function and identifies precipitants. Arterial blood gas shows hypoxemia and respiratory alkalosis initially. Cardiac biomarkers rule out acute coronary syndrome.',
    treatment: 'Oxygen to maintain SpO2 >90%. IV loop diuretics (furosemide) for volume overload. Vasodilators (nitroglycerin, nitroprusside) reduce preload and afterload if hypertensive. Non-invasive positive pressure ventilation (BiPAP) improves oxygenation and reduces work of breathing. Inotropes (dobutamine, milrinone) for low cardiac output. Treat precipitants (ischemia, arrhythmia, infection). Mechanical circulatory support for refractory cardiogenic shock.',
    clinicalPearls: [
      'Identify and treat precipitating factors',
      'IV diuretics more effective than oral in acute setting',
      'BiPAP reduces intubation rates and improves outcomes',
      'Avoid excessive diuresis which can worsen renal function'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/acute-decompensated-heart-failure-adhf'
  },

  {
    topic: 'Cardiogenic Shock',
    keywords: ['cardiogenic shock', 'cardiac shock', 'cardiogenic', 'pump failure'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, cardiogenic shock results from severe impairment of cardiac output causing inadequate tissue perfusion despite adequate intravascular volume. Most commonly caused by extensive MI (>40% LV involvement), but also results from acute valvular dysfunction, myocarditis, or end-stage cardiomyopathy. Compensatory mechanisms (tachycardia, vasoconstriction) initially maintain blood pressure but worsen myocardial oxygen supply-demand mismatch, creating vicious cycle.',
    clinicalPresentation: 'Hypotension (SBP <90 mmHg), signs of hypoperfusion (cool extremities, altered mental status, oliguria), and pulmonary congestion. Physical examination reveals tachycardia, weak pulse, cool clammy skin, elevated JVP, pulmonary rales, and S3 gallop. Hemodynamic criteria: cardiac index <2.2 L/min/m², pulmonary capillary wedge pressure >15 mmHg.',
    diagnosticApproach: 'Clinical diagnosis based on hypotension and hypoperfusion. Echocardiography assesses LV function and identifies mechanical complications (VSD, papillary muscle rupture, free wall rupture). ECG and cardiac biomarkers diagnose MI. Pulmonary artery catheterization confirms diagnosis and guides therapy. Arterial blood gas shows metabolic acidosis and elevated lactate. Coronary angiography for revascularization if ischemic cause.',
    treatment: 'Urgent revascularization (PCI or CABG) for MI-related shock. Inotropic support (dobutamine, milrinone) to improve cardiac output. Vasopressors (norepinephrine) if hypotension persists. Mechanical circulatory support (intra-aortic balloon pump, Impella, ECMO) for refractory shock. Surgical repair of mechanical complications. Avoid excessive fluid administration. Treat arrhythmias. Consider heart transplantation for irreversible causes.',
    clinicalPearls: [
      'Early revascularization improves survival in MI-related cardiogenic shock',
      'Mechanical circulatory support bridges to recovery or transplantation',
      'Avoid beta-blockers and ACE inhibitors in acute phase',
      'Mortality remains high (40-50%) despite optimal therapy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/shock-and-fluid-resuscitation/cardiogenic-shock'
  },

  // ISCHEMIC HEART DISEASE
  {
    topic: 'Myocardial Infarction',
    keywords: ['myocardial infarction', 'mi', 'heart attack', 'stemi', 'nstemi', 'acute coronary syndrome', 'acs', 'st elevation myocardial infarction', 'non st elevation myocardial infarction', 'acute mi'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, myocardial infarction results from acute coronary artery occlusion, typically due to atherosclerotic plaque rupture with superimposed thrombosis. STEMI involves complete occlusion with transmural infarction, while NSTEMI involves partial occlusion or transient complete occlusion with subendocardial infarction. Myocardial necrosis begins within 20-40 minutes of complete occlusion and progresses over hours.',
    clinicalPresentation: 'Classic presentation includes substernal chest pressure or pain radiating to left arm, jaw, or back, often accompanied by diaphoresis, nausea, and dyspnea. Symptoms typically last >20 minutes. Atypical presentations (dyspnea, fatigue, epigastric pain) are common in elderly, diabetic, and female patients. Physical examination may be unremarkable or show signs of complications (heart failure, arrhythmias).',
    diagnosticApproach: 'ECG is critical: STEMI shows ST elevation ≥1mm in 2 contiguous leads (≥2mm in V2-V3). NSTEMI shows ST depression, T-wave inversion, or may be normal. Cardiac troponin (I or T) is the preferred biomarker, rising 3-4 hours post-infarction and peaking at 24 hours. Serial troponins improve sensitivity. Echocardiography assesses wall motion abnormalities and complications.',
    treatment: 'Immediate management includes aspirin 325mg, antiplatelet therapy (P2Y12 inhibitor), anticoagulation, and pain control. STEMI requires urgent reperfusion: primary PCI (preferred, <90 minutes) or fibrinolysis if PCI unavailable (<120 minutes). NSTEMI management is risk-stratified: high-risk patients undergo early invasive strategy. Post-MI care includes beta-blockers, ACE inhibitors, statins, and cardiac rehabilitation.',
    clinicalPearls: [
      'Time is muscle - door-to-balloon time <90 minutes for STEMI',
      'Aspirin should be given immediately and chewed for faster absorption',
      'New LBBB with chest pain is a STEMI equivalent',
      'Posterior MI shows ST depression in V1-V3; check posterior leads'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/acute-myocardial-infarction-mi'
  },

  {
    topic: 'Unstable Angina',
    keywords: ['unstable angina', 'ua', 'crescendo angina', 'rest angina', 'new onset angina', 'unstable'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, unstable angina is part of acute coronary syndrome spectrum, characterized by myocardial ischemia without myocardial necrosis (negative cardiac biomarkers). Results from non-occlusive thrombus on disrupted atherosclerotic plaque, causing transient severe ischemia. Represents high-risk state with significant progression to MI or death. Distinguished from NSTEMI only by absence of troponin elevation.',
    clinicalPresentation: 'Three patterns: rest angina (occurring at rest or minimal exertion), new-onset angina (severe, within 2 months), or crescendo angina (increasing frequency, severity, or duration). Chest discomfort similar to MI but may be briefer. Physical examination often normal between episodes. High-risk features include prolonged pain, hemodynamic instability, or new mitral regurgitation murmur.',
    diagnosticApproach: 'ECG may show ST depression, T-wave inversion, or be normal. Serial cardiac troponins are negative (distinguishes from NSTEMI). Risk stratification using TIMI or GRACE scores guides management. Stress testing or coronary CT angiography for low-risk patients. Coronary angiography for high-risk patients or those with recurrent symptoms despite medical therapy.',
    treatment: 'Antiplatelet therapy: aspirin plus P2Y12 inhibitor (ticagrelor or prasugrel preferred over clopidogrel). Anticoagulation with heparin or fondaparinux. Beta-blockers and nitrates for symptom control. High-intensity statin. Early invasive strategy (coronary angiography within 24-72 hours) for high-risk patients. Medical management with delayed angiography for low-risk patients. Revascularization (PCI or CABG) based on anatomy.',
    clinicalPearls: [
      'Unstable angina and NSTEMI managed similarly - only differ by troponin',
      'TIMI score ≥3 or GRACE score >140 indicates high risk',
      'Dual antiplatelet therapy for 12 months post-ACS',
      'Avoid NSAIDs which increase cardiovascular risk'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/unstable-angina'
  },

  {
    topic: 'Stable Angina Pectoris',
    keywords: ['stable angina', 'chronic stable angina', 'exertional angina', 'angina pectoris', 'stable angina pectoris'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, stable angina results from fixed coronary artery stenosis (typically >70%) causing myocardial oxygen supply-demand mismatch during increased cardiac workload. Atherosclerotic plaque narrows coronary lumen, limiting blood flow during exertion or stress. Symptoms are predictable and reproducible with similar levels of exertion. Represents chronic coronary syndrome with lower acute event risk than unstable angina.',
    clinicalPresentation: 'Predictable chest discomfort with exertion, emotional stress, or cold exposure, relieved by rest or nitroglycerin within 5-10 minutes. Described as pressure, tightness, or heaviness in substernal or left chest, may radiate to arm, jaw, or back. Canadian Cardiovascular Society (CCS) classification grades severity. Physical examination typically normal at rest.',
    diagnosticApproach: 'Diagnosis based on clinical history. Resting ECG often normal but may show prior MI or LVH. Stress testing (exercise ECG, stress echo, or nuclear imaging) demonstrates inducible ischemia. Coronary CT angiography evaluates coronary anatomy non-invasively. Invasive coronary angiography defines extent and severity of disease, guides revascularization. Assess cardiovascular risk factors.',
    treatment: 'Medical therapy: antiplatelet (aspirin), beta-blocker, statin, ACE inhibitor if diabetes or LV dysfunction. Antianginal therapy: sublingual nitroglycerin for acute episodes; long-acting nitrates, beta-blockers, or calcium channel blockers for prevention. Ranolazine for refractory angina. Revascularization (PCI or CABG) for refractory symptoms or high-risk anatomy (left main, proximal LAD, three-vessel disease). Aggressive risk factor modification.',
    clinicalPearls: [
      'Stable angina has predictable pattern - change in pattern suggests unstable angina',
      'Beta-blockers are first-line for angina prevention and improve outcomes',
      'CABG superior to PCI for left main or three-vessel disease',
      'Cardiac rehabilitation improves symptoms and reduces events'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/stable-angina-pectoris'
  },

  {
    topic: 'Prinzmetal Angina',
    keywords: ['prinzmetal angina', 'prinzmetal', 'variant angina', 'vasospastic angina', 'coronary vasospasm', 'coronary spasm'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, Prinzmetal (variant) angina results from coronary artery vasospasm causing transient complete or near-complete occlusion, typically in absence of significant atherosclerosis. Spasm usually occurs at rest, often in early morning hours. Mechanism involves endothelial dysfunction, smooth muscle hyperreactivity, and autonomic imbalance. May be triggered by smoking, cocaine, cold exposure, or hyperventilation.',
    clinicalPresentation: 'Chest pain at rest, typically between midnight and 8 AM, lasting 5-15 minutes. Pain similar to typical angina but occurs without exertion. May be associated with palpitations or syncope if arrhythmias occur. Physical examination normal between episodes. Smoking and cocaine use are common associations.',
    diagnosticApproach: 'ECG during pain shows transient ST elevation that resolves with symptom relief. Cardiac biomarkers typically negative unless prolonged spasm causes MI. Coronary angiography may show normal or minimal disease; provocative testing with ergonovine or acetylcholine can induce spasm. Holter monitoring may capture ST elevation during nocturnal episodes. Exclude cocaine use.',
    treatment: 'Calcium channel blockers (diltiazem or amlodipine) are first-line, prevent vasospasm. Long-acting nitrates also effective. Avoid beta-blockers which may worsen vasospasm through unopposed alpha-mediated vasoconstriction. Smoking cessation essential. Avoid triggers (cocaine, cold exposure). Aspirin use controversial. Refractory cases may require high-dose calcium channel blockers or combination therapy.',
    clinicalPearls: [
      'ST elevation during pain that resolves is diagnostic',
      'Beta-blockers contraindicated - may worsen vasospasm',
      'Calcium channel blockers are highly effective',
      'Screen for cocaine use in young patients with vasospastic angina'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/prinzmetal-angina'
  },

  // VALVULAR HEART DISEASE
  {
    topic: 'Aortic Stenosis',
    keywords: ['aortic stenosis', 'as', 'aortic valve stenosis', 'aortic valve narrowing', 'calcific aortic stenosis'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, aortic stenosis involves progressive narrowing of the aortic valve orifice, most commonly due to age-related calcific degeneration, bicuspid aortic valve, or rheumatic disease. The obstruction increases left ventricular afterload, leading to compensatory concentric hypertrophy. Eventually, the ventricle fails to maintain adequate cardiac output, and symptoms develop.',
    clinicalPresentation: 'The classic triad includes angina, syncope, and dyspnea. Angina results from increased myocardial oxygen demand and reduced coronary perfusion. Syncope occurs with exertion due to inability to increase cardiac output. Dyspnea indicates heart failure. Physical examination reveals a crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, delayed and diminished carotid upstroke (pulsus parvus et tardus), and narrow pulse pressure.',
    diagnosticApproach: 'Echocardiography is diagnostic, measuring valve area (<1.0 cm² = severe), mean gradient (>40 mmHg = severe), and peak velocity (>4 m/s = severe). ECG may show left ventricular hypertrophy. Cardiac catheterization is performed when noninvasive tests are inconclusive or to assess coronary anatomy before valve replacement.',
    treatment: 'Symptomatic severe AS requires aortic valve replacement. Surgical AVR is preferred for low-risk patients. TAVR is indicated for high surgical risk or inoperable patients and increasingly used in intermediate and low-risk patients. Medical therapy has no proven benefit in delaying progression. Asymptomatic patients require close monitoring with serial echocardiography.',
    clinicalPearls: [
      'Once symptoms develop, average survival is <2 years without intervention',
      'Avoid vasodilators as they can cause hypotension',
      'Low-flow, low-gradient AS requires dobutamine stress echo',
      'Screen for coronary disease before valve replacement'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/aortic-stenosis'
  },

  {
    topic: 'Aortic Regurgitation',
    keywords: ['aortic regurgitation', 'ar', 'aortic insufficiency', 'ai', 'aortic valve regurgitation', 'aortic valve insufficiency'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, aortic regurgitation results from incomplete aortic valve closure during diastole, allowing backflow from aorta into left ventricle. Causes include aortic root dilation (Marfan, hypertension, aging), bicuspid valve, rheumatic disease, or aortic dissection. Chronic AR causes LV volume overload with eccentric hypertrophy. Acute AR causes sudden volume overload without compensatory remodeling, leading to pulmonary edema and cardiogenic shock.',
    clinicalPresentation: 'Chronic AR: asymptomatic for years, then dyspnea, orthopnea, PND, and angina. Physical exam shows wide pulse pressure, bounding pulses (Corrigan pulse, water-hammer pulse), head bobbing (de Musset sign), and diastolic decrescendo murmur at left sternal border. Acute AR: sudden dyspnea, pulmonary edema, hypotension, and soft short diastolic murmur.',
    diagnosticApproach: 'Echocardiography assesses severity (regurgitant volume, regurgitant fraction, vena contracta), LV size and function, and aortic root dimensions. Chronic severe AR: holodiastolic flow reversal in descending aorta, pressure half-time <200 ms. ECG shows LVH in chronic AR. Chest X-ray shows cardiomegaly. Cardiac MRI quantifies regurgitant volume. Evaluate for underlying cause (Marfan, dissection).',
    treatment: 'Chronic AR: vasodilators (ACE inhibitors, nifedipine) reduce afterload and slow progression. Aortic valve replacement indicated for symptoms, LV dysfunction (EF <50%), or severe LV dilation (LVESD >50 mm). Acute severe AR: emergency surgery after stabilization with vasodilators and inotropes. Avoid beta-blockers in acute AR (worsen by prolonging diastole).',
    clinicalPearls: [
      'Wide pulse pressure and bounding pulses are classic signs',
      'Acute AR is surgical emergency',
      'Serial echo monitors LV size and function in asymptomatic patients',
      'Austin Flint murmur: mid-diastolic rumble from AR jet hitting mitral valve'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/aortic-regurgitation'
  },

  {
    topic: 'Mitral Stenosis',
    keywords: ['mitral stenosis', 'ms', 'mitral valve stenosis', 'mitral valve narrowing', 'rheumatic mitral stenosis'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, mitral stenosis is narrowing of the mitral valve orifice, most commonly from rheumatic heart disease (accounts for >90% in developing countries). Chronic inflammation causes leaflet thickening, commissural fusion, and chordal shortening. Obstruction increases left atrial pressure, causing left atrial enlargement, pulmonary hypertension, and eventually right heart failure. Atrial fibrillation develops in 30-40% due to atrial dilation.',
    clinicalPresentation: 'Dyspnea on exertion is earliest symptom, progressing to orthopnea and PND. Hemoptysis may occur from pulmonary venous hypertension. Atrial fibrillation causes palpitations and increases stroke risk. Physical exam reveals low-pitched diastolic rumble at apex with opening snap, loud S1, and accentuated P2 if pulmonary hypertension present. Malar flush may be visible.',
    diagnosticApproach: 'Echocardiography is diagnostic: measures valve area (<1.5 cm² = severe), mean gradient (>10 mmHg = severe), and pulmonary artery pressure. Shows thickened, domed mitral leaflets with restricted opening. ECG may show left atrial enlargement (P mitrale), atrial fibrillation, or right ventricular hypertrophy. Chest X-ray shows left atrial enlargement, straightening of left heart border, and pulmonary congestion.',
    treatment: 'Medical: diuretics for congestion, beta-blockers or calcium channel blockers for rate control in AF, anticoagulation for AF or prior embolism. Percutaneous balloon mitral valvuloplasty for symptomatic severe MS with favorable valve morphology and no left atrial thrombus. Mitral valve surgery (repair or replacement) for severe symptomatic MS not suitable for valvuloplasty. Treat atrial fibrillation and prevent thromboembolism.',
    clinicalPearls: [
      'Opening snap timing correlates with severity - earlier snap indicates more severe stenosis',
      'Atrial fibrillation dramatically worsens symptoms by reducing diastolic filling time',
      'Anticoagulation essential for AF or prior embolism',
      'Pregnancy poorly tolerated due to increased cardiac output demands'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/mitral-stenosis'
  },

  {
    topic: 'Mitral Regurgitation',
    keywords: ['mitral regurgitation', 'mr', 'mitral insufficiency', 'mitral valve regurgitation', 'mitral valve insufficiency', 'mitral valve leak'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, mitral regurgitation results from incomplete mitral valve closure during systole, allowing backflow from LV into LA. Primary MR involves valve pathology (prolapse, rheumatic disease, chordal rupture). Secondary (functional) MR results from LV dilation or dysfunction with structurally normal valve. Chronic MR causes LV and LA volume overload with eccentric LV hypertrophy. Acute severe MR causes sudden LA pressure rise and pulmonary edema.',
    clinicalPresentation: 'Chronic MR: asymptomatic for years, then dyspnea, fatigue, and palpitations (AF). Acute MR: sudden dyspnea, pulmonary edema, and cardiogenic shock. Physical exam shows holosystolic murmur at apex radiating to axilla, best heard in left lateral decubitus position. S3 gallop common. Acute MR may have soft murmur due to rapid LA-LV pressure equalization.',
    diagnosticApproach: 'Echocardiography assesses severity (regurgitant volume, regurgitant fraction, effective regurgitant orifice area), mechanism (primary vs secondary), LV size and function, and LA size. Severe MR: vena contracta ≥0.7 cm, regurgitant volume ≥60 mL, regurgitant fraction ≥50%. ECG may show LA enlargement and AF. Chest X-ray shows cardiomegaly and LA enlargement. TEE better visualizes valve anatomy.',
    treatment: 'Chronic primary MR: mitral valve repair (preferred) or replacement for severe symptomatic MR or asymptomatic with LV dysfunction (EF <60%) or LV dilation (LVESD ≥40 mm). Transcatheter edge-to-edge repair (MitraClip) for high surgical risk. Secondary MR: optimize heart failure therapy (GDMT), CRT if indicated. Acute severe MR: emergency surgery after stabilization with vasodilators, inotropes, and IABP. Anticoagulation for AF.',
    clinicalPearls: [
      'Mitral valve repair preferred over replacement when feasible',
      'Acute MR from papillary muscle rupture is surgical emergency',
      'Flail leaflet indicates severe MR requiring surgery',
      'Secondary MR improves with optimal heart failure treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/mitral-regurgitation'
  },

  {
    topic: 'Mitral Valve Prolapse',
    keywords: ['mitral valve prolapse', 'mvp', 'floppy mitral valve', 'barlow disease', 'mitral prolapse', 'mvp syndrome'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, mitral valve prolapse involves abnormal systolic displacement of mitral leaflets into left atrium. Results from myxomatous degeneration causing leaflet redundancy and chordal elongation. Most cases are primary (idiopathic), but MVP occurs in connective tissue disorders (Marfan, Ehlers-Danlos). Usually benign but can progress to significant mitral regurgitation or arrhythmias.',
    clinicalPresentation: 'Most patients asymptomatic. Some experience atypical chest pain, palpitations, dyspnea, or anxiety. Physical exam reveals mid-systolic click (earlier with standing, later with squatting) with or without late systolic murmur. Murmur increases with maneuvers that decrease LV volume (standing, Valsalva). Complications include progressive MR, arrhythmias, and rarely sudden death.',
    diagnosticApproach: 'Echocardiography is diagnostic: shows systolic displacement of mitral leaflets >2 mm beyond mitral annular plane in parasternal long-axis view. Assesses leaflet thickness, degree of prolapse, and severity of MR. ECG usually normal but may show T-wave abnormalities or arrhythmias. Holter monitor if palpitations. Exclude connective tissue disorders in young patients.',
    treatment: 'Asymptomatic MVP without MR: reassurance, no treatment needed. Beta-blockers for symptomatic palpitations or chest pain. Severe MR: mitral valve repair or replacement per MR guidelines. Avoid dehydration and stimulants. Genetic counseling if syndromic. Monitor with serial echo if progressive MR.',
    clinicalPearls: [
      'Mid-systolic click is pathognomonic',
      'Most patients have benign course',
      'Severe myxomatous disease (Barlow) has higher risk of complications',
      'Maneuvers that decrease preload make click earlier and murmur longer'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/mitral-valve-prolapse-mvp'
  },

  {
    topic: 'Tricuspid Regurgitation',
    keywords: ['tricuspid regurgitation', 'tr', 'tricuspid insufficiency', 'tricuspid valve regurgitation', 'tricuspid valve insufficiency'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, tricuspid regurgitation is most commonly functional (secondary) due to RV dilation from pulmonary hypertension or RV dysfunction. Primary TR results from valve pathology (rheumatic disease, carcinoid, trauma, pacemaker leads). TR causes RV volume overload and systemic venous congestion. Severe TR leads to RV failure, hepatic congestion, and peripheral edema.',
    clinicalPresentation: 'Symptoms include fatigue, abdominal distension, peripheral edema, and right upper quadrant pain from hepatic congestion. Physical exam shows holosystolic murmur at left lower sternal border increasing with inspiration (Carvallo sign), elevated JVP with prominent V waves, pulsatile liver, ascites, and peripheral edema. Severe TR causes pulsatile hepatomegaly.',
    diagnosticApproach: 'Echocardiography assesses TR severity (vena contracta, regurgitant volume, hepatic vein flow reversal), RV size and function, and pulmonary artery pressure. Severe TR: vena contracta ≥0.7 cm, dense continuous wave Doppler signal. ECG may show right atrial enlargement and RV hypertrophy. Chest X-ray shows cardiomegaly and RA enlargement. Right heart catheterization measures pulmonary pressures.',
    treatment: 'Treat underlying cause: pulmonary hypertension therapy, optimize left heart failure treatment. Diuretics for volume overload. Severe symptomatic TR: tricuspid valve repair (preferred) or replacement, often performed during left-sided valve surgery. Transcatheter tricuspid valve interventions emerging. Isolated TR surgery has high operative risk. Treat atrial fibrillation if present.',
    clinicalPearls: [
      'Most TR is functional from pulmonary hypertension or RV dilation',
      'Carvallo sign (increased murmur with inspiration) is characteristic',
      'Severe TR causes pulsatile liver and prominent V waves in JVP',
      'Tricuspid valve repair preferred over replacement when feasible'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/tricuspid-regurgitation'
  },

  // HYPERTENSION
  {
    topic: 'Hypertension',
    keywords: ['hypertension', 'high blood pressure', 'htn', 'elevated blood pressure', 'essential hypertension', 'primary hypertension'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, hypertension is sustained elevation of blood pressure (≥130/80 mmHg). Primary (essential) hypertension (90-95%) has multifactorial etiology involving genetic, environmental, and lifestyle factors. Secondary hypertension results from identifiable causes (renal disease, endocrine disorders, medications). Chronic hypertension causes vascular remodeling, left ventricular hypertrophy, and end-organ damage (heart, brain, kidneys, eyes).',
    clinicalPresentation: 'Most patients are asymptomatic; hypertension is often detected on routine screening. Severe hypertension may cause headache, dizziness, or blurred vision. Hypertensive emergency presents with severe elevation (>180/120) plus acute end-organ damage (encephalopathy, stroke, MI, acute heart failure, aortic dissection, acute kidney injury). Physical examination may reveal retinopathy, S4 gallop, or bruits.',
    diagnosticApproach: 'Diagnosis requires elevated blood pressure on ≥2 occasions. Confirm with home blood pressure monitoring or ambulatory monitoring. Evaluate for secondary causes in young patients, resistant hypertension, or sudden onset: renal function, electrolytes, urinalysis, plasma aldosterone/renin ratio, renal artery imaging. Assess for target organ damage: ECG, echocardiography, fundoscopy, urine albumin. Cardiovascular risk stratification.',
    treatment: 'Lifestyle modifications: weight loss, DASH diet, sodium restriction (<2g/day), exercise, limit alcohol. Pharmacotherapy for BP ≥130/80 with cardiovascular disease or ≥140/90 without. First-line agents: ACE inhibitors, ARBs, calcium channel blockers, thiazide diuretics. Most patients require ≥2 drugs. Target <130/80 for most patients. Resistant hypertension may require spironolactone. Hypertensive emergency requires IV antihypertensives and ICU monitoring.',
    clinicalPearls: [
      'White coat hypertension requires home BP monitoring for diagnosis',
      'ACE inhibitors/ARBs are preferred in diabetes or CKD with proteinuria',
      'Avoid abrupt BP reduction in hypertensive emergency (risk of stroke)',
      'Screen for secondary causes if age <30 or resistant to 3 drugs'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/hypertension/hypertension'
  },

  {
    topic: 'Hypertensive Emergency',
    keywords: ['hypertensive emergency', 'malignant hypertension', 'hypertensive crisis', 'hypertensive encephalopathy', 'acute hypertensive emergency'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, hypertensive emergency is severe blood pressure elevation (typically >180/120 mmHg) with acute target organ damage. Acute endothelial injury causes fibrinoid necrosis of arterioles, leading to organ ischemia and dysfunction. Organs affected include brain (encephalopathy, stroke), heart (MI, acute heart failure), kidneys (acute kidney injury), and vasculature (aortic dissection). Requires immediate BP reduction to prevent irreversible organ damage.',
    clinicalPresentation: 'Severe headache, visual disturbances, confusion, seizures, chest pain, dyspnea, or focal neurologic deficits. Physical exam shows markedly elevated BP, papilledema, retinal hemorrhages, altered mental status, pulmonary edema, or neurologic deficits. Hypertensive urgency (severe BP elevation without organ damage) is less acute.',
    diagnosticApproach: 'Measure BP in both arms. Assess for end-organ damage: neurologic exam, fundoscopy (papilledema, hemorrhages), ECG and troponin (MI), chest X-ray (pulmonary edema, widened mediastinum), renal function and urinalysis (acute kidney injury, hematuria), CT head if neurologic symptoms. Distinguish emergency (organ damage) from urgency (no organ damage) as management differs.',
    treatment: 'ICU admission. IV antihypertensives: nicardipine, clevidipine, labetalol, or enalaprilat. Goal: reduce MAP by 10-20% in first hour, then 5-15% over next 23 hours. Avoid excessive BP reduction (risk of stroke, MI, renal failure). Specific agents for specific scenarios: nitroprusside for aortic dissection, nitroglycerin for MI/pulmonary edema, labetalol for stroke. Transition to oral agents once stable. Treat underlying cause.',
    clinicalPearls: [
      'Gradual BP reduction prevents cerebral hypoperfusion',
      'Nitroprusside can cause cyanide toxicity with prolonged use',
      'Aortic dissection requires aggressive BP control (SBP <120)',
      'Hypertensive urgency can be managed with oral agents outpatient'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/hypertension/hypertensive-emergencies'
  },

  // CARDIOMYOPATHIES
  {
    topic: 'Dilated Cardiomyopathy',
    keywords: ['dilated cardiomyopathy', 'dcm', 'idiopathic dilated cardiomyopathy', 'dilated cm', 'congestive cardiomyopathy'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, dilated cardiomyopathy is characterized by LV dilation and systolic dysfunction without adequate hypertrophy. Causes include genetic mutations (30-50%), viral myocarditis, alcohol, chemotherapy (anthracyclines), peripartum, and idiopathic. Progressive LV dilation and dysfunction lead to heart failure, arrhythmias, and thromboembolism. Neurohormonal activation worsens remodeling.',
    clinicalPresentation: 'Heart failure symptoms: dyspnea, orthopnea, PND, fatigue, and edema. Palpitations from arrhythmias. Thromboembolic events (stroke, peripheral embolism). Physical exam shows displaced PMI, S3 gallop, elevated JVP, pulmonary rales, and peripheral edema. May have mitral or tricuspid regurgitation murmurs from annular dilation.',
    diagnosticApproach: 'Echocardiography shows LV dilation (LVEDD >5.5 cm in women, >6.0 cm in men) and reduced EF (<40%). Global hypokinesis. May show LV thrombus. ECG may show LBBB, Q waves, or arrhythmias. Cardiac MRI evaluates for myocarditis, infiltrative disease, or scar. Genetic testing if family history. Exclude ischemia with coronary angiography or stress testing. Check TSH, iron studies, HIV.',
    treatment: 'Standard heart failure therapy (GDMT): ACE inhibitors/ARBs/ARNI, beta-blockers, MRAs, SGLT2 inhibitors. Diuretics for volume overload. ICD for EF ≤35% despite 3 months optimal therapy. CRT if LBBB and QRS ≥150 ms. Anticoagulation if LV thrombus or AF. Avoid alcohol. Treat underlying cause (alcohol cessation, immunosuppression for myocarditis). Consider transplant for refractory disease.',
    clinicalPearls: [
      'Exclude ischemic cause - coronary angiography often needed',
      'Genetic testing identifies familial DCM in 30-50%',
      'Alcohol cessation can lead to significant recovery',
      'Peripartum cardiomyopathy may recover but has recurrence risk'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/cardiomyopathies/dilated-cardiomyopathy'
  },

  {
    topic: 'Hypertrophic Cardiomyopathy',
    keywords: ['hypertrophic cardiomyopathy', 'hcm', 'hocm', 'hypertrophic obstructive cardiomyopathy', 'idiopathic hypertrophic subaortic stenosis', 'ihss', 'hypertrophic cm'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, hypertrophic cardiomyopathy is characterized by LV hypertrophy (wall thickness ≥15 mm) without other cause. Autosomal dominant inheritance with mutations in sarcomere protein genes. Asymmetric septal hypertrophy is most common. LVOT obstruction occurs in 70% due to systolic anterior motion of mitral valve. Diastolic dysfunction from impaired relaxation. Risk of sudden cardiac death from ventricular arrhythmias.',
    clinicalPresentation: 'Many asymptomatic. Symptoms include dyspnea, chest pain, palpitations, presyncope, or syncope (especially with exertion). Sudden cardiac death may be first presentation. Physical exam shows harsh systolic murmur at left sternal border increasing with Valsalva and standing (decreased preload worsens obstruction), decreasing with squatting. Bisferiens pulse. S4 gallop.',
    diagnosticApproach: 'Echocardiography shows LV hypertrophy (≥15 mm, or ≥13 mm with family history), typically asymmetric septal hypertrophy. Systolic anterior motion of mitral valve and LVOT obstruction (gradient ≥30 mmHg) in obstructive HCM. Diastolic dysfunction. ECG shows LVH, deep Q waves, and T-wave inversions. Cardiac MRI for unclear cases. Genetic testing. Screen first-degree relatives. Assess sudden death risk.',
    treatment: 'Beta-blockers or non-dihydropyridine calcium channel blockers for symptoms. Disopyramide for refractory obstruction. Avoid vasodilators and diuretics (worsen obstruction). Septal reduction therapy (surgical myectomy or alcohol septal ablation) for severe symptomatic obstruction despite medical therapy. ICD for high sudden death risk (prior cardiac arrest, sustained VT, family history of sudden death, massive LVH, unexplained syncope). Avoid strenuous exercise.',
    clinicalPearls: [
      'Most common cause of sudden cardiac death in young athletes',
      'Murmur increases with decreased preload (opposite of AS)',
      'Avoid dehydration and vasodilators',
      'Screen first-degree relatives with echo and ECG'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/cardiomyopathies/hypertrophic-cardiomyopathy'
  },

  {
    topic: 'Restrictive Cardiomyopathy',
    keywords: ['restrictive cardiomyopathy', 'rcm', 'infiltrative cardiomyopathy', 'restrictive cm', 'diastolic dysfunction cardiomyopathy'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, restrictive cardiomyopathy is characterized by impaired ventricular filling due to increased myocardial stiffness, with normal or near-normal systolic function and wall thickness. Causes include infiltrative diseases (amyloidosis, sarcoidosis, hemochromatosis), storage diseases (Fabry, glycogen storage), endomyocardial diseases (fibrosis, hypereosinophilic syndrome), and idiopathic. Diastolic dysfunction causes elevated filling pressures and heart failure.',
    clinicalPresentation: 'Right heart failure symptoms predominate: fatigue, peripheral edema, ascites, hepatomegaly. Dyspnea and exercise intolerance. Physical exam shows elevated JVP with prominent Y descent (Kussmaul sign - JVP rises with inspiration), S3 or S4 gallop, hepatomegaly, ascites, and peripheral edema. May have low voltage ECG despite thick walls in amyloidosis.',
    diagnosticApproach: 'Echocardiography shows normal or mildly reduced EF, normal or mildly increased wall thickness, biatrial enlargement, and restrictive filling pattern (short deceleration time, E/A ratio >2). Cardiac MRI shows late gadolinium enhancement patterns specific to etiology. ECG may show low voltage (amyloidosis) or conduction abnormalities. Endomyocardial biopsy for definitive diagnosis. Distinguish from constrictive pericarditis.',
    treatment: 'Treat underlying cause: chemotherapy for amyloidosis, phlebotomy for hemochromatosis, immunosuppression for sarcoidosis. Diuretics for congestion (use cautiously - preload dependent). Avoid aggressive diuresis. Treat arrhythmias. Anticoagulation for AF. Pacemaker for conduction disease. Poor prognosis overall. Cardiac transplantation for refractory disease (but amyloidosis may recur).',
    clinicalPearls: [
      'Amyloidosis: thick walls with low voltage ECG is classic',
      'Apical sparing on strain imaging suggests cardiac amyloidosis',
      'Distinguish from constrictive pericarditis (surgical cure possible)',
      'Endomyocardial biopsy often needed for definitive diagnosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/cardiomyopathies/restrictive-cardiomyopathy'
  },

  {
    topic: 'Myocarditis',
    keywords: ['myocarditis', 'viral myocarditis', 'inflammatory cardiomyopathy', 'cardiac inflammation', 'myocardial inflammation'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, myocarditis is inflammation of the myocardium, most commonly from viral infection (coxsackievirus, adenovirus, parvovirus B19, COVID-19). Other causes include autoimmune diseases, drugs (immune checkpoint inhibitors, clozapine), toxins, and giant cell myocarditis. Inflammation causes myocyte injury and dysfunction. May progress to dilated cardiomyopathy. Fulminant myocarditis causes severe acute heart failure.',
    clinicalPresentation: 'Presentation varies from asymptomatic to fulminant heart failure or sudden death. Symptoms include chest pain (may mimic MI), dyspnea, palpitations, and fatigue. Often preceded by viral prodrome. Physical exam may show tachycardia, S3 gallop, and signs of heart failure. Fulminant myocarditis presents with cardiogenic shock.',
    diagnosticApproach: 'Cardiac biomarkers elevated (troponin, BNP). ECG shows ST-T changes, arrhythmias, or conduction abnormalities. Echocardiography shows LV dysfunction (global or regional), may be normal in mild cases. Cardiac MRI shows myocardial edema, hyperemia, and late gadolinium enhancement (diagnostic criteria: Lake Louise criteria). Endomyocardial biopsy is gold standard but rarely performed. Viral PCR on biopsy. Exclude acute coronary syndrome.',
    treatment: 'Supportive care: standard heart failure therapy, treat arrhythmias. Avoid NSAIDs and strenuous exercise during acute phase. Fulminant myocarditis may require mechanical circulatory support (ECMO, Impella). Immunosuppression (corticosteroids, azathioprine) for giant cell myocarditis or autoimmune causes. Most viral myocarditis resolves spontaneously. ICD if persistent LV dysfunction. Monitor for progression to dilated cardiomyopathy.',
    clinicalPearls: [
      'Cardiac MRI is key diagnostic test',
      'Fulminant myocarditis has better long-term prognosis than acute myocarditis if survives',
      'Giant cell myocarditis requires immunosuppression',
      'COVID-19 can cause myocarditis, especially after vaccination'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/myocarditis-and-pericarditis/myocarditis'
  },

  // PERICARDIAL DISEASE
  {
    topic: 'Acute Pericarditis',
    keywords: ['pericarditis', 'acute pericarditis', 'pericardial inflammation', 'pericardial disease'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, acute pericarditis is inflammation of the pericardium, most commonly idiopathic or viral (coxsackievirus, echovirus, adenovirus). Other causes include post-MI (early or Dressler syndrome), uremia, autoimmune diseases, malignancy, tuberculosis, and drugs. Inflammation causes chest pain and may lead to pericardial effusion. Recurrent pericarditis occurs in 15-30%.',
    clinicalPresentation: 'Sharp, pleuritic chest pain worse with lying flat and inspiration, improved by sitting forward. May radiate to trapezius ridge. Associated with dyspnea. Physical exam reveals pericardial friction rub (scratchy, triphasic sound best heard at left sternal border with patient leaning forward). Fever common. Pericardial effusion may cause muffled heart sounds.',
    diagnosticApproach: 'Diagnosis requires 2 of 4 criteria: chest pain, pericardial friction rub, ECG changes, pericardial effusion. ECG shows diffuse ST elevation (concave upward) with PR depression. Cardiac biomarkers may be mildly elevated (myopericarditis). Echocardiography detects pericardial effusion. Inflammatory markers elevated (ESR, CRP). Exclude MI. Evaluate for underlying cause if recurrent or high-risk features.',
    treatment: 'NSAIDs (ibuprofen or aspirin) plus colchicine for 3 months reduces recurrence. Avoid strenuous exercise until symptoms resolve and inflammatory markers normalize. Corticosteroids for refractory cases or specific causes (autoimmune, uremic). Treat underlying cause. Restrict activity. Monitor for complications (tamponade, constrictive pericarditis). Recurrent pericarditis may require prolonged colchicine or immunosuppression.',
    clinicalPearls: [
      'Colchicine reduces recurrence risk - use for initial episode',
      'Diffuse ST elevation with PR depression is classic ECG finding',
      'Avoid corticosteroids initially - increase recurrence risk',
      'Post-MI pericarditis: early (1-3 days) vs Dressler (weeks to months)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/myocarditis-and-pericarditis/acute-pericarditis'
  },

  {
    topic: 'Cardiac Tamponade',
    keywords: ['cardiac tamponade', 'pericardial tamponade', 'tamponade', 'heart tamponade'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, cardiac tamponade occurs when pericardial fluid accumulation causes increased intrapericardial pressure, compressing cardiac chambers and impairing ventricular filling. Results in decreased cardiac output and obstructive shock. Causes include pericarditis, malignancy, trauma, aortic dissection, post-cardiac surgery, and uremia. Rapid accumulation (trauma, rupture) causes tamponade with smaller volumes than slow accumulation (malignancy).',
    clinicalPresentation: 'Beck triad: hypotension, elevated JVP, muffled heart sounds. Dyspnea, tachycardia, and pulsus paradoxus (>10 mmHg decrease in SBP with inspiration). Physical exam shows tachycardia, hypotension, elevated JVP with absent Y descent, muffled heart sounds, and cool extremities. Severe cases present with cardiogenic shock or cardiac arrest (pulseless electrical activity).',
    diagnosticApproach: 'Echocardiography is diagnostic: shows pericardial effusion with RA and RV diastolic collapse, respiratory variation in mitral and tricuspid inflow velocities, and dilated IVC. ECG may show low voltage, electrical alternans (beat-to-beat QRS amplitude variation), or sinus tachycardia. Chest X-ray shows enlarged cardiac silhouette. Right heart catheterization shows equalization of diastolic pressures.',
    treatment: 'Medical emergency requiring urgent pericardiocentesis. Hemodynamic support: IV fluids to increase preload, avoid positive pressure ventilation if possible. Pericardiocentesis via subxiphoid approach under echo or fluoroscopic guidance. Drain fluid slowly to avoid RV dilation. Surgical pericardial window for recurrent tamponade or loculated effusions. Treat underlying cause. Monitor for recurrence.',
    clinicalPearls: [
      'Pulsus paradoxus >10 mmHg is sensitive but not specific',
      'Electrical alternans suggests large effusion with swinging heart',
      'Avoid positive pressure ventilation - worsens hemodynamics',
      'Post-cardiac surgery tamponade may be loculated and require surgical drainage'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/myocarditis-and-pericarditis/cardiac-tamponade'
  },

  {
    topic: 'Constrictive Pericarditis',
    keywords: ['constrictive pericarditis', 'pericardial constriction', 'chronic constrictive pericarditis', 'pericardial fibrosis'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, constrictive pericarditis results from chronic pericardial inflammation causing fibrosis, thickening, and sometimes calcification of pericardium. Rigid pericardium restricts ventricular filling, causing diastolic dysfunction and elevated filling pressures. Causes include prior cardiac surgery, radiation, tuberculosis, viral pericarditis, and idiopathic. Ventricular interdependence causes dissociation of intrathoracic and intracardiac pressures.',
    clinicalPresentation: 'Right heart failure symptoms: fatigue, peripheral edema, ascites, hepatomegaly. Dyspnea and exercise intolerance. Physical exam shows elevated JVP with prominent Y descent, Kussmaul sign (JVP rises with inspiration), pericardial knock (early diastolic sound), hepatomegaly, ascites, and peripheral edema. Pulsus paradoxus less common than in tamponade.',
    diagnosticApproach: 'Echocardiography shows pericardial thickening, septal bounce (ventricular interdependence), respiratory variation in mitral and tricuspid inflow velocities, and dilated IVC. Cardiac MRI or CT shows pericardial thickening (>4 mm) and calcification. Cardiac catheterization shows equalization of diastolic pressures, square root sign, and ventricular interdependence. Distinguish from restrictive cardiomyopathy (endomyocardial biopsy may be needed).',
    treatment: 'Pericardiectomy is curative but high operative risk. Indicated for symptomatic patients with confirmed diagnosis. Medical management: diuretics for congestion (use cautiously - preload dependent). Treat underlying cause if identified (tuberculosis). Perioperative mortality 6-12%. Incomplete resection may cause recurrent symptoms. Radiation-induced constriction has worse prognosis.',
    clinicalPearls: [
      'Distinguish from restrictive cardiomyopathy - constriction is surgically curable',
      'Pericardial calcification on CT supports diagnosis but not always present',
      'Kussmaul sign and prominent Y descent are classic findings',
      'Pericardiectomy is definitive treatment but high-risk surgery'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/myocarditis-and-pericarditis/constrictive-pericarditis'
  },

  // ENDOCARDITIS
  {
    topic: 'Infective Endocarditis',
    keywords: ['endocarditis', 'infective endocarditis', 'bacterial endocarditis', 'ie', 'valve infection', 'heart valve infection', 'endocardial infection'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, infective endocarditis is infection of endocardial surface, typically heart valves, caused by bacteria (Streptococcus viridans, Staphylococcus aureus, enterococci) or fungi. Bacteremia seeds damaged or abnormal valves, forming vegetations (infected thrombi). Vegetations cause valve destruction and emboli. Risk factors include prosthetic valves, prior IE, structural heart disease, IV drug use, and poor dentition.',
    clinicalPresentation: 'Fever (90%), new or changing murmur, and signs of systemic illness (fatigue, weight loss, night sweats). Embolic phenomena: stroke, splenic infarct, renal infarct. Immunologic phenomena: Osler nodes (painful finger/toe nodules), Janeway lesions (painless palmar/plantar macules), Roth spots (retinal hemorrhages), glomerulonephritis. Acute S. aureus IE presents with sepsis and rapid valve destruction.',
    diagnosticApproach: 'Modified Duke criteria: 2 major, 1 major + 3 minor, or 5 minor criteria. Major: positive blood cultures (2 separate cultures with typical organisms), endocardial involvement on echo (vegetation, abscess, new valve dysfunction). Minor: predisposing condition, fever, vascular/immunologic phenomena, positive blood culture not meeting major criteria. Echocardiography: TTE first, TEE if TTE negative or prosthetic valve. Blood cultures before antibiotics.',
    treatment: 'Prolonged IV antibiotics (4-6 weeks): native valve streptococcal IE - penicillin or ceftriaxone; S. aureus - nafcillin or vancomycin; enterococcal - ampicillin + gentamicin. Surgery indicated for heart failure, uncontrolled infection, large vegetations (>10 mm), recurrent emboli, or prosthetic valve IE. Antibiotic prophylaxis only for high-risk patients (prosthetic valve, prior IE) undergoing dental procedures.',
    clinicalPearls: [
      'Three sets of blood cultures before starting antibiotics',
      'TEE more sensitive than TTE for vegetations and complications',
      'S. aureus IE often requires surgery',
      'Antibiotic prophylaxis no longer recommended for most patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/endocarditis/infective-endocarditis'
  },

  // AORTIC DISEASE
  {
    topic: 'Aortic Dissection',
    keywords: ['aortic dissection', 'dissecting aneurysm', 'aortic tear', 'type a dissection', 'type b dissection', 'stanford dissection'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, aortic dissection occurs when intimal tear allows blood to enter aortic media, creating false lumen that propagates along aorta. Stanford type A involves ascending aorta (requires emergency surgery), type B involves descending aorta distal to left subclavian (usually managed medically). Risk factors include hypertension, connective tissue disorders (Marfan, Ehlers-Danlos), bicuspid aortic valve, cocaine use, and trauma. Complications include aortic rupture, tamponade, stroke, MI, mesenteric ischemia, and limb ischemia.',
    clinicalPresentation: 'Sudden severe "tearing" or "ripping" chest or back pain, often described as worst pain ever. Type A: anterior chest pain. Type B: interscapular back pain. May have syncope, stroke, MI, or limb ischemia. Physical exam may show blood pressure differential between arms (>20 mmHg), pulse deficits, aortic regurgitation murmur, or neurologic deficits. Hypotension suggests rupture or tamponade.',
    diagnosticApproach: 'CT angiography is diagnostic: shows intimal flap, true and false lumens, and extent of dissection. TEE alternative if unstable for CT. Chest X-ray may show widened mediastinum but can be normal. ECG to exclude MI (but dissection can cause MI if involves coronary ostia). D-dimer has high negative predictive value. Assess for complications: echo for tamponade/AR, CT for malperfusion.',
    treatment: 'Type A: emergency surgery (mortality 1-2% per hour without surgery). Type B: medical management unless complicated (malperfusion, rupture, refractory pain/hypertension). Medical therapy: IV beta-blocker (esmolol, labetalol) to reduce heart rate <60 and SBP 100-120 mmHg, then vasodilator (nitroprusside) if needed. Pain control. Complicated type B: endovascular repair (TEVAR). Long-term: beta-blocker, blood pressure control, serial imaging.',
    clinicalPearls: [
      'Type A dissection is surgical emergency',
      'Beta-blocker before vasodilator to prevent reflex tachycardia',
      'Blood pressure differential or pulse deficit suggests dissection',
      'Marfan patients require aggressive blood pressure control and surveillance'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/diseases-of-the-aorta-and-its-branches/aortic-dissection'
  },

  {
    topic: 'Abdominal Aortic Aneurysm',
    keywords: ['aortic aneurysm', 'aaa', 'abdominal aortic aneurysm', 'abdominal aneurysm', 'infrarenal aneurysm'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, abdominal aortic aneurysm is focal dilation of abdominal aorta ≥3 cm (normal 2 cm). Results from atherosclerosis, genetic factors, and proteolytic degradation of aortic wall. Risk factors include smoking, hypertension, male sex, age >65, and family history. Most occur infrarenal. Rupture risk increases with size: <5 cm (1%/year), 5-6 cm (5-10%/year), >6 cm (>10%/year). Rupture is often fatal.',
    clinicalPresentation: 'Most asymptomatic, discovered incidentally on imaging or physical exam. Symptomatic AAA suggests expansion or rupture: abdominal or back pain. Ruptured AAA: severe abdominal/back pain, hypotension, pulsatile abdominal mass (classic triad). Physical exam may reveal pulsatile abdominal mass above umbilicus. Rupture presents with shock.',
    diagnosticApproach: 'Ultrasound is screening test: measures maximal aortic diameter. CT angiography for surgical planning: defines anatomy, size, and relationship to renal and iliac arteries. Screening recommended for men 65-75 with smoking history. Incidental finding on other imaging common. Monitor small AAA (<5.5 cm) with serial ultrasound every 6-12 months.',
    treatment: 'Asymptomatic AAA: surveillance if <5.5 cm (men) or <5.0 cm (women). Repair indicated for size ≥5.5 cm, rapid expansion (>0.5 cm/6 months), or symptomatic. Endovascular repair (EVAR) preferred if suitable anatomy. Open surgical repair for unsuitable anatomy or young patients. Ruptured AAA: emergency surgery (mortality 50-80%). Medical management: smoking cessation, blood pressure control, statin.',
    clinicalPearls: [
      'Screen men 65-75 with smoking history with one-time ultrasound',
      'Rupture risk increases exponentially with size',
      'Symptomatic AAA requires urgent evaluation',
      'EVAR has lower perioperative mortality but requires surveillance for endoleaks'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/diseases-of-the-aorta-and-its-branches/abdominal-aortic-aneurysms-aaa'
  },

  // PERIPHERAL VASCULAR DISEASE
  {
    topic: 'Peripheral Arterial Disease',
    keywords: ['peripheral arterial disease', 'pad', 'peripheral vascular disease', 'pvd', 'claudication', 'intermittent claudication', 'critical limb ischemia'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, peripheral arterial disease is atherosclerotic occlusive disease of lower extremity arteries causing reduced blood flow. Risk factors include smoking, diabetes, hypertension, hyperlipidemia, and age. Stenosis or occlusion causes exercise-induced ischemia (claudication) or critical limb ischemia. PAD is marker of systemic atherosclerosis with increased cardiovascular event risk.',
    clinicalPresentation: 'Intermittent claudication: reproducible leg pain with walking, relieved by rest. Pain location indicates stenosis level: buttock/hip (aortoiliac), thigh (common femoral), calf (superficial femoral/popliteal). Critical limb ischemia: rest pain, non-healing ulcers, gangrene. Physical exam shows diminished or absent pulses, bruits, hair loss, cool skin, pallor with elevation, rubor with dependency, and prolonged capillary refill.',
    diagnosticApproach: 'Ankle-brachial index (ABI) is screening test: ABI <0.90 diagnostic of PAD. ABI 0.41-0.90 = mild-moderate PAD, <0.40 = severe PAD. Falsely elevated ABI (>1.40) in calcified vessels (diabetes) requires toe-brachial index. Segmental pressures and pulse volume recordings localize disease. Duplex ultrasound evaluates stenosis severity. CT or MR angiography for surgical planning. Treadmill test quantifies functional limitation.',
    treatment: 'Risk factor modification: smoking cessation (most important), statin, antiplatelet therapy (aspirin or clopidogrel), blood pressure and glucose control. Exercise therapy: supervised walking program improves claudication. Cilostazol improves walking distance. Revascularization for lifestyle-limiting claudication or critical limb ischemia: endovascular (angioplasty/stenting) for focal disease, bypass surgery for extensive disease. Amputation for non-salvageable limb.',
    clinicalPearls: [
      'Smoking cessation is most important intervention',
      'PAD indicates high cardiovascular risk - aggressive risk factor modification',
      'Supervised exercise therapy as effective as revascularization for claudication',
      'Critical limb ischemia requires urgent revascularization to prevent amputation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/peripheral-arterial-disorders/peripheral-arterial-disease'
  },

  {
    topic: 'Deep Vein Thrombosis',
    keywords: ['deep vein thrombosis', 'dvt', 'deep venous thrombosis', 'venous thromboembolism', 'vte', 'leg clot', 'venous clot'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, deep vein thrombosis is blood clot formation in deep veins, most commonly lower extremities. Results from Virchow triad: stasis, endothelial injury, and hypercoagulability. Risk factors include immobility, surgery, trauma, malignancy, pregnancy, oral contraceptives, thrombophilia, and prior VTE. Proximal DVT (popliteal or above) has higher risk of pulmonary embolism than distal (calf) DVT.',
    clinicalPresentation: 'Unilateral leg pain, swelling, warmth, and erythema. May be asymptomatic. Physical exam shows calf tenderness, pitting edema, increased leg circumference (>3 cm difference), palpable cord, and dilated superficial veins. Homan sign (calf pain with dorsiflexion) is neither sensitive nor specific. Phlegmasia cerulea dolens (massive DVT with venous gangrene) presents with severe pain, cyanosis, and limb-threatening ischemia.',
    diagnosticApproach: 'Wells score estimates pretest probability. D-dimer has high negative predictive value in low-probability patients. Compression ultrasound is diagnostic: non-compressible vein indicates thrombus. Repeat ultrasound in 1 week if initial negative but high suspicion. CT or MR venography for pelvic/IVC thrombus. Evaluate for underlying cause: malignancy screening in unprovoked DVT, thrombophilia testing in young patients or recurrent VTE.',
    treatment: 'Anticoagulation for ≥3 months: DOACs (rivaroxaban, apixaban) preferred over warfarin. LMWH or fondaparinux bridge if using warfarin. Provoked DVT: 3 months. Unprovoked DVT: consider extended anticoagulation. Thrombolysis or thrombectomy for phlegmasia cerulea dolens. IVC filter if anticoagulation contraindicated. Compression stockings for post-thrombotic syndrome prevention. Treat underlying cause.',
    clinicalPearls: [
      'Proximal DVT requires anticoagulation; isolated distal DVT management controversial',
      'DOACs preferred over warfarin for most patients',
      'Unprovoked DVT warrants malignancy screening',
      'Post-thrombotic syndrome occurs in 20-50% despite anticoagulation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/peripheral-venous-disorders/deep-venous-thrombosis-dvt'
  },

  // ADDITIONAL CARDIOLOGY TOPICS
  {
    topic: 'Pulmonary Hypertension',
    keywords: ['pulmonary hypertension', 'pulmonary arterial hypertension', 'pah', 'ph', 'pulmonary htn', 'elevated pulmonary pressure'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, pulmonary hypertension is elevated mean pulmonary artery pressure ≥20 mmHg at rest. WHO classification: Group 1 (pulmonary arterial hypertension), Group 2 (left heart disease), Group 3 (lung disease/hypoxia), Group 4 (chronic thromboembolic), Group 5 (multifactorial). PAH involves pulmonary vascular remodeling with vasoconstriction, proliferation, and thrombosis. Increased pulmonary vascular resistance causes RV pressure overload, hypertrophy, and eventually RV failure.',
    clinicalPresentation: 'Dyspnea on exertion is earliest symptom, progressing to fatigue, chest pain, syncope, and signs of right heart failure (edema, ascites). Physical exam shows loud P2, RV heave, tricuspid regurgitation murmur, elevated JVP, hepatomegaly, and peripheral edema. Advanced disease causes cyanosis and clubbing.',
    diagnosticApproach: 'Echocardiography estimates pulmonary artery systolic pressure and assesses RV function. Right heart catheterization is gold standard: measures mean PAP, pulmonary capillary wedge pressure, and calculates pulmonary vascular resistance. Distinguish pre-capillary (PAH, CTEPH) from post-capillary (left heart disease) PH. Evaluate for underlying cause: PFTs, HRCT, V/Q scan, HIV, liver disease, connective tissue disease, sleep study.',
    treatment: 'Treat underlying cause. Group 1 PAH: calcium channel blockers if vasoreactive, PAH-specific therapy (endothelin receptor antagonists, phosphodiesterase-5 inhibitors, prostacyclins, soluble guanylate cyclase stimulators). Combination therapy for severe disease. Diuretics for volume overload. Oxygen for hypoxemia. Anticoagulation controversial. Group 4 CTEPH: pulmonary thromboendarterectomy is curative. Lung transplantation for refractory disease.',
    clinicalPearls: [
      'Right heart catheterization required for diagnosis and classification',
      'V/Q scan screens for CTEPH (potentially curable)',
      'Combination PAH therapy improves outcomes',
      'Avoid pregnancy - high maternal mortality'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-hypertension/pulmonary-hypertension'
  },

  {
    topic: 'Syncope',
    keywords: ['syncope', 'fainting', 'loss of consciousness', 'vasovagal syncope', 'passing out', 'blackout'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, syncope is transient loss of consciousness due to global cerebral hypoperfusion with rapid onset, short duration, and spontaneous complete recovery. Causes include reflex (vasovagal, situational, carotid sinus), orthostatic hypotension, and cardiac (arrhythmia, structural disease). Vasovagal syncope results from sudden drop in heart rate and blood pressure from autonomic reflex. Cardiac syncope has highest mortality risk.',
    clinicalPresentation: 'Sudden loss of consciousness with loss of postural tone. Vasovagal: prodrome of nausea, diaphoresis, pallor, warmth; triggered by pain, emotion, prolonged standing. Cardiac: sudden onset without warning, may occur with exertion. Orthostatic: occurs with standing. Brief tonic-clonic movements may occur but distinguish from seizure (no post-ictal confusion, rapid recovery).',
    diagnosticApproach: 'History and physical exam most important. Orthostatic vital signs. ECG in all patients: look for arrhythmia, conduction disease, pre-excitation, long QT, Brugada pattern, ARVD. Echocardiography if structural heart disease suspected. Holter or event monitor if arrhythmia suspected. Tilt table test for recurrent unexplained syncope. Electrophysiology study for high-risk patients. Carotid sinus massage if >40 years. Avoid unnecessary testing in low-risk vasovagal syncope.',
    treatment: 'Treat underlying cause. Vasovagal: reassurance, avoid triggers, increase salt and fluid intake, physical counterpressure maneuvers, midodrine or fludrocortisone for refractory cases. Orthostatic: discontinue offending drugs, increase salt/fluid, compression stockings, midodrine. Cardiac: treat arrhythmia (pacemaker, ICD, ablation), treat structural disease. Driving restrictions for high-risk syncope.',
    clinicalPearls: [
      'Cardiac syncope has highest mortality - requires thorough evaluation',
      'Syncope with exertion suggests cardiac cause',
      'Normal ECG and no structural heart disease suggests benign cause',
      'Avoid unnecessary testing in young patients with typical vasovagal syncope'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/symptoms-of-cardiovascular-disorders/syncope'
  },

  // ============================================================================
  // COMPREHENSIVE PULMONARY SECTION - ALL MAJOR TOPICS
  // ============================================================================

  // AIRWAY DISORDERS
  {
    topic: 'Asthma',
    keywords: ['asthma', 'reactive airway disease', 'bronchospasm', 'asthmatic bronchitis', 'allergic asthma'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, asthma is a chronic inflammatory disorder of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. Type 2 inflammation (eosinophils, mast cells, Th2 cells) predominates in allergic asthma. Triggers include allergens, exercise, cold air, respiratory infections, and irritants. Airway remodeling can occur with chronic inflammation, leading to irreversible changes including basement membrane thickening, smooth muscle hypertrophy, and mucus gland hyperplasia.',
    clinicalPresentation: 'Patients experience episodic wheezing, dyspnea, chest tightness, and cough, often worse at night or early morning. Symptoms are triggered by specific exposures and improve with bronchodilators. Physical examination during exacerbation reveals wheezing, prolonged expiration, and use of accessory muscles. Severe exacerbations may present with inability to speak in full sentences, silent chest (minimal air movement indicating severe obstruction), and respiratory distress. Between exacerbations, examination may be normal.',
    diagnosticApproach: 'Spirometry shows reversible obstruction: FEV1/FVC <0.70 that improves ≥12% and ≥200 mL after bronchodilator administration. Peak flow monitoring tracks variability (>20% diurnal variation suggests asthma). Methacholine challenge test confirms airway hyperresponsiveness when spirometry is normal. Assess for allergic triggers with skin testing or specific IgE. Fractional exhaled nitric oxide (FeNO) indicates eosinophilic inflammation (>50 ppb suggests eosinophilic asthma). Chest X-ray typically normal but rules out complications.',
    treatment: 'Step-wise approach based on severity. All patients need SABA (albuterol) for rescue. Persistent asthma requires controller therapy: low-dose ICS is first-line. Add LABA for inadequate control (never use LABA without ICS). Severe asthma may require high-dose ICS/LABA, leukotriene modifiers (montelukast), or biologics (omalizumab for allergic asthma, mepolizumab/benralizumab for eosinophilic asthma, dupilumab for type 2 inflammation). Acute exacerbations: SABA, systemic corticosteroids, oxygen. Severe exacerbations may require magnesium sulfate, heliox, or mechanical ventilation.',
    clinicalPearls: [
      'ICS are the most effective long-term controller medication',
      'LABA should never be used without ICS in asthma (increases mortality)',
      'Silent chest indicates severe obstruction and impending respiratory failure',
      'Aspirin-exacerbated respiratory disease (AERD) requires leukotriene modifier and aspirin avoidance'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/asthma-and-related-disorders/asthma'
  },

  {
    topic: 'Chronic Obstructive Pulmonary Disease',
    keywords: ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'chronic obstructive lung disease', 'chronic obstructive airway disease'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, COPD is characterized by progressive airflow limitation that is not fully reversible. Chronic bronchitis involves airway inflammation, mucus hypersecretion, and productive cough for ≥3 months in 2 consecutive years. Emphysema involves destruction of alveolar walls and loss of elastic recoil, leading to air trapping and hyperinflation. Smoking is the primary risk factor (85-90% of cases), causing oxidative stress, protease-antiprotease imbalance, and chronic inflammation. Alpha-1 antitrypsin deficiency is a genetic cause, particularly in young patients with basilar emphysema.',
    clinicalPresentation: 'Patients present with progressive dyspnea, chronic cough, and sputum production. Symptoms worsen over years. Physical examination may reveal prolonged expiration, wheezing, barrel chest, use of accessory muscles, pursed-lip breathing, and decreased breath sounds. Advanced disease causes cyanosis, cor pulmonale (right heart failure from pulmonary hypertension), and cachexia. Acute exacerbations feature increased dyspnea, cough, and sputum purulence, often triggered by infections or air pollution.',
    diagnosticApproach: 'Spirometry is diagnostic: post-bronchodilator FEV1/FVC <0.70 confirms airflow obstruction. GOLD staging based on FEV1 severity: GOLD 1 (FEV1 ≥80%), GOLD 2 (50-79%), GOLD 3 (30-49%), GOLD 4 (<30%). Chest X-ray shows hyperinflation, flattened diaphragms, and increased retrosternal airspace. HRCT differentiates emphysema (low attenuation areas) from chronic bronchitis (bronchial wall thickening). DLCO is reduced in emphysema. Alpha-1 antitrypsin level in young patients (<45 years) or those with basilar emphysema. Assess for comorbidities (cardiovascular disease, osteoporosis, depression, lung cancer).',
    treatment: 'Smoking cessation is paramount - only intervention that slows FEV1 decline. Bronchodilators are mainstay: LAMA (tiotropium) and/or LABA (formoterol, salmeterol). Add ICS for frequent exacerbations (≥2/year) or eosinophilia (blood eosinophils ≥300 cells/μL). Pulmonary rehabilitation improves function and quality of life. Long-term oxygen therapy (>15 hours/day) for chronic hypoxemia (PaO2 <55 mmHg or SpO2 <88%). Vaccinations (influenza, pneumococcal, COVID-19) prevent exacerbations. Severe disease may require lung volume reduction surgery or transplantation. Acute exacerbations: bronchodilators, systemic corticosteroids, antibiotics if bacterial infection suspected.',
    clinicalPearls: [
      'Smoking cessation is the only intervention that slows FEV1 decline',
      'Oxygen goal is 88-92% to avoid CO2 retention in chronic hypercapnia',
      'Exacerbations often triggered by infections (viral > bacterial) or air pollution',
      'Screen for alpha-1 antitrypsin deficiency in patients <45 years or with basilar emphysema'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/chronic-obstructive-pulmonary-disease-and-related-disorders/chronic-obstructive-pulmonary-disease-copd'
  },

  {
    topic: 'Bronchiectasis',
    keywords: ['bronchiectasis', 'bronchial dilation', 'chronic bronchial infection', 'tram-track sign'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, bronchiectasis is permanent dilation of bronchi due to destruction of elastic and muscular components of bronchial walls. Results from chronic inflammation and infection creating a vicious cycle of impaired mucus clearance, bacterial colonization, and progressive airway damage. Causes include post-infectious (severe pneumonia, tuberculosis, pertussis), cystic fibrosis, primary ciliary dyskinesia, immunodeficiency, allergic bronchopulmonary aspergillosis (ABPA), and idiopathic. Common organisms include Pseudomonas aeruginosa, Haemophilus influenzae, and nontuberculous mycobacteria.',
    clinicalPresentation: 'Chronic productive cough with copious purulent sputum (often foul-smelling) is hallmark. Recurrent respiratory infections, hemoptysis (from bronchial artery hypertrophy), dyspnea, and wheezing. Physical examination reveals persistent crackles (often localized), rhonchi, and digital clubbing. Exacerbations feature increased sputum volume and purulence, worsening dyspnea, and systemic symptoms (fever, fatigue). Advanced disease causes respiratory failure and cor pulmonale.',
    diagnosticApproach: 'High-resolution CT chest is diagnostic: shows bronchial dilation (internal diameter greater than accompanying pulmonary artery - "signet ring sign"), bronchial wall thickening, lack of bronchial tapering, and "tram-track" appearance of thickened bronchial walls. Chest X-ray may show increased lung markings, cystic spaces, or be normal. Sputum culture identifies colonizing organisms. Evaluate for underlying cause: sweat chloride test (cystic fibrosis), immunoglobulin levels (immunodeficiency), Aspergillus IgE and precipitins (ABPA), nasal nitric oxide (primary ciliary dyskinesia). Spirometry shows obstructive or mixed pattern.',
    treatment: 'Airway clearance is cornerstone: chest physiotherapy, positive expiratory pressure devices, high-frequency chest wall oscillation. Mucolytics (hypertonic saline, dornase alfa in CF) facilitate clearance. Treat acute exacerbations with antibiotics based on sputum cultures (typically 10-14 days). Chronic suppressive antibiotics (inhaled tobramycin or azithromycin) for frequent exacerbations or Pseudomonas colonization. Bronchodilators for airflow obstruction. Treat underlying cause (CFTR modulators for CF, immunoglobulin replacement for immunodeficiency). Surgical resection for localized disease with recurrent infections or massive hemoptysis. Lung transplantation for end-stage disease.',
    clinicalPearls: [
      'Daily airway clearance is essential to break the vicious cycle',
      'Pseudomonas colonization indicates more severe disease and worse prognosis',
      'Massive hemoptysis (>200 mL/24 hours) may require bronchial artery embolization',
      'Nontuberculous mycobacteria (especially MAC) commonly colonize bronchiectatic airways'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/bronchiectasis-and-atelectasis/bronchiectasis'
  },

  {
    topic: 'Cystic Fibrosis',
    keywords: ['cystic fibrosis', 'cf', 'cftr', 'mucoviscidosis'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, cystic fibrosis is an autosomal recessive disorder caused by mutations in the CFTR gene, resulting in defective chloride channel function. This leads to thick, viscous secretions affecting multiple organs. In the lungs, impaired mucociliary clearance causes chronic bacterial infections (Staphylococcus aureus, Pseudomonas aeruginosa, Burkholderia cepacia), progressive bronchiectasis, and respiratory failure. Pancreatic insufficiency causes malabsorption. Other manifestations include chronic sinusitis, male infertility, and increased sweat chloride.',
    clinicalPresentation: 'Pulmonary: chronic productive cough, recurrent respiratory infections, progressive dyspnea, hemoptysis, and pneumothorax. Physical examination reveals digital clubbing, crackles, wheezing, and hyperinflation. Gastrointestinal: meconium ileus in newborns, steatorrhea, failure to thrive, and distal intestinal obstruction syndrome. Pancreatic insufficiency causes fat-soluble vitamin deficiencies. CF-related diabetes develops in 40-50% of adults. Chronic sinusitis and nasal polyps are common.',
    diagnosticApproach: 'Sweat chloride test is diagnostic: chloride >60 mmol/L on two occasions confirms diagnosis. Newborn screening detects elevated immunoreactive trypsinogen. CFTR genetic testing identifies mutations (F508del most common). Chest X-ray shows hyperinflation, bronchiectasis, and mucus plugging. HRCT demonstrates extent of bronchiectasis. Sputum culture identifies colonizing organisms. Pulmonary function tests show obstructive pattern with progressive decline. Assess for complications: glucose tolerance test (CF-related diabetes), DEXA scan (osteoporosis), liver function tests (cirrhosis).',
    treatment: 'Multidisciplinary care at CF center. CFTR modulators (ivacaftor, lumacaftor/ivacaftor, elexacaftor/tezacaftor/ivacaftor) for specific mutations dramatically improve outcomes. Airway clearance: chest physiotherapy, hypertonic saline, dornase alfa. Chronic azithromycin reduces exacerbations. Inhaled tobramycin for Pseudomonas. Aggressive treatment of exacerbations with IV antibiotics. Pancreatic enzyme replacement and fat-soluble vitamins. High-calorie, high-fat diet. Treat CF-related diabetes with insulin. Lung transplantation for end-stage disease. Median survival now >40 years with CFTR modulators.',
    clinicalPearls: [
      'CFTR modulators have revolutionized CF treatment and prognosis',
      'Pseudomonas eradication protocols when first isolated can delay chronic colonization',
      'Burkholderia cepacia is associated with rapid decline and poor transplant outcomes',
      'CF-related diabetes requires insulin (oral agents ineffective)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pediatrics/cystic-fibrosis-cf/cystic-fibrosis'
  },

  // PULMONARY INFECTIONS
  {
    topic: 'Community-Acquired Pneumonia',
    keywords: ['pneumonia', 'cap', 'community acquired pneumonia', 'community pneumonia', 'bacterial pneumonia'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, community-acquired pneumonia is an acute infection of the pulmonary parenchyma in patients not recently hospitalized. Streptococcus pneumoniae is the most common bacterial cause (30-50%). Other pathogens include Haemophilus influenzae, Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, and respiratory viruses (influenza, RSV, SARS-CoV-2). Pathogens reach the lungs via aspiration of oropharyngeal secretions, inhalation of aerosols, or hematogenous spread. The inflammatory response causes alveolar filling with exudate, impairing gas exchange.',
    clinicalPresentation: 'Typical bacterial pneumonia presents with acute onset of fever, productive cough with purulent sputum, pleuritic chest pain, and dyspnea. Physical examination reveals tachypnea, tachycardia, fever, crackles, bronchial breath sounds, egophony, and dullness to percussion over the affected area. Atypical pneumonia (Mycoplasma, Chlamydia, Legionella) presents with gradual onset, dry cough, headache, and extrapulmonary symptoms (myalgias, GI symptoms). Elderly patients may present atypically with confusion, functional decline, or absence of fever.',
    diagnosticApproach: 'Chest X-ray confirms diagnosis, showing lobar consolidation (typical bacterial), interstitial infiltrates (atypical or viral), or multilobar involvement. Laboratory tests include CBC (leukocytosis with left shift in bacterial, normal or lymphocytosis in viral), inflammatory markers (CRP, procalcitonin), and blood cultures in hospitalized patients. Sputum culture has limited utility due to contamination. Severity assessment using CURB-65 (Confusion, Urea >20 mg/dL, Respiratory rate ≥30, Blood pressure <90/60, age ≥65) or PSI (Pneumonia Severity Index) guides disposition. Consider Legionella and pneumococcal urinary antigens in severe cases.',
    treatment: 'Outpatient CAP: macrolide (azithromycin) or doxycycline for previously healthy patients; add beta-lactam (amoxicillin) if comorbidities present. Inpatient non-ICU: beta-lactam (ceftriaxone) plus macrolide or respiratory fluoroquinolone (levofloxacin, moxifloxacin). ICU: beta-lactam plus macrolide or fluoroquinolone; add vancomycin or linezolid if MRSA suspected. Duration typically 5-7 days for uncomplicated cases. Supportive care includes hydration, oxygen to maintain SpO2 >90%, and antipyretics. Complications include empyema, lung abscess, respiratory failure, and sepsis. Pneumococcal and influenza vaccinations prevent disease.',
    clinicalPearls: [
      'CURB-65 score ≥2 suggests need for hospitalization',
      'Legionella causes hyponatremia, elevated transaminases, and GI symptoms',
      'Aspiration pneumonia involves anaerobes; treat with ampicillin-sulbactam or clindamycin',
      'Failure to improve in 72 hours warrants reassessment for complications or resistant organisms'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pneumonia/overview-of-pneumonia'
  },

  {
    topic: 'Hospital-Acquired Pneumonia',
    keywords: ['hospital acquired pneumonia', 'hap', 'nosocomial pneumonia', 'ventilator associated pneumonia', 'vap', 'healthcare associated pneumonia'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, hospital-acquired pneumonia develops ≥48 hours after hospital admission. Ventilator-associated pneumonia (VAP) occurs >48 hours after endotracheal intubation. Pathogens differ from CAP and include multidrug-resistant organisms: Pseudomonas aeruginosa, MRSA, Acinetobacter, Klebsiella pneumoniae (including carbapenem-resistant), and Enterobacter. Risk factors include mechanical ventilation, aspiration, immunosuppression, prior antibiotics, and prolonged hospitalization. Biofilm formation on endotracheal tubes facilitates bacterial colonization in VAP.',
    clinicalPresentation: 'New or progressive pulmonary infiltrate plus clinical signs of infection: fever or hypothermia, leukocytosis or leukopenia, purulent sputum, and worsening oxygenation. Physical examination reveals crackles, bronchial breath sounds, and signs of consolidation. VAP diagnosis is challenging due to overlap with other causes of infiltrates (ARDS, pulmonary edema, atelectasis). Clinical Pulmonary Infection Score (CPIS) aids diagnosis but has limitations.',
    diagnosticApproach: 'Chest X-ray or CT shows new or progressive infiltrate. Obtain lower respiratory tract samples before starting antibiotics: endotracheal aspirate, bronchoalveolar lavage (BAL), or protected specimen brush. Quantitative cultures (BAL ≥10^4 CFU/mL, protected brush ≥10^3 CFU/mL) improve specificity. Blood cultures in all patients. Procalcitonin may help distinguish bacterial infection from other causes of infiltrates. Assess for risk factors for MDR organisms: prior antibiotics, prolonged hospitalization, immunosuppression, structural lung disease.',
    treatment: 'Empiric broad-spectrum antibiotics covering Pseudomonas and MRSA: antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, meropenem) plus vancomycin or linezolid. Add aminoglycoside or fluoroquinolone for severe sepsis or high risk of MDR organisms. De-escalate based on culture results and clinical response. Duration 7 days for most cases, longer for non-fermenting gram-negative bacilli or slow clinical response. VAP prevention bundle: head of bed elevation, oral care with chlorhexidine, daily sedation vacation, spontaneous breathing trials, stress ulcer prophylaxis only when indicated.',
    clinicalPearls: [
      'Empiric coverage must include Pseudomonas and MRSA in HAP/VAP',
      'De-escalation based on cultures reduces antibiotic resistance and toxicity',
      'VAP prevention bundle significantly reduces incidence',
      'Procalcitonin-guided therapy can safely shorten antibiotic duration'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pneumonia/hospital-acquired-pneumonia-hap'
  },

  {
    topic: 'Tuberculosis',
    keywords: ['tuberculosis', 'tb', 'mycobacterium tuberculosis', 'latent tb', 'active tb', 'pulmonary tb'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, tuberculosis is caused by Mycobacterium tuberculosis, transmitted via airborne droplet nuclei. Primary infection occurs when inhaled bacilli reach alveoli, where they are phagocytosed by macrophages. In most immunocompetent individuals, cell-mediated immunity contains infection, forming granulomas with central caseating necrosis (latent TB - positive tuberculin skin test but no active disease). Reactivation occurs when immunity wanes (HIV, immunosuppression, malnutrition, diabetes, aging), causing active disease. Extrapulmonary TB can affect any organ (lymph nodes, pleura, CNS, bones, genitourinary tract).',
    clinicalPresentation: 'Latent TB is asymptomatic. Active pulmonary TB presents with chronic cough (>3 weeks), hemoptysis, fever, drenching night sweats, weight loss, and fatigue. Physical examination may reveal crackles, dullness to percussion over affected areas, or be normal. Extrapulmonary TB: lymphadenitis (scrofula - painless cervical lymphadenopathy), meningitis (headache, altered mental status, cranial nerve palsies), pericarditis, genitourinary TB (sterile pyuria), skeletal TB (Pott disease - vertebral involvement). Miliary TB is disseminated disease with multi-organ involvement, presenting with fever, hepatosplenomegaly, and diffuse pulmonary infiltrates.',
    diagnosticApproach: 'Latent TB: tuberculin skin test (TST - Mantoux test) or interferon-gamma release assay (IGRA - QuantiFERON, T-SPOT). Positive test with normal chest X-ray indicates latent TB. Active TB: chest X-ray shows upper lobe infiltrates, cavitation (classic for reactivation TB), or miliary pattern (diffuse small nodules). Sputum acid-fast bacilli (AFB) smear (3 samples) and culture (gold standard, takes 2-8 weeks). Nucleic acid amplification test (NAAT - GeneXpert MTB/RIF) provides rapid diagnosis (2 hours) and detects rifampin resistance. Drug susceptibility testing essential for all isolates. Extrapulmonary TB requires tissue/fluid sampling (lymph node biopsy, pleural fluid analysis, CSF analysis).',
    treatment: 'Latent TB: isoniazid for 9 months, rifampin for 4 months, or isoniazid/rifapentine weekly for 3 months. Active TB: intensive phase (2 months) with isoniazid, rifampin, pyrazinamide, and ethambutol (RIPE), followed by continuation phase (4 months) with isoniazid and rifampin. Directly observed therapy (DOT) improves adherence. MDR-TB (resistant to isoniazid and rifampin) requires longer treatment (18-24 months) with second-line drugs (fluoroquinolones, injectable agents, linezolid, bedaquiline). Monitor for hepatotoxicity (transaminases), optic neuritis (ethambutol), and peripheral neuropathy (isoniazid - give pyridoxine). Isolate patients until non-infectious (3 negative sputum smears on consecutive days).',
    clinicalPearls: [
      'Upper lobe cavitary lesions are classic for reactivation TB',
      'HIV patients with TB require longer treatment and concurrent ART (after 2 weeks of TB therapy)',
      'Rifampin interacts with many medications (anticoagulants, antiretrovirals, oral contraceptives)',
      'Pyridoxine (vitamin B6) prevents isoniazid-induced peripheral neuropathy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/mycobacteria/tuberculosis-tb'
  },

  {
    topic: 'Pneumocystis Pneumonia',
    keywords: ['pneumocystis pneumonia', 'pcp', 'pneumocystis jirovecii', 'pjp', 'opportunistic pneumonia'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, Pneumocystis jirovecii pneumonia (PCP, formerly PJP) is an opportunistic fungal infection occurring in immunocompromised patients, particularly those with HIV (CD4 <200 cells/μL), hematologic malignancies, solid organ transplants, or prolonged corticosteroid use. The organism proliferates in alveoli, causing diffuse alveolar damage, impaired gas exchange, and progressive hypoxemia. Inflammatory response to dying organisms can worsen hypoxemia during treatment.',
    clinicalPresentation: 'Subacute onset (days to weeks) of progressive dyspnea, dry cough, and fever. Chest discomfort and fatigue are common. Physical examination may be unremarkable or reveal tachypnea, tachycardia, and hypoxemia. Crackles are uncommon. Severe cases present with respiratory failure requiring mechanical ventilation. Extrapulmonary PCP is rare but can involve lymph nodes, spleen, liver, and bone marrow.',
    diagnosticApproach: 'Chest X-ray classically shows bilateral diffuse interstitial or ground-glass opacities, but can be normal early. HRCT is more sensitive, showing ground-glass opacities with geographic distribution and septal thickening ("crazy-paving" pattern). Laboratory findings include elevated LDH (>500 U/L highly suggestive), hypoxemia with increased A-a gradient, and lymphopenia. Diagnosis confirmed by identifying organisms in induced sputum (sensitivity 50-90% with immunofluorescence), bronchoalveolar lavage (sensitivity >95%), or lung biopsy. Serum (1→3)-β-D-glucan is elevated but non-specific.',
    treatment: 'Trimethoprim-sulfamethoxazole (TMP-SMX) is first-line: 15-20 mg/kg/day (TMP component) IV or PO for 21 days. Alternative agents for sulfa allergy or intolerance: pentamidine IV, atovaquone PO (mild-moderate disease), clindamycin plus primaquine, or dapsone plus TMP. Adjunctive corticosteroids (prednisone 40 mg BID x 5 days, then taper) for moderate-severe disease (PaO2 <70 mmHg or A-a gradient >35 mmHg) reduce mortality. Prophylaxis: TMP-SMX for HIV patients with CD4 <200, transplant recipients, and patients on prolonged high-dose corticosteroids. Immune reconstitution inflammatory syndrome (IRIS) can occur in HIV patients starting ART.',
    clinicalPearls: [
      'Elevated LDH with normal chest X-ray in immunocompromised patient suggests PCP',
      'Adjunctive corticosteroids must be started within 72 hours of antibiotics to be effective',
      'Induced sputum has good sensitivity if processed immediately with immunofluorescence',
      'Prophylaxis with TMP-SMX prevents PCP and also covers toxoplasmosis and some bacterial infections'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/fungi/pneumocystis-jirovecii-pneumonia'
  },

  {
    topic: 'Lung Abscess',
    keywords: ['lung abscess', 'pulmonary abscess', 'necrotizing pneumonia', 'cavitary lung lesion'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, lung abscess is a necrotizing infection of the pulmonary parenchyma resulting in a pus-filled cavity. Most commonly caused by aspiration of oropharyngeal contents containing anaerobic bacteria (Peptostreptococcus, Prevotella, Bacteroides, Fusobacterium). Risk factors include altered consciousness (alcohol, seizures, anesthesia), dysphagia, poor dentition, and GERD. Other causes include post-obstructive pneumonia (bronchogenic carcinoma), septic emboli (tricuspid endocarditis, septic thrombophlebitis), and hematogenous spread (Staphylococcus aureus, Klebsiella).',
    clinicalPresentation: 'Indolent course over weeks with fever, productive cough with foul-smelling purulent sputum (putrid odor suggests anaerobes), hemoptysis, chest pain, weight loss, and night sweats. Physical examination reveals fever, tachycardia, poor dentition, and signs of consolidation (crackles, dullness, bronchial breath sounds). Clubbing may develop with chronic abscess. Complications include empyema, bronchopleural fistula, and massive hemoptysis.',
    diagnosticApproach: 'Chest X-ray shows thick-walled cavity (>2 cm) with air-fluid level, typically in dependent lung segments (posterior segments of upper lobes or superior segments of lower lobes in supine aspiration). CT chest better delineates abscess, distinguishes from empyema (lenticular shape, compressed lung), and identifies underlying causes (mass, foreign body). Sputum culture often contaminated by oral flora. Blood cultures positive in 10-15%. Bronchoscopy if suspected obstruction, foreign body, or atypical presentation. Consider TB, fungal infection, and malignancy in differential.',
    treatment: 'Prolonged antibiotics (6-8 weeks): clindamycin 600 mg IV q8h or ampicillin-sulbactam 3g IV q6h for anaerobic coverage. Alternatives include piperacillin-tazobactam or carbapenem. Transition to oral when clinically improved (typically 2-3 weeks). Add coverage for MRSA (vancomycin) or Pseudomonas (antipseudomonal beta-lactam) if risk factors present. Postural drainage may facilitate drainage. Percutaneous or surgical drainage for large abscesses (>6 cm), failure to respond to antibiotics (>2 weeks), or complications. Surgical resection for refractory cases, massive hemoptysis, or underlying malignancy. Monitor with serial chest X-rays; cavity may persist for months after clinical resolution.',
    clinicalPearls: [
      'Foul-smelling sputum is pathognomonic for anaerobic infection',
      'Most lung abscesses respond to antibiotics alone without drainage',
      'Failure to improve after 2 weeks of appropriate antibiotics warrants bronchoscopy to exclude obstruction',
      'Distinguish from empyema: abscess is spherical with thick irregular wall, empyema is lenticular with smooth wall'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pneumonia/lung-abscess'
  },

  // PULMONARY VASCULAR DISORDERS
  {
    topic: 'Pulmonary Embolism',
    keywords: ['pulmonary embolism', 'pe', 'lung embolism', 'pulmonary embolus', 'venous thromboembolism', 'vte'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pulmonary embolism occurs when thrombus (usually from deep vein thrombosis of lower extremities) lodges in the pulmonary arterial system, causing mechanical obstruction and release of vasoactive mediators. This increases pulmonary vascular resistance and right ventricular afterload. Large emboli can cause right ventricular failure and hemodynamic collapse (massive PE). Gas exchange is impaired through increased dead space ventilation (ventilation without perfusion) and ventilation-perfusion mismatch. Risk factors include immobility, surgery, trauma, malignancy, pregnancy, oral contraceptives, thrombophilia, and prior VTE (Virchow triad: stasis, hypercoagulability, endothelial injury).',
    clinicalPresentation: 'Classic triad of dyspnea, pleuritic chest pain, and hemoptysis is uncommon (<20%). Most patients present with sudden-onset dyspnea and tachypnea. Pleuritic chest pain suggests peripheral embolism with pleural irritation. Massive PE causes hypotension, syncope, and signs of right heart strain. Physical examination may reveal tachycardia, tachypnea, hypoxemia, low-grade fever, and signs of DVT (unilateral leg swelling, tenderness). Submassive PE shows RV dysfunction on imaging without hypotension. Small PE may be asymptomatic or cause minimal symptoms.',
    diagnosticApproach: 'Clinical probability assessment using Wells criteria or Geneva score guides testing. D-dimer has high sensitivity (>95%) but low specificity; negative D-dimer in low-risk patients effectively excludes PE. CT pulmonary angiography (CTPA) is the gold standard, showing filling defects in pulmonary arteries. V/Q scan is alternative when CT contraindicated (renal insufficiency, contrast allergy, pregnancy). ECG may show sinus tachycardia, S1Q3T3 pattern (classic but uncommon), or right heart strain (T-wave inversions in V1-V4, right bundle branch block). Echocardiography assesses RV function (RV dilation, hypokinesis, septal flattening). Troponin and BNP/NT-proBNP indicate RV strain and help risk stratify.',
    treatment: 'Anticoagulation is primary treatment: DOACs (apixaban, rivaroxaban) preferred over warfarin for most patients. Start immediately if high clinical suspicion before imaging. Hemodynamically unstable patients (massive PE) require thrombolysis (alteplase) or embolectomy (catheter-directed or surgical). Submassive PE with RV dysfunction may benefit from thrombolysis in selected cases (younger patients, low bleeding risk). IVC filter if anticoagulation contraindicated (active bleeding, recent surgery). Duration: 3 months for provoked PE (surgery, trauma, immobility), extended or indefinite for unprovoked PE or recurrent VTE. Supportive care includes oxygen and hemodynamic support. Prevent with prophylactic anticoagulation in high-risk hospitalized patients.',
    clinicalPearls: [
      'Massive PE defined by hypotension; submassive by RV strain without hypotension',
      'Saddle embolus at main PA bifurcation may or may not cause hemodynamic instability',
      'Pregnancy increases PE risk 5-fold; use LMWH for treatment (DOACs contraindicated)',
      'Consider thrombophilia testing for unprovoked PE in young patients or recurrent VTE'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe'
  },

  {
    topic: 'Pulmonary Hypertension',
    keywords: ['pulmonary hypertension', 'pulmonary arterial hypertension', 'pah', 'ph', 'elevated pulmonary pressure'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pulmonary hypertension is defined as mean pulmonary artery pressure ≥20 mmHg at rest (previously ≥25 mmHg). WHO classification divides PH into 5 groups based on etiology: Group 1 (pulmonary arterial hypertension - PAH), Group 2 (left heart disease), Group 3 (lung disease/hypoxia), Group 4 (chronic thromboembolic - CTEPH), Group 5 (multifactorial). PAH involves pulmonary vascular remodeling with vasoconstriction, smooth muscle proliferation, in situ thrombosis, and endothelial dysfunction. Increased pulmonary vascular resistance causes RV pressure overload, hypertrophy, and eventually RV failure (cor pulmonale).',
    clinicalPresentation: 'Dyspnea on exertion is earliest and most common symptom, progressing to fatigue, chest pain (RV ischemia), syncope (inability to increase cardiac output), and signs of right heart failure (peripheral edema, ascites, hepatomegaly). Physical examination shows loud P2 (pulmonic component of S2), RV heave (left parasternal lift), tricuspid regurgitation murmur (holosystolic at left lower sternal border increasing with inspiration), elevated JVP, hepatomegaly, and peripheral edema. Advanced disease causes cyanosis and clubbing.',
    diagnosticApproach: 'Echocardiography estimates pulmonary artery systolic pressure (PASP) from tricuspid regurgitation jet velocity and assesses RV size and function. PASP >40 mmHg suggests PH. Right heart catheterization is gold standard for diagnosis and classification: measures mean PAP, pulmonary capillary wedge pressure (PCWP), and calculates pulmonary vascular resistance (PVR). Pre-capillary PH (PAH, CTEPH): PCWP ≤15 mmHg, PVR >3 Wood units. Post-capillary PH (left heart disease): PCWP >15 mmHg. Evaluate for underlying cause: PFTs and HRCT (lung disease), V/Q scan (CTEPH), HIV and liver disease serologies, connective tissue disease workup, sleep study.',
    treatment: 'Treat underlying cause. Group 1 PAH: vasoreactivity testing with inhaled nitric oxide or adenosine; if positive, trial calcium channel blockers (only 10% respond). PAH-specific therapy: endothelin receptor antagonists (bosentan, ambrisentan), phosphodiesterase-5 inhibitors (sildenafil, tadalafil), prostacyclins (epoprostenol, treprostinil, iloprost), soluble guanylate cyclase stimulators (riociguat). Combination therapy for WHO functional class III-IV. Diuretics for volume overload. Oxygen for hypoxemia. Anticoagulation controversial (may benefit idiopathic PAH). Group 4 CTEPH: pulmonary thromboendarterectomy is potentially curative. Lung transplantation for refractory disease.',
    clinicalPearls: [
      'Right heart catheterization required for definitive diagnosis and classification',
      'V/Q scan screens for CTEPH (potentially curable with surgery)',
      'Combination PAH therapy improves outcomes compared to monotherapy',
      'Avoid pregnancy in PAH - high maternal mortality (30-50%)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-hypertension/pulmonary-hypertension'
  },

  {
    topic: 'Acute Respiratory Distress Syndrome',
    keywords: ['ards', 'acute respiratory distress syndrome', 'acute lung injury', 'ali', 'non-cardiogenic pulmonary edema', 'acute respiratory distress'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, ARDS is acute diffuse inflammatory lung injury leading to increased pulmonary vascular permeability, pulmonary edema, and severe hypoxemia. Berlin definition requires: acute onset (<1 week), bilateral opacities on imaging, hypoxemia (PaO2/FiO2 ratio <300 mmHg with PEEP ≥5 cm H2O), and absence of cardiogenic pulmonary edema. Severity: mild (200-300), moderate (100-200), severe (<100). Common causes include sepsis (most common), pneumonia, aspiration, trauma, pancreatitis, and transfusion-related acute lung injury (TRALI). Pathophysiology involves diffuse alveolar damage with protein-rich edema, hyaline membrane formation, and impaired surfactant function.',
    clinicalPresentation: 'Acute onset of severe dyspnea, tachypnea, and hypoxemia within hours to days of inciting event. Physical examination reveals tachypnea, tachycardia, cyanosis, use of accessory muscles, and diffuse crackles. Severe cases require mechanical ventilation. Complications include barotrauma (pneumothorax), ventilator-associated pneumonia, multi-organ dysfunction, and death (mortality 30-40%). Survivors may develop pulmonary fibrosis and persistent functional impairment.',
    diagnosticApproach: 'Chest X-ray shows bilateral diffuse alveolar infiltrates ("white-out"). CT chest shows dependent consolidation and non-dependent ground-glass opacities. Arterial blood gas shows severe hypoxemia (PaO2/FiO2 <300) with respiratory alkalosis initially, then respiratory acidosis if ventilation fails. Pulmonary artery catheterization (if performed) shows normal PCWP (<18 mmHg), distinguishing from cardiogenic pulmonary edema. Echocardiography excludes cardiac dysfunction. Identify and treat underlying cause (blood cultures, bronchoscopy if indicated).',
    treatment: 'Lung-protective ventilation is cornerstone: low tidal volume (6 mL/kg ideal body weight), plateau pressure <30 cm H2O, PEEP to maintain oxygenation while minimizing FiO2. Prone positioning (16 hours/day) improves oxygenation and reduces mortality in severe ARDS. Conservative fluid management after initial resuscitation. Neuromuscular blockade (cisatracurium) for 48 hours in severe ARDS improves outcomes. Treat underlying cause (antibiotics for sepsis/pneumonia, source control). Avoid excessive oxygen (target SpO2 88-95%). Rescue therapies for refractory hypoxemia: inhaled pulmonary vasodilators (nitric oxide, epoprostenol), recruitment maneuvers, ECMO. Corticosteroids controversial (may benefit if started early in moderate-severe ARDS).',
    clinicalPearls: [
      'Lung-protective ventilation reduces mortality - use low tidal volumes even if hypercapnia develops',
      'Prone positioning improves survival in severe ARDS (PaO2/FiO2 <150)',
      'Distinguish from cardiogenic pulmonary edema: ARDS has normal BNP and PCWP',
      'ECMO is rescue therapy for refractory hypoxemia despite optimal ventilation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/respiratory-failure-and-mechanical-ventilation/acute-respiratory-distress-syndrome-ards'
  },

  // INTERSTITIAL LUNG DISEASES
  {
    topic: 'Idiopathic Pulmonary Fibrosis',
    keywords: ['idiopathic pulmonary fibrosis', 'ipf', 'usual interstitial pneumonia', 'uip', 'pulmonary fibrosis'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, idiopathic pulmonary fibrosis is a chronic, progressive fibrosing interstitial pneumonia of unknown cause, characterized by the histopathologic and/or radiologic pattern of usual interstitial pneumonia (UIP). Occurs primarily in older adults (>60 years), more common in men and smokers. Pathogenesis involves repetitive alveolar epithelial injury, abnormal wound healing, and excessive fibroblast proliferation leading to progressive scarring. Fibroblastic foci are hallmark. Median survival 3-5 years from diagnosis, though highly variable. Acute exacerbations cause rapid deterioration with high mortality.',
    clinicalPresentation: 'Insidious onset of progressive exertional dyspnea and dry cough over months to years. Fatigue and weight loss common. Physical examination reveals bibasilar fine inspiratory crackles ("Velcro" crackles), digital clubbing (25-50%), and cyanosis in advanced disease. Pulmonary hypertension and cor pulmonale develop late. Acute exacerbation presents with rapid worsening of dyspnea, new ground-glass opacities on imaging, and respiratory failure.',
    diagnosticApproach: 'High-resolution CT chest is key diagnostic test: shows basilar and peripheral predominant reticular opacities, honeycombing (clustered cystic airspaces), traction bronchiectasis, and absence of features inconsistent with UIP (upper lobe predominance, extensive ground-glass, nodules, consolidation). Definite UIP pattern on HRCT in appropriate clinical context (age >60, gradual onset, bibasilar crackles) allows diagnosis without biopsy. Surgical lung biopsy (via VATS) if HRCT indeterminate. Pulmonary function tests show restrictive pattern (reduced TLC, FVC) and reduced DLCO. Exclude other causes of ILD: connective tissue disease serologies, hypersensitivity pneumonitis panel, occupational/environmental exposures.',
    treatment: 'Antifibrotic therapy slows disease progression: nintedanib (tyrosine kinase inhibitor) or pirfenidone (anti-inflammatory and antifibrotic). Both reduce FVC decline by ~50% but do not improve survival or symptoms. Side effects: nintedanib (diarrhea, nausea), pirfenidone (photosensitivity, GI upset). Supplemental oxygen for hypoxemia. Pulmonary rehabilitation improves functional capacity and quality of life. Treat gastroesophageal reflux (may contribute to microaspiration). Lung transplantation for eligible patients with advanced disease. Avoid corticosteroids and immunosuppressants (ineffective and harmful). Palliative care for symptom management. Acute exacerbations treated with high-dose corticosteroids, but mortality remains high (>50%).',
    clinicalPearls: [
      'Honeycombing on HRCT is diagnostic of UIP pattern',
      'Antifibrotic therapy should be started at diagnosis to slow progression',
      'Acute exacerbations have high mortality and may be triggered by infection, aspiration, or procedures',
      'Lung transplantation is only curative option; refer early (FVC <80% or DLCO <40%)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/interstitial-lung-diseases/idiopathic-pulmonary-fibrosis'
  },

  {
    topic: 'Sarcoidosis',
    keywords: ['sarcoidosis', 'granulomatous disease', 'pulmonary sarcoidosis', 'sarcoid'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, sarcoidosis is a multisystem granulomatous disorder of unknown etiology characterized by non-caseating granulomas. Lungs and lymph nodes are most commonly affected (>90%), but any organ can be involved (skin, eyes, heart, nervous system, liver, spleen, kidneys). Occurs most commonly in young adults (20-40 years), with higher incidence in African Americans and Northern Europeans. Pathogenesis involves exaggerated cell-mediated immune response to unknown antigen, leading to granuloma formation. Most cases resolve spontaneously, but 10-30% develop chronic progressive disease.',
    clinicalPresentation: 'Highly variable presentation. Pulmonary: dyspnea, dry cough, chest discomfort. Many patients asymptomatic with incidental finding on chest X-ray. Systemic symptoms: fatigue, fever, weight loss, night sweats. Extrapulmonary: skin lesions (erythema nodosum, lupus pernio), uveitis, peripheral lymphadenopathy, hepatosplenomegaly, cardiac arrhythmias, neurologic manifestations (cranial neuropathies, especially facial nerve palsy). Löfgren syndrome (acute sarcoidosis): erythema nodosum, bilateral hilar lymphadenopathy, arthritis - excellent prognosis with spontaneous resolution.',
    diagnosticApproach: 'Chest X-ray staging (Scadding): Stage 0 (normal), Stage I (bilateral hilar lymphadenopathy alone), Stage II (hilar lymphadenopathy + parenchymal infiltrates), Stage III (parenchymal infiltrates without lymphadenopathy), Stage IV (pulmonary fibrosis). HRCT shows nodules along bronchovascular bundles and interlobular septa, ground-glass opacities, and fibrosis in advanced disease. Diagnosis requires: compatible clinical/radiologic presentation, histologic evidence of non-caseating granulomas, and exclusion of other granulomatous diseases (TB, fungal infections, berylliosis). Biopsy via bronchoscopy (transbronchial), mediastinoscopy, or skin/lymph node if accessible. PFTs show restrictive pattern. Elevated ACE level and hypercalcemia support diagnosis but non-specific. Assess for extrapulmonary involvement: ECG, echocardiogram, ophthalmologic exam, liver function tests.',
    treatment: 'Observation for asymptomatic or mild disease (many resolve spontaneously). Indications for treatment: symptomatic pulmonary disease, declining lung function, cardiac involvement, neurologic involvement, hypercalcemia, ocular disease not responding to topical therapy. Corticosteroids are first-line: prednisone 20-40 mg daily, taper over 6-12 months based on response. Steroid-sparing agents for refractory disease or intolerable side effects: methotrexate, azathioprine, mycophenolate, hydroxychloroquine. Biologic agents (infliximab, adalimumab) for refractory cases. Treat hypercalcemia with corticosteroids and avoid vitamin D supplementation. Lung transplantation for end-stage pulmonary fibrosis (sarcoidosis can recur in transplanted lung).',
    clinicalPearls: [
      'Bilateral hilar lymphadenopathy in young adult suggests sarcoidosis',
      'Löfgren syndrome has excellent prognosis with >90% spontaneous resolution',
      'Cardiac sarcoidosis can cause sudden death - screen with ECG and consider cardiac MRI',
      'Hypercalcemia results from increased 1,25-dihydroxyvitamin D production by granulomas'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/sarcoidosis/sarcoidosis'
  },

  {
    topic: 'Hypersensitivity Pneumonitis',
    keywords: ['hypersensitivity pneumonitis', 'hp', 'extrinsic allergic alveolitis', 'bird fancier lung', 'farmer lung'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, hypersensitivity pneumonitis is an immunologically mediated inflammatory lung disease caused by repeated inhalation of organic antigens in susceptible individuals. Common antigens include avian proteins (bird droppings, feathers), thermophilic actinomycetes (moldy hay, compost), fungi (mold in homes, hot tubs), and chemicals (isocyanates). Pathogenesis involves both type III (immune complex) and type IV (cell-mediated) hypersensitivity reactions, leading to granulomatous inflammation and, if chronic, pulmonary fibrosis. Acute form is reversible with antigen avoidance; chronic form may be irreversible.',
    clinicalPresentation: 'Acute HP: flu-like illness 4-8 hours after heavy antigen exposure with fever, chills, dyspnea, cough, and malaise. Symptoms resolve within 24-48 hours of antigen avoidance. Subacute HP: gradual onset over weeks to months with progressive dyspnea, cough, fatigue, and weight loss. Chronic HP: insidious onset mimicking IPF with progressive dyspnea, cough, and weight loss. Physical examination: acute/subacute shows bibasilar crackles; chronic shows crackles, clubbing, and signs of pulmonary hypertension. Key diagnostic clue is temporal relationship between exposure and symptoms.',
    diagnosticApproach: 'HRCT findings vary by stage: acute shows diffuse ground-glass opacities and centrilobular nodules; subacute shows ground-glass, nodules, and mosaic attenuation with air trapping on expiratory images ("head-cheese" pattern); chronic shows fibrosis with upper/mid-lung predominance, traction bronchiectasis, and honeycombing. PFTs show restrictive pattern (chronic) or mixed obstructive-restrictive pattern. Reduced DLCO. Serum precipitins (IgG antibodies) to suspected antigens support diagnosis but not diagnostic (can be positive in asymptomatic exposed individuals). Bronchoalveolar lavage shows lymphocytosis (>50%) with reduced CD4/CD8 ratio. Lung biopsy shows poorly formed non-necrotizing granulomas, chronic inflammation, and fibrosis. Detailed exposure history is critical.',
    treatment: 'Antigen avoidance is most important intervention. Acute HP typically resolves with avoidance alone. Subacute/chronic HP: corticosteroids (prednisone 0.5-1 mg/kg/day for 4-6 weeks, then taper over 6-12 months) for symptomatic disease or declining lung function. Antifibrotic therapy (nintedanib, pirfenidone) may be considered for progressive fibrotic HP. Immunosuppressants (azathioprine, mycophenolate) for steroid-sparing or refractory cases. Supplemental oxygen for hypoxemia. Pulmonary rehabilitation. Lung transplantation for end-stage disease. Prognosis depends on early diagnosis and complete antigen avoidance; chronic fibrotic HP has poor prognosis similar to IPF.',
    clinicalPearls: [
      'Detailed exposure history is key to diagnosis - ask about birds, hot tubs, humidifiers, moldy environments',
      'Mosaic attenuation with air trapping on expiratory CT is characteristic of subacute HP',
      'Complete antigen avoidance is essential - partial avoidance insufficient',
      'Chronic fibrotic HP may be indistinguishable from IPF and has similar poor prognosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/interstitial-lung-diseases/hypersensitivity-pneumonitis'
  },

  // PLEURAL DISORDERS
  {
    topic: 'Pleural Effusion',
    keywords: ['pleural effusion', 'pleural fluid', 'pleural space fluid', 'hydrothorax', 'lung effusion'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pleural effusion is abnormal accumulation of fluid in the pleural space. Transudates result from imbalance in hydrostatic and oncotic pressures (heart failure, cirrhosis, nephrotic syndrome, hypoalbuminemia). Exudates result from increased capillary permeability or impaired lymphatic drainage due to inflammation, infection, or malignancy. Normal pleural fluid production is 10-20 mL/day, reabsorbed by parietal pleural lymphatics. Effusions develop when production exceeds absorption or lymphatic drainage is impaired.',
    clinicalPresentation: 'Small effusions (<300 mL) may be asymptomatic. Larger effusions cause dyspnea, pleuritic chest pain, and cough. Massive effusions cause severe dyspnea and may shift the mediastinum. Physical examination reveals decreased breath sounds, dullness to percussion, decreased tactile fremitus, and possible pleural friction rub. Egophony may be present at upper border of effusion. Associated findings depend on underlying cause: fever in infection, weight loss in malignancy, peripheral edema in heart failure, ascites in cirrhosis.',
    diagnosticApproach: 'Chest X-ray shows blunting of costophrenic angle (>75 mL), meniscus sign, or complete opacification. Lateral decubitus view detects smaller effusions and distinguishes free-flowing from loculated fluid. Ultrasound guides thoracentesis and detects loculations. CT provides detailed assessment of pleural disease and underlying lung parenchyma. Thoracentesis with pleural fluid analysis is essential for diagnosis: Light criteria differentiate exudate from transudate. Exudate if any of: pleural/serum protein ratio >0.5, pleural/serum LDH ratio >0.6, or pleural LDH >2/3 upper limit of normal. Analyze protein, LDH, glucose, pH, cell count with differential, cytology, and cultures. Low pH (<7.2) or glucose (<60 mg/dL) suggests complicated parapneumonic effusion, empyema, or malignancy.',
    treatment: 'Treat underlying cause. Transudates often respond to diuretics (heart failure) or treatment of underlying condition (cirrhosis, nephrotic syndrome). Exudates require specific treatment: antibiotics for parapneumonic effusion, drainage for empyema, pleurodesis for malignant effusion. Therapeutic thoracentesis provides symptomatic relief (remove up to 1.5 L to avoid reexpansion pulmonary edema). Chest tube drainage for complicated parapneumonic effusion or empyema. Video-assisted thoracoscopic surgery (VATS) for loculated effusions, empyema, or diagnostic uncertainty. Pleurodesis (talc, doxycycline) for recurrent malignant effusions. Indwelling pleural catheter for refractory malignant effusions. Monitor for reaccumulation.',
    clinicalPearls: [
      'Light criteria: exudate if pleural/serum protein >0.5, pleural/serum LDH >0.6, or pleural LDH >2/3 upper limit of normal',
      'Bloody effusion (hematocrit >50% of serum) suggests malignancy, PE, or trauma',
      'Milky effusion indicates chylothorax (high triglycerides >110 mg/dL)',
      'Empyema requires drainage; antibiotics alone insufficient'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pleural-effusion'
  },

  {
    topic: 'Pneumothorax',
    keywords: ['pneumothorax', 'collapsed lung', 'spontaneous pneumothorax', 'tension pneumothorax', 'lung collapse'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pneumothorax is air in the pleural space causing partial or complete lung collapse. Primary spontaneous pneumothorax occurs without underlying lung disease, typically in tall, thin young men due to rupture of apical blebs. Secondary spontaneous pneumothorax occurs in patients with underlying lung disease (COPD, cystic fibrosis, Pneumocystis pneumonia, interstitial lung disease). Traumatic pneumothorax results from penetrating or blunt chest trauma. Iatrogenic pneumothorax follows procedures (central line placement, thoracentesis, lung biopsy, mechanical ventilation). Tension pneumothorax is life-threatening: one-way valve allows air entry but not exit, causing progressive accumulation, mediastinal shift, and cardiovascular collapse.',
    clinicalPresentation: 'Sudden onset of ipsilateral chest pain (sharp, pleuritic) and dyspnea. Small pneumothorax may be asymptomatic. Physical examination reveals decreased breath sounds, hyperresonance to percussion, and decreased tactile fremitus on affected side. Tension pneumothorax presents with severe respiratory distress, hypotension, tachycardia, jugular venous distension, tracheal deviation away from affected side, and absent breath sounds. Subcutaneous emphysema may be present. Hamman sign (crunching sound with heartbeat) suggests pneumomediastinum.',
    diagnosticApproach: 'Chest X-ray (upright PA view) shows visceral pleural line separated from chest wall by radiolucent space without lung markings. Expiratory films may enhance detection of small pneumothorax. Quantify size: small (<3 cm apex to cupola), large (≥3 cm). CT chest more sensitive for small pneumothorax and identifies underlying lung disease. Tension pneumothorax is clinical diagnosis - do not delay treatment for imaging. Ultrasound shows absence of lung sliding and absence of comet-tail artifacts.',
    treatment: 'Small primary spontaneous pneumothorax (<3 cm, minimal symptoms): observation with supplemental oxygen (accelerates reabsorption) and repeat chest X-ray in 6 hours. Large or symptomatic: needle aspiration or chest tube (small-bore 8-14 Fr) with water seal. Secondary spontaneous pneumothorax: chest tube for most cases due to underlying lung disease and poor tolerance. Tension pneumothorax: immediate needle decompression (14-16 gauge angiocatheter in 2nd intercostal space, midclavicular line) followed by chest tube. Recurrent pneumothorax: chemical pleurodesis (talc) or surgical pleurodesis with bleb resection via VATS. Avoid air travel and diving until resolved and for 1 week after radiographic resolution. Smoking cessation reduces recurrence risk.',
    clinicalPearls: [
      'Tension pneumothorax is clinical diagnosis - immediate needle decompression before imaging',
      'Primary spontaneous pneumothorax recurrence risk 30% after first episode, 50% after second',
      'Avoid positive pressure ventilation in pneumothorax if possible (risk of tension)',
      'Catamenial pneumothorax (related to menstruation) suggests thoracic endometriosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pneumothorax'
  },

  {
    topic: 'Empyema',
    keywords: ['empyema', 'pleural empyema', 'pyothorax', 'infected pleural effusion'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, empyema is pus in the pleural space, most commonly resulting from bacterial pneumonia (parapneumonic effusion that becomes infected). Other causes include thoracic surgery, esophageal perforation, subphrenic abscess, and trauma. Common organisms include Streptococcus pneumoniae, Staphylococcus aureus (including MRSA), anaerobes (aspiration), and gram-negative bacilli. Empyema progresses through three stages: exudative (thin fluid, free-flowing), fibrinopurulent (thick pus, fibrin deposition, loculations), and organizing (fibroblast proliferation, thick pleural peel, trapped lung).',
    clinicalPresentation: 'Fever, chest pain, dyspnea, and productive cough. Often follows pneumonia with initial improvement then clinical deterioration. Physical examination reveals fever, tachycardia, decreased breath sounds, dullness to percussion, and decreased tactile fremitus. Systemic signs of infection: leukocytosis, elevated inflammatory markers. Chronic empyema causes weight loss, anemia, and hypoalbuminemia. Complications include bronchopleural fistula, empyema necessitatis (extension through chest wall), and sepsis.',
    diagnosticApproach: 'Chest X-ray shows pleural effusion, often with loculations. CT chest with contrast is essential: shows pleural fluid with enhancing thickened pleura ("split pleura sign"), loculations, and underlying lung disease. Ultrasound guides thoracentesis and shows septations. Thoracentesis: pleural fluid analysis shows exudate with pH <7.2, glucose <60 mg/dL, LDH >1000 U/L, and positive Gram stain or culture. Frank pus on thoracentesis is diagnostic. Pleural fluid white blood cell count typically >50,000/μL with neutrophil predominance. Blood cultures positive in 10-20%.',
    treatment: 'Antibiotics plus drainage. Empiric antibiotics: antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime) plus vancomycin or linezolid (MRSA coverage). Add metronidazole or clindamycin for anaerobic coverage if aspiration suspected. Adjust based on cultures. Duration 3-6 weeks. Drainage: chest tube (large-bore 28-32 Fr) for exudative stage. Intrapleural fibrinolytics (tPA plus DNase) for loculated empyema improves drainage and reduces need for surgery. VATS with decortication for fibrinopurulent or organizing stage, or failure of medical management. Open thoracotomy with decortication for chronic empyema with thick pleural peel. Monitor with serial chest X-rays and inflammatory markers.',
    clinicalPearls: [
      'Empyema requires drainage - antibiotics alone are insufficient',
      'Intrapleural tPA/DNase combination more effective than either agent alone',
      'Early VATS (within 7 days) may reduce hospital stay and improve outcomes',
      'Chronic empyema with thick pleural peel requires surgical decortication'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pleural-effusion'
  },

  // SLEEP-DISORDERED BREATHING
  {
    topic: 'Obstructive Sleep Apnea',
    keywords: ['obstructive sleep apnea', 'osa', 'sleep apnea', 'sleep disordered breathing'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, obstructive sleep apnea is characterized by repetitive episodes of complete (apnea) or partial (hypopnea) upper airway obstruction during sleep, resulting in oxygen desaturation and sleep fragmentation. Obstruction occurs when pharyngeal muscles relax during sleep, causing airway collapse. Risk factors include obesity (most important), male sex, age, craniofacial abnormalities, large neck circumference (>17 inches men, >16 inches women), and supine sleep position. OSA causes intermittent hypoxemia, hypercapnia, increased sympathetic activity, and sleep fragmentation, leading to cardiovascular complications (hypertension, arrhythmias, heart failure, stroke) and metabolic dysfunction.',
    clinicalPresentation: 'Loud snoring, witnessed apneas, gasping or choking during sleep, excessive daytime sleepiness (Epworth Sleepiness Scale >10), morning headaches, dry mouth, nocturia, and impaired concentration. Bed partner reports are crucial. Physical examination may reveal obesity, large neck circumference, crowded oropharynx (Mallampati class III-IV), retrognathia, and hypertension. Complications include resistant hypertension, atrial fibrillation, heart failure, pulmonary hypertension, and increased motor vehicle accident risk.',
    diagnosticApproach: 'Polysomnography (in-laboratory sleep study) is gold standard: monitors EEG, EOG, EMG, airflow, respiratory effort, oxygen saturation, ECG, and body position. Apnea-hypopnea index (AHI) quantifies severity: normal <5, mild 5-15, moderate 15-30, severe >30 events/hour. Home sleep apnea testing (HSAT) is alternative for patients with high pretest probability and no comorbidities. Evaluate for complications: ECG, echocardiogram if heart failure or pulmonary hypertension suspected. Screen for metabolic syndrome and diabetes.',
    treatment: 'Continuous positive airway pressure (CPAP) is first-line treatment: pneumatic splint maintains airway patency. Improves symptoms, quality of life, and cardiovascular outcomes. Adherence is key (use ≥4 hours/night, ≥70% of nights). Alternatives for CPAP intolerance: bilevel PAP, auto-adjusting PAP, oral appliances (mandibular advancement devices for mild-moderate OSA). Weight loss improves OSA severity (10% weight loss reduces AHI by 30%). Positional therapy for positional OSA. Avoid alcohol and sedatives. Surgical options: uvulopalatopharyngoplasty (UPPP), maxillomandibular advancement, hypoglossal nerve stimulation for selected patients. Treat comorbidities (hypertension, diabetes).',
    clinicalPearls: [
      'CPAP reduces cardiovascular events and improves blood pressure control',
      'Weight loss of 10% can significantly improve OSA severity',
      'Screen for OSA in patients with resistant hypertension, atrial fibrillation, or heart failure',
      'Untreated severe OSA increases motor vehicle accident risk 2-3 fold'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/sleep-apnea/obstructive-sleep-apnea'
  },

  // LUNG CANCER
  {
    topic: 'Lung Cancer',
    keywords: ['lung cancer', 'bronchogenic carcinoma', 'non-small cell lung cancer', 'nsclc', 'small cell lung cancer', 'sclc'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, lung cancer is the leading cause of cancer death worldwide. Smoking is the primary risk factor (85-90% of cases). Histologic types: non-small cell lung cancer (NSCLC, 85%) includes adenocarcinoma (most common, 40%), squamous cell carcinoma (25-30%), and large cell carcinoma (10%). Small cell lung cancer (SCLC, 15%) is highly aggressive with early metastasis. Adenocarcinoma occurs peripherally, often in non-smokers. Squamous cell is central, associated with smoking and cavitation. SCLC is central, associated with paraneoplastic syndromes. Molecular alterations (EGFR, ALK, ROS1, BRAF, PD-L1) guide targeted therapy.',
    clinicalPresentation: 'Often asymptomatic until advanced. Symptoms include persistent cough, hemoptysis, dyspnea, chest pain, weight loss, and recurrent pneumonia. Physical examination may reveal wheezing, stridor, pleural effusion, or lymphadenopathy. Superior vena cava syndrome: facial swelling, dilated neck veins, upper extremity edema. Pancoast tumor: shoulder pain, Horner syndrome (ptosis, miosis, anhidrosis). Paraneoplastic syndromes: SIADH (SCLC), hypercalcemia (squamous cell), hypertrophic osteoarthropathy, Lambert-Eaton syndrome (SCLC). Metastases to brain, bone, liver, and adrenal glands cause respective symptoms.',
    diagnosticApproach: 'Chest X-ray shows mass, nodule, atelectasis, or pleural effusion. CT chest with contrast defines extent, lymphadenopathy, and metastases. PET-CT for staging (detects distant metastases). Tissue diagnosis required: bronchoscopy with biopsy for central lesions, CT-guided needle biopsy for peripheral lesions, thoracentesis for malignant effusion. Molecular testing (EGFR, ALK, ROS1, BRAF, PD-L1) on all NSCLC. Staging: TNM system (I-IV). Brain MRI for staging in NSCLC and all SCLC. Pulmonary function tests before surgery.',
    treatment: 'NSCLC: surgery (lobectomy, pneumonectomy) for early stage (I-II). Adjuvant chemotherapy for stage II-III. Stereotactic body radiation therapy (SBRT) for medically inoperable early-stage disease. Concurrent chemoradiation for unresectable stage III. Advanced/metastatic (stage IV): targeted therapy if driver mutation present (EGFR inhibitors, ALK inhibitors, ROS1 inhibitors, BRAF inhibitors), immunotherapy (PD-1/PD-L1 inhibitors) for high PD-L1 expression, or platinum-based chemotherapy. SCLC: limited stage (confined to one hemithorax) - concurrent chemoradiation with prophylactic cranial irradiation. Extensive stage - chemotherapy (platinum plus etoposide) with immunotherapy. Palliative care for symptom management. Smoking cessation at any stage improves outcomes.',
    clinicalPearls: [
      'Adenocarcinoma is most common lung cancer in non-smokers',
      'Molecular testing is essential for all NSCLC to guide targeted therapy',
      'SCLC has high response rate to chemotherapy but poor long-term survival',
      'Screening with low-dose CT reduces lung cancer mortality in high-risk smokers'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/tumors-of-the-lungs/lung-carcinoma'
  },

  // ============================================================================
  // COMPREHENSIVE RENAL/NEPHROLOGY SECTION - ALL MAJOR TOPICS
  // ============================================================================

  // ACUTE KIDNEY INJURY
  {
    topic: 'Acute Kidney Injury',
    keywords: ['acute kidney injury', 'aki', 'acute renal failure', 'arf', 'acute tubular necrosis', 'atn', 'acute kidney failure'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, acute kidney injury is a sudden decline in kidney function characterized by elevated serum creatinine, decreased urine output, or both. AKI is classified into three categories based on etiology: prerenal (decreased renal perfusion), intrinsic (direct kidney parenchymal damage), and postrenal (urinary tract obstruction). Prerenal AKI results from hypoperfusion (hypovolemia, heart failure, sepsis) causing decreased glomerular filtration. Intrinsic AKI involves damage to glomeruli, tubules, interstitium, or vessels. Acute tubular necrosis (ATN) is the most common intrinsic cause, resulting from ischemia or nephrotoxins. Postrenal AKI occurs when bilateral obstruction or unilateral obstruction in a solitary kidney impairs urine flow.',
    clinicalPresentation: 'Patients may be asymptomatic with AKI detected only by laboratory abnormalities, or present with oliguria (<400 mL/day), anuria, fluid overload (edema, pulmonary congestion), uremic symptoms (nausea, confusion, pericarditis), or complications (hyperkalemia, metabolic acidosis). Physical examination findings depend on etiology: volume depletion in prerenal AKI, fluid overload in intrinsic AKI, bladder distention in postrenal AKI. Severe AKI may present with altered mental status, seizures, or cardiac arrhythmias from electrolyte disturbances.',
    diagnosticApproach: 'Diagnosis based on KDIGO criteria: increase in serum creatinine ≥0.3 mg/dL within 48 hours, or increase to ≥1.5 times baseline within 7 days, or urine output <0.5 mL/kg/hr for 6 hours. Classify AKI by stage (1-3) based on creatinine rise and urine output. Determine etiology: urinalysis (muddy brown casts in ATN, RBC casts in glomerulonephritis, WBC casts in acute interstitial nephritis), urine sodium and fractional excretion of sodium (FENa <1% suggests prerenal, >2% suggests intrinsic), renal ultrasound (hydronephrosis suggests obstruction), and assessment of volume status. Additional tests based on suspected cause: urine eosinophils (AIN), serum CK (rhabdomyolysis), complement levels (glomerulonephritis).',
    treatment: 'Management depends on etiology and severity. Prerenal AKI: restore renal perfusion with IV fluids (crystalloids), treat underlying cause (heart failure, sepsis), discontinue nephrotoxic medications. Intrinsic AKI: supportive care, treat underlying cause (stop nephrotoxins, immunosuppression for glomerulonephritis), avoid further kidney injury. Postrenal AKI: relieve obstruction (urinary catheter, ureteral stent, nephrostomy). General measures: maintain euvolemia, avoid nephrotoxins, adjust medication doses for renal function, monitor electrolytes and acid-base status. Indications for renal replacement therapy (dialysis): refractory hyperkalemia, severe metabolic acidosis, volume overload unresponsive to diuretics, uremic complications (pericarditis, encephalopathy), certain intoxications. Nutritional support and prevention of complications are essential.',
    clinicalPearls: [
      'FENa <1% suggests prerenal AKI; >2% suggests ATN (not reliable if diuretics given)',
      'Muddy brown casts on urinalysis are pathognomonic for ATN',
      'Bilateral obstruction or unilateral obstruction in solitary kidney required for postrenal AKI',
      'Early nephrology consultation for severe AKI, unclear etiology, or need for dialysis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/acute-kidney-injury/acute-kidney-injury-aki'
  },

  // CHRONIC KIDNEY DISEASE
  {
    topic: 'Chronic Kidney Disease',
    keywords: ['chronic kidney disease', 'ckd', 'chronic renal failure', 'crf', 'chronic renal insufficiency', 'end stage renal disease', 'esrd'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, chronic kidney disease is progressive loss of kidney function over months to years, defined as abnormalities of kidney structure or function present for >3 months. CKD is classified into 5 stages based on estimated glomerular filtration rate (eGFR): Stage 1 (eGFR ≥90 with kidney damage), Stage 2 (eGFR 60-89), Stage 3a (45-59), Stage 3b (30-44), Stage 4 (15-29), Stage 5 (<15 or dialysis). Common causes include diabetes mellitus (leading cause), hypertension, glomerulonephritis, polycystic kidney disease, and chronic interstitial nephritis. Progressive nephron loss leads to compensatory hyperfiltration in remaining nephrons, which ultimately accelerates kidney damage. CKD complications include anemia (decreased erythropoietin), mineral bone disease (hyperphosphatemia, hypocalcemia, secondary hyperparathyroidism), metabolic acidosis, and cardiovascular disease.',
    clinicalPresentation: 'Early CKD is often asymptomatic, detected incidentally on laboratory testing. As kidney function declines, patients develop fatigue, decreased appetite, nausea, pruritus, and fluid retention (edema, hypertension). Advanced CKD (Stage 4-5) causes uremic symptoms: altered mental status, pericarditis, bleeding diathesis, peripheral neuropathy, and restless legs syndrome. Physical examination may reveal hypertension, edema, pallor (anemia), uremic frost (rare), and signs of underlying disease (diabetic retinopathy, lupus rash). Complications include volume overload, electrolyte abnormalities (hyperkalemia, hyperphosphatemia, hypocalcemia), metabolic acidosis, and cardiovascular disease (leading cause of death in CKD).',
    diagnosticApproach: 'Diagnosis requires evidence of kidney damage or decreased kidney function for ≥3 months. Assess eGFR using serum creatinine-based equations (CKD-EPI preferred). Evaluate for kidney damage: albuminuria (urine albumin-to-creatinine ratio >30 mg/g), hematuria, structural abnormalities on imaging. Determine etiology: urinalysis, renal ultrasound (kidney size and echogenicity), serologic tests (ANA, ANCA, complement, hepatitis serologies), kidney biopsy if indicated. Assess complications: CBC (anemia), comprehensive metabolic panel (electrolytes, acid-base status), PTH and vitamin D (mineral bone disease), lipid panel (cardiovascular risk). Screen for cardiovascular disease. Monitor progression with serial eGFR and albuminuria measurements.',
    treatment: 'Goals: slow progression, treat complications, prepare for renal replacement therapy. Slow progression: control blood pressure (target <130/80, lower if proteinuria), ACE inhibitors or ARBs (reduce proteinuria and slow progression), SGLT2 inhibitors (cardio-renal protection), glycemic control in diabetes (A1c <7%), treat underlying cause. Manage complications: erythropoiesis-stimulating agents (ESAs) for anemia (target Hgb 10-11.5 g/dL), phosphate binders and vitamin D for mineral bone disease, sodium bicarbonate for metabolic acidosis, dietary modifications (protein restriction, potassium restriction, phosphate restriction). Cardiovascular risk reduction: statins, aspirin if indicated. Prepare for renal replacement therapy: patient education, vascular access creation (arteriovenous fistula preferred), consider kidney transplantation evaluation. Dialysis or transplantation indicated when eGFR <15 or earlier if uremic symptoms, refractory complications.',
    clinicalPearls: [
      'ACE inhibitors/ARBs are renoprotective - continue unless contraindicated (hyperkalemia, AKI)',
      'SGLT2 inhibitors slow CKD progression and reduce cardiovascular events',
      'Small, echogenic kidneys on ultrasound suggest chronic, irreversible disease',
      'Refer to nephrology when eGFR <30 or rapidly declining, or for complex management'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/chronic-kidney-disease/chronic-kidney-disease'
  },

  // GLOMERULAR DISEASES
  {
    topic: 'Nephrotic Syndrome',
    keywords: ['nephrotic syndrome', 'nephrotic', 'proteinuria', 'hypoalbuminemia', 'edema', 'hyperlipidemia'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, nephrotic syndrome is characterized by heavy proteinuria (>3.5 g/day or urine protein-to-creatinine ratio >3000 mg/g), hypoalbuminemia (<3 g/dL), edema, and hyperlipidemia. Results from increased glomerular permeability to proteins, primarily due to podocyte injury. Common causes in adults include membranous nephropathy (most common primary cause), focal segmental glomerulosclerosis (FSGS), minimal change disease, and secondary causes (diabetes, amyloidosis, lupus). In children, minimal change disease is most common. Proteinuria leads to hypoalbuminemia, which decreases oncotic pressure causing edema. Hyperlipidemia results from increased hepatic lipoprotein synthesis. Complications include thromboembolism (loss of anticoagulant proteins), infections (loss of immunoglobulins), and acute kidney injury.',
    clinicalPresentation: 'Patients present with progressive edema (periorbital, lower extremity, scrotal, anasarca), frothy urine (proteinuria), and weight gain. Physical examination reveals pitting edema, ascites, and pleural effusions in severe cases. Complications may manifest as deep vein thrombosis, pulmonary embolism (hypercoagulable state), or infections (pneumococcal peritonitis). Hypertension is variable depending on underlying cause. Lipid abnormalities may cause xanthomas or corneal arcus.',
    diagnosticApproach: 'Diagnosis requires documentation of nephrotic-range proteinuria and hypoalbuminemia. Urinalysis shows 3-4+ protein, oval fat bodies, fatty casts. 24-hour urine collection or spot urine protein-to-creatinine ratio quantifies proteinuria. Serum albumin <3 g/dL, elevated cholesterol and triglycerides. Assess kidney function (serum creatinine, eGFR). Evaluate for underlying cause: serum and urine protein electrophoresis (amyloidosis, myeloma), ANA and complement (lupus), hepatitis B and C serologies, HIV testing, fasting glucose (diabetes). Kidney biopsy is often necessary to determine specific glomerular disease and guide treatment. Assess for complications: hypercoagulability (consider thrombophilia workup if thrombosis), infections.',
    treatment: 'General measures: sodium restriction (<2 g/day), diuretics for edema (loop diuretics, may need combination with thiazides), ACE inhibitors or ARBs to reduce proteinuria, statins for hyperlipidemia. Anticoagulation controversial but consider for severe hypoalbuminemia (<2 g/dL), prior thrombosis, or membranous nephropathy. Specific treatment depends on underlying cause: Minimal change disease - corticosteroids (prednisone 1 mg/kg/day), excellent response rate. FSGS - corticosteroids, may require immunosuppression (cyclosporine, mycophenolate). Membranous nephropathy - immunosuppression (cyclophosphamide or rituximab plus corticosteroids) for high-risk patients. Secondary causes - treat underlying disease (glycemic control for diabetes, chemotherapy for amyloidosis). Monitor for complications and treatment side effects. Prognosis varies by etiology.',
    clinicalPearls: [
      'Membranous nephropathy is most common cause of nephrotic syndrome in adults',
      'Minimal change disease responds well to corticosteroids (>90% remission rate)',
      'Hypercoagulability is major complication - consider anticoagulation if albumin <2 g/dL',
      'Kidney biopsy essential to determine specific diagnosis and guide treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/glomerular-disorders/nephrotic-syndrome'
  },

  {
    topic: 'Nephritic Syndrome',
    keywords: ['nephritic syndrome', 'nephritic', 'glomerulonephritis', 'hematuria', 'rbc casts', 'acute glomerulonephritis'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, nephritic syndrome is characterized by glomerular inflammation with hematuria, red blood cell casts, proteinuria (usually <3.5 g/day), hypertension, edema, and acute kidney injury. Results from immune-mediated glomerular injury causing inflammation and disruption of glomerular basement membrane. Common causes include post-infectious glomerulonephritis (post-streptococcal most common), IgA nephropathy, lupus nephritis, ANCA-associated vasculitis, and anti-GBM disease (Goodpasture syndrome). Inflammation leads to decreased GFR, sodium and water retention (causing hypertension and edema), and hematuria from glomerular capillary wall disruption.',
    clinicalPresentation: 'Patients present with gross or microscopic hematuria (tea-colored or cola-colored urine), edema (periorbital, lower extremity), hypertension, and oliguria. May have recent history of infection (pharyngitis, skin infection) in post-infectious GN. Physical examination reveals hypertension, edema, and possible signs of volume overload (pulmonary rales, elevated JVP). Severe cases may present with acute kidney injury, pulmonary edema, or hypertensive emergency. Systemic symptoms depend on underlying cause (fever, rash, arthritis in lupus; hemoptysis in Goodpasture or vasculitis).',
    diagnosticApproach: 'Urinalysis is key: hematuria with dysmorphic RBCs and RBC casts (pathognomonic for glomerulonephritis), proteinuria (usually sub-nephrotic range). Assess kidney function: elevated serum creatinine, decreased eGFR. Evaluate for specific causes: ASO titer and anti-DNase B (post-streptococcal GN), complement levels (low C3 in post-infectious GN and lupus, low C3 and C4 in lupus), ANA and anti-dsDNA (lupus), ANCA (vasculitis), anti-GBM antibodies (Goodpasture). Kidney biopsy often necessary for definitive diagnosis, especially if rapidly progressive or unclear etiology. Assess severity: degree of kidney dysfunction, presence of crescents on biopsy (indicates rapidly progressive GN).',
    treatment: 'Supportive care: control blood pressure (ACE inhibitors or ARBs preferred), manage fluid overload (sodium restriction, diuretics), treat hyperkalemia if present. Specific treatment depends on underlying cause: Post-infectious GN - supportive care, usually self-limited. IgA nephropathy - ACE inhibitors/ARBs, corticosteroids for progressive disease. Lupus nephritis - immunosuppression (corticosteroids plus cyclophosphamide or mycophenolate). ANCA-associated vasculitis - immunosuppression (corticosteroids plus cyclophosphamide or rituximab), plasma exchange for severe disease. Anti-GBM disease - plasma exchange, immunosuppression (corticosteroids plus cyclophosphamide). Rapidly progressive GN requires urgent treatment to prevent irreversible kidney damage. Dialysis may be needed for severe AKI. Prognosis varies by etiology and severity.',
    clinicalPearls: [
      'RBC casts on urinalysis are pathognomonic for glomerulonephritis',
      'Post-streptococcal GN typically occurs 1-3 weeks after pharyngitis, 3-6 weeks after skin infection',
      'Rapidly progressive GN (crescentic GN) requires urgent treatment to prevent ESRD',
      'Low complement levels help narrow differential (post-infectious GN, lupus, MPGN)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/glomerular-disorders/overview-of-nephritic-syndrome'
  },

  {
    topic: 'IgA Nephropathy',
    keywords: ['iga nephropathy', 'iga', 'berger disease', 'iga glomerulonephritis'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, IgA nephropathy (Berger disease) is the most common primary glomerulonephritis worldwide, characterized by deposition of IgA-dominant immune complexes in the glomerular mesangium. Pathogenesis involves abnormal glycosylation of IgA1, leading to formation of immune complexes that deposit in glomeruli, causing mesangial proliferation and inflammation. More common in Asians and males. Clinical course is variable, ranging from asymptomatic hematuria to progressive chronic kidney disease. Approximately 30-40% progress to ESRD over 20-30 years.',
    clinicalPresentation: 'Classic presentation is episodic gross hematuria (tea-colored urine) concurrent with or immediately following upper respiratory infection (synpharyngitic hematuria). Between episodes, patients have persistent microscopic hematuria with variable proteinuria. Some patients present with nephrotic syndrome or nephritic syndrome. Hypertension develops in many patients. Physical examination often unremarkable except for hypertension. Henoch-Schönlein purpura (IgA vasculitis) is systemic variant with purpuric rash, arthritis, and abdominal pain.',
    diagnosticApproach: 'Urinalysis shows hematuria (microscopic or gross) with dysmorphic RBCs and RBC casts, variable proteinuria. Serum creatinine may be normal or elevated. Serum IgA levels elevated in 50% but not diagnostic. Kidney biopsy is diagnostic: light microscopy shows mesangial proliferation, immunofluorescence shows dominant or co-dominant IgA deposition in mesangium. Assess prognosis: poor prognostic factors include persistent proteinuria >1 g/day, hypertension, reduced GFR at presentation, and extensive glomerulosclerosis on biopsy.',
    treatment: 'Supportive care: ACE inhibitors or ARBs to reduce proteinuria and blood pressure (target BP <130/80, <125/75 if proteinuria >1 g/day), control hypertension. Immunosuppression controversial, reserved for high-risk patients: corticosteroids may benefit patients with proteinuria >1 g/day despite maximal supportive care. Fish oil (omega-3 fatty acids) may slow progression in some patients. Avoid nephrotoxins. Treat hyperlipidemia. Tonsillectomy not proven beneficial. Monitor for progression with serial measurements of proteinuria, blood pressure, and kidney function. Kidney transplantation for ESRD, but disease recurs in ~50% of grafts (usually mild).',
    clinicalPearls: [
      'Synpharyngitic hematuria (concurrent with URI) is classic for IgA nephropathy',
      'Most common primary glomerulonephritis worldwide',
      'Kidney biopsy required for definitive diagnosis',
      'ACE inhibitors/ARBs are cornerstone of treatment to reduce proteinuria'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/glomerular-disorders/iga-nephropathy'
  },

  // ELECTROLYTE DISORDERS
  {
    topic: 'Hyponatremia',
    keywords: ['hyponatremia', 'low sodium', 'siadh', 'syndrome of inappropriate antidiuretic hormone'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, hyponatremia is defined as serum sodium <135 mEq/L, the most common electrolyte disorder. Results from excess water relative to sodium, not necessarily sodium depletion. Classified by volume status: hypovolemic (sodium and water loss, but more sodium lost), euvolemic (water retention), hypervolemic (sodium and water retention, but more water retained). Common causes include diuretics, SIADH, heart failure, cirrhosis, adrenal insufficiency, hypothyroidism, and psychogenic polydipsia. SIADH results from inappropriate ADH secretion causing water retention despite low serum osmolality. Rapid correction of chronic hyponatremia can cause osmotic demyelination syndrome (central pontine myelinolysis).',
    clinicalPresentation: 'Symptoms depend on severity and rapidity of onset. Mild (130-135 mEq/L): often asymptomatic. Moderate (125-130 mEq/L): nausea, confusion, headache. Severe (<125 mEq/L): altered mental status, seizures, coma. Acute hyponatremia (<48 hours) more likely to cause severe neurologic symptoms due to cerebral edema. Chronic hyponatremia (>48 hours) better tolerated due to brain adaptation. Physical examination findings depend on volume status: hypovolemic (dry mucous membranes, decreased skin turgor, orthostatic hypotension), euvolemic (normal), hypervolemic (edema, ascites, elevated JVP).',
    diagnosticApproach: 'Confirm true hyponatremia (exclude pseudohyponatremia from hyperlipidemia or hyperproteinemia, exclude hypertonic hyponatremia from hyperglycemia). Assess volume status clinically. Measure serum osmolality, urine osmolality, and urine sodium. SIADH criteria: hyponatremia with low serum osmolality (<275 mOsm/kg), inappropriately concentrated urine (urine osmolality >100 mOsm/kg), urine sodium >40 mEq/L, euvolemia, normal thyroid and adrenal function. Evaluate for underlying cause: medication review (diuretics, SSRIs, carbamazepine), assess for heart failure, cirrhosis, kidney disease, malignancy (lung cancer, CNS disorders).',
    treatment: 'Treatment depends on severity, acuity, and volume status. Acute symptomatic hyponatremia: hypertonic saline (3% NaCl) to raise sodium by 4-6 mEq/L over first few hours, then slower correction. Chronic hyponatremia: correct slowly (≤8-10 mEq/L per 24 hours) to avoid osmotic demyelination syndrome. Hypovolemic: isotonic saline. Euvolemic (SIADH): fluid restriction (<800 mL/day), treat underlying cause, consider vasopressin receptor antagonists (tolvaptan, conivaptan) for refractory cases. Hypervolemic: treat underlying condition (heart failure, cirrhosis), fluid and sodium restriction, diuretics. Monitor sodium levels frequently during correction. Avoid overly rapid correction.',
    clinicalPearls: [
      'Correct chronic hyponatremia slowly (≤8-10 mEq/L per 24 hours) to avoid osmotic demyelination',
      'SIADH: low serum osmolality with inappropriately concentrated urine',
      'Acute symptomatic hyponatremia is medical emergency requiring hypertonic saline',
      'Always assess volume status to guide treatment approach'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/hyponatremia'
  },

  {
    topic: 'Hyperkalemia',
    keywords: ['hyperkalemia', 'high potassium', 'elevated potassium'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, hyperkalemia is defined as serum potassium >5.0 mEq/L. Results from decreased renal excretion (most common), increased potassium release from cells, or excessive intake. Common causes include chronic kidney disease, acute kidney injury, medications (ACE inhibitors, ARBs, potassium-sparing diuretics, NSAIDs), hypoaldosteronism (type 4 RTA), and tissue breakdown (rhabdomyolysis, tumor lysis syndrome, hemolysis). Hyperkalemia affects cardiac conduction, potentially causing life-threatening arrhythmias. Pseudohyperkalemia (falsely elevated due to hemolysis, thrombocytosis, leukocytosis) must be excluded.',
    clinicalPresentation: 'Often asymptomatic until severe. Symptoms include muscle weakness, paresthesias, and palpitations. Severe hyperkalemia can cause ascending paralysis and cardiac arrhythmias (ventricular fibrillation, asystole). Physical examination may reveal muscle weakness or flaccid paralysis. ECG changes are key: peaked T waves (earliest sign), prolonged PR interval, loss of P waves, widened QRS complex, sine wave pattern (pre-arrest). Cardiac arrest can occur without warning.',
    diagnosticApproach: 'Confirm true hyperkalemia (repeat if suspected pseudohyperkalemia from hemolysis). Obtain ECG immediately to assess for cardiac toxicity. Assess severity: mild (5.0-5.5 mEq/L), moderate (5.5-6.5 mEq/L), severe (>6.5 mEq/L or any level with ECG changes). Determine cause: assess kidney function (creatinine, eGFR), review medications, check for tissue breakdown (CK for rhabdomyolysis, LDH and uric acid for tumor lysis), assess for hypoaldosteronism (low aldosterone, high renin suggests adrenal insufficiency; low aldosterone, low renin suggests hyporeninemic hypoaldosteronism).',
    treatment: 'Treatment urgency depends on severity and ECG changes. Severe hyperkalemia with ECG changes is medical emergency: 1) Stabilize cardiac membrane: calcium gluconate or calcium chloride IV (does not lower potassium but protects heart). 2) Shift potassium into cells: insulin with dextrose IV, albuterol nebulizer, sodium bicarbonate if metabolic acidosis. 3) Remove potassium from body: loop diuretics if kidney function adequate, sodium polystyrene sulfonate (Kayexelate) or patiromer (slower acting), hemodialysis for severe cases or refractory hyperkalemia. Treat underlying cause: discontinue offending medications, treat kidney disease, correct hypoaldosteronism. Dietary potassium restriction. Monitor potassium levels and ECG.',
    clinicalPearls: [
      'Peaked T waves are earliest ECG finding; widened QRS and sine wave pattern indicate severe toxicity',
      'Calcium stabilizes cardiac membrane but does not lower potassium level',
      'Insulin with dextrose and albuterol shift potassium into cells (temporary effect)',
      'Dialysis is definitive treatment for severe, refractory hyperkalemia'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/hyperkalemia'
  },

  {
    topic: 'Metabolic Acidosis',
    keywords: ['metabolic acidosis', 'anion gap acidosis', 'high anion gap metabolic acidosis', 'normal anion gap metabolic acidosis', 'hagma', 'nagma'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, metabolic acidosis is characterized by decreased serum bicarbonate (<22 mEq/L) and decreased pH (<7.35). Classified by anion gap: high anion gap metabolic acidosis (HAGMA) results from accumulation of unmeasured anions (lactate, ketones, toxins, uremic acids), while normal anion gap metabolic acidosis (NAGMA) results from bicarbonate loss or impaired acid excretion. Anion gap = Na - (Cl + HCO3), normal 8-12 mEq/L. HAGMA causes (MUDPILES): Methanol, Uremia, Diabetic ketoacidosis, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates. NAGMA causes: diarrhea, renal tubular acidosis, ureterosigmoidostomy, carbonic anhydrase inhibitors. Respiratory compensation occurs via hyperventilation (Kussmaul respirations).',
    clinicalPresentation: 'Symptoms depend on severity and underlying cause. Mild acidosis may be asymptomatic. Moderate to severe acidosis causes dyspnea, Kussmaul respirations (deep, rapid breathing), confusion, lethargy, and nausea. Severe acidosis (pH <7.1) can cause cardiac dysfunction, arrhythmias, and coma. Physical examination may reveal tachypnea, altered mental status, and signs of underlying cause (fruity breath odor in DKA, signs of volume depletion in diarrhea, uremic symptoms in kidney failure).',
    diagnosticApproach: 'Arterial blood gas confirms acidosis: pH <7.35, HCO3 <22 mEq/L. Calculate anion gap to classify. Assess respiratory compensation: expected PaCO2 = 1.5 × HCO3 + 8 (±2). If measured PaCO2 differs significantly, consider mixed disorder. For HAGMA, calculate delta gap (ΔAG - ΔHCO3) to detect concurrent metabolic alkalosis or NAGMA. Determine cause: HAGMA - measure lactate, glucose and ketones (DKA), BUN and creatinine (uremia), osmolar gap (toxic alcohols), salicylate level. NAGMA - urine anion gap (positive suggests RTA, negative suggests GI losses), assess for diarrhea or RTA. Additional tests based on suspected cause.',
    treatment: 'Treat underlying cause - this is primary therapy. Specific treatments: Lactic acidosis - improve tissue perfusion, treat sepsis. DKA - insulin, fluids, electrolyte replacement. Uremia - dialysis. Toxic ingestions - specific antidotes (fomepizole for methanol/ethylene glycol, sodium bicarbonate for salicylates). Diarrhea - fluid and electrolyte replacement. RTA - alkali therapy (sodium bicarbonate or citrate). Sodium bicarbonate controversial for most causes of metabolic acidosis; consider if pH <7.1 and hemodynamically unstable, or for specific indications (severe hyperkalemia, tricyclic antidepressant overdose, uremic acidosis). Correct electrolyte abnormalities. Monitor pH, electrolytes, and response to treatment.',
    clinicalPearls: [
      'Calculate anion gap to classify metabolic acidosis (HAGMA vs NAGMA)',
      'Kussmaul respirations indicate respiratory compensation for metabolic acidosis',
      'Delta gap helps identify mixed acid-base disorders',
      'Treat underlying cause - sodium bicarbonate rarely indicated and may be harmful'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/acid-base-regulation-and-disorders/metabolic-acidosis'
  },

  // RENAL TUBULAR DISORDERS
  {
    topic: 'Acute Interstitial Nephritis',
    keywords: ['acute interstitial nephritis', 'ain', 'interstitial nephritis', 'drug induced nephritis'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, acute interstitial nephritis is characterized by inflammation of the renal interstitium and tubules, typically caused by hypersensitivity reaction to medications (most common), infections, or autoimmune diseases. Common drug causes include NSAIDs, antibiotics (beta-lactams, sulfonamides, fluoroquinolones), PPIs, and diuretics. Immune-mediated injury causes interstitial edema, inflammatory cell infiltration (lymphocytes, eosinophils), and tubular damage, leading to acute kidney injury. Unlike other drug reactions, AIN can occur weeks to months after drug initiation.',
    clinicalPresentation: 'Classic triad of fever, rash, and eosinophilia occurs in <10% of cases. Most patients present with nonspecific symptoms of acute kidney injury: decreased urine output, edema, nausea. Some have flank pain. Physical examination may reveal fever, rash (maculopapular), or be unremarkable. Systemic symptoms depend on underlying cause. Temporal relationship between drug exposure and AKI is key diagnostic clue.',
    diagnosticApproach: 'Urinalysis shows WBCs, WBC casts, and often eosinophiluria (Hansel stain, though sensitivity and specificity limited). Hematuria and mild proteinuria (<1.5 g/day) common. Serum creatinine elevated. Peripheral eosinophilia in ~30%. Kidney biopsy is gold standard: shows interstitial inflammation with lymphocytes and eosinophils, tubulitis, and interstitial edema. Exclude other causes of AKI: prerenal (FENa), ATN (muddy brown casts), glomerulonephritis (RBC casts, heavy proteinuria). Review medication history carefully.',
    treatment: 'Discontinue offending medication immediately - this is most important intervention. Supportive care: maintain euvolemia, avoid nephrotoxins, adjust medications for kidney function. Corticosteroids (prednisone 0.5-1 mg/kg/day for 4-6 weeks, then taper) may hasten recovery if started early, especially for severe AKI or if kidney function not improving after drug discontinuation. Evidence for steroids is limited. Monitor kidney function - most patients recover, but some develop chronic kidney disease, especially if diagnosis delayed. Prognosis generally good if drug stopped promptly.',
    clinicalPearls: [
      'NSAIDs and PPIs are common causes often overlooked',
      'Classic triad (fever, rash, eosinophilia) present in <10% of cases',
      'Eosinophiluria suggests AIN but not specific',
      'Discontinue offending drug immediately - most important treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/tubulointerstitial-diseases/acute-interstitial-nephritis'
  },

  {
    topic: 'Renal Tubular Acidosis',
    keywords: ['renal tubular acidosis', 'rta', 'type 1 rta', 'type 2 rta', 'type 4 rta', 'distal rta', 'proximal rta', 'tubular acidosis'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, renal tubular acidosis encompasses disorders of renal acid-base regulation causing normal anion gap metabolic acidosis. Type 1 (distal) RTA: impaired distal tubule hydrogen ion secretion, causing inability to acidify urine (urine pH >5.5 despite acidemia). Causes include autoimmune diseases, medications (amphotericin B), genetic disorders. Type 2 (proximal) RTA: impaired proximal tubule bicarbonate reabsorption, causing bicarbonate wasting. Associated with Fanconi syndrome. Type 4 RTA: aldosterone deficiency or resistance, causing hyperkalemia and impaired distal hydrogen and potassium secretion. Most common RTA, often seen in diabetic nephropathy and chronic kidney disease.',
    clinicalPresentation: 'Type 1 RTA: growth retardation in children, nephrolithiasis and nephrocalcinosis (from hypercalciuria), bone disease (osteomalacia), hypokalemia, muscle weakness. Type 2 RTA: similar to type 1 but associated with Fanconi syndrome (glycosuria, phosphaturia, aminoaciduria), rickets/osteomalacia. Type 4 RTA: often asymptomatic, hyperkalemia may cause muscle weakness or cardiac arrhythmias. All types cause normal anion gap metabolic acidosis with variable severity.',
    diagnosticApproach: 'Confirm normal anion gap metabolic acidosis. Measure urine pH: Type 1 - urine pH >5.5 despite acidemia (diagnostic). Type 2 - urine pH <5.5 when serum bicarbonate low (after bicarbonate wasting), but >5.5 when bicarbonate repleted. Type 4 - urine pH typically <5.5. Measure serum potassium: Type 1 and 2 - hypokalemia. Type 4 - hyperkalemia (key distinguishing feature). Urine anion gap: positive in type 1 and 4 (impaired ammonium excretion), negative in type 2 and GI losses. Additional tests: fractional excretion of bicarbonate (>15% in type 2), aldosterone and renin levels (type 4), assess for Fanconi syndrome (glycosuria, phosphaturia).',
    treatment: 'Type 1 RTA: alkali therapy with sodium bicarbonate or potassium citrate (1-2 mEq/kg/day) to maintain normal serum bicarbonate, potassium supplementation if needed. Type 2 RTA: large doses of alkali required (10-15 mEq/kg/day) due to ongoing bicarbonate wasting, potassium supplementation, treat underlying cause, thiazide diuretics may help by inducing volume depletion. Type 4 RTA: treat underlying cause, dietary potassium restriction, loop diuretics to enhance potassium excretion, fludrocortisone if aldosterone deficiency, sodium bicarbonate for acidosis. Monitor electrolytes and acid-base status. Prognosis depends on underlying cause and adequacy of treatment.',
    clinicalPearls: [
      'Type 1 RTA: urine pH >5.5 despite acidemia, hypokalemia, nephrolithiasis',
      'Type 2 RTA: associated with Fanconi syndrome, requires large doses of alkali',
      'Type 4 RTA: hyperkalemia is key feature, most common RTA',
      'All RTAs cause normal anion gap metabolic acidosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/renal-transport-abnormalities/renal-tubular-acidosis'
  },

  // URINARY TRACT DISORDERS
  {
    topic: 'Nephrolithiasis',
    keywords: ['nephrolithiasis', 'kidney stones', 'renal calculi', 'urolithiasis', 'renal stones'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, nephrolithiasis (kidney stones) results from crystallization of urinary solutes when concentration exceeds solubility. Stone types: calcium oxalate (most common, 70-80%), calcium phosphate, uric acid (radiolucent), struvite (infection stones), and cystine (rare, genetic). Risk factors include dehydration, hypercalciuria, hyperoxaluria, hyperuricosuria, hypocitraturia, low urine volume, and urinary tract infections (struvite stones). Calcium stones associated with hypercalciuria (idiopathic, hyperparathyroidism), hyperoxaluria (dietary, enteric, primary), and hypocitraturia. Uric acid stones form in acidic urine. Struvite stones form with urease-producing bacteria (Proteus). Cystine stones result from genetic defect in cystine transport.',
    clinicalPresentation: 'Classic presentation is acute onset of severe colicky flank pain radiating to groin (renal colic), often with nausea and vomiting. Hematuria (gross or microscopic) in >90%. Pain location indicates stone position: flank (kidney or upper ureter), lower abdomen (mid ureter), groin or testicular/labial (lower ureter or ureterovesical junction). Urinary urgency and frequency if stone near bladder. Physical examination shows costovertebral angle tenderness, patient unable to find comfortable position (unlike peritonitis). Fever suggests concurrent infection (pyonephrosis) - urologic emergency.',
    diagnosticApproach: 'Urinalysis shows hematuria (microscopic or gross) in >90%, may show crystals (calcium oxalate, uric acid, cystine). Non-contrast CT scan is gold standard: detects all stone types (including radiolucent uric acid), determines size and location, identifies hydronephrosis and alternative diagnoses. Kidney-ureter-bladder (KUB) X-ray detects radiopaque stones (calcium, struvite, cystine) but misses uric acid stones. Renal ultrasound alternative if CT contraindicated (pregnancy), detects hydronephrosis. Metabolic evaluation for recurrent stones or high-risk patients: 24-hour urine collection (volume, calcium, oxalate, uric acid, citrate, pH), serum calcium, phosphate, uric acid, PTH if hypercalcemia.',
    treatment: 'Acute management: analgesia (NSAIDs or opioids), antiemetics, hydration. Medical expulsive therapy with alpha-blocker (tamsulosin) facilitates stone passage for stones <10 mm. Most stones <5 mm pass spontaneously. Indications for intervention: stone >10 mm, persistent pain, infection, obstruction with AKI, solitary kidney. Intervention options: extracorporeal shock wave lithotripsy (ESWL) for stones <2 cm, ureteroscopy with laser lithotripsy, percutaneous nephrolithotomy for large stones. Prevention: increase fluid intake (goal urine output >2 L/day), dietary modifications based on stone type (limit sodium, animal protein, oxalate), thiazide diuretics for hypercalciuria, potassium citrate for hypocitraturia or uric acid stones, allopurinol for hyperuricosuria. Treat underlying causes (hyperparathyroidism).',
    clinicalPearls: [
      'Non-contrast CT is gold standard for diagnosis',
      'Stones <5 mm usually pass spontaneously; >10 mm usually require intervention',
      'Fever with obstructing stone is urologic emergency (pyonephrosis)',
      'Increase fluid intake to >2 L urine output/day for prevention'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-calculi/urinary-calculi'
  },

  {
    topic: 'Urinary Tract Infection',
    keywords: ['urinary tract infection', 'uti', 'cystitis', 'pyelonephritis', 'bladder infection'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, urinary tract infections result from bacterial colonization of the urinary tract, most commonly by Escherichia coli (80-85% of community-acquired UTIs). Other pathogens include Klebsiella, Proteus, Enterococcus, and Staphylococcus saprophyticus. Bacteria typically ascend from perineum through urethra to bladder (cystitis) and may ascend further to kidneys (pyelonephritis). Risk factors include female sex (shorter urethra), sexual activity, pregnancy, urinary obstruction, catheterization, diabetes, and immunosuppression. Complicated UTI occurs with structural/functional abnormalities, immunosuppression, or resistant organisms.',
    clinicalPresentation: 'Cystitis: dysuria, urinary frequency, urgency, suprapubic pain, hematuria. No systemic symptoms. Pyelonephritis: fever, chills, flank pain, costovertebral angle tenderness, nausea, vomiting. May have cystitis symptoms. Physical examination: cystitis - suprapubic tenderness; pyelonephritis - fever, costovertebral angle tenderness, ill-appearing. Elderly or immunocompromised may have atypical presentation (confusion, functional decline, absence of fever).',
    diagnosticApproach: 'Urinalysis: pyuria (>10 WBC/hpf), bacteriuria, positive leukocyte esterase and nitrites (high specificity for UTI). Hematuria common. Urine culture: ≥10^5 CFU/mL diagnostic for cystitis, ≥10^4 CFU/mL for pyelonephritis or catheter-associated UTI. Obtain culture before antibiotics in pyelonephritis, complicated UTI, or treatment failure. Blood cultures in pyelonephritis if sepsis suspected. Imaging (renal ultrasound or CT) if pyelonephritis not improving after 48-72 hours (assess for abscess, obstruction) or recurrent infections (assess for structural abnormalities).',
    treatment: 'Cystitis (uncomplicated): nitrofurantoin 100 mg BID x 5 days, or TMP-SMX DS BID x 3 days (if local resistance <20%), or fosfomycin 3g single dose. Avoid fluoroquinolones for uncomplicated cystitis (reserve for complicated infections). Pyelonephritis (outpatient): fluoroquinolone (ciprofloxacin or levofloxacin) x 7 days, or ceftriaxone 1g IV/IM once then oral cephalosporin x 7 days. Pyelonephritis (inpatient): fluoroquinolone IV or ceftriaxone IV, adjust based on culture. Complicated UTI: broader spectrum antibiotics, longer duration (10-14 days), treat underlying cause. Asymptomatic bacteriuria: treat only in pregnancy or before urologic procedures. Prevention: increase fluid intake, void after intercourse, avoid spermicides.',
    clinicalPearls: [
      'E. coli causes 80-85% of community-acquired UTIs',
      'Positive nitrites highly specific for UTI (but not sensitive)',
      'Asymptomatic bacteriuria should not be treated except in pregnancy',
      'Pyelonephritis requires 7-14 days of antibiotics (longer than cystitis)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-tract-infections-utis/bacterial-urinary-tract-infections-utis'
  },
];

/**
 * Search function to find relevant Merck Manual entries based on query
 * PHASE 2 ENHANCEMENT: Ultra-precise keyword matching with flashcard integration
 * 
 * KEY IMPROVEMENTS:
 * - Exact phrase matching prioritized over partial matches
 * - Word boundary enforcement prevents substring false positives
 * - Multi-word queries require ALL significant words to match
 * - Penalty system for irrelevant partial matches
 * - Strict threshold filtering to eliminate noise
 * - Flashcard keyword integration for enhanced matching
 */
export function searchMerckManualKnowledge(query: string): MerckManualEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);
  
  // Helper function to escape regex special characters
  const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  const scoredEntries = merckManualKnowledge.map(entry => {
    let score = 0;
    let hasExactMatch = false;
    let hasStrongMatch = false;
    
    // PRIORITY 1: EXACT TOPIC MATCH - Highest priority
    const topicLower = entry.topic.toLowerCase();
    if (topicLower === lowerQuery) {
      score += 100000; // Massive boost for perfect topic match
      hasExactMatch = true;
    }
    
    // PRIORITY 2: EXACT KEYWORD MATCH - Very high priority
    entry.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      
      // Perfect exact match (entire query matches entire keyword)
      if (keywordLower === lowerQuery) {
        score += 50000;
        hasExactMatch = true;
      }
      // Exact phrase match with word boundaries
      else if (new RegExp(`\\b${escapeRegex(lowerQuery)}\\b`).test(keywordLower)) {
        score += 25000;
        hasStrongMatch = true;
      }
    });
    
    // PRIORITY 3: MULTI-WORD EXACT MATCHING
    // For multi-word queries, ALL significant words must match
    if (queryWords.length > 1 && !hasExactMatch) {
      let matchedWords = 0;
      let totalSignificantWords = queryWords.length;
      
      queryWords.forEach(word => {
        let wordMatched = false;
        
        // Check topic for word match
        if (new RegExp(`\\b${escapeRegex(word)}\\b`).test(topicLower)) {
          wordMatched = true;
        }
        
        // Check keywords for word match
        if (!wordMatched) {
          entry.keywords.forEach(keyword => {
            const keywordLower = keyword.toLowerCase();
            if (new RegExp(`\\b${escapeRegex(word)}\\b`).test(keywordLower)) {
              wordMatched = true;
            }
          });
        }
        
        if (wordMatched) {
          matchedWords++;
        }
      });
      
      // Calculate match percentage
      const matchPercentage = matchedWords / totalSignificantWords;
      
      // Require at least 80% of words to match for multi-word queries
      if (matchPercentage >= 0.8) {
        score += 10000 * matchPercentage * matchedWords;
        hasStrongMatch = true;
      } else if (matchPercentage >= 0.5) {
        // Partial match with lower score
        score += 1000 * matchPercentage;
      }
    }
    
    // PRIORITY 4: SINGLE WORD MATCHING (only if no strong match yet)
    if (queryWords.length === 1 && !hasExactMatch && !hasStrongMatch) {
      const singleWord = queryWords[0];
      
      // Check for word boundary match in topic
      if (new RegExp(`\\b${escapeRegex(singleWord)}\\b`).test(topicLower)) {
        score += 5000;
        hasStrongMatch = true;
      }
      
      // Check for word boundary match in keywords
      entry.keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase();
        if (new RegExp(`\\b${escapeRegex(singleWord)}\\b`).test(keywordLower)) {
          score += 3000;
          hasStrongMatch = true;
        }
      });
      
      // Only allow prefix matching for longer queries (6+ characters)
      if (!hasStrongMatch && singleWord.length >= 6) {
        entry.keywords.forEach(keyword => {
          const keywordLower = keyword.toLowerCase();
          if (keywordLower.startsWith(singleWord)) {
            score += 100; // Much lower score for prefix matches
          }
        });
      }
    }
    
    // PENALTY: Reduce score if query is substring of a different disease
    // This prevents "acidosis" from matching "renal tubular acidosis" when user wants "metabolic acidosis"
    if (!hasExactMatch && !hasStrongMatch) {
      entry.keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase();
        // If keyword contains query but not as a complete word, apply penalty
        if (keywordLower.includes(lowerQuery) && 
            !new RegExp(`\\b${escapeRegex(lowerQuery)}\\b`).test(keywordLower)) {
          score -= 500; // Penalty for substring matches
        }
      });
    }
    
    // SYSTEM MATCH - Very low priority, only as tiebreaker
    if (entry.system.toLowerCase() === lowerQuery) {
      score += 10;
    }
    
    return { entry, score };
  });
  
  // STRICT FILTERING: Only return entries with meaningful scores
  // Exact matches: 25000+
  // Strong matches: 3000+
  // Weak matches: filtered out
  const MIN_SCORE_THRESHOLD = 2500;
  
  const filteredEntries = scoredEntries
    .filter(item => item.score >= MIN_SCORE_THRESHOLD)
    .sort((a, b) => b.score - a.score);
  
  // Log top matches for debugging
  if (filteredEntries.length > 0) {
    console.log(`Search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
      topic: item.entry.topic,
      score: item.score
    })));
  }
  
  // Return top 3 matches only
  return filteredEntries
    .slice(0, 3)
    .map(item => item.entry);
}

/**
 * Get Merck Manual entry by exact topic name
 */
export function getMerckManualByTopic(topic: string): MerckManualEntry | undefined {
  return merckManualKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all Merck Manual entries for a specific system
 */
export function getMerckManualBySystem(system: string): MerckManualEntry[] {
  return merckManualKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}

/**
 * STRESS TEST FUNCTION
 * Tests keyword search precision to prevent content bleeding
 * 
 * This function runs automated tests on similar disease names to ensure
 * the search algorithm correctly differentiates between them.
 */
export function runKeywordStressTest(): {
  passed: number;
  failed: number;
  results: Array<{
    query: string;
    expectedTopic: string;
    actualTopic: string | null;
    passed: boolean;
    score?: number;
  }>;
} {
  const testCases = [
    // RENAL/NEPHROLOGY STRESS TESTS
    { query: 'renal tubular acidosis', expectedTopic: 'Renal Tubular Acidosis' },
    { query: 'metabolic acidosis', expectedTopic: 'Metabolic Acidosis' },
    { query: 'rta', expectedTopic: 'Renal Tubular Acidosis' },
    { query: 'type 1 rta', expectedTopic: 'Renal Tubular Acidosis' },
    { query: 'anion gap acidosis', expectedTopic: 'Metabolic Acidosis' },
    { query: 'acute kidney injury', expectedTopic: 'Acute Kidney Injury' },
    { query: 'aki', expectedTopic: 'Acute Kidney Injury' },
    { query: 'chronic kidney disease', expectedTopic: 'Chronic Kidney Disease' },
    { query: 'ckd', expectedTopic: 'Chronic Kidney Disease' },
    { query: 'nephrotic syndrome', expectedTopic: 'Nephrotic Syndrome' },
    { query: 'nephritic syndrome', expectedTopic: 'Nephritic Syndrome' },
    { query: 'glomerulonephritis', expectedTopic: 'Nephritic Syndrome' },
    { query: 'iga nephropathy', expectedTopic: 'IgA Nephropathy' },
    { query: 'hyponatremia', expectedTopic: 'Hyponatremia' },
    { query: 'hyperkalemia', expectedTopic: 'Hyperkalemia' },
    { query: 'acute interstitial nephritis', expectedTopic: 'Acute Interstitial Nephritis' },
    { query: 'nephrolithiasis', expectedTopic: 'Nephrolithiasis' },
    { query: 'kidney stones', expectedTopic: 'Nephrolithiasis' },
    { query: 'urinary tract infection', expectedTopic: 'Urinary Tract Infection' },
    { query: 'uti', expectedTopic: 'Urinary Tract Infection' },
    
    // CARDIOLOGY STRESS TESTS
    { query: 'atrial fibrillation', expectedTopic: 'Atrial Fibrillation' },
    { query: 'atrial flutter', expectedTopic: 'Atrial Flutter' },
    { query: 'afib', expectedTopic: 'Atrial Fibrillation' },
    { query: 'ventricular tachycardia', expectedTopic: 'Ventricular Tachycardia' },
    { query: 'supraventricular tachycardia', expectedTopic: 'Supraventricular Tachycardia' },
    { query: 'svt', expectedTopic: 'Supraventricular Tachycardia' },
    { query: 'vt', expectedTopic: 'Ventricular Tachycardia' },
    { query: 'heart failure', expectedTopic: 'Heart Failure' },
    { query: 'acute heart failure', expectedTopic: 'Acute Decompensated Heart Failure' },
    { query: 'myocardial infarction', expectedTopic: 'Myocardial Infarction' },
    { query: 'stemi', expectedTopic: 'Myocardial Infarction' },
    { query: 'unstable angina', expectedTopic: 'Unstable Angina' },
    { query: 'stable angina', expectedTopic: 'Stable Angina Pectoris' },
    { query: 'aortic stenosis', expectedTopic: 'Aortic Stenosis' },
    { query: 'aortic regurgitation', expectedTopic: 'Aortic Regurgitation' },
    { query: 'mitral stenosis', expectedTopic: 'Mitral Stenosis' },
    { query: 'mitral regurgitation', expectedTopic: 'Mitral Regurgitation' },
    { query: 'endocarditis', expectedTopic: 'Infective Endocarditis' },
    { query: 'myocarditis', expectedTopic: 'Myocarditis' },
    { query: 'pericarditis', expectedTopic: 'Acute Pericarditis' },
    { query: 'cardiac tamponade', expectedTopic: 'Cardiac Tamponade' },
    { query: 'hypertension', expectedTopic: 'Hypertension' },
    { query: 'hypertensive emergency', expectedTopic: 'Hypertensive Emergency' },
    
    // PULMONARY STRESS TESTS
    { query: 'asthma', expectedTopic: 'Asthma' },
    { query: 'copd', expectedTopic: 'Chronic Obstructive Pulmonary Disease' },
    { query: 'pneumonia', expectedTopic: 'Community-Acquired Pneumonia' },
    { query: 'hospital acquired pneumonia', expectedTopic: 'Hospital-Acquired Pneumonia' },
    { query: 'tuberculosis', expectedTopic: 'Tuberculosis' },
    { query: 'pulmonary embolism', expectedTopic: 'Pulmonary Embolism' },
    { query: 'pe', expectedTopic: 'Pulmonary Embolism' },
    { query: 'ards', expectedTopic: 'Acute Respiratory Distress Syndrome' },
    { query: 'pleural effusion', expectedTopic: 'Pleural Effusion' },
    { query: 'pneumothorax', expectedTopic: 'Pneumothorax' },
    { query: 'empyema', expectedTopic: 'Empyema' },
    { query: 'bronchiectasis', expectedTopic: 'Bronchiectasis' },
    { query: 'cystic fibrosis', expectedTopic: 'Cystic Fibrosis' },
    { query: 'sarcoidosis', expectedTopic: 'Sarcoidosis' },
    { query: 'pulmonary hypertension', expectedTopic: 'Pulmonary Hypertension' },
    { query: 'lung cancer', expectedTopic: 'Lung Cancer' },
  ];
  
  const results = testCases.map(testCase => {
    const searchResults = searchMerckManualKnowledge(testCase.query);
    const actualTopic = searchResults.length > 0 ? searchResults[0].topic : null;
    const passed = actualTopic === testCase.expectedTopic;
    
    return {
      query: testCase.query,
      expectedTopic: testCase.expectedTopic,
      actualTopic,
      passed,
    };
  });
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  
  return {
    passed,
    failed,
    results,
  };
}
