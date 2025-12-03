
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
  
  // Diabetes Mellitus - Medium Difficulty (21-32)
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
  }
];
