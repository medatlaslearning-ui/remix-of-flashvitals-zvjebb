
import { Flashcard } from '@/types/flashcard';

export const infectiousDiseaseFlashcards: Flashcard[] = [
  // Bacterial Organisms - Gram Positive (Blue)
  {
    id: 'infectious-disease-bacterial-1',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Staphylococcus aureus',
    back: {
      definition: 'Gram-positive cocci in clusters',
      high_yield: 'Coagulase positive',
      clinical_pearl: 'Causes skin infections, endocarditis, osteomyelitis',
      treatment: 'Nafcillin or vancomycin (if MRSA)'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Staphylococcus']
  },
  {
    id: 'infectious-disease-bacterial-2',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Streptococcus pyogenes (Group A Strep)',
    back: {
      definition: 'Gram-positive cocci in chains',
      high_yield: 'Beta-hemolytic',
      clinical_pearl: 'Causes pharyngitis, cellulitis, necrotizing fasciitis',
      treatment: 'Penicillin or amoxicillin'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Streptococcus']
  },
  {
    id: 'infectious-disease-bacterial-3',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Streptococcus pneumoniae',
    back: {
      definition: 'Gram-positive diplococci',
      high_yield: 'Alpha-hemolytic, optochin sensitive',
      clinical_pearl: 'Most common cause of community-acquired pneumonia',
      treatment: 'Ceftriaxone or levofloxacin'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Streptococcus']
  },
  {
    id: 'infectious-disease-bacterial-4',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Enterococcus faecalis',
    back: {
      definition: 'Gram-positive cocci in chains',
      high_yield: 'Gamma-hemolytic, bile esculin positive',
      clinical_pearl: 'Causes UTIs and endocarditis',
      treatment: 'Ampicillin + gentamicin or vancomycin'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Enterococcus']
  },
  {
    id: 'infectious-disease-bacterial-5',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Clostridium difficile',
    back: {
      definition: 'Gram-positive anaerobic rod',
      high_yield: 'Spore-forming',
      clinical_pearl: 'Causes antibiotic-associated diarrhea and pseudomembranous colitis',
      treatment: 'Oral vancomycin or fidaxomicin'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Clostridium']
  },
  {
    id: 'infectious-disease-bacterial-6',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Clostridium tetani',
    back: {
      definition: 'Gram-positive anaerobic rod',
      high_yield: 'Produces tetanospasmin toxin',
      clinical_pearl: 'Causes tetanus (lockjaw)',
      treatment: 'Tetanus immunoglobulin + metronidazole'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Clostridium']
  },
  {
    id: 'infectious-disease-bacterial-7',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Clostridium perfringens',
    back: {
      definition: 'Gram-positive anaerobic rod',
      high_yield: 'Double zone hemolysis',
      clinical_pearl: 'Causes gas gangrene and food poisoning',
      treatment: 'Penicillin + clindamycin + surgical debridement'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Clostridium']
  },
  {
    id: 'infectious-disease-bacterial-8',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Bacillus anthracis',
    back: {
      definition: 'Gram-positive rod',
      high_yield: 'Spore-forming, encapsulated',
      clinical_pearl: 'Causes anthrax (cutaneous, inhalational, GI)',
      treatment: 'Ciprofloxacin or doxycycline'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Bacillus']
  },
  {
    id: 'infectious-disease-bacterial-9',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Listeria monocytogenes',
    back: {
      definition: 'Gram-positive rod',
      high_yield: 'Tumbling motility, grows at 4°C',
      clinical_pearl: 'Causes meningitis in neonates and immunocompromised',
      treatment: 'Ampicillin + gentamicin'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Listeria']
  },
  {
    id: 'infectious-disease-bacterial-10',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Corynebacterium diphtheriae',
    back: {
      definition: 'Gram-positive rod',
      high_yield: 'Club-shaped, metachromatic granules',
      clinical_pearl: 'Causes diphtheria with pseudomembrane formation',
      treatment: 'Diphtheria antitoxin + erythromycin or penicillin'
    },
    color: 'blue',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Positive', 'Corynebacterium']
  },
  // Bacterial Organisms - Gram Negative (Red)
  {
    id: 'infectious-disease-bacterial-11',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Escherichia coli',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Lactose fermenter',
      clinical_pearl: 'Most common cause of UTIs and neonatal meningitis',
      treatment: 'Ceftriaxone or fluoroquinolones'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'E. coli']
  },
  {
    id: 'infectious-disease-bacterial-12',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Klebsiella pneumoniae',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Lactose fermenter, encapsulated',
      clinical_pearl: 'Causes pneumonia in alcoholics (currant jelly sputum)',
      treatment: 'Ceftriaxone or carbapenems'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Klebsiella']
  },
  {
    id: 'infectious-disease-bacterial-13',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Pseudomonas aeruginosa',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Oxidase positive, produces pyocyanin',
      clinical_pearl: 'Causes infections in burn patients and CF patients',
      treatment: 'Piperacillin-tazobactam or cefepime'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Pseudomonas']
  },
  {
    id: 'infectious-disease-bacterial-14',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Haemophilus influenzae',
    back: {
      definition: 'Gram-negative coccobacillus',
      high_yield: 'Requires factors V and X',
      clinical_pearl: 'Causes epiglottitis, meningitis, otitis media',
      treatment: 'Ceftriaxone'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Haemophilus']
  },
  {
    id: 'infectious-disease-bacterial-15',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Neisseria meningitidis',
    back: {
      definition: 'Gram-negative diplococci',
      high_yield: 'Maltose fermenter',
      clinical_pearl: 'Causes meningitis and meningococcemia with petechial rash',
      treatment: 'Ceftriaxone'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Neisseria']
  },
  {
    id: 'infectious-disease-bacterial-16',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'easy',
    front: 'Neisseria gonorrhoeae',
    back: {
      definition: 'Gram-negative diplococci',
      high_yield: 'Does not ferment maltose',
      clinical_pearl: 'Causes gonorrhea and pelvic inflammatory disease',
      treatment: 'Ceftriaxone + azithromycin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Neisseria']
  },
  {
    id: 'infectious-disease-bacterial-17',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Salmonella typhi',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Non-lactose fermenter, H2S positive',
      clinical_pearl: 'Causes typhoid fever with rose spots',
      treatment: 'Ceftriaxone or azithromycin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Salmonella']
  },
  {
    id: 'infectious-disease-bacterial-18',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Shigella species',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Non-lactose fermenter, non-motile',
      clinical_pearl: 'Causes bloody diarrhea (dysentery)',
      treatment: 'Fluoroquinolones or azithromycin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Shigella']
  },
  {
    id: 'infectious-disease-bacterial-19',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Vibrio cholerae',
    back: {
      definition: 'Gram-negative curved rod',
      high_yield: 'Oxidase positive, comma-shaped',
      clinical_pearl: 'Causes cholera with rice-water stools',
      treatment: 'Doxycycline or azithromycin + rehydration'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Vibrio']
  },
  {
    id: 'infectious-disease-bacterial-20',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Campylobacter jejuni',
    back: {
      definition: 'Gram-negative curved rod',
      high_yield: 'Oxidase positive, grows at 42°C',
      clinical_pearl: 'Most common cause of bacterial diarrhea, associated with Guillain-Barré',
      treatment: 'Azithromycin or fluoroquinolones'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Campylobacter']
  },
  {
    id: 'infectious-disease-bacterial-21',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Helicobacter pylori',
    back: {
      definition: 'Gram-negative curved rod',
      high_yield: 'Urease positive',
      clinical_pearl: 'Causes peptic ulcer disease and gastric cancer',
      treatment: 'Triple therapy: PPI + clarithromycin + amoxicillin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Helicobacter']
  },
  {
    id: 'infectious-disease-bacterial-22',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Legionella pneumophila',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Requires charcoal yeast extract agar',
      clinical_pearl: 'Causes atypical pneumonia with hyponatremia',
      treatment: 'Azithromycin or fluoroquinolones'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Legionella']
  },
  {
    id: 'infectious-disease-bacterial-23',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'medium',
    front: 'Bordetella pertussis',
    back: {
      definition: 'Gram-negative coccobacillus',
      high_yield: 'Requires Bordet-Gengou agar',
      clinical_pearl: 'Causes whooping cough',
      treatment: 'Azithromycin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Bordetella']
  },
  {
    id: 'infectious-disease-bacterial-24',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Yersinia pestis',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Bipolar staining (safety pin appearance)',
      clinical_pearl: 'Causes plague (bubonic, septicemic, pneumonic)',
      treatment: 'Streptomycin or gentamicin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Yersinia']
  },
  {
    id: 'infectious-disease-bacterial-25',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Francisella tularensis',
    back: {
      definition: 'Gram-negative coccobacillus',
      high_yield: 'Requires cysteine-enriched media',
      clinical_pearl: 'Causes tularemia (rabbit fever)',
      treatment: 'Streptomycin or gentamicin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Francisella']
  },
  {
    id: 'infectious-disease-bacterial-26',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Brucella species',
    back: {
      definition: 'Gram-negative coccobacillus',
      high_yield: 'Intracellular pathogen',
      clinical_pearl: 'Causes brucellosis (undulant fever)',
      treatment: 'Doxycycline + rifampin or gentamicin'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Brucella']
  },
  {
    id: 'infectious-disease-bacterial-27',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Bacteroides fragilis',
    back: {
      definition: 'Gram-negative anaerobic rod',
      high_yield: 'Most common anaerobe in colon',
      clinical_pearl: 'Causes intra-abdominal abscesses',
      treatment: 'Metronidazole or carbapenems'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Bacteroides']
  },
  {
    id: 'infectious-disease-bacterial-28',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Acinetobacter baumannii',
    back: {
      definition: 'Gram-negative coccobacillus',
      high_yield: 'Oxidase negative, often multidrug resistant',
      clinical_pearl: 'Causes nosocomial infections in ICU patients',
      treatment: 'Carbapenems or colistin (if resistant)'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Acinetobacter']
  },
  {
    id: 'infectious-disease-bacterial-29',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Stenotrophomonas maltophilia',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Intrinsically resistant to carbapenems',
      clinical_pearl: 'Causes opportunistic infections in immunocompromised',
      treatment: 'Trimethoprim-sulfamethoxazole'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Stenotrophomonas']
  },
  {
    id: 'infectious-disease-bacterial-30',
    system: 'Infectious Disease',
    topic: 'Bacterial Organisms',
    difficulty: 'hard',
    front: 'Burkholderia cepacia',
    back: {
      definition: 'Gram-negative rod',
      high_yield: 'Oxidase positive, intrinsically resistant to many antibiotics',
      clinical_pearl: 'Causes lung infections in cystic fibrosis patients',
      treatment: 'Trimethoprim-sulfamethoxazole or meropenem'
    },
    color: 'red',
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    tags: ['Infectious Disease', 'Bacterial Organisms', 'Gram Negative', 'Burkholderia']
  }
];
