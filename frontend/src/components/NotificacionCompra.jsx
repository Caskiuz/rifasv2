import React from "react";

const NotificacionCompra = ({ rifa, boleto, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Compra exitosa!</h2>
        <p className="mb-2">Has adquirido tu boleto para la rifa:</p>
        <div className="font-semibold text-blue-700 mb-2">{rifa?.nombre}</div>
        <div className="mb-4">Número de boleto: <span className="font-bold">{boleto?.numero}</span></div>
        <p className="mb-4 text-gray-600">Recibirás un correo con los detalles y tu comprobante.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default NotificacionCompra;
