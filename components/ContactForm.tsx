"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, ArrowRight, MessageSquareCode } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "proyectos", // proyectos | inversiones
    projectType: "estructural", // structural | electrical | hydraulic | 3d
    investmentType: "terreno", // land | construction | both
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Formatear mensaje para WhatsApp
    let detailMsg = "";
    if (formData.branch === "proyectos") {
      const pTypes: Record<string, string> = {
        estructural: "Cálculo Estructural Sismorresistente",
        electricidad: "Diseño Eléctrico / Fotovoltaico",
        hidraulica: "Ingeniería Hidráulica / Acueducto",
        "3d": "Digitalización / Renderizado 3D"
      };
      detailMsg = `Línea: TheoFer Proyectos (Estudio Digital)\nInterés: ${pTypes[formData.projectType] || formData.projectType}`;
    } else {
      const iTypes: Record<string, string> = {
        terreno: "Compra de Lote / Terreno",
        construccion: "Construcción de Villa (Llave en mano)",
        ambos: "Compra de Terreno y Construcción"
      };
      detailMsg = `Línea: TheoFer Inversiones (Margarita)\nInterés: ${iTypes[formData.investmentType] || formData.investmentType}`;
    }

    const whatsappMessage = `Hola TheoFer,\n\nMi nombre es *${formData.name}*.\nEstoy interesado en sus servicios.\n\n*Detalles del contacto:*\n- Correo: ${formData.email}\n- ${detailMsg}\n\n*Mensaje:*\n"${formData.message}"\n\nQuedo atento a su asesoría. ¡Gracias!`;

    // Redirigir a WhatsApp
    const encodedMsg = encodeURIComponent(whatsappMessage);
    // Usamos el número oficial ficticio o de contacto (ej: +58 424-8000000 o similar)
    const whatsappUrl = `https://wa.me/584248888888?text=${encodedMsg}`;
    
    // Abrir WhatsApp en pestaña nueva tras una pequeña pausa
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-[#03060c] relative border-t border-gray-900">
      <div className="absolute inset-0 bg-gradient-gold-radial opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/30 pb-2 inline-block">
                Contacto Directo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Hablemos de tu Próximo Proyecto
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                Ya sea que necesites la memoria de cálculo para un edificio en Florida, los renders de tu desarrollo comercial, o estés buscando un terreno con financiamiento en la Isla de Margarita, estamos aquí para asesorarte.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone item */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-950/60 border border-gray-900">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-400/20">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Atención Telefónica</h4>
                  <p className="text-sm font-semibold text-white">+58 424 888 8888</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-950/60 border border-gray-900">
                <div className="p-3 rounded-lg bg-cyber-teal/10 text-cyber-teal border border-cyber-teal/20">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Correo Electrónico</h4>
                  <p className="text-sm font-semibold text-white">contacto@theofer.com</p>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-950/60 border border-gray-900">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-400/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Oficina Física</h4>
                  <p className="text-sm font-semibold text-white">Pampatar, Isla de Margarita, Venezuela</p>
                </div>
              </div>
            </div>

            {/* Note about automated triage */}
            <div className="p-5 rounded-2xl border border-gray-800 bg-gray-900/10 flex items-start gap-3">
              <MessageSquareCode size={18} className="text-cyber-teal shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-white">Filtro Inteligente:</strong> Al enviar este formulario, preclasificamos tu consulta técnica y te derivamos de forma automatizada al especialista correspondiente en WhatsApp para optimizar el tiempo de respuesta.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold-500 to-cyber-teal"></div>
              
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">¡Formulario Recibido!</h3>
                    <p className="text-sm text-gray-400 max-w-md mx-auto">
                      Hemos estructurado tus datos. Serás redirigido a nuestro chat de WhatsApp para iniciar la videollamada de asesoría técnica.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-gold-400 font-bold uppercase tracking-wider animate-pulse">
                    Abriendo chat de ventas
                    <ArrowRight size={12} />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Solicitar Información o Cotización</h3>
                    <p className="text-xs text-gray-400">
                      Completa el formulario para estructurar los requerimientos de tu proyecto o inversión.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Correo Electrónico</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ej. juan@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Branch Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Línea de Interés</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm text-white focus:outline-none focus:border-gold-500 transition-all"
                    >
                      <option value="proyectos">TheoFer Proyectos (Estudio de Ingeniería Digital)</option>
                      <option value="inversiones">TheoFer Inversiones (Terrenos y Obras Margarita)</option>
                    </select>
                  </div>

                  {/* Dynamic Fields */}
                  {formData.branch === "proyectos" ? (
                    <div className="space-y-1.5 animate-fade-in">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Tipo de Proyecto Digital</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm text-white focus:outline-none focus:border-cyber-teal transition-all"
                      >
                        <option value="estructural">Cálculo Estructural Sismorresistente</option>
                        <option value="electricidad">Diseño Eléctrico / Energía Fotovoltaica</option>
                        <option value="hidraulica">Ingeniería Hidráulica / Acueducto</option>
                        <option value="3d">Digitalización 3D y Renders</option>
                      </select>
                    </div>
                  ) : (
                    <div className="space-y-1.5 animate-fade-in">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Interés de Inversión</label>
                      <select
                        name="investmentType"
                        value={formData.investmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm text-white focus:outline-none focus:border-gold-500 transition-all"
                      >
                        <option value="terreno">Deseo comprar un lote de terreno</option>
                        <option value="construccion">Deseo construir una villa (Llave en mano)</option>
                        <option value="ambos">Terreno + Construcción en Margarita</option>
                      </select>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Mensaje o Consulta</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe brevemente los requerimientos, dimensiones o ubicación de tu proyecto..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white hover:bg-gray-100 text-black text-xs font-extrabold uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    Enviar y Conectar a WhatsApp
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
