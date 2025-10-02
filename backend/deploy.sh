#!/bin/bash
# Script de despliegue backend

echo "Instalando dependencias..."
npm install

echo "Aplicando migraciones (si aplica)..."
# npm run migrate (descomenta si usas migraciones)

echo "Iniciando backend en modo producción..."
npm run build
npm run start
