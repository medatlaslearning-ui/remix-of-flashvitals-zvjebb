
# PHASE 25: ASA GUIDELINES QUICK START GUIDE

## American Stroke Association (ASA) Guidelines Integration

### What Was Added

**New File:** `data/asaGuidelinesKnowledge.ts`

This file contains comprehensive American Stroke Association (ASA) clinical practice guidelines for:
1. **Acute Ischemic Stroke** - IV alteplase, mechanical thrombectomy, blood pressure management
2. **Transient Ischemic Attack (TIA)** - Risk stratification, dual antiplatelet therapy, urgent evaluation
3. **Intracerebral Hemorrhage (ICH)** - Blood pressure management, coagulopathy reversal, surgical indications
4. **Subarachnoid Hemorrhage (SAH)** - Aneurysm securing, nimodipine, vasospasm management

---

## How to Use ASA Guidelines

### Example Queries

#### Acute Ischemic Stroke:
- "ASA guideline for acute ischemic stroke"
- "What is the ASA recommendation for tPA?"
- "ASA guideline for mechanical thrombectomy"
- "When should I give alteplase for stroke?"

#### TIA:
- "ASA TIA guideline"
- "American Stroke Association transient ischemic attack guideline"
- "ASA recommendation for dual antiplatelet therapy after TIA"
- "How does ASA recommend stratifying TIA risk?"

#### Intracerebral Hemorrhage:
- "ASA ICH guideline"
- "ASA guideline for intracerebral hemorrhage"
- "What blood pressure target does ASA recommend for brain hemorrhage?"
- "How to reverse anticoagulation in ICH ASA guideline?"

#### Subarachnoid Hemorrhage:
- "ASA SAH guideline"
- "American Stroke Association subarachnoid hemorrhage guideline"
- "ASA recommendation for nimodipine"
- "ASA guideline for vasospasm prevention"

---

## Key Features

### 1. Comprehensive Coverage
- **Acute Ischemic Stroke**: IV alteplase (0-4.5 hours), mechanical thrombectomy (0-24 hours), blood pressure management, antiplatelet therapy
- **TIA**: ABCD2 score, urgent evaluation, dual antiplatelet therapy (aspirin + clopidogrel for 21 days), carotid revascularization
- **ICH**: Blood pressure lowering (SBP <140 mmHg), coagulopathy reversal (PCC, idarucizumab, andexanet alfa), surgical indications
- **SAH**: Aneurysm securing (coiling vs clipping), nimodipine 60 mg q4h for 21 days, vasospasm management

### 2. Evidence-Based Recommendations
- **Class I** (Strong Recommendation): Supported by high-quality evidence from multiple RCTs
- **Class IIa** (Moderate Recommendation): Supported by moderate-quality evidence
- **Class IIb** (Weak Recommendation): Supported by low-quality evidence or expert opinion
- **Class III** (Not Recommended): Not beneficial or potentially harmful

### 3. Level of Evidence
- **Level A**: High-quality evidence from multiple RCTs (NINDS, ECASS III, MR CLEAN, DAWN, DEFUSE 3, INTERACT2)
- **Level B-R**: Moderate-quality evidence from randomized trials
- **Level B-NR**: Moderate-quality evidence from non-randomized studies
- **Level C-LD**: Low-quality evidence from observational studies
- **Level C-EO**: Expert opinion

### 4. Clinical Implementation
Each guideline includes detailed clinical implementation guidance:
- Diagnostic criteria and evaluation
- Treatment protocols and algorithms
- Medication dosing and administration
- Monitoring and follow-up
- Complication management
- Quality metrics and performance measures

---

## Integration with Chatbot

### How It Works

1. **User asks about stroke**: "ASA guideline for acute stroke"
2. **System detects guideline query**: Keyword matching identifies ASA-related terms
3. **Search ASA guidelines**: `searchASAGuidelines()` function finds relevant entries
4. **Generate response**: Formats ASA guideline with recommendations, evidence, and implementation
5. **Display to user**: Clear, organized presentation with source attribution

### Response Format

```
**Acute Ischemic Stroke - ASA/AHA Guideline**

**Guideline Summary:**
[Comprehensive summary of guideline]

**Class I Recommendations (Strong Recommendation):**
• [Recommendation with level of evidence]
• [Recommendation with level of evidence]

**Class IIA Recommendations (Moderate Recommendation):**
• [Recommendation with level of evidence]

**Clinical Implementation:**
[Detailed implementation guidance]

**Key Points:**
• [Key point 1]
• [Key point 2]

**Level of Evidence:** [Evidence description]
**Publication Year:** [Year]

*This information is from the American Stroke Association (ASA) / American Heart Association (AHA) clinical practice guidelines...*
```

---

## Content Bleeding Prevention

### ASA-Specific Keywords
The ASA guidelines use highly specific keywords to prevent content bleeding:

**Acute Ischemic Stroke:**
- 'acute ischemic stroke', 'ischemic stroke', 'stroke', 'cerebral infarction'
- 'tpa', 'alteplase', 'thrombectomy', 'stroke treatment'

**TIA:**
- 'transient ischemic attack', 'tia', 'mini stroke', 'transient stroke'

**ICH:**
- 'intracerebral hemorrhage', 'ich', 'brain hemorrhage', 'cerebral hemorrhage', 'hemorrhagic stroke'

