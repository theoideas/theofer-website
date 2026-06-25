"use client";

import React, { useState } from "react";
import { FolderGit2, Check, FileCheck, Compass, Eye, Filter, ArrowRight } from "lucide-react";

export default function PortafolioGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: "Todos", value: "all" },
    { label: "Estructural", value: "estructural" },
    { label: "Energía & Eléctrico", value: "energia" },
    { label: "Hidráulica", value: "hidraulica" }
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
      visualBg: "from-navy-main/40 to-slate-400/40",
      image: "/portfolio/TH_PL_EST_REV2-01.jpg"
    },
    {
      title: "Proyecto Fotovoltaico Residencial",
      category: "energia",
      location: "Venezuela",
      details: "Ingeniería de planta fotovoltaica. Esquemas de paneles, cableado e inversores para energía limpia.",
      badge: "Energía Solar",
      visualBg: "from-gold-500/40 to-gold-400/40",
      image: "/portfolio/Proyecto-Fotovoltaico-lam-01.jpg"
    },
    {
      title: "Instalaciones de Agua Potable Cabrero",
      category: "hidraulica",
      location: "Cabrero",
      details: "Diseño detallado de la red de agua potable e isométricos para el proyecto residencial Cabrero.",
      badge: "Hidráulica",
      visualBg: "from-cyan-600/40 to-slate-400/40",
      image: "/portfolio/CASA-CABRERO-AGUA-POTABLE-AB-1.jpg"
    },
    {
      title: "Planos de Alcantarillado Cabrero",
      category: "hidraulica",
      location: "Cabrero",
      details: "Ingeniería y diseño de la red de recolección de aguas servidas e instalaciones sanitarias.",
      badge: "Sanitaria",
      visualBg: "from-sky-600/40 to-slate-400/40",
      image: "/portfolio/Casa-CABRERO-ALCANTARILLADO-AN-01.jpg"
    },
    {
      title: "Detalles Estructurales Townhouses",
      category: "estructural",
      location: "Venezuela",
      details: "Detalles constructivos, despiece de acero y especificaciones de pórticos principales.",
      badge: "Estructuras",
      visualBg: "from-indigo-600/40 to-slate-400/40",
      image: "/portfolio/TH_PL_EST_REV2-03.jpg"
    },
    {
      title: "Esquemas del Sistema Fotovoltaico",
      category: "energia",
      location: "Venezuela",
      details: "Diagramas unifilares y especificaciones de tableros eléctricos para instalación de sistemas solares.",
      badge: "Diseño Eléctrico",
      visualBg: "from-emerald-600/40 to-slate-400/40",
      image: "/portfolio/Proyecto-Fotovoltaico-lam-02.jpg"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portafolio" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(21,32,43,0.03),transparent_70%)] opacity-100 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-navy-main text-xs font-bold uppercase tracking-[0.2em] border-b border-navy-main/30 pb-2">
            Casos de Estudio • Portafolio Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-main leading-tight">
            Nuestros Proyectos en Detalle
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Una muestra de nuestra capacidad de ingeniería y diseño digital. Proyectos reales calculados, modelados y entregados con altos estándares técnicos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-slate-50 p-2 rounded-2xl border border-slate-200 w-fit mx-auto shadow-sm">
          <div className="flex items-center gap-2 px-3 py-1 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <Filter size={12} /> Filtrar:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-navy-main text-white font-extrabold shadow-md"
                  : "text-slate-500 hover:text-navy-main hover:bg-slate-100"
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
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:scale-[1.01] hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              {/* Visual Card Top (Schematic Representation) */}
              <div className="h-48 relative overflow-hidden bg-slate-100 flex items-center justify-center p-6 border-b border-slate-100">
                
                {/* Background rendering logic */}
                {proj.image ? (
                  <>
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${proj.visualBg} mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-700 ease-in-out`}></div>
                  </>
                ) : (
                  <>
                    {proj.blueprintLines && (
                      <svg className="absolute inset-0 w-full h-full opacity-20 stroke-slate-400" fill="none" strokeWidth="0.5">
                        <line x1="0" y1="50%" x2="100%" y2="50%" />
                        <line x1="30%" y1="0" x2="30%" y2="100%" />
                        <line x1="70%" y1="0" x2="70%" y2="100%" />
                        <circle cx="30%" cy="50%" r="40" />
                        <rect x="10%" y="10%" width="80%" height="80%" />
                      </svg>
                    )}
                    {proj.solarGrid && (
                      <svg className="absolute inset-0 w-full h-full opacity-15 stroke-slate-400" fill="none" strokeWidth="0.5">
                        <path d="M 0,0 L 100%,100% M 100%,0 L 0,100%" />
                        <rect x="25%" y="25%" width="50%" height="50%" />
                        <line x1="50%" y1="0" x2="50%" y2="100%" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" />
                      </svg>
                    )}
                    {proj.waves && (
                      <svg className="absolute inset-0 w-full h-full opacity-20 stroke-slate-400" fill="none" strokeWidth="1">
                        <path d="M 0,40 Q 25,20 50,40 T 100,40 T 150,40 T 200,40 T 250,40 T 300,40 T 350,40 T 400,40" />
                        <path d="M 0,60 Q 25,40 50,60 T 100,60 T 150,60 T 200,60 T 250,60 T 300,60 T 350,60 T 400,60" />
                        <path d="M 0,80 Q 25,60 50,80 T 100,80 T 150,80 T 200,80 T 250,80 T 300,80 T 350,80 T 400,80" />
                      </svg>
                    )}
                    {proj.cameraGrid && (
                      <svg className="absolute inset-0 w-full h-full opacity-25 stroke-slate-400" fill="none" strokeWidth="0.5">
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
                  <div className="p-2.5 bg-white/80 rounded-full border border-slate-200 text-gold-600 animate-float shadow-sm">
                    <FolderGit2 size={24} />
                  </div>
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <div className="p-6 grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    <Compass size={10} />
                    {proj.location}
                  </div>
                  <h3 className="text-lg font-bold text-navy-main group-hover:text-gold-600 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {proj.details}
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <FileCheck size={12} className="text-gold-500" />
                    Ingeniería Certificada
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
