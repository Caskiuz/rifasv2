import React from 'react';

export default function Acerca() {
  return (
    <main className="pt-[66px] bg-white text-[#0c274a]">
      {/* Hero estilo rifarito */}
      <section className="acerca-hero acerca-hero__bg">
        <div className="acerca-hero__content">
          <h1 className="acerca-hero__title">Acerca de RIFATELA</h1>
          <div className="acerca-crumbs">
            <a href="/">Home</a>
            <span className="dot">•</span>
            <span>RIFATELA</span>
            <span className="dot">•</span>
            <span>Acerca de RIFATELA</span>
          </div>
        </div>
      </section>

      {/* Tarjetas superpuestas */}
      <section className="acerca-cards">
        <div className="acerca-cards__wrap">
          {[
            { t: 'Simplicidad e Innovación', d: 'Diseñado por expertos en experiencia de usuario y con lo último en tecnología.' },
            { t: 'Mejora Constante', d: 'Gracias al feedback continuo de los usuarios se ha ido puliendo constantemente.' },
            { t: 'Respeto y Compromiso', d: 'Atención técnica online, resolvemos dudas y desarrollamos a medida.' },
          ].map((c) => (
            <article key={c.t} className="acerca-card">
              <div className="acerca-card__icon" aria-hidden>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/>
                </svg>
              </div>
              <div className="acerca-card__title">{c.t}</div>
              <div className="acerca-card__desc">{c.d}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Qué es Rifatela */}
      <section className="py-16 md:py-20 border-t border-[#e6edf5] bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">¿Qué es Rifatela?</h2>
          <p className="mt-4 text-[18px] leading-relaxed text-[#3f5873]">
            Es una suite completa para planear rifas digitales: desde la landing y catálogo de boletos, hasta el cobro y la
            administración. Centraliza ventas, reportes y comunicación con tus participantes.
          </p>
        </div>
      </section>

      {/* Beneficios clave (carrusel horizontal profesional) */}
      <section className="py-16 md:py-20 bg-[#f7fbff]">
        <div className="max-w-[1100px] mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">Beneficios clave</h3>
          <div className="acerca-beneficios__scroller">
            {[
              { t: 'Vende en minutos', d: 'Publica tu rifa y empieza a vender boletos online sin configuraciones complicadas.' },
              { t: 'Pagos confiables', d: 'Integramos pasarelas seguras y monitoreo constante para tu tranquilidad.' },
              { t: 'Panel claro', d: 'Gestiona rifas, pedidos y sorteos desde un panel intuitivo y rápido.' },
              { t: 'Automatización', d: 'Ahorra tiempo con procesos automatizados para pedidos y notificaciones.' },
              { t: 'Escalable', d: 'Funciona bien con una rifa o muchas a la vez, según tu crecimiento.' },
            ].map((b) => (
              <div key={b.t} className="acerca-beneficio-card">
                <h4>{b.t}</h4>
                <p>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">Cómo funciona</h3>
          <ol className="mt-6 grid md:grid-cols-3 gap-6 list-decimal list-inside text-[#3f5873]">
            <li className="bg-[#f7fbff] rounded-2xl p-6 border border-[#e6edf5]">Crea tu rifa con imágenes, premios y precio de boletos.</li>
            <li className="bg-[#f7fbff] rounded-2xl p-6 border border-[#e6edf5]">Activa pagos online y recibe pedidos automáticamente.</li>
            <li className="bg-[#f7fbff] rounded-2xl p-6 border border-[#e6edf5]">Realiza sorteos online y publica resultados transparentes.</li>
          </ol>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-16 md:py-20 bg-white border-t border-[#e6edf5]">
        <div className="max-w-[1100px] mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">Características principales</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              'Catálogo de boletos virtuales',
              'Control de stock y reportes',
              'Sorteos múltiples y verificador',
              'Notificaciones por correo',
              'Plantillas y bloques personalizables',
              'SEO básico y rendimiento optimizado',
            ].map((c) => (
              <div key={c} className="rounded-2xl p-6 border border-[#e6edf5] bg-[#f7fbff] text-[#1a5d87] font-semibold shadow-[0_8px_32px_rgba(31,38,135,0.06)]">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios resumen - REMOVIDO */}

      {/* CTA final */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e6edf5]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">¿Listo para lanzar tu rifa con Rifatela?</h3>
          <p className="mt-3 text-[#3f5873]">Crea tu cuenta y publica tu primera rifa en minutos.</p>
          <a href="/#precios" className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-[#dfe8f3] text-[#0c274a] font-extrabold uppercase tracking-[0.06em] text-[12px] hover:bg-[#0c274a] hover:text-white transition mt-6">Ver planes y precios</a>
        </div>
      </section>

  {/* Footer global se monta desde App.jsx */}
    </main>
  );
}
