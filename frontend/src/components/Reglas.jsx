import React from 'react';

export default function Reglas() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Reglas de las Rifas</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Solo pueden participar usuarios registrados y mayores de edad.</li>
        <li>El pago de boletos debe realizarse antes del sorteo.</li>
        <li>Los ganadores serán notificados por email y en la plataforma.</li>
        <li>La organización puede cancelar rifas si no se cumplen los requisitos mínimos.</li>
        <li>Consulta los términos y condiciones para más detalles.</li>
      </ul>
    </div>
  );
}
