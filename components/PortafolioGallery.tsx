"use client";

import React, { useState } from "react";
import { FolderGit2, Check, FileCheck, Compass, Eye, Filter, ArrowRight } from "lucide-react";

export default function PortafolioGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: "Todos", value: "all" },
    { label: "Estructural", value: "estructural" },
    { label: "Energía & Eléctrico", value: "energia" },
    { label: "Hidráulica", value: "hidraulica" },
    { label: "Renders & 3D", value: "3d" }
  ];

  type ProjectType = {
    title: string;
    category: string;
    location: string;
    details: string;
    badge: string;
    visualBg: string;
    image?: string;
    blueprintLines?: boolean;
    solarGrid?: boolean;
    waves?: boolean;
    cameraGrid?: boolean;
  };

  const projects: ProjectType[] = [
    {
      title: "Cálculo Estructural Townhouses",
      category: "estructural",
      location: "Venezuela",
      details: "Diseño estructural y modelado para townhouses. Planos detallados de fundaciones y losas.",
      badge: "Ingeniería Civil",
      visualBg: "from-blue-900/60 to-slate-900",
      image: "/portfolio/TH_PL_EST_REV2-01.jpg"
    },
    {
      title: "Proyecto Fotovoltaico Residencial",
      category: "energia",
      location: "Venezuela",
      details: "Ingeniería de planta fotovoltaica. Esquemas de paneles, cableado e inversores para energía limpia.",
      badge: "Energía Solar",
      visualBg: "from-cyan-900/60 to-slate-900",
      image: "/portfolio/Proyecto-Fotovoltaico-lam-01.jpg"
    },
    {
      title: "Instalaciones de Agua Potable Cabrero",
      category: "hidraulica",
      location: "Cabrero",
      details: "Diseño detallado de la red de agua potable e isométricos para el proyecto residencial Cabrero.",
      badge: "Hidráulica",
      visualBg: "from-teal-900/60 to-slate-900",
      image: "/portfolio/CASA-CABRERO-AGUA-POTABLE-AB-1.jpg"
    },
    {
      title: "Planos de Alcantarillado Cabrero",
      category: "hidraulica",
      location: "Cabrero",
      details: "Ingeniería y diseño de la red de recolección de aguas servidas e instalaciones sanitarias.",
      badge: "Sanitaria",
      visualBg: "from-sky-950 to-slate-900",
      image: "/portfolio/Casa-CABRERO-ALCANTARILLADO-AN-01.jpg"
    },
    {
      title: "Detalles Estructurales Townhouses",
      category: "estructural",
      location: "Venezuela",
      details: "Detalles constructivos, despiece de acero y especificaciones de pórticos principales.",
      badge: "Estructuras",
      visualBg: "from-indigo-900/60 to-slate-900",
      image: "/portfolio/TH_PL_EST_REV2-03.jpg"
    },
    {
      title: "Esquemas del Sistema Fotovoltaico",
      category: "energia",
      location: "Venezuela",
      details: "Diagramas unifilares y especificaciones de tableros eléctricos para instalación de sistemas solares.",
      badge: "Diseño Eléctrico",
      visualBg: "from-emerald-950 to-slate-900",
      image: "/portfolio/Proyecto-Fotovoltaico-lam-02.jpg"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portafolio" className="py-24 relative overflow-hidden bg-[#030712] border-t border-gray-900">
      <div className="absolute inset-0 bg-gradient-cyber-radial opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/30 pb-2">
            Casos de Estudio • Portafolio Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nuestros Proyectos en Detalle
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Una muestra de nuestra capacidad de ingeniería y diseño digital. Proyectos reales calculados, modelados y entregados con altos estándares técnicos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-gray-900/40 p-2 rounded-2xl border border-gray-800 w-fit mx-auto">
          <div className="flex items-center gap-2 px-3 py-1 text-xs text-gray-500 font-bold uppercase tracking-wider">
            <Filter size={12} /> Filtrar:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-white text-black font-extrabold shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-900/20 border border-gray-800/80 rounded-2xl overflow-hidden hover:scale-[1.01] hover:border-gray-700/50 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Card Top (Schematic Representation) */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${proj.visualBg} flex items-center justify-center p-6 border-b border-gray-900`}>
                
                {/* Background rendering logic */}
                {proj.image ? (
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 group-hover:opacity-90 transition-all duration-700 ease-out" 
                  />
                ) : (
                  <>
                    {proj.blueprintLines && (
                      <svg className="absolute inset-0 w-full h-full opacity-20 stroke-white/40" fill="none" strokeWidth="0.5">
                        <line x1="0" y1="50%" x2="100%" y2="50%" />
                        <line x1="30%" y1="0" x2="30%" y2="100%" />
                        <line x1="70%" y1="0" x2="70%" y2="100%" />
                        <circle cx="30%" cy="50%" r="40" />
                        <rect x="10%" y="10%" width="80%" height="80%" />
                      </svg>
                    )}
                    {proj.solarGrid && (
                      <svg className="absolute inset-0 w-full h-full opacity-15 stroke-white/40" fill="none" strokeWidth="0.5">
                        <path d="M 0,0 L 100%,100% M 100%,0 L 0,100%" />
                        <rect x="25%" y="25%" width="50%" height="50%" />
                        <line x1="50%" y1="0" x2="50%" y2="100%" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" />
                      </svg>
                    )}
                    {proj.waves && (
                      <svg className="absolute inset-0 w-full h-full opacity-20 stroke-white/40" fill="none" strokeWidth="1">
                        <path d="M 0,40 Q 25,20 50,40 T 100,40 T 150,40 T 200,40 T 250,40 T 300,40 T 350,40 T 400,40" />
                        <path d="M 0,60 Q 25,40 50,60 T 100,60 T 150,60 T 200,60 T 250,60 T 300,60 T 350,60 T 400,60" />
                        <path d="M 0,80 Q 25,60 50,80 T 100,80 T 150,80 T 200,80 T 250,80 T 300,80 T 350,80 T 400,80" />
                      </svg>
                    )}
                    {proj.cameraGrid && (
                      <svg className="absolute inset-0 w-full h-full opacity-25 stroke-white/40" fill="none" strokeWidth="0.5">
                        <circle cx="50%" cy="50%" r="50" />
                        <circle cx="50%" cy="50%" r="10" />
                        <rect x="5%" y="5%" width="90%" height="90%" rx="10" />
                        <line x1="50%" y1="0" x2="50%" y2="100%" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" />
                      </svg>
                    )}
                  </>
                )}

                <div className="relative z-10 flex flex-col items-center text-center gap-2">
                  <div className="p-2.5 bg-black/40 rounded-full border border-white/10 text-white animate-float">
                    <FolderGit2 size={24} />
                  </div>
                  <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <div className="p-6 grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    <Compass size={10} />
                    {proj.location}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {proj.details}
                  </p>
                </div>
                
                <div className="border-t border-gray-900/60 pt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <FileCheck size={12} className="text-gold-500" />
                    Ingeniería Certificada
                  </span>
                  <span className="text-gray-400 font-bold uppercase tracking-wider group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                    Ficha Técnica <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
