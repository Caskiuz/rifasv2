import React from "react";

const QA = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Pruebas y QA</h1>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      <li>Registro de usuario: validación de campos, feedback de errores y éxito.</li>
      <li>Login: validación de credenciales, feedback y persistencia de sesión.</li>
      <li>Recuperación de contraseña: validación de email, feedback y flujo de recuperación.</li>
      <li>Compra de boletos: validación de número, feedback visual y notificación de compra.</li>
      <li>Verificación de tickets: búsqueda, feedback y visualización de datos.</li>
      <li>Paneles (admin, usuario, vendedor): navegación, acceso por rol y visualización de datos.</li>
      <li>Notificaciones automáticas: envío de emails tras registro, compra y recuperación.</li>
      <li>Integración de pagos: flujo de Stripe/PayPal, feedback y registro de pagos.</li>
      <li>Pruebas de usabilidad: responsive, accesibilidad y experiencia en dispositivos móviles.</li>
      <li>Pruebas de seguridad: protección de rutas, validación de roles y manejo de tokens.</li>
    </ul>
  <p className="mt-8 text-center text-gray-500 text-sm">Revisa cada flujo y funcionalidad para asegurar la paridad total con rifatela.com.</p>
  </div>
);

export default QA;
