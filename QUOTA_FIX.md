# Quick Fix: API Quota Exceeded (429 Error)

## ✅ FIXED: Model Updated

Your app now uses `gemini-2.0-flash-exp` instead of `gemini-2.5-flash-image`.

### Why This Helps:

| Model | Daily Limit | Minute Limit | Status |
|-------|-------------|--------------|--------|
| ~~gemini-2.5-flash-image~~ | Very Low | Very Low | Preview (Limited) |
| **gemini-2.0-flash-exp** ✅ | 1,500 | 15 | Stable (Better) |

## What Changed:

**File:** `services/geminiService.ts`

```typescript
// OLD (Limited Quota)
model: 'gemini-2.5-flash-image'

// NEW (Better Quota) ✅
model: 'gemini-2.0-flash-exp'
```

## Next Steps:

### 1. Rebuild Your App
```bash
npm run build
```

### 2. If Deployed on Vercel
- Push changes to Git
- Vercel will auto-redeploy
- Or manually redeploy from Vercel dashboard

### 3. If Still Getting 429 Error

**You've hit your daily limit. Options:**

#### A. Wait for Reset
- Free tier resets every 24 hours
- Check usage: https://ai.dev/usage?tab=rate-limit

#### B. Get New API Key
1. Go to https://aistudiocdn.com/app/apikey
2. Create a new project
3. Generate new API key
4. Update `.env.local` (local) or Vercel environment variables

#### C. Upgrade Plan
- Visit https://aistudio.google.com/app/apikey
- Check billing options
- Upgrade for higher limits

## Free Tier Limits (gemini-2.0-flash-exp)

- ✅ **15 requests per minute**
- ✅ **1,500 requests per day**
- ✅ **1 million tokens per minute**

This is **much better** than the preview model!

## Testing Locally

```bash
# Make sure you have the latest code
npm install

# Run dev server
npm run dev

# Try uploading an image
# If it works, you're good to deploy!
```

## Monitoring Usage

Check your current usage:
- Dashboard: https://ai.dev/usage
- See requests per day/minute
- Monitor when quota resets

## Still Having Issues?

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for more solutions.

---

**Summary:** Your app now uses a better model with higher quota limits. Rebuild and redeploy!
