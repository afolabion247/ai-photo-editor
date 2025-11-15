# Vercel Deployment Checklist

Use this checklist to ensure your AI Photo Editor is ready for deployment.

## Pre-Deployment Checklist

### ✅ Code & Configuration
- [x] All dependencies installed (`npm install`)
- [x] Build succeeds locally (`npm run build`)
- [x] App runs in development mode (`npm run dev`)
- [x] All TypeScript files compile without errors
- [x] Environment variables configured in `.env.local`
- [x] `.gitignore` includes sensitive files
- [x] `vercel.json` configuration file created
- [x] `index.css` file exists

### ✅ API Configuration
- [ ] Gemini API key obtained from https://aistudio.google.com/app/apikey
- [ ] API key tested and working locally
- [ ] API key has sufficient quota/credits
- [ ] API key permissions verified

### ✅ Git Repository
- [ ] Git repository initialized
- [ ] All files committed
- [ ] Repository pushed to GitHub/GitLab/Bitbucket
- [ ] Repository is accessible

## Deployment Steps

### 1. Vercel Account Setup
- [ ] Vercel account created at https://vercel.com
- [ ] Logged into Vercel dashboard

### 2. Project Import
- [ ] Clicked "Add New Project" in Vercel
- [ ] Repository imported successfully
- [ ] Framework detected as Vite

### 3. Build Configuration
Verify these settings in Vercel:
- [ ] **Framework Preset**: Vite
- [ ] **Build Command**: `npm run build`
- [ ] **Output Directory**: `dist`
- [ ] **Install Command**: `npm install`
- [ ] **Node.js Version**: 18.x or higher

### 4. Environment Variables
- [ ] Added `GEMINI_API_KEY` in Vercel project settings
- [ ] Environment variable set for Production
- [ ] Environment variable set for Preview (optional)
- [ ] Environment variable set for Development (optional)

### 5. Deploy
- [ ] Clicked "Deploy" button
- [ ] Build completed successfully
- [ ] No build errors in logs

## Post-Deployment Checklist

### ✅ Functionality Testing
- [ ] Deployment URL accessible
- [ ] Page loads without errors
- [ ] UI renders correctly
- [ ] Image upload works
- [ ] Drag-and-drop upload works
- [ ] Prompt input accepts text
- [ ] "Enhance Image" button is clickable
- [ ] AI image generation works
- [ ] Before/after images display correctly
- [ ] Error messages display properly (test with invalid input)
- [ ] Loading states work correctly

### ✅ Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### ✅ Performance
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] API responses are reasonable

### ✅ Optional Enhancements
- [ ] Custom domain configured
- [ ] Analytics added (if desired)
- [ ] Error monitoring setup (e.g., Sentry)
- [ ] Performance monitoring

## Troubleshooting

If deployment fails, check:

1. **Build Errors**
   - Review build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation locally

2. **Runtime Errors**
   - Check browser console
   - Verify environment variables are set
   - Check Vercel function logs

3. **API Errors**
   - Verify API key is correct
   - Check API quota/limits
   - Test API key locally first

4. **Environment Variable Issues**
   - Ensure variable name is exactly `GEMINI_API_KEY`
   - Redeploy after adding variables
   - Check variable is available in correct environment

## Quick Commands

```bash
# Test build locally
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npx tsc --noEmit

# Deploy via CLI
vercel --prod
```

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Gemini API Docs](https://ai.google.dev/docs)
- [Project README](./README.md)
- [Deployment Guide](./DEPLOYMENT.md)

---

**Ready to deploy?** Follow the [DEPLOYMENT.md](./DEPLOYMENT.md) guide!
