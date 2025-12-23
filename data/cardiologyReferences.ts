
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

export interface GuidelineWebsite {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
}

export const cardiologyReferences: Reference[] = [
  // Heart Failure
  {
    id: 'hf-001',
    refNumber: 'REF001',
    year: 2022,
    citation: 'Heidenreich, P. A., et al. (2022). 2022 AHA/ACC/HFSA guideline for the management of heart failure. Circulation, 145(18), e895–e1032.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063',
    appliesTo: 'Heart failure management',
    category: 'Cardiology References',
    subcategory: 'Heart Failure'
  },
  {
    id: 'hf-002',
    refNumber: 'REF002',
    year: 2023,
    citation: 'Bozkurt, B., et al. (2023). Universal definition and classification of heart failure. Journal of Cardiac Failure, 29(1), 1–23.',
    link: 'https://www.onlinejcf.com/article/S1071-9164(22)00125-6/fulltext',
    appliesTo: 'Heart failure definition and classification',
    category: 'Cardiology References',
    subcategory: 'Heart Failure'
  },

  // Ischemic Heart Disease
  {
    id: 'ihd-001',
    refNumber: 'REF003',
    year: 2020,
    citation: 'Knuuti, J., et al. (2020). 2019 ESC guidelines for the diagnosis and management of chronic coronary syndromes. European Heart Journal, 41(3), 407–477.',
    link: 'https://academic.oup.com/eurheartj/article/41/3/407/5556137',
    appliesTo: 'Chronic coronary syndromes',
    category: 'Cardiology References',
    subcategory: 'Ischemic Heart Disease'
  },
  {
    id: 'ihd-002',
    refNumber: 'REF004',
    year: 2022,
    citation: 'Lawton, J. S., et al. (2022). 2021 ACC/AHA/SCAI guideline for coronary artery revascularization. Circulation, 145(3), e18–e114.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001038',
    appliesTo: 'Coronary artery revascularization',
    category: 'Cardiology References',
    subcategory: 'Ischemic Heart Disease'
  },
  {
    id: 'ihd-003',
    refNumber: 'REF005',
    year: 2023,
    citation: 'Ibanez, B., et al. (2023). 2023 ESC guidelines for the management of acute coronary syndromes. European Heart Journal, 44(38), 3720–3826.',
    link: 'https://academic.oup.com/eurheartj/article/44/38/3720/7243210',
    appliesTo: 'Acute coronary syndromes',
    category: 'Cardiology References',
    subcategory: 'Ischemic Heart Disease'
  },

  // Arrhythmias
  {
    id: 'arr-001',
    refNumber: 'REF006',
    year: 2021,
    citation: 'Hindricks, G., et al. (2021). 2020 ESC guidelines for the diagnosis and management of atrial fibrillation. European Heart Journal, 42(5), 373–498.',
    link: 'https://academic.oup.com/eurheartj/article/42/5/373/5899003',
    appliesTo: 'Atrial fibrillation diagnosis and management',
    category: 'Cardiology References',
    subcategory: 'Arrhythmias'
  },
  {
    id: 'arr-002',
    refNumber: 'REF007',
    year: 2023,
    citation: 'January, C. T., et al. (2023). 2023 ACC/AHA guideline for the management of patients with atrial fibrillation. Circulation, 148(16), e1–e125.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193',
    appliesTo: 'Atrial fibrillation management',
    category: 'Cardiology References',
    subcategory: 'Arrhythmias'
  },
  {
    id: 'arr-003',
    refNumber: 'REF008',
    year: 2023,
    citation: 'Al-Khatib, S. M., et al. (2023). 2023 AHA/ACC/HRS guideline for the management of ventricular arrhythmias and the prevention of sudden cardiac death. Circulation, 148(8), e91–e221.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001171',
    appliesTo: 'Ventricular arrhythmias and sudden cardiac death prevention',
    category: 'Cardiology References',
    subcategory: 'Arrhythmias'
  },

  // Valvular Heart Disease
  {
    id: 'vhd-001',
    refNumber: 'REF009',
    year: 2021,
    citation: 'Otto, C. M., et al. (2021). 2020 ACC/AHA guideline for the management of patients with valvular heart disease. Circulation, 143(5), e72–e227.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923',
    appliesTo: 'Valvular heart disease management',
    category: 'Cardiology References',
    subcategory: 'Valvular Heart Disease'
  },
  {
    id: 'vhd-002',
    refNumber: 'REF010',
    year: 2022,
    citation: 'Vahanian, A., et al. (2022). 2021 ESC/EACTS guidelines for the management of valvular heart disease. European Heart Journal, 43(7), 561–632.',
    link: 'https://academic.oup.com/eurheartj/article/43/7/561/6358470',
    appliesTo: 'Valvular heart disease management',
    category: 'Cardiology References',
    subcategory: 'Valvular Heart Disease'
  },

  // Cardiomyopathies
  {
    id: 'cm-001',
    refNumber: 'REF011',
    year: 2023,
    citation: 'Elliott, P. M., et al. (2023). 2023 ESC guidelines for the management of cardiomyopathies. European Heart Journal, 44(37), 3503–3626.',
    link: 'https://academic.oup.com/eurheartj/article/44/37/3503/7246608',
    appliesTo: 'Cardiomyopathies management',
    category: 'Cardiology References',
    subcategory: 'Cardiomyopathies'
  },
  {
    id: 'cm-002',
    refNumber: 'REF012',
    year: 2021,
    citation: 'Towbin, J. A., et al. (2021). Incidence, causes, and outcomes of cardiomyopathies. The Lancet, 397(10285), 159–172.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)32612-8/fulltext',
    appliesTo: 'Cardiomyopathies epidemiology',
    category: 'Cardiology References',
    subcategory: 'Cardiomyopathies'
  },

  // Hypertension
  {
    id: 'htn-001',
    refNumber: 'REF013',
    year: 2023,
    citation: 'Whelton, P. K., et al. (2023). 2023 ACC/AHA guideline for the prevention, detection, evaluation, and management of high blood pressure in adults. Hypertension, 80(4), e1–e118.',
    link: 'https://www.ahajournals.org/doi/10.1161/HYP.0000000000000229',
    appliesTo: 'Hypertension management',
    category: 'Cardiology References',
    subcategory: 'Hypertension'
  },

  // Cardiovascular Emergencies
  {
    id: 'cve-001',
    refNumber: 'REF014',
    year: 2022,
    citation: 'O\'Gara, P. T., et al. (2022). Management of acute myocardial infarction complicated by cardiogenic shock. Journal of the American College of Cardiology, 80(18), 1727–1755.',
    link: 'https://www.jacc.org/doi/10.1016/j.jacc.2022.08.750',
    appliesTo: 'Cardiogenic shock management',
    category: 'Cardiology References',
    subcategory: 'Cardiovascular Emergencies'
  },
  {
    id: 'cve-002',
    refNumber: 'REF015',
    year: 2023,
    citation: 'Mebazaa, A., et al. (2023). Acute heart failure: Clinical presentation, management, and outcomes. The Lancet, 401(10387), 187–201.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)02026-9/fulltext',
    appliesTo: 'Acute heart failure management',
    category: 'Cardiology References',
    subcategory: 'Cardiovascular Emergencies'
  },

  // Pericardial Disease
  {
    id: 'pd-001',
    refNumber: 'REF016',
    year: 2021,
    citation: 'Adler, Y., et al. (2021). 2015 ESC guidelines for the diagnosis and management of pericardial diseases (focused update). European Heart Journal, 42(34), 3165–3210.',
    link: 'https://academic.oup.com/eurheartj/article/42/34/3165/6358457',
    appliesTo: 'Pericardial diseases diagnosis and management',
    category: 'Cardiology References',
    subcategory: 'Pericardial Disease'
  },

  // Congenital & Structural Heart Disease (Adult)
  {
    id: 'cshd-001',
    refNumber: 'REF017',
    year: 2019,
    citation: 'Stout, K. K., et al. (2019). 2018 AHA/ACC guideline for the management of adults with congenital heart disease. Circulation, 139(14), e698–e800.',
    link: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000603',
    appliesTo: 'Adult congenital heart disease management',
    category: 'Cardiology References',
    subcategory: 'Congenital & Structural Heart Disease (Adult)'
  }
];

