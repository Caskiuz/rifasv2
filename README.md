# Documentación Técnica y de Usuario

## Instalación y despliegue

1. Clona el repositorio:
   ```bash
   git clone <REPO_URL>
   ```
2. Instala dependencias backend y frontend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Configura variables de entorno en `backend/.env`:
   - `MONGO_URI=...`
   - `STRIPE_SECRET_KEY=...`
   - `EMAIL_USER=...`
   - `EMAIL_PASS=...`
   - `JWT_SECRET=...`
4. Inicia backend:
   ```bash
   cd backend && npm start
   ```
5. Inicia frontend:
   ```bash
   cd frontend && npm run dev
   ```

## Estructura de carpetas
- `backend/`: API, modelos, rutas, controladores, utilidades.
- `frontend/`: React, componentes, vistas, pruebas.

## Flujos principales
- Registro, login, recuperación de contraseña.
- Compra de boletos y pagos.
- Paneles de usuario, vendedor y admin.
- Verificación de tickets.
- Notificaciones automáticas.

## Pruebas
- Ejecuta pruebas frontend:
  ```bash
  cd frontend && npm test
  ```

## Despliegue
- Usa servicios como Vercel/Netlify (frontend) y Render/Heroku (backend).
- Configura variables de entorno en producción.

---

Para dudas o soporte, contacta a soporte@tusitio.com
