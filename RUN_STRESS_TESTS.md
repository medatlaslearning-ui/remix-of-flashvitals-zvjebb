
# HOW TO RUN STRESS TESTS - PHASE 6 VALIDATION

## Quick Start Guide

### Step 1: Access the Test Component
1. Open your app
2. Navigate to the KeywordSearchTest component
3. You should see the title "Keyword Search Stress Test"

### Step 2: Run Automated Tests
1. Click the "Run Stress Tests" button
2. Wait for tests to complete (should take 2-3 seconds)
3. Review the summary card showing:
   - ✅ Passed tests (green)
   - ❌ Failed tests (red)
   - 📊 Success rate percentage

### Step 3: Review Results
1. Click "Show Detailed Results" to expand
2. Review each test case:
   - Green border = Passed ✅
   - Red border = Failed ❌
3. Check the "Failed Tests Summary" section if any failures

### Step 4: Validate Critical Tests
Focus on these critical categories:
- Stroke type differentiation (must be 100%)
- Movement disorder differentiation (must be 100%)
- Dementia type differentiation (must be 100%)
- Cross-system bleeding prevention (must be 100%)

---

## Expected Results

### Success Criteria
```
Total Tests: 150+
Passed: >145
Failed: <5
Success Rate: >95%
```

### Critical Categories (Must Pass 100%)
1. ✅ Stroke Differentiation
   - ischemic stroke → Ischemic Stroke
   - hemorrhagic stroke → Hemorrhagic Stroke
   - subarachnoid hemorrhage → Subarachnoid Hemorrhage

2. ✅ Movement Disorders
   - parkinson disease → Parkinson Disease
   - essential tremor → Essential Tremor
   - huntington disease → Huntington Disease

3. ✅ Dementia Types
   - alzheimer disease → Alzheimer Disease
   - vascular dementia → Vascular Dementia

4. ✅ Cross-System Prevention
   - stroke → Ischemic/Hemorrhagic Stroke (NOT Heart Failure)
   - diabetic neuropathy → Diabetic Neuropathy (NOT Type 1/2 Diabetes)

---

## Manual Testing in Chatbot

### Test Set 1: Stroke Queries
Open the chatbot and test these queries:

```
1. "What is the pathophysiology of ischemic stroke"
   Expected: Detailed explanation of thrombosis, embolism, ischemic cascade
   Should NOT mention: Hemorrhage, bleeding, ICH

2. "What is the pathophysiology of hemorrhagic stroke"
   Expected: Detailed explanation of vessel rupture, hematoma, mass effect
   Should NOT mention: Thrombosis, embolism, ischemia

3. "What is the pathophysiology of subarachnoid hemorrhage"
   Expected: Detailed explanation of aneurysm rupture, subarachnoid space
   Should NOT mention: Intracerebral hemorrhage, ischemic stroke
```

### Test Set 2: Movement Disorder Queries
```
1. "What are the symptoms of Parkinson disease"
   Expected: Resting tremor, rigidity, bradykinesia, postural instability
   Should NOT mention: Action tremor, chorea

2. "What are the symptoms of essential tremor"
   Expected: Action tremor, bilateral hand tremor, improves with alcohol
   Should NOT mention: Resting tremor, rigidity, bradykinesia

3. "What are the symptoms of Huntington disease"
   Expected: Chorea, cognitive decline, psychiatric symptoms
   Should NOT mention: Resting tremor, action tremor
```

### Test Set 3: Dementia Queries
```
1. "What are the symptoms of Alzheimer disease"
   Expected: Memory impairment, word-finding difficulty, getting lost
   Should NOT mention: Stepwise decline, executive dysfunction as primary

2. "What are the symptoms of vascular dementia"
   Expected: Stepwise decline, executive dysfunction, focal deficits
   Should NOT mention: Gradual memory loss as primary feature
```

