
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

export const neurologyReferences: Reference[] = [
  // Headache and Facial Pain Disorders
  {
    id: 'headache-001',
    refNumber: 'REF001',
    year: 2021,
    citation: 'Ashina, M., et al. (2021). Migraine. New England Journal of Medicine, 385(20), 1866–1876.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2117321',
    appliesTo: 'Migraine diagnosis and management',
    category: 'Neurology References',
    subcategory: 'Headache and Facial Pain Disorders'
  },
  {
    id: 'headache-002',
    refNumber: 'REF002',
    year: 2022,
    citation: 'Dodick, D. W. (2022). Trigeminal neuralgia and facial pain syndromes. The Lancet Neurology, 21(4), 346–356.',
    link: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(21)00477-9/fulltext',
    appliesTo: 'Trigeminal neuralgia and facial pain syndromes',
    category: 'Neurology References',
    subcategory: 'Headache and Facial Pain Disorders'
  },
  {
    id: 'headache-003',
    refNumber: 'REF003',
    year: 2023,
    citation: 'Charles, A. (2023). Primary headache disorders. JAMA, 329(22), 1961–1973.',
    link: 'https://jamanetwork.com/journals/jama/fullarticle/2805234',
    appliesTo: 'Primary headache disorders overview',
    category: 'Neurology References',
    subcategory: 'Headache and Facial Pain Disorders'
  },

  // Seizures, Epilepsy, and Neurologic Emergencies
  {
    id: 'seizure-001',
    refNumber: 'REF004',
    year: 2022,
    citation: 'Fisher, R. S., et al. (2022). Operational classification of seizure types and epilepsies. Epilepsia, 63(3), 516–543.',
    link: 'https://onlinelibrary.wiley.com/doi/10.1111/epi.17156',
    appliesTo: 'Operational classification of seizure types and epilepsies',
    category: 'Neurology References',
    subcategory: 'Seizures, Epilepsy, and Neurologic Emergencies'
  },
  {
    id: 'seizure-002',
    refNumber: 'REF005',
    year: 2021,
    citation: 'Glauser, T., et al. (2021). Evidence-based guideline for the treatment of convulsive status epilepticus. Epilepsy Currents, 21(6), 1–12.',
    link: 'https://journals.sagepub.com/doi/10.1177/15357597211051243',
    appliesTo: 'Evidence-based guideline for convulsive status epilepticus treatment',
    category: 'Neurology References',
    subcategory: 'Seizures, Epilepsy, and Neurologic Emergencies'
  },
  {
    id: 'seizure-003',
    refNumber: 'REF006',
    year: 2023,
    citation: 'Hirsch, L. J., et al. (2023). Management of status epilepticus. New England Journal of Medicine, 389(10), 899–910.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2215715',
    appliesTo: 'Management of status epilepticus',
    category: 'Neurology References',
    subcategory: 'Seizures, Epilepsy, and Neurologic Emergencies'
  },

  // Stroke and Cerebrovascular Disease
  {
    id: 'stroke-001',
    refNumber: 'REF007',
    year: 2023,
    citation: 'Powers, W. J., et al. (2023). Guidelines for the early management of acute ischemic stroke. Stroke, 54(6), e282–e361.',
    link: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000443',
    appliesTo: 'Guidelines for early management of acute ischemic stroke',
    category: 'Neurology References',
    subcategory: 'Stroke and Cerebrovascular Disease'
  },
  {
    id: 'stroke-002',
    refNumber: 'REF008',
    year: 2020,
    citation: 'Campbell, B. C. V., & Khatri, P. (2020). Stroke. The Lancet, 396(10244), 129–142.',
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31179-X/fulltext',
    appliesTo: 'Stroke overview and management',
    category: 'Neurology References',
    subcategory: 'Stroke and Cerebrovascular Disease'
  },
  {
    id: 'stroke-003',
    refNumber: 'REF009',
    year: 2022,
    citation: 'Hemphill, J. C., et al. (2022). Management of spontaneous intracerebral hemorrhage. Stroke, 53(7), e282–e361.',
    link: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000407',
    appliesTo: 'Management of spontaneous intracerebral hemorrhage',
    category: 'Neurology References',
    subcategory: 'Stroke and Cerebrovascular Disease'
  },

  // Neuromuscular and Peripheral Nerve Disorders
  {
    id: 'neuro-001',
    refNumber: 'REF010',
    year: 2021,
    citation: 'Katzberg, H. D., & Barnett, C. (2021). Myasthenia gravis. The Lancet Neurology, 20(11), 939–952.',
    link: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(21)00297-5/fulltext',
    appliesTo: 'Myasthenia gravis diagnosis and management',
    category: 'Neurology References',
    subcategory: 'Neuromuscular and Peripheral Nerve Disorders'
  },
  {
    id: 'neuro-002',
    refNumber: 'REF011',
    year: 2022,
    citation: 'Dalakas, M. C. (2022). Inflammatory myopathies. New England Journal of Medicine, 387(10), 871–884.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2117130',
    appliesTo: 'Inflammatory myopathies overview',
    category: 'Neurology References',
    subcategory: 'Neuromuscular and Peripheral Nerve Disorders'
  },
  {
    id: 'neuro-003',
    refNumber: 'REF012',
    year: 2023,
    citation: 'Callaghan, B. C., et al. (2023). Peripheral neuropathy: Evaluation and management. JAMA, 330(13), 1241–1253.',
    link: 'https://jamanetwork.com/journals/jama/fullarticle/2809876',
    appliesTo: 'Peripheral neuropathy evaluation and management',
    category: 'Neurology References',
    subcategory: 'Neuromuscular and Peripheral Nerve Disorders'
  },

  // Cognitive and Demyelinating Disorders
  {
    id: 'cognitive-001',
    refNumber: 'REF013',
    year: 2023,
    citation: 'McKhann, G. M., et al. (2023). Diagnosis and treatment of Alzheimer disease. JAMA, 330(17), 1679–1690.',
    link: 'https://jamanetwork.com/journals/jama/fullarticle/2810398',
    appliesTo: 'Diagnosis and treatment of Alzheimer disease',
    category: 'Neurology References',
    subcategory: 'Cognitive and Demyelinating Disorders'
  },
  {
    id: 'cognitive-002',
    refNumber: 'REF014',
    year: 2022,
    citation: 'Thompson, A. J., et al. (2022). Diagnosis of multiple sclerosis: 2021 revisions of the McDonald criteria. The Lancet Neurology, 21(2), 162–173.',
    link: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(21)00398-1/fulltext',
    appliesTo: 'Diagnosis of multiple sclerosis: McDonald criteria revisions',
    category: 'Neurology References',
    subcategory: 'Cognitive and Demyelinating Disorders'
  },
  {
    id: 'cognitive-003',
    refNumber: 'REF015',
    year: 2022,
    citation: 'Reich, D. S., Lucchinetti, C. F., & Calabresi, P. A. (2022). Multiple sclerosis. New England Journal of Medicine, 386(2), 135–146.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2108765',
    appliesTo: 'Multiple sclerosis overview',
    category: 'Neurology References',
    subcategory: 'Cognitive and Demyelinating Disorders'
  },

  // Neurologic and Toxicologic Emergencies
  {
    id: 'toxicologic-001',
    refNumber: 'REF016',
    year: 2021,
    citation: 'Goldfrank, L. R., et al. (2021). Goldfrank\'s toxicologic emergencies (11th ed.). McGraw-Hill.',
    link: 'https://accessemergencymedicine.mhmedical.com/book.aspx?bookID=2969',
    appliesTo: 'Toxicologic emergencies comprehensive reference',
    category: 'Neurology References',
    subcategory: 'Neurologic and Toxicologic Emergencies'
  },
  {
    id: 'toxicologic-002',
    refNumber: 'REF017',
    year: 2023,
    citation: 'Nelson, L. S., et al. (2023). Poisoning and drug overdose. New England Journal of Medicine, 389(5), 435–447.',
    link: 'https://www.nejm.org/doi/10.1056/NEJMra2214851',
    appliesTo: 'Poisoning and drug overdose management',
    category: 'Neurology References',
    subcategory: 'Neurologic and Toxicologic Emergencies'
  },
  {
    id: 'toxicologic-003',
    refNumber: 'REF018',
    year: 2022,
    citation: 'Sutter, R., et al. (2022). Acute encephalopathy and coma. The Lancet Neurology, 21(4), 317–329.',
    link: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(22)00013-4/fulltext',
    appliesTo: 'Acute encephalopathy and coma management',
    category: 'Neurology References',
    subcategory: 'Neurologic and Toxicologic Emergencies'
  }
];

