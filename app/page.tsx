"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProyectosSection from "@/components/ProyectosSection";
import InversionesSection from "@/components/InversionesSection";
import InternationalGuide from "@/components/InternationalGuide";
import PortafolioGallery from "@/components/PortafolioGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Landmark, Compass, Sparkles } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "proyectos" | "inversiones">("all");

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] overflow-hidden">
      {/* Top Navbar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Split Selector Section */}
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main id="main-content-section" className="relative">
        
        {/* Dynamic Branch Intro Divider (Only visible when not on split home or for contextual transition) */}
        {activeTab !== "all" && (
          <div className="bg-gray-950 border-y border-gray-900 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  activeTab === "proyectos" 
                    ? "bg-cyber-teal/10 text-cyber-teal border-cyber-teal/20"
                    : "bg-gold-500/10 text-gold-400 border-gold-500/20"
                }`}>
                  {activeTab === "proyectos" ? <Compass size={20} /> : <Landmark size={20} />}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                    Viendo: {activeTab === "proyectos" ? "TheoFer Proyectos" : "TheoFer Inversiones"}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {activeTab === "proyectos" 
                      ? "Estudio de Ingeniería Digital, Planos y Cálculos" 
                      : "Venta de Lotes y Construcción Llave en Mano en Margarita"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveTab("all");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-4 py-1.5 rounded-full border border-gray-800 text-[10px] text-gray-400 font-bold uppercase tracking-wider hover:text-white hover:border-gray-700 transition-colors"
              >
                Volver a Vista General
              </button>
            </div>
          </div>
        )}

        {/* PROYECTOS SECTION (Digital Engineering) */}
        {(activeTab === "all" || activeTab === "proyectos") && <ProyectosSection />}

        {/* INVERSIONES SECTION (Margarita Real Estate & Design-Build) */}
        {(activeTab === "all" || activeTab === "inversiones") && <InversionesSection />}

        {/* TRUST-BUILDING GUIDE (For Remote International Investors) */}
        {(activeTab === "all" || activeTab === "inversiones") && <InternationalGuide />}

        {/* INTEGRATED PORTFOLIO (Filters always available) */}
        <PortafolioGallery />

        {/* CONTACT FORM (With WhatsApp redirect & lead qualification) */}
        <ContactForm />
      </main>

      {/* Footer Sitemap & Disclaimer */}
      <Footer />
    </div>
  );
}
