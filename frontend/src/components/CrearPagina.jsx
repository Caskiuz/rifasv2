import React, { useMemo, useState } from "react";

const Field = ({ id, label, hint, children, required }) => (
  <div className="form-field">
    <label htmlFor={id} className="form-label">
      {label}
      {required ? <span className="req">*</span> : null}
    </label>
    {children}
    {hint ? <div className="form-hint">{hint}</div> : null}
  </div>
);

const CrearPagina = () => {
  const [domainChoice, setDomainChoice] = useState("no"); // "si" | "no"

  const today = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Por ahora solo validación básica del lado del cliente.
    const form = new FormData(e.currentTarget);
    // Aquí podrías enviar al backend: fetch('/api/solicitudes', { method: 'POST', body: form })
    // Dejamos un aviso amigable por ahora.
    alert("Datos enviados localmente (demo). Puedes conectar este formulario al backend cuando quieras.");
  };

  return (
    <div className="crear-page">
      {/* Hero */}
      <section className="crear-hero">
        <div className="crear-hero__layer" />
        <div className="crear-hero__content">
          <h1 className="crear-title">Solicitud para crear una Página</h1>
          <div className="crear-crumbs">
            <a href="/">Inicio</a>
            <span className="dot">·</span>
            <span>Crear Página</span>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <div className="crear-wrap">
        <form className="form-card" onSubmit={handleSubmit}>
          {/* Banner Premium / CTA pequeño */}
          <div className="form-note">
            <strong>PREMIUM</strong> (desde US$34)
          </div>

          {/* Sección: Datos del Organizador */}
          <h2 className="form-section-title">Datos del Organizador</h2>
          <div className="form-grid">
            <Field id="logo" label="Logo" hint="Imagen de tu marca o persona (PNG/JPG)" required>
              <input id="logo" name="logo" type="file" accept="image/*" className="form-input" required />
            </Field>
            <Field id="permiso" label="Permiso Legal" hint="Documento de autorización (PDF/imagen)">
              <input id="permiso" name="permiso" type="file" accept="image/*,.pdf" className="form-input" />
            </Field>

            <Field id="organizador" label="Organizador (Persona, Marca, Empresa)" required>
              <input id="organizador" name="organizador" type="text" className="form-input" placeholder="Ej. Rifatela" required />
            </Field>
            <Field id="pais" label="País" required>
              <input id="pais" name="pais" type="text" className="form-input" placeholder="Ej. México" required />
            </Field>

            <Field id="ubicacion" label="Ubicación (Estado / Provincia / Ciudad)" required>
              <input id="ubicacion" name="ubicacion" type="text" className="form-input" placeholder="Ej. Nuevo León, Monterrey" required />
            </Field>
            <Field id="responsable" label="Nombre del Responsable" required>
              <input id="responsable" name="responsable" type="text" className="form-input" placeholder="Nombre y apellido" required />
            </Field>

            <Field id="email" label="Email" required>
              <input id="email" name="email" type="email" className="form-input" placeholder="tucorreo@ejemplo.com" required />
            </Field>
            <Field id="celular" label="Celular" required>
              <input id="celular" name="celular" type="tel" className="form-input" placeholder="WhatsApp o teléfono" required />
            </Field>

            <Field id="documento" label="Documento de Identidad" hint="Foto/scan de DNI/INE/CI, etc." required>
              <input id="documento" name="documento" type="file" accept="image/*,.pdf" className="form-input" required />
            </Field>
            <div className="form-field">
              <div className="form-label">¿Tienes dominio propio?</div>
              <div className="form-radio-group">
                <label>
                  <input
                    type="radio"
                    name="tieneDominio"
                    value="si"
                    checked={domainChoice === "si"}
                    onChange={() => setDomainChoice("si")}
                  />
                  <span> Sí, ya tengo dominio</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="tieneDominio"
                    value="no"
                    checked={domainChoice === "no"}
                    onChange={() => setDomainChoice("no")}
                  />
                  <span> No, regístrenlo por mí</span>
                </label>
              </div>
            </div>

            <Field id="dominio" label="Dominio o Subdominio" required>
              <input
                id="dominio"
                name="dominio"
                type="text"
                className="form-input"
                placeholder={domainChoice === "si" ? "miweb.com" : "miweb.rifatela.com"}
                required
              />
            </Field>
            <Field id="redes" label="Redes Sociales y Sitio Web" hint="URLs de Facebook, Instagram… (1 por línea)">
              <textarea id="redes" name="redes" rows={4} className="form-textarea" placeholder="https://facebook.com/miMarca&#10;https://instagram.com/miMarca" />
            </Field>
          </div>

          {/* Sección: Datos de la Rifa */}
          <h2 className="form-section-title">Datos de la Rifa</h2>
          <div className="form-grid">
            <Field id="banner" label="Banner / Flyer" hint="Imagen del premio o flyer" required>
              <input id="banner" name="banner" type="file" accept="image/*" className="form-input" required />
            </Field>
            <Field id="tituloRifa" label="Título" required>
              <input id="tituloRifa" name="tituloRifa" type="text" className="form-input" placeholder="Ej. Camioneta 0km" required />
            </Field>

            <Field id="descripcion" label="Descripción" hint="Dinámica, detalles, condiciones" required>
              <textarea id="descripcion" name="descripcion" rows={4} className="form-textarea" placeholder="Describe la dinámica de tu rifa" required />
            </Field>
            <Field id="numeracion" label="Numeración" hint="Cantidad de boletos (ej. 1 a 10,000)" required>
              <input id="numeracion" name="numeracion" type="text" className="form-input" placeholder="1 - 10000" required />
            </Field>

            <Field id="precio" label="Precio Ticket" required>
              <input id="precio" name="precio" type="number" step="0.01" className="form-input" placeholder="Ej. 5.00" required />
            </Field>
            <Field id="moneda" label="Moneda" required>
              <input id="moneda" name="moneda" type="text" className="form-input" placeholder="Ej. MXN, USD" required />
            </Field>

            <Field id="fecha" label="Fecha del Sorteo" required>
              <input id="fecha" name="fecha" type="date" min={today} className="form-input" required />
            </Field>
            <Field id="hora" label="Hora" required>
              <input id="hora" name="hora" type="time" className="form-input" required />
            </Field>

            <Field id="pagos" label="Medios de Pago" hint="Banco / Titular / Datos (1 por línea)" required>
              <textarea id="pagos" name="pagos" rows={3} className="form-textarea" placeholder="Banco XYZ / Juan Pérez / Cuenta 123..." required />
            </Field>
            <Field id="notas" label="Notas" hint="Configuraciones o ajustes adicionales">
              <textarea id="notas" name="notas" rows={3} className="form-textarea" placeholder="Información adicional" />
            </Field>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Enviar datos</button>
            <a className="btn-secondary" href="mailto:contacto@rifatela.com?subject=Solicitud%20de%20Rifa">Enviar por Email</a>
          </div>
        </form>
      </div>

      {/* Footer global se monta desde App.jsx */}
    </div>
  );
};

export default CrearPagina;
