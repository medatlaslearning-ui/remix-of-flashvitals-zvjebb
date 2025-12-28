
# Keyword Hooks System - Doctor-Patient Interaction Model

## Overview

The keyword hooks system enables the chatbot to respond like a doctor answering a patient's specific question. When a user asks about a particular aspect of a disease (pathophysiology, clinical findings, diagnosis, or treatment), the chatbot focuses ONLY on that aspect, providing a targeted, original response based on the Merck Manual Professional knowledge base.

## How It Works

### 1. Query Intent Detection

The system analyzes the user's query to detect specific keywords that indicate what aspect of the disease they're asking about:

```typescript
const isPathophysiologyQuery = /pathophysiology|mechanism|cause|etiology|why|how does|disease process|pathogenesis/i.test(query);
const isClinicalQuery = /symptom|sign|present|clinical feature|manifestation|appear|clinical finding|physical exam/i.test(query);
const isDiagnosticQuery = /diagnos|test|workup|evaluation|assess|detect|diagnostic approach|lab|imaging/i.test(query);
const isTreatmentQuery = /treat|therap|manage|medication|drug|intervention|management|therapy/i.test(query);
```

### 2. Focused Response Generation

Based on the detected intent, the chatbot provides ONLY the relevant section from the knowledge base:

#### Pathophysiology Hook
**User asks:** "What is the pathophysiology of iron deficiency anemia?"

**Chatbot responds with:**
- ONLY the pathophysiology section
- Related mechanistic insights from clinical pearls
- Additional mechanistic details from flashcards (same topic only)
- NO clinical presentation, diagnosis, or treatment information

#### Clinical Presentation Hook
**User asks:** "What are the clinical findings of sickle cell disease?"

**Chatbot responds with:**
- ONLY the clinical presentation section
- Key clinical findings from clinical pearls
- High-yield clinical features from flashcards (same topic only)
- NO pathophysiology, diagnosis, or treatment information

#### Diagnostic Approach Hook
**User asks:** "How do you diagnose thrombotic thrombocytopenic purpura?"

**Chatbot responds with:**
- ONLY the diagnostic approach section
- Diagnostic pearls from clinical pearls
- Additional diagnostic insights from flashcards (same topic only)
- NO pathophysiology, clinical presentation, or treatment information

#### Treatment Hook
**User asks:** "What is the treatment for multiple myeloma?"

**Chatbot responds with:**
- ONLY the treatment section
- Treatment pearls from clinical pearls
- Additional treatment considerations from flashcards (same topic only)
- NO pathophysiology, clinical presentation, or diagnosis information

### 3. Comprehensive Response (No Hook Detected)

If no specific hook is detected, the chatbot provides a complete overview:

**User asks:** "Tell me about hemophilia A"

**Chatbot responds with:**
- Pathophysiology
- Clinical presentation
- Diagnostic approach
- Treatment
- Clinical pearls
- Additional high-yield information (same topic only)

## Keyword Hook Triggers

### Pathophysiology Triggers
- pathophysiology
- mechanism
- cause
- etiology
- why
- how does
- disease process
- pathogenesis

**Example queries:**
- "What is the pathophysiology of diabetes?"
- "What causes sickle cell disease?"
- "How does iron deficiency anemia develop?"
- "Explain the disease process of multiple myeloma"

### Clinical Presentation Triggers
- symptom
- sign
- present
- clinical feature
- manifestation
- appear
- clinical finding
- physical exam

**Example queries:**
- "What are the symptoms of hemophilia?"
- "What are the clinical findings of polycythemia vera?"
- "How does aplastic anemia present?"
- "What are the physical exam findings in thalassemia?"

### Diagnostic Approach Triggers
- diagnos
- test
- workup
- evaluation
- assess
- detect
- diagnostic approach
- lab
- imaging

**Example queries:**
- "How do you diagnose immune thrombocytopenia?"
- "What tests are used for von Willebrand disease?"
- "What is the diagnostic workup for DIC?"
- "How do you evaluate for G6PD deficiency?"

### Treatment Triggers
- treat
- therap
- manage
- medication
- drug
- intervention
- management
- therapy

