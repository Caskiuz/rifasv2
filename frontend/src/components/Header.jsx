import React, { useState } from "react";
import "../styles/header.css";

// Este header es un clon estructural del HTML de rifarito.com, adaptado a React. Los assets y rutas deben ser reemplazados por los de Rifatela.
const menu = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Sistema",
    submenu: [
      { label: "Página Web Online", href: "#sistema" },
      { label: "Panel de Administración", href: "#sistema" },
      { label: "Múltiples Configuraciones", href: "#sistema" },
      { label: "Verificador de Tickets", href: "#sistema" }
    ]
  },
  {
    label: "Beneficios",
    submenu: [
      { label: "Sin Comisiones", href: "#beneficios" },
      { label: "Fácil de Usar", href: "#beneficios" },
      { label: "Automatizado", href: "#beneficios" },
      { label: "Administrable", href: "#beneficios" }
    ]
  },
  {
    label: "Configuraciones",
    submenu: [
      { label: "Personalización", href: "#configuraciones" },
      { label: "Soporte", href: "#configuraciones" }
    ]
  },
  {
    label: "PRECIOS",
    href: "#precios",
    highlight: true
  }
];

const Header = () => {
  const [open, setOpen] = useState(null);
  return (
    <header className="rifarito-header">
      <div className="rifarito-header__container">
        <a href="/" className="rifarito-header__logo" style={{display: 'flex', alignItems: 'center', height: 61, width: 294, overflow: 'visible'}}>
          <img src="/logo-rifatela.svg" alt="Rifatela Logo" style={{height: 61, width: 294, display: 'block', objectFit: 'contain'}} />
        </a>
        <nav className="rifarito-header__nav">
          <ul>
            {menu.map((item, idx) => (
              <li
                key={item.label}
                style={{position:'relative'}}
                onMouseEnter={() => setOpen(idx)}
                onMouseLeave={() => setOpen(null)}
              >
                {item.submenu ? (
                  <>
                    <a href="#" className={item.highlight ? "rifarito-header__precios" : undefined}>{item.label} <span style={{fontSize:'0.8em'}}>▼</span></a>
                    {open === idx && (
                      <ul className="rifarito-header__dropdown">
                        {item.submenu.map((sub, j) => (
                          <li key={sub.label}><a href={sub.href}>{sub.label}</a></li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className={item.highlight ? "rifarito-header__precios" : undefined}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="rifarito-header__menu" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
