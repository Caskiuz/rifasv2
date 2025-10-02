import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-lg mx-auto py-12 px-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Suscríbete a nuestras promociones</h1>
      <p className="mb-6 text-gray-600">Recibe novedades, descuentos y oportunidades directamente en tu correo.</p>
      <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <input type="email" placeholder="Tu correo electrónico" className="border rounded px-4 py-2 flex-1" required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Suscribirse</button>
      </form>
    </div>
  );
};

export default Newsletter;
