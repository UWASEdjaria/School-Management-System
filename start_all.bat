@echo off
setlocal
title School Management System - Multi Server Starter

echo ====================================================
echo   SCHOOL MANAGEMENT SYSTEM - STARTUP SCRIPT
echo ====================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed! Please install it from nodejs.org
    pause
    exit /b
)

echo Starting Portals...
echo.

:: Start Client Portal on Port 3000
echo [ACTION] Starting Student/Parent Portal on http://localhost:3000
start "Client Portal (Port 3000)" cmd /k "echo Starting Client Portal... && cd client-app\frontend && npm run dev -- -p 3000"

:: Start Admin Portal on Port 3001
echo [ACTION] Starting Admin/Staff Portal on http://localhost:3001
start "Admin Portal (Port 3001)" cmd /k "echo Starting Admin Portal... && cd admin-app\frontend && npm run dev -- -p 3001"

echo.
echo ====================================================
echo   SUCCESS: Startup commands sent!
echo ====================================================
echo.
echo 1. Wait for the two new windows to finish loading.
echo 2. Once they say "✓ Ready" or "started server on 0.0.0.0:3000", open:
echo    Landing Page: http://localhost/school-management-system/
echo.
echo NOTE: Keep those two new windows OPEN. 
echo If you close them, the dashboards will disappear!
echo.
pause
