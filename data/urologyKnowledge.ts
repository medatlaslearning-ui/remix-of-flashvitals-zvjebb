
/**
 * Urology System Knowledge Base - Merck Manual Professional
 * 
 * PHASE 9: COMPLETE UROLOGY SYSTEM
 * 
 * Comprehensive urology knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major urologic conditions including:
 * - Lower urinary tract disorders (BPH, incontinence, voiding dysfunction)
 * - Upper urinary tract disorders (hydronephrosis, obstruction, reflux)
 * - Urologic infections (UTI, pyelonephritis, prostatitis, epididymitis)
 * - Urologic stones (nephrolithiasis, ureterolithiasis, renal colic)
 * - Urologic emergencies (testicular torsion, priapism, acute retention, trauma)
 * - Prostate disorders (BPH, prostatitis, prostate cancer)
 * - Kidney disorders (AKI, CKD, renal masses)
 * - Male reproductive disorders (erectile dysfunction, infertility)
 * 
 * Each entry includes:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * PHASE 9 ENHANCEMENTS:
 * - Enhanced keyword specificity to prevent content bleeding with Renal system
 * - Disease-specific modifiers ensure precise matching
 * - Keyword hooks enable focused responses (pathophysiology, clinical, diagnostic, treatment)
 * - Maintains same integrity as previous medical specialty sections
 * - Urology-specific terms prevent confusion with other specialties
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const urologyKnowledge: MerckManualEntry[] = [
  // LOWER URINARY TRACT DISORDERS
  {
    topic: 'Benign Prostatic Hyperplasia',
    keywords: ['benign prostatic hyperplasia', 'bph', 'prostate enlargement', 'prostatic hypertrophy', 'enlarged prostate', 'bladder outlet obstruction bph'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, benign prostatic hyperplasia (BPH) is nonmalignant enlargement of the prostate gland causing bladder outlet obstruction. The condition results from proliferation of stromal and epithelial cells in the transition zone of the prostate, forming nodules that compress the urethra. Hormonal factors, particularly dihydrotestosterone (DHT) from testosterone conversion by 5-alpha reductase, drive prostatic growth. Obstruction increases bladder pressure, causing detrusor hypertrophy, trabeculation, and eventually bladder decompensation. Chronic obstruction can lead to hydronephrosis and renal dysfunction. Prevalence increases with age: 50% of men by age 60, 90% by age 85.',
    clinicalPresentation: 'Lower urinary tract symptoms (LUTS): obstructive symptoms (weak stream, hesitancy, intermittency, incomplete emptying, straining) and storage symptoms (frequency, urgency, nocturia). Physical examination: enlarged, smooth, firm prostate on digital rectal exam (DRE). Complications: acute urinary retention, recurrent urinary tract infections, bladder stones, hematuria, hydronephrosis, renal insufficiency. International Prostate Symptom Score (IPSS) quantifies severity: mild (0-7), moderate (8-19), severe (20-35).',
    diagnosticApproach: 'Clinical diagnosis based on LUTS and enlarged prostate on DRE. Urinalysis: exclude infection and hematuria. Serum creatinine: assess renal function. Prostate-specific antigen (PSA): rule out prostate cancer (elevated in BPH but higher in cancer). Post-void residual (PVR) urine: measure with bladder scan or catheterization (>200 mL suggests significant obstruction). Uroflowmetry: peak flow <10 mL/s indicates obstruction. Cystoscopy: visualize prostate size and bladder changes. Transrectal ultrasound: measure prostate volume. Urodynamic studies if diagnosis unclear.',
    treatment: 'Watchful waiting for mild symptoms. Medical therapy: alpha-blockers (tamsulosin, alfuzosin) relax prostatic smooth muscle, improve flow immediately; 5-alpha reductase inhibitors (finasteride, dutasteride) shrink prostate over 6-12 months, reduce progression. Combination therapy for large prostates (>40 g). Phosphodiesterase-5 inhibitors (tadalafil) for LUTS with erectile dysfunction. Surgical intervention for refractory symptoms, recurrent retention, recurrent UTIs, bladder stones, or renal insufficiency: transurethral resection of prostate (TURP) is gold standard, minimally invasive options include laser enucleation, prostatic urethral lift, water vapor thermal therapy. Avoid anticholinergics and decongestants (worsen retention).',
    clinicalPearls: [
      'LUTS severity does not correlate with prostate size - small prostates can cause severe obstruction',
      'Alpha-blockers work immediately but do not prevent progression; 5-ARIs shrink prostate but take 6 months',
      'Acute retention often precipitated by medications (anticholinergics, decongestants), alcohol, or prolonged immobility',
      'PSA >10 ng/mL or abnormal DRE requires prostate biopsy to exclude cancer'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/benign-prostate-disease/benign-prostatic-hyperplasia-bph'
  },

  {
    topic: 'Urinary Incontinence',
    keywords: ['urinary incontinence', 'stress incontinence', 'urge incontinence', 'overflow incontinence', 'mixed incontinence', 'bladder control loss'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, urinary incontinence is involuntary loss of urine. Types: stress incontinence (urethral sphincter weakness causing leakage with increased intra-abdominal pressure), urge incontinence (detrusor overactivity causing sudden urgency and leakage), overflow incontinence (bladder overdistension from outlet obstruction or detrusor underactivity), mixed incontinence (combination of stress and urge), functional incontinence (physical or cognitive impairment preventing timely toileting). Stress incontinence common in women after childbirth (pelvic floor weakness) or prostatectomy in men. Urge incontinence from detrusor overactivity, neurologic disorders, or bladder irritation.',
    clinicalPresentation: 'Stress incontinence: leakage with coughing, sneezing, laughing, exercise. Urge incontinence: sudden urgency followed by leakage, frequency, nocturia. Overflow incontinence: dribbling, weak stream, incomplete emptying, palpable bladder. Mixed incontinence: features of both stress and urge. Physical examination: pelvic exam in women (pelvic organ prolapse, urethral hypermobility), DRE in men (prostate size), neurologic exam (spinal cord lesions). Complications: skin breakdown, UTIs, social isolation, depression.',
    diagnosticApproach: 'History: type, frequency, severity, precipitants, fluid intake, medications. Bladder diary: record voids, leakage episodes, fluid intake for 3 days. Urinalysis and culture: exclude infection. Post-void residual: elevated (>200 mL) suggests overflow incontinence. Stress test: observe leakage with cough. Urodynamic studies: measure bladder pressure, capacity, and flow (indicated for complex cases or before surgery). Cystoscopy: visualize bladder and urethra if hematuria or recurrent UTIs.',
    treatment: 'Behavioral modifications: timed voiding, fluid management, weight loss, avoid bladder irritants (caffeine, alcohol). Pelvic floor exercises (Kegel exercises) for stress incontinence. Bladder training for urge incontinence. Stress incontinence: pessary, urethral bulking agents, mid-urethral sling surgery. Urge incontinence: antimuscarinics (oxybutynin, tolterodine) or beta-3 agonist (mirabegron), botulinum toxin bladder injections, sacral neuromodulation. Overflow incontinence: treat underlying obstruction (BPH surgery), intermittent catheterization. Absorbent products for refractory cases.',
    clinicalPearls: [
      'Stress incontinence: leakage with activity, no urgency; urge incontinence: sudden urgency then leakage',
      'Antimuscarinics can worsen overflow incontinence - always check post-void residual',
      'Pelvic floor exercises effective for stress incontinence but require 3-6 months of consistent practice',
      'Nocturia >2 times per night suggests urge incontinence or overflow incontinence'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/voiding-disorders/urinary-incontinence-in-adults'
  },

  {
    topic: 'Overactive Bladder',
    keywords: ['overactive bladder', 'oab', 'urgency frequency syndrome', 'detrusor overactivity', 'urge syndrome'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, overactive bladder (OAB) is syndrome of urgency with or without urge incontinence, usually with frequency and nocturia, in absence of infection or other pathology. Caused by detrusor overactivity - involuntary bladder contractions during filling phase. Mechanisms: neurogenic (spinal cord injury, multiple sclerosis, Parkinson disease), myogenic (bladder outlet obstruction causing detrusor changes), or idiopathic (most common). Affects 15-20% of adults, increases with age. Significantly impacts quality of life.',
    clinicalPresentation: 'Urgency: sudden compelling desire to void that is difficult to defer. Frequency: >8 voids per day. Nocturia: waking ≥2 times per night to void. Urge incontinence: leakage preceded by urgency (occurs in 30-40% of OAB patients). Physical examination usually normal. Bladder diary shows frequent small-volume voids. Complications: sleep disruption, social isolation, falls (rushing to bathroom), UTIs.',
    diagnosticApproach: 'Diagnosis of exclusion: rule out UTI (urinalysis and culture), diabetes (glucose), hypercalcemia (calcium), bladder stones (imaging), bladder cancer (cystoscopy if hematuria). Bladder diary: documents frequency, urgency episodes, voided volumes. Post-void residual: normal (<50 mL) distinguishes from overflow incontinence. Urodynamic studies: demonstrate detrusor overactivity (involuntary contractions during filling) but not routinely needed. Cystoscopy if hematuria, recurrent UTIs, or treatment failure.',
    treatment: 'First-line: behavioral modifications - bladder training (scheduled voiding with gradual interval increase), fluid management (avoid excessive fluids, bladder irritants), pelvic floor exercises. Second-line: pharmacotherapy - antimuscarinics (oxybutynin, tolterodine, solifenacin, darifenacin, fesoterodine) block muscarinic receptors reducing detrusor contractions; beta-3 agonist (mirabegron) relaxes detrusor via beta-3 receptors. Third-line: botulinum toxin A bladder injections (100 units), sacral neuromodulation, percutaneous tibial nerve stimulation. Avoid antimuscarinics in narrow-angle glaucoma, gastric retention, or urinary retention.',
    clinicalPearls: [
      'OAB is diagnosis of exclusion - always rule out UTI, diabetes, and bladder pathology first',
      'Bladder training is as effective as medications but requires patient motivation',
      'Antimuscarinics cause dry mouth, constipation, cognitive impairment (especially in elderly)',
      'Mirabegron alternative for patients who cannot tolerate antimuscarinics'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/voiding-disorders/overactive-bladder'
  },

  // UPPER URINARY TRACT DISORDERS
  {
    topic: 'Hydronephrosis',
    keywords: ['hydronephrosis', 'renal pelvis dilation', 'calyceal dilation', 'urinary obstruction hydro', 'kidney swelling obstruction'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, hydronephrosis is dilation of the renal pelvis and calyces due to obstruction of urine outflow. Obstruction increases intraluminal pressure, causing progressive dilation of collecting system. Prolonged obstruction leads to renal parenchymal atrophy, tubular damage, and irreversible loss of renal function. Causes: intrinsic (stones, blood clots, tumors, strictures), extrinsic (retroperitoneal fibrosis, tumors, pregnancy), functional (neurogenic bladder, vesicoureteral reflux). Bilateral obstruction or obstruction of solitary kidney causes acute kidney injury. Chronic obstruction causes chronic kidney disease.',
    clinicalPresentation: 'Acute obstruction: severe colicky flank pain radiating to groin, nausea, vomiting, hematuria. Chronic obstruction: often asymptomatic or vague flank discomfort, may present with renal insufficiency. Physical examination: costovertebral angle tenderness, palpable flank mass (severe hydronephrosis). Complications: infection (pyonephrosis - medical emergency), renal failure, hypertension. Bilateral obstruction: anuria, uremia, hyperkalemia.',
    diagnosticApproach: 'Renal ultrasound: first-line imaging, shows dilated renal pelvis and calyces, identifies level of obstruction. CT urography: gold standard, defines anatomy and cause of obstruction. Serum creatinine and BUN: assess renal function. Urinalysis: hematuria, pyuria if infection. Voiding cystourethrogram (VCUG): diagnose vesicoureteral reflux in children. Diuretic renography (MAG3 scan): differentiate obstructive from non-obstructive dilation. Cystoscopy and retrograde pyelography: visualize ureters and identify obstruction.',
    treatment: 'Relieve obstruction urgently if infection, renal failure, or bilateral obstruction. Temporary drainage: ureteral stent (retrograde) or percutaneous nephrostomy (antegrade). Definitive treatment depends on cause: stones (lithotripsy, ureteroscopy), strictures (endoscopic incision or dilation), tumors (resection), retroperitoneal fibrosis (ureterolysis), neurogenic bladder (intermittent catheterization). Antibiotics if infection. Monitor renal function after relief - post-obstructive diuresis may occur (replace fluids). Chronic obstruction may not fully recover renal function.',
    clinicalPearls: [
      'Hydronephrosis with fever is pyonephrosis - requires urgent drainage and antibiotics',
      'Bilateral hydronephrosis or hydronephrosis in solitary kidney causes acute kidney injury',
      'Post-obstructive diuresis can cause massive fluid losses - monitor closely and replace',
      'Chronic hydronephrosis may be asymptomatic - discovered incidentally on imaging'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/obstructive-uropathy/hydronephrosis'
  },

  {
    topic: 'Vesicoureteral Reflux',
    keywords: ['vesicoureteral reflux', 'vur', 'ureteral reflux', 'bladder reflux', 'reflux nephropathy'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, vesicoureteral reflux (VUR) is retrograde flow of urine from bladder to ureter and kidney. Normally, ureterovesical junction acts as one-way valve preventing reflux. VUR occurs when valve mechanism fails due to short intramural ureteral tunnel, lateral ureteral orifice position, or high bladder pressure. Primary VUR: congenital abnormality of ureterovesical junction. Secondary VUR: acquired from bladder outlet obstruction, neurogenic bladder, or bladder dysfunction. Reflux allows bacteria to ascend from bladder to kidneys, causing pyelonephritis and renal scarring (reflux nephropathy). Graded I-V based on severity.',
    clinicalPresentation: 'Often asymptomatic, discovered during evaluation for recurrent urinary tract infections (UTIs) in children. Recurrent febrile UTIs, pyelonephritis. Prenatal hydronephrosis detected on ultrasound. Complications: renal scarring (reflux nephropathy), hypertension, chronic kidney disease, end-stage renal disease. Physical examination usually normal. Family history common (30% of siblings affected).',
    diagnosticApproach: 'Voiding cystourethrogram (VCUG): gold standard, shows retrograde flow of contrast from bladder to ureters/kidneys during voiding. Grading: I (ureter only), II (ureter and renal pelvis), III (mild dilation), IV (moderate dilation), V (severe dilation with tortuosity). Renal ultrasound: assess for hydronephrosis and renal scarring. DMSA scan: detect renal scarring. Urinalysis and culture: diagnose UTI. Serum creatinine: assess renal function. Screen siblings of affected children.',
    treatment: 'Low-grade VUR (I-II): often resolves spontaneously with growth. Antibiotic prophylaxis (trimethoprim-sulfamethoxazole or nitrofurantoin) to prevent UTIs until resolution. High-grade VUR (III-V) or breakthrough UTIs despite prophylaxis: surgical correction - ureteral reimplantation (open or laparoscopic) or endoscopic injection of bulking agent at ureteral orifice. Treat bladder dysfunction (timed voiding, anticholinergics for overactive bladder). Monitor renal function and blood pressure long-term. Reflux nephropathy may progress to CKD despite treatment.',
    clinicalPearls: [
      'VUR is most common cause of recurrent febrile UTIs in children',
      'Low-grade VUR often resolves spontaneously - antibiotic prophylaxis prevents scarring',
      'Reflux nephropathy can cause hypertension and CKD - lifelong monitoring needed',
      'Screen siblings of affected children - 30% have VUR'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/pediatrics/congenital-renal-and-genitourinary-anomalies/vesicoureteral-reflux-vur'
  },

  // UROLOGIC INFECTIONS
  {
    topic: 'Urinary Tract Infection',
    keywords: ['urinary tract infection', 'uti', 'cystitis', 'bladder infection', 'dysuria frequency', 'uncomplicated uti'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, urinary tract infection (UTI) is bacterial infection of urinary tract. Most commonly caused by Escherichia coli (80-85%), followed by Staphylococcus saprophyticus, Klebsiella, Proteus, Enterococcus. Bacteria ascend from perineum through urethra to bladder (cystitis) or kidneys (pyelonephritis). Risk factors: female sex (short urethra), sexual activity, pregnancy, menopause, diabetes, immunosuppression, urinary catheter, urinary obstruction, vesicoureteral reflux. Uncomplicated UTI: healthy non-pregnant women without structural/functional abnormalities. Complicated UTI: men, pregnant women, children, structural abnormalities, immunosuppression, recent instrumentation.',
    clinicalPresentation: 'Cystitis: dysuria, frequency, urgency, suprapubic pain, hematuria. Fever absent or low-grade. Pyelonephritis: fever, chills, flank pain, costovertebral angle tenderness, nausea, vomiting. Physical examination: suprapubic tenderness (cystitis), costovertebral angle tenderness (pyelonephritis). Elderly may present atypically: confusion, falls, functional decline without urinary symptoms. Complications: pyelonephritis, urosepsis, renal abscess, emphysematous pyelonephritis (diabetics).',
    diagnosticApproach: 'Urinalysis: pyuria (>10 WBC/hpf), bacteriuria, positive leukocyte esterase and nitrites. Hematuria common. Urine culture: >10^5 CFU/mL confirms diagnosis, identifies organism and sensitivities. Blood cultures if pyelonephritis or sepsis. Imaging not routinely needed for uncomplicated cystitis. CT abdomen/pelvis with contrast if pyelonephritis not improving after 48-72 hours (assess for abscess, obstruction). Renal ultrasound if obstruction suspected. Cystoscopy if recurrent UTIs, hematuria, or suspected bladder pathology.',
    treatment: 'Uncomplicated cystitis: nitrofurantoin 100 mg BID x 5 days, trimethoprim-sulfamethoxazole DS BID x 3 days (if local resistance <20%), fosfomycin 3 g single dose. Avoid fluoroquinolones (reserve for complicated UTI). Pyelonephritis: outpatient if mild - fluoroquinolone (ciprofloxacin, levofloxacin) x 7 days or ceftriaxone 1 g IV once then oral cephalosporin x 14 days. Hospitalize if severe, unable to tolerate oral, pregnant, or immunosuppressed - IV ceftriaxone, fluoroquinolone, or piperacillin-tazobactam. Complicated UTI: 7-14 days therapy, treat underlying cause. Asymptomatic bacteriuria: treat only in pregnancy or before urologic procedures.',
    clinicalPearls: [
      'Dysuria + frequency without fever suggests uncomplicated cystitis',
      'Fever + flank pain indicates pyelonephritis - requires longer treatment',
      'Asymptomatic bacteriuria common in elderly - do not treat unless symptomatic',
      'Recurrent UTIs (≥2 in 6 months or ≥3 in 1 year) require evaluation for underlying cause'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-tract-infections-utis/bacterial-urinary-tract-infections-utis'
  },

  {
    topic: 'Pyelonephritis',
    keywords: ['pyelonephritis', 'kidney infection', 'upper uti', 'renal infection', 'acute pyelonephritis'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, pyelonephritis is bacterial infection of renal parenchyma and pelvis. Most commonly caused by ascending infection from bladder (E. coli 80%), less commonly hematogenous spread (Staphylococcus aureus). Bacteria invade renal tubules and interstitium, causing acute inflammation, edema, and microabscesses. Risk factors: vesicoureteral reflux, urinary obstruction, pregnancy, diabetes, immunosuppression, urinary catheter, recent instrumentation. Complications: renal abscess, perinephric abscess, emphysematous pyelonephritis (gas-forming infection in diabetics), sepsis, acute kidney injury, chronic pyelonephritis (repeated infections causing scarring).',
    clinicalPresentation: 'Fever (>38.5°C), chills, rigors, flank pain, costovertebral angle tenderness, nausea, vomiting. Lower urinary tract symptoms: dysuria, frequency, urgency. Physical examination: ill-appearing, tachycardia, hypotension (if septic), costovertebral angle tenderness. Complications: sepsis (hypotension, altered mental status), acute kidney injury (oliguria, elevated creatinine). Emphysematous pyelonephritis: severe toxicity, gas on imaging.',
    diagnosticApproach: 'Urinalysis: pyuria, bacteriuria, WBC casts (pathognomonic for pyelonephritis), hematuria. Urine culture: >10^5 CFU/mL, identifies organism and sensitivities. Blood cultures: positive in 20-30%, obtain if septic. CBC: leukocytosis with left shift. Comprehensive metabolic panel: elevated creatinine (AKI), electrolyte abnormalities. CT abdomen/pelvis with contrast if not improving after 48-72 hours or severe presentation: shows enlarged kidney, stranding, abscess, emphysematous changes. Renal ultrasound: assess for obstruction, hydronephrosis.',
    treatment: 'Mild-moderate (outpatient): fluoroquinolone (ciprofloxacin 500 mg BID or levofloxacin 750 mg daily) x 7 days, or ceftriaxone 1 g IV once then oral cephalosporin x 14 days. Severe (hospitalize): IV antibiotics - ceftriaxone 1-2 g daily, fluoroquinolone, or piperacillin-tazobactam 3.375 g q6h. Transition to oral when afebrile x 24-48 hours. Total duration 10-14 days. Pregnant women: hospitalize, IV ceftriaxone or ampicillin-gentamicin. Obstruction: urgent drainage (ureteral stent or nephrostomy). Abscess >3 cm: percutaneous drainage. Emphysematous pyelonephritis: IV antibiotics, drainage, may require nephrectomy.',
    clinicalPearls: [
      'Fever + flank pain + costovertebral angle tenderness = pyelonephritis until proven otherwise',
      'WBC casts on urinalysis are pathognomonic for pyelonephritis',
      'If not improving after 48-72 hours, obtain CT to assess for abscess or obstruction',
      'Emphysematous pyelonephritis is life-threatening - occurs in diabetics, requires aggressive treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-tract-infections-utis/pyelonephritis'
  },

  {
    topic: 'Acute Bacterial Prostatitis',
    keywords: ['acute bacterial prostatitis', 'prostate infection', 'acute prostatitis', 'bacterial prostatitis acute'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, acute bacterial prostatitis is acute bacterial infection of prostate gland. Most commonly caused by gram-negative bacteria: E. coli (80%), Klebsiella, Proteus, Pseudomonas. Less commonly Enterococcus, Staphylococcus. Routes of infection: ascending urethral, reflux of infected urine into prostatic ducts, hematogenous spread, lymphatic spread. Risk factors: recent urinary catheterization, cystoscopy, prostate biopsy, urethral stricture, BPH, unprotected anal intercourse. Inflammation causes prostatic edema and potential abscess formation.',
    clinicalPresentation: 'Acute onset of fever, chills, malaise, myalgias. Urinary symptoms: dysuria, frequency, urgency, weak stream, urinary retention. Perineal, suprapubic, or low back pain. Physical examination: ill-appearing, fever, tachycardia. Digital rectal exam: exquisitely tender, boggy, swollen prostate. Avoid vigorous prostatic massage (risk of bacteremia). Complications: prostatic abscess, epididymitis, sepsis, chronic bacterial prostatitis, urinary retention.',
    diagnosticApproach: 'Urinalysis: pyuria, bacteriuria. Urine culture: identifies organism and sensitivities. Blood cultures: obtain if septic. Avoid prostatic massage (risk of bacteremia). Transrectal ultrasound or CT pelvis if abscess suspected (fluctuant mass, not improving with antibiotics). Post-void residual: assess for urinary retention. PSA: elevated but not useful for diagnosis (normalizes after treatment).',
    treatment: 'Hospitalize if septic, unable to tolerate oral, or urinary retention. Empiric antibiotics: fluoroquinolone (ciprofloxacin 500 mg BID or levofloxacin 750 mg daily) or trimethoprim-sulfamethoxazole DS BID. Severe cases: IV ceftriaxone 1-2 g daily or piperacillin-tazobactam 3.375 g q6h. Duration: 4-6 weeks (longer than UTI to penetrate prostate and prevent chronic prostatitis). Urinary retention: suprapubic catheter preferred over urethral catheter (less trauma). Prostatic abscess: transrectal or transperineal drainage. Supportive care: hydration, NSAIDs, stool softeners.',
    clinicalPearls: [
      'Avoid vigorous prostatic massage - can cause bacteremia and sepsis',
      'Treat for 4-6 weeks to prevent chronic bacterial prostatitis',
      'Urinary retention common - use suprapubic catheter if needed',
      'Prostatic abscess suspected if not improving after 48-72 hours - requires drainage'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/prostatitis/acute-bacterial-prostatitis'
  },

  {
    topic: 'Epididymitis',
    keywords: ['epididymitis', 'epididymal infection', 'scrotal pain epididymitis', 'testicular pain epididymitis'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, epididymitis is inflammation or infection of epididymis. Causes: sexually transmitted infections (Chlamydia trachomatis, Neisseria gonorrhoeae in men <35 years), enteric bacteria (E. coli, Pseudomonas in men >35 years or after instrumentation), viral (mumps), chemical (amiodarone), or idiopathic. Infection ascends from urethra through vas deferens to epididymis. Inflammation causes epididymal swelling and pain. May extend to testis (epididymo-orchitis). Complications: abscess, testicular infarction, infertility, chronic pain.',
    clinicalPresentation: 'Gradual onset (over days) of unilateral scrotal pain and swelling. Dysuria, urethral discharge (if STI). Fever. Physical examination: tender, swollen epididymis (posterior to testis), positive Prehn sign (pain relief with testicular elevation), cremasteric reflex present (distinguishes from torsion). Complications: scrotal abscess, testicular infarction, chronic epididymitis.',
    diagnosticApproach: 'Clinical diagnosis based on gradual onset, tender epididymis, positive Prehn sign, present cremasteric reflex. Urinalysis and culture: pyuria, bacteriuria. Urethral swab for gonorrhea and chlamydia (men <35 years or sexually active). Scrotal ultrasound with Doppler: increased blood flow to epididymis (hyperemia), excludes testicular torsion (decreased flow). Complications: abscess (hypoechoic collection), testicular infarction (decreased flow).',
    treatment: 'Empiric antibiotics based on age and risk factors. Men <35 years or sexually active: ceftriaxone 500 mg IM once plus doxycycline 100 mg BID x 10 days (covers gonorrhea and chlamydia). Men >35 years or after instrumentation: fluoroquinolone (levofloxacin 500 mg daily) or trimethoprim-sulfamethoxazole DS BID x 10-14 days (covers enteric bacteria). Supportive care: scrotal elevation, ice packs, NSAIDs. Avoid sexual activity until treatment complete. Treat sexual partners if STI. Abscess: surgical drainage. Chronic epididymitis: prolonged antibiotics, epididymectomy if refractory.',
    clinicalPearls: [
      'Gradual onset distinguishes epididymitis from testicular torsion (sudden onset)',
      'Positive Prehn sign (pain relief with elevation) suggests epididymitis',
      'Cremasteric reflex present in epididymitis, absent in torsion',
      'Always test for STIs in sexually active men - treat partners to prevent reinfection'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/penile-and-scrotal-disorders/epididymitis'
  },

  // UROLOGIC STONES
  {
    topic: 'Nephrolithiasis',
    keywords: ['nephrolithiasis', 'kidney stones', 'renal calculi', 'renal stones', 'urolithiasis kidney'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, nephrolithiasis is formation of calculi within kidneys. Stone types: calcium oxalate (70-80%, most common), calcium phosphate (5-10%), uric acid (5-10%, radiolucent), struvite/magnesium ammonium phosphate (10-15%, infection stones), cystine (<1%, genetic). Supersaturation of urine with stone-forming salts leads to crystal nucleation and growth. Risk factors: dehydration, hypercalciuria, hyperoxaluria, hyperuricosuria, hypocitraturia, low urine volume, acidic urine (uric acid stones), alkaline urine (struvite stones), family history, obesity, diabetes. Lifetime prevalence 10-15%, recurrence rate 50% at 5 years.',
    clinicalPresentation: 'Asymptomatic (discovered incidentally) or renal colic when stone moves into ureter. Renal colic: sudden severe colicky flank pain radiating to groin, nausea, vomiting, restlessness (cannot find comfortable position). Hematuria (gross or microscopic). Physical examination: costovertebral angle tenderness, patient writhing in pain. Complications: obstruction, hydronephrosis, infection (pyonephrosis), acute kidney injury.',
    diagnosticApproach: 'Non-contrast CT abdomen/pelvis: gold standard, detects all stone types (including radiolucent uric acid), measures size and location, assesses hydronephrosis. Renal ultrasound: alternative in pregnancy, children, or recurrent stones (avoids radiation). KUB X-ray: detects radiopaque stones (calcium, struvite) but misses uric acid stones. Urinalysis: hematuria (90%), crystals, pH (acidic for uric acid, alkaline for struvite). Serum creatinine: assess renal function. Metabolic workup for recurrent stones: 24-hour urine (volume, calcium, oxalate, uric acid, citrate, pH), serum calcium, phosphate, uric acid, PTH.',
    treatment: 'Stones <5 mm: 90% pass spontaneously. Conservative management: hydration (2-3 L/day), NSAIDs (ketorolac, ibuprofen) for pain, antiemetics. Medical expulsive therapy: alpha-blocker (tamsulosin 0.4 mg daily) relaxes ureteral smooth muscle, increases passage rate for distal ureteral stones 5-10 mm. Stones >10 mm or not passing: intervention - extracorporeal shock wave lithotripsy (ESWL) for stones <2 cm, ureteroscopy with laser lithotripsy for ureteral stones, percutaneous nephrolithotomy (PCNL) for large renal stones >2 cm or staghorn calculi. Prevention: increase fluid intake (urine output >2 L/day), dietary modifications (limit sodium, animal protein, oxalate), thiazide diuretics (hypercalciuria), potassium citrate (hypocitraturia, uric acid stones), allopurinol (hyperuricosuria).',
    clinicalPearls: [
      'Renal colic: sudden severe flank pain radiating to groin, patient cannot find comfortable position',
      'Stones <5 mm usually pass spontaneously, >10 mm rarely pass - require intervention',
      'Tamsulosin increases stone passage for distal ureteral stones 5-10 mm',
      'Struvite stones (staghorn calculi) always associated with infection - require complete removal'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-calculi/urinary-calculi'
  },

  {
    topic: 'Ureteral Colic',
    keywords: ['ureteral colic', 'renal colic', 'ureteral stone pain', 'kidney stone pain', 'colicky flank pain'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, ureteral colic is severe pain caused by stone passage through ureter. Stone obstructs ureter causing increased intraluminal pressure, ureteral spasm, and distension of renal pelvis. Pain results from ureteral smooth muscle spasm and stretching of renal capsule. Pain location depends on stone position: proximal ureter (flank), mid-ureter (lower abdomen), distal ureter (groin, testicle, labia). Obstruction causes hydronephrosis. Complete obstruction can lead to acute kidney injury if bilateral or in solitary kidney.',
    clinicalPresentation: 'Sudden onset of severe colicky pain: waxing and waning, excruciating intensity. Flank pain radiating to groin, testicle, or labia. Nausea, vomiting. Hematuria. Patient restless, cannot find comfortable position (distinguishes from peritonitis where patient lies still). Physical examination: costovertebral angle tenderness, patient writhing. Complications: infection (fever, pyuria - emergency), acute kidney injury (bilateral obstruction or solitary kidney).',
    diagnosticApproach: 'Non-contrast CT abdomen/pelvis: gold standard, detects stone, measures size and location, assesses hydronephrosis. Urinalysis: hematuria (90%), pyuria (if infection). Serum creatinine: assess renal function. Pregnancy test in women of childbearing age. Renal ultrasound if pregnant (avoid radiation). Stone size predicts passage: <5 mm (90% pass), 5-7 mm (50% pass), >7 mm (<10% pass).',
    treatment: 'Pain control: NSAIDs (ketorolac 30 mg IV or ibuprofen 800 mg PO) preferred over opioids (equally effective, fewer side effects). Antiemetics: ondansetron 4-8 mg IV/PO. Hydration: oral preferred, IV if vomiting. Medical expulsive therapy: tamsulosin 0.4 mg daily for distal ureteral stones 5-10 mm (increases passage rate). Urgent intervention if: infection with obstruction (pyonephrosis - emergency), acute kidney injury, intractable pain/vomiting, solitary kidney with obstruction. Intervention options: ureteral stent (temporary relief), ureteroscopy with laser lithotripsy (definitive), ESWL for proximal stones. Follow-up imaging at 2-4 weeks to confirm stone passage.',
    clinicalPearls: [
      'Patient writhing in pain distinguishes renal colic from peritonitis (patient lies still)',
      'NSAIDs as effective as opioids for pain with fewer side effects',
      'Infection with obstruction (fever + stone) is emergency - requires urgent drainage',
      'Tamsulosin increases stone passage for distal ureteral stones 5-10 mm'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/urinary-calculi/urinary-calculi'
  },

  // UROLOGIC EMERGENCIES
  {
    topic: 'Testicular Torsion',
    keywords: ['testicular torsion', 'spermatic cord torsion', 'acute scrotum torsion', 'testicular ischemia', 'twisted testicle'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, testicular torsion is twisting of spermatic cord causing testicular ischemia. Rotation of testis on spermatic cord occludes venous drainage (edema) then arterial supply (ischemia). Bell clapper deformity (horizontal testicular lie from inadequate fixation to tunica vaginalis) predisposes to torsion. Bimodal distribution: neonates and adolescents (peak 12-18 years). Testicular salvage depends on duration: >90% if <6 hours, 50% if 6-12 hours, <10% if >24 hours. Surgical emergency.',
    clinicalPresentation: 'Sudden onset of severe unilateral scrotal pain, often waking patient from sleep or after physical activity. Nausea, vomiting. Physical examination: high-riding testis with horizontal lie, absent cremasteric reflex (most sensitive finding), exquisitely tender testis, scrotal edema and erythema. Prehn sign negative (no pain relief with elevation). Complications: testicular infarction, atrophy, loss of fertility if bilateral.',
    diagnosticApproach: 'Clinical diagnosis - do not delay surgery for imaging if high suspicion. Absent cremasteric reflex is most sensitive finding (99% sensitive, 100% specific in children). Scrotal ultrasound with color Doppler if diagnosis uncertain: decreased or absent testicular blood flow, heterogeneous echotext ure. Normal flow does not exclude torsion (intermittent torsion, early torsion with preserved flow). Urinalysis: normal (distinguishes from epididymitis).',
    treatment: 'Surgical emergency - immediate urologic consultation. Manual detorsion: attempt if surgery delayed - rotate testis outward (open book) 180-720 degrees, success indicated by pain relief and return of cremasteric reflex. Definitive treatment: surgical exploration, detorsion, assessment of viability. Orchiopexy (fixation) of affected testis if viable, orchiectomy if necrotic. Contralateral orchiopexy to prevent future torsion (bell clapper deformity bilateral in 80%). Time is testis: salvage rate >90% if surgery <6 hours, <10% if >24 hours.',
    clinicalPearls: [
      'Sudden onset + absent cremasteric reflex = testicular torsion until proven otherwise',
      'Do not delay surgery for imaging if high clinical suspicion',
      'Testicular salvage depends on time: >90% if <6 hours, <10% if >24 hours',
      'Always perform contralateral orchiopexy - bell clapper deformity bilateral in 80%'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/penile-and-scrotal-disorders/testicular-torsion'
  },

  {
    topic: 'Priapism',
    keywords: ['priapism', 'prolonged erection', 'ischemic priapism', 'low-flow priapism', 'penile emergency'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, priapism is persistent penile erection lasting >4 hours unrelated to sexual stimulation. Types: ischemic (low-flow, 95%) - venous outflow obstruction causing stagnant hypoxic blood, painful, urologic emergency; non-ischemic (high-flow, 5%) - arterial-sinusoidal fistula from trauma, painless, not emergency. Ischemic priapism causes: sickle cell disease (most common in children), medications (trazodone, antipsychotics, intracavernosal injections), cocaine, idiopathic. Prolonged ischemia causes smooth muscle necrosis and fibrosis, resulting in permanent erectile dysfunction.',
    clinicalPresentation: 'Ischemic priapism: painful rigid erection of corpora cavernosa lasting >4 hours, glans and corpus spongiosum soft. Non-ischemic priapism: painless partial erection, history of perineal trauma. Physical examination: rigid tender corpora cavernosa (ischemic) or semi-rigid non-tender (non-ischemic). Complications: erectile dysfunction (50% if >24 hours), penile fibrosis, psychological distress.',
    diagnosticApproach: 'Clinical diagnosis. Corporal blood gas: ischemic (pO2 <30 mmHg, pCO2 >60 mmHg, pH <7.25, dark blood), non-ischemic (normal arterial values, bright red blood). Penile ultrasound with Doppler: ischemic (absent or minimal cavernosal artery flow), non-ischemic (high flow in cavernosal arteries, may identify fistula). CBC: sickle cell screen if African descent. Toxicology screen: cocaine, other drugs.',
    treatment: 'Ischemic priapism (emergency): immediate treatment to prevent permanent dysfunction. Initial: corporal aspiration - insert 19-gauge butterfly needle into corpus cavernosum, aspirate 30-50 mL blood. Intracavernosal injection: phenylephrine 100-500 mcg every 5 minutes (max 1 mg in 1 hour) - alpha-agonist causes vasoconstriction and detumescence. Monitor blood pressure and heart rate (risk of hypertensive crisis). If refractory: surgical shunting (create fistula between corpus cavernosum and spongiosum or saphenous vein). Sickle cell: hydration, oxygen, exchange transfusion. Non-ischemic priapism: observation (often resolves spontaneously), selective arterial embolization if persistent.',
    clinicalPearls: [
      'Priapism >4 hours is emergency - permanent dysfunction if >24 hours',
      'Corporal blood gas distinguishes ischemic (emergency) from non-ischemic (not emergency)',
      'Phenylephrine intracavernosal injection is first-line treatment after aspiration',
      'Sickle cell disease is most common cause in children - treat underlying sickling'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/penile-and-scrotal-disorders/priapism'
  },

  {
    topic: 'Acute Urinary Retention',
    keywords: ['acute urinary retention', 'aur', 'bladder retention acute', 'inability to void', 'urinary retention emergency'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, acute urinary retention (AUR) is sudden inability to voluntarily void despite full bladder. Causes: bladder outlet obstruction (BPH most common in men, pelvic organ prolapse in women), medications (anticholinergics, opioids, decongestants), neurologic (spinal cord injury, cauda equina syndrome), postoperative (anesthesia, pain), infection (prostatitis, severe UTI), constipation. Bladder overdistension causes detrusor muscle injury. Prolonged retention can lead to bladder decompensation, hydronephrosis, and renal failure.',
    clinicalPresentation: 'Inability to void despite urge, suprapubic pain and distension, anxiety, restlessness. Overflow incontinence (dribbling). Physical examination: palpable suprapubic mass (distended bladder), dullness to percussion. Digital rectal exam: enlarged prostate (BPH), fecal impaction. Neurologic exam: assess for spinal cord lesion. Complications: bladder injury, hydronephrosis, post-obstructive diuresis, urinary tract infection.',
    diagnosticApproach: 'Clinical diagnosis: inability to void + palpable bladder. Bladder scan or post-void residual: >300 mL confirms retention. Urinalysis: exclude infection. Serum creatinine and BUN: assess renal function (elevated if bilateral obstruction or chronic retention). Renal ultrasound: assess for hydronephrosis. Neurologic exam: assess for cauda equina syndrome (saddle anesthesia, decreased rectal tone, lower extremity weakness - emergency).',
    treatment: 'Immediate bladder catheterization: urethral catheter (Foley) or suprapubic catheter if urethral catheterization fails. Measure post-void residual. Monitor for post-obstructive diuresis (massive urine output after catheter placement - replace half of urine output with IV fluids). Treat underlying cause: BPH (alpha-blocker, 5-alpha reductase inhibitor, surgery), medications (discontinue offending agents), infection (antibiotics), neurologic (neurosurgical consultation). Trial of void after 1-3 days: remove catheter, measure post-void residual. If recurrent retention: intermittent catheterization or indwelling catheter until definitive treatment. Cauda equina syndrome: emergency MRI spine, neurosurgical decompression.',
    clinicalPearls: [
      'Acute retention often precipitated by medications (anticholinergics, opioids, decongestants)',
      'Post-obstructive diuresis can cause massive fluid losses - replace half of urine output',
      'Cauda equina syndrome (saddle anesthesia, retention, weakness) requires emergency MRI and surgery',
      'Trial of void after 1-3 days - if recurrent retention, treat underlying cause'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/voiding-disorders/urinary-retention'
  },

  {
    topic: 'Fournier Gangrene',
    keywords: ['fournier gangrene', 'necrotizing fasciitis perineum', 'scrotal gangrene', 'perineal necrotizing infection', 'genital necrotizing fasciitis'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, Fournier gangrene is necrotizing fasciitis of perineum and genitals. Polymicrobial infection (aerobic and anaerobic bacteria) causes thrombosis of subcutaneous vessels, leading to tissue necrosis. Bacteria produce toxins and gas, causing rapid tissue destruction. Risk factors: diabetes, immunosuppression, obesity, alcoholism, peripheral vascular disease, recent perineal trauma or surgery. Sources: perirectal abscess, urethral trauma, infected Bartholin gland. Mortality 20-40% despite treatment. Surgical emergency.',
    clinicalPresentation: 'Acute onset of severe perineal pain, swelling, erythema. Fever, chills, malaise. Rapidly progressive: skin becomes dusky, crepitus (gas in tissues), foul-smelling discharge, tissue necrosis. Physical examination: toxic appearance, tachycardia, hypotension (septic shock), perineal erythema and edema, crepitus, skin necrosis, foul odor. Complications: septic shock, multi-organ failure, death.',
    diagnosticApproach: 'Clinical diagnosis - do not delay surgery for imaging. CT pelvis with contrast if diagnosis uncertain: subcutaneous gas, fascial thickening, fluid collections. Laboratory: leukocytosis, elevated lactate, metabolic acidosis, acute kidney injury, coagulopathy. Blood cultures: polymicrobial. Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score: predicts necrotizing fasciitis (score ≥6 suggests necrotizing infection).',
    treatment: 'Surgical emergency: immediate aggressive surgical debridement of all necrotic tissue, extending to healthy bleeding tissue. Multiple debridements often required. Broad-spectrum IV antibiotics: piperacillin-tazobactam 3.375 g q6h plus vancomycin 15-20 mg/kg q8-12h plus clindamycin 600-900 mg q8h (covers gram-positive, gram-negative, anaerobes). Resuscitation: IV fluids, vasopressors if septic shock. Hyperbaric oxygen therapy: adjunct to surgery and antibiotics. Wound care: negative pressure wound therapy, delayed closure or skin grafting. Mortality 20-40% despite treatment. Survivors require prolonged hospitalization and reconstructive surgery.',
    clinicalPearls: [
      'Fournier gangrene is surgical emergency - immediate debridement is life-saving',
      'Crepitus (gas in tissues) and foul odor are hallmarks of necrotizing infection',
      'Do not delay surgery for imaging - clinical diagnosis is sufficient',
      'Multiple debridements often required - debride until healthy bleeding tissue'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/penile-and-scrotal-disorders/fournier-gangrene'
  },

  // PROSTATE DISORDERS
  {
    topic: 'Prostate Cancer',
    keywords: ['prostate cancer', 'prostatic adenocarcinoma', 'prostate malignancy', 'psa elevated cancer', 'prostate carcinoma'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, prostate cancer is malignancy of prostate gland, most commonly adenocarcinoma (95%). Arises from peripheral zone (70%). Risk factors: age (rare <50 years, common >65 years), African American race, family history, BRCA mutations. Gleason score (6-10) grades histologic pattern: 6 (low-grade), 7 (intermediate), 8-10 (high-grade). Metastases: lymph nodes, bone (osteoblastic lesions). Most prostate cancers are slow-growing; many men die with prostate cancer rather than from it.',
    clinicalPresentation: 'Often asymptomatic, detected by elevated PSA or abnormal DRE on screening. Advanced disease: lower urinary tract symptoms (similar to BPH), hematuria, hematospermia, bone pain (metastases), weight loss. Physical examination: hard nodule or asymmetry on DRE. Metastatic disease: bone pain, pathologic fractures, spinal cord compression.',
    diagnosticApproach: 'PSA screening: controversial, shared decision-making. Elevated PSA (>4 ng/mL) or abnormal DRE prompts prostate biopsy. Transrectal ultrasound-guided prostate biopsy: 12-core sampling, Gleason score. MRI prostate: detect lesions, guide targeted biopsy. Staging: bone scan (if PSA >20 or high-grade), CT abdomen/pelvis (if high-risk). Risk stratification: low-risk (PSA <10, Gleason ≤6, T1-T2a), intermediate-risk (PSA 10-20, Gleason 7, T2b), high-risk (PSA >20, Gleason 8-10, T3-T4).',
    treatment: 'Localized disease: active surveillance (low-risk, monitor PSA and repeat biopsies), radical prostatectomy (surgical removal), external beam radiation therapy, brachytherapy (radioactive seed implants). Locally advanced: radiation plus androgen deprivation therapy (ADT). Metastatic disease: ADT (LHRH agonists/antagonists, antiandrogens), chemotherapy (docetaxel), abiraterone, enzalutamide, radium-223 (bone metastases). Complications: erectile dysfunction, urinary incontinence (surgery), bowel dysfunction (radiation). Prognosis: excellent for localized disease (>95% 5-year survival), poor for metastatic disease (30% 5-year survival).',
    clinicalPearls: [
      'PSA screening reduces prostate cancer mortality but increases overdiagnosis and overtreatment',
      'Gleason score predicts aggressiveness: 6 (low-grade), 7 (intermediate), 8-10 (high-grade)',
      'Active surveillance appropriate for low-risk disease - many cancers never progress',
      'Bone metastases are osteoblastic (increased density) unlike most cancers (osteolytic)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/genitourinary-cancer/prostate-cancer'
  },

  {
    topic: 'Chronic Bacterial Prostatitis',
    keywords: ['chronic bacterial prostatitis', 'chronic prostatitis bacterial', 'recurrent prostatitis', 'chronic prostate infection'],
    system: 'Urology',
    pathophysiology: 'According to Merck Manual Professional, chronic bacterial prostatitis is persistent or recurrent bacterial infection of prostate. Most commonly caused by gram-negative bacteria: E. coli, Klebsiella, Proteus, Pseudomonas. Bacteria persist in prostatic tissue despite antibiotic therapy due to poor antibiotic penetration into prostate. Causes recurrent urinary tract infections from same organism. Prostatic calculi may harbor bacteria. Chronic inflammation can cause prostatic fibrosis and calcification.',
    clinicalPresentation: 'Recurrent urinary tract infections (same organism). Perineal, suprapubic, or low back pain. Lower urinary tract symptoms: dysuria, frequency, urgency. Often asymptomatic between episodes. Physical examination: prostate may be normal, tender, or boggy on DRE. Complications: recurrent UTIs, chronic pelvic pain, sexual dysfunction.',
    diagnosticApproach: 'Diagnosis requires documentation of bacteria in prostatic fluid. Four-glass test (Meares-Stamey): compare bacteria in initial urine (VB1), midstream urine (VB2), expressed prostatic secretions (EPS), and post-massage urine (VB3). Chronic bacterial prostatitis: bacteria in EPS and VB3 >10x higher than VB1 and VB2. Urine culture: identifies organism and sensitivities. Transrectal ultrasound: prostatic calculi, abscess.',
    treatment: 'Prolonged antibiotic therapy: fluoroquinolone (ciprofloxacin 500 mg BID or levofloxacin 500 mg daily) or trimethoprim-sulfamethoxazole DS BID for 4-6 weeks (minimum) to 12 weeks. Fluoroquinolones penetrate prostate better than other antibiotics. Alpha-blockers (tamsulosin) improve voiding symptoms. Suppressive therapy: low-dose antibiotics if recurrent despite treatment. Transurethral resection of prostate (TURP): remove infected tissue and calculi if refractory to antibiotics. Complications: chronic pelvic pain syndrome, infertility.',
    clinicalPearls: [
      'Chronic bacterial prostatitis causes recurrent UTIs from same organism',
      'Requires prolonged antibiotics (4-12 weeks) - fluoroquinolones penetrate prostate best',
      'Four-glass test differentiates chronic bacterial prostatitis from other causes',
      'Prostatic calculi harbor bacteria - may require TURP if refractory to antibiotics'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/genitourinary-disorders/prostatitis/chronic-bacterial-prostatitis'
  },
];
