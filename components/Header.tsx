"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Landmark, Compass, FileText, PhoneCall } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
        ? "bg-gray-950/80 py-3 shadow-lg backdrop-blur-md border-white/10"
        : "bg-transparent py-5 border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link href="/" className="flex flex-col cursor-pointer group">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wider text-white group-hover:text-gold-400 transition-colors">
              THEO<span className="text-gold-500">FER</span>
            </span>
          </div>
          <span className="text-[9px] tracking-[0.25em] text-gray-400 uppercase font-semibold">
            Ingeniería & Inversiones
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-gray-950/60 p-1.5 rounded-full border border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${isActive(item.href)
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center gap-2 bg-white text-black hover:bg-gray-200"
          >
            <PhoneCall size={13} />
            Hablemos sobre tu proyecto
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center relative z-[60]">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-3 bg-gray-900/40 rounded-xl border border-gray-800 touch-manipulation"
            aria-label="Alternar menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-80 bg-gray-950 border-l border-gray-800 shadow-2xl p-6 transition-all duration-300 transform ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full justify-between pt-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
                Navegación
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-2.5 px-4 rounded-lg text-left text-sm font-semibold tracking-wider uppercase transition-all ${isActive(item.href)
                      ? "bg-white text-black"
                      : "bg-gray-900/60 text-gray-300 hover:bg-gray-900"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Call CTA in Drawer */}
          <div>
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200"
            >
              <PhoneCall size={16} />
              Hablemos sobre tu proyecto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}