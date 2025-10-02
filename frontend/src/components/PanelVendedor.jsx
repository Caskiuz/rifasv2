import React from "react";

const PanelVendedor = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Panel de Vendedor</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <a href="#ventas" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Mis Ventas</h2>
          <p className="text-gray-600">Consulta tus ventas, comisiones y pagos recibidos.</p>
        </a>
        <a href="#clientes" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Mis Clientes</h2>
          <p className="text-gray-600">Gestiona tus clientes y boletos asignados.</p>
        </a>
        <a href="#soporte" className="block bg-white rounded shadow p-6 hover:bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Soporte</h2>
          <p className="text-gray-600">Solicita ayuda o reporta problemas.</p>
        </a>
      </div>
      <div id="ventas" className="bg-white p-6 rounded shadow max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Mis Ventas</h2>
        {/* Aquí se mostrarán las ventas y comisiones del vendedor */}
      </div>
      <div id="clientes" className="bg-white p-6 rounded shadow max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Mis Clientes</h2>
        {/* Aquí se mostrarán los clientes y boletos asignados */}
      </div>
      {/* Aquí puedes agregar componentes para soporte */}
    </div>
  );
};

export default PanelVendedor;
