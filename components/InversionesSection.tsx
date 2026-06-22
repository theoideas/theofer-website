"use client";

import React from "react";
import { Landmark, CheckCircle, BarChart, Compass, Home, Shield, Plane } from "lucide-react";

export default function InversionesSection() {
  const lots = [
    {
      name: "Lotes de Terreno en Taguantar",
      price: "Contado: $5,000 USD",
      area: "Desarrollo Residencial / Turístico",
      desc: "Ubicados en zona de expansión con alta proyección en la Isla de Margarita. Ideales para construcción residencial o inversión a mediano plazo.",
      tag: "Oportunidad"
    },
    {
      name: "Plan de Financiamiento a Cuotas",
      price: "Financiado: $5,500 USD",
      area: "Sin trámites bancarios",
      desc: "Reserva con $1,000. A los 15 días $1,500. Luego, 6 cuotas de $500 (inician a los 30 días).",
      tag: "Facilidades de Pago"
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: "Seguridad Jurídica y Propiedad en Regla",
      desc: "Garantizamos que todos los terrenos cuenten con su documentación libre de gravámenes, listos para firmar en registro público."
    },
    {
      icon: BarChart,
      title: "Alta Plusvalía / Retorno de Inversión",
      desc: "Isla de Margarita mantiene precios históricamente bajos por m², ofreciendo un potencial de revalorización inigualable para la diáspora."
    },
    {
      icon: Home,
      title: "Construcción 'Design-Build' Llave en Mano",
      desc: "Desde el plano digital hasta los acabados finales. Nos encargamos de todo el proceso de ingeniería y edificación mientras estás fuera."
    }
  ];

  const handleCTA = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#03060c]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-gold-radial opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/30 pb-2">
            Invertir en Venezuela es una oportunidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Desarrollamos y acompañamos proyectos de inversión inmobiliaria y adquisición de Terrenos en Venezuela, con foco estratégico en la Isla de Margarita.
          </h2>
          <div className="pt-8">
             <button
                onClick={handleCTA}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-gold-500/10"
              >
                Solicitar evaluación de inversión
              </button>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-panel-gold p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 hover:scale-[1.01] transition-all duration-300 group">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors uppercase">
              Terrenos
            </h3>
            <button className="text-gold-500 text-xs font-bold uppercase mt-4">
              Solicitar Información →
            </button>
          </div>
          <div className="glass-panel-gold p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 hover:scale-[1.01] transition-all duration-300 group">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors uppercase">
              Urbanismos
            </h3>
            <button className="text-gold-500 text-xs font-bold uppercase mt-4">
              Solicitar Información →
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="bg-gray-950/60 p-6 rounded-xl border border-gray-800 flex flex-col justify-between hover:border-gold-500/20 transition-all group">
             <h4 className="text-base font-bold text-white mb-2 uppercase">¿Por qué Venezuela?</h4>
             <button className="text-gray-400 text-xs font-bold uppercase mt-4 text-left group-hover:text-gold-500">Quiero invertir en Venezuela →</button>
           </div>
           <div className="bg-gray-950/60 p-6 rounded-xl border border-gray-800 flex flex-col justify-between hover:border-gold-500/20 transition-all group">
             <h4 className="text-base font-bold text-white mb-2 uppercase">¿Por qué la Isla de Margarita?</h4>
             <button className="text-gray-400 text-xs font-bold uppercase mt-4 text-left group-hover:text-gold-500">Evaluar terrenos y proyectos →</button>
           </div>
           <div className="bg-gray-950/60 p-6 rounded-xl border border-gray-800 flex flex-col justify-between hover:border-gold-500/20 transition-all group">
             <h4 className="text-base font-bold text-white mb-2 uppercase">¿Cómo reducimos riesgos?</h4>
             <button className="text-gray-400 text-xs font-bold uppercase mt-4 text-left group-hover:text-gold-500">Evaluar oportunidad de inversión →</button>
           </div>
        </div>

      </div>
    </section>
  );
}
