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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white">
                THEO<span className="text-gold-500">FER</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              theoferllc
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Conoce nuestros servicios</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <span className="hover:text-gold-400 transition-colors cursor-pointer">
                  Términos y políticas
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Suscríbete</h4>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Correo electrónico" className="bg-slate-accent/30 border border-slate-accent/50 text-white text-xs px-4 py-2 rounded-lg outline-none focus:border-gold-500 transition-colors" />
              <button className="bg-gold-500 hover:bg-gold-400 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors">
                Suscribirse
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-accent/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} theoferllc, Powered By CREARTEBRANDS
            </p>
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

