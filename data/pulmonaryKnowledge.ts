
/**
 * Pulmonary System Knowledge Base - Merck Manual Professional
 * 
 * Comprehensive pulmonary knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major respiratory conditions.
 * 
 * CRITICAL FIX: Improved keyword specificity to prevent COPD/Asthma confusion
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const pulmonaryKnowledge: MerckManualEntry[] = [
  {
    topic: 'Asthma',
    keywords: ['asthma', 'asthmatic', 'reactive airway disease', 'bronchospasm', 'asthmatic bronchitis', 'wheezing attacks', 'reversible airway obstruction'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, asthma is a chronic inflammatory disorder of the airways characterized by REVERSIBLE airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. Type 2 inflammation predominates in allergic asthma. Key feature: REVERSIBILITY with bronchodilators.',
    clinicalPresentation: 'Patients experience EPISODIC wheezing, dyspnea, chest tightness, and cough, often worse at night or with triggers (allergens, exercise, cold air). Physical examination during exacerbation reveals wheezing, prolonged expiration, and use of accessory muscles. Between episodes, exam may be normal.',
    diagnosticApproach: 'Spirometry shows REVERSIBLE obstruction: FEV1/FVC <0.70 that improves ≥12% and ≥200 mL after bronchodilator (KEY DIAGNOSTIC FEATURE). Peak flow monitoring tracks variability. Fractional exhaled nitric oxide indicates eosinophilic inflammation. Bronchoprovocation testing if spirometry normal.',
    treatment: 'Step-wise approach. All patients need SABA for rescue. Persistent asthma requires controller therapy: low-dose ICS is first-line. Add LABA for inadequate control. Severe asthma may require biologics. Avoid triggers.',
    clinicalPearls: [
      'ICS are the most effective long-term controller medication',
      'LABA should never be used without ICS in asthma',
      'Silent chest indicates severe obstruction and impending respiratory failure',
      'Aspirin-exacerbated respiratory disease requires leukotriene modifier',
      'KEY DIFFERENCE FROM COPD: Reversible obstruction, episodic symptoms, younger age'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/asthma-and-related-disorders/asthma'
  },

  {
    topic: 'Chronic Obstructive Pulmonary Disease',
    keywords: ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'smoking-related lung disease', 'irreversible airflow obstruction', 'chronic airflow limitation'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, COPD is characterized by PROGRESSIVE airflow limitation that is NOT FULLY REVERSIBLE. Smoking is the primary risk factor (85-90% of cases). Alpha-1 antitrypsin deficiency is a genetic cause. Key feature: IRREVERSIBLE obstruction with progressive decline.',
    clinicalPresentation: 'Patients present with PROGRESSIVE dyspnea, chronic cough, and sputum production. Symptoms worsen over years. Physical examination may reveal prolonged expiration, wheezing, barrel chest, decreased breath sounds, and pursed-lip breathing. Typically affects older adults with smoking history.',
    diagnosticApproach: 'Spirometry is diagnostic: post-bronchodilator FEV1/FVC <0.70 confirms IRREVERSIBLE airflow obstruction (KEY DIAGNOSTIC FEATURE). GOLD staging based on FEV1 severity. Chest X-ray shows hyperinflation. DLCO is reduced in emphysema. Minimal bronchodilator reversibility (<12% improvement).',
    treatment: 'Smoking cessation is paramount. Bronchodilators are mainstay: LAMA and/or LABA. Add ICS for frequent exacerbations (≥2/year or 1 hospitalization). Pulmonary rehabilitation. Long-term oxygen therapy for chronic hypoxemia (PaO2 <55 mmHg or SpO2 <88%).',
    clinicalPearls: [
      'Smoking cessation is the only intervention that slows FEV1 decline',
      'Oxygen goal is 88-92% to avoid CO2 retention in chronic hypercapnia',
      'Exacerbations often triggered by infections or air pollution',
      'Screen for alpha-1 antitrypsin deficiency in patients <45 years or non-smokers',
      'KEY DIFFERENCE FROM ASTHMA: Irreversible obstruction, progressive symptoms, older smokers'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/chronic-obstructive-pulmonary-disease-and-related-disorders/chronic-obstructive-pulmonary-disease-copd'
  },

  {
    topic: 'Community-Acquired Pneumonia',
    keywords: ['pneumonia', 'cap', 'community acquired pneumonia', 'bacterial pneumonia', 'lung infection', 'consolidation'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, community-acquired pneumonia is an acute infection of the pulmonary parenchyma. Streptococcus pneumoniae is the most common bacterial cause (30-50%). The inflammatory response causes alveolar filling with exudate, impairing gas exchange.',
    clinicalPresentation: 'Typical bacterial pneumonia presents with acute onset of fever, productive cough with purulent sputum, pleuritic chest pain, and dyspnea. Physical examination reveals tachypnea, fever, crackles, bronchial breath sounds, and dullness to percussion.',
    diagnosticApproach: 'Chest X-ray confirms diagnosis, showing lobar consolidation or interstitial infiltrates. Severity assessment using CURB-65 or PSI guides disposition. Consider Legionella and pneumococcal urinary antigens in severe cases.',
    treatment: 'Outpatient: macrolide or doxycycline. Inpatient non-ICU: beta-lactam plus macrolide or respiratory fluoroquinolone. ICU: beta-lactam plus macrolide or fluoroquinolone. Duration typically 5-7 days.',
    clinicalPearls: [
      'CURB-65 score ≥2 suggests need for hospitalization',
      'Legionella causes hyponatremia and elevated transaminases',
      'Aspiration pneumonia involves anaerobes',
      'Failure to improve in 72 hours warrants reassessment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pneumonia/overview-of-pneumonia'
  },

  {
    topic: 'Pulmonary Embolism',
    keywords: ['pulmonary embolism', 'pe', 'lung embolism', 'pulmonary embolus', 'blood clot in lung'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pulmonary embolism occurs when thrombus lodges in the pulmonary arterial system, causing mechanical obstruction and increased pulmonary vascular resistance. Risk factors include immobility, surgery, trauma, malignancy, pregnancy.',
    clinicalPresentation: 'Most patients present with sudden-onset dyspnea and tachypnea. Pleuritic chest pain suggests peripheral embolism. Massive PE causes hypotension and syncope. Physical examination may reveal tachycardia, tachypnea, hypoxemia, and signs of DVT.',
    diagnosticApproach: 'Clinical probability assessment using Wells criteria guides testing. D-dimer has high sensitivity. CT pulmonary angiography is the gold standard. ECG may show S1Q3T3 pattern or right heart strain.',
    treatment: 'Anticoagulation is primary treatment: DOACs preferred. Hemodynamically unstable patients require thrombolysis or embolectomy. Duration: 3 months for provoked PE, extended for unprovoked PE.',
    clinicalPearls: [
      'Massive PE defined by hypotension',
      'Saddle embolus at main PA bifurcation may or may not cause instability',
      'Pregnancy increases PE risk 5-fold',
      'Consider thrombophilia testing for unprovoked PE in young patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe'
  },

  {
    topic: 'Acute Respiratory Distress Syndrome',
    keywords: ['ards', 'acute respiratory distress syndrome', 'acute lung injury', 'non-cardiogenic pulmonary edema'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, ARDS is acute diffuse inflammatory lung injury leading to increased pulmonary vascular permeability, pulmonary edema, and severe hypoxemia. Common causes include sepsis, pneumonia, aspiration, and trauma.',
    clinicalPresentation: 'Acute onset of severe dyspnea, tachypnea, and hypoxemia within hours to days of inciting event. Physical examination reveals tachypnea, cyanosis, use of accessory muscles, and diffuse crackles.',
    diagnosticApproach: 'Chest X-ray shows bilateral diffuse alveolar infiltrates. Arterial blood gas shows severe hypoxemia (PaO2/FiO2 <300). Echocardiography excludes cardiac dysfunction.',
    treatment: 'Lung-protective ventilation: low tidal volume (6 mL/kg), plateau pressure <30 cm H2O. Prone positioning for severe ARDS. Conservative fluid management. Treat underlying cause.',
    clinicalPearls: [
      'Lung-protective ventilation reduces mortality',
      'Prone positioning improves survival in severe ARDS',
      'Distinguish from cardiogenic pulmonary edema',
      'ECMO is rescue therapy for refractory hypoxemia'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/respiratory-failure-and-mechanical-ventilation/acute-respiratory-distress-syndrome-ards'
  },

  {
    topic: 'Pleural Effusion',
    keywords: ['pleural effusion', 'fluid in pleura', 'pleural fluid', 'transudative effusion', 'exudative effusion'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pleural effusion is accumulation of fluid in the pleural space. Transudates result from imbalance in hydrostatic/oncotic pressures (heart failure, cirrhosis). Exudates result from increased capillary permeability (infection, malignancy).',
    clinicalPresentation: 'Patients present with dyspnea, pleuritic chest pain, and cough. Physical examination reveals decreased breath sounds, dullness to percussion, and decreased tactile fremitus over the effusion.',
    diagnosticApproach: 'Chest X-ray shows blunting of costophrenic angle (>75 mL fluid). Ultrasound guides thoracentesis. Light\'s criteria distinguish transudate from exudate. Pleural fluid analysis includes cell count, protein, LDH, glucose, pH, cytology, culture.',
    treatment: 'Treat underlying cause. Therapeutic thoracentesis for symptomatic relief. Chest tube drainage for empyema or large effusions. Pleurodesis for recurrent malignant effusions.',
    clinicalPearls: [
      'Light\'s criteria: exudate if pleural/serum protein >0.5, pleural/serum LDH >0.6, or pleural LDH >2/3 upper limit of normal',
      'Empyema requires chest tube drainage and antibiotics',
      'Malignant effusions often recur and may need pleurodesis',
      'Transudates usually bilateral, exudates often unilateral'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pleural-effusion'
  },

  {
    topic: 'Pneumothorax',
    keywords: ['pneumothorax', 'collapsed lung', 'air in pleural space', 'tension pneumothorax'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pneumothorax is air in the pleural space causing lung collapse. Primary spontaneous pneumothorax occurs in tall, thin young males without lung disease. Secondary pneumothorax occurs in patients with underlying lung disease (COPD, asthma). Tension pneumothorax is life-threatening.',
    clinicalPresentation: 'Sudden onset of pleuritic chest pain and dyspnea. Physical examination reveals decreased breath sounds, hyperresonance to percussion, and decreased tactile fremitus on affected side. Tension pneumothorax causes hypotension, tracheal deviation, and JVD.',
    diagnosticApproach: 'Chest X-ray shows visceral pleural line separated from chest wall. Expiratory films increase sensitivity. CT scan for small or loculated pneumothorax. Tension pneumothorax is a clinical diagnosis requiring immediate treatment.',
    treatment: 'Small (<15%) primary spontaneous pneumothorax: observation with supplemental oxygen. Large or symptomatic: needle aspiration or chest tube. Tension pneumothorax: immediate needle decompression (2nd intercostal space, midclavicular line) followed by chest tube.',
    clinicalPearls: [
      'Tension pneumothorax is a clinical emergency - treat immediately without waiting for imaging',
      'Recurrence rate of primary spontaneous pneumothorax is 30-50%',
      'Video-assisted thoracoscopic surgery (VATS) for recurrent pneumothorax',
      'Avoid air travel and scuba diving until fully resolved'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pneumothorax'
  },
];
