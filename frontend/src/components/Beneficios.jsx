import React from "react";
import { Link } from "react-router-dom";
import "../styles/beneficios.css";

export default function BeneficiosBienvenida() {
  return (
  <section className="rifarito-beneficios-bienvenida-bg" id="beneficios">
    <div className="rifarito-beneficios-bienvenida__container">
        {/* Cuadros de beneficios (lado izquierdo) */}
  <div className="rifarito-beneficios-grid">
          <Link to="/beneficios#sin-comisiones" id="sin-comisiones" className="rifarito-beneficio-card rifarito-beneficio-card--azul anchor-target" style={{textDecoration:'none'}}>
            <div className="rifarito-beneficio-card__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#153e75" />
                <path
                  d="M24 14v20M14 24h20"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="rifarito-beneficio-card__title">Sin Comisiones</div>
            <div className="rifarito-beneficio-card__desc">
              Todos los pagos van directo hacia sus cuentas...
            </div>
          </Link>
          <Link to="/beneficios#facil" id="facil" className="rifarito-beneficio-card anchor-target" style={{textDecoration:'none'}}>
            <div className="rifarito-beneficio-card__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#E3F0FF" />
                <path
                  d="M16 24l6 6 10-10"
                  stroke="#153e75"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="rifarito-beneficio-card__title">Fácil de Usar</div>
            <div className="rifarito-beneficio-card__desc">
              Landing Page y Panel con una interfaz amigable...
            </div>
          </Link>
          <Link to="/beneficios#automatizado" id="automatizado" className="rifarito-beneficio-card anchor-target" style={{textDecoration:'none'}}>
            <div className="rifarito-beneficio-card__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#E3F0FF" />
                <path
                  d="M24 14v20M14 24h20"
                  stroke="#153e75"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="rifarito-beneficio-card__title">Automatizado</div>
            <div className="rifarito-beneficio-card__desc">
              Tus clientes elegirán sus números y enviarán su voucher...
            </div>
          </Link>
          <Link to="/beneficios#administrable" id="administrable" className="rifarito-beneficio-card rifarito-beneficio-card--azul anchor-target" style={{textDecoration:'none'}}>
            <div className="rifarito-beneficio-card__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#153e75" />
                <path
                  d="M16 24l6 6 10-10"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="rifarito-beneficio-card__title">Administrable</div>
            <div className="rifarito-beneficio-card__desc">
              Puedes gestionar los tickets y ver las estadísticas...
            </div>
          </Link>
        </div>
        {/* Bienvenida (lado derecho) y Apple Watch */}
  <div>
          <div className="rifarito-bienvenida-box">
            <div className="rifarito-bienvenida-label">BIENVENIDO</div>
            <div className="rifarito-bienvenida-title">
              Acelera la venta de tus{" "}
              <span className="rifarito-bienvenida-title__underline">Tickets!</span>
            </div>
            <div className="rifarito-bienvenida-desc">
              Vende más rápido tus boletos por Internet gracias a estos beneficios.
              <br />
              <br />
              Diseñado y programado por expertos. Puede probar el funcionamiento aquí:
            </div>
          </div>
          {/* Imagen eliminada a solicitud del usuario */}
        </div>
      </div>
    </section>
  );
}
