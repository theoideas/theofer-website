"use client";

import React from "react";
import { MapPin, Map, ArrowRight } from "lucide-react";
import Link from "next/link";
import TerrainMap from "./TerrainMap";
import InteractiveMasterPlan from "./InteractiveMasterPlan";

export default function HomeTerrenos() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Block 1: Map Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Interactive Map */}
          <div className="w-full lg:w-1/2 relative group">
            <TerrainMap />
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-main leading-tight">
              Venta de Terrenos Estratégicos en Isla de Margarita:
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Ubicados en una de las zonas con mayor proyección de la isla, estos lotes representan una <strong className="text-navy-main">oportunidad real de inversión inmobiliaria</strong> para quienes buscan adquirir terreno a precios competitivos, con alto potencial de valorización y múltiples posibilidades de desarrollo.
            </p>
            <div className="pt-4">
              <Link 
                href="/inversiones"
                className="inline-flex px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-navy-main text-xs font-bold uppercase tracking-wider hover:bg-slate-100 hover:border-gold-500/50 transition-all duration-300 items-center gap-2 shadow-sm"
              >
                Conocer Terrenos
                <ArrowRight size={14} className="text-gold-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Block 2: Text on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-main leading-tight">
              Lotes de Terrenos para desarrollo residencial comercial o turístico
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              El proyecto está conformado por <strong className="text-navy-main">lotes de terrenos individuales</strong>, cada uno con metraje ideal para construcción residencial o desarrollo a mediano plazo.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-gold-600 font-bold text-sm sm:text-base">
                  💰 Precio del Lote: $5.500 (PAGO POR CUOTAS).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-navy-main font-bold text-sm">Procedimiento de pagos:</h4>
                <ul className="text-slate-600 text-sm space-y-2">
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
                <p className="text-gold-700 text-sm font-semibold">
                  📉 10% de descuento por pago de contado y obten tu Lote de Terreno en $5000.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/#contacto"
                className="inline-flex px-8 py-4 rounded-full bg-gold-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-gold-600 transition-all duration-300 items-center gap-2 shadow-lg"
              >
                Quiero Mi Terreno
              </Link>
            </div>
          </div>

          {/* Interactive Master Plan Component */}
          <div className="w-full lg:w-[55%] flex-shrink-0">
            <InteractiveMasterPlan />
          </div>
        </div>

      </div>
    </section>
  );
}
