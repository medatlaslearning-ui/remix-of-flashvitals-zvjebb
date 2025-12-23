
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

export const emergencyMedicineReferences: Reference[] = [
  // Trauma Systems and Initial Assessment
  {
    id: 'trauma-001',
    refNumber: 'REF001',
    year: 2023,
    citation: 'American College of Surgeons Committee on Trauma. (2023). Advanced Trauma Life Support (ATLS) student course manual (11th ed.). American College of Surgeons.',
    link: 'https://www.facs.org/quality-programs/trauma/atls/',
    appliesTo: 'Advanced Trauma Life Support protocols',
    category: 'Emergency Medicine References',
    subcategory: 'Trauma Systems and Initial Assessment'
  },
  {
    id: 'trauma-002',
    refNumber: 'REF002',
    year: 2022,
    citation: 'Bouzat, P., et al. (2022). Advanced trauma life support and beyond: Updates in trauma resuscitation. The Lancet, 399(10328), 1985–1997.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00562-6/fulltext',
    appliesTo: 'Updates in trauma resuscitation',
    category: 'Emergency Medicine References',
    subcategory: 'Trauma Systems and Initial Assessment'
  },

  // Airway, Breathing, Circulation (ABCDE)
  {
    id: 'abcde-001',
    refNumber: 'REF003',
    year: 2021,
    citation: 'Myers, L. A., et al. (2021). Airway management in trauma and emergency care. New England Journal of Medicine, 384(7), 656–664.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2010173',
    appliesTo: 'Airway management in trauma and emergency care',
    category: 'Emergency Medicine References',
    subcategory: 'Airway, Breathing, Circulation (ABCDE)'
  },
  {
    id: 'abcde-002',
    refNumber: 'REF004',
    year: 2023,
    citation: 'Vincent, J.-L., & De Backer, D. (2023). Circulatory shock. New England Journal of Medicine, 389(18), 1726–1737.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2212650',
    appliesTo: 'Circulatory shock management',
    category: 'Emergency Medicine References',
    subcategory: 'Airway, Breathing, Circulation (ABCDE)'
  },
  {
    id: 'abcde-003',
    refNumber: 'REF005',
    year: 2023,
    citation: 'Rossaint, R., et al. (2023). The European guideline on management of major bleeding and coagulopathy following trauma (6th ed.). Critical Care, 27(1), 1–68.',
    link: 'https://ccforum.biomedcentral.com/articles/10.1186/s13054-023-04327-7',
    appliesTo: 'Management of major bleeding and coagulopathy following trauma',
    category: 'Emergency Medicine References',
    subcategory: 'Airway, Breathing, Circulation (ABCDE)'
  },

  // Hemorrhage and Massive Transfusion
  {
    id: 'hemorrhage-001',
    refNumber: 'REF006',
    year: 2022,
    citation: 'Holcomb, J. B., et al. (2022). Damage control resuscitation. Journal of Trauma and Acute Care Surgery, 92(2), e1–e18.',
    link: 'https://journals.lww.com/jtrauma/fulltext/2022/02000/damage_control_resuscitation.1.aspx',
    appliesTo: 'Damage control resuscitation protocols',
    category: 'Emergency Medicine References',
    subcategory: 'Hemorrhage and Massive Transfusion'
  },
  {
    id: 'hemorrhage-002',
    refNumber: 'REF007',
    year: 2023,
    citation: 'Cannon, J. W. (2023). Hemorrhagic shock. New England Journal of Medicine, 388(10), 946–956.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2212650',
    appliesTo: 'Hemorrhagic shock management',
    category: 'Emergency Medicine References',
    subcategory: 'Hemorrhage and Massive Transfusion'
  },

  // Cardiovascular Emergencies
  {
    id: 'cardiovascular-001',
    refNumber: 'REF008',
    year: 2022,
    citation: 'O\'Gara, P. T., et al. (2022). Acute myocardial infarction complicated by cardiogenic shock. Journal of the American College of Cardiology, 80(18), 1727–1755.',
    link: 'https://www.jacc.org/doi/10.1016/j.jacc.2022.08.757',
    appliesTo: 'Acute myocardial infarction complicated by cardiogenic shock',
    category: 'Emergency Medicine References',
    subcategory: 'Cardiovascular Emergencies'
  },
  {
    id: 'cardiovascular-002',
    refNumber: 'REF009',
    year: 2023,
    citation: 'Mebazaa, A., et al. (2023). Acute heart failure in the emergency setting. The Lancet, 401(10387), 187–201.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)02612-9/fulltext',
    appliesTo: 'Acute heart failure in the emergency setting',
    category: 'Emergency Medicine References',
    subcategory: 'Cardiovascular Emergencies'
  },

  // Neurologic and Toxicologic Emergencies
  {
    id: 'neurologic-001',
    refNumber: 'REF010',
    year: 2023,
    citation: 'Hirsch, L. J., et al. (2023). Management of status epilepticus. New England Journal of Medicine, 389(10), 899–910.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2215715',
    appliesTo: 'Management of status epilepticus',
    category: 'Emergency Medicine References',
    subcategory: 'Neurologic and Toxicologic Emergencies'
  },
  {
    id: 'neurologic-002',
    refNumber: 'REF011',
    year: 2023,
    citation: 'Nelson, L. S., et al. (2023). Poisoning and drug overdose. New England Journal of Medicine, 389(5), 435–447.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2214851',
    appliesTo: 'Poisoning and drug overdose management',
    category: 'Emergency Medicine References',
    subcategory: 'Neurologic and Toxicologic Emergencies'
  },
  {
    id: 'neurologic-003',
    refNumber: 'REF012',
    year: 2022,
    citation: 'Sutter, R., et al. (2022). Acute encephalopathy and coma. The Lancet Neurology, 21(4), 317–329.',
    link: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(22)00013-4/fulltext',
    appliesTo: 'Acute encephalopathy and coma management',
    category: 'Emergency Medicine References',
    subcategory: 'Neurologic and Toxicologic Emergencies'
  },

  // Sepsis and Infectious Emergencies
  {
    id: 'sepsis-001',
    refNumber: 'REF013',
    year: 2021,
    citation: 'Evans, L., et al. (2021). Surviving Sepsis Campaign: International guidelines for management of sepsis and septic shock. Intensive Care Medicine, 47(11), 1181–1247.',
    link: 'https://link.springer.com/article/10.1007/s00134-021-06506-y',
    appliesTo: 'International guidelines for management of sepsis and septic shock',
    category: 'Emergency Medicine References',
    subcategory: 'Sepsis and Infectious Emergencies'
  },
  {
    id: 'sepsis-002',
    refNumber: 'REF014',
    year: 2023,
    citation: 'Rudd, K. E., et al. (2023). Global epidemiology of sepsis. The Lancet, 401(10377), 139–151.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)02185-0/fulltext',
    appliesTo: 'Global epidemiology of sepsis',
    category: 'Emergency Medicine References',
    subcategory: 'Sepsis and Infectious Emergencies'
  },

  // Thoracic and Abdominal Emergencies
  {
    id: 'thoracic-001',
    refNumber: 'REF015',
    year: 2022,
    citation: 'Kirkpatrick, A. W., et al. (2022). Blunt and penetrating thoracic trauma. New England Journal of Medicine, 387(2), 162–173.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2117184',
    appliesTo: 'Blunt and penetrating thoracic trauma management',
    category: 'Emergency Medicine References',
    subcategory: 'Thoracic and Abdominal Emergencies'
  },
  {
    id: 'thoracic-002',
    refNumber: 'REF016',
    year: 2023,
    citation: 'Sartelli, M., et al. (2023). Abdominal trauma: Diagnosis and management. World Journal of Emergency Surgery, 18(1), 1–15.',
    link: 'https://wjes.biomedcentral.com/articles/10.1186/s13017-023-00478-3',
    appliesTo: 'Abdominal trauma diagnosis and management',
    category: 'Emergency Medicine References',
    subcategory: 'Thoracic and Abdominal Emergencies'
  },

  // Environmental and Special Populations
  {
    id: 'environmental-001',
    refNumber: 'REF017',
    year: 2022,
    citation: 'Bouchama, A., et al. (2022). Heat-related illness. New England Journal of Medicine, 387(6), 541–548.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2112524',
    appliesTo: 'Heat-related illness management',
    category: 'Emergency Medicine References',
    subcategory: 'Environmental and Special Populations'
  },
  {
    id: 'environmental-002',
    refNumber: 'REF018',
    year: 2022,
    citation: 'Tintinalli, J. E., et al. (2022). Emergency medicine: A comprehensive study guide (9th ed.). McGraw-Hill.',
    link: 'https://accessemergencymedicine.mhmedical.com/book.aspx?bookID=2969',
    appliesTo: 'Comprehensive emergency medicine reference',
    category: 'Emergency Medicine References',
    subcategory: 'Environmental and Special Populations'
  }
];

