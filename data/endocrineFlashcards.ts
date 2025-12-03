
import { Flashcard } from '@/types/flashcard';

export const endocrineFlashcards: Flashcard[] = [
  {
    id: 'endo-001',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'What are the diagnostic criteria for Diabetes Mellitus?',
    back: {
      definition: 'Fasting glucose ≥126 mg/dL, Random glucose ≥200 mg/dL with symptoms, HbA1c ≥6.5%, or 2-hour OGTT ≥200 mg/dL',
      high_yield: 'Two abnormal tests required if asymptomatic',
      clinical_pearl: 'HbA1c may be falsely low in hemolytic anemia or falsely high in iron deficiency'
    },
    tags: ['Diabetes', 'Diagnosis', 'Lab Values'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-002',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'What is the difference between Type 1 and Type 2 Diabetes?',
    back: {
      definition: 'Type 1: Autoimmune destruction of beta cells, absolute insulin deficiency. Type 2: Insulin resistance with relative insulin deficiency',
      high_yield: 'Type 1 usually presents <30 years, Type 2 usually >40 years',
      clinical_pearl: 'Check C-peptide and autoantibodies (GAD, IA-2) if uncertain'
    },
    tags: ['Diabetes', 'Type 1', 'Type 2', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-003',
    system: 'Endocrine',
    topic: 'Diabetic Ketoacidosis',
    difficulty: 'hard',
    front: 'What are the diagnostic criteria for DKA?',
    back: {
      definition: 'Glucose >250 mg/dL, pH <7.3, HCO3 <18 mEq/L, and positive ketones',
      high_yield: 'Anion gap metabolic acidosis with ketonemia/ketonuria',
      clinical_pearl: 'Check for precipitating factors: infection, MI, medication non-compliance'
    },
    tags: ['DKA', 'Emergency', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-004',
    system: 'Endocrine',
    topic: 'Diabetic Ketoacidosis',
    difficulty: 'hard',
    front: 'What is the initial management of DKA?',
    back: {
      definition: 'IV fluids (NS), insulin infusion (0.1 units/kg/hr), potassium replacement, identify precipitant',
      high_yield: 'Give fluids first, then insulin. Add dextrose when glucose <250 mg/dL',
      clinical_pearl: 'Check potassium before starting insulin - can cause life-threatening hypokalemia'
    },
    tags: ['DKA', 'Emergency', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-005',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'How do you interpret thyroid function tests?',
    back: {
      definition: 'Primary hypothyroid: High TSH, Low T4. Primary hyperthyroid: Low TSH, High T4. Secondary: Low TSH, Low T4',
      high_yield: 'TSH is the best screening test for thyroid dysfunction',
      clinical_pearl: 'Check free T4, not total T4, to avoid confounding from binding proteins'
    },
    tags: ['Thyroid', 'Lab Values', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-006',
    system: 'Endocrine',
    topic: 'Hypothyroidism',
    difficulty: 'easy',
    front: 'What are the classic symptoms of hypothyroidism?',
    back: {
      definition: 'Fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss, bradycardia',
      high_yield: 'Most common cause in US is Hashimoto thyroiditis (autoimmune)',
      clinical_pearl: 'Check anti-TPO antibodies to confirm Hashimoto. Worldwide, iodine deficiency is most common'
    },
    tags: ['Hypothyroidism', 'Symptoms', 'Hashimoto'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-007',
    system: 'Endocrine',
    topic: 'Hyperthyroidism',
    difficulty: 'medium',
    front: 'What are the causes of hyperthyroidism?',
    back: {
      definition: 'Graves disease (most common), toxic multinodular goiter, toxic adenoma, thyroiditis, exogenous thyroid hormone',
      high_yield: 'Graves: diffuse goiter, ophthalmopathy, pretibial myxedema',
      clinical_pearl: 'Check TSI (thyroid-stimulating immunoglobulin) for Graves. Radioiodine uptake scan differentiates causes'
    },
    tags: ['Hyperthyroidism', 'Graves', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-008',
    system: 'Endocrine',
    topic: 'Thyroid Storm',
    difficulty: 'hard',
    front: 'What is the management of thyroid storm?',
    back: {
      definition: 'PTU or methimazole, beta-blocker (propranolol), iodine (1 hour after PTU), steroids, supportive care',
      high_yield: 'Life-threatening emergency with fever, tachycardia, altered mental status',
      clinical_pearl: 'Give PTU/methimazole BEFORE iodine to prevent organification of iodine'
    },
    tags: ['Thyroid Storm', 'Emergency', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-009',
    system: 'Endocrine',
    topic: 'Adrenal Insufficiency',
    difficulty: 'hard',
    front: 'What are the causes of adrenal insufficiency?',
    back: {
      definition: 'Primary (Addison): autoimmune, TB, hemorrhage. Secondary: pituitary disease, exogenous steroids',
      high_yield: 'Primary: low cortisol, high ACTH, hyperkalemia, hyperpigmentation. Secondary: low cortisol, low ACTH',
      clinical_pearl: 'Cosyntropin stimulation test: cortisol <18-20 mcg/dL at 30-60 min confirms diagnosis'
    },
    tags: ['Adrenal', 'Addison', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-010',
    system: 'Endocrine',
    topic: 'Adrenal Crisis',
    difficulty: 'hard',
    front: 'What is the acute management of adrenal crisis?',
    back: {
      definition: 'IV hydrocortisone 100 mg, IV fluids (NS), dextrose if hypoglycemic, treat precipitant',
      high_yield: 'Life-threatening: hypotension, hyponatremia, hyperkalemia, hypoglycemia',
      clinical_pearl: 'Do NOT delay treatment to confirm diagnosis. Draw cortisol/ACTH before giving steroids if possible'
    },
    tags: ['Adrenal Crisis', 'Emergency', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-011',
    system: 'Endocrine',
    topic: 'Cushing Syndrome',
    difficulty: 'medium',
    front: 'What are the clinical features of Cushing syndrome?',
    back: {
      definition: 'Central obesity, moon facies, buffalo hump, purple striae, proximal muscle weakness, hypertension, hyperglycemia',
      high_yield: 'Most common cause is exogenous steroids',
      clinical_pearl: 'Screen with 24-hour urine free cortisol or late-night salivary cortisol'
    },
    tags: ['Cushing', 'Symptoms', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-012',
    system: 'Endocrine',
    topic: 'Cushing Syndrome',
    difficulty: 'hard',
    front: 'How do you differentiate causes of Cushing syndrome?',
    back: {
      definition: 'Low-dose dexamethasone suppression test, then ACTH level. High ACTH: pituitary (Cushing disease) or ectopic. Low ACTH: adrenal tumor',
      high_yield: 'High-dose dexamethasone: suppression suggests pituitary, no suppression suggests ectopic',
      clinical_pearl: 'MRI pituitary for Cushing disease. CT chest/abdomen for ectopic ACTH (small cell lung cancer)'
    },
    tags: ['Cushing', 'Diagnosis', 'Workup'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-013',
    system: 'Endocrine',
    topic: 'Hyperparathyroidism',
    difficulty: 'medium',
    front: 'What are the causes and symptoms of primary hyperparathyroidism?',
    back: {
      definition: 'Cause: parathyroid adenoma (most common). Symptoms: "stones, bones, groans, psychiatric overtones"',
      high_yield: 'High calcium, high PTH, low phosphate. Kidney stones, osteoporosis, constipation, depression',
      clinical_pearl: 'Most patients are asymptomatic, found incidentally on routine labs'
    },
    tags: ['Hyperparathyroidism', 'Calcium', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-014',
    system: 'Endocrine',
    topic: 'Hypoparathyroidism',
    difficulty: 'medium',
    front: 'What are the causes and symptoms of hypoparathyroidism?',
    back: {
      definition: 'Cause: post-surgical (thyroidectomy), autoimmune, DiGeorge. Symptoms: tetany, Chvostek sign, Trousseau sign',
      high_yield: 'Low calcium, low PTH, high phosphate. Perioral numbness, muscle cramps, seizures',
      clinical_pearl: 'Check magnesium - hypomagnesemia causes functional hypoparathyroidism'
    },
    tags: ['Hypoparathyroidism', 'Calcium', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-015',
    system: 'Endocrine',
    topic: 'Hypercalcemia',
    difficulty: 'medium',
    front: 'What is the differential diagnosis of hypercalcemia?',
    back: {
      definition: 'PTH-mediated: primary hyperparathyroidism. Non-PTH: malignancy (PTHrP), vitamin D toxicity, granulomatous disease',
      high_yield: 'Most common causes: hyperparathyroidism and malignancy',
      clinical_pearl: 'Check PTH level first. High PTH = hyperparathyroidism. Low PTH = other causes'
    },
    tags: ['Hypercalcemia', 'Diagnosis', 'Differential'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-016',
    system: 'Endocrine',
    topic: 'Hypercalcemia',
    difficulty: 'hard',
    front: 'What is the acute management of severe hypercalcemia?',
    back: {
      definition: 'IV fluids (NS), calcitonin, bisphosphonates, treat underlying cause',
      high_yield: 'Severe: Ca >14 mg/dL or symptomatic (confusion, lethargy, arrhythmias)',
      clinical_pearl: 'Calcitonin works fast (hours) but tachyphylaxis develops. Bisphosphonates work slower (days) but last longer'
    },
    tags: ['Hypercalcemia', 'Emergency', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-017',
    system: 'Endocrine',
    topic: 'Pheochromocytoma',
    difficulty: 'hard',
    front: 'What are the classic features of pheochromocytoma?',
    back: {
      definition: 'Episodic headaches, palpitations, diaphoresis, hypertension. "Rule of 10s": 10% bilateral, 10% extra-adrenal, 10% malignant',
      high_yield: 'Screen with plasma or urine metanephrines',
      clinical_pearl: 'Associated with MEN 2A/2B, VHL, NF1. Alpha-blockade BEFORE beta-blockade to prevent hypertensive crisis'
    },
    tags: ['Pheochromocytoma', 'Hypertension', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-018',
    system: 'Endocrine',
    topic: 'Acromegaly',
    difficulty: 'medium',
    front: 'What are the clinical features and diagnosis of acromegaly?',
    back: {
      definition: 'Enlarged hands/feet, coarse facial features, macroglossia, frontal bossing, prognathism. Caused by GH-secreting pituitary adenoma',
      high_yield: 'Screen with IGF-1. Confirm with oral glucose tolerance test (GH fails to suppress)',
      clinical_pearl: 'Complications: diabetes, hypertension, cardiomyopathy, colon polyps, sleep apnea'
    },
    tags: ['Acromegaly', 'Pituitary', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-019',
    system: 'Endocrine',
    topic: 'Prolactinoma',
    difficulty: 'medium',
    front: 'What are the symptoms and treatment of prolactinoma?',
    back: {
      definition: 'Women: amenorrhea, galactorrhea, infertility. Men: decreased libido, erectile dysfunction, gynecomastia',
      high_yield: 'Most common functional pituitary adenoma. Prolactin >200 ng/mL suggests prolactinoma',
      clinical_pearl: 'First-line treatment: dopamine agonists (cabergoline, bromocriptine). Surgery if medication fails'
    },
    tags: ['Prolactinoma', 'Pituitary', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-020',
    system: 'Endocrine',
    topic: 'SIADH',
    difficulty: 'medium',
    front: 'What are the diagnostic criteria for SIADH?',
    back: {
      definition: 'Hyponatremia with low serum osmolality, inappropriately concentrated urine (Uosm >100), euvolemia, normal renal/adrenal/thyroid function',
      high_yield: 'Causes: CNS disorders, lung disease, malignancy (small cell), medications (SSRIs, carbamazepine)',
      clinical_pearl: 'Treatment: fluid restriction, salt tablets, demeclocycline, tolvaptan for severe cases'
    },
    tags: ['SIADH', 'Hyponatremia', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  }
];

console.log('Endocrine flashcards loaded:', endocrineFlashcards.length, 'cards');
