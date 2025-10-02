import React, { useState, useEffect } from 'react';

export default function PanelUsuario({ user }) {
  const [rifas, setRifas] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/rifas')
      .then(res => res.json())
      .then(setRifas)
      .catch(() => setMsg('Error al cargar rifas'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Panel de Usuario</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <a href="#mis-rifas" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Mis Rifas</h2>
          <p className="text-gray-600">Consulta tus rifas activas, boletos y resultados.</p>
        </a>
        <a href="#perfil" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Mi Perfil</h2>
          <p className="text-gray-600">Edita tus datos, cambia contraseña y gestiona notificaciones.</p>
        </a>
        <a href="#compras" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Historial de Compras</h2>
          <p className="text-gray-600">Revisa tus compras, pagos y descargas de boletos.</p>
        </a>
        <a href="#soporte" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Soporte</h2>
          <p className="text-gray-600">Solicita ayuda o reporta problemas.</p>
        </a>
      </div>
      <div id="mis-rifas" className="bg-white p-6 rounded shadow max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Mis Rifas Disponibles</h2>
        {msg && <p className="text-red-600">{msg}</p>}
        <ul>
          {rifas.map(rifa => (
            <li key={rifa._id} className="mb-4 border-b pb-2">
              <div className="font-semibold text-blue-700">{rifa.nombre}</div>
              <div className="text-gray-600">{rifa.descripcion}</div>
              <div className="text-sm">Precio: ${rifa.precioBoleto} | Boletos: {rifa.totalBoletos}</div>
              {/* Aquí se puede agregar botón para comprar boletos */}
            </li>
          ))}
        </ul>
      </div>
      {/* Aquí puedes agregar componentes para perfil, compras y soporte */}
    </div>
  );
}
