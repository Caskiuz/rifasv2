import React, { useMemo } from "react";
import "../styles/mapa.css";

// Conversión lat/lon -> porcentaje (asumiendo proyección equirectangular)
const toPercent = (lat, lon, calibrate) => {
  const { offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1 } = calibrate || {};
  // Normalizado 0..100
  const x = ((lon + 180) / 360) * 100;      // 0% en -180°, 100% en +180°
  const y = ((90 - lat) / 180) * 100;       // 0% en +90°, 100% en -90°
  return {
    left: `${x * scaleX + offsetX}%`,
    top: `${y * scaleY + offsetY}%`,
  };
};

export default function MapaPaises() {
  // Si el mapa tuviera algo de recorte/márgenes, podemos ajustar aquí.
  // Por ahora usamos 0 (sin calibración) y queda listo para pequeños ajustes si lo pides.
  const calib = useMemo(() => ({ offsetX: 0, offsetY: 0, scaleX: 1, scaleY: 1 }), []);

  const puntos = [
    {
      nombre: "México",
      lat: 19.4326, // Ciudad de México
      lon: -99.1332,
    },
    {
      nombre: "Brasil",
      lat: -23.5505, // São Paulo
      lon: -46.6333,
    },
    {
      nombre: "Argentina",
      lat: -34.6037, // Buenos Aires
      lon: -58.3816,
    },
    {
      nombre: "España",
      lat: 40.4168, // Madrid
      lon: -3.7038,
    },
  ];

  return (
    <section className="rifarito-mapa-bg">
      <div
        className="rifarito-mapa__container"
        style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto" }}
      >
        <img
          src="/assets/hotspot_mapcc.png"
          alt="Mapa de países Rifatela"
          className="rifarito-mapa-img"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {puntos.map((p) => {
          const pos = toPercent(p.lat, p.lon, calib);
          return (
            <div
              key={p.nombre}
              className="rifarito-mapa-dot"
              aria-label={p.nombre}
              style={{ position: "absolute", ...pos, transform: "translate(-50%,-50%)" }}
            >
              <div className="rifarito-mapa-dot-outer" />
              <div className="rifarito-mapa-dot-inner" />
              <span className="rifarito-mapa-dot-tooltip">{p.nombre}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
