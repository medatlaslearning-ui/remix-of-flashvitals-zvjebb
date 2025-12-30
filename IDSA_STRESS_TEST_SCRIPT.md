
# IDSA GUIDELINES STRESS TEST EXECUTION SCRIPT

## Purpose
Step-by-step script for executing comprehensive stress tests on the IDSA guidelines integration. Follow this script exactly to ensure thorough testing.

---

## PRE-TEST SETUP

### 1. Environment Check
- [ ] Open the Medical Expert Chatbot app
- [ ] Navigate to the Chatbot screen
- [ ] Ensure app is running without errors
- [ ] Open developer console (if available) to monitor logs

### 2. Baseline Test
**Query**: `Hello`
**Expected**: Welcome message with list of all guidelines including IDSA
- [ ] IDSA Guidelines listed in welcome message
- [ ] All 17 guideline organizations listed

---

## TEST EXECUTION

### ROUND 1: BASIC FUNCTIONALITY (5 tests)

#### Test 1.1: CAP Basic
**Copy and paste this exact query**:
```
What are the IDSA guidelines for community-acquired pneumonia?
```

**Wait for response, then check**:
- [ ] Response received within 3 seconds
- [ ] "Community-Acquired Pneumonia (CAP) - IDSA Guideline" title present
- [ ] Guideline Summary section present
- [ ] Strong Recommendations section present (should have 8 items)
- [ ] Moderate Recommendations section present (should have 7 items)
- [ ] Weak Recommendations section present (should have 3 items)
- [ ] Clinical Implementation section present
- [ ] Key Points section present (should have 7 items)
- [ ] "Quality of Evidence" line present
- [ ] "Publication Year: 2019" present
- [ ] IDSA attribution statement at bottom
- [ ] NO ATS guidelines mixed in
- [ ] NO CHEST guidelines mixed in

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 1.2: HAP/VAP Basic
**Copy and paste this exact query**:
```
What are the IDSA guidelines for ventilator-associated pneumonia?
```

**Wait for response, then check**:
- [ ] Response received within 3 seconds
- [ ] "Healthcare-Associated Pneumonia and Ventilator-Associated Pneumonia - IDSA Guideline" title present
- [ ] Strong Recommendations section (7 items)
- [ ] Moderate Recommendations section (6 items)
- [ ] Weak Recommendations section (3 items)
- [ ] Clinical Implementation section present
- [ ] Key Points section present
- [ ] "Publication Year: 2016" present
- [ ] IDSA attribution statement
- [ ] NO other guidelines mixed in

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 1.3: SSTI Basic
**Copy and paste this exact query**:
```
What are the IDSA guidelines for cellulitis?
```

**Wait for response, then check**:
- [ ] Response received within 3 seconds
- [ ] "Skin and Soft Tissue Infections - IDSA Guideline" title present
- [ ] Strong Recommendations section (6 items)
- [ ] Moderate Recommendations section (6 items)
- [ ] Weak Recommendations section (3 items)
- [ ] "Incision and drainage is the primary treatment for cutaneous abscesses" mentioned
- [ ] Clinical Implementation section present
- [ ] "Publication Year: 2014" present
- [ ] IDSA attribution statement

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 1.4: UTI Basic
**Copy and paste this exact query**:
```
What are the IDSA guidelines for urinary tract infection?
```

**Wait for response, then check**:
- [ ] Response received within 3 seconds
- [ ] "Urinary Tract Infections - IDSA Guideline" title present
- [ ] Strong Recommendations section (6 items)
- [ ] Moderate Recommendations section (5 items)
- [ ] Weak Recommendations section (3 items)
- [ ] Nitrofurantoin, TMP-SMX, and fosfomycin mentioned
- [ ] Clinical Implementation section present
- [ ] "Publication Year: 2011" present
- [ ] IDSA attribution statement

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 1.5: IAI Basic
**Copy and paste this exact query**:
```
What are the IDSA guidelines for intra-abdominal infections?
```

