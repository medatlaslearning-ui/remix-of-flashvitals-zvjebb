
# OpenAI API Key Setup Guide

## Problem
The quiz generator and chatbot are returning fallback responses because the `OPENAI_API_KEY` environment variable is not configured in Supabase Edge Functions.

## Solution: Set the OpenAI API Key in Supabase

### Step 1: Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in to your OpenAI account
3. Click "Create new secret key"
4. Copy the key (it starts with `sk-...`)
5. **IMPORTANT**: Save this key somewhere safe - you won't be able to see it again!

### Step 2: Add the API Key to Supabase
1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/ewcjofekvogreoorsesf
2. Click on "Edge Functions" in the left sidebar
3. Click on "Manage secrets" or "Environment variables"
4. Add a new secret:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-...`)
5. Click "Save" or "Add secret"

### Step 3: Verify the Setup
After adding the API key:
1. Wait 1-2 minutes for the Edge Functions to reload
2. Open the app and try generating a quiz
3. The quiz should now generate real questions instead of fallback samples
4. The chatbot should also work properly

## How to Check if It's Working

### Quiz Generator
- **Working**: Questions are unique, clinically relevant, and specific to the selected medical system
- **Not Working**: All questions say "Sample question X about [topic]. This is a fallback question because the AI service is unavailable."

### Chatbot (LMM)
- **Working**: Responses are detailed, conversational, and use semantic icons (🧠💊🔍)
- **Not Working**: Responses are just the raw medical content without conversational formatting

## Troubleshooting

### "Still getting fallback questions"
1. Make sure you saved the API key in Supabase (not just in your local environment)
2. Wait 2-3 minutes after saving for Edge Functions to reload
3. Check that the key starts with `sk-` and has no extra spaces
4. Try refreshing the app completely (close and reopen)

### "Console errors on line 300"
This error occurs when the frontend tries to parse the fallback response. Once the API key is set correctly, this error will disappear.

### "OpenAI API key not configured in Supabase"
This message appears in the app when the Edge Function detects that `OPENAI_API_KEY` is empty. Follow Step 2 above to fix this.

## Cost Information
- OpenAI charges per token used
- Quiz generation (10 questions): ~$0.01-0.03 per quiz
- Chatbot responses: ~$0.001-0.005 per message
- Model used: `gpt-4o-mini` (most cost-effective)

## Security Note
- Never commit your OpenAI API key to Git
- Never share your API key publicly
- The key should only be stored in Supabase secrets
- Supabase Edge Functions keep secrets encrypted and secure
