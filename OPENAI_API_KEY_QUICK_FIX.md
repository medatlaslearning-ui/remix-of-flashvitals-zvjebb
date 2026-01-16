
# 🔑 OpenAI API Key Quick Fix Guide

## 🚨 CRITICAL: Your OpenAI API key needs to be set in Supabase

**Current Status:** Edge Functions are fixed, but the API key may not be configured.

---

## ⚡ QUICK FIX (5 minutes)

### Step 1: Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in to your OpenAI account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)
5. **IMPORTANT:** Save it somewhere safe - you can't see it again!

### Step 2: Add Key to Supabase
1. Go to https://supabase.com/dashboard
2. Select your project: **MedAtlas Scholar_MedFlash**
3. Click **Edge Functions** in the left sidebar
4. Click **Manage secrets** button (top right)
5. Click **Add new secret**
6. Enter:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `sk-...` (your OpenAI API key)
7. Click **Save**

### Step 3: Wait for Deployment
- Wait **1-2 minutes** for the secret to propagate
- The Edge Functions will automatically pick up the new key

### Step 4: Test It
1. Open your app
2. Go to **Chatbot** (Dr. Elias Reed)
3. Ask: "What is atrial fibrillation?"
4. Check the response metadata at the bottom
5. Should show:
   - ✅ Model: "gpt-4o-mini" (not "fallback")
   - ✅ Semantic icons (🧠, 💊, 📌)
   - ✅ OpenAI metadata visible

---

## 🧪 HOW TO VERIFY IT'S WORKING

### Chatbot Test:
```
✅ WORKING:
- Response uses semantic icons (🧠, 💊, 📌, ⚠️, ✅)
- Metadata shows "model: gpt-4o-mini"
- Response is conversational and educational
- 3 follow-up questions generated

❌ NOT WORKING:
- Metadata shows "model: fallback"
- Response is basic/generic
- No semantic icons
- No follow-up questions
```

### Quiz Test:
```
✅ WORKING:
- Questions are contextual and specific
- Rationales are detailed
- References are relevant
- Generation takes 10-30 seconds

❌ NOT WORKING:
- Questions say "Sample question 1 about..."
- Rationales say "This is a sample fallback question"
- References say "Fallback content"
- Generation is instant (<1 second)
```

---

## 🔍 TROUBLESHOOTING

### "Still seeing fallback responses"
**Solution:**
1. Check Supabase Dashboard → Edge Functions → Secrets
2. Verify `OPENAI_API_KEY` is listed
3. Wait 2-3 minutes for deployment
4. Restart your app
5. Try again

### "Getting 500 errors"
**Solution:**
1. Check your OpenAI API key is valid
2. Go to https://platform.openai.com/account/usage
3. Verify you have credits/billing set up
4. Check API key hasn't expired

### "Quiz generation times out"
**Solution:**
1. Try 5 questions instead of 10
2. Check your internet connection
3. Verify OpenAI API key is set
4. Check Supabase Edge Function logs

---

## 📊 CHECK EDGE FUNCTION LOGS

### View Logs:
1. Supabase Dashboard → Edge Functions
2. Click on **generate-conversational-response** or **generate-quiz**
3. Click **Logs** tab
4. Look for recent requests

### What to Look For:
```
✅ GOOD LOGS:
[OpenAI] Generating conversational response
[OpenAI] Response status: 200
[Success] Generated response length: 1234

❌ BAD LOGS:
[Error] OPENAI_API_KEY not configured
Server misconfiguration: OPENAI_API_KEY missing
```

---

## 💰 OPENAI PRICING (FYI)

**Model:** gpt-4o-mini (very affordable)

**Costs:**
- Chatbot response: ~$0.001-0.003 per message
- Quiz generation (5 questions): ~$0.01-0.02
- Quiz generation (10 questions): ~$0.02-0.04

**Recommendation:**
- Start with $5 credit (lasts for ~1,000-2,000 interactions)
- Set up billing alerts in OpenAI dashboard
- Monitor usage at https://platform.openai.com/usage

---

## 🎯 EXPECTED BEHAVIOR AFTER FIX

### Before (Without API Key):
- ❌ Chatbot gives basic responses from core knowledge only
- ❌ Quiz shows "Sample question 1 about..."
- ❌ No semantic icons
- ❌ No follow-up questions
- ❌ Metadata shows "fallback"

### After (With API Key):
- ✅ Chatbot gives conversational, educational responses
- ✅ Quiz generates contextual, board-style questions
- ✅ Semantic icons structure the response (🧠, 💊, 📌)
- ✅ 3 follow-up questions generated
- ✅ Metadata shows "gpt-4o-mini"

---

## 📞 STILL HAVING ISSUES?

### Check These Files:
1. `INTERNAL_AUDIT_COMPLETE.md` - Full audit report
2. `OPENAI_INTEGRATION_GUIDE.md` - Detailed integration guide
3. `OPENAI_API_KEY_SETUP_GUIDE.md` - Step-by-step setup

### Get Help:
1. Check Supabase Edge Function logs
2. Check frontend logs with `read_frontend_logs`
3. Review Edge Function code (v17 for chat, v16 for quiz, v10 for follow-up)

---

## ✅ CHECKLIST

- [ ] Got OpenAI API key from https://platform.openai.com/api-keys
- [ ] Added key to Supabase Edge Functions secrets
- [ ] Waited 1-2 minutes for deployment
- [ ] Tested chatbot with medical question
- [ ] Verified "gpt-4o-mini" in metadata (not "fallback")
- [ ] Tested quiz generation with 5 questions
- [ ] Verified questions are contextual (not "Sample question...")
- [ ] Checked Edge Function logs for success messages

---

**🎉 Once the API key is set, everything should work perfectly!**

The Edge Functions have been fixed and are ready to use OpenAI as soon as the key is configured.
