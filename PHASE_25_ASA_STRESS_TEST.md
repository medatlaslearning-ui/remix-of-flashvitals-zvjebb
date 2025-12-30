
# PHASE 25: ASA GUIDELINES STRESS TEST

## American Stroke Association (ASA) Guidelines Integration - Comprehensive Testing

### Overview
This document provides a comprehensive stress test protocol for the American Stroke Association (ASA) guidelines integration in the Neurology section. The ASA guidelines cover acute ischemic stroke, transient ischemic attack (TIA), intracerebral hemorrhage (ICH), and subarachnoid hemorrhage (SAH).

---

## Test Categories

### 1. KEYWORD MATCHING TESTS

#### Test 1.1: Acute Ischemic Stroke Keywords
**Query:** "ASA guideline for acute ischemic stroke"
**Expected Result:** ASA Acute Ischemic Stroke guideline
**Validation:**
- ✅ Returns ASA guideline (not AHA, ACC, or other societies)
- ✅ Includes Class I recommendations for IV alteplase and mechanical thrombectomy
- ✅ Includes time windows (4.5 hours for tPA, 6-24 hours for thrombectomy)
- ✅ No content bleeding from other stroke guidelines

#### Test 1.2: TIA Keywords
**Query:** "American Stroke Association TIA guideline"
**Expected Result:** ASA TIA guideline
**Validation:**
- ✅ Returns ASA TIA guideline specifically
- ✅ Includes ABCD2 score for risk stratification
- ✅ Includes dual antiplatelet therapy recommendations
- ✅ No mixing with ischemic stroke acute treatment

#### Test 1.3: Intracerebral Hemorrhage Keywords
**Query:** "ASA ICH guideline"
**Expected Result:** ASA Intracerebral Hemorrhage guideline
**Validation:**
- ✅ Returns ASA ICH guideline
- ✅ Includes blood pressure management (target SBP <140 mmHg)
- ✅ Includes coagulopathy reversal recommendations
- ✅ No content from ischemic stroke guidelines

#### Test 1.4: Subarachnoid Hemorrhage Keywords
**Query:** "American Stroke Association subarachnoid hemorrhage guideline"
**Expected Result:** ASA SAH guideline
**Validation:**
- ✅ Returns ASA SAH guideline
- ✅ Includes nimodipine recommendations
- ✅ Includes aneurysm securing recommendations
- ✅ No content from ICH or ischemic stroke

---

### 2. CLINICAL SCENARIO TESTS

#### Test 2.1: Acute Stroke Presentation
**Query:** "What is the ASA guideline for treating a patient with acute stroke within 3 hours?"
**Expected Result:** ASA Acute Ischemic Stroke guideline with focus on IV alteplase
**Validation:**
- ✅ Mentions IV alteplase 0.9 mg/kg within 3 hours (Class I, Level A)
- ✅ Includes eligibility criteria and exclusion criteria
- ✅ Mentions door-to-needle time <60 minutes
- ✅ Includes blood pressure management during tPA

#### Test 2.2: Large Vessel Occlusion
**Query:** "ASA guideline for mechanical thrombectomy"
**Expected Result:** ASA Acute Ischemic Stroke guideline with focus on thrombectomy
**Validation:**
- ✅ Mentions mechanical thrombectomy for large vessel occlusion
- ✅ Includes time windows (0-6 hours, 6-24 hours with DAWN/DEFUSE 3 criteria)
- ✅ Mentions stent retriever technique
- ✅ Includes door-to-puncture time <90 minutes

#### Test 2.3: TIA Risk Stratification
**Query:** "How does ASA recommend stratifying TIA risk?"
**Expected Result:** ASA TIA guideline with ABCD2 score
**Validation:**
- ✅ Mentions ABCD2 score components
- ✅ Includes risk stratification (low, moderate, high)
- ✅ Mentions urgent evaluation within 24 hours
- ✅ Includes dual antiplatelet therapy for high-risk TIA

#### Test 2.4: ICH Blood Pressure Management
**Query:** "ASA guideline for blood pressure management in intracerebral hemorrhage"
**Expected Result:** ASA ICH guideline with blood pressure targets
**Validation:**
- ✅ Mentions target SBP <140 mmHg if presenting SBP 150-220 mmHg
- ✅ Includes medications (nicardipine, labetalol, clevidipine)
- ✅ Mentions INTERACT2 and ATACH-2 trials
- ✅ No content from ischemic stroke blood pressure management