**Example queries:**
- "What is the treatment for chronic myeloid leukemia?"
- "How do you manage acute lymphoblastic leukemia?"
- "What medications are used for essential thrombocythemia?"
- "What is the therapy for hemolytic anemia?"

## Content Bleeding Prevention

### Disease-Specific Term Matching

The system identifies disease-specific modifiers in the query:

```typescript
const diseaseModifiers = [
  'acute', 'chronic', 'primary', 'secondary', 'type 1', 'type 2',
  'iron', 'vitamin', 'b12', 'folate', 'renal', 'tubular', 'metabolic',
  'immune', 'autoimmune', 'infectious', 'bacterial', 'viral'
];
```

**Example 1: Anemia Types**
- Query: "iron deficiency anemia"
- Disease-specific term: "iron"
- ✅ Matches: Iron Deficiency Anemia (contains "iron")
- ❌ Excludes: Vitamin B12 Deficiency (missing "iron")
- ❌ Excludes: Folate Deficiency (missing "iron")
- ❌ Excludes: Anemia of Chronic Disease (missing "iron")

**Example 2: Diabetes Types**
- Query: "type 1 diabetes"
- Disease-specific term: "type 1"
- ✅ Matches: Type 1 Diabetes Mellitus (contains "type 1")
- ❌ Excludes: Type 2 Diabetes Mellitus (missing "type 1")

**Example 3: Leukemia Types**
- Query: "acute myeloid leukemia"
- Disease-specific terms: "acute", "myeloid"
- ✅ Matches: Acute Myeloid Leukemia (contains both terms)
- ❌ Excludes: Chronic Myeloid Leukemia (missing "acute")
- ❌ Excludes: Acute Lymphoblastic Leukemia (missing "myeloid")

### Topic-Specific Flashcard Filtering

When providing supplementary information from flashcards, the system filters by topic:

```typescript
const topicSpecificCards = flashcards.filter(card => 
  card.topic === primaryEntry.topic // Same topic only
);
```

This ensures that when discussing "Iron Deficiency Anemia", the chatbot only includes flashcards specifically about iron deficiency anemia, not other types of anemia.

## Clinical Examples

### Example 1: Focused Pathophysiology Response

**User:** "What is the pathophysiology of sickle cell disease?"

**Chatbot Response:**
```
**Sickle Cell Disease**

**Pathophysiology and Disease Mechanisms:**

According to Merck Manual Professional, sickle cell disease is an autosomal 
recessive hemoglobinopathy caused by mutation in beta-globin gene (glutamic 
acid replaced by valine at position 6). Hemoglobin S polymerizes when 
deoxygenated, causing RBCs to sickle. Sickled cells are rigid, causing 
vaso-occlusion, hemolysis, and ischemic organ damage. Triggers include 
hypoxia, dehydration, infection, cold, and acidosis. Complications include 
vaso-occlusive crises, acute chest syndrome, stroke, splenic sequestration, 
priapism, and chronic organ damage (kidneys, lungs, bones).

**Key Mechanistic Insights:**
• Hydroxyurea increases HbF, reduces crises and complications
• Functional asplenia increases infection risk

*As your medical expert, I've focused specifically on the disease mechanisms 
and underlying processes of Sickle Cell Disease to answer your question about 
pathophysiology.*
```

**Note:** No clinical presentation, diagnosis, or treatment information provided - only pathophysiology as requested.

### Example 2: Focused Clinical Presentation Response

**User:** "What are the symptoms of iron deficiency anemia?"

**Chatbot Response:**
```
**Iron Deficiency Anemia**

**Clinical Presentation and Manifestations:**

Symptoms of anemia include fatigue, weakness, dyspnea on exertion, 
palpitations, and pallor. Specific to iron deficiency: pica (craving for 
non-food items like ice, dirt), pagophagia (ice craving), restless legs 
syndrome, and koilonychia (spoon-shaped nails). Physical examination reveals 
pallor, tachycardia, and systolic flow murmur. Severe cases may have angular 
cheilitis, glossitis, and brittle nails. Children may have developmental 
delays and behavioral problems.

**Key Clinical Findings:**
• Ferritin <30 ng/mL is most specific test for iron deficiency
• Always investigate cause of iron deficiency in men and postmenopausal women

**High-Yield Clinical Features:**
• Pica and pagophagia are specific to iron deficiency
• Koilonychia (spoon nails) is classic finding

*As your medical expert, I've focused specifically on the clinical 
presentation and physical examination findings of Iron Deficiency Anemia to 
answer your question.*
```

