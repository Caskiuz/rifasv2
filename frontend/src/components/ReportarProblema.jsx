import React from "react";

const ReportarProblema = () => {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Reportar un Problema</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Nombre</label>
          <input type="text" placeholder="Nombre" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Correo electrónico</label>
          <input type="email" placeholder="Correo electrónico" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Descripción del problema</label>
          <textarea placeholder="Descripción del problema" className="w-full border rounded px-3 py-2" rows="5" required></textarea>
        </div>
        <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded">Enviar reporte</button>
      </form>
    </div>
  );
};

export default ReportarProblema;
