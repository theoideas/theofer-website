"use client";

import React from "react";
import { Building2, Compass, ArrowRight, Zap, GraduationCap } from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";

export default function HeroGeneral() {
  return (
    <AuroraBackground className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden flex flex-col bg-white !text-slate-900">
      <div className="relative h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 overflow-hidden bg-transparent">
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30 opacity-100"></div>

        <div className="relative z-10 space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-600 text-xs font-bold uppercase tracking-wider shadow-sm">
            <GraduationCap size={14} className="animate-pulse" />
            Ingeniería, Arquitectura e Inversión
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-navy-main leading-[1.1]">
            THEOFER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400">
              Inversiones & Proyectos
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-light max-w-xl">
            Equipo de profesionales especializados en ingeniería, arquitectura, energía e inversión.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link 
              href="/inversiones"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Explorar Terrenos
              <ArrowRight size={14} />
            </Link>
            
            <Link 
              href="/proyectos"
              className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-navy-main text-xs font-bold uppercase tracking-wider hover:bg-slate-100 hover:border-gold-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
            >
              Proyectos de Ingeniería
              <Zap size={14} className="text-gold-500" />
            </Link>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute right-[-5%] bottom-[-10%] text-slate-100 pointer-events-none select-none">
          <Building2 size={500} strokeWidth={0.5} />
        </div>
      </div>
      
      {/* Down Scroll Indicator */}
      <div 
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:flex flex-col items-center gap-2 text-slate-400 hover:text-gold-500 transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Descubrir</span>
        <div className="w-[20px] h-[35px] rounded-full border border-slate-300 flex justify-center p-1.5 hover:border-gold-500">
          <div className="w-[4px] h-[8px] bg-navy-main rounded-full animate-bounce"></div>
        </div>
      </div>
    </AuroraBackground>
  );
}
