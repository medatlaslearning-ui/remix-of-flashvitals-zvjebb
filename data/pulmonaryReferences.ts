
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

export const pulmonaryReferences: Reference[] = [
  // Airway Disorders
  {
    id: 'airway-001',
    refNumber: 'REF001',
    year: 2023,
    citation: 'Global Initiative for Asthma. (2023). Global strategy for asthma management and prevention. GINA Report.',
    link: 'https://ginasthma.org/reports/',
    appliesTo: 'Asthma management and prevention',
    category: 'Pulmonary References',
    subcategory: 'Airway Disorders'
  },
  {
    id: 'airway-002',
    refNumber: 'REF002',
    year: 2024,
    citation: 'Global Initiative for Chronic Obstructive Lung Disease. (2024). Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease. GOLD Report.',
    link: 'https://goldcopd.org/2024-gold-report/',
    appliesTo: 'COPD diagnosis, management, and prevention',
    category: 'Pulmonary References',
    subcategory: 'Airway Disorders'
  },
  {
    id: 'airway-003',
    refNumber: 'REF003',
    year: 2022,
    citation: 'Reddel, H. K., et al. (2022). Management of asthma in adults. The Lancet, 399(10333), 803–820.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02788-0/fulltext',
    appliesTo: 'Adult asthma management',
    category: 'Pulmonary References',
    subcategory: 'Airway Disorders'
  },

  // Pulmonary Infections
  {
    id: 'infection-001',
    refNumber: 'REF004',
    year: 2019,
    citation: 'Metlay, J. P., et al. (2019). Diagnosis and treatment of adults with community-acquired pneumonia. American Journal of Respiratory and Critical Care Medicine, 200(7), e45–e67.',
    link: 'https://www.atsjournals.org/doi/10.1164/rccm.201908-1581ST',
    appliesTo: 'Community-acquired pneumonia diagnosis and treatment',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Infections'
  },
  {
    id: 'infection-002',
    refNumber: 'REF005',
    year: 2023,
    citation: 'Kalil, A. C., et al. (2023). Management of adults with hospital-acquired and ventilator-associated pneumonia. Clinical Infectious Diseases, 76(3), e1–e59.',
    link: 'https://academic.oup.com/cid/article/76/3/e1/6960391',
    appliesTo: 'Hospital-acquired and ventilator-associated pneumonia management',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Infections'
  },
  {
    id: 'infection-003',
    refNumber: 'REF006',
    year: 2022,
    citation: 'Mandell, L. A., & Niederman, M. S. (2022). Aspiration pneumonia. New England Journal of Medicine, 386(7), 651–663.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2203364',
    appliesTo: 'Aspiration pneumonia',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Infections'
  },

  // Pulmonary Vascular Disorders
  {
    id: 'vascular-001',
    refNumber: 'REF007',
    year: 2020,
    citation: 'Konstantinides, S. V., et al. (2020). 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. European Heart Journal, 41(4), 543–603.',
    link: 'https://academic.oup.com/eurheartj/article/41/4/543/5556136',
    appliesTo: 'Acute pulmonary embolism diagnosis and management',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Vascular Disorders'
  },
  {
    id: 'vascular-002',
    refNumber: 'REF008',
    year: 2021,
    citation: 'Kearon, C., et al. (2021). Antithrombotic therapy for venous thromboembolism disease. Chest, 160(6), e545–e608.',
    link: 'https://journal.chestnet.org/article/S0012-3692(21)03801-1/fulltext',
    appliesTo: 'Venous thromboembolism antithrombotic therapy',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Vascular Disorders'
  },
  {
    id: 'vascular-003',
    refNumber: 'REF009',
    year: 2022,
    citation: 'Humbert, M., et al. (2022). Pathophysiology and treatment of pulmonary hypertension. The Lancet Respiratory Medicine, 10(2), 159–174.',
    link: 'https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(21)00517-9/fulltext',
    appliesTo: 'Pulmonary hypertension pathophysiology and treatment',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Vascular Disorders'
  },

  // Parenchymal / Interstitial Lung Disease
  {
    id: 'parenchymal-001',
    refNumber: 'REF010',
    year: 2022,
    citation: 'Raghu, G., et al. (2022). Diagnosis of idiopathic pulmonary fibrosis: An official ATS/ERS/JRS/ALAT guideline update. American Journal of Respiratory and Critical Care Medicine, 205(9), e18–e47.',
    link: 'https://www.atsjournals.org/doi/10.1164/rccm.202202-0399ST',
    appliesTo: 'Idiopathic pulmonary fibrosis diagnosis',
    category: 'Pulmonary References',
    subcategory: 'Parenchymal / Interstitial Lung Disease'
  },
  {
    id: 'parenchymal-002',
    refNumber: 'REF011',
    year: 2023,
    citation: 'Cottin, V., et al. (2023). Progressive pulmonary fibrosis. New England Journal of Medicine, 388(22), 2116–2127.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2202254',
    appliesTo: 'Progressive pulmonary fibrosis',
    category: 'Pulmonary References',
    subcategory: 'Parenchymal / Interstitial Lung Disease'
  },
  {
    id: 'parenchymal-003',
    refNumber: 'REF012',
    year: 2022,
    citation: 'Travis, W. D., et al. (2022). Interstitial lung disease classification and approach. The Lancet Respiratory Medicine, 10(5), 507–523.',
    link: 'https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(21)00537-4/fulltext',
    appliesTo: 'Interstitial lung disease classification',
    category: 'Pulmonary References',
    subcategory: 'Parenchymal / Interstitial Lung Disease'
  },

  // Pleural Disorders
  {
    id: 'pleural-001',
    refNumber: 'REF013',
    year: 2023,
    citation: 'Light, R. W. (2023). Pleural effusions. New England Journal of Medicine, 388(8), 740–751.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2204699',
    appliesTo: 'Pleural effusions',
    category: 'Pulmonary References',
    subcategory: 'Pleural Disorders'
  },
  {
    id: 'pleural-002',
    refNumber: 'REF014',
    year: 2022,
    citation: 'Feller-Kopman, D., et al. (2022). Management of malignant pleural effusions. Chest, 161(6), 1700–1715.',
    link: 'https://journal.chestnet.org/article/S0012-3692(21)04634-9/fulltext',
    appliesTo: 'Malignant pleural effusions management',
    category: 'Pulmonary References',
    subcategory: 'Pleural Disorders'
  },
  {
    id: 'pleural-003',
    refNumber: 'REF015',
    year: 2021,
    citation: 'Maskell, N. A., et al. (2021). Management of pleural infection in adults. Thorax, 76(1), 76–87.',
    link: 'https://thorax.bmj.com/content/76/1/76',
    appliesTo: 'Pleural infection management',
    category: 'Pulmonary References',
    subcategory: 'Pleural Disorders'
  },

  // Pulmonary Emergencies and Critical Care
  {
    id: 'emergency-001',
    refNumber: 'REF016',
    year: 2021,
    citation: 'ARDS Definition Task Force. (2021). Acute respiratory distress syndrome: The Berlin definition revisited. Intensive Care Medicine, 47(1), 1–8.',
    link: 'https://link.springer.com/article/10.1007/s00134-020-06331-1',
    appliesTo: 'ARDS definition',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Emergencies and Critical Care'
  },
  {
    id: 'emergency-002',
    refNumber: 'REF017',
    year: 2023,
    citation: 'Fan, E., et al. (2023). Acute respiratory distress syndrome: Advances in diagnosis and management. JAMA, 329(9), 755–767.',
    link: 'https://jamanetwork.com/journals/jama/fullarticle/2801724',
    appliesTo: 'ARDS diagnosis and management',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Emergencies and Critical Care'
  },
  {
    id: 'emergency-003',
    refNumber: 'REF018',
    year: 2022,
    citation: 'Brochard, L., et al. (2022). Mechanical ventilation in acute respiratory failure. New England Journal of Medicine, 387(1), 36–46.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2116565',
    appliesTo: 'Mechanical ventilation in acute respiratory failure',
    category: 'Pulmonary References',
    subcategory: 'Pulmonary Emergencies and Critical Care'
  },

  // Sleep and Hypoventilation Disorders
  {
    id: 'sleep-001',
    refNumber: 'REF019',
    year: 2023,
    citation: 'Patil, S. P., et al. (2023). Obstructive sleep apnea: Diagnosis and management. JAMA, 330(7), 647–658.',
    link: 'https://jamanetwork.com/journals/jama/fullarticle/2808300',
    appliesTo: 'Obstructive sleep apnea diagnosis and management',
    category: 'Pulmonary References',
    subcategory: 'Sleep and Hypoventilation Disorders'
  },
  {
    id: 'sleep-002',
    refNumber: 'REF020',
    year: 2022,
    citation: 'Mokhlesi, B., et al. (2022). Obesity hypoventilation syndrome. Chest, 161(2), 474–487.',
    link: 'https://journal.chestnet.org/article/S0012-3692(21)03589-4/fulltext',
    appliesTo: 'Obesity hypoventilation syndrome',
    category: 'Pulmonary References',
    subcategory: 'Sleep and Hypoventilation Disorders'
  }
];

