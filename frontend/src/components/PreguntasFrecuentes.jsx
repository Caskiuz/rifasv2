import React, { useState } from 'react';

const preguntasCol1 = [
	{
		pregunta: '¿Qué necesito para crear una Rifa?',
		respuesta: (
			<>
				<b>
					Requisitos para crear su Cuenta y Rifa{' '}
					<span className="font-bold">Datos del Organizador</span>
				</b>
				<ol className="list-decimal pl-6 mt-2 mb-2 text-blue-800">
					<li>Nombre de la Empresa / Marca / Persona Pública / Organización</li>
					<li>Logo</li>
					<li>Ubicación</li>
					<li>URLs de Redes Sociales</li>
				</ol>
				<b>Datos para la Rifa</b>
				<ol className="list-decimal pl-6 mt-2 mb-2 text-blue-800">
					<li>Nombre Completo del Responsable, Email y Celular</li>
					<li>Afiche / Banner / Foto del Premio</li>
					<li>Fecha y Hora del Sorteo</li>
					<li>Numeración de Tickets (0001-1000)</li>
					<li>
						Cuentas bancarias o Medios de Pago: Número / Titular / Banco
					</li>
				</ol>
				Llenar el formulario en:{' '}
				<a
					href="/registro"
					className="font-bold text-blue-800 underline"
				>
					Crear Cuenta
				</a>
			</>
		),
	},
	{
		pregunta: '¿En cuánto tiempo hacen la página web?',
		respuesta:
			'El tiempo de entrega depende del plan y la personalización, pero normalmente es de 1 a 3 días hábiles.',
	},
	{
		pregunta: '¿Puedo usar PayPal o MercadoPago?',
		respuesta:
			'Sí, puedes usar PayPal, MercadoPago y otros métodos de pago compatibles.',
	},
	{
		pregunta: '¿Hay un límite de Tickets?',
		respuesta: 'No hay límite, puedes vender tantos boletos como desees según tu plan.',
	},
	{
		pregunta: '¿Hay comisión de las ventas?',
		respuesta:
			'Dependiendo del plan, puede haber una pequeña comisión por transacción.',
	},
];

const preguntasCol2 = [
	{
		pregunta: '¿Puedo usar el sistema en mi Dominio?',
		respuesta: 'Sí, puedes usar el sistema en tu propio dominio o subdominio.',
	},
	{
		pregunta: '¿Funciona en mi País?',
		respuesta: 'Sí, Rifatela funciona en cualquier país de habla hispana.',
	},
	{
		pregunta: '¿Puedo cambiar la fecha del sorteo?',
		respuesta: 'Sí, puedes modificar la fecha y hora del sorteo desde tu panel.',
	},
	{
		pregunta: '¿Cómo se realiza el Sorteo?',
		respuesta:
			'El sorteo se realiza en línea, de forma transparente y automática, usando números aleatorios.',
	},
	{
		pregunta: '¿Si soy persona natural que Logo envío?',
		respuesta:
			'Puedes enviar cualquier imagen que te represente, no es obligatorio tener un logo profesional.',
	},
	{
		pregunta: '¿Rifatela vende los Boletos?',
		respuesta: 'No, Rifatela solo provee la plataforma. Tú eres quien vende los boletos.',
	},
];

function Accordion({ pregunta, respuesta, activa, onClick }) {
	return (
		<div className="faq-item">
			<button
				className={`faq-q ${activa ? 'aria-expanded' : ''}`}
				onClick={onClick}
				aria-expanded={activa}
			>
				<span>{pregunta}</span>
				<span
					className={`faq-chevron ${
						activa ? 'rotate-90 text-blue-700' : ''
					}`}
				>
					▶
				</span>
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 ${
					activa ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="faq-a">{respuesta}</div>
			</div>
		</div>
	);
}

export default function PreguntasFrecuentes() {
	const [abiertaCol1, setAbiertaCol1] = useState(0);
	const [abiertaCol2, setAbiertaCol2] = useState(0);
	return (
		<main className="bg-white text-[#0c274a]">
			{/* Hero FAQ */}
			<section className="faq-hero faq-hero__layer">
				<div className="faq-hero__content">
					<h1 className="faq-title">Preguntas Frecuentes</h1>
					<div className="faq-crumbs">
						<a href="/">Home</a>
						<span className="dot">•</span>
						<span>RIFATELA</span>
						<span className="dot">•</span>
						<span>FAQ</span>
					</div>
				</div>
			</section>

			<section className="faq-wrap">
				<div className="faq-grid">
					<div className="faq-col">
						<img
							src="/assets/logo-rifatela.svg"
							alt="Rifatela Logo"
							className="h-12 mb-1"
							style={{ maxHeight: '48px' }}
						/>
						<h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
							Dudas Frecuentes
						</h2>
						<div className="flex flex-col gap-3">
							{preguntasCol1.map((item, i) => (
								<Accordion
									key={i}
									pregunta={item.pregunta}
									respuesta={item.respuesta}
									activa={abiertaCol1 === i}
									onClick={() =>
										setAbiertaCol1(
											abiertaCol1 === i ? -1 : i
										)
									}
								/>
							))}
						</div>
					</div>
					<div className="faq-col">
						<div className="flex flex-col gap-3 mt-4 md:mt-8">
							{preguntasCol2.map((item, i) => (
								<Accordion
									key={i}
									pregunta={item.pregunta}
									respuesta={item.respuesta}
									activa={abiertaCol2 === i}
									onClick={() =>
										setAbiertaCol2(
											abiertaCol2 === i ? -1 : i
										)
									}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
