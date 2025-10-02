import React, { useState, useEffect } from 'react';

export default function AdminDescuentos() {
  const [descuentos, setDescuentos] = useState([]);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ nombre: '', porcentaje: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/descuentos')
      .then(res => res.json())
      .then(setDescuentos)
      .catch(() => setMsg('Error al cargar descuentos'));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/descuentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg('Descuento creado');
        setForm({ nombre: '', porcentaje: '' });
        const actualizados = await fetch('http://localhost:5000/api/descuentos').then(r => r.json());
        setDescuentos(actualizados);
      } else {
        const data = await res.json();
        setMsg(data.msg || 'Error al crear descuento');
      }
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Gestión de Descuentos</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <input className="w-full mb-2 p-2 border rounded" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="porcentaje" type="number" placeholder="Porcentaje (%)" value={form.porcentaje} onChange={handleChange} required />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Crear Descuento</button>
      </form>
      {msg && <p className="mb-4 text-blue-700">{msg}</p>}
      <ul>
        {descuentos.map(d => (
          <li key={d._id} className="mb-2 border-b pb-1">
            <div className="font-semibold text-blue-700">{d.nombre}</div>
            <div className="text-xs text-gray-400">{d.porcentaje}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
