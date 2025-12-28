
/**
 * Emergency Medicine System Knowledge Base - Merck Manual Professional
 * 
 * PHASE 8: COMPLETE EMERGENCY MEDICINE SYSTEM
 * 
 * Comprehensive emergency medicine knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major emergency conditions including:
 * - Shock and resuscitation (hemorrhagic, septic, cardiogenic, obstructive, neurogenic)
 * - Cardiovascular emergencies (ACS, arrhythmias, cardiac arrest, hypertensive emergencies)
 * - Pulmonary and airway emergencies (respiratory failure, PE, pneumothorax, ARDS)
 * - Trauma (head injury, chest trauma, abdominal trauma, hemorrhage control)
 * - Neurologic and toxicologic emergencies (altered mental status, overdose, seizures)
 * - Infectious emergencies (sepsis, meningitis, severe infections)
 * 
 * Each entry includes:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * PHASE 8 ENHANCEMENTS:
 * - Enhanced keyword specificity to prevent content bleeding
 * - Disease-specific modifiers ensure precise matching
 * - Keyword hooks enable focused responses (pathophysiology, clinical, diagnostic, treatment)
 * - Maintains same integrity as previous medical specialty sections
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const emergencyMedicineKnowledge: MerckManualEntry[] = [
  // SHOCK AND RESUSCITATION
  {
    topic: 'Hemorrhagic Shock',
    keywords: ['hemorrhagic shock', 'hypovolemic shock', 'blood loss shock', 'traumatic shock', 'hemorrhage shock'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, hemorrhagic shock results from acute blood loss causing inadequate tissue perfusion. Blood loss >15-20% of circulating volume triggers compensatory mechanisms: tachycardia, peripheral vasoconstriction, and increased cardiac contractility. Continued blood loss overwhelms compensation, leading to hypotension, organ hypoperfusion, and metabolic acidosis. The trauma triad of death (hypothermia, acidosis, coagulopathy) develops with severe hemorrhage. Hemorrhagic shock is classified into four classes based on blood loss: Class I (<15%), Class II (15-30%), Class III (30-40%), Class IV (>40%).',
    clinicalPresentation: 'Early signs: tachycardia, anxiety, cool extremities, delayed capillary refill. Class I: minimal symptoms. Class II: tachycardia, tachypnea, decreased pulse pressure, anxiety. Class III: hypotension, altered mental status, oliguria, marked tachycardia. Class IV: profound hypotension, obtunded, anuria, weak or absent peripheral pulses. Physical examination reveals pale, cool, clammy skin, weak pulses, and signs of blood loss source. Shock index (HR/SBP) >0.9 suggests significant hemorrhage.',
    diagnosticApproach: 'Clinical diagnosis based on signs of shock and evidence of blood loss. Laboratory: CBC (hemoglobin may be normal initially), lactate (elevated >2 mmol/L indicates tissue hypoperfusion), base deficit, coagulation studies (PT, PTT, fibrinogen). Imaging: FAST exam for intra-abdominal bleeding, chest X-ray for hemothorax, CT scan if stable. Identify bleeding source: external hemorrhage, chest, abdomen, pelvis, retroperitoneum, long bone fractures. Monitor vital signs, urine output, and lactate trends.',
    treatment: 'Immediate hemorrhage control: direct pressure, tourniquets for extremity bleeding, pelvic binder for pelvic fractures. Massive transfusion protocol (MTP): balanced resuscitation with 1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets. Permissive hypotension (SBP 80-90 mmHg) until hemorrhage controlled, except in traumatic brain injury. Tranexamic acid within 3 hours of injury reduces mortality. Avoid excessive crystalloid (worsens coagulopathy). Definitive hemorrhage control: surgery, angioembolization, or endoscopy. Prevent hypothermia with warming measures. Correct coagulopathy with blood products and calcium.',
    clinicalPearls: [
      'Hypotension is a late sign - tachycardia and altered mental status appear first',
      'Permissive hypotension prevents clot disruption but contraindicated in TBI',
      'Massive transfusion protocol prevents dilutional coagulopathy',
      'Shock index >0.9 predicts need for massive transfusion'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/shock-and-fluid-resuscitation/hemorrhagic-shock'
  },

  {
    topic: 'Septic Shock',
    keywords: ['septic shock', 'sepsis shock', 'distributive shock sepsis', 'septic hypotension', 'sepsis vasopressor'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, septic shock is sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg and lactate >2 mmol/L despite adequate fluid resuscitation. Pathogen-associated molecular patterns (PAMPs) trigger excessive inflammatory response via toll-like receptors, causing widespread endothelial dysfunction, increased vascular permeability, microvascular thrombosis, and tissue hypoperfusion. Vasodilation and myocardial depression contribute to shock. Mortality 40% despite treatment. Common sources: pneumonia, urinary tract infections, intra-abdominal infections, skin/soft tissue infections.',
    clinicalPresentation: 'Fever or hypothermia, tachycardia, tachypnea, altered mental status, and signs of organ dysfunction. Early (warm) shock: warm extremities, bounding pulses, wide pulse pressure. Late (cold) shock: cool extremities, weak pulses, mottled skin. Physical examination: fever or hypothermia, tachycardia, tachypnea, hypotension, altered consciousness, oliguria, and signs of infection source. Sequential Organ Failure Assessment (SOFA) score quantifies organ dysfunction. Quick SOFA (qSOFA): altered mental status, SBP ≤100 mmHg, respiratory rate ≥22/min.',
    diagnosticApproach: 'Clinical diagnosis: infection plus organ dysfunction (SOFA score increase ≥2). Blood cultures (two sets from different sites) before antibiotics. Lactate level (>2 mmol/L indicates tissue hypoperfusion, >4 mmol/L severe). CBC, comprehensive metabolic panel, coagulation studies. Procalcitonin may help distinguish bacterial from viral infection. Identify infection source: urinalysis and culture, chest X-ray, imaging for intra-abdominal source. Arterial blood gas shows metabolic acidosis. Monitor for complications: acute kidney injury, ARDS, DIC, liver dysfunction.',
    treatment: 'Sepsis bundles (Surviving Sepsis Campaign): 1) Measure lactate, 2) Obtain blood cultures before antibiotics, 3) Administer broad-spectrum antibiotics within 1 hour, 4) Begin rapid fluid resuscitation (30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L), 5) Apply vasopressors if hypotension persists (norepinephrine first-line, target MAP ≥65 mmHg). Empiric antibiotics: vancomycin plus piperacillin-tazobactam or cefepime or carbapenem. De-escalate based on cultures. Source control: drain abscesses, remove infected devices. Supportive care: mechanical ventilation for ARDS, renal replacement therapy for AKI. Avoid corticosteroids unless refractory shock. Monitor closely in ICU.',
    clinicalPearls: [
      'Time is critical - antibiotics within 1 hour reduces mortality by 7.6% per hour delay',
      'Lactate >2 mmol/L indicates tissue hypoperfusion, >4 mmol/L severe shock',
      'Norepinephrine is first-line vasopressor - dopamine increases arrhythmias',
      'Source control essential - drain abscesses, remove infected devices, debride necrotic tissue'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock'
  },

  {
    topic: 'Cardiogenic Shock',
    keywords: ['cardiogenic shock', 'cardiac shock', 'pump failure shock', 'myocardial infarction shock', 'heart failure shock'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, cardiogenic shock results from severe impairment of cardiac contractility causing inadequate cardiac output and tissue hypoperfusion despite adequate intravascular volume. Most commonly caused by acute myocardial infarction (AMI) affecting >40% of left ventricle, but also valvular disease, myocarditis, cardiomyopathy, or arrhythmias. Reduced cardiac output triggers compensatory vasoconstriction, increasing afterload and worsening cardiac function. Pulmonary edema develops from elevated left ventricular end-diastolic pressure. Mortality 50% despite treatment.',
    clinicalPresentation: 'Hypotension (SBP <90 mmHg), signs of hypoperfusion (cool extremities, altered mental status, oliguria), and pulmonary congestion (dyspnea, crackles, hypoxemia). Physical examination: tachycardia, weak pulses, cool clammy skin, elevated jugular venous pressure, S3 gallop, pulmonary rales, hepatomegaly. Hemodynamic profile: low cardiac output, elevated pulmonary capillary wedge pressure (>18 mmHg), elevated systemic vascular resistance. Complications: acute kidney injury, liver dysfunction, bowel ischemia, cardiac arrest.',
    diagnosticApproach: 'Clinical diagnosis plus hemodynamic assessment. ECG: acute MI, arrhythmias. Cardiac biomarkers: elevated troponin. Echocardiography: assess left ventricular function (ejection fraction typically <30%), wall motion abnormalities, valvular disease, mechanical complications (ventricular septal defect, papillary muscle rupture, free wall rupture). Chest X-ray: pulmonary edema, cardiomegaly. Pulmonary artery catheter: cardiac output <2.2 L/min/m², pulmonary capillary wedge pressure >18 mmHg. Laboratory: elevated lactate, renal dysfunction, liver dysfunction.',
    treatment: 'Immediate revascularization for AMI: primary PCI preferred, thrombolysis if PCI unavailable. Inotropic support: dobutamine (increases contractility) or milrinone (inodilator). Vasopressors if hypotension persists: norepinephrine preferred. Avoid excessive fluids (worsens pulmonary edema). Mechanical circulatory support: intra-aortic balloon pump (IABP), Impella, or extracorporeal membrane oxygenation (ECMO) for refractory shock. Treat arrhythmias. Mechanical ventilation for respiratory failure. Correct electrolytes. Avoid beta-blockers and calcium channel blockers. Definitive treatment: revascularization, valve repair/replacement, or heart transplant.',
    clinicalPearls: [
      'Cool extremities distinguish cardiogenic from septic shock (warm extremities)',
      'Avoid excessive fluids - worsens pulmonary edema and cardiac function',
      'Early revascularization is key - door-to-balloon time <90 minutes',
      'Mechanical circulatory support may be needed as bridge to recovery or transplant'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/shock-and-fluid-resuscitation/cardiogenic-shock'
  },

  {
    topic: 'Obstructive Shock',
    keywords: ['obstructive shock', 'tension pneumothorax shock', 'cardiac tamponade shock', 'pulmonary embolism shock', 'massive pe shock'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, obstructive shock results from mechanical obstruction of blood flow causing inadequate cardiac output despite normal cardiac function and intravascular volume. Three main causes: tension pneumothorax (air under pressure compresses heart and great vessels), cardiac tamponade (pericardial fluid compresses heart), and massive pulmonary embolism (clot obstructs pulmonary outflow). Obstruction impairs venous return or cardiac filling, reducing cardiac output and causing hypotension. Rapid recognition and treatment essential as condition rapidly fatal without intervention.',
    clinicalPresentation: 'Hypotension, tachycardia, elevated jugular venous pressure, and signs specific to cause. Tension pneumothorax: absent breath sounds, hyperresonance, tracheal deviation away from affected side, subcutaneous emphysema. Cardiac tamponade: Beck\'s triad (hypotension, elevated JVP, muffled heart sounds), pulsus paradoxus (SBP drop >10 mmHg with inspiration), Kussmaul sign (JVP rise with inspiration). Massive PE: sudden dyspnea, chest pain, hypoxemia, right heart strain. Physical examination: distended neck veins, cool extremities, altered mental status.',
    diagnosticApproach: 'Clinical diagnosis - do not delay treatment for imaging in unstable patients. Tension pneumothorax: clinical diagnosis, absent breath sounds and hyperresonance on affected side. Cardiac tamponade: echocardiography shows pericardial effusion with right atrial/ventricular collapse, ECG shows electrical alternans or low voltage. Massive PE: CT pulmonary angiography (CTPA) shows large clot burden, echocardiography shows right ventricular strain, elevated troponin and BNP. Chest X-ray: tension pneumothorax shows mediastinal shift, cardiac tamponade shows enlarged cardiac silhouette.',
    treatment: 'Tension pneumothorax: immediate needle decompression (2nd intercostal space midclavicular line or 5th intercostal space anterior axillary line), followed by chest tube placement. Cardiac tamponade: pericardiocentesis (remove fluid via subxiphoid or parasternal approach), surgical drainage for traumatic tamponade. Massive PE: thrombolysis (alteplase) for hemodynamically unstable patients, catheter-directed therapy or surgical embolectomy for contraindications to thrombolysis. Supportive care: IV fluids (increases preload), avoid positive pressure ventilation if possible (decreases venous return), vasopressors if needed. Treat underlying cause.',
    clinicalPearls: [
      'Tension pneumothorax is clinical diagnosis - do not wait for chest X-ray',
      'Pulsus paradoxus >10 mmHg suggests cardiac tamponade',
      'Massive PE causes obstructive shock - thrombolysis may be life-saving',
      'Elevated JVP with hypotension suggests obstructive shock'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/shock-and-fluid-resuscitation/obstructive-shock'
  },

  {
    topic: 'Neurogenic Shock',
    keywords: ['neurogenic shock', 'spinal shock', 'spinal cord injury shock', 'autonomic shock', 'sympathetic shock'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, neurogenic shock results from loss of sympathetic tone following spinal cord injury at T6 or above, causing unopposed parasympathetic activity. Loss of sympathetic vasoconstriction causes peripheral vasodilation and venous pooling, reducing venous return and cardiac output. Loss of cardiac sympathetic innervation causes bradycardia. Combination of vasodilation and bradycardia leads to hypotension. Spinal shock (temporary loss of reflexes below injury level) often accompanies neurogenic shock but is distinct entity. Neurogenic shock typically resolves within 1-5 weeks as spinal reflexes return.',
    clinicalPresentation: 'Hypotension with bradycardia (or inappropriately normal heart rate) - distinguishes from hypovolemic shock (tachycardia). Warm, dry skin (vasodilation) - distinguishes from other shock types (cool, clammy skin). Flaccid paralysis and loss of reflexes below injury level. Priapism in males. Poikilothermia (inability to regulate temperature). Physical examination: warm extremities, bradycardia, hypotension, motor and sensory deficits below injury level, absent deep tendon reflexes, loss of rectal tone. Complications: hypothermia, pressure ulcers, deep vein thrombosis, pulmonary embolism.',
    diagnosticApproach: 'Clinical diagnosis: hypotension with bradycardia following spinal cord injury. Spinal imaging: CT or MRI shows spinal cord injury at T6 or above. Exclude other causes of hypotension: hemorrhage (FAST exam, CT), tension pneumothorax (chest X-ray), cardiac tamponade (echocardiography). Laboratory: CBC, electrolytes, lactate (may be normal or mildly elevated). Hemodynamic monitoring: low systemic vascular resistance, normal or low cardiac output. Assess for associated injuries: traumatic brain injury, chest trauma, abdominal trauma.',
    treatment: 'Spinal immobilization and stabilization. Fluid resuscitation: cautious IV crystalloid boluses (avoid fluid overload - risk of pulmonary edema). Vasopressors for persistent hypotension: phenylephrine (pure alpha-agonist, increases SVR without increasing heart rate) or norepinephrine. Atropine for symptomatic bradycardia. Maintain MAP 85-90 mmHg for first 7 days to optimize spinal cord perfusion. High-dose methylprednisolone controversial (not routinely recommended). Prevent complications: DVT prophylaxis, pressure ulcer prevention, bladder catheterization, temperature regulation. Neurosurgical consultation for spinal decompression or stabilization.',
    clinicalPearls: [
      'Hypotension with bradycardia distinguishes neurogenic from hypovolemic shock',
      'Warm extremities distinguish neurogenic from other shock types',
      'Phenylephrine preferred vasopressor - increases SVR without tachycardia',
      'Maintain MAP 85-90 mmHg for first week to optimize spinal cord perfusion'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/injuries-poisoning/spinal-trauma/spinal-trauma'
  },

  // CARDIOVASCULAR EMERGENCIES
  {
    topic: 'ST-Elevation Myocardial Infarction (STEMI)',
    keywords: ['stemi', 'st elevation myocardial infarction', 'acute mi', 'heart attack stemi', 'acute coronary syndrome stemi'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, STEMI results from complete occlusion of coronary artery, typically due to atherosclerotic plaque rupture with superimposed thrombosis. Complete occlusion causes transmural myocardial infarction affecting full thickness of ventricular wall. Time-dependent myocardial necrosis begins within 20-40 minutes of occlusion. Infarct size correlates with mortality and complications. Early reperfusion salvages myocardium and improves outcomes. Complications: cardiogenic shock, ventricular arrhythmias, heart failure, mechanical complications (ventricular septal defect, papillary muscle rupture, free wall rupture).',
    clinicalPresentation: 'Substernal chest pressure or pain radiating to left arm, jaw, or back, often accompanied by diaphoresis, nausea, dyspnea. Symptoms typically last >20 minutes. Atypical presentations (dyspnea, fatigue, epigastric pain) common in elderly, diabetic, and female patients. Physical examination: diaphoresis, pallor, tachycardia, S4 gallop, new murmur (papillary muscle dysfunction), signs of heart failure (crackles, elevated JVP). Complications: cardiogenic shock (hypotension, cool extremities), ventricular arrhythmias (VT, VF), heart block.',
    diagnosticApproach: 'ECG is critical: ST elevation ≥1 mm in 2 contiguous leads (≥2 mm in V2-V3). STEMI equivalents: new LBBB, posterior MI (ST depression V1-V3 with tall R waves), de Winter pattern (ST depression with peaked T waves in precordial leads). Cardiac troponin elevated (but do not wait for results to treat). Echocardiography: wall motion abnormalities, assess complications. Chest X-ray: pulmonary edema, cardiomegaly. Coronary angiography: identifies culprit lesion. Exclude STEMI mimics: pericarditis, early repolarization, left ventricular hypertrophy, Brugada syndrome.',
    treatment: 'Immediate management: aspirin 325 mg chewed, antiplatelet therapy (P2Y12 inhibitor - ticagrelor or prasugrel preferred over clopidogrel), anticoagulation (heparin or bivalirudin), pain control (morphine if needed), oxygen if hypoxemic. Urgent reperfusion: primary PCI preferred (door-to-balloon time <90 minutes), fibrinolysis if PCI unavailable within 120 minutes (door-to-needle time <30 minutes). Post-reperfusion: beta-blocker, ACE inhibitor, statin (high-intensity), dual antiplatelet therapy for 12 months. Treat complications: cardiogenic shock (inotropes, mechanical support), ventricular arrhythmias (defibrillation, amiodarone), heart block (temporary pacemaker). Cardiac rehabilitation.',
    clinicalPearls: [
      'Time is muscle - door-to-balloon time <90 minutes for primary PCI',
      'Aspirin should be given immediately and chewed for faster absorption',
      'New LBBB with chest pain is STEMI equivalent - activate cath lab',
      'Posterior MI shows ST depression in V1-V3 - obtain posterior leads (V7-V9)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/acute-myocardial-infarction-mi'
  },

  {
    topic: 'Ventricular Fibrillation and Pulseless Ventricular Tachycardia',
    keywords: ['ventricular fibrillation', 'vfib', 'vf', 'pulseless ventricular tachycardia', 'pulseless vt', 'shockable rhythm'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, ventricular fibrillation (VF) is chaotic, disorganized electrical activity of ventricles causing ineffective quivering without coordinated contraction. Pulseless ventricular tachycardia (pVT) is rapid ventricular rhythm (>100 bpm) without effective cardiac output. Both are shockable rhythms causing cardiac arrest. Most common initial rhythms in sudden cardiac arrest, especially in acute coronary syndrome. VF/pVT rapidly degenerates to asystole without treatment. Survival depends on early defibrillation - each minute delay decreases survival by 7-10%. Reversible causes: 5 H\'s (hypoxia, hypovolemia, hydrogen ion/acidosis, hypo/hyperkalemia, hypothermia) and 5 T\'s (tension pneumothorax, tamponade, toxins, thrombosis coronary, thrombosis pulmonary).',
    clinicalPresentation: 'Sudden cardiac arrest: unresponsive, no pulse, apneic or agonal respirations. Witnessed arrest may have prodromal symptoms: chest pain, dyspnea, palpitations, syncope. Physical examination: unconscious, no carotid or femoral pulse, no respirations or agonal gasping, cyanosis, dilated pupils. ECG: VF shows chaotic, irregular waveforms without identifiable QRS complexes. Pulseless VT shows wide QRS tachycardia (>100 bpm) without pulse. Complications: hypoxic brain injury, multi-organ failure, death.',
    diagnosticApproach: 'Clinical diagnosis: cardiac arrest with shockable rhythm on monitor/defibrillator. Confirm pulselessness (check carotid pulse for <10 seconds). ECG/monitor: VF (chaotic irregular waveforms) or pulseless VT (wide QRS tachycardia). Identify and treat reversible causes: point-of-care glucose, arterial blood gas (acidosis, hyperkalemia), chest X-ray (tension pneumothorax), echocardiography (tamponade, massive PE), toxicology screen. Post-arrest: 12-lead ECG (STEMI), troponin, electrolytes, lactate, chest X-ray, CT head if comatose.',
    treatment: 'Immediate CPR: high-quality chest compressions (rate 100-120/min, depth 2-2.4 inches, minimize interruptions). Defibrillation: shock as soon as defibrillator available (biphasic 120-200 J or monophasic 360 J), resume CPR immediately for 2 minutes, recheck rhythm. Medications: epinephrine 1 mg IV every 3-5 minutes, amiodarone 300 mg IV bolus (then 150 mg) or lidocaine 1-1.5 mg/kg for refractory VF/pVT. Advanced airway: endotracheal intubation or supraglottic airway. Treat reversible causes. Post-ROSC care: targeted temperature management (32-36°C for 24 hours), coronary angiography for STEMI, optimize oxygenation and ventilation, avoid hypotension, neuroprognostication after 72 hours.',
    clinicalPearls: [
      'Early defibrillation is key - survival decreases 7-10% per minute delay',
      'Resume CPR immediately after shock - do not check pulse',
      'Amiodarone preferred over lidocaine for refractory VF/pVT',
      'Targeted temperature management improves neurologic outcomes after ROSC'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/cardiac-arrest-and-arrhythmias/ventricular-fibrillation'
  },

  {
    topic: 'Hypertensive Emergency',
    keywords: ['hypertensive emergency', 'malignant hypertension', 'hypertensive crisis', 'acute hypertension', 'severe hypertension emergency'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, hypertensive emergency is severe elevation of blood pressure (typically >180/120 mmHg) with acute end-organ damage. Acute rise in blood pressure overwhelms autoregulatory mechanisms, causing endothelial injury, fibrinoid necrosis of arterioles, and organ ischemia. Target organs: brain (hypertensive encephalopathy, stroke), heart (acute coronary syndrome, acute heart failure, aortic dissection), kidneys (acute kidney injury), eyes (retinal hemorrhages, papilledema). Requires immediate blood pressure reduction to prevent irreversible organ damage. Distinguish from hypertensive urgency (severe BP without organ damage) which requires gradual outpatient reduction.',
    clinicalPresentation: 'Severe hypertension (typically >180/120 mmHg) with signs of acute organ damage. Neurologic: headache, confusion, seizures, focal deficits, visual disturbances. Cardiac: chest pain, dyspnea, pulmonary edema. Renal: oliguria, hematuria, elevated creatinine. Ophthalmologic: blurred vision, retinal hemorrhages, papilledema. Physical examination: markedly elevated blood pressure, altered mental status, focal neurologic deficits, pulmonary rales, S3 gallop, retinal changes on fundoscopy. Complications: stroke, myocardial infarction, acute heart failure, acute kidney injury, aortic dissection.',
    diagnosticApproach: 'Blood pressure measurement: confirm severe elevation (>180/120 mmHg) in both arms. Assess for end-organ damage: neurologic exam, fundoscopy (papilledema, hemorrhages), cardiovascular exam. Laboratory: comprehensive metabolic panel (creatinine, electrolytes), urinalysis (proteinuria, hematuria, RBC casts), cardiac biomarkers (troponin if chest pain), CBC. ECG: left ventricular hypertrophy, ischemia. Chest X-ray: pulmonary edema, cardiomegaly, widened mediastinum (aortic dissection). CT head if neurologic symptoms. Echocardiography if heart failure or aortic dissection suspected. Urine drug screen (cocaine, amphetamines).',
    treatment: 'Immediate IV antihypertensive therapy: reduce MAP by 10-20% in first hour, then 5-15% over next 23 hours. Avoid rapid reduction (causes cerebral/cardiac/renal hypoperfusion). First-line agents: nicardipine (5-15 mg/hr IV infusion, titratable), labetalol (20-80 mg IV bolus or 0.5-2 mg/min infusion), clevidipine (1-16 mg/hr IV infusion). Specific situations: aortic dissection (esmolol plus nitroprusside, target SBP 100-120 mmHg), acute heart failure (nitroglycerin plus loop diuretic), eclampsia (magnesium sulfate plus hydralazine or labetalol). Avoid sublingual nifedipine (unpredictable, excessive reduction). ICU monitoring. Treat underlying cause. Transition to oral agents once stable.',
    clinicalPearls: [
      'Reduce MAP by 10-20% in first hour - avoid rapid reduction',
      'Nicardipine is preferred agent - easily titratable IV infusion',
      'Aortic dissection requires aggressive BP reduction (SBP 100-120 mmHg)',
      'Distinguish from hypertensive urgency (no organ damage, outpatient management)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/hypertension/hypertensive-emergencies'
  },

  // PULMONARY AND AIRWAY EMERGENCIES
  {
    topic: 'Acute Respiratory Distress Syndrome (ARDS)',
    keywords: ['ards', 'acute respiratory distress syndrome', 'acute lung injury', 'noncardiogenic pulmonary edema', 'ards emergency'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, ARDS is acute diffuse inflammatory lung injury causing increased pulmonary vascular permeability, pulmonary edema, and severe hypoxemia. Direct lung injury (pneumonia, aspiration, inhalation injury) or indirect injury (sepsis, trauma, pancreatitis, transfusion) triggers inflammatory cascade. Alveolar-capillary membrane damage causes protein-rich fluid accumulation in alveoli, surfactant dysfunction, and alveolar collapse. Results in severe hypoxemia, decreased lung compliance, and increased work of breathing. Berlin criteria: acute onset (<1 week), bilateral infiltrates, PaO2/FiO2 ratio <300, not fully explained by cardiac failure. Mortality 30-40%.',
    clinicalPresentation: 'Acute onset (within 1 week of known insult) of severe dyspnea, tachypnea, and hypoxemia refractory to supplemental oxygen. Physical examination: tachypnea, tachycardia, cyanosis, use of accessory muscles, diffuse crackles bilaterally. Severity: mild (PaO2/FiO2 200-300), moderate (100-200), severe (<100). Complications: barotrauma (pneumothorax), ventilator-associated pneumonia, multi-organ failure, death. Distinguish from cardiogenic pulmonary edema: no elevated JVP, normal BNP, bilateral infiltrates without cardiomegaly.',
    diagnosticApproach: 'Berlin criteria: 1) Acute onset within 1 week of known insult, 2) Bilateral opacities on chest imaging not fully explained by effusions/nodules/collapse, 3) Respiratory failure not fully explained by cardiac failure or fluid overload, 4) PaO2/FiO2 ratio <300 with PEEP ≥5 cm H2O. Chest X-ray or CT: bilateral infiltrates. Arterial blood gas: severe hypoxemia (PaO2/FiO2 <300), respiratory alkalosis initially then respiratory acidosis. Echocardiography: normal left ventricular function, excludes cardiogenic pulmonary edema. BNP: normal or mildly elevated (vs elevated in heart failure). Identify underlying cause: sepsis workup, cultures, imaging.',
    treatment: 'Lung-protective ventilation: low tidal volume (6 mL/kg ideal body weight), plateau pressure <30 cm H2O, PEEP to maintain oxygenation (typically 10-15 cm H2O). Permissive hypercapnia (pH >7.20). FiO2 titrated to SpO2 88-95%. Prone positioning for severe ARDS (PaO2/FiO2 <150) - improves oxygenation and mortality. Neuromuscular blockade for 48 hours if severe ARDS and ventilator dyssynchrony. Conservative fluid management once hemodynamically stable. Treat underlying cause (antibiotics for sepsis, source control). ECMO for refractory hypoxemia. Avoid corticosteroids in early ARDS. Prevent complications: DVT prophylaxis, stress ulcer prophylaxis, nutrition.',
    clinicalPearls: [
      'Lung-protective ventilation (6 mL/kg tidal volume) reduces mortality',
      'Prone positioning improves survival in severe ARDS (PaO2/FiO2 <150)',
      'Distinguish from cardiogenic pulmonary edema - normal BNP, no cardiomegaly',
      'Permissive hypercapnia acceptable if pH >7.20'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/respiratory-failure-and-mechanical-ventilation/acute-respiratory-distress-syndrome-ards'
  },

  {
    topic: 'Massive Pulmonary Embolism',
    keywords: ['massive pulmonary embolism', 'massive pe', 'hemodynamically unstable pe', 'pulmonary embolism shock', 'submassive pe'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, massive pulmonary embolism is PE causing sustained hypotension (SBP <90 mmHg for ≥15 minutes) or requiring inotropic support, with signs of shock or persistent hypotension. Large clot burden (>50% pulmonary vasculature) causes acute right ventricular failure from increased afterload. Right ventricular dilation and dysfunction impair left ventricular filling, reducing cardiac output and causing cardiogenic shock. Submassive PE causes right ventricular strain without hypotension (elevated troponin/BNP, RV dysfunction on echo). Mortality: massive PE 25-65%, submassive PE 3-15%. Risk factors: immobility, surgery, cancer, thrombophilia, pregnancy.',
    clinicalPresentation: 'Sudden dyspnea, chest pain (pleuritic), tachycardia, hypotension, and signs of shock. Massive PE: hypotension, altered mental status, cool extremities, elevated JVP, right ventricular heave. Submassive PE: dyspnea, tachycardia, chest pain without hypotension. Physical examination: tachypnea, tachycardia, hypoxemia, elevated JVP, loud P2, right ventricular heave, signs of DVT (leg swelling, tenderness). Complications: cardiac arrest, cardiogenic shock, right heart failure, death. Sudden cardiac arrest may be presenting sign.',
    diagnosticApproach: 'Hemodynamically unstable: bedside echocardiography shows right ventricular dilation and dysfunction, McConnell sign (RV free wall hypokinesis with apical sparing). CT pulmonary angiography (CTPA) if stable: shows filling defects in pulmonary arteries, RV/LV ratio >0.9 indicates RV strain. Cardiac biomarkers: elevated troponin and BNP/NT-proBNP indicate RV strain (submassive PE). ECG: sinus tachycardia, S1Q3T3 pattern (large S in lead I, Q wave and inverted T in lead III), right bundle branch block, right axis deviation. Arterial blood gas: hypoxemia, hypocapnia, respiratory alkalosis. D-dimer: elevated but not specific. Lower extremity ultrasound: DVT in 50%.',
    treatment: 'Massive PE (hemodynamically unstable): systemic thrombolysis (alteplase 100 mg IV over 2 hours or 0.6 mg/kg bolus) - reduces mortality. Catheter-directed therapy or surgical embolectomy if contraindications to thrombolysis. Anticoagulation: unfractionated heparin IV (bolus 80 units/kg, then 18 units/kg/hr). Supportive care: oxygen, IV fluids (cautious - avoid RV overload), vasopressors (norepinephrine) if hypotension persists. Avoid aggressive fluid resuscitation (worsens RV function). Submassive PE: anticoagulation alone (heparin then transition to DOAC or warfarin), consider thrombolysis if high risk. IVC filter if contraindication to anticoagulation. Prevent recurrence: long-term anticoagulation (3-6 months minimum).',
    clinicalPearls: [
      'Massive PE requires thrombolysis - reduces mortality from 25-65% to 10-15%',
      'Bedside echo shows RV dilation and dysfunction - diagnostic in unstable patients',
      'Avoid aggressive fluid resuscitation - worsens RV function',
      'Submassive PE (RV strain without hypotension) has intermediate risk'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe'
  },

  {
    topic: 'Tension Pneumothorax',
    keywords: ['tension pneumothorax', 'tension ptx', 'pneumothorax tension', 'traumatic pneumothorax', 'tension pneumo'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, tension pneumothorax occurs when air enters pleural space through one-way valve mechanism, progressively accumulating with each breath. Increasing intrapleural pressure collapses ipsilateral lung, shifts mediastinum to contralateral side, compresses contralateral lung, and kinks great vessels (SVC, IVC), reducing venous return and cardiac output. Results in obstructive shock. Causes: trauma (blunt or penetrating chest injury), iatrogenic (central line placement, mechanical ventilation with high pressures), spontaneous (ruptured bleb). Life-threatening emergency requiring immediate decompression. Mortality approaches 100% without treatment.',
    clinicalPresentation: 'Severe respiratory distress, hypotension, tachycardia, hypoxemia, and signs of obstructive shock. Physical examination: absent breath sounds on affected side, hyperresonance to percussion, tracheal deviation away from affected side (late finding), distended neck veins, subcutaneous emphysema, cyanosis. Hemodynamic collapse: hypotension, tachycardia, weak pulses, altered mental status. Mechanical ventilation: sudden deterioration with high peak pressures, hypotension, desaturation. Complications: cardiac arrest, death.',
    diagnosticApproach: 'Clinical diagnosis - do not delay treatment for imaging in unstable patients. Diagnosis based on: absent breath sounds, hyperresonance, respiratory distress, hypotension, tracheal deviation. Chest X-ray (if stable): shows complete lung collapse, mediastinal shift to contralateral side, depressed hemidiaphragm. Ultrasound: absent lung sliding, absent B-lines (lung point sign may be present). Do not obtain imaging in unstable patients - immediate needle decompression based on clinical findings. Post-decompression: chest X-ray confirms tube placement and lung re-expansion.',
    treatment: 'Immediate needle decompression: large-bore (14-16 gauge) needle or angiocatheter inserted into 2nd intercostal space midclavicular line or 5th intercostal space anterior axillary line on affected side. Rush of air confirms diagnosis. Follow immediately with tube thoracostomy (chest tube placement): 28-32 French chest tube in 4th-5th intercostal space anterior axillary line, connected to water seal drainage system with suction (-20 cm H2O). Supportive care: 100% oxygen, IV fluids, avoid positive pressure ventilation until decompressed. Monitor for re-expansion pulmonary edema. Chest X-ray confirms lung re-expansion. Remove chest tube when air leak resolved and lung fully expanded.',
    clinicalPearls: [
      'Clinical diagnosis - do not wait for chest X-ray in unstable patients',
      'Needle decompression is temporizing - follow immediately with chest tube',
      'Tracheal deviation is late finding - do not wait for it to treat',
      'Avoid positive pressure ventilation until decompressed - worsens tension'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pneumothorax'
  },

  // TRAUMA
  {
    topic: 'Traumatic Brain Injury',
    keywords: ['traumatic brain injury', 'tbi', 'head injury', 'head trauma', 'brain trauma', 'closed head injury'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, traumatic brain injury (TBI) results from external force causing brain dysfunction. Primary injury: direct mechanical damage at time of impact (contusion, laceration, diffuse axonal injury). Secondary injury: evolving damage from cerebral edema, increased intracranial pressure, hypoxia, hypotension, inflammation. Severity: mild (GCS 13-15), moderate (GCS 9-12), severe (GCS ≤8). Intracranial hemorrhage types: epidural hematoma (arterial bleeding between skull and dura), subdural hematoma (venous bleeding between dura and arachnoid), subarachnoid hemorrhage (bleeding in subarachnoid space), intracerebral hemorrhage (bleeding within brain parenchyma). Complications: increased ICP, herniation, seizures, infection.',
    clinicalPresentation: 'Altered mental status, loss of consciousness, amnesia, headache, nausea/vomiting, confusion. Severe TBI: GCS ≤8, unresponsive, abnormal posturing (decorticate or decerebrate). Signs of increased ICP: headache, vomiting, altered mental status, Cushing triad (hypertension, bradycardia, irregular respirations - late finding). Epidural hematoma: lucid interval followed by rapid deterioration. Subdural hematoma: gradual decline over hours to days. Physical examination: scalp lacerations, Battle sign (mastoid ecchymosis), raccoon eyes (periorbital ecchymosis), hemotympanum, CSF rhinorrhea/otorrhea, focal neurologic deficits, abnormal pupils.',
    diagnosticApproach: 'Glasgow Coma Scale (GCS): assess eye opening, verbal response, motor response. GCS ≤8 indicates severe TBI requiring intubation. CT head without contrast: identifies intracranial hemorrhage, skull fractures, cerebral edema, midline shift. Epidural hematoma: lens-shaped (biconvex) hyperdensity. Subdural hematoma: crescent-shaped hyperdensity. Diffuse axonal injury: normal CT initially, small hemorrhages at gray-white junction. Cervical spine imaging: CT C-spine in all moderate-severe TBI. Laboratory: coagulation studies, type and screen. ICP monitoring if severe TBI. Repeat CT if neurologic deterioration.',
    treatment: 'Airway management: intubate if GCS ≤8, unable to protect airway, or respiratory failure. Avoid hypoxia (SpO2 >90%) and hypotension (SBP >90 mmHg) - worsen secondary injury. Maintain cerebral perfusion pressure (CPP) >60 mmHg (CPP = MAP - ICP). Elevated ICP management: elevate head of bed 30 degrees, maintain normocapnia (PaCO2 35-40 mmHg), osmotic therapy (mannitol 0.25-1 g/kg or hypertonic saline 3% 250 mL bolus), sedation and analgesia. Avoid hyperventilation except for acute herniation (temporizing measure). Neurosurgical consultation: craniotomy for epidural/subdural hematoma with mass effect, decompressive craniectomy for refractory ICP. Seizure prophylaxis: levetiracetam or phenytoin for 7 days. Avoid hyperthermia, hyperglycemia.',
    clinicalPearls: [
      'Avoid hypoxia and hypotension - double mortality in severe TBI',
      'GCS ≤8 requires intubation to protect airway',
      'Epidural hematoma: lucid interval then rapid deterioration',
      'Cushing triad (HTN, bradycardia, irregular respirations) is late sign of herniation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/injuries-poisoning/traumatic-brain-injury-tbi/traumatic-brain-injury'
  },

  {
    topic: 'Blunt Abdominal Trauma',
    keywords: ['blunt abdominal trauma', 'abdominal trauma', 'blunt trauma abdomen', 'intra-abdominal injury', 'abdominal injury'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, blunt abdominal trauma results from motor vehicle collisions, falls, assaults, or crush injuries causing solid organ injury (spleen, liver, kidneys), hollow viscus injury (bowel, bladder), or vascular injury. Spleen and liver most commonly injured solid organs. Mechanism: direct impact, deceleration injury, compression. Complications: hemorrhage (leading cause of death), peritonitis from hollow viscus perforation, compartment syndrome. Delayed presentation common - serial examinations essential. Pediatric patients: higher risk of solid organ injury due to less protective musculature and fat.',
    clinicalPresentation: 'Abdominal pain, tenderness, distension, guarding, rigidity. Signs of hemorrhage: tachycardia, hypotension, pallor, altered mental status. Peritonitis: severe pain, rebound tenderness, guarding, absent bowel sounds. Physical examination: abdominal tenderness, ecchymosis (seatbelt sign, Grey Turner sign, Cullen sign), distension, guarding, rebound tenderness. Kehr sign: left shoulder pain from splenic injury (diaphragmatic irritation). Rectal exam: blood suggests bowel injury. Complications: hemorrhagic shock, peritonitis, compartment syndrome.',
    diagnosticApproach: 'Hemodynamically unstable: FAST exam (Focused Assessment with Sonography for Trauma) - detects free intraperitoneal fluid (blood). Positive FAST with instability → immediate laparotomy. Hemodynamically stable: CT abdomen/pelvis with IV contrast - identifies solid organ injuries, free fluid, bowel injury, vascular injury. Grading: spleen and liver injuries graded I-V based on severity. Laboratory: CBC (hemoglobin, hematocrit), type and screen, lactate, lipase (pancreatic injury), urinalysis (hematuria suggests renal/bladder injury). Serial abdominal exams: detect delayed presentations. Diagnostic peritoneal lavage (DPL) rarely used - replaced by FAST and CT.',
    treatment: 'Hemodynamically unstable with positive FAST: immediate laparotomy for hemorrhage control. Hemodynamically stable solid organ injury: nonoperative management with serial exams, hemoglobin checks, bed rest. Transfuse if hemoglobin <7 g/dL or ongoing bleeding. Angioembolization for ongoing bleeding from solid organs. Hollow viscus injury: laparotomy for repair. Resuscitation: IV crystalloid, blood products if hemorrhage. Avoid excessive fluids (permissive hypotension SBP 80-90 mmHg until hemorrhage controlled, except in TBI). Antibiotics if hollow viscus injury. Monitor for complications: compartment syndrome (bladder pressure >20 mmHg), delayed bleeding, abscess. Splenic salvage preferred in stable patients.',
    clinicalPearls: [
      'FAST exam guides management in unstable patients - positive FAST → OR',
      'Seatbelt sign increases risk of bowel and mesenteric injuries',
      'Nonoperative management successful in 90% of stable solid organ injuries',
      'Serial exams essential - delayed presentations common'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/injuries-poisoning/abdominal-trauma/abdominal-trauma'
  },

  // NEUROLOGIC AND TOXICOLOGIC EMERGENCIES
  {
    topic: 'Status Epilepticus',
    keywords: ['status epilepticus', 'prolonged seizure', 'continuous seizure', 'refractory seizure', 'seizure emergency'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, status epilepticus is continuous seizure activity lasting ≥5 minutes or recurrent seizures without recovery of consciousness between episodes. Prolonged seizure activity causes neuronal injury from excitotoxicity, hyperthermia, metabolic derangements, and cerebral edema. Mortality 10-20%, higher in elderly and with longer duration. Causes: medication noncompliance (most common in known epileptics), CNS infection, stroke, metabolic derangements, toxins, hypoxia, trauma. Refractory status epilepticus: seizures continuing despite two appropriate antiepileptic drugs. Nonconvulsive status epilepticus: ongoing seizure activity without convulsions, diagnosed by EEG.',
    clinicalPresentation: 'Generalized tonic-clonic seizure lasting >5 minutes: loss of consciousness, rhythmic jerking of extremities, tongue biting, incontinence, postictal confusion. Focal status epilepticus: focal motor activity, altered awareness. Nonconvulsive status epilepticus: altered mental status, subtle motor signs (eye deviation, nystagmus, facial twitching) without obvious convulsions. Physical examination: ongoing seizure activity, altered mental status, hyperthermia, tachycardia, hypertension, tongue trauma, incontinence. Complications: aspiration pneumonia, rhabdomyolysis, hyperthermia, metabolic acidosis, hypoxia, cardiac arrhythmias.',
    diagnosticApproach: 'Clinical diagnosis: seizure lasting ≥5 minutes or recurrent seizures without recovery. Laboratory: point-of-care glucose (hypoglycemia), electrolytes (hyponatremia, hypocalcemia, hypomagnesemia), CBC, comprehensive metabolic panel, antiepileptic drug levels if known epileptic, toxicology screen, arterial blood gas (metabolic acidosis). Neuroimaging: CT head to exclude structural lesion (stroke, hemorrhage, mass). MRI brain if CT normal and cause unclear. EEG: confirms ongoing seizure activity, diagnoses nonconvulsive status epilepticus. Lumbar puncture if CNS infection suspected (after CT head).',
    treatment: 'Immediate management: ABCs (airway, breathing, circulation), supplemental oxygen, IV access, check glucose. First-line: benzodiazepines - lorazepam 0.1 mg/kg IV (4 mg dose, repeat once if needed) or diazepam 0.15 mg/kg IV (10 mg dose) or midazolam 10 mg IM if no IV access. Second-line (if seizures continue after benzodiazepines): fosphenytoin 20 mg PE/kg IV, levetiracetam 60 mg/kg IV (max 4500 mg), or valproic acid 40 mg/kg IV. Third-line (refractory status epilepticus): continuous IV infusion of midazolam, propofol, or pentobarbital with EEG monitoring. Intubation for airway protection. Treat underlying cause: antibiotics for meningitis, correct metabolic abnormalities. Avoid phenytoin (cardiac toxicity, slower onset than fosphenytoin).',
    clinicalPearls: [
      'Treat seizures lasting >5 minutes - do not wait for labs or imaging',
      'Benzodiazepines are first-line - lorazepam preferred (longer duration)',
      'IM midazolam if no IV access - as effective as IV lorazepam',
      'Refractory status epilepticus requires continuous IV anesthetics with EEG monitoring'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/seizure-disorders/status-epilepticus'
  },

  {
    topic: 'Opioid Overdose',
    keywords: ['opioid overdose', 'opiate overdose', 'heroin overdose', 'fentanyl overdose', 'narcotic overdose', 'opioid toxicity'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, opioid overdose causes CNS and respiratory depression from mu-opioid receptor agonism in brainstem. Respiratory depression is primary cause of death - hypoventilation causes hypoxia, hypercapnia, respiratory acidosis, and respiratory arrest. Opioids include prescription medications (morphine, oxycodone, hydrocodone, fentanyl) and illicit drugs (heroin, illicitly manufactured fentanyl). Fentanyl 50-100 times more potent than morphine - small doses cause severe toxicity. Risk factors: opioid-naive patients, dose escalation, concurrent CNS depressants (benzodiazepines, alcohol), illicit fentanyl contamination. Complications: aspiration pneumonia, rhabdomyolysis, compartment syndrome, anoxic brain injury.',
    clinicalPresentation: 'Classic triad: CNS depression (altered mental status, coma), respiratory depression (bradypnea, apnea), and miosis (pinpoint pupils). Physical examination: decreased level of consciousness or coma, slow shallow respirations or apnea, pinpoint pupils (miosis), bradycardia, hypotension, hypothermia, decreased bowel sounds. Severe cases: respiratory arrest, cyanosis, pulmonary edema. Complications: aspiration, rhabdomyolysis (elevated CK), compartment syndrome from prolonged immobility, anoxic brain injury.',
    diagnosticApproach: 'Clinical diagnosis: classic triad (CNS depression, respiratory depression, miosis) with history of opioid use. Urine drug screen: detects opioids but may not detect synthetic opioids (fentanyl). Point-of-care glucose: exclude hypoglycemia. Arterial blood gas: respiratory acidosis (elevated PaCO2), hypoxemia. Chest X-ray: aspiration pneumonia, pulmonary edema. ECG: bradycardia, QTc prolongation. Laboratory: comprehensive metabolic panel, CK (rhabdomyolysis), troponin, lactate. Response to naloxone is diagnostic and therapeutic. CT head if trauma or unclear diagnosis.',
    treatment: 'Airway management: open airway, bag-valve-mask ventilation if apneic or inadequate respirations. Naloxone (opioid antagonist): 0.04-0.4 mg IV/IM/IN, repeat every 2-3 minutes until adequate respirations (goal: respiratory rate >10/min, adequate tidal volume). Higher doses (2-4 mg) may be needed for fentanyl or long-acting opioids. Titrate to adequate respirations, not full consciousness (avoid precipitating acute withdrawal). Continuous naloxone infusion for long-acting opioids (methadone, sustained-release formulations). Supportive care: IV fluids, warming if hypothermic. Observation: 4-6 hours after last naloxone dose (opioid half-life may exceed naloxone). Admit if persistent symptoms, coingestants, or intentional overdose. Offer addiction treatment resources.',
    clinicalPearls: [
      'Naloxone is diagnostic and therapeutic - response confirms opioid overdose',
      'Titrate naloxone to adequate respirations, not full consciousness',
      'Fentanyl may require higher naloxone doses and prolonged observation',
      'Observe 4-6 hours after last naloxone - opioid half-life may exceed naloxone'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/special-subjects/poisoning-or-envenomation/opioid-toxicity-and-withdrawal'
  },

  {
    topic: 'Acute Ischemic Stroke',
    keywords: ['acute ischemic stroke', 'ischemic stroke', 'cerebral infarction', 'brain attack', 'stroke tpa', 'thrombolytic stroke'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, acute ischemic stroke results from arterial occlusion causing brain infarction. Causes: thrombotic (atherosclerosis, small vessel disease), embolic (atrial fibrillation, valvular disease, paradoxical embolus), or hypoperfusion (watershed infarcts). Occlusion causes ischemic core (irreversibly damaged) surrounded by ischemic penumbra (salvageable tissue). Time-dependent progression: penumbra converts to infarction without reperfusion. Collateral circulation determines penumbra size and time window. Complications: cerebral edema, hemorrhagic transformation, seizures, aspiration pneumonia. Risk factors: hypertension, diabetes, hyperlipidemia, atrial fibrillation, smoking, prior stroke.',
    clinicalPresentation: 'Sudden onset focal neurologic deficit: weakness, numbness, speech difficulty, vision loss, ataxia, vertigo. Anterior circulation (carotid): contralateral weakness/numbness, aphasia (dominant hemisphere), neglect (nondominant hemisphere), visual field defects. Posterior circulation (vertebrobasilar): vertigo, ataxia, diplopia, dysphagia, crossed signs (ipsilateral cranial nerve, contralateral motor/sensory). Physical examination: focal weakness, sensory loss, aphasia, dysarthria, visual field defects, ataxia, abnormal reflexes. NIH Stroke Scale (NIHSS) quantifies severity. Large vessel occlusion: severe deficits (NIHSS >6), gaze deviation, dense hemiplegia.',
    diagnosticApproach: 'Time is brain - rapid evaluation essential. Last known well time determines treatment window. CT head without contrast: excludes hemorrhage (contraindication to thrombolysis), may show early ischemic changes (hyperdense vessel sign, loss of gray-white differentiation, sulcal effacement). CT angiography: identifies large vessel occlusion (candidate for thrombectomy). MRI brain with diffusion-weighted imaging: detects acute infarction (more sensitive than CT). Laboratory: glucose, electrolytes, CBC, PT/INR, PTT (coagulation studies before thrombolysis). ECG: atrial fibrillation. Vascular imaging: carotid ultrasound, CT/MR angiography. Echocardiography: cardioembolic source.',
    treatment: 'Acute management: IV alteplase (tPA) 0.9 mg/kg (max 90 mg) within 4.5 hours of symptom onset if eligible (no hemorrhage, no contraindications). Mechanical thrombectomy for large vessel occlusion within 24 hours if salvageable tissue on imaging. Blood pressure management: permissive hypertension (SBP <220 mmHg) if not receiving tPA, lower to <185/110 mmHg if receiving tPA. Aspirin 325 mg if not receiving tPA (wait 24 hours after tPA). Supportive care: airway protection, supplemental oxygen if hypoxemic, IV fluids, normoglycemia. Secondary prevention: antiplatelet therapy (aspirin, clopidogrel, or dual antiplatelet for 21 days), anticoagulation for atrial fibrillation, statin, blood pressure control. Stroke unit care reduces mortality and disability.',
    clinicalPearls: [
      'Time is brain - tPA within 4.5 hours, thrombectomy within 24 hours',
      'CT head excludes hemorrhage - required before tPA',
      'Large vessel occlusion (NIHSS >6) - candidate for thrombectomy',
      'Permissive hypertension unless receiving tPA - cerebral autoregulation impaired'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/ischemic-stroke'
  },
];
