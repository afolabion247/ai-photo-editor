# Troubleshooting Guide

## Common Issues and Solutions

### 1. API Quota Exceeded Error (429)

**Error Message:**
```
Generation Failed
An error occurred: {"error":{"code":429,"message":"You exceeded your current quota..."}}
```

**Causes:**
- Free tier daily/minute limits reached
- Using preview models with strict limits
- Too many requests in short time

**Solutions:**

#### Option A: Wait and Retry
The free tier resets daily. Wait 24 hours and try again.

#### Option B: Check Your Usage
1. Visit https://ai.dev/usage?tab=rate-limit
2. Monitor your current usage
3. See when quota resets

#### Option C: Upgrade Your Plan
1. Go to https://aistudio.google.com/app/apikey
2. Check billing details
3. Consider upgrading for higher limits

#### Option D: Use Alternative Model
The app now uses `gemini-2.0-flash-exp` which has better free tier limits than the preview models.

**Free Tier Limits (as of 2024):**
- **gemini-2.0-flash-exp-image-generation**: 
  - Supports image generation
  - Better quota than preview models
  - Experimental but stable

- **gemini-2.5-flash-image** (preview):
  - Very limited quota
  - Not recommended for production

### 2. API Key Not Working

**Error Message:**
```
API_KEY environment variable not set
```

**Solutions:**

#### Local Development:
1. Check `.env.local` exists in project root
2. Verify format: `GEMINI_API_KEY=your_actual_key_here`
3. No quotes needed around the key
4. Restart dev server after changes

#### Vercel Deployment:
1. Go to Vercel project settings
2. Navigate to Environment Variables
3. Add `GEMINI_API_KEY` with your key
4. Redeploy the application

### 3. Build Fails on Vercel

**Common Causes:**

#### Missing Dependencies
**Solution:** Ensure all packages are in `package.json`
```bash
npm install
```

#### TypeScript Errors
**Solution:** Check locally first
```bash
npx tsc --noEmit
```

#### Node Version Mismatch
**Solution:** In Vercel settings, set Node.js version to 18.x or higher

### 4. Image Upload Not Working

**Symptoms:**
- Upload button doesn't respond
- Drag-and-drop fails
- Preview doesn't show

**Solutions:**

1. **Check File Size:** Max 10MB recommended
2. **Check File Type:** Only image files (PNG, JPG, GIF, WebP)
3. **Browser Console:** Check for JavaScript errors
4. **Clear Cache:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### 5. Generated Image Not Displaying

**Possible Causes:**

#### API Response Issue
- Check browser console for errors
- Verify API returned image data
- Check network tab for response

#### CORS Issues (Local Development)
- Usually not an issue with Vite
- Check browser console for CORS errors

#### Base64 Encoding Issue
- Verify image data is properly encoded
- Check MIME type is correct

### 6. Slow Performance

**Solutions:**

1. **Optimize Image Size:** Resize large images before upload
2. **Check Network:** Slow connection affects API calls
3. **API Response Time:** Gemini API can take 5-15 seconds
4. **Browser Performance:** Close unnecessary tabs

### 7. Environment Variables Not Loading

**Local Development:**

```bash
# Verify .env.local exists
dir .env.local

# Check content (Windows)
type .env.local

# Restart dev server
npm run dev
```

**Vercel Deployment:**

1. Settings → Environment Variables
2. Verify variable name is exactly `GEMINI_API_KEY`
3. Check it's enabled for Production
4. Redeploy after adding variables

### 8. TypeScript Errors

**Common Issues:**

#### Module Not Found
```bash
npm install
```

#### Type Errors
```bash
# Check all errors
npx tsc --noEmit

# Update types
npm install --save-dev @types/node
```

### 9. Vercel Deployment URL Not Working

**Check:**

1. **Build Status:** Ensure deployment succeeded
2. **Logs:** Check Vercel function logs for errors
3. **Environment Variables:** Verify they're set
4. **Domain:** Wait a few minutes for DNS propagation

### 10. "No Image Data Found" Error

**Causes:**
- API returned text instead of image
- Model doesn't support image generation
- Prompt might be blocked by safety filters

**Solutions:**

1. **Try Different Prompt:** Avoid potentially sensitive content
2. **Check Model:** Ensure using image-capable model
3. **Verify API Response:** Check browser console for actual response

## Getting Help

### Check These First:
1. Browser console (F12) for JavaScript errors
2. Network tab for API request/response
3. Vercel function logs (if deployed)
4. API usage dashboard: https://ai.dev/usage

### Useful Commands:

```bash
# Test build locally
npm run build

# Check for errors
npx tsc --noEmit

# Clear node_modules and reinstall
rmdir /s /q node_modules
npm install

# View environment variables (local)
type .env.local
```

### Resources:

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Gemini API Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Usage Dashboard](https://ai.dev/usage)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)

### Still Having Issues?

1. Check the error message carefully
2. Search the error in Gemini API docs
3. Verify your API key is valid
4. Check quota limits
5. Try with a fresh API key

## Model Comparison

| Model | Image Output | Status | Quota |
|-------|--------------|--------|-------|
| gemini-2.0-flash-exp-image-generation | ✅ Yes | Experimental | Better |
| gemini-2.5-flash-image | ✅ Yes | Preview | Very Limited |
| gemini-2.0-flash-exp | ❌ No | Experimental | Good |
| gemini-1.5-flash | ❌ No | Stable | Good |

**Recommendation:** Use `gemini-2.0-flash-exp-image-generation` for image editing with better quota.

---

**Note:** This app now uses `gemini-2.0-flash-exp-image-generation` by default for image generation with better quota limits.
