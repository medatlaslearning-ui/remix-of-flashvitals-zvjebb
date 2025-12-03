
import { Flashcard } from '@/types/flashcard';

export const endocrineFlashcards: Flashcard[] = [
  // Diabetes Mellitus - Easy Difficulty (1-20)
  {
    id: 'endo-diabetes-1',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Diagnostic A1c level for diabetes?',
    back: {
      definition: 'A1c ≥6.5%',
      high_yield: 'Standard diagnostic threshold',
      clinical_pearl: 'Confirm on repeat'
    },
    tags: ['Diabetes', 'Diagnosis', 'A1c'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-2',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Fasting glucose diagnostic level?',
    back: {
      definition: '≥126 mg/dL',
      high_yield: 'Two separate tests',
      clinical_pearl: 'Part of ADA criteria'
    },
    tags: ['Diabetes', 'Diagnosis', 'Glucose'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-3',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Random glucose threshold for diabetes?',
    back: {
      definition: '≥200 mg/dL + symptoms',
      high_yield: 'Polyuria, polydipsia',
      clinical_pearl: 'Diagnostic'
    },
    tags: ['Diabetes', 'Diagnosis', 'Glucose'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-4',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'OGTT diagnostic glucose?',
    back: {
      definition: '≥200 mg/dL at 2 hours',
      high_yield: 'Oral glucose tolerance test',
      clinical_pearl: 'Used in pregnancy screening'
    },
    tags: ['Diabetes', 'Diagnosis', 'OGTT'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-5',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Key feature of T1DM?',
    back: {
      definition: 'Autoimmune β-cell destruction',
      high_yield: 'Requires insulin',
      clinical_pearl: 'Younger onset'
    },
    tags: ['Diabetes', 'T1DM', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-6',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Key feature of T2DM?',
    back: {
      definition: 'Insulin resistance',
      high_yield: 'Associated with obesity',
      clinical_pearl: 'Gradual onset'
    },
    tags: ['Diabetes', 'T2DM', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-7',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Classic T1DM symptoms?',
    back: {
      definition: 'Polyuria + weight loss',
      high_yield: 'Polydipsia',
      clinical_pearl: 'Fatigue'
    },
    tags: ['Diabetes', 'T1DM', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-8',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Classic T2DM symptoms?',
    back: {
      definition: 'Fatigue + recurrent infections',
      high_yield: 'Obesity common',
      clinical_pearl: 'Often asymptomatic'
    },
    tags: ['Diabetes', 'T2DM', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-9',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'First-line drug for T2DM?',
    back: {
      definition: 'Metformin',
      high_yield: 'Improves insulin sensitivity',
      clinical_pearl: 'GI upset common'
    },
    tags: ['Diabetes', 'T2DM', 'Treatment', 'Metformin'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-10',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Metformin contraindication?',
    back: {
      definition: 'Severe renal disease',
      high_yield: 'Risk lactic acidosis',
      clinical_pearl: 'Hold before contrast studies'
    },
    tags: ['Diabetes', 'Metformin', 'Contraindications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-11',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'What is DKA?',
    back: {
      definition: 'Ketone buildup from insulin deficiency',
      high_yield: 'Hyperglycemia + acidosis',
      clinical_pearl: 'Common in T1DM'
    },
    tags: ['Diabetes', 'DKA', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-12',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'What is HHS?',
    back: {
      definition: 'Severe hyperglycemia without ketosis',
      high_yield: 'Very high glucose',
      clinical_pearl: 'Common in T2DM'
    },
    tags: ['Diabetes', 'HHS', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-13',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Most important initial treatment for DKA/HHS?',
    back: {
      definition: 'IV fluids',
      high_yield: 'Restore perfusion',
      clinical_pearl: 'Insulin after fluids'
    },
    tags: ['Diabetes', 'DKA', 'HHS', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-14',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Insulin therapy for T1DM?',
    back: {
      definition: 'Basal + bolus',
      high_yield: 'Essential lifelong',
      clinical_pearl: 'Mimics physiologic release'
    },
    tags: ['Diabetes', 'T1DM', 'Insulin', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-15',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Hypoglycemia symptoms?',
    back: {
      definition: 'Sweating, tremor',
      high_yield: 'Confusion',
      clinical_pearl: 'Treat with glucose'
    },
    tags: ['Diabetes', 'Hypoglycemia', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-16',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Treat severe hypoglycemia?',
    back: {
      definition: 'Glucagon',
      high_yield: 'IM or intranasal',
      clinical_pearl: 'If IV access unavailable'
    },
    tags: ['Diabetes', 'Hypoglycemia', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-17',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Diabetic neuropathy symptom?',
    back: {
      definition: 'Burning foot pain',
      high_yield: 'Stocking-glove distribution',
      clinical_pearl: 'Common complication'
    },
    tags: ['Diabetes', 'Neuropathy', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-18',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Diabetic nephropathy test?',
    back: {
      definition: 'Urine albumin/creatinine ratio',
      high_yield: 'Annual screening',
      clinical_pearl: 'ACEi slows progression'
    },
    tags: ['Diabetes', 'Nephropathy', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-19',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'Diabetic retinopathy prevention?',
    back: {
      definition: 'Annual dilated exam',
      high_yield: 'Strict glycemic control',
      clinical_pearl: 'Laser therapy helps'
    },
    tags: ['Diabetes', 'Retinopathy', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-20',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'easy',
    front: 'SGLT2 inhibitor benefit?',
    back: {
      definition: 'Reduces CV mortality',
      high_yield: 'Weight loss',
      clinical_pearl: 'Risk of DKA (euglycemic)'
    },
    tags: ['Diabetes', 'SGLT2', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  
  // Diabetes Mellitus - Medium Difficulty (21-35)
  {
    id: 'endo-diabetes-21',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'GLP-1 agonist benefit?',
    back: {
      definition: 'Weight loss',
      high_yield: 'Cardioprotective',
      clinical_pearl: 'Weekly injections available'
    },
    tags: ['Diabetes', 'GLP-1', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-22',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'DKA labs?',
    back: {
      definition: 'High anion gap',
      high_yield: 'Positive ketones',
      clinical_pearl: 'Low bicarbonate'
    },
    tags: ['Diabetes', 'DKA', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-23',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'HHS hallmark?',
    back: {
      definition: 'Glucose >600 mg/dL',
      high_yield: 'No significant ketones',
      clinical_pearl: 'Severe dehydration'
    },
    tags: ['Diabetes', 'HHS', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-24',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'DKA potassium status?',
    back: {
      definition: 'Total body K+ depleted',
      high_yield: 'Serum K+ may appear high',
      clinical_pearl: 'Replace during insulin therapy'
    },
    tags: ['Diabetes', 'DKA', 'Electrolytes'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-25',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Basal insulin examples?',
    back: {
      definition: 'Glargine, detemir',
      high_yield: 'Long-acting',
      clinical_pearl: 'Once daily'
    },
    tags: ['Diabetes', 'Insulin', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-26',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Bolus insulin examples?',
    back: {
      definition: 'Lispro, aspart',
      high_yield: 'Rapid-acting',
      clinical_pearl: 'Before meals'
    },
    tags: ['Diabetes', 'Insulin', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-27',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'DPP-4 inhibitor mechanism?',
    back: {
      definition: 'Increases incretin levels',
      high_yield: 'Mild A1c reduction',
      clinical_pearl: 'Well tolerated'
    },
    tags: ['Diabetes', 'DPP-4', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-28',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Thiazolidinedione (TZD) concern?',
    back: {
      definition: 'Edema + weight gain',
      high_yield: 'Heart failure risk',
      clinical_pearl: 'Pioglitazone preferred'
    },
    tags: ['Diabetes', 'TZD', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-29',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Sulfonylurea mechanism?',
    back: {
      definition: 'Increase insulin secretion',
      high_yield: 'Risk hypoglycemia',
      clinical_pearl: 'Glipizide safest'
    },
    tags: ['Diabetes', 'Sulfonylurea', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-30',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Screening for diabetes age?',
    back: {
      definition: 'Age 35+ or risk factors',
      high_yield: 'Earlier in obesity',
      clinical_pearl: 'Repeat every 3 yrs'
    },
    tags: ['Diabetes', 'Screening', 'Prevention'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-31',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'A1c target for most adults?',
    back: {
      definition: '<7%',
      high_yield: 'Individualized',
      clinical_pearl: 'Less strict in elderly'
    },
    tags: ['Diabetes', 'A1c', 'Goals'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-32',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Charcot foot cause?',
    back: {
      definition: 'Neuropathy',
      high_yield: 'Bone destruction',
      clinical_pearl: 'Painless deformity'
    },
    tags: ['Diabetes', 'Neuropathy', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-33',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Diabetic gastroparesis?',
    back: {
      definition: 'Delayed gastric emptying',
      high_yield: 'Nausea + early satiety',
      clinical_pearl: 'Treat with metoclopramide'
    },
    tags: ['Diabetes', 'Gastroparesis', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-34',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Foot ulcer risk factors?',
    back: {
      definition: 'Neuropathy + vascular disease',
      high_yield: 'Poor wound healing',
      clinical_pearl: 'Requires daily foot checks'
    },
    tags: ['Diabetes', 'Foot Care', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-35',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'medium',
    front: 'Insulin pump used for?',
    back: {
      definition: 'T1DM with variable control',
      high_yield: 'Continuous delivery',
      clinical_pearl: 'Reduces hypoglycemia'
    },
    tags: ['Diabetes', 'Insulin Pump', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Diabetes Mellitus - Hard Difficulty (36-50)
  {
    id: 'endo-diabetes-36',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Euglycemic DKA cause?',
    back: {
      definition: 'SGLT2 inhibitors',
      high_yield: 'Normal glucose',
      clinical_pearl: 'Still high anion gap'
    },
    tags: ['Diabetes', 'DKA', 'SGLT2', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-37',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'LADA?',
    back: {
      definition: 'Latent autoimmune diabetes adults',
      high_yield: 'Slow-onset T1DM',
      clinical_pearl: 'Often misdiagnosed as T2DM'
    },
    tags: ['Diabetes', 'LADA', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-38',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'MODY?',
    back: {
      definition: 'Monogenic diabetes',
      high_yield: 'Young non-obese adults',
      clinical_pearl: 'Autosomal dominant'
    },
    tags: ['Diabetes', 'MODY', 'Genetics'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-39',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Honeymoon phase in T1DM?',
    back: {
      definition: 'Temporary low insulin need',
      high_yield: 'Residual β-cell function',
      clinical_pearl: 'Transient'
    },
    tags: ['Diabetes', 'T1DM', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-40',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Dawn phenomenon?',
    back: {
      definition: 'Morning hyperglycemia',
      high_yield: 'Early AM hormone surge',
      clinical_pearl: 'Increase basal insulin'
    },
    tags: ['Diabetes', 'Hyperglycemia', 'Management'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-41',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Somogyi effect?',
    back: {
      definition: 'Rebound hyperglycemia',
      high_yield: 'Due to nighttime hypoglycemia',
      clinical_pearl: 'Lower evening insulin'
    },
    tags: ['Diabetes', 'Hyperglycemia', 'Management'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-42',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Insulin resistance signs?',
    back: {
      definition: 'Acanthosis nigricans',
      high_yield: 'Skin tags',
      clinical_pearl: 'Metabolic syndrome'
    },
    tags: ['Diabetes', 'Insulin Resistance', 'Physical Exam'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-43',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Diabetic amyotrophy?',
    back: {
      definition: 'Proximal muscle weakness',
      high_yield: 'Painful',
      clinical_pearl: 'Improves slowly'
    },
    tags: ['Diabetes', 'Neuropathy', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-44',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Pancreatogenic diabetes (Type 3c)?',
    back: {
      definition: 'From pancreatic disease',
      high_yield: 'Loss of insulin + glucagon',
      clinical_pearl: 'Difficult control'
    },
    tags: ['Diabetes', 'Type 3c', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-45',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Hypoglycemia unawareness?',
    back: {
      definition: 'Loss of warning symptoms',
      high_yield: 'Autonomic neuropathy',
      clinical_pearl: 'Higher risk of severe events'
    },
    tags: ['Diabetes', 'Hypoglycemia', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-46',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'DKA trigger causes?',
    back: {
      definition: 'Infection, MI, missed insulin',
      high_yield: 'Stress hormones',
      clinical_pearl: 'Common preventable triggers'
    },
    tags: ['Diabetes', 'DKA', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-47',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Insulin stacking?',
    back: {
      definition: 'Repeated doses too close',
      high_yield: 'Severe hypoglycemia',
      clinical_pearl: 'Educate timing'
    },
    tags: ['Diabetes', 'Insulin', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-48',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'HHS fluid requirement?',
    back: {
      definition: 'Very high volume depletion',
      high_yield: 'Large fluid deficits',
      clinical_pearl: 'Correct slowly'
    },
    tags: ['Diabetes', 'HHS', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-49',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'When to start insulin in T2DM?',
    back: {
      definition: 'A1c >10% or glucose >300',
      high_yield: 'Symptomatic',
      clinical_pearl: 'Or failure of oral agents'
    },
    tags: ['Diabetes', 'T2DM', 'Insulin', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-diabetes-50',
    system: 'Endocrine',
    topic: 'Diabetes Mellitus',
    difficulty: 'hard',
    front: 'Diabetic kidney disease hallmark?',
    back: {
      definition: 'Persistent albuminuria',
      high_yield: 'Progressive CKD',
      clinical_pearl: 'ACEi/ARB protective'
    },
    tags: ['Diabetes', 'Nephropathy', 'Complications'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Thyroid Disorders - Easy Difficulty (1-20)
  {
    id: 'endo-thyroid-1',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Most common cause of hypothyroidism in U.S.?',
    back: {
      definition: 'Hashimoto thyroiditis',
      high_yield: 'Autoimmune destruction',
      clinical_pearl: 'High TSH, low free T4'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Hashimoto'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-2',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Most common cause of hyperthyroidism?',
    back: {
      definition: 'Graves disease',
      high_yield: 'TSH-receptor antibodies',
      clinical_pearl: 'Diffuse goiter + symptoms'
    },
    tags: ['Thyroid', 'Hyperthyroidism', 'Graves'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-3',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Symptoms of hypothyroidism?',
    back: {
      definition: 'Fatigue, weight gain',
      high_yield: 'Cold intolerance',
      clinical_pearl: 'Constipation'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-4',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Symptoms of hyperthyroidism?',
    back: {
      definition: 'Weight loss + heat intolerance',
      high_yield: 'Tremor + tachycardia',
      clinical_pearl: 'Anxiety'
    },
    tags: ['Thyroid', 'Hyperthyroidism', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-5',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Best screening test for thyroid disease?',
    back: {
      definition: 'TSH',
      high_yield: 'High = hypo',
      clinical_pearl: 'Low = hyper'
    },
    tags: ['Thyroid', 'Diagnosis', 'TSH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-6',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Hashimoto hallmark antibody?',
    back: {
      definition: 'Anti-TPO antibodies',
      high_yield: 'Hypothyroidism',
      clinical_pearl: 'Painless goiter'
    },
    tags: ['Thyroid', 'Hashimoto', 'Antibodies'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-7',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Graves hallmark findings?',
    back: {
      definition: 'Exophthalmos',
      high_yield: 'Pretibial myxedema',
      clinical_pearl: 'Diffuse toxic goiter'
    },
    tags: ['Thyroid', 'Graves', 'Physical Exam'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-8',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Graves stimulating antibody?',
    back: {
      definition: 'TSI (thyroid-stimulating immunoglobulin)',
      high_yield: 'Overstimulates TSH receptor',
      clinical_pearl: 'Primary hyperthyroidism'
    },
    tags: ['Thyroid', 'Graves', 'Antibodies'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-9',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Subclinical hypothyroidism?',
    back: {
      definition: 'High TSH, normal T4',
      high_yield: 'Mild thyroid failure',
      clinical_pearl: 'Monitor or treat if symptomatic'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-10',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Thyroid nodule first test?',
    back: {
      definition: 'TSH level',
      high_yield: 'Helps decide imaging',
      clinical_pearl: 'Low TSH → scan'
    },
    tags: ['Thyroid', 'Nodule', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-11',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Nodule with low TSH next step?',
    back: {
      definition: 'Radionuclide uptake scan',
      high_yield: 'Hot vs cold nodule',
      clinical_pearl: 'Cold more suspicious'
    },
    tags: ['Thyroid', 'Nodule', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-12',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Most suspicious nodule finding?',
    back: {
      definition: 'Hypoechoic, solid',
      high_yield: 'Microcalcifications',
      clinical_pearl: 'Irregular margins'
    },
    tags: ['Thyroid', 'Nodule', 'Ultrasound'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-13',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Most common thyroid cancer?',
    back: {
      definition: 'Papillary carcinoma',
      high_yield: 'Excellent prognosis',
      clinical_pearl: 'Orphan Annie nuclei'
    },
    tags: ['Thyroid', 'Cancer', 'Papillary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-14',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Medullary thyroid cancer marker?',
    back: {
      definition: 'Calcitonin',
      high_yield: 'MEN2 association',
      clinical_pearl: 'Neuroendocrine tumor'
    },
    tags: ['Thyroid', 'Cancer', 'Medullary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-15',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Anaplastic thyroid cancer?',
    back: {
      definition: 'Highly aggressive',
      high_yield: 'Rapid growth',
      clinical_pearl: 'Poor prognosis'
    },
    tags: ['Thyroid', 'Cancer', 'Anaplastic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-16',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Thyroid storm symptoms?',
    back: {
      definition: 'Fever + tachycardia',
      high_yield: 'AMS + hyperthyroid state',
      clinical_pearl: 'Life-threatening'
    },
    tags: ['Thyroid', 'Thyroid Storm', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-17',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Myxedema coma symptoms?',
    back: {
      definition: 'Severe hypothyroidism',
      high_yield: 'Hypothermia + bradycardia',
      clinical_pearl: 'AMS'
    },
    tags: ['Thyroid', 'Myxedema Coma', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-18',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'First-line Graves treatment?',
    back: {
      definition: 'Methimazole',
      high_yield: 'Except in pregnancy',
      clinical_pearl: 'Blocks hormone synthesis'
    },
    tags: ['Thyroid', 'Graves', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-19',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Treatment for hypothyroidism?',
    back: {
      definition: 'Levothyroxine',
      high_yield: 'Daily dosing',
      clinical_pearl: 'Adjust by TSH'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-20',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'easy',
    front: 'Postpartum thyroiditis?',
    back: {
      definition: 'Transient hyper → hypo',
      high_yield: 'Autoimmune',
      clinical_pearl: 'Self-limited'
    },
    tags: ['Thyroid', 'Thyroiditis', 'Postpartum'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Thyroid Disorders - Medium Difficulty (21-32)
  {
    id: 'endo-thyroid-21',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'TSH in primary hypothyroidism?',
    back: {
      definition: 'High',
      high_yield: 'Low T4',
      clinical_pearl: 'Thyroid gland failure'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-22',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'TSH in secondary hypothyroidism?',
    back: {
      definition: 'Low or inappropriately normal',
      high_yield: 'Low T4',
      clinical_pearl: 'Pituitary failure'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-23',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Radioactive iodine uptake in Graves?',
    back: {
      definition: 'Diffuse high uptake',
      high_yield: 'Hyperfunctioning gland',
      clinical_pearl: 'Diagnostic'
    },
    tags: ['Thyroid', 'Graves', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-24',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Toxic multinodular goiter?',
    back: {
      definition: 'Multiple hyperfunctioning nodules',
      high_yield: 'Elderly',
      clinical_pearl: 'High uptake in patches'
    },
    tags: ['Thyroid', 'Goiter', 'Hyperthyroidism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-25',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Thyroiditis uptake pattern?',
    back: {
      definition: 'Low uptake',
      high_yield: 'Inflammation',
      clinical_pearl: 'Not hyperfunctioning'
    },
    tags: ['Thyroid', 'Thyroiditis', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-26',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Thyroid storm treatment?',
    back: {
      definition: 'Beta-blocker, PTU',
      high_yield: 'Steroids + cooling',
      clinical_pearl: 'Life-threatening emergency'
    },
    tags: ['Thyroid', 'Thyroid Storm', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-27',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Myxedema coma treatment?',
    back: {
      definition: 'IV levothyroxine',
      high_yield: 'Warm fluids',
      clinical_pearl: 'ICU care'
    },
    tags: ['Thyroid', 'Myxedema Coma', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-28',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Hoarseness and thyroid nodule?',
    back: {
      definition: 'Recurrent laryngeal nerve involvement',
      high_yield: 'Cancer concern',
      clinical_pearl: 'Needs urgent evaluation'
    },
    tags: ['Thyroid', 'Nodule', 'Cancer'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-29',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Goiter cause?',
    back: {
      definition: 'TSH stimulation',
      high_yield: 'Iodine deficiency',
      clinical_pearl: 'Autoimmune disease'
    },
    tags: ['Thyroid', 'Goiter', 'Pathophysiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-30',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Iodine deficiency effect?',
    back: {
      definition: 'Goiter',
      high_yield: 'Hypothyroidism',
      clinical_pearl: 'Common worldwide'
    },
    tags: ['Thyroid', 'Iodine', 'Goiter'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-31',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Subacute (de Quervain) thyroiditis?',
    back: {
      definition: 'Painful thyroid',
      high_yield: 'Viral cause',
      clinical_pearl: 'Elevated ESR'
    },
    tags: ['Thyroid', 'Thyroiditis', 'Subacute'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-32',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Riedel thyroiditis?',
    back: {
      definition: 'Fibrous replacement',
      high_yield: 'Hard "woody" thyroid',
      clinical_pearl: 'Compresses structures'
    },
    tags: ['Thyroid', 'Thyroiditis', 'Riedel'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-33',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Which drug causes hypothyroidism?',
    back: {
      definition: 'Amiodarone',
      high_yield: 'High iodine load',
      clinical_pearl: 'Check TSH regularly'
    },
    tags: ['Thyroid', 'Hypothyroidism', 'Amiodarone'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-34',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Which drug causes hyperthyroidism?',
    back: {
      definition: 'Amiodarone or iodine',
      high_yield: 'Type I or II',
      clinical_pearl: 'Different mechanisms'
    },
    tags: ['Thyroid', 'Hyperthyroidism', 'Amiodarone'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-35',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'medium',
    front: 'Thyroid cancer risk factor?',
    back: {
      definition: 'Radiation exposure',
      high_yield: 'Childhood risk highest',
      clinical_pearl: 'Papillary most common'
    },
    tags: ['Thyroid', 'Cancer', 'Risk Factors'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Thyroid Disorders - Hard Difficulty (36-50)
  {
    id: 'endo-thyroid-36',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'MEN2A thyroid association?',
    back: {
      definition: 'Medullary carcinoma',
      high_yield: 'RET mutation',
      clinical_pearl: 'Screen early'
    },
    tags: ['Thyroid', 'Cancer', 'MEN2A'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-37',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'MEN2B thyroid association?',
    back: {
      definition: 'Medullary carcinoma',
      high_yield: 'Marfanoid habitus',
      clinical_pearl: 'Aggressive course'
    },
    tags: ['Thyroid', 'Cancer', 'MEN2B'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-38',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Follicular thyroid cancer spread?',
    back: {
      definition: 'Hematogenous',
      high_yield: 'Bone & lung mets',
      clinical_pearl: 'Requires radioactive iodine'
    },
    tags: ['Thyroid', 'Cancer', 'Follicular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-39',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Thyroid lymphoma?',
    back: {
      definition: 'Associated with Hashimoto',
      high_yield: 'Rapid enlargement',
      clinical_pearl: 'Treat with chemo'
    },
    tags: ['Thyroid', 'Cancer', 'Lymphoma'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-40',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Euthyroid sick syndrome?',
    back: {
      definition: 'Low T3',
      high_yield: 'Normal or low TSH',
      clinical_pearl: 'Non-thyroidal illness'
    },
    tags: ['Thyroid', 'Euthyroid Sick Syndrome'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-41',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'TSH-secreting pituitary tumor?',
    back: {
      definition: 'High TSH + high T4',
      high_yield: 'Rare',
      clinical_pearl: 'MRI pituitary'
    },
    tags: ['Thyroid', 'Pituitary', 'TSH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-42',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Graves ophthalmopathy treatment?',
    back: {
      definition: 'Steroids for inflammation',
      high_yield: 'RAI may worsen',
      clinical_pearl: 'Consider surgery'
    },
    tags: ['Thyroid', 'Graves', 'Ophthalmopathy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-43',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'T3 vs T4 use?',
    back: {
      definition: 'T4 (levothyroxine) preferred',
      high_yield: 'Stable long half-life',
      clinical_pearl: 'Avoid T3 alone'
    },
    tags: ['Thyroid', 'Treatment', 'Levothyroxine'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-44',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'TSH suppression therapy?',
    back: {
      definition: 'Used after thyroid cancer',
      high_yield: 'Lower recurrence',
      clinical_pearl: 'Monitor for bone loss'
    },
    tags: ['Thyroid', 'Cancer', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-45',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Thyroid nodule >1 cm with risk factors?',
    back: {
      definition: 'Needs FNA biopsy',
      high_yield: 'Ultrasound guided',
      clinical_pearl: 'Standard evaluation'
    },
    tags: ['Thyroid', 'Nodule', 'Biopsy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-46',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Hot thyroid nodule significance?',
    back: {
      definition: 'Hyperfunctioning',
      high_yield: 'Usually benign',
      clinical_pearl: 'Low cancer risk'
    },
    tags: ['Thyroid', 'Nodule', 'Hot Nodule'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-47',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Cold nodule significance?',
    back: {
      definition: 'Nonfunctioning',
      high_yield: 'Higher malignancy risk',
      clinical_pearl: 'Needs biopsy'
    },
    tags: ['Thyroid', 'Nodule', 'Cold Nodule'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-48',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Amiodarone: Type I hyperthyroidism?',
    back: {
      definition: 'Iodine-induced excess',
      high_yield: 'High uptake',
      clinical_pearl: 'Treat with thionamides'
    },
    tags: ['Thyroid', 'Hyperthyroidism', 'Amiodarone'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-49',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Amiodarone: Type II hyperthyroidism?',
    back: {
      definition: 'Destructive thyroiditis',
      high_yield: 'Low uptake',
      clinical_pearl: 'Treat with steroids'
    },
    tags: ['Thyroid', 'Hyperthyroidism', 'Amiodarone'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-thyroid-50',
    system: 'Endocrine',
    topic: 'Thyroid Disorders',
    difficulty: 'hard',
    front: 'Thyroid hormone resistance?',
    back: {
      definition: 'High T4 + normal/high TSH',
      high_yield: 'Inherited',
      clinical_pearl: 'Clinically variable'
    },
    tags: ['Thyroid', 'Hormone Resistance'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Adrenal Disorders - Easy Difficulty (1-20)
  {
    id: 'endo-adrenal-1',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'What is Addison disease?',
    back: {
      definition: 'Primary adrenal insufficiency',
      high_yield: 'Low cortisol + aldosterone',
      clinical_pearl: 'Hyperpigmentation common'
    },
    tags: ['Adrenal', 'Addison', 'Insufficiency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-2',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Symptoms of adrenal insufficiency?',
    back: {
      definition: 'Fatigue, weight loss',
      high_yield: 'Hypotension',
      clinical_pearl: 'Salt craving'
    },
    tags: ['Adrenal', 'Insufficiency', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-3',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Most common cause of Addison disease?',
    back: {
      definition: 'Autoimmune destruction',
      high_yield: 'Chronic adrenal failure',
      clinical_pearl: 'High ACTH'
    },
    tags: ['Adrenal', 'Addison', 'Etiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-4',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Adrenal crisis?',
    back: {
      definition: 'Acute deficiency of cortisol',
      high_yield: 'Shock + vomiting',
      clinical_pearl: 'Medical emergency'
    },
    tags: ['Adrenal', 'Crisis', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-5',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Best screening test for adrenal insufficiency?',
    back: {
      definition: 'AM cortisol',
      high_yield: 'Low level suspicious',
      clinical_pearl: 'Confirm with ACTH stim test'
    },
    tags: ['Adrenal', 'Insufficiency', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-6',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Cosyntropin test purpose?',
    back: {
      definition: 'Evaluates adrenal cortisol response',
      high_yield: 'No rise = primary insufficiency',
      clinical_pearl: 'Rise = secondary'
    },
    tags: ['Adrenal', 'Diagnosis', 'Testing'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-7',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Primary vs secondary adrenal insufficiency clue?',
    back: {
      definition: 'Primary = high ACTH',
      high_yield: 'Secondary = low ACTH',
      clinical_pearl: 'Hyperpigmentation only in primary'
    },
    tags: ['Adrenal', 'Insufficiency', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-8',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Treatment of adrenal crisis?',
    back: {
      definition: 'IV hydrocortisone',
      high_yield: 'Large-volume fluids',
      clinical_pearl: 'Correct electrolytes'
    },
    tags: ['Adrenal', 'Crisis', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-9',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Cushing syndrome definition?',
    back: {
      definition: 'Excess cortisol',
      high_yield: 'Various causes',
      clinical_pearl: 'Weight gain + striae'
    },
    tags: ['Adrenal', 'Cushing', 'Definition'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-10',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Most common cause of Cushing syndrome?',
    back: {
      definition: 'Iatrogenic steroids',
      high_yield: 'Exogenous cortisol',
      clinical_pearl: 'Suppresses ACTH'
    },
    tags: ['Adrenal', 'Cushing', 'Etiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-11',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Best initial test for Cushing&apos;s?',
    back: {
      definition: '1 mg dex suppression',
      high_yield: 'No suppression = abnormal',
      clinical_pearl: 'First step in workup'
    },
    tags: ['Adrenal', 'Cushing', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-12',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: '24-hour urine cortisol use?',
    back: {
      definition: 'Confirms hypercortisolism',
      high_yield: 'High sensitivity',
      clinical_pearl: 'Second-line test'
    },
    tags: ['Adrenal', 'Cushing', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-13',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Midnight salivary cortisol?',
    back: {
      definition: 'Screening tool',
      high_yield: 'Should be low',
      clinical_pearl: 'Elevated = Cushing&apos;s'
    },
    tags: ['Adrenal', 'Cushing', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-14',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Cushing disease?',
    back: {
      definition: 'Pituitary ACTH hypersecretion',
      high_yield: 'Bilateral adrenal stimulation',
      clinical_pearl: 'Responsive to surgery'
    },
    tags: ['Adrenal', 'Cushing', 'Pituitary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-15',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Adrenal adenoma cause?',
    back: {
      definition: 'Cortisol-producing tumor',
      high_yield: 'Low ACTH',
      clinical_pearl: 'Unilateral removal'
    },
    tags: ['Adrenal', 'Adenoma', 'Cushing'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-16',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Symptoms of hypercortisolism?',
    back: {
      definition: 'Central obesity',
      high_yield: 'Purple striae',
      clinical_pearl: 'Proximal muscle weakness'
    },
    tags: ['Adrenal', 'Cushing', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-17',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Primary hyperaldosteronism cause?',
    back: {
      definition: 'Adrenal adenoma or hyperplasia',
      high_yield: 'Excess aldosterone',
      clinical_pearl: 'HTN + hypokalemia'
    },
    tags: ['Adrenal', 'Hyperaldosteronism', 'Etiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-18',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Classic hyperaldosteronism labs?',
    back: {
      definition: 'High aldosterone',
      high_yield: 'Low renin',
      clinical_pearl: 'Metabolic alkalosis'
    },
    tags: ['Adrenal', 'Hyperaldosteronism', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-19',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Conn syndrome?',
    back: {
      definition: 'Aldosterone-producing adenoma',
      high_yield: 'Surgical cure',
      clinical_pearl: 'Hypokalemia hallmark'
    },
    tags: ['Adrenal', 'Conn', 'Hyperaldosteronism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-20',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Pheochromocytoma origin?',
    back: {
      definition: 'Chromaffin cells',
      high_yield: 'Catecholamine tumor',
      clinical_pearl: 'Headache + sweating + palpitations'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'Tumor'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-21',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Best initial test for pheochromocytoma?',
    back: {
      definition: 'Plasma metanephrines',
      high_yield: 'High sensitivity',
      clinical_pearl: 'Confirm with urine metanephrines'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-22',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Pheochromocytoma treatment?',
    back: {
      definition: 'α-blocker first',
      high_yield: 'Then β-blocker',
      clinical_pearl: 'Then surgery'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-23',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Adrenal incidentaloma?',
    back: {
      definition: 'Adrenal mass found on imaging',
      high_yield: 'Evaluate hormones',
      clinical_pearl: 'Assess malignancy risk'
    },
    tags: ['Adrenal', 'Incidentaloma', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-24',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Congenital adrenal hyperplasia cause?',
    back: {
      definition: '21-hydroxylase deficiency',
      high_yield: 'Low cortisol + aldosterone',
      clinical_pearl: 'High androgens'
    },
    tags: ['Adrenal', 'CAH', 'Genetics'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-25',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'CAH symptoms?',
    back: {
      definition: 'Virilization',
      high_yield: 'Salt-wasting',
      clinical_pearl: 'Newborn screening important'
    },
    tags: ['Adrenal', 'CAH', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-26',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'easy',
    front: 'Steroid withdrawal risk?',
    back: {
      definition: 'Adrenal suppression',
      high_yield: 'Low endogenous cortisol',
      clinical_pearl: 'Gradual taper required'
    },
    tags: ['Adrenal', 'Steroids', 'Withdrawal'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Adrenal Disorders - Medium Difficulty (27-39)
  {
    id: 'endo-adrenal-27',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Cushing physical signs?',
    back: {
      definition: 'Moon facies',
      high_yield: 'Buffalo hump',
      clinical_pearl: 'Easy bruising'
    },
    tags: ['Adrenal', 'Cushing', 'Physical Exam'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-28',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Hyperaldosteronism hypertension?',
    back: {
      definition: 'Resistant HTN',
      high_yield: 'Usually moderate-severe',
      clinical_pearl: 'Low renin confirms'
    },
    tags: ['Adrenal', 'Hyperaldosteronism', 'Hypertension'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-29',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Spironolactone use?',
    back: {
      definition: 'Aldosterone antagonist',
      high_yield: 'Treats hyperaldosteronism',
      clinical_pearl: 'Gynecomastia side effect'
    },
    tags: ['Adrenal', 'Hyperaldosteronism', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-30',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Adrenal carcinoma clue?',
    back: {
      definition: 'Large irregular mass',
      high_yield: 'Hormone excess',
      clinical_pearl: 'Poor prognosis'
    },
    tags: ['Adrenal', 'Carcinoma', 'Cancer'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-31',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Secondary adrenal insufficiency cause?',
    back: {
      definition: 'Pituitary disease',
      high_yield: 'Low ACTH',
      clinical_pearl: 'No hyperpigmentation'
    },
    tags: ['Adrenal', 'Insufficiency', 'Secondary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-32',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Tertiary adrenal insufficiency cause?',
    back: {
      definition: 'Chronic steroid use withdrawal',
      high_yield: 'Suppressed CRH',
      clinical_pearl: 'Gradual taper needed'
    },
    tags: ['Adrenal', 'Insufficiency', 'Tertiary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-33',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Pheochromocytoma rule of 10s?',
    back: {
      definition: '10% malignant',
      high_yield: '10% bilateral',
      clinical_pearl: '10% extra-adrenal'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'Rule of 10s'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-34',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Pheo imaging?',
    back: {
      definition: 'MRI preferred',
      high_yield: 'T2 bright',
      clinical_pearl: 'After biochemical confirmation'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'Imaging'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-35',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Nelson syndrome?',
    back: {
      definition: 'Pituitary tumor enlargement',
      high_yield: 'After adrenalectomy',
      clinical_pearl: 'High ACTH + hyperpigmentation'
    },
    tags: ['Adrenal', 'Nelson Syndrome', 'Pituitary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-36',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Adrenal hemorrhage cause?',
    back: {
      definition: 'Sepsis, trauma, anticoagulants',
      high_yield: 'Acute adrenal crisis',
      clinical_pearl: 'Waterhouse-Friderichsen syndrome'
    },
    tags: ['Adrenal', 'Hemorrhage', 'Crisis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-37',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: '11β-hydroxylase deficiency?',
    back: {
      definition: 'High androgens + HTN',
      high_yield: 'Low renin',
      clinical_pearl: 'Low aldosterone'
    },
    tags: ['Adrenal', 'CAH', '11β-hydroxylase'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-38',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: '17α-hydroxylase deficiency?',
    back: {
      definition: 'Low androgens',
      high_yield: 'Hypertension',
      clinical_pearl: 'No puberty'
    },
    tags: ['Adrenal', 'CAH', '17α-hydroxylase'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-39',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'medium',
    front: 'Cushing ACTH level clue?',
    back: {
      definition: 'High ACTH = pituitary or ectopic',
      high_yield: 'Low ACTH = adrenal tumor',
      clinical_pearl: 'Guides next steps'
    },
    tags: ['Adrenal', 'Cushing', 'ACTH', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Adrenal Disorders - Hard Difficulty (40-50)
  {
    id: 'endo-adrenal-40',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Ectopic ACTH tumor?',
    back: {
      definition: 'Small cell lung cancer',
      high_yield: 'Severe hypercortisolism',
      clinical_pearl: 'Hypokalemic alkalosis'
    },
    tags: ['Adrenal', 'Cushing', 'Ectopic ACTH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-41',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Ectopic CRH tumor?',
    back: {
      definition: 'Rare',
      high_yield: 'Leads to ACTH excess',
      clinical_pearl: 'Same presentation as Cushing disease'
    },
    tags: ['Adrenal', 'Cushing', 'Ectopic CRH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-42',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Malignant pheochromocytoma clue?',
    back: {
      definition: 'Persistent symptoms after surgery',
      high_yield: 'Elevated chromogranin A',
      clinical_pearl: 'Rare but aggressive'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'Malignancy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-43',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Laparoscopic adrenalectomy contraindication?',
    back: {
      definition: 'Large invasive mass',
      high_yield: 'Suspicion for carcinoma',
      clinical_pearl: 'Needs open approach'
    },
    tags: ['Adrenal', 'Surgery', 'Adrenalectomy'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-44',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Primary adrenal lymphoma?',
    back: {
      definition: 'Rare malignancy',
      high_yield: 'Bilaterally enlarged glands',
      clinical_pearl: 'Adrenal insufficiency common'
    },
    tags: ['Adrenal', 'Lymphoma', 'Cancer'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-45',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Adrenal vein sampling use?',
    back: {
      definition: 'Distinguish unilateral vs bilateral hyperaldosteronism',
      high_yield: 'Guides surgery',
      clinical_pearl: ''
    },
    tags: ['Adrenal', 'Hyperaldosteronism', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-46',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'ACTH-independent Cushing labs?',
    back: {
      definition: 'Low ACTH',
      high_yield: 'High cortisol',
      clinical_pearl: 'Adrenal source'
    },
    tags: ['Adrenal', 'Cushing', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-47',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'MEN2 and pheochromocytoma?',
    back: {
      definition: 'RET mutation',
      high_yield: 'Screen early',
      clinical_pearl: 'Operate pheo before thyroidectomy'
    },
    tags: ['Adrenal', 'Pheochromocytoma', 'MEN2'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-48',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Carney complex?',
    back: {
      definition: 'Myxomas + endocrine tumors',
      high_yield: 'Pigmented nodules',
      clinical_pearl: 'Rare adrenal involvement'
    },
    tags: ['Adrenal', 'Carney Complex', 'Syndrome'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-49',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Glucocorticoid-remediable hyperaldosteronism?',
    back: {
      definition: 'Genetic',
      high_yield: 'ACTH-driven aldosterone',
      clinical_pearl: 'Treat with steroids'
    },
    tags: ['Adrenal', 'Hyperaldosteronism', 'Genetic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-adrenal-50',
    system: 'Endocrine',
    topic: 'Adrenal Disorders',
    difficulty: 'hard',
    front: 'Adrenal metastases?',
    back: {
      definition: 'Common site for mets',
      high_yield: 'Lung, breast',
      clinical_pearl: 'Often bilateral'
    },
    tags: ['Adrenal', 'Metastases', 'Cancer'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Pituitary Disorders - Easy Difficulty (1-20)
  {
    id: 'endo-pituitary-1',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Most common pituitary adenoma?',
    back: {
      definition: 'Prolactinoma',
      high_yield: 'High prolactin',
      clinical_pearl: 'Galactorrhea + amenorrhea'
    },
    tags: ['Pituitary', 'Prolactinoma', 'Adenoma'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-2',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Prolactinoma symptoms in men?',
    back: {
      definition: 'Low libido',
      high_yield: 'Erectile dysfunction',
      clinical_pearl: 'Gynecomastia sometimes'
    },
    tags: ['Pituitary', 'Prolactinoma', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-3',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Prolactinoma treatment?',
    back: {
      definition: 'Dopamine agonists',
      high_yield: 'Cabergoline preferred',
      clinical_pearl: 'Shrinks tumor'
    },
    tags: ['Pituitary', 'Prolactinoma', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-4',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Acromegaly cause?',
    back: {
      definition: 'GH-secreting adenoma',
      high_yield: 'High IGF-1',
      clinical_pearl: 'Large hands/feet'
    },
    tags: ['Pituitary', 'Acromegaly', 'GH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-5',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Best test for acromegaly?',
    back: {
      definition: 'IGF-1 level',
      high_yield: 'Confirm with glucose suppression test',
      clinical_pearl: 'Fails to suppress GH'
    },
    tags: ['Pituitary', 'Acromegaly', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-6',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Acromegaly symptoms?',
    back: {
      definition: 'Coarse facial features',
      high_yield: 'Joint pain',
      clinical_pearl: 'Organ enlargement'
    },
    tags: ['Pituitary', 'Acromegaly', 'Symptoms'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-7',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Central diabetes insipidus?',
    back: {
      definition: 'Low ADH production',
      high_yield: 'Polyuria + polydipsia',
      clinical_pearl: 'High serum Na'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'ADH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-8',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Nephrogenic DI?',
    back: {
      definition: 'Kidneys unresponsive to ADH',
      high_yield: 'Normal ADH',
      clinical_pearl: 'Caused by lithium'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'Nephrogenic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-9',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'DI best initial test?',
    back: {
      definition: 'Water deprivation test',
      high_yield: 'Urine stays dilute',
      clinical_pearl: 'Distinguish central vs nephrogenic'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'Diagnosis'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-10',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'DI treatment?',
    back: {
      definition: 'Central = desmopressin',
      high_yield: 'Nephrogenic = thiazides',
      clinical_pearl: 'Low solute diet'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-11',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'SIADH cause?',
    back: {
      definition: 'Excess ADH',
      high_yield: 'Hyponatremia',
      clinical_pearl: 'Low serum osmolality'
    },
    tags: ['Pituitary', 'SIADH', 'ADH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-12',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'SIADH treatment?',
    back: {
      definition: 'Fluid restriction',
      high_yield: 'Salt tablets',
      clinical_pearl: 'Vaptans if severe'
    },
    tags: ['Pituitary', 'SIADH', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-13',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Cushing disease cause?',
    back: {
      definition: 'Pituitary ACTH overproduction',
      high_yield: 'Leads to hypercortisolism',
      clinical_pearl: 'Treat with surgery'
    },
    tags: ['Pituitary', 'Cushing Disease', 'ACTH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-14',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Hypopituitarism?',
    back: {
      definition: 'Low pituitary hormones',
      high_yield: 'Fatigue + amenorrhea',
      clinical_pearl: 'Multiple deficiencies'
    },
    tags: ['Pituitary', 'Hypopituitarism', 'Insufficiency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-15',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Sheehan syndrome?',
    back: {
      definition: 'Postpartum pituitary necrosis',
      high_yield: 'Failure to lactate',
      clinical_pearl: 'Hypotension during delivery'
    },
    tags: ['Pituitary', 'Sheehan Syndrome', 'Postpartum'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-16',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Pituitary apoplexy?',
    back: {
      definition: 'Acute hemorrhage into adenoma',
      high_yield: 'Severe headache',
      clinical_pearl: 'Ophthalmoplegia'
    },
    tags: ['Pituitary', 'Apoplexy', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-17',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Pituitary apoplexy treatment?',
    back: {
      definition: 'High-dose steroids',
      high_yield: 'Neurosurgery if needed',
      clinical_pearl: 'ICU monitoring'
    },
    tags: ['Pituitary', 'Apoplexy', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-18',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'Empty sella syndrome?',
    back: {
      definition: 'Flattened pituitary',
      high_yield: 'Often asymptomatic',
      clinical_pearl: 'Seen on MRI'
    },
    tags: ['Pituitary', 'Empty Sella', 'MRI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-19',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'GH deficiency adults?',
    back: {
      definition: 'Low energy + decreased muscle mass',
      high_yield: 'Low IGF-1',
      clinical_pearl: 'Confirmed with stimulation test'
    },
    tags: ['Pituitary', 'GH Deficiency', 'Adults'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-20',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'easy',
    front: 'TSH-secreting adenoma?',
    back: {
      definition: 'High T4 + unsuppressed TSH',
      high_yield: 'Rare',
      clinical_pearl: 'Causes hyperthyroidism'
    },
    tags: ['Pituitary', 'TSH Adenoma', 'Hyperthyroidism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },

  // Pituitary Disorders - Medium Difficulty (21-32)
  {
    id: 'endo-pituitary-21',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Prolactin level in prolactinoma?',
    back: {
      definition: 'Often >200 ng/mL',
      high_yield: 'Very high',
      clinical_pearl: 'Large tumors'
    },
    tags: ['Pituitary', 'Prolactinoma', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-22',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Causes of elevated prolactin (non-tumor)?',
    back: {
      definition: 'Pregnancy, hypothyroidism, meds',
      high_yield: 'Antipsychotics common',
      clinical_pearl: 'Check TSH'
    },
    tags: ['Pituitary', 'Prolactin', 'Hyperprolactinemia'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-23',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Visual defects in pituitary tumors?',
    back: {
      definition: 'Bitemporal hemianopsia',
      high_yield: 'Optic chiasm compression',
      clinical_pearl: 'Classic finding'
    },
    tags: ['Pituitary', 'Tumor', 'Visual Defects'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-24',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Macroadenoma definition?',
    back: {
      definition: '>1 cm',
      high_yield: 'May cause mass effect',
      clinical_pearl: 'Vision changes'
    },
    tags: ['Pituitary', 'Macroadenoma', 'Tumor'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-25',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Treatment for GH-secreting adenoma?',
    back: {
      definition: 'Transsphenoidal surgery',
      high_yield: 'Somatostatin analogs if persistent',
      clinical_pearl: 'Pegvisomant option'
    },
    tags: ['Pituitary', 'Acromegaly', 'Treatment'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-26',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'DI lab findings?',
    back: {
      definition: 'High serum osmolality',
      high_yield: 'Low urine osmolality',
      clinical_pearl: 'Hypernatremia'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-27',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'SIADH labs?',
    back: {
      definition: 'Low serum osmolality',
      high_yield: 'High urine osmolality',
      clinical_pearl: 'Euvolemia'
    },
    tags: ['Pituitary', 'SIADH', 'Labs'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-28',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'SIADH causes?',
    back: {
      definition: 'Cancer, CNS disease, meds',
      high_yield: 'Small cell cancer',
      clinical_pearl: 'SSRIs common'
    },
    tags: ['Pituitary', 'SIADH', 'Etiology'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-29',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Salt-wasting vs SIADH difference?',
    back: {
      definition: 'Salt-wasting = hypovolemic',
      high_yield: 'SIADH = euvolemic',
      clinical_pearl: 'Different treatment'
    },
    tags: ['Pituitary', 'SIADH', 'Salt-Wasting'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-30',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'ACTH deficiency symptoms?',
    back: {
      definition: 'Hypotension',
      high_yield: 'Fatigue',
      clinical_pearl: 'Low cortisol'
    },
    tags: ['Pituitary', 'ACTH Deficiency', 'Hypopituitarism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-31',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'LH/FSH deficiency?',
    back: {
      definition: 'Infertility',
      high_yield: 'Low libido',
      clinical_pearl: 'Amenorrhea'
    },
    tags: ['Pituitary', 'LH/FSH Deficiency', 'Hypopituitarism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-32',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Pituitary stalk compression?',
    back: {
      definition: 'Disrupts dopamine inhibition',
      high_yield: 'Mild ↑prolactin',
      clinical_pearl: 'Not true prolactinoma'
    },
    tags: ['Pituitary', 'Stalk Compression', 'Prolactin'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-33',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Craniopharyngioma?',
    back: {
      definition: 'Benign tumor',
      high_yield: 'Hypopituitarism + vision loss',
      clinical_pearl: 'Calcifications on imaging'
    },
    tags: ['Pituitary', 'Craniopharyngioma', 'Tumor'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-34',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Langerhans cell histiocytosis pituitary effect?',
    back: {
      definition: 'Central DI',
      high_yield: 'Pituitary involvement',
      clinical_pearl: 'Children often'
    },
    tags: ['Pituitary', 'Langerhans Cell Histiocytosis', 'DI'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-35',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'medium',
    front: 'Pituitary radiation side effect?',
    back: {
      definition: 'Hypopituitarism',
      high_yield: 'Gradual onset',
      clinical_pearl: 'Lifelong monitoring'
    },
    tags: ['Pituitary', 'Radiation', 'Hypopituitarism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-36',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Ectopic ADH tumor?',
    back: {
      definition: 'Small cell lung cancer',
      high_yield: 'Paraneoplastic SIADH',
      clinical_pearl: 'Severe hyponatremia'
    },
    tags: ['Pituitary', 'SIADH', 'Ectopic ADH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-37',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Osmotic demyelination risk?',
    back: {
      definition: 'Overcorrecting hyponatremia',
      high_yield: 'Central pontine myelinolysis',
      clinical_pearl: 'Correct slowly'
    },
    tags: ['Pituitary', 'SIADH', 'Osmotic Demyelination'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-38',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Triphasic response after pituitary surgery?',
    back: {
      definition: 'DI → SIADH → DI',
      high_yield: 'Water balance instability',
      clinical_pearl: 'Monitor closely'
    },
    tags: ['Pituitary', 'Surgery', 'Triphasic Response'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-39',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Panhypopituitarism?',
    back: {
      definition: 'Complete pituitary failure',
      high_yield: 'Multiple hormone deficits',
      clinical_pearl: 'Life-long replacement'
    },
    tags: ['Pituitary', 'Panhypopituitarism', 'Hypopituitarism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-40',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Adipsic DI?',
    back: {
      definition: 'Hypothalamic damage',
      high_yield: 'Lack of thirst',
      clinical_pearl: 'Severe hypernatremia risk'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'Adipsic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-41',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'High-dose dexamethasone test?',
    back: {
      definition: 'Differentiates Cushing disease',
      high_yield: 'Pituitary suppresses; ectopic does not',
      clinical_pearl: 'Second-level testing'
    },
    tags: ['Pituitary', 'Cushing Disease', 'Dexamethasone Test'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-42',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Pituitary metastases?',
    back: {
      definition: 'Breast/lung cancer',
      high_yield: 'Posterior pituitary affected',
      clinical_pearl: 'DI common'
    },
    tags: ['Pituitary', 'Metastases', 'Cancer'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-43',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Pituitary cyst (Rathke cleft)?',
    back: {
      definition: 'Benign cyst',
      high_yield: 'Headache + vision issues',
      clinical_pearl: 'May mimic adenoma'
    },
    tags: ['Pituitary', 'Rathke Cleft Cyst', 'Cyst'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-44',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Invasive pituitary adenoma?',
    back: {
      definition: 'Invades cavernous sinus',
      high_yield: 'Cranial nerve palsies',
      clinical_pearl: 'Complex surgery'
    },
    tags: ['Pituitary', 'Adenoma', 'Invasive'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-45',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Kallmann syndrome?',
    back: {
      definition: 'Hypogonadotropic hypogonadism',
      high_yield: 'Anosmia',
      clinical_pearl: 'Delayed puberty'
    },
    tags: ['Pituitary', 'Kallmann Syndrome', 'Hypogonadism'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-46',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Laron syndrome?',
    back: {
      definition: 'GH receptor defect',
      high_yield: 'High GH, low IGF-1',
      clinical_pearl: 'Dwarfism'
    },
    tags: ['Pituitary', 'Laron Syndrome', 'GH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-47',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Pituitary gigantism?',
    back: {
      definition: 'Excess GH in childhood',
      high_yield: 'Tall stature',
      clinical_pearl: 'Open growth plates'
    },
    tags: ['Pituitary', 'Gigantism', 'GH'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-48',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Hyperprolactinemia in men?',
    back: {
      definition: 'Low testosterone',
      high_yield: 'Infertility',
      clinical_pearl: 'Often late diagnosis'
    },
    tags: ['Pituitary', 'Hyperprolactinemia', 'Men'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-49',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Empty sella secondary cause?',
    back: {
      definition: 'ICP elevation',
      high_yield: 'CSF compresses pituitary',
      clinical_pearl: 'Seen in obese women'
    },
    tags: ['Pituitary', 'Empty Sella', 'ICP'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  },
  {
    id: 'endo-pituitary-50',
    system: 'Endocrine',
    topic: 'Pituitary Disorders',
    difficulty: 'hard',
    front: 'Postoperative DI clue?',
    back: {
      definition: 'Excessive urine output',
      high_yield: 'High serum sodium',
      clinical_pearl: 'Responds to desmopressin'
    },
    tags: ['Pituitary', 'Diabetes Insipidus', 'Postoperative'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0
  }
];
