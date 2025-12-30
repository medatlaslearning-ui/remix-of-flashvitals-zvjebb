
# IDSA GUIDELINES TESTING CHECKLIST

## Quick Testing Guide
Use this checklist to quickly test the IDSA guidelines integration. Copy and paste each query into the chatbot and verify the expected results.

---

## ✅ TEST GROUP 1: COMMUNITY-ACQUIRED PNEUMONIA

### Test 1.1: Basic CAP Query
**Copy this query**: `What are the IDSA guidelines for community-acquired pneumonia?`

**Check for**:
- [ ] IDSA CAP guideline title displayed
- [ ] Guideline summary present
- [ ] Strong recommendations section (8 items)
- [ ] Moderate recommendations section (7 items)
- [ ] Weak recommendations section (3 items)
- [ ] Clinical implementation guidance
- [ ] Key points (7 items)
- [ ] IDSA URL link
- [ ] Publication year: 2019
- [ ] NO ATS or CHEST guidelines mixed in

### Test 1.2: CAP Antibiotic Selection
**Copy this query**: `IDSA recommendations for pneumonia antibiotics`

**Check for**:
- [ ] IDSA CAP guideline returned
- [ ] Outpatient antibiotic options mentioned
- [ ] Inpatient antibiotic options mentioned
- [ ] Severe CAP antibiotic options mentioned

### Test 1.3: CAP Severity
**Copy this query**: `CURB-65 score IDSA pneumonia`

**Check for**:
- [ ] IDSA CAP guideline returned
- [ ] CURB-65 scoring explained
- [ ] PSI scoring mentioned
- [ ] Severity-based treatment

---

## ✅ TEST GROUP 2: HEALTHCARE-ASSOCIATED PNEUMONIA

### Test 2.1: Basic HAP/VAP Query
**Copy this query**: `What are the IDSA guidelines for ventilator-associated pneumonia?`

**Check for**:
- [ ] IDSA HAP/VAP guideline title displayed
- [ ] Guideline summary present
- [ ] Strong recommendations section (7 items)
- [ ] Moderate recommendations section (6 items)
- [ ] Weak recommendations section (3 items)
- [ ] Clinical implementation guidance
- [ ] Key points
- [ ] IDSA URL link
- [ ] Publication year: 2016
- [ ] NO ATS or CHEST guidelines mixed in

### Test 2.2: VAP Prevention
**Copy this query**: `IDSA recommendations for VAP prevention`

**Check for**:
- [ ] IDSA HAP/VAP guideline returned
- [ ] Ventilator bundle mentioned
- [ ] Head of bed elevation
- [ ] Oral care with chlorhexidine
- [ ] Daily sedation vacation

### Test 2.3: MRSA Coverage
**Copy this query**: `IDSA guideline for MRSA pneumonia treatment`

**Check for**:
- [ ] IDSA HAP/VAP guideline returned
- [ ] MRSA risk factors
- [ ] Vancomycin or linezolid recommendations
- [ ] Target trough levels

---

## ✅ TEST GROUP 3: SKIN AND SOFT TISSUE INFECTIONS

### Test 3.1: Basic SSTI Query
**Copy this query**: `What are the IDSA guidelines for cellulitis?`

**Check for**:
- [ ] IDSA SSTI guideline title displayed
- [ ] Guideline summary present
- [ ] Strong recommendations section (6 items)
- [ ] Moderate recommendations section (6 items)
- [ ] Weak recommendations section (3 items)
- [ ] Clinical implementation guidance
- [ ] Key points
- [ ] IDSA URL link
- [ ] Publication year: 2014

### Test 3.2: Abscess Management
**Copy this query**: `IDSA recommendations for skin abscess`

**Check for**:
- [ ] IDSA SSTI guideline returned
- [ ] Incision and drainage emphasized
- [ ] Antibiotic indications
- [ ] MRSA coverage

### Test 3.3: Necrotizing Fasciitis
**Copy this query**: `IDSA guideline for necrotizing fasciitis`

