import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/sistema.css";

const items = [
	{
		titulo: "Página Web Online",
		desc: "Landing Page con tu logo, colores y configuraciones donde los usuarios pueden elegir sus números de tickets, subir su voucher de pago y verificar sus tickets. Ver más",
	},
	{
		titulo: "Panel de Administración",
		desc: "Estadísticas, datos de participantes, lista de tickets / boletos, configuraciones, tickets vendidos, aprobación de compras, botones de WhatsApp... Ver más",
	},
	{
		titulo: "Múltiples Configuraciones",
		desc: "Personaliza premios, precios, fechas y más.",
	},
	{
		titulo: "Verificador de Tickets",
		desc: "Tus clientes pueden validar sus tickets online.",
	},
	{
		titulo: "Plataforma (Resumen)",
		desc: (
			<>
								Somos la mejor <b>Plataforma</b>. Clientes satisfechos en <b>México, Colombia, Chile, Perú, Argentina, Ecuador, Bolivia, Uruguay, Paraguay, Guatemala, Panamá, Costa Rica, Venezuela, España</b>...{" "}
								<a href="/sistema#plataforma" style={{ color: "#0ea5e9", fontWeight: 700, marginLeft: 6 }}>Ver más</a>
			</>
		),
	},
];

const IDS = [
	"web-online",
	"panel",
	"configuraciones",
	"verificador",
	"plataforma",
];

const SistemaBrinda = () => {
	const [open, setOpen] = useState(0);
	const location = useLocation();

	// Si llega un hash (#panel, etc.), abrir el acordeón correspondiente y desplazar suavemente
	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const idx = IDS.indexOf(id);
			if (idx !== -1) {
				setOpen(idx);
				const el = document.getElementById(id);
				if (el) {
					requestAnimationFrame(() => {
						el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					});
				}
			}
		}
	}, [location.hash]);
	return (
		<section className="rifarito-sistema" id="sistema">
			<div className="rifarito-sistema__container">
				<div className="rifarito-sistema__left">
					<h2 className="rifarito-sistema__title">
						Nuestro <b>Sistema</b> te brinda
					</h2>
					<div className="rifarito-sistema__accordion">
						{items.map((item, i) => (
							<div
								className={`rifarito-sistema__panel${open === i ? " open" : ""} anchor-target`}
								key={i}
								id={IDS[i]}
							>
								<div
									className="rifarito-sistema__panel-header"
									onClick={() => setOpen(open === i ? null : i)}
								>
									<span className="icon">{open === i ? "−" : "+"}</span>
									{item.titulo}
								</div>
								<div className="rifarito-sistema__panel-content">
									{item.desc}
								</div>
							</div>
						))}
					</div>
				</div>
					{/* Aside eliminado: contenido integrado como item del acordeón */}
			</div>
		</section>
	);
};

export default SistemaBrinda;
