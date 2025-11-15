@echo off
echo ========================================
echo AI Photo Editor - Quick Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo.

echo [2/3] Checking for .env.local file...
if not exist .env.local (
    echo Creating .env.local from template...
    copy .env.example .env.local
    echo.
    echo IMPORTANT: Please edit .env.local and add your GEMINI_API_KEY
    echo Get your API key from: https://aistudio.google.com/app/apikey
    echo.
    pause
) else (
    echo .env.local already exists
)
echo.

echo [3/3] Testing build...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Make sure your GEMINI_API_KEY is set in .env.local
echo 2. Run: npm run dev
echo 3. Open: http://localhost:3000
echo.
echo To deploy to Vercel, see DEPLOYMENT.md
echo.
pause