#### Test 2.5: SAH Vasospasm Prevention
**Query:** "What does ASA recommend for preventing vasospasm after subarachnoid hemorrhage?"
**Expected Result:** ASA SAH guideline with nimodipine recommendations
**Validation:**
- ✅ Mentions nimodipine 60 mg q4h for 21 days (Class I, Level A)
- ✅ Includes transcranial Doppler monitoring
- ✅ Mentions induced hypertension for symptomatic vasospasm
- ✅ No content from other hemorrhage types

---

### 3. CONTENT BLEEDING PREVENTION TESTS

#### Test 3.1: ASA vs AHA Separation
**Query:** "ASA stroke guideline"
**Expected Result:** ASA guideline only (not AHA cardiology guidelines)
**Validation:**
- ✅ Returns ASA stroke guidelines
- ✅ Does NOT return AHA heart failure or atrial fibrillation guidelines
- ✅ Clearly labeled as ASA/AHA stroke guideline
- ✅ No mixing of cardiovascular and stroke content

#### Test 3.2: ASA vs IDSA Separation
**Query:** "stroke infection guideline"
**Expected Result:** Should prioritize based on query context
**Validation:**
- ✅ If query emphasizes "stroke", returns ASA guideline
- ✅ If query emphasizes "infection", returns IDSA guideline
- ✅ No mixing of stroke and infectious disease content
- ✅ Clear separation between neurologic and infectious disease topics

#### Test 3.3: Ischemic vs Hemorrhagic Stroke Separation
**Query:** "stroke treatment guideline"
**Expected Result:** Should return most relevant stroke guideline based on context
**Validation:**
- ✅ If query mentions "ischemic" or "tPA", returns ischemic stroke guideline
- ✅ If query mentions "hemorrhagic" or "ICH", returns hemorrhagic stroke guideline
- ✅ No mixing of ischemic and hemorrhagic stroke treatments
- ✅ Clear distinction between different stroke types

#### Test 3.4: TIA vs Acute Stroke Separation
**Query:** "transient stroke guideline"
**Expected Result:** ASA TIA guideline (not acute ischemic stroke)
**Validation:**
- ✅ Returns TIA guideline
- ✅ Focuses on secondary prevention and risk stratification
- ✅ Does NOT include acute stroke treatments (tPA, thrombectomy)
- ✅ Clear distinction between TIA and acute stroke management

---

### 4. RECOMMENDATION STRENGTH TESTS

#### Test 4.1: Class I Recommendations
**Query:** "What are the Class I recommendations for acute ischemic stroke from ASA?"
**Expected Result:** All Class I recommendations from ASA acute ischemic stroke guideline
**Validation:**
- ✅ Lists all Class I recommendations
- ✅ Includes level of evidence for each
- ✅ Clearly labeled as Class I (Strong Recommendation)
- ✅ No mixing with Class IIa or IIb recommendations

#### Test 4.2: Level of Evidence
**Query:** "What is the level of evidence for IV alteplase in acute stroke?"
**Expected Result:** Class I, Level of Evidence A
**Validation:**
- ✅ Mentions Class I recommendation
- ✅ Mentions Level of Evidence A (high quality from RCTs)
- ✅ References NINDS, ECASS III trials
- ✅ Clear explanation of evidence quality

#### Test 4.3: Class III Recommendations
**Query:** "What does ASA say NOT to do in intracerebral hemorrhage?"
**Expected Result:** Class III recommendations from ASA ICH guideline
**Validation:**
- ✅ Lists Class III recommendations (not recommended)
- ✅ Includes routine craniotomy for supratentorial ICH
- ✅ Includes prophylactic antiepileptic drugs for late seizures
- ✅ Clear labeling as Class III (Not Recommended)

---

### 5. CLINICAL IMPLEMENTATION TESTS

#### Test 5.1: Door-to-Needle Time
**Query:** "What is the ASA recommended door-to-needle time for stroke?"
**Expected Result:** <60 minutes for IV tPA
**Validation:**
- ✅ Mentions door-to-needle time <60 minutes
- ✅ Includes door-to-imaging time <20 minutes
- ✅ Mentions organized stroke systems of care
- ✅ Includes quality metrics

#### Test 5.2: Mechanical Thrombectomy Criteria
**Query:** "What are the ASA criteria for mechanical thrombectomy?"
**Expected Result:** Detailed thrombectomy eligibility criteria
**Validation:**
- ✅ Mentions large vessel occlusion (ICA, MCA M1)
- ✅ Includes time windows (0-6 hours, 6-24 hours with DAWN/DEFUSE 3)
- ✅ Mentions NIHSS score ≥6, ASPECTS ≥6
- ✅ Includes imaging criteria