export const cardiologyGuidelineWebsites: GuidelineWebsite[] = [
  {
    id: 'cardio-guide-001',
    name: 'American College of Cardiology (ACC)',
    url: 'https://www.acc.org',
    description: 'Clinical practice guidelines for cardiovascular disease',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-002',
    name: 'American Heart Association (AHA)',
    url: 'https://www.heart.org',
    description: 'Evidence-based cardiovascular guidelines and resources',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-003',
    name: 'European Society of Cardiology (ESC)',
    url: 'https://www.escardio.org',
    description: 'European cardiovascular disease guidelines',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-004',
    name: 'Heart Failure Society of America (HFSA)',
    url: 'https://www.hfsa.org',
    description: 'Heart failure clinical practice guidelines',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-005',
    name: 'Heart Rhythm Society (HRS)',
    url: 'https://www.hrsonline.org',
    description: 'Arrhythmia and electrophysiology guidelines',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-006',
    name: 'Society for Cardiovascular Angiography and Interventions (SCAI)',
    url: 'https://www.scai.org',
    description: 'Interventional cardiology guidelines',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-007',
    name: 'European Association for Cardio-Thoracic Surgery (EACTS)',
    url: 'https://www.eacts.org',
    description: 'Cardiac surgery guidelines',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'cardio-guide-008',
    name: 'Merck Manuals Professional - Cardiovascular Disorders',
    url: 'https://www.merckmanuals.com/professional/cardiovascular-disorders',
    description: 'Comprehensive medical reference for cardiovascular disorders including diagnosis, treatment, and management',
    category: 'Guideline and Authority Websites'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return cardiologyReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return cardiologyReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return cardiologyReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  cardiologyReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}

// Helper function to get guideline websites
export function getCardiologyGuidelineWebsites(): GuidelineWebsite[] {
  return cardiologyGuidelineWebsites;
}
