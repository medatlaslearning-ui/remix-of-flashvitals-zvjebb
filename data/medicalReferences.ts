
export interface Reference {
  id: string;
  refNumber: string;
  year: number;
  citation: string;
  link: string;
  appliesTo: string;
  category: string;
  subcategory: string;
}

export const medicalReferences: Reference[] = [
  // Cardiology
  {
    id: 'ref-card-001',
    refNumber: 'REF-CARD-001',
    year: 2023,
    citation: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193',
    appliesTo: 'Atrial fibrillation diagnosis, management, anticoagulation, rate control, rhythm control',
    category: 'Cardiology',
    subcategory: 'Arrhythmias'
  },
  {
    id: 'ref-card-002',
    refNumber: 'REF-CARD-002',
    year: 2022,
    citation: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063',
    appliesTo: 'Heart failure diagnosis, classification, treatment, HFrEF, HFpEF',
    category: 'Cardiology',
    subcategory: 'Heart Failure'
  },
  {
    id: 'ref-card-003',
    refNumber: 'REF-CARD-003',
    year: 2021,
    citation: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001038',
    appliesTo: 'Acute coronary syndrome, STEMI, NSTEMI, unstable angina, PCI, CABG',
    category: 'Cardiology',
    subcategory: 'Ischemic Heart Disease'
  },
  {
    id: 'ref-card-004',
    refNumber: 'REF-CARD-004',
    year: 2020,
    citation: '2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923',
    appliesTo: 'Aortic stenosis, mitral regurgitation, valve replacement, valve repair',
    category: 'Cardiology',
    subcategory: 'Valvular Disease'
  },
  // Pulmonary
  {
    id: 'ref-pulm-001',
    refNumber: 'REF-PULM-001',
    year: 2023,
    citation: 'GOLD 2023 Report: Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease.',
    link: 'https://goldcopd.org/2023-gold-report-2/',
    appliesTo: 'COPD diagnosis, classification, treatment, exacerbations',
    category: 'Pulmonary',
    subcategory: 'Obstructive Lung Disease'
  },
  {
    id: 'ref-pulm-002',
    refNumber: 'REF-PULM-002',
    year: 2022,
    citation: '2022 GINA Report: Global Strategy for Asthma Management and Prevention.',
    link: 'https://ginasthma.org/reports/',
    appliesTo: 'Asthma diagnosis, severity classification, step therapy, exacerbations',
    category: 'Pulmonary',
    subcategory: 'Obstructive Lung Disease'
  },
  {
    id: 'ref-pulm-003',
    refNumber: 'REF-PULM-003',
    year: 2019,
    citation: 'ATS/ERS/JRS/ALAT Clinical Practice Guideline: Idiopathic Pulmonary Fibrosis.',
    link: 'https://www.atsjournals.org/doi/10.1164/rccm.201906-1255ST',
    appliesTo: 'Idiopathic pulmonary fibrosis, interstitial lung disease, antifibrotic therapy',
    category: 'Pulmonary',
    subcategory: 'Interstitial Lung Disease'
  },
  // Renal
  {
    id: 'ref-renal-001',
    refNumber: 'REF-RENAL-001',
    year: 2024,
    citation: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease.',
    link: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
    appliesTo: 'Chronic kidney disease staging, progression, management, complications',
    category: 'Renal',
    subcategory: 'Chronic Kidney Disease'
  },
  {
    id: 'ref-renal-002',
    refNumber: 'REF-RENAL-002',
    year: 2023,
    citation: 'KDIGO 2023 Clinical Practice Guideline for Acute Kidney Injury.',
    link: 'https://kdigo.org/guidelines/acute-kidney-injury/',
    appliesTo: 'Acute kidney injury definition, staging, prevention, management',
    category: 'Renal',
    subcategory: 'Acute Kidney Injury'
  },
  // Gastroenterology
  {
    id: 'ref-gi-001',
    refNumber: 'REF-GI-001',
    year: 2022,
    citation: 'ACG Clinical Guideline: Management of Inflammatory Bowel Disease.',
    link: 'https://journals.lww.com/ajg/fulltext/2022/04000/acg_clinical_guideline__management_of.1.aspx',
    appliesTo: 'Crohn disease, ulcerative colitis, IBD treatment, biologics',
    category: 'Gastroenterology',
    subcategory: 'Inflammatory Bowel Disease'
  },
  {
    id: 'ref-gi-002',
    refNumber: 'REF-GI-002',
    year: 2021,
    citation: 'ACG Clinical Guideline: Diagnosis and Management of Gastroesophageal Reflux Disease.',
    link: 'https://journals.lww.com/ajg/fulltext/2022/01000/acg_clinical_guideline__diagnosis_and_management.10.aspx',
    appliesTo: 'GERD diagnosis, PPI therapy, Barrett esophagus',
    category: 'Gastroenterology',
    subcategory: 'Esophageal Disorders'
  },
  // Endocrine
  {
    id: 'ref-endo-001',
    refNumber: 'REF-ENDO-001',
    year: 2023,
    citation: 'ADA Standards of Care in Diabetes—2023.',
    link: 'https://diabetesjournals.org/care/issue/46/Supplement_1',
    appliesTo: 'Diabetes mellitus diagnosis, A1C targets, medication management, complications',
    category: 'Endocrine',
    subcategory: 'Diabetes Mellitus'
  },
  {
    id: 'ref-endo-002',
    refNumber: 'REF-ENDO-002',
    year: 2022,
    citation: 'ATA Guidelines for Management of Thyroid Nodules and Differentiated Thyroid Cancer.',
    link: 'https://www.liebertpub.com/doi/10.1089/thy.2015.0020',
    appliesTo: 'Thyroid nodules, thyroid cancer, fine needle aspiration, thyroidectomy',
    category: 'Endocrine',
    subcategory: 'Thyroid Disorders'
  },
  // Hematology
  {
    id: 'ref-hem-001',
    refNumber: 'REF-HEM-001',
    year: 2021,
    citation: 'ASH Guidelines for Management of Venous Thromboembolism.',
    link: 'https://ashpublications.org/bloodadvances/article/4/19/4693/463776/American-Society-of-Hematology-2020-guidelines-for',
    appliesTo: 'Deep vein thrombosis, pulmonary embolism, anticoagulation, DOACs',
    category: 'Hematology',
    subcategory: 'Thrombosis'
  },
  {
    id: 'ref-hem-002',
    refNumber: 'REF-HEM-002',
    year: 2020,
    citation: 'ASH Guidelines for Management of Sickle Cell Disease.',
    link: 'https://ashpublications.org/blood/article/134/Supplement_1/SCI-1/427823/2020-ASH-Guidelines-for-Sickle-Cell-Disease',
    appliesTo: 'Sickle cell disease, vaso-occlusive crisis, hydroxyurea, transfusion',
    category: 'Hematology',
    subcategory: 'Hemoglobinopathies'
  },
  // Neurology
  {
    id: 'ref-neuro-001',
    refNumber: 'REF-NEURO-001',
    year: 2021,
    citation: 'AHA/ASA Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack.',
    link: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000375',
    appliesTo: 'Stroke prevention, TIA management, antiplatelet therapy, carotid stenosis',
    category: 'Neurology',
    subcategory: 'Cerebrovascular Disease'
  },
  {
    id: 'ref-neuro-002',
    refNumber: 'REF-NEURO-002',
    year: 2022,
    citation: 'AAN Practice Guideline Update: Treatment of Essential Tremor.',
    link: 'https://www.aan.com/Guidelines/home/GuidelineDetail/1011',
    appliesTo: 'Essential tremor, Parkinson disease, movement disorders, tremor treatment',
    category: 'Neurology',
    subcategory: 'Movement Disorders'
  },
  // Emergency Medicine
  {
    id: 'ref-em-001',
    refNumber: 'REF-EM-001',
    year: 2020,
    citation: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021.',
    link: 'https://www.sccm.org/SurvivingSepsisCampaign/Guidelines',
    appliesTo: 'Sepsis, septic shock, early goal-directed therapy, antibiotics, vasopressors',
    category: 'Emergency Medicine',
    subcategory: 'Critical Care'
  },
  {
    id: 'ref-em-002',
    refNumber: 'REF-EM-002',
    year: 2019,
    citation: 'AHA Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916',
    appliesTo: 'Cardiac arrest, CPR, ACLS, defibrillation, post-cardiac arrest care',
    category: 'Emergency Medicine',
    subcategory: 'Resuscitation'
  },
  // Urology
  {
    id: 'ref-uro-001',
    refNumber: 'REF-URO-001',
    year: 2021,
    citation: 'AUA/SUFU Guideline on the Diagnosis and Treatment of Overactive Bladder.',
    link: 'https://www.auanet.org/guidelines-and-quality/guidelines/overactive-bladder',
    appliesTo: 'Overactive bladder, urge incontinence, anticholinergics, beta-3 agonists',
    category: 'Urology',
    subcategory: 'Lower Urinary Tract Disorders'
  },
  {
    id: 'ref-uro-002',
    refNumber: 'REF-URO-002',
    year: 2020,
    citation: 'AUA Guideline on the Management of Benign Prostatic Hyperplasia.',
    link: 'https://www.auanet.org/guidelines-and-quality/guidelines/benign-prostatic-hyperplasia',
    appliesTo: 'Benign prostatic hyperplasia, BPH, alpha blockers, 5-alpha reductase inhibitors',
    category: 'Urology',
    subcategory: 'Prostate Disorders'
  },
];

// Helper function to get all references
export function getAllReferences(): Reference[] {
  return medicalReferences;
}

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return medicalReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return medicalReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return medicalReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  const categories = new Set(medicalReferences.map(ref => ref.category));
  return Array.from(categories).sort();
}

// Helper function to get subcategories for a category
export function getSubcategories(category: string): string[] {
  const subcategories = new Set(
    medicalReferences
      .filter(ref => ref.category === category)
      .map(ref => ref.subcategory)
  );
  return Array.from(subcategories).sort();
}