**Wait for response, then check**:
- [ ] Response received within 3 seconds
- [ ] "Intra-Abdominal Infections - IDSA Guideline" title present
- [ ] Strong Recommendations section (6 items)
- [ ] Moderate Recommendations section (5 items)
- [ ] Weak Recommendations section (3 items)
- [ ] Source control emphasized
- [ ] Clinical Implementation section present
- [ ] "Publication Year: 2010" present
- [ ] IDSA attribution statement

**Result**: ⬜ PASS  ⬜ FAIL

---

### ROUND 2: KEYWORD SPECIFICITY (5 tests)

#### Test 2.1: Short Keyword
**Copy and paste this exact query**:
```
IDSA CAP
```

**Check**:
- [ ] IDSA CAP guideline returned
- [ ] High relevance score (check console if available)
- [ ] Correct guideline matched

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 2.2: Multi-Word Query
**Copy and paste this exact query**:
```
community acquired pneumonia idsa guideline
```

**Check**:
- [ ] IDSA CAP guideline returned
- [ ] All query words matched
- [ ] High relevance score

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 2.3: Treatment Focus
**Copy and paste this exact query**:
```
IDSA recommendations for pneumonia antibiotics
```

**Check**:
- [ ] IDSA CAP guideline returned
- [ ] Antibiotic recommendations prominent
- [ ] Treatment section detailed

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 2.4: Prevention Focus
**Copy and paste this exact query**:
```
IDSA guideline for VAP prevention
```

**Check**:
- [ ] IDSA HAP/VAP guideline returned
- [ ] Prevention strategies mentioned
- [ ] Ventilator bundle described

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 2.5: Specific Pathogen
**Copy and paste this exact query**:
```
IDSA guideline for MRSA skin infection
```

**Check**:
- [ ] IDSA SSTI guideline returned
- [ ] MRSA coverage recommendations
- [ ] Purulent cellulitis management

**Result**: ⬜ PASS  ⬜ FAIL

---

### ROUND 3: CONTENT BLEEDING PREVENTION (5 tests)

#### Test 3.1: Pneumonia - No ATS Bleeding
**Copy and paste this exact query**:
```
IDSA pneumonia guideline
```

**Check**:
- [ ] ONLY IDSA guideline returned
- [ ] NO ATS guidelines in response
- [ ] NO CHEST guidelines in response
- [ ] Clear IDSA attribution

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 3.2: UTI - No NIDDK Bleeding
**Copy and paste this exact query**:
```
IDSA urinary tract infection guideline
```

**Check**:
- [ ] ONLY IDSA guideline returned
- [ ] NO NIDDK guidelines in response
- [ ] Clear IDSA attribution

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 3.3: Infection - No Other ID Content
**Copy and paste this exact query**:
```
IDSA infectious disease guidelines
```

**Check**:
- [ ] ONLY IDSA guidelines returned
- [ ] NO Merck Manual content mixed in
- [ ] NO other guideline organizations
- [ ] Clear IDSA attribution

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 3.4: Non-Infectious Disease Query
**Copy and paste this exact query**:
```
What are the guidelines for heart failure?
```

**Check**:
- [ ] HFSA/ACC/AHA guidelines returned
- [ ] NO IDSA guidelines returned
- [ ] Appropriate guidelines for query

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 3.5: Multiple Guidelines Separation
**Copy and paste this exact query**:
```
What are the IDSA and ATS guidelines for pneumonia?
```

**Check**:
- [ ] Both IDSA and ATS guidelines may appear
- [ ] Clear separation between guidelines
- [ ] Each guideline clearly attributed
- [ ] NO mixing of recommendations

**Result**: ⬜ PASS  ⬜ FAIL

---

### ROUND 4: CLINICAL SCENARIOS (5 tests)

#### Test 4.1: Outpatient Pneumonia
**Copy and paste this exact query**:
```
IDSA recommendations for outpatient pneumonia treatment
```

