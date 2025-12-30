
/**
 * ASA (American Stroke Association) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American Stroke Association.
 * ASA provides evidence-based guidelines for stroke prevention, diagnosis, treatment, and rehabilitation.
 * 
 * INTEGRATION PHASE: ASA Guidelines (Phase 25 - Neurology Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Class I = Strong, Class IIa = Moderate, Class IIb = Weak, Class III = Not Recommended)
 * - Level of Evidence (A = High, B-R = Moderate randomized, B-NR = Moderate non-randomized, C-LD = Low, C-EO = Expert Opinion)
 * - Clinical implementation guidance
 * - ASA guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from ASA guidelines but presented
 * in an original format for medical education purposes.
 */

export interface ASAGuidelineEntry {
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
  asaUrl: string;
  publicationYear: number;
}

export const asaGuidelinesKnowledge: ASAGuidelineEntry[] = [
  // ACUTE ISCHEMIC STROKE
  {
    topic: 'Acute Ischemic Stroke - ASA/AHA Guideline',
    keywords: ['acute ischemic stroke', 'ischemic stroke', 'stroke', 'cerebral infarction', 'asa stroke', 'stroke guideline', 'tpa', 'alteplase', 'thrombectomy', 'stroke treatment'],
    system: 'Neurology',
    guidelineSummary: 'The ASA/AHA guideline for acute ischemic stroke provides comprehensive evidence-based recommendations for early recognition, diagnosis, and treatment. The guideline emphasizes rapid assessment using validated stroke scales (NIHSS), immediate neuroimaging (non-contrast CT or MRI), and time-sensitive interventions. Intravenous alteplase (tPA) within 4.5 hours of symptom onset improves outcomes for eligible patients. Mechanical thrombectomy for large vessel occlusion within 6-24 hours (selected patients) dramatically improves functional outcomes. Blood pressure management, antiplatelet therapy, and secondary stroke prevention are critical. Stroke systems of care with organized protocols reduce door-to-needle time and improve outcomes.',
    classIRecommendations: [
      'Patients with suspected acute stroke should be transported rapidly to the closest appropriate stroke center (Class I, Level of Evidence B-NR)',
      'All patients with suspected acute stroke should undergo brain imaging (non-contrast CT or MRI) immediately upon arrival to exclude hemorrhage (Class I, Level of Evidence A)',
      'Intravenous alteplase (0.9 mg/kg, maximum 90 mg) is recommended for eligible patients within 3 hours of symptom onset (Class I, Level of Evidence A)',
      'Intravenous alteplase is recommended for eligible patients within 3 to 4.5 hours of symptom onset (Class I, Level of Evidence B-R)',
      'Mechanical thrombectomy with a stent retriever is recommended for eligible patients with acute ischemic stroke due to large vessel occlusion in the anterior circulation within 6 hours of symptom onset (Class I, Level of Evidence A)',
      'Mechanical thrombectomy is recommended for eligible patients with acute ischemic stroke due to large vessel occlusion in the anterior circulation within 6 to 16 hours of last known well who meet DAWN or DEFUSE 3 criteria (Class I, Level of Evidence A)',
      'Mechanical thrombectomy is recommended for eligible patients with acute ischemic stroke due to large vessel occlusion in the anterior circulation within 16 to 24 hours of last known well who meet DAWN or DEFUSE 3 criteria (Class I, Level of Evidence B-R)',
      'Aspirin (initial dose 325 mg) is recommended within 24 to 48 hours after stroke onset for most patients (Class I, Level of Evidence A)',
      'Blood pressure should not be lowered in the first 24 hours after acute ischemic stroke unless blood pressure is >220/120 mmHg or patient is receiving thrombolytic therapy (Class I, Level of Evidence C-EO)',
    ],
    classIIARecommendations: [
      'Intravenous alteplase is reasonable for eligible patients with mild but disabling stroke symptoms (Class IIa, Level of Evidence B-R)',
      'Intravenous alteplase is reasonable for eligible patients with rapidly improving stroke symptoms that remain moderate to severe and potentially disabling (Class IIa, Level of Evidence C-LD)',
      'Mechanical thrombectomy is reasonable for eligible patients with acute ischemic stroke due to large vessel occlusion in the anterior circulation who have prestroke modified Rankin Scale score 0-1, causative occlusion of the internal carotid artery or middle cerebral artery M1 segment, age ≥18 years, NIHSS score ≥6, and ASPECTS ≥6 within 6 hours of symptom onset (Class IIa, Level of Evidence B-R)',
      'Mechanical thrombectomy is reasonable for carefully selected patients with acute ischemic stroke due to large vessel occlusion in the anterior circulation within 6 to 24 hours of last known well who do not meet DAWN or DEFUSE 3 criteria (Class IIa, Level of Evidence C-LD)',
      'Dual antiplatelet therapy (aspirin plus clopidogrel) for 21 days is reasonable for patients with minor stroke (NIHSS 0-3) or high-risk TIA (ABCD2 ≥4) within 24 hours of symptom onset (Class IIa, Level of Evidence B-R)',
      'Blood pressure lowering is reasonable for patients with blood pressure >220/120 mmHg who are not receiving thrombolytic therapy (Class IIa, Level of Evidence C-LD)',
      'For patients receiving intravenous alteplase, blood pressure should be maintained <180/105 mmHg for at least 24 hours (Class IIa, Level of Evidence B-NR)',
    ],
    classIIBRecommendations: [
      'Intravenous alteplase may be considered for eligible patients with seizure at stroke onset if evidence suggests residual impairments are secondary to stroke and not a postictal phenomenon (Class IIb, Level of Evidence C-LD)',
      'Intravenous alteplase may be considered for eligible patients taking direct oral anticoagulants (DOACs) if appropriate laboratory tests are normal or patient has not received a dose of DOAC for >48 hours (Class IIb, Level of Evidence C-LD)',
      'Mechanical thrombectomy may be considered for carefully selected patients with acute ischemic stroke due to large vessel occlusion in the posterior circulation (basilar or posterior cerebral artery) (Class IIb, Level of Evidence C-LD)',
      'Permissive hypertension (allowing blood pressure to remain elevated) may be reasonable in the acute phase to maintain cerebral perfusion (Class IIb, Level of Evidence C-EO)',
    ],
    classIIIRecommendations: [
      'Intravenous alteplase should not be administered to patients with acute ischemic stroke with intracranial hemorrhage on initial CT or MRI (Class III, Level of Evidence A)',
      'Intravenous alteplase should not be administered to patients with acute ischemic stroke with clinical presentation suggestive of subarachnoid hemorrhage even if initial CT is normal (Class III, Level of Evidence C-EO)',
      'Intravenous alteplase should not be administered to patients with acute ischemic stroke with active internal bleeding (Class III, Level of Evidence C-EO)',
      'Aggressive blood pressure lowering in the first 24 hours after acute ischemic stroke is not recommended unless blood pressure is extremely elevated or patient is receiving thrombolytic therapy (Class III, Level of Evidence B-R)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are based on Level A (High quality evidence from multiple randomized trials including NINDS, ECASS III, IST-3, EXTEND, MR CLEAN, DAWN, DEFUSE 3), Level B-R (Moderate quality evidence from randomized trials), and Level B-NR (Moderate quality evidence from non-randomized studies); Class IIa and IIb recommendations are based on Level B-R, B-NR, C-LD (Low quality evidence), and C-EO (Expert Opinion)',
    clinicalImplementation: 'Implementation of ASA/AHA acute ischemic stroke guidelines requires organized stroke systems of care with rapid assessment and treatment protocols. PREHOSPITAL CARE: Emergency medical services (EMS) should use validated prehospital stroke scales (Cincinnati Prehospital Stroke Scale, Los Angeles Prehospital Stroke Screen) to identify stroke patients. Rapid transport to closest appropriate stroke center (Primary Stroke Center, Comprehensive Stroke Center, or Thrombectomy-Capable Stroke Center). Prehospital notification allows hospital preparation and reduces door-to-needle time. EMERGENCY DEPARTMENT EVALUATION: Immediate assessment upon arrival - target door-to-imaging time <20 minutes, door-to-needle time <60 minutes for tPA, door-to-puncture time <90 minutes for thrombectomy. Rapid clinical assessment: NIHSS score (quantifies stroke severity), vital signs, blood glucose, oxygen saturation. Immediate non-contrast CT head or MRI brain to exclude hemorrhage and assess for early ischemic changes. CT angiography (CTA) or MR angiography (MRA) to identify large vessel occlusion for thrombectomy consideration. Laboratory: CBC, PT/INR, aPTT, glucose, electrolytes, troponin, ECG. INTRAVENOUS ALTEPLASE (tPA): Eligibility criteria: Ischemic stroke with measurable neurologic deficit, symptom onset <4.5 hours (or wake-up stroke with MRI showing DWI-FLAIR mismatch), age ≥18 years. Exclusion criteria: Intracranial hemorrhage on imaging, recent major surgery or trauma (<14 days), active bleeding, platelet count <100,000/μL, glucose <50 mg/dL, blood pressure >185/110 mmHg (despite treatment), INR >1.7 or PT >15 seconds, use of direct thrombin inhibitors or direct factor Xa inhibitors within 48 hours with elevated sensitive laboratory tests. Dose: 0.9 mg/kg (maximum 90 mg) - give 10% as IV bolus over 1 minute, remaining 90% as IV infusion over 60 minutes. Blood pressure management during and after tPA: Maintain <180/105 mmHg for 24 hours. Check blood pressure every 15 minutes for 2 hours, then every 30 minutes for 6 hours, then hourly for 16 hours. Avoid antiplatelet agents and anticoagulants for 24 hours after tPA. Monitor for complications: symptomatic intracranial hemorrhage (occurs in 6% of patients), angioedema (especially in patients on ACE inhibitors). MECHANICAL THROMBECTOMY: Indications: Large vessel occlusion (internal carotid artery, middle cerebral artery M1 or proximal M2 segment) identified on CTA or MRA. Time windows: 0-6 hours: All eligible patients with large vessel occlusion. 6-16 hours: Patients meeting DAWN criteria (age, NIHSS, infarct volume on imaging) or DEFUSE 3 criteria (clinical-core mismatch or perfusion-core mismatch). 16-24 hours: Patients meeting DAWN criteria. Technique: Stent retriever or aspiration thrombectomy. Performed by interventional neurologist or neurointerventional radiologist. Can be performed with or without prior IV tPA. BLOOD PRESSURE MANAGEMENT: Permissive hypertension in acute phase (first 24 hours) allows cerebral perfusion to ischemic penumbra. Do not lower blood pressure unless >220/120 mmHg (or >185/110 mmHg if receiving tPA). If blood pressure lowering needed: Labetalol 10-20 mg IV over 1-2 minutes, may repeat every 10-20 minutes (maximum 300 mg). Nicardipine infusion 5 mg/hour IV, titrate by 2.5 mg/hour every 5-15 minutes (maximum 15 mg/hour). After 24 hours, initiate or resume antihypertensive therapy with goal <140/90 mmHg. ANTIPLATELET THERAPY: Aspirin 325 mg within 24-48 hours after stroke onset (after excluding hemorrhage on repeat imaging if tPA given). Dual antiplatelet therapy (aspirin 50-325 mg + clopidogrel 75 mg daily) for 21 days for minor stroke (NIHSS 0-3) or high-risk TIA (ABCD2 ≥4) within 24 hours of symptom onset, then single antiplatelet. SUPPORTIVE CARE: Maintain normothermia (treat fever >38°C with acetaminophen). Maintain euglycemia (treat hyperglycemia >180 mg/dL with insulin, avoid hypoglycemia). Maintain oxygen saturation >94%. Swallow screening before oral intake to prevent aspiration. DVT prophylaxis with intermittent pneumatic compression or subcutaneous heparin (after 24 hours if tPA given). Early mobilization and rehabilitation. SECONDARY STROKE PREVENTION: Identify stroke mechanism: Atherosclerotic (large vessel or small vessel), cardioembolic (atrial fibrillation, valvular disease), cryptogenic. Antiplatelet therapy: Aspirin, clopidogrel, or aspirin-dipyridamole for non-cardioembolic stroke. Anticoagulation for atrial fibrillation: Direct oral anticoagulants (DOACs) preferred over warfarin. Statin therapy: High-intensity statin (atorvastatin 80 mg or rosuvastatin 20-40 mg) regardless of cholesterol level. Blood pressure control: Target <140/90 mmHg (<130/80 mmHg if diabetes or CKD). Diabetes management: HbA1c <7%. Lifestyle modifications: Smoking cessation, weight loss, exercise, Mediterranean diet. Carotid revascularization: Carotid endarterectomy or stenting for symptomatic carotid stenosis ≥50% (ideally within 2 weeks). STROKE SYSTEMS OF CARE: Primary Stroke Center: 24/7 availability of CT, tPA, stroke team, neurology consultation. Comprehensive Stroke Center: All Primary Stroke Center capabilities plus 24/7 mechanical thrombectomy, neurosurgery, neurointensive care. Thrombectomy-Capable Stroke Center: Primary Stroke Center capabilities plus mechanical thrombectomy. Telestroke: Remote neurology consultation via telemedicine for hospitals without on-site stroke expertise. QUALITY METRICS: Door-to-imaging time <20 minutes. Door-to-needle time <60 minutes for IV tPA. Door-to-puncture time <90 minutes for mechanical thrombectomy. tPA treatment rate for eligible patients. Mechanical thrombectomy rate for eligible patients. Symptomatic intracranial hemorrhage rate. 90-day functional independence rate (modified Rankin Scale 0-2).',
    keyPoints: [
      'Time is brain - rapid assessment and treatment are critical',
      'IV alteplase within 4.5 hours improves outcomes for eligible patients',
      'Mechanical thrombectomy for large vessel occlusion within 6-24 hours (selected patients) dramatically improves outcomes',
      'Permissive hypertension in first 24 hours (do not lower unless >220/120 mmHg)',
      'Aspirin 325 mg within 24-48 hours after stroke onset',
      'Dual antiplatelet therapy for 21 days for minor stroke or high-risk TIA',
      'Organized stroke systems of care reduce door-to-needle time and improve outcomes',
      'Secondary prevention: antiplatelet/anticoagulation, statin, blood pressure control, lifestyle modifications',
    ],
    asaUrl: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000211',
    publicationYear: 2019,
  },

  // TRANSIENT ISCHEMIC ATTACK (TIA)
  {
    topic: 'Transient Ischemic Attack (TIA) - ASA/AHA Guideline',
    keywords: ['transient ischemic attack', 'tia', 'mini stroke', 'transient stroke', 'asa tia', 'tia guideline', 'tia treatment', 'stroke prevention'],
    system: 'Neurology',
    guidelineSummary: 'The ASA/AHA guideline for transient ischemic attack provides evidence-based recommendations for urgent evaluation and treatment to prevent subsequent stroke. TIA is a medical emergency with high short-term stroke risk (10-15% within 3 months, highest in first 48 hours). The guideline emphasizes rapid assessment using ABCD2 score, urgent neuroimaging (MRI with DWI preferred), vascular imaging (carotid ultrasound, CTA, or MRA), and cardiac evaluation (ECG, telemetry, echocardiography). Dual antiplatelet therapy (aspirin plus clopidogrel) for 21 days reduces early stroke risk. Urgent carotid revascularization for symptomatic carotid stenosis ≥50%. Aggressive risk factor modification (statin, blood pressure control, diabetes management, lifestyle modifications) is essential.',
    classIRecommendations: [
      'Patients with TIA should be evaluated urgently (within 24 hours, ideally within 12 hours) to identify treatable causes and initiate secondary prevention (Class I, Level of Evidence B-NR)',
      'Brain MRI with diffusion-weighted imaging (DWI) is recommended over CT for evaluation of patients with TIA (Class I, Level of Evidence B-NR)',
      'Noninvasive imaging of the cervical vessels (carotid ultrasound, CTA, or MRA) is recommended for all patients with TIA (Class I, Level of Evidence B-NR)',
      'ECG is recommended for all patients with TIA to detect atrial fibrillation (Class I, Level of Evidence B-NR)',
      'Dual antiplatelet therapy with aspirin (50-325 mg) plus clopidogrel (75 mg) for 21 days is recommended for patients with minor stroke (NIHSS 0-3) or high-risk TIA (ABCD2 ≥4) within 24 hours of symptom onset (Class I, Level of Evidence B-R)',
      'Statin therapy is recommended for all patients with TIA of atherosclerotic origin (Class I, Level of Evidence B-R)',
      'Carotid endarterectomy is recommended for patients with TIA and ipsilateral carotid stenosis 70-99% (Class I, Level of Evidence A)',
      'Carotid endarterectomy is recommended for patients with TIA and ipsilateral carotid stenosis 50-69% depending on patient-specific factors (Class I, Level of Evidence B-R)',
      'Anticoagulation is recommended for patients with TIA and atrial fibrillation (Class I, Level of Evidence A)',
    ],
    classIIARecommendations: [
      'Hospitalization is reasonable for patients with TIA presenting within 72 hours and ABCD2 score ≥3 (Class IIa, Level of Evidence C-LD)',
      'Cardiac monitoring for at least 24 hours is reasonable for patients with TIA to detect atrial fibrillation (Class IIa, Level of Evidence B-NR)',
      'Echocardiography (transthoracic or transesophageal) is reasonable for patients with TIA to identify cardioembolic source (Class IIa, Level of Evidence C-LD)',
      'Carotid artery stenting is a reasonable alternative to carotid endarterectomy for patients with TIA and symptomatic carotid stenosis ≥50% (Class IIa, Level of Evidence B-R)',
      'Blood pressure lowering is reasonable for patients with TIA and blood pressure ≥140/90 mmHg (Class IIa, Level of Evidence B-R)',
      'Direct oral anticoagulants (DOACs) are reasonable alternatives to warfarin for patients with TIA and atrial fibrillation (Class IIa, Level of Evidence B-R)',
    ],
    classIIBRecommendations: [
      'Extended cardiac monitoring (>24 hours) may be considered for patients with TIA of unknown cause to detect paroxysmal atrial fibrillation (Class IIb, Level of Evidence C-LD)',
      'Patent foramen ovale (PFO) closure may be considered for patients with TIA and PFO in the setting of deep venous thrombosis or high-risk PFO features (Class IIb, Level of Evidence C-LD)',
      'Aspirin plus extended-release dipyridamole may be considered as an alternative to clopidogrel for secondary prevention after TIA (Class IIb, Level of Evidence B-R)',
    ],
    classIIIRecommendations: [
      'Routine use of anticoagulation is not recommended for patients with TIA without atrial fibrillation or other cardioembolic source (Class III, Level of Evidence B-R)',
      'Carotid endarterectomy is not recommended for patients with TIA and ipsilateral carotid stenosis <50% (Class III, Level of Evidence A)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are based on Level A (High quality evidence from randomized trials including CHANCE, POINT, CREST, NASCET, ECST, SPAF, RE-LY, ROCKET-AF, ARISTOTLE) and Level B-R/B-NR (Moderate quality evidence); Class IIa and IIb recommendations are based on Level B-R, B-NR, and C-LD (Low quality evidence)',
    clinicalImplementation: 'Implementation of ASA/AHA TIA guidelines requires urgent evaluation and treatment to prevent stroke. DEFINITION: TIA is transient episode of neurologic dysfunction caused by focal brain, spinal cord, or retinal ischemia without acute infarction. Symptoms typically resolve within 1 hour (historically defined as <24 hours, but tissue-based definition now preferred). RISK STRATIFICATION: ABCD2 score predicts short-term stroke risk: Age ≥60 years (1 point), Blood pressure ≥140/90 mmHg (1 point), Clinical features: unilateral weakness (2 points) or speech impairment without weakness (1 point), Duration: ≥60 minutes (2 points) or 10-59 minutes (1 point), Diabetes (1 point). Score 0-3: Low risk (1% stroke risk at 2 days), Score 4-5: Moderate risk (4% stroke risk at 2 days), Score 6-7: High risk (8% stroke risk at 2 days). High-risk features: ABCD2 ≥4, symptoms >1 hour, crescendo TIAs, large vessel stenosis, atrial fibrillation. URGENT EVALUATION: Emergency department or TIA clinic evaluation within 24 hours (ideally within 12 hours). Neuroimaging: MRI with DWI (preferred - shows acute infarction in 30-50% of TIAs) or CT head (less sensitive but excludes hemorrhage). Vascular imaging: Carotid ultrasound, CTA, or MRA to identify carotid stenosis or intracranial stenosis. Cardiac evaluation: ECG (atrial fibrillation), telemetry (24 hours minimum, consider extended monitoring if cryptogenic), echocardiography (transthoracic or transesophageal to identify cardioembolic source - valvular disease, left atrial thrombus, PFO). Laboratory: CBC, glucose, lipid panel, HbA1c, PT/INR. HOSPITALIZATION: Admit high-risk patients: ABCD2 ≥3, symptoms within 72 hours, crescendo TIAs, large vessel stenosis, atrial fibrillation, symptomatic carotid stenosis requiring urgent revascularization. Outpatient management for low-risk patients with reliable follow-up. DUAL ANTIPLATELET THERAPY: Aspirin 50-325 mg plus clopidogrel 75 mg daily for 21 days for minor stroke (NIHSS 0-3) or high-risk TIA (ABCD2 ≥4) within 24 hours of symptom onset. After 21 days, continue single antiplatelet (aspirin, clopidogrel, or aspirin-dipyridamole). POINT trial: Dual antiplatelet therapy reduced stroke risk by 25% at 90 days compared to aspirin alone. CHANCE trial: Similar benefit in Chinese population. Increased bleeding risk with dual antiplatelet therapy (0.5% major bleeding). ANTICOAGULATION FOR ATRIAL FIBRILLATION: Direct oral anticoagulants (DOACs) preferred over warfarin: Apixaban 5 mg BID, Rivaroxaban 20 mg daily, Edoxaban 60 mg daily, Dabigatran 150 mg BID. Start anticoagulation within days to weeks depending on stroke size and hemorrhagic transformation risk. CHA2DS2-VASc score guides anticoagulation decision (score ≥2 in men or ≥3 in women indicates anticoagulation). CAROTID REVASCULARIZATION: Symptomatic carotid stenosis ≥50%: Carotid endarterectomy (CEA) or carotid artery stenting (CAS) within 2 weeks (ideally within 48 hours for highest-risk patients). CEA preferred for most patients (lower stroke risk than CAS). CAS reasonable alternative for high surgical risk patients (age >80, severe cardiac disease, contralateral carotid occlusion, prior neck surgery/radiation). Symptomatic carotid stenosis <50%: Medical management only (antiplatelet, statin, blood pressure control). STATIN THERAPY: High-intensity statin (atorvastatin 80 mg or rosuvastatin 20-40 mg) for all patients with TIA of atherosclerotic origin, regardless of cholesterol level. Target LDL <70 mg/dL (or <55 mg/dL for very high-risk patients). BLOOD PRESSURE CONTROL: Target <140/90 mmHg (<130/80 mmHg if diabetes or CKD). Initiate or intensify antihypertensive therapy. ACE inhibitors or ARBs preferred for patients with diabetes or CKD. DIABETES MANAGEMENT: Target HbA1c <7%. Metformin first-line. SGLT2 inhibitors or GLP-1 agonists for cardiovascular benefit. LIFESTYLE MODIFICATIONS: Smoking cessation (reduces stroke risk by 50% within 2-5 years). Weight loss if overweight/obese (target BMI <25 kg/m²). Regular exercise (≥150 minutes/week moderate-intensity aerobic activity). Mediterranean diet (high in fruits, vegetables, whole grains, fish, olive oil). Limit alcohol (≤2 drinks/day for men, ≤1 drink/day for women). PATENT FORAMEN OVALE (PFO): PFO closure may be considered for cryptogenic TIA in patients age <60 with high-risk PFO features (large shunt, atrial septal aneurysm) and no other stroke mechanism. RESPECT, CLOSE, REDUCE trials: PFO closure reduced recurrent stroke risk compared to medical therapy alone. CRYPTOGENIC TIA: Extensive evaluation to identify cause: Extended cardiac monitoring (30-day event monitor or implantable loop recorder) to detect paroxysmal atrial fibrillation. Hypercoagulability workup if young (<50 years) or family history. Consider PFO evaluation with bubble study. If no cause identified: Antiplatelet therapy, statin, blood pressure control, lifestyle modifications. FOLLOW-UP: Neurology follow-up within 1-2 weeks. Monitor for recurrent symptoms. Assess medication adherence and side effects. Repeat vascular imaging at 6-12 months if carotid stenosis 50-69%. Annual follow-up for risk factor management.',
    keyPoints: [
      'TIA is medical emergency - high stroke risk in first 48 hours',
      'Urgent evaluation within 24 hours (ideally within 12 hours)',
      'ABCD2 score stratifies stroke risk',
      'MRI with DWI preferred over CT (shows infarction in 30-50% of TIAs)',
      'Dual antiplatelet therapy (aspirin + clopidogrel) for 21 days reduces stroke risk',
      'Urgent carotid revascularization for symptomatic stenosis ≥50%',
      'Anticoagulation for atrial fibrillation (DOACs preferred)',
      'Aggressive risk factor modification: statin, blood pressure control, diabetes management, lifestyle modifications',
    ],
    asaUrl: 'https://www.ahajournals.org/doi/10.1161/STR.0b013e3181ec64e3',
    publicationYear: 2009,
  },

  // INTRACEREBRAL HEMORRHAGE
  {
    topic: 'Spontaneous Intracerebral Hemorrhage - ASA/AHA Guideline',
    keywords: ['intracerebral hemorrhage', 'ich', 'brain hemorrhage', 'cerebral hemorrhage', 'hemorrhagic stroke', 'asa ich', 'ich guideline', 'ich treatment'],
    system: 'Neurology',
    guidelineSummary: 'The ASA/AHA guideline for spontaneous intracerebral hemorrhage provides evidence-based recommendations for diagnosis, acute management, and prevention of complications. ICH accounts for 10-15% of strokes but has higher mortality (40-50% at 30 days) than ischemic stroke. The guideline emphasizes rapid blood pressure lowering (target SBP <140 mmHg if presenting SBP 150-220 mmHg), reversal of coagulopathy, prevention of hematoma expansion, and management of increased intracranial pressure. Neurosurgical evacuation is indicated for cerebellar hemorrhage >3 cm with brainstem compression or hydrocephalus. Medical management is preferred for most supratentorial ICH. Prevention includes blood pressure control and avoiding anticoagulation in high-risk patients.',
    classIRecommendations: [
      'Patients with acute ICH should have blood pressure monitored and elevated blood pressure treated (Class I, Level of Evidence A)',
      'For patients with ICH presenting with SBP 150-220 mmHg, acute lowering of SBP to 140 mmHg is safe and can be effective for improving functional outcome (Class I, Level of Evidence A)',
      'For patients with ICH and warfarin-associated coagulopathy (INR elevation), warfarin should be withheld, and vitamin K should be administered, supplemented by prothrombin complex concentrate (PCC) or fresh frozen plasma (FFP) (Class I, Level of Evidence C-LD)',
      'For patients with ICH receiving direct thrombin inhibitors or direct factor Xa inhibitors, treatment with idarucizumab (for dabigatran) or andexanet alfa (for factor Xa inhibitors) should be considered (Class I, Level of Evidence B-NR)',
      'Patients with a cerebellar hemorrhage who are deteriorating neurologically or who have brainstem compression and/or hydrocephalus from ventricular obstruction should undergo surgical removal of the hemorrhage as soon as possible (Class I, Level of Evidence B-NR)',
      'Initial treatment of patients with ICH in a dedicated neurological intensive care unit or stroke unit may be beneficial (Class I, Level of Evidence B-NR)',
    ],
    classIIARecommendations: [
      'For patients with ICH presenting with SBP >220 mmHg, it may be reasonable to consider aggressive reduction of blood pressure with continuous intravenous infusion and frequent blood pressure monitoring (Class IIa, Level of Evidence C-LD)',
      'External ventricular drainage (EVD) for treatment of hydrocephalus is reasonable in patients with a decreased level of consciousness (Class IIa, Level of Evidence B-NR)',
      'Patients with lobar ICH may benefit from evaluation for cerebral amyloid angiopathy, including MRI with gradient echo or susceptibility-weighted sequences (Class IIa, Level of Evidence B-NR)',
      'Resumption of anticoagulation after ICH may be considered for patients with high thromboembolic risk (mechanical heart valve, atrial fibrillation with high CHA2DS2-VASc score) after careful assessment of bleeding risk (Class IIa, Level of Evidence C-LD)',
    ],
    classIIBRecommendations: [
      'Minimally invasive surgery with stereotactic or endoscopic aspiration with or without thrombolytic usage might be considered as a treatment option for patients with ICH (Class IIb, Level of Evidence B-R)',
      'Prophylactic antiepileptic drugs may be considered for patients with lobar ICH (Class IIb, Level of Evidence C-LD)',
      'Platelet transfusion may be considered for patients with ICH who have thrombocytopenia or have taken antiplatelet agents (Class IIb, Level of Evidence C-LD)',
    ],
    classIIIRecommendations: [
      'Routine evacuation of supratentorial ICH by standard craniotomy within 96 hours of ictus is not recommended (Class III, Level of Evidence A)',
      'Prophylactic antiepileptic drugs are not recommended for preventing late seizures after ICH (Class III, Level of Evidence C-LD)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are based on Level A (High quality evidence from INTERACT2, ATACH-2 trials) and Level B-NR/C-LD (Moderate to Low quality evidence); Class IIa and IIb recommendations are based on Level B-R, B-NR, and C-LD',
    clinicalImplementation: 'Implementation of ASA/AHA ICH guidelines requires rapid diagnosis, blood pressure management, and prevention of complications. DIAGNOSIS: Non-contrast CT head is diagnostic: shows hyperdense (bright) acute blood. Determines location (supratentorial vs infratentorial), size, mass effect, intraventricular extension, hydrocephalus. CT angiography (CTA) identifies vascular malformations (AVM, aneurysm) or spot sign (contrast extravasation predicting hematoma expansion). MRI with gradient echo or susceptibility-weighted imaging (SWI) detects chronic hemorrhages (cerebral amyloid angiopathy, hypertensive microbleeds). Laboratory: CBC, PT/INR, aPTT, platelet count, type and screen. BLOOD PRESSURE MANAGEMENT: Rapid blood pressure lowering reduces hematoma expansion and improves outcomes. Target SBP <140 mmHg if presenting SBP 150-220 mmHg. Achieve target within 1 hour. Medications: Nicardipine infusion 5 mg/hour IV, titrate by 2.5 mg/hour every 5-15 minutes (maximum 15 mg/hour), OR Labetalol 10-20 mg IV bolus, may repeat every 10-20 minutes (maximum 300 mg), OR Clevidipine infusion 1-2 mg/hour IV, titrate by doubling dose every 2-5 minutes (maximum 32 mg/hour). Monitor blood pressure every 5-15 minutes during acute lowering, then hourly. Avoid aggressive lowering if SBP >220 mmHg (may worsen cerebral perfusion). REVERSAL OF COAGULOPATHY: Warfarin-associated ICH: Vitamin K 10 mg IV, Prothrombin complex concentrate (PCC) 25-50 units/kg IV (preferred - rapid reversal) OR Fresh frozen plasma (FFP) 10-15 mL/kg IV (slower reversal, volume overload risk). Target INR <1.4 within 4 hours. Dabigatran-associated ICH: Idarucizumab 5 g IV (2 doses of 2.5 g). Factor Xa inhibitor-associated ICH (rivaroxaban, apixaban, edoxaban): Andexanet alfa IV (dose based on specific factor Xa inhibitor and time since last dose) OR PCC 50 units/kg IV if andexanet alfa unavailable. Antiplatelet-associated ICH: Platelet transfusion controversial (may worsen outcomes). Consider if neurosurgery planned or severe thrombocytopenia. Desmopressin (DDAVP) 0.3 mcg/kg IV may improve platelet function. HEMATOMA EXPANSION: Occurs in 30-40% of patients within first 24 hours. Spot sign on CTA predicts expansion. Repeat CT at 6-24 hours to assess for expansion. Rapid blood pressure lowering and coagulopathy reversal reduce expansion risk. NEUROSURGICAL MANAGEMENT: Cerebellar hemorrhage >3 cm with brainstem compression or hydrocephalus: Emergent surgical evacuation (suboccipital craniectomy). Supratentorial ICH: Medical management preferred for most patients. Surgical evacuation (craniotomy) not beneficial for routine supratentorial ICH. Consider minimally invasive surgery (stereotactic aspiration, endoscopic evacuation) for select patients (investigational). Hydrocephalus: External ventricular drain (EVD) for obstructive hydrocephalus with decreased consciousness. Intraventricular hemorrhage: EVD for hydrocephalus. Intraventricular thrombolysis (alteplase) may reduce mortality (investigational). INCREASED INTRACRANIAL PRESSURE (ICP) MANAGEMENT: Elevate head of bed 30 degrees. Maintain normothermia (treat fever). Maintain euglycemia. Osmotic therapy: Mannitol 0.25-1 g/kg IV bolus or Hypertonic saline 3% 250 mL IV bolus. ICP monitoring if GCS ≤8. Target ICP <20 mmHg, cerebral perfusion pressure (CPP) 50-70 mmHg. Decompressive craniectomy for refractory elevated ICP (last resort). SEIZURE MANAGEMENT: Seizures occur in 10-20% of patients with ICH (higher with lobar location). Treat clinical seizures with antiepileptic drugs (levetiracetam, fosphenytoin). Prophylactic antiepileptic drugs not recommended (no benefit for preventing late seizures). Consider EEG monitoring if decreased consciousness. SUPPORTIVE CARE: DVT prophylaxis: Intermittent pneumatic compression initially, then subcutaneous heparin or LMWH after 24-48 hours if stable. Stress ulcer prophylaxis: H2 blocker or PPI. Nutrition: Enteral nutrition within 48 hours if tolerated. Swallow screening before oral intake. Glycemic control: Target glucose <180 mg/dL. Avoid hypoglycemia. Fever management: Treat fever >38°C with acetaminophen. COMPLICATIONS: Hematoma expansion: Most common in first 24 hours. Repeat CT if clinical deterioration. Hydrocephalus: EVD if obstructive hydrocephalus. Seizures: Treat clinical seizures. Cerebral edema: Peaks at 3-5 days. Osmotic therapy if symptomatic. Herniation: Medical management (osmotic therapy, hyperventilation) or surgical decompression. PROGNOSIS: Mortality 40-50% at 30 days. Predictors of poor outcome: Large hematoma volume (>30 mL), intraventricular extension, infratentorial location, low GCS, advanced age. ICH score predicts 30-day mortality (0-6 points based on GCS, age, hematoma volume, intraventricular hemorrhage, infratentorial location). SECONDARY PREVENTION: Blood pressure control: Target <130/80 mmHg. Avoid anticoagulation if possible (high rebleeding risk, especially with cerebral amyloid angiopathy). If anticoagulation necessary (mechanical heart valve, high thromboembolic risk): Delay resumption 4-8 weeks. Consider left atrial appendage occlusion for atrial fibrillation. Avoid antiplatelet agents if cerebral amyloid angiopathy. Statin therapy: May reduce recurrent ICH risk. Alcohol moderation. Smoking cessation.',
    keyPoints: [
      'Rapid blood pressure lowering to SBP <140 mmHg if presenting SBP 150-220 mmHg',
      'Reverse coagulopathy immediately: PCC for warfarin, idarucizumab for dabigatran, andexanet alfa for factor Xa inhibitors',
      'Cerebellar hemorrhage >3 cm with brainstem compression requires emergent surgical evacuation',
      'Medical management preferred for most supratentorial ICH',
      'Hematoma expansion occurs in 30-40% within first 24 hours',
      'Mortality 40-50% at 30 days - higher than ischemic stroke',
      'Blood pressure control is key for secondary prevention',
    ],
    asaUrl: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000069',
    publicationYear: 2015,
  },

  // SUBARACHNOID HEMORRHAGE
  {
    topic: 'Aneurysmal Subarachnoid Hemorrhage - ASA/AHA Guideline',
    keywords: ['subarachnoid hemorrhage', 'sah', 'aneurysmal subarachnoid hemorrhage', 'ruptured aneurysm', 'cerebral aneurysm', 'asa sah', 'sah guideline', 'sah treatment'],
    system: 'Neurology',
    guidelineSummary: 'The ASA/AHA guideline for aneurysmal subarachnoid hemorrhage provides comprehensive evidence-based recommendations for diagnosis, acute management, and prevention of complications. SAH from ruptured intracranial aneurysm is a neurosurgical emergency with high mortality (30-40%) and morbidity. The guideline emphasizes rapid diagnosis (non-contrast CT, lumbar puncture if CT negative), urgent aneurysm securing (endovascular coiling preferred over surgical clipping for most aneurysms), nimodipine for vasospasm prevention, and management of complications (rebleeding, vasospasm, hydrocephalus, seizures). Transcranial Doppler monitoring detects vasospasm. Induced hypertension treats symptomatic vasospasm. Multidisciplinary neurocritical care improves outcomes.',
    classIRecommendations: [
      'Non-contrast CT of the head is recommended as the first diagnostic test for patients with suspected SAH (Class I, Level of Evidence B-NR)',
      'Lumbar puncture is recommended when the clinical suspicion of SAH remains despite a normal CT scan (Class I, Level of Evidence B-NR)',
      'CT angiography or catheter angiography is recommended to identify the source of SAH (Class I, Level of Evidence B-NR)',
      'Aneurysm securing (endovascular coiling or surgical clipping) should be performed as early as feasible to reduce the rate of rebleeding after aneurysmal SAH (Class I, Level of Evidence B-NR)',
      'Endovascular coiling is generally preferred over surgical clipping for ruptured aneurysms amenable to both techniques (Class I, Level of Evidence B-R)',
      'Oral nimodipine 60 mg every 4 hours for 21 days should be administered to all patients with aneurysmal SAH to reduce the risk of poor outcome related to vasospasm (Class I, Level of Evidence A)',
      'Transcranial Doppler ultrasonography is recommended to monitor for the development of vasospasm (Class I, Level of Evidence B-NR)',
      'Maintenance of euvolemia and normal circulating blood volume is recommended to prevent delayed cerebral ischemia (Class I, Level of Evidence B-NR)',
    ],
    classIIARecommendations: [
      'Induced hypertension is reasonable for patients with delayed cerebral ischemia after aneurysm securing (Class IIa, Level of Evidence B-NR)',
      'Endovascular therapy (intra-arterial vasodilators or angioplasty) is reasonable for patients with symptomatic vasospasm refractory to medical therapy (Class IIa, Level of Evidence B-NR)',
      'External ventricular drainage is reasonable for patients with acute hydrocephalus and decreased level of consciousness (Class IIa, Level of Evidence B-NR)',
      'Prophylactic antiepileptic drugs may be considered in the immediate posthemorrhagic period (Class IIa, Level of Evidence B-NR)',
      'Statin therapy may be reasonable for patients with aneurysmal SAH to reduce the risk of vasospasm and delayed cerebral ischemia (Class IIa, Level of Evidence B-R)',
    ],
    classIIBRecommendations: [
      'Prophylactic hypervolemia or balloon angioplasty before the development of vasospasm is not well established (Class IIb, Level of Evidence B-R)',
      'Magnesium sulfate infusion for prevention of delayed cerebral ischemia is not well established (Class IIb, Level of Evidence B-R)',
      'Routine use of prophylactic antiepileptic drugs beyond the immediate posthemorrhagic period is not well established (Class IIb, Level of Evidence C-LD)',
    ],
    classIIIRecommendations: [
      'Prophylactic hypervolemia before aneurysm securing is not recommended because of the increased risk of aneurysm rebleeding (Class III, Level of Evidence B-NR)',
      'Antifibrinolytic therapy is not recommended for prevention of rebleeding in most patients because of increased risk of delayed cerebral ischemia (Class III, Level of Evidence B-R)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are based on Level A (High quality evidence from ISAT trial for coiling vs clipping, multiple RCTs for nimodipine) and Level B-NR (Moderate quality evidence from observational studies); Class IIa and IIb recommendations are based on Level B-R, B-NR, and C-LD',
    clinicalImplementation: 'Implementation of ASA/AHA SAH guidelines requires rapid diagnosis, urgent aneurysm securing, and prevention of complications. DIAGNOSIS: Clinical presentation: Sudden severe headache ("thunderclap headache" - worst headache of life, maximal at onset), loss of consciousness, nausea, vomiting, photophobia, neck stiffness, focal neurologic deficits. Sentinel headache (warning leak) may occur days to weeks before major rupture. Non-contrast CT head: First diagnostic test. Sensitivity >95% if performed within 6 hours of symptom onset. Shows hyperdense blood in subarachnoid space, basal cisterns, and sulci. Sensitivity decreases over time (50% at 1 week). Lumbar puncture: Perform if CT negative but high clinical suspicion. Shows RBCs that do not decrease from tube 1 to 4 (distinguishes from traumatic tap). Xanthochromia (yellow CSF from bilirubin) appears 6-12 hours after hemorrhage, persists for 2-4 weeks. Centrifuge CSF and examine supernatant. Opening pressure often elevated. CT angiography (CTA) or catheter angiography: Identifies aneurysm location, size, and morphology for treatment planning. CTA sensitivity 95-98% for aneurysms >3 mm. Catheter angiography gold standard (100% sensitivity). Perform urgently after SAH diagnosis. GRADING: Hunt-Hess scale (clinical): Grade I (asymptomatic or mild headache), Grade II (moderate-severe headache, nuchal rigidity, no neurologic deficit except cranial nerve palsy), Grade III (drowsiness, confusion, mild focal deficit), Grade IV (stupor, moderate-severe hemiparesis), Grade V (coma, decerebrate posturing). World Federation of Neurosurgical Societies (WFNS) scale: Based on GCS and focal deficits. Fisher scale (radiographic): Predicts vasospasm risk based on amount and location of blood on CT. Modified Fisher scale: Grade 1 (no SAH), Grade 2 (thin SAH <1 mm), Grade 3 (thick SAH ≥1 mm), Grade 4 (any SAH with intraventricular or intraparenchymal hemorrhage). ANEURYSM SECURING: Timing: As early as feasible (within 24-72 hours) to prevent rebleeding. Rebleeding risk highest in first 24 hours (4%), then 1-2% per day for first 2 weeks. Endovascular coiling: Preferred for most aneurysms (ISAT trial: better outcomes than clipping). Platinum coils inserted via catheter to occlude aneurysm. Advantages: Less invasive, shorter recovery, better for posterior circulation aneurysms. Disadvantages: Higher recanalization rate (may require retreatment), not suitable for all aneurysm morphologies. Surgical clipping: Craniotomy and placement of titanium clip across aneurysm neck. Advantages: Durable occlusion, allows hematoma evacuation if present. Disadvantages: More invasive, longer recovery, higher risk for anterior circulation aneurysms. Indications: Wide-necked aneurysms, middle cerebral artery aneurysms, young patients (long life expectancy). BLOOD PRESSURE MANAGEMENT: Before aneurysm securing: Maintain SBP <160 mmHg to reduce rebleeding risk. Avoid aggressive lowering (may worsen cerebral perfusion). After aneurysm securing: Permissive hypertension to prevent delayed cerebral ischemia. Target SBP 140-180 mmHg or MAP 90-110 mmHg. NIMODIPINE: Oral nimodipine 60 mg every 4 hours for 21 days. Reduces poor outcomes related to vasospasm by 40%. Mechanism: Calcium channel blocker, neuroprotective effect. Start within 96 hours of SAH. If unable to take oral: Crush tablets and give via nasogastric tube. Monitor blood pressure (may cause hypotension). VASOSPASM: Occurs in 70% of patients, peaks days 3-14 after SAH. Symptomatic vasospasm (delayed cerebral ischemia) occurs in 30%. Clinical presentation: New focal neurologic deficit, decreased consciousness, worsening headache. Transcranial Doppler (TCD) monitoring: Daily TCD to detect vasospasm. Mean flow velocity >120 cm/s in middle cerebral artery suggests vasospasm. Lindegaard ratio (MCA velocity / ICA velocity) >3 suggests vasospasm. CT angiography or catheter angiography confirms vasospasm. Treatment: Induced hypertension (triple-H therapy - hypertension, hypervolemia, hemodilution - now only hypertension recommended): Increase SBP to 180-220 mmHg or MAP to 110-130 mmHg using vasopressors (norepinephrine, phenylephrine). Monitor for cardiac complications, pulmonary edema. Endovascular therapy for refractory vasospasm: Intra-arterial vasodilators (verapamil, nicardipine, milrinone). Balloon angioplasty for large vessel vasospasm. HYDROCEPHALUS: Acute hydrocephalus: Occurs in 20-30% of patients. Caused by blood obstructing CSF flow. Presents with decreased consciousness. External ventricular drain (EVD) for treatment. Chronic hydrocephalus: Occurs in 10-20% of patients. Develops weeks to months after SAH. Ventriculoperitoneal shunt for treatment. SEIZURES: Occur in 10-20% of patients. Prophylactic antiepileptic drugs (levetiracetam, phenytoin) may be considered in immediate posthemorrhagic period (first 3-7 days). Routine long-term prophylaxis not recommended (no benefit, potential harm). Treat clinical seizures. COMPLICATIONS: Rebleeding: Highest risk in first 24 hours (4%). Prevented by early aneurysm securing. Mortality 70% if rebleeding occurs. Vasospasm/delayed cerebral ischemia: Peaks days 3-14. Nimodipine reduces risk. Induced hypertension treats symptomatic vasospasm. Hydrocephalus: Acute (EVD) or chronic (VP shunt). Seizures: Prophylaxis controversial. Cardiac complications: Neurogenic stunned myocardium, arrhythmias, ECG changes (T-wave inversions, ST changes). Pulmonary edema: Neurogenic or cardiogenic. Hyponatremia: Cerebral salt wasting (treat with hypertonic saline) or SIADH (fluid restriction). Fever: Common, worsens outcomes. Treat aggressively. SUPPORTIVE CARE: Neurocritical care unit monitoring. Maintain euvolemia (avoid hypovolemia and hypervolemia). Glycemic control (target glucose <180 mg/dL). DVT prophylaxis (pneumatic compression, then subcutaneous heparin after aneurysm secured). Stress ulcer prophylaxis (H2 blocker or PPI). Nutrition (enteral preferred). PROGNOSIS: Mortality 30-40%. Predictors of poor outcome: Poor clinical grade (Hunt-Hess IV-V, WFNS 4-5), large amount of blood on CT (modified Fisher 3-4), advanced age, rebleeding, delayed cerebral ischemia, medical complications. Good outcome (modified Rankin Scale 0-2) in 50-60% of survivors. LONG-TERM MANAGEMENT: Cognitive and psychological sequelae common (depression, anxiety, cognitive impairment, fatigue). Rehabilitation (physical, occupational, speech therapy). Aneurysm follow-up imaging (CTA or MRA) at 6-12 months after coiling to assess for recanalization. Screening for unruptured aneurysms in first-degree relatives (10% have aneurysms). Risk factor modification (smoking cessation, blood pressure control).',
    keyPoints: [
      'Thunderclap headache is classic - worst headache of life, maximal at onset',
      'Non-contrast CT first, lumbar puncture if CT negative but high suspicion',
      'Urgent aneurysm securing within 24-72 hours to prevent rebleeding',
      'Endovascular coiling preferred over surgical clipping for most aneurysms',
      'Nimodipine 60 mg q4h for 21 days reduces poor outcomes related to vasospasm',
      'Vasospasm peaks days 3-14 - monitor with transcranial Doppler',
      'Induced hypertension treats symptomatic vasospasm',
      'Mortality 30-40% - neurosurgical emergency requiring multidisciplinary care',
    ],
    asaUrl: 'https://www.ahajournals.org/doi/10.1161/STR.0b013e3182587839',
    publicationYear: 2012,
  },
];

/**
 * Search function to find relevant ASA guideline entries based on query
 */
export function searchASAGuidelines(query: string): ASAGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = asaGuidelinesKnowledge.map(entry => {
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

  console.log(`ASA Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ASA guideline by exact topic name
 */
export function getASAGuidelineByTopic(topic: string): ASAGuidelineEntry | undefined {
  return asaGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ASA guidelines for a specific system
 */
export function getASAGuidelinesBySystem(system: string): ASAGuidelineEntry[] {
  return asaGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
