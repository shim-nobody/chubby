@echo off
cd /d "%~dp0"
echo ========================================================
echo Pushing Chubby Website to GitHub: shim-nobody/chubby
echo ========================================================
echo.

echo [1/5] Initializing Git repository...
git init

echo.
echo [2/5] Staging all files...
git add .

echo.
echo [3/5] Committing changes...
git commit -m "feat: romantic apology website for Chubby"

echo.
echo [4/5] Setting main branch...
git branch -M main

echo.
echo [5/5] Setting remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/shim-nobody/chubby.git

echo.
echo ========================================================
echo Pushing to GitHub...
echo ========================================================
git push -u origin main

echo.
echo ========================================================
echo All done! You can view your repository at:
echo https://github.com/shim-nobody/chubby
echo ========================================================
pause

