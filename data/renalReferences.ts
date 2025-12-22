
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

export const renalReferences: Reference[] = [
  // Acute Kidney Injury
  {
    id: 'aki-001',
    refNumber: 'REF001',
    year: 2024,
    citation: 'Kidney Disease: Improving Global Outcomes (KDIGO). (2024). KDIGO clinical practice guideline for acute kidney injury (update). Kidney International, 105(4), S1–S150.',
    link: 'https://kdigo.org/guidelines/acute-kidney-injury/',
    appliesTo: 'Acute kidney injury clinical practice guideline',
    category: 'Renal References',
    subcategory: 'Acute Kidney Injury'
  },
  {
    id: 'aki-002',
    refNumber: 'REF002',
    year: 2021,
    citation: 'Kellum, J. A., Romagnani, P., Ashuntantang, G., et al. (2021). Acute kidney injury. Nature Reviews Disease Primers, 7(1), 52.',
    link: 'https://www.nature.com/articles/s41572-021-00284-z',
    appliesTo: 'Acute kidney injury overview',
    category: 'Renal References',
    subcategory: 'Acute Kidney Injury'
  },
  {
    id: 'aki-003',
    refNumber: 'REF003',
    year: 2022,
    citation: 'Hoste, E. A. J., et al. (2022). Global epidemiology and outcomes of acute kidney injury. The Lancet, 399(10328), 1909–1924.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01330-6/fulltext',
    appliesTo: 'Acute kidney injury epidemiology and outcomes',
    category: 'Renal References',
    subcategory: 'Acute Kidney Injury'
  },

  // Chronic Kidney Disease
  {
    id: 'ckd-001',
    refNumber: 'REF004',
    year: 2023,
    citation: 'Kidney Disease: Improving Global Outcomes (KDIGO). (2023). KDIGO clinical practice guideline for the evaluation and management of chronic kidney disease (update). Kidney International, 104(4), S1–S115.',
    link: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
    appliesTo: 'Chronic kidney disease evaluation and management',
    category: 'Renal References',
    subcategory: 'Chronic Kidney Disease'
  },
  {
    id: 'ckd-002',
    refNumber: 'REF005',
    year: 2022,
    citation: 'Levin, A., et al. (2022). Global kidney health and chronic kidney disease. The Lancet, 399(10328), 1999–2012.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02143-3/fulltext',
    appliesTo: 'Global kidney health and chronic kidney disease',
    category: 'Renal References',
    subcategory: 'Chronic Kidney Disease'
  },
  {
    id: 'ckd-003',
    refNumber: 'REF006',
    year: 2023,
    citation: 'Webster, A. C., et al. (2023). Chronic kidney disease. The Lancet, 402(10398), 786–802.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)00193-3/fulltext',
    appliesTo: 'Chronic kidney disease overview',
    category: 'Renal References',
    subcategory: 'Chronic Kidney Disease'
  },

  // Glomerular Diseases
  {
    id: 'glom-001',
    refNumber: 'REF007',
    year: 2021,
    citation: 'Kidney Disease: Improving Global Outcomes (KDIGO). (2021). KDIGO clinical practice guideline for the management of glomerular diseases. Kidney International, 100(4), S1–S276.',
    link: 'https://kdigo.org/guidelines/glomerular-diseases/',
    appliesTo: 'Glomerular diseases management',
    category: 'Renal References',
    subcategory: 'Glomerular Diseases'
  },
  {
    id: 'glom-002',
    refNumber: 'REF008',
    year: 2023,
    citation: 'Fervenza, F. C., Glassock, R. J., & Sethi, S. (2023). Primary glomerular diseases. New England Journal of Medicine, 389(7), 642–656.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2302009',
    appliesTo: 'Primary glomerular diseases',
    category: 'Renal References',
    subcategory: 'Glomerular Diseases'
  },
  {
    id: 'glom-003',
    refNumber: 'REF009',
    year: 2021,
    citation: 'Rovin, B. H., et al. (2021). Lupus nephritis. Nature Reviews Disease Primers, 7(1), 49.',
    link: 'https://www.nature.com/articles/s41572-021-00285-y',
    appliesTo: 'Lupus nephritis',
    category: 'Renal References',
    subcategory: 'Glomerular Diseases'
  },

  // Electrolytes and Acid–Base Disorders
  {
    id: 'electro-001',
    refNumber: 'REF010',
    year: 2023,
    citation: 'Kraut, J. A., & Madias, N. E. (2023). Metabolic acidosis and alkalosis. New England Journal of Medicine, 388(1), 55–65.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2203045',
    appliesTo: 'Metabolic acidosis and alkalosis',
    category: 'Renal References',
    subcategory: 'Electrolytes and Acid–Base Disorders'
  },
  {
    id: 'electro-002',
    refNumber: 'REF011',
    year: 2022,
    citation: 'Mount, D. B., & Zandi-Nejad, K. (2022). Disorders of potassium balance. New England Journal of Medicine, 387(20), 1891–1902.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2110656',
    appliesTo: 'Disorders of potassium balance',
    category: 'Renal References',
    subcategory: 'Electrolytes and Acid–Base Disorders'
  },
  {
    id: 'electro-003',
    refNumber: 'REF012',
    year: 2023,
    citation: 'Verbalis, J. G., et al. (2023). Disorders of water balance: Hyponatremia and hypernatremia. The Lancet, 401(10378), 196–209.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01799-2/fulltext',
    appliesTo: 'Disorders of water balance',
    category: 'Renal References',
    subcategory: 'Electrolytes and Acid–Base Disorders'
  },

  // Renal Tubular and Interstitial Disorders
  {
    id: 'tubular-001',
    refNumber: 'REF013',
    year: 2022,
    citation: 'Perazella, M. A., & Rosner, M. H. (2022). Acute interstitial nephritis. New England Journal of Medicine, 387(26), 2444–2456.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2201112',
    appliesTo: 'Acute interstitial nephritis',
    category: 'Renal References',
    subcategory: 'Renal Tubular and Interstitial Disorders'
  },
  {
    id: 'tubular-002',
    refNumber: 'REF014',
    year: 2021,
    citation: 'Galla, J. H. (2021). Renal tubular acidosis. New England Journal of Medicine, 385(19), 1801–1813.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2104350',
    appliesTo: 'Renal tubular acidosis',
    category: 'Renal References',
    subcategory: 'Renal Tubular and Interstitial Disorders'
  },
  {
    id: 'tubular-003',
    refNumber: 'REF015',
    year: 2023,
    citation: 'Mehta, R. L., et al. (2023). Drug-induced kidney disease. Nature Reviews Nephrology, 19(3), 170–186.',
    link: 'https://www.nature.com/articles/s41581-022-00654-3',
    appliesTo: 'Drug-induced kidney disease',
    category: 'Renal References',
    subcategory: 'Renal Tubular and Interstitial Disorders'
  },

  // Renal Stones and Infections
  {
    id: 'stones-001',
    refNumber: 'REF016',
    year: 2022,
    citation: 'Khan, S. R., Pearle, M. S., Robertson, W. G., et al. (2022). Kidney stones. Nature Reviews Disease Primers, 8(1), 69.',
    link: 'https://www.nature.com/articles/s41572-022-00389-9',
    appliesTo: 'Kidney stones',
    category: 'Renal References',
    subcategory: 'Renal Stones and Infections'
  },
  {
    id: 'stones-002',
    refNumber: 'REF017',
    year: 2023,
    citation: 'Türk, C., et al. (2023). EAU guidelines on urolithiasis. European Urology, 84(3), 334–352.',
    link: 'https://uroweb.org/guidelines/urolithiasis',
    appliesTo: 'Urolithiasis guidelines',
    category: 'Renal References',
    subcategory: 'Renal Stones and Infections'
  },
  {
    id: 'stones-003',
    refNumber: 'REF018',
    year: 2023,
    citation: 'Johnson, J. R., & Russo, T. A. (2023). Acute pyelonephritis and complicated urinary tract infections. New England Journal of Medicine, 389(14), 1313–1325.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2216084',
    appliesTo: 'Acute pyelonephritis and complicated UTIs',
    category: 'Renal References',
    subcategory: 'Renal Stones and Infections'
  }
];