export const pulmonaryGuidelineWebsites: GuidelineWebsite[] = [
  {
    id: 'guideline-001',
    name: 'American Thoracic Society (ATS)',
    url: 'https://www.thoracic.org',
    description: 'Leading organization for respiratory medicine, providing clinical practice guidelines and research.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-002',
    name: 'European Respiratory Society (ERS)',
    url: 'https://www.ersnet.org',
    description: 'International organization dedicated to respiratory medicine and science.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-003',
    name: 'Global Initiative for Asthma (GINA)',
    url: 'https://ginasthma.org',
    description: 'Global resource for asthma management and prevention guidelines.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-004',
    name: 'Global Initiative for Chronic Obstructive Lung Disease (GOLD)',
    url: 'https://goldcopd.org',
    description: 'International guidelines for COPD diagnosis, management, and prevention.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-005',
    name: 'American College of Chest Physicians (CHEST)',
    url: 'https://www.chestnet.org',
    description: 'Professional organization for chest medicine and critical care.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-006',
    name: 'National Heart, Lung, and Blood Institute (NHLBI)',
    url: 'https://www.nhlbi.nih.gov',
    description: 'NIH institute providing research and guidelines for heart, lung, and blood diseases.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-007',
    name: 'European Society of Cardiology (ESC) – Pulmonary Hypertension',
    url: 'https://www.escardio.org',
    description: 'European guidelines for cardiovascular diseases including pulmonary hypertension.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-008',
    name: 'Society of Critical Care Medicine (SCCM)',
    url: 'https://www.sccm.org',
    description: 'Professional organization for critical care medicine and intensive care.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-009',
    name: 'World Health Organization (WHO)',
    url: 'https://www.who.int',
    description: 'Global health authority providing international health guidelines and standards.',
    category: 'Guideline and Authority Websites'
  },
  {
    id: 'guideline-010',
    name: 'Merck Manuals Professional - Pulmonary Disorders',
    url: 'https://www.merckmanuals.com/professional/pulmonary-disorders',
    description: 'Comprehensive medical reference for pulmonary disorders including diagnosis, treatment, and management',
    category: 'Guideline and Authority Websites'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return pulmonaryReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return pulmonaryReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return pulmonaryReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  pulmonaryReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}

// Helper function to get guideline websites
export function getPulmonaryGuidelineWebsites(): GuidelineWebsite[] {
  return pulmonaryGuidelineWebsites;
}
