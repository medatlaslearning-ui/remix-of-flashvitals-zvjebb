
# ASA GUIDELINES TESTING CHECKLIST

## American Stroke Association (ASA) Guidelines - Quality Assurance

### Pre-Deployment Testing Checklist

---

## 1. BASIC FUNCTIONALITY TESTS

### Test 1.1: File Existence
- [ ] `data/asaGuidelinesKnowledge.ts` file exists
- [ ] File contains ASAGuidelineEntry interface
- [ ] File contains asaGuidelinesKnowledge array
- [ ] File contains searchASAGuidelines function
- [ ] File contains helper functions (getASAGuidelineByTopic, getASAGuidelinesBySystem)

### Test 1.2: Data Integrity
- [ ] All 3 guideline entries are present (Acute Ischemic Stroke, TIA, ICH, SAH)
- [ ] Each entry has complete fields (topic, keywords, system, guidelineSummary, etc.)
- [ ] Keywords are specific and comprehensive
- [ ] Clinical implementation sections are detailed
- [ ] Key points are concise and actionable
- [ ] URLs are correct and functional
- [ ] Publication years are accurate

### Test 1.3: Import and Integration
- [ ] ASA guidelines imported in chatbot.tsx
- [ ] ASAGuidelineEntry type imported
- [ ] searchASAGuidelines function imported
- [ ] Message interface includes asaGuidelines field
- [ ] generateDynamicResponse includes asaGuidelines parameter

---

## 2. KEYWORD MATCHING TESTS

### Test 2.1: Acute Ischemic Stroke Keywords
**Query:** "ASA guideline for acute ischemic stroke"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Does NOT return other stroke types
- [ ] Score is high (>10000)
- [ ] Top result is correct

**Query:** "tPA guideline"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions IV alteplase
- [ ] Includes time window (4.5 hours)

**Query:** "mechanical thrombectomy guideline"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions large vessel occlusion
- [ ] Includes time windows (6-24 hours)

### Test 2.2: TIA Keywords
**Query:** "ASA TIA guideline"
- [ ] Returns ASA TIA guideline
- [ ] Does NOT return acute ischemic stroke guideline
- [ ] Focuses on prevention and risk stratification

**Query:** "transient ischemic attack guideline"
- [ ] Returns ASA TIA guideline
- [ ] Mentions ABCD2 score
- [ ] Includes dual antiplatelet therapy

**Query:** "mini stroke guideline"
- [ ] Returns ASA TIA guideline
- [ ] Recognizes "mini stroke" as TIA synonym

### Test 2.3: ICH Keywords
**Query:** "ASA ICH guideline"
- [ ] Returns ASA ICH guideline
- [ ] Does NOT return ischemic stroke guideline
- [ ] Focuses on hemorrhage management

**Query:** "intracerebral hemorrhage guideline"
- [ ] Returns ASA ICH guideline
- [ ] Mentions blood pressure management
- [ ] Includes coagulopathy reversal

**Query:** "brain hemorrhage guideline"
- [ ] Returns ASA ICH guideline
- [ ] Appropriate for lay term

### Test 2.4: SAH Keywords
**Query:** "ASA SAH guideline"
- [ ] Returns ASA SAH guideline
- [ ] Does NOT return ICH guideline
- [ ] Focuses on aneurysm management

**Query:** "subarachnoid hemorrhage guideline"
- [ ] Returns ASA SAH guideline
- [ ] Mentions nimodipine
- [ ] Includes aneurysm securing

**Query:** "ruptured aneurysm guideline"
- [ ] Returns ASA SAH guideline
- [ ] Appropriate for clinical term

---

## 3. CLINICAL SCENARIO TESTS

### Test 3.1: Acute Stroke Treatment
**Query:** "What is the ASA guideline for treating a patient with acute stroke within 3 hours?"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions IV alteplase 0.9 mg/kg (Class I, Level A)
- [ ] Includes eligibility criteria
- [ ] Mentions door-to-needle time <60 minutes
- [ ] Includes blood pressure management

