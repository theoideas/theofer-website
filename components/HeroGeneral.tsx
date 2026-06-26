"use client";

import React from "react";
import { Building2, Compass, ArrowRight, Zap, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function HeroGeneral() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden flex flex-col bg-navy-main">
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/video-home-1.webm" type="video/webm" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-main/90 via-navy-main/60 to-navy-main/20 z-0"></div>

      <div className="relative h-full flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 z-10">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
            <GraduationCap size={14} className="animate-pulse" />
            Ingeniería, Arquitectura e Inversión
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            THEOFER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300">
              Inversiones & Proyectos
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-light max-w-xl">
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
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 hover:border-gold-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
            >
              Proyectos de Ingeniería
              <Zap size={14} className="text-gold-400" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Down Scroll Indicator */}
      <div 
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
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
