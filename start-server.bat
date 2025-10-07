@echo off
echo Iniciando servidor en http://localhost:8000
echo Para probar 404, visita: http://localhost:8000/pagina-inexistente
echo Presiona Ctrl+C para detener
echo.

python -m http.server 8000
pause