
# NCCN Guidelines Integration - Comprehensive Stress Test

## Purpose
Validate the integration of National Comprehensive Cancer Network (NCCN) guidelines for hematologic malignancies into the Medical Expert Chatbot. Ensure accuracy, prevent content bleeding, and verify seamless integration with existing knowledge sources.

## Pre-Test Checklist
- [ ] NCCN guidelines file created: `data/nccnGuidelinesKnowledge.ts`
- [ ] Chatbot updated to import and use NCCN guidelines
- [ ] Search function implemented: `searchNCCNGuidelines`
- [ ] Message interface includes `nccnGuidelines` field
- [ ] Welcome message updated to mention NCCN guidelines
- [ ] Guideline query detection includes "nccn" and "national comprehensive cancer network"

## Test Suite 1: NCCN-Specific Queries

### Test 1.1: Direct NCCN Query - AML
**Query**: "NCCN guideline for AML"

**Expected Result**:
- Returns NCCN AML guideline
- Includes Category 1, 2A, 2B recommendations
- Mentions 7+3 regimen (cytarabine + anthracycline)
- Discusses FLT3 inhibitors, IDH inhibitors
- Includes risk stratification (favorable, intermediate, adverse)
- Mentions allogeneic HSCT indications
- NO other society guidelines returned

**Pass Criteria**:
✅ NCCN AML guideline returned
✅ No ACC, AHA, ESC, or other non-NCCN guidelines
✅ Comprehensive recommendations displayed
✅ Category ratings explained

---

### Test 1.2: Direct NCCN Query - ALL
**Query**: "NCCN guideline for acute lymphoblastic leukemia"

**Expected Result**:
- Returns NCCN ALL guideline
- Mentions multi-agent chemotherapy phases
- Discusses Philadelphia chromosome-positive ALL with TKI therapy
- Includes CNS prophylaxis recommendations
- Mentions CAR T-cell therapy for relapsed/refractory disease
- NO other society guidelines returned

**Pass Criteria**:
✅ NCCN ALL guideline returned
✅ Philadelphia chromosome management included
✅ CNS prophylaxis emphasized
✅ No content bleeding from other guidelines

---

### Test 1.3: Direct NCCN Query - CLL
**Query**: "What are the NCCN recommendations for CLL?"

**Expected Result**:
- Returns NCCN CLL guideline
- Mentions watch and wait for early-stage disease
- Discusses BTK inhibitors (ibrutinib, acalabrutinib)
- Includes venetoclax + obinutuzumab
- Mentions del(17p)/TP53 mutation management
- Discusses IGHV mutation status
- NO other society guidelines returned

**Pass Criteria**:
✅ NCCN CLL guideline returned
✅ BTK inhibitors and venetoclax discussed
✅ Risk stratification (del(17p), IGHV) included
✅ No content bleeding

---

### Test 1.4: Direct NCCN Query - Hodgkin Lymphoma
**Query**: "NCCN Hodgkin lymphoma treatment"

**Expected Result**:
- Returns NCCN Hodgkin lymphoma guideline
- Mentions ABVD chemotherapy
- Discusses PET-CT guided treatment adaptation
- Includes early-stage vs advanced-stage management
- Mentions brentuximab vedotin for relapsed disease
- NO other society guidelines returned

**Pass Criteria**:
✅ NCCN Hodgkin lymphoma guideline returned
✅ ABVD regimen detailed
✅ PET-CT response assessment included
✅ No content bleeding

---

### Test 1.5: Direct NCCN Query - Multiple Myeloma
**Query**: "NCCN multiple myeloma guideline"

**Expected Result**:
- Returns NCCN multiple myeloma guideline
- Mentions CRAB criteria
- Discusses VRd induction
- Includes autologous HSCT
- Mentions lenalidomide maintenance
- Discusses CAR T-cell therapy
- NO other society guidelines returned

**Pass Criteria**:
✅ NCCN multiple myeloma guideline returned
✅ CRAB criteria explained
✅ VRd and HSCT discussed
✅ No content bleeding

---

## Test Suite 2: Hematologic Malignancy Queries (General)