### Test Set 4: Treatment Queries
```
1. "How is epilepsy treated"
   Expected: Antiseizure medications, surgery for drug-resistant
   Should NOT mention: Benzodiazepines as primary (that's status epilepticus)

2. "How is status epilepticus treated"
   Expected: Benzodiazepines, IV medications, ICU care
   Should NOT mention: Chronic ASMs as primary

3. "How is Parkinson disease treated"
   Expected: Levodopa, dopamine agonists, deep brain stimulation
   Should NOT mention: Propranolol, primidone (that's essential tremor)
```

---

## Interpreting Results

### Green Results (Passed) ✅
- Query matched expected topic
- No content bleeding detected
- System working correctly
- No action needed

### Red Results (Failed) ❌
- Query did NOT match expected topic
- Potential content bleeding
- Requires investigation
- May need keyword adjustment

### Common Failure Patterns

#### Pattern 1: Generic Query
```
Query: "tremor"
Expected: Essential Tremor
Actual: Parkinson Disease

Analysis: Query too generic, both conditions have tremor
Resolution: Accept both results OR add more specific keywords
```

#### Pattern 2: Abbreviation Conflict
```
Query: "ms"
Expected: Multiple Sclerosis
Actual: Mitral Stenosis

Analysis: Abbreviation conflict
Resolution: System detection should favor neurology context
```

#### Pattern 3: Cross-System Bleeding
```
Query: "stroke"
Expected: Ischemic Stroke
Actual: Heart Failure

Analysis: Content bleeding from cardiology
Resolution: Increase system-based filtering penalty
```

---

## Troubleshooting

### If Success Rate <95%

#### Step 1: Identify Failed Tests
1. Review "Failed Tests Summary" section
2. Group failures by category
3. Identify patterns

#### Step 2: Analyze Failures
For each failed test:
1. Check keywords for both expected and actual topics
2. Verify disease-specific terms are in modifier list
3. Check system detection is working
4. Review scoring logic

#### Step 3: Fix Issues
Common fixes:
1. Add more specific keywords
2. Add disease-specific terms to modifier list
3. Increase mismatch penalty
4. Adjust system-based filtering

#### Step 4: Retest
1. Make changes
2. Run stress tests again
3. Verify improvements
4. Repeat until >95% success rate

### If Content Bleeding Detected

#### Symptom
Query returns unrelated condition from different system

#### Diagnosis
1. Check if disease-specific terms detected
2. Verify system detection working
3. Review scoring for both entries

#### Solution
1. Add more specific keywords to correct condition
2. Ensure disease-specific terms in modifier list
3. Increase cross-system penalty
4. Add system hints if needed

---

## Validation Checklist

### Automated Testing
- [ ] Run KeywordSearchTest component
- [ ] Verify success rate >95%
- [ ] Review all failed tests
- [ ] Confirm no critical failures (stroke, movement, dementia)
- [ ] Check for content bleeding patterns

### Manual Chatbot Testing
- [ ] Test 10 stroke queries
- [ ] Test 10 movement disorder queries
- [ ] Test 10 dementia queries
- [ ] Test 10 seizure queries
- [ ] Test 10 headache queries
- [ ] Test 10 neuropathy queries
- [ ] Test 10 pathophysiology hooks
- [ ] Test 10 clinical presentation hooks
- [ ] Test 10 treatment hooks

### Cross-System Validation
- [ ] Verify neurology queries don't return cardiology
- [ ] Verify neurology queries don't return endocrine
- [ ] Verify neurology queries don't return hematology
- [ ] Verify diabetic neuropathy doesn't return diabetes
- [ ] Verify stroke doesn't return cardiac conditions

### Documentation Review
- [ ] Read PHASE_6_COMPLETION.md
- [ ] Read PHASE_6_STRESS_TEST_GUIDE.md
- [ ] Read PHASE_6_SUMMARY.md
- [ ] Read NEUROLOGY_KEYWORD_VALIDATION.md
- [ ] Read PHASE_6_FINAL_REPORT.md

---

## Success Indicators

### Green Lights (All Good) ✅
- Success rate >95%
- All critical tests pass (stroke, movement, dementia)
- No content bleeding detected
- Keyword hooks work correctly
- Response times <100ms
- User feedback positive

### Yellow Lights (Minor Issues) ⚠️
- Success rate 90-95%
- 1-2 non-critical failures
- Minor content bleeding (related conditions)
- Some keyword hooks need tuning
- Response times 100-200ms

