import React, { useState } from 'react';

export default function VerificadorTicket() {
  const [codigo, setCodigo] = useState('');
  const [resultado, setResultado] = useState(null);
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setResultado(null);
    if (!codigo) {
      setMsg('Boleto no encontrado o código inválido');
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/boletos/${codigo}`);
      if (res.ok) {
        const data = await res.json();
        setResultado(data);
      } else {
        setMsg('Boleto no encontrado o código inválido');
      }
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Verificador de Tickets</h2>
      <form className="mb-4" onSubmit={handleSubmit}>
  <input className="w-full p-2 border rounded mb-2" value={codigo} onChange={e => setCodigo(e.target.value)} placeholder="Código de boleto" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full" type="submit">Verificar</button>
      </form>
      {msg && <div className="text-red-600 mb-2">{msg}</div>}
      {resultado && (
        <div className="bg-gray-100 p-4 rounded">
          <div><b>Número:</b> {resultado.numero}</div>
          <div><b>Estado:</b> {resultado.estado}</div>
          <div><b>Rifa:</b> {resultado.rifa?.nombre || resultado.rifa}</div>
          <div><b>Usuario:</b> {resultado.usuario?.email || resultado.usuario}</div>
        </div>
      )}
    </div>
  );
}
