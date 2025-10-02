import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = 'Email inválido';
    if (!form.password) errs.password = 'La contraseña es obligatoria';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Login exitoso');
        if (onLogin) onLogin(data.user);
      } else setMsg(data.msg || 'Error en el login');
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <input className={`w-full mb-2 p-2 border rounded ${errors.email ? 'border-red-500' : ''}`} name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      {errors.email && <p className="text-red-600 text-xs mb-2">{errors.email}</p>}
      <input className={`w-full mb-4 p-2 border rounded ${errors.password ? 'border-red-500' : ''}`} name="password" type="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
      {errors.password && <p className="text-red-600 text-xs mb-2">{errors.password}</p>}
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Entrar</button>
      {msg && <p className="mt-2 text-center text-sm text-blue-700">{msg}</p>}
    </form>
  );
}
