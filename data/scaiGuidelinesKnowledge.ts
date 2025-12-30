
/**
 * Society for Cardiovascular Angiography and Interventions (SCAI) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the Society for Cardiovascular
 * Angiography and Interventions. SCAI provides evidence-based guidelines for interventional
 * cardiology procedures, percutaneous coronary intervention (PCI), structural heart interventions,
 * and peripheral vascular interventions.
 * 
 * INTEGRATION PHASE: SCAI Guidelines (Phase 15)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Classification of recommendations (Class I, IIA, IIB, III)
 * - Level of evidence (A, B, C)
 * - Clinical implementation guidance
 * - SCAI guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from SCAI guidelines but presented
 * in an original format for medical education purposes.
 */

export interface SCAIGuidelineEntry {
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
  scaiUrl: string;
  publicationYear: number;
}

export const scaiGuidelinesKnowledge: SCAIGuidelineEntry[] = [
  // PERCUTANEOUS CORONARY INTERVENTION (PCI)
  {
    topic: 'Percutaneous Coronary Intervention (PCI) - SCAI Guideline',
    keywords: ['pci', 'percutaneous coronary intervention', 'angioplasty', 'stent', 'coronary stenting', 'ptca', 'balloon angioplasty', 'drug eluting stent', 'des', 'bare metal stent', 'bms', 'coronary intervention'],
    system: 'Cardiology',
    guidelineSummary: 'The SCAI Guideline for Percutaneous Coronary Intervention provides comprehensive recommendations for patient selection, procedural techniques, device selection, and post-procedural management. The guideline emphasizes appropriate use criteria for PCI, optimal antiplatelet therapy, radial access as preferred approach, drug-eluting stents (DES) over bare-metal stents (BMS), intravascular imaging guidance, and management of complications. The guideline addresses PCI for stable ischemic heart disease, acute coronary syndromes, complex lesions (left main, bifurcations, chronic total occlusions), and high-risk patients.',
    classIRecommendations: [
      'In patients undergoing PCI, dual antiplatelet therapy (DAPT) with aspirin and P2Y12 inhibitor (clopidogrel, prasugrel, or ticagrelor) is recommended to reduce stent thrombosis and cardiovascular events (Class I, Level A)',
      'In patients undergoing PCI, radial artery access is recommended over femoral access to reduce bleeding complications and improve outcomes (Class I, Level A)',
      'In patients undergoing PCI, drug-eluting stents (DES) are recommended over bare-metal stents (BMS) to reduce target lesion revascularization (Class I, Level A)',
      'In patients with STEMI, primary PCI is recommended over fibrinolytic therapy when performed by experienced operators within 120 minutes of first medical contact (Class I, Level A)',
      'In patients with NSTEMI and high-risk features (elevated troponin, dynamic ECG changes, GRACE score >140), early invasive strategy with coronary angiography and PCI is recommended within 24 hours (Class I, Level A)',
      'In patients undergoing PCI, intravascular imaging (IVUS or OCT) is recommended for complex lesions (left main, bifurcations, long lesions) to optimize stent deployment (Class I, Level B)',
      'In patients undergoing PCI, fractional flow reserve (FFR) or instantaneous wave-free ratio (iFR) is recommended to assess intermediate coronary stenoses (50-90% diameter stenosis) (Class I, Level A)',
      'In patients with cardiogenic shock complicating acute MI, immediate PCI of the culprit lesion is recommended (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with stable ischemic heart disease and significant ischemia (>10% myocardium), PCI is reasonable to improve symptoms and reduce angina (Class IIA, Level B)',
      'In patients undergoing PCI for complex lesions, intravascular imaging (IVUS or OCT) is reasonable to guide stent sizing and optimize results (Class IIA, Level A)',
      'In patients with chronic total occlusion (CTO) and significant ischemia or angina despite medical therapy, CTO PCI is reasonable (Class IIA, Level B)',
      'In patients undergoing PCI, bivalirudin is reasonable as alternative to unfractionated heparin plus glycoprotein IIb/IIIa inhibitor to reduce bleeding (Class IIA, Level B)',
      'In patients with left main coronary artery disease and low-to-intermediate anatomic complexity (SYNTAX score ≤22), PCI is reasonable as alternative to CABG (Class IIA, Level B)',
      'In patients undergoing PCI, mechanical circulatory support (Impella, IABP) is reasonable for high-risk PCI or cardiogenic shock (Class IIA, Level B)',
      'In patients with multivessel disease and diabetes, CABG is reasonable over PCI to improve long-term outcomes (Class IIA, Level B)',
      'In patients undergoing PCI, ticagrelor or prasugrel is reasonable over clopidogrel for more potent platelet inhibition (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with stable ischemic heart disease without significant ischemia, PCI may be considered for symptom relief (Class IIB, Level C)',
      'In patients with unprotected left main disease and high anatomic complexity (SYNTAX score >32), PCI may be considered if CABG is not feasible (Class IIB, Level B)',
      'In patients undergoing PCI, rotational atherectomy may be considered for heavily calcified lesions (Class IIB, Level C)',
      'In patients with acute MI and multivessel disease, complete revascularization with PCI of non-culprit lesions may be considered (Class IIB, Level B)',
    ],
    classIIIRecommendations: [
      'In patients with stable ischemic heart disease and no significant ischemia (<10% myocardium), routine PCI is not recommended (Class III, Level A)',
      'In patients with left main disease and high SYNTAX score (>32) who are good surgical candidates, PCI is not recommended over CABG (Class III, Level B)',
      'In patients with chronic stable angina and single-vessel disease amenable to medical therapy, routine PCI is not recommended (Class III, Level B)',
      'In patients undergoing PCI, bare-metal stents should not be used when drug-eluting stents are available (Class III, Level A)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A evidence from large randomized controlled trials',
    clinicalImplementation: 'Implementation of PCI guidelines requires systematic patient selection and procedural planning. Pre-procedure assessment: Evaluate appropriateness using SCAI appropriate use criteria; assess bleeding risk (HAS-BLED score), renal function (CrCl), and contrast allergy. For STEMI, activate cath lab immediately, target door-to-balloon time <90 minutes. For NSTEMI with high-risk features (elevated troponin, dynamic ST changes, GRACE score >140), perform angiography within 24 hours. For stable ischemic heart disease, document ischemia with stress testing or FFR/iFR before PCI. Procedural technique: Use radial access (reduces bleeding vs femoral); administer DAPT (aspirin 325 mg + P2Y12 inhibitor loading dose: ticagrelor 180 mg, prasugrel 60 mg, or clopidogrel 600 mg); use unfractionated heparin (70-100 U/kg) or bivalirudin (0.75 mg/kg bolus + 1.75 mg/kg/hr infusion). Perform FFR/iFR for intermediate lesions (50-90% stenosis); FFR ≤0.80 or iFR ≤0.89 indicates hemodynamically significant stenosis requiring PCI. Use intravascular imaging (IVUS or OCT) for complex lesions (left main, bifurcations, long lesions, CTO) to guide stent sizing and optimize deployment. Implant drug-eluting stents (DES) preferentially; newer-generation DES (everolimus, zotarolimus) have lower stent thrombosis rates than first-generation DES. For bifurcation lesions, use provisional single-stent strategy unless true bifurcation with large side branch. For CTO, use antegrade or retrograde approach with specialized equipment. Post-procedure management: Continue DAPT for minimum 6-12 months (longer for ACS); aspirin 81 mg daily indefinitely + P2Y12 inhibitor (ticagrelor 90 mg BID, prasugrel 10 mg daily, or clopidogrel 75 mg daily). Monitor for complications: bleeding, vascular access site complications, contrast-induced nephropathy, stent thrombosis. Discharge on high-intensity statin (atorvastatin 80 mg or rosuvastatin 40 mg), beta-blocker, ACE-I/ARB. Follow-up at 1 month, 6 months, 12 months with stress testing if recurrent symptoms.',
    keyPoints: [
      'DAPT (aspirin + P2Y12 inhibitor) for minimum 6-12 months post-PCI',
      'Radial access preferred over femoral (reduces bleeding)',
      'Drug-eluting stents (DES) preferred over bare-metal stents (BMS)',
      'FFR/iFR for intermediate lesions (50-90% stenosis); FFR ≤0.80 or iFR ≤0.89 indicates need for PCI',
      'Intravascular imaging (IVUS/OCT) for complex lesions (left main, bifurcations, CTO)',
      'Primary PCI for STEMI within 120 minutes of first medical contact',
      'Early invasive strategy for NSTEMI with high-risk features within 24 hours',
      'Ticagrelor or prasugrel preferred over clopidogrel for ACS',
      'CABG preferred over PCI for multivessel disease with diabetes or high SYNTAX score',
      'Complete revascularization for multivessel disease in STEMI may be considered',
    ],
    scaiUrl: 'https://www.scai.org/clinical-guidelines/percutaneous-coronary-intervention',
    publicationYear: 2021,
  },

  // CARDIOGENIC SHOCK
  {
    topic: 'Cardiogenic Shock - SCAI Classification and Management',
    keywords: ['cardiogenic shock', 'shock', 'hemodynamic support', 'mechanical circulatory support', 'mcs', 'impella', 'iabp', 'intra-aortic balloon pump', 'ecmo', 'scai shock stages'],
    system: 'Cardiology',
    guidelineSummary: 'The SCAI Cardiogenic Shock Classification provides a standardized framework for risk stratification and management of cardiogenic shock. The classification defines five stages (A-E) based on clinical and hemodynamic parameters: Stage A (at risk), Stage B (beginning shock), Stage C (classic shock), Stage D (deteriorating shock), and Stage E (extremis). The guideline emphasizes early recognition, hemodynamic assessment, appropriate use of mechanical circulatory support (MCS), and multidisciplinary team-based care. The guideline addresses acute MI-related cardiogenic shock, non-ischemic cardiogenic shock, and selection of MCS devices.',
    classIRecommendations: [
      'In patients with cardiogenic shock, immediate hemodynamic assessment with physical examination, echocardiography, and invasive monitoring is recommended (Class I, Level C)',
      'In patients with acute MI-related cardiogenic shock, immediate coronary angiography and revascularization (PCI or CABG) is recommended (Class I, Level B)',
      'In patients with cardiogenic shock, inotropic support (dobutamine, milrinone) is recommended to improve cardiac output and end-organ perfusion (Class I, Level B)',
      'In patients with cardiogenic shock refractory to medical therapy, mechanical circulatory support (IABP, Impella, ECMO) is recommended (Class I, Level B)',
      'In patients with cardiogenic shock, multidisciplinary shock team consultation is recommended for optimal management (Class I, Level C)',
      'In patients with cardiogenic shock, continuous hemodynamic monitoring with pulmonary artery catheter is recommended to guide therapy (Class I, Level C)',
      'In patients with cardiogenic shock and severe hypoxemia, mechanical ventilation is recommended (Class I, Level C)',
    ],
    classIIARecommendations: [
      'In patients with SCAI Stage C or D cardiogenic shock, early mechanical circulatory support (Impella, ECMO) is reasonable before hemodynamic deterioration (Class IIA, Level B)',
      'In patients with acute MI-related cardiogenic shock undergoing high-risk PCI, prophylactic mechanical circulatory support (Impella, IABP) is reasonable (Class IIA, Level B)',
      'In patients with cardiogenic shock and RV failure, inotropic support with dobutamine or milrinone is reasonable (Class IIA, Level C)',
      'In patients with refractory cardiogenic shock, transfer to advanced heart failure center for consideration of durable LVAD or transplantation is reasonable (Class IIA, Level C)',
      'In patients with cardiogenic shock, vasopressor support (norepinephrine, vasopressin) is reasonable to maintain adequate perfusion pressure (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with SCAI Stage B cardiogenic shock, prophylactic IABP may be considered (Class IIB, Level C)',
      'In patients with cardiogenic shock and severe biventricular failure, VA-ECMO may be considered as bridge to recovery or decision (Class IIB, Level C)',
      'In patients with acute MI-related cardiogenic shock, complete revascularization of non-culprit lesions may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with cardiogenic shock, routine use of IABP without hemodynamic assessment is not recommended (Class III, Level B)',
      'In patients with end-stage heart failure and multiple comorbidities limiting life expectancy, aggressive MCS is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of SCAI cardiogenic shock classification requires systematic assessment and staged management. SCAI Shock Stages: Stage A (at risk) - no signs of shock but risk factors present (large MI, severe AS, acute MR); Stage B (beginning shock) - relative hypotension (SBP <90 mmHg or MAP <60 mmHg), tachycardia (HR >100 bpm), signs of hypoperfusion (cool extremities, delayed capillary refill), elevated lactate (>2 mmol/L); Stage C (classic shock) - hypotension requiring vasopressors/inotropes, signs of hypoperfusion, elevated lactate (>2 mmol/L), cardiac index <2.2 L/min/m²; Stage D (deteriorating shock) - worsening despite initial interventions, requiring escalation of support, rising lactate, worsening renal function; Stage E (extremis) - cardiac arrest, CPR, VA-ECMO. Initial assessment: Physical exam (cool extremities, altered mental status, oliguria), labs (lactate, troponin, BNP, renal function), ECG, echocardiography (LVEF, RV function, valvular disease, tamponade), invasive monitoring (arterial line, PA catheter for cardiac output, PCWP, SVR). Management by stage: Stage A - optimize medical therapy, close monitoring; Stage B - IV diuretics, consider inotropes (dobutamine 2.5-10 mcg/kg/min), vasopressors if needed (norepinephrine 0.05-0.5 mcg/kg/min); Stage C - inotropes + vasopressors, consider MCS (IABP for temporary support, Impella CP/5.0 for LV support, VA-ECMO for biventricular failure); Stage D - escalate MCS, consider durable LVAD or transplant evaluation; Stage E - CPR, VA-ECMO, transfer to advanced center. For acute MI-related cardiogenic shock: immediate coronary angiography and revascularization (PCI of culprit lesion, consider complete revascularization if stable), mechanical circulatory support during PCI if needed. Device selection: IABP (augments diastolic pressure, reduces afterload, cardiac output increase ~0.5 L/min), Impella CP (cardiac output support ~3.5 L/min), Impella 5.0 (cardiac output support ~5 L/min), VA-ECMO (full cardiopulmonary support, cardiac output up to 6-7 L/min). Multidisciplinary shock team: interventional cardiologist, heart failure specialist, cardiac surgeon, intensivist, perfusionist. Monitor for complications: bleeding, limb ischemia, hemolysis, infection, renal failure. Wean support as hemodynamics improve.',
    keyPoints: [
      'SCAI Shock Stages: A (at risk), B (beginning), C (classic), D (deteriorating), E (extremis)',
      'Immediate coronary angiography and revascularization for acute MI-related cardiogenic shock',
      'Hemodynamic assessment with PA catheter to guide therapy',
      'Inotropes (dobutamine, milrinone) for low cardiac output',
      'Vasopressors (norepinephrine) for hypotension',
      'Mechanical circulatory support (IABP, Impella, ECMO) for refractory shock',
      'Early MCS before hemodynamic deterioration (Stage C or D)',
      'Multidisciplinary shock team for optimal management',
      'IABP: ~0.5 L/min cardiac output increase',
      'Impella CP: ~3.5 L/min support; Impella 5.0: ~5 L/min support',
      'VA-ECMO: full cardiopulmonary support up to 6-7 L/min',
    ],
    scaiUrl: 'https://www.scai.org/cardiogenic-shock-classification',
    publicationYear: 2019,
  },

  // TRANSCATHETER AORTIC VALVE REPLACEMENT (TAVR)
  {
    topic: 'Transcatheter Aortic Valve Replacement (TAVR) - SCAI Guideline',
    keywords: ['tavr', 'transcatheter aortic valve replacement', 'tavi', 'transcatheter aortic valve implantation', 'aortic stenosis', 'as', 'severe aortic stenosis', 'structural heart intervention'],
    system: 'Cardiology',
    guidelineSummary: 'The SCAI Guideline for Transcatheter Aortic Valve Replacement provides comprehensive recommendations for patient selection, procedural planning, device selection, and post-procedural management for TAVR. The guideline emphasizes appropriate patient selection using multidisciplinary heart team approach, risk stratification with STS score, optimal access site selection (transfemoral preferred), valve sizing with multimodality imaging (CT, echocardiography), and management of complications (vascular complications, conduction abnormalities, paravalvular leak). The guideline addresses TAVR for severe symptomatic aortic stenosis across all surgical risk categories (low, intermediate, high, prohibitive).',
    classIRecommendations: [
      'In patients with severe symptomatic aortic stenosis and prohibitive surgical risk, TAVR is recommended (Class I, Level B)',
      'In patients with severe symptomatic aortic stenosis and high surgical risk (STS score >8%), TAVR is recommended as alternative to surgical AVR (Class I, Level A)',
      'In patients with severe symptomatic aortic stenosis and intermediate surgical risk (STS score 4-8%), TAVR is recommended as alternative to surgical AVR (Class I, Level A)',
      'In patients with severe symptomatic aortic stenosis and low surgical risk (STS score <4%), TAVR is recommended as alternative to surgical AVR (Class I, Level A)',
      'In patients undergoing TAVR, multidisciplinary heart team evaluation (interventional cardiologist, cardiac surgeon, imaging specialist) is recommended (Class I, Level C)',
      'In patients undergoing TAVR, transfemoral access is recommended as preferred approach when feasible (Class I, Level B)',
      'In patients undergoing TAVR, multidetector CT is recommended for valve sizing and procedural planning (Class I, Level B)',
      'In patients undergoing TAVR, conscious sedation is recommended over general anesthesia when feasible (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with severe asymptomatic aortic stenosis and LVEF <50%, TAVR is reasonable (Class IIA, Level C)',
      'In patients with severe aortic stenosis and other cardiac surgery indication (CABG, mitral valve), combined TAVR and surgery is reasonable (Class IIA, Level C)',
      'In patients undergoing TAVR with transfemoral access not feasible, alternative access (transapical, transaortic, transcarotid, transcaval) is reasonable (Class IIA, Level B)',
      'In patients undergoing TAVR, cerebral embolic protection devices are reasonable to reduce stroke risk (Class IIA, Level B)',
      'In patients post-TAVR with new-onset atrial fibrillation, anticoagulation is reasonable (Class IIA, Level C)',
      'In patients post-TAVR with high-degree AV block, permanent pacemaker is reasonable (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with moderate aortic stenosis undergoing other cardiac surgery, concomitant TAVR may be considered (Class IIB, Level C)',
      'In patients with bicuspid aortic valve and severe aortic stenosis, TAVR may be considered in select cases (Class IIB, Level C)',
      'In patients post-TAVR without atrial fibrillation, extended DAPT beyond 6 months may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with severe aortic stenosis and life expectancy <1 year due to non-cardiac conditions, TAVR is not recommended (Class III, Level C)',
      'In patients with severe aortic stenosis and active endocarditis, TAVR is not recommended (Class III, Level C)',
      'In patients with severe aortic stenosis and intracardiac thrombus, TAVR should be deferred until thrombus resolves (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of TAVR guidelines requires systematic patient evaluation and procedural planning. Patient selection: Multidisciplinary heart team evaluation including interventional cardiologist, cardiac surgeon, imaging specialist, anesthesiologist. Assess surgical risk with STS score: low risk (<4%), intermediate risk (4-8%), high risk (>8%), prohibitive risk (not surgical candidate). Confirm severe aortic stenosis: aortic valve area <1.0 cm², mean gradient >40 mmHg, peak velocity >4 m/s. Assess symptoms: dyspnea, angina, syncope, heart failure. Pre-procedure imaging: Transthoracic echocardiography (assess AS severity, LVEF, other valvular disease), multidetector CT (measure aortic annulus diameter, assess coronary anatomy, evaluate peripheral vasculature for access), coronary angiography (assess for significant CAD requiring PCI before TAVR). Valve sizing: Measure aortic annulus area and perimeter on CT; select valve size based on manufacturer recommendations (typically 10-20% oversizing to prevent paravalvular leak). Access site selection: Transfemoral (preferred, >90% of cases) - requires iliofemoral vessels ≥5-6 mm diameter; Alternative access if transfemoral not feasible - transapical (via LV apex), transaortic (via ascending aorta), transcarotid (via carotid artery), transcaval (via IVC to aorta). Procedural technique: Conscious sedation preferred over general anesthesia (faster recovery, lower complications); Rapid ventricular pacing during valve deployment (reduces cardiac output, stabilizes valve); Balloon valvuloplasty before valve deployment (pre-dilation) or after (post-dilation) as needed; Confirm valve position and function with fluoroscopy and echocardiography. Post-procedure management: Monitor for complications - vascular complications (bleeding, dissection, perforation), conduction abnormalities (AV block requiring pacemaker in 10-20%), paravalvular leak (mild acceptable, moderate-severe may require intervention), stroke (1-3% risk). Antiplatelet therapy: aspirin 81 mg daily + clopidogrel 75 mg daily for 3-6 months, then aspirin alone. Permanent pacemaker if high-degree AV block develops. Echocardiography at discharge, 30 days, 1 year to assess valve function. Follow-up with heart team at 30 days, 6 months, 12 months.',
    keyPoints: [
      'TAVR is recommended for severe symptomatic AS across all surgical risk categories',
      'Multidisciplinary heart team evaluation required',
      'Transfemoral access preferred (>90% of cases)',
      'Multidetector CT for valve sizing and procedural planning',
      'Conscious sedation preferred over general anesthesia',
      'Valve sizing: 10-20% oversizing based on aortic annulus area',
      'DAPT (aspirin + clopidogrel) for 3-6 months post-TAVR',
      'Permanent pacemaker for high-degree AV block (10-20% of cases)',
      'Monitor for complications: vascular, conduction abnormalities, paravalvular leak, stroke',
      'Alternative access (transapical, transaortic, transcarotid) if transfemoral not feasible',
    ],
    scaiUrl: 'https://www.scai.org/tavr-guidelines',
    publicationYear: 2020,
  },

  // PERIPHERAL ARTERY DISEASE INTERVENTION
  {
    topic: 'Peripheral Artery Disease Intervention - SCAI Guideline',
    keywords: ['peripheral artery disease', 'pad', 'peripheral vascular disease', 'pvd', 'claudication', 'critical limb ischemia', 'cli', 'peripheral intervention', 'angioplasty', 'stent', 'atherectomy'],
    system: 'Cardiology',
    guidelineSummary: 'The SCAI Guideline for Peripheral Artery Disease Intervention provides evidence-based recommendations for endovascular treatment of lower extremity PAD. The guideline emphasizes appropriate patient selection, optimal medical therapy, endovascular intervention for claudication refractory to medical therapy or critical limb ischemia, device selection (balloon angioplasty, stenting, atherectomy), and post-procedural management. The guideline addresses interventions for aortoiliac disease, femoropopliteal disease, and infrapopliteal disease.',
    classIRecommendations: [
      'In patients with PAD, antiplatelet therapy (aspirin or clopidogrel) is recommended to reduce cardiovascular events (Class I, Level A)',
      'In patients with PAD, high-intensity statin therapy is recommended to reduce cardiovascular events (Class I, Level A)',
      'In patients with PAD and hypertension, ACE inhibitor or ARB is recommended to reduce cardiovascular events (Class I, Level A)',
      'In patients with PAD and diabetes, glycemic control with target HbA1c <7% is recommended (Class I, Level B)',
      'In patients with PAD and claudication, supervised exercise therapy is recommended as first-line treatment (Class I, Level A)',
      'In patients with critical limb ischemia (CLI), revascularization (endovascular or surgical) is recommended to prevent limb loss (Class I, Level B)',
      'In patients with aortoiliac disease and claudication refractory to medical therapy, endovascular intervention (angioplasty with or without stenting) is recommended (Class I, Level A)',
      'In patients with femoropopliteal disease and claudication refractory to medical therapy, endovascular intervention is recommended (Class I, Level B)',
    ],
    classIIARecommendations: [
      'In patients with PAD and claudication, cilostazol is reasonable to improve walking distance (Class IIA, Level A)',
      'In patients with femoropopliteal disease, drug-coated balloon (DCB) angioplasty is reasonable to reduce restenosis (Class IIA, Level B)',
      'In patients with femoropopliteal disease, drug-eluting stents are reasonable to reduce restenosis compared to bare-metal stents (Class IIA, Level B)',
      'In patients with heavily calcified peripheral lesions, atherectomy is reasonable to facilitate balloon angioplasty (Class IIA, Level C)',
      'In patients with CLI and infrapopliteal disease, endovascular intervention is reasonable as first-line revascularization strategy (Class IIA, Level B)',
      'In patients with PAD undergoing endovascular intervention, dual antiplatelet therapy (aspirin + clopidogrel) for 1 month is reasonable (Class IIA, Level C)',
      'In patients with PAD and high cardiovascular risk, rivaroxaban 2.5 mg BID plus aspirin is reasonable to reduce cardiovascular events (Class IIA, Level B)',
    ],
    classIIBRecommendations: [
      'In patients with aortoiliac disease, covered stents may be considered to improve patency (Class IIB, Level C)',
      'In patients with femoropopliteal disease, bypass surgery may be considered for long occlusions (>20 cm) (Class IIB, Level C)',
      'In patients with CLI and no-option for revascularization, amputation may be considered (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with asymptomatic PAD, routine endovascular intervention is not recommended (Class III, Level C)',
      'In patients with mild claudication responsive to medical therapy, endovascular intervention is not recommended (Class III, Level C)',
      'In patients with PAD, pentoxifylline is not recommended as it does not improve walking distance (Class III, Level B)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level A or B evidence from randomized controlled trials',
    clinicalImplementation: 'Implementation of PAD intervention guidelines requires systematic assessment and staged management. Diagnosis: Ankle-brachial index (ABI) - normal 1.0-1.4, PAD <0.9, severe PAD <0.5; Toe-brachial index (TBI) if ABI unreliable (calcified vessels); Duplex ultrasound to localize lesions; CT angiography or MR angiography for anatomic assessment. Classification: Fontaine classification - Stage I (asymptomatic), Stage IIa (mild claudication >200 m), Stage IIb (moderate-severe claudication <200 m), Stage III (rest pain), Stage IV (tissue loss/gangrene). Rutherford classification - Category 0 (asymptomatic), Category 1-3 (claudication), Category 4 (rest pain), Category 5-6 (tissue loss). Medical therapy (all patients): Antiplatelet therapy - aspirin 81 mg daily or clopidogrel 75 mg daily; High-intensity statin - atorvastatin 80 mg or rosuvastatin 40 mg; ACE-I or ARB for hypertension; Glycemic control for diabetes (HbA1c <7%); Smoking cessation; Supervised exercise therapy - 30-45 min walking, 3 times/week for 12 weeks. Claudication management: First-line - supervised exercise therapy + medical therapy; Second-line - cilostazol 100 mg BID (contraindicated in heart failure); Third-line - endovascular intervention if refractory to medical therapy and significantly impaired quality of life. Critical limb ischemia (CLI): Urgent revascularization to prevent limb loss; Endovascular-first approach for most patients; Surgical bypass if endovascular not feasible or failed. Endovascular intervention: Aortoiliac disease - balloon angioplasty + selective stenting (for flow-limiting dissection or residual stenosis >30%); Femoropopliteal disease - balloon angioplasty (plain or drug-coated balloon), stenting for suboptimal result, drug-eluting stents for long lesions; Infrapopliteal disease - balloon angioplasty (plain preferred), avoid stenting unless flow-limiting dissection. Atherectomy: For heavily calcified lesions to facilitate balloon angioplasty; Directional, rotational, or orbital atherectomy. Post-procedure management: DAPT (aspirin + clopidogrel) for 1 month, then aspirin alone; Consider rivaroxaban 2.5 mg BID + aspirin for high-risk patients; Surveillance duplex ultrasound at 6 months, 12 months, then annually; ABI at each visit. Restenosis management: Repeat endovascular intervention or surgical bypass.',
    keyPoints: [
      'Medical therapy for all PAD patients: antiplatelet, statin, ACE-I/ARB, smoking cessation',
      'Supervised exercise therapy first-line for claudication',
      'Endovascular intervention for claudication refractory to medical therapy',
      'Urgent revascularization for critical limb ischemia (CLI)',
      'Aortoiliac disease: balloon angioplasty + selective stenting',
      'Femoropopliteal disease: drug-coated balloon or drug-eluting stent',
      'Infrapopliteal disease: plain balloon angioplasty preferred',
      'Atherectomy for heavily calcified lesions',
      'DAPT (aspirin + clopidogrel) for 1 month post-intervention',
      'Rivaroxaban 2.5 mg BID + aspirin for high cardiovascular risk',
    ],
    scaiUrl: 'https://www.scai.org/pad-intervention-guidelines',
    publicationYear: 2018,
  },

  // CHRONIC TOTAL OCCLUSION (CTO) PCI
  {
    topic: 'Chronic Total Occlusion (CTO) PCI - SCAI Expert Consensus',
    keywords: ['chronic total occlusion', 'cto', 'cto pci', 'total occlusion', 'occluded artery', 'retrograde approach', 'antegrade approach', 'collateral circulation'],
    system: 'Cardiology',
    guidelineSummary: 'The SCAI Expert Consensus on Chronic Total Occlusion (CTO) PCI provides comprehensive recommendations for patient selection, procedural techniques, and management of CTO interventions. The guideline emphasizes appropriate patient selection (significant ischemia, angina despite medical therapy), operator experience and training, use of specialized equipment and techniques (antegrade and retrograde approaches), and management of complications. CTO PCI has evolved with improved success rates (>85%) and acceptable complication rates when performed by experienced operators.',
    classIRecommendations: [
      'In patients with CTO and significant ischemia (>10% myocardium) or angina despite optimal medical therapy, CTO PCI is recommended to improve symptoms and quality of life (Class I, Level B)',
      'In patients undergoing CTO PCI, dual arterial access (femoral and radial) is recommended to facilitate antegrade and retrograde approaches (Class I, Level C)',
      'In patients undergoing CTO PCI, intravascular imaging (IVUS or OCT) is recommended to confirm wire position in true lumen and optimize stent deployment (Class I, Level B)',
      'In patients undergoing CTO PCI, use of specialized CTO equipment (microcatheters, guidewires, re-entry devices) is recommended (Class I, Level C)',
      'In patients post-CTO PCI, dual antiplatelet therapy (aspirin + P2Y12 inhibitor) for minimum 12 months is recommended (Class I, Level C)',
    ],
    classIIARecommendations: [
      'In patients with CTO and viable myocardium, CTO PCI is reasonable to improve LV function (Class IIA, Level B)',
      'In patients undergoing CTO PCI, hybrid approach (combining antegrade and retrograde techniques) is reasonable to improve success rates (Class IIA, Level B)',
      'In patients with CTO and failed antegrade approach, retrograde approach via collateral channels is reasonable (Class IIA, Level B)',
      'In patients undergoing complex CTO PCI, use of re-entry devices (CrossBoss, Stingray) is reasonable to facilitate wire crossing (Class IIA, Level C)',
      'In patients with CTO, referral to high-volume CTO operator is reasonable to improve success rates and reduce complications (Class IIA, Level C)',
    ],
    classIIBRecommendations: [
      'In patients with CTO and no significant ischemia, CTO PCI may be considered for symptom relief (Class IIB, Level C)',
      'In patients with CTO and prior CABG with patent grafts, CTO PCI may be considered for completeness of revascularization (Class IIB, Level C)',
    ],
    classIIIRecommendations: [
      'In patients with CTO and no symptoms or ischemia, routine CTO PCI is not recommended (Class III, Level C)',
      'In patients with CTO and high procedural risk (severe calcification, long occlusion >40 mm, poor distal vessel), CTO PCI by inexperienced operator is not recommended (Class III, Level C)',
    ],
    levelOfEvidence: 'Multiple levels: Class I recommendations are primarily Level B or C evidence from observational studies and expert consensus',
    clinicalImplementation: 'Implementation of CTO PCI requires specialized training and equipment. Patient selection: Confirm CTO (100% occlusion >3 months duration) on coronary angiography; Document significant ischemia (>10% myocardium) with stress testing or FFR of collateral-supplying vessel; Assess symptoms (angina, dyspnea) despite optimal medical therapy; Evaluate viability of myocardium supplied by CTO vessel (nuclear imaging, cardiac MRI). Pre-procedure planning: Review prior angiograms to assess CTO characteristics; Assess CTO complexity with J-CTO score (0-5 points): entry shape (blunt vs tapered), calcification, bending >45°, occlusion length >20 mm, prior failed attempt; High J-CTO score (≥3) predicts lower success, higher complications. Procedural approach: Dual arterial access (femoral for antegrade, radial for retrograde or contralateral injection); Antegrade approach (first-line): wire escalation (soft → intermediate → stiff guidewires), parallel wire technique, subintimal tracking and re-entry (STAR); Retrograde approach (if antegrade fails): access via collateral channels (septal or epicardial collaterals), retrograde wire crossing, reverse CART (controlled antegrade and retrograde tracking); Hybrid approach: combine antegrade and retrograde techniques based on anatomy. Specialized equipment: Microcatheters (Corsair, Finecross) for support; CTO guidewires (Fielder XT, Pilot 200, Gaia series, Confianza Pro); Re-entry devices (CrossBoss catheter, Stingray balloon); Intravascular imaging (IVUS or OCT) to confirm true lumen position. Stent deployment: Use drug-eluting stents; Optimize stent expansion with high-pressure post-dilation (>18 atm); Confirm with IVUS/OCT (minimum stent area >5.5 mm² for proximal vessels, >4.5 mm² for distal vessels). Post-procedure management: DAPT (aspirin 81 mg + ticagrelor 90 mg BID or prasugrel 10 mg daily) for minimum 12 months; High-intensity statin; Follow-up at 1 month, 6 months, 12 months with stress testing if recurrent symptoms. Complications: Perforation (1-3%, manage with prolonged balloon inflation, covered stent, coil embolization); Donor vessel dissection from retrograde approach (<1%); Contrast-induced nephropathy (hydration, minimize contrast). Success rates: Experienced operators achieve >85% success; Inexperienced operators <50% success.',
    keyPoints: [
      'CTO PCI for significant ischemia (>10% myocardium) or angina despite medical therapy',
      'J-CTO score predicts complexity: 0-1 (easy), 2 (intermediate), ≥3 (difficult)',
      'Dual arterial access (femoral + radial) for antegrade and retrograde approaches',
      'Antegrade approach first-line: wire escalation, parallel wire, STAR',
      'Retrograde approach if antegrade fails: via septal or epicardial collaterals',
      'Hybrid approach combines antegrade and retrograde techniques',
      'Intravascular imaging (IVUS/OCT) to confirm true lumen and optimize stent deployment',
      'DAPT for minimum 12 months post-CTO PCI',
      'Success rates >85% with experienced operators',
      'Referral to high-volume CTO operator for complex cases',
    ],
    scaiUrl: 'https://www.scai.org/cto-pci-consensus',
    publicationYear: 2018,
  },
];

/**
 * Search function to find relevant SCAI guideline entries based on query
 */
export function searchSCAIGuidelines(query: string): SCAIGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = scaiGuidelinesKnowledge.map(entry => {
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

  console.log(`SCAI Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get SCAI guideline by exact topic name
 */
export function getSCAIGuidelineByTopic(topic: string): SCAIGuidelineEntry | undefined {
  return scaiGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all SCAI guidelines for a specific system
 */
export function getSCAIGuidelinesBySystem(system: string): SCAIGuidelineEntry[] {
  return scaiGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