**Check for**:
- [ ] IDSA SSTI guideline returned
- [ ] Emergent surgical debridement
- [ ] Broad-spectrum antibiotics
- [ ] Clindamycin for toxin suppression

---

## ✅ TEST GROUP 4: URINARY TRACT INFECTIONS

### Test 4.1: Basic UTI Query
**Copy this query**: `What are the IDSA guidelines for urinary tract infection?`

**Check for**:
- [ ] IDSA UTI guideline title displayed
- [ ] Guideline summary present
- [ ] Strong recommendations section (6 items)
- [ ] Moderate recommendations section (5 items)
- [ ] Weak recommendations section (3 items)
- [ ] Clinical implementation guidance
- [ ] Key points
- [ ] IDSA URL link
- [ ] Publication year: 2011

### Test 4.2: Uncomplicated Cystitis
**Copy this query**: `IDSA recommendations for uncomplicated UTI`

**Check for**:
- [ ] IDSA UTI guideline returned
- [ ] Nitrofurantoin mentioned
- [ ] TMP-SMX mentioned
- [ ] Fosfomycin mentioned
- [ ] 3-5 day duration

### Test 4.3: Pyelonephritis
**Copy this query**: `IDSA guideline for pyelonephritis treatment`

**Check for**:
- [ ] IDSA UTI guideline returned
- [ ] Fluoroquinolone options
- [ ] Beta-lactam options
- [ ] Duration (5-7 days or 10-14 days)

---

## ✅ TEST GROUP 5: INTRA-ABDOMINAL INFECTIONS

### Test 5.1: Basic IAI Query
**Copy this query**: `What are the IDSA guidelines for intra-abdominal infections?`

**Check for**:
- [ ] IDSA IAI guideline title displayed
- [ ] Guideline summary present
- [ ] Strong recommendations section (6 items)
- [ ] Moderate recommendations section (5 items)
- [ ] Weak recommendations section (3 items)
- [ ] Clinical implementation guidance
- [ ] Key points
- [ ] IDSA URL link
- [ ] Publication year: 2010

### Test 5.2: Appendicitis
**Copy this query**: `IDSA recommendations for appendicitis antibiotics`

**Check for**:
- [ ] IDSA IAI guideline returned
- [ ] Uncomplicated vs. complicated
- [ ] 24 hours for uncomplicated
- [ ] 4-7 days for complicated

### Test 5.3: Source Control
**Copy this query**: `IDSA guideline for peritonitis source control`

**Check for**:
- [ ] IDSA IAI guideline returned
- [ ] Source control emphasized
- [ ] Surgical vs. percutaneous drainage
- [ ] Antibiotic duration after source control

---

## ✅ TEST GROUP 6: CONTENT BLEEDING PREVENTION

### Test 6.1: Pneumonia - Multiple Guidelines
**Copy this query**: `pneumonia guidelines`

**Check for**:
- [ ] Multiple guidelines may appear (IDSA, ATS, CHEST)
- [ ] Each guideline clearly separated
- [ ] Clear attribution for each
- [ ] NO mixing of recommendations

### Test 6.2: IDSA Specific
**Copy this query**: `IDSA infectious disease guidelines`

**Check for**:
- [ ] ONLY IDSA guidelines returned
- [ ] NO other guideline organizations
- [ ] Clear IDSA attribution

### Test 6.3: Non-Infectious Disease
**Copy this query**: `What are the guidelines for heart failure?`

**Check for**:
- [ ] HFSA/ACC/AHA guidelines returned
- [ ] NO IDSA guidelines returned
- [ ] Appropriate guideline for query

---

## ✅ TEST GROUP 7: EDGE CASES

### Test 7.1: General Infection Query
**Copy this query**: `infection treatment`

**Check for**:
- [ ] Appropriate response (guideline or knowledge base)
- [ ] Clear source attribution
- [ ] Relevant to query

### Test 7.2: Specific Antibiotic Query
**Copy this query**: `IDSA recommendations for vancomycin`

