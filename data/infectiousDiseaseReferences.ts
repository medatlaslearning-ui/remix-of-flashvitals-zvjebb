
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

export const infectiousDiseaseReferences: Reference[] = [
  // Bacterial Infections
  {
    id: 'bact-001',
    refNumber: 'REF001',
    year: 2024,
    citation: 'Infectious Diseases Society of America. (2024). Guidance on the treatment of antimicrobial-resistant gram-negative infections. Clinical Infectious Diseases.',
    link: 'https://academic.oup.com/cid',
    appliesTo: 'Antimicrobial-resistant gram-negative infections',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'bact-002',
    refNumber: 'REF002',
    year: 2023,
    citation: 'Centers for Disease Control and Prevention. (2023). Carbapenem-resistant Enterobacterales (CRE): Clinical overview. Emerging Infectious Diseases, 30(6).',
    link: 'https://wwwnc.cdc.gov/eid/',
    appliesTo: 'Carbapenem-resistant Enterobacterales',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'bact-003',
    refNumber: 'REF003',
    year: 2023,
    citation: 'Rao, S. N., Rhodes, N. J., & Kuti, J. L. (2023). Management of gram-negative bloodstream infections. Clinical Infectious Diseases, 76(5), 978–987.',
    link: 'https://academic.oup.com/cid/article/76/5/978/6825143',
    appliesTo: 'Gram-negative bloodstream infections',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'bact-004',
    refNumber: 'REF004',
    year: 2024,
    citation: 'Warner, D. M., et al. (2024). Streptococcus gallolyticus subsp. gallolyticus and its association with infective endocarditis and colorectal neoplasia. Journal of Clinical Microbiology, 62(3).',
    link: 'https://journals.asm.org/journal/jcm',
    appliesTo: 'Streptococcus gallolyticus, infective endocarditis',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },

  // Fungal Infections
  {
    id: 'fung-001',
    refNumber: 'REF005',
    year: 2021,
    citation: 'Pappas, P. G., et al. (2021). Clinical practice guideline for the management of candidiasis. Clinical Infectious Diseases, 72(4), e1–e50.',
    link: 'https://academic.oup.com/cid/article/72/4/e1/5890053',
    appliesTo: 'Candidiasis management',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-002',
    refNumber: 'REF006',
    year: 2023,
    citation: 'Patterson, T. F., et al. (2023). Practice guideline for the diagnosis and management of aspergillosis. Clinical Infectious Diseases, 76(5), e1–e65.',
    link: 'https://academic.oup.com/cid/article/76/5/e1/6884876',
    appliesTo: 'Aspergillosis diagnosis and management',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-003',
    refNumber: 'REF007',
    year: 2022,
    citation: 'Cornely, O. A., et al. (2022). Global guideline for the diagnosis and management of mucormycosis. The Lancet Infectious Diseases, 22(7), e405–e421.',
    link: 'https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(21)00699-2/fulltext',
    appliesTo: 'Mucormycosis diagnosis and management',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-004',
    refNumber: 'REF008',
    year: 2023,
    citation: 'Bahr, N. C., et al. (2023). Endemic mycoses: Current concepts in diagnosis and management. Open Forum Infectious Diseases, 10(6).',
    link: 'https://academic.oup.com/ofid',
    appliesTo: 'Endemic mycoses',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-005',
    refNumber: 'REF009',
    year: 2022,
    citation: 'Fisher, M. C., et al. (2022). Tackling the emerging threat of antifungal resistance. Nature Reviews Microbiology, 20(9), 557–571.',
    link: 'https://www.nature.com/articles/s41579-022-00720-1',
    appliesTo: 'Antifungal resistance',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },

  // Viral Infections
  {
    id: 'vir-001',
    refNumber: 'REF010',
    year: 2024,
    citation: 'Infectious Diseases Society of America. (2024). Living guideline on treatment and management of COVID-19. Clinical Infectious Diseases.',
    link: 'https://www.idsociety.org/practice-guideline/covid-19-guideline-treatment-and-management/',
    appliesTo: 'COVID-19 treatment and management',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-002',
    refNumber: 'REF011',
    year: 2023,
    citation: 'World Health Organization. (2023). Therapeutics and care for COVID-19. WHO Guideline Series.',
    link: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-therapeutics-2023.2',
    appliesTo: 'COVID-19 therapeutics',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-003',
    refNumber: 'REF012',
    year: 2024,
    citation: 'Ghany, M. G., et al. (2024). AASLD practice guidance on prevention, diagnosis, and treatment of chronic hepatitis B. Hepatology, 79(2), 1016–1044.',
    link: 'https://journals.lww.com/hep/fulltext/2024/02000/aasld_practice_guidance_on_prevention,_diagnosis,.1.aspx',
    appliesTo: 'Chronic hepatitis B',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-004',
    refNumber: 'REF013',
    year: 2023,
    citation: 'American Association for the Study of Liver Diseases & Infectious Diseases Society of America. (2023). HCV guidance: Recommendations for testing, managing, and treating hepatitis C. Hepatology, 77(3), 1095–1122.',
    link: 'https://www.hcvguidelines.org/',
    appliesTo: 'Hepatitis C testing and treatment',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-005',
    refNumber: 'REF014',
    year: 2022,
    citation: 'Panel on Antiretroviral Guidelines for Adults and Adolescents. (2022). Guidelines for the use of antiretroviral agents in adults and adolescents with HIV. NIH Clinical Guidelines.',
    link: 'https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/whats-new',
    appliesTo: 'HIV antiretroviral therapy',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },

  // Sexually Transmitted Infections
  {
    id: 'sti-001',
    refNumber: 'REF015',
    year: 2021,
    citation: 'Workowski, K. A., et al. (2021). Sexually transmitted infections treatment guidelines. MMWR Recommendations and Reports, 70(4), 1–187.',
    link: 'https://www.cdc.gov/mmwr/volumes/70/rr/rr7004a1.htm',
    appliesTo: 'STI treatment guidelines',
    category: 'Infectious Disease References',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'sti-002',
    refNumber: 'REF016',
    year: 2023,
    citation: 'Unemo, M., et al. (2023). Gonorrhea treatment in the era of antimicrobial resistance. The Lancet Infectious Diseases, 23(5), e160–e171.',
    link: 'https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(22)00690-4/fulltext',
    appliesTo: 'Gonorrhea antimicrobial resistance',
    category: 'Infectious Disease References',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'sti-003',
    refNumber: 'REF017',
    year: 2022,
    citation: 'Hook, E. W., & Bernstein, K. T. (2022). Syphilis resurgence: Clinical implications and public health response. New England Journal of Medicine, 386(10), 945–956.',
    link: 'https://www.nejm.org/doi/full/10.1056/NEJMra2108494',
    appliesTo: 'Syphilis clinical management',
    category: 'Infectious Disease References',
    subcategory: 'Sexually Transmitted Infections'
  },

  // Parasitic Infections
  {
    id: 'para-001',
    refNumber: 'REF018',
    year: 2022,
    citation: 'White, N. J., et al. (2022). Malaria. The Lancet, 400(10359), 171–190.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01185-7/fulltext',
    appliesTo: 'Malaria diagnosis and treatment',
    category: 'Infectious Disease References',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'para-002',
    refNumber: 'REF019',
    year: 2023,
    citation: 'Griffiths, E. C., et al. (2023). Neurocysticercosis: Diagnosis and management. The Lancet Neurology, 22(2), 142–154.',
    link: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(22)00464-1/fulltext',
    appliesTo: 'Neurocysticercosis',
    category: 'Infectious Disease References',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'para-003',
    refNumber: 'REF020',
    year: 2022,
    citation: 'Hotez, P. J., et al. (2022). Helminth infections and global health. Nature Reviews Disease Primers, 8(1).',
    link: 'https://www.nature.com/articles/s41572-022-00334-w',
    appliesTo: 'Helminth infections',
    category: 'Infectious Disease References',
    subcategory: 'Parasitic Infections'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return infectiousDiseaseReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return infectiousDiseaseReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return infectiousDiseaseReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  infectiousDiseaseReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}
