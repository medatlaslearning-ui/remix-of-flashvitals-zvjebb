
import { Flashcard } from '@/types/flashcard';

export const pulmonaryFlashcards: Flashcard[] = [
  // Airway Disorders - Placeholder cards (5 cards)
  {
    id: 'p1',
    system: 'Pulmonary',
    topic: 'Airway Disorders',
    front: 'What is the classic triad of asthma?',
    back: {
      definition: 'Reversible airway obstruction, airway inflammation, and bronchial hyperresponsiveness.',
      high_yield: 'Wheezing, dyspnea, chest tightness, and cough (especially at night).',
      clinical_pearl: 'Peak flow variability >20% suggests asthma. Always assess severity and triggers.'
    },
    tags: ['Asthma', 'Airway', 'Obstruction'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p2',
    system: 'Pulmonary',
    topic: 'Airway Disorders',
    front: 'What is COPD?',
    back: {
      definition: 'Chronic obstructive pulmonary disease: progressive airflow limitation.',
      high_yield: 'Chronic bronchitis (productive cough) and emphysema (dyspnea).',
      clinical_pearl: 'Smoking is the primary risk factor. Spirometry shows FEV1/FVC <0.70.'
    },
    tags: ['COPD', 'Airway', 'Chronic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p3',
    system: 'Pulmonary',
    topic: 'Airway Disorders',
    front: 'What is bronchiectasis?',
    back: {
      definition: 'Permanent dilation of bronchi due to chronic inflammation.',
      high_yield: 'Chronic productive cough, recurrent infections, hemoptysis.',
      clinical_pearl: 'CT chest shows dilated airways. Treat underlying cause and prevent infections.'
    },
    tags: ['Bronchiectasis', 'Airway', 'Chronic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p4',
    system: 'Pulmonary',
    topic: 'Airway Disorders',
    front: 'What is cystic fibrosis?',
    back: {
      definition: 'Genetic disorder causing thick mucus production affecting lungs and pancreas.',
      high_yield: 'Recurrent pulmonary infections, pancreatic insufficiency, elevated sweat chloride.',
      clinical_pearl: 'Pseudomonas and Staph aureus are common pathogens. Treat with airway clearance and antibiotics.'
    },
    tags: ['Cystic Fibrosis', 'Airway', 'Genetic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p5',
    system: 'Pulmonary',
    topic: 'Airway Disorders',
    front: 'What is acute bronchitis?',
    back: {
      definition: 'Inflammation of bronchi, usually viral.',
      high_yield: 'Cough lasting 1-3 weeks, often with sputum production.',
      clinical_pearl: 'Antibiotics not indicated unless bacterial superinfection suspected. Supportive care.'
    },
    tags: ['Bronchitis', 'Airway', 'Acute'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'easy'
  },

  // Pulmonary Infections - Placeholder cards (5 cards)
  {
    id: 'p6',
    system: 'Pulmonary',
    topic: 'Pulmonary Infections',
    front: 'What is community-acquired pneumonia (CAP)?',
    back: {
      definition: 'Pneumonia acquired outside healthcare settings.',
      high_yield: 'Strep pneumoniae most common. Fever, cough, dyspnea, pleuritic chest pain.',
      clinical_pearl: 'Use CURB-65 or PSI to assess severity. Empiric antibiotics based on risk factors.'
    },
    tags: ['Pneumonia', 'CAP', 'Infection'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p7',
    system: 'Pulmonary',
    topic: 'Pulmonary Infections',
    front: 'What is hospital-acquired pneumonia (HAP)?',
    back: {
      definition: 'Pneumonia occurring ≥48 hours after hospital admission.',
      high_yield: 'Gram-negative bacteria and MRSA common. Higher mortality than CAP.',
      clinical_pearl: 'Broad-spectrum antibiotics initially. Adjust based on cultures and local resistance patterns.'
    },
    tags: ['Pneumonia', 'HAP', 'Nosocomial'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p8',
    system: 'Pulmonary',
    topic: 'Pulmonary Infections',
    front: 'What is tuberculosis (TB)?',
    back: {
      definition: 'Mycobacterium tuberculosis infection, primarily affecting lungs.',
      high_yield: 'Chronic cough, night sweats, weight loss, hemoptysis. Cavitary lesions on CXR.',
      clinical_pearl: 'AFB smear and culture. RIPE therapy for active TB. Latent TB needs INH prophylaxis.'
    },
    tags: ['TB', 'Tuberculosis', 'Infection'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p9',
    system: 'Pulmonary',
    topic: 'Pulmonary Infections',
    front: 'What is aspiration pneumonia?',
    back: {
      definition: 'Pneumonia from aspiration of oropharyngeal or gastric contents.',
      high_yield: 'Risk factors: altered consciousness, dysphagia, GERD. Anaerobes common.',
      clinical_pearl: 'Right lower lobe most common. Treat with antibiotics covering anaerobes.'
    },
    tags: ['Pneumonia', 'Aspiration', 'Infection'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p10',
    system: 'Pulmonary',
    topic: 'Pulmonary Infections',
    front: 'What is lung abscess?',
    back: {
      definition: 'Necrotic cavity in lung parenchyma filled with pus.',
      high_yield: 'Foul-smelling sputum, fever, weight loss. Air-fluid level on CXR.',
      clinical_pearl: 'Often from aspiration. Prolonged antibiotics (weeks to months). Drainage if large.'
    },
    tags: ['Abscess', 'Infection', 'Pulmonary'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // Pulmonary Vascular Disorders - Placeholder cards (5 cards)
  {
    id: 'p11',
    system: 'Pulmonary',
    topic: 'Pulmonary Vascular Disorders',
    front: 'What is pulmonary embolism (PE)?',
    back: {
      definition: 'Blood clot in pulmonary arteries, usually from DVT.',
      high_yield: 'Sudden dyspnea, pleuritic chest pain, tachycardia. D-dimer elevated.',
      clinical_pearl: 'Use Wells criteria to assess probability. CTPA is gold standard. Anticoagulate immediately if high suspicion.'
    },
    tags: ['PE', 'Embolism', 'Vascular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p12',
    system: 'Pulmonary',
    topic: 'Pulmonary Vascular Disorders',
    front: 'What is pulmonary hypertension?',
    back: {
      definition: 'Elevated pulmonary artery pressure (mean PAP ≥20 mmHg).',
      high_yield: 'Dyspnea, fatigue, syncope. Loud P2, RV heave, TR murmur.',
      clinical_pearl: 'Echo shows elevated RVSP. Right heart cath confirms diagnosis. Treat underlying cause.'
    },
    tags: ['Pulmonary Hypertension', 'Vascular', 'RV'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p13',
    system: 'Pulmonary',
    topic: 'Pulmonary Vascular Disorders',
    front: 'What is pulmonary arterial hypertension (PAH)?',
    back: {
      definition: 'Group 1 pulmonary hypertension: precapillary PH without clear cause.',
      high_yield: 'Progressive dyspnea, right heart failure. Poor prognosis without treatment.',
      clinical_pearl: 'Vasodilator testing guides therapy. Prostacyclins, ERAs, PDE-5 inhibitors used.'
    },
    tags: ['PAH', 'Pulmonary Hypertension', 'Vascular'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p14',
    system: 'Pulmonary',
    topic: 'Pulmonary Vascular Disorders',
    front: 'What is chronic thromboembolic pulmonary hypertension (CTEPH)?',
    back: {
      definition: 'Pulmonary hypertension from chronic organized thrombi.',
      high_yield: 'History of PE. Progressive dyspnea. V/Q scan shows mismatched defects.',
      clinical_pearl: 'Potentially curable with pulmonary thromboendarterectomy. Lifelong anticoagulation.'
    },
    tags: ['CTEPH', 'Pulmonary Hypertension', 'Chronic'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p15',
    system: 'Pulmonary',
    topic: 'Pulmonary Vascular Disorders',
    front: 'What is pulmonary arteriovenous malformation (AVM)?',
    back: {
      definition: 'Abnormal connection between pulmonary artery and vein.',
      high_yield: 'Right-to-left shunt causing hypoxemia. Associated with hereditary hemorrhagic telangiectasia.',
      clinical_pearl: 'Risk of paradoxical embolism and brain abscess. Embolization for large AVMs.'
    },
    tags: ['AVM', 'Vascular', 'Shunt'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // Parenchymal & Interstitial Lung Diseases - Placeholder cards (5 cards)
  {
    id: 'p16',
    system: 'Pulmonary',
    topic: 'Parenchymal & Interstitial Lung Diseases',
    front: 'What is idiopathic pulmonary fibrosis (IPF)?',
    back: {
      definition: 'Progressive fibrotic lung disease of unknown cause.',
      high_yield: 'Dry cough, progressive dyspnea, bibasilar crackles. Honeycombing on HRCT.',
      clinical_pearl: 'Poor prognosis (median survival 3-5 years). Antifibrotics (pirfenidone, nintedanib) slow progression.'
    },
    tags: ['IPF', 'Fibrosis', 'ILD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p17',
    system: 'Pulmonary',
    topic: 'Parenchymal & Interstitial Lung Diseases',
    front: 'What is sarcoidosis?',
    back: {
      definition: 'Multisystem granulomatous disease, commonly affecting lungs and lymph nodes.',
      high_yield: 'Bilateral hilar lymphadenopathy, non-caseating granulomas. Elevated ACE.',
      clinical_pearl: 'Often asymptomatic. Steroids for symptomatic disease. Monitor for cardiac and neuro involvement.'
    },
    tags: ['Sarcoidosis', 'Granulomatous', 'ILD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p18',
    system: 'Pulmonary',
    topic: 'Parenchymal & Interstitial Lung Diseases',
    front: 'What is hypersensitivity pneumonitis?',
    back: {
      definition: 'Immune-mediated lung disease from inhaled antigens.',
      high_yield: 'Acute: flu-like symptoms 4-6 hours after exposure. Chronic: progressive fibrosis.',
      clinical_pearl: 'Identify and avoid antigen. Farmer&apos;s lung (moldy hay), bird fancier&apos;s lung common.'
    },
    tags: ['Hypersensitivity Pneumonitis', 'ILD', 'Immune'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p19',
    system: 'Pulmonary',
    topic: 'Parenchymal & Interstitial Lung Diseases',
    front: 'What is acute respiratory distress syndrome (ARDS)?',
    back: {
      definition: 'Acute diffuse lung injury causing non-cardiogenic pulmonary edema.',
      high_yield: 'Bilateral infiltrates, hypoxemia (PaO2/FiO2 <300), within 1 week of insult.',
      clinical_pearl: 'Low tidal volume ventilation (6 mL/kg IBW) improves survival. Prone positioning helps.'
    },
    tags: ['ARDS', 'Acute', 'Critical Care'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p20',
    system: 'Pulmonary',
    topic: 'Parenchymal & Interstitial Lung Diseases',
    front: 'What is cryptogenic organizing pneumonia (COP)?',
    back: {
      definition: 'Inflammatory lung disease with granulation tissue in airways.',
      high_yield: 'Subacute onset dyspnea, cough, fever. Patchy consolidation on CT.',
      clinical_pearl: 'Responds well to steroids. Formerly called BOOP (bronchiolitis obliterans organizing pneumonia).'
    },
    tags: ['COP', 'Organizing Pneumonia', 'ILD'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },

  // Pleural Disorders - Placeholder cards (5 cards)
  {
    id: 'p21',
    system: 'Pulmonary',
    topic: 'Pleural Disorders',
    front: 'What is a pleural effusion?',
    back: {
      definition: 'Abnormal accumulation of fluid in pleural space.',
      high_yield: 'Decreased breath sounds, dullness to percussion. Blunted costophrenic angle on CXR.',
      clinical_pearl: 'Thoracentesis for diagnosis. Light&apos;s criteria differentiate transudative vs exudative.'
    },
    tags: ['Pleural Effusion', 'Pleura', 'Fluid'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p22',
    system: 'Pulmonary',
    topic: 'Pleural Disorders',
    front: 'What is pneumothorax?',
    back: {
      definition: 'Air in pleural space causing lung collapse.',
      high_yield: 'Sudden chest pain, dyspnea, decreased breath sounds, hyperresonance.',
      clinical_pearl: 'Primary: spontaneous in young tall males. Secondary: underlying lung disease. Tension PTX is emergency.'
    },
    tags: ['Pneumothorax', 'Pleura', 'Emergency'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
  {
    id: 'p23',
    system: 'Pulmonary',
    topic: 'Pleural Disorders',
    front: 'What is tension pneumothorax?',
    back: {
      definition: 'Life-threatening pneumothorax with mediastinal shift.',
      high_yield: 'Hypotension, tracheal deviation, JVD, absent breath sounds.',
      clinical_pearl: 'Clinical diagnosis - do NOT wait for CXR. Immediate needle decompression (2nd ICS MCL).'
    },
    tags: ['Tension Pneumothorax', 'Emergency', 'Pleura'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p24',
    system: 'Pulmonary',
    topic: 'Pleural Disorders',
    front: 'What is empyema?',
    back: {
      definition: 'Pus in pleural space, usually from pneumonia.',
      high_yield: 'Fever, pleuritic pain, pleural fluid with pH <7.2, glucose <60, LDH >1000.',
      clinical_pearl: 'Requires drainage (chest tube or VATS). Antibiotics alone insufficient.'
    },
    tags: ['Empyema', 'Pleura', 'Infection'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'hard'
  },
  {
    id: 'p25',
    system: 'Pulmonary',
    topic: 'Pleural Disorders',
    front: 'What is hemothorax?',
    back: {
      definition: 'Blood in pleural space.',
      high_yield: 'Trauma most common. Decreased breath sounds, dullness, shock if massive.',
      clinical_pearl: 'Hematocrit of pleural fluid >50% of blood. Chest tube drainage. Surgery if >1500 mL or ongoing bleeding.'
    },
    tags: ['Hemothorax', 'Pleura', 'Trauma'],
    bookmarked: false,
    favorite: false,
    reviewCount: 0,
    difficulty: 'medium'
  },
];