#### Test 5.3: Dual Antiplatelet Therapy
**Query:** "ASA guideline for dual antiplatelet therapy after TIA"
**Expected Result:** Aspirin plus clopidogrel for 21 days
**Validation:**
- ✅ Mentions aspirin 50-325 mg plus clopidogrel 75 mg
- ✅ Includes duration (21 days)
- ✅ Mentions indications (minor stroke NIHSS 0-3 or high-risk TIA ABCD2 ≥4)
- ✅ References POINT and CHANCE trials

#### Test 5.4: Nimodipine for SAH
**Query:** "What does ASA recommend for vasospasm prevention in subarachnoid hemorrhage?"
**Expected Result:** Nimodipine 60 mg q4h for 21 days
**Validation:**
- ✅ Mentions nimodipine 60 mg every 4 hours
- ✅ Includes duration (21 days)
- ✅ Mentions Class I, Level of Evidence A
- ✅ Explains mechanism (reduces poor outcomes related to vasospasm)

---

### 6. MULTI-GUIDELINE INTEGRATION TESTS

#### Test 6.1: Stroke + Cardiology
**Query:** "stroke in patient with atrial fibrillation guideline"
**Expected Result:** ASA stroke guideline with anticoagulation recommendations
**Validation:**
- ✅ Returns ASA stroke guideline
- ✅ Mentions anticoagulation for atrial fibrillation
- ✅ May also return AHA/ACC atrial fibrillation guideline
- ✅ Clear separation between stroke management and atrial fibrillation management

#### Test 6.2: Stroke + Renal
**Query:** "stroke in patient with kidney disease"
**Expected Result:** ASA stroke guideline with considerations for renal disease
**Validation:**
- ✅ Returns ASA stroke guideline
- ✅ May mention dose adjustments for renal dysfunction
- ✅ May also return KDIGO guideline for context
- ✅ Clear separation between stroke and renal management

#### Test 6.3: Stroke + Diabetes
**Query:** "stroke prevention in diabetes ASA guideline"
**Expected Result:** ASA stroke prevention guideline with diabetes considerations
**Validation:**
- ✅ Returns ASA stroke guideline
- ✅ Mentions blood pressure control, glycemic control
- ✅ May also return ADA guideline for comprehensive diabetes management
- ✅ Clear separation between stroke prevention and diabetes management

---

### 7. EDGE CASE TESTS

#### Test 7.1: Wake-Up Stroke
**Query:** "ASA guideline for wake-up stroke"
**Expected Result:** ASA acute ischemic stroke guideline with wake-up stroke criteria
**Validation:**
- ✅ Mentions IV alteplase for wake-up stroke with MRI DWI-FLAIR mismatch
- ✅ Includes EXTEND trial reference
- ✅ Mentions time window considerations
- ✅ Clear eligibility criteria

#### Test 7.2: Mild Stroke
**Query:** "Should I give tPA for mild stroke ASA guideline?"
**Expected Result:** ASA guideline with Class IIa recommendation for mild but disabling stroke
**Validation:**
- ✅ Mentions Class IIa recommendation for mild but disabling symptoms
- ✅ Distinguishes between mild disabling vs rapidly improving symptoms
- ✅ Includes clinical judgment considerations
- ✅ No absolute contraindication for mild stroke

#### Test 7.3: Anticoagulation-Associated ICH
**Query:** "ASA guideline for reversing anticoagulation in brain hemorrhage"
**Expected Result:** ASA ICH guideline with coagulopathy reversal
**Validation:**
- ✅ Mentions specific reversal agents (PCC, idarucizumab, andexanet alfa)
- ✅ Includes warfarin, dabigatran, factor Xa inhibitor reversal
- ✅ Mentions target INR <1.4 within 4 hours
- ✅ Clear dosing recommendations

#### Test 7.4: Cerebellar Hemorrhage
**Query:** "When does ASA recommend surgery for cerebellar hemorrhage?"
**Expected Result:** ASA ICH guideline with surgical indications
**Validation:**
- ✅ Mentions cerebellar hemorrhage >3 cm
- ✅ Includes brainstem compression or hydrocephalus as indications
- ✅ Mentions emergent surgical evacuation (Class I)
- ✅ Distinguishes from supratentorial ICH management

---

