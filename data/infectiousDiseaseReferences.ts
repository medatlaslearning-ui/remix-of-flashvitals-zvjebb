
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
    link: '',
    appliesTo: 'Antimicrobial-resistant gram-negative infections',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'bact-002',
    refNumber: 'REF002',
    year: 2023,
    citation: 'Centers for Disease Control and Prevention. (2023). Carbapenem-resistant Enterobacterales (CRE): Clinical overview. Emerging Infectious Diseases, 30(6).',
    link: '',
    appliesTo: 'Carbapenem-resistant Enterobacterales',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'bact-003',
    refNumber: 'REF003',
    year: 2023,
    citation: 'Rao, S. N., Rhodes, N. J., & Kuti, J. L. (2023). Management of gram-negative bloodstream infections. Clinical Infectious Diseases, 76(5), 978–987.',
    link: '',
    appliesTo: 'Gram-negative bloodstream infections',
    category: 'Infectious Disease References',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'bact-004',
    refNumber: 'REF004',
    year: 2024,
    citation: 'Warner, D. M., et al. (2024). Streptococcus gallolyticus subsp. gallolyticus and its association with infective endocarditis and colorectal neoplasia. Journal of Clinical Microbiology, 62(3).',
    link: '',
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
    link: '',
    appliesTo: 'Candidiasis management',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-002',
    refNumber: 'REF006',
    year: 2023,
    citation: 'Patterson, T. F., et al. (2023). Practice guideline for the diagnosis and management of aspergillosis. Clinical Infectious Diseases, 76(5), e1–e65.',
    link: '',
    appliesTo: 'Aspergillosis diagnosis and management',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-003',
    refNumber: 'REF007',
    year: 2022,
    citation: 'Cornely, O. A., et al. (2022). Global guideline for the diagnosis and management of mucormycosis. The Lancet Infectious Diseases, 22(7), e405–e421.',
    link: '',
    appliesTo: 'Mucormycosis diagnosis and management',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-004',
    refNumber: 'REF008',
    year: 2023,
    citation: 'Bahr, N. C., et al. (2023). Endemic mycoses: Current concepts in diagnosis and management. Open Forum Infectious Diseases, 10(6).',
    link: '',
    appliesTo: 'Endemic mycoses',
    category: 'Infectious Disease References',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'fung-005',
    refNumber: 'REF009',
    year: 2022,
    citation: 'Fisher, M. C., et al. (2022). Tackling the emerging threat of antifungal resistance. Nature Reviews Microbiology, 20(9), 557–571.',
    link: '',
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
    link: '',
    appliesTo: 'COVID-19 treatment and management',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-002',
    refNumber: 'REF011',
    year: 2023,
    citation: 'World Health Organization. (2023). Therapeutics and care for COVID-19. WHO Guideline Series.',
    link: '',
    appliesTo: 'COVID-19 therapeutics',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-003',
    refNumber: 'REF012',
    year: 2024,
    citation: 'Ghany, M. G., et al. (2024). AASLD practice guidance on prevention, diagnosis, and treatment of chronic hepatitis B. Hepatology, 79(2), 1016–1044.',
    link: '',
    appliesTo: 'Chronic hepatitis B',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-004',
    refNumber: 'REF013',
    year: 2023,
    citation: 'American Association for the Study of Liver Diseases & Infectious Diseases Society of America. (2023). HCV guidance: Recommendations for testing, managing, and treating hepatitis C. Hepatology, 77(3), 1095–1122.',
    link: '',
    appliesTo: 'Hepatitis C testing and treatment',
    category: 'Infectious Disease References',
    subcategory: 'Viral Infections'
  },
  {
    id: 'vir-005',
    refNumber: 'REF014',
    year: 2022,
    citation: 'Panel on Antiretroviral Guidelines for Adults and Adolescents. (2022). Guidelines for the use of antiretroviral agents in adults and adolescents with HIV. NIH Clinical Guidelines.',
    link: '',
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
    link: '',
    appliesTo: 'STI treatment guidelines',
    category: 'Infectious Disease References',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'sti-002',
    refNumber: 'REF016',
    year: 2023,
    citation: 'Unemo, M., et al. (2023). Gonorrhea treatment in the era of antimicrobial resistance. The Lancet Infectious Diseases, 23(5), e160–e171.',
    link: '',
    appliesTo: 'Gonorrhea antimicrobial resistance',
    category: 'Infectious Disease References',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'sti-003',
    refNumber: 'REF017',
    year: 2022,
    citation: 'Hook, E. W., & Bernstein, K. T. (2022). Syphilis resurgence: Clinical implications and public health response. New England Journal of Medicine, 386(10), 945–956.',
    link: '',
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
    link: '',
    appliesTo: 'Malaria diagnosis and treatment',
    category: 'Infectious Disease References',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'para-002',
    refNumber: 'REF019',
    year: 2023,
    citation: 'Griffiths, E. C., et al. (2023). Neurocysticercosis: Diagnosis and management. The Lancet Neurology, 22(2), 142–154.',
    link: '',
    appliesTo: 'Neurocysticercosis',
    category: 'Infectious Disease References',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'para-003',
    refNumber: 'REF020',
    year: 2022,
    citation: 'Hotez, P. J., et al. (2022). Helminth infections and global health. Nature Reviews Disease Primers, 8(1).',
    link: '',
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
