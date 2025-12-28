
/**
 * Neurology System Knowledge Base - Merck Manual Professional
 * 
 * PHASE 6: COMPLETE NEUROLOGY SYSTEM
 * 
 * Comprehensive neurology knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major neurological conditions including:
 * - Stroke and cerebrovascular disease
 * - Seizure disorders and epilepsy
 * - Movement disorders (Parkinson's, essential tremor, Huntington's)
 * - Dementia and cognitive disorders
 * - Multiple sclerosis and demyelinating diseases
 * - Headache disorders
 * - Peripheral neuropathy
 * - Neuromuscular disorders
 * 
 * Each entry includes:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * PHASE 6 ENHANCEMENTS:
 * - Enhanced keyword specificity to prevent content bleeding
 * - Disease-specific modifiers ensure precise matching
 * - Keyword hooks enable focused responses (pathophysiology, clinical, diagnostic, treatment)
 * - Maintains same integrity as Cardiology, Pulmonary, Gastroenterology, Endocrine, and Hematology sections
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const neurologyKnowledge: MerckManualEntry[] = [
  // STROKE AND CEREBROVASCULAR DISEASE
  {
    topic: 'Ischemic Stroke',
    keywords: ['ischemic stroke', 'cerebral infarction', 'brain infarction', 'acute ischemic stroke', 'cerebrovascular accident', 'cva ischemic', 'thrombotic stroke', 'embolic stroke'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, ischemic stroke results from sudden interruption of blood flow to the brain, causing neuronal injury and infarction. Accounts for 85% of strokes. Mechanisms include thrombosis (atherosclerotic plaque rupture in large vessels or lipohyalinosis in small vessels) and embolism (cardiac source most common - atrial fibrillation, valvular disease, or artery-to-artery embolism). Ischemic cascade begins within minutes: energy failure, ionic imbalance, excitotoxicity, inflammation, and cell death. Penumbra (ischemic but viable tissue) can be salvaged with rapid reperfusion.',
    clinicalPresentation: 'Sudden onset of focal neurologic deficits depending on vascular territory. Anterior circulation (carotid): contralateral weakness, sensory loss, aphasia (dominant hemisphere), neglect (non-dominant hemisphere), visual field defects. Posterior circulation (vertebrobasilar): vertigo, ataxia, diplopia, dysphagia, crossed sensory/motor deficits, altered consciousness. Large vessel occlusion causes severe deficits. Lacunar strokes cause pure motor, pure sensory, or ataxic hemiparesis syndromes. Physical examination reveals focal deficits, may have atrial fibrillation, carotid bruit.',
    diagnosticApproach: 'Non-contrast CT head immediately to exclude hemorrhage (appears normal in early ischemic stroke). CT angiography identifies large vessel occlusion for thrombectomy consideration. MRI with diffusion-weighted imaging (DWI) is most sensitive for acute infarction. Assess stroke severity with NIHSS score. Identify stroke mechanism: ECG and telemetry (atrial fibrillation), echocardiography (cardiac source), carotid ultrasound or CTA (carotid stenosis), hypercoagulability workup if young or cryptogenic. Laboratory: glucose, electrolytes, CBC, PT/INR, lipid panel.',
    treatment: 'Time is brain - immediate evaluation and treatment. IV alteplase (tPA) within 4.5 hours of symptom onset if no contraindications (improves outcomes, 0.9 mg/kg, max 90 mg). Mechanical thrombectomy for large vessel occlusion within 6-24 hours (selected patients). Aspirin 325 mg within 24-48 hours (not with tPA). Admit to stroke unit. Blood pressure management: permissive hypertension initially (allow cerebral perfusion), lower gradually if >220/120 or if receiving tPA. Secondary prevention: antiplatelet therapy (aspirin, clopidogrel, or aspirin-dipyridamole), anticoagulation for atrial fibrillation, statin, blood pressure control, carotid endarterectomy or stenting for significant stenosis. Treat modifiable risk factors.',
    clinicalPearls: [
      'Time is brain - door-to-needle time <60 minutes for tPA',
      'Mechanical thrombectomy dramatically improves outcomes for large vessel occlusion',
      'Permissive hypertension in acute phase allows cerebral perfusion',
      'Atrial fibrillation is most common cardioembolic source'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/ischemic-stroke'
  },

  {
    topic: 'Hemorrhagic Stroke',
    keywords: ['hemorrhagic stroke', 'intracerebral hemorrhage', 'ich', 'brain hemorrhage', 'cerebral hemorrhage', 'intracranial hemorrhage stroke', 'hemorrhagic cva'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, hemorrhagic stroke results from rupture of blood vessel causing bleeding into brain parenchyma (intracerebral hemorrhage) or subarachnoid space (subarachnoid hemorrhage). Accounts for 15% of strokes but higher mortality than ischemic stroke. Intracerebral hemorrhage (ICH) causes include hypertension (most common - basal ganglia, thalamus, pons, cerebellum), cerebral amyloid angiopathy (lobar hemorrhages in elderly), vascular malformations, anticoagulation, and sympathomimetic drugs. Hematoma causes mass effect, increased intracranial pressure, and secondary injury from inflammation and edema.',
    clinicalPresentation: 'Sudden onset of focal neurologic deficits with headache, nausea, vomiting, and altered consciousness (more common than ischemic stroke). Symptoms progress over minutes to hours as hematoma expands. Location determines deficits: basal ganglia (contralateral hemiparesis), thalamus (sensory loss, small pupils), pons (quadriplegia, pinpoint pupils, coma), cerebellum (ataxia, nausea, vomiting, obstructive hydrocephalus). Physical examination reveals focal deficits, hypertension, altered consciousness, signs of increased intracranial pressure (papilledema, Cushing triad).',
    diagnosticApproach: 'Non-contrast CT head is diagnostic: shows hyperdense (bright) acute blood. Determines location, size, mass effect, intraventricular extension, and hydrocephalus. CT angiography identifies vascular malformations or spot sign (contrast extravasation predicting hematoma expansion). MRI with gradient echo or susceptibility-weighted imaging detects chronic hemorrhages and underlying lesions. Laboratory: CBC, PT/INR, aPTT, platelet count. Assess for coagulopathy. Blood pressure monitoring. Repeat CT at 6-24 hours to assess for expansion.',
    treatment: 'Reverse coagulopathy immediately: vitamin K and prothrombin complex concentrate for warfarin, idarucizumab for dabigatran, andexanet alfa for factor Xa inhibitors, platelet transfusion for antiplatelet agents if neurosurgery planned. Blood pressure management: lower SBP to <140 mmHg if presenting SBP 150-220 mmHg (reduces hematoma expansion). Avoid aggressive lowering if <150 mmHg. Neurosurgical evacuation for cerebellar hemorrhage >3 cm with brainstem compression or hydrocephalus, or large lobar hemorrhage with deterioration. External ventricular drain for hydrocephalus. Supportive care: ICP management, seizure prophylaxis if lobar hemorrhage, DVT prophylaxis with pneumatic compression. Avoid anticoagulation acutely.',
    clinicalPearls: [
      'Hypertension is most common cause of ICH',
      'Cerebellar hemorrhage requires urgent neurosurgical evaluation',
      'Spot sign on CTA predicts hematoma expansion',
      'Mortality 40-50% at 30 days, higher than ischemic stroke'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/intracerebral-hemorrhage'
  },

  {
    topic: 'Subarachnoid Hemorrhage',
    keywords: ['subarachnoid hemorrhage', 'sah', 'aneurysmal subarachnoid hemorrhage', 'ruptured aneurysm', 'subarachnoid bleed', 'cerebral aneurysm rupture'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, subarachnoid hemorrhage is bleeding into the subarachnoid space, most commonly from ruptured saccular (berry) aneurysm (85%). Aneurysms occur at arterial bifurcations in circle of Willis, most commonly anterior communicating artery, posterior communicating artery, and middle cerebral artery bifurcation. Risk factors include hypertension, smoking, family history, polycystic kidney disease, and connective tissue disorders. Other causes include arteriovenous malformations, trauma, and perimesencephalic hemorrhage (benign). Complications include rebleeding (highest risk in first 24 hours), vasospasm (days 3-14), hydrocephalus, and seizures.',
    clinicalPresentation: 'Sudden severe headache ("thunderclap headache" - worst headache of life, maximal at onset), often with loss of consciousness, nausea, vomiting, photophobia, and neck stiffness. May have sentinel headache (warning leak) days to weeks before. Physical examination reveals meningismus, altered consciousness, focal neurologic deficits (if associated intracerebral or subdural hemorrhage), subhyaloid hemorrhages on fundoscopy. Grading: Hunt-Hess scale (I-V) or World Federation of Neurosurgical Societies (WFNS) scale predicts outcome.',
    diagnosticApproach: 'Non-contrast CT head is first test: shows hyperdense blood in subarachnoid space, basal cisterns, and sulci (sensitivity >95% if performed within 6 hours). If CT negative but high suspicion, perform lumbar puncture: shows RBCs that do not decrease from tube 1 to 4, xanthochromia (yellow CSF from bilirubin, appears 6-12 hours after hemorrhage). CT angiography or catheter angiography identifies aneurysm location and morphology for treatment planning. Transcranial Doppler monitors for vasospasm. ECG may show ST changes, T-wave inversions (neurogenic cardiac injury).',
    treatment: 'Neurosurgical emergency. Secure aneurysm to prevent rebleeding: endovascular coiling (preferred for most aneurysms) or surgical clipping within 24-72 hours. Blood pressure management: maintain SBP <160 mmHg before aneurysm secured, then allow higher pressures to prevent vasospasm. Nimodipine 60 mg q4h for 21 days reduces vasospasm and improves outcomes. Treat vasospasm: induced hypertension, endovascular therapy (angioplasty, intra-arterial vasodilators). External ventricular drain for hydrocephalus. Seizure prophylaxis controversial. Supportive care in neurocritical care unit. Avoid antiplatelet agents and anticoagulation until aneurysm secured.',
    clinicalPearls: [
      'Thunderclap headache is classic - worst headache of life, maximal at onset',
      'Nimodipine improves outcomes - give to all SAH patients',
      'Vasospasm peaks days 3-14, monitored with transcranial Doppler',
      'Rebleeding risk highest in first 24 hours - urgent aneurysm securing essential'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/subarachnoid-hemorrhage-sah'
  },

  {
    topic: 'Transient Ischemic Attack',
    keywords: ['transient ischemic attack', 'tia', 'mini stroke', 'transient stroke', 'temporary stroke'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, transient ischemic attack is temporary focal neurologic deficit caused by cerebral, spinal, or retinal ischemia without acute infarction. Symptoms resolve completely, typically within 1 hour (historically defined as <24 hours, but tissue-based definition now preferred). Same mechanisms as ischemic stroke: thrombosis or embolism. TIA is warning sign - high risk of subsequent stroke (10-15% within 3 months, highest in first 48 hours). ABCD2 score predicts stroke risk: Age ≥60 (1 point), Blood pressure ≥140/90 (1 point), Clinical features (unilateral weakness 2 points, speech impairment without weakness 1 point), Duration ≥60 min (2 points), 10-59 min (1 point), Diabetes (1 point).',
    clinicalPresentation: 'Sudden onset of focal neurologic deficits identical to stroke but transient. Anterior circulation: weakness, numbness, aphasia, monocular vision loss (amaurosis fugax). Posterior circulation: diplopia, vertigo, ataxia, bilateral weakness or sensory loss. Symptoms resolve completely, typically within 1 hour. Physical examination normal after resolution. High-risk features: symptoms >1 hour, motor weakness, speech impairment, ABCD2 score ≥4.',
    diagnosticApproach: 'Urgent evaluation to prevent stroke. MRI with diffusion-weighted imaging (DWI) shows acute infarction in 30-50% of TIAs (tissue-based definition). CT head less sensitive but excludes hemorrhage. Vascular imaging: carotid ultrasound or CTA/MRA identifies carotid stenosis or intracranial stenosis. Cardiac evaluation: ECG, telemetry (atrial fibrillation), echocardiography (cardiac source). ABCD2 score stratifies stroke risk. Laboratory: glucose, lipid panel, hemoglobin A1c. Admit high-risk patients (ABCD2 ≥4, symptoms >1 hour, crescendo TIAs, large vessel stenosis).',
    treatment: 'Urgent treatment to prevent stroke. Antiplatelet therapy: aspirin plus clopidogrel for 21 days (POINT trial), then single antiplatelet. Anticoagulation for atrial fibrillation (start within days if no large infarction). Statin regardless of cholesterol level. Blood pressure control (target <140/90, <130/80 if diabetes or CKD). Carotid endarterectomy or stenting for symptomatic carotid stenosis ≥50% (ideally within 2 weeks). Treat modifiable risk factors: diabetes, smoking cessation, weight loss. Close follow-up. Driving restrictions until evaluated and treated.',
    clinicalPearls: [
      'TIA is medical emergency - high stroke risk in first 48 hours',
      'Dual antiplatelet therapy (aspirin plus clopidogrel) for 21 days reduces stroke risk',
      'MRI with DWI shows infarction in 30-50% of TIAs',
      'Urgent carotid revascularization for symptomatic stenosis ≥50%'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/transient-ischemic-attack-tia'
  },

  // SEIZURE DISORDERS
  {
    topic: 'Epilepsy',
    keywords: ['epilepsy', 'seizure disorder', 'recurrent seizures', 'chronic seizures', 'epileptic disorder'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, epilepsy is a chronic disorder characterized by recurrent unprovoked seizures (≥2 seizures >24 hours apart, or 1 seizure with high recurrence risk). Results from abnormal excessive synchronous neuronal activity. Causes include genetic (idiopathic generalized epilepsies), structural (stroke, trauma, tumor, malformations), infectious (meningitis, encephalitis), metabolic, and immune. Focal epilepsy originates in one hemisphere; generalized epilepsy involves both hemispheres from onset. Seizure types: focal (aware or impaired awareness), generalized (absence, tonic-clonic, myoclonic, atonic), focal to bilateral tonic-clonic.',
    clinicalPresentation: 'Seizure manifestations depend on type and location. Focal aware: preserved consciousness with motor (jerking), sensory (tingling, visual), autonomic, or psychic symptoms. Focal impaired awareness: altered consciousness, automatisms (lip smacking, picking), confusion. Generalized tonic-clonic: loss of consciousness, tonic stiffening, clonic jerking, tongue biting, incontinence, postictal confusion. Absence: brief staring spells, abrupt onset/offset, no postictal state. Myoclonic: brief muscle jerks. Physical examination between seizures often normal unless underlying structural lesion.',
    diagnosticApproach: 'Detailed history of seizure semiology, triggers, and risk factors. EEG is essential: interictal epileptiform discharges (spikes, sharp waves) support diagnosis, ictal recording confirms seizure. Video-EEG monitoring captures events. MRI brain identifies structural causes (required for all focal epilepsy and new-onset seizures in adults). Laboratory: glucose, electrolytes, calcium, magnesium, CBC, toxicology screen. Lumbar puncture if infection suspected. Genetic testing for suspected genetic epilepsy syndromes. Classify epilepsy type and syndrome to guide treatment.',
    treatment: 'Antiseizure medications (ASMs) are mainstay. Choice depends on seizure type and epilepsy syndrome. Focal epilepsy: levetiracetam, lamotrigine, carbamazepine, oxcarbazepine. Generalized epilepsy: valproate (avoid in women of childbearing age), levetiracetam, lamotrigine. Absence: ethosuximide, valproate. Start single agent, titrate to seizure control or side effects. Add second agent if first fails. Drug-resistant epilepsy (failure of 2 appropriate ASMs): consider epilepsy surgery (resection, laser ablation), vagus nerve stimulation, responsive neurostimulation, or ketogenic diet. Avoid triggers: sleep deprivation, alcohol, flashing lights (photosensitive epilepsy). Driving restrictions per state law. Seizure precautions.',
    clinicalPearls: [
      'Epilepsy is clinical diagnosis - EEG supports but does not make diagnosis',
      'MRI brain required for all focal epilepsy to identify surgical candidates',
      'Drug-resistant epilepsy: refer to epilepsy center for surgery evaluation',
      'Valproate is teratogenic - avoid in women of childbearing potential'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/seizure-disorders/seizure-disorders'
  },

  {
    topic: 'Status Epilepticus',
    keywords: ['status epilepticus', 'continuous seizure', 'prolonged seizure', 'refractory status epilepticus', 'convulsive status epilepticus'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, status epilepticus is continuous seizure activity or recurrent seizures without recovery of consciousness, lasting >5 minutes (operational definition) or >30 minutes (traditional definition). Convulsive status epilepticus is medical emergency with high morbidity and mortality. Causes include medication non-compliance, stroke, CNS infection, metabolic derangements, drug toxicity, and hypoxia. Prolonged seizures cause neuronal injury from excitotoxicity, hyperthermia, rhabdomyolysis, and systemic complications. Refractory status epilepticus persists despite two appropriate antiseizure medications.',
    clinicalPresentation: 'Convulsive status epilepticus: continuous tonic-clonic movements, loss of consciousness, may evolve to subtle status (minimal motor activity but ongoing electrical seizures). Non-convulsive status epilepticus: altered mental status without obvious convulsions (requires EEG for diagnosis). Physical examination reveals ongoing seizure activity, hyperthermia, tachycardia, hypertension, and signs of complications (aspiration, rhabdomyolysis, metabolic acidosis).',
    diagnosticApproach: 'Clinical diagnosis for convulsive status epilepticus. EEG confirms diagnosis and monitors treatment response, essential for non-convulsive status epilepticus. Identify cause: glucose, electrolytes, calcium, magnesium, CBC, toxicology screen, antiseizure medication levels, liver and renal function. Neuroimaging (CT or MRI) to exclude structural lesion. Lumbar puncture if infection suspected (after imaging if concern for mass effect). Continuous EEG monitoring in ICU.',
    treatment: 'Medical emergency - immediate treatment. First-line: benzodiazepines - lorazepam 0.1 mg/kg IV (preferred) or diazepam 0.15-0.2 mg/kg IV or midazolam 10 mg IM. Second-line (if seizures continue): fosphenytoin 20 mg PE/kg IV, valproate 40 mg/kg IV, or levetiracetam 60 mg/kg IV. Refractory status epilepticus: continuous IV infusion of midazolam, propofol, or pentobarbital with continuous EEG monitoring, titrate to seizure suppression or burst suppression. Supportive care: airway protection (intubation if needed), IV fluids, treat hyperthermia, correct metabolic abnormalities. Identify and treat underlying cause. ICU monitoring.',
    clinicalPearls: [
      'Status epilepticus is medical emergency - treat immediately',
      'Benzodiazepines are first-line - do not delay for IV access (IM midazolam effective)',
      'Mortality 10-20% for convulsive status epilepticus',
      'Non-convulsive status epilepticus requires EEG for diagnosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/seizure-disorders/status-epilepticus'
  },

  // MOVEMENT DISORDERS
  {
    topic: 'Parkinson Disease',
    keywords: ['parkinson disease', 'parkinson\'s disease', 'parkinsons disease', 'pd', 'idiopathic parkinson disease', 'parkinsonism primary'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, Parkinson disease is a progressive neurodegenerative disorder characterized by loss of dopaminergic neurons in the substantia nigra pars compacta. Pathologic hallmark is Lewy bodies (alpha-synuclein aggregates) in remaining neurons. Dopamine depletion in striatum causes motor symptoms. Etiology is multifactorial: genetic factors (SNCA, LRRK2, parkin mutations), environmental toxins, and aging. Non-motor symptoms result from widespread Lewy body pathology affecting autonomic, limbic, and cortical regions. Symptoms appear when 60-80% of dopaminergic neurons lost.',
    clinicalPresentation: 'Cardinal motor features: resting tremor (4-6 Hz, "pill-rolling"), rigidity (cogwheel), bradykinesia (slowness of movement), and postural instability (late feature). Tremor typically asymmetric, starts in one hand. Bradykinesia manifests as reduced facial expression (hypomimia), decreased blink rate, soft voice (hypophonia), micrographia, and shuffling gait. Non-motor symptoms: hyposmia, REM sleep behavior disorder, constipation, depression, anxiety, cognitive impairment, orthostatic hypotension, urinary dysfunction. Physical examination reveals masked facies, decreased arm swing, stooped posture, festinating gait, and positive pull test (postural instability).',
    diagnosticApproach: 'Clinical diagnosis based on motor features. UK Brain Bank criteria: bradykinesia plus resting tremor and/or rigidity. Exclude atypical features suggesting other parkinsonian syndromes: early falls, poor levodopa response, prominent autonomic failure, supranuclear gaze palsy, cerebellar signs, pyramidal signs. MRI brain typically normal (excludes vascular parkinsonism, normal pressure hydrocephalus). DaTscan (dopamine transporter imaging) shows reduced striatal uptake, distinguishes Parkinson disease from essential tremor but not from other parkinsonian syndromes. Assess for non-motor symptoms: smell testing, sleep questionnaire, cognitive screening.',
    treatment: 'Levodopa-carbidopa is most effective symptomatic treatment. Start when symptoms interfere with function. Initial dose 25/100 mg TID, titrate gradually. Dopamine agonists (pramipexole, ropinirole) alternative for younger patients (delay motor complications but less effective). MAO-B inhibitors (rasagiline, selegiline) for mild symptoms. Amantadine for dyskinesias. Motor complications develop with disease progression: wearing-off (shorter duration of benefit), dyskinesias (involuntary movements from levodopa). Adjust medications: increase frequency, add COMT inhibitor (entacapone), add dopamine agonist, add MAO-B inhibitor. Deep brain stimulation for advanced disease with motor fluctuations. Treat non-motor symptoms: antidepressants, sleep aids, laxatives, fludrocortisone for orthostatic hypotension. Physical therapy, exercise, speech therapy.',
    clinicalPearls: [
      'Resting tremor, rigidity, and bradykinesia are cardinal features',
      'Excellent response to levodopa supports diagnosis',
      'Deep brain stimulation dramatically improves motor fluctuations',
      'Non-motor symptoms (depression, sleep disorders, autonomic dysfunction) significantly impact quality of life'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/movement-and-cerebellar-disorders/parkinson-disease'
  },

  {
    topic: 'Essential Tremor',
    keywords: ['essential tremor', 'et', 'benign essential tremor', 'familial tremor', 'action tremor'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, essential tremor is the most common movement disorder, characterized by action tremor (tremor with voluntary movement). Autosomal dominant inheritance in 50% (familial tremor). Pathophysiology involves abnormal oscillations in cerebello-thalamo-cortical circuits. Exact mechanism unknown. Typically begins in adulthood, slowly progressive. Tremor frequency 4-12 Hz. Alcohol temporarily suppresses tremor in 50-70%. Distinguished from Parkinson disease by action tremor (vs resting tremor) and absence of other parkinsonian features.',
    clinicalPresentation: 'Bilateral action tremor affecting hands, head, voice, or legs. Hand tremor most common, interferes with writing, eating, drinking. Head tremor (titubation) may be "yes-yes" or "no-no" pattern. Voice tremor causes quavering speech. Tremor worsens with stress, fatigue, caffeine. Improves with alcohol. No other neurologic signs. Physical examination reveals bilateral postural and kinetic tremor, may have intention tremor component. No rigidity, bradykinesia, or gait abnormality.',
    diagnosticApproach: 'Clinical diagnosis based on bilateral action tremor without other neurologic signs. Exclude other causes: thyroid function tests (hyperthyroidism), medication review (beta-agonists, valproate, lithium, steroids), alcohol withdrawal, enhanced physiologic tremor. MRI brain if atypical features or rapid progression. DaTscan normal (distinguishes from Parkinson disease). Family history supports diagnosis. Assess functional impairment: writing sample, spiral drawing, water pouring test.',
    treatment: 'Treat if tremor interferes with function or causes distress. First-line: propranolol 60-320 mg/day (non-selective beta-blocker) or primidone 50-750 mg/day (start low, titrate slowly). Propranolol contraindicated in asthma, heart block. Primidone causes sedation, ataxia initially. Second-line: topiramate, gabapentin, alprazolam (short-term). Botulinum toxin injections for head or voice tremor. Deep brain stimulation (thalamic VIM nucleus) for severe refractory tremor. Avoid caffeine, minimize stress. Occupational therapy: weighted utensils, adaptive devices.',
    clinicalPearls: [
      'Most common movement disorder',
      'Action tremor distinguishes from Parkinson disease (resting tremor)',
      'Alcohol suppresses tremor in 50-70% (diagnostic clue)',
      'Propranolol and primidone are first-line treatments'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/movement-and-cerebellar-disorders/tremor'
  },

  {
    topic: 'Huntington Disease',
    keywords: ['huntington disease', 'huntington\'s disease', 'huntingtons disease', 'hd', 'huntington chorea'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, Huntington disease is an autosomal dominant neurodegenerative disorder caused by CAG trinucleotide repeat expansion in huntingtin gene on chromosome 4. Normal <27 repeats; 40+ repeats causes disease. Mutant huntingtin protein causes selective neuronal loss in striatum (caudate and putamen) and cortex. Larger repeat number correlates with earlier onset. Anticipation occurs (earlier onset in successive generations, especially with paternal transmission). Symptoms typically begin age 30-50 years. Inexorably progressive, leading to death 15-20 years after onset.',
    clinicalPresentation: 'Triad: chorea (involuntary, irregular, flowing movements), cognitive decline, and psychiatric symptoms. Chorea affects face, trunk, and limbs, worsens with stress, disappears during sleep. Early symptoms: personality changes, depression, irritability, impulsivity. Cognitive decline progresses to dementia (executive dysfunction, memory impairment). Late stage: rigidity, bradykinesia, dystonia, dysphagia, weight loss, immobility. Juvenile-onset (<20 years): rigidity and bradykinesia predominate (Westphal variant). Physical examination reveals chorea, dysarthria, abnormal eye movements (saccadic pursuit, impaired suppression of reflexive saccades), gait instability.',
    diagnosticApproach: 'Genetic testing confirms diagnosis: CAG repeat expansion ≥40 in huntingtin gene. Predictive testing available for at-risk individuals (requires genetic counseling). MRI brain shows caudate atrophy (enlarged frontal horns of lateral ventricles). Functional imaging (PET, SPECT) shows striatal hypometabolism. Assess cognitive function: neuropsychological testing. Screen for depression, suicidality. Family history of autosomal dominant inheritance with chorea and dementia supports diagnosis.',
    treatment: 'No disease-modifying therapy. Symptomatic treatment: tetrabenazine or deutetrabenazine for chorea (deplete dopamine, monitor for depression and parkinsonism). Antipsychotics (risperidone, olanzapine) for chorea and behavioral symptoms. Antidepressants for depression (SSRIs). Avoid drugs that worsen chorea (dopamine agonists, stimulants). Multidisciplinary care: physical therapy, occupational therapy, speech therapy, nutritional support (high-calorie diet for weight loss). Treat dysphagia (aspiration risk). Psychiatric support. Genetic counseling for family members. Advance directives. Supportive care in late stages.',
    clinicalPearls: [
      'Autosomal dominant - 50% risk for offspring',
      'Chorea, cognitive decline, and psychiatric symptoms are triad',
      'Genetic testing is diagnostic',
      'No disease-modifying treatment - focus on symptomatic management and support'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/movement-and-cerebellar-disorders/huntington-disease'
  },

  // DEMENTIA AND COGNITIVE DISORDERS
  {
    topic: 'Alzheimer Disease',
    keywords: ['alzheimer disease', 'alzheimer\'s disease', 'alzheimers disease', 'ad', 'alzheimer dementia', 'senile dementia alzheimer type'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, Alzheimer disease is the most common cause of dementia (60-80% of cases), characterized by progressive cognitive decline and neurodegeneration. Pathologic hallmarks: extracellular amyloid-beta plaques and intracellular neurofibrillary tangles (hyperphosphorylated tau protein). Neuronal loss and synaptic dysfunction occur in hippocampus and cortex. Risk factors: age (strongest), APOE ε4 allele, family history, cardiovascular risk factors, low education. Early-onset (<65 years) often has genetic mutations (APP, PSEN1, PSEN2). Amyloid cascade hypothesis: amyloid-beta accumulation triggers tau pathology and neurodegeneration.',
    clinicalPresentation: 'Insidious onset and gradual progression of memory impairment, especially episodic memory (recent events). Early: difficulty learning new information, word-finding difficulty, getting lost in familiar places. Middle stage: impaired judgment, confusion, behavioral changes, language impairment, apraxia. Late stage: severe cognitive impairment, loss of independence, behavioral and psychiatric symptoms (agitation, aggression, delusions, hallucinations), loss of motor function. Physical examination initially normal; late stage shows primitive reflexes, rigidity, incontinence. Preserved social skills early ("social facade").',
    diagnosticApproach: 'Clinical diagnosis based on progressive cognitive decline interfering with function. Cognitive testing: Mini-Mental State Examination (MMSE), Montreal Cognitive Assessment (MoCA), detailed neuropsychological testing shows memory impairment and deficits in other cognitive domains. MRI brain: hippocampal and cortical atrophy, excludes other causes (stroke, tumor, normal pressure hydrocephalus). PET imaging: hypometabolism in temporoparietal cortex. Amyloid PET or CSF biomarkers (low amyloid-beta 42, elevated tau) support diagnosis but not routinely needed. Exclude reversible causes: vitamin B12, thyroid function, syphilis serology. Assess for depression (pseudo-dementia).',
    treatment: 'No cure. Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild-moderate Alzheimer disease - modest symptomatic benefit, slow decline. Memantine (NMDA antagonist) for moderate-severe disease, can combine with cholinesterase inhibitor. Aducanumab (anti-amyloid antibody) approved but controversial efficacy. Treat behavioral and psychiatric symptoms: antidepressants for depression, low-dose antipsychotics for severe agitation/aggression (use cautiously - increased mortality risk). Non-pharmacologic: structured routine, cognitive stimulation, exercise, social engagement. Caregiver support essential. Address safety: driving, wandering, financial management. Advance directives. Consider clinical trials.',
    clinicalPearls: [
      'Most common cause of dementia',
      'Memory impairment is earliest and most prominent symptom',
      'Cholinesterase inhibitors provide modest symptomatic benefit',
      'Caregiver burden is significant - support and respite care essential'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/delirium-and-dementia/alzheimer-disease'
  },

  {
    topic: 'Vascular Dementia',
    keywords: ['vascular dementia', 'vascular cognitive impairment', 'multi-infarct dementia', 'post-stroke dementia'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, vascular dementia is cognitive impairment resulting from cerebrovascular disease. Second most common cause of dementia after Alzheimer disease. Mechanisms include multiple cortical infarcts (multi-infarct dementia), strategic single infarct (thalamus, angular gyrus), small vessel disease (lacunar infarcts, white matter disease), or hypoperfusion. Risk factors: hypertension, diabetes, hyperlipidemia, smoking, atrial fibrillation, prior stroke. Often coexists with Alzheimer disease (mixed dementia). Vascular cognitive impairment spectrum ranges from mild cognitive impairment to dementia.',
    clinicalPresentation: 'Stepwise decline in cognition (sudden worsening with each stroke) or gradual decline (small vessel disease). Executive dysfunction (planning, organization, problem-solving) and slowed processing speed are prominent, more than memory impairment (distinguishes from Alzheimer disease). Focal neurologic deficits from strokes. Gait disturbance, urinary incontinence, emotional lability (pseudobulbar affect). Physical examination reveals focal deficits, abnormal gait, primitive reflexes, emotional lability.',
    diagnosticApproach: 'Clinical diagnosis based on cognitive impairment with temporal relationship to stroke or evidence of cerebrovascular disease. Cognitive testing shows executive dysfunction and slowed processing. MRI brain: multiple infarcts, extensive white matter hyperintensities (leukoaraiosis), lacunar infarcts, or strategic infarct. Modified Hachinski Ischemic Score helps distinguish vascular from Alzheimer dementia (abrupt onset, stepwise deterioration, focal deficits, cardiovascular risk factors favor vascular). Exclude other causes: thyroid function, vitamin B12, syphilis. Assess vascular risk factors.',
    treatment: 'Prevent further strokes: antiplatelet therapy (aspirin, clopidogrel), anticoagulation for atrial fibrillation, statin, blood pressure control (target <140/90), diabetes management, smoking cessation. No specific treatment for cognitive symptoms. Cholinesterase inhibitors may provide modest benefit. Treat behavioral symptoms: antidepressants for depression, low-dose antipsychotics for severe agitation (use cautiously). Cognitive rehabilitation, physical therapy for gait. Caregiver support. Prognosis worse than Alzheimer disease.',
    clinicalPearls: [
      'Stepwise decline and executive dysfunction distinguish from Alzheimer disease',
      'Prevent further strokes with aggressive vascular risk factor management',
      'Often coexists with Alzheimer disease (mixed dementia)',
      'Gait disturbance and urinary incontinence are common'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/delirium-and-dementia/vascular-dementia'
  },

  // DEMYELINATING DISEASES
  {
    topic: 'Multiple Sclerosis',
    keywords: ['multiple sclerosis', 'ms', 'demyelinating disease', 'relapsing remitting multiple sclerosis', 'rrms', 'primary progressive multiple sclerosis'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, multiple sclerosis is a chronic autoimmune demyelinating disease of the central nervous system. T cells attack myelin, causing inflammation, demyelination, axonal damage, and gliosis (plaques or lesions). Disseminated in space (multiple CNS locations) and time (relapses). Subtypes: relapsing-remitting MS (85% at onset - relapses with recovery), secondary progressive MS (develops from RRMS - progressive worsening), primary progressive MS (15% - progressive from onset), progressive-relapsing MS (rare). Risk factors: female sex, age 20-40, northern latitude, vitamin D deficiency, smoking, Epstein-Barr virus infection, genetic susceptibility (HLA-DRB1).',
    clinicalPresentation: 'Symptoms depend on lesion location. Common: optic neuritis (vision loss, eye pain with movement), sensory symptoms (numbness, tingling, Lhermitte sign - electric shock sensation down spine with neck flexion), motor weakness, ataxia, vertigo, bladder dysfunction, fatigue, cognitive impairment. Uhthoff phenomenon: symptoms worsen with heat. Relapses last days to weeks, then improve. Physical examination reveals optic disc pallor, internuclear ophthalmoplegia (impaired adduction with nystagmus of abducting eye), spasticity, hyperreflexia, Babinski sign, ataxia, sensory deficits.',
    diagnosticApproach: 'McDonald criteria for diagnosis: dissemination in space and time demonstrated by clinical relapses and/or MRI. MRI brain and spine: multiple T2 hyperintense lesions in periventricular, juxtacortical, infratentorial, and spinal cord regions. Gadolinium enhancement indicates active inflammation. Dissemination in time: new lesions on follow-up MRI or simultaneous enhancing and non-enhancing lesions. Lumbar puncture: oligoclonal bands (IgG) in CSF but not serum (90%), elevated IgG index. Visual evoked potentials show delayed latency (optic nerve involvement). Exclude mimics: neuromyelitis optica (anti-aquaporin-4 antibodies), sarcoidosis, Lyme disease, vasculitis.',
    treatment: 'Acute relapses: high-dose IV methylprednisolone 1 g daily for 3-5 days, speeds recovery. Plasma exchange for severe relapses not responding to steroids. Disease-modifying therapies (DMTs) reduce relapse rate and slow progression: Injectable (interferon-beta, glatiramer acetate), oral (fingolimod, dimethyl fumarate, teriflunomide, siponimod, ozanimod, cladribine), infusion (natalizumab, ocrelizumab, alemtuzumab, ofatumumab). High-efficacy DMTs (natalizumab, ocrelizumab, alemtuzumab) for aggressive disease. Symptomatic treatment: baclofen or tizanidine for spasticity, gabapentin for neuropathic pain, modafinil for fatigue, anticholinergics for bladder dysfunction. Physical therapy, occupational therapy. Avoid heat exposure.',
    clinicalPearls: [
      'Optic neuritis is common presenting symptom',
      'MRI shows periventricular white matter lesions perpendicular to ventricles (Dawson fingers)',
      'Disease-modifying therapies reduce relapses and slow progression',
      'Uhthoff phenomenon: symptoms worsen with heat (hot bath, exercise, fever)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/demyelinating-disorders/multiple-sclerosis-ms'
  },

  // HEADACHE DISORDERS
  {
    topic: 'Migraine',
    keywords: ['migraine', 'migraine headache', 'migraine with aura', 'migraine without aura', 'classic migraine', 'common migraine'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, migraine is a primary headache disorder characterized by recurrent attacks of moderate-severe headache with associated symptoms. Pathophysiology involves cortical spreading depression (wave of neuronal depolarization), trigeminovascular system activation, and release of vasoactive neuropeptides (CGRP, substance P). Genetic predisposition (familial hemiplegic migraine has identified mutations). Triggers include stress, sleep changes, hormonal fluctuations, certain foods, weather changes, sensory stimuli. Migraine with aura (25%): transient focal neurologic symptoms before or during headache. Migraine without aura (75%): no aura.',
    clinicalPresentation: 'Recurrent attacks lasting 4-72 hours. Headache characteristics: unilateral (60%), pulsating, moderate-severe intensity, worsened by physical activity. Associated symptoms: nausea, vomiting, photophobia, phonophobia. Aura (if present): visual (scintillating scotoma, zigzag lines, fortification spectra), sensory (paresthesias), speech, or motor symptoms, develops over 5-20 minutes, lasts <60 minutes. Prodrome (hours to days before): mood changes, food cravings, yawning, neck stiffness. Postdrome: fatigue, difficulty concentrating. Physical examination normal between attacks.',
    diagnosticApproach: 'Clinical diagnosis based on International Classification of Headache Disorders (ICHD-3) criteria. Migraine without aura: ≥5 attacks lasting 4-72 hours with headache having ≥2 of (unilateral, pulsating, moderate-severe, worsened by activity) and ≥1 of (nausea/vomiting, photophobia and phonophobia). Migraine with aura: ≥2 attacks with aura symptoms. Neuroimaging (MRI brain) if atypical features (first or worst headache, sudden onset, focal deficits, altered consciousness, age >50 with new headache, immunosuppressed). Exclude secondary headaches: giant cell arteritis (age >50), subarachnoid hemorrhage (thunderclap headache), meningitis (fever, meningismus).',
    treatment: 'Acute treatment: NSAIDs (ibuprofen, naproxen) or acetaminophen for mild attacks. Triptans (sumatriptan, rizatriptan, eletriptan) for moderate-severe attacks - most effective if taken early. Antiemetics (metoclopramide, prochlorperazine) for nausea. Avoid opioids and butalbital (medication overuse headache risk). Preventive treatment if ≥4 headache days/month or disabling attacks: first-line - propranolol, metoprolol, topiramate, valproate, amitriptyline. CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) highly effective. Botulinum toxin for chronic migraine (≥15 headache days/month). Avoid triggers, maintain regular sleep, stress management, hydration.',
    clinicalPearls: [
      'Triptans are most effective for moderate-severe migraine',
      'CGRP monoclonal antibodies are highly effective preventive therapy',
      'Medication overuse headache occurs with frequent use of acute medications (>10 days/month)',
      'Aura typically precedes headache but can occur during or without headache'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/headache/migraine'
  },

  {
    topic: 'Cluster Headache',
    keywords: ['cluster headache', 'cluster headaches', 'trigeminal autonomic cephalalgia', 'cluster'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, cluster headache is a primary headache disorder characterized by severe unilateral periorbital pain with ipsilateral autonomic features. Pathophysiology involves hypothalamic activation (circadian pattern), trigeminovascular system, and parasympathetic activation. More common in men (3:1). Occurs in clusters (periods of frequent attacks lasting weeks to months) separated by remission periods. Episodic cluster headache (80-90%): clusters last weeks to months with remissions. Chronic cluster headache (10-20%): attacks occur for >1 year without remission or with remissions <3 months.',
    clinicalPresentation: 'Severe unilateral periorbital, supraorbital, or temporal pain, described as boring, stabbing, or burning. Rapid onset, reaches maximum intensity in 5-10 minutes, lasts 15-180 minutes. Ipsilateral autonomic features: lacrimation, conjunctival injection, nasal congestion, rhinorrhea, eyelid edema, miosis, ptosis, facial sweating. Restlessness or agitation during attack (unlike migraine where patients prefer to lie still). Attacks occur 1-8 times per day, often at same time (especially at night, 1-2 hours after sleep onset). Alcohol triggers attacks during cluster period. Physical examination normal between attacks.',
    diagnosticApproach: 'Clinical diagnosis based on ICHD-3 criteria: ≥5 attacks of severe unilateral orbital, supraorbital, or temporal pain lasting 15-180 minutes, with ≥1 ipsilateral autonomic feature (lacrimation, conjunctival injection, nasal congestion, rhinorrhea, eyelid edema, miosis/ptosis, facial sweating) and/or restlessness/agitation. Attacks occur every other day to 8 per day. MRI brain with pituitary protocol to exclude secondary causes (pituitary tumor, cavernous sinus lesion, aneurysm) if atypical features. Exclude other trigeminal autonomic cephalalgias (paroxysmal hemicrania, SUNCT/SUNA).',
    treatment: 'Acute treatment: 100% oxygen 12-15 L/min via non-rebreather mask for 15-20 minutes (first-line, highly effective). Sumatriptan 6 mg subcutaneous (faster than oral). Zolmitriptan nasal spray. Preventive treatment during cluster period: verapamil 240-960 mg/day (first-line, requires ECG monitoring for heart block). Lithium for chronic cluster headache. Corticosteroids (prednisone) for short-term bridge therapy. Greater occipital nerve block. Transitional therapy: prednisone taper or occipital nerve block while starting verapamil. Avoid alcohol during cluster period. Neuromodulation (occipital nerve stimulation, sphenopalatine ganglion stimulation) for refractory cases.',
    clinicalPearls: [
      'Severe unilateral periorbital pain with autonomic features is classic',
      '100% oxygen is highly effective acute treatment',
      'Verapamil is first-line preventive therapy',
      'Attacks occur at same time daily, often at night (alarm clock headache)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/headache/cluster-headache'
  },

  // PERIPHERAL NEUROPATHY
  {
    topic: 'Diabetic Neuropathy',
    keywords: ['diabetic neuropathy', 'diabetic peripheral neuropathy', 'diabetic polyneuropathy', 'diabetes neuropathy'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, diabetic neuropathy is the most common complication of diabetes, affecting up to 50% of patients. Pathogenesis involves hyperglycemia-induced metabolic and vascular changes: polyol pathway activation, oxidative stress, advanced glycation end products, microvascular ischemia, and inflammation. Affects peripheral nerves (distal symmetric polyneuropathy most common), autonomic nerves, and cranial nerves. Risk factors: poor glycemic control, duration of diabetes, hypertension, hyperlipidemia, smoking. Types: distal symmetric polyneuropathy, autonomic neuropathy, focal neuropathies (mononeuropathy, radiculoplexus neuropathy), diabetic amyotrophy.',
    clinicalPresentation: 'Distal symmetric polyneuropathy: numbness, tingling, burning pain in feet and hands (stocking-glove distribution), worse at night. Loss of protective sensation increases foot ulcer and amputation risk. Autonomic neuropathy: orthostatic hypotension, resting tachycardia, gastroparesis, constipation, diarrhea, erectile dysfunction, bladder dysfunction, sudomotor dysfunction (anhidrosis). Focal neuropathies: sudden onset, cranial nerve palsies (III, VI, VII), mononeuropathies (median, ulnar, peroneal), radiculoplexus neuropathy (diabetic amyotrophy - proximal leg weakness and pain). Physical examination: decreased sensation to pinprick, vibration, and monofilament; decreased ankle reflexes; foot deformities; autonomic signs.',
    diagnosticApproach: 'Clinical diagnosis based on symptoms and signs in patient with diabetes. Exclude other causes: vitamin B12 deficiency, hypothyroidism, uremia, alcohol, medications. Nerve conduction studies and EMG confirm polyneuropathy (reduced amplitudes, slowed conduction velocities) and exclude other causes (CIDP, vasculitis). Quantitative sensory testing assesses small fiber function. Autonomic testing: heart rate variability, tilt table test, sudomotor testing. Monofilament testing (10-g monofilament) screens for loss of protective sensation. Assess for complications: foot examination for ulcers, deformities.',
    treatment: 'Glycemic control is paramount - slows progression but does not reverse established neuropathy. Target HbA1c <7%. Neuropathic pain management: first-line - pregabalin, gabapentin, duloxetine, or tricyclic antidepressants (amitriptyline, nortriptyline). Topical agents: capsaicin cream, lidocaine patches. Avoid opioids if possible. Foot care: daily inspection, proper footwear, podiatry referrals, treat ulcers aggressively. Autonomic neuropathy: fludrocortisone or midodrine for orthostatic hypotension, metoclopramide or domperidone for gastroparesis, sildenafil for erectile dysfunction. Physical therapy for weakness. Diabetic amyotrophy: immunotherapy (IVIG, corticosteroids) may help.',
    clinicalPearls: [
      'Most common complication of diabetes',
      'Glycemic control slows progression but does not reverse neuropathy',
      'Loss of protective sensation increases foot ulcer and amputation risk',
      'Pregabalin, gabapentin, and duloxetine are first-line for neuropathic pain'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/peripheral-nervous-system-and-motor-unit-disorders/diabetic-neuropathy'
  },

  {
    topic: 'Guillain-Barré Syndrome',
    keywords: ['guillain barre syndrome', 'guillain-barré syndrome', 'gbs', 'acute inflammatory demyelinating polyneuropathy', 'aidp'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, Guillain-Barré syndrome is an acute immune-mediated polyneuropathy causing rapidly progressive weakness. Triggered by preceding infection (Campylobacter jejuni most common, also CMV, EBV, Zika, COVID-19) or vaccination. Molecular mimicry: antibodies against infectious agents cross-react with peripheral nerve components. Subtypes: acute inflammatory demyelinating polyneuropathy (AIDP, most common in Western countries - demyelination), acute motor axonal neuropathy (AMAN - axonal, more common in Asia), acute motor-sensory axonal neuropathy (AMSAN - axonal, severe), Miller Fisher syndrome (ophthalmoplegia, ataxia, areflexia). Respiratory failure occurs in 20-30%.',
    clinicalPresentation: 'Ascending symmetric weakness starting in legs, progressing over days to weeks (nadir at 2-4 weeks). Areflexia or hyporeflexia. Sensory symptoms (paresthesias, pain) common but less prominent than weakness. Facial weakness (50%), ophthalmoplegia, bulbar weakness (dysphagia, dysarthria). Autonomic dysfunction: tachycardia, bradycardia, blood pressure fluctuations, ileus, urinary retention. Respiratory muscle weakness causes dyspnea, reduced vital capacity. Physical examination: flaccid weakness (legs > arms), areflexia, sensory loss (mild), facial diplegia, respiratory distress. Miller Fisher syndrome: ophthalmoplegia, ataxia, areflexia without significant weakness.',
    diagnosticApproach: 'Clinical diagnosis based on progressive symmetric weakness with areflexia. Lumbar puncture: albuminocytologic dissociation (elevated CSF protein >45 mg/dL with normal cell count <10 cells/μL), develops after first week. Nerve conduction studies: demyelinating features in AIDP (prolonged distal latencies, slowed conduction velocities, conduction block, prolonged F-waves), reduced amplitudes in AMAN/AMSAN. Anti-ganglioside antibodies: anti-GQ1b in Miller Fisher syndrome, anti-GM1 in AMAN. Monitor respiratory function: vital capacity, negative inspiratory force (intubate if VC <15-20 mL/kg or NIF <-30 cm H2O). Exclude other causes: spinal cord compression (MRI), myasthenia gravis, botulism, tick paralysis.',
    treatment: 'Supportive care in ICU or monitored setting. Monitor respiratory function closely - intubate if vital capacity <15-20 mL/kg, declining rapidly, or unable to clear secretions. Immunotherapy: IVIG 0.4 g/kg/day for 5 days or plasma exchange (5-6 exchanges over 10-14 days) - equally effective, start within 2 weeks of symptom onset. Corticosteroids not effective. Treat autonomic dysfunction: atropine for bradycardia, beta-blockers for tachycardia, avoid sudden position changes. Pain management: gabapentin, opioids. DVT prophylaxis. Physical therapy during recovery. Most patients recover fully or near-fully over months, but 20% have residual deficits. Mortality 3-5%.',
    clinicalPearls: [
      'Ascending weakness with areflexia after infection is classic',
      'Respiratory failure occurs in 20-30% - monitor vital capacity closely',
      'IVIG and plasma exchange are equally effective',
      'Most patients recover fully but recovery takes months'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/peripheral-nervous-system-and-motor-unit-disorders/guillain-barr%C3%A9-syndrome-gbs'
  },

  // NEUROMUSCULAR DISORDERS
  {
    topic: 'Myasthenia Gravis',
    keywords: ['myasthenia gravis', 'mg', 'myasthenia', 'neuromuscular junction disorder'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, myasthenia gravis is an autoimmune disorder of the neuromuscular junction characterized by fluctuating weakness and fatigability. Antibodies against acetylcholine receptors (AChR, 85%) or muscle-specific kinase (MuSK, 5-10%) impair neuromuscular transmission. AChR antibodies cause complement-mediated destruction of postsynaptic receptors. Associated with thymic abnormalities: thymic hyperplasia (60-70%) or thymoma (10-15%). Ocular myasthenia (15%): weakness limited to extraocular and eyelid muscles. Generalized myasthenia (85%): ocular plus bulbar, limb, or respiratory muscles. Myasthenic crisis: respiratory failure requiring mechanical ventilation.',
    clinicalPresentation: 'Fluctuating weakness worsening with activity and improving with rest. Ocular symptoms most common: ptosis, diplopia (worse at end of day or with sustained upgaze). Bulbar weakness: dysarthria, dysphagia, nasal speech, difficulty chewing. Limb weakness: proximal > distal, difficulty with repetitive activities (brushing hair, climbing stairs). Respiratory weakness: dyspnea, orthopnea, weak cough. Physical examination: fatigable ptosis (worsens with sustained upgaze), ophthalmoparesis, facial weakness, weak neck flexion, proximal limb weakness. Reflexes and sensation normal. Myasthenic crisis: respiratory failure, bulbar weakness with aspiration risk.',
    diagnosticApproach: 'Serologic testing: AChR antibodies (85% sensitivity in generalized MG, 50% in ocular MG), MuSK antibodies (5-10%, seronegative for AChR). Repetitive nerve stimulation: >10% decrement in compound muscle action potential amplitude with 3 Hz stimulation. Single-fiber EMG: increased jitter (most sensitive test). Edrophonium (Tensilon) test: transient improvement in weakness after IV edrophonium (short-acting acetylcholinesterase inhibitor) - rarely used now. Ice pack test: improvement in ptosis after ice applied to closed eyelid for 2 minutes. CT chest to detect thymoma. Pulmonary function tests: vital capacity, negative inspiratory force. Exclude other causes: Lambert-Eaton syndrome, botulism.',
    treatment: 'Symptomatic treatment: pyridostigmine (acetylcholinesterase inhibitor) 30-120 mg q4-6h, improves strength but does not alter disease course. Immunosuppression: corticosteroids (prednisone) first-line, start low and increase gradually (high initial dose can worsen weakness). Steroid-sparing agents: azathioprine, mycophenolate, cyclosporine. Thymectomy for thymoma (mandatory) or generalized MG age <60 (improves outcomes). Acute treatment for myasthenic crisis or severe exacerbation: IVIG 2 g/kg over 2-5 days or plasma exchange. Avoid medications that worsen MG: aminoglycosides, fluoroquinolones, beta-blockers, magnesium. Monitor respiratory function. Myasthenic crisis: intubation, mechanical ventilation, IVIG or plasma exchange.',
    clinicalPearls: [
      'Fluctuating weakness worsening with activity is hallmark',
      'Ptosis and diplopia are most common presenting symptoms',
      'Thymectomy improves outcomes in generalized MG',
      'Myasthenic crisis is medical emergency requiring ICU care'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/peripheral-nervous-system-and-motor-unit-disorders/myasthenia-gravis-mg'
  },

  // ADDITIONAL NEUROLOGIC CONDITIONS
  {
    topic: 'Meningitis',
    keywords: ['meningitis', 'bacterial meningitis', 'viral meningitis', 'aseptic meningitis', 'meningeal infection', 'brain infection meningitis'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, meningitis is inflammation of the meninges (pia, arachnoid, subarachnoid space). Bacterial meningitis is medical emergency with high mortality if untreated. Common bacterial pathogens: Streptococcus pneumoniae (most common in adults), Neisseria meningitidis, Listeria monocytogenes (elderly, immunocompromised), Haemophilus influenzae (rare since vaccination). Viral meningitis (aseptic meningitis) is more common and benign, caused by enteroviruses, HSV-2, VZV. Pathogens reach meninges via hematogenous spread, direct extension (sinusitis, otitis), or CSF shunt infection. Inflammation causes increased intracranial pressure, cerebral edema, and vascular complications.',
    clinicalPresentation: 'Classic triad: fever, headache, and neck stiffness. Altered mental status, photophobia, nausea, vomiting, and seizures. Bacterial meningitis: acute onset over hours, severe illness. Viral meningitis: subacute onset over days, less severe. Physical examination: fever, meningismus (nuchal rigidity, Kernig sign, Brudzinski sign), altered consciousness, focal neurologic deficits (suggest complications), petechial or purpuric rash (meningococcemia). Complications include cerebral edema, hydrocephalus, stroke, subdural empyema, and brain abscess.',
    diagnosticApproach: 'Lumbar puncture is diagnostic (after CT if concern for mass effect or increased ICP). CSF analysis: Bacterial meningitis - elevated opening pressure, elevated WBC (>1000/μL, neutrophil predominance), elevated protein (>200 mg/dL), low glucose (<40 mg/dL or CSF:serum ratio <0.4), positive Gram stain (60-90%), positive culture. Viral meningitis - normal or mildly elevated WBC (<500/μL, lymphocyte predominance), normal or mildly elevated protein, normal glucose, negative Gram stain and culture. CSF PCR for viruses (HSV, enterovirus). Blood cultures before antibiotics. CT head before LP if focal deficits, papilledema, immunocompromised, or altered consciousness.',
    treatment: 'Bacterial meningitis: immediate empiric antibiotics (do not delay for LP if suspicion high). Adults: ceftriaxone 2g IV q12h plus vancomycin 15-20 mg/kg IV q8-12h. Add ampicillin if age >50 or immunocompromised (Listeria coverage). Adjust based on culture and sensitivities. Dexamethasone 10 mg IV q6h for 4 days (give before or with first antibiotic dose) reduces mortality and neurologic sequelae in pneumococcal meningitis. Supportive care: fluids, treat increased ICP, seizure prophylaxis. Viral meningitis: supportive care, acyclovir if HSV suspected. Chemoprophylaxis for close contacts of meningococcal meningitis (rifampin, ciprofloxacin, ceftriaxone). Vaccinations prevent disease (pneumococcal, meningococcal, Hib).',
    clinicalPearls: [
      'Do not delay antibiotics for lumbar puncture if bacterial meningitis suspected',
      'Dexamethasone reduces mortality in pneumococcal meningitis',
      'Petechial rash suggests meningococcemia - medical emergency',
      'CSF glucose <40 mg/dL or CSF:serum ratio <0.4 suggests bacterial meningitis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/meningitis/acute-bacterial-meningitis'
  },

  {
    topic: 'Encephalitis',
    keywords: ['encephalitis', 'viral encephalitis', 'herpes encephalitis', 'hsv encephalitis', 'brain inflammation encephalitis'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, encephalitis is inflammation of brain parenchyma, most commonly from viral infection. Herpes simplex virus (HSV-1) is most common identified cause of sporadic encephalitis in developed countries, with predilection for temporal lobes. Other causes: arboviruses (West Nile, Eastern equine), enteroviruses, VZV, CMV (immunocompromised), rabies, autoimmune (anti-NMDA receptor encephalitis). Inflammation causes neuronal injury, cerebral edema, and hemorrhagic necrosis (HSV). Mortality and morbidity high, especially if treatment delayed.',
    clinicalPresentation: 'Acute or subacute onset of fever, headache, altered mental status (confusion, disorientation, behavioral changes), and seizures. Focal neurologic deficits, aphasia, and movement disorders may occur. HSV encephalitis: temporal lobe involvement causes personality changes, olfactory or gustatory hallucinations, memory impairment, aphasia. Physical examination: fever, altered consciousness, meningismus, focal deficits, seizures. Complications include status epilepticus, increased intracranial pressure, and permanent neurologic sequelae.',
    diagnosticApproach: 'Lumbar puncture: CSF shows lymphocytic pleocytosis (10-500 WBC/μL), elevated protein, normal glucose. RBCs and xanthochromia suggest HSV (hemorrhagic). CSF PCR for HSV (sensitivity >95%, specificity >99%), enteroviruses, VZV, West Nile virus. MRI brain: HSV shows T2/FLAIR hyperintensity in temporal lobes (often bilateral but asymmetric), may have hemorrhage. EEG: periodic lateralized epileptiform discharges (PLEDs) in HSV, diffuse slowing. Blood cultures, serology for arboviruses. Autoimmune encephalitis panel if atypical features. Brain biopsy rarely needed.',
    treatment: 'HSV encephalitis: acyclovir 10 mg/kg IV q8h for 14-21 days - start immediately if suspected, do not wait for CSF results. VZV: acyclovir 10-15 mg/kg IV q8h. CMV: ganciclovir or foscarnet. Supportive care: treat seizures (antiseizure medications), manage increased ICP, maintain airway. Autoimmune encephalitis: immunotherapy (corticosteroids, IVIG, plasma exchange, rituximab). Prognosis: HSV encephalitis has 70% mortality if untreated, 20-30% with treatment; survivors often have neurologic sequelae (memory impairment, seizures, personality changes). Early treatment improves outcomes.',
    clinicalPearls: [
      'HSV encephalitis is most common cause of sporadic viral encephalitis',
      'Start acyclovir immediately if HSV encephalitis suspected',
      'Temporal lobe involvement on MRI suggests HSV',
      'CSF PCR for HSV is highly sensitive and specific'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/meningitis/encephalitis'
  },

  {
    topic: 'Bell Palsy',
    keywords: ['bell palsy', 'bell\'s palsy', 'facial nerve palsy', 'facial paralysis idiopathic', 'peripheral facial palsy'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, Bell palsy is acute idiopathic peripheral facial nerve (CN VII) palsy, the most common cause of unilateral facial weakness. Thought to result from viral infection (HSV-1 most likely) causing inflammation and edema of facial nerve within the facial canal, leading to compression and ischemia. Accounts for 60-75% of acute unilateral facial palsies. Most patients recover fully, but 20-30% have residual weakness or synkinesis.',
    clinicalPresentation: 'Sudden onset (over hours to days) of unilateral facial weakness affecting both upper and lower face (distinguishes from central facial palsy which spares forehead). Inability to close eye, raise eyebrow, smile, or wrinkle forehead on affected side. Associated symptoms: ear pain (50%), altered taste (anterior 2/3 of tongue), hyperacusis (stapedius muscle paralysis), decreased tearing. Physical examination: complete unilateral facial weakness including forehead (peripheral pattern), inability to close eye (lagophthalmos), loss of nasolabial fold, drooping of mouth corner. Sensation intact.',
    diagnosticApproach: 'Clinical diagnosis based on acute unilateral peripheral facial palsy without other neurologic deficits. Exclude other causes: Lyme disease (endemic areas, bilateral facial palsy, CSF pleocytosis), Ramsay Hunt syndrome (herpes zoster - vesicles in ear canal or palate, more severe), stroke (central pattern sparing forehead, other neurologic deficits), parotid tumor, sarcoidosis. Lyme serology if endemic area. MRI with gadolinium if atypical features, bilateral, or recurrent. EMG/nerve conduction studies if no recovery by 3 months (assess for axonal degeneration).',
    treatment: 'Corticosteroids within 72 hours of onset improve recovery: prednisone 60-80 mg daily for 7 days, then taper. Antiviral therapy (valacyclovir or acyclovir) controversial - may add to steroids but benefit unclear. Eye protection essential: artificial tears during day, lubricating ointment at night, eye patch or taping eye closed at night (prevent corneal abrasion and exposure keratitis). Physical therapy: facial exercises may help. Most patients (70-80%) recover fully within 3-6 months. Poor prognostic factors: complete paralysis, no recovery by 3 weeks, advanced age, diabetes, Ramsay Hunt syndrome.',
    clinicalPearls: [
      'Peripheral facial palsy affects forehead (cannot raise eyebrow or wrinkle forehead)',
      'Corticosteroids within 72 hours improve recovery',
      'Eye protection essential to prevent corneal damage',
      'Most patients recover fully within 3-6 months'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/neuro-ophthalmologic-and-cranial-nerve-disorders/facial-nerve-palsy'
  },

  {
    topic: 'Trigeminal Neuralgia',
    keywords: ['trigeminal neuralgia', 'tic douloureux', 'trigeminal nerve pain', 'facial neuralgia'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, trigeminal neuralgia is a chronic pain disorder affecting the trigeminal nerve (CN V), characterized by brief episodes of severe, lancinating facial pain. Classic (idiopathic) trigeminal neuralgia results from vascular compression of trigeminal nerve root (usually by superior cerebellar artery) causing demyelination and ephaptic transmission. Secondary trigeminal neuralgia caused by multiple sclerosis, tumor, or vascular malformation. More common in women and age >50 years.',
    clinicalPresentation: 'Sudden, severe, electric shock-like pain in distribution of one or more trigeminal nerve divisions (V2 and V3 most common). Pain lasts seconds to 2 minutes, may occur in clusters. Triggered by light touch to trigger zones (face, lips, teeth), talking, chewing, brushing teeth, cold wind. Pain-free intervals between attacks. No sensory loss or weakness. Physical examination normal except for trigger zones. Constant pain or sensory deficits suggest secondary cause. Bilateral involvement suggests multiple sclerosis.',
    diagnosticApproach: 'Clinical diagnosis based on characteristic pain pattern. MRI brain with thin cuts through posterior fossa to identify vascular compression or secondary causes (MS plaques, tumor, vascular malformation). Exclude dental pathology (dental examination, panoramic X-ray). Exclude other facial pain syndromes: atypical facial pain (constant, poorly localized), glossopharyngeal neuralgia (pain in throat, ear, tongue base, triggered by swallowing), post-herpetic neuralgia (history of zoster, constant burning pain).',
    treatment: 'Medical therapy first-line: carbamazepine 100-200 mg BID, titrate to 600-1200 mg/day (most effective, 70-80% response). Oxcarbazepine alternative (fewer side effects). Second-line: lamotrigine, gabapentin, baclofen, phenytoin. Surgical options for refractory cases: microvascular decompression (most effective, 80-90% pain-free, but invasive), stereotactic radiosurgery (Gamma Knife), percutaneous procedures (radiofrequency ablation, glycerol injection, balloon compression). Avoid triggers. Most patients require lifelong treatment.',
    clinicalPearls: [
      'Electric shock-like pain triggered by light touch is pathognomonic',
      'Carbamazepine is most effective medical treatment',
      'Bilateral involvement suggests multiple sclerosis',
      'Microvascular decompression is most effective surgical treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/pain/trigeminal-neuralgia'
  },

  {
    topic: 'Amyotrophic Lateral Sclerosis',
    keywords: ['amyotrophic lateral sclerosis', 'als', 'lou gehrig disease', 'motor neuron disease'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, amyotrophic lateral sclerosis is a progressive neurodegenerative disorder affecting upper motor neurons (corticospinal tracts) and lower motor neurons (anterior horn cells, brainstem motor nuclei). Causes progressive muscle weakness, atrophy, and spasticity. Etiology unknown in most cases (sporadic ALS, 90%); familial ALS (10%) has identified genetic mutations (SOD1, C9orf72, TARDBP, FUS). Pathology shows motor neuron loss, protein aggregates (TDP-43, SOD1), and gliosis. Median survival 3-5 years from symptom onset. Respiratory failure is most common cause of death.',
    clinicalPresentation: 'Progressive asymmetric weakness starting in limbs (70% - limb-onset ALS) or bulbar muscles (30% - bulbar-onset ALS). Limb-onset: hand weakness (difficulty with fine motor tasks), foot drop, tripping. Bulbar-onset: dysarthria, dysphagia, tongue weakness. Upper motor neuron signs: spasticity, hyperreflexia, Babinski sign. Lower motor neuron signs: weakness, atrophy, fasciculations. Combination of UMN and LMN signs is characteristic. Preserved cognition in most (frontotemporal dementia in 15%). No sensory loss, bowel/bladder dysfunction, or eye movement abnormalities (until late). Physical examination: weakness, atrophy, fasciculations, spasticity, hyperreflexia, Babinski sign, bulbar weakness (tongue atrophy, fasciculations).',
    diagnosticApproach: 'Clinical diagnosis based on progressive UMN and LMN signs in multiple regions without sensory loss. Revised El Escorial criteria: UMN and LMN signs in ≥2 regions (bulbar, cervical, thoracic, lumbosacral). EMG shows active denervation (fibrillations, positive sharp waves) and chronic denervation (large motor units) in multiple regions. Nerve conduction studies normal (excludes neuropathy). MRI brain and spine excludes structural lesions (cervical myelopathy, foramen magnum lesion). Exclude ALS mimics: multifocal motor neuropathy (anti-GM1 antibodies, conduction block), Kennedy disease (X-linked, gynecomastia, sensory involvement), myasthenia gravis, inclusion body myositis. Genetic testing if family history.',
    treatment: 'No cure. Disease-modifying therapy: riluzole 50 mg BID (glutamate antagonist) prolongs survival by 2-3 months. Edaravone (antioxidant) may slow decline in some patients. Symptomatic treatment: baclofen or tizanidine for spasticity, quinine or mexiletine for cramps, amitriptyline for sialorrhea, botulinum toxin for severe sialorrhea. Bulbar dysfunction: speech therapy, modified diet, feeding tube (PEG) when needed. Respiratory support: non-invasive ventilation (BiPAP) prolongs survival and improves quality of life, invasive ventilation (tracheostomy) for long-term support. Multidisciplinary care: physical therapy, occupational therapy, respiratory therapy, nutrition, palliative care. Advance directives. Median survival 3-5 years, but highly variable (10% survive >10 years).',
    clinicalPearls: [
      'Combination of UMN and LMN signs without sensory loss is characteristic',
      'Riluzole modestly prolongs survival',
      'Non-invasive ventilation improves survival and quality of life',
      'Preserved cognition in most patients (unlike frontotemporal dementia)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/peripheral-nervous-system-and-motor-unit-disorders/amyotrophic-lateral-sclerosis-als-and-other-motor-neuron-diseases-mnd'
  },

  {
    topic: 'Normal Pressure Hydrocephalus',
    keywords: ['normal pressure hydrocephalus', 'nph', 'communicating hydrocephalus', 'idiopathic normal pressure hydrocephalus'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, normal pressure hydrocephalus is a form of communicating hydrocephalus characterized by ventricular enlargement with normal or intermittently elevated CSF pressure. Impaired CSF absorption at arachnoid granulations causes gradual ventricular dilation. Idiopathic NPH (most common) occurs in elderly without clear cause. Secondary NPH follows subarachnoid hemorrhage, meningitis, or head trauma. Ventricular enlargement compresses periventricular white matter tracts, affecting motor, cognitive, and bladder control pathways. Potentially reversible with CSF shunting.',
    clinicalPresentation: 'Classic triad: gait disturbance (magnetic gait - shuffling, wide-based, difficulty initiating walking, "feet stuck to floor"), cognitive impairment (executive dysfunction, psychomotor slowing, memory impairment), and urinary incontinence (urgency, frequency, then incontinence). Gait disturbance typically appears first and is most prominent. Physical examination: magnetic gait, frontal release signs, cognitive impairment. No papilledema (normal ICP). Symptoms develop insidiously over months to years.',
    diagnosticApproach: 'MRI brain shows ventriculomegaly out of proportion to cortical atrophy (Evans index >0.3 - ratio of maximal frontal horn width to maximal internal skull diameter). Periventricular T2/FLAIR hyperintensity. Narrow sulci at high convexity. Exclude other causes of dementia and gait disorder. High-volume lumbar puncture (30-50 mL CSF removal) or external lumbar drain (3 days) with pre- and post-gait assessment predicts shunt response (improvement suggests NPH). CSF opening pressure normal (5-18 cm H2O). Neuropsychological testing documents cognitive impairment.',
    treatment: 'Ventriculoperitoneal shunt is definitive treatment for patients with positive tap test or high clinical suspicion. Programmable shunt allows pressure adjustment. Improvement occurs in 50-80% of patients, especially gait (most responsive), then cognition, then urinary symptoms. Complications: subdural hematoma, shunt infection, over-drainage, under-drainage. Monitor for shunt malfunction. Prognosis: early diagnosis and treatment improve outcomes. Untreated NPH causes progressive disability.',
    clinicalPearls: [
      'Triad: gait disturbance, cognitive impairment, urinary incontinence',
      'Gait disturbance typically appears first and is most responsive to shunting',
      'Large ventricles with narrow sulci on MRI is characteristic',
      'High-volume LP with gait improvement predicts shunt response'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/delirium-and-dementia/normal-pressure-hydrocephalus-nph'
  },

  {
    topic: 'Restless Legs Syndrome',
    keywords: ['restless legs syndrome', 'rls', 'willis ekbom disease', 'restless leg syndrome'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, restless legs syndrome is a sensorimotor disorder characterized by an urge to move the legs, usually accompanied by uncomfortable sensations. Pathophysiology involves dopaminergic dysfunction in basal ganglia and spinal cord, and iron deficiency in substantia nigra. Primary RLS is idiopathic with genetic component (familial in 50%). Secondary RLS associated with iron deficiency, pregnancy, end-stage renal disease, peripheral neuropathy, and medications (antidopaminergic agents, antidepressants). Circadian pattern with symptoms worse in evening and at rest.',
    clinicalPresentation: 'Urge to move legs with uncomfortable sensations (crawling, tingling, aching, pulling) deep in legs. Symptoms begin or worsen at rest, relieved by movement (walking, stretching), and worse in evening or night. Interferes with sleep onset and maintenance, causing daytime fatigue and impaired quality of life. Periodic limb movements during sleep (PLMS) occur in 80%. Physical examination normal. Neurologic examination normal unless secondary cause (neuropathy).',
    diagnosticApproach: 'Clinical diagnosis based on International Restless Legs Syndrome Study Group criteria: 1) Urge to move legs with uncomfortable sensations, 2) Symptoms begin or worsen at rest, 3) Symptoms relieved by movement, 4) Symptoms worse in evening/night, 5) Not better explained by another condition. Assess for secondary causes: serum ferritin (iron deficiency if <75 ng/mL), CBC (anemia), renal function, glucose, peripheral neuropathy evaluation. Polysomnography if sleep apnea suspected or to document PLMS. Exclude mimics: peripheral neuropathy, nocturnal leg cramps, positional discomfort.',
    treatment: 'Treat secondary causes: iron supplementation if ferritin <75 ng/mL (oral or IV iron), discontinue exacerbating medications. Non-pharmacologic: sleep hygiene, regular exercise, avoid caffeine and alcohol, leg massage, warm bath. Pharmacologic for moderate-severe symptoms: alpha-2-delta ligands (gabapentin, pregabalin) first-line. Dopamine agonists (pramipexole, ropinirole) effective but risk of augmentation (worsening of symptoms with long-term use). Rotigotine patch alternative. Opioids (oxycodone, methadone) for refractory cases. Avoid dopamine antagonists (antipsychotics, metoclopramide) which worsen symptoms.',
    clinicalPearls: [
      'Urge to move legs worse at rest and in evening is diagnostic',
      'Iron supplementation if ferritin <75 ng/mL',
      'Gabapentin and pregabalin are first-line (avoid augmentation risk with dopamine agonists)',
      'Augmentation: worsening of symptoms with dopamine agonists, occurs in 30-50%'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/sleep-and-wakefulness-disorders/restless-legs-syndrome-rls-and-periodic-limb-movement-disorder-plmd'
  },

  {
    topic: 'Carpal Tunnel Syndrome',
    keywords: ['carpal tunnel syndrome', 'cts', 'median nerve compression', 'median neuropathy wrist'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, carpal tunnel syndrome is compression of the median nerve as it passes through the carpal tunnel at the wrist. Most common entrapment neuropathy. Causes include repetitive hand use, pregnancy, hypothyroidism, diabetes, rheumatoid arthritis, acromegaly, and idiopathic. Increased pressure within carpal tunnel causes nerve ischemia and demyelination. Chronic compression leads to axonal loss and permanent nerve damage.',
    clinicalPresentation: 'Numbness, tingling, and pain in median nerve distribution (thumb, index, middle, and radial half of ring finger). Symptoms worse at night, may wake patient from sleep. Shaking hands relieves symptoms (flick sign). Weakness of thumb abduction and opposition in advanced cases. Physical examination: decreased sensation in median distribution, weak thumb abduction (abductor pollicis brevis), thenar atrophy in severe cases. Tinel sign (tapping over carpal tunnel causes paresthesias) and Phalen sign (wrist flexion for 60 seconds reproduces symptoms) have moderate sensitivity and specificity.',
    diagnosticApproach: 'Clinical diagnosis based on symptoms and signs. Nerve conduction studies confirm diagnosis and assess severity: prolonged distal motor latency (>4.5 ms), prolonged sensory latency, reduced sensory amplitude. EMG shows denervation in thenar muscles if severe. Exclude other causes: cervical radiculopathy (C6-C7), brachial plexopathy, polyneuropathy. Assess for underlying causes: TSH (hypothyroidism), glucose (diabetes), rheumatoid factor.',
    treatment: 'Conservative treatment for mild-moderate symptoms: wrist splint (neutral position) at night, activity modification, NSAIDs. Corticosteroid injection into carpal tunnel provides temporary relief. Surgical carpal tunnel release (open or endoscopic) for severe symptoms, thenar atrophy, failed conservative treatment, or abnormal nerve conduction studies. Surgery highly effective (>90% success rate). Treat underlying causes. Prognosis: excellent with treatment, but permanent nerve damage if severe and untreated.',
    clinicalPearls: [
      'Most common entrapment neuropathy',
      'Symptoms worse at night is characteristic',
      'Nerve conduction studies confirm diagnosis and assess severity',
      'Surgical release is highly effective for refractory cases'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/peripheral-nervous-system-and-motor-unit-disorders/carpal-tunnel-syndrome'
  },

  {
    topic: 'Vertigo',
    keywords: ['vertigo', 'benign paroxysmal positional vertigo', 'bppv', 'vestibular neuritis', 'labyrinthitis', 'dizziness vertigo'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, vertigo is an illusion of movement (spinning, tilting, swaying), indicating vestibular system dysfunction. Peripheral vertigo (most common): inner ear disorders - benign paroxysmal positional vertigo (BPPV, most common - displaced otoconia in semicircular canals), vestibular neuritis (viral inflammation of vestibular nerve), Meniere disease (endolymphatic hydrops), labyrinthitis (infection). Central vertigo: brainstem or cerebellar lesions - stroke, multiple sclerosis, tumor, migraine. BPPV triggered by head position changes. Vestibular neuritis follows viral illness.',
    clinicalPresentation: 'Vertigo (spinning sensation), nausea, vomiting, nystagmus, and imbalance. BPPV: brief episodes (<1 minute) triggered by head position changes (rolling over in bed, looking up, bending forward). Vestibular neuritis: acute onset, severe vertigo lasting days, gradual improvement over weeks. Meniere disease: episodic vertigo (20 minutes to hours) with hearing loss, tinnitus, aural fullness. Central vertigo: associated neurologic symptoms (diplopia, dysarthria, ataxia, weakness, sensory loss). Physical examination: nystagmus (peripheral - horizontal-rotatory, suppressed by visual fixation; central - vertical or direction-changing, not suppressed), positive Dix-Hallpike test (BPPV), abnormal head impulse test (vestibular neuritis), cerebellar signs (central).',
    diagnosticApproach: 'Distinguish peripheral from central vertigo. Peripheral features: horizontal-rotatory nystagmus, positive head impulse test, no neurologic deficits. Central features: vertical or direction-changing nystagmus, negative head impulse test, neurologic deficits, severe imbalance. BPPV: Dix-Hallpike maneuver reproduces vertigo and nystagmus after latency. Audiometry for hearing loss (Meniere disease, acoustic neuroma). MRI brain if central vertigo suspected or atypical features. Exclude stroke in elderly with vascular risk factors.',
    treatment: 'BPPV: canalith repositioning maneuvers (Epley maneuver for posterior canal, 80-90% success rate). Vestibular neuritis: vestibular suppressants (meclizine, diazepam) for acute symptoms (3-5 days only), corticosteroids within 3 days may improve recovery, vestibular rehabilitation exercises accelerate compensation. Meniere disease: low-sodium diet, diuretics (hydrochlorothiazide), betahistine, intratympanic gentamicin or surgery for refractory cases. Central vertigo: treat underlying cause (stroke, MS). Avoid prolonged use of vestibular suppressants (delay central compensation).',
    clinicalPearls: [
      'BPPV is most common cause of vertigo',
      'Epley maneuver is highly effective for BPPV',
      'Vestibular neuritis: acute severe vertigo with normal hearing',
      'Central vertigo requires neuroimaging to exclude stroke'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/ear-nose-and-throat-disorders/approach-to-the-patient-with-ear-problems/vertigo'
  },
];