### Test 3.2: Extended Time Window
**Query:** "ASA guideline for stroke treatment 6-24 hours"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions mechanical thrombectomy
- [ ] Includes DAWN and DEFUSE 3 criteria
- [ ] Mentions imaging selection criteria

### Test 3.3: TIA Risk Assessment
**Query:** "How does ASA recommend stratifying TIA risk?"
- [ ] Returns ASA TIA guideline
- [ ] Mentions ABCD2 score
- [ ] Includes score components and interpretation
- [ ] Mentions stroke risk percentages

### Test 3.4: Dual Antiplatelet Therapy
**Query:** "ASA recommendation for dual antiplatelet therapy after TIA"
- [ ] Returns ASA TIA guideline
- [ ] Mentions aspirin + clopidogrel for 21 days
- [ ] Includes indications (NIHSS 0-3 or ABCD2 ≥4)
- [ ] References POINT trial

### Test 3.5: ICH Blood Pressure
**Query:** "What blood pressure target does ASA recommend for intracerebral hemorrhage?"
- [ ] Returns ASA ICH guideline
- [ ] Mentions target SBP <140 mmHg
- [ ] Includes indication (presenting SBP 150-220 mmHg)
- [ ] Mentions Class I, Level A recommendation
- [ ] References INTERACT2 trial

### Test 3.6: Coagulopathy Reversal
**Query:** "How to reverse anticoagulation in brain hemorrhage ASA guideline?"
- [ ] Returns ASA ICH guideline
- [ ] Mentions specific reversal agents (PCC, idarucizumab, andexanet alfa)
- [ ] Includes warfarin, dabigatran, factor Xa inhibitor reversal
- [ ] Mentions target INR <1.4

### Test 3.7: Nimodipine for SAH
**Query:** "What does ASA recommend for vasospasm prevention in subarachnoid hemorrhage?"
- [ ] Returns ASA SAH guideline
- [ ] Mentions nimodipine 60 mg q4h for 21 days
- [ ] Includes Class I, Level A recommendation
- [ ] Explains benefit (reduces poor outcomes by 40%)

### Test 3.8: Aneurysm Management
**Query:** "ASA guideline for aneurysm securing"
- [ ] Returns ASA SAH guideline
- [ ] Mentions endovascular coiling preferred over surgical clipping
- [ ] Includes timing (within 24-72 hours)
- [ ] References ISAT trial

---

## 4. CONTENT BLEEDING PREVENTION TESTS

### Test 4.1: ASA vs AHA Cardiology
**Query:** "heart failure guideline"
- [ ] Does NOT return ASA stroke guidelines
- [ ] Returns HFSA or AHA heart failure guideline
- [ ] No stroke content in response

**Query:** "atrial fibrillation guideline"
- [ ] Does NOT return ASA stroke guidelines
- [ ] Returns AHA or ACC AFib guideline
- [ ] No stroke content in response

### Test 4.2: ASA vs IDSA
**Query:** "pneumonia guideline"
- [ ] Does NOT return ASA stroke guidelines
- [ ] Returns IDSA or ATS pneumonia guideline
- [ ] No stroke content in response

**Query:** "sepsis guideline"
- [ ] Does NOT return ASA stroke guidelines
- [ ] Returns IDSA/SCCM sepsis guideline
- [ ] No stroke content in response

### Test 4.3: ASA vs Other Neurology
**Query:** "epilepsy guideline"
- [ ] Does NOT return ASA stroke guidelines
- [ ] Returns general neurology knowledge or other guidelines
- [ ] No stroke content in response

**Query:** "Parkinson disease guideline"
- [ ] Does NOT return ASA stroke guidelines
- [ ] Returns general neurology knowledge
- [ ] No stroke content in response

