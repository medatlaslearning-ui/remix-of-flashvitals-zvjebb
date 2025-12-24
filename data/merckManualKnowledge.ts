
/**
 * Merck Manual Professional Knowledge Base
 * 
 * This file contains comprehensive medical knowledge extracted from the Merck Manual Professional.
 * Each entry includes:
 * - Topic name and keywords for matching
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Merck Manual URL for reference
 */

export interface MerckManualEntry {
  topic: string;
  keywords: string[];
  system: string;
  pathophysiology: string;
  clinicalPresentation: string;
  diagnosticApproach: string;
  treatment: string;
  clinicalPearls: string[];
  merckUrl: string;
}

export const merckManualKnowledge: MerckManualEntry[] = [
  // CARDIOLOGY
  {
    topic: 'Atrial Fibrillation',
    keywords: ['atrial fibrillation', 'afib', 'af', 'irregular rhythm', 'arrhythmia'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, atrial fibrillation is characterized by rapid, disorganized atrial electrical activity resulting in ineffective atrial contraction and an irregularly irregular ventricular response. The condition arises from multiple reentrant wavelets in the atria, often triggered by ectopic foci near the pulmonary veins. This leads to loss of coordinated atrial mechanical function and increased risk of thrombus formation in the left atrial appendage.',
    clinicalPresentation: 'Patients may be asymptomatic or present with palpitations, dyspnea, chest discomfort, fatigue, or lightheadedness. Physical examination reveals an irregularly irregular pulse. Some patients present with complications such as stroke or heart failure exacerbation.',
    diagnosticApproach: 'Diagnosis is confirmed by ECG showing absence of P waves, irregularly irregular R-R intervals, and fibrillatory waves. Evaluation includes assessment for underlying causes (thyroid disease, valvular disease, hypertension), echocardiography to evaluate cardiac structure and function, and risk stratification using CHA2DS2-VASc score for stroke risk.',
    treatment: 'Management involves rate control (beta-blockers, calcium channel blockers, or digoxin), rhythm control (cardioversion, antiarrhythmic drugs, or catheter ablation), and anticoagulation based on CHA2DS2-VASc score. Direct oral anticoagulants (DOACs) are preferred over warfarin for most patients. Catheter ablation is increasingly used for symptomatic patients, particularly those with paroxysmal AF.',
    clinicalPearls: [
      'Always assess CHA2DS2-VASc score to determine anticoagulation need',
      'Rate control is often sufficient for asymptomatic elderly patients',
      'New-onset AF with hemodynamic instability requires urgent cardioversion',
      'Screen for sleep apnea and treat modifiable risk factors'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmias-and-conduction-disorders/atrial-fibrillation'
  },
  {
    topic: 'Heart Failure',
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'cardiac failure'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, heart failure is a clinical syndrome resulting from structural or functional cardiac disorders that impair ventricular filling or ejection. HFrEF (reduced ejection fraction <40%) involves impaired systolic function, while HFpEF (preserved EF ≥50%) involves diastolic dysfunction with impaired ventricular relaxation and filling. Neurohormonal activation (RAAS, sympathetic nervous system) initially compensates but ultimately contributes to disease progression through adverse remodeling.',
    clinicalPresentation: 'Patients present with dyspnea (exertional, orthopnea, paroxysmal nocturnal dyspnea), fatigue, fluid retention (peripheral edema, ascites), and reduced exercise tolerance. Physical examination may reveal elevated jugular venous pressure, S3 gallop, pulmonary rales, hepatomegaly, and peripheral edema. Right heart failure manifests with systemic congestion, while left heart failure causes pulmonary congestion.',
    diagnosticApproach: 'Diagnosis requires clinical assessment plus objective evidence of cardiac dysfunction. BNP or NT-proBNP levels support diagnosis. Echocardiography is essential to assess ejection fraction, valvular function, and diastolic parameters. Chest X-ray may show cardiomegaly and pulmonary congestion. ECG and laboratory tests identify underlying causes and comorbidities.',
    treatment: 'HFrEF management includes guideline-directed medical therapy (GDMT): ACE inhibitors/ARBs/ARNI, beta-blockers, mineralocorticoid receptor antagonists, and SGLT2 inhibitors. Diuretics manage volume overload. Device therapy (ICD, CRT) for selected patients. HFpEF treatment focuses on managing comorbidities, diuretics for congestion, and SGLT2 inhibitors. Advanced therapies include mechanical circulatory support and transplantation.',
    clinicalPearls: [
      'Start all four pillars of GDMT early and titrate to target doses',
      'SGLT2 inhibitors benefit both HFrEF and HFpEF patients',
      'Daily weights help detect early decompensation',
      'Sodium restriction (<2g/day) and fluid management are essential'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/heart-failure-hf'
  },
  {
    topic: 'Myocardial Infarction',
    keywords: ['myocardial infarction', 'mi', 'heart attack', 'stemi', 'nstemi', 'acute coronary syndrome', 'acs'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, myocardial infarction results from acute coronary artery occlusion, typically due to atherosclerotic plaque rupture with superimposed thrombosis. STEMI involves complete occlusion with transmural infarction, while NSTEMI involves partial occlusion or transient complete occlusion with subendocardial infarction. Myocardial necrosis begins within 20-40 minutes of complete occlusion and progresses over hours.',
    clinicalPresentation: 'Classic presentation includes substernal chest pressure or pain radiating to left arm, jaw, or back, often accompanied by diaphoresis, nausea, and dyspnea. Symptoms typically last >20 minutes. Atypical presentations (dyspnea, fatigue, epigastric pain) are common in elderly, diabetic, and female patients. Physical examination may be unremarkable or show signs of complications (heart failure, arrhythmias).',
    diagnosticApproach: 'ECG is critical: STEMI shows ST elevation ≥1mm in 2 contiguous leads (≥2mm in V2-V3). NSTEMI shows ST depression, T-wave inversion, or may be normal. Cardiac troponin (I or T) is the preferred biomarker, rising 3-4 hours post-infarction and peaking at 24 hours. Serial troponins improve sensitivity. Echocardiography assesses wall motion abnormalities and complications.',
    treatment: 'Immediate management includes aspirin 325mg, antiplatelet therapy (P2Y12 inhibitor), anticoagulation, and pain control. STEMI requires urgent reperfusion: primary PCI (preferred, <90 minutes) or fibrinolysis if PCI unavailable (<120 minutes). NSTEMI management is risk-stratified: high-risk patients undergo early invasive strategy. Post-MI care includes beta-blockers, ACE inhibitors, statins, and cardiac rehabilitation.',
    clinicalPearls: [
      'Time is muscle - door-to-balloon time <90 minutes for STEMI',
      'Aspirin should be given immediately and chewed for faster absorption',
      'New LBBB with chest pain is a STEMI equivalent',
      'Posterior MI shows ST depression in V1-V3; check posterior leads'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/coronary-artery-disease/acute-myocardial-infarction-mi'
  },
  {
    topic: 'Aortic Stenosis',
    keywords: ['aortic stenosis', 'as', 'aortic valve stenosis', 'valvular stenosis'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, aortic stenosis involves progressive narrowing of the aortic valve orifice, most commonly due to age-related calcific degeneration, bicuspid aortic valve, or rheumatic disease. The obstruction increases left ventricular afterload, leading to compensatory concentric hypertrophy. Eventually, the ventricle fails to maintain adequate cardiac output, and symptoms develop.',
    clinicalPresentation: 'The classic triad includes angina, syncope, and dyspnea. Angina results from increased myocardial oxygen demand and reduced coronary perfusion. Syncope occurs with exertion due to inability to increase cardiac output. Dyspnea indicates heart failure. Physical examination reveals a crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, delayed and diminished carotid upstroke (pulsus parvus et tardus), and narrow pulse pressure.',
    diagnosticApproach: 'Echocardiography is diagnostic, measuring valve area (<1.0 cm² = severe), mean gradient (>40 mmHg = severe), and peak velocity (>4 m/s = severe). ECG may show left ventricular hypertrophy. Cardiac catheterization is performed when noninvasive tests are inconclusive or to assess coronary anatomy before valve replacement.',
    treatment: 'Symptomatic severe AS requires aortic valve replacement. Surgical AVR is preferred for low-risk patients. TAVR is indicated for high surgical risk or inoperable patients and increasingly used in intermediate and low-risk patients. Medical therapy has no proven benefit in delaying progression. Asymptomatic patients require close monitoring with serial echocardiography.',
    clinicalPearls: [
      'Once symptoms develop, average survival is <2 years without intervention',
      'Avoid vasodilators as they can cause hypotension',
      'Low-flow, low-gradient AS requires dobutamine stress echo',
      'Screen for coronary disease before valve replacement'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/valvular-disorders/aortic-stenosis'
  },

  // PULMONARY
  {
    topic: 'Pneumonia',
    keywords: ['pneumonia', 'cap', 'community acquired pneumonia', 'lung infection', 'pneumonitis'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pneumonia is an acute infection of the pulmonary parenchyma caused by bacteria, viruses, fungi, or parasites. Streptococcus pneumoniae is the most common bacterial cause. Pathogens reach the lungs via aspiration, inhalation, or hematogenous spread. The inflammatory response causes alveolar filling with exudate, impairing gas exchange.',
    clinicalPresentation: 'Typical bacterial pneumonia presents with fever, productive cough with purulent sputum, pleuritic chest pain, and dyspnea. Physical examination reveals tachypnea, crackles, bronchial breath sounds, and dullness to percussion over the affected area. Atypical pneumonia (Mycoplasma, Chlamydia, Legionella) presents with gradual onset, dry cough, and extrapulmonary symptoms. Elderly patients may present atypically with confusion or functional decline.',
    diagnosticApproach: 'Chest X-ray confirms diagnosis, showing lobar consolidation (typical) or interstitial infiltrates (atypical). Laboratory tests include CBC (leukocytosis), inflammatory markers, and blood cultures in hospitalized patients. Sputum culture has limited utility. Severity assessment using CURB-65 or PSI guides disposition. Consider Legionella and pneumococcal urinary antigens in severe cases.',
    treatment: 'Outpatient CAP: macrolide or doxycycline; add beta-lactam if comorbidities present. Inpatient non-ICU: beta-lactam plus macrolide or respiratory fluoroquinolone. ICU: beta-lactam plus macrolide or fluoroquinolone. Duration typically 5-7 days for uncomplicated cases. Supportive care includes hydration, oxygen, and antipyretics. Complications include empyema, lung abscess, and respiratory failure.',
    clinicalPearls: [
      'CURB-65 score ≥2 suggests need for hospitalization',
      'Legionella causes hyponatremia and GI symptoms',
      'Aspiration pneumonia involves anaerobes; treat with ampicillin-sulbactam',
      'Failure to improve in 72 hours warrants reassessment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pneumonia/overview-of-pneumonia'
  },
  {
    topic: 'Chronic Obstructive Pulmonary Disease',
    keywords: ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'obstructive lung disease'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, COPD is characterized by progressive airflow limitation that is not fully reversible. Chronic bronchitis involves airway inflammation and mucus hypersecretion. Emphysema involves destruction of alveolar walls and loss of elastic recoil. Smoking is the primary risk factor, causing oxidative stress, protease-antiprotease imbalance, and chronic inflammation. Alpha-1 antitrypsin deficiency is a genetic cause.',
    clinicalPresentation: 'Patients present with progressive dyspnea, chronic cough, and sputum production. Symptoms worsen over years. Physical examination may reveal prolonged expiration, wheezing, barrel chest, use of accessory muscles, and pursed-lip breathing. Advanced disease causes cyanosis, cor pulmonale (right heart failure), and cachexia. Acute exacerbations feature increased dyspnea, cough, and sputum purulence.',
    diagnosticApproach: 'Spirometry is diagnostic: post-bronchodilator FEV1/FVC <0.70 confirms airflow obstruction. GOLD staging based on FEV1 severity. Chest X-ray shows hyperinflation and flattened diaphragms. HRCT differentiates emphysema from chronic bronchitis. Alpha-1 antitrypsin level in young patients or those with basilar emphysema. Assess for comorbidities (cardiovascular disease, osteoporosis, depression).',
    treatment: 'Smoking cessation is paramount. Bronchodilators are mainstay: LAMA and/or LABA. Add ICS for frequent exacerbations or eosinophilia. Pulmonary rehabilitation improves function and quality of life. Long-term oxygen therapy (>15 hours/day) for chronic hypoxemia (PaO2 <55 mmHg). Vaccinations (influenza, pneumococcal, COVID-19) prevent exacerbations. Severe disease may require lung volume reduction or transplantation.',
    clinicalPearls: [
      'Smoking cessation is the only intervention that slows FEV1 decline',
      'Oxygen goal is 88-92% to avoid CO2 retention',
      'Exacerbations often triggered by infections or air pollution',
      'Screen for alpha-1 antitrypsin deficiency in patients <45 years'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/chronic-obstructive-pulmonary-disease-and-related-disorders/chronic-obstructive-pulmonary-disease-copd'
  },
  {
    topic: 'Asthma',
    keywords: ['asthma', 'reactive airway disease', 'bronchospasm', 'wheezing'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, asthma is a chronic inflammatory disorder of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. Type 2 inflammation (eosinophils, mast cells, Th2 cells) predominates in allergic asthma. Triggers include allergens, exercise, cold air, respiratory infections, and irritants. Airway remodeling can occur with chronic inflammation.',
    clinicalPresentation: 'Patients experience episodic wheezing, dyspnea, chest tightness, and cough, often worse at night or early morning. Symptoms are triggered by specific exposures and improve with bronchodilators. Physical examination during exacerbation reveals wheezing, prolonged expiration, and use of accessory muscles. Severe exacerbations may present with inability to speak in full sentences, silent chest (minimal air movement), and respiratory distress.',
    diagnosticApproach: 'Spirometry shows reversible obstruction: FEV1/FVC <0.70 that improves ≥12% and ≥200 mL after bronchodilator. Peak flow monitoring tracks variability. Methacholine challenge test confirms airway hyperresponsiveness when spirometry is normal. Assess for allergic triggers with skin testing or specific IgE. Fractional exhaled nitric oxide (FeNO) indicates eosinophilic inflammation.',
    treatment: 'Step-wise approach based on severity. All patients need SABA for rescue. Persistent asthma requires controller therapy: low-dose ICS is first-line. Add LABA for inadequate control. Severe asthma may require high-dose ICS/LABA, leukotriene modifiers, or biologics (anti-IgE, anti-IL-5, anti-IL-4R). Acute exacerbations: SABA, systemic corticosteroids, oxygen. Severe exacerbations may require magnesium sulfate or mechanical ventilation.',
    clinicalPearls: [
      'ICS are the most effective long-term controller medication',
      'LABA should never be used without ICS in asthma',
      'Silent chest indicates severe obstruction and impending respiratory failure',
      'Aspirin-exacerbated respiratory disease (AERD) requires leukotriene modifier'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/asthma-and-related-disorders/asthma'
  },
  {
    topic: 'Pulmonary Embolism',
    keywords: ['pulmonary embolism', 'pe', 'blood clot', 'embolus', 'venous thromboembolism'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pulmonary embolism occurs when thrombus (usually from deep vein thrombosis) lodges in the pulmonary arterial system, causing mechanical obstruction and release of vasoactive mediators. This increases pulmonary vascular resistance and right ventricular afterload. Large emboli can cause right ventricular failure and hemodynamic collapse. Gas exchange is impaired through increased dead space ventilation and ventilation-perfusion mismatch.',
    clinicalPresentation: 'Classic triad of dyspnea, pleuritic chest pain, and hemoptysis is uncommon. Most patients present with sudden-onset dyspnea and tachypnea. Pleuritic chest pain suggests peripheral embolism with pleural irritation. Massive PE causes hypotension, syncope, and signs of right heart strain. Physical examination may reveal tachycardia, tachypnea, hypoxemia, and signs of DVT. Submassive PE shows RV dysfunction without hypotension.',
    diagnosticApproach: 'Clinical probability assessment using Wells criteria or Geneva score guides testing. D-dimer has high sensitivity but low specificity; negative D-dimer in low-risk patients excludes PE. CT pulmonary angiography (CTPA) is the gold standard, showing filling defects. V/Q scan is alternative when CT contraindicated. ECG may show sinus tachycardia, S1Q3T3 pattern, or right heart strain. Echocardiography assesses RV function. Troponin and BNP indicate RV strain.',
    treatment: 'Anticoagulation is primary treatment: DOACs (apixaban, rivaroxaban) preferred over warfarin. Hemodynamically unstable patients require thrombolysis or embolectomy. Submassive PE with RV dysfunction may benefit from thrombolysis in selected cases. IVC filter if anticoagulation contraindicated. Duration: 3 months for provoked PE, extended for unprovoked or recurrent PE. Supportive care includes oxygen and hemodynamic support.',
    clinicalPearls: [
      'Massive PE defined by hypotension; submassive by RV strain without hypotension',
      'Saddle embolus at main PA bifurcation may or may not cause hemodynamic instability',
      'Pregnancy increases PE risk; use LMWH for treatment',
      'Consider thrombophilia testing for unprovoked PE in young patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/pulmonary-embolism-pe/pulmonary-embolism-pe'
  },
  {
    topic: 'Pleural Effusion',
    keywords: ['pleural effusion', 'fluid in lungs', 'pleural fluid', 'effusion'],
    system: 'Pulmonary',
    pathophysiology: 'According to Merck Manual Professional, pleural effusion is abnormal accumulation of fluid in the pleural space. Transudates result from imbalance in hydrostatic and oncotic pressures (heart failure, cirrhosis, nephrotic syndrome). Exudates result from increased capillary permeability or impaired lymphatic drainage due to inflammation, infection, or malignancy. Normal pleural fluid production is 10-20 mL/day, reabsorbed by lymphatics.',
    clinicalPresentation: 'Small effusions may be asymptomatic. Larger effusions cause dyspnea, pleuritic chest pain, and cough. Physical examination reveals decreased breath sounds, dullness to percussion, decreased tactile fremitus, and possible pleural friction rub. Massive effusions cause severe dyspnea and may shift the mediastinum. Associated findings depend on underlying cause (fever in infection, weight loss in malignancy).',
    diagnosticApproach: 'Chest X-ray shows blunting of costophrenic angle (>75 mL), meniscus sign, or complete opacification. Lateral decubitus view detects smaller effusions. Ultrasound guides thoracentesis and detects loculations. CT provides detailed assessment. Thoracentesis with pleural fluid analysis is essential: Light\'s criteria differentiate exudate from transudate. Analyze protein, LDH, glucose, pH, cell count, cytology, and cultures. Low pH (<7.2) or glucose suggests complicated parapneumonic effusion or empyema.',
    treatment: 'Treat underlying cause. Transudates often respond to diuretics. Exudates require specific treatment: antibiotics for parapneumonic effusion, drainage for empyema, pleurodesis for malignant effusion. Therapeutic thoracentesis provides symptomatic relief. Chest tube drainage for complicated effusions. Video-assisted thoracoscopic surgery (VATS) for loculated effusions or diagnostic uncertainty. Monitor for reaccumulation.',
    clinicalPearls: [
      'Light\'s criteria: exudate if pleural/serum protein >0.5, pleural/serum LDH >0.6, or pleural LDH >2/3 upper limit of normal',
      'Bloody effusion suggests malignancy, PE, or trauma',
      'Milky effusion indicates chylothorax (high triglycerides)',
      'Empyema requires drainage; antibiotics alone insufficient'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pleural-effusion'
  },

  // RENAL
  {
    topic: 'Acute Kidney Injury',
    keywords: ['acute kidney injury', 'aki', 'acute renal failure', 'arf', 'kidney failure'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, acute kidney injury is characterized by rapid decline in kidney function over hours to days, resulting in accumulation of nitrogenous wastes and dysregulation of fluid, electrolyte, and acid-base balance. AKI is classified as prerenal (decreased renal perfusion), intrinsic (parenchymal damage), or postrenal (obstruction). Prerenal AKI is most common and reversible if perfusion restored. Intrinsic AKI involves tubular, glomerular, interstitial, or vascular injury.',
    clinicalPresentation: 'Many patients are asymptomatic initially, with AKI detected by laboratory abnormalities. Symptoms may include decreased urine output (oliguria <400 mL/day), fluid overload (edema, dyspnea), uremic symptoms (nausea, confusion, pericarditis), and electrolyte disturbances (hyperkalemia). Severe AKI causes metabolic acidosis and uremia requiring dialysis. Physical examination may reveal volume depletion or overload, depending on cause.',
    diagnosticApproach: 'Diagnosis based on rising serum creatinine (≥0.3 mg/dL increase within 48 hours or ≥1.5x baseline within 7 days) or oliguria (<0.5 mL/kg/hr for 6 hours). Urinalysis and microscopy differentiate causes: prerenal shows hyaline casts, ATN shows muddy brown casts, glomerulonephritis shows RBC casts. Fractional excretion of sodium (FENa) <1% suggests prerenal. Renal ultrasound evaluates for obstruction and kidney size. Consider renal biopsy for unclear etiology.',
    treatment: 'Identify and treat underlying cause. Prerenal: restore volume and perfusion. Intrinsic: supportive care, avoid nephrotoxins, adjust medication doses. Postrenal: relieve obstruction. Manage complications: restrict fluids if overloaded, treat hyperkalemia, correct acidosis. Indications for dialysis (AEIOU): acidosis, electrolyte abnormalities, intoxication, overload, uremia. Most AKI is reversible with appropriate management, but severe cases may progress to CKD.',
    clinicalPearls: [
      'FENa <1% suggests prerenal AKI; >2% suggests intrinsic AKI',
      'Muddy brown casts are pathognomonic for acute tubular necrosis',
      'Contrast-induced AKI peaks at 3-5 days post-exposure',
      'Avoid NSAIDs, ACE inhibitors, and aminoglycosides in AKI'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/acute-kidney-injury/acute-kidney-injury-aki'
  },
  {
    topic: 'Chronic Kidney Disease',
    keywords: ['chronic kidney disease', 'ckd', 'chronic renal failure', 'kidney disease', 'renal insufficiency'],
    system: 'Renal',
    pathophysiology: 'According to Merck Manual Professional, chronic kidney disease is progressive loss of kidney function over months to years, defined by GFR <60 mL/min/1.73m² or kidney damage markers for ≥3 months. Common causes include diabetes, hypertension, glomerulonephritis, and polycystic kidney disease. Progressive nephron loss leads to compensatory hyperfiltration in remaining nephrons, ultimately causing further damage. CKD results in uremia, anemia, mineral-bone disorder, and cardiovascular disease.',
    clinicalPresentation: 'Early CKD is often asymptomatic. As GFR declines, patients develop fatigue, decreased appetite, nausea, pruritus, and altered mental status. Advanced CKD (stage 4-5) causes uremic symptoms: pericarditis, neuropathy, encephalopathy, and bleeding diathesis. Physical examination may reveal hypertension, edema, pallor, uremic frost (late finding), and signs of underlying disease (diabetic retinopathy).',
    diagnosticApproach: 'Diagnosis requires persistent elevation of serum creatinine or reduction in estimated GFR, or evidence of kidney damage (proteinuria, hematuria, structural abnormalities). Stage based on GFR: Stage 1 (≥90), Stage 2 (60-89), Stage 3a (45-59), Stage 3b (30-44), Stage 4 (15-29), Stage 5 (<15). Urinalysis detects proteinuria and hematuria. Renal ultrasound shows kidney size and structure. Identify and treat reversible causes and complications.',
    treatment: 'Slow progression by controlling blood pressure (target <130/80), managing diabetes (A1C <7%), using ACE inhibitors or ARBs for proteinuria, and avoiding nephrotoxins. Treat complications: anemia (ESAs, iron), mineral-bone disorder (phosphate binders, vitamin D, calcimimetics), acidosis (sodium bicarbonate), hyperkalemia (dietary restriction, binders). Prepare for renal replacement therapy (dialysis or transplantation) when GFR <20 mL/min. Dietary modifications include protein restriction and potassium/phosphate management.',
    clinicalPearls: [
      'ACE inhibitors/ARBs slow CKD progression in proteinuric patients',
      'Anemia in CKD typically occurs when GFR <30 mL/min',
      'Avoid NSAIDs and contrast agents in CKD',
      'Early nephrology referral (GFR <30) improves outcomes'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/chronic-kidney-disease/chronic-kidney-disease'
  },

  // GASTROENTEROLOGY
  {
    topic: 'Gastroesophageal Reflux Disease',
    keywords: ['gerd', 'gastroesophageal reflux', 'acid reflux', 'heartburn', 'reflux disease'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, GERD results from inappropriate relaxation of the lower esophageal sphincter (LES), allowing gastric contents to reflux into the esophagus. Contributing factors include hiatal hernia, delayed gastric emptying, and increased intra-abdominal pressure. Chronic acid exposure causes esophageal mucosal injury, potentially leading to erosive esophagitis, strictures, Barrett\'s esophagus, and adenocarcinoma.',
    clinicalPresentation: 'Classic symptoms include heartburn (retrosternal burning) and regurgitation, typically worse after meals, when lying down, or bending over. Atypical presentations include chronic cough, laryngitis, asthma exacerbations, and dental erosions. Alarm symptoms (dysphagia, odynophagia, weight loss, GI bleeding) suggest complications. Physical examination is usually unremarkable.',
    diagnosticApproach: 'Diagnosis is often clinical in patients with typical symptoms. Empiric PPI trial is reasonable. Endoscopy indicated for alarm symptoms, refractory symptoms, or long-standing GERD (screen for Barrett\'s). Endoscopy may be normal (non-erosive reflux disease) or show erosive esophagitis, strictures, or Barrett\'s. Ambulatory pH monitoring confirms acid reflux in unclear cases. Esophageal manometry before anti-reflux surgery.',
    treatment: 'Lifestyle modifications: elevate head of bed, avoid late meals, lose weight, avoid trigger foods (fatty foods, chocolate, caffeine, alcohol). Pharmacotherapy: PPIs are most effective (omeprazole, esomeprazole). H2 blockers for mild symptoms. Antacids for immediate relief. Refractory GERD may require high-dose or twice-daily PPI. Surgical fundoplication for medication-refractory disease or patient preference. Endoscopic therapies emerging.',
    clinicalPearls: [
      'PPIs should be taken 30 minutes before meals for optimal effect',
      'Barrett\'s esophagus requires surveillance endoscopy',
      'Chronic PPI use associated with increased fracture risk and C. difficile',
      'Refractory symptoms may indicate non-acid reflux or functional disorder'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/esophageal-and-swallowing-disorders/gastroesophageal-reflux-disease-gerd'
  },
  {
    topic: 'Inflammatory Bowel Disease',
    keywords: ['inflammatory bowel disease', 'ibd', 'crohn disease', 'ulcerative colitis', 'crohns', 'uc'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, IBD comprises Crohn\'s disease and ulcerative colitis, chronic inflammatory conditions of the GI tract. Crohn\'s can affect any part of the GI tract (mouth to anus) with transmural inflammation and skip lesions. UC is limited to the colon with continuous mucosal inflammation starting from the rectum. Pathogenesis involves genetic susceptibility, environmental triggers, dysregulated immune response, and altered gut microbiome.',
    clinicalPresentation: 'Crohn\'s presents with abdominal pain, diarrhea (often non-bloody), weight loss, and perianal disease (fistulas, abscesses). Extraintestinal manifestations include arthritis, uveitis, erythema nodosum, and primary sclerosing cholangitis. UC presents with bloody diarrhea, urgency, tenesmus, and abdominal cramping. Severe colitis causes fever, tachycardia, and toxic megacolon. Both conditions have relapsing-remitting course.',
    diagnosticApproach: 'Diagnosis requires combination of clinical, endoscopic, histologic, and radiologic findings. Laboratory tests show anemia, elevated inflammatory markers (CRP, ESR), and fecal calprotectin. Colonoscopy with biopsies is essential: Crohn\'s shows skip lesions, cobblestoning, and non-caseating granulomas; UC shows continuous inflammation, loss of vascular pattern, and crypt abscesses. CT or MR enterography evaluates small bowel in Crohn\'s. Exclude infectious causes.',
    treatment: 'Induce and maintain remission. Mild-moderate UC: 5-ASA (mesalamine). Moderate-severe disease: corticosteroids for induction, then immunomodulators (azathioprine, 6-MP) or biologics (anti-TNF, anti-integrin, anti-IL-12/23) for maintenance. Crohn\'s: corticosteroids for flares, immunomodulators or biologics for maintenance. Severe disease may require hospitalization, IV steroids, or surgery. Nutritional support important. Monitor for complications: strictures, fistulas, abscesses, colorectal cancer.',
    clinicalPearls: [
      'Fecal calprotectin useful for monitoring disease activity',
      'Crohn\'s can cause B12 deficiency if terminal ileum involved',
      'UC increases colorectal cancer risk; surveillance colonoscopy needed',
      'Smoking worsens Crohn\'s but may improve UC (still recommend cessation)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/overview-of-inflammatory-bowel-disease'
  },

  // ENDOCRINE
  {
    topic: 'Diabetes Mellitus',
    keywords: ['diabetes', 'diabetes mellitus', 'type 1 diabetes', 'type 2 diabetes', 'dm', 't1dm', 't2dm', 'hyperglycemia'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, diabetes mellitus is characterized by chronic hyperglycemia due to defects in insulin secretion, insulin action, or both. Type 1 DM results from autoimmune destruction of pancreatic beta cells, causing absolute insulin deficiency. Type 2 DM involves insulin resistance and relative insulin deficiency. Chronic hyperglycemia causes microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (coronary, cerebrovascular, peripheral vascular disease) complications.',
    clinicalPresentation: 'Classic symptoms include polyuria, polydipsia, polyphagia, and weight loss. Type 1 typically presents acutely in children/young adults, often with diabetic ketoacidosis. Type 2 develops gradually in adults, often asymptomatic initially and detected on screening. Chronic complications include vision changes, numbness/tingling, slow-healing wounds, and recurrent infections. Physical examination may reveal acanthosis nigricans (insulin resistance), diabetic foot ulcers, or signs of complications.',
    diagnosticApproach: 'Diagnosis requires: fasting glucose ≥126 mg/dL, random glucose ≥200 mg/dL with symptoms, 2-hour OGTT ≥200 mg/dL, or A1C ≥6.5%. Confirm with repeat testing. C-peptide and autoantibodies (GAD, IA-2, ZnT8) differentiate type 1 from type 2. Screen for complications: annual dilated eye exam, urine albumin-to-creatinine ratio, foot exam, lipid panel, and cardiovascular risk assessment.',
    treatment: 'Type 1: intensive insulin therapy (basal-bolus regimen or insulin pump), carbohydrate counting, glucose monitoring. Type 2: lifestyle modification (diet, exercise, weight loss) first-line. Metformin is initial pharmacotherapy. Add SGLT2 inhibitor or GLP-1 agonist for cardiovascular/renal protection. Insulin for inadequate control. Target A1C <7% for most patients. Manage cardiovascular risk factors: statin, ACE inhibitor/ARB, aspirin. Screen and treat complications.',
    clinicalPearls: [
      'SGLT2 inhibitors and GLP-1 agonists reduce cardiovascular and renal events',
      'Metformin is contraindicated in severe renal impairment (eGFR <30)',
      'Tight glycemic control prevents microvascular complications',
      'Screen for diabetic retinopathy annually starting at diagnosis'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-disorders-of-carbohydrate-metabolism/diabetes-mellitus-dm'
  },
  {
    topic: 'Hypothyroidism',
    keywords: ['hypothyroidism', 'underactive thyroid', 'low thyroid', 'hashimoto', 'myxedema'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, hypothyroidism results from insufficient thyroid hormone production. Primary hypothyroidism (most common) involves thyroid gland dysfunction, typically due to Hashimoto\'s thyroiditis (autoimmune), radioiodine therapy, or thyroidectomy. Secondary hypothyroidism results from pituitary TSH deficiency. Thyroid hormones regulate metabolism, and deficiency causes widespread metabolic slowing.',
    clinicalPresentation: 'Symptoms develop gradually and include fatigue, cold intolerance, weight gain, constipation, dry skin, hair loss, and cognitive slowing. Physical examination reveals bradycardia, delayed deep tendon reflexes, periorbital edema, and non-pitting edema (myxedema). Severe hypothyroidism (myxedema coma) is life-threatening, presenting with hypothermia, altered mental status, and cardiovascular collapse.',
    diagnosticApproach: 'Diagnosis based on elevated TSH and low free T4 (primary hypothyroidism) or low TSH and low free T4 (secondary hypothyroidism). Subclinical hypothyroidism shows elevated TSH with normal free T4. TPO antibodies confirm Hashimoto\'s thyroiditis. Assess for other autoimmune diseases. Lipid panel often shows hyperlipidemia. ECG may show bradycardia and low voltage.',
    treatment: 'Levothyroxine (synthetic T4) is treatment of choice. Start low dose (25-50 mcg) in elderly or cardiac patients, higher dose (1.6 mcg/kg) in young healthy patients. Adjust dose based on TSH every 6-8 weeks until normalized. Take on empty stomach, 30-60 minutes before breakfast. Avoid concurrent calcium, iron, or PPI. Monitor TSH annually once stable. Treat myxedema coma with IV levothyroxine and supportive care.',
    clinicalPearls: [
      'TSH is best screening test for primary hypothyroidism',
      'Subclinical hypothyroidism (TSH 4.5-10) may not require treatment',
      'Pregnancy increases levothyroxine requirements by 30-50%',
      'Many medications interfere with levothyroxine absorption'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/thyroid-disorders/hypothyroidism'
  },

  // HEMATOLOGY
  {
    topic: 'Anemia',
    keywords: ['anemia', 'low hemoglobin', 'low hematocrit', 'iron deficiency', 'anemic'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, anemia is defined as hemoglobin below normal range (men <13.5 g/dL, women <12 g/dL). Anemia results from decreased RBC production, increased destruction, or blood loss. Classification by MCV: microcytic (iron deficiency, thalassemia, chronic disease), normocytic (acute blood loss, hemolysis, chronic disease, renal failure), or macrocytic (B12/folate deficiency, alcohol, medications). Tissue hypoxia triggers compensatory mechanisms: increased cardiac output, 2,3-DPG production, and erythropoietin release.',
    clinicalPresentation: 'Symptoms depend on severity and rapidity of onset. Gradual anemia may be asymptomatic until severe. Common symptoms include fatigue, weakness, dyspnea on exertion, palpitations, and lightheadedness. Severe anemia causes chest pain, syncope, and heart failure. Physical examination reveals pallor (conjunctiva, palmar creases), tachycardia, flow murmur, and signs of underlying cause (koilonychia in iron deficiency, jaundice in hemolysis).',
    diagnosticApproach: 'CBC with differential and reticulocyte count. MCV guides classification. Iron studies (ferritin, iron, TIBC, transferrin saturation) for microcytic anemia. Peripheral smear evaluates RBC morphology. Hemolysis workup: LDH, haptoglobin, indirect bilirubin, Coombs test. B12 and folate levels for macrocytic anemia. Consider bone marrow biopsy for unexplained anemia. Identify and treat underlying cause.',
    treatment: 'Treat underlying cause. Iron deficiency: oral iron supplementation (ferrous sulfate 325 mg TID), IV iron if intolerant or malabsorption. B12 deficiency: IM or high-dose oral B12. Folate deficiency: oral folic acid. Anemia of chronic disease: treat underlying condition, consider ESAs if severe. Hemolytic anemia: treat cause, may require immunosuppression or splenectomy. Transfuse for symptomatic anemia or hemoglobin <7 g/dL (higher threshold in cardiac disease).',
    clinicalPearls: [
      'Ferritin <15 ng/mL is diagnostic of iron deficiency',
      'Reticulocyte count differentiates production vs. destruction/loss',
      'Pernicious anemia requires lifelong B12 supplementation',
      'Transfuse slowly in chronic anemia to avoid volume overload'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias/overview-of-anemia'
  },

  // NEUROLOGY
  {
    topic: 'Stroke',
    keywords: ['stroke', 'cva', 'cerebrovascular accident', 'brain attack', 'ischemic stroke', 'hemorrhagic stroke'],
    system: 'Neurology',
    pathophysiology: 'According to Merck Manual Professional, stroke results from interruption of blood supply to the brain, causing neuronal injury and death. Ischemic stroke (87%) results from thrombotic or embolic arterial occlusion. Hemorrhagic stroke (13%) results from vessel rupture (intracerebral or subarachnoid). Risk factors include hypertension, diabetes, hyperlipidemia, atrial fibrillation, and smoking. Ischemic cascade begins within minutes, with irreversible damage in core and potentially salvageable penumbra.',
    clinicalPresentation: 'Sudden onset of focal neurological deficits: weakness, numbness, speech difficulty, vision loss, ataxia, or altered consciousness. Symptoms depend on vascular territory: anterior circulation (MCA) causes contralateral hemiparesis and aphasia; posterior circulation causes vertigo, diplopia, and ataxia. Hemorrhagic stroke often presents with severe headache, vomiting, and decreased consciousness. FAST assessment: Face drooping, Arm weakness, Speech difficulty, Time to call 911.',
    diagnosticApproach: 'Immediate non-contrast CT to exclude hemorrhage before thrombolysis. CT shows hyperdense vessel sign acutely, hypodensity develops over hours. MRI with diffusion-weighted imaging is more sensitive for acute ischemia. CT or MR angiography identifies large vessel occlusion. Evaluate for stroke etiology: ECG (atrial fibrillation), echocardiography (cardiac source), carotid ultrasound (stenosis), hypercoagulable workup in young patients.',
    treatment: 'Ischemic stroke: IV alteplase within 4.5 hours if eligible (no hemorrhage, recent surgery, or anticoagulation). Mechanical thrombectomy for large vessel occlusion within 24 hours. Aspirin 325 mg within 24-48 hours. Blood pressure management: permissive hypertension initially unless >220/120. Secondary prevention: antiplatelet therapy, statin, blood pressure control, anticoagulation for atrial fibrillation. Hemorrhagic stroke: blood pressure control, reverse anticoagulation, neurosurgical evaluation.',
    clinicalPearls: [
      'Time is brain - door-to-needle time <60 minutes for thrombolysis',
      'Mechanical thrombectomy extends treatment window to 24 hours',
      'Carotid endarterectomy for symptomatic stenosis >70%',
      'Dual antiplatelet therapy (aspirin + clopidogrel) for 21 days after minor stroke'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/neurologic-disorders/stroke/overview-of-stroke'
  },

  // INFECTIOUS DISEASE
  {
    topic: 'Tuberculosis',
    keywords: ['tuberculosis', 'tb', 'mycobacterium tuberculosis', 'latent tb', 'active tb'],
    system: 'Infectious Disease',
    pathophysiology: 'According to Merck Manual Professional, tuberculosis is caused by Mycobacterium tuberculosis, transmitted via airborne droplets. Primary infection occurs when inhaled bacilli reach alveoli, where they are phagocytosed by macrophages. Most infections are contained by cell-mediated immunity, forming granulomas (latent TB). Reactivation occurs when immunity wanes, causing active disease. HIV, immunosuppression, malnutrition, and diabetes increase reactivation risk. Extrapulmonary TB can affect any organ.',
    clinicalPresentation: 'Latent TB is asymptomatic. Active pulmonary TB presents with chronic cough (>3 weeks), hemoptysis, fever, night sweats, and weight loss. Physical examination may reveal crackles, dullness to percussion, or be normal. Extrapulmonary TB: lymphadenitis (scrofula), meningitis, pericarditis, genitourinary, skeletal (Pott\'s disease). Miliary TB is disseminated disease with multi-organ involvement.',
    diagnosticApproach: 'Latent TB: tuberculin skin test (TST) or interferon-gamma release assay (IGRA). Positive test with normal chest X-ray indicates latent TB. Active TB: chest X-ray shows upper lobe infiltrates, cavitation, or miliary pattern. Sputum acid-fast bacilli (AFB) smear and culture (gold standard). Nucleic acid amplification test (NAAT) provides rapid diagnosis. Drug susceptibility testing essential. Extrapulmonary TB requires tissue/fluid sampling.',
    treatment: 'Latent TB: isoniazid for 9 months or rifampin for 4 months. Active TB: intensive phase (2 months) with isoniazid, rifampin, pyrazinamide, and ethambutol (RIPE), followed by continuation phase (4 months) with isoniazid and rifampin. Directly observed therapy (DOT) improves adherence. MDR-TB requires longer treatment with second-line drugs. Monitor for hepatotoxicity. Isolate patients until non-infectious (3 negative sputum smears).',
    clinicalPearls: [
      'Upper lobe cavitary lesions are classic for reactivation TB',
      'HIV patients with TB require longer treatment and ART',
      'Rifampin interacts with many medications (anticoagulants, antiretrovirals)',
      'Pyridoxine (vitamin B6) prevents isoniazid-induced neuropathy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/infectious-diseases/mycobacteria/tuberculosis-tb'
  },

  // EMERGENCY MEDICINE
  {
    topic: 'Sepsis',
    keywords: ['sepsis', 'septic shock', 'severe sepsis', 'septicemia', 'systemic infection'],
    system: 'Emergency Medicine',
    pathophysiology: 'According to Merck Manual Professional, sepsis is life-threatening organ dysfunction caused by dysregulated host response to infection. Pathogen-associated molecular patterns (PAMPs) trigger excessive inflammatory response, causing endothelial dysfunction, increased vascular permeability, microvascular thrombosis, and tissue hypoperfusion. Septic shock involves persistent hypotension requiring vasopressors and lactate >2 mmol/L despite adequate fluid resuscitation. Multi-organ dysfunction syndrome (MODS) can develop.',
    clinicalPresentation: 'Sepsis presents with infection plus organ dysfunction: altered mental status, hypotension, tachypnea, hypoxemia, oliguria, or elevated lactate. Common sources include pneumonia, urinary tract, abdominal, and skin/soft tissue infections. Septic shock manifests as persistent hypotension, cold/clammy extremities, and signs of end-organ hypoperfusion. SIRS criteria (fever, tachycardia, tachypnea, leukocytosis) are sensitive but non-specific.',
    diagnosticApproach: 'Diagnosis requires suspected infection plus qSOFA ≥2 (altered mental status, SBP ≤100, RR ≥22) or SOFA score increase ≥2. Obtain blood cultures (before antibiotics), lactate, CBC, comprehensive metabolic panel, coagulation studies. Identify infection source: chest X-ray, urinalysis, imaging as indicated. Procalcitonin may support bacterial infection. Repeat lactate to assess response to treatment.',
    treatment: 'Early goal-directed therapy within 1 hour: broad-spectrum antibiotics, fluid resuscitation (30 mL/kg crystalloid), vasopressors (norepinephrine first-line) for persistent hypotension, source control. Antibiotics based on suspected source and local resistance patterns. De-escalate based on cultures. Maintain MAP ≥65 mmHg. Consider corticosteroids for refractory shock. Supportive care: mechanical ventilation, renal replacement therapy as needed. Monitor for complications.',
    clinicalPearls: [
      'Sepsis-3 criteria: infection + SOFA score increase ≥2',
      'Door-to-antibiotic time <1 hour improves survival',
      'Lactate >4 mmol/L indicates severe hypoperfusion',
      'Source control (drainage, debridement) is critical'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock'
  },

  // UROLOGY
  {
    topic: 'Urinary Tract Infection',
    keywords: ['urinary tract infection', 'uti', 'cystitis', 'pyelonephritis', 'bladder infection'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, UTI results from bacterial colonization of the urinary tract, most commonly by Escherichia coli (80-85%). Bacteria ascend from the urethra to bladder (cystitis) or kidneys (pyelonephritis). Risk factors include female sex, sexual activity, pregnancy, urinary obstruction, catheterization, and immunosuppression. Complicated UTI occurs in patients with structural/functional abnormalities or immunocompromise.',
    clinicalPresentation: 'Cystitis presents with dysuria, urinary frequency, urgency, suprapubic pain, and hematuria. Pyelonephritis adds fever, chills, flank pain, nausea, and vomiting. Physical examination in cystitis is often unremarkable. Pyelonephritis shows costovertebral angle tenderness. Elderly patients may present atypically with confusion or functional decline. Complicated UTI may present with sepsis.',
    diagnosticApproach: 'Urinalysis shows pyuria (>10 WBC/hpf), bacteriuria, and often hematuria. Nitrites and leukocyte esterase support diagnosis. Urine culture with >10^5 CFU/mL confirms infection and guides antibiotic selection. Blood cultures for pyelonephritis or sepsis. Imaging (renal ultrasound or CT) for complicated UTI, recurrent infections, or pyelonephritis not responding to treatment. Evaluate for structural abnormalities.',
    treatment: 'Uncomplicated cystitis: nitrofurantoin (5 days), trimethoprim-sulfamethoxazole (3 days), or fosfomycin (single dose). Avoid fluoroquinolones due to resistance and side effects. Pyelonephritis: fluoroquinolone or ceftriaxone, transition to oral based on culture. Duration 7-14 days. Complicated UTI requires longer treatment (10-14 days) and often IV antibiotics initially. Remove catheters if possible. Recurrent UTI may require prophylaxis or post-coital antibiotics.',
    clinicalPearls: [
      'Asymptomatic bacteriuria does not require treatment except in pregnancy',
      'Fluoroquinolones should be reserved for complicated UTI',
      'Cranberry products may reduce recurrent UTI in women',
      'Catheter-associated UTI requires catheter removal for cure'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-tract-infections-utis/overview-of-urinary-tract-infections-utis'
  },

  // Additional high-yield topics
  {
    topic: 'Hypertension',
    keywords: ['hypertension', 'high blood pressure', 'htn', 'elevated blood pressure'],
    system: 'Cardiology',
    pathophysiology: 'According to Merck Manual Professional, hypertension is sustained elevation of blood pressure (≥130/80 mmHg). Primary (essential) hypertension (90-95%) has multifactorial etiology involving genetic, environmental, and lifestyle factors. Secondary hypertension results from identifiable causes (renal disease, endocrine disorders, medications). Chronic hypertension causes vascular remodeling, left ventricular hypertrophy, and end-organ damage (heart, brain, kidneys, eyes).',
    clinicalPresentation: 'Most patients are asymptomatic; hypertension is often detected on routine screening. Severe hypertension may cause headache, dizziness, or blurred vision. Hypertensive emergency presents with severe elevation (>180/120) plus acute end-organ damage (encephalopathy, stroke, MI, acute heart failure, aortic dissection, acute kidney injury). Physical examination may reveal retinopathy, S4 gallop, or bruits.',
    diagnosticApproach: 'Diagnosis requires elevated blood pressure on ≥2 occasions. Confirm with home blood pressure monitoring or ambulatory monitoring. Evaluate for secondary causes in young patients, resistant hypertension, or sudden onset: renal function, electrolytes, urinalysis, plasma aldosterone/renin ratio, renal artery imaging. Assess for target organ damage: ECG, echocardiography, fundoscopy, urine albumin. Cardiovascular risk stratification.',
    treatment: 'Lifestyle modifications: weight loss, DASH diet, sodium restriction (<2g/day), exercise, limit alcohol. Pharmacotherapy for BP ≥130/80 with cardiovascular disease or ≥140/90 without. First-line agents: ACE inhibitors, ARBs, calcium channel blockers, thiazide diuretics. Most patients require ≥2 drugs. Target <130/80 for most patients. Resistant hypertension may require spironolactone. Hypertensive emergency requires IV antihypertensives and ICU monitoring.',
    clinicalPearls: [
      'White coat hypertension requires home BP monitoring for diagnosis',
      'ACE inhibitors/ARBs are preferred in diabetes or CKD with proteinuria',
      'Avoid abrupt BP reduction in hypertensive emergency (risk of stroke)',
      'Screen for secondary causes if age <30 or resistant to 3 drugs'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/hypertension/hypertension'
  },
  {
    topic: 'Pheochromocytoma',
    keywords: ['pheochromocytoma', 'adrenal tumor', 'catecholamine excess', 'paraganglioma'],
    system: 'Endocrine',
    pathophysiology: 'According to Merck Manual Professional, pheochromocytoma is a catecholamine-secreting tumor arising from chromaffin cells of the adrenal medulla (90%) or extra-adrenal paraganglia (10%). The tumor secretes excessive epinephrine and norepinephrine, causing paroxysmal or sustained hypertension and hypermetabolic symptoms. About 25-30% are hereditary, associated with MEN 2, von Hippel-Lindau, neurofibromatosis type 1, or familial paraganglioma syndromes.',
    clinicalPresentation: 'Classic triad includes episodic headaches, sweating, and tachycardia. Patients experience paroxysmal hypertension, palpitations, anxiety, tremor, and pallor. Episodes may be triggered by abdominal pressure, certain foods (tyramine), or medications. Some patients have sustained hypertension. Physical examination during episode shows hypertension, tachycardia, and diaphoresis. Orthostatic hypotension may occur between episodes.',
    diagnosticApproach: 'Biochemical diagnosis: measure plasma free metanephrines or 24-hour urine fractionated metanephrines and catecholamines. Plasma free metanephrines have highest sensitivity. Avoid interfering medications (tricyclic antidepressants, decongestants). Once biochemically confirmed, localize tumor with CT or MRI of abdomen/pelvis. MIBG scan or PET scan for extra-adrenal or metastatic disease. Genetic testing for hereditary syndromes.',
    treatment: 'Surgical resection is curative. Preoperative preparation essential: alpha-blockade (phenoxybenzamine or doxazosin) for 7-14 days, then add beta-blocker if needed (never beta-blocker first - risk of unopposed alpha stimulation). Maintain high-salt diet and hydration. Laparoscopic adrenalectomy preferred. Intraoperative hypertensive crises managed with nitroprusside or phentolamine. Metastatic disease requires combination chemotherapy and targeted therapy.',
    clinicalPearls: [
      'Rule of 10s: 10% bilateral, 10% extra-adrenal, 10% malignant, 10% familial',
      'Never give beta-blocker before alpha-blockade (hypertensive crisis)',
      'Plasma free metanephrines are preferred screening test',
      'Screen family members if hereditary syndrome identified'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/adrenal-disorders/pheochromocytoma'
  }
];

/**
 * Search function to find relevant Merck Manual entries based on query
 */
export function searchMerckManualKnowledge(query: string): MerckManualEntry[] {
  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(' ').filter(word => word.length > 2);
  
  const scoredEntries = merckManualKnowledge.map(entry => {
    let score = 0;
    
    // Check topic name (highest priority)
    if (entry.topic.toLowerCase() === lowerQuery) {
      score += 100;
    } else if (entry.topic.toLowerCase().includes(lowerQuery)) {
      score += 50;
    }
    
    // Check keywords (high priority)
    entry.keywords.forEach(keyword => {
      if (keyword === lowerQuery) {
        score += 80;
      } else if (keyword.includes(lowerQuery) || lowerQuery.includes(keyword)) {
        score += 40;
      }
    });
    
    // Check individual query words against keywords
    queryWords.forEach(word => {
      entry.keywords.forEach(keyword => {
        if (keyword.includes(word)) {
          score += 10;
        }
      });
    });
    
    // Check system
    if (entry.system.toLowerCase().includes(lowerQuery)) {
      score += 5;
    }
    
    return { entry, score };
  });
  
  // Return entries with score > 0, sorted by score
  return scoredEntries
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.entry)
    .slice(0, 3); // Return top 3 matches
}

/**
 * Get Merck Manual entry by exact topic name
 */
export function getMerckManualByTopic(topic: string): MerckManualEntry | undefined {
  return merckManualKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all Merck Manual entries for a specific system
 */
export function getMerckManualBySystem(system: string): MerckManualEntry[] {
  return merckManualKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
