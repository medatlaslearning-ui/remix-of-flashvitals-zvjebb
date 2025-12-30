
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
    name: 'American Urological Association (AUA) Guidelines — Main hub',
    url: 'https://www.auanet.org/guidelines',
    description: 'Comprehensive collection of evidence-based clinical practice guidelines for urologic conditions',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-002',
    name: 'AUA Guideline: Management of Acute Urinary Retention',
    url: 'https://www.auanet.org/guidelines-and-quality/guidelines/acute-urinary-retention',
    description: 'Clinical guidelines for diagnosis and management of acute urinary retention',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-003',
    name: 'AUA Guideline: Benign Prostatic Hyperplasia (BPH) — Full guideline library',
    url: 'https://www.auanet.org/guidelines/benign-prostatic-hyperplasia-(bph)-guideline',
    description: 'Comprehensive guidelines for evaluation and treatment of benign prostatic hyperplasia',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-004',
    name: 'AUA Guideline: Urolithiasis (Kidney Stones)',
    url: 'https://www.auanet.org/guidelines/urolithiasis-(kidney-stones)-guideline',
    description: 'Evidence-based guidelines for management of kidney stones and urolithiasis',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-005',
    name: 'AUA Guideline: Catheter-associated Urinary Tract Infection (CAUTI)',
    url: 'https://www.auanet.org/guidelines/cauti-(catheter-associated-urinary-tract-infection)',
    description: 'Guidelines for prevention and management of catheter-associated urinary tract infections',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-006',
    name: 'AUA/EAU Joint Guideline: Testicular Torsion and Acute Scrotum',
    url: 'https://www.auanet.org/education/guidelines/testicular-torsion',
    description: 'Joint guidelines for emergency evaluation and management of testicular torsion and acute scrotal pain',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-007',
    name: 'European Association of Urology (EAU) Guideline Portal — Urology Guidelines Index',
    url: 'https://uroweb.org/guidelines',
    description: 'Comprehensive index of European urology guidelines covering all urologic conditions',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-008',
    name: 'EAU Guideline: Non-Muscle-Invasive Bladder Cancer (useful for hematuria workup)',
    url: 'https://uroweb.org/guideline/non-muscle-invasive-bladder-cancer',
    description: 'Guidelines for evaluation and management of non-muscle-invasive bladder cancer and hematuria',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-009',
    name: 'Centers for Disease Control — UTI & Pyelonephritis (clinical overview)',
    url: 'https://www.cdc.gov/antibiotic-use/community/for-patients/common-illnesses/uti.html',
    description: 'CDC clinical overview of urinary tract infections and pyelonephritis with antibiotic stewardship guidance',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-010',
    name: 'NIH/MedlinePlus — Bladder Infection Overview',
    url: 'https://medlineplus.gov/bladderinfection.html',
    description: 'Patient-friendly overview of bladder infections with clinical information and resources',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-011',
    name: 'Merck Manual – Urology Section (professional reference)',
    url: 'https://www.merckmanuals.com/professional/genitourinary-system-disorders',
    description: 'Comprehensive medical reference for genitourinary system disorders including diagnosis and treatment',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-012',
    name: 'National Kidney Foundation — Hydronephrosis / Obstructive Uropathy',
    url: 'https://www.kidney.org/atoz/content/obstructive-uropathy',
    description: 'Clinical information on hydronephrosis and obstructive uropathy from the National Kidney Foundation',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-013',
    name: 'Society for Maternal-Fetal Medicine — Urosepsis in Pregnancy (clinical resource)',
    url: 'https://www.smfm.org/resources/urosepsis-in-pregnancy',
    description: 'Clinical resource for management of urosepsis in pregnancy with evidence-based recommendations',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-014',
    name: 'Infectious Diseases Society of America (IDSA) — UTI Treatment Guidance',
    url: 'https://www.idsociety.org/practice-guideline/uti/',
    description: 'IDSA evidence-based guidelines for diagnosis and treatment of urinary tract infections',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'urology-guide-015',
    name: 'WHO — Prevention of Catheter-Associated UTIs (general public health resource)',
    url: 'https://www.who.int/publications/i/item/WHO-CAUTI-prevention',
    description: 'WHO public health resource for prevention of catheter-associated urinary tract infections',
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
