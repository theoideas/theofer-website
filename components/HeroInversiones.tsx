"use client";

import React from "react";
import { Landmark, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroInversiones() {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden flex flex-col bg-[#030712]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="relative h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 overflow-hidden bg-gray-950/80">
        {/* Soft radial gold pattern for luxury vibe */}
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-60"></div>
        
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent opacity-100"></div>

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
            Invierte en lotes de terrenos residenciales y turísticos con alta proyección en el sector de Taguantar, Isla de Margarita. 
            Adquiere tu lote financiado y diseñamos tu villa <strong className="text-white">llave en mano desde el exterior.</strong>
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById("main-content-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explorar Terrenos
              <ArrowRight size={14} />
            </button>
            <span className="hidden sm:inline-block text-xs text-gray-500 tracking-wider uppercase font-semibold">
              Isla de Margarita
            </span>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute right-[-10%] bottom-[-5%] text-gray-800/10 pointer-events-none select-none">
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
