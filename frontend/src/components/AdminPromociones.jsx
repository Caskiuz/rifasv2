import React, { useState, useEffect } from 'react';

export default function AdminPromociones() {
  const [promociones, setPromociones] = useState([]);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ nombre: '', descripcion: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/promociones')
      .then(res => res.json())
      .then(setPromociones)
      .catch(() => setMsg('Error al cargar promociones'));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/promociones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg('Promoción creada');
        setForm({ nombre: '', descripcion: '' });
        const actualizadas = await fetch('http://localhost:5000/api/promociones').then(r => r.json());
        setPromociones(actualizadas);
      } else {
        const data = await res.json();
        setMsg(data.msg || 'Error al crear promoción');
      }
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Gestión de Promociones</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <input className="w-full mb-2 p-2 border rounded" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Crear Promoción</button>
      </form>
      {msg && <p className="mb-4 text-blue-700">{msg}</p>}
      <ul>
        {promociones.map(p => (
          <li key={p._id} className="mb-2 border-b pb-1">
            <div className="font-semibold text-blue-700">{p.nombre}</div>
            <div className="text-gray-600 text-sm">{p.descripcion}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