**Note:** No pathophysiology, diagnosis, or treatment information provided - only clinical presentation as requested.

### Example 3: Focused Diagnostic Response

**User:** "How do you diagnose immune thrombocytopenia?"

**Chatbot Response:**
```
**Immune Thrombocytopenia**

**Diagnostic Approach and Evaluation:**

Isolated thrombocytopenia (platelets <100,000/μL) with normal hemoglobin, 
WBC, and peripheral smear. Peripheral smear shows decreased platelets, normal 
RBC and WBC morphology, large platelets (megathrombocytes). Diagnosis of 
exclusion - rule out other causes: HIV, HCV, H. pylori, ANA (SLE), TSH, 
peripheral smear (exclude pseudothrombocytopenia, TTP, leukemia). Bone marrow 
biopsy not routinely needed (shows normal or increased megakaryocytes). 
Antiplatelet antibody testing not recommended (poor sensitivity and 
specificity).

**Diagnostic Pearls:**
• Diagnosis of exclusion - rule out other causes of thrombocytopenia
• Splenomegaly suggests alternative diagnosis

*As your medical expert, I've focused specifically on the diagnostic approach 
and evaluation for Immune Thrombocytopenia.*
```

**Note:** No pathophysiology, clinical presentation, or treatment information provided - only diagnostic approach as requested.

### Example 4: Focused Treatment Response

**User:** "What is the treatment for hemophilia A?"

**Chatbot Response:**
```
**Hemophilia A**

**Treatment and Management:**

Factor VIII replacement: recombinant factor VIII preferred (avoids bloodborne 
infections). On-demand treatment for bleeding episodes: dose based on severity 
and location. Prophylaxis (regular infusions 2-3 times weekly) prevents 
bleeding and joint damage in severe hemophilia. Desmopressin (DDAVP) releases 
endogenous factor VIII, useful for mild hemophilia. Antifibrinolytics 
(tranexamic acid, aminocaproic acid) for mucosal bleeding. Avoid aspirin and 
NSAIDs. Inhibitor development (antibodies against factor VIII) complicates 
treatment - requires immune tolerance induction or bypassing agents 
(recombinant factor VIIa, aPCC). Gene therapy emerging. Comprehensive care at 
hemophilia treatment center.

**Treatment Pearls:**
• Prophylactic factor replacement prevents joint damage
• Inhibitor development is major complication (15-30% of severe hemophilia A)

*As your medical expert, I've focused specifically on the treatment and 
management strategies for Hemophilia A.*
```

**Note:** No pathophysiology, clinical presentation, or diagnosis information provided - only treatment as requested.

## Benefits of Keyword Hooks

### For Learners
1. **Focused Learning** - Get exactly what you need without information overload
2. **Efficient Study** - Quickly review specific aspects of diseases
3. **Targeted Review** - Focus on weak areas (e.g., only pathophysiology)
4. **Board Preparation** - Practice answering focused questions

### For Clinicians
1. **Quick Reference** - Rapidly access specific information during clinical encounters
2. **Decision Support** - Get treatment protocols without reading entire disease overview
3. **Differential Diagnosis** - Understand disease mechanisms to differentiate conditions
4. **Time Efficient** - Get precise answers to specific clinical questions

### For Educators
1. **Teaching Tool** - Demonstrate how to answer focused clinical questions
2. **Assessment** - Test students on specific disease aspects
3. **Structured Learning** - Teach systematic approach to disease understanding
4. **Clinical Reasoning** - Model doctor-patient communication

## Advanced Usage

### Combining Multiple Hooks

**User:** "What is the pathophysiology and treatment of diabetic ketoacidosis?"

**Chatbot Response:**
- Provides BOTH pathophysiology AND treatment sections
- Omits clinical presentation and diagnosis
- Focuses on the two requested aspects

### Differential Diagnosis Queries

