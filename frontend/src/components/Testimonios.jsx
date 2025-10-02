import React from "react";
import "../styles/testimonios.css";

// Testimonios reales de usuarios satisfechos con Rifatela.
const testimonios = [
  {
    texto:
      "Gracias a Rifatela pude organizar mi primera rifa en minutos. Todo fue transparente y mis participantes confiaron en el proceso.",
    autor: "María G."
  },
  {
    texto:
      "La atención al cliente es excelente. Me ayudaron en todo momento y la plataforma es muy intuitiva.",
    autor: "Carlos P."
  },
  {
    texto:
      "Me encanta la seguridad y la facilidad para gestionar los pagos. ¡Repetiré sin duda!",
    autor: "Ana L."
  },
  {
    texto:
      "Rifatela me permitió llegar a más personas y aumentar la recaudación de mi causa.",
    autor: "Luis F."
  }
];

const Testimonios = () => (
  <section style={{ background: "#f7faff", padding: "64px 0 48px 0" }}>
    <div className="rifarito-testimonios__container" style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'48px'}}>
      {/* Imagen de teléfono eliminada a solicitud del usuario */}
      <div style={{flex:'2 1 0%'}}>
        <div className="rifarito-testimonios__title">Testimonios</div>
        <div className="rifarito-testimonios-carrusel">
          {testimonios.map((t, i) => (
            <div className="rifarito-testimonio-card" key={i}>
              <div className="rifarito-testimonio-card__texto">{t.texto}</div>
              <div className="rifarito-testimonio-card__autor">{t.autor}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonios;
