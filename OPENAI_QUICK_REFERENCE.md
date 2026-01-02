
# OpenAI Integration - Quick Reference

## 🎯 Core Principle

**OpenAI = Language Generator ONLY**
**Core Knowledge Engine = Medical Truth**

## 🔄 Data Flow

```
User Query → Core Knowledge → Synthesizer → OpenAI (Format) → User
```

## ✅ OpenAI DOES

- Generate conversational language
- Explain medical concepts clearly
- Provide warm, professional tone
- Format responses with structure

## ❌ OpenAI DOES NOT

- Add medical facts
- Replace knowledge engine
- Make clinical decisions
- Store medical information

## 🛡️ Guardrails

1. **System Prompt** - Defines strict role boundaries
2. **Length Check** - Max 1.5x original content
3. **Prohibited Phrases** - No speculation or unsupported claims
4. **Term Preservation** - ≥70% medical terms preserved
5. **Validation Score** - Must score ≥70% to use
6. **Fallback System** - Always provides response

## 📊 Metadata

Every response shows:
- ✓ Used OpenAI or ✗ Fallback
- Model name (gpt-4o)
- Processing time
- Token usage
- Validation score
- Fallback reason (if applicable)

## 🔧 Configuration

**Model:** GPT-4o (high quality)
**Temperature:** 0.3 (low for consistency)
**Max Tokens:** 1500
**Validation Threshold:** 70%

## 🚨 Fallback Triggers

- Content too short (<10 chars)
- Query too short (<3 chars)
- OpenAI API error
- Validation failure (<70%)
- Unexpected error

## 📝 Example

**Input (from synthesizer):**
```
Atrial fibrillation is an irregularly irregular rhythm 
with absent P waves and variable R-R intervals.
```

**Output (from OpenAI):**
```
Atrial fibrillation (AFib) is characterized by an 
irregularly irregular heart rhythm. When you look at 
an ECG, you'll notice that the P waves are absent, 
and the R-R intervals vary unpredictably. This creates 
the classic "irregularly irregular" pattern that helps 
clinicians identify AFib.
```

**Validation:**
- ✓ No facts added
- ✓ All medical terms preserved
- ✓ Clearer, more conversational
- ✓ Score: 95%

## 🎓 Key Insight

OpenAI makes your medical content **easier to understand** without making it **less accurate**.