### Test 4.4: Stroke Type Separation
**Query:** "ischemic stroke treatment"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Does NOT include hemorrhagic stroke treatment
- [ ] Clear focus on ischemic stroke

**Query:** "hemorrhagic stroke treatment"
- [ ] Returns ASA ICH guideline
- [ ] Does NOT include ischemic stroke treatment (tPA, thrombectomy)
- [ ] Clear focus on hemorrhagic stroke

**Query:** "TIA prevention"
- [ ] Returns ASA TIA guideline
- [ ] Does NOT include acute stroke treatment
- [ ] Clear focus on secondary prevention

---

## 5. RECOMMENDATION STRENGTH TESTS

### Test 5.1: Class I Recommendations
**Query:** "What are the Class I recommendations for acute ischemic stroke from ASA?"
- [ ] Lists all Class I recommendations
- [ ] Includes level of evidence for each
- [ ] Clearly labeled as Class I (Strong Recommendation)
- [ ] No mixing with Class IIa or IIb

### Test 5.2: Level of Evidence
**Query:** "What is the level of evidence for IV alteplase in acute stroke?"
- [ ] Mentions Class I recommendation
- [ ] Mentions Level of Evidence A
- [ ] References NINDS, ECASS III trials
- [ ] Clear explanation of evidence quality

### Test 5.3: Class III Recommendations
**Query:** "What does ASA say NOT to do in intracerebral hemorrhage?"
- [ ] Lists Class III recommendations
- [ ] Includes routine craniotomy for supratentorial ICH
- [ ] Clearly labeled as Class III (Not Recommended)
- [ ] Explains why not recommended

---

## 6. MULTI-GUIDELINE INTEGRATION TESTS

### Test 6.1: Stroke + Atrial Fibrillation
**Query:** "stroke in patient with atrial fibrillation guideline"
- [ ] Returns ASA stroke guideline
- [ ] Mentions anticoagulation for AFib
- [ ] May also return AHA/ACC AFib guideline
- [ ] Clear separation between stroke management and AFib management

### Test 6.2: Stroke + Diabetes
**Query:** "stroke prevention in diabetes ASA guideline"
- [ ] Returns ASA stroke guideline
- [ ] Mentions glycemic control, blood pressure control
- [ ] May also return ADA guideline
- [ ] Clear separation between stroke prevention and diabetes management

### Test 6.3: Stroke + Hypertension
**Query:** "blood pressure management in stroke ASA guideline"
- [ ] Returns ASA stroke guideline (ischemic or hemorrhagic based on context)
- [ ] Includes specific blood pressure targets
- [ ] Clear distinction between ischemic and hemorrhagic stroke BP management

---

## 7. EDGE CASE TESTS

### Test 7.1: Wake-Up Stroke
**Query:** "ASA guideline for wake-up stroke"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions MRI DWI-FLAIR mismatch criteria
- [ ] References EXTEND trial
- [ ] Includes time window considerations

### Test 7.2: Mild Stroke
**Query:** "Should I give tPA for mild stroke ASA guideline?"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions Class IIa recommendation for mild but disabling symptoms
- [ ] Distinguishes between mild disabling vs rapidly improving
- [ ] Includes clinical judgment considerations

### Test 7.3: Anticoagulation-Associated ICH
**Query:** "ASA guideline for reversing anticoagulation in brain hemorrhage"
- [ ] Returns ASA ICH guideline
- [ ] Mentions specific reversal agents
- [ ] Includes warfarin, DOAC reversal
- [ ] Clear dosing recommendations

### Test 7.4: Cerebellar Hemorrhage
**Query:** "When does ASA recommend surgery for cerebellar hemorrhage?"
- [ ] Returns ASA ICH guideline
- [ ] Mentions cerebellar hemorrhage >3 cm
- [ ] Includes brainstem compression or hydrocephalus as indications
- [ ] Mentions Class I recommendation for emergent surgery

