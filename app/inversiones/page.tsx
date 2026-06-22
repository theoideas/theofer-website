"use client";

import React from "react";
import HeroInversiones from "@/components/HeroInversiones";
import InversionesSection from "@/components/InversionesSection";
import InternationalGuide from "@/components/InternationalGuide";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#030712] overflow-hidden animate-fade-in"
    >
      <HeroInversiones />

      <main id="main-content-section" className="relative">
        <InversionesSection />
        <InternationalGuide />
        
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
