
/**
 * Renal System Knowledge Base - Merck Manual Professional
 * 
 * Comprehensive renal knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major kidney and electrolyte disorders.
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const renalKnowledge: MerckManualEntry[] = [
  {
    topic: 'Acute Kidney Injury',
    keywords: ['acute kidney injury', 'aki', 'acute renal failure', 'arf', 'acute tubular necrosis', 'atn'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, acute kidney injury is a sudden decline in kidney function. AKI is classified into prerenal (decreased renal perfusion), intrinsic (direct kidney damage), and postrenal (urinary tract obstruction). Acute tubular necrosis is the most common intrinsic cause.',
    clinicalPresentation: 'Patients may be asymptomatic or present with oliguria, anuria, fluid overload, uremic symptoms, or complications (hyperkalemia, metabolic acidosis). Physical examination findings depend on etiology.',
    diagnosticApproach: 'Diagnosis based on KDIGO criteria: increase in serum creatinine ≥0.3 mg/dL within 48 hours. Urinalysis: muddy brown casts in ATN, RBC casts in glomerulonephritis. FENa <1% suggests prerenal, >2% suggests intrinsic.',
    treatment: 'Management depends on etiology. Prerenal: restore renal perfusion. Intrinsic: supportive care, treat underlying cause. Postrenal: relieve obstruction. Indications for dialysis: refractory hyperkalemia, severe acidosis, volume overload, uremic complications.',
    clinicalPearls: [
      'FENa <1% suggests prerenal AKI',
      'Muddy brown casts are pathognomonic for ATN',
      'Bilateral obstruction required for postrenal AKI',
      'Early nephrology consultation for severe AKI'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/acute-kidney-injury/acute-kidney-injury-aki'
  },

  {
    topic: 'Chronic Kidney Disease',
    keywords: ['chronic kidney disease', 'ckd', 'chronic renal failure', 'end stage renal disease', 'esrd'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, chronic kidney disease is progressive loss of kidney function over months to years. Common causes include diabetes mellitus, hypertension, glomerulonephritis, and polycystic kidney disease. CKD complications include anemia, mineral bone disease, metabolic acidosis, and cardiovascular disease.',
    clinicalPresentation: 'Early CKD is often asymptomatic. As kidney function declines, patients develop fatigue, decreased appetite, nausea, pruritus, and fluid retention. Advanced CKD causes uremic symptoms.',
    diagnosticApproach: 'Diagnosis requires evidence of kidney damage or decreased function for ≥3 months. Assess eGFR and albuminuria. Determine etiology: urinalysis, renal ultrasound, serologic tests.',
    treatment: 'Slow progression: control blood pressure, ACE inhibitors/ARBs, SGLT2 inhibitors, glycemic control. Manage complications: ESAs for anemia, phosphate binders for mineral bone disease. Dialysis or transplantation when eGFR <15.',
    clinicalPearls: [
      'ACE inhibitors/ARBs are renoprotective',
      'SGLT2 inhibitors slow CKD progression',
      'Small echogenic kidneys suggest chronic irreversible disease',
      'Refer to nephrology when eGFR <30'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/chronic-kidney-disease/chronic-kidney-disease'
  },

  {
    topic: 'Hyponatremia',
    keywords: ['hyponatremia', 'low sodium', 'siadh', 'syndrome of inappropriate antidiuretic hormone'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, hyponatremia is defined as serum sodium <135 mEq/L. Results from excess water relative to sodium. Classified by volume status: hypovolemic, euvolemic, hypervolemic. SIADH results from inappropriate ADH secretion causing water retention.',
    clinicalPresentation: 'Symptoms depend on severity and rapidity. Mild: often asymptomatic. Moderate: nausea, confusion, headache. Severe: altered mental status, seizures, coma. Physical examination findings depend on volume status.',
    diagnosticApproach: 'Confirm true hyponatremia. Assess volume status. Measure serum osmolality, urine osmolality, and urine sodium. SIADH criteria: hyponatremia with low serum osmolality, inappropriately concentrated urine, euvolemia.',
    treatment: 'Treatment depends on severity, acuity, and volume status. Acute symptomatic: hypertonic saline. Chronic: correct slowly (≤8-10 mEq/L per 24 hours) to avoid osmotic demyelination. SIADH: fluid restriction, treat underlying cause.',
    clinicalPearls: [
      'Correct chronic hyponatremia slowly to avoid osmotic demyelination',
      'SIADH: low serum osmolality with inappropriately concentrated urine',
      'Acute symptomatic hyponatremia is medical emergency',
      'Always assess volume status to guide treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/hyponatremia'
  },

  {
    topic: 'Hyperkalemia',
    keywords: ['hyperkalemia', 'high potassium', 'elevated potassium'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, hyperkalemia is defined as serum potassium >5.0 mEq/L. Results from decreased renal excretion, increased release from cells, or excessive intake. Common causes include CKD, AKI, medications (ACE inhibitors, ARBs, potassium-sparing diuretics).',
    clinicalPresentation: 'Often asymptomatic until severe. Symptoms include muscle weakness, paresthesias, and palpitations. Severe hyperkalemia can cause cardiac arrhythmias. ECG changes: peaked T waves, prolonged PR, widened QRS, sine wave pattern.',
    diagnosticApproach: 'Confirm true hyperkalemia. Obtain ECG immediately. Assess severity: mild (5.0-5.5), moderate (5.5-6.5), severe (>6.5 or ECG changes). Determine cause.',
    treatment: 'Severe with ECG changes: 1) Calcium gluconate IV (stabilize cardiac membrane), 2) Shift potassium into cells (insulin with dextrose, albuterol, bicarbonate), 3) Remove potassium (diuretics, Kayexelate, dialysis).',
    clinicalPearls: [
      'Peaked T waves are earliest ECG finding',
      'Calcium stabilizes cardiac membrane but does not lower potassium',
      'Insulin with dextrose and albuterol shift potassium temporarily',
      'Dialysis is definitive treatment for severe refractory hyperkalemia'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/hyperkalemia'
  },

  {
    topic: 'Urinary Tract Infection',
    keywords: ['urinary tract infection', 'uti', 'cystitis', 'pyelonephritis', 'bladder infection'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, urinary tract infections result from bacterial colonization, most commonly by Escherichia coli (80-85%). Bacteria ascend from perineum through urethra to bladder (cystitis) and may ascend to kidneys (pyelonephritis).',
    clinicalPresentation: 'Cystitis: dysuria, frequency, urgency, suprapubic pain, hematuria. Pyelonephritis: fever, chills, flank pain, costovertebral angle tenderness, nausea, vomiting.',
    diagnosticApproach: 'Urinalysis: pyuria, bacteriuria, positive leukocyte esterase and nitrites. Urine culture: ≥10^5 CFU/mL diagnostic. Obtain culture before antibiotics in pyelonephritis.',
    treatment: 'Cystitis: nitrofurantoin, TMP-SMX, or fosfomycin. Pyelonephritis: fluoroquinolone or ceftriaxone. Complicated UTI: broader spectrum, longer duration. Asymptomatic bacteriuria: treat only in pregnancy.',
    clinicalPearls: [
      'E. coli causes 80-85% of community-acquired UTIs',
      'Positive nitrites highly specific for UTI',
      'Asymptomatic bacteriuria should not be treated except in pregnancy',
      'Pyelonephritis requires 7-14 days of antibiotics'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-tract-infections-utis/bacterial-urinary-tract-infections-utis'
  },
];
