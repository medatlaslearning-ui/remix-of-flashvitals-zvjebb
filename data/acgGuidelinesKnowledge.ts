
/**
 * ACG (American College of Gastroenterology) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the American College of Gastroenterology.
 * ACG provides evidence-based guidelines for gastroenterology and hepatology conditions.
 * 
 * INTEGRATION PHASE: ACG Guidelines (Phase 20 - Gastroenterology Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Strong = high confidence, Conditional = lower confidence)
 * - Quality of evidence (High, Moderate, Low, Very Low)
 * - Clinical implementation guidance
 * - ACG guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from ACG guidelines but presented
 * in an original format for medical education purposes.
 */

export interface ACGGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  strongRecommendations: string[];
  conditionalRecommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  acgUrl: string;
  publicationYear: number;
}

export const acgGuidelinesKnowledge: ACGGuidelineEntry[] = [
  // GASTROESOPHAGEAL REFLUX DISEASE (GERD)
  {
    topic: 'Gastroesophageal Reflux Disease (GERD) - ACG Guideline',
    keywords: ['gastroesophageal reflux disease', 'gerd', 'acid reflux', 'heartburn', 'reflux esophagitis', 'barrett esophagus', 'acg gerd', 'gerd management', 'ppi therapy'],
    system: 'Gastroenterology',
    guidelineSummary: 'The ACG guideline for gastroesophageal reflux disease provides evidence-based recommendations for diagnosis and management of GERD. GERD is defined as troublesome symptoms or complications resulting from reflux of gastric contents into the esophagus. The guideline emphasizes clinical diagnosis based on typical symptoms (heartburn, regurgitation), empiric PPI therapy as both diagnostic and therapeutic, lifestyle modifications, and endoscopy for alarm symptoms or long-standing GERD to screen for Barrett esophagus. Maintenance PPI therapy is recommended for patients with erosive esophagitis or persistent symptoms. Surgical fundoplication is an option for select patients.',
    strongRecommendations: [
      'We recommend an 8-week course of proton pump inhibitor (PPI) therapy as the initial treatment for symptom relief and healing of erosive esophagitis in patients with GERD (Strong recommendation, High quality evidence)',
      'We recommend maintenance PPI therapy for patients with erosive esophagitis or persistent GERD symptoms after initial PPI therapy (Strong recommendation, High quality evidence)',
      'We recommend upper endoscopy in patients with chronic GERD symptoms (>5 years) to screen for Barrett esophagus (Strong recommendation, Moderate quality evidence)',
      'We recommend upper endoscopy in patients with alarm symptoms (dysphagia, odynophagia, weight loss, GI bleeding, anemia) to exclude complications or malignancy (Strong recommendation, High quality evidence)',
      'We recommend weight loss for overweight or obese patients with GERD to improve symptoms (Strong recommendation, Moderate quality evidence)',
      'We recommend elevating the head of the bed for patients with nocturnal GERD symptoms (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'We suggest avoiding late evening meals (within 2-3 hours of bedtime) to reduce nocturnal reflux symptoms (Conditional recommendation, Low quality evidence)',
      'We suggest avoiding trigger foods (caffeine, alcohol, chocolate, spicy foods, acidic foods) in patients with GERD symptoms (Conditional recommendation, Low quality evidence)',
      'We suggest H2 receptor antagonists as an alternative to PPIs for mild GERD symptoms or as add-on therapy for breakthrough nocturnal symptoms (Conditional recommendation, Moderate quality evidence)',
      'We suggest ambulatory pH monitoring or pH-impedance testing in patients with persistent symptoms despite PPI therapy to confirm reflux or identify non-acid reflux (Conditional recommendation, Moderate quality evidence)',
      'We suggest esophageal manometry before anti-reflux surgery to assess esophageal motility and exclude achalasia (Conditional recommendation, Moderate quality evidence)',
      'We suggest laparoscopic fundoplication as an alternative to long-term PPI therapy in select patients with well-documented GERD who desire surgery (Conditional recommendation, Moderate quality evidence)',
      'We suggest against routine discontinuation of PPI therapy in patients with Barrett esophagus, as acid suppression may reduce progression risk (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and meta-analyses; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of ACG GERD guidelines requires systematic approach to diagnosis and management. DIAGNOSIS: Clinical diagnosis based on typical symptoms: heartburn (retrosternal burning sensation) and regurgitation (effortless return of gastric contents to mouth). Atypical symptoms include chronic cough, laryngitis, asthma exacerbations, dental erosions, chest pain. Empiric PPI trial is both diagnostic and therapeutic - symptom improvement with PPI supports GERD diagnosis. INDICATIONS FOR ENDOSCOPY: Alarm symptoms (dysphagia, odynophagia, weight loss, GI bleeding, anemia, vomiting), Long-standing GERD (>5 years) to screen for Barrett esophagus, Persistent symptoms despite PPI therapy, Severe erosive esophagitis on initial endoscopy (requires follow-up to document healing). LIFESTYLE MODIFICATIONS: Weight loss if overweight or obese (BMI >25) - most effective lifestyle intervention, Elevate head of bed 6-8 inches for nocturnal symptoms, Avoid late evening meals (stop eating 2-3 hours before bedtime), Avoid trigger foods: caffeine, alcohol, chocolate, fatty foods, spicy foods, citrus, tomatoes, Smoking cessation, Avoid tight-fitting clothing. PHARMACOTHERAPY: PPIs are most effective therapy for GERD. Options: Omeprazole 20 mg daily, Esomeprazole 40 mg daily, Lansoprazole 30 mg daily, Pantoprazole 40 mg daily, Rabeprazole 20 mg daily, Dexlansoprazole 60 mg daily. Take 30-60 minutes before first meal of day for optimal efficacy. Initial therapy: 8 weeks for symptom relief and healing of erosive esophagitis. Maintenance therapy: Continue PPI for patients with erosive esophagitis (high recurrence rate off therapy) or persistent symptoms. Step-down approach: After symptom control, attempt to reduce to lowest effective dose or on-demand therapy. H2 receptor antagonists: Less effective than PPIs but useful for mild symptoms or breakthrough nocturnal symptoms. Options: Famotidine 20-40 mg BID, Nizatidine 150 mg BID. Antacids: Provide rapid but short-lived symptom relief. Useful for breakthrough symptoms. REFRACTORY GERD: Defined as persistent symptoms despite twice-daily PPI therapy. Evaluate for: Non-adherence to PPI (most common), Incorrect PPI timing (should take 30-60 minutes before meals), Non-acid reflux (bile reflux), Functional heartburn (no acid reflux on pH testing), Alternative diagnoses (eosinophilic esophagitis, achalasia, pill esophagitis). Diagnostic testing: Ambulatory pH monitoring (off PPI for 7 days) or pH-impedance testing (on PPI) to confirm reflux. Esophageal manometry to assess motility and exclude achalasia. Upper endoscopy to exclude complications. Management: Optimize PPI therapy (twice daily, correct timing), Add H2 receptor antagonist at bedtime for nocturnal symptoms, Baclofen (GABA-B agonist) reduces transient LES relaxations - 5-20 mg TID, Consider surgical fundoplication if confirmed reflux. BARRETT ESOPHAGUS: Intestinal metaplasia of esophageal squamous epithelium due to chronic acid exposure. Increased risk of esophageal adenocarcinoma. Screen patients with chronic GERD (>5 years) and risk factors (age >50, male, Caucasian, obesity, smoking, family history). Surveillance intervals based on dysplasia: No dysplasia (every 3-5 years), Low-grade dysplasia (every 6-12 months or endoscopic eradication), High-grade dysplasia (endoscopic eradication - radiofrequency ablation or endoscopic mucosal resection). Continue PPI therapy indefinitely. SURGICAL THERAPY: Laparoscopic Nissen fundoplication (360-degree wrap) or partial fundoplication (Toupet 270-degree, Dor 180-degree). Indications: Patient preference to avoid lifelong PPI therapy, Refractory symptoms despite optimal medical therapy, Large hiatal hernia with mechanical symptoms, Complications (stricture, Barrett esophagus with dysplasia). Preoperative evaluation: Esophageal manometry (exclude achalasia, assess motility), pH monitoring (confirm acid reflux), Upper endoscopy (assess anatomy, exclude malignancy). Efficacy: 85-90% symptom control at 5 years. Complications: Dysphagia (10-15%), gas-bloat syndrome (inability to belch or vomit), diarrhea. COMPLICATIONS: Erosive esophagitis: Mucosal breaks on endoscopy. Graded by Los Angeles classification (A-D). Treat with PPI for 8 weeks, then maintenance therapy. Peptic stricture: Dysphagia from chronic inflammation and fibrosis. Treat with endoscopic dilation and high-dose PPI. Barrett esophagus: Premalignant condition requiring surveillance. Esophageal adenocarcinoma: Rare but serious complication. Risk factors: Barrett esophagus with dysplasia, long-standing GERD, obesity, smoking.',
    keyPoints: [
      'PPIs are most effective therapy for GERD - take 30-60 minutes before first meal',
      '8-week PPI course for initial treatment, then maintenance for erosive esophagitis',
      'Weight loss and head of bed elevation are most effective lifestyle modifications',
      'Endoscopy for alarm symptoms or chronic GERD (>5 years) to screen for Barrett esophagus',
      'Refractory GERD: check adherence, timing, consider pH testing',
      'Barrett esophagus requires surveillance and continued PPI therapy',
      'Surgical fundoplication is option for select patients with confirmed GERD',
      'Avoid routine discontinuation of PPI in Barrett esophagus patients',
    ],
    acgUrl: 'https://gi.org/guideline/diagnosis-and-management-of-gastroesophageal-reflux-disease/',
    publicationYear: 2022,
  },

  // DYSPEPSIA
  {
    topic: 'Dyspepsia - ACG Guideline',
    keywords: ['dyspepsia', 'functional dyspepsia', 'indigestion', 'epigastric pain', 'postprandial distress', 'acg dyspepsia', 'uninvestigated dyspepsia', 'h pylori dyspepsia'],
    system: 'Gastroenterology',
    guidelineSummary: 'The ACG guideline for dyspepsia provides evidence-based recommendations for evaluation and management of dyspepsia. Dyspepsia is defined as epigastric pain or burning, postprandial fullness, or early satiety. The guideline distinguishes between uninvestigated dyspepsia, functional dyspepsia (symptoms without structural cause), and organic dyspepsia (peptic ulcer, GERD, malignancy). The guideline recommends testing for H. pylori in all patients with dyspepsia and treating if positive. Upper endoscopy is indicated for patients with alarm features or age ≥60 years. Empiric PPI therapy is recommended for patients without alarm features. Functional dyspepsia is treated with PPIs, prokinetics, or neuromodulators.',
    strongRecommendations: [
      'We recommend testing for Helicobacter pylori in all patients with dyspepsia using non-invasive testing (urea breath test or stool antigen) or endoscopic biopsy (Strong recommendation, High quality evidence)',
      'We recommend eradicating H. pylori if present, as this provides long-term symptom relief in a subset of patients with dyspepsia (Strong recommendation, High quality evidence)',
      'We recommend upper endoscopy in patients with dyspepsia and alarm features (age ≥60 years, unintentional weight loss, dysphagia, odynophagia, persistent vomiting, GI bleeding, anemia, family history of upper GI malignancy) (Strong recommendation, High quality evidence)',
      'We recommend empiric PPI therapy for 4-8 weeks in patients with uninvestigated dyspepsia without alarm features after testing for H. pylori (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'We suggest upper endoscopy in patients with persistent dyspepsia despite H. pylori eradication and empiric PPI therapy (Conditional recommendation, Moderate quality evidence)',
      'We suggest prokinetic agents (metoclopramide) for patients with functional dyspepsia with postprandial distress syndrome (Conditional recommendation, Moderate quality evidence)',
      'We suggest tricyclic antidepressants (amitriptyline, nortriptyline) at low doses for patients with functional dyspepsia with epigastric pain syndrome (Conditional recommendation, Moderate quality evidence)',
      'We suggest against routine testing for celiac disease, thyroid disease, or other systemic conditions in patients with typical dyspepsia symptoms (Conditional recommendation, Low quality evidence)',
      'We suggest psychological therapies (cognitive behavioral therapy, hypnotherapy) for patients with refractory functional dyspepsia (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of ACG dyspepsia guidelines requires systematic approach to diagnosis and management. DEFINITION: Dyspepsia is one or more of: Epigastric pain or burning, Postprandial fullness, Early satiety. Symptoms present for at least 3 months with onset at least 6 months before diagnosis. CLASSIFICATION: Uninvestigated dyspepsia: Symptoms without prior evaluation. Functional dyspepsia: Symptoms without structural or biochemical cause on endoscopy. Subtypes: Postprandial distress syndrome (PDS) - postprandial fullness, early satiety; Epigastric pain syndrome (EPS) - epigastric pain or burning. Organic dyspepsia: Symptoms due to identifiable cause (peptic ulcer, GERD, malignancy, medications). ALARM FEATURES: Age ≥60 years (increased malignancy risk), Unintentional weight loss (>5% body weight), Progressive dysphagia or odynophagia, Persistent vomiting, GI bleeding (hematemesis, melena), Anemia (iron deficiency), Palpable abdominal mass, Family history of upper GI malignancy, Previous gastric surgery. INITIAL EVALUATION: History: Characterize symptoms (pain, fullness, early satiety), timing, duration, aggravating/relieving factors. Medication review: NSAIDs, aspirin, bisphosphonates, antibiotics, potassium, iron. Red flags: Alarm features as above. H. PYLORI TESTING: Test all patients with dyspepsia. Non-invasive tests (preferred for uninvestigated dyspepsia): Urea breath test (high sensitivity and specificity), Stool antigen test (good alternative), Serology NOT recommended (cannot distinguish active from past infection). Invasive tests (if endoscopy performed): Rapid urease test (biopsy), Histology (gold standard), Culture (for antibiotic resistance if treatment fails). Avoid PPI for 2 weeks and antibiotics for 4 weeks before testing to prevent false negatives. H. PYLORI ERADICATION: First-line therapy: Clarithromycin triple therapy - PPI (omeprazole 20 mg BID or equivalent) + clarithromycin 500 mg BID + amoxicillin 1 g BID for 14 days. Alternative: Bismuth quadruple therapy - PPI + bismuth subsalicylate + tetracycline + metronidazole for 10-14 days (preferred if clarithromycin resistance suspected). Confirm eradication 4 weeks after completing therapy with urea breath test or stool antigen (not serology). EMPIRIC PPI THERAPY: For patients without alarm features after H. pylori testing. PPI options: Omeprazole 20 mg daily, Esomeprazole 40 mg daily, Lansoprazole 30 mg daily, Pantoprazole 40 mg daily. Duration: 4-8 weeks. If symptoms improve, continue PPI or attempt step-down to lowest effective dose or on-demand therapy. If symptoms persist, consider endoscopy. UPPER ENDOSCOPY: Indications: Alarm features, Age ≥60 years, Persistent symptoms despite H. pylori eradication and PPI therapy, High-risk populations (Asian ethnicity with higher gastric cancer risk). Findings: Normal (functional dyspepsia), Peptic ulcer disease (gastric or duodenal ulcer), Erosive esophagitis (GERD), Gastric or esophageal malignancy, Eosinophilic esophagitis, Celiac disease (duodenal biopsies). FUNCTIONAL DYSPEPSIA MANAGEMENT: Diagnosed after normal endoscopy and exclusion of H. pylori. Postprandial Distress Syndrome (PDS): Prokinetic agents: Metoclopramide 5-10 mg TID before meals (risk of tardive dyskinesia - limit use to <12 weeks), Domperidone 10 mg TID (not available in US). PPI therapy: May provide benefit in subset of patients. Dietary modifications: Small, frequent meals; avoid fatty foods. Epigastric Pain Syndrome (EPS): PPI therapy: First-line for epigastric pain. Neuromodulators: Tricyclic antidepressants (TCAs) - amitriptyline 10-50 mg at bedtime or nortriptyline 10-50 mg at bedtime. Start low, titrate slowly. Effective for visceral hypersensitivity. Selective serotonin reuptake inhibitors (SSRIs) - less evidence but may help. Psychological therapies: Cognitive behavioral therapy (CBT), Hypnotherapy, Relaxation techniques. Effective for refractory symptoms. REFRACTORY DYSPEPSIA: Defined as persistent symptoms despite H. pylori eradication, PPI therapy, and normal endoscopy. Evaluate for: Medication non-adherence, Functional dyspepsia (consider neuromodulators, psychological therapy), Gastroparesis (gastric emptying study), Rumination syndrome (characteristic history), Psychological comorbidities (anxiety, depression, somatization). LIFESTYLE MODIFICATIONS: Dietary: Avoid trigger foods (fatty foods, spicy foods, caffeine, alcohol), Small, frequent meals, Avoid late evening meals. Weight loss if overweight or obese. Smoking cessation. Stress reduction techniques.',
    keyPoints: [
      'Test all patients with dyspepsia for H. pylori and eradicate if positive',
      'Upper endoscopy for alarm features or age ≥60 years',
      'Empiric PPI therapy for 4-8 weeks if no alarm features',
      'Functional dyspepsia: PPIs for EPS, prokinetics for PDS, TCAs for refractory symptoms',
      'Confirm H. pylori eradication with urea breath test or stool antigen',
      'Avoid serology for H. pylori diagnosis (cannot distinguish active from past infection)',
      'Psychological therapies (CBT, hypnotherapy) for refractory functional dyspepsia',
      'Metoclopramide use limited to <12 weeks due to tardive dyskinesia risk',
    ],
    acgUrl: 'https://gi.org/guideline/management-of-dyspepsia/',
    publicationYear: 2017,
  },

  // ACUTE PANCREATITIS
  {
    topic: 'Acute Pancreatitis - ACG Guideline',
    keywords: ['acute pancreatitis', 'pancreatitis acute', 'pancreatic inflammation', 'gallstone pancreatitis', 'alcoholic pancreatitis', 'acg pancreatitis', 'necrotizing pancreatitis', 'pancreatitis management'],
    system: 'Gastroenterology',
    guidelineSummary: 'The ACG guideline for acute pancreatitis provides evidence-based recommendations for diagnosis, risk stratification, and management. Acute pancreatitis is diagnosed by 2 of 3 criteria: characteristic abdominal pain, serum lipase or amylase >3 times upper limit of normal, and characteristic imaging findings. The guideline emphasizes aggressive IV fluid resuscitation in the first 12-24 hours, early enteral nutrition within 24 hours, and avoiding prophylactic antibiotics. Risk stratification using clinical scoring systems (Ranson, APACHE II) or imaging (CT severity index) guides management. Complications include pancreatic necrosis, infected necrosis, pseudocyst, and multi-organ failure. ERCP is indicated for concurrent acute cholangitis or biliary obstruction.',
    strongRecommendations: [
      'We recommend aggressive IV fluid resuscitation with isotonic crystalloid (lactated Ringer or normal saline) at 250-500 mL/hour in the first 12-24 hours to prevent pancreatic necrosis and organ failure (Strong recommendation, Moderate quality evidence)',
      'We recommend early oral or enteral feeding (within 24 hours of admission) in patients with mild acute pancreatitis to reduce complications and length of stay (Strong recommendation, Moderate quality evidence)',
      'We recommend against prophylactic antibiotics in patients with acute pancreatitis, including those with necrotizing pancreatitis, as antibiotics do not reduce mortality or prevent infected necrosis (Strong recommendation, High quality evidence)',
      'We recommend urgent ERCP (within 24 hours) in patients with acute pancreatitis and concurrent acute cholangitis or biliary obstruction (Strong recommendation, High quality evidence)',
      'We recommend cholecystectomy during the same hospitalization for patients with mild gallstone pancreatitis to prevent recurrence (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'We suggest using lactated Ringer solution over normal saline for IV fluid resuscitation, as it may reduce systemic inflammation (Conditional recommendation, Moderate quality evidence)',
      'We suggest enteral nutrition over parenteral nutrition in patients with severe acute pancreatitis who cannot tolerate oral feeding (Conditional recommendation, Moderate quality evidence)',
      'We suggest delaying cholecystectomy until clinical improvement and resolution of organ failure in patients with severe gallstone pancreatitis (Conditional recommendation, Low quality evidence)',
      'We suggest antibiotics only for documented infected pancreatic necrosis or other infections (e.g., cholangitis, bacteremia), not for prophylaxis (Conditional recommendation, Moderate quality evidence)',
      'We suggest delaying intervention for pancreatic necrosis until at least 4 weeks after onset to allow for demarcation and walling off (Conditional recommendation, Moderate quality evidence)',
      'We suggest step-up approach (percutaneous or endoscopic drainage followed by minimally invasive necrosectomy if needed) over open necrosectomy for infected necrotizing pancreatitis (Conditional recommendation, Moderate quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of ACG acute pancreatitis guidelines requires systematic approach to diagnosis, risk stratification, and management. DIAGNOSIS: Requires 2 of 3 criteria: (1) Characteristic abdominal pain: Acute onset, severe, constant epigastric pain radiating to back, (2) Serum lipase or amylase >3 times upper limit of normal: Lipase is more sensitive and specific than amylase, Degree of elevation does not correlate with severity, (3) Characteristic imaging findings: CT, MRI, or ultrasound showing pancreatic inflammation, edema, or necrosis. ETIOLOGY: Gallstones (40-50%): Most common cause. Ultrasound to identify gallstones. Alcohol (30-40%): Chronic heavy alcohol use. Hypertriglyceridemia (1-4%): Triglycerides >1000 mg/dL. Check lipid panel. Medications (1-2%): Azathioprine, 6-mercaptopurine, valproic acid, sulfonamides, tetracyclines, furosemide, thiazides. Post-ERCP (3-5%): Risk increased with difficult cannulation, sphincter of Oddi dysfunction. Hypercalcemia: Hyperparathyroidism. Check calcium, PTH. Trauma: Blunt abdominal trauma, post-surgical. Idiopathic (10-20%): No identifiable cause. Consider microlithiasis (EUS), genetic mutations (PRSS1, CFTR), autoimmune pancreatitis. SEVERITY ASSESSMENT: Mild acute pancreatitis (80%): No organ failure, no local or systemic complications. Mortality <1%. Moderately severe acute pancreatitis (10-15%): Transient organ failure (<48 hours) or local complications (pseudocyst, necrosis) without persistent organ failure. Mortality 3-6%. Severe acute pancreatitis (5-10%): Persistent organ failure (>48 hours). Mortality 20-30%. Organ failure defined by modified Marshall score: Cardiovascular (hypotension requiring vasopressors), Respiratory (PaO2/FiO2 ≤300), Renal (creatinine ≥2.0 mg/dL). RISK STRATIFICATION: Clinical scoring systems: Ranson criteria (11 parameters, score ≥3 predicts severe pancreatitis), APACHE II score (score ≥8 predicts severe pancreatitis), BISAP score (BUN >25, impaired mental status, SIRS, age >60, pleural effusion - score ≥3 predicts severe pancreatitis). Laboratory markers: Hematocrit >44% at admission or rising hematocrit at 24 hours (hemoconcentration predicts necrosis), BUN >20 mg/dL or rising BUN (predicts mortality), Creatinine >1.8 mg/dL (predicts organ failure). Imaging: CT severity index (Balthazar score + necrosis score), MRI for better assessment of necrosis. INITIAL MANAGEMENT: IV fluid resuscitation: CRITICAL intervention. Aggressive fluids in first 12-24 hours prevent pancreatic necrosis and organ failure. Lactated Ringer preferred over normal saline (reduces inflammation). Goal: 250-500 mL/hour initially, then adjust based on clinical response. Monitor: Urine output (goal >0.5 mL/kg/hour), Heart rate, Blood pressure, Hematocrit (should decrease with adequate hydration). Avoid over-resuscitation (risk of pulmonary edema, abdominal compartment syndrome). Pain control: Opioids (morphine, hydromorphone, fentanyl) are safe and effective. Avoid meperidine (risk of seizures with metabolite accumulation). NPO initially: Advance diet as tolerated when pain improves and patient hungry. Antiemetics: Ondansetron 4-8 mg IV for nausea/vomiting. NUTRITIONAL SUPPORT: Early enteral nutrition (within 24 hours): Reduces complications, length of stay, and mortality compared to delayed feeding. Start with clear liquids or low-fat solid diet as tolerated. No need to wait for bowel sounds or passage of flatus. Enteral nutrition preferred over parenteral nutrition: If patient cannot tolerate oral intake, use nasogastric or nasojejunal tube feeding. Enteral feeding maintains gut barrier function and reduces bacterial translocation. Parenteral nutrition: Reserve for patients who cannot tolerate enteral feeding after 5-7 days. ANTIBIOTICS: NO prophylactic antibiotics: Multiple RCTs show no benefit in preventing infected necrosis or reducing mortality. Antibiotics only for: Documented infected pancreatic necrosis (gas in necrosis on CT, positive culture from FNA), Concurrent infections (cholangitis, bacteremia, pneumonia, UTI). Antibiotic choice for infected necrosis: Carbapenems (imipenem, meropenem) - good pancreatic penetration, Fluoroquinolones (ciprofloxacin, levofloxacin) + metronidazole. IMAGING: Ultrasound: Initial imaging to identify gallstones and assess biliary tree. CT with IV contrast: Not needed for diagnosis. Indicated for: Uncertain diagnosis, No clinical improvement after 48-72 hours, Clinical deterioration (assess for necrosis, fluid collections). Optimal timing: 48-72 hours after onset (allows necrosis to develop and be visualized). MRI/MRCP: Better assessment of necrosis, biliary anatomy, and pancreatic duct. ERCP: Urgent ERCP (within 24 hours): Acute cholangitis (fever, jaundice, RUQ pain), Biliary obstruction (persistent jaundice, dilated CBD on imaging). Early ERCP (within 72 hours): Predicted severe pancreatitis with biliary obstruction. NOT indicated: Mild gallstone pancreatitis without cholangitis or obstruction (no benefit, increases complications). CHOLECYSTECTOMY: Timing for gallstone pancreatitis: Mild pancreatitis: Cholecystectomy during same hospitalization after clinical improvement (reduces recurrence from 30% to <5%). Severe pancreatitis: Delay cholecystectomy until resolution of organ failure and local complications (4-6 weeks). COMPLICATIONS: Pancreatic necrosis (10-20%): Sterile necrosis: Supportive care, no antibiotics. Infected necrosis (30% of necrosis cases): Fever, leukocytosis, clinical deterioration. CT shows gas in necrosis. Confirm with FNA if uncertain. Treatment: Antibiotics + drainage/debridement. Step-up approach: Percutaneous or endoscopic drainage first, then minimally invasive necrosectomy if needed. Delay intervention until 4 weeks (allows walling off). Acute peripancreatic fluid collections (APFC): Occur within 4 weeks, no wall. Usually resolve spontaneously. Pseudocyst: Mature fluid collection with wall (>4 weeks). Indications for drainage: Symptomatic (pain, obstruction), Infected, Enlarging. Drainage options: Endoscopic (cystogastrostomy), Percutaneous, Surgical. Organ failure: Cardiovascular: Aggressive IV fluids, vasopressors if needed. Respiratory: Supplemental oxygen, mechanical ventilation if severe ARDS. Renal: IV fluids, avoid nephrotoxins, dialysis if needed. Abdominal compartment syndrome: Increased intra-abdominal pressure >20 mmHg with organ dysfunction. Decompression (percutaneous drainage, surgical) if refractory.',
    keyPoints: [
      'Diagnosis: 2 of 3 criteria (pain, lipase >3× ULN, imaging)',
      'Aggressive IV fluid resuscitation (250-500 mL/hour) in first 12-24 hours is critical',
      'Early enteral nutrition within 24 hours reduces complications',
      'NO prophylactic antibiotics - no benefit, increases resistance',
      'Urgent ERCP only for cholangitis or biliary obstruction',
      'Cholecystectomy during same hospitalization for mild gallstone pancreatitis',
      'Delay intervention for necrosis until 4 weeks (allow walling off)',
      'Step-up approach (drainage then necrosectomy) preferred over open surgery',
    ],
    acgUrl: 'https://gi.org/guideline/management-of-acute-pancreatitis/',
    publicationYear: 2013,
  },

  // INFLAMMATORY BOWEL DISEASE - ULCERATIVE COLITIS
  {
    topic: 'Ulcerative Colitis - ACG Guideline',
    keywords: ['ulcerative colitis', 'uc', 'inflammatory bowel disease', 'ibd', 'colitis', 'bloody diarrhea', 'acg ulcerative colitis', 'uc management', 'uc treatment'],
    system: 'Gastroenterology',
    guidelineSummary: 'The ACG guideline for ulcerative colitis provides evidence-based recommendations for diagnosis, assessment of disease activity, and medical and surgical management. Ulcerative colitis is a chronic inflammatory disorder limited to the colon, characterized by continuous mucosal inflammation starting in the rectum and extending proximally. The guideline emphasizes colonoscopy with biopsies for diagnosis, assessment of disease extent and severity, use of 5-aminosalicylates for mild-moderate disease, corticosteroids for moderate-severe disease, immunomodulators and biologics for steroid-dependent or steroid-refractory disease, and colectomy for refractory disease or complications. Surveillance colonoscopy for dysplasia is recommended starting 8 years after diagnosis.',
    strongRecommendations: [
      'We recommend colonoscopy with biopsies for diagnosis of ulcerative colitis and assessment of disease extent (Strong recommendation, Moderate quality evidence)',
      'We recommend 5-aminosalicylates (mesalamine) as first-line therapy for induction and maintenance of remission in mild to moderate ulcerative colitis (Strong recommendation, High quality evidence)',
      'We recommend oral corticosteroids for induction of remission in moderate to severe ulcerative colitis (Strong recommendation, High quality evidence)',
      'We recommend against long-term corticosteroid use for maintenance therapy due to significant side effects (Strong recommendation, High quality evidence)',
      'We recommend thiopurines (azathioprine, 6-mercaptopurine) or anti-TNF agents (infliximab, adalimumab, golimumab) for patients with steroid-dependent or steroid-refractory ulcerative colitis (Strong recommendation, High quality evidence)',
      'We recommend colectomy for patients with refractory ulcerative colitis, toxic megacolon, perforation, or high-grade dysplasia/cancer (Strong recommendation, High quality evidence)',
      'We recommend surveillance colonoscopy for dysplasia starting 8 years after diagnosis of ulcerative colitis (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'We suggest rectal mesalamine (suppositories or enemas) for patients with proctitis or left-sided colitis (Conditional recommendation, Moderate quality evidence)',
      'We suggest vedolizumab (anti-integrin) or tofacitinib (JAK inhibitor) as alternative biologics for moderate to severe ulcerative colitis (Conditional recommendation, Moderate quality evidence)',
      'We suggest combination therapy with thiopurines and anti-TNF agents for patients with inadequate response to anti-TNF monotherapy (Conditional recommendation, Moderate quality evidence)',
      'We suggest fecal calprotectin or C-reactive protein to assess disease activity and predict relapse (Conditional recommendation, Moderate quality evidence)',
      'We suggest against routine use of antibiotics for ulcerative colitis except for specific infections or pouchitis (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and meta-analyses; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of ACG ulcerative colitis guidelines requires systematic approach to diagnosis, disease assessment, and treatment. DIAGNOSIS: Clinical presentation: Bloody diarrhea (hallmark symptom), Urgency, Tenesmus, Abdominal cramping, Rectal bleeding. Colonoscopy with biopsies: Gold standard for diagnosis. Findings: Continuous inflammation starting from rectum, Loss of vascular pattern, Friability, Ulcerations, Pseudopolyps. Histology: Crypt abscesses, Crypt distortion, Basal plasmacytosis, No granulomas (distinguishes from Crohn disease). Exclude infections: Stool cultures (Salmonella, Shigella, Campylobacter, E. coli O157:H7), C. difficile toxin, CMV (in severe or refractory colitis). DISEASE EXTENT: Proctitis: Rectum only (15-30% of patients). Left-sided colitis: Rectum to splenic flexure (40-50% of patients). Extensive colitis/Pancolitis: Beyond splenic flexure or entire colon (20-30% of patients). DISEASE SEVERITY: Mild: <4 stools/day, No systemic symptoms, Normal ESR/CRP. Moderate: 4-6 stools/day with blood, Minimal systemic symptoms, Mild anemia. Severe: >6 bloody stools/day, Fever, Tachycardia, Anemia, Elevated ESR/CRP. Fulminant: >10 stools/day, Continuous bleeding, Toxicity, Abdominal distention, Transfusion requirement. TREATMENT - MILD TO MODERATE DISEASE: 5-Aminosalicylates (5-ASA/Mesalamine): First-line therapy. Mechanism: Topical anti-inflammatory effect on colonic mucosa. Proctitis: Mesalamine suppositories 1000 mg daily or BID. Left-sided colitis: Mesalamine enemas 4 g daily at bedtime. Extensive colitis: Oral mesalamine 2.4-4.8 g/day in divided doses. Combination oral + rectal mesalamine more effective than either alone. Maintenance: Continue mesalamine indefinitely to maintain remission. Sulfasalazine: Alternative to mesalamine. 2-4 g/day in divided doses. Side effects: Nausea, headache, rash. Requires folic acid supplementation. TREATMENT - MODERATE TO SEVERE DISEASE: Corticosteroids: For induction of remission. Oral: Prednisone 40-60 mg daily, taper over 8-12 weeks. IV: Methylprednisolone 40-60 mg daily or hydrocortisone 300 mg daily for severe/hospitalized patients. Rectal: Hydrocortisone enemas or foam for distal disease. NOT for maintenance (significant side effects: weight gain, hyperglycemia, osteoporosis, infections, adrenal suppression). Immunomodulators (Steroid-sparing agents): Thiopurines: Azathioprine 2-2.5 mg/kg/day or 6-mercaptopurine 1-1.5 mg/kg/day. Onset of action: 3-6 months (not for acute flares). Check TPMT activity before starting (risk of myelosuppression if deficient). Monitor: CBC, LFTs every 3 months. Side effects: Nausea, pancreatitis, hepatotoxicity, myelosuppression, increased infection risk, lymphoma risk. Biologics (Anti-TNF agents): Infliximab: 5 mg/kg IV at 0, 2, 6 weeks, then every 8 weeks. Adalimumab: 160 mg SC at week 0, 80 mg at week 2, then 40 mg every 2 weeks. Golimumab: 200 mg SC at week 0, 100 mg at week 2, then 100 mg every 4 weeks. Indications: Moderate to severe disease, Steroid-dependent or steroid-refractory disease, Inadequate response to thiopurines. Monitor: TB screening before starting, Monitor for infections, infusion reactions. Vedolizumab (Anti-integrin): 300 mg IV at 0, 2, 6 weeks, then every 8 weeks. Gut-selective (less systemic immunosuppression). Alternative to anti-TNF agents. Tofacitinib (JAK inhibitor): 10 mg PO BID for 8 weeks (induction), then 5 mg BID (maintenance). Oral small molecule. Alternative to biologics. Monitor: CBC, lipids (risk of hyperlipidemia, thrombosis). TREATMENT - SEVERE/FULMINANT DISEASE: Hospitalization required. IV corticosteroids: Methylprednisolone 40-60 mg daily or hydrocortisone 300 mg daily. Assess response at 3-5 days. If no improvement: Rescue therapy with cyclosporine (2-4 mg/kg/day IV) or infliximab (5 mg/kg IV). Supportive care: IV fluids, Electrolyte repletion, Blood transfusion if severe anemia, Bowel rest (NPO), Avoid antidiarrheals and opioids (risk of toxic megacolon). Monitor for toxic megacolon: Abdominal X-ray daily, Colon dilation >6 cm on X-ray. Surgical consultation: If no response to medical therapy within 5-7 days, Toxic megacolon, Perforation, Massive bleeding. SURGICAL THERAPY: Indications: Refractory disease despite optimal medical therapy, Steroid-dependent disease with contraindications to immunosuppression, Toxic megacolon, Perforation, Massive bleeding, High-grade dysplasia or colorectal cancer. Procedure: Total proctocolectomy with ileal pouch-anal anastomosis (IPAA) - curative, preserves continence. Alternative: Total proctocolectomy with end ileostomy. Complications: Pouchitis (inflammation of ileal pouch) - treat with antibiotics (ciprofloxacin, metronidazole). SURVEILLANCE FOR DYSPLASIA: Increased colorectal cancer risk in ulcerative colitis. Risk factors: Disease duration >8 years, Extensive colitis, Primary sclerosing cholangitis, Family history of colorectal cancer, Persistent inflammation. Surveillance colonoscopy: Start 8 years after diagnosis. Interval: Every 1-2 years for extensive colitis, Every 2-3 years for left-sided colitis. Random biopsies: 4 biopsies every 10 cm throughout colon (minimum 32 biopsies). Targeted biopsies of visible lesions. Management of dysplasia: Low-grade dysplasia: Repeat colonoscopy in 3-6 months or colectomy. High-grade dysplasia: Colectomy recommended. MONITORING: Disease activity: Clinical symptoms, Fecal calprotectin (correlates with mucosal inflammation), C-reactive protein, Colonoscopy (assess mucosal healing). Treatment response: Mucosal healing is goal (reduces relapse, hospitalization, colectomy risk). Medication monitoring: Thiopurines: CBC, LFTs every 3 months. Anti-TNF agents: TB screening, monitor for infections. Tofacitinib: CBC, lipids.',
    keyPoints: [
      'Colonoscopy with biopsies for diagnosis and disease extent assessment',
      '5-ASA (mesalamine) first-line for mild-moderate disease',
      'Corticosteroids for moderate-severe disease (induction only, not maintenance)',
      'Thiopurines or anti-TNF agents for steroid-dependent/refractory disease',
      'Vedolizumab or tofacitinib as alternative biologics',
      'Colectomy for refractory disease, toxic megacolon, or high-grade dysplasia',
      'Surveillance colonoscopy starting 8 years after diagnosis',
      'Mucosal healing is treatment goal',
    ],
    acgUrl: 'https://gi.org/guideline/ulcerative-colitis-in-adults/',
    publicationYear: 2019,
  },

  // IRRITABLE BOWEL SYNDROME
  {
    topic: 'Irritable Bowel Syndrome (IBS) - ACG Guideline',
    keywords: ['irritable bowel syndrome', 'ibs', 'functional bowel disorder', 'ibs-d', 'ibs-c', 'ibs-m', 'acg ibs', 'ibs treatment', 'ibs management'],
    system: 'Gastroenterology',
    guidelineSummary: 'The ACG guideline for irritable bowel syndrome provides evidence-based recommendations for diagnosis and management of IBS. IBS is a functional bowel disorder characterized by recurrent abdominal pain associated with altered bowel habits (diarrhea, constipation, or mixed). The guideline emphasizes clinical diagnosis using Rome IV criteria without extensive testing in patients without alarm features. Treatment is tailored to predominant symptom subtype: IBS-D (diarrhea-predominant), IBS-C (constipation-predominant), or IBS-M (mixed). The guideline recommends dietary modifications (low FODMAP diet), pharmacotherapy (antispasmodics, laxatives, antidiarrheals, neuromodulators), and psychological therapies for symptom management.',
    strongRecommendations: [
      'We recommend using Rome IV criteria for clinical diagnosis of IBS in patients with typical symptoms and no alarm features (Strong recommendation, High quality evidence)',
      'We recommend against routine colonoscopy or extensive laboratory testing in patients <50 years with typical IBS symptoms and no alarm features (Strong recommendation, Moderate quality evidence)',
      'We recommend a trial of low FODMAP diet for symptom improvement in patients with IBS (Strong recommendation, Moderate quality evidence)',
      'We recommend loperamide for treatment of diarrhea in patients with IBS-D (Strong recommendation, High quality evidence)',
      'We recommend rifaximin for global symptom improvement in patients with IBS-D (Strong recommendation, High quality evidence)',
    ],
    conditionalRecommendations: [
      'We suggest testing for celiac disease (tissue transglutaminase IgA) in patients with IBS-D or IBS-M (Conditional recommendation, Moderate quality evidence)',
      'We suggest soluble fiber (psyllium) for global symptom improvement in IBS (Conditional recommendation, Moderate quality evidence)',
      'We suggest antispasmodics (hyoscyamine, dicyclomine) for abdominal pain in IBS (Conditional recommendation, Moderate quality evidence)',
      'We suggest tricyclic antidepressants (amitriptyline, nortriptyline) at low doses for global symptom improvement and abdominal pain in IBS (Conditional recommendation, Moderate quality evidence)',
      'We suggest SSRIs (selective serotonin reuptake inhibitors) for global symptom improvement in IBS (Conditional recommendation, Moderate quality evidence)',
      'We suggest polyethylene glycol (PEG) for constipation in patients with IBS-C (Conditional recommendation, Moderate quality evidence)',
      'We suggest linaclotide or lubiprostone for global symptom improvement and constipation in patients with IBS-C (Conditional recommendation, Moderate quality evidence)',
      'We suggest eluxadoline or alosetron for diarrhea and abdominal pain in patients with IBS-D (Conditional recommendation, Moderate quality evidence)',
      'We suggest cognitive behavioral therapy (CBT) or gut-directed hypnotherapy for global symptom improvement in IBS (Conditional recommendation, Moderate quality evidence)',
      'We suggest against routine testing for food allergies or sensitivities in IBS (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and meta-analyses; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of ACG IBS guidelines requires systematic approach to diagnosis and symptom-based management. DIAGNOSIS: Rome IV criteria (must meet all): Recurrent abdominal pain on average at least 1 day per week in the last 3 months, Associated with 2 or more of: Related to defecation (pain improves or worsens with bowel movement), Associated with change in stool frequency, Associated with change in stool form (appearance). Symptom onset at least 6 months before diagnosis. SUBTYPES: IBS-D (diarrhea-predominant): >25% of stools loose/watery (Bristol 6-7), <25% hard/lumpy (Bristol 1-2). IBS-C (constipation-predominant): >25% of stools hard/lumpy (Bristol 1-2), <25% loose/watery (Bristol 6-7). IBS-M (mixed): >25% of stools loose/watery AND >25% hard/lumpy. IBS-U (unclassified): Does not meet criteria for IBS-D, IBS-C, or IBS-M. ALARM FEATURES: Age >50 years with new-onset symptoms, Unintentional weight loss, Rectal bleeding or melena, Nocturnal symptoms (waking from sleep), Family history of colorectal cancer, IBD, or celiac disease, Anemia, Palpable abdominal mass, Fever. DIAGNOSTIC TESTING: Limited testing in patients without alarm features: Complete blood count (CBC) - rule out anemia, C-reactive protein (CRP) or fecal calprotectin - rule out IBD, Tissue transglutaminase IgA (tTG-IgA) - rule out celiac disease (especially IBS-D or IBS-M), Stool studies if diarrhea: Stool culture, ova and parasites, Giardia antigen, C. difficile toxin. Colonoscopy: Indicated if age ≥50 years (colorectal cancer screening), Alarm features present, Persistent symptoms despite treatment. NOT routinely indicated in young patients without alarm features. Avoid extensive testing: Food allergy testing (low yield), Breath tests for SIBO (controversial, not routinely recommended), Routine imaging (CT, MRI). DIETARY MANAGEMENT: Low FODMAP diet: FODMAPs = Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols. High FODMAP foods: Wheat, rye, onions, garlic, legumes, dairy (lactose), apples, pears, stone fruits, honey, artificial sweeteners (sorbitol, mannitol). Low FODMAP diet phases: Elimination phase (2-6 weeks): Strict avoidance of high FODMAP foods. Reintroduction phase: Gradually reintroduce FODMAP groups to identify triggers. Personalization phase: Long-term diet avoiding only trigger foods. Requires dietitian guidance. Effective in 50-70% of IBS patients. Fiber supplementation: Soluble fiber (psyllium, ispaghula) improves global symptoms. Insoluble fiber (wheat bran) may worsen symptoms - avoid. Lactose restriction: If lactose intolerance suspected (bloating, diarrhea after dairy). Gluten restriction: Consider if celiac disease excluded but symptoms improve with gluten avoidance. PHARMACOTHERAPY - IBS-D: Antidiarrheals: Loperamide 2-4 mg PRN or up to QID. Reduces stool frequency and urgency. Does NOT improve abdominal pain. Rifaximin: Non-absorbable antibiotic. 550 mg TID for 14 days. Improves global symptoms, bloating, diarrhea. Can repeat courses if symptoms recur. Eluxadoline: Mixed opioid receptor agonist/antagonist. 100 mg BID with food. Improves diarrhea and abdominal pain. Contraindicated: No gallbladder (risk of pancreatitis), history of pancreatitis, severe liver disease, alcohol abuse. Alosetron: 5-HT3 antagonist. 0.5-1 mg BID. Improves diarrhea and abdominal pain in women with severe IBS-D. Risk of ischemic colitis and severe constipation - requires enrollment in risk management program. Bile acid sequestrants: Cholestyramine 4 g daily to QID. For bile acid diarrhea (consider if chronic diarrhea, prior cholecystectomy, ileal disease). PHARMACOTHERAPY - IBS-C: Osmotic laxatives: Polyethylene glycol (PEG) 17 g daily. Improves stool frequency and consistency. Does NOT improve abdominal pain. Linaclotide: Guanylate cyclase-C agonist. 290 mcg daily on empty stomach. Improves constipation and abdominal pain. Side effect: Diarrhea (dose-dependent). Lubiprostone: Chloride channel activator. 8 mcg BID with food. Improves constipation and abdominal pain. Side effect: Nausea (take with food to reduce). Plecanatide: Guanylate cyclase-C agonist. 3 mg daily. Similar to linaclotide. Tenapanor: Sodium/hydrogen exchanger 3 inhibitor. 50 mg BID. Improves constipation and abdominal pain. PHARMACOTHERAPY - ABDOMINAL PAIN: Antispasmodics: Hyoscyamine 0.125-0.25 mg PO/SL PRN or TID-QID. Dicyclomine 10-20 mg PO TID-QID. Reduce intestinal smooth muscle spasm. Side effects: Dry mouth, blurred vision, urinary retention (anticholinergic). Tricyclic antidepressants (TCAs): Amitriptyline 10-50 mg at bedtime or Nortriptyline 10-50 mg at bedtime. Start low (10 mg), titrate slowly. Mechanism: Visceral analgesia (reduces pain perception), slows gut transit (helpful for IBS-D). Side effects: Dry mouth, constipation, sedation, weight gain. Selective serotonin reuptake inhibitors (SSRIs): Citalopram 20-40 mg daily, Escitalopram 10-20 mg daily, Paroxetine 20-40 mg daily. May improve global symptoms and pain. Less evidence than TCAs. May accelerate gut transit (helpful for IBS-C). PSYCHOLOGICAL THERAPIES: Cognitive behavioral therapy (CBT): Addresses maladaptive thoughts and behaviors related to GI symptoms. Effective for global symptom improvement. Gut-directed hypnotherapy: Uses hypnosis to reduce visceral hypersensitivity and improve gut function. Effective for pain and global symptoms. Mindfulness-based stress reduction: Meditation and relaxation techniques. Reduces stress and improves symptoms. Psychodynamic therapy: Explores unconscious conflicts contributing to symptoms. PROBIOTICS: Mixed evidence for efficacy. Specific strains may benefit some patients: Bifidobacterium infantis 35624, Lactobacillus plantarum 299v, VSL#3 (multi-strain probiotic). Consider trial for 4-8 weeks. LIFESTYLE MODIFICATIONS: Regular exercise: Improves global symptoms and quality of life. Stress management: Stress exacerbates IBS symptoms. Adequate sleep: Sleep disturbances worsen IBS. Avoid trigger foods: Caffeine, alcohol, fatty foods, spicy foods (individualized). FOLLOW-UP: Reassess symptoms and treatment response at 4-8 weeks. Adjust therapy based on predominant symptoms and response. Consider referral to gastroenterologist if refractory symptoms or diagnostic uncertainty.',
    keyPoints: [
      'Diagnose IBS using Rome IV criteria - no extensive testing if no alarm features',
      'Low FODMAP diet effective in 50-70% of patients',
      'IBS-D: Loperamide for diarrhea, rifaximin for global symptoms',
      'IBS-C: PEG for constipation, linaclotide or lubiprostone for pain and constipation',
      'TCAs (amitriptyline, nortriptyline) for abdominal pain and global symptoms',
      'Cognitive behavioral therapy or gut-directed hypnotherapy for refractory symptoms',
      'Test for celiac disease in IBS-D or IBS-M patients',
      'Avoid routine food allergy testing or SIBO breath tests',
    ],
    acgUrl: 'https://gi.org/guideline/management-of-irritable-bowel-syndrome/',
    publicationYear: 2021,
  },

  // COLORECTAL CANCER SCREENING
  {
    topic: 'Colorectal Cancer Screening - ACG Guideline',
    keywords: ['colorectal cancer screening', 'crc screening', 'colonoscopy screening', 'colon cancer screening', 'acg colorectal screening', 'fit test', 'cologuard', 'polyp surveillance'],
    system: 'Gastroenterology',
    guidelineSummary: 'The ACG guideline for colorectal cancer screening provides evidence-based recommendations for screening average-risk and high-risk individuals. Colorectal cancer is the third most common cancer and second leading cause of cancer death in the United States. Screening reduces incidence and mortality through detection and removal of precancerous polyps and early detection of cancer. The guideline recommends starting screening at age 45 for average-risk individuals (updated from age 50 due to rising incidence in younger adults). Colonoscopy is the preferred screening method. Alternative methods include fecal immunochemical test (FIT), multi-target stool DNA test (Cologuard), CT colonography, and flexible sigmoidoscopy. High-risk individuals (family history, IBD, genetic syndromes) require earlier and more frequent screening.',
    strongRecommendations: [
      'We recommend colorectal cancer screening for all average-risk adults starting at age 45 years (Strong recommendation, Moderate quality evidence)',
      'We recommend colonoscopy every 10 years as the preferred screening method for colorectal cancer (Strong recommendation, High quality evidence)',
      'We recommend annual fecal immunochemical test (FIT) as an acceptable alternative to colonoscopy for colorectal cancer screening (Strong recommendation, High quality evidence)',
      'We recommend that individuals with a first-degree relative with colorectal cancer or advanced adenoma diagnosed before age 60 begin screening at age 40 or 10 years before the youngest affected relative, whichever is earlier (Strong recommendation, Moderate quality evidence)',
      'We recommend surveillance colonoscopy at 3 years for individuals with 3-10 adenomas, any adenoma ≥10 mm, any adenoma with high-grade dysplasia, or any adenoma with villous features (Strong recommendation, Moderate quality evidence)',
      'We recommend surveillance colonoscopy at 5-10 years for individuals with 1-2 small (<10 mm) tubular adenomas with low-grade dysplasia (Strong recommendation, Moderate quality evidence)',
    ],
    conditionalRecommendations: [
      'We suggest multi-target stool DNA test (Cologuard) every 3 years as an alternative screening method (Conditional recommendation, Moderate quality evidence)',
      'We suggest CT colonography every 5 years as an alternative screening method (Conditional recommendation, Moderate quality evidence)',
      'We suggest flexible sigmoidoscopy every 5-10 years as an alternative screening method (Conditional recommendation, Moderate quality evidence)',
      'We suggest continuing screening in adults age 76-85 years based on individual patient factors (life expectancy, comorbidities, prior screening history) (Conditional recommendation, Low quality evidence)',
      'We suggest against screening in adults >85 years or with life expectancy <10 years (Conditional recommendation, Low quality evidence)',
      'We suggest surveillance colonoscopy at 1 year for individuals with ≥10 adenomas to exclude polyposis syndrome (Conditional recommendation, Low quality evidence)',
    ],
    qualityOfEvidence: 'Multiple levels: Strong recommendations are based on High to Moderate quality evidence from randomized controlled trials and observational studies; Conditional recommendations are based on Moderate to Low quality evidence',
    clinicalImplementation: 'Implementation of ACG colorectal cancer screening guidelines requires systematic approach to risk stratification and screening method selection. AVERAGE-RISK SCREENING: Definition: Age ≥45 years, No personal history of colorectal cancer or adenomatous polyps, No family history of colorectal cancer, No inflammatory bowel disease, No hereditary colorectal cancer syndrome. Screening initiation: Age 45 years (updated from 50 due to rising incidence in younger adults). Screening methods: COLONOSCOPY (PREFERRED): Interval: Every 10 years. Advantages: Visualizes entire colon, Detects and removes polyps in same procedure (prevents cancer), Most sensitive test. Disadvantages: Invasive, Requires bowel preparation, Sedation required, Small risk of complications (bleeding, perforation). FECAL IMMUNOCHEMICAL TEST (FIT): Interval: Annually. Advantages: Non-invasive, No bowel preparation, No sedation, Inexpensive. Disadvantages: Detects cancer but not polyps, Requires annual compliance, Positive test requires colonoscopy. Sensitivity: 79% for colorectal cancer, 24% for advanced adenomas. MULTI-TARGET STOOL DNA TEST (Cologuard): Interval: Every 3 years. Combines FIT with DNA markers (KRAS mutations, aberrant NDRG4 and BMP3 methylation). Advantages: Non-invasive, Higher sensitivity than FIT alone. Disadvantages: More expensive than FIT, Higher false-positive rate, Positive test requires colonoscopy. Sensitivity: 92% for colorectal cancer, 42% for advanced adenomas. CT COLONOGRAPHY (Virtual Colonoscopy): Interval: Every 5 years. Advantages: Non-invasive, No sedation, Visualizes entire colon. Disadvantages: Requires bowel preparation, Radiation exposure, Cannot remove polyps (requires colonoscopy if polyps found), May detect extracolonic findings requiring further evaluation. FLEXIBLE SIGMOIDOSCOPY: Interval: Every 5-10 years. Advantages: Less invasive than colonoscopy, Minimal bowel preparation, No sedation. Disadvantages: Only visualizes left colon (misses 40% of advanced neoplasia in right colon), Requires colonoscopy if polyps found. Screening cessation: Age 75 years: Individualize based on patient factors. Age 76-85 years: Consider continuing if good health, life expectancy >10 years, never screened or not up-to-date. Age >85 years: Discontinue screening (limited life expectancy, low benefit). HIGH-RISK SCREENING: Family history: First-degree relative with colorectal cancer or advanced adenoma diagnosed <60 years: Start screening at age 40 or 10 years before youngest affected relative, whichever is earlier. Colonoscopy every 5 years. First-degree relative with colorectal cancer or advanced adenoma diagnosed ≥60 years: Start screening at age 45 (same as average risk). Colonoscopy every 10 years. Two or more first-degree relatives with colorectal cancer: Start screening at age 40 or 10 years before youngest affected relative. Colonoscopy every 5 years. Consider genetic counseling for hereditary syndrome. Inflammatory bowel disease (IBD): Ulcerative colitis or Crohn colitis: Start surveillance colonoscopy 8 years after diagnosis. Interval: Every 1-2 years for extensive colitis, Every 2-3 years for left-sided colitis. Random biopsies throughout colon (4 biopsies every 10 cm). Hereditary colorectal cancer syndromes: Lynch syndrome (hereditary non-polyposis colorectal cancer): Colonoscopy every 1-2 years starting at age 20-25 or 2-5 years before youngest affected relative. Familial adenomatous polyposis (FAP): Colonoscopy or flexible sigmoidoscopy annually starting at age 10-12. Prophylactic colectomy typically performed in late teens/early 20s. PTEN hamartoma syndrome (Cowden syndrome): Colonoscopy every 1-2 years starting at age 35 or 5 years before youngest affected relative. Peutz-Jeghers syndrome: Colonoscopy every 2-3 years starting at age 18. Personal history of colorectal cancer: Colonoscopy at 1 year after resection, then every 3-5 years if normal. Personal history of adenomatous polyps: See surveillance recommendations below. POLYP SURVEILLANCE: Based on findings at index colonoscopy: 1-2 small (<10 mm) tubular adenomas with low-grade dysplasia: Surveillance colonoscopy at 5-10 years. 3-10 adenomas, OR Any adenoma ≥10 mm, OR Any adenoma with high-grade dysplasia, OR Any adenoma with villous features (tubulovillous or villous adenoma): Surveillance colonoscopy at 3 years. >10 adenomas: Surveillance colonoscopy at 1 year. Consider genetic testing for polyposis syndrome (FAP, attenuated FAP, MUTYH-associated polyposis). Sessile serrated polyps: 1-2 small (<10 mm) sessile serrated polyps without dysplasia: Surveillance at 5-10 years. 3-10 sessile serrated polyps, OR Any sessile serrated polyp ≥10 mm, OR Any sessile serrated polyp with dysplasia: Surveillance at 3 years. Hyperplastic polyps: No increased cancer risk. Surveillance at 10 years (same as average risk). QUALITY INDICATORS: Adenoma detection rate (ADR): Percentage of screening colonoscopies with ≥1 adenoma detected. Target: ≥25% in men, ≥15% in women. Higher ADR associated with lower interval cancer risk. Cecal intubation rate: Percentage of colonoscopies reaching cecum. Target: ≥95%. Bowel preparation quality: Adequate preparation in ≥85% of colonoscopies. Withdrawal time: ≥6 minutes for negative screening colonoscopy.',
    keyPoints: [
      'Start colorectal cancer screening at age 45 for average-risk individuals',
      'Colonoscopy every 10 years is preferred screening method',
      'Annual FIT is acceptable alternative to colonoscopy',
      'Family history: Start at age 40 or 10 years before youngest affected relative',
      'Surveillance intervals based on polyp findings: 3 years for advanced adenomas, 5-10 years for 1-2 small adenomas',
      'IBD: Surveillance colonoscopy starting 8 years after diagnosis',
      'Discontinue screening at age 75-85 based on individual factors, >85 years',
      'Adenoma detection rate ≥25% in men, ≥15% in women',
    ],
    acgUrl: 'https://gi.org/guideline/colorectal-cancer-screening/',
    publicationYear: 2021,
  },
];

/**
 * Search function to find relevant ACG guideline entries based on query
 */
export function searchACGGuidelines(query: string): ACGGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = acgGuidelinesKnowledge.map(entry => {
    let score = 0;

    // Exact topic match
    if (entry.topic.toLowerCase() === lowerQuery) {
      score += 100000;
    }

    // Exact keyword match
    entry.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (keywordLower === lowerQuery) {
        score += 50000;
      } else if (keywordLower.includes(lowerQuery)) {
        score += 10000;
      }
    });

    // Multi-word matching
    if (queryWords.length > 1) {
      let matchedWords = 0;
      queryWords.forEach(word => {
        if (entry.topic.toLowerCase().includes(word) ||
            entry.keywords.some(k => k.toLowerCase().includes(word))) {
          matchedWords++;
        }
      });
      const matchPercentage = matchedWords / queryWords.length;
      if (matchPercentage >= 0.6) {
        score += 8000 * matchPercentage;
      }
    }

    // Single word matching
    if (queryWords.length === 1) {
      const word = queryWords[0];
      if (entry.topic.toLowerCase().includes(word)) {
        score += 5000;
      }
      entry.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(word)) {
          score += 3000;
        }
      });
    }

    return { entry, score };
  });

  const filteredEntries = scoredEntries
    .filter(item => item.score >= 1000)
    .sort((a, b) => b.score - a.score);

  console.log(`ACG Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get ACG guideline by exact topic name
 */
export function getACGGuidelineByTopic(topic: string): ACGGuidelineEntry | undefined {
  return acgGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all ACG guidelines for a specific system
 */
export function getACGGuidelinesBySystem(system: string): ACGGuidelineEntry[] {
  return acgGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
