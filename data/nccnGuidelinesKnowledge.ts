
/**
 * NCCN (National Comprehensive Cancer Network) Guidelines Knowledge Base
 * 
 * This file contains comprehensive clinical practice guidelines from the National Comprehensive Cancer Network.
 * NCCN provides evidence-based guidelines for cancer prevention, detection, diagnosis, and treatment.
 * 
 * INTEGRATION PHASE: NCCN Guidelines (Phase 23 - Hematology Section)
 * 
 * Each entry includes:
 * - Guideline topic and keywords for matching
 * - Guideline summary and key recommendations
 * - Strength of recommendations (Category 1 = High-level evidence, Category 2A = Lower-level evidence, Category 2B = Based on consensus, Category 3 = Major disagreement)
 * - Quality of evidence (High, Moderate, Low)
 * - Clinical implementation guidance
 * - NCCN guideline URL for reference
 * 
 * IMPORTANT: This chatbot synthesizes knowledge from multiple sources to create original,
 * educational responses. The information is derived from NCCN guidelines but presented
 * in an original format for medical education purposes.
 */

export interface NCCNGuidelineEntry {
  topic: string;
  keywords: string[];
  system: string;
  guidelineSummary: string;
  category1Recommendations: string[];
  category2ARecommendations: string[];
  category2BRecommendations: string[];
  category3Recommendations: string[];
  qualityOfEvidence: string;
  clinicalImplementation: string;
  keyPoints: string[];
  nccnUrl: string;
  publicationYear: number;
}