export const renalGuidelineWebsites: GuidelineWebsite[] = [
  {
    id: 'renal-guide-001',
    name: 'Kidney Disease: Improving Global Outcomes (KDIGO)',
    url: 'https://kdigo.org',
    description: 'Global organization developing and implementing evidence-based clinical practice guidelines for kidney disease',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-002',
    name: 'National Kidney Foundation (NKF)',
    url: 'https://www.kidney.org',
    description: 'Leading organization dedicated to the awareness, prevention, and treatment of kidney disease',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-003',
    name: 'American Society of Nephrology (ASN)',
    url: 'https://www.asn-online.org',
    description: 'Professional society for nephrologists providing education, research, and advocacy',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-004',
    name: 'European Renal Association (ERA)',
    url: 'https://www.era-online.org',
    description: 'European organization advancing nephrology through education, research, and clinical practice',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-005',
    name: 'International Society of Nephrology (ISN)',
    url: 'https://www.theisn.org',
    description: 'Global organization dedicated to advancing kidney health worldwide',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-006',
    name: 'American College of Physicians (ACP)',
    url: 'https://www.acponline.org',
    description: 'National organization of internists providing clinical guidelines and continuing medical education',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-007',
    name: 'Centers for Disease Control and Prevention (CDC)',
    url: 'https://www.cdc.gov',
    description: 'National public health institute providing disease prevention and health promotion guidelines',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'renal-guide-008',
    name: 'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)',
    url: 'https://www.niddk.nih.gov',
    description: 'NIH institute conducting and supporting research on diabetes, digestive, and kidney diseases',
    category: 'Guideline & Authority Websites'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return renalReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return renalReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return renalReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  renalReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}

// Helper function to get guideline websites
export function getRenalGuidelineWebsites(): GuidelineWebsite[] {
  return renalGuidelineWebsites;
}
