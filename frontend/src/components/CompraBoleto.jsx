import React, { useState } from "react";

const CompraBoleto = ({ rifa, onCompraExitosa }) => {
  const [numero, setNumero] = useState("");
  const [voucher, setVoucher] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    if (!numero.match(/^\d+$/)) {
      setMsg("El número de boleto debe ser numérico");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/boletos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numero, rifaId: rifa._id, voucher }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Compra exitosa");
        if (onCompraExitosa) onCompraExitosa(data);
      } else {
        setMsg(data.msg || "Error en la compra");
      }
    } catch {
      setMsg("Error de conexión");
    }
    setLoading(false);
  };

  return (
    <form className="bg-white p-6 rounded shadow max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
      <h2 className="text-2xl font-bold mb-4">Comprar Boleto</h2>
      <input className="w-full mb-2 p-2 border rounded" placeholder="Número de boleto" value={numero} onChange={e => setNumero(e.target.value)} required />
      <input className="w-full mb-4 p-2 border rounded" placeholder="Comprobante de pago (opcional)" value={voucher} onChange={e => setVoucher(e.target.value)} />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit" disabled={loading}>{loading ? "Procesando..." : "Comprar"}</button>
      {msg && <p className="mt-2 text-center text-sm text-blue-700">{msg}</p>}
    </form>
  );
};

export default CompraBoleto;
