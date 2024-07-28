@echo off

REM Define source and target directories
set BUILD_DIR=D:\Work\FirstTask\dist\first-task\browser
set TARGET_DIR=D:\GitDevlop\angular\AngularWorkUserTask


REM Check if source directory exists
if not exist "%BUILD_DIR%" (
    echo Source directory does not exist: %BUILD_DIR%
    exit /b 1
)

REM Ensure the target directory exists
if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

REM Delete all files in the target directory before copy files
del /q "%TARGET_DIR%\*"

REM Move files from the build directory to the target directory
xcopy /s /i "%BUILD_DIR%\*" "%TARGET_DIR%\" >nul


echo Files copied successfully.

REM Optionally delete the files in target directory files
del /q "%BUILD_DIR%\*"

echo deleted files in build path

echo ------------------------------------------------------------

REM Navigate to the target directory
cd /d "%TARGET_DIR%"

echo git comments started

REM Prompt for commit message
set /p COMMIT_MSG=Enter commit message: 

REM Run Git commands
git add .
git commit -m "%COMMIT_MSG%"
git push origin master

echo ----------------------------------------------------------------------------------------------------------
echo Files moved and Git commands executed successfully.