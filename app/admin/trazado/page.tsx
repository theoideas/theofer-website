"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { Upload, Trash2, Check, Copy } from "lucide-react";

type Point = { x: number; y: number };
type PolygonData = {
  id: string;
  name: string;
  status: "disponible" | "vendido" | "reservado";
  points: Point[];
};

export default function TracingTool() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [polygons, setPolygons] = useState<PolygonData[]>([]);
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  
  // Form state
  const [lotName, setLotName] = useState("Lote I-01");
  const [lotStatus, setLotStatus] = useState<"disponible" | "vendido" | "reservado">("disponible");
  
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setPolygons([]);
      setCurrentPoints([]);
    }
  };

  const handleMapClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    
    // Get click coordinates relative to the image size
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCurrentPoints([...currentPoints, { x, y }]);
  };

  const handleSavePolygon = () => {
    if (currentPoints.length < 3) {
      alert("Necesitas al menos 3 puntos para cerrar un polígono.");
      return;
    }

    const newPolygon: PolygonData = {
      id: Date.now().toString(),
      name: lotName,
      status: lotStatus,
      points: currentPoints,
    };

    setPolygons([...polygons, newPolygon]);
    setCurrentPoints([]);
    
    // Auto-increment the lot name if it ends in a number
    const match = lotName.match(/(\D+)(\d+)$/);
    if (match) {
      const nextNum = parseInt(match[2], 10) + 1;
      setLotName(`${match[1]}${nextNum.toString().padStart(match[2].length, '0')}`);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(polygons, null, 2));
    alert("¡Código JSON copiado al portapapeles!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-navy-main p-6 text-white">
          <h1 className="text-2xl font-bold uppercase tracking-widest">Herramienta de Trazado de Lotes</h1>
          <p className="text-slate-300 text-sm mt-2">Dibuja polígonos sobre la imagen para crear el mapa interactivo.</p>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Map Area */}
          <div className="lg:col-span-2 space-y-4">
            {!imageUrl ? (
              <div className="w-full aspect-video border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center bg-slate-50">
                <Upload className="text-slate-400 mb-4" size={48} />
                <label className="px-6 py-3 bg-navy-main text-white font-bold uppercase text-xs rounded-full cursor-pointer hover:bg-navy-main/90 transition-colors">
                  Subir Imagen del Terreno
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            ) : (
              <div className="relative w-full border border-slate-200 rounded-xl overflow-hidden bg-slate-100 select-none">
                <div 
                  className="relative cursor-crosshair" 
                  onClick={handleMapClick}
                >
                  <img 
                    ref={imgRef}
                    src={imageUrl} 
                    alt="Mapa a trazar" 
                    className="w-full h-auto block pointer-events-none"
                  />
                  
                  {/* Render existing polygons */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {polygons.map((poly) => (
                      <polygon
                        key={poly.id}
                        points={poly.points.map(p => `${p.x}%,${p.y}%`).join(" ")}
                        fill={poly.status === "disponible" ? "rgba(200, 138, 34, 0.4)" : "rgba(239, 68, 68, 0.4)"}
                        stroke={poly.status === "disponible" ? "#C88A22" : "#ef4444"}
                        strokeWidth="2"
                      />
                    ))}
                    
                    {/* Render current drawing polygon */}
                    {currentPoints.length > 0 && (
                      <>
                        <polygon
                          points={currentPoints.map(p => `${p.x}%,${p.y}%`).join(" ")}
                          fill="rgba(59, 130, 246, 0.3)"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeDasharray="4"
                        />
                        {currentPoints.map((p, i) => (
                          <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r="4" fill="#3b82f6" />
                        ))}
                      </>
                    )}
                  </svg>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setCurrentPoints([])}
                    className="px-4 py-2 bg-white text-red-500 text-xs font-bold uppercase shadow-md rounded border border-red-100 hover:bg-red-50"
                  >
                    Borrar Puntos
                  </button>
                  <button 
                    onClick={() => setImageUrl(null)}
                    className="px-4 py-2 bg-white text-slate-500 text-xs font-bold uppercase shadow-md rounded border border-slate-200 hover:bg-slate-50"
                  >
                    Cambiar Foto
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Controls Area */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-navy-main uppercase text-sm mb-4">1. Datos del Lote</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre del Lote (Ej. Lote I-01)</label>
                  <input 
                    type="text" 
                    value={lotName}
                    onChange={(e) => setLotName(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-slate-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Estado</label>
                  <select 
                    value={lotStatus}
                    onChange={(e) => setLotStatus(e.target.value as any)}
                    className="w-full px-4 py-2 rounded border border-slate-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  >
                    <option value="disponible">Disponible</option>
                    <option value="vendido">Vendido</option>
                    <option value="reservado">Reservado</option>
                  </select>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-navy-main uppercase text-sm mb-2">2. Dibuja (Clics: {currentPoints.length})</h3>
                  <p className="text-xs text-slate-500 mb-4">Da clic en las esquinas del lote en la imagen. Al terminar, guarda el polígono.</p>
                  
                  <button 
                    onClick={handleSavePolygon}
                    disabled={currentPoints.length < 3}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-white font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-gold-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <Check size={16} />
                    Guardar Lote Actual
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-navy-main uppercase text-sm">3. Código Generado</h3>
                <button 
                  onClick={handleCopyCode}
                  className="text-gold-500 hover:text-gold-600 p-1"
                  title="Copiar Código"
                >
                  <Copy size={16} />
                </button>
              </div>
              <textarea 
                readOnly 
                value={JSON.stringify(polygons, null, 2)}
                className="w-full flex-grow text-xs font-mono p-3 rounded border border-slate-300 bg-white focus:outline-none"
                placeholder="El código JSON aparecerá aquí al guardar los lotes..."
              />
              <p className="text-[10px] text-slate-400 mt-2">Copia este código y envíaselo a Antigravity.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
