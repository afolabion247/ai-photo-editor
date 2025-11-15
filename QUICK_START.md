# Quick Start Guide

Get your AI Photo Editor running in 5 minutes!

## 🚀 Fast Track

### 1. Get API Key (2 minutes)
1. Visit https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy your key

### 2. Setup Locally (1 minute)
```bash
# Install dependencies
npm install

# Create environment file
copy .env.example .env.local

# Edit .env.local and paste your API key
# GEMINI_API_KEY=your_key_here
```

### 3. Run (30 seconds)
```bash
npm run dev
```

Open http://localhost:3000 🎉

### 4. Test (1 minute)
1. Upload any image
2. Type: "Make the sky purple"
3. Click "Enhance Image"
4. Wait 5-10 seconds
5. See the magic! ✨

## 🌐 Deploy to Vercel (5 minutes)

### Option A: Via Dashboard (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repo
5. Add environment variable:
   - Name: `GEMINI_API_KEY`
   - Value: your_api_key
6. Click "Deploy"
7. Done! 🎊

### Option B: Via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📚 Documentation

- **Full Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- **Problems?**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Quota Issues?**: [QUOTA_FIX.md](QUOTA_FIX.md)

## ⚡ Common Issues

### "Quota Exceeded" Error
- **Cause**: Hit daily API limit
- **Fix**: Wait 24 hours or get new API key
- **Details**: [QUOTA_FIX.md](QUOTA_FIX.md)

### "API Key Not Set" Error
- **Local**: Check `.env.local` exists and has correct format
- **Vercel**: Add `GEMINI_API_KEY` in project settings

### Build Fails
```bash
# Clean install
rmdir /s /q node_modules
npm install
npm run build
```

## 🎯 Example Prompts

Try these prompts for best results:

- "Make the sky a vibrant sunset"
- "Add snow to the scene"
- "Turn this into a watercolor painting"
- "Make it look like a vintage photo"
- "Add dramatic lighting"
- "Change the background to a beach"

## 📊 API Limits (Free Tier)

- **15 requests per minute**
- **1,500 requests per day**
- Resets every 24 hours
- Monitor: https://ai.dev/usage

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Troubleshooting
npx tsc --noEmit    # Check TypeScript errors
npm install         # Reinstall dependencies
```

## ✅ Checklist

Before deploying:
- [ ] API key obtained
- [ ] App runs locally
- [ ] Image upload works
- [ ] AI generation works
- [ ] Code pushed to Git
- [ ] Environment variable set in Vercel

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Gemini API Docs](https://ai.google.dev/docs)
- [Vercel Docs](https://vercel.com/docs)

---

**Need help?** Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) or open an issue!
