"use client";

import React from "react";
import { MapPin, Map, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeTerrenos() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Block 1: Map Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2 aspect-video bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden relative group shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,137,27,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-700 group-hover:text-gold-500/50 transition-colors">
              <MapPin size={48} className="mb-2" />
              <span className="text-xs uppercase tracking-widest font-bold">Ubicación Satelital</span>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Venta de Terrenos Estratégicos en Isla de Margarita:
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              Ubicados en una de las zonas con mayor proyección de la isla, estos lotes representan una <strong className="text-white">oportunidad real de inversión inmobiliaria</strong> para quienes buscan adquirir terreno a precios competitivos, con alto potencial de valorización y múltiples posibilidades de desarrollo.
            </p>
            <div className="pt-4">
              <Link 
                href="/inversiones"
                className="inline-flex px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-700 hover:border-gold-500/50 transition-all duration-300 items-center gap-2"
              >
                Conocer Terrenos
                <ArrowRight size={14} className="text-gold-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Block 2: Text on Left, Image on Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Lotes de Terrenos para desarrollo residencial comercial o turístico
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              El proyecto está conformado por <strong className="text-white">lotes de terrenos individuales</strong>, cada uno con metraje ideal para construcción residencial o desarrollo a mediano plazo.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-800">
                <p className="text-gold-400 font-bold text-sm sm:text-base">
                  💰 Precio del Lote: $5.500 (PAGO POR CUOTAS).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm">Procedimiento de pagos:</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                    Reserva $1.000...
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                    A los 15 dias $1.500.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1.5"></span>
                    <span>Los 30 dias de la Reserva comienzan los pagos 6 cuotas de $500 cada uno (indistintamente a la firma del registro).</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gold-500/10 rounded-xl border border-gold-500/20 mt-4">
                <p className="text-gold-300 text-sm font-semibold">
                  📉 10% de descuento por pago de contado y obten tu Lote de Terreno en $5000.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/#contacto"
                className="inline-flex px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 items-center gap-2 shadow-lg"
              >
                Quiero Mi Terreno
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2 aspect-[4/3] bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden relative group shadow-2xl shadow-black/50">
            {/* Minimalist representation of lots */}
            <div className="absolute inset-0 p-8 grid grid-cols-2 gap-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className="border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">Lote</div>
              <div className="border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">Lote</div>
              <div className="border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">Lote</div>
              <div className="border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">Lote</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-700 pointer-events-none">
              <Map size={48} className="mb-2" />
              <span className="text-xs uppercase tracking-widest font-bold">Plano de Lotes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