### Test 2.1: AML Treatment Query
**Query**: "How do you treat acute myeloid leukemia?"

**Expected Result**:
- Returns NCCN AML guideline (if guideline query detected)
- OR returns Merck Manual AML entry (if general query)
- Includes 7+3 regimen
- Discusses targeted therapies
- Mentions supportive care

**Pass Criteria**:
✅ Appropriate content returned based on query intent
✅ Comprehensive treatment information
✅ No content bleeding from non-AML sources

---

### Test 2.2: ALL Management Query
**Query**: "Acute lymphoblastic leukemia management"

**Expected Result**:
- Returns NCCN ALL guideline or Merck Manual ALL entry
- Includes multi-agent chemotherapy
- Discusses CNS prophylaxis
- Mentions Philadelphia chromosome testing

**Pass Criteria**:
✅ Appropriate content returned
✅ CNS prophylaxis emphasized
✅ No content bleeding

---

### Test 2.3: CLL Treatment Options Query
**Query**: "CLL treatment options"

**Expected Result**:
- Returns NCCN CLL guideline or Merck Manual CLL entry
- Mentions BTK inhibitors
- Discusses venetoclax
- Includes FCR for fit patients

**Pass Criteria**:
✅ Appropriate content returned
✅ Modern targeted therapies included
✅ No content bleeding

---

### Test 2.4: Hodgkin Lymphoma Chemotherapy Query
**Query**: "Hodgkin lymphoma chemotherapy"

**Expected Result**:
- Returns NCCN Hodgkin lymphoma guideline or Merck Manual entry
- Mentions ABVD
- Discusses staging and risk stratification
- Includes response assessment

**Pass Criteria**:
✅ Appropriate content returned
✅ ABVD regimen detailed
✅ No content bleeding

---

### Test 2.5: Multiple Myeloma Treatment Query
**Query**: "multiple myeloma treatment"

**Expected Result**:
- Returns NCCN multiple myeloma guideline or Merck Manual entry
- Mentions VRd induction
- Discusses autologous HSCT
- Includes maintenance therapy

**Pass Criteria**:
✅ Appropriate content returned
✅ Transplant-eligible vs ineligible discussed
✅ No content bleeding

---

## Test Suite 3: Specific Treatment Regimen Queries

### Test 3.1: 7+3 Regimen Query
**Query**: "What is the 7+3 regimen for AML?"

**Expected Result**:
- Returns NCCN AML guideline
- Explains cytarabine 7 days + anthracycline 3 days
- Includes dosing details
- Mentions FLT3 inhibitor addition if FLT3-mutated

**Pass Criteria**:
✅ NCCN AML guideline returned
✅ 7+3 regimen clearly explained
✅ Dosing details included

---

### Test 3.2: ATRA and Arsenic Trioxide Query
**Query**: "ATRA and arsenic trioxide for APL"

**Expected Result**:
- Returns NCCN AML guideline (APL section)
- Explains APL as medical emergency
- Mentions immediate ATRA initiation
- Discusses differentiation syndrome monitoring

**Pass Criteria**:
✅ NCCN AML guideline returned
✅ APL emergency management emphasized
✅ ATRA + ATO regimen detailed

---

### Test 3.3: BTK Inhibitors Query
**Query**: "BTK inhibitors for CLL"

**Expected Result**:
- Returns NCCN CLL guideline
- Mentions ibrutinib, acalabrutinib, zanubrutinib
- Discusses first-line and relapsed/refractory use
- Includes dosing and monitoring

**Pass Criteria**:
✅ NCCN CLL guideline returned
✅ All BTK inhibitors mentioned
✅ Indications clearly stated

---

### Test 3.4: Venetoclax Query
**Query**: "venetoclax for CLL"

**Expected Result**:
- Returns NCCN CLL guideline
- Mentions venetoclax + obinutuzumab
- Discusses ramp-up schedule
- Includes tumor lysis syndrome prophylaxis

**Pass Criteria**:
✅ NCCN CLL guideline returned
✅ Venetoclax regimen detailed
✅ TLS prophylaxis emphasized

---

### Test 3.5: ABVD Query
**Query**: "ABVD chemotherapy for Hodgkin"

