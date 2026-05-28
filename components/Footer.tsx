"use client";

import React from "react";
import { Compass, Landmark, ShieldCheck, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white">
                THEO<span className="text-gold-500">FER</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gray-500 uppercase font-semibold">
                Ingeniería & Inversiones
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Plataforma integral Design-Build. Unimos la ingeniería digital (cálculos, planos y renderizados 3D) con el desarrollo y construcción física en la Isla de Margarita.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} className="text-gold-500" />
              <span>Proyectos e Inversiones Certificadas</span>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionScroll("guia-internacional")}
                  className="hover:text-white transition-colors"
                >
                  Guía Internacional
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionScroll("portafolio")}
                  className="hover:text-white transition-colors"
                >
                  Portafolio Técnico
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionScroll("contacto")}
                  className="hover:text-white transition-colors"
                >
                  Canal de Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Detailed Services list for SEO */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyber-teal"></span>
                Cálculos Estructurales
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyber-teal"></span>
                Energía Fotovoltaica
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyber-teal"></span>
                Proyectos Hidráulicos
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyber-teal"></span>
                Venta de Terrenos (Margarita)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                Construcción Llave en Mano
              </li>
            </ul>
          </div>

          {/* Quick Contact info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Oficina Central</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-normal">
                  Sector Pampatar, Municipio Maneiro, Nueva Esparta, Venezuela.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <span className="text-gray-400 font-semibold">+58 424 888 8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <span className="text-gray-400">contacto@theofer.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="text-center sm:text-left space-y-1">
            <p>
              THEOFER LLC © {new Date().getFullYear()}. Todos los derechos reservados.
            </p>
            <p className="text-[10px] text-gray-700">
              Las planificaciones de obras y lotes de terrenos se rigen por la legislación y normativas urbanísticas de la República Bolivariana de Venezuela.
            </p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-gray-900 text-gray-400 hover:text-white rounded-xl border border-gray-800 transition-all duration-300 flex items-center gap-2"
            title="Volver al inicio"
          >
            <span>Subir</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
