import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:12}}>
      <h1 style={{fontFamily:'Rubik, Arial, sans-serif', fontSize:'2rem', color:'#153e75'}}>Página no encontrada</h1>
      <p style={{fontFamily:'Nunito, Arial, sans-serif', color:'#1a5d87'}}>La ruta que abriste no existe en esta demo.</p>
      <Link to="/" style={{color:'#0ea5e9', fontWeight:700}}>Volver al inicio</Link>
    </div>
  );
}
