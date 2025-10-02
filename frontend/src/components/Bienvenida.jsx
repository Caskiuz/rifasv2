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
          La plataforma más fácil, segura y transparente para crear y gestionar
          rifas en línea. Únete a miles de usuarios que ya confían en nosotros
          para organizar sus sorteos de manera profesional y sin complicaciones.
        </div>
      </div>
    </section>
  );
}
