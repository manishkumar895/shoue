@echo off
echo ========================================================
echo   Starting SOLEVAULT E-Commerce Shoe Platform...
echo ========================================================
echo.
cd /d "%~dp0"

if not exist node_modules (
  echo [1/2] Installing dependencies...
  call npm install
)

echo [2/2] Launching Vite Dev Server...
echo App will open at: http://localhost:5173
start http://localhost:5173
call npm run dev
pause
