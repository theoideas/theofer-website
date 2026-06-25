"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Loader2 } from "lucide-react";

// Dynamically import the map component with SSR disabled
// This is required because Leaflet relies heavily on the `window` object
const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="animate-spin text-gold-500" size={32} />
        <span className="text-xs uppercase tracking-widest font-bold">Cargando Mapa Satelital...</span>
      </div>
    </div>
  ),
});

export default function TerrainMap() {
  return (
    <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl relative shadow-lg group">
      <MapLeaflet />
    </div>
  );
}
