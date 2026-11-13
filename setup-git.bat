@echo off
cd /d "%~dp0"
echo [1/4] Initializing Git repository...
git init
echo [2/4] Staging all files...
git add .
echo [3/4] Creating initial commit...
git commit -m "feat: romantic apology website for Chubby"
echo [4/4] Setting main branch...
git branch -M main
echo.
echo ========================================================
echo SUCCESS: Git initialized and branch set to 'main'!
echo You can now push to your remote GitHub repository.
echo ========================================================
pause