**Expected Result**:
- Returns NCCN Hodgkin lymphoma guideline
- Explains ABVD components (doxorubicin, bleomycin, vinblastine, dacarbazine)
- Discusses cycle duration based on stage
- Mentions bleomycin omission if PET-negative

**Pass Criteria**:
✅ NCCN Hodgkin lymphoma guideline returned
✅ ABVD components explained
✅ PET-guided adaptation mentioned

---

### Test 3.6: VRd Regimen Query
**Query**: "VRd induction for myeloma"

**Expected Result**:
- Returns NCCN multiple myeloma guideline
- Explains VRd (bortezomib, lenalidomide, dexamethasone)
- Includes dosing schedule
- Discusses use in transplant-eligible patients

**Pass Criteria**:
✅ NCCN multiple myeloma guideline returned
✅ VRd regimen detailed
✅ Transplant eligibility discussed

---

### Test 3.7: CAR T-Cell Therapy Query
**Query**: "CAR T-cell therapy for ALL"

**Expected Result**:
- Returns NCCN ALL guideline
- Mentions tisagenlecleucel and brexucabtagene autoleucel
- Discusses indications (relapsed/refractory after ≥2 prior therapies)
- Includes response rates

**Pass Criteria**:
✅ NCCN ALL guideline returned
✅ CAR T-cell products named
✅ Indications clearly stated

---

## Test Suite 4: Risk Stratification Queries

### Test 4.1: AML Risk Stratification Query
**Query**: "AML risk stratification"

**Expected Result**:
- Returns NCCN AML guideline
- Explains favorable-risk (t(8;21), inv(16), NPM1-mutated)
- Explains intermediate-risk (normal karyotype, FLT3-ITD)
- Explains adverse-risk (complex karyotype, monosomy 5/7, TP53-mutated)
- Discusses treatment implications

**Pass Criteria**:
✅ NCCN AML guideline returned
✅ All risk categories explained
✅ Cytogenetic and molecular markers detailed

---

### Test 4.2: FLT3 Mutation Query
**Query**: "FLT3 mutation in AML"

**Expected Result**:
- Returns NCCN AML guideline
- Discusses FLT3-ITD and FLT3-TKD
- Mentions midostaurin addition to chemotherapy
- Discusses gilteritinib for relapsed/refractory disease

**Pass Criteria**:
✅ NCCN AML guideline returned
✅ FLT3 inhibitors discussed
✅ Treatment implications clear

---

### Test 4.3: Del(17p) in CLL Query
**Query**: "Del(17p) in CLL"

**Expected Result**:
- Returns NCCN CLL guideline
- Explains del(17p) as high-risk feature
- Discusses TP53 pathway disruption
- Mentions targeted therapy requirement (avoid chemoimmunotherapy)

**Pass Criteria**:
✅ NCCN CLL guideline returned
✅ Del(17p) significance explained
✅ Treatment implications clear

---

### Test 4.4: IGHV Mutation Status Query
**Query**: "IGHV mutation status CLL"

**Expected Result**:
- Returns NCCN CLL guideline
- Explains mutated vs unmutated IGHV
- Discusses prognostic implications
- Mentions FCR for mutated, targeted therapy for unmutated

**Pass Criteria**:
✅ NCCN CLL guideline returned
✅ IGHV significance explained
✅ Treatment selection guidance clear

---

### Test 4.5: High-Risk Cytogenetics Myeloma Query
**Query**: "high-risk cytogenetics multiple myeloma"

**Expected Result**:
- Returns NCCN multiple myeloma guideline
- Mentions del(17p), t(4;14), t(14;16), t(14;20)
- Discusses treatment intensification
- Mentions tandem HSCT consideration

**Pass Criteria**:
✅ NCCN multiple myeloma guideline returned
✅ High-risk cytogenetics listed
✅ Treatment implications clear

---

### Test 4.6: Philadelphia Chromosome ALL Query
**Query**: "Philadelphia chromosome positive ALL"

**Expected Result**:
- Returns NCCN ALL guideline
- Explains BCR-ABL fusion
- Discusses TKI therapy (dasatinib or ponatinib preferred)
- Mentions allo-HSCT in first CR