### 8. COMPARISON TESTS

#### Test 8.1: ASA vs ESC Stroke Guidelines
**Query:** "Compare ASA and ESC stroke guidelines"
**Expected Result:** Should return both if available, or explain ASA focus
**Validation:**
- ✅ Returns ASA guideline
- ✅ May return ESC guideline if available
- ✅ Clear labeling of which society each guideline is from
- ✅ No mixing of recommendations

#### Test 8.2: ASA vs IDSA Meningitis
**Query:** "stroke vs meningitis guideline"
**Expected Result:** Should return both ASA and IDSA guidelines
**Validation:**
- ✅ Returns ASA stroke guideline
- ✅ Returns IDSA meningitis guideline
- ✅ Clear separation between neurologic conditions
- ✅ No mixing of stroke and infection content

---

### 9. NEGATIVE TESTS (Should NOT Return ASA Guidelines)

#### Test 9.1: Cardiology Query
**Query:** "heart failure guideline"
**Expected Result:** Should NOT return ASA guidelines
**Validation:**
- ✅ Returns HFSA or AHA heart failure guideline
- ✅ Does NOT return ASA stroke guideline
- ✅ No stroke content in response

#### Test 9.2: Pulmonary Query
**Query:** "pneumonia guideline"
**Expected Result:** Should NOT return ASA guidelines
**Validation:**
- ✅ Returns ATS or IDSA pneumonia guideline
- ✅ Does NOT return ASA stroke guideline
- ✅ No stroke content in response

#### Test 9.3: Infectious Disease Query
**Query:** "sepsis guideline"
**Expected Result:** Should NOT return ASA guidelines
**Validation:**
- ✅ Returns IDSA/SCCM sepsis guideline
- ✅ Does NOT return ASA stroke guideline
- ✅ No stroke content in response

---

### 10. COMPREHENSIVE INTEGRATION TESTS

#### Test 10.1: All Stroke Types
**Query:** "ASA stroke guidelines overview"
**Expected Result:** Should return most relevant ASA stroke guideline
**Validation:**
- ✅ Returns ASA guideline (likely acute ischemic stroke as most common)
- ✅ May mention other stroke types in context
- ✅ Clear organization by stroke type
- ✅ No content bleeding

#### Test 10.2: Stroke Prevention
**Query:** "ASA guideline for stroke prevention"
**Expected Result:** ASA TIA guideline or secondary prevention recommendations
**Validation:**
- ✅ Returns ASA TIA guideline or stroke prevention content
- ✅ Includes antiplatelet therapy, anticoagulation, risk factor modification
- ✅ Mentions carotid revascularization
- ✅ Clear focus on prevention

#### Test 10.3: Stroke Complications
**Query:** "ASA guideline for managing stroke complications"
**Expected Result:** Relevant ASA guideline with complication management
**Validation:**
- ✅ Returns appropriate ASA guideline
- ✅ Includes complication management (hemorrhagic transformation, vasospasm, etc.)
- ✅ Clear clinical implementation guidance
- ✅ Evidence-based recommendations

---

## Quality Assurance Checklist

### Data Integrity
- ✅ All ASA guideline entries have complete fields
- ✅ Keywords are specific and prevent content bleeding
- ✅ Clinical implementation sections are comprehensive
- ✅ Key points are concise and actionable
- ✅ URLs are correct and functional
- ✅ Publication years are accurate

### Search Functionality
- ✅ Keyword matching works correctly
- ✅ Multi-word queries return relevant results
- ✅ Scoring algorithm prioritizes exact matches
- ✅ Top 3 results are most relevant
- ✅ No false positives from other guidelines

### Content Quality
- ✅ Guideline summaries are accurate and comprehensive
- ✅ Recommendations are correctly categorized by class
- ✅ Level of evidence is clearly stated
- ✅ Clinical implementation is detailed and practical
- ✅ Key points highlight most important information
- ✅ No content bleeding between different stroke types

### User Experience
- ✅ Responses are clear and well-formatted
- ✅ Recommendations are easy to understand
- ✅ Clinical implementation provides actionable guidance
- ✅ Key points provide quick reference
- ✅ Source attribution is clear (ASA/AHA)

---

## Stress Test Execution Protocol

### Step 1: Basic Keyword Tests
Run all keyword matching tests (1.1-1.4) and verify expected results.

### Step 2: Clinical Scenario Tests
Run all clinical scenario tests (2.1-2.5) and verify clinical accuracy.