export const emergencyMedicineGuidelineWebsites: GuidelineWebsite[] = [
  {
    id: 'em-guide-001',
    name: 'American College of Surgeons (ACS) – Trauma Programs',
    url: 'https://www.facs.org',
    description: 'Leading organization for trauma care standards, ATLS training, and trauma center verification',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-002',
    name: 'American College of Emergency Physicians (ACEP)',
    url: 'https://www.acep.org',
    description: 'Professional organization for emergency physicians providing clinical policies and practice guidelines',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-003',
    name: 'Society of Critical Care Medicine (SCCM)',
    url: 'https://www.sccm.org',
    description: 'Multidisciplinary organization dedicated to improving outcomes for critically ill patients',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-004',
    name: 'Eastern Association for the Surgery of Trauma (EAST)',
    url: 'https://www.east.org',
    description: 'Organization focused on trauma surgery research, education, and practice guidelines',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-005',
    name: 'World Trauma Association (WTA)',
    url: 'https://www.worldtraumaassociation.org',
    description: 'International organization promoting trauma care education and research worldwide',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-006',
    name: 'American Heart Association (AHA)',
    url: 'https://www.heart.org',
    description: 'Leading organization for cardiovascular emergency care guidelines and resuscitation protocols',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-007',
    name: 'Surviving Sepsis Campaign',
    url: 'https://www.survivingsepsis.org',
    description: 'Global initiative providing evidence-based guidelines for sepsis management',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-008',
    name: 'European Resuscitation Council (ERC)',
    url: 'https://www.erc.edu',
    description: 'European organization developing resuscitation guidelines and training programs',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-009',
    name: 'National Association of EMS Physicians (NAEMSP)',
    url: 'https://naemsp.org',
    description: 'Professional organization for EMS physicians providing prehospital care guidelines',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-010',
    name: 'Centers for Disease Control and Prevention (CDC)',
    url: 'https://www.cdc.gov',
    description: 'Federal agency providing public health guidance, disease surveillance, and emergency preparedness',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'em-guide-011',
    name: 'Merck Manuals Professional - Injuries and Poisoning',
    url: 'https://www.merckmanuals.com/professional/injuries-poisoning',
    description: 'Comprehensive medical reference for injuries, poisoning, and emergency conditions including diagnosis, treatment, and management',
    category: 'Guideline & Authority Websites'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return emergencyMedicineReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return emergencyMedicineReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return emergencyMedicineReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  emergencyMedicineReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}

// Helper function to get guideline websites
export function getEmergencyMedicineGuidelineWebsites(): GuidelineWebsite[] {
  return emergencyMedicineGuidelineWebsites;
}
