import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import PanelUsuario from './components/PanelUsuario';
import PanelAdmin from './components/PanelAdmin';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Contacto from './components/Contacto';
import TerminosCondiciones from './components/TerminosCondiciones';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import Testimonios from './components/Testimonios';
import Precios from './components/Precios';
import Reglas from './components/Reglas';
import VerificadorTicket from './components/VerificadorTicket';
import Acerca from './components/Acerca';
import DemosDisponibles from './components/DemosDisponibles';
import ClientesDestacados from './components/ClientesDestacados';
import CrearPagina from './components/CrearPagina';
import CentroAyuda from './components/CentroAyuda';
import ArticuloAyuda from './components/ArticuloAyuda';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import SuscripcionFooter from './components/SuscripcionFooter';

function App() {
  const [user, setUser] = useState(null);

  // Simulación de login (en producción, usar contexto y JWT)
  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Navbar user={user} setUser={setUser} />
        {/* Página principal (landing) */}
        <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        {/* Otras páginas por ruta */}
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/demos" element={<DemosDisponibles />} />
          <Route path="/clientes" element={<ClientesDestacados />} />
          <Route path="/crear-pagina" element={<CrearPagina />} />
          <Route path="/centro-ayuda" element={<CentroAyuda />} />
          <Route path="/centro-ayuda/:slug" element={<ArticuloAyuda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/usuario" element={user ? <PanelUsuario user={user} /> : <Login onLogin={setUser} />} />
          <Route path="/admin" element={user ? <PanelAdmin /> : <Login onLogin={setUser} />} />
          <Route path="/faq" element={<PreguntasFrecuentes />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/reglas" element={<Reglas />} />
          <Route path="/verificador" element={<VerificadorTicket />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <SuscripcionFooter />
      </div>
    </Router>
  );
}

export default App;
