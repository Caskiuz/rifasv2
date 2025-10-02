import React from 'react';

export default function TerminosCondiciones() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
      <p className="mb-4">Al participar en nuestras rifas aceptas los siguientes términos y condiciones:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Debes ser mayor de edad para participar.</li>
        <li>Los premios se entregan solo a los ganadores registrados.</li>
        <li>El pago de boletos es obligatorio para validar la participación.</li>
        <li>La organización se reserva el derecho de modificar las bases de la rifa.</li>
        <li>Consulta la política de privacidad para saber cómo protegemos tus datos.</li>
      </ul>
    </div>
  );
}
