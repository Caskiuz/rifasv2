import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/helpArticles.json';

const TITULOS = {
  'preguntas-frecuentes': 'Preguntas frecuentes',
  'nuevas-rifas': 'Nuevas rifas',
  'funcionalidades': 'Funcionalidades',
  'panel-de-administracion': 'Panel de administración',
  'pasarelas-pagos': 'Pasarelas de pagos',
  'dominios': 'Dominios',
  'primeros-pasos': 'Primeros pasos',
  'pagos': 'Pagos y cobros',
  'rifas': 'Rifas y boletos',
  'seguridad': 'Seguridad',
  'reportes': 'Reportes',
  'integraciones': 'Integraciones'
};

export default function CategoriaAyuda() {
  const { key } = useParams();
  const lista = useMemo(() => articles.filter(a => a.category === key), [key]);
  const titulo = TITULOS[key] || 'Categoría';

  return (
    <main className="bg-white">
      <section className="landing-hero landing-hero__layer">
        <div className="landing-hero__content">
          <h1 className="landing-title">{titulo}</h1>
          <div className="landing-crumbs">
            <a href="/">Inicio</a>
            <span className="dot">•</span>
            <a href="/centro-ayuda">Ayuda</a>
            <span className="dot">•</span>
            <span>{titulo}</span>
          </div>
        </div>
      </section>
      <section className="landing-wrap help-categories-section" style={{paddingTop: '32px'}}>
        {lista.length === 0 ? (
          <div className="text-center text-[#3f5873]">No hay artículos aún en esta categoría.</div>
        ) : (
          <div className="help-categories-grid">
            {lista.map(a => (
              <article key={a.slug} className="help-category-card">
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#153e75]">{a.title}</h3>
                <p className="mt-1 text-[14px] text-[#3f5873]">{a.excerpt}</p>
                <div className="mt-3">
                  <Link className="btn-gradient" to={`/centro-ayuda/${a.slug}`}>
                    Leer
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