### Red Lights (Major Issues) ❌
- Success rate <90%
- Critical test failures (stroke, movement, dementia)
- Significant content bleeding
- Keyword hooks not working
- Response times >200ms
- User complaints

---

## Reporting Template

### Test Report Format
```
PHASE 6 NEUROLOGY STRESS TEST REPORT
Date: [Date]
Tester: [Name]

AUTOMATED TESTS:
- Total Tests: [Number]
- Passed: [Number]
- Failed: [Number]
- Success Rate: [Percentage]

CRITICAL CATEGORIES:
- Stroke Differentiation: [Pass/Fail]
- Movement Disorders: [Pass/Fail]
- Dementia Types: [Pass/Fail]
- Cross-System Prevention: [Pass/Fail]

MANUAL CHATBOT TESTS:
- Stroke Queries: [Pass/Fail]
- Movement Disorder Queries: [Pass/Fail]
- Dementia Queries: [Pass/Fail]
- Keyword Hooks: [Pass/Fail]

ISSUES FOUND:
[List any issues]

RECOMMENDATIONS:
[List recommendations]

OVERALL STATUS: [PASS/FAIL]
```

### Example Success Report
```
PHASE 6 NEUROLOGY STRESS TEST REPORT
Date: 2024-01-15
Tester: Development Team

AUTOMATED TESTS:
- Total Tests: 152
- Passed: 148
- Failed: 4
- Success Rate: 97.4%

CRITICAL CATEGORIES:
- Stroke Differentiation: PASS (100%)
- Movement Disorders: PASS (100%)
- Dementia Types: PASS (100%)
- Cross-System Prevention: PASS (100%)

MANUAL CHATBOT TESTS:
- Stroke Queries: PASS (10/10)
- Movement Disorder Queries: PASS (10/10)
- Dementia Queries: PASS (10/10)
- Keyword Hooks: PASS (9/10)

ISSUES FOUND:
- Minor: "tremor" query returns both Parkinson and Essential Tremor
  (Acceptable - both conditions have tremor)

RECOMMENDATIONS:
- Continue monitoring
- No immediate changes needed

OVERALL STATUS: PASS ✅
```

---

## Quick Reference

### Critical Queries to Test
1. "ischemic stroke"
2. "hemorrhagic stroke"
3. "subarachnoid hemorrhage"
4. "parkinson disease"
5. "essential tremor"
6. "alzheimer disease"
7. "vascular dementia"
8. "epilepsy"
9. "status epilepticus"
10. "multiple sclerosis"

### Critical Pathophysiology Queries
1. "What is the pathophysiology of ischemic stroke"
2. "What is the pathophysiology of hemorrhagic stroke"
3. "What is the pathophysiology of Parkinson disease"
4. "What is the pathophysiology of Alzheimer disease"
5. "What is the pathophysiology of multiple sclerosis"

### Critical Abbreviations
1. "tia" → Transient Ischemic Attack
2. "sah" → Subarachnoid Hemorrhage
3. "ms" → Multiple Sclerosis
4. "als" → Amyotrophic Lateral Sclerosis
5. "gbs" → Guillain-Barré Syndrome

---

## Contact and Support

### If Tests Fail
1. Review this document
2. Check PHASE_6_STRESS_TEST_GUIDE.md
3. Review NEUROLOGY_KEYWORD_VALIDATION.md
4. Check console logs for debugging info
5. Report issues with test report format

### Documentation
- PHASE_6_COMPLETION.md - Implementation overview
- PHASE_6_STRESS_TEST_GUIDE.md - Comprehensive testing guide
- PHASE_6_SUMMARY.md - Detailed summary
- NEUROLOGY_KEYWORD_VALIDATION.md - Validation test suite
- PHASE_6_FINAL_REPORT.md - Final report
- RUN_STRESS_TESTS.md - This document

---

**Ready to Test**: YES ✅
**Expected Success Rate**: >95%
**Critical Tests**: Must pass 100%
**Status**: Phase 6 Complete - Ready for Validation
