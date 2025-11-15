# Deploying AI Photo Editor to Vercel

This guide will help you deploy your AI Photo Editor application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier works fine)
2. A [Google Gemini API key](https://aistudio.google.com/app/apikey)
3. Git installed on your machine
4. Node.js installed (v18 or higher recommended)

## Step 1: Prepare Your Repository

If you haven't already, initialize a git repository and push to GitHub/GitLab/Bitbucket:

```bash
git init
git add .
git commit -m "Initial commit - AI Photo Editor"
git remote add origin <your-repo-url>
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Configure your project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variable:
   - Click "Environment Variables"
   - Add: `GEMINI_API_KEY` = `your_actual_api_key_here`
   - Make sure it's available for Production, Preview, and Development

6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and add your environment variable when asked

5. For production deployment:
```bash
vercel --prod
```

## Step 3: Configure Environment Variables

After deployment, you can manage environment variables:

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add or update `GEMINI_API_KEY`
4. Redeploy if needed

## Step 4: Test Your Deployment

1. Visit your deployed URL (provided by Vercel)
2. Upload an image
3. Enter a prompt (e.g., "Make the sky purple")
4. Click "Enhance Image"
5. Verify the AI editing works correctly

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Vercel dashboard

### API Key Issues
- Ensure `GEMINI_API_KEY` is set in Vercel environment variables
- Verify the API key is valid and has proper permissions
- Check API quota limits

### Runtime Errors
- Check browser console for errors
- Verify all environment variables are properly set
- Check Vercel function logs

## Local Development

To run locally before deploying:

```bash
# Install dependencies
npm install

# Set your API key in .env.local
echo "GEMINI_API_KEY=your_api_key_here" > .env.local

# Run development server
npm run dev
```

## Updating Your Deployment

Simply push changes to your connected Git repository:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically rebuild and redeploy your application.

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Google Gemini API Documentation](https://ai.google.dev/docs)
