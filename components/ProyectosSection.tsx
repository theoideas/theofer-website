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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Ingeniería Civil */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Ingeniería civil pensada para construir con criterio, seguridad y durabilidad.</h2>
            <p className="text-gray-400">
              La ingeniería civil es la base estructural de cualquier proyecto. Errores en esta etapa pueden comprometer la seguridad, la funcionalidad y la rentabilidad de una obra.
            </p>
            <div className="pt-4">
              <h4 className="text-white font-bold mb-2">Qué hacemos</h4>
              <p className="text-gray-400 mb-2">Desarrollamos proyectos de ingeniería civil para:</p>
              <ul className="text-gray-400 space-y-1 list-disc pl-5">
                <li>Obras residenciales</li>
                <li>Proyectos comerciales</li>
                <li>Infraestructura privada</li>
                <li>Desarrollo de terrenos</li>
                <li>Proyectos inmobiliarios</li>
              </ul>
              <p className="text-gray-400 mt-4">Nuestro enfoque busca garantizar estabilidad, funcionalidad y viabilidad real.</p>
            </div>
            <div className="pt-6">
              <button className="px-6 py-3 rounded-full bg-cyber-teal text-black text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all">
                Quiero una evaluación estructural
              </button>
            </div>
          </div>

          {/* Ingeniería Eléctrica */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Ingeniería Eléctrica</h2>
            <p className="text-gray-400">
              La ingeniería eléctrica es uno de los pilares más críticos de cualquier proyecto. Un diseño inadecuado no solo genera fallas técnicas, sino también sobrecostos, riesgos operativos y problemas legales.
            </p>
            <p className="text-gray-400">
              En Theofer desarrollamos soluciones eléctricas seguras, eficientes y adaptadas al entorno, siempre bajo criterios normativos y técnicos actualizados.
            </p>
            <div className="pt-6">
              <button className="px-6 py-3 rounded-full bg-cyber-teal text-black text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all">
                Solicitar evaluación estructural
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
