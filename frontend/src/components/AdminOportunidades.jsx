import React, { useState, useEffect } from 'react';

export default function AdminOportunidades() {
  const [oportunidades, setOportunidades] = useState([]);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ nombre: '', descripcion: '', descuento: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/oportunidades')
      .then(res => res.json())
      .then(setOportunidades)
      .catch(() => setMsg('Error al cargar oportunidades'));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/oportunidades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg('Oportunidad creada');
        setForm({ nombre: '', descripcion: '', descuento: '' });
        const actualizadas = await fetch('http://localhost:5000/api/oportunidades').then(r => r.json());
        setOportunidades(actualizadas);
      } else {
        const data = await res.json();
        setMsg(data.msg || 'Error al crear oportunidad');
      }
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Gestión de Oportunidades</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <input className="w-full mb-2 p-2 border rounded" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input className="w-full mb-2 p-2 border rounded" name="descuento" type="number" placeholder="Descuento (%)" value={form.descuento} onChange={handleChange} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Crear Oportunidad</button>
      </form>
      {msg && <p className="mb-4 text-blue-700">{msg}</p>}
      <ul>
        {oportunidades.map(o => (
          <li key={o._id} className="mb-2 border-b pb-1">
            <div className="font-semibold text-blue-700">{o.nombre}</div>
            <div className="text-gray-600 text-sm">{o.descripcion}</div>
            <div className="text-xs text-gray-400">Descuento: {o.descuento}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
