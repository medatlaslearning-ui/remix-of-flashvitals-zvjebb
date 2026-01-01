
# GUARDRAILS QUICK REFERENCE

## 8 System Guardrails

### 🏗️ Guardrail #1: System Architecture Roles
**Purpose**: Enforce separation between Core Knowledge, Guidelines, and Synthesizer

**Key Rules**:
- Core Knowledge Engine is READ-ONLY
- Guidelines consulted at runtime (NOT cached)
- Synthesizer generates original responses
- No auto-updating of medical facts

**File**: `data/architectureGuardrails.ts`

---

### 🔍 Guardrail #2: Guideline Consultation Triggers
**Purpose**: Intelligent decision-making about when to consult guidelines

**Consult For**:
- Treatment recommendations
- Management algorithms
- Diagnostic criteria
- First-line therapy

**Don't Consult For**:
- Basic definitions
- Pathophysiology
- Anatomy/physiology
- Flashcard recall

**File**: `data/architectureGuardrails.ts`

---

### ⚠️ Guardrail #3: Guideline Usage Rules
**Purpose**: Guidelines as context, not replacement

**Prohibited**:
- ❌ "This confirms information is correct"
- ❌ "This replaces previous knowledge"
- ❌ "Verified as absolutely correct"

**Required**:
- ✅ "Based on current guidelines"
- ✅ "This recommendation aligns with"
- ✅ "According to current practice guidelines"

**File**: `data/synthesizerEngine.ts`

---

### ✍️ Guardrail #4: Synthesis Requirements
**Purpose**: Original, educational responses with proper uncertainty handling

**Requirements**:
- ✅ Original language (no direct copying)
- ✅ No table/algorithm reproduction
- ✅ Handle uncertainty explicitly
- ❌ No speculation when evidence insufficient

**File**: `data/synthesizerEngine.ts`

---

### 💾 Guardrail #5: Supabase Usage Rules
**Purpose**: Strict data storage rules

**MAY Store**:
- ✅ User identity
- ✅ Subscriptions
- ✅ Feedback
- ✅ Learning preferences
- ✅ Audit metadata

**MUST NOT Store**:
- ❌ Medical facts
- ❌ Guideline text
- ❌ Flashcard content
- ❌ Proprietary material

**File**: `data/supabaseUsageRules.ts`

---

### 📚 Guardrail #6: Source Attribution Rules
**Purpose**: Proper attribution with direct links

**Requirements**:
- ✅ Attribute sources properly
- ✅ Provide direct links
- ✅ Encourage original source consultation
- ❌ No proprietary text embedding

**Templates**:
- "Based on information from the Merck Manual (Professional Edition)"
- "According to current ACC/AHA guidelines"

**File**: `data/sourceAttributionRules.ts`

---

### 🔄 Guardrail #7: Consistency Validation Logic
**Purpose**: Compare guidelines to core framework

**Process**:
1. Compare recommendations to core framework
2. Assess alignment with physiology
3. Identify updated practice
4. State alignment clearly
5. Note evolution with context

**Framing**:
- ✅ "Contextual consistency"
- ✅ "Aligns with core knowledge"
- ❌ "Verifies the correctness"
- ❌ "Confirms the accuracy"

**File**: `data/consistencyValidationLogic.ts`

---

### 🛡️ Guardrail #8: Fail-Safe Rules
**Purpose**: Graceful degradation when resources unavailable

**Triggers**:
- Internet unavailable
- Guidelines inaccessible
- Evidence conflicting/unclear

**Actions**:
- Fall back to core knowledge
- State limitations transparently
- Avoid definitive claims
- Use conservative phrasing

**Modes**:
- **Full**: All systems operational
- **Degraded**: Guidelines unavailable
- **Core-Only**: Internet unavailable
- **Unavailable**: Critical failure

**File**: `data/failSafeRules.ts`

---

## Quick Actions

### Run All Stress Tests
```
Admin Panel → Guardrails Tab → Run System Stress Test
```

### Check System Integrity
```
Admin Panel → Guardrails Tab → Check System Integrity
```

### Monitor Individual Guardrail
```
Admin Panel → [Guardrail Name] Tab → View Status
```

### View System Health
```
Admin Panel → System Health Tab → View Metrics
```

---

## Validation Scores

- **90-100**: ✅ Excellent - No issues
- **70-89**: ⚠️ Good - Minor warnings
- **50-69**: ⚠️ Fair - Some violations
- **0-49**: ❌ Poor - Critical violations

---

## Figure-Eight Data Flow

```
USER INPUT → [VALVE 1] → QUERY PROCESSOR
                              ↓
                      INTERSECTION POINT
                              ↑
CORE KNOWLEDGE → [VALVE 2] → KNOWLEDGE RETRIEVER

INTERSECTION → [VALVE 3] → RESPONSE SYNTHESIZER
                              ↓
                      REFINEMENT LOOP
                              ↓
REFINED RESPONSE → [VALVE 4] → USER OUTPUT
```

---

## Key Principles

1. **Separation of Concerns**: Core knowledge, guidelines, and synthesis are separate
2. **Read-Only Core**: Medical facts never auto-update
3. **Runtime Consultation**: Guidelines consulted live, not cached
4. **Original Synthesis**: Responses are paraphrased and educational
5. **Proper Attribution**: All sources properly cited with links
6. **Contextual Consistency**: Guidelines provide context, not replacement
7. **Graceful Degradation**: System works even when resources unavailable
8. **Transparent Limitations**: Always state what the system can and cannot do

---

## Emergency Checklist

If system integrity fails:

1. ✅ Check Core Knowledge Engine integrity
2. ✅ Verify no guidelines are cached
3. ✅ Run comprehensive stress tests
4. ✅ Check for prohibited language patterns
5. ✅ Validate source attributions
6. ✅ Review consistency validation
7. ✅ Test fail-safe behavior
8. ✅ Check Supabase data storage

---

## Contact & Support

For issues or questions about guardrails:
- Check Admin Panel monitoring
- Review stress test results
- Consult comprehensive documentation
- Check console logs for detailed errors

---

**Version**: 1.0
**Last Updated**: 2024
**Status**: All guardrails operational ✅
