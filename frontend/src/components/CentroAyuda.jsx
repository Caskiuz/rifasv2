import React, { useMemo, useState } from "react";
// import { Link } from 'react-router-dom';
import articles from '../data/helpArticles.json';

// Iconos inline (libres) para evitar dependencias externas
const IconHelp = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconGear = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .67.27 1.31.75 1.78.48.48 1.12.75 1.78.75h.09a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconCreditCard = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
    <line x1="6" y1="15" x2="10" y2="15"/>
  </svg>
);
const IconTicket = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a2 2 0 0 1-2 2 2 2 0 0 0 0 4 2 2 0 0 1 2 2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a2 2 0 0 1 2-2 2 2 0 0 0 0-4 2 2 0 0 1-2-2z"/>
    <line x1="12" y1="7" x2="12" y2="17"/>
  </svg>
);
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
const IconChart = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M3 3v18h18"/>
    <rect x="7" y="10" width="3" height="7"/>
    <rect x="12" y="6" width="3" height="11"/>
    <rect x="17" y="13" width="3" height="4"/>
  </svg>
);

const faqs = [
  {
    q: "¿Cómo creo una rifa?",
    a: "En Rifatela, entra a tu Panel > Rifas > Crear rifa. Completa título, precio del boleto, fecha del sorteo y reglas. Guarda para publicarla cuando estés listo.",
  },
  {
    q: "¿Cómo configuro los métodos de pago?",
    a: "Ve a Configuración > Pagos y conecta tu cuenta de Stripe siguiendo el asistente. Podrás activar pagos con tarjeta y transferencias compatibles en tu país.",
  },
  {
    q: "¿Cómo contacto al soporte técnico?",
    a: "Escríbenos a soporte@rifatela.com o abre un ticket desde Ayuda > Nuevo ticket en tu panel. Nuestro tiempo de respuesta promedio es menor a 24 h hábiles.",
  },
];

// Categorías principales (como en la referencia visual)
const categorias = [
  { key: 'preguntas-frecuentes', title: 'Preguntas Frecuentes', desc: 'Todas las dudas frecuentes.' },
  { key: 'nuevas-rifas', title: 'Nuevas Rifas', desc: 'Datos requeridos y configuraciones iniciales..' },
  { key: 'funcionalidades', title: 'Funcionalidades', desc: 'Descripción y utilización de las funcionalidades..' },
  { key: 'panel-de-administracion', title: 'Panel de Administración', desc: 'Uso de la Consola.' },
  { key: 'pasarelas-pagos', title: 'Pasarelas de Pagos', desc: 'Guías para configurar las pasarelas de pagos en su Cuenta..' },
  { key: 'dominios', title: 'Dominios', desc: 'Guías de configuraciones de Dominios en los distintos Proveedores..' },
];

