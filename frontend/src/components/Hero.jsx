import React from 'react';
import '../styles/hero.css';

const Underline = () => (
  <svg className="rifarito-hero__title-underline" viewBox="0 0 360 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 18C60 10 300 4 358 12" stroke="#7ec3f7" strokeWidth="6" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Hero() {
  return (
    <section className="rifarito-hero">
      <div className="rifarito-hero__container">
        <div className="rifarito-hero__left">
          <h1 className="rifarito-hero__title">
            Plataforma de <br />Rifas en Línea
            <Underline />
          </h1>
          <div className="rifarito-hero__desc">
            Vende boletos en línea con nuestra plataforma para <b>sorteos</b>: números de lotería y <b>tickets digitales</b>.
          </div>
          <div className="rifarito-hero__actions">
            <a href="/landing/" className="btn-gradient">Explorar demos</a>
            <a href="/premium/#pricing" className="btn-gradient">Ver tarifas</a>
          </div>
        </div>
      </div>
    </section>
  );
}
