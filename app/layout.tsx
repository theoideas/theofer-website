import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THEOFER | Ingeniería, Proyectos e Inversiones",
  description: "Estudio de ingeniería digital, cálculos estructurales, proyectos eléctricos y solares, y desarrollos inmobiliarios de alta plusvalía en la Isla de Margarita.",
  keywords: [
    "Theofer",
    "Ingeniería Civil Venezuela",
    "Cálculo Estructural",
    "Isla de Margarita Terrenos",
    "Inversión Inmobiliaria",
    "Proyectos Fotovoltaicos",
    "Diseño Eléctrico",
    "Renderizado 3D"
  ],
  authors: [{ name: "TheoFer LLC" }],
  openGraph: {
    title: "THEOFER | Ingeniería, Proyectos e Inversiones",
    description: "Diseño digital de ingeniería, cálculos estructurales y venta de lotes residenciales y turísticos en la Isla de Margarita.",
    url: "https://theofer.com",
    siteName: "THEOFER",
    locale: "es_VE",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#030712] text-gray-100 selection:bg-gold-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
