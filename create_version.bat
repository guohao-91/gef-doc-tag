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

echo %SOURCE_DIR%
echo %JSON_FILE%
echo %OLDAPIVERSION%

for /f "usebackq skip=1 tokens=*" %%i in ("%JSON_FILE%") do (
    
    set "LINE=%%i"
    set "OLDAPIVERSION=!LINE:~1!"
    set "OLDAPIVERSION=!OLDAPIVERSION:~0,-2!"
    goto :done_reading
)
:done_reading
echo %OLDAPIVERSION%


REN "static\api\current" "static\api\%OLDAPIVERSION%"
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

REM echo git tag v%VERSION%
REM git tag v%VERSION%
REM if errorlevel 1 goto :error_git
REM 
REM git add .
REM git commit -m "docs: version %VERSION%"
REM git push origin HEAD
REM if errorlevel 1 goto :error_git
REM 
REM git push origin v%VERSION%
REM if errorlevel 1 goto :error_git

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