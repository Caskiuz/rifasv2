import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center">
      <header className="w-full py-8 bg-white shadow-md flex flex-col items-center">
  <img src="/assets/logo-rifatela.png" alt="Logo Rifatela" className="w-32 mb-2" />
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Bienvenido a tu Plataforma de Rifas</h1>
        <p className="text-lg text-gray-600">Crea, administra y vende boletos de rifas online de forma fácil y segura.</p>
      </header>
      <main className="flex-1 w-full max-w-5xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Personaliza tu experiencia</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Logo y colores de tu marca</li>
              <li>Configuración de rifas y boletos</li>
              <li>Panel de administración y vendedores</li>
              <li>Integración de pagos y notificaciones</li>
            </ul>
            <a href="/registro" className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">Crear mi cuenta</a>
          </div>
          <div className="flex justify-center">
            <img src="/assets/home13_bg11okcc-1536x578bg.png" alt="Demo plataforma" className="rounded-lg shadow-lg w-full max-w-xs" />
          </div>
        </div>
      </main>
      <footer className="w-full py-6 bg-gray-100 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Plataforma de Rifas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default LandingPage;