**Check for**:
- [ ] Relevant IDSA guideline (HAP/VAP or SSTI)
- [ ] Vancomycin dosing and monitoring
- [ ] MRSA coverage indications

### Test 7.3: Duration Query
**Copy this query**: `How long to treat pneumonia IDSA?`

**Check for**:
- [ ] IDSA CAP guideline returned
- [ ] Duration recommendations (5-7 days)
- [ ] Clinical stability criteria

---

## ✅ TEST GROUP 8: INTEGRATION TESTING

### Test 8.1: Guideline + Knowledge Base
**Copy this query**: `What is the pathophysiology of pneumonia and what are the IDSA guidelines?`

**Check for**:
- [ ] Merck Manual pathophysiology section
- [ ] IDSA CAP guideline section
- [ ] Clear separation between sources
- [ ] Appropriate attribution

### Test 8.2: Multiple Guideline Organizations
**Copy this query**: `What are the IDSA and ATS guidelines for pneumonia?`

**Check for**:
- [ ] IDSA CAP guideline
- [ ] ATS guideline (if available)
- [ ] Clear separation
- [ ] No content mixing

### Test 8.3: Guideline + Flashcards
**Copy this query**: `Tell me about UTI treatment according to IDSA`

**Check for**:
- [ ] IDSA UTI guideline primary
- [ ] Flashcards may supplement
- [ ] Clear source attribution
- [ ] No content bleeding

---

## QUICK PASS/FAIL SUMMARY

### Total Tests: 24

**Passed**: _____ / 24
**Failed**: _____ / 24
**Pass Rate**: _____%

### Critical Issues Found:
1. _______________________________________
2. _______________________________________
3. _______________________________________

### Minor Issues Found:
1. _______________________________________
2. _______________________________________
3. _______________________________________

---

## TROUBLESHOOTING

### Issue: IDSA Guidelines Not Appearing
**Try**:
1. Add "IDSA" to your query
2. Use "guideline" or "recommendation" in query
3. Be more specific (e.g., "IDSA CAP guideline")
4. Check console logs for search results

### Issue: Wrong Guideline Returned
**Try**:
1. Use more specific keywords
2. Include guideline organization name (IDSA)
3. Use full condition name
4. Check keyword overlap

### Issue: Content Bleeding
**Report**:
1. Note which guidelines are mixing
2. Identify overlapping keywords
3. Document in issue tracker
4. Suggest keyword refinements

---

## COMPLETION CHECKLIST

### Before Testing
- [ ] App is running
- [ ] Chatbot screen open
- [ ] Console logs visible (for debugging)
- [ ] Test queries prepared

### During Testing
- [ ] Execute each test systematically
- [ ] Document results for each test
- [ ] Screenshot any failures
- [ ] Note unexpected behavior
- [ ] Check console logs

### After Testing
- [ ] Calculate pass rate
- [ ] Document all issues
- [ ] Prioritize fixes
- [ ] Update documentation
- [ ] Report results

---

## FINAL VALIDATION

### Code Quality
- [ ] TypeScript types correct
- [ ] No console errors
- [ ] No runtime warnings
- [ ] Search function works
- [ ] Helper functions work

### Content Quality
- [ ] Guidelines accurate
- [ ] Recommendations complete
- [ ] Clinical implementation detailed
- [ ] Evidence ratings correct
- [ ] URLs functional

### User Experience
- [ ] Clear attribution
- [ ] Organized display
- [ ] Easy to read
- [ ] Helpful guidance
- [ ] No confusion

---

## SIGN-OFF

**Tester Name**: _______________________
**Date**: _______________________
**Pass Rate**: _______________________
**Status**: ⬜ PASS  ⬜ FAIL  ⬜ NEEDS REVISION

**Notes**:
_____________________________________________
_____________________________________________
_____________________________________________

---

**Status**: 📋 READY FOR TESTING
**Estimated Time**: 30-45 minutes for complete test suite
**Priority**: HIGH - Validate before production use
