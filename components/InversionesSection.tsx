"use client";

import React from "react";
import Link from "next/link";
import { Landmark, CheckCircle, BarChart, Compass, Home, Shield, Plane } from "lucide-react";

export default function InversionesSection() {
  const lots = [
    {
      name: "Lotes de Terreno en Taguantar",
      price: "Contado: $5,000 USD",
      area: "Desarrollo Residencial / Turístico",
      desc: "Ubicados en zona de expansión con alta proyección en la Isla de Margarita. Ideales para construcción residencial o inversión a mediano plazo.",
      tag: "Oportunidad"
    },
    {
      name: "Plan de Financiamiento a Cuotas",
      price: "Financiado: $5,500 USD",
      area: "Sin trámites bancarios",
      desc: "Reserva con $1,000. A los 15 días $1,500. Luego, 6 cuotas de $500 (inician a los 30 días).",
      tag: "Facilidades de Pago"
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: "Seguridad Jurídica y Propiedad en Regla",
      desc: "Garantizamos que todos los terrenos cuenten con su documentación libre de gravámenes, listos para firmar en registro público."
    },
    {
      icon: BarChart,
      title: "Alta Plusvalía / Retorno de Inversión",
      desc: "Isla de Margarita mantiene precios históricamente bajos por m², ofreciendo un potencial de revalorización inigualable para la diáspora."
    },
    {
      icon: Home,
      title: "Construcción 'Design-Build' Llave en Mano",
      desc: "Desde el plano digital hasta los acabados finales. Nos encargamos de todo el proceso de ingeniería y edificación mientras estás fuera."
    }
  ];

  const handleCTA = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-gold-radial opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/30 pb-2">
            Invertir en Venezuela es una oportunidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-main leading-tight">
            Desarrollamos y acompañamos proyectos de inversión inmobiliaria y adquisición de Terrenos en Venezuela, con foco estratégico en la Isla de Margarita.
          </h2>
          <div className="pt-8">
             <button
                onClick={handleCTA}
                className="px-6 py-3 rounded-full bg-gold-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-gold-600 hover:scale-105 transition-all shadow-md"
              >
                Solicitar evaluación de inversión
              </button>
          </div>
        </div>

        {/* Value Proposition Cards (Replaced by Image Split) */}
        <div className="w-full flex flex-col md:flex-row h-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-20 border border-slate-200/50">
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
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg transform transition-transform duration-700 group-hover:scale-105 text-center">
                  Terrenos
                </h2>
              </div>
              <Link 
                href="/contacto?branch=inversiones&investmentType=terreno"
                className="px-6 py-3 rounded-full bg-gold-500 text-white text-xs sm:text-sm font-bold shadow-lg hover:bg-gold-400 transition-all transform hover:-translate-y-1 text-center"
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
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg transform transition-transform duration-700 group-hover:scale-105 text-center">
                  Urbanismos
                </h2>
              </div>
              <Link 
                href="/contacto?branch=inversiones&investmentType=ambos"
                className="px-6 py-3 rounded-full bg-white text-navy-main text-xs sm:text-sm font-bold shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1 text-center"
              >
                Quiero una evaluación de mi proyecto
              </Link>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <Link href="/contacto?branch=inversiones&investmentType=terreno" className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-gold-500/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group shadow-sm cursor-pointer">
             <h4 className="text-base font-bold text-navy-main mb-4 uppercase group-hover:text-gold-600 transition-colors">¿Por qué Venezuela?</h4>
             <div className="text-sm text-slate-600 font-light space-y-4 mb-6">
               <div className="bg-gold-500/10 border border-gold-500/20 p-3 rounded-lg">
                 <p className="font-bold text-navy-main text-xs sm:text-sm">Un mercado con alto potencial y baja competencia.</p>
               </div>
               <div>
                 <p className="mb-3 font-semibold text-slate-700">Venezuela atraviesa una etapa única:</p>
                 <ul className="space-y-2 text-xs sm:text-sm">
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Precios inmobiliarios altamente competitivos</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Amplias oportunidades de revalorización</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Espacios estratégicos aún sin explotar</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Interés creciente de inversión privada</span></li>
                 </ul>
               </div>
               <p className="font-bold text-navy-main border-l-2 border-gold-500 pl-3">Para quienes saben analizar riesgos y oportunidades, el momento es ahora.</p>
             </div>
             <span className="text-slate-500 text-xs font-bold uppercase mt-auto text-left group-hover:text-navy-main transition-colors block">Quiero invertir en Venezuela →</span>
           </Link>
           <Link href="/contacto?branch=inversiones&investmentType=terreno" className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-gold-500/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group shadow-sm cursor-pointer">
             <h4 className="text-base font-bold text-navy-main mb-4 uppercase group-hover:text-gold-600 transition-colors">¿Por qué la Isla de Margarita?</h4>
             <div className="text-sm text-slate-600 font-light space-y-4 mb-6">
               <div className="bg-gold-500/10 border border-gold-500/20 p-3 rounded-lg">
                 <p className="font-bold text-navy-main text-xs sm:text-sm">Isla de Margarita: ubicación, turismo y proyección</p>
               </div>
               <div>
                 <p className="mb-3 font-semibold text-slate-700">La Isla de Margarita destaca por:</p>
                 <ul className="space-y-2 text-xs sm:text-sm">
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Ubicación estratégica en el Caribe</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Potencial turístico continuo</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Terrenos con alto margen de crecimiento</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Demanda futura en proyectos residenciales y comerciales</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Clima, conectividad y atractivo internacional</span></li>
                 </ul>
               </div>
               <p className="font-bold text-navy-main border-l-2 border-gold-500 pl-3">No es solo un destino turístico.<br/>Es un activo con visión de largo plazo.</p>
             </div>
             <span className="text-slate-500 text-xs font-bold uppercase mt-auto text-left group-hover:text-navy-main transition-colors block">Evaluar terrenos y proyectos →</span>
           </Link>
           <Link href="/contacto?branch=inversiones&investmentType=terreno" className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-gold-500/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group shadow-sm cursor-pointer">
             <h4 className="text-base font-bold text-navy-main mb-4 uppercase group-hover:text-gold-600 transition-colors">¿Cómo reducimos riesgos?</h4>
             <div className="text-sm text-slate-600 font-light space-y-4 mb-6">
               <div className="bg-gold-500/10 border border-gold-500/20 p-3 rounded-lg">
                 <p className="font-bold text-navy-main text-xs sm:text-sm">Invertir acompañado marca la diferencia</p>
               </div>
               <div>
                 <p className="mb-3 font-semibold text-slate-700">Nuestro enfoque elimina los principales miedos del inversionista:</p>
                 <ul className="space-y-2 text-xs sm:text-sm">
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Evaluación técnica del terreno o inmueble</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Análisis de viabilidad</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Asesoría legal y normativa</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Proyectos escalables</span></li>
                   <li className="flex items-start gap-2"><CheckCircle size={14} className="text-gold-500 mt-0.5 shrink-0" /><span>Acompañamiento profesional en cada fase</span></li>
                 </ul>
               </div>
               <p className="font-bold text-navy-main border-l-2 border-gold-500 pl-3">Invertir sin información es un riesgo.<br/>Invertir con respaldo técnico es una decisión.</p>
             </div>
             <span className="text-slate-500 text-xs font-bold uppercase mt-auto text-left group-hover:text-navy-main transition-colors block">Evaluar oportunidad de inversión →</span>
           </Link>
        </div>

      </div>
    </section>
  );
}
