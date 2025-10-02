#!/bin/bash
# Script de despliegue frontend

echo "Instalando dependencias..."
npm install

echo "Construyendo aplicación..."
npm run build

echo "Despliegue listo en la carpeta dist/"
