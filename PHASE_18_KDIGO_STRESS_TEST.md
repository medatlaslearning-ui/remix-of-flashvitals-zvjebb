
# Phase 18: KDIGO Guidelines Stress Test Guide

## Purpose
This document provides a comprehensive stress test protocol for the KDIGO (Kidney Disease: Improving Global Outcomes) guidelines integration to ensure accuracy, prevent content bleeding, and validate search functionality.

## Test Categories

### 1. Direct KDIGO Guideline Queries

**Test these queries to verify KDIGO guidelines are correctly retrieved:**

```
✅ Test 1: "KDIGO AKI guidelines"
Expected: Acute Kidney Injury (AKI) - KDIGO Guideline
Should include: KDIGO criteria, staging, prevention, RRT indications

✅ Test 2: "KDIGO criteria for acute kidney injury"
Expected: Acute Kidney Injury (AKI) - KDIGO Guideline
Should include: SCr ≥0.3 mg/dL in 48h, staging system

✅ Test 3: "chronic kidney disease KDIGO"
Expected: Chronic Kidney Disease (CKD) Evaluation and Management - KDIGO Guideline
Should include: CKD-EPI equation, staging, ACE inhibitors/ARBs, SGLT2 inhibitors

✅ Test 4: "KDIGO diabetes and CKD"
Expected: Diabetes and Chronic Kidney Disease - KDIGO Guideline
Should include: SGLT2 inhibitors, GLP-1 agonists, finerenone

✅ Test 5: "KDIGO glomerulonephritis guidelines"
Expected: Glomerulonephritis - KDIGO Guideline
Should include: Kidney biopsy, immunosuppressive therapy, disease-specific treatments

✅ Test 6: "KDIGO anemia in CKD"
Expected: Anemia in Chronic Kidney Disease - KDIGO Guideline
Should include: Iron supplementation, ESAs, hemoglobin targets

✅ Test 7: "KDIGO CKD-MBD"
Expected: Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) - KDIGO Guideline
Should include: Phosphate binders, PTH targets, calcimimetics

✅ Test 8: "KDIGO blood pressure in CKD"
Expected: Blood Pressure Management in Chronic Kidney Disease - KDIGO Guideline
Should include: BP targets, ACE inhibitors/ARBs, home BP monitoring
```

### 2. Topic-Specific Queries (Without "KDIGO" Keyword)

**Test these queries to verify KDIGO guidelines are retrieved for relevant renal topics:**

```
✅ Test 9: "acute kidney injury management"
Expected: Should retrieve KDIGO AKI guideline
Verify: KDIGO criteria, staging, prevention strategies

✅ Test 10: "chronic kidney disease staging"
Expected: Should retrieve KDIGO CKD guideline
Verify: GFR categories (G1-G5), albuminuria categories (A1-A3)

✅ Test 11: "SGLT2 inhibitors for kidney disease"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: Dapagliflozin, empagliflozin, canagliflozin recommendations

✅ Test 12: "IgA nephropathy treatment"
Expected: Should retrieve KDIGO Glomerulonephritis guideline
Verify: ACE inhibitors/ARBs, corticosteroids for persistent proteinuria

✅ Test 13: "erythropoietin in CKD"
Expected: Should retrieve KDIGO Anemia in CKD guideline
Verify: ESA indications, hemoglobin targets, iron supplementation

✅ Test 14: "hyperphosphatemia management"
Expected: Should retrieve KDIGO CKD-MBD guideline
Verify: Dietary restriction, phosphate binders, target phosphate levels

✅ Test 15: "ACE inhibitors for proteinuria"
Expected: Should retrieve KDIGO CKD or BP in CKD guideline
Verify: ACE inhibitor/ARB recommendations, monitoring parameters
```

### 3. Content Bleeding Prevention Tests

**Test these queries to ensure KDIGO guidelines don't bleed into non-renal topics:**

```
❌ Test 16: "heart failure management"
Expected: Should NOT retrieve KDIGO guidelines
Should retrieve: ACC/AHA/HFSA heart failure guidelines or Merck Manual

❌ Test 17: "diabetes management"
Expected: Should NOT retrieve KDIGO guidelines (unless specifically asking about kidney disease)
Should retrieve: Endocrine knowledge base or ADA guidelines

❌ Test 18: "hypertension treatment"
Expected: Should NOT retrieve KDIGO guidelines (unless specifically asking about CKD)
Should retrieve: ACC/AHA hypertension guidelines or Merck Manual

❌ Test 19: "anemia workup"
Expected: Should NOT retrieve KDIGO guidelines (unless specifically asking about CKD)
Should retrieve: Hematology knowledge base or Merck Manual

❌ Test 20: "sepsis management"
Expected: Should NOT retrieve KDIGO guidelines
Should retrieve: SCCM Surviving Sepsis Campaign guidelines
```

