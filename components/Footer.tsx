"use client";

import React from "react";
import Link from "next/link";
import { Compass, Landmark, ShieldCheck, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-main text-slate-300 border-t border-slate-accent/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col justify-center">
            <img src="/logo-theofer-blanco.svg" alt="TheoFer" className="h-[270px] w-auto object-contain object-left -my-16" />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mt-6">Contacto Directo</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-3 hover:text-gold-400 transition-colors cursor-pointer">
                <Phone size={14} className="text-gold-500" /> +58 424 888 8888
              </li>
              <li className="flex items-center gap-3 hover:text-gold-400 transition-colors cursor-pointer">
                <Mail size={14} className="text-gold-500" /> contacto@theofer.com
              </li>
              <li className="flex items-start gap-3 hover:text-gold-400 transition-colors cursor-pointer">
                <MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" /> Pampatar, Isla de Margarita, Venezuela
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mt-6">Conoce nuestros servicios</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/proyectos" className="hover:text-gold-400 transition-colors">
                  Ingeniería Estructural
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-gold-400 transition-colors">
                  Diseño Eléctrico / Fotovoltaicos
                </Link>
              </li>
              <li>
                <Link href="/inversiones" className="hover:text-gold-400 transition-colors">
                  Inversiones Inmobiliarias
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-gold-400 transition-colors">
                  Digitalización 3D y Renders
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mt-6">Suscríbete</h4>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Correo electrónico" className="bg-slate-accent/30 border border-slate-accent/50 text-white text-xs px-4 py-2 rounded-lg outline-none focus:border-gold-500 transition-colors" />
              <button className="bg-gold-500 hover:bg-gold-400 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors">
                Suscribirse
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-accent/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} theoferllc, Powered By CREARTEBRANDS
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-center">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Política de Privacidad
            </Link>
            <span className="hover:text-gold-400 transition-colors cursor-pointer">
              Términos y Condiciones
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-slate-accent/30 text-slate-300 hover:text-white hover:bg-slate-accent/50 rounded-xl border border-slate-accent/50 transition-all duration-300 flex items-center gap-2"
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

