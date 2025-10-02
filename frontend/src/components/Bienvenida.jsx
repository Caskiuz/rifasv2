import React from "react";
import "../index.css";

export default function Bienvenida() {
  return (
    <section style={{ background: "#e3f0ff", padding: "0 0 64px 0" }}>
      <div className="rifarito-bienvenida">
        <div className="rifarito-bienvenida__title">
          ¡Bienvenido a Rifatela!
        </div>
        <div className="rifarito-bienvenida__desc">
          La plataforma más sencilla, confiable y clara para crear y administrar
          rifas en línea. Súmate a miles de usuarios que ya confían en nosotros
          para organizar sus sorteos de forma profesional y sin enredos.
        </div>
      </div>
    </section>
  );
}
