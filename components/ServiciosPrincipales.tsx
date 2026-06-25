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
      bgImage: "/servicio-civil.jpg"
    },
    {
      icon: Zap,
      title: "Ingeniería Eléctrica",
      desc: "Diseñamos y evaluamos sistemas eléctricos seguros y eficientes. Integración de sistemas fotovoltaicos, grupos electrógenos y cumplimiento normativo.",
      link: "/proyectos",
      bgImage: "/servicio-electrica.jpg"
    },
    {
      icon: PenTool,
      title: "Arquitectura",
      desc: "Diseñamos espacios que combinan estética, funcionalidad y viabilidad técnica. Modelado y renders 3D pensados para uso residencial o comercial.",
      link: "/proyectos",
      bgImage: "/servicio-arquitectura.jpg"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,138,34,0.03),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/30 pb-2 inline-block">
            Nuestra Experiencia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-main leading-tight uppercase">
            Nuestros Principales Servicios
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="relative group rounded-3xl overflow-hidden flex flex-col h-[420px] shadow-lg hover:shadow-2xl hover:shadow-navy-main/20 transition-all duration-700 hover:-translate-y-2 bg-navy-main"
                style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {/* Elegant Overlays */}
                <div className="absolute inset-0 bg-navy-main/80 mix-blend-multiply transition-colors duration-700 group-hover:bg-navy-main/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-main via-navy-main/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-gold-500 shadow-xl group-hover:scale-110 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {service.desc}
                    </p>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors"
                    >
                      Saber más <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