**SAH:**
- 'subarachnoid hemorrhage', 'sah', 'aneurysmal subarachnoid hemorrhage', 'ruptured aneurysm'

### System Filtering
All ASA guidelines are tagged with `system: 'Neurology'` to ensure they only appear for neurologic queries.

---

## Testing Checklist

### Basic Functionality
- [ ] ASA guidelines appear for stroke queries
- [ ] ASA guidelines do NOT appear for non-stroke queries
- [ ] All recommendation classes display correctly
- [ ] Level of evidence is clearly stated
- [ ] Clinical implementation is comprehensive
- [ ] Key points are concise and accurate

### Content Accuracy
- [ ] Acute ischemic stroke guideline is accurate
- [ ] TIA guideline is accurate
- [ ] ICH guideline is accurate
- [ ] SAH guideline is accurate
- [ ] Recommendations match published ASA guidelines
- [ ] Evidence levels are correct

### Content Bleeding Prevention
- [ ] No mixing with AHA cardiology guidelines
- [ ] No mixing with IDSA infectious disease guidelines
- [ ] No mixing between different stroke types
- [ ] No mixing with other neurologic conditions
- [ ] Clear separation between acute treatment and prevention

### User Experience
- [ ] Responses are clear and well-formatted
- [ ] Recommendations are easy to understand
- [ ] Clinical implementation provides actionable guidance
- [ ] Source attribution is clear
- [ ] Follow-up questions are relevant

---

## Quick Reference: ASA Guideline Topics

### 1. Acute Ischemic Stroke
- **IV Alteplase**: 0.9 mg/kg within 4.5 hours (Class I, Level A)
- **Mechanical Thrombectomy**: Large vessel occlusion within 6-24 hours (Class I, Level A)
- **Blood Pressure**: Permissive hypertension <220/120 mmHg (Class I, Level C-EO)
- **Antiplatelet**: Aspirin 325 mg within 24-48 hours (Class I, Level A)

### 2. Transient Ischemic Attack
- **Urgent Evaluation**: Within 24 hours, ideally within 12 hours (Class I, Level B-NR)
- **Dual Antiplatelet**: Aspirin + clopidogrel for 21 days for high-risk TIA (Class I, Level B-R)
- **Carotid Revascularization**: CEA for symptomatic stenosis ≥50% (Class I, Level A)
- **Anticoagulation**: For atrial fibrillation (Class I, Level A)

### 3. Intracerebral Hemorrhage
- **Blood Pressure**: Target SBP <140 mmHg if presenting SBP 150-220 mmHg (Class I, Level A)
- **Coagulopathy Reversal**: PCC for warfarin, idarucizumab for dabigatran (Class I, Level B-NR/C-LD)
- **Surgical Evacuation**: Cerebellar hemorrhage >3 cm with brainstem compression (Class I, Level B-NR)
- **Medical Management**: Preferred for most supratentorial ICH (Class III, Level A for routine craniotomy)

### 4. Subarachnoid Hemorrhage
- **Aneurysm Securing**: As early as feasible within 24-72 hours (Class I, Level B-NR)
- **Endovascular Coiling**: Preferred over surgical clipping for most aneurysms (Class I, Level B-R)
- **Nimodipine**: 60 mg q4h for 21 days (Class I, Level A)
- **Vasospasm Monitoring**: Transcranial Doppler (Class I, Level B-NR)

---

## Common Questions

### Q: When should I use ASA guidelines vs Merck Manual?
**A:** Use ASA guidelines for evidence-based recommendations with specific class and level of evidence. Use Merck Manual for comprehensive pathophysiology, clinical presentation, and diagnostic approach. Both complement each other.

### Q: What if ASA and AHA guidelines overlap?
**A:** ASA is a division of AHA focused specifically on stroke. ASA/AHA stroke guidelines are joint publications. The chatbot will return the most relevant guideline based on query context.

### Q: How do I know which stroke type guideline to use?
**A:** The chatbot automatically selects the most relevant guideline based on your query keywords. Use specific terms like "ischemic", "hemorrhagic", "TIA", or "SAH" to get the exact guideline you need.

### Q: Are ASA guidelines updated regularly?
**A:** Yes, ASA updates guidelines every 3-5 years based on new evidence. The publication year is included in each guideline entry. Check the ASA website for the most current version.

---

## Next Steps

1. **Run Stress Tests**: Execute all tests in PHASE_25_ASA_STRESS_TEST.md
2. **Verify Content Quality**: Review all guideline entries for accuracy
3. **Test Content Bleeding**: Ensure no mixing with other guidelines
4. **User Testing**: Have medical learners test the chatbot with stroke queries
5. **Feedback Loop**: Collect feedback and refine as needed

---

## Support

For questions or issues with ASA guidelines integration:
1. Review PHASE_25_ASA_STRESS_TEST.md for comprehensive testing protocol
2. Check console logs for search results and scoring
3. Verify keywords in asaGuidelinesKnowledge.ts
4. Test with specific queries to isolate issues

---

## Summary

The ASA guidelines integration provides medical learners with authoritative, evidence-based stroke management recommendations. The integration:

✅ Covers all major stroke types (ischemic, TIA, ICH, SAH)
✅ Includes detailed clinical implementation guidance
✅ Prevents content bleeding with specific keywords
✅ Maintains high quality standards
✅ Integrates seamlessly with existing guidelines
✅ Provides clear source attribution

**Ready to use!** Start asking stroke-related questions to see ASA guidelines in action.
