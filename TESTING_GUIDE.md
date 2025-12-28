
# Testing Guide - Phase 5 Enhancements

## Quick Test Queries

Use these queries to test the keyword hooks and content bleeding prevention:

### Pathophysiology Hook Tests

1. **"What is the pathophysiology of iron deficiency anemia?"**
   - Expected: ONLY pathophysiology section about iron deficiency
   - Should NOT include: Clinical presentation, diagnosis, or treatment
   - Should NOT include: Information about other anemias

2. **"What causes sickle cell disease?"**
   - Expected: ONLY pathophysiology section about hemoglobin S mutation
   - Should NOT include: Clinical presentation, diagnosis, or treatment

3. **"Explain the disease process of multiple myeloma"**
   - Expected: ONLY pathophysiology section about plasma cell proliferation
   - Should NOT include: Clinical presentation, diagnosis, or treatment

### Clinical Presentation Hook Tests

1. **"What are the symptoms of hemophilia A?"**
   - Expected: ONLY clinical presentation section
   - Should NOT include: Pathophysiology, diagnosis, or treatment
   - Should NOT include: Information about other bleeding disorders

2. **"What are the clinical findings of polycythemia vera?"**
   - Expected: ONLY clinical presentation section
   - Should NOT include: Pathophysiology, diagnosis, or treatment

3. **"How does thrombotic thrombocytopenic purpura present?"**
   - Expected: ONLY clinical presentation section
   - Should NOT include: Pathophysiology, diagnosis, or treatment

### Diagnostic Approach Hook Tests

1. **"How do you diagnose immune thrombocytopenia?"**
   - Expected: ONLY diagnostic approach section
   - Should NOT include: Pathophysiology, clinical presentation, or treatment
   - Should NOT include: Information about other thrombocytopenias

2. **"What tests are used for von Willebrand disease?"**
   - Expected: ONLY diagnostic approach section
   - Should NOT include: Pathophysiology, clinical presentation, or treatment

3. **"What is the diagnostic workup for disseminated intravascular coagulation?"**
   - Expected: ONLY diagnostic approach section
   - Should NOT include: Pathophysiology, clinical presentation, or treatment

### Treatment Hook Tests

1. **"What is the treatment for chronic myeloid leukemia?"**
   - Expected: ONLY treatment section about TKIs
   - Should NOT include: Pathophysiology, clinical presentation, or diagnosis
   - Should NOT include: Information about other leukemias

2. **"How do you manage acute lymphoblastic leukemia?"**
   - Expected: ONLY treatment section
   - Should NOT include: Pathophysiology, clinical presentation, or diagnosis

3. **"What medications are used for essential thrombocythemia?"**
   - Expected: ONLY treatment section
   - Should NOT include: Pathophysiology, clinical presentation, or diagnosis

### Content Bleeding Prevention Tests

1. **"iron deficiency anemia" vs "vitamin b12 deficiency"**
   - Query: "iron deficiency anemia"
   - Expected: Iron Deficiency Anemia ONLY
   - Should NOT return: Vitamin B12 Deficiency, Folate Deficiency, or Anemia of Chronic Disease

2. **"type 1 diabetes" vs "type 2 diabetes"**
   - Query: "type 1 diabetes"
   - Expected: Type 1 Diabetes Mellitus ONLY
   - Should NOT return: Type 2 Diabetes Mellitus

3. **"acute myeloid leukemia" vs "acute lymphoblastic leukemia"**
   - Query: "acute myeloid leukemia"
   - Expected: Acute Myeloid Leukemia ONLY
   - Should NOT return: Acute Lymphoblastic Leukemia, Chronic Myeloid Leukemia

4. **"renal tubular acidosis" vs "metabolic acidosis"**
   - Query: "renal tubular acidosis"
   - Expected: Renal Tubular Acidosis ONLY
   - Should NOT return: Metabolic Acidosis

5. **"acute heart failure" vs "heart failure"**
   - Query: "acute heart failure"
   - Expected: Acute Decompensated Heart Failure
   - Should NOT return: Heart Failure (chronic)

### Comprehensive Response Tests

1. **"Tell me about hemophilia A"**
   - Expected: Complete overview with all sections
   - Should include: Pathophysiology, clinical presentation, diagnosis, treatment, clinical pearls

2. **"multiple myeloma"**
   - Expected: Complete overview with all sections
   - Should include: All aspects of the disease

## Automated Stress Testing

### Run All Tests

```typescript
import { runKeywordStressTest } from '@/data/merckManualKnowledge';

const results = runKeywordStressTest();
console.log('Test Results:');
console.log(`Passed: ${results.passed}`);
console.log(`Failed: ${results.failed}`);
console.log(`Success Rate: ${(results.passed / (results.passed + results.failed) * 100).toFixed(1)}%`);

// View failed tests
results.results.filter(r => !r.passed).forEach(result => {
  console.log(`Failed: "${result.query}"`);
  console.log(`  Expected: ${result.expectedTopic}`);
  console.log(`  Got: ${result.actualTopic || 'No match'}`);
});
```

