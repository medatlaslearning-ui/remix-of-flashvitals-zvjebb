
/**
 * ACS (American College of Surgeons) Trauma Programs Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American College of Surgeons Trauma Programs.
 * ACS provides evidence-based guidelines for trauma care, including ATLS (Advanced Trauma Life Support) protocols.
 * 
 * INTEGRATION PHASE: ACS Trauma Guidelines (Phase 26 - Emergency Medicine & Trauma Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Level 1 = Strong, Level 2 = Moderate, Level 3 = Weak)
 * - Quality of evidence (A = High, B = Moderate, C = Low)
 * - Clinical implementation guidance
 * - ACS guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from ACS Trauma Programs guidelines but presented
 * in an original format for medical education purposes.
 */

export interface ACSTraumaGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  level1Recommendations: string[];
  level2Recommendations: string[];
  level3Recommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  acsUrl: string;
  publicationYear: number;
}

export const acsTraumaGuidelinesKnowledge: ACSTraumaGuidelineEntry[] = [
  // INITIAL ASSESSMENT AND MANAGEMENT
  {
    topic: 'Initial Assessment and Management of Trauma Patients - ACS ATLS Guideline',
    keywords: ['atls', 'advanced trauma life support', 'trauma assessment', 'primary survey', 'secondary survey', 'trauma management', 'acs trauma', 'trauma protocol'],
    system: 'Emergency Medicine',
    guidelineSummary: 'The ACS ATLS guideline provides a systematic approach to trauma patient assessment and management. The primary survey follows the ABCDE sequence: Airway with cervical spine protection, Breathing and ventilation, Circulation with hemorrhage control, Disability (neurologic status), and Exposure with environmental control. Life-threatening injuries are identified and treated during the primary survey. The secondary survey is a head-to-toe examination to identify all injuries. Adjuncts include monitoring, imaging, and laboratory studies. The ATLS approach is standardized worldwide and reduces preventable trauma deaths. Key principles: treat the greatest threat to life first, reassess frequently, and maintain a high index of suspicion for occult injuries.',
    level1Recommendations: [
      'Perform primary survey in ABCDE sequence: Airway with C-spine protection, Breathing, Circulation, Disability, Exposure (Level 1, Quality A)',
      'Establish definitive airway if Glasgow Coma Scale ≤8, inability to maintain airway, or severe maxillofacial trauma (Level 1, Quality A)',
      'Maintain cervical spine immobilization until injury excluded clinically or radiographically (Level 1, Quality A)',
      'Control external hemorrhage with direct pressure; apply tourniquet for life-threatening extremity hemorrhage (Level 1, Quality A)',
      'Obtain two large-bore IV lines and initiate fluid resuscitation with crystalloid for hypotensive trauma patients (Level 1, Quality A)',
      'Perform FAST (Focused Assessment with Sonography for Trauma) exam in hemodynamically unstable patients with blunt abdominal trauma (Level 1, Quality A)',
      'Assess neurologic status using Glasgow Coma Scale and pupillary response during primary survey (Level 1, Quality A)',
      'Expose patient completely and maintain normothermia with warming measures (Level 1, Quality A)',
    ],
    level2Recommendations: [
      'Use rapid sequence intubation with in-line cervical spine stabilization for airway management in trauma patients (Level 2, Quality B)',
      'Perform needle decompression for suspected tension pneumothorax before radiographic confirmation in unstable patients (Level 2, Quality B)',
      'Initiate massive transfusion protocol with 1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets for patients with hemorrhagic shock (Level 2, Quality B)',
      'Obtain chest X-ray, pelvis X-ray, and FAST exam as initial imaging studies during primary survey (Level 2, Quality B)',
      'Perform secondary survey only after primary survey completed and patient stabilized (Level 2, Quality B)',
      'Reassess vital signs and repeat primary survey frequently, especially after any intervention or change in patient status (Level 2, Quality B)',
      'Use permissive hypotension (systolic blood pressure 80-90 mmHg) in penetrating trauma until hemorrhage controlled, except in traumatic brain injury (Level 2, Quality B)',
    ],
    level3Recommendations: [
      'Consider surgical airway (cricothyroidotomy) if unable to intubate and unable to ventilate (Level 3, Quality C)',
      'Consider pelvic binder application for suspected pelvic fracture with hemodynamic instability (Level 3, Quality C)',
      'Consider tranexamic acid administration within 3 hours of injury for trauma patients with significant hemorrhage (Level 3, Quality B)',
    ],
    qualityOfEvidence: 'Multiple levels: Level 1 recommendations are based on Quality A (High quality evidence from prospective studies and systematic reviews); Level 2 recommendations are based on Quality B (Moderate quality evidence from retrospective studies and expert consensus); Level 3 recommendations are based on Quality B-C (Low to Moderate quality evidence)',
    clinicalImplementation: 'Implementation of ACS ATLS guidelines requires systematic approach to trauma assessment. PREPARATION: Prehospital notification allows team activation and preparation. Trauma team includes trauma surgeon, emergency physician, anesthesiologist, nurses, and ancillary staff. Equipment: airway equipment, IV access supplies, monitoring devices, blood products, imaging capabilities. PRIMARY SURVEY (ABCDE): A - AIRWAY with cervical spine protection: Assess airway patency (look, listen, feel). Maintain cervical spine immobilization with rigid collar and manual stabilization. Clear airway of foreign bodies, blood, vomitus. Establish definitive airway if: GCS ≤8, inability to maintain airway, severe maxillofacial trauma, risk of aspiration, respiratory failure. Intubation: Rapid sequence intubation with in-line cervical spine stabilization. Avoid hyperextension of neck. Surgical airway (cricothyroidotomy) if unable to intubate. B - BREATHING and ventilation: Expose chest and assess respiratory effort. Inspect for chest wall movement, use of accessory muscles, cyanosis. Auscultate breath sounds bilaterally. Percuss for hyperresonance (pneumothorax) or dullness (hemothorax). Identify and treat immediately life-threatening chest injuries: Tension pneumothorax (needle decompression then chest tube), Open pneumothorax (occlusive dressing, chest tube), Massive hemothorax (chest tube, consider thoracotomy), Flail chest (pain control, respiratory support). Supplemental oxygen to all trauma patients. Pulse oximetry and capnography monitoring. C - CIRCULATION with hemorrhage control: Assess hemodynamic status: level of consciousness, skin color, pulse (rate, quality, location). Control external hemorrhage: Direct pressure first-line, Tourniquet for life-threatening extremity hemorrhage (document time applied), Hemostatic dressings for junctional hemorrhage. Obtain vascular access: Two large-bore (14-16 gauge) peripheral IV lines, Intraosseous access if unable to obtain IV access, Central venous access if needed. Fluid resuscitation: Crystalloid (normal saline or lactated Ringer\'s) 1-2 L bolus for hypotension, Reassess after each bolus, Blood products if ongoing hemorrhage (massive transfusion protocol). Identify source of hemorrhage: External (visible), Chest (hemothorax), Abdomen (FAST exam, CT if stable), Pelvis (pelvic X-ray, pelvic binder), Long bones (femur, tibia fractures), Retroperitoneum. FAST exam: Assess for free fluid in perihepatic, perisplenic, pelvic, and pericardial spaces. Positive FAST with hemodynamic instability → immediate laparotomy. D - DISABILITY (neurologic status): Assess level of consciousness using AVPU (Alert, responds to Voice, responds to Pain, Unresponsive) or Glasgow Coma Scale. GCS: Eye opening (1-4), Verbal response (1-5), Motor response (1-6). Total score 3-15. GCS ≤8 requires intubation. Assess pupils: size, symmetry, reactivity. Unequal pupils suggest intracranial mass lesion. Assess for lateralizing signs: weakness, sensory deficits. E - EXPOSURE and environmental control: Remove all clothing to perform complete examination. Maintain normothermia: Warm IV fluids, Warm blankets, Increase room temperature, Forced-air warming devices. Hypothermia worsens coagulopathy and increases mortality. ADJUNCTS TO PRIMARY SURVEY: Monitoring: Continuous pulse oximetry, cardiac monitoring, blood pressure, temperature. Urinary catheter: Monitor urine output (goal >0.5 mL/kg/hr). Contraindicated if blood at urethral meatus, scrotal hematoma, or high-riding prostate. Gastric tube: Decompress stomach, reduce aspiration risk. Orogastric tube if suspected skull base fracture. Laboratory: Type and crossmatch, CBC, comprehensive metabolic panel, coagulation studies, lactate, arterial blood gas, toxicology screen, pregnancy test in females of childbearing age. Imaging: Chest X-ray (pneumothorax, hemothorax, rib fractures, mediastinal widening), Pelvis X-ray (pelvic fractures), FAST exam (intra-abdominal free fluid). RESUSCITATION: Fluid resuscitation: Crystalloid boluses (1-2 L), reassess after each bolus. Massive transfusion protocol: Activate for patients with hemorrhagic shock. 1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets. Tranexamic acid 1 g IV over 10 minutes, then 1 g over 8 hours (within 3 hours of injury). Permissive hypotension: Target systolic blood pressure 80-90 mmHg in penetrating trauma until hemorrhage controlled. Avoid in traumatic brain injury (maintain SBP >90 mmHg). Damage control resuscitation: Minimize crystalloid, early blood products, correct coagulopathy, prevent hypothermia. SECONDARY SURVEY: Perform only after primary survey completed and patient stabilized. Head-to-toe examination: Head: Scalp lacerations, skull fractures, Battle sign, raccoon eyes, CSF leak. Maxillofacial: Facial fractures, dental injuries, mandible fractures. Cervical spine: Tenderness, deformity, neurologic deficits. Chest: Rib fractures, pulmonary contusion, cardiac contusion. Abdomen: Tenderness, distension, peritoneal signs, seatbelt sign. Pelvis: Pelvic instability, perineal hematoma. Extremities: Fractures, dislocations, vascular injuries, compartment syndrome. Neurologic: Complete neurologic examination, motor and sensory function. Rectal: Sphincter tone, blood, high-riding prostate. ADJUNCTS TO SECONDARY SURVEY: CT imaging: CT head for altered mental status or neurologic deficits, CT cervical spine for neck pain or neurologic deficits, CT chest/abdomen/pelvis for stable patients with blunt trauma. Specialized imaging: Angiography for vascular injuries, CT angiography for aortic injury. DEFINITIVE CARE: Operative intervention: Immediate laparotomy for hemodynamic instability with positive FAST, Thoracotomy for massive hemothorax or cardiac tamponade, Craniotomy for intracranial mass lesions, Orthopedic fixation for fractures. ICU admission: Severe injuries, ongoing resuscitation, mechanical ventilation. Transfer: Transfer to higher level of care if resources inadequate. REASSESSMENT: Continuous reassessment essential. Repeat primary survey after any intervention or change in patient status. Monitor vital signs, urine output, mental status. Adjust treatment based on response.',
    keyPoints: [
      'Primary survey follows ABCDE sequence - treat life-threatening injuries immediately',
      'Airway with C-spine protection - intubate if GCS ≤8',
      'Control hemorrhage with direct pressure, tourniquets for extremity bleeding',
      'FAST exam guides management in unstable patients with blunt abdominal trauma',
      'Massive transfusion protocol: 1:1:1 ratio of blood products',
      'Permissive hypotension (SBP 80-90 mmHg) in penetrating trauma until hemorrhage controlled',
      'Secondary survey only after primary survey completed and patient stabilized',
      'Reassess frequently - repeat primary survey after any intervention',
    ],
    acsUrl: 'https://www.facs.org/quality-programs/trauma/atls/',
    publicationYear: 2018,
  },

  // HEMORRHAGE CONTROL AND RESUSCITATION
  {
    topic: 'Hemorrhage Control and Damage Control Resuscitation - ACS Trauma Guideline',
    keywords: ['hemorrhage control', 'damage control resuscitation', 'massive transfusion', 'trauma hemorrhage', 'bleeding control trauma', 'tranexamic acid trauma', 'permissive hypotension'],
    system: 'Emergency Medicine',
    guidelineSummary: 'The ACS guideline for hemorrhage control and damage control resuscitation emphasizes early hemorrhage control, balanced resuscitation, and prevention of the lethal triad (hypothermia, acidosis, coagulopathy). Damage control resuscitation includes permissive hypotension, hemostatic resuscitation with balanced blood products, early use of tranexamic acid, and prevention of hypothermia. Massive transfusion protocol uses 1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets. Tourniquets are effective for life-threatening extremity hemorrhage. Tranexamic acid reduces mortality when given within 3 hours of injury. Permissive hypotension (SBP 80-90 mmHg) is appropriate in penetrating trauma until hemorrhage controlled, but contraindicated in traumatic brain injury. Definitive hemorrhage control (surgery, angioembolization) is essential.',
    level1Recommendations: [
      'Control external hemorrhage with direct pressure as first-line intervention (Level 1, Quality A)',
      'Apply tourniquet for life-threatening extremity hemorrhage that cannot be controlled with direct pressure (Level 1, Quality A)',
      'Activate massive transfusion protocol for patients with hemorrhagic shock and ongoing hemorrhage (Level 1, Quality A)',
      'Transfuse blood products in 1:1:1 ratio (packed red blood cells : fresh frozen plasma : platelets) during massive transfusion (Level 1, Quality A)',
      'Administer tranexamic acid 1 g IV within 3 hours of injury for trauma patients with significant hemorrhage or risk of significant hemorrhage (Level 1, Quality A)',
      'Achieve definitive hemorrhage control (surgical or angiographic) as soon as possible (Level 1, Quality A)',
      'Prevent hypothermia with active warming measures during resuscitation (Level 1, Quality A)',
    ],
    level2Recommendations: [
      'Use permissive hypotension (systolic blood pressure 80-90 mmHg) in penetrating trauma until hemorrhage controlled (Level 2, Quality B)',
      'Maintain systolic blood pressure >90 mmHg in patients with traumatic brain injury (Level 2, Quality A)',
      'Minimize crystalloid administration during damage control resuscitation (Level 2, Quality B)',
      'Use hemostatic dressings for junctional hemorrhage (axilla, groin, neck) when direct pressure inadequate (Level 2, Quality B)',
      'Transfuse platelets to maintain platelet count >50,000/μL during massive transfusion (Level 2, Quality B)',
      'Administer calcium chloride or calcium gluconate during massive transfusion to prevent hypocalcemia (Level 2, Quality B)',
      'Monitor and correct coagulopathy with blood products and adjuncts (fibrinogen, prothrombin complex concentrate) (Level 2, Quality B)',
    ],
    level3Recommendations: [
      'Consider recombinant factor VIIa for refractory coagulopathy after correction of acidosis, hypothermia, and hypocalcemia (Level 3, Quality C)',
      'Consider whole blood transfusion as alternative to component therapy in massive transfusion (Level 3, Quality C)',
      'Consider resuscitative endovascular balloon occlusion of the aorta (REBOA) for non-compressible torso hemorrhage as bridge to definitive control (Level 3, Quality C)',
    ],
    qualityOfEvidence: 'Multiple levels: Level 1 recommendations are based on Quality A (High quality evidence from randomized controlled trials including CRASH-2, PROPPR); Level 2 recommendations are based on Quality A-B (High to Moderate quality evidence); Level 3 recommendations are based on Quality C (Low quality evidence or expert opinion)',
    clinicalImplementation: 'Implementation of ACS hemorrhage control guidelines requires systematic approach to bleeding control and resuscitation. HEMORRHAGE CONTROL: External hemorrhage: Direct pressure: Apply firm pressure directly to bleeding site for 5-10 minutes. Most effective first-line intervention. Pressure dressings: Apply after direct pressure to maintain hemostasis. Tourniquets: Indications: Life-threatening extremity hemorrhage not controlled by direct pressure, Multiple casualties with limited resources, Tactical situations. Application: Apply 2-3 inches proximal to wound, Tighten until bleeding stops, Document time applied, Do not remove in field. Complications: Nerve injury, ischemia (acceptable for life-saving intervention). Hemostatic dressings: Combat Gauze (kaolin-impregnated), QuikClot, Celox. Indications: Junctional hemorrhage (axilla, groin, neck), Deep wounds where direct pressure difficult. Application: Pack wound tightly with hemostatic dressing, Apply direct pressure for 3 minutes. Internal hemorrhage: Identify source: Chest (hemothorax), Abdomen (solid organ injury, vascular injury), Pelvis (pelvic fracture), Retroperitoneum, Long bones (femur, tibia). Chest tube for hemothorax: 28-32 French tube, 4th-5th intercostal space anterior axillary line. Indications for thoracotomy: >1500 mL initial output, >200 mL/hr for 2-4 hours, Hemodynamic instability. Pelvic binder: Apply for suspected pelvic fracture with hemodynamic instability. Position at level of greater trochanters. Reduces pelvic volume and tamponades bleeding. Angioembolization: Indications: Ongoing pelvic hemorrhage despite resuscitation, Solid organ injury with contrast extravasation on CT. Targets: Internal iliac artery branches, Splenic artery, Hepatic artery. Surgery: Immediate laparotomy for hemodynamic instability with positive FAST exam. Damage control surgery: Abbreviated laparotomy to control hemorrhage and contamination, Temporary abdominal closure, Definitive repair after resuscitation in ICU. DAMAGE CONTROL RESUSCITATION: Principles: Permissive hypotension until hemorrhage controlled, Hemostatic resuscitation with balanced blood products, Minimize crystalloid, Prevent hypothermia, Correct coagulopathy. Permissive hypotension: Target systolic blood pressure 80-90 mmHg in penetrating trauma. Rationale: Prevents clot disruption, Reduces ongoing hemorrhage, Avoids hemodilution. Contraindications: Traumatic brain injury (maintain SBP >90 mmHg), Spinal cord injury, Elderly patients. Duration: Until hemorrhage controlled surgically or angiographically. Hemostatic resuscitation: Massive transfusion protocol: Activate for: Hemorrhagic shock (SBP <90 mmHg, HR >120 bpm), Ongoing hemorrhage, Anticipated need for massive transfusion (>10 units PRBC in 24 hours). Blood products: 1:1:1 ratio of packed red blood cells : fresh frozen plasma : platelets. Example: 6 units PRBC, 6 units FFP, 1 apheresis platelet unit (equivalent to 6 units). Transfuse in rounds: Reassess after each round, Continue until hemorrhage controlled and hemodynamics stable. Targets: Hemoglobin >7 g/dL, INR <1.5, Platelet count >50,000/μL, Fibrinogen >150-200 mg/dL. Tranexamic acid: Dose: 1 g IV over 10 minutes, then 1 g IV over 8 hours. Timing: Within 3 hours of injury (benefit decreases after 3 hours, harm if >3 hours). Mechanism: Inhibits fibrinolysis, reduces bleeding. Evidence: CRASH-2 trial showed 1.5% absolute mortality reduction. Contraindications: >3 hours from injury, Isolated head injury. Calcium supplementation: Citrate in blood products binds calcium causing hypocalcemia. Administer calcium chloride 1 g IV or calcium gluconate 3 g IV during massive transfusion. Monitor ionized calcium, maintain >1.0 mmol/L. Minimize crystalloid: Excessive crystalloid causes: Hemodilution and dilutional coagulopathy, Hypothermia, Acidosis, Abdominal compartment syndrome. Limit crystalloid to <1-2 L during initial resuscitation. Use blood products for volume resuscitation. COAGULOPATHY MANAGEMENT: Trauma-induced coagulopathy: Multifactorial: Tissue injury, Shock and hypoperfusion, Hemodilution, Hypothermia, Acidosis, Hypocalcemia. Lethal triad: Hypothermia, acidosis, coagulopathy. Each worsens the others. Prevention and treatment: Correct hypothermia: Active warming (forced-air warming, warm IV fluids, warm room). Target temperature >35°C. Correct acidosis: Adequate resuscitation and perfusion, Avoid excessive crystalloid, Sodium bicarbonate if severe (pH <7.1). Correct hypocalcemia: Calcium supplementation during massive transfusion. Correct coagulopathy: Balanced blood product transfusion (1:1:1 ratio), Fibrinogen supplementation: Cryoprecipitate (10 units) or fibrinogen concentrate if fibrinogen <150-200 mg/dL. Prothrombin complex concentrate (PCC): For refractory coagulopathy or warfarin reversal. Dose: 25-50 units/kg IV. Recombinant factor VIIa: Last resort for refractory coagulopathy. Dose: 90 mcg/kg IV. Use only after correction of acidosis, hypothermia, hypocalcemia. Risk of thrombosis. MONITORING: Laboratory: Serial hemoglobin/hematocrit every 30-60 minutes during active resuscitation. Coagulation studies: PT/INR, PTT, fibrinogen, platelet count. Arterial blood gas: pH, lactate, base deficit. Ionized calcium. Thromboelastography (TEG) or rotational thromboelastometry (ROTEM): Viscoelastic assays provide real-time assessment of coagulation. Guide blood product administration. Clinical: Vital signs: Heart rate, blood pressure, respiratory rate. Urine output: Goal >0.5 mL/kg/hr. Mental status. Ongoing bleeding: Chest tube output, Abdominal distension, Hemodynamic instability. ENDPOINTS OF RESUSCITATION: Hemodynamic stability: Heart rate <100 bpm, Systolic blood pressure >90 mmHg, Mean arterial pressure >65 mmHg. Adequate perfusion: Urine output >0.5 mL/kg/hr, Lactate clearance (decrease >10% per hour), Base deficit improvement, Mental status improvement. Cessation of bleeding: No ongoing hemorrhage from chest tubes, drains, or wounds. Hemodynamic stability without ongoing transfusion. Correction of coagulopathy: INR <1.5, Platelet count >50,000/μL, Fibrinogen >150 mg/dL. COMPLICATIONS: Transfusion-related: Transfusion-related acute lung injury (TRALI), Transfusion-associated circulatory overload (TACO), Hemolytic transfusion reactions, Hyperkalemia, Hypocalcemia, Hypothermia. Abdominal compartment syndrome: Intra-abdominal pressure >20 mmHg with organ dysfunction. Measure bladder pressure. Treatment: Decompressive laparotomy. Multi-organ failure: Acute kidney injury, Acute respiratory distress syndrome, Liver dysfunction, Coagulopathy.',
    keyPoints: [
      'Direct pressure first-line for external hemorrhage, tourniquets for life-threatening extremity bleeding',
      'Massive transfusion protocol: 1:1:1 ratio of blood products',
      'Tranexamic acid within 3 hours of injury reduces mortality',
      'Permissive hypotension (SBP 80-90 mmHg) in penetrating trauma until hemorrhage controlled',
      'Maintain SBP >90 mmHg in traumatic brain injury',
      'Minimize crystalloid - use blood products for volume resuscitation',
      'Prevent lethal triad: hypothermia, acidosis, coagulopathy',
      'Definitive hemorrhage control (surgery, angioembolization) essential',
    ],
    acsUrl: 'https://www.facs.org/quality-programs/trauma/tqp/center-programs/vrc/resources/',
    publicationYear: 2020,
  },

  // TRAUMATIC BRAIN INJURY
  {
    topic: 'Traumatic Brain Injury Management - ACS Trauma Guideline',
    keywords: ['traumatic brain injury', 'tbi management', 'head injury management', 'intracranial pressure', 'brain trauma', 'severe head injury', 'tbi guideline'],
    system: 'Emergency Medicine',
    guidelineSummary: 'The ACS guideline for traumatic brain injury management emphasizes prevention of secondary brain injury through maintenance of adequate cerebral perfusion and oxygenation. Primary injury occurs at time of impact and is irreversible. Secondary injury from hypoxia, hypotension, increased intracranial pressure, and cerebral edema is preventable. Key interventions: avoid hypoxia (maintain SpO2 >90%) and hypotension (maintain SBP >90 mmHg), control intracranial pressure (ICP <20 mmHg), maintain cerebral perfusion pressure (CPP >60 mmHg), and provide timely neurosurgical intervention. Severe TBI (GCS ≤8) requires intubation, ICP monitoring, and ICU care. CT head identifies surgical lesions. Hyperventilation reserved for acute herniation. Hyperosmolar therapy (mannitol, hypertonic saline) reduces ICP. Decompressive craniectomy for refractory ICP elevation.',
    level1Recommendations: [
      'Avoid hypoxia (maintain SpO2 >90%) and hypotension (maintain SBP >90 mmHg) in traumatic brain injury patients (Level 1, Quality A)',
      'Intubate patients with severe traumatic brain injury (GCS ≤8) to protect airway and ensure adequate oxygenation and ventilation (Level 1, Quality A)',
      'Obtain CT head without contrast in all patients with moderate to severe traumatic brain injury (Level 1, Quality A)',
      'Perform immediate neurosurgical evacuation of epidural hematoma >30 mL or subdural hematoma >10 mm thickness or >5 mm midline shift (Level 1, Quality A)',
      'Monitor intracranial pressure in severe traumatic brain injury (GCS ≤8) with abnormal CT scan (Level 1, Quality B)',
      'Maintain intracranial pressure <20 mmHg and cerebral perfusion pressure >60 mmHg (Level 1, Quality B)',
      'Elevate head of bed to 30 degrees to reduce intracranial pressure (Level 1, Quality B)',
    ],
    level2Recommendations: [
      'Maintain PaCO2 35-40 mmHg; avoid routine hyperventilation (Level 2, Quality B)',
      'Use hyperosmolar therapy (mannitol 0.25-1 g/kg or hypertonic saline 3% 250 mL bolus) for elevated intracranial pressure (Level 2, Quality B)',
      'Administer seizure prophylaxis (levetiracetam or phenytoin) for 7 days to prevent early post-traumatic seizures (Level 2, Quality B)',
      'Maintain normothermia; treat fever aggressively (Level 2, Quality B)',
      'Maintain euglycemia; avoid hypoglycemia and hyperglycemia (Level 2, Quality B)',
      'Provide adequate sedation and analgesia to reduce ICP and facilitate mechanical ventilation (Level 2, Quality B)',
      'Consider decompressive craniectomy for refractory intracranial hypertension (Level 2, Quality B)',
    ],
    level3Recommendations: [
      'Consider brief hyperventilation (PaCO2 30-35 mmHg) as temporizing measure for acute neurologic deterioration with signs of herniation (Level 3, Quality C)',
      'Consider barbiturate coma (pentobarbital) for refractory intracranial hypertension unresponsive to other measures (Level 3, Quality C)',
      'Consider moderate hypothermia (32-35°C) for refractory intracranial hypertension (Level 3, Quality C)',
    ],
    qualityOfEvidence: 'Multiple levels: Level 1 recommendations are based on Quality A (High quality evidence from prospective studies and systematic reviews) and Quality B (Moderate quality evidence); Level 2 recommendations are based on Quality B (Moderate quality evidence); Level 3 recommendations are based on Quality C (Low quality evidence or expert opinion)',
    clinicalImplementation: 'Implementation of ACS TBI guidelines requires systematic approach to prevent secondary brain injury. INITIAL ASSESSMENT: Primary survey: Airway with C-spine protection, Breathing, Circulation. Avoid hypoxia and hypotension - double mortality in severe TBI. Neurologic assessment: Glasgow Coma Scale (GCS): Eye opening (1-4), Verbal response (1-5), Motor response (1-6). Total 3-15. Severity: Mild (GCS 13-15), Moderate (GCS 9-12), Severe (GCS ≤8). Pupillary examination: Size, symmetry, reactivity. Unequal pupils suggest mass lesion. Lateralizing signs: Weakness, sensory deficits. AIRWAY MANAGEMENT: Indications for intubation: GCS ≤8, Inability to protect airway, Respiratory failure, Severe maxillofacial trauma, Combative patient requiring sedation for imaging. Technique: Rapid sequence intubation with in-line cervical spine stabilization. Avoid hyperextension of neck. Medications: Etomidate or ketamine (maintain cerebral perfusion), Succinylcholine or rocuronium (paralysis). Avoid propofol in hypotensive patients. Ventilation: Maintain normocapnia (PaCO2 35-40 mmHg). Avoid hyperventilation (causes cerebral vasoconstriction and ischemia). Brief hyperventilation (PaCO2 30-35 mmHg) acceptable as temporizing measure for acute herniation. Oxygenation: Maintain SpO2 >90%, PaO2 >60 mmHg. HEMODYNAMIC MANAGEMENT: Blood pressure: Maintain SBP >90 mmHg (SBP <90 mmHg doubles mortality). Target SBP >100 mmHg in patients age 50-69 years, >110 mmHg in age 15-49 or >70 years. Fluid resuscitation: Isotonic crystalloid (normal saline or lactated Ringer\'s). Avoid hypotonic fluids (worsen cerebral edema). Blood products if hemorrhage. Vasopressors: Norepinephrine if hypotension persists despite fluid resuscitation. IMAGING: CT head without contrast: Indications: GCS <15, Loss of consciousness, Amnesia, Vomiting, Age >65 years, Coagulopathy, Dangerous mechanism. Findings: Epidural hematoma (lens-shaped, arterial bleeding), Subdural hematoma (crescent-shaped, venous bleeding), Subarachnoid hemorrhage, Intracerebral hemorrhage, Skull fractures, Cerebral edema, Midline shift. Repeat CT: If neurologic deterioration, Before ICP monitor placement, 12-24 hours after initial CT if abnormal. NEUROSURGICAL INTERVENTION: Indications for immediate surgery: Epidural hematoma >30 mL, Subdural hematoma >10 mm thickness or >5 mm midline shift, Intracerebral hemorrhage with mass effect, Depressed skull fracture with dural penetration, Open skull fracture with CSF leak. Decompressive craniectomy: For refractory intracranial hypertension. Removes portion of skull to allow brain swelling. Improves survival but may increase severe disability. ICP MONITORING: Indications: Severe TBI (GCS ≤8) with abnormal CT scan (hematoma, contusion, edema, compressed cisterns), Severe TBI with normal CT if ≥2 of: Age >40 years, SBP <90 mmHg, Abnormal motor posturing. Device: Intraventricular catheter (gold standard, allows CSF drainage), Intraparenchymal monitor. Target: ICP <20 mmHg, CPP >60 mmHg (CPP = MAP - ICP). ICP MANAGEMENT: Tier 1 interventions: Head of bed elevation: 30 degrees (improves venous drainage). Sedation and analgesia: Propofol, fentanyl, midazolam. Reduces ICP, facilitates ventilation. Normocapnia: PaCO2 35-40 mmHg. Avoid hyperventilation. Normothermia: Treat fever aggressively (acetaminophen, cooling blankets). Euglycemia: Avoid hypoglycemia (<70 mg/dL) and hyperglycemia (>180 mg/dL). CSF drainage: If intraventricular catheter present. Tier 2 interventions (if ICP remains elevated): Hyperosmolar therapy: Mannitol 0.25-1 g/kg IV bolus (monitor serum osmolality, hold if >320 mOsm/L), OR Hypertonic saline 3% 250 mL IV bolus (can repeat, monitor sodium, hold if >160 mEq/L). Brief hyperventilation: PaCO2 30-35 mmHg as temporizing measure. Tier 3 interventions (refractory ICP): Decompressive craniectomy: Removes skull to allow brain swelling. Barbiturate coma: Pentobarbital loading dose 10 mg/kg over 30 minutes, then 5 mg/kg/hr for 3 hours, then 1 mg/kg/hr. Requires continuous EEG monitoring, hemodynamic support. Moderate hypothermia: Target temperature 32-35°C. Controversial - may increase complications. SEIZURE PROPHYLAXIS: Early post-traumatic seizures: Occur within 7 days of injury. Increase ICP and worsen outcome. Prophylaxis: Levetiracetam 500-1000 mg IV BID or Phenytoin 15-20 mg/kg IV loading dose, then 100 mg IV TID for 7 days. Do not continue beyond 7 days - no benefit for late seizures. SUPPORTIVE CARE: DVT prophylaxis: Sequential compression devices initially, Low molecular weight heparin or unfractionated heparin after 24-48 hours if no progression on repeat CT. Stress ulcer prophylaxis: H2 blocker or proton pump inhibitor. Nutrition: Enteral nutrition within 48-72 hours if tolerated. Target 100% of caloric needs by day 7. Glycemic control: Maintain glucose 80-180 mg/dL. Avoid hypoglycemia. MONITORING: Neurologic: Serial neurologic exams (GCS, pupils, motor function). ICP and CPP if monitor placed. Hemodynamic: Continuous blood pressure monitoring. Maintain SBP >90 mmHg, MAP to achieve CPP >60 mmHg. Respiratory: Pulse oximetry, capnography. Arterial blood gas. Laboratory: Electrolytes (hyponatremia from SIADH or cerebral salt wasting), Glucose, Serum osmolality if receiving hyperosmolar therapy. PROGNOSIS: Predictors of poor outcome: Low GCS, Older age, Hypoxia or hypotension, Pupillary abnormalities, Mass lesions with midline shift. Neuroprognostication: Defer until at least 72 hours after injury. Use multimodal assessment: clinical exam, imaging, EEG, evoked potentials. REHABILITATION: Early mobilization and rehabilitation improve outcomes. Multidisciplinary team: Physical therapy, occupational therapy, speech therapy, neuropsychology.',
    keyPoints: [
      'Avoid hypoxia (SpO2 >90%) and hypotension (SBP >90 mmHg) - double mortality if present',
      'Intubate if GCS ≤8 to protect airway and ensure adequate ventilation',
      'Maintain ICP <20 mmHg and CPP >60 mmHg',
      'Elevate head of bed 30 degrees, maintain normocapnia (PaCO2 35-40 mmHg)',
      'Hyperosmolar therapy (mannitol or hypertonic saline) for elevated ICP',
      'Seizure prophylaxis for 7 days to prevent early post-traumatic seizures',
      'Immediate neurosurgical evacuation for large epidural or subdural hematomas',
      'Avoid routine hyperventilation - reserve for acute herniation',
    ],
    acsUrl: 'https://www.facs.org/quality-programs/trauma/tqp/center-programs/vrc/resources/',
    publicationYear: 2020,
  },
];

/**
 * Search function to find relevant ACS Trauma guideline entries based on query
 */
export function searchACSTraumaGuidelines(query: string): ACSTraumaGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = acsTraumaGuidelinesKnowledge.map(entry => {
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

  console.log(`ACS Trauma Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ACS Trauma guideline by exact topic name
 */
export function getACSTraumaGuidelineByTopic(topic: string): ACSTraumaGuidelineEntry | undefined {
  return acsTraumaGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ACS Trauma guidelines for a specific system
 */
export function getACSTraumaGuidelinesBySystem(system: string): ACSTraumaGuidelineEntry[] {
  return acsTraumaGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