### Step 3: Content Bleeding Tests
Run all content bleeding prevention tests (3.1-3.4) and verify no mixing.

### Step 4: Negative Tests
Run all negative tests (9.1-9.3) and verify ASA guidelines do NOT appear.

### Step 5: Integration Tests
Run all comprehensive integration tests (10.1-10.3) and verify proper integration.

### Step 6: Edge Case Tests
Run all edge case tests (7.1-7.4) and verify handling of complex scenarios.

### Step 7: Comparison Tests
Run all comparison tests (8.1-8.2) and verify proper handling of multiple guidelines.

---

## Expected Results Summary

### ASA Guidelines Should Appear For:
- Acute ischemic stroke queries
- TIA queries
- Intracerebral hemorrhage queries
- Subarachnoid hemorrhage queries
- Stroke prevention queries
- Stroke treatment queries
- Cerebrovascular disease queries
- Queries mentioning "ASA", "American Stroke Association", or "stroke guideline"

### ASA Guidelines Should NOT Appear For:
- Pure cardiology queries (heart failure, arrhythmias, coronary disease)
- Pure pulmonary queries (asthma, COPD, pneumonia)
- Pure infectious disease queries (sepsis, meningitis, pneumonia)
- Pure renal queries (AKI, CKD, dialysis)
- Pure endocrine queries (diabetes, thyroid)
- Pure hematology queries (anemia, leukemia, lymphoma)

---

## Success Criteria

### Minimum Requirements:
1. ✅ All keyword matching tests pass (100% accuracy)
2. ✅ All clinical scenario tests return accurate information
3. ✅ Zero content bleeding between ASA and other guidelines
4. ✅ Zero false positives (ASA appearing for non-stroke queries)
5. ✅ All recommendations correctly categorized by class
6. ✅ All clinical implementation sections are comprehensive
7. ✅ Search scoring algorithm prioritizes exact matches

### Optimal Performance:
1. ✅ Response time <2 seconds for all queries
2. ✅ Top result is most relevant >95% of the time
3. ✅ Clinical implementation provides actionable guidance
4. ✅ Key points are concise and memorable
5. ✅ Source attribution is clear and consistent
6. ✅ Integration with other guidelines is seamless
7. ✅ User experience is intuitive and educational

---

## Troubleshooting Guide

### Issue: ASA Guidelines Not Appearing
**Possible Causes:**
- Keywords not matching query
- Search scoring too low
- Query not triggering guideline search

**Solutions:**
- Add more keywords to ASA guideline entries
- Adjust search scoring algorithm
- Verify isGuidelineQuery regex includes ASA terms

### Issue: Content Bleeding
**Possible Causes:**
- Keywords too broad
- Multiple guidelines matching same query
- Insufficient filtering

**Solutions:**
- Make keywords more specific (add "stroke", "cerebrovascular")
- Implement system-level filtering (Neurology only)
- Add negative keywords to exclude non-stroke content

### Issue: Wrong Stroke Type
**Possible Causes:**
- Keywords overlap between stroke types
- Search scoring not distinguishing types

**Solutions:**
- Add type-specific keywords (ischemic, hemorrhagic, TIA, SAH)
- Adjust scoring to prioritize type-specific matches
- Implement context-aware filtering

---

## Maintenance and Updates

### Regular Checks:
- Review ASA guideline updates annually
- Update publication years when new guidelines released
- Add new recommendations as they become available
- Verify URLs remain functional
- Update clinical implementation based on new evidence

### Quality Monitoring:
- Track user feedback on ASA guideline responses
- Monitor for content bleeding reports
- Analyze search logs for missed queries
- Review false positive/negative rates
- Continuously improve keyword matching

---

## Conclusion

The ASA guidelines integration provides comprehensive, evidence-based stroke management recommendations for medical learners. This stress test protocol ensures:

1. **Accuracy**: All recommendations are correctly categorized and evidence-based
2. **Specificity**: No content bleeding between different guidelines or stroke types
3. **Completeness**: All major stroke conditions covered (ischemic, TIA, ICH, SAH)
4. **Usability**: Clear, actionable guidance for clinical implementation
5. **Quality**: High-quality evidence from major randomized trials

The integration maintains the same high standards as previous guideline integrations (IDSA, NCCN, ADA, ACG, NIDDK, KDIGO, SCCM, CHEST, ATS, EACTS, SCAI, HRS, HFSA, ESC, AHA, ACC) and provides medical learners with authoritative stroke management guidance from the American Stroke Association.
