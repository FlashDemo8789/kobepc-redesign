@echo off
echo ========================================
echo  Kobe PC Services - GitHub Pages Deploy
echo ========================================
echo.

cd /d "C:\Users\owner\Desktop\kobepc-redesign"

echo Step 1: Checking GitHub CLI authentication...
"C:\Program Files\GitHub CLI\gh.exe" auth status
if %errorlevel% neq 0 (
    echo.
    echo You need to authenticate with GitHub first.
    echo Running authentication...
    echo.
    "C:\Program Files\GitHub CLI\gh.exe" auth login --web
    echo.
    echo Please complete the authentication in your browser.
    pause
)

echo.
echo Step 2: Creating GitHub repository...
"C:\Program Files\GitHub CLI\gh.exe" repo create kobepc-demo --public --description "Kobe PC Services - Multi-page website demo" --clone=false
if %errorlevel% neq 0 (
    echo Repository might already exist or there was an error.
    echo Continuing with deployment...
)

echo.
echo Step 3: Getting your GitHub username...
for /f "tokens=*" %%i in ('"C:\Program Files\GitHub CLI\gh.exe" api user --jq .login') do set GITHUB_USER=%%i
echo GitHub username: %GITHUB_USER%

echo.
echo Step 4: Adding remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USER%/kobepc-demo.git

echo.
echo Step 5: Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo Step 6: Enabling GitHub Pages...
"C:\Program Files\GitHub CLI\gh.exe" api repos/%GITHUB_USER%/kobepc-demo/pages -X POST -f source.branch=main -f source.path=/ 2>nul
if %errorlevel% neq 0 (
    echo GitHub Pages might already be enabled.
)

echo.
echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your site is now available at:
echo https://%GITHUB_USER%.github.io/kobepc-demo
echo.
echo Once you configure DNS, it will be available at:
echo https://demo.flash.zone
echo.
echo Repository URL:
echo https://github.com/%GITHUB_USER%/kobepc-demo
echo.
echo Next steps:
echo 1. Configure DNS in Namecheap (see DNS_SETUP.md)
echo 2. Wait for DNS propagation (up to 24 hours)
echo 3. Check GitHub Pages settings in repository
echo.
pause