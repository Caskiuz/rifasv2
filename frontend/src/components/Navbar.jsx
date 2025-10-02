import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchBtnRef = useRef(null);
  const searchPopoverRef = useRef(null);

  // Cerrar popover de búsqueda con click fuera o ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };
    const onClick = (e) => {
      if (isSearchOpen) {
        if (
          searchPopoverRef.current &&
          !searchPopoverRef.current.contains(e.target) &&
          searchBtnRef.current &&
          !searchBtnRef.current.contains(e.target)
        ) {
          setIsSearchOpen(false);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [isSearchOpen, isMenuOpen]);

  const scrollToPrecios = (e) => {
    e.preventDefault();
    const el = document.getElementById('precios');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="w-full flex items-center justify-between px-10 py-3 bg-white fixed top-0 left-0 z-40 border-b border-[#e6edf5] min-h-[66px]" style={{ zIndex: 2000 }}>
      {/* Logo */}
      <div className="flex items-center gap-6">
        <img src="/logo-rifatela.svg" alt="Rifatela Logo" className="h-14 md:h-16" style={{ maxHeight: '64px', height: '56px', width: 'auto' }} />
      </div>

      {/* Menú centro */}
      <ul className="flex items-center gap-[44px] text-[16px] list-none">
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
          <button className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Sistema <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></button>
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[220px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <span className="navbar-submenu-caret" aria-hidden="true" />
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/login">Iniciar Sesión</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/registro">Registrarse</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/verificador">Verificador de Tickets</Link></li>
            {user && <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/usuario">Panel Usuario</Link></li>}
            {user && <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/admin">Panel Admin</Link></li>}
          </ul>
        </li>

        {/* Beneficios */}
        <li className="nav-item relative m-0 p-0">
          <button className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Beneficios <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></button>
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[220px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <span className="navbar-submenu-caret" aria-hidden="true" />
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/testimonios">Testimonios</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
          </ul>
        </li>

        {/* Configuraciones */}
        <li className="nav-item relative m-0 p-0">
          <button className="text-[#3f5873] font-semibold transition flex items-center gap-x-1">Configuraciones <span className="ml-1 text-[11px] align-middle" style={{ color: '#8fa0b5' }}>▼</span></button>
          <ul className="nav-submenu absolute left-0 top-full pt-3 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[220px] py-2 list-none" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', zIndex: 3000 }}>
            <span className="navbar-submenu-caret" aria-hidden="true" />
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/contacto">Contacto</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/terminos">Términos y Condiciones</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/privacidad">Política de Privacidad</Link></li>
            <li className="m-0 p-0"><Link className="block w-full text-left px-5 py-2 hover:bg-primary-light text-primary" to="/reglas">Reglas</Link></li>
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

      {/* Iconos derecha (lupa y hamburguesa) */}
      <div className="flex items-center gap-6 ml-4 relative">
        {user && <button className="bg-red-500 text-white px-5 py-2 rounded font-semibold ml-2" onClick={() => { setUser(null); }}>Cerrar sesión</button>}

        {/* Lupa */}
        <button ref={searchBtnRef} onClick={() => setIsSearchOpen(v => !v)} className="inline-flex items-center justify-center text-[#3b3f7a] hover:text-[#2b3166] transition" title="Buscar" aria-label="Buscar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        {isSearchOpen && (
          <div ref={searchPopoverRef} className="absolute right-16 top-14 bg-white border border-gray-200 rounded-xl shadow-xl p-2 w-[260px] z-[5000]" style={{ boxShadow: '0 10px 28px rgba(17,24,39,0.14)' }}>
            <form onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }} className="flex items-center gap-2">
              <input autoFocus type="text" placeholder="Search" className="flex-1 px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-blue-200" />
              <button type="submit" className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            </form>
          </div>
        )}

        {/* Hamburguesa */}
        <button onClick={() => setIsMenuOpen(true)} className="inline-flex items-center justify-center text-[#3b3f7a] hover:text-[#2b3166] transition" title="Menú" aria-label="Menú">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[6000]">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />
            <aside className="absolute right-0 top-0 h-full w-[360px] max-w-[85vw] bg-white shadow-2xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <img src="/logo-rifatela.svg" alt="Rifatela Logo" className="h-10" />
                <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50" aria-label="Cerrar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-2">Sistema de Rifas Online</h3>
              <p className="text-gray-700 mb-4">Vende tickets por <strong>Internet</strong>, administra los <strong>boletos virtuales</strong>, realiza múltiples <strong>sorteos online</strong> en nuestra plataforma y más…</p>
              <div className="mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: '#4267B2' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.91h-2.3V22C18.34 21.2 22 17.08 22 12.06z" /></svg>
                </a>
              </div>
            </aside>
          </div>
        )}
      </div>
    </nav>
  );
}