**Check**:
- [ ] IDSA CAP guideline returned
- [ ] Outpatient antibiotic options listed
- [ ] Amoxicillin, doxycycline, macrolide mentioned
- [ ] Duration specified

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 4.2: Severe Pneumonia
**Copy and paste this exact query**:
```
IDSA guideline for severe pneumonia ICU
```

**Check**:
- [ ] IDSA CAP guideline returned
- [ ] ICU management recommendations
- [ ] Beta-lactam plus azithromycin or fluoroquinolone
- [ ] Pseudomonas and MRSA coverage discussed

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 4.3: Abscess Management
**Copy and paste this exact query**:
```
IDSA recommendations for skin abscess treatment
```

**Check**:
- [ ] IDSA SSTI guideline returned
- [ ] Incision and drainage emphasized
- [ ] Antibiotic indications clear
- [ ] MRSA coverage discussed

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 4.4: Uncomplicated UTI
**Copy and paste this exact query**:
```
IDSA guideline for uncomplicated cystitis
```

**Check**:
- [ ] IDSA UTI guideline returned
- [ ] First-line agents listed (nitrofurantoin, TMP-SMX, fosfomycin)
- [ ] Duration specified (3-5 days)
- [ ] Avoid fluoroquinolones mentioned

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 4.5: Complicated IAI
**Copy and paste this exact query**:
```
IDSA recommendations for peritonitis source control
```

**Check**:
- [ ] IDSA IAI guideline returned
- [ ] Source control emphasized
- [ ] Surgical vs. percutaneous drainage
- [ ] Antibiotic duration after source control

**Result**: ⬜ PASS  ⬜ FAIL

---

### ROUND 5: EDGE CASES (4 tests)

#### Test 5.1: Ambiguous Query
**Copy and paste this exact query**:
```
infection treatment
```

**Check**:
- [ ] Appropriate response (guideline or knowledge base)
- [ ] Clear source attribution
- [ ] Relevant to query
- [ ] No errors

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 5.2: Very Specific Query
**Copy and paste this exact query**:
```
IDSA guideline for MRSA bacteremia
```

**Check**:
- [ ] Relevant IDSA guideline returned (may be HAP/VAP or SSTI)
- [ ] MRSA treatment recommendations
- [ ] Vancomycin or alternative mentioned
- [ ] OR appropriate "not found" message

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 5.3: Antibiotic-Specific Query
**Copy and paste this exact query**:
```
IDSA recommendations for vancomycin dosing
```

**Check**:
- [ ] Relevant IDSA guideline returned
- [ ] Vancomycin dosing mentioned (15-20mg/kg)
- [ ] Target trough levels (15-20 mcg/mL)
- [ ] OR appropriate response

**Result**: ⬜ PASS  ⬜ FAIL

---

#### Test 5.4: Duration Query
**Copy and paste this exact query**:
```
How long to treat pneumonia according to IDSA?
```

**Check**:
- [ ] IDSA CAP guideline returned
- [ ] Duration recommendations clear (5-7 days)
- [ ] Clinical stability criteria mentioned
- [ ] Afebrile 48-72 hours mentioned

**Result**: ⬜ PASS  ⬜ FAIL

---

## RESULTS SUMMARY

### Round 1: Basic Functionality
- Tests Passed: _____ / 5
- Tests Failed: _____ / 5
- Pass Rate: _____%

### Round 2: Keyword Specificity
- Tests Passed: _____ / 5
- Tests Failed: _____ / 5
- Pass Rate: _____%

### Round 3: Content Bleeding Prevention
- Tests Passed: _____ / 5
- Tests Failed: _____ / 5
- Pass Rate: _____%

### Round 4: Clinical Scenarios
- Tests Passed: _____ / 5
- Tests Failed: _____ / 5
- Pass Rate: _____%

### Round 5: Edge Cases
- Tests Passed: _____ / 4
- Tests Failed: _____ / 4
- Pass Rate: _____%

### OVERALL RESULTS
- **Total Tests**: 24
- **Tests Passed**: _____ / 24
- **Tests Failed**: _____ / 24
- **Overall Pass Rate**: _____%

