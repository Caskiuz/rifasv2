import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState({
    inicio: false,
    sistema: false,
    beneficios: false,
    configuraciones: false,
  });

  // Cerrar menú con ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  // Cerrar menú al cambiar de ruta (no por hash, para no cerrar por anclas/scroll)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToPrecios = (e) => {
    e.preventDefault();
    const el = document.getElementById('precios');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleMobileSection = (key) => setMobileSections(s => ({ ...s, [key]: !s[key] }));

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <nav className="w-full flex items-center justify-between px-4 md:px-10 py-3 bg-white fixed top-0 left-0 z-40 border-b border-[#e6edf5] min-h-[66px]" style={{ zIndex: 2000 }}>
      {/* Logo */}
      <div className="flex items-center gap-6">
        <Link to="/" aria-label="Ir al inicio">
          <img src="/logo-rifatela.svg" alt="Rifatela Logo" className="h-14 md:h-16" style={{ maxHeight: '64px', height: '56px', width: 'auto' }} />
        </Link>
      </div>

      {/* Menú centro */}
  <ul className="nav-menu-desktop items-center gap-[44px] text-[16px] list-none">
        {/* Inicio */}
        <li className="nav-item relative m-0 p-0">
          <Link to="/" className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Inicio <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></Link>
          {/* Submenú */}
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[260px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <div style={{ position: 'absolute', top: '-12px', left: 0, right: 0, height: '12px' }} aria-hidden="true" />
            <span className="navbar-submenu-caret" aria-hidden="true" />
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/acerca">Acerca de Rifatela</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/demos">Demos Disponibles</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/clientes">Nuestros Clientes</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/crear-pagina">Crear una Página</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/centro-ayuda">Centro de Ayuda</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800 text-base font-normal" to="/contacto">Contacto</Link></li>
          </ul>
        </li>

        {/* Sistema */}
        <li className="nav-item relative m-0 p-0">
          <Link to="/sistema" className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Sistema <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></Link>
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[260px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <span className="navbar-submenu-caret" aria-hidden="true" />
            {/* Anclas internas */}
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/sistema#web-online">Página Web Online</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/sistema#panel">Panel de Administración</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/sistema#configuraciones">Múltiples Configuraciones</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/sistema#verificador">Verificador de Tickets</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/sistema#plataforma">Plataforma (Resumen)</Link></li>
            {/* Atajos útiles */}
            <li className="m-0 p-0 border-t border-gray-100 mt-1 pt-1"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/login">Iniciar Sesión</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/registro">Registrarse</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/verificador">Verificador de Tickets</Link></li>
            {user && <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/usuario">Panel Usuario</Link></li>}
            {user && <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/admin">Panel Admin</Link></li>}
          </ul>
        </li>

        {/* Beneficios */}
        <li className="nav-item relative m-0 p-0">
          <Link to="/beneficios" className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Beneficios <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></Link>
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[260px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <span className="navbar-submenu-caret" aria-hidden="true" />
            {/* Anclas internas */}
            <li className="m-0 p-0"><Link to="/beneficios#sin-comisiones" className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800">Sin Comisiones</Link></li>
            <li className="m-0 p-0"><Link to="/beneficios#facil" className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800">Fácil de Usar</Link></li>
            <li className="m-0 p-0"><Link to="/beneficios#automatizado" className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800">Automatizado</Link></li>
            <li className="m-0 p-0"><Link to="/beneficios#administrable" className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800">Administrable</Link></li>
            {/* Atajos relacionados */}
            <li className="m-0 p-0 border-t border-gray-100 mt-1 pt-1"><Link to="/testimonios" className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary">Testimonios</Link></li>
            <li className="m-0 p-0"><Link to="/preguntas-frecuentes" className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary">Preguntas Frecuentes</Link></li>
          </ul>
        </li>

        {/* Configuraciones */}
        <li className="nav-item relative m-0 p-0">
          <Link to="/configuraciones" className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Configuraciones <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></Link>
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[260px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <span className="navbar-submenu-caret" aria-hidden="true" />
            {/* Enlaces a anclas internas de /configuraciones */}
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#dominio">Dominio</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#web">Página Web</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#seo">SEO</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#pagos">Pagos</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#panel">Panel de Administración</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#notificaciones">Notificaciones</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#vendedores">Vendedores</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#boletos">Boletos</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#promociones">Promociones</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#reportes">Reportes</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#seguridad">Seguridad</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-gray-800" to="/configuraciones#integraciones">Integraciones</Link></li>
            <li className="m-0 p-0 border-t border-gray-100 mt-1 pt-1"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/terminos">Términos y Condiciones</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-blue-50 text-primary" to="/privacidad">Política de Privacidad</Link></li>
          </ul>
        </li>

        {/* Precios (texto) */}
        <li className="m-0 p-0">
          {location.pathname === '/' ? (
            <a href="#precios" onClick={scrollToPrecios} className="text-[#0c274a] hover:text-[#1b3352] font-bold transition">Precios</a>
          ) : (
            <Link className="text-[#0c274a] hover:text-[#1b3352] font-bold transition" to="/#precios">Precios</Link>
          )}
        </li>

        {/* Botón pill PRECIOS */}
        <li className="m-0 p-0">
          {location.pathname === '/' ? (
            <a href="#precios" onClick={scrollToPrecios} className="inline-flex items-center justify-center h-[44px] px-6 rounded-full border border-[#dfe8f3] text-[#0c274a] font-extrabold uppercase tracking-[0.06em] text-[12px] hover:bg-[#0c274a] hover:text-white transition" style={{ boxShadow: '0 8px 18px rgba(17,24,39,0.06)' }}>PRECIOS</a>
          ) : (
            <Link className="inline-flex items-center justify-center h-[44px] px-6 rounded-full border border-[#dfe8f3] text-[#0c274a] font-extrabold uppercase tracking-[0.06em] text-[12px] hover:bg-[#0c274a] hover:text-white transition" to="/#precios" style={{ boxShadow: '0 8px 18px rgba(17,24,39,0.06)' }}>PRECIOS</Link>
          )}
        </li>
      </ul>

      {/* Iconos derecha (sin hamburguesa en navbar) */}
  <div className="flex items-center gap-4 md:gap-6 ml-2 md:ml-4 relative">
        {user && <button className="bg-red-500 text-white px-5 py-2 rounded font-semibold ml-2" onClick={() => { setUser(null); }}>Cerrar sesión</button>}
      </div>
    </nav>
    {/* Botón flotante centrado inferior (solo móvil) */}
    <button
      type="button"
      className={`floating-menu-btn ${isMenuOpen ? 'is-open' : ''}`}
      aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-haspopup="menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu-panel"
      onClick={() => setIsMenuOpen(v => !v)}
      style={{ pointerEvents: 'auto' }}
    >
      {isMenuOpen ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      ) : (
        <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      )}
    </button>

    {/* Overlay/panel móvil global */}
    {isMenuOpen && createPortal((
      <div className="menu-overlay" style={{position:'fixed', left:0, top:0, width:'100vw', height:'100dvh', pointerEvents:'auto', zIndex: 9999}}>
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.40)'}} onClick={() => setIsMenuOpen(false)} />
        <aside id="mobile-menu-panel" className="absolute right-0 top-0 h-full w-[360px] max-w-[85vw] bg-white shadow-2xl p-6 overflow-y-auto" role="menu" aria-label="Menú móvil" style={{transform:'translateX(0)'}}>
          <div className="flex items-center justify-between mb-4">
            <img src="/logo-rifatela.svg" alt="Rifatela Logo" className="h-10" />
            <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50" aria-label="Cerrar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          {/* Menú móvil con secciones colapsables */}
          <nav className="divide-y divide-gray-100">
            {/* Inicio */}
            <div className="py-2">
              <button className="w-full flex items-center justify-between py-2 text-left font-extrabold text-[#153e75]" onClick={() => toggleMobileSection('inicio')}>
                <span>Inicio</span>
                <span className={`transition-transform ${mobileSections.inicio ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileSections.inicio && (
                <ul className="pl-2 text-[#3f5873]">
                  <li><Link to="/acerca" onClick={closeMenu} className="block py-2">Acerca de Rifatela</Link></li>
                  <li><Link to="/preguntas-frecuentes" onClick={closeMenu} className="block py-2">Preguntas Frecuentes</Link></li>
                  <li><Link to="/demos" onClick={closeMenu} className="block py-2">Demos Disponibles</Link></li>
                  <li><Link to="/clientes" onClick={closeMenu} className="block py-2">Nuestros Clientes</Link></li>
                  <li><Link to="/crear-pagina" onClick={closeMenu} className="block py-2">Crear una Página</Link></li>
                  <li><Link to="/centro-ayuda" onClick={closeMenu} className="block py-2">Centro de Ayuda</Link></li>
                  <li><Link to="/contacto" onClick={closeMenu} className="block py-2">Contacto</Link></li>
                </ul>
              )}
            </div>
            {/* Sistema */}
            <div className="py-2">
              <button className="w-full flex items-center justify-between py-2 text-left font-extrabold text-[#153e75]" onClick={() => toggleMobileSection('sistema')}>
                <span>Sistema</span>
                <span className={`transition-transform ${mobileSections.sistema ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileSections.sistema && (
                <ul className="pl-2 text-[#3f5873]">
                  <li><Link to="/sistema#web-online" onClick={closeMenu} className="block py-2">Página Web Online</Link></li>
                  <li><Link to="/sistema#panel" onClick={closeMenu} className="block py-2">Panel de Administración</Link></li>
                  <li><Link to="/sistema#configuraciones" onClick={closeMenu} className="block py-2">Múltiples Configuraciones</Link></li>
                  <li><Link to="/sistema#verificador" onClick={closeMenu} className="block py-2">Verificador de Tickets</Link></li>
                  <li><Link to="/sistema#plataforma" onClick={closeMenu} className="block py-2">Plataforma (Resumen)</Link></li>
                  <li className="border-t border-gray-100 mt-1 pt-1"><Link to="/login" onClick={closeMenu} className="block py-2 text-primary">Iniciar Sesión</Link></li>
                  <li><Link to="/registro" onClick={closeMenu} className="block py-2 text-primary">Registrarse</Link></li>
                  <li><Link to="/verificador" onClick={closeMenu} className="block py-2 text-primary">Verificador de Tickets</Link></li>
                  {user && <li><Link to="/usuario" onClick={closeMenu} className="block py-2 text-primary">Panel Usuario</Link></li>}
                  {user && <li><Link to="/admin" onClick={closeMenu} className="block py-2 text-primary">Panel Admin</Link></li>}
                </ul>
              )}
            </div>
            {/* Beneficios */}
            <div className="py-2">
              <button className="w-full flex items-center justify-between py-2 text-left font-extrabold text-[#153e75]" onClick={() => toggleMobileSection('beneficios')}>
                <span>Beneficios</span>
                <span className={`transition-transform ${mobileSections.beneficios ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileSections.beneficios && (
                <ul className="pl-2 text-[#3f5873]">
                  <li><Link to="/beneficios#sin-comisiones" onClick={closeMenu} className="block py-2">Sin Comisiones</Link></li>
                  <li><Link to="/beneficios#facil" onClick={closeMenu} className="block py-2">Fácil de Usar</Link></li>
                  <li><Link to="/beneficios#automatizado" onClick={closeMenu} className="block py-2">Automatizado</Link></li>
                  <li><Link to="/beneficios#administrable" onClick={closeMenu} className="block py-2">Administrable</Link></li>
                  <li className="border-t border-gray-100 mt-1 pt-1"><Link to="/testimonios" onClick={closeMenu} className="block py-2 text-primary">Testimonios</Link></li>
                  <li><Link to="/preguntas-frecuentes" onClick={closeMenu} className="block py-2 text-primary">Preguntas Frecuentes</Link></li>
                </ul>
              )}
            </div>
            {/* Configuraciones */}
            <div className="py-2">
              <button className="w-full flex items-center justify-between py-2 text-left font-extrabold text-[#153e75]" onClick={() => toggleMobileSection('configuraciones')}>
                <span>Configuraciones</span>
                <span className={`transition-transform ${mobileSections.configuraciones ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileSections.configuraciones && (
                <ul className="pl-2 text-[#3f5873]">
                  <li><Link to="/configuraciones#dominio" onClick={closeMenu} className="block py-2">Dominio</Link></li>
                  <li><Link to="/configuraciones#web" onClick={closeMenu} className="block py-2">Página Web</Link></li>
                  <li><Link to="/configuraciones#seo" onClick={closeMenu} className="block py-2">SEO</Link></li>
                  <li><Link to="/configuraciones#pagos" onClick={closeMenu} className="block py-2">Pagos</Link></li>
                  <li><Link to="/configuraciones#panel" onClick={closeMenu} className="block py-2">Panel de Administración</Link></li>
                  <li><Link to="/configuraciones#notificaciones" onClick={closeMenu} className="block py-2">Notificaciones</Link></li>
                  <li><Link to="/configuraciones#vendedores" onClick={closeMenu} className="block py-2">Vendedores</Link></li>
                  <li><Link to="/configuraciones#boletos" onClick={closeMenu} className="block py-2">Boletos</Link></li>
                  <li><Link to="/configuraciones#promociones" onClick={closeMenu} className="block py-2">Promociones</Link></li>
                  <li><Link to="/configuraciones#reportes" onClick={closeMenu} className="block py-2">Reportes</Link></li>
                  <li><Link to="/configuraciones#seguridad" onClick={closeMenu} className="block py-2">Seguridad</Link></li>
                  <li><Link to="/configuraciones#integraciones" onClick={closeMenu} className="block py-2">Integraciones</Link></li>
                </ul>
              )}
            </div>
          </nav>
        </aside>
      </div>
    ), document.body)}
    </>
  );
}
