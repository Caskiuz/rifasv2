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
            Sistema de <br />RifasOnline
            <Underline />
          </h1>
          <div className="rifarito-hero__desc">
            Vende tickets por Internet en nuestra plataforma digital de <b>sorteos online</b> con números de la lotería y <b>boletos virtuales</b>.
          </div>
          <div className="rifarito-hero__actions">
            <a href="/landing/" className="btn-gradient">VER DEMOS</a>
            <a href="/premium/#pricing" className="btn-gradient">VER PRECIOS</a>
          </div>
        </div>
      </div>
    </section>
  );
}
