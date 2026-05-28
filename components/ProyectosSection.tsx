"use client";

import React from "react";
import { Hammer, Zap, Layers, RefreshCw, Eye, ShieldCheck, Cpu } from "lucide-react";

export default function ProyectosSection() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Cálculos Estructurales Sismorresistentes",
      tag: "Ingeniería Civil",
      desc: "Análisis numérico riguroso, modelado de cargas y diseño de estructuras de concreto armado y acero, garantizando máxima seguridad técnica bajo normativas nacionales e internacionales de sismicidad.",
      features: ["Análisis dinámico modal", "Diseño de cimentaciones complejas", "Modelado en software especializado", "Memoria de cálculo certificada"]
    },
    {
      icon: Zap,
      title: "Diseño Eléctrico & Energía Fotovoltaica",
      tag: "Ingeniería Verde",
      desc: "Diseño de sistemas de distribución de media y baja tensión, y proyectos completos de plantas de energía solar fotovoltaica. Transición energética eficiente y sustentable.",
      features: ["Estudio de radiación y sombreado", "Cálculo de bancos de baterías", "Planos de canalización y fuerza", "Optimización de consumo energético"]
    },
    {
      icon: Cpu,
      title: "Proyectos Digitales Hidráulicos & Acueductos",
      tag: "Ingeniería Hidráulica",
      desc: "Modelado y cálculo de redes de distribución de agua potable, sistemas de bombeo y diseño de acueductos urbanos o residenciales con simulación de presiones y flujos.",
      features: ["Simulación de golpe de ariete", "Dimensionamiento de tuberías", "Cálculo de pérdidas por fricción", "Planos de perfiles longitudinales"]
    },
    {
      icon: Eye,
      title: "Digitalización 3D & Renders Fotorrealistas",
      tag: "Arquitectura Digital",
      desc: "Transformación de bocetos y planos 2D en renders tridimensionales inmersivos y recorridos virtuales hiperrealistas. Ideal para la comercialización o aprobación visual de proyectos.",
      features: ["Modelado BIM detallado", "Texturizado e iluminación realista", "Recorridos virtuales interactivos", "Renders exteriores e interiores"]
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Recepción de Requerimientos",
      desc: "Envíanos tus ideas, croquis, planos existentes o necesidades de cálculo desde cualquier parte del mundo."
    },
    {
      num: "02",
      title: "Asesoría Virtual de Planificación",
      desc: "Agendamos una reunión vía Google Meet para afinar detalles técnicos, alcance, plazos y costos del proyecto."
    },
    {
      num: "03",
      title: "Desarrollo & Simulación Digital",
      desc: "Nuestro equipo técnico realiza el modelado 3D, cálculos matemáticos y diseño de planos con software licenciado."
    },
    {
      num: "04",
      title: "Entrega de Entregables (CAD/BIM)",
      desc: "Recibes el expediente digital completo con memorias descriptivas, planos PDF, archivos CAD y renders listos para ejecutar."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyber-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-cyber-teal text-xs font-bold uppercase tracking-[0.2em] border-b border-cyber-teal/30 pb-2">
            TheoFer Proyectos • Estudio Digital
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ingeniería de Precisión y Renders sin Fronteras
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Facilitamos el desarrollo de tus obras con cálculos estructurales certificados, planos de instalaciones y representaciones 3D. Entregamos soluciones digitales completas que cumplen las normas vigentes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="glass-panel-cyber p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.01] hover:border-cyber-teal/30 hover:shadow-lg hover:shadow-cyber-teal/5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-cyber-teal/10 rounded-xl text-cyber-teal border border-cyber-teal/20 group-hover:bg-cyber-teal/20 transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs text-cyber-teal/80 font-bold uppercase tracking-wider bg-cyber-teal/5 px-3 py-1 rounded-full border border-cyber-teal/10">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-teal transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>
                <div className="border-t border-gray-900 pt-6 mt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                    Incluye en el entregable:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-teal"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Digital Workflow */}
        <div className="border border-gray-800/60 bg-gray-900/20 p-8 sm:p-12 rounded-3xl backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl font-bold text-white">¿Cómo trabajamos digitalmente?</h3>
            <p className="text-gray-400 text-sm">
              Hemos simplificado nuestra metodología para darte un servicio eficiente desde cualquier parte del mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, i) => (
              <div key={i} className="relative group p-4 border border-transparent hover:border-gray-800/40 rounded-xl transition-all">
                <div className="text-4xl font-extrabold text-gray-800 group-hover:text-cyber-teal/20 transition-colors mb-4">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
