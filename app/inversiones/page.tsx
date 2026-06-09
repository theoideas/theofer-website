import React from "react";

export default function InversionesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-gray-300">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Inversiones
        </h1>
        <p className="text-lg text-gold-400 font-semibold uppercase tracking-wider">
          TheoFer Inversiones
        </p>
      </header>

      <section className="space-y-6 text-base md:text-lg leading-relaxed mb-12">
        <h2 className="text-2xl font-bold text-white">
          Invertir en Venezuela es una oportunidad
        </h2>
        <p>
          Desarrollamos y acompañamos proyectos de inversión inmobiliaria y adquisición de Terrenos en Venezuela, con foco estratégico en la Isla de Margarita.
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
          <h3 className="text-xl font-bold text-white mb-2">Terrenos</h3>
          <p className="text-sm text-gray-400 mb-6">
            Adquisición de lotes de terrenos estratégicos en ubicaciones clave con alta proyección de valorización.
          </p>
          <a
            href="/#contacto"
            className="inline-block px-4 py-2 rounded-lg bg-gold-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-600 transition-colors"
          >
            Solicitar Información
          </a>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-gray-950/40">
          <h3 className="text-xl font-bold text-white mb-2">Urbanismos</h3>
          <p className="text-sm text-gray-400 mb-6">
            Evaluación y desarrollo de proyectos residenciales, comerciales o turísticos de gran envergadura.
          </p>
          <a
            href="/#contacto"
            className="inline-block px-4 py-2 rounded-lg bg-gold-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-600 transition-colors"
          >
            Solicitar Información
          </a>
        </div>
      </div>

      <section className="border border-gray-800 p-8 rounded-xl bg-gray-950/40 mb-12 space-y-8">
        <h3 className="text-2xl font-bold text-white text-center">Estrategia y Análisis de Inversión</h3>

        <div className="space-y-4">
          <div className="border-b border-gray-900 pb-4">
            <h4 className="text-lg font-semibold text-white mb-2">¿Por qué Venezuela?</h4>
            <p className="text-sm text-gray-400 mb-4">
              Una oportunidad de adquirir activos con una valoración históricamente baja, ideal para inversionistas con visión a mediano y largo plazo.
            </p>
            <a
              href="/#contacto"
              className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider"
            >
              Quiero invertir en Venezuela &rarr;
            </a>
          </div>

          <div className="border-b border-gray-900 pb-4">
            <h4 className="text-lg font-semibold text-white mb-2">¿Por qué la Isla de Margarita?</h4>
            <p className="text-sm text-gray-400 mb-4">
              Ubicación privilegiada, renombre turístico internacional y condiciones ideales para el desarrollo inmobiliario residencial o vacacional.
            </p>
            <a
              href="/#contacto"
              className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider"
            >
              Evaluar terrenos y proyectos &rarr;
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">¿Cómo reducimos riesgos?</h4>
            <p className="text-sm text-gray-400 mb-4">
              Realizamos estudios técnicos, verificación jurídica en registros públicos y planes estructurados de construcción llave en mano para asegurar tu capital.
            </p>
            <a
              href="/#contacto"
              className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider"
            >
              Evaluar oportunidad de inversión &rarr;
            </a>
          </div>
        </div>

        <div className="mt-8 text-center pt-4">
          <a
            href="/#contacto"
            className="inline-block px-6 py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Solicitar Evaluación de Inversión
          </a>
        </div>
      </section>
    </div>
  );
}
