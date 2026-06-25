"use client";

import React from "react";
import Link from "next/link";

export default function HomeCategorias() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
      {/* Terrenos Block */}
      <div 
        className="relative w-full md:w-1/2 h-[400px] md:h-full group overflow-hidden bg-navy-main"
        style={{ backgroundImage: "url('/terrenos-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Elegant overlay to make it look premium and not just a raw photo */}
        <div className="absolute inset-0 bg-navy-main/70 mix-blend-multiply transition-colors duration-700 group-hover:bg-navy-main/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-main via-navy-main/20 to-transparent opacity-90"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-12 px-6 z-10">
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg transform transition-transform duration-700 group-hover:scale-105">
              Terrenos
            </h2>
          </div>
          <Link 
            href="/contacto?branch=inversiones&investmentType=terreno"
            className="px-6 py-3 rounded-full bg-gold-500 text-white text-xs sm:text-sm font-bold shadow-lg hover:bg-gold-400 transition-all transform hover:-translate-y-1"
          >
            Quiero información sobre los Terrenos
          </Link>
        </div>
      </div>

      {/* Urbanismos Block */}
      <div 
        className="relative w-full md:w-1/2 h-[400px] md:h-full group overflow-hidden bg-slate-900"
        style={{ backgroundImage: "url('/urbanismos-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply transition-colors duration-700 group-hover:bg-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-12 px-6 z-10">
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg transform transition-transform duration-700 group-hover:scale-105">
              Urbanismos
            </h2>
          </div>
          <Link 
            href="/contacto?branch=inversiones&investmentType=ambos"
            className="px-6 py-3 rounded-full bg-white text-navy-main text-xs sm:text-sm font-bold shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1"
          >
            Quiero una evaluación de mi proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
