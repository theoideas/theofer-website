"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Landmark, Compass, Hammer, FileText, PhoneCall } from "lucide-react";

interface HeaderProps {
  activeTab: "all" | "proyectos" | "inversiones";
  setActiveTab: (tab: "all" | "proyectos" | "inversiones") => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Proyectos", value: "proyectos" as const, icon: Compass },
    { label: "Inversiones", value: "inversiones" as const, icon: Landmark },
  ];

  const scrollSections = [
    { label: "Guía Internacional", id: "guia-internacional" },
    { label: "Portafolio", id: "portafolio" },
    { label: "Contacto", id: "contacto" },
  ];

  const handleNavClick = (tab: "all" | "proyectos" | "inversiones") => {
    setActiveTab(tab);
    setIsOpen(false);
    // Scroll to top or specific section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionScroll = (id: string) => {
    setIsOpen(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-3 shadow-lg backdrop-blur-md bg-opacity-70"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("all")} 
          className="flex flex-col cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wider text-white group-hover:text-gold-400 transition-colors">
              THEO<span className={activeTab === "proyectos" ? "text-cyber-teal" : "text-gold-500"}>FER</span>
            </span>
          </div>
          <span className="text-[9px] tracking-[0.25em] text-gray-400 uppercase font-semibold">
            Ingeniería & Inversiones
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {/* Main Branches */}
          <div className="flex items-center bg-gray-950/60 p-1 rounded-full border border-gray-800">
            <button
              onClick={() => handleNavClick("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === "all"
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              General
            </button>
            <button
              onClick={() => handleNavClick("proyectos")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === "proyectos"
                  ? "bg-cyber-teal/95 text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Proyectos
            </button>
            <button
              onClick={() => handleNavClick("inversiones")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === "inversiones"
                  ? "bg-gold-500 text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Inversiones
            </button>
          </div>

          {/* Section Anchors */}
          <div className="flex items-center gap-6">
            {scrollSections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionScroll(item.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleSectionScroll("contacto")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center gap-2 ${
              activeTab === "proyectos"
                ? "bg-gradient-to-r from-cyber-blue to-cyber-teal text-black hover:shadow-cyber-teal/20"
                : activeTab === "inversiones"
                ? "bg-gradient-to-r from-gold-600 to-gold-400 text-black hover:shadow-gold-500/20"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            <PhoneCall size={13} />
            Contacto Directo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-1 bg-gray-900/40 rounded border border-gray-800"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-80 bg-gray-950 border-l border-gray-800 shadow-2xl p-6 transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-12">
          <div className="space-y-8">
            {/* Branches Selection */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
                Líneas de Negocio
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => handleNavClick("all")}
                  className={`w-full py-2.5 px-4 rounded-lg text-left text-sm font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "all"
                      ? "bg-white text-black"
                      : "bg-gray-900/60 text-gray-300 hover:bg-gray-900"
                  }`}
                >
                  General (Ambos)
                </button>
                <button
                  onClick={() => handleNavClick("proyectos")}
                  className={`w-full py-2.5 px-4 rounded-lg text-left text-sm font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "proyectos"
                      ? "bg-cyber-teal text-black font-bold"
                      : "bg-gray-900/60 text-gray-300 hover:bg-gray-900"
                  }`}
                >
                  TheoFer Proyectos
                </button>
                <button
                  onClick={() => handleNavClick("inversiones")}
                  className={`w-full py-2.5 px-4 rounded-lg text-left text-sm font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "inversiones"
                      ? "bg-gold-500 text-black font-bold"
                      : "bg-gray-900/60 text-gray-300 hover:bg-gray-900"
                  }`}
                >
                  TheoFer Inversiones
                </button>
              </div>
            </div>

            {/* Sections List */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                Navegación
              </h3>
              {scrollSections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionScroll(item.id)}
                  className="block w-full text-left py-2 text-base text-gray-300 hover:text-white font-medium border-b border-gray-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Call CTA in Drawer */}
          <div>
            <button
              onClick={() => handleSectionScroll("contacto")}
              className={`w-full py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${
                activeTab === "proyectos"
                  ? "bg-gradient-to-r from-cyber-blue to-cyber-teal text-black"
                  : activeTab === "inversiones"
                  ? "bg-gradient-to-r from-gold-600 to-gold-400 text-black"
                  : "bg-white text-black"
              }`}
            >
              <PhoneCall size={16} />
              Iniciar Asesoría
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
