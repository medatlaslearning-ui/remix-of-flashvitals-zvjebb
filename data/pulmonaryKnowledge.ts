
/**
 * Pulmonary System Knowledge Base - Merck Manual Professional
 * 
 * Comprehensive pulmonary knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major respiratory conditions.
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const pulmonaryKnowledge: MerckManualEntry[] = [
  {
    topic: 'Asthma',
    keywords: ['asthma', 'reactive airway disease', 'bronchospasm', 'asthmatic bronchitis'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, asthma is a chronic inflammatory disorder of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. Type 2 inflammation predominates in allergic asthma.',
    clinicalPresentation: 'Patients experience episodic wheezing, dyspnea, chest tightness, and cough, often worse at night. Physical examination during exacerbation reveals wheezing, prolonged expiration, and use of accessory muscles.',
    diagnosticApproach: 'Spirometry shows reversible obstruction: FEV1/FVC <0.70 that improves ≥12% and ≥200 mL after bronchodilator. Peak flow monitoring tracks variability. Fractional exhaled nitric oxide indicates eosinophilic inflammation.',
    treatment: 'Step-wise approach. All patients need SABA for rescue. Persistent asthma requires controller therapy: low-dose ICS is first-line. Add LABA for inadequate control. Severe asthma may require biologics.',
    clinicalPearls: [
      'ICS are the most effective long-term controller medication',
      'LABA should never be used without ICS in asthma',
      'Silent chest indicates severe obstruction and impending respiratory failure',
      'Aspirin-exacerbated respiratory disease requires leukotriene modifier'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/asthma-and-related-disorders/asthma'
  },

  {
    topic: 'Chronic Obstructive Pulmonary Disease',
    keywords: ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, COPD is characterized by progressive airflow limitation that is not fully reversible. Smoking is the primary risk factor (85-90% of cases). Alpha-1 antitrypsin deficiency is a genetic cause.',
    clinicalPresentation: 'Patients present with progressive dyspnea, chronic cough, and sputum production. Physical examination may reveal prolonged expiration, wheezing, barrel chest, and decreased breath sounds.',
    diagnosticApproach: 'Spirometry is diagnostic: post-bronchodilator FEV1/FVC <0.70 confirms airflow obstruction. GOLD staging based on FEV1 severity. Chest X-ray shows hyperinflation. DLCO is reduced in emphysema.',
    treatment: 'Smoking cessation is paramount. Bronchodilators are mainstay: LAMA and/or LABA. Add ICS for frequent exacerbations. Pulmonary rehabilitation. Long-term oxygen therapy for chronic hypoxemia.',
    clinicalPearls: [
      'Smoking cessation is the only intervention that slows FEV1 decline',
      'Oxygen goal is 88-92% to avoid CO2 retention',
      'Exacerbations often triggered by infections or air pollution',
      'Screen for alpha-1 antitrypsin deficiency in patients <45 years'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/chronic-obstructive-pulmonary-disease-and-related-disorders/chronic-obstructive-pulmonary-disease-copd'
  },

  {
    topic: 'Community-Acquired Pneumonia',
    keywords: ['pneumonia', 'cap', 'community acquired pneumonia', 'bacterial pneumonia'],
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
    keywords: ['pulmonary embolism', 'pe', 'lung embolism', 'pulmonary embolus'],
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
    keywords: ['ards', 'acute respiratory distress syndrome', 'acute lung injury'],
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
];
