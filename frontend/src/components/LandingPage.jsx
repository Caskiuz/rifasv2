import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center">
      <header className="w-full py-8 bg-white shadow-md flex flex-col items-center">
  <img src="/assets/logo-rifatela.png" alt="Logo Rifatela" className="w-32 mb-2" />
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Bienvenido a tu Plataforma de Rifas</h1>
  <p className="text-lg text-gray-600">Crea, gestiona y comercializa boletos de rifas en línea de manera sencilla y confiable.</p>
      </header>
      <main className="flex-1 w-full max-w-5xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Personaliza tu experiencia</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Identidad visual: logo y paleta de colores</li>
              <li>Ajustes de rifas y tickets</li>
              <li>Panel para administradores y vendedores</li>
              <li>Pagos integrados y alertas automáticas</li>
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