**Pass Criteria**:
✅ NCCN ALL guideline returned
✅ TKI therapy emphasized
✅ Transplant indication clear

---

## Test Suite 5: Content Bleeding Prevention

### Test 5.1: Non-Malignant Anemia Query
**Query**: "What is anemia?"

**Expected Result**:
- Returns Merck Manual general anemia entry
- Does NOT return NCCN guidelines
- Discusses anemia classification and causes

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ General anemia information

---

### Test 5.2: Iron Deficiency Anemia Query
**Query**: "iron deficiency anemia treatment"

**Expected Result**:
- Returns Merck Manual iron deficiency anemia entry
- Does NOT return NCCN guidelines
- Discusses oral iron supplementation

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Iron supplementation discussed

---

### Test 5.3: Sickle Cell Disease Query
**Query**: "sickle cell disease management"

**Expected Result**:
- Returns Merck Manual sickle cell disease entry
- Does NOT return NCCN guidelines
- Discusses hydroxyurea, vaso-occlusive crisis management

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Sickle cell management discussed

---

### Test 5.4: ITP Query
**Query**: "ITP treatment"

**Expected Result**:
- Returns Merck Manual ITP entry
- Does NOT return NCCN guidelines
- Discusses corticosteroids, IVIG, splenectomy

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ ITP treatment discussed

---

### Test 5.5: DVT Query
**Query**: "DVT anticoagulation"

**Expected Result**:
- Returns Merck Manual DVT entry
- Does NOT return NCCN guidelines
- Discusses DOACs, warfarin

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Anticoagulation discussed

---

### Test 5.6: Hemophilia Query
**Query**: "hemophilia A treatment"

**Expected Result**:
- Returns Merck Manual hemophilia A entry
- Does NOT return NCCN guidelines
- Discusses factor VIII replacement

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Factor replacement discussed

---

### Test 5.7: Thalassemia Query
**Query**: "beta thalassemia major"

**Expected Result**:
- Returns Merck Manual thalassemia entry
- Does NOT return NCCN guidelines
- Discusses chronic transfusions, iron chelation

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Transfusion and chelation discussed

---

### Test 5.8: G6PD Deficiency Query
**Query**: "G6PD deficiency"

**Expected Result**:
- Returns Merck Manual G6PD deficiency entry
- Does NOT return NCCN guidelines
- Discusses oxidant drug avoidance

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Trigger avoidance discussed

---

### Test 5.9: TTP Query
**Query**: "thrombotic thrombocytopenic purpura"

**Expected Result**:
- Returns Merck Manual TTP entry
- Does NOT return NCCN guidelines
- Discusses plasma exchange, ADAMTS13

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Plasma exchange emphasized

---

### Test 5.10: DIC Query
**Query**: "disseminated intravascular coagulation"

**Expected Result**:
- Returns Merck Manual DIC entry
- Does NOT return NCCN guidelines
- Discusses treating underlying cause

**Pass Criteria**:
✅ Merck Manual returned
✅ NO NCCN guidelines
✅ Underlying cause treatment emphasized

---

## Test Suite 6: Multi-Society Guideline Queries

### Test 6.1: Diabetes Guidelines Query
**Query**: "guidelines for diabetes management"

**Expected Result**:
- Returns ADA guidelines
- May also return Endocrine Society guidelines
- May also return NIDDK guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ ADA guidelines returned
✅ Endocrine Society guidelines may be returned
✅ NO NCCN guidelines
✅ No content bleeding

---

### Test 6.2: Heart Failure Guidelines Query
**Query**: "heart failure guidelines"

**Expected Result**:
- Returns ACC guidelines
- May also return AHA, ESC, HFSA guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ ACC/AHA/ESC/HFSA guidelines returned
✅ NO NCCN guidelines
✅ No content bleeding

---

### Test 6.3: Leukemia Guidelines Query
**Query**: "leukemia treatment guidelines"

**Expected Result**:
- Returns NCCN guidelines (AML, ALL, or CLL)
- Does NOT return non-NCCN guidelines

**Pass Criteria**:
✅ NCCN leukemia guidelines returned
✅ Appropriate leukemia type based on query
✅ No content bleeding

