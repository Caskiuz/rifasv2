import React from "react";

const IconCheck = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#153e75" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);
const IconBolt = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#153e75" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
);
const IconGear = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#153e75" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 3.3l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .66.38 1.26 1 1.51.59.25 1.27.11 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.44.55-.58 1.23-.33 1.82.25.62.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.26.38-1.51 1Z" /></svg>
);

export default function BeneficiosPage() {
  return (
    <main className="bg-white text-[#0c274a]">
      <section className="landing-hero landing-hero__layer">
        <div className="landing-hero__content">
          <h1 className="landing-title">Beneficios</h1>
          <div className="landing-crumbs">
            <a href="/">Inicio</a>
            <span className="dot">•</span>
            <span>RIFATELA</span>
            <span className="dot">•</span>
            <span>Beneficios</span>
          </div>
        </div>
      </section>

      {/* Bloque 1: Beneficios principales */}
      <section className="landing-wrap">
        <div className="landing-grid">
          <article id="sin-comisiones" className="landing-card anchor-target">
            <div className="landing-thumb" aria-hidden="true">
              <div className="inline-flex items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white border border-[#e6edf5]" style={{ boxShadow: '0 6px 18px rgba(31,38,135,0.10)' }}>
                <IconCheck />
              </div>
            </div>
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Sin comisiones</h3>
              <p className="landing-desc">Los cobros llegan directamente a tus cuentas configuradas. Tú administras el flujo y los retiros.</p>
            </div>
          </article>

          <article id="facil" className="landing-card anchor-target">
            <div className="landing-thumb" aria-hidden="true">
              <div className="inline-flex items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white border border-[#e6edf5]" style={{ boxShadow: '0 6px 18px rgba(31,38,135,0.10)' }}>
                <IconCheck />
              </div>
            </div>
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Fácil de usar</h3>
              <p className="landing-desc">Interfaz moderna y sencilla para tu Landing y Panel. En minutos podrás lanzar tu primera rifa.</p>
            </div>
          </article>

          <article id="automatizado" className="landing-card anchor-target">
            <div className="landing-thumb" aria-hidden="true">
              <div className="inline-flex items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white border border-[#e6edf5]" style={{ boxShadow: '0 6px 18px rgba(31,38,135,0.10)' }}>
                <IconBolt />
              </div>
            </div>
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Automatizado</h3>
              <p className="landing-desc">Tus clientes eligen números, cargan su comprobante y reciben confirmación. Tú apruebas y mantienes el control.</p>
            </div>
          </article>

          <article id="administrable" className="landing-card anchor-target">
            <div className="landing-thumb" aria-hidden="true">
              <div className="inline-flex items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white border border-[#e6edf5]" style={{ boxShadow: '0 6px 18px rgba(31,38,135,0.10)' }}>
                <IconGear />
              </div>
            </div>
            <div className="landing-body">
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75] uppercase tracking-wide">Administrable</h3>
              <p className="landing-desc">Gestiona boletos, ventas, participantes y promociones con reportes y métricas esenciales.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Bloque 2: ¿Por qué Rifatela? */}
      <section className="landing-wrap">
        <h2 className="text-[22px] md:text-[24px] font-extrabold text-[#153e75] mb-3">¿Por qué Rifatela?</h2>
        <div className="landing-grid">
          {[{
            t: 'Diseño profesional', d: 'Componentes actuales, tipografías legibles y enfoque en conversión.'
          }, { t: 'Escalable', d: 'Acompañamos tu crecimiento: promociones, vendedores y múltiples rifas.' }, { t: 'Soporte', d: 'Acompañamiento y guía para que tu operación nunca se detenga.' }].map(({t, d}) => (
            <article key={t} className="landing-card">
              <div className="landing-thumb" aria-hidden="true">
                <div className="inline-flex items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white border border-[#e6edf5]" style={{ boxShadow: '0 6px 18px rgba(31,38,135,0.10)' }}>
                  <IconCheck />
                </div>
              </div>
              <div className="landing-body">
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75]">{t}</h3>
                <p className="landing-desc">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="landing-wrap">
        <div className="landing-card" style={{ textAlign: 'center', padding: 20 }}>
          <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#153e75]">Empieza hoy con Rifatela</h3>
          <p className="landing-desc">Configura tu primera rifa en minutos y potencia tus ventas con nuestra plataforma.</p>
          <div className="landing-actions" style={{ justifyContent: 'center' }}>
            <a href="/registro" className="btn-gradient">Crear cuenta</a>
            <a href="/demos" className="btn-gradient">Ver demos</a>
          </div>
        </div>
      </section>
    </main>
  );
}
