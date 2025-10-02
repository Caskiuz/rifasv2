import React from 'react';

export default function Contacto() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">¿Tienes dudas o necesitas ayuda? Escríbenos y te responderemos lo antes posible.</p>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Nombre" required />
        <input className="w-full p-2 border rounded" type="email" placeholder="Correo electrónico" required />
        <textarea className="w-full p-2 border rounded" placeholder="Mensaje" rows="4" required></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" type="submit">Enviar</button>
      </form>
    </div>
  );
}
