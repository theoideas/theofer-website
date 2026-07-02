"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { Facebook, Instagram } from "./SocialIcons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Inversiones", href: "/inversiones" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-2.5 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src="/logo-theofer-negro.svg" 
            alt="THEOFER" 
            className="h-[65px] md:h-[94px] w-auto shrink-0"
          />
          <span className="text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.25em] text-slate-500 uppercase font-bold pt-1 leading-tight">
            Inversiones &<br />Proyectos
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-slate-50 p-1.5 rounded-full border border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  isActive(item.href)
                    ? "bg-navy-main text-white shadow-md"
                    : "text-slate-600 hover:text-navy-main"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 text-slate-400 mr-2">
            <a href="https://www.facebook.com/Theoferinversiones" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/theoferllc/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
          <Link
            href="/contacto"
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center gap-2 bg-gold-500 text-white hover:bg-gold-600"
          >
            <PhoneCall size={13} />
            Hablemos sobre tu proyecto
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center relative z-50">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-navy-main focus:outline-none p-3 bg-slate-100 rounded-xl border border-gray-200 touch-manipulation"
            aria-label="Alternar menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full bg-white shadow-2xl p-6 border-l border-gray-100 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-6 overflow-y-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                Navegación
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-2.5 px-4 rounded-lg text-left text-sm font-semibold tracking-wider uppercase transition-all ${
                      isActive(item.href)
                        ? "bg-navy-main text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Call CTA in Drawer */}
          <div className="mt-8 space-y-6">
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-2 rounded-xl text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-gold-500 text-white hover:bg-gold-600"
            >
              <PhoneCall size={16} className="shrink-0" />
              <span>Hablemos sobre tu proyecto</span>
            </Link>

            <div className="pt-6 border-t border-gray-100 flex justify-center gap-6">
              <a href="https://www.facebook.com/Theoferinversiones" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-slate-500 rounded-full hover:bg-gold-50 hover:text-gold-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/theoferllc/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-slate-500 rounded-full hover:bg-gold-50 hover:text-gold-600 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}