---

### Test 6.4: Lymphoma Guidelines Query
**Query**: "lymphoma treatment guidelines"

**Expected Result**:
- Returns NCCN Hodgkin lymphoma guideline
- Does NOT return non-NCCN guidelines

**Pass Criteria**:
✅ NCCN Hodgkin lymphoma guideline returned
✅ NO non-NCCN guidelines
✅ No content bleeding

---

## Test Suite 7: Edge Cases

### Test 7.1: Generic NCCN Query
**Query**: "nccn"

**Expected Result**:
- Returns general information about NCCN
- OR prompts user for more specific query
- May return multiple NCCN guidelines

**Pass Criteria**:
✅ Appropriate response
✅ No errors
✅ User guided to ask specific question

---

### Test 7.2: Cancer Treatment Query
**Query**: "cancer treatment"

**Expected Result**:
- Returns NCCN guidelines (general or specific)
- Discusses chemotherapy, targeted therapy, immunotherapy

**Pass Criteria**:
✅ NCCN guidelines returned
✅ Comprehensive cancer treatment information
✅ No content bleeding

---

### Test 7.3: Chemotherapy Query
**Query**: "chemotherapy"

**Expected Result**:
- Returns general chemotherapy information
- May return NCCN guidelines if specific cancer mentioned
- Discusses chemotherapy principles

**Pass Criteria**:
✅ Appropriate content returned
✅ No errors
✅ Comprehensive information

---

### Test 7.4: Stem Cell Transplant Query
**Query**: "stem cell transplant"

**Expected Result**:
- Returns NCCN guidelines mentioning HSCT
- Discusses autologous vs allogeneic
- Mentions indications for different malignancies

**Pass Criteria**:
✅ NCCN guidelines returned
✅ HSCT types explained
✅ Indications clear

---

### Test 7.5: CAR T-Cell Therapy Query
**Query**: "CAR T-cell therapy"

**Expected Result**:
- Returns NCCN guidelines (ALL, CLL, myeloma)
- Discusses CAR T products
- Mentions indications (relapsed/refractory after ≥2-4 prior therapies)

**Pass Criteria**:
✅ NCCN guidelines returned
✅ CAR T products named
✅ Indications clear

---

## Test Suite 8: Keyword Specificity

### Test 8.1: AML Abbreviation
**Query**: "AML"

**Expected Result**:
- Returns NCCN AML guideline or Merck Manual AML entry
- Recognizes AML as acute myeloid leukemia

**Pass Criteria**:
✅ Correct AML content returned
✅ No confusion with other abbreviations

---

### Test 8.2: ALL Abbreviation
**Query**: "ALL"

**Expected Result**:
- Returns NCCN ALL guideline or Merck Manual ALL entry
- Recognizes ALL as acute lymphoblastic leukemia

**Pass Criteria**:
✅ Correct ALL content returned
✅ No confusion with other terms

---

### Test 8.3: CLL Abbreviation
**Query**: "CLL"

**Expected Result**:
- Returns NCCN CLL guideline or Merck Manual CLL entry
- Recognizes CLL as chronic lymphocytic leukemia

**Pass Criteria**:
✅ Correct CLL content returned
✅ No confusion with other abbreviations

---

### Test 8.4: Hodgkin Query
**Query**: "Hodgkin"

**Expected Result**:
- Returns NCCN Hodgkin lymphoma guideline or Merck Manual entry
- Recognizes as Hodgkin lymphoma

**Pass Criteria**:
✅ Correct Hodgkin content returned
✅ No confusion with non-Hodgkin lymphoma

---

### Test 8.5: Myeloma Query
**Query**: "myeloma"

**Expected Result**:
- Returns NCCN multiple myeloma guideline or Merck Manual entry
- Recognizes as multiple myeloma

**Pass Criteria**:
✅ Correct myeloma content returned
✅ No confusion with other conditions

---

## Test Suite 9: Comprehensive Integration

### Test 9.1: AML Query with Multiple Sources
**Query**: "acute myeloid leukemia"

