import React from "react";

const demos = [
	{
		title: "Rifatela - Demo Clásica",
		features: ["Página principal", "Catálogo de rifas", "Carrito simple"],
		desc: "Plantilla base para rifas con navegación clara y secciones esenciales.",
	},
	{
		title: "Rifatela - Demo Premium",
		features: ["Checkout avanzado", "Historial de compras", "Perfiles"],
		desc: "Versión enfocada en conversión con flujo de compra optimizado.",
	},
	{
		title: "Rifatela - Demo Minimal",
		features: ["Landing ligera", "CTA directo", "Pocas distracciones"],
		desc: "Diseño minimalista para campañas rápidas y anuncios.",
	},
	{
		title: "Rifatela - Demo Corporativa",
		features: ["Secciones informativas", "Bloques personalizables", "SEO básico"],
		desc: "Ideal para marcas que requieren más contenido y estructura.",
	},
	{
		title: "Rifatela - Demo Dark",
		features: ["Tema oscuro", "Enfoque visual", "Legibilidad optimizada"],
		desc: "Estilo dark para destacar imágenes y banners de premios.",
	},
	{
		title: "Rifatela - Demo Mobile First",
		features: ["Diseño responsive", "Velocidad móvil", "UI táctil"],
		desc: "Pensada para tráfico móvil predominante y redes sociales.",
	},
];

export default function DemosDisponibles() {
	return (
		<main className="bg-white text-[#0c274a]">
			{/* Hero */}
			<section className="landing-hero landing-hero__layer">
				<div className="landing-hero__content">
					<h1 className="landing-title">Demos Disponibles</h1>
					<div className="landing-crumbs">
						<a href="/">Home</a>
						<span className="dot">•</span>
						<span>RIFATELA</span>
						<span className="dot">•</span>
						<span>Demos Disponibles</span>
					</div>
				</div>
			</section>

			{/* Grid de demos */}
			<section className="landing-wrap">
				<div className="landing-grid">
					{demos.map((d) => (
						<article key={d.title} className="landing-card">
							<div className="landing-thumb">
								{/* Placeholder de miniatura (puedes reemplazar por imágenes reales) */}
								<span>Vista previa</span>
							</div>
							<div className="landing-body">
								<h3 className="text-xl font-extrabold">{d.title}</h3>
								<p className="landing-desc">{d.desc}</p>
								<div className="landing-badges">
									{d.features.map((f) => (
										<span key={f} className="landing-badge">
											{f}
										</span>
									))}
								</div>
								<div className="landing-actions">
									<a href="#" className="landing-btn">
										Ver demo
									</a>
									<a href="/#precios" className="landing-btn">
										Comprar
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Footer global se monta desde App.jsx */}
		</main>
	);
}
