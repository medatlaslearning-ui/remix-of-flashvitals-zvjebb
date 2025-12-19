
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
  // Bacterial Infections References
  {
    id: 'ref-001',
    refNumber: 'REF001',
    year: 2024,
    citation: 'IDSA Guidance on the Treatment of Antimicrobial Resistant Gram-Negative Infections (updated guidance). Infectious Diseases Society of America.',
    link: 'https://www.idsociety.org/practice-guideline/amr-guidance/',
    appliesTo: 'Gram-negative organisms, ESBL, CRE, MDR treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-002',
    refNumber: 'REF002',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Intravascular Catheter-Related Infection: 2021 Update.',
    link: 'https://www.idsociety.org/practice-guideline/intravascular-catheter-infections-update/',
    appliesTo: 'Staphylococcus aureus, CoNS, line-associated bacteremia cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-003',
    refNumber: 'REF003',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Management of Methicillin-Resistant Staphylococcus aureus (MRSA).',
    link: 'https://www.idsociety.org/practice-guideline/mrsa/',
    appliesTo: 'MRSA definition, treatment, resistant organism cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-004',
    refNumber: 'REF004',
    year: 2023,
    citation: 'ESC Guidelines for the Management of Infective Endocarditis. European Society of Cardiology.',
    link: 'https://academic.oup.com/eurheartj/article/44/39/3948/7243107',
    appliesTo: 'Strep viridans, Strep bovis, Enterococcus, S. aureus endocarditis cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-005',
    refNumber: 'REF005',
    year: 2024,
    citation: 'CDC Clinical Guidance: Group A Streptococcal Infections (updated).',
    link: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/index.html',
    appliesTo: 'Strep pyogenes, necrotizing fasciitis, toxic shock cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-006',
    refNumber: 'REF006',
    year: 2024,
    citation: 'CDC Clinical Overview: Streptococcus pneumoniae Disease.',
    link: 'https://www.cdc.gov/pneumococcal/hcp/clinical-overview/index.html',
    appliesTo: 'Strep pneumoniae pneumonia, meningitis cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-007',
    refNumber: 'REF007',
    year: 2022,
    citation: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Clostridioides difficile Infection in Adults (Focused Update).',
    link: 'https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/',
    appliesTo: 'C. difficile organism and treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-008',
    refNumber: 'REF008',
    year: 2023,
    citation: 'SANJO Guideline for Management of Septic Arthritis in Native Joints (peer-reviewed).',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/',
    appliesTo: 'Staph, Strep septic arthritis cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-009',
    refNumber: 'REF009',
    year: 2024,
    citation: 'IDSA Guidance on Management of Enterococcal Infections (VRE considerations).',
    link: 'https://www.idsociety.org/practice-guideline/amr-guidance/',
    appliesTo: 'Enterococcus faecalis/faecium, VRE cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-010',
    refNumber: 'REF010',
    year: 2024,
    citation: 'Carbapenem-Resistant and Extended-Spectrum β-Lactamase–Producing Enterobacterales: Emerging Threats and Clinical Implications. CDC Emerging Infectious Diseases.',
    link: 'https://wwwnc.cdc.gov/eid/article/30/6/23-1734_article',
    appliesTo: 'ESBL/CRE overview + treatment context cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-011',
    refNumber: 'REF011',
    year: 2025,
    citation: 'CDC Carbapenem-Resistant Enterobacterales (CRE) Clinical Overview.',
    link: 'https://www.cdc.gov/cre/index.html',
    appliesTo: 'CRE organism and treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-012',
    refNumber: 'REF012',
    year: 2023,
    citation: 'IDSA Guidance on the Treatment of Antimicrobial Resistant Gram-Negative Infections: Gram-Negative Bloodstream Infections.',
    link: 'https://www.idsociety.org/practice-guideline/amr-guidance/',
    appliesTo: 'Gram-negative bloodstream infection cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-013',
    refNumber: 'REF013',
    year: 2022,
    citation: 'Streptococcus gallolyticus Bacteremia and Colorectal Cancer: A Systematic Review and Meta-Analysis (Open Access). Frontiers in Medicine.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9537866/',
    appliesTo: 'Strep bovis organism definition and clinical pearl cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  // Fungal Infections References
  {
    id: 'ref-fungal-001',
    refNumber: 'REF001',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Management of Candidiasis: 2016 Update with Ongoing Applicability and Resistance Considerations. Pappas PG, et al.',
    link: 'https://www.idsociety.org/practice-guideline/candidiasis/',
    appliesTo: 'Candida species, candidemia, invasive candidiasis cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-002',
    refNumber: 'REF002',
    year: 2023,
    citation: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Aspergillosis (Updated Evidence Review). Patterson TF, et al.',
    link: 'https://www.idsociety.org/practice-guideline/aspergillosis/',
    appliesTo: 'Aspergillus species, invasive aspergillosis, neutropenia-related cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-003',
    refNumber: 'REF003',
    year: 2022,
    citation: 'Definition, diagnosis, and management of COVID-19–associated mucormycosis. Muthu V, et al. The Lancet Infectious Diseases.',
    link: 'https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(22)00124-4/fulltext',
    appliesTo: 'Mucormycosis recognition + treatment principles cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-004',
    refNumber: 'REF004',
    year: 2024,
    citation: 'ECMM/ISHAM/ASM Global Guideline for the Diagnosis and Management of Cryptococcosis (Endorsed). IDSA practice guideline page.',
    link: 'https://www.idsociety.org/practice-guideline/Diagnosis-and-Management-of-Cryptococcosis/',
    appliesTo: 'Cryptococcus (all cards)',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-005',
    refNumber: 'REF005',
    year: 2023,
    citation: 'WHO Guidelines for the Diagnosis, Prevention, and Management of Cryptococcal Disease in HIV. World Health Organization.',
    link: 'https://www.who.int/publications/i/item/9789240052178',
    appliesTo: 'Cryptococcal meningitis, amphotericin-based therapy cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-006',
    refNumber: 'REF006',
    year: 2024,
    citation: 'Clinical Review: Endemic Mycoses (Histoplasmosis, Blastomycosis, Coccidioidomycosis). NEJM.',
    link: 'https://www.nejm.org/doi/full/10.1056/NEJMra2303457',
    appliesTo: 'Endemic fungal infections, geographic risk cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-007',
    refNumber: 'REF007',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Management of Histoplasmosis. Wheat LJ, et al.',
    link: 'https://www.idsociety.org/practice-guideline/histoplasmosis/',
    appliesTo: 'Histoplasma capsulatum cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-008',
    refNumber: 'REF008',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Treatment of Coccidioidomycosis. Galgiani JN, et al.',
    link: 'https://www.idsociety.org/practice-guideline/coccidioidomycosis/',
    appliesTo: 'Coccidioides species, desert exposure cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-009',
    refNumber: 'REF009',
    year: 2023,
    citation: 'ESCMID/ECMM Guideline for the Diagnosis and Management of Rare Invasive Yeast Infections.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37236741/',
    appliesTo: 'Non-albicans Candida, emerging fungal pathogens cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-010',
    refNumber: 'REF010',
    year: 2024,
    citation: 'Review: Antifungal Resistance—Mechanisms and Clinical Impact. Clinical Microbiology Reviews.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38320361/',
    appliesTo: 'Azole resistance, echinocandin resistance cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-011',
    refNumber: 'REF011',
    year: 2022,
    citation: 'Tackling the emerging threat of antifungal resistance to human health. Fisher MC, et al. Nature Reviews Microbiology.',
    link: 'https://www.nature.com/articles/s41579-022-00720-1',
    appliesTo: 'Antifungal resistance mechanisms + stewardship cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-012',
    refNumber: 'REF012',
    year: 2024,
    citation: 'Diagnosis and management of invasive fungal diseases in non-neutropenic ICU patients (review). (Open-access).',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10948617/',
    appliesTo: 'ICU fungal infection recognition + empiric therapy framework cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
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
