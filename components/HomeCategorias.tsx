"use client";

import React from "react";
import Link from "next/link";

export default function HomeCategorias() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
      {/* Terrenos Block */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-full group overflow-hidden bg-gray-900">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-black/80 transition-transform duration-700 group-hover:scale-105"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-12 px-6">
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg">
              Terrenos
            </h2>
          </div>
          <Link 
            href="/inversiones"
            className="px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold shadow-xl hover:bg-gray-200 transition-colors"
          >
            Quiero información sobre los Terrenos
          </Link>
        </div>
      </div>

      {/* Urbanismos Block */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-full group overflow-hidden bg-stone-900">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.8))] transition-transform duration-700 group-hover:scale-105"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-12 px-6">
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg">
              Urbanismos
            </h2>
          </div>
          <Link 
            href="/proyectos"
            className="px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold shadow-xl hover:bg-gray-200 transition-colors"
          >
            Quiero una evalución de mi proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
