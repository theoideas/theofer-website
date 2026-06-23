"use client";

import React from "react";
import Link from "next/link";

export default function HomeMargaritaCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#111827] border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          ¿Por qué algunos inversionistas ya están entrando en Margarita?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
          Hoy, la Isla de Margarita presenta condiciones únicas para inversiones inmobiliarias bien analizadas y estratégicamente acompañadas. Combina ubicación, turismo y proyección futura en un momento clave del mercado.
        </p>
        <div className="pt-4">
          <Link 
            href="/inversiones"
            className="inline-block px-8 py-4 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-lg"
          >
            Quiero invertir en la Isla de Margarita
          </Link>
        </div>
      </div>
    </section>
  );
}
