
# IDSA GUIDELINES COMPREHENSIVE TEST GUIDE

## Overview
This guide provides comprehensive testing for all 8 IDSA guidelines integrated into the Medical Expert Chatbot.

---

## GUIDELINE COVERAGE

### Integrated Guidelines (8 Total)
1. ✅ Community-Acquired Pneumonia (CAP)
2. ✅ Healthcare-Associated Pneumonia (HAP) and Ventilator-Associated Pneumonia (VAP)
3. ✅ Skin and Soft Tissue Infections (SSTI)
4. ✅ Urinary Tract Infections (UTI)
5. ✅ Intra-Abdominal Infections (IAI)
6. ✅ Infective Endocarditis (IE)
7. ✅ Clostridioides difficile Infection (CDI)
8. ✅ Sepsis and Septic Shock

### Total Statistics
- **Guidelines**: 8
- **Strong Recommendations**: 39
- **Moderate Recommendations**: 38
- **Weak Recommendations**: 16
- **Total Recommendations**: 93
- **Keywords**: 60+
- **Lines of Code**: ~1,500

---

## QUICK TEST QUERIES (Copy & Paste)

### 1. CAP
```
What are the IDSA guidelines for community-acquired pneumonia?
```

### 2. HAP/VAP
```
What are the IDSA guidelines for ventilator-associated pneumonia?
```

### 3. SSTI
```
What are the IDSA guidelines for cellulitis?
```

### 4. UTI
```
What are the IDSA guidelines for urinary tract infection?
```

### 5. IAI
```
What are the IDSA guidelines for intra-abdominal infections?
```

### 6. IE
```
What are the IDSA guidelines for infective endocarditis?
```

### 7. CDI
```
What are the IDSA guidelines for C. diff?
```

### 8. Sepsis
```
What are the IDSA guidelines for sepsis?
```

---

## DETAILED TEST CASES

### TEST 1: Community-Acquired Pneumonia

#### Test 1.1: Basic Query
**Query**: `What are the IDSA guidelines for community-acquired pneumonia?`
**Expected**: IDSA CAP guideline with CURB-65, antibiotic selection, 5-7 day duration

#### Test 1.2: Severity Assessment
**Query**: `IDSA CURB-65 pneumonia`
**Expected**: IDSA CAP guideline with CURB-65 scoring and severity-based treatment

#### Test 1.3: Outpatient Treatment
**Query**: `IDSA recommendations for outpatient pneumonia`
**Expected**: Amoxicillin, doxycycline, or macrolide options

#### Test 1.4: Severe Pneumonia
**Query**: `IDSA guideline for severe pneumonia ICU`
**Expected**: Beta-lactam + azithromycin or fluoroquinolone, Pseudomonas/MRSA coverage

---

### TEST 2: Healthcare-Associated Pneumonia

#### Test 2.1: Basic Query
**Query**: `What are the IDSA guidelines for ventilator-associated pneumonia?`
**Expected**: IDSA HAP/VAP guideline with MDR pathogen coverage

#### Test 2.2: VAP Prevention
**Query**: `IDSA recommendations for VAP prevention`
**Expected**: Ventilator bundle, head of bed elevation, oral care

#### Test 2.3: MRSA Coverage
**Query**: `IDSA guideline for MRSA pneumonia`
**Expected**: Vancomycin or linezolid recommendations, target trough levels

---

### TEST 3: Skin and Soft Tissue Infections

#### Test 3.1: Basic Query
**Query**: `What are the IDSA guidelines for cellulitis?`
**Expected**: IDSA SSTI guideline with uncomplicated vs. purulent classification

#### Test 3.2: Abscess Management
**Query**: `IDSA recommendations for skin abscess`
**Expected**: Incision and drainage primary, antibiotic indications

#### Test 3.3: Necrotizing Fasciitis
**Query**: `IDSA guideline for necrotizing fasciitis`
**Expected**: Emergent surgical debridement, broad-spectrum antibiotics, clindamycin

---

### TEST 4: Urinary Tract Infections

#### Test 4.1: Basic Query
**Query**: `What are the IDSA guidelines for urinary tract infection?`
**Expected**: IDSA UTI guideline with first-line agents

#### Test 4.2: Uncomplicated Cystitis
**Query**: `IDSA recommendations for uncomplicated UTI`
**Expected**: Nitrofurantoin, TMP-SMX, fosfomycin, 3-5 day duration

#### Test 4.3: Pyelonephritis
**Query**: `IDSA guideline for pyelonephritis`
**Expected**: Fluoroquinolone or beta-lactam, 5-7 or 10-14 day duration