export const nccnGuidelinesKnowledge: NCCNGuidelineEntry[] = [
  // ACUTE MYELOID LEUKEMIA
  {
    topic: 'Acute Myeloid Leukemia (AML) - NCCN Guideline',
    keywords: ['acute myeloid leukemia', 'aml', 'acute myelogenous leukemia', 'acute myelocytic leukemia', 'nccn aml', 'aml guideline', 'aml treatment', 'aml management'],
    system: 'Hematology',
    guidelineSummary: 'The NCCN guideline for acute myeloid leukemia provides comprehensive evidence-based recommendations for diagnosis, risk stratification, treatment, and supportive care of AML. The guideline emphasizes molecular and cytogenetic testing to guide treatment decisions. Risk stratification based on cytogenetics and molecular markers (favorable: t(8;21), inv(16), NPM1-mutated without FLT3-ITD; intermediate: normal karyotype, FLT3-ITD; adverse: complex karyotype, monosomy 5/7, TP53-mutated) determines treatment intensity. Standard induction chemotherapy is cytarabine plus anthracycline (7+3 regimen). Acute promyelocytic leukemia (APL) requires immediate ATRA plus arsenic trioxide. Allogeneic hematopoietic stem cell transplantation (allo-HSCT) is recommended for intermediate and adverse-risk AML in first complete remission. Targeted therapies include FLT3 inhibitors (midostaurin, gilteritinib), IDH inhibitors (ivosidenib, enasidenib), and venetoclax combinations. Older or unfit patients receive less intensive therapy with hypomethylating agents or low-dose cytarabine.',
    category1Recommendations: [
      'Bone marrow aspiration and biopsy with morphology, immunophenotyping, cytogenetics, and molecular testing (FLT3, NPM1, CEBPA, TP53, IDH1/2, RUNX1) are required for diagnosis and risk stratification (Category 1)',
      'Standard induction chemotherapy with cytarabine 100-200 mg/m² continuous infusion days 1-7 plus anthracycline (daunorubicin 60-90 mg/m² or idarubicin 12 mg/m² days 1-3) for fit patients aged <60 years (Category 1)',
      'Acute promyelocytic leukemia (APL) requires immediate treatment with all-trans retinoic acid (ATRA) 45 mg/m²/day plus arsenic trioxide (ATO) 0.15 mg/kg/day to prevent differentiation syndrome and DIC (Category 1)',
      'Allogeneic hematopoietic stem cell transplantation in first complete remission for intermediate-risk and adverse-risk AML (Category 1)',
      'FLT3 inhibitor (midostaurin 50 mg BID days 8-21) added to induction and consolidation chemotherapy for FLT3-mutated AML (Category 1)',
      'Post-remission consolidation chemotherapy with high-dose cytarabine (HiDAC) 3 g/m² every 12 hours days 1, 3, 5 for 3-4 cycles for favorable-risk AML (Category 1)',
      'Bone marrow evaluation after induction to assess response; repeat induction if persistent disease (Category 1)',
    ],
    category2ARecommendations: [
      'CPX-351 (liposomal cytarabine/daunorubicin) for therapy-related AML or AML with myelodysplasia-related changes (Category 2A)',
      'Gemtuzumab ozogamicin (anti-CD33 antibody-drug conjugate) added to induction chemotherapy for favorable-risk and intermediate-risk AML (Category 2A)',
      'Venetoclax (BCL-2 inhibitor) plus hypomethylating agent (azacitidine or decitabine) for newly diagnosed AML in patients ≥75 years or unfit for intensive chemotherapy (Category 2A)',
      'Gilteritinib (FLT3 inhibitor) 120 mg daily for relapsed/refractory FLT3-mutated AML (Category 2A)',
      'Ivosidenib (IDH1 inhibitor) 500 mg daily for newly diagnosed IDH1-mutated AML in patients ≥75 years or unfit for intensive chemotherapy (Category 2A)',
      'Enasidenib (IDH2 inhibitor) 100 mg daily for relapsed/refractory IDH2-mutated AML (Category 2A)',
      'Maintenance therapy with FLT3 inhibitor (midostaurin or gilteritinib) for FLT3-mutated AML after consolidation or allo-HSCT (Category 2A)',
      'Measurable residual disease (MRD) assessment by multiparameter flow cytometry or molecular testing to guide post-remission therapy (Category 2A)',
    ],
    category2BRecommendations: [
      'Cladribine plus low-dose cytarabine plus G-CSF (CLAG regimen) for relapsed/refractory AML (Category 2B)',
      'FLAG-IDA (fludarabine, cytarabine, idarubicin, G-CSF) for relapsed/refractory AML (Category 2B)',
      'Hypomethylating agents (azacitidine or decitabine) monotherapy for older patients (≥60 years) unfit for intensive chemotherapy (Category 2B)',
      'Low-dose cytarabine (LDAC) 20 mg subcutaneously BID for 10 days for older patients unfit for intensive chemotherapy (Category 2B)',
      'Prophylactic intrathecal chemotherapy for AML with high risk of CNS involvement (monocytic subtype, WBC >100,000/μL, extramedullary disease) (Category 2B)',
    ],
    category3Recommendations: [
      'Routine use of prophylactic growth factors (G-CSF) during induction chemotherapy is not recommended due to lack of survival benefit (Category 3)',
    ],
    qualityOfEvidence: 'Multiple levels: Category 1 recommendations are based on High quality evidence from randomized controlled trials (CALGB 9621, AML17, ALFA-0701, RATIFY, QUAZAR AML-001); Category 2A recommendations are based on Moderate quality evidence; Category 2B recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of NCCN AML guidelines requires comprehensive diagnostic workup and risk stratification. DIAGNOSIS: Bone marrow aspiration and biopsy with ≥20% blasts confirms AML. Morphology, immunophenotyping (flow cytometry), cytogenetics (karyotype, FISH), and molecular testing (FLT3-ITD, FLT3-TKD, NPM1, CEBPA, TP53, IDH1, IDH2, RUNX1, ASXL1, KIT) are mandatory. Assess for extramedullary disease (CNS, skin, gums). RISK STRATIFICATION: Favorable-risk: t(8;21), inv(16), t(16;16), NPM1-mutated without FLT3-ITD or with low allelic ratio FLT3-ITD, biallelic CEBPA-mutated. Intermediate-risk: Normal karyotype, NPM1-mutated with high allelic ratio FLT3-ITD, FLT3-ITD without NPM1 mutation, other cytogenetic abnormalities not classified as favorable or adverse. Adverse-risk: Complex karyotype (≥3 abnormalities), monosomy 5, del(5q), monosomy 7, del(7q), inv(3), t(3;3), t(6;9), t(9;22), TP53-mutated, RUNX1-mutated, ASXL1-mutated. INDUCTION CHEMOTHERAPY: Standard 7+3 regimen: Cytarabine 100-200 mg/m² continuous IV infusion days 1-7, Daunorubicin 60-90 mg/m² IV days 1-3 (or Idarubicin 12 mg/m² IV days 1-3). Higher daunorubicin dose (90 mg/m²) preferred for patients <60 years. FLT3-mutated AML: Add midostaurin 50 mg PO BID days 8-21 of each cycle. Favorable-risk or intermediate-risk AML: Consider adding gemtuzumab ozogamicin 3 mg/m² IV days 1, 4, 7. Therapy-related AML or AML-MRC: Consider CPX-351 (liposomal cytarabine 100 units/m² + daunorubicin 44 units/m² IV days 1, 3, 5). Bone marrow evaluation day 14-21 after induction: If residual disease, consider re-induction. If aplastic marrow, wait for count recovery and reassess. ACUTE PROMYELOCYTIC LEUKEMIA (APL): Medical emergency - start ATRA immediately upon suspicion (do not wait for PML-RARA confirmation). Low-risk APL (WBC <10,000/μL): ATRA 45 mg/m²/day PO divided BID + ATO 0.15 mg/kg/day IV until remission, then consolidation with ATRA + ATO. High-risk APL (WBC ≥10,000/μL): ATRA + ATO + idarubicin or daunorubicin. Monitor for differentiation syndrome (fever, dyspnea, pulmonary infiltrates, pleural/pericardial effusions): treat with dexamethasone 10 mg IV BID. Monitor for DIC: give FFP, cryoprecipitate, platelets as needed. CONSOLIDATION THERAPY: Favorable-risk AML: High-dose cytarabine (HiDAC) 3 g/m² IV over 3 hours every 12 hours days 1, 3, 5 for 3-4 cycles. Reduce dose to 1-1.5 g/m² for age >60 years or renal dysfunction. Intermediate-risk AML: HiDAC consolidation followed by allo-HSCT in first CR if suitable donor available. Adverse-risk AML: Proceed to allo-HSCT in first CR. FLT3-mutated AML: Continue midostaurin 50 mg PO BID days 8-21 of each consolidation cycle. ALLOGENEIC HSCT: Indications: Intermediate-risk or adverse-risk AML in first CR, any AML in second or subsequent CR, relapsed/refractory AML. Donor selection: Matched sibling donor preferred, matched unrelated donor acceptable, haploidentical or cord blood if no matched donor. Conditioning: Myeloablative for younger patients, reduced-intensity for older or comorbid patients. Post-transplant maintenance: FLT3 inhibitor (sorafenib or gilteritinib) for FLT3-mutated AML. OLDER OR UNFIT PATIENTS: Venetoclax 400 mg PO daily (after ramp-up) + azacitidine 75 mg/m² IV/SC days 1-7 or decitabine 20 mg/m² IV days 1-5 every 28 days. Alternative: Azacitidine or decitabine monotherapy. Alternative: Low-dose cytarabine (LDAC) 20 mg SC BID for 10 days every 28 days. IDH1-mutated AML: Add ivosidenib 500 mg PO daily. IDH2-mutated AML: Add enasidenib 100 mg PO daily. RELAPSED/REFRACTORY AML: Salvage chemotherapy: HiDAC-based regimens (MEC, FLAG-IDA, CLAG), CPX-351, clofarabine-based regimens. Targeted therapy: Gilteritinib for FLT3-mutated AML, ivosidenib for IDH1-mutated AML, enasidenib for IDH2-mutated AML, venetoclax combinations. Allo-HSCT if chemosensitive disease achieved. Clinical trial enrollment strongly encouraged. MEASURABLE RESIDUAL DISEASE (MRD): Assess by multiparameter flow cytometry or molecular testing (NPM1, RUNX1-RUNX1T1, CBFB-MYH11, PML-RARA) after induction and consolidation. MRD-positive patients have higher relapse risk - consider intensified therapy or allo-HSCT. SUPPORTIVE CARE: Tumor lysis syndrome prophylaxis: Allopurinol 300 mg PO daily or rasburicase 0.2 mg/kg IV for high-risk patients (WBC >50,000/μL, high LDH). Aggressive hydration. Infection prophylaxis: Fluoroquinolone (levofloxacin or ciprofloxacin), antifungal (fluconazole or posaconazole), antiviral (acyclovir or valacyclovir). Transfusion support: RBC transfusion for hemoglobin <7-8 g/dL, platelet transfusion for platelets <10,000/μL or <50,000/μL if bleeding. Growth factors: G-CSF or GM-CSF for prolonged neutropenia or infection. Antiemetics: 5-HT3 antagonists, NK1 antagonists, dexamethasone. CNS PROPHYLAXIS: Consider intrathecal chemotherapy (cytarabine 50-100 mg or methotrexate 12 mg) for high-risk features: monocytic subtype, WBC >100,000/μL, extramedullary disease, inv(16), t(8;21). MONITORING: CBC with differential 2-3 times weekly during induction and consolidation. Bone marrow evaluation after induction (day 14-21) and after each consolidation cycle. MRD assessment after achieving CR. Monitor for infections, bleeding, tumor lysis syndrome. LONG-TERM FOLLOW-UP: CBC every 1-3 months for first 2 years, then every 3-6 months. Bone marrow evaluation if cytopenias or clinical suspicion of relapse. Monitor for late effects: secondary malignancies, cardiac toxicity (anthracyclines), infertility.',
    keyPoints: [
      'Molecular and cytogenetic testing mandatory for risk stratification',
      'Standard induction: cytarabine + anthracycline (7+3 regimen)',
      'APL requires immediate ATRA + arsenic trioxide',
      'FLT3 inhibitor (midostaurin) added to chemotherapy for FLT3-mutated AML',
      'Allo-HSCT recommended for intermediate-risk and adverse-risk AML in first CR',
      'Venetoclax + hypomethylating agent for older/unfit patients',
      'Targeted therapies: FLT3 inhibitors, IDH inhibitors, venetoclax',
      'MRD assessment guides post-remission therapy',
      'Tumor lysis syndrome prophylaxis essential for high-risk patients',
    ],
    nccnUrl: 'https://www.nccn.org/professionals/physician_gls/pdf/aml.pdf',
    publicationYear: 2024,
  },

  // ACUTE LYMPHOBLASTIC LEUKEMIA
  {
    topic: 'Acute Lymphoblastic Leukemia (ALL) - NCCN Guideline',
    keywords: ['acute lymphoblastic leukemia', 'all', 'acute lymphocytic leukemia', 'lymphoblastic leukemia', 'nccn all', 'all guideline', 'all treatment', 'philadelphia chromosome positive all'],
    system: 'Hematology',
    guidelineSummary: 'The NCCN guideline for acute lymphoblastic leukemia provides comprehensive evidence-based recommendations for diagnosis, risk stratification, treatment, and supportive care of ALL. The guideline distinguishes between B-cell ALL (85%) and T-cell ALL (15%) and emphasizes molecular testing for Philadelphia chromosome (BCR-ABL). Risk stratification based on age, WBC count, cytogenetics, molecular markers, and response to therapy determines treatment intensity. Treatment consists of multi-agent chemotherapy in phases: induction, consolidation, and maintenance. CNS prophylaxis with intrathecal chemotherapy is mandatory. Philadelphia chromosome-positive ALL requires tyrosine kinase inhibitor (TKI) therapy. Allogeneic hematopoietic stem cell transplantation (allo-HSCT) is recommended for high-risk ALL in first complete remission. CAR T-cell therapy (tisagenlecleucel, brexucabtagene autoleucel) is approved for relapsed/refractory B-cell ALL. Blinatumomab (bispecific T-cell engager) and inotuzumab ozogamicin (antibody-drug conjugate) are effective for relapsed/refractory disease.',
    category1Recommendations: [
      'Bone marrow aspiration and biopsy with morphology, immunophenotyping, cytogenetics, and molecular testing (BCR-ABL, KMT2A rearrangements, TCF3-PBX1, ETV6-RUNX1) are required for diagnosis and risk stratification (Category 1)',
      'Multi-agent induction chemotherapy with vincristine, corticosteroid (prednisone or dexamethasone), anthracycline (daunorubicin or doxorubicin), and asparaginase for B-cell ALL (Category 1)',
      'CNS prophylaxis with intrathecal chemotherapy (methotrexate, cytarabine, hydrocortisone) starting at diagnosis and continuing throughout treatment (Category 1)',
      'Philadelphia chromosome-positive ALL (BCR-ABL+) requires tyrosine kinase inhibitor (imatinib, dasatinib, or ponatinib) added to chemotherapy (Category 1)',
      'Allogeneic hematopoietic stem cell transplantation in first complete remission for high-risk ALL (Ph+ ALL, high-risk cytogenetics, MRD-positive after induction) (Category 1)',
      'Maintenance therapy with 6-mercaptopurine and methotrexate for 2-3 years for B-cell ALL (Category 1)',
      'Bone marrow evaluation after induction to assess response; MRD assessment by flow cytometry or molecular testing (Category 1)',
    ],
    category2ARecommendations: [
      'Hyper-CVAD regimen (cyclophosphamide, vincristine, doxorubicin, dexamethasone alternating with high-dose methotrexate and cytarabine) for adult ALL (Category 2A)',
      'Pediatric-inspired regimens (COG, DFCI, BFM protocols) for adolescents and young adults (AYA, age 15-39 years) improve outcomes compared to adult regimens (Category 2A)',
      'Dasatinib or ponatinib preferred over imatinib for Philadelphia chromosome-positive ALL due to superior CNS penetration (Category 2A)',
      'Blinatumomab (bispecific T-cell engager targeting CD19) for relapsed/refractory B-cell ALL or MRD-positive disease (Category 2A)',
      'Inotuzumab ozogamicin (anti-CD22 antibody-drug conjugate) for relapsed/refractory B-cell ALL (Category 2A)',
      'CAR T-cell therapy (tisagenlecleucel or brexucabtagene autoleucel) for relapsed/refractory B-cell ALL after ≥2 prior therapies (Category 2A)',
      'Nelarabine for relapsed/refractory T-cell ALL (Category 2A)',
      'Prophylactic cranial irradiation for T-cell ALL or high-risk B-cell ALL (controversial, consider CNS-directed chemotherapy instead) (Category 2A)',
    ],
    category2BRecommendations: [
      'Clofarabine-based regimens for relapsed/refractory ALL (Category 2B)',
      'Pegaspargase preferred over native E. coli asparaginase due to longer half-life and less immunogenicity (Category 2B)',
      'Dexamethasone preferred over prednisone for CNS penetration (Category 2B)',
      'Rituximab added to chemotherapy for CD20-positive B-cell ALL (Category 2B)',
      'Allo-HSCT in second or subsequent complete remission for relapsed ALL (Category 2B)',
    ],
    category3Recommendations: [
      'Routine use of prophylactic growth factors (G-CSF) during induction chemotherapy is not recommended (Category 3)',
    ],
    qualityOfEvidence: 'Multiple levels: Category 1 recommendations are based on High quality evidence from randomized controlled trials (CALGB 10403, GRAALL-2003/2005, UKALL14); Category 2A recommendations are based on Moderate quality evidence; Category 2B recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of NCCN ALL guidelines requires comprehensive diagnostic workup and risk stratification. DIAGNOSIS: Bone marrow aspiration and biopsy with ≥20% lymphoblasts confirms ALL. Morphology, immunophenotyping (flow cytometry: B-cell ALL is CD19+, CD10+, TdT+; T-cell ALL is CD3+, CD7+, TdT+), cytogenetics (karyotype, FISH), and molecular testing (BCR-ABL, KMT2A rearrangements, TCF3-PBX1, ETV6-RUNX1, IKZF1 deletion) are mandatory. Lumbar puncture for CSF analysis (cell count, cytology, flow cytometry). RISK STRATIFICATION: Standard-risk: Age 1-9 years, WBC <50,000/μL, favorable cytogenetics (hyperdiploidy >50 chromosomes, ETV6-RUNX1), rapid early response (MRD-negative after induction). High-risk: Age <1 year or ≥10 years, WBC ≥50,000/μL, unfavorable cytogenetics (hypodiploidy <44 chromosomes, KMT2A rearrangements, BCR-ABL, TCF3-PBX1), slow early response (MRD-positive after induction), T-cell ALL. Very high-risk: Philadelphia chromosome-positive (BCR-ABL+), KMT2A-rearranged infant ALL, induction failure, early relapse (<18 months from diagnosis). INDUCTION CHEMOTHERAPY (4-6 weeks): B-cell ALL: Vincristine 1.5 mg/m² IV weekly (max 2 mg), Prednisone 60 mg/m²/day PO or Dexamethasone 10 mg/m²/day PO days 1-28, Daunorubicin 45-60 mg/m² IV days 1, 8, 15, 22 or Doxorubicin 30 mg/m² IV days 1, 8, 15, 22, Pegaspargase 2500 units/m² IM/IV day 4 (or E. coli asparaginase 6000 units/m² IM/IV every other day × 6 doses). Intrathecal chemotherapy (methotrexate 12-15 mg or triple therapy: methotrexate 12 mg + cytarabine 30 mg + hydrocortisone 15 mg) days 1, 8, 15, 22. Philadelphia chromosome-positive ALL: Add TKI: Imatinib 600 mg PO daily, Dasatinib 140 mg PO daily (preferred), or Ponatinib 45 mg PO daily. T-cell ALL: Similar regimen, consider cyclophosphamide addition. Bone marrow evaluation day 28-35: Assess morphologic remission (<5% blasts) and MRD by flow cytometry or molecular testing. CONSOLIDATION/INTENSIFICATION (2-6 months): High-dose methotrexate 1-5 g/m² IV over 24 hours with leucovorin rescue, High-dose cytarabine 3 g/m² IV every 12 hours × 4-6 doses, Cyclophosphamide, vincristine, doxorubicin, dexamethasone (Hyper-CVAD regimen), Pegaspargase, 6-mercaptopurine, methotrexate. Continue intrathecal chemotherapy every 4-8 weeks. Philadelphia chromosome-positive ALL: Continue TKI throughout consolidation. ALLOGENEIC HSCT: Indications: Philadelphia chromosome-positive ALL in first CR, High-risk cytogenetics (hypodiploidy, KMT2A rearrangements), MRD-positive after induction or consolidation, Induction failure, Any ALL in second or subsequent CR. Donor selection: Matched sibling donor preferred, matched unrelated donor acceptable, haploidentical or cord blood if no matched donor. Conditioning: Myeloablative for younger patients, reduced-intensity for older or comorbid patients. Post-transplant maintenance: TKI for Ph+ ALL. MAINTENANCE THERAPY (2-3 years total treatment duration): 6-mercaptopurine 75 mg/m²/day PO daily, Methotrexate 20 mg/m²/week PO or IM weekly, Vincristine 1.5 mg/m² IV monthly (optional), Prednisone 60 mg/m²/day PO for 5 days monthly (optional). Continue intrathecal chemotherapy every 3 months. Monitor CBC weekly, adjust doses for myelosuppression. Philadelphia chromosome-positive ALL: Continue TKI throughout maintenance. CNS PROPHYLAXIS: Intrathecal chemotherapy: Methotrexate 12-15 mg or triple therapy (methotrexate + cytarabine + hydrocortisone) every 4-8 weeks during induction, consolidation, and maintenance. High-dose systemic methotrexate and cytarabine provide additional CNS penetration. Prophylactic cranial irradiation (18-24 Gy) for T-cell ALL or high-risk B-cell ALL (controversial due to neurotoxicity - consider CNS-directed chemotherapy instead). RELAPSED/REFRACTORY ALL: Salvage chemotherapy: Hyper-CVAD, clofarabine-based regimens, high-dose cytarabine. Targeted therapy: Blinatumomab 9-28 mcg/day continuous IV infusion for 28 days (bispecific T-cell engager targeting CD19) for B-cell ALL. Inotuzumab ozogamicin 1.8 mg/m² IV divided over 3 days every 3-4 weeks (anti-CD22 antibody-drug conjugate) for B-cell ALL. Nelarabine 1500 mg/m² IV days 1, 3, 5 every 21 days for T-cell ALL. CAR T-cell therapy: Tisagenlecleucel (Kymriah) or brexucabtagene autoleucel (Tecartus) for relapsed/refractory B-cell ALL after ≥2 prior therapies. Allo-HSCT if chemosensitive disease achieved. Clinical trial enrollment strongly encouraged. MEASURABLE RESIDUAL DISEASE (MRD): Assess by multiparameter flow cytometry (sensitivity 10^-4) or molecular testing (PCR for fusion transcripts, sensitivity 10^-5) after induction and consolidation. MRD-positive (≥0.01%) after induction predicts higher relapse risk - consider intensified therapy or allo-HSCT. MRD-negative after induction is favorable prognostic factor. SUPPORTIVE CARE: Tumor lysis syndrome prophylaxis: Allopurinol 300 mg PO daily or rasburicase 0.2 mg/kg IV for high-risk patients (WBC >100,000/μL, high LDH, bulky disease). Aggressive hydration. Infection prophylaxis: Fluoroquinolone (levofloxacin or ciprofloxacin), antifungal (fluconazole or posaconazole), antiviral (acyclovir or valacyclovir), PCP prophylaxis (trimethoprim-sulfamethoxazole). Transfusion support: RBC transfusion for hemoglobin <7-8 g/dL, platelet transfusion for platelets <10,000/μL or <50,000/μL if bleeding. Antiemetics: 5-HT3 antagonists, NK1 antagonists, dexamethasone. Asparaginase toxicity monitoring: Monitor for pancreatitis (amylase, lipase), hepatotoxicity (LFTs), thrombosis (consider prophylactic anticoagulation), hypersensitivity reactions (switch to Erwinia asparaginase if allergic). ADOLESCENTS AND YOUNG ADULTS (AYA): Pediatric-inspired regimens improve outcomes compared to adult regimens. Consider treatment at pediatric center or with pediatric oncology collaboration. Emphasize adherence to maintenance therapy. Address psychosocial needs. MONITORING: CBC with differential 1-2 times weekly during induction and consolidation. Bone marrow evaluation after induction and after each consolidation cycle. MRD assessment after achieving CR. Lumbar puncture every 4-8 weeks during treatment. Monitor for infections, bleeding, tumor lysis syndrome, asparaginase toxicity. LONG-TERM FOLLOW-UP: CBC every 1-3 months for first 2 years, then every 3-6 months. Bone marrow evaluation if cytopenias or clinical suspicion of relapse. Monitor for late effects: secondary malignancies, cardiac toxicity (anthracyclines), neurotoxicity (methotrexate, cranial irradiation), endocrine dysfunction, infertility.',
    keyPoints: [
      'Multi-agent chemotherapy in phases: induction, consolidation, maintenance',
      'CNS prophylaxis with intrathecal chemotherapy mandatory',
      'Philadelphia chromosome-positive ALL requires TKI (dasatinib or ponatinib preferred)',
      'Allo-HSCT recommended for high-risk ALL in first CR',
      'Pediatric-inspired regimens improve outcomes for adolescents and young adults',
      'MRD assessment guides treatment decisions',
      'Blinatumomab and inotuzumab ozogamicin for relapsed/refractory B-cell ALL',
      'CAR T-cell therapy for relapsed/refractory B-cell ALL after ≥2 prior therapies',
      'Maintenance therapy for 2-3 years total treatment duration',
    ],
    nccnUrl: 'https://www.nccn.org/professionals/physician_gls/pdf/all.pdf',
    publicationYear: 2024,
  },

  // CHRONIC LYMPHOCYTIC LEUKEMIA
  {
    topic: 'Chronic Lymphocytic Leukemia (CLL) / Small Lymphocytic Lymphoma (SLL) - NCCN Guideline',
    keywords: ['chronic lymphocytic leukemia', 'cll', 'small lymphocytic lymphoma', 'sll', 'nccn cll', 'cll guideline', 'cll treatment', 'btk inhibitor', 'venetoclax'],
    system: 'Hematology',
    guidelineSummary: 'The NCCN guideline for chronic lymphocytic leukemia and small lymphocytic lymphoma provides comprehensive evidence-based recommendations for diagnosis, risk stratification, treatment, and supportive care. CLL and SLL are the same disease (CLL has peripheral blood involvement, SLL primarily nodal). The guideline emphasizes molecular testing for del(17p), TP53 mutation, IGHV mutation status, and del(11q) to guide treatment decisions. Early-stage asymptomatic disease requires observation ("watch and wait"). Treatment indications include progressive marrow failure, symptomatic lymphadenopathy/splenomegaly, B symptoms, autoimmune cytopenias, or disease-related complications. First-line therapy for fit patients without del(17p)/TP53 mutation is chemoimmunotherapy (fludarabine, cyclophosphamide, rituximab - FCR) for IGHV-mutated CLL or targeted therapy (ibrutinib, acalabrutinib, venetoclax + obinutuzumab) for IGHV-unmutated CLL. Patients with del(17p)/TP53 mutation or elderly/unfit patients receive targeted therapy. BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib) and BCL-2 inhibitor (venetoclax) have transformed CLL treatment.',
    category1Recommendations: [
      'Peripheral blood flow cytometry with immunophenotyping (CD5+, CD19+, CD20+ dim, CD23+, surface immunoglobulin dim, kappa or lambda light chain restriction) is required for diagnosis (Category 1)',
      'FISH for del(17p), del(11q), del(13q), trisomy 12 and TP53 mutation testing are required for risk stratification before treatment (Category 1)',
      'IGHV mutation status testing is recommended to guide treatment decisions (mutated IGHV has favorable prognosis) (Category 1)',
      'Observation ("watch and wait") for early-stage asymptomatic CLL (Rai stage 0-II, Binet stage A-B) without treatment indications (Category 1)',
      'Treatment indications: progressive marrow failure (anemia, thrombocytopenia), symptomatic or progressive lymphadenopathy/splenomegaly, B symptoms, autoimmune cytopenias not responsive to corticosteroids, disease-related complications (Category 1)',
      'Ibrutinib 420 mg PO daily or acalabrutinib 100 mg PO BID for first-line treatment of CLL without del(17p)/TP53 mutation (Category 1)',
      'Venetoclax 400 mg PO daily (after ramp-up) plus obinutuzumab for first-line treatment of CLL (Category 1)',
      'Ibrutinib, acalabrutinib, or venetoclax-based regimens for CLL with del(17p)/TP53 mutation (Category 1)',
    ],
    category2ARecommendations: [
      'Fludarabine, cyclophosphamide, rituximab (FCR) for first-line treatment of fit patients <65 years with IGHV-mutated CLL without del(17p)/TP53 mutation (Category 2A)',
      'Bendamustine plus rituximab (BR) for first-line treatment of older or less fit patients without del(17p)/TP53 mutation (Category 2A)',
      'Zanubrutinib 160 mg PO BID for first-line or relapsed/refractory CLL (Category 2A)',
      'Venetoclax plus rituximab for relapsed/refractory CLL (Category 2A)',
      'Idelalisib (PI3K inhibitor) plus rituximab for relapsed/refractory CLL (Category 2A)',
      'Obinutuzumab plus chlorambucil for elderly or unfit patients (Category 2A)',
      'Allogeneic hematopoietic stem cell transplantation for young patients with high-risk disease (del(17p)/TP53 mutation, complex karyotype) or relapsed/refractory disease (Category 2A)',
      'Richter transformation (transformation to aggressive lymphoma): treat as diffuse large B-cell lymphoma with R-CHOP or similar regimen (Category 2A)',
    ],
    category2BRecommendations: [
      'High-dose methylprednisolone for relapsed/refractory CLL (Category 2B)',
      'Lenalidomide plus rituximab for relapsed/refractory CLL (Category 2B)',
      'Ofatumumab (anti-CD20 antibody) for relapsed/refractory CLL (Category 2B)',
      'CAR T-cell therapy (lisocabtagene maraleucel) for relapsed/refractory CLL after ≥2 prior therapies (Category 2B)',
    ],
    category3Recommendations: [
      'Routine use of prophylactic growth factors (G-CSF) is not recommended (Category 3)',
    ],
    qualityOfEvidence: 'Multiple levels: Category 1 recommendations are based on High quality evidence from randomized controlled trials (CLL8, RESONATE, ELEVATE-TN, CLL14, MURANO); Category 2A recommendations are based on Moderate quality evidence; Category 2B recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of NCCN CLL/SLL guidelines requires comprehensive diagnostic workup and risk stratification. DIAGNOSIS: CLL: Sustained lymphocytosis (≥5,000/μL B lymphocytes) for ≥3 months. Peripheral blood flow cytometry confirms clonal B cells: CD5+, CD19+, CD20+ (dim), CD23+, surface immunoglobulin (dim), kappa or lambda light chain restriction. Peripheral smear shows small mature lymphocytes and smudge cells. SLL: Lymphadenopathy or splenomegaly with <5,000/μL B lymphocytes in blood. Lymph node biopsy shows small lymphocytic infiltration. Bone marrow biopsy shows lymphocytic infiltration (>30%). STAGING: Rai staging (US): Stage 0 (lymphocytosis only), Stage I (lymphocytosis + lymphadenopathy), Stage II (lymphocytosis + splenomegaly or hepatomegaly), Stage III (lymphocytosis + anemia Hb <11 g/dL), Stage IV (lymphocytosis + thrombocytopenia <100,000/μL). Binet staging (Europe): Stage A (<3 lymphoid areas involved), Stage B (≥3 lymphoid areas involved), Stage C (anemia Hb <10 g/dL or thrombocytopenia <100,000/μL). RISK STRATIFICATION: FISH: del(17p) (worst prognosis, TP53 pathway disruption, chemo-resistant), del(11q) (poor prognosis, bulky disease, rapid progression), trisomy 12 (intermediate prognosis), del(13q) as sole abnormality (favorable prognosis). TP53 mutation: Confers poor prognosis and chemo-resistance even without del(17p). IGHV mutation status: Mutated (≥2% difference from germline) has favorable prognosis and responds well to chemoimmunotherapy. Unmutated (<2% difference) has poor prognosis and requires targeted therapy. Complex karyotype (≥3 abnormalities): Poor prognosis. Beta-2 microglobulin: Elevated levels indicate poor prognosis. OBSERVATION ("WATCH AND WAIT"): Early-stage asymptomatic CLL (Rai 0-II, Binet A-B) without treatment indications. Monitor CBC every 3-6 months, physical exam every 3-6 months. Educate patient about symptoms requiring evaluation (fever, night sweats, weight loss, progressive lymphadenopathy, fatigue, bleeding). TREATMENT INDICATIONS: Progressive marrow failure: Anemia (Hb <10 g/dL) or thrombocytopenia (<100,000/μL) due to CLL. Symptomatic or progressive lymphadenopathy: Lymph nodes >10 cm or progressive enlargement causing symptoms. Symptomatic or progressive splenomegaly: Spleen >6 cm below costal margin or progressive enlargement. B symptoms: Fever >100.5°F for ≥2 weeks, night sweats, weight loss >10% in 6 months. Autoimmune cytopenias: Autoimmune hemolytic anemia or immune thrombocytopenia not responsive to corticosteroids. Disease-related complications: Recurrent infections, hyperviscosity. FIRST-LINE TREATMENT: Fit patients <65 years with IGHV-mutated CLL without del(17p)/TP53 mutation: FCR regimen: Fludarabine 25 mg/m² IV days 1-3, Cyclophosphamide 250 mg/m² IV days 1-3, Rituximab 375 mg/m² IV cycle 1 then 500 mg/m² IV cycles 2-6, every 28 days for 6 cycles. Achieves deep remissions with potential for treatment-free survival >10 years. Fit patients with IGHV-unmutated CLL or del(11q) without del(17p)/TP53 mutation: Ibrutinib 420 mg PO daily continuously until progression or intolerance. OR Acalabrutinib 100 mg PO BID continuously. OR Venetoclax + obinutuzumab: Obinutuzumab 100 mg IV day 1, 900 mg day 2, 1000 mg days 8, 15 of cycle 1, then 1000 mg day 1 cycles 2-6. Venetoclax ramp-up: 20 mg daily week 1, 50 mg daily week 2, 100 mg daily week 3, 200 mg daily week 4, 400 mg daily week 5 onwards for 12 months total. Patients with del(17p)/TP53 mutation: Ibrutinib 420 mg PO daily OR Acalabrutinib 100 mg PO BID OR Venetoclax + obinutuzumab (as above). Avoid chemoimmunotherapy (poor response). Elderly or unfit patients: Ibrutinib 420 mg PO daily OR Acalabrutinib 100 mg PO BID OR Venetoclax + obinutuzumab OR Obinutuzumab + chlorambucil: Obinutuzumab (as above) + Chlorambucil 0.5 mg/kg days 1, 15 cycles 1-6. OR Bendamustine + rituximab: Bendamustine 90 mg/m² IV days 1-2, Rituximab 375 mg/m² IV cycle 1 then 500 mg/m² cycles 2-6, every 28 days for 6 cycles. RELAPSED/REFRACTORY CLL: If prior chemoimmunotherapy: Ibrutinib 420 mg PO daily OR Acalabrutinib 100 mg PO BID OR Venetoclax + rituximab: Venetoclax ramp-up (as above) for 2 years, Rituximab 375 mg/m² IV cycle 1 then 500 mg/m² IV cycles 2-6. OR Idelalisib 150 mg PO BID + rituximab. If prior BTK inhibitor: Venetoclax-based regimen OR Idelalisib + rituximab OR Clinical trial OR Allogeneic HSCT. If prior venetoclax: BTK inhibitor (if not previously used) OR Idelalisib + rituximab OR Clinical trial OR Allogeneic HSCT. ALLOGENEIC HSCT: Consider for young patients with high-risk disease (del(17p)/TP53 mutation, complex karyotype) or relapsed/refractory disease after ≥2 prior therapies. Reduced-intensity conditioning preferred. Donor selection: Matched sibling or matched unrelated donor. RICHTER TRANSFORMATION: Suspect if rapid lymph node enlargement, B symptoms, elevated LDH, hypercalcemia. PET-CT shows high SUV uptake. Lymph node biopsy confirms transformation to diffuse large B-cell lymphoma (DLBCL) or Hodgkin lymphoma. Treatment: R-CHOP or similar regimen for DLBCL. Consider allo-HSCT if response achieved. Poor prognosis (median survival 6-12 months). AUTOIMMUNE CYTOPENIAS: Autoimmune hemolytic anemia (AIHA): Positive Coombs test, elevated indirect bilirubin, low haptoglobin. Treat with corticosteroids (prednisone 1 mg/kg/day), rituximab, or IVIG. Immune thrombocytopenia (ITP): Isolated thrombocytopenia. Treat with corticosteroids, rituximab, or IVIG. If refractory, treat underlying CLL. SUPPORTIVE CARE: Infection prophylaxis: IVIG 400 mg/kg every 3-4 weeks for recurrent infections with hypogammaglobulinemia. Antibiotic prophylaxis (trimethoprim-sulfamethoxazole for PCP, acyclovir for HSV) during chemoimmunotherapy. Tumor lysis syndrome prophylaxis: Allopurinol 300 mg PO daily during venetoclax ramp-up. Aggressive hydration. Monitor electrolytes, LDH, uric acid. Transfusion support: RBC transfusion for symptomatic anemia, platelet transfusion for bleeding or platelets <10,000/μL. Growth factors: G-CSF for neutropenic infections during chemoimmunotherapy. BTK inhibitor toxicity monitoring: Monitor for atrial fibrillation, bleeding (avoid anticoagulants if possible), hypertension, infections. Venetoclax toxicity monitoring: Tumor lysis syndrome during ramp-up, neutropenia, infections. MONITORING: CBC every 3-6 months during observation, every 1-3 months during treatment. Physical exam every 3-6 months. CT scan if symptomatic lymphadenopathy. Bone marrow evaluation if cytopenias or clinical suspicion of transformation. Monitor for Richter transformation (rapid lymph node growth, B symptoms, elevated LDH). LONG-TERM FOLLOW-UP: CBC every 3-6 months. Monitor for late effects: secondary malignancies (skin cancer, solid tumors), infections, autoimmune cytopenias. Screen for Richter transformation.',
    keyPoints: [
      'Observation ("watch and wait") for early-stage asymptomatic CLL',
      'FISH for del(17p), del(11q), del(13q), trisomy 12 and TP53 mutation testing required',
      'IGHV mutation status guides treatment: mutated responds to FCR, unmutated requires targeted therapy',
      'BTK inhibitors (ibrutinib, acalabrutinib) and venetoclax are first-line options',
      'Del(17p)/TP53 mutation requires targeted therapy (avoid chemoimmunotherapy)',
      'FCR for fit patients <65 years with IGHV-mutated CLL',
      'Venetoclax + obinutuzumab achieves deep remissions with fixed-duration therapy',
      'Richter transformation has poor prognosis - treat as DLBCL',
      'IVIG for recurrent infections with hypogammaglobulinemia',
    ],
    nccnUrl: 'https://www.nccn.org/professionals/physician_gls/pdf/cll.pdf',
    publicationYear: 2024,
  },

  // HODGKIN LYMPHOMA
  {
    topic: 'Hodgkin Lymphoma - NCCN Guideline',
    keywords: ['hodgkin lymphoma', 'hodgkin disease', 'hodgkin\'s lymphoma', 'reed sternberg cells', 'nccn hodgkin', 'hodgkin guideline', 'abvd', 'hodgkin treatment'],
    system: 'Hematology',
    guidelineSummary: 'The NCCN guideline for Hodgkin lymphoma provides comprehensive evidence-based recommendations for diagnosis, staging, treatment, and follow-up. Hodgkin lymphoma is characterized by Reed-Sternberg cells in a background of reactive inflammatory cells. The guideline distinguishes between classical Hodgkin lymphoma (nodular sclerosis, mixed cellularity, lymphocyte-rich, lymphocyte-depleted) and nodular lymphocyte-predominant Hodgkin lymphoma. Risk stratification based on stage, bulk disease, B symptoms, and number of involved sites determines treatment intensity. PET-CT is the gold standard for staging and response assessment. Treatment consists of chemotherapy (ABVD: doxorubicin, bleomycin, vinblastine, dacarbazine) with or without radiation therapy. Early-stage favorable disease receives abbreviated chemotherapy plus involved-site radiation therapy (ISRT). Advanced-stage disease receives full-course ABVD or escalated BEACOPP. Interim PET-CT after 2 cycles guides treatment adaptation. Brentuximab vedotin (anti-CD30 antibody-drug conjugate) and checkpoint inhibitors (nivolumab, pembrolizumab) are effective for relapsed/refractory disease. Autologous stem cell transplantation is standard for relapsed disease. Cure rate exceeds 80% overall.',
    category1Recommendations: [
      'Excisional or core needle biopsy of lymph node with immunohistochemistry (Reed-Sternberg cells are CD15+, CD30+, CD20-) is required for diagnosis (Category 1)',
      'PET-CT scan for staging (Ann Arbor staging I-IV) and baseline assessment (Category 1)',
      'ABVD chemotherapy (doxorubicin, bleomycin, vinblastine, dacarbazine) for 2-6 cycles depending on stage and risk factors (Category 1)',
      'Interim PET-CT after 2 cycles of ABVD to assess response and guide treatment adaptation (Category 1)',
      'Involved-site radiation therapy (ISRT) 20-30 Gy for early-stage disease after chemotherapy (Category 1)',
      'Autologous hematopoietic stem cell transplantation for relapsed/refractory Hodgkin lymphoma after salvage chemotherapy (Category 1)',
    ],
    category2ARecommendations: [
      'Early-stage favorable (IA-IIA without risk factors): ABVD × 2 cycles + ISRT 20 Gy (Category 2A)',
      'Early-stage unfavorable (IA-IIA with risk factors: bulky mediastinal disease, ≥3 sites, elevated ESR, extranodal disease): ABVD × 4 cycles + ISRT 30 Gy (Category 2A)',
      'Advanced-stage (IIB-IV): ABVD × 6 cycles (Category 2A)',
      'Escalated BEACOPP (bleomycin, etoposide, doxorubicin, cyclophosphamide, vincristine, procarbazine, prednisone) for advanced-stage disease with high-risk features (Category 2A)',
      'Omit bleomycin after 2 cycles if interim PET-negative to reduce pulmonary toxicity (Category 2A)',
      'Brentuximab vedotin (anti-CD30 antibody-drug conjugate) 1.8 mg/kg IV every 3 weeks for relapsed/refractory Hodgkin lymphoma (Category 2A)',
      'Checkpoint inhibitors (nivolumab 3 mg/kg IV every 2 weeks or pembrolizumab 200 mg IV every 3 weeks) for relapsed/refractory Hodgkin lymphoma after brentuximab vedotin and autologous HSCT (Category 2A)',
      'Brentuximab vedotin consolidation after autologous HSCT for high-risk relapsed disease (Category 2A)',
      'Nodular lymphocyte-predominant Hodgkin lymphoma: Rituximab monotherapy or involved-site radiation therapy for early-stage disease (Category 2A)',
    ],
    category2BRecommendations: [
      'Stanford V regimen (doxorubicin, vinblastine, mechlorethamine, vincristine, bleomycin, etoposide, prednisone) for advanced-stage disease (Category 2B)',
      'Brentuximab vedotin + AVD (doxorubicin, vinblastine, dacarbazine) for advanced-stage disease (Category 2B)',
      'Allogeneic hematopoietic stem cell transplantation for relapsed/refractory Hodgkin lymphoma after autologous HSCT failure (Category 2B)',
      'CAR T-cell therapy for relapsed/refractory Hodgkin lymphoma (investigational) (Category 2B)',
    ],
    category3Recommendations: [
      'Routine use of prophylactic growth factors (G-CSF) during ABVD is not recommended (Category 3)',
    ],
    qualityOfEvidence: 'Multiple levels: Category 1 recommendations are based on High quality evidence from randomized controlled trials (HD10, HD11, RATHL, ECHELON-1); Category 2A recommendations are based on Moderate quality evidence; Category 2B recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of NCCN Hodgkin lymphoma guidelines requires comprehensive diagnostic workup and risk stratification. DIAGNOSIS: Excisional lymph node biopsy (preferred) or core needle biopsy with adequate tissue for histology and immunohistochemistry. Reed-Sternberg cells: Large multinucleated cells with mirror-image nuclei ("owl\'s eyes"). Immunohistochemistry: Reed-Sternberg cells are CD15+, CD30+, CD20- (classical Hodgkin lymphoma). Nodular lymphocyte-predominant Hodgkin lymphoma: CD20+, CD15-, CD30-. STAGING: PET-CT scan (gold standard): Assess extent of disease, identify bulky disease (mediastinal mass >1/3 thoracic diameter or >10 cm), detect extranodal involvement. Ann Arbor staging: Stage I (single lymph node region), Stage II (≥2 lymph node regions on same side of diaphragm), Stage III (lymph node regions on both sides of diaphragm), Stage IV (extranodal involvement: bone marrow, liver, lung). Modifiers: A (no B symptoms), B (fever, night sweats, weight loss >10%), E (extranodal extension), S (splenic involvement), X (bulky disease). Laboratory: CBC, ESR, LDH, albumin, liver function tests, renal function. Bone marrow biopsy if cytopenias or PET-CT shows bone marrow involvement. Pulmonary function tests (baseline before bleomycin). Cardiac function (ECHO or MUGA) if anthracycline planned. Fertility preservation counseling. RISK STRATIFICATION: Early-stage favorable (IA-IIA without risk factors): No bulky disease, <3 sites involved, ESR <50 (or <30 if B symptoms), no extranodal disease. Early-stage unfavorable (IA-IIA with risk factors): Bulky mediastinal disease (>1/3 thoracic diameter or >10 cm), ≥3 sites involved, elevated ESR (≥50 or ≥30 if B symptoms), extranodal disease. Advanced-stage (IIB-IV): Any stage III-IV or stage IIB with risk factors. TREATMENT: Early-stage favorable (IA-IIA without risk factors): ABVD × 2 cycles: Doxorubicin 25 mg/m² IV days 1, 15, Bleomycin 10 units/m² IV days 1, 15, Vinblastine 6 mg/m² IV days 1, 15, Dacarbazine 375 mg/m² IV days 1, 15, every 28 days for 2 cycles. Interim PET-CT after 2 cycles: If PET-negative (Deauville score 1-3), proceed to ISRT 20 Gy. If PET-positive (Deauville score 4-5), escalate to ABVD × 4 cycles total + ISRT 30 Gy. Involved-site radiation therapy (ISRT) 20 Gy to initially involved sites. Early-stage unfavorable (IA-IIA with risk factors): ABVD × 4 cycles. Interim PET-CT after 2 cycles: If PET-negative, continue ABVD × 4 cycles total + ISRT 30 Gy. If PET-positive, consider escalated BEACOPP or brentuximab vedotin + AVD. ISRT 30 Gy to initially involved sites. Advanced-stage (IIB-IV): ABVD × 6 cycles. Interim PET-CT after 2 cycles: If PET-negative, continue ABVD × 6 cycles total (omit bleomycin after cycle 2 to reduce pulmonary toxicity). If PET-positive, escalate to escalated BEACOPP or brentuximab vedotin + AVD. End-of-treatment PET-CT: If PET-negative, observation. If PET-positive, consider radiation therapy to residual sites or salvage therapy. Escalated BEACOPP (for high-risk advanced-stage disease): Bleomycin 10 mg/m² IV day 8, Etoposide 200 mg/m² IV days 1-3, Doxorubicin 35 mg/m² IV day 1, Cyclophosphamide 1250 mg/m² IV day 1, Vincristine 1.4 mg/m² IV day 8 (max 2 mg), Procarbazine 100 mg/m² PO days 1-7, Prednisone 40 mg/m² PO days 1-14, G-CSF support, every 21 days for 6-8 cycles. Higher cure rate but more toxicity than ABVD. Brentuximab vedotin + AVD (alternative for advanced-stage disease): Brentuximab vedotin 1.2 mg/kg IV day 1, Doxorubicin 25 mg/m² IV day 1, Vinblastine 6 mg/m² IV day 1, Dacarbazine 375 mg/m² IV day 1, every 14 days for 12 cycles. Omits bleomycin (reduces pulmonary toxicity). RELAPSED/REFRACTORY HODGKIN LYMPHOMA: Salvage chemotherapy: ICE (ifosfamide, carboplatin, etoposide), DHAP (dexamethasone, high-dose cytarabine, cisplatin), GDP (gemcitabine, dexamethasone, cisplatin), ESHAP (etoposide, methylprednisolone, high-dose cytarabine, cisplatin). Brentuximab vedotin 1.8 mg/kg IV every 3 weeks for relapsed/refractory disease. Checkpoint inhibitors: Nivolumab 3 mg/kg IV every 2 weeks or Pembrolizumab 200 mg IV every 3 weeks for relapsed/refractory disease after brentuximab vedotin and autologous HSCT. Autologous HSCT: Standard for relapsed disease after achieving chemosensitive disease with salvage therapy. Conditioning: BEAM (carmustine, etoposide, cytarabine, melphalan) or CBV (cyclophosphamide, carmustine, etoposide). Brentuximab vedotin consolidation: 1.8 mg/kg IV every 3 weeks for 16 cycles after autologous HSCT for high-risk relapsed disease. Allogeneic HSCT: Consider for relapsed/refractory disease after autologous HSCT failure. Reduced-intensity conditioning preferred. NODULAR LYMPHOCYTE-PREDOMINANT HODGKIN LYMPHOMA: Early-stage (IA-IIA): Rituximab 375 mg/m² IV weekly × 4 weeks OR Involved-site radiation therapy 30 Gy. Advanced-stage (IIB-IV): R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone) or ABVD. SUPPORTIVE CARE: Bleomycin pulmonary toxicity monitoring: Baseline and periodic pulmonary function tests (DLCO). Discontinue bleomycin if DLCO <40% or symptomatic pneumonitis. Avoid high FiO2 during anesthesia. Anthracycline cardiac toxicity monitoring: Baseline and periodic ECHO or MUGA. Cumulative doxorubicin dose <450 mg/m². Infection prophylaxis: PCP prophylaxis (trimethoprim-sulfamethoxazole) during chemotherapy. Antiviral prophylaxis (acyclovir) if using brentuximab vedotin or checkpoint inhibitors. Antiemetics: 5-HT3 antagonists, NK1 antagonists, dexamethasone. Growth factors: G-CSF for neutropenic fever or dose-dense regimens. Fertility preservation: Sperm banking for men, oocyte/embryo cryopreservation for women before chemotherapy. MONITORING: Interim PET-CT after 2 cycles of chemotherapy (Deauville 5-point scale: 1-3 = negative, 4-5 = positive). End-of-treatment PET-CT 6-8 weeks after completing therapy. Response assessment: Complete remission (CR): PET-negative, no residual disease. Partial remission (PR): PET-positive but decreased uptake. Progressive disease (PD): New lesions or increased uptake. LONG-TERM FOLLOW-UP: History and physical exam every 3-6 months for 2 years, then every 6-12 months for 3 years, then annually. CBC, TSH annually. Surveillance imaging not routinely recommended unless clinically indicated. Monitor for late effects: Secondary malignancies (breast cancer, lung cancer, leukemia, NHL), Cardiovascular disease (coronary artery disease, heart failure, valvular disease), Pulmonary toxicity (bleomycin), Hypothyroidism (radiation to neck), Infertility. Breast cancer screening: Annual mammography and breast MRI starting 8 years after chest radiation or age 25 (whichever is later) for women who received chest radiation. Cardiovascular screening: Lipid panel, blood pressure monitoring, ECHO every 5 years if received anthracyclines or chest radiation.',
    keyPoints: [
      'PET-CT is gold standard for staging and response assessment',
      'ABVD is standard chemotherapy regimen',
      'Interim PET-CT after 2 cycles guides treatment adaptation',
      'Early-stage favorable: ABVD × 2 cycles + ISRT 20 Gy',
      'Advanced-stage: ABVD × 6 cycles (omit bleomycin after cycle 2 if PET-negative)',
      'Autologous HSCT for relapsed disease after salvage chemotherapy',
      'Brentuximab vedotin for relapsed/refractory disease',
      'Checkpoint inhibitors (nivolumab, pembrolizumab) for relapsed/refractory disease',
      'Monitor for late effects: secondary malignancies, cardiovascular disease, pulmonary toxicity',
    ],
    nccnUrl: 'https://www.nccn.org/professionals/physician_gls/pdf/hodgkins.pdf',
    publicationYear: 2024,
  },

  // MULTIPLE MYELOMA
  {
    topic: 'Multiple Myeloma - NCCN Guideline',
    keywords: ['multiple myeloma', 'myeloma', 'plasma cell myeloma', 'plasma cell dyscrasia', 'nccn myeloma', 'myeloma guideline', 'myeloma treatment', 'smoldering myeloma'],
    system: 'Hematology',
    guidelineSummary: 'The NCCN guideline for multiple myeloma provides comprehensive evidence-based recommendations for diagnosis, risk stratification, treatment, and supportive care. Multiple myeloma is a malignant proliferation of plasma cells producing monoclonal immunoglobulin (M protein). The guideline distinguishes between monoclonal gammopathy of undetermined significance (MGUS), smoldering myeloma, and active myeloma based on CRAB criteria (hypercalcemia, renal insufficiency, anemia, bone lesions) and biomarkers of malignancy. Risk stratification based on cytogenetics (high-risk: del(17p), t(4;14), t(14;16), t(14;20), gain(1q), del(1p); standard-risk: hyperdiploidy, t(11;14), t(6;14)) and ISS staging determines treatment intensity. First-line therapy for transplant-eligible patients is induction with proteasome inhibitor + immunomodulatory drug + dexamethasone (VRd: bortezomib, lenalidomide, dexamethasone) followed by autologous stem cell transplantation and lenalidomide maintenance. Transplant-ineligible patients receive continuous therapy with VRd or daratumumab-based regimens. Novel agents include proteasome inhibitors (bortezomib, carfilzomib, ixazomib), immunomodulatory drugs (lenalidomide, pomalidomide), monoclonal antibodies (daratumumab, isatuximab, elotuzumab), and CAR T-cell therapy (idecabtagene vicleucel, ciltacabtagene autoleucel).',
    category1Recommendations: [
      'Serum protein electrophoresis (SPEP), immunofixation, serum free light chains, 24-hour urine protein electrophoresis, and bone marrow biopsy with cytogenetics and FISH are required for diagnosis (Category 1)',
      'Skeletal survey or whole-body low-dose CT or PET-CT to assess bone lesions (Category 1)',
      'Active myeloma diagnosis requires ≥10% clonal plasma cells in bone marrow or biopsy-proven plasmacytoma PLUS one or more myeloma-defining events: CRAB criteria (hypercalcemia, renal insufficiency, anemia, bone lesions) or biomarkers of malignancy (≥60% plasma cells, serum FLC ratio ≥100, >1 focal lesion on MRI) (Category 1)',
      'Induction therapy with bortezomib, lenalidomide, dexamethasone (VRd) for transplant-eligible patients (Category 1)',
      'Autologous hematopoietic stem cell transplantation after induction for transplant-eligible patients (Category 1)',
      'Lenalidomide maintenance therapy after autologous HSCT until progression (Category 1)',
      'Bisphosphonates (zoledronic acid or pamidronate) for all patients with active myeloma to prevent skeletal-related events (Category 1)',
    ],
    category2ARecommendations: [
      'Daratumumab, lenalidomide, dexamethasone (DRd) for transplant-eligible or transplant-ineligible patients (Category 2A)',
      'Carfilzomib, lenalidomide, dexamethasone (KRd) for transplant-eligible patients (Category 2A)',
      'Daratumumab, bortezomib, melphalan, prednisone (D-VMP) for transplant-ineligible patients (Category 2A)',
      'Ixazomib, lenalidomide, dexamethasone (IRd) for transplant-ineligible patients (Category 2A)',
      'Tandem autologous HSCT for high-risk cytogenetics (del(17p), t(4;14), t(14;16)) (Category 2A)',
      'Maintenance therapy with lenalidomide or bortezomib for transplant-ineligible patients (Category 2A)',
      'Relapsed/refractory myeloma: Daratumumab, pomalidomide, dexamethasone (DPd) OR Carfilzomib, pomalidomide, dexamethasone (KPd) OR Isatuximab, pomalidomide, dexamethasone (IsaPd) OR Elotuzumab, pomalidomide, dexamethasone (EPd) (Category 2A)',
      'CAR T-cell therapy (idecabtagene vicleucel or ciltacabtagene autoleucel) for relapsed/refractory myeloma after ≥4 prior therapies (Category 2A)',
      'Selinexor, bortezomib, dexamethasone (SVd) for relapsed/refractory myeloma (Category 2A)',
      'Belantamab mafodotin for relapsed/refractory myeloma after ≥4 prior therapies (Category 2A)',
    ],
    category2BRecommendations: [
      'Bortezomib, cyclophosphamide, dexamethasone (VCd) for induction therapy (Category 2B)',
      'Bortezomib, thalidomide, dexamethasone (VTd) for induction therapy (Category 2B)',
      'Observation for smoldering myeloma (no CRAB criteria or biomarkers of malignancy) (Category 2B)',
      'Clinical trial for high-risk smoldering myeloma (≥60% plasma cells or serum FLC ratio ≥100) (Category 2B)',
      'Allogeneic hematopoietic stem cell transplantation for relapsed/refractory myeloma (investigational) (Category 2B)',
    ],
    category3Recommendations: [
      'Routine use of prophylactic growth factors (G-CSF) is not recommended (Category 3)',
    ],
    qualityOfEvidence: 'Multiple levels: Category 1 recommendations are based on High quality evidence from randomized controlled trials (IFM 2009, SWOG S0777, MAIA, ALCYONE, ASPIRE, POLLUX, CASTOR); Category 2A recommendations are based on Moderate quality evidence; Category 2B recommendations are based on Low quality evidence or expert consensus',
    clinicalImplementation: 'Implementation of NCCN multiple myeloma guidelines requires comprehensive diagnostic workup and risk stratification. DIAGNOSIS: Serum protein electrophoresis (SPEP): Identifies M protein (monoclonal spike). Immunofixation: Identifies immunoglobulin type (IgG, IgA, IgD, IgE, IgM) and light chain (kappa or lambda). Serum free light chains (FLC): Kappa and lambda levels, kappa/lambda ratio (normal 0.26-1.65). Elevated ratio indicates clonal plasma cell disorder. 24-hour urine protein electrophoresis (UPEP): Detects Bence Jones protein (light chains in urine). Bone marrow biopsy: ≥10% clonal plasma cells confirms diagnosis. Flow cytometry, cytogenetics (karyotype), FISH (del(17p), t(4;14), t(14;16), t(14;20), gain(1q), del(1p), hyperdiploidy, t(11;14)). Skeletal survey or whole-body low-dose CT or PET-CT: Assess for lytic lesions, fractures, osteopenia. MRI spine and pelvis if skeletal survey negative but high suspicion. DIAGNOSTIC CRITERIA: MGUS (Monoclonal Gammopathy of Undetermined Significance): M protein <3 g/dL, <10% plasma cells in bone marrow, no CRAB criteria or biomarkers of malignancy. Risk of progression to myeloma 1% per year. Observation with annual SPEP and FLC. Smoldering Myeloma: M protein ≥3 g/dL or ≥10% plasma cells in bone marrow, no CRAB criteria or biomarkers of malignancy. Risk of progression 10% per year for first 5 years. Observation with SPEP, FLC, and imaging every 3-6 months. Consider clinical trial for high-risk smoldering myeloma. Active Myeloma: ≥10% clonal plasma cells in bone marrow or biopsy-proven plasmacytoma PLUS one or more myeloma-defining events: CRAB criteria: Hypercalcemia (calcium >11 mg/dL or >1 mg/dL above upper limit of normal), Renal insufficiency (creatinine >2 mg/dL or creatinine clearance <40 mL/min), Anemia (hemoglobin <10 g/dL or >2 g/dL below lower limit of normal), Bone lesions (≥1 lytic lesion on skeletal survey, CT, or PET-CT). OR Biomarkers of malignancy: ≥60% clonal plasma cells in bone marrow, Serum FLC ratio ≥100 (involved/uninvolved), >1 focal lesion (≥5 mm) on MRI. STAGING: International Staging System (ISS): Stage I (beta-2 microglobulin <3.5 mg/L, albumin ≥3.5 g/dL), Stage II (not stage I or III), Stage III (beta-2 microglobulin ≥5.5 mg/L). Revised ISS (R-ISS): Incorporates ISS, cytogenetics (high-risk: del(17p), t(4;14), t(14;16)), and LDH. R-ISS I (ISS I, standard-risk cytogenetics, normal LDH), R-ISS II (not R-ISS I or III), R-ISS III (ISS III and high-risk cytogenetics or elevated LDH). RISK STRATIFICATION: High-risk cytogenetics: del(17p), t(4;14), t(14;16), t(14;20), gain(1q), del(1p). Standard-risk cytogenetics: Hyperdiploidy, t(11;14), t(6;14). TREATMENT: Transplant-eligible patients (age <70-75 years, good performance status, no significant comorbidities): Induction therapy (4-6 cycles): VRd (preferred): Bortezomib 1.3 mg/m² SC days 1, 4, 8, 11, Lenalidomide 25 mg PO days 1-14, Dexamethasone 40 mg PO days 1, 8, 15, 22, every 21 days. OR DRd: Daratumumab 16 mg/kg IV weekly cycles 1-2, every 2 weeks cycles 3-6, Lenalidomide 25 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. OR KRd: Carfilzomib 20 mg/m² IV day 1, then 56 mg/m² IV days 8, 15 cycle 1, then 56 mg/m² days 1, 8, 15 cycles 2+, Lenalidomide 25 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. Stem cell collection: After 4 cycles of induction, mobilize with G-CSF ± plerixafor. Collect ≥5 × 10^6 CD34+ cells/kg. Autologous HSCT: Conditioning with high-dose melphalan 200 mg/m² (or 140 mg/m² if age >70 or renal insufficiency). Stem cell infusion day 0. Tandem HSCT (2 transplants 3-6 months apart) for high-risk cytogenetics. Maintenance therapy: Lenalidomide 10-15 mg PO days 1-21 every 28 days until progression. Continue indefinitely (improves PFS and OS). Transplant-ineligible patients (age ≥75 years, poor performance status, significant comorbidities): Continuous therapy until progression: DRd (preferred): Daratumumab 16 mg/kg IV weekly cycles 1-2, every 2 weeks cycles 3-6, every 4 weeks cycle 7+, Lenalidomide 25 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. OR VRd: Bortezomib, lenalidomide, dexamethasone (as above) until progression. OR D-VMP: Daratumumab 16 mg/kg IV weekly cycles 1-2, every 2 weeks cycles 3-6, every 4 weeks cycle 7+, Bortezomib 1.3 mg/m² SC days 1, 4, 8, 11 cycles 1-9, Melphalan 9 mg/m² PO days 1-4, Prednisone 60 mg/m² PO days 1-4, every 42 days for 9 cycles, then daratumumab maintenance. OR IRd: Ixazomib 4 mg PO days 1, 8, 15, Lenalidomide 25 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days until progression. RELAPSED/REFRACTORY MYELOMA: First relapse: DPd: Daratumumab 16 mg/kg IV weekly cycles 1-2, every 2 weeks cycles 3-6, every 4 weeks cycle 7+, Pomalidomide 4 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. OR KPd: Carfilzomib 20 mg/m² IV day 1, then 56 mg/m² IV days 8, 15 cycle 1, then 56 mg/m² days 1, 8, 15 cycles 2+, Pomalidomide 4 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. OR IsaPd: Isatuximab 10 mg/kg IV weekly cycle 1, every 2 weeks cycle 2+, Pomalidomide 4 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. OR EPd: Elotuzumab 10 mg/kg IV weekly cycles 1-2, every 2 weeks cycle 3+, Pomalidomide 4 mg PO days 1-21, Dexamethasone 40 mg PO weekly, every 28 days. OR SVd: Selinexor 100 mg PO weekly, Bortezomib 1.3 mg/m² SC weekly, Dexamethasone 20 mg PO twice weekly. Multiple relapses (≥4 prior therapies): CAR T-cell therapy: Idecabtagene vicleucel (ide-cel) or Ciltacabtagene autoleucel (cilta-cel) for relapsed/refractory myeloma after ≥4 prior therapies including proteasome inhibitor, immunomodulatory drug, and anti-CD38 antibody. OR Belantamab mafodotin 2.5 mg/kg IV every 3 weeks (anti-BCMA antibody-drug conjugate). OR Clinical trial. SUPPORTIVE CARE: Bisphosphonates: Zoledronic acid 4 mg IV every 3-4 weeks or Pamidronate 90 mg IV every 3-4 weeks for all patients with active myeloma. Prevents skeletal-related events (fractures, spinal cord compression, hypercalcemia). Continue for 2 years, then reassess. Monitor renal function and risk of osteonecrosis of jaw (dental exam before starting). Hypercalcemia: Aggressive hydration (3-4 L/day), bisphosphonates, calcitonin, denosumab for refractory cases. Renal failure: Hydration, avoid NSAIDs and nephrotoxic drugs, plasmapheresis for light chain cast nephropathy, dialysis if needed. Anemia: Erythropoietin if hemoglobin <10 g/dL and no other cause. Transfusion for symptomatic anemia. Infections: IVIG 400 mg/kg monthly for recurrent infections with hypogammaglobulinemia. Antibiotic prophylaxis (fluoroquinolone) during induction. Antiviral prophylaxis (acyclovir or valacyclovir) if using proteasome inhibitor or daratumumab. PCP prophylaxis (trimethoprim-sulfamethoxazole) if using high-dose dexamethasone. Thrombosis prophylaxis: Aspirin 81 mg daily or LMWH for patients on lenalidomide or thalidomide plus dexamethasone. Peripheral neuropathy: Dose reduce or switch proteasome inhibitor (bortezomib to carfilzomib or ixazomib). Gabapentin or duloxetine for symptomatic relief. Radiation therapy: For painful bone lesions, spinal cord compression, or impending fractures. MONITORING: SPEP, immunofixation, serum FLC every 1-3 months during treatment. Bone marrow biopsy if suspicion of progression or to confirm complete remission. Skeletal survey or CT annually or if new bone pain. MRI or PET-CT for suspected extramedullary disease. Response assessment: Complete remission (CR): Negative immunofixation, <5% plasma cells in bone marrow, no soft tissue plasmacytomas. Stringent CR (sCR): CR plus normal FLC ratio and no clonal plasma cells by flow cytometry. Very good partial remission (VGPR): M protein detectable by immunofixation but not SPEP, or ≥90% reduction in M protein plus urine M protein <100 mg/24 hours. Partial remission (PR): ≥50% reduction in M protein and ≥90% reduction in urine M protein. Progressive disease (PD): ≥25% increase in M protein, new bone lesions, or hypercalcemia. LONG-TERM FOLLOW-UP: SPEP, FLC every 3-6 months during maintenance or observation. Monitor for late effects: secondary malignancies, infections, renal dysfunction, neuropathy, cardiac toxicity (carfilzomib).',
    keyPoints: [
      'CRAB criteria (hypercalcemia, renal insufficiency, anemia, bone lesions) define active myeloma',
      'VRd (bortezomib, lenalidomide, dexamethasone) is standard induction for transplant-eligible patients',
      'Autologous HSCT after induction for transplant-eligible patients',
      'Lenalidomide maintenance after HSCT improves PFS and OS',
      'Daratumumab-based regimens (DRd, D-VMP) for transplant-ineligible patients',
      'Bisphosphonates (zoledronic acid) for all patients with active myeloma',
      'CAR T-cell therapy for relapsed/refractory myeloma after ≥4 prior therapies',
      'High-risk cytogenetics: del(17p), t(4;14), t(14;16) require intensified therapy',
      'Monitor for complications: hypercalcemia, renal failure, infections, thrombosis',
    ],
    nccnUrl: 'https://www.nccn.org/professionals/physician_gls/pdf/myeloma.pdf',
    publicationYear: 2024,
  },
];

/**
 * Search function to find relevant NCCN guideline entries based on query
 */
export function searchNCCNGuidelines(query: string): NCCNGuidelineEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 2);

  const scoredEntries = nccnGuidelinesKnowledge.map(entry => {
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

  console.log(`NCCN Guidelines search for "${query}":`, filteredEntries.slice(0, 3).map(item => ({
    topic: item.entry.topic,
    score: item.score,
  })));

  return filteredEntries.slice(0, 3).map(item => item.entry);
}

/**
 * Get NCCN guideline by exact topic name
 */
export function getNCCNGuidelineByTopic(topic: string): NCCNGuidelineEntry | undefined {
  return nccnGuidelinesKnowledge.find(
    entry => entry.topic.toLowerCase() === topic.toLowerCase()
  );
}

/**
 * Get all NCCN guidelines for a specific system
 */
export function getNCCNGuidelinesBySystem(system: string): NCCNGuidelineEntry[] {
  return nccnGuidelinesKnowledge.filter(
    entry => entry.system.toLowerCase() === system.toLowerCase()
  );
}
