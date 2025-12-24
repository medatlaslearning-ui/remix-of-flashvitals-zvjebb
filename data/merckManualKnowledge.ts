
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
 * COMPREHENSIVE CARDIOLOGY COVERAGE - ALL MAJOR TOPICS
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
    keywords: ['atrial fibrillation', 'afib', 'af', 'a-fib', 'a fib'],
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
    keywords: ['atrial flutter', 'flutter', 'sawtooth', 'f waves'],
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
    keywords: ['svt', 'supraventricular tachycardia', 'psvt', 'paroxysmal supraventricular tachycardia', 'avnrt', 'avrt', 'av nodal reentrant', 'av reentrant'],
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
    keywords: ['ventricular tachycardia', 'vt', 'v-tach', 'v tach', 'vtach'],
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
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'cardiac failure', 'systolic heart failure', 'diastolic heart failure'],
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
    keywords: ['acute heart failure', 'adhf', 'decompensated heart failure', 'acute decompensated', 'flash pulmonary edema', 'cardiogenic pulmonary edema'],
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
    keywords: ['myocardial infarction', 'mi', 'heart attack', 'stemi', 'nstemi', 'acute coronary syndrome', 'acs', 'st elevation mi', 'non st elevation mi'],
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
  // OTHER MEDICAL SYSTEMS (ABBREVIATED - FOCUS ON CARDIOLOGY)
  // ============================================================================

  // PULMONARY (Selected Topics)
  {
    topic: 'Pneumonia',
    keywords: ['pneumonia', 'cap', 'community acquired pneumonia', 'lung infection', 'pneumonitis'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pneumonia is an acute infection of the pulmonary parenchyma caused by bacteria, viruses, fungi, or parasites. Streptococcus pneumoniae is the most common bacterial cause. Pathogens reach the lungs via aspiration, inhalation, or hematogenous spread. The inflammatory response causes alveolar filling with exudate, impairing gas exchange.',
    clinicalPresentation: 'Typical bacterial pneumonia presents with fever, productive cough with purulent sputum, pleuritic chest pain, and dyspnea. Physical examination reveals tachypnea, crackles, bronchial breath sounds, and dullness to percussion over the affected area. Atypical pneumonia (Mycoplasma, Chlamydia, Legionella) presents with gradual onset, dry cough, and extrapulmonary symptoms. Elderly patients may present atypically with confusion or functional decline.',
    diagnosticApproach: 'Chest X-ray confirms diagnosis, showing lobar consolidation (typical) or interstitial infiltrates (atypical). Laboratory tests include CBC (leukocytosis), inflammatory markers, and blood cultures in hospitalized patients. Sputum culture has limited utility. Severity assessment using CURB-65 or PSI guides disposition. Consider Legionella and pneumococcal urinary antigens in severe cases.',
    treatment: 'Outpatient CAP: macrolide or doxycycline; add beta-lactam if comorbidities present. Inpatient non-ICU: beta-lactam plus macrolide or respiratory fluoroquinolone. ICU: beta-lactam plus macrolide or fluoroquinolone. Duration typically 5-7 days for uncomplicated cases. Supportive care includes hydration, oxygen, and antipyretics. Complications include empyema, lung abscess, and respiratory failure.',
    clinicalPearls: [
      'CURB-65 score ≥2 suggests need for hospitalization',
      'Legionella causes hyponatremia and GI symptoms',
      'Aspiration pneumonia involves anaerobes; treat with ampicillin-sulbactam',
      'Failure to improve in 72 hours warrants reassessment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pneumonia/overview-of-pneumonia'
  },

  {
    topic: 'Chronic Obstructive Pulmonary Disease',
    keywords: ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'obstructive lung disease'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, COPD is characterized by progressive airflow limitation that is not fully reversible. Chronic bronchitis involves airway inflammation and mucus hypersecretion. Emphysema involves destruction of alveolar walls and loss of elastic recoil. Smoking is the primary risk factor, causing oxidative stress, protease-antiprotease imbalance, and chronic inflammation. Alpha-1 antitrypsin deficiency is a genetic cause.',
    clinicalPresentation: 'Patients present with progressive dyspnea, chronic cough, and sputum production. Symptoms worsen over years. Physical examination may reveal prolonged expiration, wheezing, barrel chest, use of accessory muscles, and pursed-lip breathing. Advanced disease causes cyanosis, cor pulmonale (right heart failure), and cachexia. Acute exacerbations feature increased dyspnea, cough, and sputum purulence.',
    diagnosticApproach: 'Spirometry is diagnostic: post-bronchodilator FEV1/FVC <0.70 confirms airflow obstruction. GOLD staging based on FEV1 severity. Chest X-ray shows hyperinflation and flattened diaphragms. HRCT differentiates emphysema from chronic bronchitis. Alpha-1 antitrypsin level in young patients or those with basilar emphysema. Assess for comorbidities (cardiovascular disease, osteoporosis, depression).',
    treatment: 'Smoking cessation is paramount. Bronchodilators are mainstay: LAMA and/or LABA. Add ICS for frequent exacerbations or eosinophilia. Pulmonary rehabilitation improves function and quality of life. Long-term oxygen therapy (>15 hours/day) for chronic hypoxemia (PaO2 <55 mmHg). Vaccinations (influenza, pneumococcal, COVID-19) prevent exacerbations. Severe disease may require lung volume reduction or transplantation.',
    clinicalPearls: [
      'Smoking cessation is the only intervention that slows FEV1 decline',
      'Oxygen goal is 88-92% to avoid CO2 retention',
      'Exacerbations often triggered by infections or air pollution',
      'Screen for alpha-1 antitrypsin deficiency in patients <45 years'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/chronic-obstructive-pulmonary-disease-and-related-disorders/chronic-obstructive-pulmonary-disease-copd'
  },

  {
    topic: 'Asthma',
    keywords: ['asthma', 'reactive airway disease', 'bronchospasm', 'wheezing'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, asthma is a chronic inflammatory disorder of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. Type 2 inflammation (eosinophils, mast cells, Th2 cells) predominates in allergic asthma. Triggers include allergens, exercise, cold air, respiratory infections, and irritants. Airway remodeling can occur with chronic inflammation.',
    clinicalPresentation: 'Patients experience episodic wheezing, dyspnea, chest tightness, and cough, often worse at night or early morning. Symptoms are triggered by specific exposures and improve with bronchodilators. Physical examination during exacerbation reveals wheezing, prolonged expiration, and use of accessory muscles. Severe exacerbations may present with inability to speak in full sentences, silent chest (minimal air movement), and respiratory distress.',
    diagnosticApproach: 'Spirometry shows reversible obstruction: FEV1/FVC <0.70 that improves ≥12% and ≥200 mL after bronchodilator. Peak flow monitoring tracks variability. Methacholine challenge test confirms airway hyperresponsiveness when spirometry is normal. Assess for allergic triggers with skin testing or specific IgE. Fractional exhaled nitric oxide (FeNO) indicates eosinophilic inflammation.',
    treatment: 'Step-wise approach based on severity. All patients need SABA for rescue. Persistent asthma requires controller therapy: low-dose ICS is first-line. Add LABA for inadequate control. Severe asthma may require high-dose ICS/LABA, leukotriene modifiers, or biologics (anti-IgE, anti-IL-5, anti-IL-4R). Acute exacerbations: SABA, systemic corticosteroids, oxygen. Severe exacerbations may require magnesium sulfate or mechanical ventilation.',
    clinicalPearls: [
      'ICS are the most effective long-term controller medication',
      'LABA should never be used without ICS in asthma',
      'Silent chest indicates severe obstruction and impending respiratory failure',
      'Aspirin-exacerbated respiratory disease (AERD) requires leukotriene modifier'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/asthma-and-related-disorders/asthma'
  },

  {
    topic: 'Pulmonary Embolism',
    keywords: ['pulmonary embolism', 'pe', 'blood clot', 'embolus', 'venous thromboembolism'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pulmonary embolism occurs when thrombus (usually from deep vein thrombosis) lodges in the pulmonary arterial system, causing mechanical obstruction and release of vasoactive mediators. This increases pulmonary vascular resistance and right ventricular afterload. Large emboli can cause right ventricular failure and hemodynamic collapse. Gas exchange is impaired through increased dead space ventilation and ventilation-perfusion mismatch.',
    clinicalPresentation: 'Classic triad of dyspnea, pleuritic chest pain, and hemoptysis is uncommon. Most patients present with sudden-onset dyspnea and tachypnea. Pleuritic chest pain suggests peripheral embolism with pleural irritation. Massive PE causes hypotension, syncope, and signs of right heart strain. Physical examination may reveal tachycardia, tachypnea, hypoxemia, and signs of DVT. Submassive PE shows RV dysfunction without hypotension.',
    diagnosticApproach: 'Clinical probability assessment using Wells criteria or Geneva score guides testing. D-dimer has high sensitivity but low specificity; negative D-dimer in low-risk patients excludes PE. CT pulmonary angiography (CTPA) is the gold standard, showing filling defects. V/Q scan is alternative when CT contraindicated. ECG may show sinus tachycardia, S1Q3T3 pattern, or right heart strain. Echocardiography assesses RV function. Troponin and BNP indicate RV strain.',
    treatment: 'Anticoagulation is primary treatment: DOACs (apixaban, rivaroxaban) preferred over warfarin. Hemodynamically unstable patients require thrombolysis or embolectomy. Submassive PE with RV dysfunction may benefit from thrombolysis in selected cases. IVC filter if anticoagulation contraindicated. Duration: 3 months for provoked PE, extended for unprovoked or recurrent PE. Supportive care includes oxygen and hemodynamic support.',
    clinicalPearls: [
      'Massive PE defined by hypotension; submassive by RV strain without hypotension',
      'Saddle embolus at main PA bifurcation may or may not cause hemodynamic instability',
      'Pregnancy increases PE risk; use LMWH for treatment',
      'Consider thrombophilia testing for unprovoked PE in young patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe'
  },

  {
    topic: 'Pleural Effusion',
    keywords: ['pleural effusion', 'fluid in lungs', 'pleural fluid', 'effusion'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pleural effusion is abnormal accumulation of fluid in the pleural space. Transudates result from imbalance in hydrostatic and oncotic pressures (heart failure, cirrhosis, nephrotic syndrome). Exudates result from increased capillary permeability or impaired lymphatic drainage due to inflammation, infection, or malignancy. Normal pleural fluid production is 10-20 mL/day, reabsorbed by lymphatics.',
    clinicalPresentation: 'Small effusions may be asymptomatic. Larger effusions cause dyspnea, pleuritic chest pain, and cough. Physical examination reveals decreased breath sounds, dullness to percussion, decreased tactile fremitus, and possible pleural friction rub. Massive effusions cause severe dyspnea and may shift the mediastinum. Associated findings depend on underlying cause (fever in infection, weight loss in malignancy).',
    diagnosticApproach: 'Chest X-ray shows blunting of costophrenic angle (>75 mL), meniscus sign, or complete opacification. Lateral decubitus view detects smaller effusions. Ultrasound guides thoracentesis and detects loculations. CT provides detailed assessment. Thoracentesis with pleural fluid analysis is essential: Light\'s criteria differentiate exudate from transudate. Analyze protein, LDH, glucose, pH, cell count, cytology, and cultures. Low pH (<7.2) or glucose suggests complicated parapneumonic effusion or empyema.',
    treatment: 'Treat underlying cause. Transudates often respond to diuretics. Exudates require specific treatment: antibiotics for parapneumonic effusion, drainage for empyema, pleurodesis for malignant effusion. Therapeutic thoracentesis provides symptomatic relief. Chest tube drainage for complicated effusions. Video-assisted thoracoscopic surgery (VATS) for loculated effusions or diagnostic uncertainty. Monitor for reaccumulation.',
    clinicalPearls: [
      'Light\'s criteria: exudate if pleural/serum protein >0.5, pleural/serum LDH >0.6, or pleural LDH >2/3 upper limit of normal',
      'Bloody effusion suggests malignancy, PE, or trauma',
      'Milky effusion indicates chylothorax (high triglycerides)',
      'Empyema requires drainage; antibiotics alone insufficient'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pleural-effusion'
  },

  // RENAL (Selected Topics)
  {
    topic: 'Acute Kidney Injury',
    keywords: ['acute kidney injury', 'aki', 'acute renal failure', 'arf', 'kidney failure'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, acute kidney injury is characterized by rapid decline in kidney function over hours to days, resulting in accumulation of nitrogenous wastes and dysregulation of fluid, electrolyte, and acid-base balance. AKI is classified as prerenal (decreased renal perfusion), intrinsic (parenchymal damage), or postrenal (obstruction). Prerenal AKI is most common and reversible if perfusion restored. Intrinsic AKI involves tubular, glomerular, interstitial, or vascular injury.',
    clinicalPresentation: 'Many patients are asymptomatic initially, with AKI detected by laboratory abnormalities. Symptoms may include decreased urine output (oliguria <400 mL/day), fluid overload (edema, dyspnea), uremic symptoms (nausea, confusion, pericarditis), and electrolyte disturbances (hyperkalemia). Severe AKI causes metabolic acidosis and uremia requiring dialysis. Physical examination may reveal volume depletion or overload, depending on cause.',
    diagnosticApproach: 'Diagnosis based on rising serum creatinine (≥0.3 mg/dL increase within 48 hours or ≥1.5x baseline within 7 days) or oliguria (<0.5 mL/kg/hr for 6 hours). Urinalysis and microscopy differentiate causes: prerenal shows hyaline casts, ATN shows muddy brown casts, glomerulonephritis shows RBC casts. Fractional excretion of sodium (FENa) <1% suggests prerenal. Renal ultrasound evaluates for obstruction and kidney size. Consider renal biopsy for unclear etiology.',
    treatment: 'Identify and treat underlying cause. Prerenal: restore volume and perfusion. Intrinsic: supportive care, avoid nephrotoxins, adjust medication doses. Postrenal: relieve obstruction. Manage complications: restrict fluids if overloaded, treat hyperkalemia, correct acidosis. Indications for dialysis (AEIOU): acidosis, electrolyte abnormalities, intoxication, overload, uremia. Most AKI is reversible with appropriate management, but severe cases may progress to CKD.',
    clinicalPearls: [
      'FENa <1% suggests prerenal AKI; >2% suggests intrinsic AKI',
      'Muddy brown casts are pathognomonic for acute tubular necrosis',
      'Contrast-induced AKI peaks at 3-5 days post-exposure',
      'Avoid NSAIDs, ACE inhibitors, and aminoglycosides in AKI'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/acute-kidney-injury/acute-kidney-injury-aki'
  },

  {
    topic: 'Chronic Kidney Disease',
    keywords: ['chronic kidney disease', 'ckd', 'chronic renal failure', 'kidney disease', 'renal insufficiency'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, chronic kidney disease is progressive loss of kidney function over months to years, defined by GFR <60 mL/min/1.73m² or kidney damage markers for ≥3 months. Common causes include diabetes, hypertension, glomerulonephritis, and polycystic kidney disease. Progressive nephron loss leads to compensatory hyperfiltration in remaining nephrons, ultimately causing further damage. CKD results in uremia, anemia, mineral-bone disorder, and cardiovascular disease.',
    clinicalPresentation: 'Early CKD is often asymptomatic. As GFR declines, patients develop fatigue, decreased appetite, nausea, pruritus, and altered mental status. Advanced CKD (stage 4-5) causes uremic symptoms: pericarditis, neuropathy, encephalopathy, and bleeding diathesis. Physical examination may reveal hypertension, edema, pallor, uremic frost (late finding), and signs of underlying disease (diabetic retinopathy).',
    diagnosticApproach: 'Diagnosis requires persistent elevation of serum creatinine or reduction in estimated GFR, or evidence of kidney damage (proteinuria, hematuria, structural abnormalities). Stage based on GFR: Stage 1 (≥90), Stage 2 (60-89), Stage 3a (45-59), Stage 3b (30-44), Stage 4 (15-29), Stage 5 (<15). Urinalysis detects proteinuria and hematuria. Renal ultrasound shows kidney size and structure. Identify and treat reversible causes and complications.',
    treatment: 'Slow progression by controlling blood pressure (target <130/80), managing diabetes (A1C <7%), using ACE inhibitors or ARBs for proteinuria, and avoiding nephrotoxins. Treat complications: anemia (ESAs, iron), mineral-bone disorder (phosphate binders, vitamin D, calcimimetics), acidosis (sodium bicarbonate), hyperkalemia (dietary restriction, binders). Prepare for renal replacement therapy (dialysis or transplantation) when GFR <20 mL/min. Dietary modifications include protein restriction and potassium/phosphate management.',
    clinicalPearls: [
      'ACE inhibitors/ARBs slow CKD progression in proteinuric patients',
      'Anemia in CKD typically occurs when GFR <30 mL/min',
      'Avoid NSAIDs and contrast agents in CKD',
      'Early nephrology referral (GFR <30) improves outcomes'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/chronic-kidney-disease/chronic-kidney-disease'
  },

  // GASTROENTEROLOGY (Selected Topics)
  {
    topic: 'Gastroesophageal Reflux Disease',
    keywords: ['gerd', 'gastroesophageal reflux', 'acid reflux', 'heartburn', 'reflux disease'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, GERD results from inappropriate relaxation of the lower esophageal sphincter (LES), allowing gastric contents to reflux into the esophagus. Contributing factors include hiatal hernia, delayed gastric emptying, and increased intra-abdominal pressure. Chronic acid exposure causes esophageal mucosal injury, potentially leading to erosive esophagitis, strictures, Barrett\'s esophagus, and adenocarcinoma.',
    clinicalPresentation: 'Classic symptoms include heartburn (retrosternal burning) and regurgitation, typically worse after meals, when lying down, or bending over. Atypical presentations include chronic cough, laryngitis, asthma exacerbations, and dental erosions. Alarm symptoms (dysphagia, odynophagia, weight loss, GI bleeding) suggest complications. Physical examination is usually unremarkable.',
    diagnosticApproach: 'Diagnosis is often clinical in patients with typical symptoms. Empiric PPI trial is reasonable. Endoscopy indicated for alarm symptoms, refractory symptoms, or long-standing GERD (screen for Barrett\'s). Endoscopy may be normal (non-erosive reflux disease) or show erosive esophagitis, strictures, or Barrett\'s. Ambulatory pH monitoring confirms acid reflux in unclear cases. Esophageal manometry before anti-reflux surgery.',
    treatment: 'Lifestyle modifications: elevate head of bed, avoid late meals, lose weight, avoid trigger foods (fatty foods, chocolate, caffeine, alcohol). Pharmacotherapy: PPIs are most effective (omeprazole, esomeprazole). H2 blockers for mild symptoms. Antacids for immediate relief. Refractory GERD may require high-dose or twice-daily PPI. Surgical fundoplication for medication-refractory disease or patient preference. Endoscopic therapies emerging.',
    clinicalPearls: [
      'PPIs should be taken 30 minutes before meals for optimal effect',
      'Barrett\'s esophagus requires surveillance endoscopy',
      'Chronic PPI use associated with increased fracture risk and C. difficile',
      'Refractory symptoms may indicate non-acid reflux or functional disorder'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/esophageal-and-swallowing-disorders/gastroesophageal-reflux-disease-gerd'
  },

  {
    topic: 'Inflammatory Bowel Disease',
    keywords: ['inflammatory bowel disease', 'ibd', 'crohn disease', 'ulcerative colitis', 'crohns', 'uc'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, IBD comprises Crohn\'s disease and ulcerative colitis, chronic inflammatory conditions of the GI tract. Crohn\'s can affect any part of the GI tract (mouth to anus) with transmural inflammation and skip lesions. UC is limited to the colon with continuous mucosal inflammation starting from the rectum. Pathogenesis involves genetic susceptibility, environmental triggers, dysregulated immune response, and altered gut microbiome.',
    clinicalPresentation: 'Crohn\'s presents with abdominal pain, diarrhea (often non-bloody), weight loss, and perianal disease (fistulas, abscesses). Extraintestinal manifestations include arthritis, uveitis, erythema nodosum, and primary sclerosing cholangitis. UC presents with bloody diarrhea, urgency, tenesmus, and abdominal cramping. Severe colitis causes fever, tachycardia, and toxic megacolon. Both conditions have relapsing-remitting course.',
    diagnosticApproach: 'Diagnosis requires combination of clinical, endoscopic, histologic, and radiologic findings. Laboratory tests show anemia, elevated inflammatory markers (CRP, ESR), and fecal calprotectin. Colonoscopy with biopsies is essential: Crohn\'s shows skip lesions, cobblestoning, and non-caseating granulomas; UC shows continuous inflammation, loss of vascular pattern, and crypt abscesses. CT or MR enterography evaluates small bowel in Crohn\'s. Exclude infectious causes.',
    treatment: 'Induce and maintain remission. Mild-moderate UC: 5-ASA (mesalamine). Moderate-severe disease: corticosteroids for induction, then immunomodulators (azathioprine, 6-MP) or biologics (anti-TNF, anti-integrin, anti-IL-12/23) for maintenance. Crohn\'s: corticosteroids for flares, immunomodulators or biologics for maintenance. Severe disease may require hospitalization, IV steroids, or surgery. Nutritional support important. Monitor for complications: strictures, fistulas, abscesses, colorectal cancer.',
    clinicalPearls: [
      'Fecal calprotectin useful for monitoring disease activity',
      'Crohn\'s can cause B12 deficiency if terminal ileum involved',
      'UC increases colorectal cancer risk; surveillance colonoscopy needed',
      'Smoking worsens Crohn\'s but may improve UC (still recommend cessation)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/overview-of-inflammatory-bowel-disease'
  },

  // ENDOCRINE (Selected Topics)
  {
    topic: 'Diabetes Mellitus',
    keywords: ['diabetes', 'diabetes mellitus', 'type 1 diabetes', 'type 2 diabetes', 'dm', 't1dm', 't2dm', 'hyperglycemia'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, diabetes mellitus is characterized by chronic hyperglycemia due to defects in insulin secretion, insulin action, or both. Type 1 DM results from autoimmune destruction of pancreatic beta cells, causing absolute insulin deficiency. Type 2 DM involves insulin resistance and relative insulin deficiency. Chronic hyperglycemia causes microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (coronary, cerebrovascular, peripheral vascular disease) complications.',
    clinicalPresentation: 'Classic symptoms include polyuria, polydipsia, polyphagia, and weight loss. Type 1 typically presents acutely in children/young adults, often with diabetic ketoacidosis. Type 2 develops gradually in adults, often asymptomatic initially and detected on screening. Chronic complications include vision changes, numbness/tingling, slow-healing wounds, and recurrent infections. Physical examination may reveal acanthosis nigricans (insulin resistance), diabetic foot ulcers, or signs of complications.',
    diagnosticApproach: 'Diagnosis requires: fasting glucose ≥126 mg/dL, random glucose ≥200 mg/dL with symptoms, 2-hour OGTT ≥200 mg/dL, or A1C ≥6.5%. Confirm with repeat testing. C-peptide and autoantibodies (GAD, IA-2, ZnT8) differentiate type 1 from type 2. Screen for complications: annual dilated eye exam, urine albumin-to-creatinine ratio, foot exam, lipid panel, and cardiovascular risk assessment.',
    treatment: 'Type 1: intensive insulin therapy (basal-bolus regimen or insulin pump), carbohydrate counting, glucose monitoring. Type 2: lifestyle modification (diet, exercise, weight loss) first-line. Metformin is initial pharmacotherapy. Add SGLT2 inhibitor or GLP-1 agonist for cardiovascular/renal protection. Insulin for inadequate control. Target A1C <7% for most patients. Manage cardiovascular risk factors: statin, ACE inhibitor/ARB, aspirin. Screen and treat complications.',
    clinicalPearls: [
      'SGLT2 inhibitors and GLP-1 agonists reduce cardiovascular and renal events',
      'Metformin is contraindicated in severe renal impairment (eGFR <30)',
      'Tight glycemic control prevents microvascular complications',
      'Screen for diabetic retinopathy annually starting at diagnosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm'
  },

  {
    topic: 'Hypothyroidism',
    keywords: ['hypothyroidism', 'underactive thyroid', 'low thyroid', 'hashimoto', 'myxedema'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, hypothyroidism results from insufficient thyroid hormone production. Primary hypothyroidism (most common) involves thyroid gland dysfunction, typically due to Hashimoto\'s thyroiditis (autoimmune), radioiodine therapy, or thyroidectomy. Secondary hypothyroidism results from pituitary TSH deficiency. Thyroid hormones regulate metabolism, and deficiency causes widespread metabolic slowing.',
    clinicalPresentation: 'Symptoms develop gradually and include fatigue, cold intolerance, weight gain, constipation, dry skin, hair loss, and cognitive slowing. Physical examination reveals bradycardia, delayed deep tendon reflexes, periorbital edema, and non-pitting edema (myxedema). Severe hypothyroidism (myxedema coma) is life-threatening, presenting with hypothermia, altered mental status, and cardiovascular collapse.',
    diagnosticApproach: 'Diagnosis based on elevated TSH and low free T4 (primary hypothyroidism) or low TSH and low free T4 (secondary hypothyroidism). Subclinical hypothyroidism shows elevated TSH with normal free T4. TPO antibodies confirm Hashimoto\'s thyroiditis. Assess for other autoimmune diseases. Lipid panel often shows hyperlipidemia. ECG may show bradycardia and low voltage.',
    treatment: 'Levothyroxine (synthetic T4) is treatment of choice. Start low dose (25-50 mcg) in elderly or cardiac patients, higher dose (1.6 mcg/kg) in young healthy patients. Adjust dose based on TSH every 6-8 weeks until normalized. Take on empty stomach, 30-60 minutes before breakfast. Avoid concurrent calcium, iron, or PPI. Monitor TSH annually once stable. Treat myxedema coma with IV levothyroxine and supportive care.',
    clinicalPearls: [
      'TSH is best screening test for primary hypothyroidism',
      'Subclinical hypothyroidism (TSH 4.5-10) may not require treatment',
      'Pregnancy increases levothyroxine requirements by 30-50%',
      'Many medications interfere with levothyroxine absorption'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/thyroid-disorders/hypothyroidism'
  },

  {
    topic: 'Pheochromocytoma',
    keywords: ['pheochromocytoma', 'adrenal tumor', 'catecholamine excess', 'paraganglioma'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, pheochromocytoma is a catecholamine-secreting tumor arising from chromaffin cells of the adrenal medulla (90%) or extra-adrenal paraganglia (10%). The tumor secretes excessive epinephrine and norepinephrine, causing paroxysmal or sustained hypertension and hypermetabolic symptoms. About 25-30% are hereditary, associated with MEN 2, von Hippel-Lindau, neurofibromatosis type 1, or familial paraganglioma syndromes.',
    clinicalPresentation: 'Classic triad includes episodic headaches, sweating, and tachycardia. Patients experience paroxysmal hypertension, palpitations, anxiety, tremor, and pallor. Episodes may be triggered by abdominal pressure, certain foods (tyramine), or medications. Some patients have sustained hypertension. Physical examination during episode shows hypertension, tachycardia, and diaphoresis. Orthostatic hypotension may occur between episodes.',
    diagnosticApproach: 'Biochemical diagnosis: measure plasma free metanephrines or 24-hour urine fractionated metanephrines and catecholamines. Plasma free metanephrines have highest sensitivity. Avoid interfering medications (tricyclic antidepressants, decongestants). Once biochemically confirmed, localize tumor with CT or MRI of abdomen/pelvis. MIBG scan or PET scan for extra-adrenal or metastatic disease. Genetic testing for hereditary syndromes.',
    treatment: 'Surgical resection is curative. Preoperative preparation essential: alpha-blockade (phenoxybenzamine or doxazosin) for 7-14 days, then add beta-blocker if needed (never beta-blocker first - risk of unopposed alpha stimulation). Maintain high-salt diet and hydration. Laparoscopic adrenalectomy preferred. Intraoperative hypertensive crises managed with nitroprusside or phentolamine. Metastatic disease requires combination chemotherapy and targeted therapy.',
    clinicalPearls: [
      'Rule of 10s: 10% bilateral, 10% extra-adrenal, 10% malignant, 10% familial',
      'Never give beta-blocker before alpha-blockade (hypertensive crisis)',
      'Plasma free metanephrines are preferred screening test',
      'Screen family members if hereditary syndrome identified'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/adrenal-disorders/pheochromocytoma'
  },

  // HEMATOLOGY (Selected Topics)
  {
    topic: 'Anemia',
    keywords: ['anemia', 'low hemoglobin', 'low hematocrit', 'iron deficiency', 'anemic'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, anemia is defined as hemoglobin below normal range (men <13.5 g/dL, women <12 g/dL). Anemia results from decreased RBC production, increased destruction, or blood loss. Classification by MCV: microcytic (iron deficiency, thalassemia, chronic disease), normocytic (acute blood loss, hemolysis, chronic disease, renal failure), or macrocytic (B12/folate deficiency, alcohol, medications). Tissue hypoxia triggers compensatory mechanisms: increased cardiac output, 2,3-DPG production, and erythropoietin release.',
    clinicalPresentation: 'Symptoms depend on severity and rapidity of onset. Gradual anemia may be asymptomatic until severe. Common symptoms include fatigue, weakness, dyspnea on exertion, palpitations, and lightheadedness. Severe anemia causes chest pain, syncope, and heart failure. Physical examination reveals pallor (conjunctiva, palmar creases), tachycardia, flow murmur, and signs of underlying cause (koilonychia in iron deficiency, jaundice in hemolysis).',
    diagnosticApproach: 'CBC with differential and reticulocyte count. MCV guides classification. Iron studies (ferritin, iron, TIBC, transferrin saturation) for microcytic anemia. Peripheral smear evaluates RBC morphology. Hemolysis workup: LDH, haptoglobin, indirect bilirubin, Coombs test. B12 and folate levels for macrocytic anemia. Consider bone marrow biopsy for unexplained anemia. Identify and treat underlying cause.',
    treatment: 'Treat underlying cause. Iron deficiency: oral iron supplementation (ferrous sulfate 325 mg TID), IV iron if intolerant or malabsorption. B12 deficiency: IM or high-dose oral B12. Folate deficiency: oral folic acid. Anemia of chronic disease: treat underlying condition, consider ESAs if severe. Hemolytic anemia: treat cause, may require immunosuppression or splenectomy. Transfuse for symptomatic anemia or hemoglobin <7 g/dL (higher threshold in cardiac disease).',
    clinicalPearls: [
      'Ferritin <15 ng/mL is diagnostic of iron deficiency',
      'Reticulocyte count differentiates production vs. destruction/loss',
      'Pernicious anemia requires lifelong B12 supplementation',
      'Transfuse slowly in chronic anemia to avoid volume overload'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias/overview-of-anemia'
  },

  // NEUROLOGY (Selected Topics)
  {
    topic: 'Stroke',
    keywords: ['stroke', 'cva', 'cerebrovascular accident', 'brain attack', 'ischemic stroke', 'hemorrhagic stroke'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, stroke results from interruption of blood supply to the brain, causing neuronal injury and death. Ischemic stroke (87%) results from thrombotic or embolic arterial occlusion. Hemorrhagic stroke (13%) results from vessel rupture (intracerebral or subarachnoid). Risk factors include hypertension, diabetes, hyperlipidemia, atrial fibrillation, and smoking. Ischemic cascade begins within minutes, with irreversible damage in core and potentially salvageable penumbra.',
    clinicalPresentation: 'Sudden onset of focal neurological deficits: weakness, numbness, speech difficulty, vision loss, ataxia, or altered consciousness. Symptoms depend on vascular territory: anterior circulation (MCA) causes contralateral hemiparesis and aphasia; posterior circulation causes vertigo, diplopia, and ataxia. Hemorrhagic stroke often presents with severe headache, vomiting, and decreased consciousness. FAST assessment: Face drooping, Arm weakness, Speech difficulty, Time to call 911.',
    diagnosticApproach: 'Immediate non-contrast CT to exclude hemorrhage before thrombolysis. CT shows hyperdense vessel sign acutely, hypodensity develops over hours. MRI with diffusion-weighted imaging is more sensitive for acute ischemia. CT or MR angiography identifies large vessel occlusion. Evaluate for stroke etiology: ECG (atrial fibrillation), echocardiography (cardiac source), carotid ultrasound (stenosis), hypercoagulable workup in young patients.',
    treatment: 'Ischemic stroke: IV alteplase within 4.5 hours if eligible (no hemorrhage, recent surgery, or anticoagulation). Mechanical thrombectomy for large vessel occlusion within 24 hours. Aspirin 325 mg within 24-48 hours. Blood pressure management: permissive hypertension initially unless >220/120. Secondary prevention: antiplatelet therapy, statin, blood pressure control, anticoagulation for atrial fibrillation. Hemorrhagic stroke: blood pressure control, reverse anticoagulation, neurosurgical evaluation.',
    clinicalPearls: [
      'Time is brain - door-to-needle time <60 minutes for thrombolysis',
      'Mechanical thrombectomy extends treatment window to 24 hours',
      'Carotid endarterectomy for symptomatic stenosis >70%',
      'Dual antiplatelet therapy (aspirin + clopidogrel) for 21 days after minor stroke'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/overview-of-stroke'
  },

  // INFECTIOUS DISEASE (Selected Topics)
  {
    topic: 'Tuberculosis',
    keywords: ['tuberculosis', 'tb', 'mycobacterium tuberculosis', 'latent tb', 'active tb'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, tuberculosis is caused by Mycobacterium tuberculosis, transmitted via airborne droplets. Primary infection occurs when inhaled bacilli reach alveoli, where they are phagocytosed by macrophages. Most infections are contained by cell-mediated immunity, forming granulomas (latent TB). Reactivation occurs when immunity wanes, causing active disease. HIV, immunosuppression, malnutrition, and diabetes increase reactivation risk. Extrapulmonary TB can affect any organ.',
    clinicalPresentation: 'Latent TB is asymptomatic. Active pulmonary TB presents with chronic cough (>3 weeks), hemoptysis, fever, night sweats, and weight loss. Physical examination may reveal crackles, dullness to percussion, or be normal. Extrapulmonary TB: lymphadenitis (scrofula), meningitis, pericarditis, genitourinary, skeletal (Pott\'s disease). Miliary TB is disseminated disease with multi-organ involvement.',
    diagnosticApproach: 'Latent TB: tuberculin skin test (TST) or interferon-gamma release assay (IGRA). Positive test with normal chest X-ray indicates latent TB. Active TB: chest X-ray shows upper lobe infiltrates, cavitation, or miliary pattern. Sputum acid-fast bacilli (AFB) smear and culture (gold standard). Nucleic acid amplification test (NAAT) provides rapid diagnosis. Drug susceptibility testing essential. Extrapulmonary TB requires tissue/fluid sampling.',
    treatment: 'Latent TB: isoniazid for 9 months or rifampin for 4 months. Active TB: intensive phase (2 months) with isoniazid, rifampin, pyrazinamide, and ethambutol (RIPE), followed by continuation phase (4 months) with isoniazid and rifampin. Directly observed therapy (DOT) improves adherence. MDR-TB requires longer treatment with second-line drugs. Monitor for hepatotoxicity. Isolate patients until non-infectious (3 negative sputum smears).',
    clinicalPearls: [
      'Upper lobe cavitary lesions are classic for reactivation TB',
      'HIV patients with TB require longer treatment and ART',
      'Rifampin interacts with many medications (anticoagulants, antiretrovirals)',
      'Pyridoxine (vitamin B6) prevents isoniazid-induced neuropathy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/mycobacteria/tuberculosis-tb'
  },

  // EMERGENCY MEDICINE (Selected Topics)
  {
    topic: 'Sepsis',
    keywords: ['sepsis', 'septic shock', 'severe sepsis', 'septicemia', 'systemic infection'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, sepsis is life-threatening organ dysfunction caused by dysregulated host response to infection. Pathogen-associated molecular patterns (PAMPs) trigger excessive inflammatory response, causing endothelial dysfunction, increased vascular permeability, microvascular thrombosis, and tissue hypoperfusion. Septic shock involves persistent hypotension requiring vasopressors and lactate >2 mmol/L despite adequate fluid resuscitation. Multi-organ dysfunction syndrome (MODS) can develop.',
    clinicalPresentation: 'Sepsis presents with infection plus organ dysfunction: altered mental status, hypotension, tachypnea, hypoxemia, oliguria, or elevated lactate. Common sources include pneumonia, urinary tract, abdominal, and skin/soft tissue infections. Septic shock manifests as persistent hypotension, cold/clammy extremities, and signs of end-organ hypoperfusion. SIRS criteria (fever, tachycardia, tachypnea, leukocytosis) are sensitive but non-specific.',
    diagnosticApproach: 'Diagnosis requires suspected infection plus qSOFA ≥2 (altered mental status, SBP ≤100, RR ≥22) or SOFA score increase ≥2. Obtain blood cultures (before antibiotics), lactate, CBC, comprehensive metabolic panel, coagulation studies. Identify infection source: chest X-ray, urinalysis, imaging as indicated. Procalcitonin may support bacterial infection. Repeat lactate to assess response to treatment.',
    treatment: 'Early goal-directed therapy within 1 hour: broad-spectrum antibiotics, fluid resuscitation (30 mL/kg crystalloid), vasopressors (norepinephrine first-line) for persistent hypotension, source control. Antibiotics based on suspected source and local resistance patterns. De-escalate based on cultures. Maintain MAP ≥65 mmHg. Consider corticosteroids for refractory shock. Supportive care: mechanical ventilation, renal replacement therapy as needed. Monitor for complications.',
    clinicalPearls: [
      'Sepsis-3 criteria: infection + SOFA score increase ≥2',
      'Door-to-antibiotic time <1 hour improves survival',
      'Lactate >4 mmol/L indicates severe hypoperfusion',
      'Source control (drainage, debridement) is critical'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock'
  },

  // UROLOGY (Selected Topics)
  {
    topic: 'Urinary Tract Infection',
    keywords: ['urinary tract infection', 'uti', 'cystitis', 'pyelonephritis', 'bladder infection'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, UTI results from bacterial colonization of the urinary tract, most commonly by Escherichia coli (80-85%). Bacteria ascend from the urethra to bladder (cystitis) or kidneys (pyelonephritis). Risk factors include female sex, sexual activity, pregnancy, urinary obstruction, catheterization, and immunosuppression. Complicated UTI occurs in patients with structural/functional abnormalities or immunocompromise.',
    clinicalPresentation: 'Cystitis presents with dysuria, urinary frequency, urgency, suprapubic pain, and hematuria. Pyelonephritis adds fever, chills, flank pain, nausea, and vomiting. Physical examination in cystitis is often unremarkable. Pyelonephritis shows costovertebral angle tenderness. Elderly patients may present atypically with confusion or functional decline. Complicated UTI may present with sepsis.',
    diagnosticApproach: 'Urinalysis shows pyuria (>10 WBC/hpf), bacteriuria, and often hematuria. Nitrites and leukocyte esterase support diagnosis. Urine culture with >10^5 CFU/mL confirms infection and guides antibiotic selection. Blood cultures for pyelonephritis or sepsis. Imaging (renal ultrasound or CT) for complicated UTI, recurrent infections, or pyelonephritis not responding to treatment. Evaluate for structural abnormalities.',
    treatment: 'Uncomplicated cystitis: nitrofurantoin (5 days), trimethoprim-sulfamethoxazole (3 days), or fosfomycin (single dose). Avoid fluoroquinolones due to resistance and side effects. Pyelonephritis: fluoroquinolone or ceftriaxone, transition to oral based on culture. Duration 7-14 days. Complicated UTI requires longer treatment (10-14 days) and often IV antibiotics initially. Remove catheters if possible. Recurrent UTI may require prophylaxis or post-coital antibiotics.',
    clinicalPearls: [
      'Asymptomatic bacteriuria does not require treatment except in pregnancy',
      'Fluoroquinolones should be reserved for complicated UTI',
      'Cranberry products may reduce recurrent UTI in women',
      'Catheter-associated UTI requires catheter removal for cure'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-tract-infections-utis/overview-of-urinary-tract-infections-utis'
  },
];

/**
 * Search function to find relevant Merck Manual entries based on query
 * ENHANCED: Precise keyword matching to prevent content bleeding between topics
 */
export function searchMerckManualKnowledge(query: string): MerckManualEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(' ').filter(word => word.length > 2);
  
  const scoredEntries = merckManualKnowledge.map(entry => {
    let score = 0;
    
    // EXACT TOPIC MATCH - Highest priority (massive boost)
    if (entry.topic.toLowerCase() === lowerQuery) {
      score += 10000; // Dramatically increased for exact topic match
    } else if (entry.topic.toLowerCase().includes(lowerQuery) && lowerQuery.length > 4) {
      score += 100;
    }
    
    // EXACT KEYWORD MATCH - Very high priority
    entry.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      
      // Perfect exact match
      if (keywordLower === lowerQuery) {
        score += 5000; // Exact match gets huge boost
      }
      // Exact match with word boundaries (e.g., "endocarditis" matches "endocarditis" but not "myocarditis")
      else if (lowerQuery.split(' ').some(word => word === keywordLower)) {
        score += 3000;
      }
      // Keyword contains query as complete word (with boundaries)
      else if (new RegExp(`\\b${lowerQuery}\\b`).test(keywordLower) && lowerQuery.length > 3) {
        score += 1000;
      }
      // Partial match only if query is substantial and at start of keyword
      else if (keywordLower.startsWith(lowerQuery) && lowerQuery.length > 5) {
        score += 50;
      }
    });
    
    // MULTI-WORD QUERY MATCHING - Only for queries with multiple words
    if (queryWords.length > 1) {
      let multiWordScore = 0;
      let matchedWords = 0;
      
      queryWords.forEach(word => {
        entry.keywords.forEach(keyword => {
          const keywordLower = keyword.toLowerCase();
          // Check if keyword contains the word as a complete word
          if (new RegExp(`\\b${word}\\b`).test(keywordLower) && word.length > 3) {
            multiWordScore += 10;
            matchedWords++;
          }
        });
      });
      
      // Bonus if multiple words match
      if (matchedWords > 1) {
        score += multiWordScore * matchedWords;
      } else {
        score += multiWordScore;
      }
    }
    
    // SYSTEM MATCH - Very low priority, only as tiebreaker
    if (entry.system.toLowerCase().includes(lowerQuery)) {
      score += 1;
    }
    
    return { entry, score };
  });
  
  // Filter out very low scores to prevent irrelevant matches
  const MIN_SCORE_THRESHOLD = 10;
  
  // Return entries with score above threshold, sorted by score
  return scoredEntries
    .filter(item => item.score >= MIN_SCORE_THRESHOLD)
    .sort((a, b) => b.score - a.score)
    .map(item => item.entry)
    .slice(0, 3); // Return top 3 matches
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