---

### TEST 5: Intra-Abdominal Infections

#### Test 5.1: Basic Query
**Query**: `What are the IDSA guidelines for intra-abdominal infections?`
**Expected**: IDSA IAI guideline with source control emphasis

#### Test 5.2: Appendicitis
**Query**: `IDSA recommendations for appendicitis`
**Expected**: 24 hours for uncomplicated, 4-7 days for complicated

#### Test 5.3: Peritonitis
**Query**: `IDSA guideline for peritonitis`
**Expected**: Source control, broad-spectrum antibiotics, 4-7 day duration

---

### TEST 6: Infective Endocarditis

#### Test 6.1: Basic Query
**Query**: `What are the IDSA guidelines for infective endocarditis?`
**Expected**: IDSA IE guideline with Modified Duke Criteria, blood cultures, echo

#### Test 6.2: Blood Cultures
**Query**: `IDSA recommendations for endocarditis blood cultures`
**Expected**: 3 sets from separate sites before antibiotics

#### Test 6.3: Treatment Duration
**Query**: `IDSA guideline for endocarditis treatment duration`
**Expected**: 4-6 weeks IV antibiotics depending on pathogen and valve type

#### Test 6.4: Surgical Indications
**Query**: `IDSA recommendations for endocarditis surgery`
**Expected**: Heart failure, uncontrolled infection, large vegetations, recurrent emboli

---

### TEST 7: Clostridioides difficile Infection

#### Test 7.1: Basic Query
**Query**: `What are the IDSA guidelines for C. diff?`
**Expected**: IDSA CDI guideline with severity stratification and treatment

#### Test 7.2: Diagnostic Testing
**Query**: `IDSA recommendations for C. diff testing`
**Expected**: NAAT or two-step algorithm, test only with diarrhea

#### Test 7.3: Treatment
**Query**: `IDSA guideline for C. diff treatment`
**Expected**: Vancomycin or fidaxomicin for non-severe, vancomycin for severe

#### Test 7.4: Recurrent CDI
**Query**: `IDSA recommendations for recurrent C. diff`
**Expected**: Tapered/pulsed vancomycin, fidaxomicin, or FMT

#### Test 7.5: Fecal Microbiota Transplantation
**Query**: `IDSA guideline for FMT`
**Expected**: FMT for multiple recurrences, >90% cure rate

---

### TEST 8: Sepsis and Septic Shock

#### Test 8.1: Basic Query
**Query**: `What are the IDSA guidelines for sepsis?`
**Expected**: IDSA/SCCM sepsis guideline with Hour 1 Bundle

#### Test 8.2: Recognition
**Query**: `IDSA recommendations for sepsis recognition`
**Expected**: SOFA score, qSOFA, sepsis definition

#### Test 8.3: Fluid Resuscitation
**Query**: `IDSA guideline for sepsis fluid resuscitation`
**Expected**: 30 mL/kg crystalloid within 3 hours

#### Test 8.4: Vasopressors
**Query**: `IDSA recommendations for septic shock vasopressors`
**Expected**: Norepinephrine first-line, target MAP ≥65 mmHg

#### Test 8.5: Antibiotics
**Query**: `IDSA guideline for sepsis antibiotics`
**Expected**: Broad-spectrum within 1 hour, de-escalate based on cultures

---

## CONTENT BLEEDING PREVENTION TESTS

### Test CB-1: Pneumonia - IDSA vs. ATS
**Query**: `IDSA pneumonia guideline`
**Expected**: ONLY IDSA CAP guideline, NO ATS guidelines

### Test CB-2: Pneumonia - IDSA vs. CHEST
**Query**: `IDSA guideline for hospital-acquired pneumonia`
**Expected**: ONLY IDSA HAP/VAP guideline, NO CHEST guidelines

### Test CB-3: Sepsis - IDSA vs. SCCM
**Query**: `IDSA sepsis guideline`
**Expected**: IDSA/SCCM sepsis guideline (joint guideline acceptable)

### Test CB-4: UTI - IDSA vs. NIDDK
**Query**: `IDSA urinary tract infection guideline`
**Expected**: ONLY IDSA UTI guideline, NO NIDDK guidelines

### Test CB-5: Infection - IDSA vs. Merck
**Query**: `IDSA infectious disease guidelines`
**Expected**: ONLY IDSA guidelines, NO Merck Manual content

### Test CB-6: Non-Infectious Query
**Query**: `What are the guidelines for heart failure?`
**Expected**: HFSA/ACC/AHA guidelines, NO IDSA guidelines

