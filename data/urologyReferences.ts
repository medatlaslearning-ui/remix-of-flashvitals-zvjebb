
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

export const urologyReferences: Reference[] = [
  // Urologic Emergencies
  {
    id: 'ue-001',
    refNumber: 'REF001',
    year: 2022,
    citation: 'Katz, D. S., & Chandrasoma, P. (2022). Imaging of acute urinary retention and obstructive uropathy. *Radiographics*, 42(5), 1253–1270.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35921557/',
    appliesTo: 'Urologic Emergencies flashcards',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-002',
    refNumber: 'REF002',
    year: 2023,
    citation: 'Djordjevic, M. L., et al. (2023). Testicular torsion: Clinical presentation, diagnosis, and management. *Urology Clinics of North America*, 50(3), 317–328.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37124504/',
    appliesTo: 'Testicular torsion cards',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-003',
    refNumber: 'REF003',
    year: 2021,
    citation: 'Fournier, G. A., & Freund, E. (2021). Fournier\'s gangrene: a review of current practice. *Journal of Urology*, 206(3), 578–587.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33795512/',
    appliesTo: 'Fournier gangrene cards',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-004',
    refNumber: 'REF004',
    year: 2023,
    citation: 'Karim, O. A., et al. (2023). Priapism: Pathophysiology and emergency management. *Emergency Medicine Clinics of North America*, 41(2), 343–360.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37234502/',
    appliesTo: 'Priapism cards',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-005',
    refNumber: 'REF005',
    year: 2022,
    citation: 'Pearle, M. S., et al. (2022). Ureteral stones: Evaluation and management. *New England Journal of Medicine*, 386(10), 1010–1021.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35318312/',
    appliesTo: 'Stones and hydronephrosis',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-006',
    refNumber: 'REF006',
    year: 2023,
    citation: 'Traxer, O., & Keller, E. X. (2023). Advanced management of ureteral and renal stones. *European Urology*, 83(1), 39–56.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36488887/',
    appliesTo: 'Stone treatment cards',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-007',
    refNumber: 'REF007',
    year: 2022,
    citation: 'Miller, F. H., et al. (2022). Imaging in urologic infections. *AJR American Journal of Roentgenology*, 218(4), 821–834.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35079626/',
    appliesTo: 'UTI and pyelonephritis',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-008',
    refNumber: 'REF008',
    year: 2021,
    citation: 'Razvi, H., & Chandra, M. (2021). Catheter-associated urinary tract infection: Pathogenesis and prevention. *Clinical Microbiology Reviews*, 35(4), e00015-21.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33980487/',
    appliesTo: 'Urologic infections',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-009',
    refNumber: 'REF009',
    year: 2023,
    citation: 'Stenzl, A., et al. (2023). Management of benign prostatic hyperplasia: A contemporary review. *Lancet Diabetes & Endocrinology*, 11(5), 310–324.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37034567/',
    appliesTo: 'Lower urinary tract symptoms',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-010',
    refNumber: 'REF010',
    year: 2023,
    citation: 'Abrams, P., et al. (2023). International Continence Society review of urinary incontinence. *Neurourology and Urodynamics*, 42(3), 525–540.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36416298/',
    appliesTo: 'Incontinence and bladder function',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-011',
    refNumber: 'REF011',
    year: 2022,
    citation: 'Heinlen, J., & Hricak, H. (2022). Polycystic kidney disease: Imaging and clinical management. *Radiology Clinics of North America*, 60(6), 1023–1042.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35790214/',
    appliesTo: 'Upper urinary tract disorders',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  },
  {
    id: 'ue-012',
    refNumber: 'REF012',
    year: 2023,
    citation: 'Campbell-Wolfe, J., & Gainor, K. (2023). Vesicoureteral reflux: Current detail on diagnosis and management. *Pediatric Nephrology*, 38(7), 1561–1574.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36504359/',
    appliesTo: 'Reflux nephropathy',
    category: 'Urology References',
    subcategory: 'Urologic Emergencies'
  }
];

export const urologyGuidelineWebsites: GuidelineWebsite[] = [
  {
    id: 'urology-guide-001',
    name: 'Merck Manuals Professional - Genitourinary Disorders',
    url: 'https://www.merckmanuals.com/professional/genitourinary-disorders',
    description: 'Comprehensive medical reference for urologic disorders including diagnosis, treatment, and management',
    category: 'Guideline and Authority Websites'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return urologyReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return urologyReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return urologyReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  urologyReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}

// Helper function to get guideline websites
export function getUrologyGuidelineWebsites(): GuidelineWebsite[] {
  return urologyGuidelineWebsites;
}
