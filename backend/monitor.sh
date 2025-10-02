#!/bin/bash
# Script de monitoreo simple para backend (Node.js)

PORT=5000
URL="http://localhost:$PORT/api/health"

while true; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
  if [ "$STATUS" != "200" ]; then
    echo "[$(date)] Backend caído o sin respuesta. Reiniciando..."
    # Reinicia el backend (ajusta según tu gestor de procesos)
    pm2 restart backend || npm restart
  else
    echo "[$(date)] Backend OK"
  fi
  sleep 60
done
