"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ZoomOut, Pointer } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// The JSON data provided by the user
const lotesData = [
  {
    "id": "1788899511697",
    "name": "Lote I-01",
    "status": "vendido",
    "points": [
      {
        "x": 30.6,
        "y": 32.8
      },
      {
        "x": 36.6,
        "y": 32.8
      },
      {
        "x": 36.6,
        "y": 39.0
      },
      {
        "x": 30.6,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788899528788",
    "name": "Lote I-02",
    "status": "vendido",
    "points": [
      {
        "x": 30.6,
        "y": 39.0
      },
      {
        "x": 36.6,
        "y": 39.0
      },
      {
        "x": 36.6,
        "y": 45.2
      },
      {
        "x": 30.6,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788899555303",
    "name": "Lote I-03",
    "status": "vendido",
    "points": [
      {
        "x": 30.6,
        "y": 45.2
      },
      {
        "x": 36.6,
        "y": 45.2
      },
      {
        "x": 36.6,
        "y": 51.4
      },
      {
        "x": 30.6,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788899567722",
    "name": "Lote I-04",
    "status": "vendido",
    "points": [
      {
        "x": 30.6,
        "y": 51.4
      },
      {
        "x": 36.6,
        "y": 51.4
      },
      {
        "x": 36.6,
        "y": 57.6
      },
      {
        "x": 30.6,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788899582964",
    "name": "Lote I-05",
    "status": "vendido",
    "points": [
      {
        "x": 30.6,
        "y": 57.6
      },
      {
        "x": 36.6,
        "y": 57.6
      },
      {
        "x": 36.6,
        "y": 63.8
      },
      {
        "x": 30.6,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788899624912",
    "name": "Lote I-06",
    "status": "vendido",
    "points": [
      {
        "x": 30.6,
        "y": 63.8
      },
      {
        "x": 36.6,
        "y": 63.8
      },
      {
        "x": 36.6,
        "y": 70.0
      },
      {
        "x": 30.6,
        "y": 70.0
      }
    ]
  },
  {
    "id": "1788899636029",
    "name": "Lote I-07",
    "status": "vendido",
    "points": [
      {
        "x": 38.9,
        "y": 32.8
      },
      {
        "x": 44.9,
        "y": 32.8
      },
      {
        "x": 44.9,
        "y": 39.0
      },
      {
        "x": 38.9,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788899649838",
    "name": "Lote I-08",
    "status": "vendido",
    "points": [
      {
        "x": 38.9,
        "y": 39.0
      },
      {
        "x": 44.9,
        "y": 39.0
      },
      {
        "x": 44.9,
        "y": 45.2
      },
      {
        "x": 38.9,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788899657789",
    "name": "Lote I-09",
    "status": "vendido",
    "points": [
      {
        "x": 38.9,
        "y": 45.2
      },
      {
        "x": 44.9,
        "y": 45.2
      },
      {
        "x": 44.9,
        "y": 51.4
      },
      {
        "x": 38.9,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788899668057",
    "name": "Lote I-10",
    "status": "vendido",
    "points": [
      {
        "x": 38.9,
        "y": 51.4
      },
      {
        "x": 44.9,
        "y": 51.4
      },
      {
        "x": 44.9,
        "y": 57.6
      },
      {
        "x": 38.9,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788899855449",
    "name": "Lote I-11",
    "status": "vendido",
    "points": [
      {
        "x": 38.9,
        "y": 57.6
      },
      {
        "x": 44.9,
        "y": 57.6
      },
      {
        "x": 44.9,
        "y": 63.8
      },
      {
        "x": 38.9,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788899866899",
    "name": "Lote I-12",
    "status": "vendido",
    "points": [
      {
        "x": 38.9,
        "y": 63.8
      },
      {
        "x": 44.9,
        "y": 63.8
      },
      {
        "x": 44.9,
        "y": 70.0
      },
      {
        "x": 38.9,
        "y": 70.0
      }
    ]
  },
  {
    "id": "1788899919323",
    "name": "Lote II-01",
    "status": "vendido",
    "points": [
      {
        "x": 44.9,
        "y": 32.8
      },
      {
        "x": 50.9,
        "y": 32.8
      },
      {
        "x": 50.9,
        "y": 39.0
      },
      {
        "x": 44.9,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788899932441",
    "name": "Lote II-02",
    "status": "vendido",
    "points": [
      {
        "x": 44.9,
        "y": 39.0
      },
      {
        "x": 50.9,
        "y": 39.0
      },
      {
        "x": 50.9,
        "y": 45.2
      },
      {
        "x": 44.9,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788899949903",
    "name": "Lote II-03",
    "status": "disponible",
    "points": [
      {
        "x": 44.9,
        "y": 45.2
      },
      {
        "x": 50.9,
        "y": 45.2
      },
      {
        "x": 50.9,
        "y": 51.4
      },
      {
        "x": 44.9,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788899967270",
    "name": "Lote II-04",
    "status": "vendido",
    "points": [
      {
        "x": 44.9,
        "y": 51.4
      },
      {
        "x": 50.9,
        "y": 51.4
      },
      {
        "x": 50.9,
        "y": 57.6
      },
      {
        "x": 44.9,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788899978151",
    "name": "Lote II-05",
    "status": "vendido",
    "points": [
      {
        "x": 44.9,
        "y": 57.6
      },
      {
        "x": 50.9,
        "y": 57.6
      },
      {
        "x": 50.9,
        "y": 63.8
      },
      {
        "x": 44.9,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788899989250",
    "name": "Lote II-06",
    "status": "vendido",
    "points": [
      {
        "x": 44.9,
        "y": 63.8
      },
      {
        "x": 50.9,
        "y": 63.8
      },
      {
        "x": 50.9,
        "y": 70.0
      },
      {
        "x": 44.9,
        "y": 70.0
      }
    ]
  },
  {
    "id": "1788899998281",
    "name": "Lote II-07",
    "status": "vendido",
    "points": [
      {
        "x": 53.3,
        "y": 32.8
      },
      {
        "x": 59.3,
        "y": 32.8
      },
      {
        "x": 59.3,
        "y": 39.0
      },
      {
        "x": 53.3,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788900010201",
    "name": "Lote II-08",
    "status": "vendido",
    "points": [
      {
        "x": 53.3,
        "y": 39.0
      },
      {
        "x": 59.3,
        "y": 39.0
      },
      {
        "x": 59.3,
        "y": 45.2
      },
      {
        "x": 53.3,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788900021320",
    "name": "Lote II-09",
    "status": "vendido",
    "points": [
      {
        "x": 53.3,
        "y": 45.2
      },
      {
        "x": 59.3,
        "y": 45.2
      },
      {
        "x": 59.3,
        "y": 51.4
      },
      {
        "x": 53.3,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788900031442",
    "name": "Lote II-10",
    "status": "vendido",
    "points": [
      {
        "x": 53.3,
        "y": 51.4
      },
      {
        "x": 59.3,
        "y": 51.4
      },
      {
        "x": 59.3,
        "y": 57.6
      },
      {
        "x": 53.3,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788900044452",
    "name": "Lote II-11",
    "status": "vendido",
    "points": [
      {
        "x": 53.3,
        "y": 57.6
      },
      {
        "x": 59.3,
        "y": 57.6
      },
      {
        "x": 59.3,
        "y": 63.8
      },
      {
        "x": 53.3,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788900055954",
    "name": "Lote II-12",
    "status": "vendido",
    "points": [
      {
        "x": 53.3,
        "y": 63.8
      },
      {
        "x": 59.3,
        "y": 63.8
      },
      {
        "x": 59.3,
        "y": 70.0
      },
      {
        "x": 53.3,
        "y": 70.0
      }
    ]
  },
  {
    "id": "1788900092202",
    "name": "Lote III-01",
    "status": "disponible",
    "points": [
      {
        "x": 59.3,
        "y": 32.8
      },
      {
        "x": 65.3,
        "y": 32.8
      },
      {
        "x": 65.3,
        "y": 39.0
      },
      {
        "x": 59.3,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788900105255",
    "name": "Lote III-02",
    "status": "disponible",
    "points": [
      {
        "x": 59.3,
        "y": 39.0
      },
      {
        "x": 65.3,
        "y": 39.0
      },
      {
        "x": 65.3,
        "y": 45.2
      },
      {
        "x": 59.3,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788900125736",
    "name": "Lote III-03",
    "status": "disponible",
    "points": [
      {
        "x": 59.3,
        "y": 45.2
      },
      {
        "x": 65.3,
        "y": 45.2
      },
      {
        "x": 65.3,
        "y": 51.4
      },
      {
        "x": 59.3,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788900134678",
    "name": "Lote III-04",
    "status": "disponible",
    "points": [
      {
        "x": 59.3,
        "y": 51.4
      },
      {
        "x": 65.3,
        "y": 51.4
      },
      {
        "x": 65.3,
        "y": 57.6
      },
      {
        "x": 59.3,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788900149044",
    "name": "Lote III-05",
    "status": "disponible",
    "points": [
      {
        "x": 59.3,
        "y": 57.6
      },
      {
        "x": 65.3,
        "y": 57.6
      },
      {
        "x": 65.3,
        "y": 63.8
      },
      {
        "x": 59.3,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788900160908",
    "name": "Lote III-06",
    "status": "disponible",
    "points": [
      {
        "x": 59.3,
        "y": 63.8
      },
      {
        "x": 65.3,
        "y": 63.8
      },
      {
        "x": 65.3,
        "y": 70.0
      },
      {
        "x": 59.3,
        "y": 70.0
      }
    ]
  },
  {
    "id": "1788900171317",
    "name": "Lote III-07",
    "status": "disponible",
    "points": [
      {
        "x": 67.7,
        "y": 32.8
      },
      {
        "x": 73.7,
        "y": 32.8
      },
      {
        "x": 73.7,
        "y": 39.0
      },
      {
        "x": 67.7,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788900182470",
    "name": "Lote III-08",
    "status": "disponible",
    "points": [
      {
        "x": 67.7,
        "y": 39.0
      },
      {
        "x": 73.7,
        "y": 39.0
      },
      {
        "x": 73.7,
        "y": 45.2
      },
      {
        "x": 67.7,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788900190599",
    "name": "Lote III-09",
    "status": "disponible",
    "points": [
      {
        "x": 67.7,
        "y": 45.2
      },
      {
        "x": 73.7,
        "y": 45.2
      },
      {
        "x": 73.7,
        "y": 51.4
      },
      {
        "x": 67.7,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788900200533",
    "name": "Lote III-10",
    "status": "disponible",
    "points": [
      {
        "x": 67.7,
        "y": 51.4
      },
      {
        "x": 73.7,
        "y": 51.4
      },
      {
        "x": 73.7,
        "y": 57.6
      },
      {
        "x": 67.7,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788900211525",
    "name": "Lote III-11",
    "status": "vendido",
    "points": [
      {
        "x": 67.7,
        "y": 57.6
      },
      {
        "x": 73.7,
        "y": 57.6
      },
      {
        "x": 73.7,
        "y": 63.8
      },
      {
        "x": 67.7,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788900222047",
    "name": "Lote III-12",
    "status": "vendido",
    "points": [
      {
        "x": 67.7,
        "y": 63.8
      },
      {
        "x": 73.7,
        "y": 63.8
      },
      {
        "x": 73.7,
        "y": 70.0
      },
      {
        "x": 67.7,
        "y": 70.0
      }
    ]
  },
  {
    "id": "1788900241067",
    "name": "Lote IV-01",
    "status": "disponible",
    "points": [
      {
        "x": 73.7,
        "y": 32.8
      },
      {
        "x": 79.7,
        "y": 32.8
      },
      {
        "x": 79.7,
        "y": 39.0
      },
      {
        "x": 73.7,
        "y": 39.0
      }
    ]
  },
  {
    "id": "1788900254077",
    "name": "Lote IV-02",
    "status": "disponible",
    "points": [
      {
        "x": 73.7,
        "y": 39.0
      },
      {
        "x": 79.7,
        "y": 39.0
      },
      {
        "x": 79.7,
        "y": 45.2
      },
      {
        "x": 73.7,
        "y": 45.2
      }
    ]
  },
  {
    "id": "1788900266382",
    "name": "Lote IV-03",
    "status": "disponible",
    "points": [
      {
        "x": 73.7,
        "y": 45.2
      },
      {
        "x": 79.7,
        "y": 45.2
      },
      {
        "x": 79.7,
        "y": 51.4
      },
      {
        "x": 73.7,
        "y": 51.4
      }
    ]
  },
  {
    "id": "1788900275797",
    "name": "Lote IV-04",
    "status": "disponible",
    "points": [
      {
        "x": 73.7,
        "y": 51.4
      },
      {
        "x": 79.7,
        "y": 51.4
      },
      {
        "x": 79.7,
        "y": 57.6
      },
      {
        "x": 73.7,
        "y": 57.6
      }
    ]
  },
  {
    "id": "1788900285351",
    "name": "Lote IV-05",
    "status": "disponible",
    "points": [
      {
        "x": 73.7,
        "y": 57.6
      },
      {
        "x": 79.7,
        "y": 57.6
      },
      {
        "x": 79.7,
        "y": 63.8
      },
      {
        "x": 73.7,
        "y": 63.8
      }
    ]
  },
  {
    "id": "1788900297508",
    "name": "Lote IV-06",
    "status": "disponible",
    "points": [
      {
        "x": 73.7,
        "y": 63.8
      },
      {
        "x": 79.7,
        "y": 63.8
      },
      {
        "x": 79.7,
        "y": 70.0
      },
      {
        "x": 73.7,
        "y": 70.0
      }
    ]
  }
];



export default function InteractiveMasterPlan() {
  const [hoveredLot, setHoveredLot] = useState<string | null>(null);
  const [selectedLot, setSelectedLot] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  const totalLotes = lotesData.length;
  const disponibles = lotesData.filter(l => l.status === "disponible").length;
  const vendidos = totalLotes - disponibles;

  const selectedLotData = selectedLot ? lotesData.find(l => l.id === selectedLot) : null;
  let transformStyle = {
    transformOrigin: "center center",
    transform: "scale(1)"
  };

  if (selectedLotData) {
    const cx = selectedLotData.points.reduce((sum, p) => sum + p.x, 0) / 4;
    const cy = selectedLotData.points.reduce((sum, p) => sum + p.y, 0) / 4;
    transformStyle = {
      transformOrigin: `${cx}% ${cy}%`,
      transform: 'scale(3.5)',
    };
  }

  return (
    <div className="w-full flex flex-col relative bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden">

      <div className="flex flex-wrap items-center justify-between p-4 bg-navy-main border-b border-navy-800">
        <h3 className="text-white font-bold tracking-widest uppercase text-sm">
          Master Plan <span className="text-gold-500">Taguantar</span>
        </h3>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5 text-white/90">
            <div className="w-3 h-3 rounded bg-white/10 border border-white/20"></div>
            <span>Total: {totalLotes}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gold-400">
            <div className="w-3 h-3 rounded bg-gold-500/20 border border-gold-500"></div>
            <span>Disponibles: {disponibles}</span>
          </div>
          <div className="flex items-center gap-1.5 text-red-400">
            <div className="w-3 h-3 rounded bg-red-500/30 border border-red-500/50"></div>
            <span>Vendidos: {vendidos}</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative w-full bg-slate-900 overflow-hidden group">

        <motion.div
          className="w-full h-full"
          style={{ scale: selectedLot ? 1 : scrollScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="relative w-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={transformStyle}
          >
            <img
              src="/lotes.jpeg"
              alt="Plano Master"
              className="w-full h-auto block"
            />

            <div className="absolute inset-0 bg-navy-main/20 pointer-events-none mix-blend-multiply"></div>

            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full z-10"
              preserveAspectRatio="none"
            >
              {lotesData.map((lot) => {
                const isHovered = hoveredLot === lot.id;
                const isSelected = selectedLot === lot.id;
                const isVendido = lot.status === "vendido";

                const pointsStr = lot.points.map(p => `${p.x},${p.y}`).join(" ");

                return (
                  <polygon
                    key={lot.id}
                    points={pointsStr}
                    vectorEffect="non-scaling-stroke"
                    fill={
                      isVendido
                        ? "rgba(15, 23, 42, 0.7)"
                        : isSelected
                          ? "rgba(200, 138, 34, 0.6)"
                          : isHovered
                            ? "rgba(200, 138, 34, 0.4)"
                            : "rgba(255, 255, 255, 0.05)"
                    }
                    stroke={
                      isVendido
                        ? "rgba(255, 255, 255, 0.1)"
                        : isSelected || isHovered
                          ? "#C88A22"
                          : "rgba(255, 255, 255, 0.4)"
                    }
                    strokeWidth={isSelected || isHovered ? "2" : "1"}
                    className={`transition-all duration-300 ${isVendido ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    onMouseEnter={() => setHoveredLot(lot.id)}
                    onMouseLeave={() => setHoveredLot(null)}
                    onClick={() => {
                      if (!isVendido) {
                        setSelectedLot(lot.id);
                      }
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Reset Zoom Button */}
        {selectedLot && (
          <button
            onClick={() => setSelectedLot(null)}
            className="absolute bottom-4 md:bottom-auto md:top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 z-30 bg-navy-main text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-2xl hover:bg-slate-800 transition-colors border border-slate-700 animate-in fade-in zoom-in-95"
          >
            <ZoomOut size={16} className="text-gold-500" />
            Ver Todo
          </button>
        )}

        {(hoveredLot || selectedLot) && (
          <div className="absolute top-2 left-2 md:top-4 md:left-4 pointer-events-none z-20 max-w-[200px] md:max-w-xs">
            {lotesData
              .filter((l) => l.id === (hoveredLot || selectedLot))
              .map((lot) => (
                <div
                  key={lot.id}
                  className="bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl border border-slate-100 flex flex-col items-start gap-1.5 md:gap-2 transform transition-all duration-300 animate-in fade-in zoom-in-95"
                >
                  <span className="text-navy-main font-extrabold text-lg md:text-xl tracking-wider">{lot.name}</span>

                  {lot.status === "disponible" ? (
                    <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] md:text-xs uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <CheckCircle2 size={12} className="md:w-3.5 md:h-3.5" />
                      Disponible
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      <XCircle size={12} className="md:w-3.5 md:h-3.5" />
                      Vendido
                    </div>
                  )}

                  {selectedLot ? (
                    <div className="w-full flex flex-col">
                      <div className="w-full mt-1.5 pt-2 md:mt-2 md:pt-3 border-t border-slate-100/80 flex items-center justify-between gap-4 md:gap-6">
                        <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Superficie</span>
                        <span className="text-[9px] md:text-[10px] text-navy-main font-bold uppercase tracking-widest">260 m²</span>
                      </div>
                      <Link
                        href={`/contacto?branch=inversiones&investmentType=terreno&lote=${lot.name.replace(' ', '%20')}`}
                        className="mt-3 w-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-[10px] md:text-xs py-2 rounded-lg transition-colors uppercase tracking-widest text-center shadow-md flex justify-center items-center pointer-events-auto"
                      >
                        Reservar Ahora
                      </Link>
                    </div>
                  ) : (
                    lot.status === "disponible" && (
                      <span className="text-[9px] md:text-[10px] text-slate-400 font-semibold mt-0.5 md:mt-1">
                        Clic para acercar
                      </span>
                    )
                  )}
                </div>
              ))}
          </div>
        )}

      </div>
    </div>
  );
}
