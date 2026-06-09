import React from "react";

export default function IngenieriaCivilPage() {
  const servicesList = [
    "Obras residenciales",
    "Proyectos comerciales",
    "Infraestructura privada",
    "Desarrollo de terrenos",
    "Proyectos inmobiliarios",
  ];

  const includesList = [
    "Estudios y análisis preliminares",
    "Diseño estructural",
    "Cálculo y dimensionamiento",
    "Planos constructivos",
    "Evaluación técnica de terrenos",
    "Asesoría técnica para proyectos inmobiliarios",
  ];

  const specificServices = [
    "Aguas Servidas",
    "Alcantarillado",
    "Redes de Distribución",
    "Análisis Sísmico",
    "Análisis Sísmico Estático",
    "Análisis Sísmico Dinámico",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-gray-300">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Ingeniería Civil
        </h1>
        <p className="text-lg text-gold-400 font-semibold uppercase tracking-wider">
          TheoFer Proyectos
        </p>
      </header>

      <section className="space-y-6 text-base md:text-lg leading-relaxed mb-12">
        <h2 className="text-2xl font-bold text-white">
          Ingeniería civil pensada para construir con criterio, seguridad y durabilidad.
        </h2>
        <p>
          En THEOFER, la ingeniería civil es la base estructural de cualquier proyecto. Errores en esta etapa pueden comprometer la seguridad, la funcionalidad y la rentabilidad de una obra.
        </p>
        <div>
          <a
            href="/#contacto"
            className="inline-block px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Hablemos sobre tu proyecto
          </a>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border border-gray-800 p-6 rounded-xl bg-gray-950/40">
          <h3 className="text-xl font-bold text-white mb-4">¿Qué hacemos?</h3>
          <p className="text-sm text-gray-400 mb-4">
            Desarrollamos proyectos de ingeniería civil para:
          </p>
          <ul className="space-y-2 text-sm">
            {servicesList.map((svc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                {svc}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Nuestro enfoque busca garantizar estabilidad, funcionalidad y viabilidad real.
          </p>
          <div className="mt-6">
            <a
              href="/#contacto"
              className="inline-block px-4 py-2 rounded-lg border border-gray-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              Solicitar Evaluación Estructural
            </a>
          </div>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-gray-950/40">
          <h3 className="text-xl font-bold text-white mb-4">Nuestros servicios incluyen</h3>
          <ul className="space-y-2 text-sm mb-6">
            {includesList.map((inc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                {inc}
              </li>
            ))}
          </ul>
          <div>
            <a
              href="/#contacto"
              className="inline-block px-4 py-2 rounded-lg border border-gray-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              Solicitar Evaluación Técnica
            </a>
          </div>
        </div>
      </div>

      <section className="border border-gray-800 p-6 rounded-xl bg-gray-950/40 mb-12">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Algunos de Nuestros Servicios Específicos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specificServices.map((svc, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-gray-900 pb-2">
              <span className="text-sm font-medium text-white">{svc}</span>
              <a
                href="/#contacto"
                className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider"
              >
                Cotizar
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/#contacto"
            className="inline-block px-6 py-3 rounded-lg bg-gold-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-600 transition-colors"
          >
            Solicita tu Evaluación Estructural
          </a>
        </div>
      </section>
    </div>
  );
}