---

## CLINICAL SCENARIO TESTS

### Scenario 1: Outpatient Pneumonia
**Query**: `How do you treat outpatient pneumonia according to IDSA?`
**Expected**: Amoxicillin 1g TID, doxycycline 100mg BID, or azithromycin

### Scenario 2: ICU Pneumonia
**Query**: `IDSA guideline for severe pneumonia requiring ICU`
**Expected**: Beta-lactam + azithromycin or fluoroquinolone, consider Pseudomonas/MRSA coverage

### Scenario 3: Simple Cellulitis
**Query**: `IDSA recommendations for uncomplicated cellulitis`
**Expected**: Cephalexin, dicloxacillin, or clindamycin for 5-7 days

### Scenario 4: Skin Abscess
**Query**: `How do you treat a skin abscess according to IDSA?`
**Expected**: Incision and drainage primary, antibiotics if >2 cm or systemic signs

### Scenario 5: Uncomplicated UTI
**Query**: `IDSA guideline for uncomplicated cystitis in women`
**Expected**: Nitrofurantoin 100mg BID × 5 days, TMP-SMX DS BID × 3 days, or fosfomycin 3g × 1

### Scenario 6: Pyelonephritis
**Query**: `IDSA recommendations for pyelonephritis treatment`
**Expected**: Ciprofloxacin 500mg BID or levofloxacin 750mg daily for 5-7 days

### Scenario 7: Perforated Appendicitis
**Query**: `IDSA guideline for complicated appendicitis`
**Expected**: Broad-spectrum antibiotics for 4-7 days after source control

### Scenario 8: Streptococcal Endocarditis
**Query**: `IDSA recommendations for streptococcal endocarditis`
**Expected**: Penicillin G or ceftriaxone for 4 weeks

### Scenario 9: Recurrent C. diff
**Query**: `IDSA guideline for recurrent C. difficile`
**Expected**: Tapered/pulsed vancomycin, fidaxomicin, or FMT

### Scenario 10: Septic Shock
**Query**: `IDSA recommendations for septic shock management`
**Expected**: Hour 1 Bundle, 30 mL/kg fluids, norepinephrine, antibiotics within 1 hour

---

## KEYWORD SPECIFICITY TESTS

### Test KS-1: Short Acronym
**Query**: `IDSA CAP`
**Expected**: IDSA CAP guideline

### Test KS-2: Full Name
**Query**: `Infectious Diseases Society of America pneumonia`
**Expected**: IDSA CAP guideline

### Test KS-3: Disease + IDSA
**Query**: `cellulitis IDSA`
**Expected**: IDSA SSTI guideline

### Test KS-4: Treatment Focus
**Query**: `IDSA antibiotic recommendations for UTI`
**Expected**: IDSA UTI guideline with antibiotic details

### Test KS-5: Prevention Focus
**Query**: `IDSA VAP prevention guidelines`
**Expected**: IDSA HAP/VAP guideline with prevention strategies

---

## EDGE CASE TESTS

### Edge 1: General Infection
**Query**: `infection treatment`
**Expected**: Appropriate response (guideline or knowledge base), clear attribution

### Edge 2: Specific Antibiotic
**Query**: `IDSA vancomycin dosing`
**Expected**: Relevant IDSA guideline with vancomycin dosing (15-20mg/kg, trough 15-20)

### Edge 3: Duration Query
**Query**: `How long to treat pneumonia IDSA?`
**Expected**: IDSA CAP guideline with 5-7 day duration

### Edge 4: Prophylaxis
**Query**: `IDSA endocarditis prophylaxis`
**Expected**: IDSA IE guideline with prophylaxis recommendations

### Edge 5: Recurrence
**Query**: `IDSA guideline for recurrent infections`
**Expected**: Relevant guideline (likely CDI with recurrence management)

---

## PERFORMANCE BENCHMARKS

### Response Time
- **Target**: <2 seconds
- **Acceptable**: <3 seconds
- **Unacceptable**: >5 seconds

### Search Time
- **Target**: <50ms
- **Acceptable**: <100ms
- **Unacceptable**: >200ms

### Accuracy
- **Target**: 95%+ correct guideline returned
- **Acceptable**: 90%+ correct guideline
- **Unacceptable**: <85% correct guideline

---

## VALIDATION CHECKLIST

### For Each Guideline Test

