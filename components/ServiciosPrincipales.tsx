"use client";

import React from "react";
import { HardHat, Zap, PenTool, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiciosPrincipales() {
  const services = [
    {
      icon: HardHat,
      title: "Ingeniería Civil",
      desc: "Convertimos terrenos e ideas en estructuras viables, seguras y rentables. Desde estudios preliminares hasta proyectos ejecutivos con análisis técnico riguroso.",
      link: "/proyectos",
      color: "from-blue-900/40 to-slate-900"
    },
    {
      icon: Zap,
      title: "Ingeniería Eléctrica",
      desc: "Diseñamos y evaluamos sistemas eléctricos seguros y eficientes. Integración de sistemas fotovoltaicos, grupos electrógenos y cumplimiento normativo.",
      link: "/proyectos",
      color: "from-cyan-900/40 to-slate-900"
    },
    {
      icon: PenTool,
      title: "Arquitectura",
      desc: "Diseñamos espacios que combinan estética, funcionalidad y viabilidad técnica. Modelado y renders 3D pensados para uso residencial o comercial.",
      link: "/proyectos",
      color: "from-indigo-900/40 to-slate-900"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#03060c] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase">
            Nuestros Principales Servicios
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5"
              >
                <div className={`p-6 bg-gradient-to-br ${service.color} border-b border-gray-800/50 flex justify-center items-center h-32 relative overflow-hidden`}>
                  <Icon size={48} className="text-white/20 absolute transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative z-10 p-3 bg-black/40 rounded-xl border border-white/10 text-gold-400 backdrop-blur-sm group-hover:bg-gold-500/20 transition-colors">
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {service.desc}
                    </p>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors"
                  >
                    Saber más <ArrowRight size={14} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