### Test 7.5: Large Vessel Occlusion
**Query:** "ASA criteria for mechanical thrombectomy"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions large vessel occlusion (ICA, MCA M1)
- [ ] Includes NIHSS ≥6, ASPECTS ≥6
- [ ] Mentions time windows and imaging criteria

---

## 8. NEGATIVE TESTS (Should NOT Return ASA)

### Test 8.1: Cardiology Queries
**Query:** "heart failure guideline"
- [ ] Does NOT return ASA guidelines
- [ ] Returns HFSA or AHA heart failure guideline

**Query:** "atrial fibrillation management"
- [ ] Does NOT return ASA guidelines
- [ ] Returns AHA or ACC AFib guideline

### Test 8.2: Pulmonary Queries
**Query:** "pneumonia treatment guideline"
- [ ] Does NOT return ASA guidelines
- [ ] Returns IDSA or ATS pneumonia guideline

**Query:** "COPD exacerbation guideline"
- [ ] Does NOT return ASA guidelines
- [ ] Returns ATS or CHEST COPD guideline

### Test 8.3: Infectious Disease Queries
**Query:** "sepsis management guideline"
- [ ] Does NOT return ASA guidelines
- [ ] Returns IDSA/SCCM sepsis guideline

**Query:** "meningitis treatment guideline"
- [ ] Does NOT return ASA guidelines
- [ ] Returns IDSA meningitis guideline

### Test 8.4: Other Neurology Queries
**Query:** "epilepsy treatment"
- [ ] Does NOT return ASA guidelines
- [ ] Returns general neurology knowledge

**Query:** "Parkinson disease management"
- [ ] Does NOT return ASA guidelines
- [ ] Returns general neurology knowledge

---

## 9. RESPONSE QUALITY TESTS

### Test 9.1: Response Completeness
**Query:** "ASA guideline for acute ischemic stroke"
- [ ] Includes guideline summary
- [ ] Includes all recommendation classes (I, IIa, IIb, III)
- [ ] Includes clinical implementation
- [ ] Includes key points
- [ ] Includes level of evidence
- [ ] Includes publication year
- [ ] Includes source attribution

### Test 9.2: Response Clarity
**Query:** "What is the ASA recommendation for tPA?"
- [ ] Response is clear and easy to understand
- [ ] Recommendation strength is clearly stated (Class I)
- [ ] Evidence level is clearly stated (Level A)
- [ ] Dosing is specific (0.9 mg/kg, max 90 mg)
- [ ] Time window is specific (4.5 hours)

### Test 9.3: Response Accuracy
**Query:** "ASA guideline for dual antiplatelet therapy after TIA"
- [ ] Mentions aspirin + clopidogrel
- [ ] Includes duration (21 days)
- [ ] Includes indications (NIHSS 0-3 or ABCD2 ≥4)
- [ ] References POINT trial
- [ ] Mentions 25% stroke risk reduction

---

## 10. PERFORMANCE TESTS

### Test 10.1: Search Speed
- [ ] Search completes in <100ms
- [ ] Response generation completes in <500ms
- [ ] Total user-facing delay <2 seconds

### Test 10.2: Accuracy
- [ ] Top result is most relevant >95% of the time
- [ ] Keyword matching accuracy 100%
- [ ] Content bleeding rate 0%
- [ ] False positive rate 0%

---

## 11. USER EXPERIENCE TESTS

### Test 11.1: Response Formatting
- [ ] Markdown formatting is correct
- [ ] Bullet points display properly
- [ ] Sections are clearly separated
- [ ] Headers are properly formatted
- [ ] Source attribution is clear

### Test 11.2: Clinical Utility
- [ ] Recommendations are actionable
- [ ] Clinical implementation provides practical guidance
- [ ] Key points are memorable
- [ ] Evidence levels help decision-making
- [ ] URLs provide additional resources

