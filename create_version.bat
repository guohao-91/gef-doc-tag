@echo off
setlocal

set "VERSION=%1"
set "BUILD_DIR=build"
set "OUTPUT_ZIP_NAME=gef-docs.zip"
set "ZIP_PATH=%OUTPUT_ZIP_NAME%"


git pull
if errorlevel 1 goto :error_git

CALL npm install > NUL
CALL npm run docusaurus docs:version %VERSION% > NUL
if errorlevel 1 goto :error_npm

git tag v%VERSION%
if errorlevel 1 goto :error_git

git add .
git commit -m "docs: version %VERSION%"
git push origin HEAD
if errorlevel 1 goto :error_git

git push origin v%VERSION%
if errorlevel 1 goto :error_git

powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('%BUILD_DIR%', '%ZIP_PATH%');"
if errorlevel 1 goto :error_zip

echo success version: %VERSION%
goto :eof


:error_git
echo error: Git ÅB
goto :eof

:error_npm
echo error: npm run docusaurus docs:version faildÅB
goto :eof

:error_zip
echo error: ZIP 
goto :eof

:eof
endlocal