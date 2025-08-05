@echo off
echo ========================================
echo    Configuracion para Heroku
echo ========================================
echo.

echo Instalando dependencias...
npm install

echo.
echo ========================================
echo    Instalacion completada!
echo ========================================
echo.
echo Para continuar con el despliegue:
echo 1. Ejecuta: heroku login
echo 2. Ejecuta: heroku create tu-app-nombre
echo 3. Ejecuta: git push heroku main
echo.
echo Para probar localmente:
echo npm start
echo.
pause 