#### Content Validation
- [ ] Correct guideline title
- [ ] Guideline summary present
- [ ] Strong recommendations section
- [ ] Moderate recommendations section
- [ ] Weak recommendations section
- [ ] Clinical implementation section
- [ ] Key points section
- [ ] Quality of evidence statement
- [ ] Publication year
- [ ] IDSA URL
- [ ] Attribution statement

#### Accuracy Validation
- [ ] Recommendations match IDSA guidelines
- [ ] Dosing information accurate
- [ ] Duration recommendations correct
- [ ] Evidence quality ratings correct
- [ ] Clinical implementation comprehensive

#### Content Bleeding Validation
- [ ] No other guideline organizations mixed in
- [ ] Clear IDSA attribution
- [ ] Appropriate guideline for query
- [ ] No Merck Manual content mixed in (unless appropriate)

---

## EXPECTED RESULTS SUMMARY

### CAP Guideline
- **Strong Recommendations**: 8
- **Moderate Recommendations**: 7
- **Weak Recommendations**: 3
- **Key Points**: 7
- **Publication Year**: 2019

### HAP/VAP Guideline
- **Strong Recommendations**: 7
- **Moderate Recommendations**: 6
- **Weak Recommendations**: 3
- **Key Points**: 8
- **Publication Year**: 2016

### SSTI Guideline
- **Strong Recommendations**: 6
- **Moderate Recommendations**: 6
- **Weak Recommendations**: 3
- **Key Points**: 6
- **Publication Year**: 2014

### UTI Guideline
- **Strong Recommendations**: 6
- **Moderate Recommendations**: 5
- **Weak Recommendations**: 3
- **Key Points**: 6
- **Publication Year**: 2011

### IAI Guideline
- **Strong Recommendations**: 6
- **Moderate Recommendations**: 5
- **Weak Recommendations**: 3
- **Key Points**: 7
- **Publication Year**: 2010

### IE Guideline
- **Strong Recommendations**: 7
- **Moderate Recommendations**: 5
- **Weak Recommendations**: 3
- **Key Points**: TBD
- **Publication Year**: 2015

### CDI Guideline
- **Strong Recommendations**: 7
- **Moderate Recommendations**: 6
- **Weak Recommendations**: 3
- **Key Points**: TBD
- **Publication Year**: 2021

### Sepsis Guideline
- **Strong Recommendations**: 7
- **Moderate Recommendations**: 7
- **Weak Recommendations**: 4
- **Key Points**: TBD
- **Publication Year**: 2021

---

## COMMON ISSUES AND SOLUTIONS

### Issue: Guideline Not Returned
**Solution**: Add "IDSA" or "guideline" to query

### Issue: Wrong Guideline
**Solution**: Be more specific with condition name

### Issue: Multiple Guidelines
**Solution**: Specify organization (IDSA) in query

### Issue: No Response
**Solution**: Check if guideline exists for that condition

---

## PASS/FAIL CRITERIA

### Pass Criteria
- ✅ Correct guideline returned for query
- ✅ All recommendation sections present
- ✅ Clinical implementation detailed
- ✅ No content bleeding
- ✅ Response time <3 seconds
- ✅ Accurate information

### Fail Criteria
- ❌ Wrong guideline returned
- ❌ Missing recommendation sections
- ❌ Content bleeding present
- ❌ Response time >5 seconds
- ❌ Inaccurate information

---

## TEST EXECUTION SUMMARY

### Total Tests: 40+
- Basic queries: 8
- Detailed scenarios: 10
- Content bleeding: 6
- Keyword specificity: 5
- Edge cases: 5
- Clinical scenarios: 10

### Expected Pass Rate: 95%+

### Time Required: 60-90 minutes

---

## FINAL VALIDATION

### Code Quality
- [ ] No TypeScript errors
- [ ] No runtime errors
- [ ] No console warnings
- [ ] Search function works
- [ ] Helper functions work

### Content Quality
- [ ] All 8 guidelines accessible
- [ ] Recommendations accurate
- [ ] Clinical implementation comprehensive
- [ ] Evidence ratings correct
- [ ] URLs functional

### User Experience
- [ ] Clear attribution
- [ ] Organized display
- [ ] Easy to read
- [ ] Helpful guidance
- [ ] No confusion

---

## CONCLUSION

This comprehensive test guide covers all 8 IDSA guidelines integrated into the Medical Expert Chatbot. Execute tests systematically and document results. The integration should maintain high quality standards with accurate, evidence-based recommendations and robust content bleeding prevention.

**Status**: 📋 READY FOR COMPREHENSIVE TESTING
**Priority**: HIGH
**Estimated Time**: 60-90 minutes
