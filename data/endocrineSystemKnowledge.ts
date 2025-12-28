
/**
 * Endocrine System Knowledge Base - Merck Manual Professional
 * 
 * PHASE 4: COMPLETE ENDOCRINE SYSTEM
 * 
 * Comprehensive endocrinology knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major endocrine conditions including:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * Maintains same integrity and structure as Cardiology, Pulmonary, Renal, and Gastroenterology sections.
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const endocrineSystemKnowledge: MerckManualEntry[] = [
  // DIABETES MELLITUS
  {
    topic: 'Type 1 Diabetes Mellitus',
    keywords: ['type 1 diabetes', 'type 1 diabetes mellitus', 't1dm', 'insulin dependent diabetes', 'iddm', 'juvenile diabetes'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, type 1 diabetes mellitus results from autoimmune destruction of pancreatic beta cells, leading to absolute insulin deficiency. Genetic susceptibility (HLA-DR3, HLA-DR4) and environmental triggers (viral infections) initiate autoimmune process. Autoantibodies (anti-GAD, anti-IA2, anti-insulin, anti-ZnT8) are present in most patients. Without insulin, glucose cannot enter cells, causing hyperglycemia, osmotic diuresis, and metabolic derangements. Lipolysis increases, producing ketone bodies, which can lead to diabetic ketoacidosis (DKA). Accounts for 5-10% of diabetes cases.',
    clinicalPresentation: 'Classic triad: polyuria, polydipsia, and polyphagia with weight loss. Symptoms develop over days to weeks. May present with diabetic ketoacidosis (DKA): nausea, vomiting, abdominal pain, Kussmaul respirations, fruity breath odor, altered mental status. Physical examination may reveal dehydration, tachycardia, and signs of DKA (deep rapid breathing, altered consciousness). Chronic complications include microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (coronary artery disease, stroke, peripheral arterial disease) complications.',
    diagnosticApproach: 'Diagnosis based on hyperglycemia: fasting glucose ≥126 mg/dL, random glucose ≥200 mg/dL with symptoms, or HbA1c ≥6.5%. C-peptide low or absent (indicates insulin deficiency). Autoantibodies (anti-GAD, anti-IA2, anti-insulin, anti-ZnT8) present in 85-90% at diagnosis. DKA: hyperglycemia (usually >250 mg/dL), anion gap metabolic acidosis (pH <7.3, bicarbonate <18 mEq/L), ketonemia/ketonuria. Assess for complications: urinalysis (proteinuria, microalbuminuria), lipid panel, dilated eye exam, monofilament testing for neuropathy.',
    treatment: 'Lifelong insulin therapy is essential. Multiple daily injections (basal-bolus regimen): long-acting insulin (glargine, detemir, degludec) once or twice daily plus rapid-acting insulin (lispro, aspart, glulisine) before meals. Continuous subcutaneous insulin infusion (insulin pump) provides more flexibility. Closed-loop systems (artificial pancreas) automatically adjust insulin delivery. Target HbA1c <7% for most adults, individualized based on age, comorbidities, hypoglycemia risk. Self-monitoring of blood glucose or continuous glucose monitoring. Carbohydrate counting for meal planning. DKA treatment: IV fluids, insulin infusion, electrolyte replacement (potassium), treat precipitating cause. Screen for and manage complications.',
    clinicalPearls: [
      'DKA is life-threatening complication requiring immediate treatment',
      'Honeymoon period (temporary remission) may occur after diagnosis',
      'Screen for other autoimmune diseases (thyroid, celiac)',
      'Hypoglycemia is major risk with intensive insulin therapy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm'
  },

  {
    topic: 'Type 2 Diabetes Mellitus',
    keywords: ['type 2 diabetes', 'type 2 diabetes mellitus', 't2dm', 'non insulin dependent diabetes', 'niddm', 'adult onset diabetes'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, type 2 diabetes mellitus results from insulin resistance and progressive beta cell dysfunction. Obesity, particularly visceral adiposity, is major risk factor causing insulin resistance through inflammatory cytokines and free fatty acids. Pancreatic beta cells initially compensate by increasing insulin secretion, but eventually fail, leading to hyperglycemia. Genetic factors, sedentary lifestyle, and aging contribute. Accounts for 90-95% of diabetes cases. Complications include microvascular and macrovascular disease.',
    clinicalPresentation: 'Often asymptomatic, diagnosed on routine screening. Symptomatic patients present with polyuria, polydipsia, blurred vision, and fatigue. Weight loss less common than in type 1. May present with hyperosmolar hyperglycemic state (HHS): severe hyperglycemia (>600 mg/dL), hyperosmolality, dehydration, altered mental status, without significant ketosis. Physical examination may reveal obesity, acanthosis nigricans (insulin resistance marker), and signs of complications (retinopathy, neuropathy, foot ulcers).',
    diagnosticApproach: 'Diagnosis based on hyperglycemia: fasting glucose ≥126 mg/dL, random glucose ≥200 mg/dL with symptoms, HbA1c ≥6.5%, or 2-hour glucose ≥200 mg/dL during oral glucose tolerance test. Screen adults ≥35 years or younger with risk factors (obesity, family history, high-risk ethnicity). C-peptide normal or elevated (distinguishes from type 1). Assess for complications: urinalysis (proteinuria, microalbuminuria), lipid panel, dilated eye exam, monofilament testing, ankle-brachial index. Screen for cardiovascular disease.',
    treatment: 'Lifestyle modifications: weight loss (5-10% reduces HbA1c by 0.5-1%), Mediterranean or low-carb diet, regular exercise (150 min/week). Metformin is first-line pharmacotherapy unless contraindicated. Add second agent if HbA1c not at goal: SGLT2 inhibitors or GLP-1 receptor agonists preferred (cardiovascular and renal benefits). Other options: DPP-4 inhibitors, sulfonylureas, thiazolidinediones, insulin. Target HbA1c <7% for most adults. Manage cardiovascular risk factors: statin, ACE inhibitor/ARB, aspirin if indicated. Screen for and treat complications. Bariatric surgery for obesity with inadequate glycemic control.',
    clinicalPearls: [
      'SGLT2 inhibitors and GLP-1 agonists reduce cardiovascular events and slow CKD progression',
      'Metformin is first-line unless contraindicated (eGFR <30, lactic acidosis risk)',
      'HHS has higher mortality than DKA despite less severe metabolic derangement',
      'Screen for diabetes in all adults ≥35 years'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm'
  },

  {
    topic: 'Diabetic Ketoacidosis',
    keywords: ['diabetic ketoacidosis', 'dka', 'ketoacidosis', 'diabetic keto acidosis'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, diabetic ketoacidosis is a life-threatening complication of diabetes characterized by hyperglycemia, ketosis, and metabolic acidosis. Results from absolute or relative insulin deficiency combined with increased counter-regulatory hormones (glucagon, cortisol, catecholamines). Insulin deficiency causes lipolysis, producing free fatty acids that are converted to ketone bodies (beta-hydroxybutyrate, acetoacetate, acetone) in the liver. Ketones cause anion gap metabolic acidosis. Hyperglycemia causes osmotic diuresis, leading to severe dehydration and electrolyte losses. Common precipitants include infection, insulin omission, myocardial infarction, and new-onset diabetes.',
    clinicalPresentation: 'Polyuria, polydipsia, nausea, vomiting, abdominal pain, and altered mental status. Symptoms develop over hours to days. Physical examination reveals dehydration (dry mucous membranes, decreased skin turgor, tachycardia, hypotension), Kussmaul respirations (deep, rapid breathing), fruity breath odor (acetone), and altered consciousness (confusion to coma). Abdominal pain may mimic acute abdomen. Severe cases present with shock and coma.',
    diagnosticApproach: 'Diagnostic criteria: hyperglycemia (usually >250 mg/dL), anion gap metabolic acidosis (pH <7.3, bicarbonate <18 mEq/L, anion gap >10), and ketonemia or ketonuria. Measure beta-hydroxybutyrate (preferred) or urine/serum ketones. Arterial blood gas shows metabolic acidosis with respiratory compensation. Electrolytes: hyponatremia (dilutional), hyperkalemia (acidosis shifts K+ out of cells, but total body K+ depleted), hypophosphatemia. Identify precipitating cause: infection (cultures, chest X-ray, urinalysis), myocardial infarction (ECG, troponin), medication non-compliance.',
    treatment: 'IV fluids: isotonic saline 1-1.5 L in first hour, then 250-500 mL/hr. Switch to 0.45% saline if hypernatremic. Add dextrose when glucose <250 mg/dL. Insulin: regular insulin 0.1 units/kg IV bolus, then 0.1 units/kg/hr infusion. Reduce rate when glucose <250 mg/dL, continue until anion gap closes. Potassium replacement: start when K+ <5.3 mEq/L and adequate urine output (20-40 mEq/L in IV fluids). Bicarbonate only if pH <6.9. Treat precipitating cause. Monitor glucose, electrolytes, anion gap, mental status hourly. Transition to subcutaneous insulin when anion gap closes, patient eating. Prevent with patient education, sick day management.',
    clinicalPearls: [
      'Total body potassium is depleted despite initial hyperkalemia',
      'Anion gap closure (not glucose normalization) indicates DKA resolution',
      'Cerebral edema is rare but life-threatening complication, especially in children',
      'Overlap subcutaneous and IV insulin during transition to prevent recurrence'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetic-ketoacidosis-dka'
  },

  {
    topic: 'Hyperosmolar Hyperglycemic State',
    keywords: ['hyperosmolar hyperglycemic state', 'hhs', 'hyperosmolar hyperglycemic syndrome', 'hyperosmolar nonketotic coma', 'hhns'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, hyperosmolar hyperglycemic state is a life-threatening complication of type 2 diabetes characterized by severe hyperglycemia (>600 mg/dL), hyperosmolality (>320 mOsm/kg), and dehydration without significant ketosis. Relative insulin deficiency allows hyperglycemia but prevents lipolysis and ketogenesis. Severe hyperglycemia causes osmotic diuresis, leading to profound dehydration (water loss >electrolyte loss), hyperosmolality, and altered mental status. Precipitants include infection, stroke, myocardial infarction, medications (corticosteroids, diuretics), and inadequate fluid intake.',
    clinicalPresentation: 'Develops over days to weeks. Polyuria, polydipsia, weakness, and progressive altered mental status (confusion, lethargy, coma). Neurologic symptoms include focal deficits, seizures, and visual disturbances. Physical examination reveals severe dehydration (dry mucous membranes, poor skin turgor, tachycardia, hypotension, orthostasis), altered consciousness, and absence of Kussmaul respirations or fruity breath (no significant ketosis). Mortality higher than DKA (10-20%).',
    diagnosticApproach: 'Diagnostic criteria: severe hyperglycemia (>600 mg/dL), serum osmolality >320 mOsm/kg, pH >7.3, bicarbonate >18 mEq/L, absent or mild ketonemia/ketonuria. Calculate serum osmolality: 2(Na+) + glucose/18 + BUN/2.8. Arterial blood gas shows minimal or no acidosis. Electrolytes: hypernatremia or normal sodium (corrected Na+ = measured Na+ + 1.6 × [(glucose - 100)/100]), variable potassium, elevated BUN/creatinine (prerenal azotemia). Identify precipitating cause: infection (cultures, imaging), cardiovascular event (ECG, troponin), medication review.',
    treatment: 'IV fluids are cornerstone: isotonic saline 1-1.5 L in first hour, then 250-500 mL/hr. Switch to 0.45% saline when corrected sodium normal or elevated. Add dextrose when glucose <300 mg/dL. Goal: gradual reduction in osmolality (3-8 mOsm/kg/hr) to prevent cerebral edema. Insulin: regular insulin 0.1 units/kg/hr infusion (no bolus needed). Reduce rate when glucose <300 mg/dL. Potassium replacement when K+ <5.3 mEq/L and adequate urine output. Treat precipitating cause. Monitor glucose, electrolytes, osmolality, mental status. Transition to subcutaneous insulin when patient stable and eating. Mortality 10-20%, higher than DKA.',
    clinicalPearls: [
      'Fluid deficit typically 8-10 L (greater than DKA)',
      'Correct sodium for hyperglycemia to assess true sodium status',
      'Neurologic symptoms may mimic stroke',
      'Slower correction of osmolality than DKA to prevent cerebral edema'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/hyperosmolar-hyperglycemic-state-hhs'
  },

  {
    topic: 'Hypoglycemia',
    keywords: ['hypoglycemia', 'low blood sugar', 'insulin reaction', 'hypoglycemic episode'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, hypoglycemia is defined as blood glucose <70 mg/dL. In diabetes, results from excess insulin (medication error, missed meal, exercise) relative to glucose availability. In non-diabetic patients, causes include insulinoma, critical illness, medications (sulfonylureas, insulin), alcohol, adrenal insufficiency, and factitious (exogenous insulin). Counter-regulatory response (glucagon, epinephrine, cortisol, growth hormone) normally prevents hypoglycemia. Recurrent hypoglycemia causes hypoglycemia unawareness (loss of warning symptoms), increasing severe hypoglycemia risk.',
    clinicalPresentation: 'Whipple triad: symptoms of hypoglycemia, documented low glucose, and symptom resolution with glucose administration. Autonomic symptoms (glucose 55-70 mg/dL): tremor, palpitations, anxiety, sweating, hunger. Neuroglycopenic symptoms (glucose <55 mg/dL): confusion, difficulty concentrating, behavioral changes, seizures, loss of consciousness. Physical examination during episode reveals diaphoresis, tachycardia, tremor, and altered mental status. Severe hypoglycemia causes seizures, coma, and death if untreated.',
    diagnosticApproach: 'In diabetes: clinical diagnosis based on symptoms and glucose <70 mg/dL. In non-diabetic patients: document Whipple triad. Supervised fast (up to 72 hours) if recurrent unexplained hypoglycemia: measure glucose, insulin, C-peptide, proinsulin, beta-hydroxybutyrate during symptomatic hypoglycemia. Insulinoma: elevated insulin and C-peptide with hypoglycemia. Exogenous insulin: elevated insulin, suppressed C-peptide. Sulfonylurea: elevated insulin, C-peptide, and sulfonylurea level. Exclude other causes: cortisol, IGF-1, IGF-2, imaging for insulinoma.',
    treatment: 'Conscious patient: 15-20 g fast-acting carbohydrate (glucose tablets, juice, regular soda), recheck glucose in 15 minutes, repeat if still <70 mg/dL. Follow with complex carbohydrate and protein. Unconscious or unable to swallow: glucagon 1 mg IM/SC or dextrose 25 g (50 mL of D50) IV. Prevention in diabetes: adjust medications, regular meals, glucose monitoring, patient education. Hypoglycemia unawareness: relax glycemic targets, use continuous glucose monitoring with alerts. Insulinoma: surgical resection. Factitious: psychiatric evaluation.',
    clinicalPearls: [
      'Rule of 15: 15 g carbohydrate, wait 15 minutes, recheck glucose',
      'Hypoglycemia unawareness increases severe hypoglycemia risk 6-fold',
      'Sulfonylureas cause prolonged hypoglycemia requiring prolonged observation',
      'Glucagon ineffective in alcohol-induced hypoglycemia (depleted glycogen stores)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/hypoglycemia'
  },

  // THYROID DISORDERS
  {
    topic: 'Hypothyroidism',
    keywords: ['hypothyroidism', 'underactive thyroid', 'low thyroid', 'myxedema', 'hashimoto thyroiditis'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, hypothyroidism results from insufficient thyroid hormone production. Primary hypothyroidism (95%): thyroid gland dysfunction, most commonly from Hashimoto thyroiditis (autoimmune destruction), radioactive iodine therapy, thyroidectomy, or medications (lithium, amiodarone). Secondary hypothyroidism (5%): pituitary dysfunction (TSH deficiency). Tertiary hypothyroidism (rare): hypothalamic dysfunction (TRH deficiency). Thyroid hormone deficiency slows metabolism, affecting multiple organ systems. Severe untreated hypothyroidism causes myxedema coma.',
    clinicalPresentation: 'Insidious onset of fatigue, cold intolerance, weight gain, constipation, dry skin, hair loss, hoarseness, and menstrual irregularities. Physical examination reveals bradycardia, diastolic hypertension, delayed deep tendon reflexes, dry coarse skin, brittle hair, periorbital edema, and non-pitting edema (myxedema). Severe hypothyroidism causes myxedema coma: hypothermia, altered mental status, hypoventilation, hypotension, and hyponatremia. Subclinical hypothyroidism: elevated TSH with normal free T4, often asymptomatic.',
    diagnosticApproach: 'TSH is best screening test. Primary hypothyroidism: elevated TSH, low free T4. Subclinical hypothyroidism: elevated TSH (>10 mIU/L), normal free T4. Secondary hypothyroidism: low or inappropriately normal TSH with low free T4. Anti-thyroid peroxidase (anti-TPO) antibodies confirm Hashimoto thyroiditis. Assess for complications: lipid panel (hyperlipidemia), CBC (anemia), electrolytes (hyponatremia). Pituitary MRI if secondary hypothyroidism suspected.',
    treatment: 'Levothyroxine (synthetic T4) is treatment of choice. Start 1.6 mcg/kg/day in young healthy adults, lower dose (25-50 mcg/day) in elderly or cardiac disease. Take on empty stomach, 30-60 minutes before breakfast. Monitor TSH 6-8 weeks after starting or dose change, then annually. Target TSH 0.5-2.5 mIU/L for most patients. Subclinical hypothyroidism: treat if TSH >10 mIU/L, symptoms, goiter, or anti-TPO antibodies. Myxedema coma: IV levothyroxine, supportive care (warming, ventilation, fluids, corticosteroids), treat precipitating cause. Avoid overtreatment (increases atrial fibrillation and osteoporosis risk).',
    clinicalPearls: [
      'TSH is most sensitive test for primary hypothyroidism',
      'Levothyroxine absorption decreased by calcium, iron, PPIs, soy',
      'Pregnancy increases levothyroxine requirements by 30-50%',
      'Subclinical hypothyroidism often progresses to overt hypothyroidism'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/thyroid-disorders/hypothyroidism'
  },

  {
    topic: 'Hyperthyroidism',
    keywords: ['hyperthyroidism', 'overactive thyroid', 'thyrotoxicosis', 'graves disease', 'toxic goiter'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, hyperthyroidism results from excess thyroid hormone production or release. Graves disease (60-80%): autoimmune disorder with TSH receptor-stimulating antibodies causing diffuse thyroid hyperplasia and hormone overproduction. Toxic multinodular goiter (15-20%): autonomous thyroid nodules producing excess hormone. Toxic adenoma (3-5%): single autonomous nodule. Other causes include thyroiditis (transient hyperthyroidism from hormone release), iodine-induced, and factitious (exogenous thyroid hormone). Excess thyroid hormone increases metabolism, affecting cardiovascular, neurologic, and musculoskeletal systems.',
    clinicalPresentation: 'Weight loss despite increased appetite, heat intolerance, palpitations, tremor, anxiety, insomnia, frequent bowel movements, and menstrual irregularities. Physical examination reveals tachycardia, atrial fibrillation, systolic hypertension, warm moist skin, fine tremor, hyperreflexia, and proximal muscle weakness. Graves disease: diffuse goiter, ophthalmopathy (exophthalmos, lid lag, diplopia), pretibial myxedema. Thyroid storm: severe hyperthyroidism with fever, tachycardia, altered mental status, and cardiovascular collapse.',
    diagnosticApproach: 'TSH is best screening test. Hyperthyroidism: suppressed TSH (<0.1 mIU/L), elevated free T4 and/or T3. Subclinical hyperthyroidism: suppressed TSH, normal free T4 and T3. Determine cause: TSH receptor antibodies (TRAb) confirm Graves disease. Radioactive iodine uptake scan: diffuse increased uptake (Graves), focal increased uptake (toxic nodule/multinodular goiter), decreased uptake (thyroiditis, exogenous thyroid hormone). Thyroid ultrasound evaluates nodules. Assess for complications: ECG (atrial fibrillation), bone density (osteoporosis).',
    treatment: 'Beta-blockers (propranolol, atenolol) for symptom control (tachycardia, tremor, anxiety). Definitive treatment options: 1) Radioactive iodine (I-131): ablates thyroid, most common in US, causes hypothyroidism requiring lifelong levothyroxine. 2) Antithyroid drugs: methimazole (preferred) or propylthiouracil, 12-18 month course, 50% relapse rate. 3) Thyroidectomy: for large goiter, pregnancy planning, or patient preference. Graves ophthalmopathy: selenium, corticosteroids, orbital decompression for severe cases. Thyroid storm: beta-blockers, antithyroid drugs, iodine, corticosteroids, supportive care, treat precipitating cause.',
    clinicalPearls: [
      'Methimazole preferred over PTU except in first trimester pregnancy and thyroid storm',
      'Radioactive iodine contraindicated in pregnancy and breastfeeding',
      'Atrial fibrillation occurs in 10-25% of hyperthyroid patients',
      'Thyroid storm has 10-30% mortality despite treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/thyroid-disorders/hyperthyroidism'
  },

  {
    topic: 'Thyroid Nodules',
    keywords: ['thyroid nodule', 'thyroid nodules', 'thyroid mass', 'thyroid lump'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, thyroid nodules are discrete lesions within the thyroid gland, palpable or detected on imaging. Very common: 50-60% of adults have nodules on ultrasound, but only 5-10% are malignant. Benign causes include colloid nodules, follicular adenomas, and cysts. Malignant causes include papillary thyroid cancer (most common, 80%), follicular cancer (10-15%), medullary cancer (5%), and anaplastic cancer (<5%). Risk factors for malignancy include age <30 or >60, male sex, radiation exposure, family history, rapid growth, and concerning ultrasound features.',
    clinicalPresentation: 'Most nodules are asymptomatic, discovered incidentally on imaging or physical examination. Large nodules may cause dysphagia, dyspnea, or hoarseness (recurrent laryngeal nerve compression). Physical examination reveals palpable nodule; assess size, consistency, mobility, and cervical lymphadenopathy. Concerning features: hard, fixed nodule, rapid growth, hoarseness, cervical lymphadenopathy. Most patients are euthyroid; hyperthyroidism suggests toxic nodule, hypothyroidism suggests Hashimoto thyroiditis.',
    diagnosticApproach: 'TSH is first test: if suppressed, obtain radioactive iodine uptake scan (hot nodules rarely malignant). If TSH normal or elevated, obtain thyroid ultrasound to assess nodule characteristics. Ultrasound features: size, composition (solid, cystic, mixed), echogenicity, margins, calcifications, vascularity. Fine-needle aspiration (FNA) biopsy indicated for nodules ≥1 cm or smaller nodules with suspicious features. Bethesda classification: benign, atypia of undetermined significance, follicular neoplasm, suspicious for malignancy, malignant. Molecular testing (gene mutation panels) for indeterminate cytology.',
    treatment: 'Benign nodules: observation with repeat ultrasound in 12-24 months. Levothyroxine suppression not recommended. Malignant nodules: thyroidectomy (total or lobectomy based on tumor characteristics). Papillary microcarcinoma (<1 cm): active surveillance option for low-risk patients. Radioactive iodine ablation for high-risk papillary or follicular cancer. TSH suppression with levothyroxine post-thyroidectomy. Medullary cancer: total thyroidectomy with lymph node dissection, screen for MEN2 syndrome. Anaplastic cancer: poor prognosis, multimodal therapy (surgery, radiation, chemotherapy).',
    clinicalPearls: [
      'Most thyroid nodules are benign',
      'FNA biopsy is key diagnostic test for nodules ≥1 cm',
      'Papillary thyroid cancer has excellent prognosis (>95% 10-year survival)',
      'Hot nodules on uptake scan are rarely malignant'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/thyroid-disorders/thyroid-nodules'
  },

  // ADRENAL DISORDERS
  {
    topic: 'Cushing Syndrome',
    keywords: ['cushing syndrome', 'cushing\'s syndrome', 'hypercortisolism', 'cushing disease'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, Cushing syndrome results from chronic exposure to excess glucocorticoids. Causes include exogenous corticosteroids (most common), ACTH-secreting pituitary adenoma (Cushing disease, 70% of endogenous cases), ectopic ACTH secretion (small cell lung cancer, carcinoid tumors, 15%), and adrenal tumors (adenoma or carcinoma, 15%). Excess cortisol causes protein catabolism, insulin resistance, immunosuppression, and altered fat distribution. Complications include diabetes, hypertension, osteoporosis, infections, and cardiovascular disease.',
    clinicalPresentation: 'Central obesity with thin extremities, moon face, buffalo hump, supraclavicular fat pads, purple striae (>1 cm wide), easy bruising, proximal muscle weakness, and hirsutism. Metabolic: hypertension, hyperglycemia, dyslipidemia. Psychiatric: depression, anxiety, cognitive impairment. Physical examination reveals central obesity, facial plethora, thin skin, purple striae, proximal muscle weakness, and hypertension. Women may have menstrual irregularities and hirsutism. Children show growth retardation.',
    diagnosticApproach: 'Screening tests (perform 2 of 3): 1) 24-hour urine free cortisol (>3 times upper limit of normal), 2) Late-night salivary cortisol (elevated), 3) 1 mg overnight dexamethasone suppression test (cortisol >1.8 mcg/dL indicates lack of suppression). If screening positive, measure plasma ACTH to determine cause: ACTH-dependent (ACTH normal or elevated): pituitary vs ectopic - perform high-dose dexamethasone suppression test and pituitary MRI. ACTH-independent (ACTH suppressed): adrenal tumor - perform adrenal CT or MRI. Inferior petrosal sinus sampling if pituitary vs ectopic ACTH unclear.',
    treatment: 'Exogenous corticosteroids: taper and discontinue if possible. Cushing disease: transsphenoidal pituitary surgery (first-line), radiation therapy if surgery unsuccessful. Ectopic ACTH: resect tumor if possible. Adrenal tumor: adrenalectomy. Medical therapy if surgery not possible or unsuccessful: ketoconazole, metyrapone, mitotane (adrenal tumors), pasireotide (pituitary). Bilateral adrenalectomy for refractory cases (requires lifelong glucocorticoid and mineralocorticoid replacement). Treat complications: diabetes, hypertension, osteoporosis, infections. Monitor for recurrence.',
    clinicalPearls: [
      'Purple striae >1 cm wide are highly specific for Cushing syndrome',
      'Exogenous corticosteroids are most common cause',
      'Cushing disease refers specifically to pituitary ACTH-secreting adenoma',
      'Osteoporosis and fractures are major complications'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/adrenal-disorders/cushing-syndrome'
  },

  {
    topic: 'Addison Disease',
    keywords: ['addison disease', 'addison\'s disease', 'primary adrenal insufficiency', 'adrenal insufficiency'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, Addison disease (primary adrenal insufficiency) results from destruction of the adrenal cortex, causing deficiency of cortisol, aldosterone, and adrenal androgens. Autoimmune adrenalitis is most common cause (80%) in developed countries. Other causes include tuberculosis, adrenal hemorrhage, metastatic cancer, and medications. Cortisol deficiency impairs stress response, glucose homeostasis, and vascular tone. Aldosterone deficiency causes sodium loss, potassium retention, and volume depletion. Adrenal crisis is life-threatening acute adrenal insufficiency.',
    clinicalPresentation: 'Insidious onset of fatigue, weakness, anorexia, weight loss, nausea, vomiting, abdominal pain, and salt craving. Hyperpigmentation (increased ACTH stimulates melanocytes) in sun-exposed areas, skin creases, mucous membranes, and scars. Orthostatic hypotension common. Physical examination reveals hyperpigmentation, hypotension, and signs of volume depletion. Adrenal crisis: severe hypotension, shock, altered mental status, fever, abdominal pain, and vomiting, often precipitated by stress (infection, surgery, trauma).',
    diagnosticApproach: 'Morning cortisol <3 mcg/dL suggests adrenal insufficiency; >15 mcg/dL excludes it. ACTH stimulation test is diagnostic: measure cortisol before and 30-60 minutes after cosyntropin 250 mcg IV/IM; peak cortisol <18 mcg/dL confirms adrenal insufficiency. Plasma ACTH distinguishes primary (ACTH elevated) from secondary (ACTH low/normal). Electrolytes: hyponatremia, hyperkalemia, hypoglycemia. Renin elevated, aldosterone low. Screen for autoimmune causes: 21-hydroxylase antibodies, other autoimmune diseases (thyroid, diabetes). Adrenal CT if non-autoimmune cause suspected.',
    treatment: 'Glucocorticoid replacement: hydrocortisone 15-25 mg/day in 2-3 divided doses (higher dose in morning). Prednisone or dexamethasone alternatives. Mineralocorticoid replacement: fludrocortisone 0.05-0.2 mg daily. Stress dosing: double or triple dose for minor illness, IV hydrocortisone for major stress (surgery, severe illness). Adrenal crisis: immediate treatment - hydrocortisone 100 mg IV bolus, then 50-100 mg IV q6-8h, IV saline, dextrose if hypoglycemic, treat precipitating cause. Patient education: medical alert bracelet, stress dosing instructions, emergency injection kit.',
    clinicalPearls: [
      'Hyperpigmentation distinguishes primary from secondary adrenal insufficiency',
      'Adrenal crisis is life-threatening - treat immediately, do not wait for test results',
      'Stress dosing essential during illness, surgery, or trauma',
      'Screen for other autoimmune diseases (thyroid, diabetes, vitiligo)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/adrenal-disorders/addison-disease'
  },

  {
    topic: 'Pheochromocytoma',
    keywords: ['pheochromocytoma', 'pheo', 'adrenal tumor catecholamine', 'paraganglioma'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, pheochromocytoma is a catecholamine-secreting tumor arising from chromaffin cells of the adrenal medulla (90%) or extra-adrenal sympathetic ganglia (paraganglioma, 10%). Secretes epinephrine, norepinephrine, and dopamine, causing paroxysmal or sustained hypertension and hypermetabolic state. Rule of 10s: 10% bilateral, 10% extra-adrenal, 10% malignant, 10% familial (MEN2, VHL, neurofibromatosis type 1, succinate dehydrogenase mutations). Complications include hypertensive crisis, stroke, myocardial infarction, and arrhythmias.',
    clinicalPresentation: 'Classic triad: episodic headache, sweating, and tachycardia. Paroxysmal hypertension (50%) or sustained hypertension (50%). Episodes triggered by physical activity, abdominal pressure, medications (metoclopramide, opioids), or spontaneous. Other symptoms: palpitations, anxiety, tremor, pallor, chest pain, and nausea. Physical examination may reveal hypertension, tachycardia, pallor, and tremor during episode; may be normal between episodes. Orthostatic hypotension from volume depletion.',
    diagnosticApproach: 'Biochemical testing: plasma free metanephrines or 24-hour urine fractionated metanephrines and catecholamines (sensitivity >95%). Plasma metanephrines preferred (more convenient). Avoid medications that interfere (tricyclic antidepressants, decongestants). If biochemical testing positive, localize tumor: abdominal/pelvic CT or MRI (adrenal protocol). Functional imaging (MIBG scan or PET) if CT/MRI negative or metastatic disease suspected. Genetic testing for familial syndromes if young age, bilateral tumors, extra-adrenal, or family history.',
    treatment: 'Surgical resection is curative. Preoperative preparation essential: alpha-blockade (phenoxybenzamine or doxazosin) for 7-14 days to control blood pressure and expand volume, then add beta-blocker (propranolol, atenolol) for tachycardia (never give beta-blocker first - causes unopposed alpha stimulation and hypertensive crisis). High-salt diet and fluids to expand volume. Laparoscopic adrenalectomy for most tumors. Intraoperative: careful tumor manipulation, treat hypertensive crises (phentolamine, nitroprusside), treat hypotension after tumor removal (fluids, vasopressors). Malignant pheochromocytoma: surgical debulking, MIBG therapy, chemotherapy. Lifelong surveillance for recurrence.',
    clinicalPearls: [
      'Rule of 10s: 10% bilateral, extra-adrenal, malignant, familial',
      'Never give beta-blocker before alpha-blockade',
      'Plasma metanephrines have >95% sensitivity',
      'Screen for familial syndromes (MEN2, VHL, NF1, SDH mutations)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/adrenal-disorders/pheochromocytoma'
  },

  // PITUITARY DISORDERS
  {
    topic: 'Acromegaly',
    keywords: ['acromegaly', 'growth hormone excess', 'gigantism', 'gh excess'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, acromegaly results from chronic growth hormone (GH) excess, almost always from a GH-secreting pituitary adenoma (>95%). Rarely caused by ectopic GH or GHRH secretion. Excess GH stimulates hepatic IGF-1 production, causing tissue growth and metabolic effects. In children with open epiphyses, causes gigantism. In adults, causes acral and soft tissue overgrowth. Complications include diabetes, hypertension, cardiomyopathy, sleep apnea, arthropathy, colon polyps, and increased mortality if untreated.',
    clinicalPresentation: 'Insidious onset over years. Acral enlargement: increased hand, foot, and ring size; coarse facial features (prominent brow, prognathism, macroglossia, widely spaced teeth). Soft tissue overgrowth: skin tags, oily skin, hyperhidrosis. Arthropathy, carpal tunnel syndrome, headaches, visual field defects (pituitary mass effect). Metabolic: diabetes, hypertension. Sleep apnea common. Physical examination reveals coarse facial features, large hands and feet, skin tags, and visual field defects.',
    diagnosticApproach: 'IGF-1 level is best screening test: elevated IGF-1 (age-adjusted) suggests acromegaly. Confirm with oral glucose tolerance test: measure GH at baseline and 2 hours after 75g glucose load; failure to suppress GH <1 ng/mL (or <0.4 ng/mL with ultrasensitive assay) confirms diagnosis. Pituitary MRI identifies adenoma (macroadenoma >1 cm in 75%). Assess for complications: glucose tolerance test, lipid panel, echocardiogram, sleep study, colonoscopy (increased colon polyp risk). Visual field testing if macroadenoma.',
    treatment: 'Transsphenoidal pituitary surgery is first-line treatment (cure rate 60-80% for microadenomas, 40-50% for macroadenomas). Medical therapy if surgery unsuccessful or not candidate: somatostatin analogs (octreotide, lanreotide, pasireotide) first-line, GH receptor antagonist (pegvisomant) for refractory cases, dopamine agonists (cabergoline) for mild cases. Radiation therapy for refractory disease. Goals: normalize IGF-1, GH <1 ng/mL, control tumor growth. Treat complications: diabetes, hypertension, sleep apnea, arthropathy. Surveillance colonoscopy every 3-5 years.',
    clinicalPearls: [
      'Diagnosis often delayed 7-10 years due to insidious onset',
      'IGF-1 is best screening test; oral glucose tolerance test confirms diagnosis',
      'Increased risk of colon polyps and cancer - surveillance colonoscopy needed',
      'Untreated acromegaly reduces life expectancy by 10 years'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/pituitary-disorders/acromegaly-and-gigantism'
  },

  {
    topic: 'Prolactinoma',
    keywords: ['prolactinoma', 'prolactin secreting adenoma', 'hyperprolactinemia', 'pituitary prolactinoma'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, prolactinoma is a prolactin-secreting pituitary adenoma, the most common functioning pituitary tumor (40% of pituitary adenomas). Excess prolactin inhibits GnRH secretion, causing hypogonadism. Microadenomas (<1 cm) more common in women, macroadenomas (≥1 cm) more common in men. Other causes of hyperprolactinemia include medications (antipsychotics, metoclopramide), hypothyroidism, pregnancy, and pituitary stalk compression. Prolactin >200 ng/mL strongly suggests prolactinoma.',
    clinicalPresentation: 'Women: galactorrhea, amenorrhea, oligomenorrhea, infertility, decreased libido. Men: erectile dysfunction, decreased libido, infertility, gynecomastia (less common). Macroadenomas cause mass effects: headaches, visual field defects (bitemporal hemianopsia), hypopituitarism. Physical examination may reveal galactorrhea (expressible milk from nipples), visual field defects, and signs of hypogonadism (decreased body hair, testicular atrophy in men).',
    diagnosticApproach: 'Serum prolactin level: >200 ng/mL strongly suggests prolactinoma (higher levels correlate with larger tumors). Exclude other causes: pregnancy test, TSH (hypothyroidism), medication review, renal function (uremia). Pituitary MRI identifies adenoma. Assess for hypopituitarism: morning cortisol, free T4, TSH, testosterone (men), LH, FSH, IGF-1. Visual field testing if macroadenoma. Hook effect: falsely low prolactin with very large tumors due to assay saturation - request 1:100 dilution if suspected.',
    treatment: 'Dopamine agonists are first-line: cabergoline (preferred, better efficacy and tolerability) or bromocriptine. Normalize prolactin, restore gonadal function, shrink tumor. Start low dose, titrate gradually. Microadenomas: treat if symptomatic (infertility, bothersome galactorrhea, hypogonadism). Macroadenomas: treat all patients. Surgery (transsphenoidal) if medication intolerant, resistant, or patient preference. Radiation for refractory cases. Monitor prolactin levels and MRI. Pregnancy: discontinue cabergoline (bromocriptine safer in pregnancy). Most microadenomas stable or regress; macroadenomas may require lifelong treatment.',
    clinicalPearls: [
      'Cabergoline preferred over bromocriptine (better efficacy, fewer side effects)',
      'Prolactin >200 ng/mL strongly suggests prolactinoma',
      'Hook effect can cause falsely low prolactin with very large tumors',
      'Dopamine agonists shrink tumor in 80-90% of cases'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/pituitary-disorders/hyperprolactinemia'
  },

  {
    topic: 'Diabetes Insipidus',
    keywords: ['diabetes insipidus', 'di', 'central diabetes insipidus', 'nephrogenic diabetes insipidus'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, diabetes insipidus results from deficient antidiuretic hormone (ADH/vasopressin) action, causing inability to concentrate urine and polyuria. Central DI: inadequate ADH secretion from hypothalamus/posterior pituitary due to trauma, surgery, tumors, infiltrative diseases, or idiopathic. Nephrogenic DI: renal resistance to ADH due to medications (lithium, demeclocycline), hypercalcemia, hypokalemia, chronic kidney disease, or genetic mutations. Gestational DI: increased placental vasopressinase. Primary polydipsia: excessive water intake suppresses ADH.',
    clinicalPresentation: 'Polyuria (>3 L/day, often >10 L/day) and polydipsia with preference for cold water. Nocturia common. Symptoms develop abruptly in central DI (post-surgery, trauma). Physical examination usually normal unless severe dehydration (hypotension, tachycardia, poor skin turgor). Hypernatremia if inadequate fluid intake (impaired thirst mechanism, limited access to water). Children may present with enuresis, growth retardation, and developmental delay.',
    diagnosticApproach: 'Confirm polyuria: 24-hour urine volume >3 L/day (>50 mL/kg/day). Measure serum sodium and osmolality, urine osmolality. Hypotonic polyuria: serum osmolality normal or high, urine osmolality <300 mOsm/kg. Water deprivation test differentiates causes: withhold fluids, measure urine osmolality, serum osmolality, and weight hourly. Stop test if weight loss >5%, serum osmolality >295 mOsm/kg, or urine osmolality plateaus. Then give desmopressin and measure urine osmolality. Central DI: urine osmolality increases >50% after desmopressin. Nephrogenic DI: minimal response to desmopressin. Primary polydipsia: urine concentrates during water deprivation. Pituitary MRI if central DI.',
    treatment: 'Central DI: desmopressin (synthetic ADH) nasal spray, oral, or subcutaneous. Titrate to control polyuria while avoiding hyponatremia. Mild cases: increase fluid intake, low-sodium diet, thiazide diuretics. Nephrogenic DI: treat underlying cause (discontinue lithium, correct electrolytes). Thiazide diuretics plus amiloride reduce urine output. Low-sodium, low-protein diet. NSAIDs (indomethacin) may help. Primary polydipsia: behavioral modification, psychiatric evaluation. Ensure adequate fluid intake to prevent dehydration and hypernatremia.',
    clinicalPearls: [
      'Water deprivation test is diagnostic but must be supervised to prevent severe dehydration',
      'Central DI responds to desmopressin; nephrogenic DI does not',
      'Lithium is most common cause of nephrogenic DI',
      'Avoid overtreatment with desmopressin (risk of hyponatremia and water intoxication)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/pituitary-disorders/diabetes-insipidus'
  },

  {
    topic: 'Syndrome of Inappropriate Antidiuretic Hormone',
    keywords: ['siadh', 'syndrome of inappropriate antidiuretic hormone', 'inappropriate adh secretion', 'siad'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, SIADH results from inappropriate ADH secretion despite low serum osmolality, causing water retention and dilutional hyponatremia. Causes include malignancies (small cell lung cancer most common), CNS disorders (meningitis, encephalitis, stroke, trauma), pulmonary diseases (pneumonia, tuberculosis), medications (SSRIs, carbamazepine, cyclophosphamide, vincristine), and postoperative state. Excess ADH causes renal water retention, volume expansion (suppresses renin-aldosterone), and natriuresis, resulting in euvolemic hyponatremia.',
    clinicalPresentation: 'Symptoms depend on severity and rapidity of hyponatremia. Mild (130-135 mEq/L): often asymptomatic. Moderate (125-130 mEq/L): nausea, confusion, headache. Severe (<125 mEq/L): altered mental status, seizures, coma. Acute hyponatremia (<48 hours) more symptomatic due to cerebral edema. Physical examination shows euvolemia (no edema, normal JVP, normal skin turgor, normal blood pressure). Absence of volume depletion or volume overload is key diagnostic feature.',
    diagnosticApproach: 'Diagnostic criteria: 1) Hyponatremia with low serum osmolality (<275 mOsm/kg), 2) Inappropriately concentrated urine (urine osmolality >100 mOsm/kg), 3) Urine sodium >40 mEq/L (reflects natriuresis), 4) Euvolemia (no edema, no dehydration), 5) Normal thyroid and adrenal function, 6) No recent diuretic use. Exclude other causes of hyponatremia: assess volume status, measure TSH and cortisol, review medications. Identify underlying cause: chest X-ray or CT (lung cancer, pneumonia), head CT or MRI (CNS disorders), medication review.',
    treatment: 'Treat underlying cause. Fluid restriction (<800 mL/day) is first-line for chronic SIADH. Sodium tablets (1-2 g TID) increase solute load. Demeclocycline (300-600 mg BID) induces nephrogenic DI but slow onset and nephrotoxic. Vasopressin receptor antagonists (tolvaptan, conivaptan) for refractory cases - effective but expensive, risk of overly rapid correction. Acute symptomatic hyponatremia: hypertonic saline (3% NaCl) to raise sodium by 4-6 mEq/L over first few hours, then slower correction. Chronic hyponatremia: correct slowly (≤8-10 mEq/L per 24 hours) to avoid osmotic demyelination syndrome.',
    clinicalPearls: [
      'SIADH is diagnosis of exclusion - must exclude other causes of hyponatremia',
      'Euvolemia is key diagnostic feature',
      'Fluid restriction is first-line treatment',
      'Correct chronic hyponatremia slowly to avoid osmotic demyelination syndrome'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/pituitary-disorders/syndrome-of-inappropriate-adh-secretion-siadh'
  },

  // CALCIUM AND BONE DISORDERS
  {
    topic: 'Primary Hyperparathyroidism',
    keywords: ['primary hyperparathyroidism', 'hyperparathyroidism', 'parathyroid adenoma', 'hypercalcemia parathyroid'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, primary hyperparathyroidism results from excessive parathyroid hormone (PTH) secretion from one or more parathyroid glands, causing hypercalcemia. Single parathyroid adenoma (80-85%), multiglandular hyperplasia (15%), or parathyroid carcinoma (<1%). PTH increases serum calcium by: 1) increasing bone resorption, 2) increasing renal calcium reabsorption, 3) increasing renal phosphate excretion, 4) increasing intestinal calcium absorption (via vitamin D activation). Complications include nephrolithiasis, osteoporosis, peptic ulcer disease, and pancreatitis.',
    clinicalPresentation: 'Most patients asymptomatic, discovered on routine labs. Symptomatic patients: "stones, bones, groans, and psychiatric overtones." Stones: nephrolithiasis (20%). Bones: osteoporosis, osteitis fibrosa cystica (rare). Groans: constipation, nausea, peptic ulcer disease, pancreatitis. Psychiatric: depression, cognitive impairment, fatigue. Physical examination usually normal. Severe hypercalcemia (>14 mg/dL): altered mental status, weakness, polyuria, dehydration.',
    diagnosticApproach: 'Elevated serum calcium with elevated or inappropriately normal PTH confirms diagnosis. Measure ionized calcium (more accurate than total calcium). Hypophosphatemia common. 24-hour urine calcium elevated (excludes familial hypocalciuric hypercalcemia). Vitamin D level often low (PTH increases conversion to active form). Assess for complications: bone density scan (osteoporosis), renal ultrasound or CT (nephrolithiasis), serum creatinine (renal function). Parathyroid imaging (sestamibi scan, ultrasound) for surgical planning, not diagnosis.',
    treatment: 'Parathyroidectomy is curative and indicated for: symptomatic disease, age <50, serum calcium >1 mg/dL above upper limit of normal, creatinine clearance <60 mL/min, bone density T-score <-2.5, nephrolithiasis, or hypercalciuria (>400 mg/day). Minimally invasive parathyroidectomy for single adenoma. Observation for asymptomatic patients not meeting surgical criteria: monitor calcium, creatinine, bone density annually. Medical management if surgery declined or not candidate: adequate hydration, avoid thiazide diuretics and lithium, calcium intake 1000 mg/day, vitamin D repletion. Calcimimetics (cinacalcet) lower calcium but do not prevent bone loss.',
    clinicalPearls: [
      'Most common cause of hypercalcemia in outpatients',
      'Elevated calcium with elevated or inappropriately normal PTH is diagnostic',
      'Parathyroidectomy is curative',
      'Familial hypocalciuric hypercalcemia mimics primary hyperparathyroidism but has low urine calcium'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/hypercalcemia'
  },

  {
    topic: 'Osteoporosis',
    keywords: ['osteoporosis', 'bone loss', 'low bone density', 'osteopenia'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, osteoporosis is characterized by low bone mass and microarchitectural deterioration, increasing fracture risk. Results from imbalance between bone resorption (osteoclasts) and bone formation (osteoblasts). Primary osteoporosis: postmenopausal (estrogen deficiency increases bone resorption) and age-related (decreased bone formation). Secondary osteoporosis: medications (corticosteroids, aromatase inhibitors), endocrine disorders (hyperthyroidism, hyperparathyroidism, Cushing syndrome), malabsorption, chronic kidney disease, and hypogonadism. Fractures occur at spine, hip, and wrist.',
    clinicalPresentation: 'Asymptomatic until fracture occurs. Vertebral compression fractures cause acute back pain, height loss, and kyphosis. Hip fractures cause severe pain and inability to bear weight. Wrist fractures from falls on outstretched hand. Physical examination may reveal kyphosis, height loss (>2 cm suggests vertebral fractures), and tenderness over fracture sites. Complications include chronic pain, disability, and increased mortality (especially hip fractures).',
    diagnosticApproach: 'Dual-energy X-ray absorptiometry (DEXA) measures bone mineral density (BMD). T-score compares BMD to young adult mean: normal (T-score ≥-1.0), osteopenia (-1.0 to -2.5), osteoporosis (≤-2.5). Screen women ≥65 years, men ≥70 years, and younger adults with risk factors. FRAX calculator estimates 10-year fracture risk. Evaluate for secondary causes: CBC, comprehensive metabolic panel, TSH, 25-hydroxyvitamin D, testosterone (men), serum protein electrophoresis. Lateral spine X-ray if height loss or back pain (vertebral fractures). Bone turnover markers (optional).',
    treatment: 'Lifestyle: weight-bearing exercise, fall prevention, smoking cessation, limit alcohol. Calcium 1200 mg/day and vitamin D 800-1000 IU/day. Pharmacotherapy for osteoporosis (T-score ≤-2.5) or osteopenia with high fracture risk (FRAX 10-year hip fracture risk ≥3% or major osteoporotic fracture risk ≥20%): Bisphosphonates (alendronate, risedronate, zoledronic acid) first-line - inhibit bone resorption. Denosumab (RANKL inhibitor) alternative. Anabolic agents (teriparatide, abaloparatide, romosozumab) for severe osteoporosis or fractures. Treat secondary causes. Monitor BMD every 1-2 years.',
    clinicalPearls: [
      'DEXA scan is gold standard for diagnosis',
      'Bisphosphonates are first-line treatment',
      'Hip fractures have 20-30% one-year mortality in elderly',
      'Vitamin D deficiency is common and should be corrected'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/osteoporosis/osteoporosis'
  },

  {
    topic: 'Paget Disease of Bone',
    keywords: ['paget disease of bone', 'paget\'s disease', 'osteitis deformans', 'paget bone disease'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, Paget disease of bone is a chronic disorder characterized by excessive bone remodeling with increased osteoclastic bone resorption followed by disorganized osteoblastic bone formation. Results in enlarged, deformed, and weakened bones. Etiology unknown; genetic factors and paramyxovirus infection implicated. Affects one or more bones (skull, spine, pelvis, femur, tibia most common). Complications include bone pain, fractures, osteoarthritis, nerve compression, high-output heart failure (extensive disease), and rarely osteosarcoma (<1%).',
    clinicalPresentation: 'Most patients asymptomatic, discovered incidentally on X-ray or elevated alkaline phosphatase. Symptomatic patients: bone pain (deep, aching, worse at night), bone deformity (bowing of long bones, skull enlargement), fractures, and osteoarthritis. Skull involvement causes headaches, hearing loss (auditory nerve compression), and cranial nerve palsies. Spinal involvement causes back pain and spinal stenosis. Physical examination reveals bone deformity, warmth over affected bones (increased vascularity), and hearing loss.',
    diagnosticApproach: 'Elevated alkaline phosphatase (bone-specific) is hallmark - reflects increased bone turnover. X-rays show characteristic findings: lytic lesions (early), mixed lytic-sclerotic lesions, cortical thickening, bone enlargement, and deformity. Bone scan shows increased uptake in affected bones (useful for identifying extent). Serum calcium and phosphate usually normal. Urine N-telopeptide or serum C-telopeptide (bone resorption markers) elevated. Biopsy rarely needed (excludes malignancy if concern).',
    treatment: 'Indications for treatment: bone pain, fracture risk, nerve compression, skull involvement, extensive disease, pre-operative (orthopedic surgery on affected bone). Bisphosphonates are first-line: zoledronic acid 5 mg IV once (most effective, preferred) or alendronate 40 mg daily for 6 months. Calcitonin alternative if bisphosphonates contraindicated. Goals: relieve pain, normalize alkaline phosphatase, prevent complications. Monitor alkaline phosphatase to assess response. Analgesics for pain. Orthopedic surgery for fractures, severe arthritis, or deformity. Hearing aids for hearing loss. Asymptomatic patients: observation with periodic monitoring.',
    clinicalPearls: [
      'Elevated alkaline phosphatase with normal calcium suggests Paget disease',
      'Zoledronic acid single dose is highly effective',
      'Osteosarcoma is rare but serious complication',
      'Hearing loss from skull involvement may be irreversible'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/osteoporosis/paget-disease-of-bone'
  },
];