### 4. Precision Tests (Similar Terms)

**Test these queries to ensure correct guideline is retrieved:**

```
✅ Test 21: "AKI vs CKD"
Expected: Should retrieve both KDIGO AKI and CKD guidelines
Verify: Clear distinction between acute and chronic kidney disease

✅ Test 22: "prerenal AKI"
Expected: Should retrieve KDIGO AKI guideline
Verify: FENa <1%, prerenal causes, volume resuscitation

✅ Test 23: "intrinsic AKI"
Expected: Should retrieve KDIGO AKI guideline
Verify: Acute tubular necrosis, muddy brown casts, FENa >2%

✅ Test 24: "postrenal AKI"
Expected: Should retrieve KDIGO AKI guideline
Verify: Urinary tract obstruction, bilateral obstruction required

✅ Test 25: "diabetic kidney disease"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: SGLT2 inhibitors, GLP-1 agonists, albuminuria management

✅ Test 26: "diabetic nephropathy"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: Same as diabetic kidney disease

✅ Test 27: "secondary hyperparathyroidism"
Expected: Should retrieve KDIGO CKD-MBD guideline
Verify: PTH targets, vitamin D analogs, calcimimetics

✅ Test 28: "renal osteodystrophy"
Expected: Should retrieve KDIGO CKD-MBD guideline
Verify: Bone disease in CKD, phosphate management, PTH control
```

### 5. Clinical Scenario Tests

**Test these clinical scenarios to verify appropriate guideline retrieval:**

```
✅ Test 29: "patient with creatinine increase from 1.0 to 1.5 in 2 days"
Expected: Should retrieve KDIGO AKI guideline
Verify: AKI criteria met (≥0.3 mg/dL increase), staging, management

✅ Test 30: "patient with eGFR 25 and albuminuria"
Expected: Should retrieve KDIGO CKD guideline
Verify: CKD G4, nephrology referral, ACE inhibitor/ARB, SGLT2 inhibitor

✅ Test 31: "type 2 diabetes with proteinuria"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: SGLT2 inhibitors first-line, ACE inhibitor/ARB, BP targets

✅ Test 32: "hemoglobin 8.5 in dialysis patient"
Expected: Should retrieve KDIGO Anemia in CKD guideline
Verify: ESA indications, iron supplementation, hemoglobin targets

✅ Test 33: "phosphate 7.2 in CKD patient"
Expected: Should retrieve KDIGO CKD-MBD guideline
Verify: Dietary restriction, phosphate binders, target phosphate 2.5-4.5

✅ Test 34: "blood pressure 150/95 in patient with CKD and proteinuria"
Expected: Should retrieve KDIGO BP in CKD guideline
Verify: Target BP <120/80 mmHg, ACE inhibitor/ARB first-line

✅ Test 35: "when to start dialysis"
Expected: Should retrieve KDIGO AKI or CKD guideline
Verify: Emergent RRT indications, eGFR <15 for CKD, uremic symptoms
```

### 6. Medication-Specific Tests

**Test these medication queries to verify guideline retrieval:**

```
✅ Test 36: "dapagliflozin for CKD"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: SGLT2 inhibitor recommendations, dosing, eGFR thresholds

✅ Test 37: "empagliflozin for kidney disease"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: SGLT2 inhibitor recommendations, EMPA-KIDNEY trial

✅ Test 38: "finerenone for diabetic kidney disease"
Expected: Should retrieve KDIGO Diabetes and CKD guideline
Verify: Non-steroidal MRA, use with ACE inhibitor/ARB, potassium monitoring

✅ Test 39: "cinacalcet for hyperparathyroidism"
Expected: Should retrieve KDIGO CKD-MBD guideline
Verify: Calcimimetic for severe hyperparathyroidism, PTH >600 pg/mL

✅ Test 40: "sevelamer for hyperphosphatemia"
Expected: Should retrieve KDIGO CKD-MBD guideline
Verify: Non-calcium phosphate binder, dosing, monitoring
```

### 7. Guideline Comparison Tests

**Test these queries to verify multiple guidelines are retrieved when appropriate:**

