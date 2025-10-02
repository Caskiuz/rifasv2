import React, { useState, useEffect } from 'react';

export default function AdminRifas() {
  const [rifas, setRifas] = useState([]);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ nombre: '', descripcion: '', precioBoleto: '', totalBoletos: '', fechaSorteo: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/rifas')
      .then(res => res.json())
      .then(setRifas)
      .catch(() => setMsg('Error al cargar rifas'));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/rifas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg('Rifa creada');
        setForm({ nombre: '', descripcion: '', precioBoleto: '', totalBoletos: '', fechaSorteo: '' });
        const rifasActualizadas = await fetch('http://localhost:5000/api/rifas').then(r => r.json());
        setRifas(rifasActualizadas);
      } else {
        const data = await res.json();
        setMsg(data.msg || 'Error al crear rifa');
      }
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Gestión de Rifas</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <input className="w-full mb-2 p-2 border rounded" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input className="w-full mb-2 p-2 border rounded" name="precioBoleto" type="number" placeholder="Precio del Boleto" value={form.precioBoleto} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="totalBoletos" type="number" placeholder="Total de Boletos" value={form.totalBoletos} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="fechaSorteo" type="date" placeholder="Fecha de Sorteo" value={form.fechaSorteo} onChange={handleChange} required />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Crear Rifa</button>
      </form>
      {msg && <p className="mb-4 text-blue-700">{msg}</p>}
      <ul>
        {rifas.map(rifa => (
          <li key={rifa._id} className="mb-4 border-b pb-2">
            <div className="font-semibold text-blue-700">{rifa.nombre}</div>
            <div className="text-gray-600">{rifa.descripcion}</div>
            <div className="text-sm">Precio: ${rifa.precioBoleto} | Boletos: {rifa.totalBoletos}</div>
            <div className="text-xs text-gray-400">Sorteo: {rifa.fechaSorteo && rifa.fechaSorteo.substring(0,10)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
