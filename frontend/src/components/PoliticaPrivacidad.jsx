import React from 'react';

export default function PoliticaPrivacidad() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>
      <p className="mb-4">Tu privacidad es importante para nosotros. Recopilamos y protegemos tus datos conforme a la ley.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Solo usamos tus datos para gestionar tu participación en las rifas.</li>
        <li>No compartimos tu información con terceros sin tu consentimiento.</li>
        <li>Puedes solicitar la eliminación de tus datos en cualquier momento.</li>
        <li>Consulta los términos y condiciones para más detalles.</li>
      </ul>
    </div>
  );
}
