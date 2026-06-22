"use client";

import React from "react";
import { ShieldCheck, Lightbulb, Users, FileCheck } from "lucide-react";

export default function PorQueElegirnos() {
  const features = [
    {
      icon: Users,
      title: "Asesorías",
      desc: "Acompañamiento técnico y financiero en cada etapa del proyecto para asegurar tu inversión."
    },
    {
      icon: Lightbulb,
      title: "Diseños Innovadores",
      desc: "Soluciones arquitectónicas y de ingeniería modernas, optimizadas para el entorno y el ahorro energético."
    },
    {
      icon: ShieldCheck,
      title: "Calidad y Seguridad",
      desc: "Estricto cumplimiento normativo para reducir riesgos, sobrecostos y garantizar la durabilidad de la obra."
    },
    {
      icon: FileCheck,
      title: "Planos y Diseños",
      desc: "Entregables técnicos detallados, listos para ejecución y aprobación ante las autoridades competentes."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950 border-t border-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,137,27,0.03),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <span className="text-cyber-teal text-xs font-bold uppercase tracking-[0.2em] border-b border-cyber-teal/30 pb-2">
              Te Ofrecemos
            </span>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mt-4">
              La ingeniería y arquitectura son los pilares más críticos de cualquier proyecto. Un diseño inadecuado no solo genera fallas técnicas, sino también sobrecostos, riesgos operativos y problemas legales.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              En Theofer desarrollamos soluciones estructurales, eléctricas y espaciales seguras, eficientes y adaptadas al entorno, siempre bajo criterios normativos actualizados. Nuestro enfoque busca garantizar estabilidad, funcionalidad y viabilidad real.
            </p>
          </div>

          {/* Right Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl hover:bg-gray-900 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-black/40 rounded-xl border border-gray-800 text-gold-400 w-fit mb-4 group-hover:bg-gold-500/10 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