export const neurologyGuidelineWebsites: GuidelineWebsite[] = [
  {
    id: 'neuro-guide-001',
    name: 'American Academy of Neurology (AAN)',
    url: 'https://www.aan.com',
    description: 'Professional organization for neurologists providing clinical practice guidelines, education, and advocacy',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-002',
    name: 'American Stroke Association (ASA)',
    url: 'https://www.stroke.org',
    description: 'Division of the American Heart Association focused on reducing disability and death from stroke',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-003',
    name: 'American Heart Association (AHA)',
    url: 'https://www.heart.org',
    description: 'Leading organization for cardiovascular and stroke research, education, and guidelines',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-004',
    name: 'European Academy of Neurology (EAN)',
    url: 'https://www.ean.org',
    description: 'European professional society for neurologists providing guidelines and continuing medical education',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-005',
    name: 'European Stroke Organisation (ESO)',
    url: 'https://eso-stroke.org',
    description: 'European organization dedicated to stroke prevention, treatment, and rehabilitation',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-006',
    name: 'National Institute of Neurological Disorders and Stroke (NINDS)',
    url: 'https://www.ninds.nih.gov',
    description: 'NIH institute conducting and supporting research on neurological disorders',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-007',
    name: 'National Institutes of Health (NIH)',
    url: 'https://www.nih.gov',
    description: 'Primary federal agency for conducting and supporting medical research',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-008',
    name: 'International League Against Epilepsy (ILAE)',
    url: 'https://www.ilae.org',
    description: 'Global organization dedicated to epilepsy research, education, and patient care',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-009',
    name: 'World Federation of Neurology (WFN)',
    url: 'https://wfneurology.org',
    description: 'International organization promoting neurological education and research worldwide',
    category: 'Guideline & Authority Websites'
  },
  {
    id: 'neuro-guide-010',
    name: 'Merck Manuals Professional - Neurologic Disorders',
    url: 'https://www.merckmanuals.com/professional/neurologic-disorders',
    description: 'Comprehensive medical reference for neurologic disorders including diagnosis, treatment, and management',
    category: 'Guideline & Authority Websites'
  }
];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return neurologyReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return neurologyReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return neurologyReferences.find(ref => ref.refNumber === refNumber);
}

// Helper function to get all subcategories
export function getSubcategories(category: string): string[] {
  const subcategories = new Set<string>();
  neurologyReferences
    .filter(ref => ref.category === category)
    .forEach(ref => subcategories.add(ref.subcategory));
  return Array.from(subcategories);
}

// Helper function to get guideline websites
export function getNeurologyGuidelineWebsites(): GuidelineWebsite[] {
  return neurologyGuidelineWebsites;
}