**User:** "What is the difference between iron deficiency anemia and anemia of chronic disease?"

**Chatbot Response:**
- Compares pathophysiology of both conditions
- Highlights key distinguishing features
- Provides diagnostic criteria to differentiate
- Maintains focus on the comparison

### System-Wide Queries

**User:** "Tell me about hematologic malignancies"

**Chatbot Response:**
- Provides overview of multiple related conditions
- Maintains organization by disease category
- Prevents overwhelming with too much detail
- Offers to answer specific questions about individual conditions

## Quality Assurance

### Stress Testing

The system includes comprehensive stress tests to ensure:

1. **Correct Disease Identification**
   - "iron deficiency anemia" → Iron Deficiency Anemia ✅
   - "vitamin b12 deficiency" → Vitamin B12 Deficiency ✅
   - "folate deficiency" → Folate Deficiency ✅

2. **No Content Bleeding**
   - "type 1 diabetes" → Type 1 Diabetes Mellitus ✅
   - "type 1 diabetes" → NOT Type 2 Diabetes Mellitus ❌

3. **Accurate Hook Detection**
   - "pathophysiology of X" → Pathophysiology section only ✅
   - "symptoms of X" → Clinical presentation section only ✅

### Running Stress Tests

Use the KeywordSearchTest component:

```typescript
import { runKeywordStressTest } from '@/data/merckManualKnowledge';

const results = runKeywordStressTest();
console.log(`Passed: ${results.passed}/${results.passed + results.failed}`);
console.log(`Success Rate: ${(results.passed / (results.passed + results.failed) * 100).toFixed(1)}%`);
```

## Best Practices

### For Users

1. **Be Specific** - Use keyword hooks for focused answers
   - ✅ "What is the pathophysiology of hemophilia A?"
   - ❌ "Tell me about hemophilia"

2. **Ask One Aspect at a Time** - Get detailed information on one aspect
   - ✅ "What are the symptoms of multiple myeloma?"
   - ❌ "What is everything about multiple myeloma?"

3. **Use Medical Terminology** - Trigger hooks with appropriate terms
   - ✅ "What is the diagnostic approach for ITP?"
   - ❌ "How do you know if someone has ITP?"

### For Developers

1. **Maintain Keyword Lists** - Keep hook triggers up to date
2. **Test Regularly** - Run stress tests after adding new conditions
3. **Monitor Logs** - Check console logs for hook detection accuracy
4. **Update Documentation** - Keep this guide current with new features

## Troubleshooting

### Hook Not Triggering

**Problem:** User asks about pathophysiology but gets comprehensive response

**Solution:** Check if query contains pathophysiology trigger words
- Add more trigger words to the regex pattern
- Check console logs for intent detection

### Content Bleeding

**Problem:** Query for "iron deficiency anemia" returns information about other anemias

**Solution:** Verify disease-specific term matching
- Ensure keywords include disease-specific modifiers
- Check penalty system is working (-50,000 for mismatches)
- Review stress test results

### Incomplete Response

**Problem:** Response seems too brief or missing information

**Solution:** Verify the specific section exists in knowledge base
- Check that pathophysiology/clinical/diagnostic/treatment sections are complete
- Ensure clinical pearls are categorized appropriately
- Add more detailed information to the relevant section

## Future Enhancements

### Potential Improvements

1. **Multi-Aspect Queries** - Better handling of queries asking about multiple aspects
2. **Comparison Queries** - Enhanced support for comparing two conditions
3. **Severity Grading** - Responses tailored to disease severity
4. **Population-Specific** - Responses adapted for pediatric vs. adult patients
5. **Emergency Protocols** - Rapid-response format for acute conditions

### Additional Hook Types

1. **Prognosis Hook** - "What is the prognosis of..."
2. **Complications Hook** - "What are the complications of..."
3. **Prevention Hook** - "How do you prevent..."
4. **Epidemiology Hook** - "What is the epidemiology of..."

## Conclusion

The keyword hooks system transforms the chatbot from a general information provider into a focused medical expert that responds precisely to specific questions, mimicking how a doctor would answer a patient's targeted inquiry. This approach prevents information overload, reduces content bleeding, and provides a more natural, doctor-patient interaction experience.
