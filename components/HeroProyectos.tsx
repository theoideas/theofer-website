"use client";

import React from "react";
import { Compass, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroProyectos() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden flex flex-col bg-navy-main">
      
      {/* Image Background */}
      <img 
        src="/hero-proyectos.jpg" 
        alt="Proyectos TheoFer"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-main/90 via-navy-main/60 to-navy-main/20 z-0"></div>

      <div className="relative h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 overflow-hidden bg-transparent z-10">
        
        <div className="relative z-10 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
            <Monitor size={12} className="animate-pulse" />
            Ingeniería Digital & Renders
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            TheoFer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300">
              Proyectos
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            Especialistas en ingeniería civil, cálculos estructurales, plantas de energía fotovoltaica, diseño eléctrico e hidráulico, y digitalización 3D. 
            <strong className="text-white block mt-1">Servicio digital sin fronteras para el mundo.</strong>
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById("main-content-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Ver Servicios Digitales
              <ArrowRight size={14} />
            </button>
            <span className="hidden sm:inline-block text-xs text-slate-300 tracking-wider uppercase font-semibold">
              Cálculos & Planos 3D
            </span>
          </div>
        </div>
      </div>
      
      {/* Down Scroll Indicator */}
      <div 
        onClick={() => {
          const element = document.getElementById("main-content-section");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-gold-400 transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Descubrir</span>
        <div className="w-[20px] h-[35px] rounded-full border border-white/30 flex justify-center p-1.5 hover:border-gold-400 transition-colors">
          <div className="w-[4px] h-[8px] bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
