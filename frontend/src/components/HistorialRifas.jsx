import React, { useState, useEffect } from 'react';

export default function HistorialRifas() {
  const [historial, setHistorial] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/boletos/historial', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(setHistorial)
      .catch(() => setMsg('Error al cargar historial'));
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Historial de Rifas y Boletos</h2>
      {msg && <p className="text-red-600">{msg}</p>}
      <ul>
        {historial.map(item => (
          <li key={item._id} className="mb-4 border-b pb-2">
            <div className="font-semibold text-blue-700">Rifa: {item.rifa?.nombre || item.rifa}</div>
            <div className="text-gray-600">Boleto: {item.numero}</div>
            <div className="text-sm">Estado: {item.estado}</div>
            <div className="text-xs text-gray-400">Fecha: {item.fechaCompra?.substring(0,10)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
