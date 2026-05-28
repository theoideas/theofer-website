"use client";

import React from "react";
import { Landmark, CheckCircle, BarChart, Compass, Home, Shield, Plane } from "lucide-react";

export default function InversionesSection() {
  const lots = [
    {
      name: "Lotes Premium en La Caranta (Pampatar)",
      price: "Desde $5,500 USD",
      area: "Desde 300 m²",
      desc: "Ubicados en la zona de mayor plusvalía de Pampatar, con espectacular vista al mar, servicios listos de agua y electricidad, y factibilidad para villas multifamiliares.",
      tag: "Vista al Mar"
    },
    {
      name: "Lotes Residenciales en Playa El Ángel",
      price: "Desde $8,000 USD",
      area: "Desde 400 m²",
      desc: "Lotes listos para construir en urbanismo privado exclusivo, a pocos minutos de centros comerciales de Maneiro, colegios y playas turísticas.",
      tag: "Urb. Privada"
    },
    {
      name: "Terrenos Turísticos en El Yaque",
      price: "Desde $12,000 USD",
      area: "Desde 600 m²",
      desc: "Excelente ubicación para proyectos de posadas turísticas o casas de vacaciones en la meca internacional del windsurf y kitesurf.",
      tag: "Zona Turística"
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
            TheoFer Inversiones • Desarrollos en Margarita
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Invierte en Margarita: Terrenos y Villas a tu Medida
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Asegura tu patrimonio en la perla del Caribe. Ofrecemos terrenos con financiamiento directo y el servicio de construcción llave en mano para que edifiques tu residencia ideal de forma 100% remota.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <div
                key={i}
                className="glass-panel-gold p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="p-3 bg-gold-500/10 rounded-xl text-gold-400 border border-gold-400/20 group-hover:bg-gold-500/20 transition-colors w-fit mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Turnkey Construction Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              ¿Cómo funciona nuestro modelo de Construcción Llave en Mano para el exterior?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Diseñamos la arquitectura y construimos físicamente tu casa en Margarita sin que tengas que viajar. Combinamos nuestra capacidad técnica digital (planos, renders, simulaciones estructurales) con mano de obra y supervisión experta en campo.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Transparencia de Avance con Drones</h4>
                  <p className="text-xs text-gray-400">
                    Recibes reportes fotográficos y tomas de video semanales con dron para que audites la cimentación, estructura y acabados de tu obra a distancia.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Financiamiento Flexible Directo</h4>
                  <p className="text-xs text-gray-400">
                    Ofrecemos planes de pago mensuales adaptados a tu presupuesto, eliminando los trámites bancarios burocráticos.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Selección de Modelos de Villas</h4>
                  <p className="text-xs text-gray-400">
                    Puedes elegir entre nuestros prototipos de villas optimizadas para el Caribe (diseñadas para ahorro energético y frescura) o crear un diseño de autor desde cero.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleCTA}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-gold-500/10"
              >
                Quiero Cotizar mi Construcción
              </button>
            </div>
          </div>

          {/* Interactive Land Offer Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Lotes Disponibles Destacados
            </h4>
            <div className="space-y-4">
              {lots.map((lot, idx) => (
                <div
                  key={idx}
                  className="bg-gray-950/60 p-6 rounded-xl border border-gray-800 flex flex-col justify-between hover:border-gold-500/20 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gold-500 font-bold uppercase tracking-wider">
                      {lot.tag}
                    </span>
                    <span className="text-sm font-bold text-white">{lot.price}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-gold-500 transition-colors mb-2">
                    {lot.name}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{lot.desc}</p>
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider">
                    Área: {lot.area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
