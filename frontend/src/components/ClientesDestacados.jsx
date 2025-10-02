import React from "react";

const ClientesDestacados = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Clientes Destacados</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full mb-4 bg-[#eaf2ff] flex items-center justify-center text-[#153e75] font-bold">LG</div>
          <h2 className="font-semibold">Lyono - México</h2>
          <p className="text-gray-600 text-sm text-center">“El mejor lugar para hospedar rifas en español, trato increíble y rápido.”</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full mb-4 bg-[#eaf2ff] flex items-center justify-center text-[#153e75] font-bold">SG</div>
          <h2 className="font-semibold">Srts Guero Monterrey</h2>
          <p className="text-gray-600 text-sm text-center">“La rifa salió fenomenal y todos estamos super contentos.”</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full mb-4 bg-[#eaf2ff] flex items-center justify-center text-[#153e75] font-bold">DL</div>
          <h2 className="font-semibold">Daniel Lyono Castellanos</h2>
          <p className="text-gray-600 text-sm text-center">“¡Muchísimas gracias! 100% recomendado.”</p>
        </div>
      </div>
    </div>
  );
};

export default ClientesDestacados;
