# How to Get a New API Key (Fresh Quota)

## Quick Steps

### 1. Go to Google AI Studio
https://aistudio.google.com/app/apikey

### 2. Create New Project
**Important:** Don't use existing project!

- Click "Create API key"
- Select "Create API key in new project"
- Give it a name (e.g., "AI Photo Editor 2")

### 3. Copy Your New Key
- Copy the generated API key
- Keep it safe!

### 4. Update Local Environment

**Windows:**
```bash
# Edit .env.local file
notepad .env.local
```

Replace with:
```
GEMINI_API_KEY=your_new_key_here
```

### 5. Test Locally
```bash
npm run dev
```

Open http://localhost:3000 and test!

### 6. Update Vercel

1. Go to https://vercel.com
2. Select your project
3. Settings → Environment Variables
4. Edit `GEMINI_API_KEY`
5. Paste new key
6. Save
7. Redeploy (or push to Git)

## Why New Project?

Each Google Cloud project has its own quota:
- ✅ New project = Fresh quota
- ✅ Independent limits
- ✅ Can have multiple projects

## Check Your Usage

Before and after:
https://ai.dev/usage?tab=rate-limit

## Alternative: Different Google Account

If you've exhausted all projects:

1. Sign out of Google
2. Sign in with different account
3. Go to AI Studio
4. Create API key
5. Use that key

## Quota Limits (Free Tier)

**gemini-2.5-flash-image:**
- Very limited (preview model)
- ~10-50 requests per day
- Resets every 24 hours

**For production:**
- Consider upgrading to paid plan
- Much higher limits
- More reliable

## After Getting New Key

Your app should work immediately with:
- Fresh quota
- Same code
- No other changes needed

## Troubleshooting

**"Still getting 429":**
- Make sure you created NEW project
- Check you're using the new key
- Verify in .env.local and Vercel

**"Key doesn't work":**
- Check for typos
- Ensure no extra spaces
- Restart dev server

**"Same error":**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check browser console

---

**Quick Link:** https://aistudio.google.com/app/apikey

**Remember:** Create API key in **NEW PROJECT** for fresh quota!
