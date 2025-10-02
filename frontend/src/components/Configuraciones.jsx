import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Íconos SVG propios y simples, consistentes con el estilo del sitio
const IconDomain = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);
const IconWebsite = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18" />
  </svg>
);
const IconSEO = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const IconPayments = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);
const IconPanel = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);
const IconBell = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0v5l2 2H4l2-2Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </svg>
);
const IconVendors = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <path d="M2 21a6 6 0 0 1 12 0M10 21a6 6 0 0 1 12 0" />
  </svg>
);
const IconTickets = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9a2 2 0 0 1 2-2h14l2 2v4l-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M9 7v10" />
  </svg>
);
const IconPromo = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15V8a2 2 0 0 0-2-2h-5l-2-2H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12" />
    <path d="M15 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </svg>
);
const IconReports = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z" />
    <path d="M7 14h2v4H7zM11 10h2v8h-2zM15 12h2v6h-2z" />
  </svg>
);
const IconSecurity = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconIntegrations = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="7.5" r="3.5" />
    <circle cx="16.5" cy="16.5" r="3.5" />
    <path d="M10.5 10.5l3 3" />
  </svg>
);
const IconBrand = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0c274a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20" />
  </svg>
);

const SECCIONES = [
  { id: "dominio", titulo: "Dominio", desc: "Conecta tu propio dominio y mejora la presencia de tu marca.", Icon: IconDomain },
  { id: "web", titulo: "Página Web", desc: "Configura la portada, colores y bloques con el estilo de Rifatela.", Icon: IconWebsite },
  { id: "seo", titulo: "SEO", desc: "Metadatos, open graph y sitemap para posicionamiento.", Icon: IconSEO },
  { id: "pagos", titulo: "Pagos", desc: "Activa métodos de pago y gestiona credenciales de cobro.", Icon: IconPayments },
  { id: "panel", titulo: "Panel de Administración", desc: "Gestión de rifas, usuarios y control de tu operación.", Icon: IconPanel },
  { id: "notificaciones", titulo: "Notificaciones", desc: "Correos y avisos automáticos personalizados.", Icon: IconBell },
  { id: "vendedores", titulo: "Vendedores", desc: "Perfiles, comisiones y seguimiento de desempeño.", Icon: IconVendors },
  { id: "boletos", titulo: "Boletos", desc: "Folio, numeración y estados de tus tickets.", Icon: IconTickets },
  { id: "promociones", titulo: "Promociones", desc: "Cupones, descuentos y campañas temporales.", Icon: IconPromo },
  { id: "reportes", titulo: "Reportes", desc: "Ventas, conversiones y métricas clave.", Icon: IconReports },
  { id: "seguridad", titulo: "Seguridad", desc: "Protecciones, doble factor y roles de acceso.", Icon: IconSecurity },
  { id: "integraciones", titulo: "Integraciones", desc: "Conecta con servicios externos y APIs.", Icon: IconIntegrations },
];

export default function Configuraciones() {
  const location = useLocation();

  // Desplazamiento suave al ancla cuando cambia el hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Esperar al layout para evitar saltos
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [location.hash]);

  return (
    <main className="bg-white text-[#0c274a]">
      <section className="landing-hero landing-hero__layer">
        <div className="landing-hero__content">
          <h1 className="landing-title">Configuraciones</h1>
          <div className="landing-crumbs">
            <a href="/">Inicio</a>
            <span className="dot">•</span>
            <span>RIFATELA</span>
            <span className="dot">•</span>
            <span>Configuraciones</span>
          </div>
        </div>
      </section>

      <section className="landing-wrap">
        <div className="landing-grid">
          {SECCIONES.map(({ id, titulo, desc, Icon }) => (
            <article key={id} id={id} className="landing-card anchor-target">
              <div className="landing-thumb" aria-hidden="true">
                <div className="inline-flex items-center justify-center w-[88px] h-[88px] rounded-2xl bg-white border border-[#e6edf5] shadow-sm" style={{ boxShadow: '0 6px 18px rgba(31,38,135,0.10)' }}>
                  <Icon />
                </div>
              </div>
              <div className="landing-body">
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">{titulo}</h3>
                <p className="landing-desc">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