### Expected Results

**Target Success Rate:** >95%

**Current Coverage:**
- Cardiology: 20+ conditions
- Pulmonary: 15+ conditions
- Gastroenterology: 10+ conditions
- Endocrine: 12+ conditions
- Hematology: 17+ conditions
- Renal: 10+ conditions
- **Total: 85+ conditions**

## Manual Testing Checklist

### Phase 1: Cardiology
- [ ] Test atrial fibrillation vs atrial flutter
- [ ] Test ventricular tachycardia vs supraventricular tachycardia
- [ ] Test heart failure vs acute heart failure
- [ ] Test aortic stenosis vs aortic regurgitation
- [ ] Test mitral stenosis vs mitral regurgitation

### Phase 2: Pulmonary & Renal
- [ ] Test asthma vs COPD
- [ ] Test community-acquired pneumonia vs hospital-acquired pneumonia
- [ ] Test acute kidney injury vs chronic kidney disease
- [ ] Test nephrotic syndrome vs nephritic syndrome
- [ ] Test hyponatremia vs hyperkalemia

### Phase 3: Gastroenterology
- [ ] Test GERD vs Barrett esophagus
- [ ] Test Crohn disease vs ulcerative colitis
- [ ] Test acute pancreatitis vs chronic pancreatitis
- [ ] Test peptic ulcer disease vs H. pylori infection

### Phase 4: Endocrine
- [ ] Test type 1 diabetes vs type 2 diabetes
- [ ] Test DKA vs HHS
- [ ] Test hypothyroidism vs hyperthyroidism
- [ ] Test Cushing syndrome vs Addison disease
- [ ] Test diabetes insipidus vs SIADH

### Phase 5: Hematology
- [ ] Test iron deficiency anemia vs vitamin B12 deficiency
- [ ] Test iron deficiency anemia vs folate deficiency
- [ ] Test iron deficiency anemia vs anemia of chronic disease
- [ ] Test sickle cell disease vs thalassemia
- [ ] Test immune thrombocytopenia vs TTP
- [ ] Test hemophilia A vs von Willebrand disease
- [ ] Test acute myeloid leukemia vs acute lymphoblastic leukemia
- [ ] Test chronic myeloid leukemia vs chronic lymphocytic leukemia
- [ ] Test Hodgkin lymphoma vs non-Hodgkin lymphoma
- [ ] Test polycythemia vera vs essential thrombocythemia

## Console Log Monitoring

### What to Look For

1. **Query Intent Detection**
```
Query intent hooks: {
  isPathophysiologyQuery: true,
  isClinicalQuery: false,
  isDiagnosticQuery: false,
  isTreatmentQuery: false
}
```

2. **Disease-Specific Terms**
```
Disease-specific terms detected: ['iron', 'deficiency']
```

3. **Search Results**
```
Search for "iron deficiency anemia":
[
  { topic: 'Iron Deficiency Anemia', score: 100000 },
  { topic: 'Anemia of Chronic Disease', score: 2000 }
]
```

4. **Content Sources**
```
Search results:
- Merck entries: 1
  Top Merck entry: Iron Deficiency Anemia
- Flashcards: 3
  Top flashcard: What are the causes of iron deficiency anemia?
```

## Reporting Issues

### If Content Bleeding Occurs

1. **Document the Query**
   - Exact query text
   - Expected result
   - Actual result

2. **Check Keywords**
   - Review keywords for both conditions
   - Identify overlapping keywords
   - Add disease-specific modifiers

3. **Update Stress Tests**
   - Add test case for the problematic query
   - Verify fix with stress test

### If Hook Not Working

1. **Check Trigger Words**
   - Verify query contains trigger word
   - Check regex pattern matches

2. **Review Console Logs**
   - Check intent detection output
   - Verify hook is being detected

3. **Test Response Generation**
   - Ensure response generation uses hook correctly
   - Verify only relevant section is returned

## Success Metrics

### Accuracy
- **Target:** >95% correct disease identification
- **Measure:** Stress test pass rate

### Precision
- **Target:** Zero content bleeding between similar diseases
- **Measure:** Manual review of responses

### Focus
- **Target:** Hook-triggered responses contain ONLY requested section
- **Measure:** Manual review of focused responses

### Completeness
- **Target:** Comprehensive responses include all relevant sections
- **Measure:** Manual review of comprehensive responses

## Conclusion

This testing guide ensures the Phase 5 enhancements work correctly. Regular testing and monitoring maintain the quality and accuracy of the medical knowledge base and keyword hook system.
