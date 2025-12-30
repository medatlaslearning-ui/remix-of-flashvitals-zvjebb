
# Phase 20: ACG Guidelines - Quick Start Testing Guide

## 🚀 Quick Start

The American College of Gastroenterology (ACG) guidelines are **ALREADY INTEGRATED** and ready for testing!

## ✅ What's Included

### 6 Major ACG Guidelines

1. **GERD** - Gastroesophageal Reflux Disease (2022)
2. **Dyspepsia** - Indigestion and H. pylori management (2017)
3. **Acute Pancreatitis** - Emergency management (2013)
4. **Ulcerative Colitis** - IBD management (2019)
5. **IBS** - Irritable Bowel Syndrome (2021)
6. **Colorectal Cancer Screening** - Prevention guidelines (2021)

## 🧪 Quick Test Queries

### Test 1: GERD Guideline
```
Query: "What are the ACG guidelines for GERD?"
Expected: ACG GERD guideline with PPI recommendations
```

### Test 2: IBS Management
```
Query: "ACG recommendations for IBS"
Expected: ACG IBS guideline with low FODMAP diet
```

### Test 3: Acute Pancreatitis
```
Query: "What are the ACG guidelines for acute pancreatitis?"
Expected: Aggressive IV fluid resuscitation protocols
```

### Test 4: Colorectal Cancer Screening
```
Query: "ACG colorectal cancer screening guidelines"
Expected: Screening starting at age 45
```

### Test 5: Content Bleeding Prevention
```
Query: "What is the pathophysiology of acute kidney injury?"
Expected: KDIGO/Merck Manual (NO ACG guidelines)
```

## 📊 Success Criteria

✅ **ACG guidelines appear for gastroenterology queries**
✅ **Strong and conditional recommendations displayed**
✅ **Clinical implementation details included**
✅ **No content bleeding into other systems (renal, cardiology, etc.)**
✅ **Keyword hooks work correctly (pathophysiology, treatment, diagnosis)**

## 🔍 How to Test

1. **Open the app** and navigate to the Chatbot screen
2. **Enter test queries** from the list above
3. **Verify responses** match expected results
4. **Check for content bleeding** by testing cross-system queries
5. **Test keyword hooks** with specific aspect queries

## 📝 What to Look For

### ✅ Good Response
- ACG guideline appears as top result
- Strong recommendations clearly labeled
- Conditional recommendations included
- Clinical implementation details provided
- Quality of evidence ratings shown
- ACG URL reference included

### ❌ Bad Response
- Wrong guideline appears
- Content from other systems bleeds in
- Missing recommendations or implementation details
- Incorrect quality of evidence ratings
- No ACG URL reference

## 🐛 Common Issues to Watch For

1. **Content Bleeding**: ACG guidelines appearing in non-GI queries
2. **Missing Sections**: Recommendations or implementation missing
3. **Wrong Guideline**: Different ACG guideline than expected
4. **No Results**: Query returns no ACG guidelines when it should

## 📈 Quality Metrics

- **Search Precision**: >95% correct guideline retrieval
- **Content Bleeding**: 0% cross-system bleeding
- **Response Completeness**: 100% of required sections
- **User Satisfaction**: >90% positive feedback

## 🎯 Priority Tests

### Must Pass (Critical)
1. ✅ ACG GERD guideline query
2. ✅ ACG IBS guideline query
3. ✅ ACG acute pancreatitis guideline query
4. ✅ No ACG guidelines in renal queries
5. ✅ No ACG guidelines in cardiology queries

### Should Pass (Important)
1. ✅ Pathophysiology keyword hook
2. ✅ Treatment keyword hook
3. ✅ Diagnostic keyword hook
4. ✅ IBS vs IBD differentiation
5. ✅ GERD vs dyspepsia differentiation

## 🔧 Troubleshooting

### Issue: ACG guideline not appearing
**Solution**: Check if query includes gastroenterology keywords

### Issue: Wrong ACG guideline appearing
**Solution**: Verify keyword matching in search function

### Issue: Content bleeding from other systems
**Solution**: Check system-specific filtering in search algorithm

### Issue: Missing recommendations
**Solution**: Verify guideline data structure in `acgGuidelinesKnowledge.ts`

## 📚 Documentation

- **Full Stress Test**: See `PHASE_20_ACG_STRESS_TEST.md`
- **Integration Details**: See `PHASE_20_ACG_COMPLETION.md`
- **Guidelines File**: `data/acgGuidelinesKnowledge.ts`
- **Chatbot Integration**: `app/(tabs)/(home)/chatbot.tsx`

## ✨ Next Steps

1. **Run Quick Tests** - Execute the 5 quick test queries above
2. **Review Results** - Check if responses match expectations
3. **Run Full Stress Test** - Execute all scenarios in stress test document
4. **Document Issues** - Record any problems found
5. **Fix and Re-test** - Implement fixes and validate

## 🎉 Success!

If all quick tests pass, the ACG guidelines integration is **WORKING CORRECTLY** and ready for production use!

---

**Quick Start Version**: 1.0
**Last Updated**: 2024
**Status**: Ready for Testing
