"use client";

import React from "react";
import HeroProyectos from "@/components/HeroProyectos";
import ProyectosSection from "@/components/ProyectosSection";
import PortafolioGallery from "@/components/PortafolioGallery";
import ContactForm from "@/components/ContactForm";

export default function ProyectosPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#030712] overflow-hidden animate-fade-in"
    >
      <HeroProyectos />

      <main id="main-content-section" className="relative">
        <ProyectosSection />
        <PortafolioGallery />
        
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