---

## ISSUE TRACKING

### Critical Issues (Blocking)
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

### Major Issues (High Priority)
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

### Minor Issues (Low Priority)
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

### Observations
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

---

## PERFORMANCE METRICS

### Response Times
- Fastest response: _______ seconds
- Slowest response: _______ seconds
- Average response: _______ seconds
- Target: <2 seconds

### Search Performance
- Check console logs for search times
- Target: <50ms per search
- Average: _______ ms

### Memory Usage
- Check app memory usage
- Target: <1 MB for IDSA guidelines
- Actual: _______ MB

---

## CONTENT QUALITY ASSESSMENT

### Guideline Accuracy
- [ ] Recommendations match IDSA guidelines
- [ ] Clinical implementation is comprehensive
- [ ] Evidence quality ratings correct
- [ ] Dosing information accurate
- [ ] Duration recommendations correct

### Completeness
- [ ] All 5 guidelines accessible
- [ ] All recommendation categories present
- [ ] Clinical implementation detailed
- [ ] Key points helpful
- [ ] URLs functional

### Clarity
- [ ] Recommendations easy to understand
- [ ] Clinical implementation clear
- [ ] Formatting readable
- [ ] Attribution clear
- [ ] No ambiguity

---

## USER EXPERIENCE ASSESSMENT

### Ease of Use
- [ ] Queries return relevant results
- [ ] Response format easy to read
- [ ] Recommendations well-organized
- [ ] Clinical guidance helpful
- [ ] Links functional

### Response Quality
- [ ] Answers user's question
- [ ] Provides actionable guidance
- [ ] Includes evidence ratings
- [ ] Offers clinical implementation
- [ ] Suggests follow-up questions

### Overall Satisfaction
Rate the IDSA guidelines integration:
- ⬜ Excellent (95-100% pass rate, no critical issues)
- ⬜ Good (85-94% pass rate, minor issues only)
- ⬜ Fair (75-84% pass rate, some major issues)
- ⬜ Poor (<75% pass rate, critical issues present)

---

## RECOMMENDATIONS

### Immediate Actions Required
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

### Short-Term Improvements
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

### Long-Term Enhancements
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

---

## SIGN-OFF

**Tester Name**: _______________________
**Date**: _______________________
**Time Started**: _______________________
**Time Completed**: _______________________
**Total Duration**: _______________________

**Overall Assessment**:
⬜ APPROVED - Ready for production
⬜ APPROVED WITH MINOR FIXES - Can proceed with noted improvements
⬜ NEEDS REVISION - Critical issues must be addressed
⬜ FAILED - Major rework required

**Signature**: _______________________

---

## NEXT STEPS

### If APPROVED
1. Document test results
2. Archive test data
3. Update user documentation
4. Proceed to next phase (expand IDSA coverage)

### If APPROVED WITH MINOR FIXES
1. Document issues
2. Create fix tickets
3. Implement fixes
4. Retest affected areas
5. Proceed when fixes verified

### If NEEDS REVISION
1. Document all issues
2. Prioritize fixes
3. Implement corrections
4. Run full test suite again
5. Do not proceed until approved

### If FAILED
1. Document all failures
2. Analyze root causes
3. Major rework required
4. Full retest after fixes
5. Consider rollback if necessary

---

## APPENDIX: CONSOLE LOG CHECKS

### Search Logging
Look for these console messages:
```
IDSA Guidelines search for "[query]": [
  { topic: "...", score: ... }
]
```

### Expected Scores
- Exact match: 50,000-100,000
- Good match: 10,000-50,000
- Partial match: 3,000-10,000
- Weak match: 1,000-3,000

### Integration Logging
Look for these console messages:
```
Found IDSA guidelines: [number]
  Top IDSA guideline: [topic]
```

---

**Status**: 📋 READY FOR EXECUTION
**Estimated Time**: 45-60 minutes
**Priority**: HIGH
**Required**: Before production deployment