**Expected Result**:
- Returns NCCN AML guideline (if guideline query)
- Returns Merck Manual AML entry
- May return AML flashcards
- May return academic references
- All sources relevant to AML

**Pass Criteria**:
✅ Multiple relevant sources returned
✅ No content bleeding from non-AML sources
✅ Appropriate prioritization

---

### Test 9.2: NCCN Guideline Priority Query
**Query**: "NCCN guideline for AML"

**Expected Result**:
- NCCN AML guideline prioritized
- Merck Manual may be included as supplementary
- Flashcards may be included as supplementary

**Pass Criteria**:
✅ NCCN guideline displayed first
✅ Clear prioritization
✅ Supplementary sources appropriate

---

### Test 9.3: Pathophysiology Query
**Query**: "pathophysiology of AML"

**Expected Result**:
- Merck Manual AML entry prioritized (pathophysiology focus)
- NCCN guideline may be included as supplementary
- Flashcards may be included

**Pass Criteria**:
✅ Merck Manual prioritized for pathophysiology
✅ NCCN guideline supplementary
✅ Appropriate content focus

---

### Test 9.4: Treatment Guideline Query
**Query**: "AML treatment guideline"

**Expected Result**:
- NCCN AML guideline prioritized
- Merck Manual may be supplementary
- Comprehensive treatment recommendations

**Pass Criteria**:
✅ NCCN guideline prioritized
✅ Treatment focus clear
✅ Evidence-based recommendations

---

## Test Suite 10: System Health and Performance

### Test 10.1: Search Performance
**Test**: Measure search time for NCCN guidelines

**Expected Result**:
- Search completes in <100ms
- No performance degradation

**Pass Criteria**:
✅ Search time <100ms
✅ No lag or delays
✅ Smooth user experience

---

### Test 10.2: Memory Usage
**Test**: Monitor memory usage with NCCN guidelines loaded

**Expected Result**:
- No significant memory increase
- No memory leaks

**Pass Criteria**:
✅ Memory usage stable
✅ No leaks detected
✅ App remains responsive

---

### Test 10.3: Concurrent Guideline Searches
**Test**: Query that matches multiple guidelines simultaneously

**Query**: "cancer treatment guidelines"

**Expected Result**:
- Returns NCCN guidelines
- No errors or crashes
- All guidelines render correctly

**Pass Criteria**:
✅ Multiple guidelines returned
✅ No errors
✅ Proper rendering

---

### Test 10.4: Perpetual Learning Engine Integration
**Test**: Verify NCCN guideline interactions are logged

**Expected Result**:
- Interactions with NCCN guidelines logged
- Feedback mechanism works
- Follow-up questions generated

**Pass Criteria**:
✅ Interactions logged
✅ Feedback buttons functional
✅ Follow-up questions relevant

---

## Test Suite 11: User Experience

### Test 11.1: Guideline Clarity
**Test**: Verify NCCN guidelines are clearly formatted

**Expected Result**:
- Category ratings clearly labeled
- Recommendations easy to read
- Clinical implementation actionable

**Pass Criteria**:
✅ Clear formatting
✅ Readable recommendations
✅ Actionable guidance

---

### Test 11.2: Attribution
**Test**: Verify NCCN attribution is clear

**Expected Result**:
- "National Comprehensive Cancer Network (NCCN)" clearly stated
- Category rating system explained
- Publication year displayed

**Pass Criteria**:
✅ Clear attribution
✅ Category system explained
✅ Publication year shown

---

### Test 11.3: Multiple Guidelines Display
**Test**: Query that returns multiple NCCN guidelines

**Query**: "NCCN leukemia guidelines"

**Expected Result**:
- Multiple NCCN guidelines displayed
- Clear separation between guidelines
- No confusion or overlap

**Pass Criteria**:
✅ Multiple guidelines displayed
✅ Clear separation
✅ No confusion

---

## Test Suite 12: Negative Testing

### Test 12.1: Typo in Query
**Query**: "NCCN guidline for AML" (typo: guidline)

**Expected Result**:
- Still returns NCCN AML guideline
- Search algorithm handles minor typos

**Pass Criteria**:
✅ Correct guideline returned despite typo
✅ Robust search algorithm

---

