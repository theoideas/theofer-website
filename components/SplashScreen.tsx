"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the initial fade-in and scale-up animation
    setTimeout(() => {
      setIsMounted(true);
    }, 50);

    // Wait 1.5 seconds, then trigger the slide-out to the right
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      
      // Remove from DOM after the slide out transition completes
      setTimeout(() => {
        setIsVisible(false);
      }, 800); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-transform duration-[800ms] ease-in-out ${
        isAnimatingOut ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className={`transition-all duration-1000 transform flex flex-col items-center ${isMounted ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
        <img 
          src="/logo-theofer-negro.svg" 
          alt="THEOFER" 
          className="h-32 md:h-52 w-auto"
        />
        <div className="mt-8">
          <span className="text-xs md:text-sm tracking-[0.4em] text-slate-400 uppercase font-bold">
            Inversiones & Proyectos
          </span>
        </div>
      </div>
    </div>
  );
}
