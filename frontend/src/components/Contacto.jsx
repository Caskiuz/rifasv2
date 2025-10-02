import React from 'react';

export default function Contacto() {
  return (
    <main className="bg-white text-[#0c274a]">
      <section className="landing-hero landing-hero__layer">
        <div className="landing-hero__content">
          <h1 className="landing-title">Contacto</h1>
          <div className="landing-crumbs">
            <a href="/">Inicio</a>
            <span className="dot">•</span>
            <span>RIFATELA</span>
            <span className="dot">•</span>
            <span>Contacto</span>
          </div>
        </div>
      </section>

      <section className="landing-wrap">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl border border-[#e6edf5] shadow-[0_8px_24px_rgba(31,38,135,0.08)]">
          <h2 className="text-xl font-extrabold text-[#153e75] mb-2">Escríbenos</h2>
          <p className="mb-4 text-[#3f5873]">¿Tienes dudas o necesitas ayuda? Escríbenos y te responderemos lo antes posible.</p>
          <form className="space-y-4">
            <input className="w-full p-3 border border-[#dfe8f3] rounded-lg" type="text" placeholder="Nombre" required />
            <input className="w-full p-3 border border-[#dfe8f3] rounded-lg" type="email" placeholder="Correo electrónico" required />
            <textarea className="w-full p-3 border border-[#dfe8f3] rounded-lg" placeholder="Mensaje" rows="4" required></textarea>
            <button className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-[#dfe8f3] text-[#0c274a] font-extrabold uppercase tracking-[0.06em] text-[12px] hover:bg-[#0c274a] hover:text-white transition" type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </main>
  );
}