export default function CentroAyuda() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState({});

  const resultados = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const base = [
      ...faqs.map(f => ({ type: 'faq', title: f.q, excerpt: f.a, slug: null })),
      ...articles.map(a => ({ type: 'article', title: a.title, excerpt: a.excerpt, slug: a.slug }))
    ];
    return base.filter((item) =>
      item.title.toLowerCase().includes(q) || (item.excerpt || '').toLowerCase().includes(q)
    );
  }, [query]);

  const toggle = (idx) => setOpen((s) => ({ ...s, [idx]: !s[idx] }));

  return (
    <main className="bg-white">
      {/* Hero consistente con el resto del sitio */}
      <section className="landing-hero landing-hero__layer">
        <div className="landing-hero__content">
          <div className="max-w-4xl mx-auto text-center">
            {/* Mantener este texto exacto para los tests (pill) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-white shadow-sm">
              <IconHelp className="w-4 h-4 text-[var(--brand-text)]" />
              <span className="text-xs font-semibold tracking-[.08em] text-[var(--brand-text)]">Centro de Ayuda</span>
            </div>
            <h1 className="mt-3 landing-title" style={{ color: '#ffffff' }}>Hola, bienvenido</h1>
            <p className="mt-1 text-white/90 leading-relaxed">¿Qué necesitas encontrar?</p>

            {/* Buscador pill */}
            <div className="mt-6">
              <form onSubmit={(e) => e.preventDefault()} className="relative max-w-2xl mx-auto">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Buscar artículos…"
                  className="w-full pl-12 pr-20 py-4 rounded-full border border-gray-200 shadow-[0_8px_24px_rgba(13,42,77,0.10)] bg-white/95 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-11 w-11 rounded-full btn-gradient"
                  title="Buscar"
                  aria-label="Buscar"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H13"/><path d="M13 12l3-3m-3 3l3 3"/></svg>
                </button>
              </form>

              {/* Resultados rápidos */}
              {query && (
                <div className="text-left max-w-2xl mx-auto mt-3 bg-white/95 border border-gray-100 rounded-xl shadow p-3">
                  {resultados.length === 0 ? (
                    <p className="text-gray-700">No encontramos resultados para "{query}". Prueba con otras palabras.</p>
                  ) : (
                    <ul className="divide-y divide-gray-100">
                      {resultados.map((r, i) => (
                        <li key={i} className="py-2">
                          <p className="font-semibold text-[var(--brand-text)]">{r.title}</p>
                          <p className="text-gray-600 text-sm">{r.excerpt}</p>
                          {r.type === 'article' && r.slug && (
                            <a className="text-primary text-sm font-semibold" href={`/centro-ayuda/${r.slug}`}>Abrir artículo →</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs internos pegados al hero */}
      <section className="px-6 -mt-7 md:-mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-full bg-white border border-[#e6edf5] rounded-xl px-4 py-2.5 text-sm text-gray-600 shadow-[0_8px_20px_rgba(13,42,77,0.06)]">
            <nav className="flex items-center gap-2 flex-wrap">
              <a href="/" className="hover:underline text-[var(--brand-text)]">Home</a>
              <span className="text-gray-400">•</span>
              <span className="text-[var(--brand-text)]">RIFATELA</span>
              <span className="text-gray-400">•</span>
              <span className="text-[var(--brand-text)]">Ayuda</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Categorías: estilo cajas limpias */}
      <section className="px-6 mt-12 help-categories-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-[-0.01em] leading-tight text-[var(--brand-text)] text-center mb-6" style={{fontFamily:'Rubik, ui-sans-serif, system-ui'}}>Categorías</h2>
          <div className="help-categories-grid">
            {categorias.map((c) => {
              return (
                <article
                  key={c.key}
                  className="help-category-card text-center hover:shadow-[0_12px_24px_rgba(13,42,77,0.12)] transition-shadow"
                >
                  <h3 className="text-[22px] md:text-[24px] font-extrabold tracking-[-0.01em] text-[var(--brand-text)] leading-snug" style={{fontFamily:'Rubik, ui-sans-serif, system-ui'}}>
                    {c.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  <a
                    href={`/centro-ayuda/categoria/${c.key}`}
                    className="btn-gradient mt-5"
                  >
                    Ver categoría
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs destacadas */}
      <section className="px-6 mt-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--brand-text)]">Preguntas frecuentes</h2>
          <div className="mt-4 divide-y divide-gray-100 bg-white border border-gray-100 rounded-2xl">
            {faqs.map((f, idx) => (
              <details key={idx} open={!!open[idx]} onToggle={() => toggle(idx)} className="group">
                <summary className="list-none cursor-pointer px-5 py-4 flex items-start justify-between gap-3">
                  <span className="font-semibold text-[var(--brand-text)]">{f.q}</span>
                  <span className="mt-1 text-gray-400 group-open:rotate-180 transition" aria-hidden>⌄</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="px-6 mt-14">
        <div className="max-w-3xl mx-auto text-center border border-blue-100 rounded-2xl p-8" style={{background: 'linear-gradient(180deg,#f0f6ff 0%, #ffffff 100%)'}}>
          <h3 className="text-xl font-bold text-[var(--brand-text)]">¿Aún necesitas ayuda?</h3>
          <p className="mt-2 text-gray-600">Nuestro equipo de soporte está disponible para ayudarte a configurar y operar tus rifas en Rifatela.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="https://rifatela.com" target="_blank" rel="noreferrer" className="btn-gradient">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 12l2-2 4 4 10-10 2 2-12 12-6-6z" />
              </svg>
              Sitio web
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-[#dfe8f3] text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-text)] hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Franja de navegación inferior (antes del footer global) */}
      <section className="mt-16">
        <div className="border-t" style={{ borderColor: '#e6edf5' }} />
        <div className="bg-[#f6f9fc]">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href="/preguntas-frecuentes" className="text-[var(--brand-text)] hover:underline inline-flex items-center gap-2">
                <IconHelp className="w-4 h-4" /> Preguntas Frecuentes
              </a>
              <a href="/demos" className="text-[var(--brand-text)] hover:underline inline-flex items-center gap-2">
                <IconTicket className="w-4 h-4" /> Nuevas Rifas
              </a>
              <a href="/admin" className="text-[var(--brand-text)] hover:underline inline-flex items-center gap-2">
                <IconGear className="w-4 h-4" /> Panel
              </a>
              <a href="/precios" className="text-[var(--brand-text)] hover:underline inline-flex items-center gap-2">
                <IconChart className="w-4 h-4" /> Funcionalidades
              </a>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
