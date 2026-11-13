@echo off
cd /d "%~dp0"
echo [1/2] Installing dependencies (first run may take a minute)...
call npm install
echo.
echo [2/2] Launching local dev server...
call npm run dev
pause

