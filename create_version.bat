@echo off
setlocal ENABLEDELAYEDEXPANSION 

set "VERSION=%1"
set "BUILD_DIR=build"
set "OUTPUT_ZIP_NAME=gef-docs.zip"
set "ZIP_PATH=%OUTPUT_ZIP_NAME%"
set "SOURCE_DIR=../apidoc"


git pull
if errorlevel 1 goto :error_git

DEL %ZIP_PATH%

set "JSON_FILE=versions.json"
set "OLDAPIVERSION="


for /f "usebackq skip=1 tokens=*" %%i in ("%JSON_FILE%") do (
    
    set "LINE=%%i"
    set "OLDAPIVERSION=!LINE:~1!"
    set "OLDAPIVERSION=!OLDAPIVERSION:~0,-2!"
    goto :done_reading
)
:done_reading


REN "static\api\current" "%OLDAPIVERSION%"
XCOPY "%SOURCE_DIR%" "static\api\current" /E /I /Y

echo npm install 
CALL npm install > NUL

echo npm run clear 
CALL npm run clear > NUL
echo npm run docusaurus docs:version  
CALL npm run docusaurus docs:version %VERSION% > NUL
echo npm run build  
CALL npm run build > NUL
if errorlevel 1 goto :error_npm

echo git tag v%VERSION%
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