### Test 11.3: Educational Value
- [ ] Responses teach stroke management principles
- [ ] Evidence levels explain recommendation strength
- [ ] Clinical trials are referenced
- [ ] Implementation guidance is detailed
- [ ] Follow-up questions enhance learning

---

## 12. INTEGRATION TESTS

### Test 12.1: With Merck Manual
**Query:** "ischemic stroke"
- [ ] May return both Merck Manual and ASA guideline
- [ ] Merck provides pathophysiology and clinical presentation
- [ ] ASA provides evidence-based treatment recommendations
- [ ] No duplication or contradiction
- [ ] Complementary information

### Test 12.2: With Flashcards
**Query:** "stroke treatment"
- [ ] May return both flashcards and ASA guideline
- [ ] Flashcards provide quick facts
- [ ] ASA guideline provides detailed recommendations
- [ ] No duplication or contradiction
- [ ] Complementary educational resources

### Test 12.3: With Other Guidelines
**Query:** "stroke in atrial fibrillation"
- [ ] Returns ASA stroke guideline
- [ ] May also return AHA/ACC AFib guideline
- [ ] Clear separation between guidelines
- [ ] No mixing of recommendations
- [ ] Source attribution for each guideline

---

## 13. STRESS TEST SCENARIOS

### Test 13.1: Ambiguous Query
**Query:** "stroke guideline"
- [ ] Returns most relevant ASA stroke guideline
- [ ] Likely returns Acute Ischemic Stroke (most common)
- [ ] May mention other stroke types in context
- [ ] Clear organization

### Test 13.2: Multiple Stroke Types
**Query:** "ASA stroke guidelines overview"
- [ ] Returns most relevant ASA guideline
- [ ] May mention multiple stroke types
- [ ] Clear distinction between types
- [ ] No content bleeding

### Test 13.3: Specific Treatment
**Query:** "ASA recommendation for nimodipine"
- [ ] Returns ASA SAH guideline
- [ ] Specific to subarachnoid hemorrhage
- [ ] Does NOT appear for other stroke types
- [ ] Clear indication and dosing

### Test 13.4: Time-Sensitive Query
**Query:** "door to needle time stroke ASA"
- [ ] Returns ASA Acute Ischemic Stroke guideline
- [ ] Mentions <60 minutes target
- [ ] Includes quality metrics
- [ ] Mentions stroke systems of care

---

## 14. CONSOLE LOG VERIFICATION

### Test 14.1: Search Logging
- [ ] Console logs show "ASA Guidelines search for [query]"
- [ ] Console logs show matched topics and scores
- [ ] Console logs show top 3 results
- [ ] Logging helps debugging

### Test 14.2: Integration Logging
- [ ] Console logs show "Found ASA guidelines: [count]"
- [ ] Console logs show top ASA guideline topic
- [ ] Logging confirms ASA guidelines are being searched
- [ ] Logging helps troubleshooting

---

## 15. DOCUMENTATION TESTS

### Test 15.1: Documentation Completeness
- [ ] PHASE_25_ASA_STRESS_TEST.md exists and is comprehensive
- [ ] PHASE_25_ASA_QUICK_START.md exists and is helpful
- [ ] PHASE_25_ASA_COMPLETION.md exists and is detailed
- [ ] PHASE_25_ASA_SUMMARY.md exists and is clear
- [ ] ASA_TESTING_CHECKLIST.md exists (this file)

### Test 15.2: Documentation Accuracy
- [ ] All example queries work as documented
- [ ] All expected results match actual results
- [ ] All code examples are correct
- [ ] All URLs are functional

---

## 16. FINAL VALIDATION

### Test 16.1: Production Readiness
- [ ] All basic functionality tests pass
- [ ] All keyword matching tests pass
- [ ] All clinical scenario tests pass
- [ ] All content bleeding prevention tests pass
- [ ] All negative tests pass
- [ ] All response quality tests pass
- [ ] All performance tests pass
- [ ] All user experience tests pass
- [ ] All integration tests pass
- [ ] All stress test scenarios pass

