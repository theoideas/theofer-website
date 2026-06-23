"use client";

import HeroGeneral from "@/components/HeroGeneral";
import HomeTerrenos from "@/components/HomeTerrenos";
import HomeMargaritaCTA from "@/components/HomeMargaritaCTA";
import HomeCategorias from "@/components/HomeCategorias";
import ServiciosPrincipales from "@/components/ServiciosPrincipales";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#030712] overflow-hidden animate-fade-in"
    >
      <HeroGeneral />
      <HomeTerrenos />
      <HomeMargaritaCTA />
      <HomeCategorias />
      <PorQueElegirnos />
      <ServiciosPrincipales />
      <ContactForm />
    </div>
  );
}
