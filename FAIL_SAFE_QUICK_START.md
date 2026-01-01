
# Fail-Safe Rules - Quick Start Guide

## Overview

This guide will help you quickly test and validate the Fail-Safe Rules guardrail (Guardrail #8) in your medical learning application.

## Quick Access

### Admin Panel
1. Open the app
2. Navigate to the Admin Panel
3. Click on the **"Fail-Safe"** tab
4. View real-time system status and run tests

## System Availability Monitoring

The Fail-Safe monitor displays three key availability indicators:

### 1. Internet Connectivity
- **Green (Available)**: Internet connection is active
- **Red (Unavailable)**: No internet connection

### 2. Guidelines Accessibility
- **Green (Accessible)**: Guideline websites can be reached
- **Red (Inaccessible)**: Guideline websites are unreachable

### 3. Core Knowledge
- **Green (Available)**: Core medical knowledge is accessible
- **Red (Unavailable)**: Critical failure - core knowledge unavailable

## Running Stress Tests

### Step 1: Access the Fail-Safe Monitor
```
Admin Panel → Fail-Safe Tab
```

### Step 2: Run Stress Test
1. Click **"Run Stress Test"** button
2. Wait for test completion (usually 5-10 seconds)
3. View results summary

### Step 3: Interpret Results
- **Success Rate**: Percentage of tests passed
- **Passed**: Number of successful test cases
- **Failed**: Number of failed test cases

### Step 4: View Details
1. Click **"Show Test Details"**
2. Review individual test results
3. Check validation scores and warnings

## Test Scenarios

The stress test validates six scenarios:

### 1. Normal Operation ✅
- All systems available
- Expected: Full mode, no limitations

### 2. Internet Unavailable ⚠️
- No internet connection
- Expected: Core-only mode, transparent limitations

### 3. Guidelines Inaccessible ⚠️
- Internet available but guidelines unreachable
- Expected: Degraded mode, fallback to core knowledge

### 4. Conflicting Evidence ⚠️
- Multiple sources provide contradictory information
- Expected: Degraded mode, conservative approach

### 5. Insufficient Evidence ⚠️
- Not enough information available
- Expected: Degraded mode, clear limitations

### 6. Invalid Definitive Claims ❌
- Definitive claims in degraded mode
- Expected: Validation failure, prohibited language detected

## Operating Modes

### Full Mode
```
✅ Internet: Available
✅ Guidelines: Accessible
✅ Core Knowledge: Available
→ Confidence: 100%
```

### Degraded Mode
```
✅ Internet: Available
❌ Guidelines: Inaccessible OR Evidence Conflicting
✅ Core Knowledge: Available
→ Confidence: 50-70%
```

### Core-Only Mode
```
❌ Internet: Unavailable
❌ Guidelines: Inaccessible
✅ Core Knowledge: Available
→ Confidence: 40-60%
```

### Unavailable Mode
```
❌ Internet: Unavailable
❌ Guidelines: Inaccessible
❌ Core Knowledge: Unavailable
→ Confidence: 0%
```

## Validation Checklist

When reviewing test results, check for:

- [ ] **Transparent Limitations**: Clear disclosure of system limitations
- [ ] **Avoids Definitive Claims**: No prohibited language in degraded mode
- [ ] **Uses Core Knowledge**: References to core medical knowledge
- [ ] **Proper Fallback**: Complete fail-safe implementation
- [ ] **Validation Score**: Score ≥ 70/100

## Common Issues & Solutions

### Issue 1: Low Validation Scores
**Symptom**: Validation scores below 70
**Solution**: Check for prohibited language patterns and missing transparency statements

### Issue 2: Missing Limitations Notice
**Symptom**: Degraded mode but no limitations notice
**Solution**: Verify fail-safe rules are being applied to response text

### Issue 3: Definitive Claims in Degraded Mode
**Symptom**: Prohibited language detected in degraded mode
**Solution**: Review response generation logic and apply conservative phrasing

## Testing in Real Scenarios

### Test 1: Simulate Internet Unavailable
1. Disable internet connection on your device
2. Ask a treatment-related question
3. Verify system falls back to core knowledge
4. Check for transparent limitations notice

### Test 2: Simulate Conflicting Evidence
1. Query a topic with multiple guideline sources
2. Verify system detects conflicts
3. Check for conservative phrasing
4. Confirm degraded mode activation

### Test 3: Simulate Insufficient Evidence
1. Query an obscure or rare condition
2. Verify system acknowledges limitations
3. Check for recommendations to consult additional sources
4. Confirm degraded mode activation

## Integration Verification

### Check 1: System Availability
```typescript
// Verify availability checking is working
const availability = await checkSystemAvailability();
console.log('Internet:', availability.internetAvailable);
console.log('Guidelines:', availability.guidelinesAccessible);
console.log('Core Knowledge:', availability.coreKnowledgeAvailable);
```

### Check 2: Evidence Quality
```typescript
// Verify evidence assessment is working
const quality = assessEvidenceQuality(
  coreKnowledgeCount,
  guidelineCount,
  coreTopics,
  guidelineTopics
);
console.log('Conflicting:', quality.isConflicting);
console.log('Unclear:', quality.isUnclear);
console.log('Sufficient:', quality.isSufficient);
```

### Check 3: Fail-Safe Decision
```typescript
// Verify decision logic is working
const decision = makeFailSafeDecision(availability, quality);
console.log('Should Fallback:', decision.shouldFallback);
console.log('Mode:', decision.mode);
console.log('Confidence:', decision.confidence);
```

## Expected Behavior

### When Internet is Available
- Guidelines should be consulted (if recommended)
- Full mode operation
- No limitations notice
- High confidence (90-100%)

### When Internet is Unavailable
- Fall back to core knowledge only
- Core-only mode operation
- Transparent limitations notice
- Moderate confidence (40-60%)

### When Evidence is Conflicting
- Prioritize core medical principles
- Degraded mode operation
- Conservative phrasing
- Lower confidence (50-70%)

## Success Criteria

A successful fail-safe implementation should:

1. ✅ Pass all stress tests (100% success rate)
2. ✅ Provide transparent limitations in degraded modes
3. ✅ Avoid definitive claims when evidence is insufficient
4. ✅ Fall back gracefully to core knowledge
5. ✅ Maintain user trust through honest communication

## Monitoring Dashboard

The Fail-Safe monitor provides:

- **Real-time Status**: Current system availability
- **Integration Status**: All fail-safe components operational
- **Stress Test Results**: Comprehensive test coverage
- **Validation Metrics**: Detailed compliance scores
- **Operating Modes**: Current and historical mode information

## Next Steps

After validating the fail-safe rules:

1. Review stress test results
2. Address any validation failures
3. Test in real-world scenarios
4. Monitor system behavior over time
5. Adjust fail-safe thresholds if needed

## Support

For issues or questions:

1. Check the detailed implementation in `data/failSafeRules.ts`
2. Review integration in `data/synthesizerEngine.ts`
3. Examine monitoring component in `components/FailSafeRulesMonitor.tsx`
4. Consult the full summary in `GUARDRAIL_8_FAIL_SAFE_RULES_SUMMARY.md`

---

**Quick Start Complete!** 🎉

You now have a fully functional fail-safe system that ensures reliability and transparency in all operating conditions.