### Test 16.2: Quality Standards
- [ ] Meets same quality standards as previous 17 guideline integrations
- [ ] No content bleeding detected
- [ ] Clinical accuracy verified
- [ ] User experience optimized
- [ ] Documentation complete

---

## PASS/FAIL CRITERIA

### PASS Requirements (All Must Be Met):
1. ✅ All basic functionality tests pass (100%)
2. ✅ All keyword matching tests pass (100%)
3. ✅ All clinical scenario tests pass (100%)
4. ✅ Zero content bleeding detected
5. ✅ Zero false positives (ASA appearing for non-stroke queries)
6. ✅ All recommendations correctly categorized by class
7. ✅ All clinical implementation sections are comprehensive
8. ✅ Search scoring algorithm prioritizes exact matches
9. ✅ Response time <2 seconds
10. ✅ Documentation complete and accurate

### FAIL Criteria (Any One Fails Entire Test):
- ❌ Any keyword matching test fails
- ❌ Any content bleeding detected
- ❌ Any false positive detected
- ❌ Any recommendation incorrectly categorized
- ❌ Any clinical implementation incomplete
- ❌ Response time >5 seconds
- ❌ Documentation incomplete or inaccurate

---

## TEST EXECUTION LOG

### Date: [Fill in when testing]
### Tester: [Fill in when testing]

### Results:
- Basic Functionality: [ ] PASS [ ] FAIL
- Keyword Matching: [ ] PASS [ ] FAIL
- Clinical Scenarios: [ ] PASS [ ] FAIL
- Content Bleeding Prevention: [ ] PASS [ ] FAIL
- Negative Tests: [ ] PASS [ ] FAIL
- Response Quality: [ ] PASS [ ] FAIL
- Performance: [ ] PASS [ ] FAIL
- User Experience: [ ] PASS [ ] FAIL
- Integration: [ ] PASS [ ] FAIL
- Stress Tests: [ ] PASS [ ] FAIL

### Overall Result: [ ] PASS [ ] FAIL

### Notes:
[Add any observations, issues, or recommendations]

---

## TROUBLESHOOTING

### Issue: ASA Guidelines Not Appearing
**Check:**
1. Import statement in chatbot.tsx
2. searchASAGuidelines function call in handleSend
3. asaGuidelines parameter in generateDynamicResponse
4. isGuidelineQuery regex includes ASA terms
5. Console logs show ASA guidelines being searched

### Issue: Wrong Guideline Returned
**Check:**
1. Keywords in asaGuidelinesKnowledge.ts
2. Search scoring algorithm
3. Query intent detection
4. Console logs show scores for each guideline

### Issue: Content Bleeding
**Check:**
1. Keywords are specific enough
2. System filtering is working (Neurology only)
3. Query intent detection is accurate
4. No overlap with other guideline keywords

### Issue: Missing Recommendations
**Check:**
1. All recommendation arrays are populated
2. Rendering logic includes all classes (I, IIa, IIb, III)
3. No truncation in response generation
4. Console logs show complete guideline data

---

## SIGN-OFF

### Developer Sign-Off
- [ ] All tests executed
- [ ] All tests passed
- [ ] No known issues
- [ ] Ready for production

**Signature:** _________________ **Date:** _________

### QA Sign-Off
- [ ] All tests verified
- [ ] Documentation reviewed
- [ ] User experience validated
- [ ] Approved for production

**Signature:** _________________ **Date:** _________

---

## CONCLUSION

This comprehensive testing checklist ensures the ASA guidelines integration meets the highest quality standards. All tests must pass before the integration is considered complete and ready for production use.

**Expected Result: ALL TESTS PASS ✅**

The ASA guidelines integration provides medical learners with authoritative, evidence-based stroke management recommendations from the American Stroke Association, maintaining the same high quality standards as all previous guideline integrations.
