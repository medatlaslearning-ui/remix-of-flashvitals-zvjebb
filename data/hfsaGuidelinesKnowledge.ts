
/**
 * Heart Failure Society of America (HFSA) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the Heart Failure Society of America.
 * The HFSA provides evidence-based guidelines for heart failure management and prevention.
 * 
 * INTEGRATION PHASE: HFSA Guidelines (Phase 13)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - HFSA guideline URL for reference
 */

export interface HFSAGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  classIRecommendations: string[];
  classIIARecommendations: string[];
  classIIBRecommendations: string[];
  classIIIRecommendations: string[];
  levelOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  hfsaUrl: string;
  publicationYear: number;
}

export const hfsaGuidelinesKnowledge: HFSAGuidelineEntry[] = [
  // HEART FAILURE MANAGEMENT - COMPREHENSIVE GUIDELINE
  {
    topic: 'Heart Failure Management - HFSA 2022 Guideline',
    keywords: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef', 'hfmref', 'systolic heart failure', 'diastolic heart failure', 'gdmt', 'guideline directed medical therapy'],
    system: 'Cardiology',
    guidelineSummary: 'The 2022 HFSA Guideline for the Management of Heart Failure provides comprehensive, evidence-based recommendations for the diagnosis, treatment, and management of heart failure across the spectrum of ejection fraction. The guideline emphasizes the four pillars of guideline-directed medical therapy (GDMT) for HFrEF: ACE inhibitors/ARBs/ARNI, beta-blockers, mineralocorticoid receptor antagonists (MRAs), and SGLT2 inhibitors. The guideline also addresses HFpEF and HFmrEF management, device therapy, advanced heart failure therapies, and palliative care.',
    classIRecommendations: [
      'In patients with HFrEF (LVEF ≤40%), ACE inhibitors are recommended to reduce morbidity and mortality (Class I, Level A)',
      'In patients with HFrEF, evidence-based beta-blockers (carvedilol, metoprolol succinate, or bisoprolol) are recommended to reduce morbidity and mortality (Class I, Level A)',
      'In patients with HFrEF, mineralocorticoid receptor antagonists (spironolactone or eplerenone) are recommended to reduce morbidity and mortality (Class I, Level A)',
      'In patients with HFrEF, SGLT2 inhibitors (dapagliflozin or empagliflozin) are recommended to reduce hospitalizations and cardiovascular mortality (Class I, Level A)',
      'In patients with HFrEF who remain symptomatic despite ACE inhibitor, sacubitril/valsartan (ARNI) is recommended to replace ACE inhibitor to further reduce morbidity and mortality (Class I, Level B)',
      'In patients with symptomatic HF, diuretics are recommended to improve symptoms and reduce HF hospitalizations (Class I, Level B)',
      'In patients with HFrEF, LVEF ≤35%, NYHA class II-III on GDMT, and QRS ≥150 ms with LBBB, CRT is recommended (Class I, Level A)',
      'In patients with HFrEF, LVEF ≤35% on GDMT, and life expectancy >1 year, ICD is recommended for primary prevention of sudden cardiac death (Class I, Level A)',
      'In patients with HF, daily weight monitoring and sodium restriction (<3 g/day) are recommended for volume management (Class I, Level C)',
      'In patients with HF, cardiac rehabilitation is recommended to improve functional capacity and quality of life (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with HFrEF and heart rate ≥70 bpm in sinus rhythm despite maximally tolerated beta-blocker, ivabradine is reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with HFrEF and iron deficiency (ferritin <100 ng/mL or ferritin 100-299 ng/mL with transferrin saturation <20%), intravenous iron replacement is reasonable to improve symptoms and quality of life (Class IIA, Level A)',
      'In patients with HFmrEF (LVEF 41-49%), SGLT2 inhibitors are reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with HFpEF (LVEF ≥50%), SGLT2 inhibitors are reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with advanced HF despite GDMT, referral to an advanced HF center for consideration of mechanical circulatory support or transplantation is reasonable (Class IIA, Level C)',
      'In patients with HFrEF, vericiguat is reasonable to reduce HF hospitalizations in patients with recent worsening HF (Class IIA, Level B)',
      'In patients with HF and atrial fibrillation, catheter ablation is reasonable to improve symptoms and reduce hospitalizations (Class IIA, Level B)',
      'In patients with HF, influenza and pneumococcal vaccination are reasonable to reduce infections (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with HFrEF, hydralazine and isosorbide dinitrate may be considered in self-identified African American patients with NYHA class III-IV HF on GDMT (Class IIB, Level B)',
      'In patients with HFpEF, MRAs may be considered to reduce HF hospitalizations (Class IIB, Level B)',
      'In patients with HFpEF, ARBs may be considered to decrease hospitalizations (Class IIB, Level B)',
      'In patients with HF and sleep apnea, CPAP therapy may be considered to improve symptoms (Class IIB, Level B)',
      'In patients with HF and obesity, weight loss may be considered to improve symptoms and functional capacity (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with HFrEF, calcium channel blockers (diltiazem, verapamil) are not recommended as they may worsen HF (Class III, Level C)',
      'In patients with HF, NSAIDs and COX-2 inhibitors should be avoided as they can worsen HF and increase hospitalizations (Class III, Level B)',
      'In patients with HFrEF, thiazolidinediones (rosiglitazone, pioglitazone) should be avoided as they increase HF hospitalizations (Class III, Level B)',
      'In patients with HF, routine use of nutritional supplements (coenzyme Q10, vitamin D, omega-3 fatty acids) is not recommended (Class III, Level B)',
      'In patients with HF, dronedarone should be avoided as it increases mortality (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of the 2022 HFSA HF guideline requires a systematic approach to initiate and titrate all four pillars of GDMT (ACE-I/ARB/ARNI, beta-blocker, MRA, SGLT2i) as early as possible. Start medications at low doses and uptitrate to target or maximally tolerated doses over 4-6 weeks. Four pillars: (1) ACE-I (enalapril 10 mg BID, lisinopril 20 mg daily) or ARB (losartan 50 mg daily, valsartan 160 mg BID) or ARNI (sacubitril/valsartan 97/103 mg BID); (2) Beta-blocker (carvedilol 25 mg BID, metoprolol succinate 200 mg daily, bisoprolol 10 mg daily); (3) MRA (spironolactone 25-50 mg daily, eplerenone 50 mg daily); (4) SGLT2i (dapagliflozin 10 mg daily, empagliflozin 10 mg daily). Monitor renal function, potassium, and blood pressure during titration. For symptomatic patients, add diuretics (furosemide, bumetanide, torsemide) titrated to euvolemia. Consider device therapy: CRT for LVEF ≤35%, NYHA II-III, QRS ≥150 ms with LBBB; ICD for LVEF ≤35% on GDMT. For HFpEF, focus on treating comorbidities (hypertension, AF, diabetes, obesity), managing volume with diuretics, and consider SGLT2 inhibitors. Ensure patient education on daily weights, sodium restriction (<3 g/day), fluid restriction if severe HF, and medication adherence. Provide cardiac rehabilitation and regular follow-up. For advanced HF, consider referral to advanced HF center for LVAD or transplant evaluation.',
    keyPoints: [
      'Four pillars of GDMT for HFrEF: ACE-I/ARB/ARNI + beta-blocker + MRA + SGLT2i',
      'SGLT2 inhibitors are Class I recommendation for HFrEF and Class IIA for HFpEF',
      'Sacubitril/valsartan (ARNI) replaces ACE-I in symptomatic patients',
      'Start GDMT early and uptitrate rapidly to target doses',
      'Daily weights and sodium restriction (<3 g/day) are essential',
      'CRT for LVEF ≤35%, NYHA II-III, QRS ≥150 ms with LBBB',
      'ICD for LVEF ≤35% on GDMT for primary prevention',
      'Cardiac rehabilitation improves functional capacity and quality of life',
      'Referral to advanced HF center for refractory symptoms despite GDMT',
      'Avoid NSAIDs, CCBs (diltiazem/verapamil), and thiazolidinediones in HF',
    ],
    hfsaUrl: 'https://www.hfsa.org/heart-failure-guidelines',
    publicationYear: 2022,
  },

  // ACUTE DECOMPENSATED HEART FAILURE
  {
    topic: 'Acute Decompensated Heart Failure Management - HFSA Guideline',
    keywords: ['acute heart failure', 'adhf', 'acute decompensated heart failure', 'pulmonary edema', 'cardiogenic shock', 'volume overload', 'congestion'],
    system: 'Cardiology',
    guidelineSummary: 'The HFSA Guideline for Acute Decompensated Heart Failure provides evidence-based recommendations for the diagnosis and management of acute HF exacerbations. The guideline emphasizes rapid assessment of hemodynamic profile, aggressive diuresis for volume overload, vasodilators for hypertensive acute HF, and inotropes for cardiogenic shock. The guideline also addresses transition to chronic HF management and prevention of readmissions.',
    classIRecommendations: [
      'In patients with acute HF and volume overload, intravenous loop diuretics are recommended to improve symptoms and reduce congestion (Class I, Level B)',
      'In patients with acute HF, assessment of volume status (physical exam, chest X-ray, BNP/NT-proBNP) is recommended to guide therapy (Class I, Level C)',
      'In patients with acute HF and hypertension, intravenous vasodilators (nitroglycerin, nitroprusside) are recommended to reduce preload and afterload (Class I, Level B)',
      'In patients with acute HF and cardiogenic shock, inotropic support (dobutamine, milrinone) is recommended to improve cardiac output (Class I, Level B)',
      'In patients with acute HF, continuous monitoring of vital signs, urine output, and daily weights is recommended (Class I, Level C)',
      'In patients with acute HF, initiation or continuation of GDMT (beta-blockers, ACE-I/ARB/ARNI, MRA) is recommended once hemodynamically stable (Class I, Level B)',
      'In patients with acute HF, assessment for precipitating factors (medication non-adherence, dietary indiscretion, infection, arrhythmia, ACS) is recommended (Class I, Level C)',
    ],
    classIIARecommendations: [
      'In patients with acute HF and inadequate diuresis, combination diuretic therapy (loop diuretic + thiazide) is reasonable (Class IIA, Level B)',
      'In patients with acute HF and refractory congestion, ultrafiltration is reasonable (Class IIA, Level B)',
      'In patients with acute HF, early initiation of ARNI (sacubitril/valsartan) after stabilization is reasonable to reduce readmissions (Class IIA, Level B)',
      'In patients with acute HF, discharge on oral diuretics at doses higher than pre-admission is reasonable to prevent early readmission (Class IIA, Level C)',
      'In patients with acute HF, follow-up within 7-14 days of discharge is reasonable to reduce readmissions (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with acute HF and low cardiac output, levosimendan may be considered to improve hemodynamics (Class IIB, Level B)',
      'In patients with acute HF and refractory cardiogenic shock, mechanical circulatory support (IABP, Impella, ECMO) may be considered (Class IIB, Level C)',
      'In patients with acute HF, nesiritide may be considered for symptom relief (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with acute HF, routine use of inotropes without evidence of low cardiac output is not recommended (Class III, Level B)',
      'In patients with acute HF, routine use of vasopressin antagonists (tolvaptan) is not recommended (Class III, Level B)',
      'In patients with acute HF, aggressive diuresis without monitoring of renal function and electrolytes is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and clinical experience',
    clinicalImplementation: 'Implementation of acute HF management requires rapid assessment and treatment. Assess hemodynamic profile: warm/cold (perfusion), wet/dry (congestion). For warm and wet (most common): IV loop diuretics (furosemide 40-80 mg IV bolus or continuous infusion 5-10 mg/hr), target urine output >100-150 mL/hr, monitor daily weights (goal 1-2 kg/day weight loss), monitor renal function and electrolytes daily. For warm and wet with hypertension: add IV vasodilators (nitroglycerin 10-200 mcg/min, nitroprusside 0.3-5 mcg/kg/min). For cold and wet (low cardiac output with congestion): IV inotropes (dobutamine 2.5-20 mcg/kg/min, milrinone 0.375-0.75 mcg/kg/min) + IV diuretics. For cold and dry (cardiogenic shock): IV inotropes + IV fluids cautiously. Identify and treat precipitating factors: medication non-adherence, dietary indiscretion (high sodium intake), infection, arrhythmia (AF with RVR), ACS, uncontrolled hypertension. Once hemodynamically stable, initiate or continue GDMT: beta-blockers (start low dose, uptitrate), ACE-I/ARB/ARNI, MRA, SGLT2i. Transition to oral diuretics before discharge. Ensure follow-up within 7-14 days. Provide patient education on daily weights, sodium restriction, medication adherence.',
    keyPoints: [
      'Assess hemodynamic profile: warm/cold (perfusion), wet/dry (congestion)',
      'IV loop diuretics for volume overload (target urine output >100-150 mL/hr)',
      'IV vasodilators for hypertensive acute HF',
      'IV inotropes for cardiogenic shock or low cardiac output',
      'Identify and treat precipitating factors (non-adherence, dietary indiscretion, infection, arrhythmia, ACS)',
      'Initiate or continue GDMT once hemodynamically stable',
      'Combination diuretics (loop + thiazide) for refractory congestion',
      'Ultrafiltration for refractory volume overload',
      'Follow-up within 7-14 days to reduce readmissions',
      'Avoid routine inotropes without evidence of low cardiac output',
    ],
    hfsaUrl: 'https://www.hfsa.org/acute-heart-failure-guidelines',
    publicationYear: 2022,
  },

  // ADVANCED HEART FAILURE AND TRANSPLANTATION
  {
    topic: 'Advanced Heart Failure and Cardiac Transplantation - HFSA Guideline',
    keywords: ['advanced heart failure', 'stage d heart failure', 'refractory heart failure', 'cardiac transplantation', 'heart transplant', 'lvad', 'mechanical circulatory support', 'mcs', 'palliative care'],
    system: 'Cardiology',
    guidelineSummary: 'The HFSA Guideline for Advanced Heart Failure and Cardiac Transplantation provides comprehensive recommendations for the evaluation, management, and treatment of patients with advanced HF (Stage D). The guideline emphasizes timely referral to advanced HF centers, evaluation for cardiac transplantation and mechanical circulatory support (MCS), and integration of palliative care. The guideline also addresses post-transplant management and long-term outcomes.',
    classIRecommendations: [
      'In patients with advanced HF (Stage D) despite optimal GDMT, referral to an advanced HF center is recommended (Class I, Level C)',
      'In patients with advanced HF, evaluation for cardiac transplantation is recommended if no contraindications (Class I, Level B)',
      'In patients with advanced HF and contraindications to transplantation, evaluation for durable LVAD as destination therapy is recommended (Class I, Level B)',
      'In patients with advanced HF and cardiogenic shock, temporary mechanical circulatory support (IABP, Impella, ECMO) is recommended as bridge to decision (Class I, Level C)',
      'In patients with advanced HF, palliative care consultation is recommended to address symptoms and quality of life (Class I, Level B)',
      'In patients with advanced HF, continuous intravenous inotropes may be considered as bridge to transplantation or MCS (Class I, Level C)',
      'In patients after cardiac transplantation, immunosuppression with calcineurin inhibitors, antiproliferative agents, and corticosteroids is recommended (Class I, Level A)',
      'In patients after cardiac transplantation, surveillance for rejection with endomyocardial biopsy is recommended (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with advanced HF and INTERMACS profile 4-7, durable LVAD is reasonable to improve survival and quality of life (Class IIA, Level B)',
      'In patients with advanced HF, CardioMEMS pulmonary artery pressure monitoring is reasonable to guide therapy and reduce hospitalizations (Class IIA, Level B)',
      'In patients with advanced HF, home inotropic therapy is reasonable as palliative measure in patients not candidates for transplant or MCS (Class IIA, Level C)',
      'In patients after cardiac transplantation, cardiac allograft vasculopathy surveillance with coronary angiography or intravascular ultrasound is reasonable (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with advanced HF, total artificial heart may be considered as bridge to transplantation (Class IIB, Level C)',
      'In patients with advanced HF and refractory symptoms, ultrafiltration may be considered for volume management (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with advanced HF and poor prognosis (INTERMACS profile 1-2), durable LVAD as destination therapy is not recommended without careful consideration (Class III, Level C)',
      'In patients with advanced HF and multiple comorbidities limiting life expectancy, cardiac transplantation is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of advanced HF management requires multidisciplinary team approach. Identify advanced HF: persistent NYHA class III-IV symptoms despite optimal GDMT, recurrent HF hospitalizations, progressive decline in renal function, cardiac cachexia, inability to tolerate GDMT due to hypotension or worsening renal function. Refer to advanced HF center for evaluation. Assess for cardiac transplantation: age <70 years, no active infection, no active malignancy, no severe pulmonary hypertension (PVR <3 Wood units), no severe renal/hepatic dysfunction, psychosocial stability. If transplant candidate, list for transplantation (UNOS status 1-6). If not transplant candidate, evaluate for durable LVAD as destination therapy: age <80 years, INTERMACS profile 4-7, no severe RV dysfunction, no severe aortic insufficiency. For cardiogenic shock (INTERMACS 1-2), consider temporary MCS as bridge to decision: IABP (augments diastolic pressure, reduces afterload), Impella (direct LV unloading), ECMO (cardiopulmonary support). Integrate palliative care early: symptom management (dyspnea, pain, anxiety), advance care planning, goals of care discussions. For patients not candidates for transplant or MCS, consider home inotropic therapy (dobutamine, milrinone) as palliative measure. Post-transplant management: immunosuppression (tacrolimus + mycophenolate + prednisone), surveillance for rejection (endomyocardial biopsy at 1, 2, 3, 4, 6, 8, 12 weeks, then annually), surveillance for cardiac allograft vasculopathy (coronary angiography annually), infection prophylaxis (CMV, PCP).',
    keyPoints: [
      'Advanced HF (Stage D): persistent NYHA III-IV despite optimal GDMT',
      'Refer to advanced HF center for evaluation',
      'Evaluate for cardiac transplantation if no contraindications',
      'Durable LVAD as destination therapy if not transplant candidate',
      'Temporary MCS (IABP, Impella, ECMO) for cardiogenic shock',
      'Integrate palliative care early for symptom management',
      'Home inotropic therapy as palliative measure',
      'Post-transplant: immunosuppression, rejection surveillance, CAV surveillance',
      'INTERMACS profile guides MCS timing (1-2: cardiogenic shock, 4-7: ambulatory)',
      'CardioMEMS for hemodynamic monitoring in advanced HF',
    ],
    hfsaUrl: 'https://www.hfsa.org/advanced-heart-failure-guidelines',
    publicationYear: 2022,
  },

  // HEART FAILURE WITH PRESERVED EJECTION FRACTION
  {
    topic: 'Heart Failure with Preserved Ejection Fraction (HFpEF) - HFSA Guideline',
    keywords: ['hfpef', 'heart failure preserved ejection fraction', 'diastolic heart failure', 'diastolic dysfunction', 'hfpef management'],
    system: 'Cardiology',
    guidelineSummary: 'The HFSA Guideline for Heart Failure with Preserved Ejection Fraction (HFpEF) provides evidence-based recommendations for the diagnosis and management of HFpEF (LVEF ≥50%). The guideline emphasizes the importance of treating comorbidities (hypertension, atrial fibrillation, diabetes, obesity, sleep apnea), managing volume status with diuretics, and considering SGLT2 inhibitors to reduce hospitalizations. The guideline acknowledges the limited evidence for pharmacologic therapies in HFpEF compared to HFrEF.',
    classIRecommendations: [
      'In patients with HFpEF, treatment of hypertension with target BP <130/80 mmHg is recommended (Class I, Level A)',
      'In patients with HFpEF and volume overload, diuretics are recommended to improve symptoms (Class I, Level C)',
      'In patients with HFpEF and atrial fibrillation, rate control and anticoagulation are recommended (Class I, Level B)',
      'In patients with HFpEF and diabetes, glycemic control with target HbA1c <7% is recommended (Class I, Level B)',
      'In patients with HFpEF, management of comorbidities (obesity, sleep apnea, anemia, renal dysfunction) is recommended (Class I, Level C)',
      'In patients with HFpEF, exercise training and cardiac rehabilitation are recommended to improve functional capacity and quality of life (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with HFpEF, SGLT2 inhibitors (empagliflozin, dapagliflozin) are reasonable to reduce HF hospitalizations (Class IIA, Level B)',
      'In patients with HFpEF and obesity, weight loss is reasonable to improve symptoms and functional capacity (Class IIA, Level C)',
      'In patients with HFpEF and sleep apnea, CPAP therapy is reasonable to improve symptoms (Class IIA, Level C)',
      'In patients with HFpEF and iron deficiency, intravenous iron replacement is reasonable to improve symptoms and quality of life (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with HFpEF, mineralocorticoid receptor antagonists (spironolactone) may be considered to reduce HF hospitalizations (Class IIB, Level B)',
      'In patients with HFpEF, ARBs (candesartan) may be considered to reduce HF hospitalizations (Class IIB, Level B)',
      'In patients with HFpEF, neprilysin inhibitors (sacubitril/valsartan) may be considered to reduce HF hospitalizations (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with HFpEF, routine use of nitrates or phosphodiesterase-5 inhibitors is not recommended (Class III, Level B)',
      'In patients with HFpEF, routine use of digoxin is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A, B, or C evidence from randomized trials and observational studies',
    clinicalImplementation: 'Implementation of HFpEF management requires a comprehensive approach focused on comorbidity management and symptom control. Diagnosis: LVEF ≥50%, signs/symptoms of HF, elevated natriuretic peptides (BNP >35 pg/mL or NT-proBNP >125 pg/mL), evidence of structural heart disease (LVH, LAE) or diastolic dysfunction on echocardiography. Treat hypertension aggressively: target BP <130/80 mmHg, use ACE-I/ARB, CCB, or thiazide diuretic. Manage volume status: diuretics (furosemide, bumetanide, torsemide) titrated to euvolemia, daily weights, sodium restriction (<3 g/day). Treat atrial fibrillation: rate control (beta-blocker or non-dihydropyridine CCB), anticoagulation (DOAC preferred). Control diabetes: target HbA1c <7%, consider SGLT2 inhibitors (empagliflozin 10 mg daily, dapagliflozin 10 mg daily) which reduce HF hospitalizations. Manage obesity: weight loss through diet and exercise, target BMI <30. Screen and treat sleep apnea: polysomnography, CPAP therapy. Treat iron deficiency: IV iron (ferric carboxymaltose) if ferritin <100 ng/mL or ferritin 100-299 ng/mL with transferrin saturation <20%. Encourage exercise training: cardiac rehabilitation, aerobic exercise 30-45 min, 3-5 times/week. Consider MRA (spironolactone 25-50 mg daily) or ARB (candesartan 32 mg daily) to reduce hospitalizations, though evidence is limited. Avoid medications that worsen HFpEF: NSAIDs, thiazolidinediones, non-dihydropyridine CCBs (diltiazem, verapamil).',
    keyPoints: [
      'HFpEF diagnosis: LVEF ≥50%, HF symptoms, elevated BNP/NT-proBNP, structural heart disease',
      'Treat hypertension aggressively (target BP <130/80 mmHg)',
      'Diuretics for volume management and symptom relief',
      'SGLT2 inhibitors reduce HF hospitalizations (Class IIA)',
      'Manage comorbidities: AF, diabetes, obesity, sleep apnea, anemia',
      'Exercise training and cardiac rehabilitation improve functional capacity',
      'Weight loss for obesity (target BMI <30)',
      'CPAP for sleep apnea',
      'IV iron for iron deficiency',
      'Limited evidence for MRA, ARB, ARNI in HFpEF',
    ],
    hfsaUrl: 'https://www.hfsa.org/hfpef-guidelines',
    publicationYear: 2022,
  },
];

/**
 * Search function to find relevant HFSA guideline entries based on query
 */
export function searchHFSAGuidelines(query: string): HFSAGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = hfsaGuidelinesKnowledge.map(entry => {
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

  console.log(`HFSA Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get HFSA guideline by exact topic name
 */
export function getHFSAGuidelineByTopic(topic: string): HFSAGuidelineEntry | undefined {
  return hfsaGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all HFSA guidelines for a specific system
 */
export function getHFSAGuidelinesBySystem(system: string): HFSAGuidelineEntry[] {
  return hfsaGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