### Test 12.2: Incomplete Query
**Query**: "NCCN AML"

**Expected Result**:
- Returns NCCN AML guideline
- Handles abbreviated query

**Pass Criteria**:
✅ Correct guideline returned
✅ Abbreviated query handled

---

### Test 12.3: Case Sensitivity
**Query**: "nccn guideline for aml" (lowercase)

**Expected Result**:
- Returns NCCN AML guideline
- Case-insensitive search works

**Pass Criteria**:
✅ Correct guideline returned
✅ Case-insensitive search functional

---

## Test Suite 13: Integration with Other Systems

### Test 13.1: Cardiology Query
**Query**: "heart failure guidelines"

**Expected Result**:
- Returns ACC, AHA, ESC, HFSA guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ Cardiology guidelines returned
✅ NO NCCN guidelines
✅ No cross-contamination

---

### Test 13.2: Pulmonary Query
**Query**: "COPD guidelines"

**Expected Result**:
- Returns ATS, CHEST guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ Pulmonary guidelines returned
✅ NO NCCN guidelines
✅ No cross-contamination

---

### Test 13.3: Renal Query
**Query**: "CKD guidelines"

**Expected Result**:
- Returns KDIGO, NIDDK guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ Renal guidelines returned
✅ NO NCCN guidelines
✅ No cross-contamination

---

### Test 13.4: Gastroenterology Query
**Query**: "GERD guidelines"

**Expected Result**:
- Returns ACG guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ GI guidelines returned
✅ NO NCCN guidelines
✅ No cross-contamination

---

### Test 13.5: Endocrine Query
**Query**: "hypothyroidism guidelines"

**Expected Result**:
- Returns Endocrine Society guidelines
- Does NOT return NCCN guidelines

**Pass Criteria**:
✅ Endocrine guidelines returned
✅ NO NCCN guidelines
✅ No cross-contamination

---

## Stress Test Execution

### How to Run Stress Tests

1. **Open the app** and navigate to the Chatbot screen

2. **Execute each test query** from the test suites above

3. **Verify expected results** for each query:
   - Check that correct guidelines are returned
   - Verify no content bleeding
   - Confirm proper formatting and attribution

4. **Document any failures**:
   - Note the query that failed
   - Describe the actual result vs expected result
   - Identify the root cause

5. **Test edge cases** and boundary conditions

6. **Verify performance** (search time, memory usage)

7. **Check Perpetual Learning Engine** integration

### Success Criteria

**PASS**: All tests pass with expected results
- ✅ NCCN guidelines returned for malignancy queries
- ✅ No NCCN guidelines for non-malignant queries
- ✅ No content bleeding between guidelines
- ✅ Proper formatting and attribution
- ✅ Search performance <100ms
- ✅ Perpetual Learning Engine integration functional

**FAIL**: Any test fails
- ❌ Wrong guideline returned
- ❌ Content bleeding detected
- ❌ Missing recommendations
- ❌ Formatting issues
- ❌ Performance degradation

## Post-Test Actions

### If All Tests Pass ✅
1. Mark Phase 23 as COMPLETE
2. Document success in completion report
3. Proceed to next phase (if any)
4. Monitor for any issues in production

### If Any Tests Fail ❌
1. Document failures in detail
2. Identify root cause (keyword specificity, search algorithm, rendering)
3. Implement fixes
4. Re-run failed tests
5. Re-run full stress test suite
6. Repeat until all tests pass

## Monitoring and Maintenance

### Ongoing Monitoring
- Monitor chatbot logs for NCCN guideline queries
- Track user feedback on NCCN guideline responses
- Identify any content bleeding issues
- Monitor search performance

### Maintenance Schedule
- **Quarterly**: Review NCCN guideline updates
- **Annually**: Update guidelines with new NCCN publications
- **As Needed**: Fix any identified issues or bugs

## Conclusion

This comprehensive stress test validates the NCCN guidelines integration. Execute all test suites to ensure:
- Accurate guideline retrieval
- Content bleeding prevention
- Proper integration with existing knowledge sources
- Excellent user experience

**Status**: Ready for stress testing
**Next Step**: Execute all test suites and document results
