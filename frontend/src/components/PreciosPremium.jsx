import React from "react";
import "../styles/precios.css";

export default function PreciosPremium() {
  return (
    <section className="rifarito-premium-bg">
      <div className="rifarito-premium__container">
        <div className="rifarito-premium__left">
          <div className="rifarito-premium-label">PREMIUM DESDE</div>
          <div className="rifarito-premium-precio">
            <span className="rifarito-premium-precio-moneda">US$</span> <span className="rifarito-premium-precio-cantidad">34</span><span className="rifarito-premium-precio-centavos">.00</span> <span className="rifarito-premium-precio-unidad">/ Rifa</span>
          </div>
          <ul className="rifarito-premium-lista">
            <li>Características esenciales +</li>
            <li>Dominio Personalizado*</li>
            <li>Múltiples Administradores</li>
            <li>Pasarela de Pagos</li>
            <li>Módulo de Vendedores</li>
            <li>Módulo de Oportunidades</li>
            <li>Módulo de Descuentos</li>
            <li>Módulo de Promociones</li>
            <li>Soporte Técnico Plus</li>
          </ul>
          <div className="rifarito-premium-desc">
            <b>Para personas, influencers, marcas, negocios y empresas.</b> <a href="/beneficios" className="rifarito-premium-link">Ver más</a>
          </div>
          <div className="rifarito-premium-boton-row">
            <a href="/precios" className="rifarito-premium-boton">PREMIUM</a>
          </div>
        </div>
        <div className="rifarito-premium__right">
          <div className="rifarito-premium-title">
            La mejor <span className="rifarito-premium-title__underline">solución</span><br />para nuestros clientes
          </div>
          <div className="rifarito-premium-desc2">
            Precio incluye Landing Page + Panel de Administración + Configuración Inicial + Soporte Online al Cliente
          </div>
          <a href="/precios" className="rifarito-premium-link2">VER PRECIOS</a>
        </div>
      </div>
    </section>
  );
}
