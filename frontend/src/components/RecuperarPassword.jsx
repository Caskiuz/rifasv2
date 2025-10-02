import React, { useState } from 'react';

export default function RecuperarPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return 'Email inválido';
    return '';
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setError('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/auth/recuperar-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) setMsg('Si el email existe, recibirás instrucciones.');
      else setMsg(data.msg || 'Error al solicitar recuperación');
    } catch {
      setMsg('Error de conexión');
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
      <h2 className="text-2xl font-bold mb-4">Recuperar Contraseña</h2>
      <input className={`w-full mb-4 p-2 border rounded ${error ? 'border-red-500' : ''}`} type="email" placeholder="Email" value={email} onChange={e => { setEmail(e.target.value); setError(''); }} required />
      {error && <p className="text-red-600 text-xs mb-2">{error}</p>}
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Enviar</button>
      {msg && <p className="mt-2 text-center text-sm text-blue-700">{msg}</p>}
    </form>
  );
}
