import React from "react";

export default function IngenieriaElectricaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-gray-300">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Ingeniería Eléctrica
        </h1>
        <p className="text-lg text-gold-400 font-semibold uppercase tracking-wider">
          TheoFer Proyectos
        </p>
      </header>

      <section className="space-y-6 text-base md:text-lg leading-relaxed mb-12">
        <p>
          La ingeniería eléctrica es uno de los pilares más críticos de cualquier proyecto. Un diseño inadecuado no solo genera fallas técnicas, sino también sobrecostos, riesgos operativos y problemas legales.
        </p>
        <p>
          En Theofer desarrollamos soluciones eléctricas seguras, eficientes y adaptadas al entorno, siempre bajo criterios normativos y técnicos actualizados.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="border border-gray-800 p-6 rounded-xl bg-gray-950/40">
          <h2 className="text-xl font-bold text-white mb-3">Solicitar Evaluación Estructural o Técnica</h2>
          <p className="text-sm text-gray-400 mb-6">
            Obtén una evaluación técnica especializada para tu proyecto eléctrico o estructural.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#contacto"
              className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Hablemos sobre tu proyecto
            </a>
            <a
              href="/#contacto"
              className="px-4 py-2 rounded-lg border border-gray-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              Solicitar Evaluación Técnica
            </a>
          </div>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-gray-950/40">
          <h2 className="text-xl font-bold text-white mb-3">Servicios de Ingeniería Eléctrica</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-900 pb-2">
              <span className="font-medium text-white">Proyecto Fotovoltaico</span>
              <a href="/#contacto" className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider">
                Cotizar
              </a>
            </div>
            <div className="flex justify-between items-center border-b border-gray-900 pb-2">
              <span className="font-medium text-white">Iluminación</span>
              <a href="/#contacto" className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider">
                Cotizar
              </a>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="font-medium text-white">Calefacción</span>
              <a href="/#contacto" className="text-xs text-gold-400 hover:text-gold-300 font-bold uppercase tracking-wider">
                Cotizar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
