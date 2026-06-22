"use client";

import HeroGeneral from "@/components/HeroGeneral";
import ServiciosPrincipales from "@/components/ServiciosPrincipales";
import PorQueElegirnos from "@/components/PorQueElegirnos";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#030712] overflow-hidden animate-fade-in"
    >
      <HeroGeneral />
      <ServiciosPrincipales />
      <PorQueElegirnos />
    </div>
  );
}
