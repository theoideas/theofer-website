import React from "react";

export default function HomePage() {
  const paymentSteps = [
    "Reserva: $1,000",
    "A los 15 días: $1,500",
    "A los 30 días de la reserva comienzan los pagos: 6 cuotas de $500 cada una (indistintamente de la firma del registro).",
  ];

  const services = [
    {
      title: "Ingeniería Civil",
      desc: "Convertimos terrenos e ideas en estructuras viables, seguras y rentables.",
      details: [
        "Análisis técnico riguroso",
        "Soluciones estructurales eficientes",
        "Proyectos listos para ejecución y aprobación",
      ],
      link: "/ingenieria-civil",
    },
    {
      title: "Ingeniería Eléctrica",
      desc: "Diseñamos y evaluamos sistemas eléctricos seguros, eficientes y escalables.",
      details: [
        "Cumplimiento normativo",
        "Optimización energética",
        "Reducción de riesgos y sobrecostos",
        "Integración de sistemas fotovoltaicos y grupos electrógenos",
      ],
      link: "/ingenieria-electrica",
    },
    {
      title: "Arquitectura",
      desc: "Diseñamos espacios que combinan estética, funcionalidad y viabilidad técnica.",
      details: [
        "Diseño arquitectónico",
        "Modelado y renders 3D",
        "Proyectos pensados para inversión, uso residencial o comercial",
      ],
      link: "/inversiones",
    },
  ];

  const portfolioItems = [
    "Distribución de Agua Potable",
    "Alcantarillado",
    "Calefacción",
    "Proyecto Fotovoltaico",
    "Muro",
    "Proyecto Eléctrico",
    "Townhouse",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-gray-300">
      {/* Hero / Intro */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          THEOFER
        </h1>
        <p className="text-xl md:text-2xl text-gold-400 font-semibold mb-6">
          Inversiones y Proyectos Comerciales en Venezuela
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Invierte con nosotros en proyectos de inversión inmobiliaria, evaluación, adquisición y desarrollo de terrenos e inmuebles en la Isla de Margarita, Venezuela.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contacto"
            className="px-6 py-3 rounded-lg bg-gold-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-600 transition-colors"
          >
            Quiero Invertir
          </a>
          <a
            href="#servicios"
            className="px-6 py-3 rounded-lg border border-gray-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
          >
            Nuestros Servicios
          </a>
        </div>
      </header>

      {/* Terrenos Section */}
      <section className="mb-16 border-t border-gray-950 pt-12">
        <div className="bg-gray-950/40 border border-gray-800 p-8 rounded-2xl">
          <span className="text-xs text-gold-500 font-bold uppercase tracking-wider block mb-2">
            Isla de Margarita
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Venta de Terrenos Estratégicos
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
            Ubicados en una de las zonas con mayor proyección de la isla, estos lotes representan una oportunidad real de inversión inmobiliaria para quienes buscan adquirir terreno a precios competitivos, con alto potencial de valorización y múltiples posibilidades de desarrollo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-white mb-2">Detalles del Lote</h3>
              <p className="text-sm text-gray-400 mb-2">
                Lotes de terrenos individuales con metraje ideal para desarrollo residencial, comercial o turístico a mediano plazo.
              </p>
              <p className="text-lg font-bold text-gold-400">
                💰 Precio del Lote: $5,500 (PAGO POR CUOTAS)
              </p>
              <p className="text-xs text-green-400 mt-1">
                📉 10% de descuento por pago de contado (Obtén tu Lote de Terreno en $5,000)
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Procedimiento de Pagos</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                {paymentSteps.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold-500 font-bold">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-6 mt-6">
            <h3 className="font-bold text-white mb-2">¿Por qué algunos inversionistas ya están entrando en Margarita?</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Hoy, la Isla de Margarita presenta condiciones únicas para inversiones inmobiliarias bien analizadas y estratégicamente acompañadas. Combina ubicación, turismo y proyección futura en un momento clave del mercado.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
              >
                Quiero Mi Terreno
              </a>
              <a
                href="#contacto"
                className="px-4 py-2 rounded-lg border border-gray-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
              >
                Quiero Invertir en Margarita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="mb-16 border-t border-gray-950 pt-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Nuestros Principales Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="border border-gray-800 p-6 rounded-xl bg-gray-950/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">{svc.desc}</p>
                <ul className="space-y-1 text-xs text-gray-500 mb-6">
                  {svc.details.map((det, idx) => (
                    <li key={idx} className="flex gap-1.5">
                      <span className="text-gold-500">•</span>
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={svc.link}
                className="inline-block text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider"
              >
                Saber más &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Portafolio Section */}
      <section className="mb-16 border-t border-gray-950 pt-12">
        <div className="border border-gray-800 p-8 rounded-2xl bg-gray-950/40">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Portafolio
          </h2>
          <p className="text-sm text-gray-400 text-center max-w-2xl mx-auto mb-8">
            Proyectos personalizados, adaptados a normativas locales e internacionales, desarrollados por un equipo multidisciplinario con experiencia real.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {portfolioItems.map((item, i) => (
              <div key={i} className="bg-gray-950 p-4 rounded-lg border border-gray-900 text-xs text-white font-medium">
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-6">
            Equipo de profesionales especializados en ingeniería, arquitectura, energía e inversión.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="border-t border-gray-950 pt-12">
        <div className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Hablemos sobre tu proyecto</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            ¿Tienes una idea o necesitas una evaluación estructural o técnica? Cuéntanos más y nos pondremos en contacto contigo a la brevedad.
          </p>
          <div>
            <a
              href="https://wa.me/584248888888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-green-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-green-700 transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
