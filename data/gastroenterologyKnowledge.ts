
/**
 * Gastroenterology Knowledge Base - Merck Manual Professional
 * 
 * Comprehensive gastroenterology knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major GI conditions including:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * PHASE 3 KEYWORD REFINEMENT: Enhanced keyword specificity to prevent content bleeding
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const gastroenterologyKnowledge: MerckManualEntry[] = [
  // ESOPHAGEAL DISORDERS
  {
    topic: 'Gastroesophageal Reflux Disease',
    keywords: ['gerd', 'gastroesophageal reflux disease', 'gastroesophageal reflux', 'acid reflux disease', 'reflux esophagitis', 'chronic heartburn'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, GERD results from inappropriate relaxation of the lower esophageal sphincter (LES) allowing reflux of gastric contents into the esophagus. Contributing factors include decreased LES tone, hiatal hernia, delayed gastric emptying, and increased intra-abdominal pressure. Chronic acid exposure causes esophageal mucosal injury, inflammation, and potential complications including erosive esophagitis, strictures, Barrett esophagus, and adenocarcinoma.',
    clinicalPresentation: 'Typical symptoms include heartburn (retrosternal burning), regurgitation of sour or bitter material, and dysphagia. Atypical presentations include chronic cough, laryngitis, asthma exacerbations, and dental erosions. Symptoms typically worsen after meals, when lying down, or bending over. Physical examination is usually normal. Alarm symptoms (dysphagia, odynophagia, weight loss, GI bleeding) suggest complications.',
    diagnosticApproach: 'Clinical diagnosis based on typical symptoms. Empiric trial of proton pump inhibitor (PPI) is both diagnostic and therapeutic. Upper endoscopy indicated for alarm symptoms, refractory symptoms, or long-standing GERD (>5 years) to screen for Barrett esophagus. Ambulatory pH monitoring or pH-impedance testing for atypical symptoms or when diagnosis uncertain. Esophageal manometry before anti-reflux surgery to assess motility.',
    treatment: 'Lifestyle modifications: elevate head of bed, avoid late meals, weight loss, avoid trigger foods (caffeine, alcohol, chocolate, fatty foods, citrus). Pharmacotherapy: PPIs (omeprazole, esomeprazole) are most effective, taken 30-60 minutes before breakfast. H2 receptor antagonists (ranitidine, famotidine) for mild symptoms or breakthrough symptoms. Antacids for immediate symptom relief. Surgical fundoplication for refractory symptoms or patient preference. Treat complications: dilation for strictures, surveillance for Barrett esophagus.',
    clinicalPearls: [
      'PPIs are more effective than H2 blockers for healing erosive esophagitis',
      'Barrett esophagus requires surveillance endoscopy due to adenocarcinoma risk',
      'Alarm symptoms warrant urgent endoscopy to exclude malignancy',
      'Nocturnal symptoms increase risk of erosive esophagitis and complications'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/esophageal-and-swallowing-disorders/gastroesophageal-reflux-disease-gerd'
  },

  {
    topic: 'Barrett Esophagus',
    keywords: ['barrett esophagus', 'barrett', 'barrett\'s esophagus', 'intestinal metaplasia esophagus', 'barrett metaplasia'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, Barrett esophagus is a complication of chronic GERD characterized by replacement of normal squamous epithelium with columnar epithelium (intestinal metaplasia). This metaplastic change is a response to chronic acid exposure and represents a premalignant condition with increased risk of esophageal adenocarcinoma. Risk increases with length of Barrett segment and presence of dysplasia.',
    clinicalPresentation: 'Most patients are asymptomatic or have typical GERD symptoms. Barrett esophagus itself causes no specific symptoms. Patients typically have long-standing GERD (>5 years), are male, Caucasian, obese, and >50 years old. Alarm symptoms (dysphagia, weight loss, GI bleeding) suggest progression to adenocarcinoma.',
    diagnosticApproach: 'Diagnosis requires upper endoscopy with biopsy showing intestinal metaplasia. Endoscopy shows salmon-colored mucosa extending proximally from gastroesophageal junction. Multiple biopsies obtained to assess for dysplasia. Prague classification describes extent (circumferential and maximal extent). Screening recommended for patients with chronic GERD (>5 years) and multiple risk factors. Assess for dysplasia: no dysplasia, low-grade dysplasia, high-grade dysplasia.',
    treatment: 'Aggressive acid suppression with high-dose PPI. Surveillance endoscopy based on dysplasia grade: no dysplasia (every 3-5 years), low-grade dysplasia (every 6-12 months or endoscopic eradication therapy), high-grade dysplasia (endoscopic eradication therapy - radiofrequency ablation or endoscopic mucosal resection). Esophagectomy for invasive adenocarcinoma. Lifestyle modifications and weight loss to reduce reflux.',
    clinicalPearls: [
      'Barrett esophagus increases adenocarcinoma risk 30-40 fold',
      'Radiofrequency ablation can eradicate Barrett esophagus and reduce cancer risk',
      'High-grade dysplasia requires aggressive treatment due to high cancer risk',
      'Surveillance intervals depend on presence and grade of dysplasia'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/esophageal-and-swallowing-disorders/barrett-esophagus'
  },

  {
    topic: 'Achalasia',
    keywords: ['achalasia', 'esophageal achalasia', 'primary achalasia', 'aperistalsis esophagus', 'les dysfunction achalasia'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, achalasia is a primary esophageal motility disorder characterized by failure of lower esophageal sphincter (LES) relaxation and loss of esophageal peristalsis. Results from degeneration of inhibitory neurons in the myenteric plexus, leading to unopposed cholinergic stimulation. Causes progressive esophageal dilation and retention of food and secretions. Etiology is idiopathic in most cases; secondary causes include Chagas disease and malignancy.',
    clinicalPresentation: 'Progressive dysphagia to both solids and liquids (key feature distinguishing from mechanical obstruction). Regurgitation of undigested food, chest pain, weight loss, and nocturnal cough from aspiration. Symptoms develop gradually over months to years. Physical examination typically normal. Complications include aspiration pneumonia, esophageal candidiasis, and slightly increased risk of esophageal squamous cell carcinoma.',
    diagnosticApproach: 'Barium esophagram shows dilated esophagus with smooth tapering at gastroesophageal junction ("bird\'s beak" appearance) and absent peristalsis. Upper endoscopy rules out pseudoachalasia (malignancy causing similar symptoms) and assesses for complications. High-resolution esophageal manometry is diagnostic: shows absent peristalsis, incomplete LES relaxation, and elevated integrated relaxation pressure. Chicago classification defines achalasia subtypes (I, II, III) based on manometry patterns.',
    treatment: 'Goal is to reduce LES pressure. Pneumatic dilation (balloon dilation of LES) is effective first-line therapy. Surgical myotomy (Heller myotomy with partial fundoplication) via laparoscopy is definitive treatment with excellent long-term results. Peroral endoscopic myotomy (POEM) is emerging alternative. Botulinum toxin injection into LES provides temporary relief (3-6 months) for poor surgical candidates. Calcium channel blockers or nitrates have limited efficacy. No treatment restores normal peristalsis.',
    clinicalPearls: [
      'Dysphagia to both solids AND liquids from onset suggests achalasia',
      'Bird\'s beak appearance on barium swallow is classic',
      'Pneumatic dilation and Heller myotomy have similar efficacy (~90% success)',
      'Always exclude pseudoachalasia (malignancy) with endoscopy and CT'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/esophageal-and-swallowing-disorders/achalasia'
  },

  // PEPTIC ULCER DISEASE
  {
    topic: 'Peptic Ulcer Disease',
    keywords: ['peptic ulcer disease', 'pud', 'gastric ulcer disease', 'duodenal ulcer disease', 'peptic ulceration', 'stomach ulcer disease'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, peptic ulcer disease results from imbalance between aggressive factors (acid, pepsin, H. pylori) and defensive factors (mucus, bicarbonate, prostaglandins, blood flow). Helicobacter pylori infection (70-90% of duodenal ulcers, 50-70% of gastric ulcers) and NSAIDs are the two major causes. H. pylori damages mucosa through urease production, cytotoxins, and inflammatory response. NSAIDs inhibit COX-1, reducing protective prostaglandins. Smoking, stress, and alcohol are contributing factors.',
    clinicalPresentation: 'Epigastric pain is the hallmark symptom. Duodenal ulcer pain typically occurs 2-5 hours after meals and at night, relieved by food or antacids. Gastric ulcer pain may worsen with eating. Many patients are asymptomatic. Complications include bleeding (hematemesis, melena), perforation (acute abdomen, peritonitis), and gastric outlet obstruction (nausea, vomiting, early satiety). Physical examination may reveal epigastric tenderness; peritoneal signs suggest perforation.',
    diagnosticApproach: 'Upper endoscopy is diagnostic and allows biopsy to exclude malignancy (gastric ulcers) and test for H. pylori. Barium upper GI series is alternative but less sensitive. Test for H. pylori: urea breath test, stool antigen test, or biopsy-based tests (rapid urease test, histology). Serology not recommended for active infection. Assess for complications: CBC (anemia from bleeding), upright chest X-ray (free air under diaphragm suggests perforation). Exclude Zollinger-Ellison syndrome if refractory or multiple ulcers.',
    treatment: 'H. pylori eradication: triple therapy (PPI + clarithromycin + amoxicillin or metronidazole) for 14 days, or quadruple therapy (PPI + bismuth + tetracycline + metronidazole) for 10-14 days. Confirm eradication with urea breath test or stool antigen 4 weeks after treatment. NSAID-induced ulcers: discontinue NSAID if possible, PPI for 4-8 weeks. If NSAID must continue, use PPI prophylaxis or switch to selective COX-2 inhibitor. Treat complications: endoscopic hemostasis for bleeding, surgery for perforation or refractory bleeding, endoscopic dilation for strictures.',
    clinicalPearls: [
      'Always test for H. pylori and eradicate if present',
      'Gastric ulcers require biopsy to exclude malignancy',
      'Duodenal ulcers are almost never malignant',
      'PPI therapy alone without H. pylori eradication leads to high recurrence rates'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/gastritis-and-peptic-ulcer-disease/peptic-ulcer-disease'
  },

  {
    topic: 'Helicobacter Pylori Infection',
    keywords: ['helicobacter pylori', 'h pylori infection', 'h. pylori infection', 'hp infection', 'pylori bacteria'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, Helicobacter pylori is a spiral-shaped, gram-negative bacterium that colonizes the gastric mucosa. It produces urease, which generates ammonia to neutralize gastric acid, creating a favorable microenvironment. Infection causes chronic gastritis and is the major cause of peptic ulcer disease (90% of duodenal ulcers, 70% of gastric ulcers). Also increases risk of gastric adenocarcinoma and MALT lymphoma. Transmission is fecal-oral or oral-oral, typically acquired in childhood.',
    clinicalPresentation: 'Most infected individuals are asymptomatic. Symptomatic patients present with dyspepsia, epigastric pain, nausea, or symptoms of peptic ulcer disease. Complications include peptic ulcers (bleeding, perforation), gastric adenocarcinoma, and MALT lymphoma. Physical examination typically normal unless complications present.',
    diagnosticApproach: 'Non-invasive tests: urea breath test (high sensitivity and specificity, preferred for diagnosis and post-treatment confirmation), stool antigen test (good alternative), serology (detects antibodies but cannot distinguish active from past infection, not recommended for diagnosis). Invasive tests (require endoscopy): rapid urease test (biopsy placed in urea-containing medium), histology (gold standard), culture (rarely needed, for antibiotic resistance testing). Avoid PPI for 2 weeks and antibiotics for 4 weeks before testing to prevent false negatives.',
    treatment: 'First-line: triple therapy - PPI (omeprazole 20mg BID or equivalent) + clarithromycin 500mg BID + amoxicillin 1g BID for 14 days. Alternative: quadruple therapy - PPI + bismuth subsalicylate + tetracycline + metronidazole for 10-14 days (preferred if clarithromycin resistance suspected). Second-line (if first-line fails): levofloxacin-based triple therapy or bismuth quadruple therapy. Confirm eradication 4 weeks after completing therapy with urea breath test or stool antigen (not serology). Treat all patients with documented infection.',
    clinicalPearls: [
      'Eradication reduces ulcer recurrence from 60-70% to <10%',
      'Clarithromycin resistance is increasing - consider local resistance patterns',
      'Urea breath test is best for confirming eradication',
      'Eradication of H. pylori can lead to regression of MALT lymphoma'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/gastritis-and-peptic-ulcer-disease/helicobacter-pylori-infection'
  },

  // INFLAMMATORY BOWEL DISEASE
  {
    topic: 'Crohn Disease',
    keywords: ['crohn disease', 'crohn\'s disease', 'crohns disease', 'regional enteritis', 'terminal ileitis', 'granulomatous colitis'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, Crohn disease is a chronic transmural inflammatory disorder that can affect any part of the GI tract from mouth to anus, most commonly the terminal ileum and colon. Characterized by skip lesions (discontinuous areas of inflammation), transmural inflammation, and granulomas. Pathogenesis involves genetic susceptibility (NOD2/CARD15 mutations), dysregulated immune response to intestinal microbiota, and environmental triggers (smoking increases risk). Chronic inflammation leads to complications including strictures, fistulas, and abscesses.',
    clinicalPresentation: 'Chronic diarrhea (often non-bloody), abdominal pain (typically right lower quadrant), weight loss, and fatigue. Perianal disease (fissures, fistulas, abscesses) in 30%. Extraintestinal manifestations include arthritis, erythema nodosum, pyoderma gangrenosum, uveitis, and primary sclerosing cholangitis. Physical examination may reveal abdominal tenderness, palpable mass (inflammatory phlegmon or abscess), perianal disease, and signs of malnutrition. Complications include bowel obstruction, fistulas (enteroenteric, enterovesical, enterocutaneous), abscesses, and increased colorectal cancer risk.',
    diagnosticApproach: 'Ileocolonoscopy with biopsies is diagnostic: shows skip lesions, cobblestoning, aphthous ulcers, and transmural inflammation with granulomas (in 50%). CT or MR enterography evaluates small bowel involvement and complications (strictures, fistulas, abscesses). Laboratory tests: elevated CRP and ESR (inflammation), anemia (chronic disease or iron deficiency), hypoalbuminemia (malnutrition), fecal calprotectin (elevated in active inflammation). Exclude infections (C. difficile, enteric pathogens). Serologies (ASCA, pANCA) have limited diagnostic utility.',
    treatment: 'Mild-moderate disease: budesonide or systemic corticosteroids for induction, then immunomodulators (azathioprine, 6-mercaptopurine, methotrexate) for maintenance. Moderate-severe disease: anti-TNF agents (infliximab, adalimumab), anti-integrin (vedolizumab), or anti-IL-12/23 (ustekinumab) for induction and maintenance. Antibiotics (metronidazole, ciprofloxacin) for perianal disease or bacterial overgrowth. Nutritional support: enteral nutrition, vitamin supplementation (B12, folate, vitamin D). Surgery for complications (obstruction, fistulas, abscesses) or refractory disease - not curative, disease recurs. Smoking cessation essential.',
    clinicalPearls: [
      'Smoking worsens Crohn disease (opposite effect in ulcerative colitis)',
      'Perianal disease is characteristic of Crohn, not ulcerative colitis',
      'Surgery is not curative - disease recurs at anastomosis in 50% at 10 years',
      'Fistulas and strictures are complications of transmural inflammation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/crohn-disease'
  },

  {
    topic: 'Ulcerative Colitis',
    keywords: ['ulcerative colitis', 'uc colitis', 'chronic ulcerative colitis', 'idiopathic ulcerative colitis', 'pancolitis'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, ulcerative colitis is a chronic inflammatory disorder limited to the colon, characterized by continuous mucosal inflammation starting in the rectum and extending proximally. Unlike Crohn disease, inflammation is superficial (mucosa and submucosa only), continuous (no skip lesions), and limited to the colon. Pathogenesis involves genetic susceptibility, dysregulated immune response, and environmental factors. Chronic inflammation increases colorectal cancer risk, especially with extensive colitis and longer disease duration.',
    clinicalPresentation: 'Bloody diarrhea with mucus is the hallmark symptom. Urgency, tenesmus, and abdominal cramping are common. Severity ranges from mild (≤4 stools/day, no systemic symptoms) to severe (≥6 bloody stools/day, fever, tachycardia, anemia). Extraintestinal manifestations include arthritis, erythema nodosum, pyoderma gangrenosum, uveitis, and primary sclerosing cholangitis (5%). Physical examination shows abdominal tenderness; severe disease may present with toxic megacolon (abdominal distention, fever, tachycardia, peritoneal signs).',
    diagnosticApproach: 'Colonoscopy with biopsies is diagnostic: shows continuous inflammation starting from rectum, loss of vascular pattern, friability, ulcerations, and pseudopolyps. Histology shows crypt abscesses and distortion, no granulomas. Assess disease extent: proctitis (rectum only), left-sided colitis (to splenic flexure), or pancolitis (entire colon). Laboratory tests: elevated CRP and ESR, anemia, hypoalbuminemia, fecal calprotectin. Exclude infections (C. difficile, CMV, enteric pathogens). Abdominal X-ray in severe disease to assess for toxic megacolon (colon dilation >6 cm).',
    treatment: 'Mild-moderate disease: 5-aminosalicylates (mesalamine) oral and/or rectal for induction and maintenance. Proctitis: mesalamine suppositories. Left-sided colitis: mesalamine enemas. Moderate-severe disease: systemic corticosteroids for induction, then immunomodulators (azathioprine, 6-mercaptopurine) or biologics (anti-TNF, vedolizumab, tofacitinib) for maintenance. Severe/fulminant disease: IV corticosteroids, consider cyclosporine or infliximab for steroid-refractory disease. Colectomy is curative for refractory disease or complications (toxic megacolon, perforation, dysplasia/cancer). Surveillance colonoscopy for dysplasia starting 8 years after diagnosis.',
    clinicalPearls: [
      'Smoking is protective in ulcerative colitis (opposite effect in Crohn)',
      'Colectomy is curative, unlike in Crohn disease',
      'Toxic megacolon is life-threatening complication requiring urgent colectomy',
      'Colorectal cancer risk increases with disease extent and duration'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/inflammatory-bowel-disease-ibd/ulcerative-colitis'
  },

  // LIVER DISEASE
  {
    topic: 'Cirrhosis',
    keywords: ['cirrhosis', 'liver cirrhosis', 'hepatic cirrhosis', 'end stage liver disease', 'esld', 'decompensated cirrhosis'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, cirrhosis is the end result of chronic liver injury characterized by diffuse hepatic fibrosis with nodular regeneration. Common causes include chronic hepatitis C, alcoholic liver disease, non-alcoholic fatty liver disease (NAFLD), chronic hepatitis B, and autoimmune hepatitis. Progressive fibrosis disrupts normal liver architecture, leading to portal hypertension, hepatocellular dysfunction, and increased risk of hepatocellular carcinoma. Complications result from portal hypertension (varices, ascites, hepatic encephalopathy) and synthetic dysfunction (coagulopathy, hypoalbuminemia).',
    clinicalPresentation: 'Early cirrhosis may be asymptomatic (compensated). Decompensated cirrhosis presents with jaundice, ascites, peripheral edema, variceal bleeding, hepatic encephalopathy, and spontaneous bacterial peritonitis. Physical examination reveals spider angiomata, palmar erythema, gynecomastia, testicular atrophy, hepatomegaly (early) or small nodular liver (late), splenomegaly, ascites, asterixis, and muscle wasting. Complications include hepatorenal syndrome, hepatopulmonary syndrome, and hepatocellular carcinoma.',
    diagnosticApproach: 'Diagnosis based on clinical findings, laboratory tests, and imaging. Laboratory abnormalities: thrombocytopenia (portal hypertension, splenic sequestration), prolonged PT/INR (synthetic dysfunction), hypoalbuminemia, hyperbilirubinemia, elevated aminotransferases (variable). Imaging: ultrasound shows nodular liver, increased echogenicity, splenomegaly, ascites. CT or MRI better characterizes liver morphology and screens for hepatocellular carcinoma. Liver biopsy confirms diagnosis and assesses severity but often not needed. Assess severity: Child-Pugh score (A, B, C) or MELD score. Screen for varices with upper endoscopy. Screen for hepatocellular carcinoma with ultrasound and AFP every 6 months.',
    treatment: 'Treat underlying cause: alcohol cessation, antiviral therapy for hepatitis B/C, weight loss for NAFLD. Manage complications: non-selective beta-blockers (propranolol, nadolol) for variceal prophylaxis, endoscopic band ligation for large varices, diuretics (spironolactone plus furosemide) for ascites, lactulose and rifaximin for hepatic encephalopathy, antibiotics for spontaneous bacterial peritonitis. Avoid hepatotoxins (alcohol, NSAIDs, certain medications). Nutritional support. Liver transplantation for decompensated cirrhosis or hepatocellular carcinoma within Milan criteria. Vaccinate against hepatitis A and B.',
    clinicalPearls: [
      'Thrombocytopenia is often first sign of cirrhosis (portal hypertension)',
      'MELD score predicts 3-month mortality and prioritizes transplant allocation',
      'Screen for hepatocellular carcinoma every 6 months with ultrasound and AFP',
      'Spontaneous bacterial peritonitis requires diagnostic paracentesis if ascites present'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/fibrosis-and-cirrhosis/cirrhosis'
  },

  {
    topic: 'Hepatic Encephalopathy',
    keywords: ['hepatic encephalopathy', 'he', 'portal systemic encephalopathy', 'liver encephalopathy', 'hepatic coma'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, hepatic encephalopathy is a neuropsychiatric syndrome resulting from liver dysfunction and portosystemic shunting. Ammonia, produced by gut bacteria and normally metabolized by the liver, accumulates in the bloodstream and crosses the blood-brain barrier, causing neurotoxicity. Other toxins (mercaptans, short-chain fatty acids, false neurotransmitters) also contribute. Precipitating factors include GI bleeding, infection, constipation, dehydration, electrolyte imbalances, medications (sedatives, diuretics), and dietary protein excess.',
    clinicalPresentation: 'Spectrum ranges from subtle cognitive impairment (minimal hepatic encephalopathy) to coma. West Haven criteria grade severity: Grade 1 (mild confusion, sleep disturbance), Grade 2 (lethargy, disorientation), Grade 3 (somnolence, severe confusion), Grade 4 (coma). Physical examination reveals asterixis (flapping tremor), hyperreflexia, fetor hepaticus (musty odor), and altered mental status. Minimal hepatic encephalopathy causes subtle deficits in attention, psychomotor speed, and executive function, detectable only with specialized testing.',
    diagnosticApproach: 'Clinical diagnosis based on altered mental status in patient with liver disease, after excluding other causes. Elevated serum ammonia supports diagnosis but level does not correlate with severity. Identify and treat precipitating factors: check for GI bleeding (hemoglobin, stool guaiac), infection (cultures, chest X-ray, urinalysis, diagnostic paracentesis), electrolyte abnormalities, medications. EEG shows triphasic waves (non-specific). Neuropsychometric testing detects minimal hepatic encephalopathy. Exclude other causes: hypoglycemia, intracranial lesions, Wernicke encephalopathy, uremia.',
    treatment: 'Identify and treat precipitating factors. Lactulose is first-line: titrate to 2-3 soft bowel movements daily, reduces ammonia production and absorption. Rifaximin (non-absorbable antibiotic) added to lactulose reduces recurrence. Protein restriction no longer recommended (maintain adequate nutrition). Zinc supplementation if deficient. Avoid sedatives and hepatotoxic medications. Liver transplantation for refractory or recurrent hepatic encephalopathy. Minimal hepatic encephalopathy: lactulose or rifaximin may improve cognitive function and quality of life.',
    clinicalPearls: [
      'Asterixis is classic sign but not specific for hepatic encephalopathy',
      'Lactulose works by acidifying colon and reducing ammonia absorption',
      'Protein restriction is outdated - maintain adequate nutrition',
      'Always search for and treat precipitating factors'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/approach-to-the-patient-with-liver-disease/hepatic-encephalopathy'
  },

  {
    topic: 'Ascites',
    keywords: ['ascites', 'peritoneal fluid', 'abdominal fluid accumulation', 'fluid in abdomen', 'cirrhotic ascites'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, ascites is accumulation of fluid in the peritoneal cavity. Portal hypertension from cirrhosis is the most common cause (85%). Increased portal pressure causes splanchnic vasodilation, sodium retention, and fluid transudation into peritoneal cavity. Decreased oncotic pressure from hypoalbuminemia contributes. Other causes include malignancy (peritoneal carcinomatosis), heart failure, nephrotic syndrome, tuberculosis, and pancreatitis. Serum-ascites albumin gradient (SAAG) differentiates portal hypertension (SAAG ≥1.1 g/dL) from other causes (SAAG <1.1 g/dL).',
    clinicalPresentation: 'Abdominal distention, weight gain, and discomfort. Large-volume ascites causes dyspnea from diaphragmatic elevation. Physical examination reveals bulging flanks, fluid wave, shifting dullness, and umbilical or inguinal hernias. Complications include spontaneous bacterial peritonitis (fever, abdominal pain, altered mental status), hepatorenal syndrome, and respiratory compromise.',
    diagnosticApproach: 'Diagnostic paracentesis is essential for new-onset ascites or suspected spontaneous bacterial peritonitis. Ascitic fluid analysis: cell count with differential (PMN >250/μL suggests SBP), albumin (calculate SAAG), total protein, culture (inoculate blood culture bottles at bedside), Gram stain, cytology if malignancy suspected. SAAG ≥1.1 g/dL indicates portal hypertension (cirrhosis, heart failure, Budd-Chiari). SAAG <1.1 g/dL suggests peritoneal disease (malignancy, tuberculosis, pancreatitis). Ultrasound confirms ascites and assesses liver morphology.',
    treatment: 'Treat underlying cause. Sodium restriction (<2 g/day) is cornerstone. Diuretics: spironolactone 100 mg daily (increase by 100 mg every 3-5 days, max 400 mg) plus furosemide 40 mg daily (increase by 40 mg, max 160 mg), maintain 100:40 ratio. Monitor weight (goal 0.5 kg/day loss if no edema, 1 kg/day if edema present), electrolytes, and renal function. Large-volume paracentesis (remove 4-5 L) for tense ascites, give albumin if >5 L removed. Transjugular intrahepatic portosystemic shunt (TIPS) for refractory ascites. Liver transplantation for refractory ascites. Treat SBP with ceftriaxone or cefotaxime.',
    clinicalPearls: [
      'SAAG ≥1.1 g/dL indicates portal hypertension with 97% accuracy',
      'Spironolactone:furosemide ratio of 100:40 maintains normokalemia',
      'Diagnostic paracentesis is safe despite coagulopathy - no need for FFP',
      'SBP prophylaxis with norfloxacin or TMP-SMX for high-risk patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/approach-to-the-patient-with-liver-disease/ascites'
  },

  {
    topic: 'Spontaneous Bacterial Peritonitis',
    keywords: ['spontaneous bacterial peritonitis', 'sbp', 'bacterial peritonitis', 'infected ascites', 'ascites infection'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, spontaneous bacterial peritonitis is bacterial infection of ascitic fluid without an obvious intra-abdominal source. Occurs almost exclusively in patients with cirrhosis and ascites. Pathogenesis involves bacterial translocation from gut to mesenteric lymph nodes and bloodstream, then seeding of ascitic fluid. Impaired immune function in cirrhosis (decreased complement, opsonic activity) predisposes to infection. Common organisms are gram-negative enteric bacteria (E. coli, Klebsiella) and Streptococcus pneumoniae.',
    clinicalPresentation: 'Classic triad: fever, abdominal pain, and altered mental status (hepatic encephalopathy). However, 30% are asymptomatic. Other symptoms include nausea, vomiting, diarrhea, and worsening ascites. Physical examination may reveal fever, abdominal tenderness, rebound tenderness, and signs of hepatic encephalopathy. High index of suspicion required in cirrhotic patients with ascites who develop any clinical deterioration.',
    diagnosticApproach: 'Diagnostic paracentesis is essential. SBP diagnosed by ascitic fluid polymorphonuclear (PMN) count >250 cells/μL. Obtain cell count with differential, Gram stain, and culture (inoculate blood culture bottles at bedside to increase yield). Positive culture with PMN >250 confirms SBP. Culture-negative neutrocytic ascites (PMN >250 but negative culture) is treated as SBP. Monomicrobial non-neutrocytic bacterascites (positive culture but PMN <250) may represent early SBP or contamination - repeat paracentesis. Exclude secondary peritonitis (perforated viscus): ascitic fluid protein >1 g/dL, glucose <50 mg/dL, LDH > upper limit of normal for serum, or polymicrobial culture suggests secondary peritonitis.',
    treatment: 'Empiric antibiotics immediately after diagnostic paracentesis: cefotaxime 2g IV q8h or ceftriaxone 2g IV daily for 5 days. Alternative: fluoroquinolone (ciprofloxacin) if not on prophylaxis. Albumin infusion (1.5 g/kg on day 1, then 1 g/kg on day 3) reduces renal impairment and mortality. Repeat paracentesis at 48 hours to document response (PMN count should decrease by >25%). Prophylaxis: norfloxacin 400 mg daily or TMP-SMX for patients with prior SBP, GI bleeding, or ascitic fluid protein <1.5 g/dL with advanced cirrhosis. Liver transplantation for recurrent SBP.',
    clinicalPearls: [
      'PMN >250 cells/μL in ascitic fluid is diagnostic - start antibiotics immediately',
      'Albumin infusion reduces mortality - give 1.5 g/kg on day 1, 1 g/kg on day 3',
      'Inoculate blood culture bottles at bedside to increase culture yield',
      'Secondary peritonitis has polymicrobial culture and requires surgical intervention'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/approach-to-the-patient-with-liver-disease/spontaneous-bacterial-peritonitis'
  },

  // PANCREATIC DISORDERS
  {
    topic: 'Acute Pancreatitis',
    keywords: ['acute pancreatitis', 'pancreatitis acute', 'pancreatic inflammation acute', 'acute pancreatic inflammation'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, acute pancreatitis is acute inflammation of the pancreas resulting from premature activation of pancreatic enzymes within the pancreas, causing autodigestion. Common causes include gallstones (40%), alcohol (30%), hypertriglyceridemia (>1000 mg/dL), medications (azathioprine, valproic acid, sulfonamides), ERCP, trauma, and hypercalcemia. Pathogenesis involves acinar cell injury, enzyme activation, inflammatory cascade, and local and systemic complications. Severe pancreatitis causes systemic inflammatory response syndrome (SIRS), multi-organ failure, and pancreatic necrosis.',
    clinicalPresentation: 'Severe epigastric pain radiating to the back, nausea, vomiting, and abdominal distention. Pain is constant, severe, and may be relieved by sitting forward. Physical examination reveals epigastric tenderness, guarding, decreased bowel sounds, and fever. Severe pancreatitis may present with hypotension, tachycardia, respiratory distress, and altered mental status. Cullen sign (periumbilical ecchymosis) and Grey Turner sign (flank ecchymosis) suggest hemorrhagic pancreatitis but are rare. Complications include pancreatic necrosis, pseudocyst, abscess, and multi-organ failure.',
    diagnosticApproach: 'Diagnosis requires 2 of 3 criteria: characteristic abdominal pain, serum lipase or amylase >3 times upper limit of normal, and characteristic imaging findings. Lipase is more sensitive and specific than amylase. CT with IV contrast (after 48-72 hours) assesses severity, identifies necrosis, and detects complications. Ranson criteria or APACHE II score predict severity. Laboratory tests: elevated lipase/amylase, leukocytosis, elevated hematocrit (hemoconcentration), hyperglycemia, hypocalcemia, elevated BUN/creatinine (prerenal azotemia). Ultrasound identifies gallstones. Triglyceride level if no obvious cause.',
    treatment: 'Aggressive IV fluid resuscitation (250-500 mL/hr crystalloid) is cornerstone - prevents pancreatic necrosis and organ failure. NPO initially, advance diet as tolerated (early enteral nutrition within 24-48 hours reduces complications). Pain control with opioids. Treat underlying cause: ERCP for choledocholithiasis, discontinue offending medications, insulin for hypertriglyceridemia. Antibiotics only for infected necrosis (not prophylaxis). Severe pancreatitis: ICU monitoring, nutritional support (enteral preferred over parenteral), treat complications (infected necrosis requires drainage or debridement). Cholecystectomy for gallstone pancreatitis after resolution.',
    clinicalPearls: [
      'Aggressive IV fluid resuscitation in first 24 hours reduces mortality',
      'Lipase is more sensitive and specific than amylase',
      'Early enteral nutrition (within 24-48 hours) reduces complications',
      'Prophylactic antibiotics do not reduce mortality and are not recommended'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/pancreatitis/acute-pancreatitis'
  },

  {
    topic: 'Chronic Pancreatitis',
    keywords: ['chronic pancreatitis', 'pancreatitis chronic', 'chronic pancreatic inflammation', 'pancreatic insufficiency'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, chronic pancreatitis is progressive inflammatory disorder causing irreversible structural damage, fibrosis, and loss of exocrine and endocrine function. Chronic alcohol abuse is the most common cause (70-80%). Other causes include genetic mutations (PRSS1, CFTR), autoimmune pancreatitis, recurrent acute pancreatitis, and idiopathic. Repeated injury causes acinar cell loss, fibrosis, ductal strictures, and calcifications. Progressive loss of pancreatic function leads to malabsorption (exocrine insufficiency) and diabetes (endocrine insufficiency).',
    clinicalPresentation: 'Chronic or recurrent epigastric pain radiating to the back is the hallmark. Pain may be constant or episodic, often worsened by eating. Weight loss from malabsorption and anorexia. Steatorrhea (fatty, foul-smelling stools) indicates exocrine insufficiency. Diabetes develops in advanced disease. Physical examination may reveal epigastric tenderness and signs of malnutrition. Complications include pseudocyst, pancreatic duct stricture, bile duct obstruction, splenic vein thrombosis, and pancreatic cancer (increased risk).',
    diagnosticApproach: 'CT scan shows pancreatic calcifications (pathognomonic), ductal dilation, atrophy, and pseudocysts. MRCP or ERCP visualizes ductal anatomy and strictures. Endoscopic ultrasound detects early changes (hyperechoic foci, lobularity, ductal irregularity). Assess pancreatic function: fecal elastase <200 μg/g indicates exocrine insufficiency, 72-hour fecal fat >7 g/day confirms steatorrhea. Glucose tolerance test or HbA1c assesses endocrine function. Serum lipase and amylase may be normal or low in advanced disease. Exclude pancreatic cancer with imaging and CA 19-9.',
    treatment: 'Alcohol cessation is essential. Pain management: analgesics (acetaminophen, NSAIDs, opioids), pancreatic enzyme supplementation may reduce pain. Pancreatic enzyme replacement for exocrine insufficiency: high-dose lipase (25,000-75,000 units with meals) with PPI to prevent acid degradation. Fat-soluble vitamin supplementation (A, D, E, K). Insulin for diabetes. Endoscopic therapy for ductal strictures or stones: ERCP with sphincterotomy, stent placement, or lithotripsy. Surgery (lateral pancreaticojejunostomy, pancreatic resection) for refractory pain or complications. Celiac plexus block for intractable pain.',
    clinicalPearls: [
      'Pancreatic calcifications on CT are pathognomonic for chronic pancreatitis',
      'Alcohol cessation is most important intervention',
      'Pancreatic enzyme replacement requires high doses with PPI',
      'Chronic pancreatitis increases risk of pancreatic adenocarcinoma'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/pancreatitis/chronic-pancreatitis'
  },

  // MALABSORPTION
  {
    topic: 'Celiac Disease',
    keywords: ['celiac disease', 'celiac sprue', 'gluten sensitive enteropathy', 'gluten enteropathy', 'celiac'],
    system: 'Gastroenterology',
    pathophysiology: 'According to Merck Manual Professional, celiac disease is an immune-mediated enteropathy triggered by gluten (wheat, barley, rye) in genetically susceptible individuals (HLA-DQ2 or HLA-DQ8). Gluten peptides activate T cells, causing villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis in the small intestine. This leads to malabsorption of nutrients. Associated with other autoimmune diseases (type 1 diabetes, autoimmune thyroiditis, Sjögren syndrome). Complications include refractory celiac disease, enteropathy-associated T-cell lymphoma, and small bowel adenocarcinoma.',
    clinicalPresentation: 'Classic presentation: chronic diarrhea, steatorrhea, weight loss, abdominal distention, and failure to thrive (children). Many patients have atypical or silent disease with minimal GI symptoms. Extraintestinal manifestations include iron deficiency anemia, osteoporosis, dermatitis herpetiformis (pruritic vesicular rash), elevated transaminases, and neurologic symptoms (ataxia, peripheral neuropathy). Physical examination may reveal abdominal distention, muscle wasting, and dermatitis herpetiformis.',
    diagnosticApproach: 'Serologic testing while on gluten-containing diet: tissue transglutaminase IgA (tTG-IgA) is most sensitive and specific, endomysial antibody IgA (EMA-IgA) is highly specific. Check total IgA to exclude IgA deficiency (use IgG-based tests if deficient). Small bowel biopsy via upper endoscopy is gold standard: shows villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes (Marsh classification). HLA-DQ2/DQ8 testing has high negative predictive value (excludes celiac if negative). Assess for nutritional deficiencies: CBC (anemia), iron studies, vitamin D, calcium, folate, vitamin B12.',
    treatment: 'Strict lifelong gluten-free diet is the only treatment. Avoid wheat, barley, rye, and contaminated oats. Dietitian consultation essential. Nutritional supplementation: iron, folate, calcium, vitamin D, vitamin B12 as needed. Monitor response: symptoms improve in weeks, serology normalizes in 6-12 months, histology improves in 6-24 months. Repeat serology annually to assess adherence. Bone density screening for osteoporosis. Refractory celiac disease (persistent symptoms despite gluten-free diet) may require corticosteroids or immunosuppression. Screen first-degree relatives.',
    clinicalPearls: [
      'Serologic testing must be done while patient is on gluten-containing diet',
      'Dermatitis herpetiformis is pathognomonic for celiac disease',
      'Gluten-free diet must be lifelong - even small amounts of gluten cause damage',
      'Screen for celiac in patients with iron deficiency anemia, osteoporosis, or elevated transaminases'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/malabsorption-syndromes/celiac-disease'
  },
];
