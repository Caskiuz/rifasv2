import React from "react";
import "../styles/precios.css";

const planes = [
  {
    plan: "Básico",
    precio: "Gratis",
    desc: "Crea y gestiona rifas ilimitadas sin costo. Ideal para comenzar y probar Rifatela.",
    destacado: false,
    btn: "Comenzar",
  },
  {
    plan: "Pro",
    precio: "$199 MXN/mes",
    desc: "Funciones avanzadas, soporte prioritario y mayor personalización para tus rifas.",
    destacado: true,
    btn: "Probar Pro",
  },
  {
    plan: "Empresas",
    precio: "A consultar",
    desc: "Soluciones a medida para organizaciones y grandes sorteos. Contáctanos para una propuesta personalizada.",
    destacado: false,
    btn: "Contactar",
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
              <button className="rifarito-precio-card__btn">{p.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
