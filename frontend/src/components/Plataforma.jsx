import React from "react";
import "../styles/plataforma.css";

export default function Plataforma() {
  return (
    <section className="rifarito-plataforma-bg" id="plataforma">
      <div className="rifarito-plataforma__container">
        <div className="rifarito-plataforma__left">
          <div className="rifarito-plataforma-label">
            FUNCIONA EN TU PAÍS Y EN TU MONEDA
          </div>
          <div className="rifarito-plataforma-title">
            Somos la mejor{" "}
            <span className="rifarito-plataforma-title__underline">
              Plataforma
            </span>
          </div>
          <div className="rifarito-plataforma-desc">
            Clientes satisfechos en{" "}
            <b>
              México, Colombia, Chile, Perú, Argentina, Ecuador, Bolivia, Uruguay,
              Paraguay, Guatemala, Panamá, Costa Rica, Venezuela, España...
            </b>
          </div>
        </div>
        {/* Imagen de demo eliminada a solicitud del usuario */}
      </div>
    </section>
  );
}
