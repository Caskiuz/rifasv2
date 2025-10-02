import React from "react";
import "../styles/footer.css";

export default function SuscripcionFooter() {
  return (
    <footer className="rifarito-footer-extendido">
        <div className="rifarito-footer-extendido__container">
          <div className="rifarito-footer-extendido__col logo">
            <div className="rifarito-footer-extendido__logo">Rifatela</div>
            <div className="rifarito-footer-extendido__desc">Sistema de Rifas Online</div>
            <a href="#" className="rifarito-footer-extendido__social"><svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M22 16.1c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.9 2.1 5.3 4.9 5.9v-4.2h-1.5v-1.7h1.5v-1.3c0-1.5.9-2.3 2.2-2.3.6 0 1.2.1 1.2.1v1.4h-.7c-.7 0-.9.4-.9.9v1.1h1.6l-.3 1.7h-1.3v4.2c2.8-.6 4.9-3 4.9-5.9z" fill="#153e75"/></svg></a>
          </div>
          <div className="rifarito-footer-extendido__col">
            <div className="rifarito-footer-extendido__col-title">PLATAFORMA</div>
            <a href="#" className="rifarito-footer-extendido__link">Preguntas Frecuentes</a>
            <a href="#" className="rifarito-footer-extendido__link">Solicitud para crear una Página</a>
            <a href="#" className="rifarito-footer-extendido__link">Nuestros Clientes</a>
            <a href="#" className="rifarito-footer-extendido__link">Demos Disponibles</a>
            <a href="#" className="rifarito-footer-extendido__link">Comentarios</a>
            <a href="#" className="rifarito-footer-extendido__link">Centro de Ayuda</a>
          </div>
          <div className="rifarito-footer-extendido__col">
            <div className="rifarito-footer-extendido__col-title">SISTEMA</div>
            <a href="#" className="rifarito-footer-extendido__link">Sistema</a>
            <a href="#" className="rifarito-footer-extendido__link">Beneficios</a>
            <a href="#" className="rifarito-footer-extendido__link">Configuraciones</a>
            <a href="#" className="rifarito-footer-extendido__link">Precios</a>
            <a href="#" className="rifarito-footer-extendido__link">Premium</a>
          </div>
          <div className="rifarito-footer-extendido__col">
            <div className="rifarito-footer-extendido__col-title">EMPRESA</div>
            <a href="#" className="rifarito-footer-extendido__link">Acerca de Rifatela</a>
            <a href="#" className="rifarito-footer-extendido__link">Contacto</a>
            <a href="#" className="rifarito-footer-extendido__link">Términos y Condiciones</a>
            <a href="#" className="rifarito-footer-extendido__link">Política de Reembolso</a>
            <a href="#" className="rifarito-footer-extendido__link">Política de Privacidad</a>
            <a href="#" className="rifarito-footer-extendido__link">Renuncia de Responsabilidad</a>
            <a href="#" className="rifarito-footer-extendido__link">Reportar Página</a>
          </div>
        </div>
        <div className="rifarito-footer-extendido__copy">
          © {new Date().getFullYear()} Rifatela™. Todos los derechos reservados.
        </div>
    </footer>
  );
}
