"use client";

import React, { useState } from "react";
import { Compass, Landmark, ArrowRight, Monitor, MapPin } from "lucide-react";

interface HeroSectionProps {
  activeTab: "all" | "proyectos" | "inversiones";
  setActiveTab: (tab: "all" | "proyectos" | "inversiones") => void;
}

export default function HeroSection({ activeTab, setActiveTab }: HeroSectionProps) {
  const [hoveredSide, setHoveredSide] = useState<"none" | "proyectos" | "inversiones">("none");

  const handleSelect = (tab: "proyectos" | "inversiones") => {
    setActiveTab(tab);
    // Smooth scroll to the main content
    const element = document.getElementById("main-content-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col md:flex-row bg-[#030712]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyber-blue/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* BRANCH A: THEOFER PROYECTOS (Digital/Engineering Studio) */}
      <div
        onMouseEnter={() => setHoveredSide("proyectos")}
        onMouseLeave={() => setHoveredSide("none")}
        onClick={() => handleSelect("proyectos")}
        className={`relative h-1/2 md:h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-gray-800/40 transition-all duration-700 ease-out ${
          hoveredSide === "proyectos"
            ? "md:flex-[1.4] bg-gray-950/80"
            : hoveredSide === "inversiones"
            ? "md:flex-[0.6] opacity-40 filter blur-[1px]"
            : "bg-gray-950/40"
        }`}
      >
        {/* Animated grid background for engineering vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] opacity-60"></div>
        
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative z-10 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-teal/30 bg-cyber-teal/5 text-cyber-teal text-xs font-bold uppercase tracking-wider">
            <Monitor size={12} className="animate-pulse" />
            Ingeniería Digital & Renders
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            TheoFer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-teal to-cyber-blue">
              Proyectos
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            Especialistas en ingeniería civil, cálculos estructurales, plantas de energía fotovoltaica, diseño eléctrico e hidráulico, y digitalización 3D. 
            <strong className="text-white block mt-1">Servicio digital sin fronteras para el mundo.</strong>
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-teal text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyber-teal/10 hover:shadow-cyber-teal/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Ver Servicios Digitales
              <ArrowRight size={14} />
            </button>
            <span className="hidden sm:inline-block text-xs text-gray-500 tracking-wider uppercase font-semibold">
              Cálculos & Planos 3D
            </span>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute right-[-10%] bottom-[-5%] text-gray-800/10 pointer-events-none select-none transition-transform duration-700 ease-out transform group-hover:scale-110">
          <Compass size={400} strokeWidth={0.5} />
        </div>
      </div>

      {/* BRANCH B: THEOFER INVERSIONES (Real Estate & Construction Margarita) */}
      <div
        onMouseEnter={() => setHoveredSide("inversiones")}
        onMouseLeave={() => setHoveredSide("none")}
        onClick={() => handleSelect("inversiones")}
        className={`relative h-1/2 md:h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
          hoveredSide === "inversiones"
            ? "md:flex-[1.4] bg-gray-950/80"
            : hoveredSide === "proyectos"
            ? "md:flex-[0.6] opacity-40 filter blur-[1px]"
            : "bg-gray-950/40"
        }`}
      >
        {/* Soft radial gold pattern for luxury vibe */}
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-60"></div>
        
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative z-10 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/5 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <MapPin size={12} className="animate-pulse" />
            Desarrollo Inmobiliario
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            TheoFer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-400 to-gold-600">
              Inversiones
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            Invierte en lotes de terrenos residenciales y turísticos de alta plusvalía en la Isla de Margarita. 
            Te ubicamos el lote, diseñamos y construimos tu villa ideal <strong className="text-white">llave en mano desde el exterior.</strong>
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Explorar Terrenos
              <ArrowRight size={14} />
            </button>
            <span className="hidden sm:inline-block text-xs text-gray-500 tracking-wider uppercase font-semibold">
              Isla de Margarita
            </span>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute right-[-10%] bottom-[-5%] text-gray-800/10 pointer-events-none select-none transition-transform duration-700 ease-out transform group-hover:scale-110">
          <Landmark size={400} strokeWidth={0.5} />
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div 
        onClick={() => {
          const element = document.getElementById("main-content-section");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Descubrir</span>
        <div className="w-[20px] h-[35px] rounded-full border border-gray-600 flex justify-center p-1.5">
          <div className="w-[4px] h-[8px] bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
