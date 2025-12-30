
/**
 * Heart Rhythm Society (HRS) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the Heart Rhythm Society.
 * The HRS provides evidence-based guidelines for cardiac arrhythmia management, device therapy,
 * and electrophysiology procedures.
 * 
 * INTEGRATION PHASE: HRS Guidelines (Phase 14)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - HRS guideline URL for reference
 */

export interface HRSGuidelineEntry {
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
  hrsUrl: string;
  publicationYear: number;
}

export const hrsGuidelinesKnowledge: HRSGuidelineEntry[] = [
  // ATRIAL FIBRILLATION MANAGEMENT
  {
    topic: 'Atrial Fibrillation Management - HRS/ACC/AHA 2023 Guideline',
    keywords: ['atrial fibrillation', 'afib', 'af', 'atrial flutter', 'rate control', 'rhythm control', 'cardioversion', 'ablation', 'catheter ablation', 'pulmonary vein isolation'],
    system: 'Cardiology',
    guidelineSummary: 'The 2023 HRS/ACC/AHA Guideline for the Diagnosis and Management of Atrial Fibrillation provides comprehensive, evidence-based recommendations for AF management. The guideline emphasizes early rhythm control, catheter ablation as first-line therapy for select patients, integrated care with the ABC pathway (Anticoagulation/Avoid stroke, Better symptom management, Cardiovascular and Comorbidity optimization), and shared decision-making. The guideline addresses rate control, rhythm control, anticoagulation, catheter ablation, surgical ablation, and management of AF in special populations.',
    classIRecommendations: [
      'In patients with AF, anticoagulation with a DOAC or warfarin is recommended based on CHA2DS2-VASc score to reduce stroke risk (Class I, Level A)',
      'In patients with symptomatic AF, rate control with beta-blockers or non-dihydropyridine calcium channel blockers is recommended (Class I, Level B)',
      'In patients with AF and rapid ventricular response causing hemodynamic instability, immediate electrical cardioversion is recommended (Class I, Level C)',
      'In patients with symptomatic paroxysmal AF, catheter ablation is recommended to improve symptoms and quality of life (Class I, Level A)',
      'In patients with AF and heart failure with reduced ejection fraction (HFrEF), catheter ablation is recommended to reduce mortality and HF hospitalizations (Class I, Level A)',
      'In patients with AF undergoing cardiac surgery, surgical ablation is recommended to restore sinus rhythm (Class I, Level A)',
      'In patients with AF, screening for and management of cardiovascular risk factors and comorbidities (hypertension, obesity, sleep apnea, diabetes) is recommended (Class I, Level B)',
      'In patients with AF, lifestyle modifications including weight loss, exercise, and alcohol reduction are recommended (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with symptomatic persistent AF, catheter ablation is reasonable as first-line therapy to improve symptoms and quality of life (Class IIA, Level B)',
      'In patients with AF and HFrEF, early rhythm control with catheter ablation is reasonable to reduce cardiovascular outcomes (Class IIA, Level B)',
      'In patients with AF, early rhythm control strategy (within 1 year of diagnosis) is reasonable to reduce cardiovascular events (Class IIA, Level B)',
      'In patients with AF and left atrial appendage thrombus despite anticoagulation, percutaneous LAA occlusion is reasonable (Class IIA, Level C)',
      'In patients with AF, hybrid convergent ablation (epicardial and endocardial) is reasonable for persistent AF refractory to catheter ablation (Class IIA, Level B)',
      'In patients with AF, pulsed field ablation is reasonable as an alternative to radiofrequency or cryoablation (Class IIA, Level B)',
      'In patients with AF and obesity (BMI ≥27), weight loss of ≥10% is reasonable to reduce AF burden (Class IIA, Level B)',
      'In patients with AF and sleep apnea, CPAP therapy is reasonable to reduce AF recurrence (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with asymptomatic AF, catheter ablation may be considered to reduce stroke risk and improve outcomes (Class IIB, Level B)',
      'In patients with persistent AF, antiarrhythmic drugs (amiodarone, dofetilide, sotalol) may be considered for rhythm control (Class IIB, Level B)',
      'In patients with AF, left atrial appendage occlusion may be considered as alternative to anticoagulation in select patients (Class IIB, Level B)',
      'In patients with AF and heart failure with preserved ejection fraction (HFpEF), catheter ablation may be considered to improve symptoms (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with AF, class IC antiarrhythmic drugs (flecainide, propafenone) should not be used in patients with structural heart disease or coronary artery disease (Class III, Level B)',
      'In patients with AF, dronedarone should not be used in patients with NYHA class III-IV heart failure or recent decompensation (Class III, Level B)',
      'In patients with AF, digoxin should not be used as sole agent for rate control in active patients (Class III, Level B)',
      'In patients with permanent AF with adequate rate control, rhythm control strategies are not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of the 2023 AF guideline requires a comprehensive, patient-centered approach using the ABC pathway. A (Anticoagulation/Avoid stroke): Assess stroke risk with CHA2DS2-VASc score; initiate DOAC (apixaban 5 mg BID, rivaroxaban 20 mg daily, edoxaban 60 mg daily, dabigatran 150 mg BID) if score ≥2 (men) or ≥3 (women). B (Better symptom management): For symptomatic AF, initiate rate control with beta-blocker (metoprolol, carvedilol) or non-DHP CCB (diltiazem, verapamil); target resting HR <110 bpm (lenient) or <80 bpm (strict). For persistent symptoms despite rate control, consider rhythm control: catheter ablation is first-line for paroxysmal AF and reasonable for persistent AF; antiarrhythmic drugs (amiodarone, dofetilide, sotalol) are alternatives. Early rhythm control (within 1 year) reduces cardiovascular events. For AF with HFrEF, catheter ablation reduces mortality and HF hospitalizations. C (Cardiovascular and Comorbidity optimization): Screen and treat hypertension (target <130/80), obesity (weight loss ≥10% if BMI ≥27), sleep apnea (CPAP), diabetes (HbA1c <7%), alcohol excess (≤1 drink/day women, ≤2 drinks/day men). Encourage exercise (150 min/week moderate intensity). For hemodynamically unstable AF with RVR, immediate electrical cardioversion. For elective cardioversion, ensure 3 weeks anticoagulation or TEE to exclude LAA thrombus. Post-ablation: continue anticoagulation based on CHA2DS2-VASc score (not rhythm status), monitor for recurrence with ECG/Holter at 3, 6, 12 months.',
    keyPoints: [
      'ABC pathway: Anticoagulation, Better symptom management, Cardiovascular optimization',
      'Catheter ablation is first-line for symptomatic paroxysmal AF',
      'Catheter ablation reduces mortality in AF with HFrEF',
      'Early rhythm control (within 1 year) reduces cardiovascular events',
      'DOACs preferred over warfarin for stroke prevention',
      'Rate control: beta-blocker or non-DHP CCB, target HR <110 bpm',
      'Lifestyle modifications: weight loss ≥10%, exercise, alcohol reduction, CPAP for sleep apnea',
      'Continue anticoagulation post-ablation based on CHA2DS2-VASc, not rhythm',
      'Avoid class IC drugs in structural heart disease',
      'Pulsed field ablation is emerging alternative to RF/cryo',
    ],
    hrsUrl: 'https://www.hrsonline.org/guidance/clinical-guidelines/atrial-fibrillation',
    publicationYear: 2023,
  },

  // VENTRICULAR ARRHYTHMIAS AND SUDDEN CARDIAC DEATH
  {
    topic: 'Ventricular Arrhythmias and Sudden Cardiac Death Prevention - HRS/ACC/AHA Guideline',
    keywords: ['ventricular tachycardia', 'vt', 'ventricular fibrillation', 'vf', 'sudden cardiac death', 'scd', 'icd', 'implantable cardioverter defibrillator', 'catheter ablation vt', 'premature ventricular contractions', 'pvcs'],
    system: 'Cardiology',
    guidelineSummary: 'The HRS/ACC/AHA Guideline for Management of Ventricular Arrhythmias and Prevention of Sudden Cardiac Death provides evidence-based recommendations for risk stratification, ICD therapy, catheter ablation, and medical management of ventricular arrhythmias. The guideline emphasizes primary prevention ICD for high-risk patients (LVEF ≤35%), secondary prevention ICD for survivors of cardiac arrest, catheter ablation for recurrent VT, and management of inherited arrhythmia syndromes (long QT, Brugada, ARVC, HCM).',
    classIRecommendations: [
      'In patients with prior MI, LVEF ≤35%, NYHA class II-III on optimal medical therapy, and life expectancy >1 year, ICD is recommended for primary prevention of SCD (Class I, Level A)',
      'In patients with non-ischemic cardiomyopathy, LVEF ≤35%, NYHA class II-III on optimal medical therapy for ≥3 months, and life expectancy >1 year, ICD is recommended for primary prevention (Class I, Level B)',
      'In patients with cardiac arrest due to VF or hemodynamically unstable VT not due to reversible cause, ICD is recommended for secondary prevention (Class I, Level A)',
      'In patients with sustained VT and structural heart disease, ICD is recommended (Class I, Level B)',
      'In patients with recurrent VT despite optimal medical therapy and ICD, catheter ablation is recommended (Class I, Level A)',
      'In patients with electrical storm (≥3 VT/VF episodes in 24 hours), catheter ablation is recommended (Class I, Level B)',
      'In patients with long QT syndrome and syncope or cardiac arrest, beta-blockers are recommended (Class I, Level B)',
      'In patients with Brugada syndrome and cardiac arrest, ICD is recommended (Class I, Level B)',
      'In patients with hypertrophic cardiomyopathy and high SCD risk (≥6% 5-year risk), ICD is recommended (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with LVEF 36-40% and other SCD risk factors, ICD is reasonable for primary prevention (Class IIA, Level C)',
      'In patients with non-ischemic cardiomyopathy and LVEF ≤35% on optimal medical therapy for <3 months, wearable cardioverter-defibrillator (WCD) is reasonable as bridge to ICD decision (Class IIA, Level B)',
      'In patients with frequent PVCs (>10,000/24 hours) and LV dysfunction, catheter ablation is reasonable to improve LV function (Class IIA, Level B)',
      'In patients with VT and prior MI, catheter ablation is reasonable as adjunct to ICD to reduce VT recurrence (Class IIA, Level B)',
      'In patients with long QT syndrome and QTc >500 ms without symptoms, ICD is reasonable (Class IIA, Level B)',
      'In patients with arrhythmogenic right ventricular cardiomyopathy (ARVC) and high SCD risk, ICD is reasonable (Class IIA, Level B)',
      'In patients with cardiac sarcoidosis and LVEF <50% or spontaneous VT, ICD is reasonable (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with LVEF 36-50% and other risk factors, ICD may be considered for primary prevention (Class IIB, Level C)',
      'In patients with frequent PVCs without LV dysfunction, catheter ablation may be considered for symptom relief (Class IIB, Level C)',
      'In patients with Brugada syndrome and syncope of unknown etiology, ICD may be considered (Class IIB, Level C)',
      'In patients with catecholaminergic polymorphic VT (CPVT), left cardiac sympathetic denervation may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with NYHA class IV heart failure refractory to medical therapy who are not candidates for transplant or LVAD, ICD is not recommended (Class III, Level C)',
      'In patients with life expectancy <1 year, ICD is not recommended (Class III, Level C)',
      'In patients with incessant VT or VF, ICD implantation should be deferred until arrhythmia is controlled (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of VT/SCD prevention guidelines requires systematic risk stratification and appropriate device selection. Primary prevention: For ischemic cardiomyopathy (prior MI >40 days), assess LVEF; if ≤35% with NYHA II-III on optimal GDMT (ACE-I/ARB/ARNI, beta-blocker, MRA, SGLT2i) for ≥3 months and life expectancy >1 year, implant ICD. For non-ischemic cardiomyopathy, same criteria but ensure GDMT for ≥3 months (consider WCD as bridge). For LVEF 36-40%, consider ICD if additional risk factors (non-sustained VT, late gadolinium enhancement on MRI, genetic mutation). Secondary prevention: For cardiac arrest survivors or sustained VT, implant ICD after excluding reversible causes (acute MI, electrolyte abnormalities, drug toxicity). For recurrent VT despite ICD and antiarrhythmic drugs (amiodarone, sotalol), perform catheter ablation: substrate modification for scar-related VT, epicardial ablation if endocardial fails. For electrical storm (≥3 VT/VF in 24 hours), emergent catheter ablation + IV amiodarone + sedation/intubation if needed. Inherited arrhythmia syndromes: Long QT - beta-blockers (nadolol, propranolol), avoid QT-prolonging drugs, ICD if syncope/arrest or QTc >500 ms; Brugada - ICD if arrest or syncope, avoid sodium channel blockers; HCM - ICD if 5-year SCD risk ≥6% (calculate with HCM Risk-SCD calculator); ARVC - ICD if sustained VT/VF or high risk. PVC management: If >10,000/24 hours with LV dysfunction, catheter ablation improves LVEF; if symptomatic without LV dysfunction, consider ablation for QOL.',
    keyPoints: [
      'Primary prevention ICD: LVEF ≤35%, NYHA II-III, optimal GDMT ≥3 months, life expectancy >1 year',
      'Secondary prevention ICD: cardiac arrest survivor or sustained VT',
      'Catheter ablation for recurrent VT despite ICD and medications',
      'Electrical storm requires emergent catheter ablation',
      'WCD as bridge to ICD decision in new-onset cardiomyopathy',
      'Long QT: beta-blockers, ICD if syncope or QTc >500 ms',
      'Brugada: ICD if arrest or syncope',
      'HCM: ICD if 5-year SCD risk ≥6%',
      'Frequent PVCs (>10,000/24h) with LV dysfunction: catheter ablation improves LVEF',
      'Avoid ICD if NYHA IV refractory, life expectancy <1 year, or incessant VT/VF',
    ],
    hrsUrl: 'https://www.hrsonline.org/guidance/clinical-guidelines/ventricular-arrhythmias',
    publicationYear: 2022,
  },

  // CARDIAC IMPLANTABLE ELECTRONIC DEVICES
  {
    topic: 'Cardiac Implantable Electronic Devices - HRS/ACC/AHA Guideline',
    keywords: ['pacemaker', 'icd', 'crt', 'cardiac resynchronization therapy', 'crt-d', 'crt-p', 'biventricular pacing', 'device infection', 'lead extraction', 'remote monitoring'],
    system: 'Cardiology',
    guidelineSummary: 'The HRS/ACC/AHA Guideline for Cardiac Implantable Electronic Devices provides comprehensive recommendations for pacemaker, ICD, and CRT implantation, programming, follow-up, and management of complications. The guideline emphasizes appropriate device selection, infection prevention, remote monitoring, lead management, and shared decision-making. Key topics include indications for pacing (sinus node dysfunction, AV block), CRT for heart failure, device infections, lead extraction, and end-of-life device management.',
    classIRecommendations: [
      'In patients with symptomatic sinus node dysfunction, permanent pacemaker is recommended (Class I, Level B)',
      'In patients with third-degree AV block or advanced second-degree AV block, permanent pacemaker is recommended (Class I, Level B)',
      'In patients with symptomatic bradycardia due to AV block, permanent pacemaker is recommended (Class I, Level C)',
      'In patients with HFrEF (LVEF ≤35%), NYHA class II-IV, sinus rhythm, QRS ≥150 ms with LBBB, CRT is recommended (Class I, Level A)',
      'In patients with HFrEF requiring ventricular pacing >40%, CRT is recommended to prevent pacing-induced cardiomyopathy (Class I, Level A)',
      'In patients with CIED infection, complete device and lead removal is recommended (Class I, Level B)',
      'In patients with CIED, remote monitoring is recommended to detect device issues and arrhythmias (Class I, Level A)',
      'In patients with CIED, antibiotic prophylaxis (cefazolin or vancomycin) at implantation is recommended to prevent infection (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with HFrEF (LVEF ≤35%), NYHA class II-IV, sinus rhythm, QRS 120-149 ms with LBBB, CRT is reasonable (Class IIA, Level B)',
      'In patients with atrial fibrillation and HFrEF requiring ventricular pacing, CRT is reasonable (Class IIA, Level B)',
      'In patients with CIED and pocket infection without systemic signs, device removal is reasonable (Class IIA, Level B)',
      'In patients with abandoned leads and new CIED implantation, lead extraction is reasonable if venous access is limited (Class IIA, Level C)',
      'In patients with leadless pacemaker indication (single-chamber ventricular pacing), leadless pacemaker is reasonable (Class IIA, Level B)',
      'In patients with subcutaneous ICD indication and no pacing needs, S-ICD is reasonable (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with HFrEF and QRS <120 ms, CRT may be considered if other indications present (Class IIB, Level C)',
      'In patients with asymptomatic Mobitz II AV block, permanent pacemaker may be considered (Class IIB, Level C)',
      'In patients with CIED and non-functional leads without infection, lead extraction may be considered (Class IIB, Level C)',
      'In patients with conduction system pacing indication, His bundle pacing or left bundle branch pacing may be considered (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with asymptomatic first-degree AV block, permanent pacemaker is not recommended (Class III, Level C)',
      'In patients with CIED and lead fracture without infection, routine lead extraction is not recommended (Class III, Level C)',
      'In patients with end-stage disease and poor prognosis, new CIED implantation is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of CIED guidelines requires systematic assessment of indications and appropriate device selection. Pacemaker indications: Symptomatic sinus node dysfunction (sinus bradycardia, sinus pauses, chronotropic incompetence) - implant dual-chamber pacemaker (DDD) or single-chamber atrial pacemaker (AAI) if no AV block. Third-degree or advanced second-degree AV block - implant dual-chamber pacemaker (DDD) or single-chamber ventricular pacemaker (VVI) if chronic AF. Symptomatic Mobitz II AV block - implant pacemaker. CRT indications: HFrEF (LVEF ≤35%), NYHA II-IV on optimal GDMT, sinus rhythm, QRS ≥150 ms with LBBB - implant CRT-D (if ICD indicated) or CRT-P (if no ICD indication). For QRS 120-149 ms with LBBB, CRT is reasonable. For AF with HFrEF requiring ventricular pacing, CRT is reasonable. Device infection management: Complete device and lead removal is required for pocket infection, lead endocarditis, or systemic infection. Administer IV antibiotics (vancomycin + gentamicin or ceftriaxone) for 2-4 weeks before reimplantation. Use antibiotic prophylaxis (cefazolin 1-2 g IV or vancomycin 1 g IV) at implantation. Remote monitoring: Enroll all patients in remote monitoring to detect lead fractures, battery depletion, arrhythmias, and inappropriate shocks. Follow-up: In-person visits at 2-12 weeks post-implant, then every 3-12 months depending on device type. Lead extraction: Indicated for CIED infection, lead malfunction with venous occlusion, or multiple abandoned leads. Perform in experienced centers with cardiac surgery backup. End-of-life: Discuss ICD deactivation with patients with terminal illness; pacemaker can remain active.',
    keyPoints: [
      'Pacemaker for symptomatic sinus node dysfunction or AV block',
      'CRT for HFrEF (LVEF ≤35%), NYHA II-IV, QRS ≥150 ms with LBBB',
      'CRT prevents pacing-induced cardiomyopathy if ventricular pacing >40%',
      'Complete device removal for CIED infection',
      'Antibiotic prophylaxis (cefazolin or vancomycin) at implantation',
      'Remote monitoring for all CIED patients',
      'Lead extraction for infection, venous occlusion, or multiple abandoned leads',
      'Leadless pacemaker for single-chamber ventricular pacing',
      'S-ICD for patients without pacing needs',
      'Discuss ICD deactivation in end-of-life care',
    ],
    hrsUrl: 'https://www.hrsonline.org/guidance/clinical-guidelines/cardiac-devices',
    publicationYear: 2021,
  },

  // CATHETER ABLATION OF SUPRAVENTRICULAR TACHYCARDIA
  {
    topic: 'Catheter Ablation of Supraventricular Tachycardia - HRS/ACC/AHA Guideline',
    keywords: ['supraventricular tachycardia', 'svt', 'avnrt', 'avrt', 'wpw', 'wolff parkinson white', 'atrial tachycardia', 'catheter ablation svt', 'accessory pathway', 'atrioventricular nodal reentrant tachycardia'],
    system: 'Cardiology',
    guidelineSummary: 'The HRS/ACC/AHA Guideline for Catheter Ablation of Supraventricular Tachycardia provides evidence-based recommendations for diagnosis and catheter ablation of SVT, including AVNRT, AVRT (WPW), atrial tachycardia, and atrial flutter. The guideline emphasizes catheter ablation as first-line therapy for symptomatic SVT, high success rates (>95%), low complication rates (<1%), and superiority over long-term antiarrhythmic drug therapy. The guideline addresses acute management, ablation techniques, and management of recurrence.',
    classIRecommendations: [
      'In patients with symptomatic AVNRT, catheter ablation is recommended as first-line therapy (Class I, Level B)',
      'In patients with symptomatic AVRT due to accessory pathway (WPW), catheter ablation is recommended (Class I, Level B)',
      'In patients with WPW and high-risk features (shortest pre-excited RR interval <250 ms, symptomatic arrhythmia), catheter ablation is recommended even if asymptomatic (Class I, Level B)',
      'In patients with symptomatic atrial flutter, catheter ablation is recommended as first-line therapy (Class I, Level A)',
      'In patients with symptomatic focal atrial tachycardia, catheter ablation is recommended (Class I, Level B)',
      'In patients with SVT and hemodynamic instability, immediate electrical cardioversion is recommended (Class I, Level C)',
      'In patients with acute SVT, vagal maneuvers (Valsalva, carotid massage) are recommended as initial therapy (Class I, Level B)',
      'In patients with acute AVNRT or AVRT, adenosine 6-12 mg IV rapid push is recommended for acute termination (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with asymptomatic WPW and high-risk occupation (pilot, athlete, driver), catheter ablation is reasonable (Class IIA, Level C)',
      'In patients with infrequent symptomatic SVT who prefer definitive therapy, catheter ablation is reasonable (Class IIA, Level B)',
      'In patients with SVT and failed vagal maneuvers, IV diltiazem or metoprolol is reasonable for acute rate control (Class IIA, Level B)',
      'In patients with recurrent SVT after initial ablation, repeat catheter ablation is reasonable (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with asymptomatic WPW without high-risk features, catheter ablation may be considered (Class IIB, Level C)',
      'In patients with infrequent, well-tolerated SVT, antiarrhythmic drugs (beta-blockers, calcium channel blockers) may be considered as alternative to ablation (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with asymptomatic WPW and low-risk features, routine catheter ablation is not recommended (Class III, Level C)',
      'In patients with SVT, long-term antiarrhythmic drug therapy is not recommended as first-line when catheter ablation is available (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from observational studies and randomized trials',
    clinicalImplementation: 'Implementation of SVT ablation guidelines requires accurate diagnosis and appropriate patient selection. Diagnosis: Obtain 12-lead ECG during tachycardia to differentiate AVNRT (narrow QRS, no visible P waves or pseudo-R\' in V1), AVRT (narrow QRS, P wave in ST segment), atrial tachycardia (P wave morphology different from sinus), atrial flutter (sawtooth pattern in inferior leads). Acute management: Vagal maneuvers (Valsalva with legs elevated, carotid massage) terminate 20-30% of SVT. If unsuccessful, adenosine 6 mg IV rapid push (increase to 12 mg if no response); have continuous ECG monitoring and crash cart available. Alternative: IV diltiazem 0.25 mg/kg or metoprolol 5 mg IV. For hemodynamically unstable SVT, immediate synchronized cardioversion 50-100 J. Catheter ablation: AVNRT - slow pathway modification with radiofrequency ablation near coronary sinus os; success rate >95%, risk of AV block <1%. AVRT/WPW - ablation of accessory pathway; success rate >95%, risk of AV block <1% (higher for septal pathways). Atrial flutter - cavotricuspid isthmus ablation; success rate >95%, low complication rate. Focal atrial tachycardia - ablation of focal source; success rate 85-90%. High-risk WPW: Shortest pre-excited RR interval <250 ms during AF (risk of VF), symptomatic arrhythmia, high-risk occupation - recommend ablation even if asymptomatic. Post-ablation: Monitor for 4-6 hours, discharge same day if stable. Recurrence rate 5-10%; repeat ablation has similar success rate. Long-term antiarrhythmic drugs (beta-blockers, CCBs, flecainide) are alternative if ablation declined or failed, but less effective than ablation.',
    keyPoints: [
      'Catheter ablation is first-line therapy for symptomatic SVT',
      'AVNRT: slow pathway modification, success >95%, AV block risk <1%',
      'AVRT/WPW: accessory pathway ablation, success >95%',
      'Atrial flutter: cavotricuspid isthmus ablation, success >95%',
      'High-risk WPW (shortest RR <250 ms): ablation even if asymptomatic',
      'Acute SVT: vagal maneuvers, then adenosine 6-12 mg IV',
      'Hemodynamically unstable SVT: immediate cardioversion',
      'Recurrence rate 5-10%, repeat ablation has similar success',
      'Ablation superior to long-term antiarrhythmic drugs',
      'Same-day discharge after uncomplicated ablation',
    ],
    hrsUrl: 'https://www.hrsonline.org/guidance/clinical-guidelines/svt-ablation',
    publicationYear: 2020,
  },

  // BRADYCARDIA AND CARDIAC CONDUCTION DELAY
  {
    topic: 'Bradycardia and Cardiac Conduction Delay - HRS/ACC/AHA Guideline',
    keywords: ['bradycardia', 'sinus bradycardia', 'av block', 'first degree av block', 'second degree av block', 'third degree av block', 'complete heart block', 'mobitz type i', 'mobitz type ii', 'bundle branch block', 'bifascicular block'],
    system: 'Cardiology',
    guidelineSummary: 'The HRS/ACC/AHA Guideline for Evaluation and Management of Bradycardia and Cardiac Conduction Delay provides comprehensive recommendations for diagnosis, risk stratification, and management of bradyarrhythmias. The guideline emphasizes correlation of symptoms with bradycardia, identification of reversible causes, appropriate use of permanent pacemaker therapy, and avoidance of unnecessary pacing. Key topics include sinus node dysfunction, AV block, bundle branch block, and pacing indications.',
    classIRecommendations: [
      'In patients with symptomatic sinus bradycardia, permanent pacemaker is recommended (Class I, Level B)',
      'In patients with symptomatic chronotropic incompetence, permanent pacemaker is recommended (Class I, Level B)',
      'In patients with third-degree AV block, permanent pacemaker is recommended (Class I, Level B)',
      'In patients with symptomatic second-degree AV block (Mobitz I or II), permanent pacemaker is recommended (Class I, Level B)',
      'In patients with alternating bundle branch block, permanent pacemaker is recommended (Class I, Level C)',
      'In patients with AV block due to neuromuscular disease (myotonic dystrophy, Kearns-Sayre), permanent pacemaker is recommended (Class I, Level B)',
      'In patients with bradycardia, evaluation for reversible causes (medications, hypothyroidism, sleep apnea, electrolyte abnormalities) is recommended (Class I, Level C)',
    ],
    classIIARecommendations: [
      'In patients with asymptomatic third-degree AV block with ventricular rate ≥40 bpm, permanent pacemaker is reasonable (Class IIA, Level B)',
      'In patients with asymptomatic Mobitz II AV block, permanent pacemaker is reasonable (Class IIA, Level B)',
      'In patients with sinus node dysfunction and heart rate <40 bpm while awake without symptoms, permanent pacemaker is reasonable if no reversible cause (Class IIA, Level C)',
      'In patients with bifascicular block and syncope without other cause, permanent pacemaker is reasonable (Class IIA, Level B)',
      'In patients with first-degree AV block (PR >300 ms) and LV dysfunction, permanent pacemaker is reasonable (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with asymptomatic sinus bradycardia <40 bpm while awake, permanent pacemaker may be considered (Class IIB, Level C)',
      'In patients with asymptomatic Mobitz I AV block, permanent pacemaker may be considered if block is infra-Hisian (Class IIB, Level C)',
      'In patients with bifascicular block without symptoms, permanent pacemaker may be considered if HV interval ≥100 ms on EP study (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with asymptomatic first-degree AV block, permanent pacemaker is not recommended (Class III, Level C)',
      'In patients with asymptomatic Mobitz I AV block at AV node level, permanent pacemaker is not recommended (Class III, Level C)',
      'In patients with bradycardia due to reversible causes (medications, sleep apnea), permanent pacemaker is not recommended until cause is addressed (Class III, Level C)',
      'In patients with vasovagal syncope without documented bradycardia, permanent pacemaker is not recommended (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies',
    clinicalImplementation: 'Implementation of bradycardia guidelines requires systematic evaluation to correlate symptoms with bradycardia and exclude reversible causes. Evaluation: Obtain 12-lead ECG, ambulatory ECG monitoring (Holter 24-48 hours or event monitor 2-4 weeks), and correlate symptoms with heart rate. Assess for reversible causes: medications (beta-blockers, CCBs, digoxin, amiodarone, ivabradine), hypothyroidism (TSH), sleep apnea (sleep study), electrolyte abnormalities (K+, Mg2+), increased vagal tone (athletes). Sinus node dysfunction: Symptomatic sinus bradycardia (<50 bpm with symptoms), sinus pauses >3 seconds with symptoms, chronotropic incompetence (inability to increase HR with exercise) - implant pacemaker (DDD or AAI). Asymptomatic sinus bradycardia <40 bpm while awake without reversible cause - pacemaker is reasonable. AV block: Third-degree (complete heart block) - pacemaker indicated regardless of symptoms. Symptomatic second-degree AV block (Mobitz I or II) - pacemaker indicated. Asymptomatic Mobitz II - pacemaker reasonable (high risk of progression). Asymptomatic Mobitz I at AV node level - no pacemaker (benign). First-degree AV block (PR >200 ms) - no pacemaker unless PR >300 ms with LV dysfunction. Bundle branch block: Alternating BBB (RBBB alternating with LBBB) - pacemaker indicated (high risk of complete heart block). Bifascicular block (RBBB + LAFB or LPFB) with syncope - pacemaker reasonable. Asymptomatic bifascicular block - no pacemaker unless HV interval ≥100 ms on EP study. Pacemaker selection: DDD (dual-chamber) for sinus node dysfunction with intact AV conduction, VVI (single-chamber ventricular) for chronic AF with AV block, AAI (single-chamber atrial) for sinus node dysfunction without AV block (rare). Post-implant: Follow-up at 2-12 weeks, then every 3-12 months.',
    keyPoints: [
      'Correlate symptoms with bradycardia before pacemaker implantation',
      'Evaluate and treat reversible causes (medications, hypothyroidism, sleep apnea)',
      'Symptomatic sinus bradycardia or chronotropic incompetence: pacemaker indicated',
      'Third-degree AV block: pacemaker indicated regardless of symptoms',
      'Symptomatic second-degree AV block: pacemaker indicated',
      'Asymptomatic Mobitz II: pacemaker reasonable (high risk of progression)',
      'Alternating BBB: pacemaker indicated',
      'Bifascicular block with syncope: pacemaker reasonable',
      'Asymptomatic first-degree AV block: no pacemaker',
      'DDD pacemaker for sinus node dysfunction, VVI for chronic AF with AV block',
    ],
    hrsUrl: 'https://www.hrsonline.org/guidance/clinical-guidelines/bradycardia',
    publicationYear: 2018,
  },
];

/**
 * Search function to find relevant HRS guideline entries based on query
 */
export function searchHRSGuidelines(query: string): HRSGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = hrsGuidelinesKnowledge.map(entry => {
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

  console.log(`HRS Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get HRS guideline by exact topic name
 */
export function getHRSGuidelineByTopic(topic: string): HRSGuidelineEntry | undefined {
  return hrsGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all HRS guidelines for a specific system
 */
export function getHRSGuidelinesBySystem(system: string): HRSGuidelineEntry[] {
  return hrsGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
