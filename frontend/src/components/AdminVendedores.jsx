import React, { useState, useEffect } from 'react';

export default function AdminVendedores() {
  const [vendedores, setVendedores] = useState([]);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ nombre: '', email: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/vendedores')
      .then(res => res.json())
      .then(setVendedores)
      .catch(() => setMsg('Error al cargar vendedores'));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/vendedores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg('Vendedor creado');
        setForm({ nombre: '', email: '' });
        const actualizados = await fetch('http://localhost:5000/api/vendedores').then(r => r.json());
        setVendedores(actualizados);
      } else {
        const data = await res.json();
        setMsg(data.msg || 'Error al crear vendedor');
      }
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Gestión de Vendedores</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <input className="w-full mb-2 p-2 border rounded" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border rounded" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Crear Vendedor</button>
      </form>
      {msg && <p className="mb-4 text-blue-700">{msg}</p>}
      <ul>
        {vendedores.map(v => (
          <li key={v._id} className="mb-2 border-b pb-1">
            <div className="font-semibold text-blue-700">{v.nombre}</div>
            <div className="text-gray-600 text-sm">{v.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
