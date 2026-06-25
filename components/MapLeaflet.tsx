"use client";

import React from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon path issues with Next.js
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

interface TerrainMapProps {
  center?: [number, number];
  polygon?: [number, number][];
  zoom?: number;
}

export default function MapLeaflet({
  center = [11.017272, -64.008383], // Center based on the user's coordinates
  polygon = [
    [11.018151, -64.010837], // Top-Left
    [11.018144, -64.005930], // Top-Right
    [11.016393, -64.005930], // Bottom-Right (inferred)
    [11.016393, -64.011429], // Bottom-Left
  ],
  zoom = 15, // Zoomed out slightly to show the whole lot
}: TerrainMapProps) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 z-0">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        {/* Esri World Imagery (High Res Satellite, Free, no API Key) */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        />
        
        {/* Optional: Add a subtle dark overlay to the map to keep the "premium" contrast if we want, 
            but usually satellite imagery is okay as is. The user wanted the actual location. */}
            
        <Polygon 
          positions={polygon} 
          pathOptions={{ 
            color: "#C88A22", // gold-500
            fillColor: "#C88A22", 
            fillOpacity: 0.2, 
            weight: 3 
          }} 
        />
        
        <Marker position={center} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <strong className="text-navy-main block">Terreno en Venta</strong>
              <span className="text-slate-500 text-xs">Isla de Margarita</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
