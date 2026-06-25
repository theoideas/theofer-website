"use client";

import React from "react";
import { Landmark, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroInversiones() {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden flex flex-col bg-white">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="relative h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 overflow-hidden bg-white/80">
        {/* Soft radial gold pattern for luxury vibe */}
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-60"></div>
        
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 via-transparent to-transparent opacity-100"></div>

        <div className="relative z-10 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-600 text-xs font-bold uppercase tracking-wider">
            <MapPin size={12} className="animate-pulse" />
            Desarrollo Inmobiliario
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-main leading-tight">
            TheoFer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400">
              Inversiones
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            Invierte en lotes de terrenos residenciales y turísticos con alta proyección en el sector de Taguantar, Isla de Margarita. 
            Adquiere tu lote financiado y diseñamos tu villa <strong className="text-navy-main block mt-1">llave en mano desde el exterior.</strong>
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById("main-content-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-6 py-3 rounded-full bg-gold-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 hover:bg-gold-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explorar Terrenos
              <ArrowRight size={14} />
            </button>
            <span className="hidden sm:inline-block text-xs text-slate-500 tracking-wider uppercase font-semibold">
              Isla de Margarita
            </span>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute right-[-10%] bottom-[-5%] text-slate-200/50 pointer-events-none select-none">
          <Landmark size={400} strokeWidth={0.5} />
        </div>
      </div>
      
      {/* Down Scroll Indicator */}
      <div 
        onClick={() => {
          const element = document.getElementById("main-content-section");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:flex flex-col items-center gap-2 text-slate-400 hover:text-navy-main transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Descubrir</span>
        <div className="w-[20px] h-[35px] rounded-full border border-slate-300 flex justify-center p-1.5">
          <div className="w-[4px] h-[8px] bg-navy-main rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
