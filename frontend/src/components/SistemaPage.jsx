import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#153e75" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);
const Bullet = ({ children }) => (
  <li className="flex items-start gap-2"><span className="mt-1"><IconCheck /></span><span className="landing-desc">{children}</span></li>
);

export default function SistemaPage() {
  const location = useLocation();

  // Scroll al hash con compensación
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [location.hash]);

  return (
    <main className="bg-white text-[#0c274a]">
      <section className="landing-hero landing-hero__layer">
        <div className="landing-hero__content">
          <h1 className="landing-title">Sistema</h1>
          <div className="landing-crumbs">
            <a href="/">Inicio</a>
            <span className="dot">•</span>
            <span>RIFATELA</span>
            <span className="dot">•</span>
            <span>Sistema</span>
          </div>
        </div>
      </section>

      {/* Subnavegación interna removida: el navbar ya redirige a cada sección */}

      {/* Componentes del Sistema */}
      <section className="landing-wrap">
        <h2 id="componentes" className="text-[22px] md:text-[24px] font-extrabold text-[#153e75] mb-3 anchor-target">Componentes del Sistema</h2>
        <div className="landing-grid">
          {/* Página Web (Landing Page) */}
          <article id="pagina-web" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Página Web (Landing Page)</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet><strong>Imagen:</strong> foto principal del premio, banner destacado; formatos JPG/PNG en vertical o cuadrado.</Bullet>
                <Bullet><strong>Texto:</strong> descripción y título con la mecánica de la rifa; admite HTML y emoticonos.</Bullet>
                <Bullet><strong>Selección:</strong> formulario para elegir números y adquirir boletos.</Bullet>
              </ul>
            </div>
          </article>

          {/* Verificador de Ticket */}
          <article id="verificador" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Verificador de Ticket</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Valida participación y estado de boletos (separados/comprados).</Bullet>
                <Bullet>Búsqueda por número de ticket y por número de celular.</Bullet>
                <Bullet>Accesible desde la Landing Page.</Bullet>
              </ul>
            </div>
          </article>

          {/* Galería de Premios */}
          <article id="galeria" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Galería de Premios</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Galería tipo carrusel con fotos y descripción del/los premio(s).</Bullet>
                <Bullet>Muestra cantidad, fecha del sorteo y ticket ganador cuando corresponda.</Bullet>
              </ul>
            </div>
          </article>

          {/* Dinámica / FAQ */}
          <article id="dinamica" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Dinámica (Preguntas Frecuentes)</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Sección para explicar dinámica, términos y condiciones.</Bullet>
                <Bullet>Preguntas y respuestas en acordeones; agrega las que necesites.</Bullet>
              </ul>
            </div>
          </article>

          {/* Sorteador / Revolvedor */}
          <article id="revolvedor" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Sorteador de Tickets</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Mezcla números separados y comprados el día del sorteo.</Bullet>
                <Bullet>Acceso público y comportamiento 100% aleatorio.</Bullet>
              </ul>
            </div>
          </article>

          {/* Información / Contacto */}
          <article id="contacto" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Información y Contacto</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Dirección, ubicación, WhatsApp(s) y redes sociales.</Bullet>
                <Bullet>Pie de página con múltiples WhatsApp y tus redes sociales.</Bullet>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Panel de Administración */}
      <section className="landing-wrap">
        <h2 id="panel-admin" className="text-[22px] md:text-[24px] font-extrabold text-[#153e75] mb-3 anchor-target">Panel de Administración</h2>
        <div className="landing-grid">
          {/* Datos / Estadísticas */}
          <article id="estadisticas" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Datos y Estadísticas</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Resumen de ventas, participantes y métodos de pago.</Bullet>
                <Bullet>Totales de ventas y evolución por fechas de compra.</Bullet>
              </ul>
            </div>
          </article>

          {/* Listado de Rifas */}
          <article id="rifas" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Listado de Rifas</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Historial de rifas activas e inactivas con resumen de tickets y ajustes clave.</Bullet>
                <Bullet>Totales de ventas, participantes y fechas relevantes.</Bullet>
              </ul>
            </div>
          </article>

          {/* Participantes */}
          <article id="participantes" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Lista de Participantes</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Detalle de usuarios que compraron o reservaron tickets.</Bullet>
                <Bullet>Datos del participante, resumen de compras y boletos obtenidos.</Bullet>
              </ul>
            </div>
          </article>

          {/* Tickets */}
          <article id="tickets" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Lista de Tickets</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Números, estados, montos, fechas, horas y detalle por compra.</Bullet>
                <Bullet>Incluye foto del comprobante cuando corresponda.</Bullet>
              </ul>
            </div>
          </article>

          {/* Premios */}
          <article id="premios" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Gestión de Premios</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Crear y actualizar premios; subir la foto asociada.</Bullet>
                <Bullet>Título, descripción y definición de ticket(s) ganador(es).</Bullet>
              </ul>
            </div>
          </article>

          {/* Zona del Cliente */}
          <article id="zona-cliente" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Zona del Cliente</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Configura tu información, WhatsApp(s), redes y datos de contacto.</Bullet>
                <Bullet>Datos de tu organización visibles en la Landing.</Bullet>
              </ul>
            </div>
          </article>

          {/* Métodos de Pago */}
          <article id="metodos-pago" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Métodos de Pago</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Gestiona cuentas bancarias/medios con su identificación.</Bullet>
                <Bullet>Titular, datos bancarios y campos adicionales.</Bullet>
              </ul>
            </div>
          </article>

          {/* Zona de Usuarios */}
          <article id="zona-usuarios" className="landing-card anchor-target">
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Zona de Usuarios</h3>
              <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
                <Bullet>Alta/edición de usuarios para gestión (administradores y vendedores).</Bullet>
                <Bullet>Campos típicos: correo, celular y contraseñas.</Bullet>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
