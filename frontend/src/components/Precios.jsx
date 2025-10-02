import React from "react";
import "../styles/precios.css";

const planes = [
  {
    plan: "Básico",
    precio: "Gratis",
    desc: "Crea y administra rifas ilimitadas sin costo. Perfecto para empezar y conocer Rifatela.",
    destacado: false,
    btn: "Empezar",
  },
  {
    plan: "Premium",
    precio: "$199 MXN/mes",
    desc: "Funciones avanzadas, atención prioritaria y más opciones de personalización.",
    destacado: true,
    btn: "Probar plan Premium",
  },
  {
    plan: "Empresarial",
    precio: "A consultar",
    desc: "Soluciones a medida para organizaciones y grandes sorteos. Contáctanos para una propuesta a tu medida.",
    destacado: false,
    btn: "Contactarnos",
  },
];

export default function Precios() {
  return (
    <section id="precios" style={{ background: "#e3f0ff", padding: "64px 0 48px 0" }}>
      <div className="rifarito-precios__container">
        <div className="rifarito-precios__title">Planes y Precios</div>
        <div className="rifarito-precios-cards">
          {planes.map((p, i) => (
            <div
              className={
                "rifarito-precio-card" +
                (p.destacado ? " rifarito-precio-card--destacado" : "")
              }
              key={i}
            >
              <div className="rifarito-precio-card__plan">{p.plan}</div>
              <div className="rifarito-precio-card__precio">{p.precio}</div>
              <div className="rifarito-precio-card__desc">{p.desc}</div>
              <button className="rifarito-precio-card__btn btn-gradient" style={{borderRadius:'9999px'}}>{p.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
