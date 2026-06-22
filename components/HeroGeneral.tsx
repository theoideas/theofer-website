"use client";

import React from "react";
import { Building2, Compass, ArrowRight, Zap, GraduationCap } from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";

export default function HeroGeneral() {
  return (
    <AuroraBackground className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden flex flex-col bg-[#030712] !text-white">
      <div className="relative h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 overflow-hidden bg-transparent">
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-[#030712]/30 opacity-100"></div>

        <div className="relative z-10 space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/5 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap size={14} className="animate-pulse" />
            Ingeniería, Arquitectura e Inversión
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            THEOFER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-400 to-gold-600">
              Inversiones & Proyectos
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light max-w-xl">
            Equipo de profesionales especializados en ingeniería, arquitectura, energía e inversión.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link 
              href="/inversiones"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Explorar Terrenos
              <ArrowRight size={14} />
            </Link>
            
            <Link 
              href="/proyectos"
              className="px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800 hover:border-gold-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Proyectos de Ingeniería
              <Zap size={14} className="text-gold-400" />
            </Link>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute right-[-5%] bottom-[-10%] text-gray-800/10 pointer-events-none select-none">
          <Building2 size={500} strokeWidth={0.5} />
        </div>
      </div>
      
      {/* Down Scroll Indicator */}
      <div 
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-gold-400 transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Descubrir</span>
        <div className="w-[20px] h-[35px] rounded-full border border-gray-600 flex justify-center p-1.5 hover:border-gold-400">
          <div className="w-[4px] h-[8px] bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </AuroraBackground>
  );
}
