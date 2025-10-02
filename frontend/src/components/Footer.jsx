import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0d2a4d] text-[#e3f0ff]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Columna marca */}
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-extrabold text-white" style={{fontFamily:'Rubik, ui-sans-serif, system-ui'}}>Rifatela</div>
          <div className="text-sm opacity-90">Sistema de Rifas Online</div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#0d2a4d] shadow-sm" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Columna Plataforma */}
        <div>
          <h5 className="text-sm font-extrabold tracking-wide uppercase text-[#9fb7d1] mb-3">Plataforma</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
            <li><a className="hover:underline" href="/crear-pagina">Solicitud para crear una Página</a></li>
            <li><a className="hover:underline" href="/clientes">Nuestros Clientes</a></li>
            <li><a className="hover:underline" href="/demos">Demos Disponibles</a></li>
            <li><a className="hover:underline" href="#" aria-disabled="true" title="Próximamente">Comentarios</a></li>
            <li><a className="hover:underline" href="/centro-ayuda">Centro de Ayuda</a></li>
          </ul>
        </div>

        {/* Columna Sistema */}
        <div>
          <h5 className="text-sm font-extrabold tracking-wide uppercase text-[#9fb7d1] mb-3">Sistema</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="/demos">Sistema</a></li>
            <li><a className="hover:underline" href="/acerca">Beneficios</a></li>
            <li><a className="hover:underline" href="/crear-pagina">Configuraciones</a></li>
            <li><a className="hover:underline" href="/precios">Precios</a></li>
            <li><a className="hover:underline" href="#" aria-disabled="true" title="Próximamente">Premium</a></li>
          </ul>
        </div>

        {/* Columna Empresa */}
        <div>
          <h5 className="text-sm font-extrabold tracking-wide uppercase text-[#9fb7d1] mb-3">Empresa</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="/acerca">Acerca de Rifatela</a></li>
            <li><a className="hover:underline" href="/contacto">Contacto</a></li>
            <li><a className="hover:underline" href="/terminos">Términos y Condiciones</a></li>
            <li><a className="hover:underline" href="#" aria-disabled="true" title="Próximamente">Política de Reembolso</a></li>
            <li><a className="underline hover:no-underline" href="/privacidad">Política de Privacidad</a></li>
            <li><a className="hover:underline" href="#" aria-disabled="true" title="Próximamente">Renuncia de Responsabilidad</a></li>
            <li><a className="hover:underline" href="#" aria-disabled="true" title="Próximamente">Reportar Página</a></li>
          </ul>
        </div>
      </div>

      {/* Copy centrado */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="text-center text-xs text-[#9fb7d1]">© {year} Rifatela™. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
