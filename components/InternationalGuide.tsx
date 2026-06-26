"use client";

import React, { useState } from "react";
import { FileText, CreditCard, Eye, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";

export default function InternationalGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: ShieldCheck,
      title: "Trámite Legal (Firmas Remotas)",
      subtitle: "Compra sin necesidad de viajar a Venezuela",
      desc: "No necesitas estar presente físicamente en la Isla de Margarita para registrar tu propiedad. Nuestro departamento legal redacta el documento de compraventa y gestiona la firma mediante un Poder Especial otorgado en el consulado de tu país de residencia, o a través de firmas autorizadas y apostilladas.",
      badge: "100% Remoto",
      bulletPoints: [
        "Elaboración de poder especial personalizado.",
        "Acompañamiento en consulados y embajadas.",
        "Protocolización formal ante registros públicos de Nueva Esparta.",
        "Envío digitalizado e impreso de títulos originales."
      ]
    },
    {
      icon: CreditCard,
      title: "Métodos de Pago Internacionales",
      subtitle: "Flujo de fondos transparente y seguro",
      desc: "Facilitamos transacciones seguras para que adquieras tus lotes o realices los pagos mensuales de construcción. Soportamos diversos canales financieros regulados para agilizar la entrada de capital de manera clara y auditable.",
      badge: "Múltiples Opciones",
      bulletPoints: [
        "Pagos internacionales seguros a través de PayPal."
      ]
    },
    {
      icon: Eye,
      title: "Reportes Periódicos de Obra",
      subtitle: "Mantente al tanto desde cualquier lugar",
      desc: "Entendemos la preocupación de no estar en el sitio para inspeccionar la obra. Por ello, te enviamos reportes periódicos y fotografías sobre el avance y estado del proyecto para tu absoluta tranquilidad y transparencia.",
      badge: "Transparencia",
      bulletPoints: [
        "Fotografías del avance físico de la construcción.",
        "Reportes detallados de las etapas completadas.",
        "Comunicación constante con el equipo supervisor.",
        "Comparación de planificación vs. avance real."
      ]
    },
    {
      icon: FileText,
      title: "Handover & Gestión de Renta",
      subtitle: "De la entrega física al retorno de tu inversión",
      desc: "Al culminar los acabados, gestionamos todos los permisos de habitabilidad locales. Te entregamos la villa lista para habitar. Si deseas rentabilizarla, te asesoramos en la contratación de gestores de propiedades que manejan alquileres en Airbnb.",
      badge: "Llave en Mano",
      bulletPoints: [
        "Trámite de cédulas catastrales y servicios básicos.",
        "Entrega física o entrega a administradores de confianza.",
        "Asesoría para amoblado y decoración adaptada a rentas cortas.",
        "Potencial de rentabilidad anual en dólares."
      ]
    }
  ];

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section id="guia-internacional" className="py-24 bg-white relative border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,138,34,0.03),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-navy-main text-xs font-bold uppercase tracking-[0.2em] border-b border-navy-main/30 pb-2">
            Inversionistas en la Diáspora y el Extranjero
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-main leading-tight">
            Guía de Inversión y Compra Remota
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Diseñamos un ecosistema completo para derribar las barreras de distancia, burocracia y desconfianza. Aquí tienes el paso a paso de cómo operamos para darte la mayor seguridad jurídica.
          </p>
        </div>

        {/* Tab & Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Steps List (Tabs) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    activeStep === idx
                      ? "bg-slate-50 border-gold-500/40 shadow-md text-navy-main"
                      : "bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-navy-main"
                  }`}
                >
                  <div className={`p-3 rounded-xl border shrink-0 transition-colors ${
                    activeStep === idx 
                      ? "bg-gold-500/10 text-gold-600 border-gold-500/20" 
                      : "bg-slate-100 text-slate-400 border-slate-200"
                  }`}>
                    <StepIcon size={20} />
                  </div>
                  <div className="grow">
                    <span className="text-[10px] tracking-wider font-bold text-slate-400 uppercase block mb-0.5">
                      Paso 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold tracking-tight">{step.title}</h3>
                  </div>
                  <ArrowRight size={16} className={`transition-transform duration-300 ${
                    activeStep === idx ? "translate-x-1 text-gold-600" : "opacity-0"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Step Panel Details */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600 bg-gold-500/5 border border-gold-500/20 px-3 py-1 rounded-full">
                  {steps[activeStep].badge}
                </span>
                <span className="text-sm font-bold text-slate-400">Paso {activeStep + 1} de 4</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3.5 bg-gold-500/10 text-gold-600 rounded-2xl border border-gold-500/20">
                  <ActiveIcon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-main leading-tight">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm text-gold-600 font-medium">{steps[activeStep].subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                {steps[activeStep].desc}
              </p>

              <div className="border-t border-slate-100 pt-6 mt-6">
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center gap-2">
                  <BookOpen size={12} /> Detalles y Cobertura:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {steps[activeStep].bulletPoints.map((point, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
