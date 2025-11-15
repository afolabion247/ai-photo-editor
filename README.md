<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Photo Editor with Gemini

A powerful AI-powered photo editing application built with React, TypeScript, and Google's Gemini AI. Upload images and transform them using natural language prompts.

## Features

- 🎨 AI-powered image editing using Google Gemini 2.0 (Image Generation)
- 📸 Drag-and-drop image upload
- ✨ Natural language prompts for edits
- 🖼️ Before/after comparison view
- 🎯 Real-time preview
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Local Development

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your API key
   # GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to Vercel.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-photo-editor)

Remember to add your `GEMINI_API_KEY` environment variable in Vercel project settings!

## Usage

1. **Upload an Image**: Click or drag-and-drop an image file
2. **Describe Your Edit**: Enter a natural language prompt like:
   - "Make the sky a vibrant sunset with purple clouds"
   - "Add a small, friendly robot in the corner"
   - "Turn this into a Van Gogh style painting"
3. **Generate**: Click "Enhance Image" and wait for AI magic
4. **Compare**: View before/after results side by side

## Project Structure

```
ai-photo-editor/
├── components/          # React components
│   ├── Header.tsx
│   ├── ImageUploader.tsx
│   ├── PromptInput.tsx
│   ├── ImageDisplay.tsx
│   ├── Loader.tsx
│   └── IconComponents.tsx
├── services/           # API services
│   └── geminiService.ts
├── utils/             # Utility functions
│   └── fileUtils.ts
├── App.tsx            # Main app component
├── index.tsx          # Entry point
├── types.ts           # TypeScript types
└── vite.config.ts     # Vite configuration

```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## License

MIT

## Troubleshooting

Having issues? Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common problems and solutions, including:
- API quota exceeded errors
- Environment variable issues
- Build and deployment problems
- Image upload issues

## Support

For issues and questions:
- Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- See [Gemini API docs](https://ai.google.dev/docs)
- Open an issue on GitHub
