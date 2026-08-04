"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ZoomOut, Pointer } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// The JSON data provided by the user
const lotesData = [
  {
    "id": "1782395657468",
    "name": "Lote I-01",
    "status": "vendido",
    "points": [
      {
        "x": 35.46246782403375,
        "y": 34.51804277246597
      },
      {
        "x": 40.96246782403375,
        "y": 34.51804277246597
      },
      {
        "x": 40.96246782403375,
        "y": 40.01804277246597
      },
      {
        "x": 35.46246782403375,
        "y": 40.01804277246597
      }
    ]
  },
  {
    "id": "1782395676756",
    "name": "Lote I-02",
    "status": "vendido",
    "points": [
      {
        "x": 35.46246782403375,
        "y": 39.665035891936974
      },
      {
        "x": 40.96246782403375,
        "y": 39.665035891936974
      },
      {
        "x": 40.96246782403375,
        "y": 45.165035891936974
      },
      {
        "x": 35.46246782403375,
        "y": 45.165035891936974
      }
    ]
  },
  {
    "id": "1782395697484",
    "name": "Lote I-03",
    "status": "vendido",
    "points": [
      {
        "x": 35.400535137122844,
        "y": 45.0026583862032
      },
      {
        "x": 40.900535137122844,
        "y": 45.0026583862032
      },
      {
        "x": 40.900535137122844,
        "y": 50.5026583862032
      },
      {
        "x": 35.400535137122844,
        "y": 50.5026583862032
      }
    ]
  },
  {
    "id": "1782395709220",
    "name": "Lote I-04",
    "status": "vendido",
    "points": [
      {
        "x": 35.400535137122844,
        "y": 50.24496619307181
      },
      {
        "x": 40.900535137122844,
        "y": 50.24496619307181
      },
      {
        "x": 40.900535137122844,
        "y": 55.74496619307181
      },
      {
        "x": 35.400535137122844,
        "y": 55.74496619307181
      }
    ]
  },
  {
    "id": "1782395725004",
    "name": "Lote I-05",
    "status": "vendido",
    "points": [
      {
        "x": 35.46246782403375,
        "y": 55.67790337473565
      },
      {
        "x": 40.96246782403375,
        "y": 55.67790337473565
      },
      {
        "x": 40.96246782403375,
        "y": 61.17790337473565
      },
      {
        "x": 35.46246782403375,
        "y": 61.17790337473565
      }
    ]
  },
  {
    "id": "1782395736668",
    "name": "Lote I-06",
    "status": "vendido",
    "points": [
      {
        "x": 35.33860245021192,
        "y": 60.824896494206655
      },
      {
        "x": 40.83860245021192,
        "y": 60.824896494206655
      },
      {
        "x": 40.83860245021192,
        "y": 66.32489649420666
      },
      {
        "x": 35.33860245021192,
        "y": 66.32489649420666
      }
    ]
  },
  {
    "id": "1782395748107",
    "name": "Lote I-07",
    "status": "vendido",
    "points": [
      {
        "x": 43.265986374808875,
        "y": 34.327413397670746
      },
      {
        "x": 48.765986374808875,
        "y": 34.327413397670746
      },
      {
        "x": 48.765986374808875,
        "y": 39.827413397670746
      },
      {
        "x": 43.265986374808875,
        "y": 39.827413397670746
      }
    ]
  },
  {
    "id": "1782395757187",
    "name": "Lote I-08",
    "status": "vendido",
    "points": [
      {
        "x": 43.018255627165225,
        "y": 39.760350579334585
      },
      {
        "x": 48.518255627165225,
        "y": 39.760350579334585
      },
      {
        "x": 48.518255627165225,
        "y": 45.260350579334585
      },
      {
        "x": 43.018255627165225,
        "y": 45.260350579334585
      }
    ]
  },
  {
    "id": "1782395770540",
    "name": "Lote I-09",
    "status": "vendido",
    "points": [
      {
        "x": 43.08018831407614,
        "y": 45.0026583862032
      },
      {
        "x": 48.58018831407614,
        "y": 45.0026583862032
      },
      {
        "x": 48.58018831407614,
        "y": 50.5026583862032
      },
      {
        "x": 43.08018831407614,
        "y": 50.5026583862032
      }
    ]
  },
  {
    "id": "1782395784723",
    "name": "Lote I-10",
    "status": "vendido",
    "points": [
      {
        "x": 43.08018831407614,
        "y": 50.34028088046942
      },
      {
        "x": 48.58018831407614,
        "y": 50.34028088046942
      },
      {
        "x": 48.58018831407614,
        "y": 55.84028088046942
      },
      {
        "x": 43.08018831407614,
        "y": 55.84028088046942
      }
    ]
  },
  {
    "id": "1782395796924",
    "name": "Lote I-11",
    "status": "vendido",
    "points": [
      {
        "x": 43.142121000987046,
        "y": 55.582588687338045
      },
      {
        "x": 48.642121000987046,
        "y": 55.582588687338045
      },
      {
        "x": 48.642121000987046,
        "y": 61.082588687338045
      },
      {
        "x": 43.142121000987046,
        "y": 61.082588687338045
      }
    ]
  },
  {
    "id": "1782395812340",
    "name": "Lote I-12",
    "status": "vendido",
    "points": [
      {
        "x": 43.08018831407614,
        "y": 61.01552586900188
      },
      {
        "x": 48.58018831407614,
        "y": 61.01552586900188
      },
      {
        "x": 48.58018831407614,
        "y": 66.51552586900188
      },
      {
        "x": 43.08018831407614,
        "y": 66.51552586900188
      }
    ]
  },
  {
    "id": "1782395859316",
    "name": "Lote II-01",
    "status": "vendido",
    "points": [
      {
        "x": 48.59219744914746,
        "y": 34.327413397670746
      },
      {
        "x": 54.09219744914746,
        "y": 34.327413397670746
      },
      {
        "x": 54.09219744914746,
        "y": 39.827413397670746
      },
      {
        "x": 48.59219744914746,
        "y": 39.827413397670746
      }
    ]
  },
  {
    "id": "1782395872900",
    "name": "Lote II-02",
    "status": "vendido",
    "points": [
      {
        "x": 48.53026476223654,
        "y": 39.855665266732196
      },
      {
        "x": 54.03026476223654,
        "y": 39.855665266732196
      },
      {
        "x": 54.03026476223654,
        "y": 45.355665266732196
      },
      {
        "x": 48.53026476223654,
        "y": 45.355665266732196
      }
    ]
  },
  {
    "id": "1782395887764",
    "name": "Lote II-03",
    "status": "disponible",
    "points": [
      {
        "x": 48.53026476223654,
        "y": 45.002658386203194
      },
      {
        "x": 54.03026476223654,
        "y": 45.002658386203194
      },
      {
        "x": 54.03026476223654,
        "y": 50.502658386203194
      },
      {
        "x": 48.53026476223654,
        "y": 50.502658386203194
      }
    ]
  },
  {
    "id": "1782395927267",
    "name": "Lote II-04",
    "status": "vendido",
    "points": [
      {
        "x": 48.53026476223654,
        "y": 50.34028088046942
      },
      {
        "x": 54.03026476223654,
        "y": 50.34028088046942
      },
      {
        "x": 54.03026476223654,
        "y": 55.84028088046942
      },
      {
        "x": 48.53026476223654,
        "y": 55.84028088046942
      }
    ]
  },
  {
    "id": "1782395977675",
    "name": "Lote II-05",
    "status": "vendido",
    "points": [
      {
        "x": 48.65413013605837,
        "y": 55.86853274953087
      },
      {
        "x": 54.15413013605837,
        "y": 55.86853274953087
      },
      {
        "x": 54.15413013605837,
        "y": 61.36853274953087
      },
      {
        "x": 48.65413013605837,
        "y": 61.36853274953087
      }
    ]
  },
  {
    "id": "1782395986059",
    "name": "Lote II-06",
    "status": "vendido",
    "points": [
      {
        "x": 48.65413013605837,
        "y": 61.39678461859232
      },
      {
        "x": 54.15413013605837,
        "y": 61.39678461859232
      },
      {
        "x": 54.15413013605837,
        "y": 66.89678461859232
      },
      {
        "x": 48.65413013605837,
        "y": 66.89678461859232
      }
    ]
  },
  {
    "id": "1782395997188",
    "name": "Lote II-07",
    "status": "vendido",
    "points": [
      {
        "x": 56.33378331301167,
        "y": 34.327413397670746
      },
      {
        "x": 61.83378331301167,
        "y": 34.327413397670746
      },
      {
        "x": 61.83378331301167,
        "y": 39.827413397670746
      },
      {
        "x": 56.33378331301167,
        "y": 39.827413397670746
      }
    ]
  },
  {
    "id": "1782396004684",
    "name": "Lote II-08",
    "status": "vendido",
    "points": [
      {
        "x": 56.27185062610076,
        "y": 39.760350579334585
      },
      {
        "x": 61.77185062610076,
        "y": 39.760350579334585
      },
      {
        "x": 61.77185062610076,
        "y": 45.260350579334585
      },
      {
        "x": 56.27185062610076,
        "y": 45.260350579334585
      }
    ]
  },
  {
    "id": "1782396022747",
    "name": "Lote II-09",
    "status": "disponible",
    "points": [
      {
        "x": 56.20991793918984,
        "y": 45.09797307360081
      },
      {
        "x": 61.70991793918984,
        "y": 45.09797307360081
      },
      {
        "x": 61.70991793918984,
        "y": 50.59797307360081
      },
      {
        "x": 56.20991793918984,
        "y": 50.59797307360081
      }
    ]
  },
  {
    "id": "1782396036315",
    "name": "Lote II-10",
    "status": "disponible",
    "points": [
      {
        "x": 56.14798525227893,
        "y": 50.43559556786704
      },
      {
        "x": 61.64798525227893,
        "y": 50.43559556786704
      },
      {
        "x": 61.64798525227893,
        "y": 55.93559556786704
      },
      {
        "x": 56.14798525227893,
        "y": 55.93559556786704
      }
    ]
  },
  {
    "id": "1782396045443",
    "name": "Lote II-11",
    "status": "vendido",
    "points": [
      {
        "x": 56.4576486868335,
        "y": 55.77321806213327
      },
      {
        "x": 61.9576486868335,
        "y": 55.77321806213327
      },
      {
        "x": 61.9576486868335,
        "y": 61.27321806213327
      },
      {
        "x": 56.4576486868335,
        "y": 61.27321806213327
      }
    ]
  },
  {
    "id": "1782396059156",
    "name": "Lote II-12",
    "status": "vendido",
    "points": [
      {
        "x": 56.33378331301167,
        "y": 61.110840556399495
      },
      {
        "x": 61.83378331301167,
        "y": 61.110840556399495
      },
      {
        "x": 61.83378331301167,
        "y": 66.6108405563995
      },
      {
        "x": 56.33378331301167,
        "y": 66.6108405563995
      }
    ]
  },
  {
    "id": "1782396119172",
    "name": "Lote III-01",
    "status": "disponible",
    "points": [
      {
        "x": 62.031590508815725,
        "y": 34.327413397670746
      },
      {
        "x": 67.53159050881573,
        "y": 34.327413397670746
      },
      {
        "x": 67.53159050881573,
        "y": 39.827413397670746
      },
      {
        "x": 62.031590508815725,
        "y": 39.827413397670746
      }
    ]
  },
  {
    "id": "1782396134292",
    "name": "Lote III-02",
    "status": "disponible",
    "points": [
      {
        "x": 61.84579244808299,
        "y": 39.665035891936974
      },
      {
        "x": 67.34579244808299,
        "y": 39.665035891936974
      },
      {
        "x": 67.34579244808299,
        "y": 45.165035891936974
      },
      {
        "x": 61.84579244808299,
        "y": 45.165035891936974
      }
    ]
  },
  {
    "id": "1782396153499",
    "name": "Lote III-03",
    "status": "disponible",
    "points": [
      {
        "x": 62.031590508815725,
        "y": 45.09797307360081
      },
      {
        "x": 67.53159050881573,
        "y": 45.09797307360081
      },
      {
        "x": 67.53159050881573,
        "y": 50.59797307360081
      },
      {
        "x": 62.031590508815725,
        "y": 50.59797307360081
      }
    ]
  },
  {
    "id": "1782396164652",
    "name": "Lote III-04",
    "status": "disponible",
    "points": [
      {
        "x": 61.90772513499391,
        "y": 50.34028088046942
      },
      {
        "x": 67.40772513499391,
        "y": 50.34028088046942
      },
      {
        "x": 67.40772513499391,
        "y": 55.84028088046942
      },
      {
        "x": 61.90772513499391,
        "y": 55.84028088046942
      }
    ]
  },
  {
    "id": "1782396174899",
    "name": "Lote III-05",
    "status": "disponible",
    "points": [
      {
        "x": 61.78385976117207,
        "y": 55.77321806213327
      },
      {
        "x": 67.28385976117207,
        "y": 55.77321806213327
      },
      {
        "x": 67.28385976117207,
        "y": 61.27321806213327
      },
      {
        "x": 61.78385976117207,
        "y": 61.27321806213327
      }
    ]
  },
  {
    "id": "1782396190460",
    "name": "Lote III-06",
    "status": "disponible",
    "points": [
      {
        "x": 61.84579244808299,
        "y": 60.824896494206655
      },
      {
        "x": 67.34579244808299,
        "y": 60.824896494206655
      },
      {
        "x": 67.34579244808299,
        "y": 66.32489649420666
      },
      {
        "x": 61.84579244808299,
        "y": 66.32489649420666
      }
    ]
  },
  {
    "id": "1782396220235",
    "name": "Lote III-07",
    "status": "disponible",
    "points": [
      {
        "x": 69.5873783119472,
        "y": 34.42272808506836
      },
      {
        "x": 75.0873783119472,
        "y": 34.42272808506836
      },
      {
        "x": 75.0873783119472,
        "y": 39.92272808506836
      },
      {
        "x": 69.5873783119472,
        "y": 39.92272808506836
      }
    ]
  },
  {
    "id": "1782396235779",
    "name": "Lote III-08",
    "status": "disponible",
    "points": [
      {
        "x": 69.5873783119472,
        "y": 39.760350579334585
      },
      {
        "x": 75.0873783119472,
        "y": 39.760350579334585
      },
      {
        "x": 75.0873783119472,
        "y": 45.260350579334585
      },
      {
        "x": 69.5873783119472,
        "y": 45.260350579334585
      }
    ]
  },
  {
    "id": "1782396250300",
    "name": "Lote III-09",
    "status": "disponible",
    "points": [
      {
        "x": 69.5254456250363,
        "y": 45.0026583862032
      },
      {
        "x": 75.0254456250363,
        "y": 45.0026583862032
      },
      {
        "x": 75.0254456250363,
        "y": 50.5026583862032
      },
      {
        "x": 69.5254456250363,
        "y": 50.5026583862032
      }
    ]
  },
  {
    "id": "1782396263203",
    "name": "Lote III-10",
    "status": "disponible",
    "points": [
      {
        "x": 69.46351293812538,
        "y": 50.34028088046942
      },
      {
        "x": 74.96351293812538,
        "y": 50.34028088046942
      },
      {
        "x": 74.96351293812538,
        "y": 55.84028088046942
      },
      {
        "x": 69.46351293812538,
        "y": 55.84028088046942
      }
    ]
  },
  {
    "id": "1782396292028",
    "name": "Lote III-11",
    "status": "disponible",
    "points": [
      {
        "x": 69.64931099885811,
        "y": 55.67790337473565
      },
      {
        "x": 75.14931099885811,
        "y": 55.67790337473565
      },
      {
        "x": 75.14931099885811,
        "y": 61.17790337473565
      },
      {
        "x": 69.64931099885811,
        "y": 61.17790337473565
      }
    ]
  },
  {
    "id": "1782396302339",
    "name": "Lote III-12",
    "status": "disponible",
    "points": [
      {
        "x": 69.58737831194719,
        "y": 61.01552586900188
      },
      {
        "x": 75.08737831194719,
        "y": 61.01552586900188
      },
      {
        "x": 75.08737831194719,
        "y": 66.51552586900188
      },
      {
        "x": 69.58737831194719,
        "y": 66.51552586900188
      }
    ]
  },
  {
    "id": "1782396322555",
    "name": "Lote IV-01",
    "status": "disponible",
    "points": [
      {
        "x": 75.09938744701853,
        "y": 34.327413397670746
      },
      {
        "x": 80.59938744701853,
        "y": 34.327413397670746
      },
      {
        "x": 80.59938744701853,
        "y": 39.827413397670746
      },
      {
        "x": 75.09938744701853,
        "y": 39.827413397670746
      }
    ]
  },
  {
    "id": "1782396334588",
    "name": "Lote IV-02",
    "status": "disponible",
    "points": [
      {
        "x": 75.09938744701853,
        "y": 39.855665266732196
      },
      {
        "x": 80.59938744701853,
        "y": 39.855665266732196
      },
      {
        "x": 80.59938744701853,
        "y": 45.355665266732196
      },
      {
        "x": 75.09938744701853,
        "y": 45.355665266732196
      }
    ]
  },
  {
    "id": "1782396344876",
    "name": "Lote IV-03",
    "status": "disponible",
    "points": [
      {
        "x": 75.09938744701853,
        "y": 45.002658386203194
      },
      {
        "x": 80.59938744701853,
        "y": 45.002658386203194
      },
      {
        "x": 80.59938744701853,
        "y": 50.502658386203194
      },
      {
        "x": 75.09938744701853,
        "y": 50.502658386203194
      }
    ]
  },
  {
    "id": "1782396355931",
    "name": "Lote IV-04",
    "status": "disponible",
    "points": [
      {
        "x": 75.09938744701853,
        "y": 50.43559556786703
      },
      {
        "x": 80.59938744701853,
        "y": 50.43559556786703
      },
      {
        "x": 80.59938744701853,
        "y": 55.93559556786703
      },
      {
        "x": 75.09938744701853,
        "y": 55.93559556786703
      }
    ]
  },
  {
    "id": "1782396368523",
    "name": "Lote IV-05",
    "status": "disponible",
    "points": [
      {
        "x": 75.03745476010761,
        "y": 55.77321806213326
      },
      {
        "x": 80.53745476010761,
        "y": 55.77321806213326
      },
      {
        "x": 80.53745476010761,
        "y": 61.27321806213326
      },
      {
        "x": 75.03745476010761,
        "y": 61.27321806213326
      }
    ]
  },
  {
    "id": "1782396384011",
    "name": "Lote IV-06",
    "status": "disponible",
    "points": [
      {
        "x": 75.16132013392945,
        "y": 60.92021118160427
      },
      {
        "x": 80.66132013392945,
        "y": 60.92021118160427
      },
      {
        "x": 80.66132013392945,
        "y": 66.42021118160427
      },
      {
        "x": 75.16132013392945,
        "y": 66.42021118160427
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
              src="/lotes-master.jpg"
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