```
✅ Test 41: "heart failure with kidney disease"
Expected: Should retrieve both HFSA/ACC heart failure guidelines AND KDIGO CKD guideline
Verify: Cardiorenal syndrome management, medication adjustments

✅ Test 42: "hypertension in CKD"
Expected: Should retrieve both ACC/AHA hypertension guidelines AND KDIGO BP in CKD guideline
Verify: BP targets, ACE inhibitor/ARB recommendations

✅ Test 43: "diabetes with kidney disease"
Expected: Should retrieve both Endocrine knowledge base AND KDIGO Diabetes and CKD guideline
Verify: Glycemic control, kidney-protective medications

✅ Test 44: "anemia in chronic kidney disease"
Expected: Should retrieve both Hematology knowledge base AND KDIGO Anemia in CKD guideline
Verify: ESA therapy, iron supplementation, hemoglobin targets
```

### 8. Edge Case Tests

**Test these edge cases to verify robustness:**

```
✅ Test 45: "KDIGO"
Expected: Should retrieve general information about KDIGO or list available guidelines
Verify: Organization description, guideline topics covered

✅ Test 46: "kidney disease improving global outcomes"
Expected: Should retrieve KDIGO guidelines
Verify: Same as "KDIGO" query

✅ Test 47: "renal guidelines"
Expected: Should retrieve KDIGO guidelines
Verify: Multiple KDIGO guidelines or general renal guideline information

✅ Test 48: "nephrology guidelines"
Expected: Should retrieve KDIGO guidelines
Verify: Multiple KDIGO guidelines or general nephrology guideline information

✅ Test 49: "AKI staging"
Expected: Should retrieve KDIGO AKI guideline
Verify: Stage 1, 2, 3 criteria based on SCr and urine output

✅ Test 50: "CKD staging"
Expected: Should retrieve KDIGO CKD guideline
Verify: GFR categories (G1-G5), albuminuria categories (A1-A3)
```

## Validation Checklist

For each test, verify the following:

### Content Accuracy
- [ ] Correct guideline retrieved
- [ ] Guideline summary accurate
- [ ] Strong recommendations (Grade 1) clearly labeled
- [ ] Weak recommendations (Grade 2) clearly labeled
- [ ] Quality of evidence stated
- [ ] Clinical implementation guidance provided
- [ ] Key points summarized
- [ ] Publication year correct
- [ ] KDIGO URL included

### Search Functionality
- [ ] Relevant keywords trigger guideline retrieval
- [ ] Exact topic matches work
- [ ] Partial matches work appropriately
- [ ] Multi-word queries work
- [ ] Clinical scenarios trigger appropriate guidelines
- [ ] Medication queries trigger appropriate guidelines

### Content Bleeding Prevention
- [ ] Non-renal queries do NOT retrieve KDIGO guidelines
- [ ] Renal queries do NOT retrieve non-renal guidelines (unless appropriate)
- [ ] Similar terms retrieve correct guidelines
- [ ] System detection works correctly

### User Experience
- [ ] Response is comprehensive and educational
- [ ] Recommendations are clearly organized
- [ ] Clinical implementation is actionable
- [ ] Key points are easy to scan
- [ ] Evidence grading is clear
- [ ] Links to KDIGO website work

## Expected Results Summary

**Pass Criteria:**
- ✅ All 50 tests pass
- ✅ No content bleeding detected
- ✅ Search accuracy >95%
- ✅ All guideline components displayed correctly
- ✅ Clinical implementation guidance is actionable
- ✅ Evidence grading is clear and accurate

**Fail Criteria:**
- ❌ Any test fails to retrieve expected guideline
- ❌ Content bleeding detected (non-renal topics retrieve KDIGO guidelines)
- ❌ Search accuracy <95%
- ❌ Missing guideline components
- ❌ Inaccurate or incomplete recommendations

## Reporting

After completing the stress test, document:

1. **Pass Rate:** X/50 tests passed (target: 50/50)
2. **Content Bleeding:** None detected / Issues found
3. **Search Accuracy:** X% (target: >95%)
4. **Issues Identified:** List any problems
5. **Recommendations:** Suggested improvements

## Continuous Monitoring

**Ongoing validation:**
- Monitor user queries for KDIGO guideline requests
- Track feedback on KDIGO guideline responses
- Identify gaps in guideline coverage
- Update guidelines as new KDIGO publications released
- Refine search keywords based on user patterns

## Conclusion

This comprehensive stress test protocol ensures the KDIGO guidelines integration is accurate, robust, and user-friendly. Regular testing and monitoring will maintain high quality and prevent content bleeding as the knowledge base continues to grow.

**Next Steps After Stress Testing:**
1. Document test results
2. Fix any identified issues
3. Refine search keywords if needed
4. Update documentation
5. Consider additional KDIGO guidelines
6. Gather user feedback
7. Plan next guideline integration phase
