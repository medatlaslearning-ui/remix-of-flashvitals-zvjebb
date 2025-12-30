
/**
 * European Association for Cardio-Thoracic Surgery (EACTS) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the European Association
 * for Cardio-Thoracic Surgery. EACTS provides evidence-based guidelines for cardiac surgery,
 * thoracic surgery, congenital heart disease surgery, and cardiothoracic surgical techniques.
 * 
 * INTEGRATION PHASE: EACTS Guidelines (Phase 16)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - EACTS guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from EACTS guidelines but presented
 * in an original format for medical education purposes.
 */

export interface EACTSGuidelineEntry {
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
  eactsUrl: string;
  publicationYear: number;
}

export const eactsGuidelinesKnowledge: EACTSGuidelineEntry[] = [
  // CORONARY ARTERY BYPASS GRAFTING (CABG)
  {
    topic: 'Coronary Artery Bypass Grafting (CABG) - EACTS Guideline',
    keywords: ['cabg', 'coronary artery bypass', 'bypass surgery', 'coronary revascularization', 'lima', 'left internal mammary artery', 'saphenous vein graft', 'svg', 'arterial grafts', 'off-pump cabg', 'opcab'],
    system: 'Cardiology',
    guidelineSummary: 'The EACTS Guideline for Coronary Artery Bypass Grafting provides comprehensive recommendations for patient selection, surgical techniques, graft selection, and perioperative management. The guideline emphasizes use of arterial grafts (LIMA to LAD), complete revascularization, optimal surgical technique, and multidisciplinary heart team approach. The guideline addresses CABG for stable ischemic heart disease, acute coronary syndromes, multivessel disease, left main disease, and high-risk patients. CABG remains the gold standard for multivessel coronary artery disease, particularly in patients with diabetes, complex anatomy (high SYNTAX score), or reduced left ventricular function.',
    classIRecommendations: [
      'In patients with left main coronary artery disease, CABG is recommended over medical therapy to improve survival (Class I, Level A)',
      'In patients with three-vessel disease and diabetes, CABG is recommended over PCI to improve long-term outcomes (Class I, Level A)',
      'In patients undergoing CABG, use of left internal mammary artery (LIMA) to left anterior descending (LAD) artery is recommended to improve long-term patency and survival (Class I, Level A)',
      'In patients with multivessel disease and SYNTAX score >22, CABG is recommended over PCI (Class I, Level A)',
      'In patients undergoing CABG, complete revascularization is recommended to improve outcomes (Class I, Level B)',
      'In patients undergoing CABG, multidisciplinary heart team evaluation is recommended for optimal treatment selection (Class I, Level C)',
      'In patients with acute MI and cardiogenic shock, emergency CABG is recommended if PCI is not feasible or failed (Class I, Level B)',
      'In patients undergoing CABG, perioperative antiplatelet therapy with aspirin is recommended to improve graft patency (Class I, Level A)',
    ],
    classIIARecommendations: [
      'In patients with left main disease and low-to-intermediate SYNTAX score (≤32), PCI is reasonable as alternative to CABG (Class IIA, Level B)',
      'In patients undergoing CABG, use of bilateral internal mammary arteries (BIMA) is reasonable to improve long-term survival (Class IIA, Level B)',
      'In patients undergoing CABG, use of radial artery grafts is reasonable for additional arterial conduits (Class IIA, Level B)',
      'In patients with suitable anatomy, off-pump CABG (OPCAB) is reasonable to reduce perioperative complications (Class IIA, Level B)',
      'In patients undergoing CABG, use of saphenous vein grafts with no-touch technique is reasonable to improve graft patency (Class IIA, Level B)',
      'In patients with chronic total occlusion (CTO) and viable myocardium, CABG is reasonable to improve symptoms and function (Class IIA, Level B)',
      'In patients undergoing CABG, intraoperative graft flow assessment is reasonable to ensure graft patency (Class IIA, Level C)',
      'In patients with severe LV dysfunction (LVEF <35%), CABG is reasonable if viable myocardium is present (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with two-vessel disease without LAD involvement, CABG may be considered over medical therapy (Class IIB, Level C)',
      'In patients undergoing CABG, use of gastroepiploic artery grafts may be considered for additional conduits (Class IIB, Level C)',
      'In patients with ischemic mitral regurgitation, concomitant mitral valve repair may be considered during CABG (Class IIB, Level C)',
      'In patients undergoing CABG, hybrid revascularization (CABG + PCI) may be considered in select cases (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with single-vessel disease amenable to PCI, CABG is not recommended as first-line therapy (Class III, Level B)',
      'In patients with severe frailty or limited life expectancy (<1 year), CABG is not recommended (Class III, Level C)',
      'In patients undergoing CABG, routine use of saphenous vein grafts without arterial grafts is not recommended when arterial conduits are available (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of CABG guidelines requires systematic patient evaluation and surgical planning. Patient selection: Multidisciplinary heart team evaluation including cardiac surgeon, interventional cardiologist, anesthesiologist, imaging specialist. Assess coronary anatomy with coronary angiography; calculate SYNTAX score (anatomic complexity): low (≤22), intermediate (23-32), high (≥33). CABG preferred for: left main disease, three-vessel disease with diabetes, SYNTAX score >22, severe LV dysfunction with viable myocardium. Preoperative assessment: Echocardiography (LVEF, valvular disease), carotid duplex ultrasound (if age >65, prior stroke, carotid bruit), pulmonary function tests (if thoracic surgery history), renal function (CrCl), HbA1c (diabetes control). Optimize medical therapy: continue aspirin 75-100 mg daily (stop P2Y12 inhibitors 5-7 days before surgery), continue beta-blockers and statins, hold ACE-I/ARB on day of surgery, hold metformin 48 hours before surgery. Surgical technique: Median sternotomy (standard approach) or minimally invasive approaches (MIDCAB for single-vessel LAD disease). Cardiopulmonary bypass (CPB) with cardioplegic arrest (standard) or off-pump CABG (OPCAB) for select patients (reduced stroke risk, faster recovery). Graft selection: LIMA to LAD (mandatory, 95% 10-year patency); additional arterial grafts - RIMA (right internal mammary artery), radial artery (RA), or saphenous vein grafts (SVG). BIMA (bilateral internal mammary arteries) improves long-term survival but increases sternal wound infection risk (especially in diabetes, obesity, COPD). Radial artery grafts have better patency than SVG (85% vs 60% at 10 years). SVG with no-touch technique (harvest with surrounding tissue) improves patency. Complete revascularization: graft all vessels ≥1.5 mm diameter with ≥70% stenosis. Intraoperative graft flow assessment with transit-time flow measurement (TTFM) to ensure adequate graft function. Perioperative management: Continue aspirin 75-100 mg daily (start within 6 hours post-op if not given preoperatively). Restart P2Y12 inhibitor (clopidogrel 75 mg daily) if recent ACS or high thrombotic risk. High-intensity statin (atorvastatin 80 mg or rosuvastatin 40 mg). Beta-blocker for rate control. ACE-I/ARB for LV dysfunction. Glycemic control (target glucose 140-180 mg/dL). Early extubation (<6 hours), early mobilization (day 1), chest tube removal when drainage <100 mL/day. Monitor for complications: bleeding, atrial fibrillation (20-40%, treat with amiodarone or beta-blockers), sternal wound infection (1-5%, higher with BIMA, diabetes, obesity), stroke (1-3%), renal dysfunction, graft failure. Discharge on aspirin, statin, beta-blocker, ACE-I/ARB. Follow-up at 6 weeks, 3 months, 6 months, 12 months with stress testing if recurrent symptoms.',
    keyPoints: [
      'LIMA to LAD is mandatory for CABG (95% 10-year patency)',
      'CABG preferred for left main disease, three-vessel disease with diabetes, SYNTAX score >22',
      'Complete revascularization improves outcomes',
      'BIMA improves long-term survival but increases sternal infection risk',
      'Radial artery grafts have better patency than SVG (85% vs 60% at 10 years)',
      'Off-pump CABG (OPCAB) reduces stroke risk in select patients',
      'Continue aspirin perioperatively, restart within 6 hours post-op',
      'Multidisciplinary heart team evaluation required',
      'Intraoperative graft flow assessment ensures graft patency',
      'Monitor for complications: AF (20-40%), stroke (1-3%), sternal infection (1-5%)',
    ],
    eactsUrl: 'https://www.eacts.org/guidelines/coronary-artery-bypass-grafting',
    publicationYear: 2018,
  },

  // VALVULAR HEART DISEASE - AORTIC VALVE
  {
    topic: 'Aortic Valve Disease - EACTS/ESC Guideline',
    keywords: ['aortic stenosis', 'as', 'aortic regurgitation', 'ar', 'aortic valve replacement', 'avr', 'surgical avr', 'savr', 'tavr', 'tavi', 'ross procedure', 'bicuspid aortic valve'],
    system: 'Cardiology',
    guidelineSummary: 'The EACTS/ESC Guideline for Aortic Valve Disease provides comprehensive recommendations for diagnosis, risk stratification, and management of aortic stenosis and aortic regurgitation. The guideline emphasizes timely intervention for symptomatic severe aortic stenosis, surgical aortic valve replacement (SAVR) for low-risk patients, TAVR for intermediate-to-high risk patients, and multidisciplinary heart team approach. The guideline addresses indications for intervention, choice between SAVR and TAVR, valve prosthesis selection, and management of bicuspid aortic valve disease.',
    classIRecommendations: [
      'In patients with symptomatic severe aortic stenosis, aortic valve replacement (SAVR or TAVR) is recommended (Class I, Level B)',
      'In patients with severe aortic stenosis undergoing CABG or other cardiac surgery, concomitant AVR is recommended (Class I, Level C)',
      'In patients with severe aortic stenosis and LVEF <50%, AVR is recommended (Class I, Level C)',
      'In patients with asymptomatic severe aortic stenosis and very severe AS (peak velocity >5 m/s or mean gradient >60 mmHg), AVR is recommended (Class I, Level C)',
      'In patients with severe aortic regurgitation and symptoms, AVR is recommended (Class I, Level B)',
      'In patients with severe aortic regurgitation and LVEF <50%, AVR is recommended (Class I, Level B)',
      'In patients with severe aortic regurgitation undergoing CABG or other cardiac surgery, concomitant AVR is recommended (Class I, Level C)',
      'In patients undergoing AVR, multidisciplinary heart team evaluation is recommended to determine optimal treatment strategy (SAVR vs TAVR) (Class I, Level C)',
    ],
    classIIARecommendations: [
      'In patients with asymptomatic severe aortic stenosis and abnormal exercise test showing symptoms, AVR is reasonable (Class IIA, Level C)',
      'In patients with asymptomatic severe aortic stenosis and rapid progression (peak velocity increase >0.3 m/s per year), AVR is reasonable (Class IIA, Level C)',
      'In patients with low surgical risk (STS score <4%), SAVR is reasonable over TAVR (Class IIA, Level B)',
      'In patients with intermediate-to-high surgical risk, TAVR is reasonable as alternative to SAVR (Class IIA, Level A)',
      'In patients with bicuspid aortic valve and aortic root dilatation ≥50 mm, aortic root replacement is reasonable (Class IIA, Level C)',
      'In patients with severe aortic regurgitation and LV dilatation (LVESD >50 mm or LVEDD >70 mm), AVR is reasonable even if asymptomatic (Class IIA, Level C)',
      'In young patients (<60 years) requiring AVR, Ross procedure is reasonable to avoid long-term anticoagulation (Class IIA, Level C)',
      'In patients with severe aortic stenosis and low-flow, low-gradient AS with LVEF <50%, AVR is reasonable if dobutamine stress echo shows contractile reserve (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with moderate aortic stenosis undergoing CABG, concomitant AVR may be considered (Class IIB, Level C)',
      'In patients with asymptomatic severe aortic stenosis and very severe LV hypertrophy (wall thickness >15 mm), AVR may be considered (Class IIB, Level C)',
      'In patients with bicuspid aortic valve and aortic root dilatation 45-50 mm with additional risk factors, aortic root replacement may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with severe aortic stenosis and life expectancy <1 year or severe comorbidities, AVR is not recommended (Class III, Level C)',
      'In patients with asymptomatic mild-to-moderate aortic stenosis, routine AVR is not recommended (Class III, Level C)',
      'In patients with severe aortic regurgitation and LVEF <30% without contractile reserve, AVR is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of aortic valve disease guidelines requires systematic evaluation and treatment planning. Diagnosis: Transthoracic echocardiography (TTE) to assess aortic valve area (AVA), mean gradient, peak velocity, LVEF, LV dimensions. Severe aortic stenosis: AVA <1.0 cm² (or <0.6 cm²/m² indexed), mean gradient >40 mmHg, peak velocity >4 m/s. Severe aortic regurgitation: vena contracta >6 mm, regurgitant volume >60 mL, regurgitant fraction >50%, EROA >0.3 cm². Symptom assessment: dyspnea, angina, syncope, heart failure. Exercise testing for asymptomatic patients to unmask symptoms. Risk stratification: Calculate STS score or EuroSCORE II for surgical risk assessment. Low risk (<4%), intermediate risk (4-8%), high risk (>8%), prohibitive risk (not surgical candidate). Multidisciplinary heart team evaluation to determine SAVR vs TAVR. SAVR indications: Low surgical risk, young age (<65 years), bicuspid aortic valve with unfavorable anatomy for TAVR, need for concomitant cardiac surgery (CABG, mitral valve, aortic root). TAVR indications: Intermediate-to-high surgical risk, elderly (>75 years), frailty, porcelain aorta, prior cardiac surgery, patient preference. Valve prosthesis selection: Mechanical valve (bileaflet, requires lifelong warfarin, INR 2-3) for young patients (<60 years) without contraindication to anticoagulation. Bioprosthetic valve (porcine or bovine pericardial) for elderly (>65 years), contraindication to anticoagulation, patient preference. Ross procedure (pulmonary autograft) for young patients (<60 years) to avoid anticoagulation. Surgical technique: Median sternotomy, cardiopulmonary bypass, cardioplegic arrest. Aortic valve replacement with mechanical or bioprosthetic valve. Aortic root replacement (Bentall procedure) if aortic root dilatation >50 mm. Perioperative management: Continue aspirin, hold warfarin 5 days before surgery (bridge with heparin if high thrombotic risk). Restart warfarin post-op for mechanical valves (target INR 2-3). Aspirin 75-100 mg daily for bioprosthetic valves. Monitor for complications: bleeding, stroke, paravalvular leak, conduction abnormalities (AV block requiring pacemaker in 5-10%). Follow-up: TTE at discharge, 1 month, 6 months, 12 months, then annually to assess valve function and detect structural valve deterioration.',
    keyPoints: [
      'Symptomatic severe AS: AVR indicated regardless of LVEF',
      'Asymptomatic severe AS: AVR if LVEF <50%, very severe AS (velocity >5 m/s), or abnormal exercise test',
      'SAVR preferred for low surgical risk (<4%), young age (<65), bicuspid valve',
      'TAVR reasonable for intermediate-to-high risk, elderly (>75), frailty',
      'Mechanical valve for young (<60) requiring lifelong warfarin (INR 2-3)',
      'Bioprosthetic valve for elderly (>65) or contraindication to anticoagulation',
      'Ross procedure for young (<60) to avoid anticoagulation',
      'Severe AR: AVR if symptomatic, LVEF <50%, or severe LV dilatation (LVESD >50 mm)',
      'Bicuspid aortic valve with aortic root ≥50 mm: aortic root replacement',
      'Multidisciplinary heart team evaluation required for SAVR vs TAVR decision',
    ],
    eactsUrl: 'https://www.eacts.org/guidelines/aortic-valve-disease',
    publicationYear: 2021,
  },

  // VALVULAR HEART DISEASE - MITRAL VALVE
  {
    topic: 'Mitral Valve Disease - EACTS/ESC Guideline',
    keywords: ['mitral stenosis', 'ms', 'mitral regurgitation', 'mr', 'mitral valve repair', 'mitral valve replacement', 'mvr', 'degenerative mitral regurgitation', 'functional mitral regurgitation', 'ischemic mitral regurgitation', 'mitraclip', 'percutaneous mitral repair'],
    system: 'Cardiology',
    guidelineSummary: 'The EACTS/ESC Guideline for Mitral Valve Disease provides comprehensive recommendations for diagnosis, risk stratification, and management of mitral stenosis and mitral regurgitation. The guideline emphasizes mitral valve repair over replacement for degenerative mitral regurgitation, timely intervention for severe symptomatic mitral regurgitation, percutaneous mitral commissurotomy (PMC) for suitable mitral stenosis, and multidisciplinary heart team approach. The guideline addresses primary (degenerative) and secondary (functional/ischemic) mitral regurgitation, mitral stenosis, and transcatheter mitral valve interventions.',
    classIRecommendations: [
      'In patients with severe symptomatic mitral regurgitation, mitral valve surgery is recommended (Class I, Level B)',
      'In patients with severe mitral regurgitation and LVEF <60% or LVESD >40 mm, mitral valve surgery is recommended even if asymptomatic (Class I, Level B)',
      'In patients with severe mitral regurgitation undergoing CABG, concomitant mitral valve surgery is recommended (Class I, Level C)',
      'In patients with degenerative mitral regurgitation, mitral valve repair is recommended over replacement when feasible (Class I, Level B)',
      'In patients with severe symptomatic mitral stenosis and favorable valve anatomy, percutaneous mitral commissurotomy (PMC) is recommended (Class I, Level B)',
      'In patients with severe mitral stenosis not suitable for PMC, mitral valve surgery is recommended (Class I, Level C)',
      'In patients with atrial fibrillation and mitral valve disease, concomitant left atrial appendage occlusion is recommended during surgery (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with asymptomatic severe mitral regurgitation and preserved LV function, mitral valve repair is reasonable if high likelihood of durable repair (>95% success) (Class IIA, Level B)',
      'In patients with severe secondary (functional) mitral regurgitation and LVEF 30-60%, mitral valve surgery is reasonable if undergoing CABG (Class IIA, Level C)',
      'In patients with severe mitral regurgitation and atrial fibrillation, mitral valve surgery is reasonable even if asymptomatic (Class IIA, Level C)',
      'In patients with severe symptomatic mitral regurgitation at high surgical risk, transcatheter edge-to-edge repair (MitraClip) is reasonable (Class IIA, Level B)',
      'In patients with severe mitral stenosis and unfavorable anatomy for PMC, mitral valve replacement is reasonable (Class IIA, Level C)',
      'In patients with rheumatic mitral stenosis and severe pulmonary hypertension (PASP >50 mmHg), mitral valve surgery is reasonable (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with moderate mitral regurgitation undergoing CABG, concomitant mitral valve repair may be considered (Class IIB, Level C)',
      'In patients with severe secondary mitral regurgitation and LVEF <30%, mitral valve surgery may be considered if viable myocardium present (Class IIB, Level C)',
      'In patients with asymptomatic severe mitral regurgitation and new-onset atrial fibrillation, mitral valve surgery may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with severe mitral regurgitation and LVEF <30% without viable myocardium, mitral valve surgery is not recommended (Class III, Level C)',
      'In patients with mild-to-moderate mitral regurgitation, routine mitral valve surgery is not recommended (Class III, Level C)',
      'In patients with severe mitral stenosis and left atrial thrombus, PMC is not recommended until thrombus resolves (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of mitral valve disease guidelines requires systematic evaluation and treatment planning. Diagnosis: Transthoracic echocardiography (TTE) and transesophageal echocardiography (TEE) to assess mitral valve anatomy, mechanism of regurgitation, severity, LV function, LV dimensions. Severe mitral regurgitation: EROA ≥0.4 cm² (primary MR) or ≥0.2 cm² (secondary MR), regurgitant volume ≥60 mL, regurgitant fraction ≥50%, vena contracta ≥7 mm. Severe mitral stenosis: mitral valve area <1.5 cm², mean gradient >10 mmHg, PASP >50 mmHg. Primary (degenerative) MR: leaflet prolapse, flail leaflet, chordal rupture. Secondary (functional) MR: ischemic (post-MI, papillary muscle dysfunction) or non-ischemic (dilated cardiomyopathy, LV dilatation). Symptom assessment: dyspnea, fatigue, heart failure, atrial fibrillation. Exercise testing for asymptomatic patients to assess functional capacity and pulmonary hypertension. Risk stratification: Calculate STS score or EuroSCORE II for surgical risk. Multidisciplinary heart team evaluation to determine surgical vs transcatheter approach. Mitral valve repair vs replacement: Repair preferred for degenerative MR (better long-term outcomes, no anticoagulation, lower mortality). Repair techniques: leaflet resection, chordal transfer, neochordae implantation, annuloplasty ring. Replacement indicated if repair not feasible (extensive leaflet destruction, severe calcification, rheumatic disease). Surgical technique: Median sternotomy or right mini-thoracotomy, cardiopulmonary bypass, cardioplegic arrest. Mitral valve repair with annuloplasty ring or mitral valve replacement with mechanical or bioprosthetic valve. Preserve subvalvular apparatus (chordae tendineae) during replacement to maintain LV function. Percutaneous mitral commissurotomy (PMC): For severe symptomatic mitral stenosis with favorable anatomy (Wilkins score ≤8, no left atrial thrombus, no severe MR). Balloon dilation of fused commissures. Success rate >90%, complication rate <5%. Transcatheter edge-to-edge repair (MitraClip): For severe symptomatic MR at high surgical risk or inoperable. Clip leaflets together to reduce regurgitation. Success rate 70-80%, residual MR common. Perioperative management: Continue aspirin, hold warfarin 5 days before surgery (bridge with heparin if high thrombotic risk). Restart warfarin post-op for mechanical valves (target INR 2.5-3.5 for mitral position). Aspirin 75-100 mg daily for bioprosthetic valves or mitral repair. Monitor for complications: bleeding, stroke, systolic anterior motion (SAM) after repair, paravalvular leak, AV block. Follow-up: TTE at discharge, 1 month, 6 months, 12 months, then annually to assess valve function and LV remodeling.',
    keyPoints: [
      'Mitral valve repair preferred over replacement for degenerative MR',
      'Severe symptomatic MR: surgery indicated regardless of LV function',
      'Asymptomatic severe MR: surgery if LVEF <60% or LVESD >40 mm',
      'Secondary (functional) MR: surgery reasonable if undergoing CABG and LVEF 30-60%',
      'PMC for severe symptomatic mitral stenosis with favorable anatomy (Wilkins score ≤8)',
      'MitraClip for severe symptomatic MR at high surgical risk',
      'Mechanical valve requires warfarin (INR 2.5-3.5 for mitral position)',
      'Bioprosthetic valve or repair: aspirin 75-100 mg daily',
      'Preserve subvalvular apparatus during MVR to maintain LV function',
      'Multidisciplinary heart team evaluation required',
    ],
    eactsUrl: 'https://www.eacts.org/guidelines/mitral-valve-disease',
    publicationYear: 2021,
  },

  // THORACIC AORTIC DISEASE
  {
    topic: 'Thoracic Aortic Disease - EACTS/ESC Guideline',
    keywords: ['aortic aneurysm', 'thoracic aortic aneurysm', 'taa', 'aortic dissection', 'type a dissection', 'type b dissection', 'stanford type a', 'stanford type b', 'marfan syndrome', 'aortic root replacement', 'bentall procedure', 'tevar', 'thoracic endovascular aortic repair'],
    system: 'Cardiology',
    guidelineSummary: 'The EACTS/ESC Guideline for Thoracic Aortic Disease provides comprehensive recommendations for diagnosis, risk stratification, and management of thoracic aortic aneurysms and aortic dissection. The guideline emphasizes emergency surgery for acute type A aortic dissection, elective surgery for thoracic aortic aneurysms ≥55 mm (or smaller in genetic syndromes), medical management for uncomplicated type B dissection, and thoracic endovascular aortic repair (TEVAR) for complicated type B dissection. The guideline addresses ascending aorta, aortic arch, and descending thoracic aorta pathology.',
    classIRecommendations: [
      'In patients with acute type A aortic dissection, emergency surgery is recommended (Class I, Level B)',
      'In patients with ascending aortic aneurysm ≥55 mm, elective surgery is recommended (Class I, Level C)',
      'In patients with Marfan syndrome and ascending aortic aneurysm ≥50 mm, elective surgery is recommended (Class I, Level C)',
      'In patients with bicuspid aortic valve and ascending aortic aneurysm ≥50 mm, elective surgery is recommended (Class I, Level C)',
      'In patients with acute type B aortic dissection with complications (malperfusion, rupture, refractory pain), TEVAR or surgery is recommended (Class I, Level B)',
      'In patients with descending thoracic aortic aneurysm ≥60 mm, elective surgery or TEVAR is recommended (Class I, Level C)',
      'In patients with thoracic aortic disease, blood pressure control (target <140/90 mmHg, <130/80 mmHg in Marfan) is recommended (Class I, Level C)',
      'In patients with thoracic aortic disease, beta-blockers are recommended to reduce aortic wall stress (Class I, Level C)',
    ],
    classIIARecommendations: [
      'In patients with ascending aortic aneurysm 50-54 mm and additional risk factors (family history, rapid growth >3 mm/year, bicuspid valve), elective surgery is reasonable (Class IIA, Level C)',
      'In patients with ascending aortic aneurysm undergoing AVR or CABG, concomitant aortic replacement is reasonable if diameter ≥45 mm (Class IIA, Level C)',
      'In patients with chronic type B aortic dissection and aneurysm ≥60 mm, TEVAR is reasonable (Class IIA, Level B)',
      'In patients with uncomplicated type B aortic dissection, TEVAR is reasonable to promote aortic remodeling (Class IIA, Level B)',
      'In patients with Marfan syndrome and ascending aortic aneurysm 45-50 mm with additional risk factors, elective surgery is reasonable (Class IIA, Level C)',
      'In patients with aortic arch aneurysm ≥55 mm, elective surgery is reasonable (Class IIA, Level C)',
      'In patients with thoracic aortic disease, ARBs (losartan) are reasonable as alternative to beta-blockers (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with descending thoracic aortic aneurysm 55-60 mm, elective TEVAR may be considered (Class IIB, Level C)',
      'In patients with chronic type B aortic dissection and aneurysm 55-60 mm, TEVAR may be considered (Class IIB, Level C)',
      'In patients with aortic arch aneurysm 50-55 mm, elective surgery may be considered if additional risk factors present (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with uncomplicated type B aortic dissection, routine emergency surgery is not recommended (Class III, Level B)',
      'In patients with ascending aortic aneurysm <50 mm without risk factors, routine surgery is not recommended (Class III, Level C)',
      'In patients with thoracic aortic disease and severe comorbidities limiting life expectancy, surgery is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of thoracic aortic disease guidelines requires systematic evaluation and treatment planning. Diagnosis: CT angiography (CTA) or MR angiography (MRA) to assess aortic diameter, extent of aneurysm, presence of dissection, branch vessel involvement. Transthoracic echocardiography (TTE) and transesophageal echocardiography (TEE) for ascending aorta and aortic valve assessment. Aortic diameter measurement: perpendicular to aortic axis at multiple levels (aortic root, ascending aorta, aortic arch, descending thoracic aorta). Acute aortic dissection: Sudden severe chest or back pain (tearing, ripping quality), pulse deficits, blood pressure differential between arms, aortic regurgitation, pericardial effusion. Stanford classification: Type A (involves ascending aorta, requires emergency surgery), Type B (descending aorta only, medical management unless complicated). Complicated type B dissection: malperfusion (visceral, renal, limb), rupture, refractory pain, uncontrolled hypertension, rapid expansion. Genetic syndromes: Marfan syndrome (FBN1 mutation, aortic root dilatation, lens dislocation, skeletal features), Loeys-Dietz syndrome (TGFBR1/2 mutation, arterial tortuosity), Ehlers-Danlos syndrome type IV (COL3A1 mutation, arterial rupture). Surgical indications: Ascending aortic aneurysm ≥55 mm (or ≥50 mm in Marfan, bicuspid valve, family history). Rapid growth >3 mm/year. Symptomatic aneurysm. Acute type A dissection (emergency). Surgical technique: Median sternotomy, cardiopulmonary bypass, hypothermic circulatory arrest for arch involvement. Ascending aorta replacement (supracoronary graft) or aortic root replacement (Bentall procedure with composite valve-graft conduit). Aortic arch replacement (total or hemi-arch) with selective cerebral perfusion. Descending thoracic aorta replacement via left thoracotomy or TEVAR. TEVAR indications: Complicated type B dissection, descending thoracic aortic aneurysm ≥60 mm, chronic type B dissection with aneurysm ≥60 mm. Endovascular stent-graft deployment via femoral access. Medical management: Blood pressure control with beta-blockers (metoprolol, atenolol) to reduce aortic wall stress (target HR 60-80 bpm, BP <140/90 mmHg, <130/80 mmHg in Marfan). ARBs (losartan) for Marfan syndrome to reduce TGF-β signaling. Pain control with opioids. Surveillance: Serial imaging (CTA or MRA) every 6-12 months for aneurysms <50 mm, every 3-6 months for 50-55 mm, every 3 months for rapid growth. Monitor for complications: stroke, paraplegia (spinal cord ischemia), renal failure, visceral ischemia, endoleak (after TEVAR).',
    keyPoints: [
      'Acute type A dissection: emergency surgery (mortality 1-2% per hour without surgery)',
      'Ascending aortic aneurysm ≥55 mm: elective surgery',
      'Marfan syndrome: surgery at ≥50 mm (or ≥45 mm with risk factors)',
      'Bicuspid aortic valve: surgery at ≥50 mm',
      'Complicated type B dissection: TEVAR or surgery',
      'Uncomplicated type B dissection: medical management (beta-blockers, BP control)',
      'Descending thoracic aortic aneurysm ≥60 mm: TEVAR or surgery',
      'Beta-blockers reduce aortic wall stress (target HR 60-80 bpm)',
      'ARBs (losartan) for Marfan syndrome to reduce TGF-β signaling',
      'Serial imaging surveillance every 6-12 months for aneurysms <50 mm',
    ],
    eactsUrl: 'https://www.eacts.org/guidelines/thoracic-aortic-disease',
    publicationYear: 2022,
  },

  // CONGENITAL HEART DISEASE
  {
    topic: 'Congenital Heart Disease - EACTS/ESC Guideline',
    keywords: ['congenital heart disease', 'chd', 'tetralogy of fallot', 'tof', 'ventricular septal defect', 'vsd', 'atrial septal defect', 'asd', 'patent ductus arteriosus', 'pda', 'coarctation of aorta', 'transposition of great arteries', 'tga', 'fontan procedure', 'adult congenital heart disease', 'achd'],
    system: 'Cardiology',
    guidelineSummary: 'The EACTS/ESC Guideline for Congenital Heart Disease provides comprehensive recommendations for diagnosis, risk stratification, and management of congenital heart defects in children and adults. The guideline emphasizes timely surgical or transcatheter intervention for hemodynamically significant defects, lifelong specialized follow-up for adult congenital heart disease (ACHD), and multidisciplinary team approach. The guideline addresses simple defects (ASD, VSD, PDA), complex defects (tetralogy of Fallot, transposition of great arteries, single ventricle), and long-term management of repaired congenital heart disease.',
    classIRecommendations: [
      'In patients with hemodynamically significant atrial septal defect (ASD) with Qp:Qs >1.5, closure is recommended (Class I, Level B)',
      'In patients with hemodynamically significant ventricular septal defect (VSD) with Qp:Qs >2.0 or LV volume overload, closure is recommended (Class I, Level B)',
      'In patients with patent ductus arteriosus (PDA) with LV volume overload, closure is recommended (Class I, Level B)',
      'In patients with coarctation of aorta and peak gradient >20 mmHg, intervention is recommended (Class I, Level C)',
      'In patients with tetralogy of Fallot, complete repair is recommended in infancy (Class I, Level B)',
      'In patients with transposition of great arteries (TGA), arterial switch operation is recommended in neonatal period (Class I, Level B)',
      'In patients with adult congenital heart disease (ACHD), lifelong specialized follow-up is recommended (Class I, Level C)',
      'In patients with ACHD and arrhythmias, electrophysiology evaluation and treatment are recommended (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with secundum ASD and suitable anatomy, transcatheter closure is reasonable as alternative to surgery (Class IIA, Level B)',
      'In patients with perimembranous VSD and suitable anatomy, transcatheter closure is reasonable (Class IIA, Level C)',
      'In patients with PDA, transcatheter closure is reasonable as first-line therapy (Class IIA, Level B)',
      'In patients with coarctation of aorta, balloon angioplasty with stenting is reasonable for native or recurrent coarctation (Class IIA, Level B)',
      'In patients with tetralogy of Fallot and severe pulmonary regurgitation with RV dilatation, pulmonary valve replacement is reasonable (Class IIA, Level B)',
      'In patients with Fontan circulation and protein-losing enteropathy, Fontan conversion or heart transplantation is reasonable (Class IIA, Level C)',
      'In women with ACHD planning pregnancy, preconception counseling and risk assessment are reasonable (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with small ASD (Qp:Qs <1.5) without symptoms, closure may be considered if paradoxical embolism or platypnea-orthodeoxia (Class IIB, Level C)',
      'In patients with small VSD without LV volume overload, closure may be considered if history of endocarditis (Class IIB, Level C)',
      'In patients with Eisenmenger syndrome, heart-lung transplantation may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with small ASD or VSD without hemodynamic significance, routine closure is not recommended (Class III, Level C)',
      'In patients with Eisenmenger syndrome and severe pulmonary vascular disease, defect closure is not recommended (Class III, Level C)',
      'In patients with ACHD and severe pulmonary hypertension (PVR >8 Wood units), pregnancy is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of congenital heart disease guidelines requires systematic evaluation and treatment planning. Diagnosis: Transthoracic echocardiography (TTE) to assess cardiac anatomy, shunt size (Qp:Qs ratio), ventricular function, pulmonary artery pressure. Cardiac MRI for complex anatomy, ventricular volumes, pulmonary regurgitation quantification. Cardiac catheterization for hemodynamic assessment, pulmonary vascular resistance (PVR), vasoreactivity testing. Atrial septal defect (ASD): Secundum ASD (most common, 70%), primum ASD (associated with AV canal defect), sinus venosus ASD (associated with partial anomalous pulmonary venous return). Hemodynamically significant: Qp:Qs >1.5, RV volume overload. Closure indicated if significant shunt. Transcatheter closure (Amplatzer septal occluder) for secundum ASD with suitable anatomy (adequate rims, size <38 mm). Surgical closure for primum, sinus venosus, or large secundum ASD. Ventricular septal defect (VSD): Perimembranous (most common, 80%), muscular, inlet, outlet. Hemodynamically significant: Qp:Qs >2.0, LV volume overload. Closure indicated if significant shunt or history of endocarditis. Transcatheter closure for perimembranous or muscular VSD with suitable anatomy. Surgical closure via median sternotomy, cardiopulmonary bypass, patch closure. Patent ductus arteriosus (PDA): Persistent communication between aorta and pulmonary artery. Hemodynamically significant: LV volume overload, continuous murmur. Transcatheter closure (Amplatzer duct occluder) first-line therapy. Surgical ligation if transcatheter not feasible. Coarctation of aorta: Narrowing of descending aorta (typically at ductus arteriosus insertion). Peak gradient >20 mmHg indicates significant coarctation. Balloon angioplasty with stenting for native or recurrent coarctation. Surgical repair (resection with end-to-end anastomosis or patch aortoplasty) for complex anatomy. Tetralogy of Fallot (TOF): VSD, pulmonary stenosis, overriding aorta, RV hypertrophy. Complete repair in infancy (4-6 months): VSD closure, relief of RV outflow tract obstruction (transannular patch if needed). Long-term complications: pulmonary regurgitation, RV dilatation, arrhythmias. Pulmonary valve replacement if severe PR with RV dilatation (RVEDV >160 mL/m²). Transposition of great arteries (TGA): Aorta arises from RV, pulmonary artery from LV. Arterial switch operation (Jatene procedure) in neonatal period (first 2 weeks of life): switch great arteries, reimplant coronary arteries. Fontan procedure: For single ventricle physiology (tricuspid atresia, hypoplastic left heart syndrome). Staged palliation: Stage 1 (Norwood or hybrid), Stage 2 (bidirectional Glenn), Stage 3 (Fontan completion). Long-term complications: arrhythmias, protein-losing enteropathy, plastic bronchitis, thromboembolism. Adult congenital heart disease (ACHD): Lifelong specialized follow-up required. Monitor for arrhythmias (atrial flutter, VT), heart failure, pulmonary hypertension, endocarditis. Electrophysiology evaluation and ablation for arrhythmias. Pregnancy counseling: Risk stratification with modified WHO classification. High-risk conditions: Eisenmenger syndrome, severe pulmonary hypertension, Fontan circulation, severe systemic ventricular dysfunction.',
    keyPoints: [
      'ASD closure if Qp:Qs >1.5; transcatheter closure for secundum ASD',
      'VSD closure if Qp:Qs >2.0 or LV volume overload',
      'PDA: transcatheter closure first-line therapy',
      'Coarctation: intervention if peak gradient >20 mmHg; balloon angioplasty with stenting',
      'Tetralogy of Fallot: complete repair in infancy (4-6 months)',
      'TGA: arterial switch operation in neonatal period (first 2 weeks)',
      'Fontan procedure for single ventricle: staged palliation',
      'ACHD: lifelong specialized follow-up for arrhythmias, heart failure, pulmonary hypertension',
      'Pregnancy in ACHD: risk stratification with modified WHO classification',
      'Eisenmenger syndrome: pregnancy contraindicated (high maternal mortality)',
    ],
    eactsUrl: 'https://www.eacts.org/guidelines/congenital-heart-disease',
    publicationYear: 2020,
  },
];

/**
 * Search function to find relevant EACTS guideline entries based on query
 */
export function searchEACTSGuidelines(query: string): EACTSGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = eactsGuidelinesKnowledge.map(entry => {
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

  console.log(`EACTS Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get EACTS guideline by exact topic name
 */
export function getEACTSGuidelineByTopic(topic: string): EACTSGuidelineEntry | undefined {
  return eactsGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all EACTS guidelines for a specific system
 */
export function getEACTSGuidelinesBySystem(system: string): EACTSGuidelineEntry[] {
  return eactsGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
