"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, ArrowRight, MessageSquareCode } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const branchParam = searchParams?.get("branch");
  const investmentTypeParam = searchParams?.get("investmentType");
  const loteParam = searchParams?.get("lote");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: branchParam === "proyectos" ? "proyectos" : "inversiones",
    projectType: "estructural",
    investmentType: ["terreno", "construccion", "ambos"].includes(investmentTypeParam || "") ? investmentTypeParam! : "terreno",
    message: loteParam ? `Hola, estoy muy interesado en reservar el ${loteParam}. Me gustaría recibir más información.` : ""
  });

  // Escuchar cambios en la URL (si el usuario hace clic en los botones de Categorias sin recargar la página)
  useEffect(() => {
    if (branchParam === "inversiones" || branchParam === "proyectos") {
      setFormData(prev => ({ ...prev, branch: branchParam }));
    }
    if (investmentTypeParam && ["terreno", "construccion", "ambos"].includes(investmentTypeParam)) {
      setFormData(prev => ({ ...prev, investmentType: investmentTypeParam }));
    }
    if (loteParam) {
      setFormData(prev => ({ ...prev, message: `Hola, estoy muy interesado en reservar el ${loteParam}. Me gustaría recibir más información.` }));
    }
  }, [branchParam, investmentTypeParam, loteParam]);

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
    const whatsappUrl = `https://wa.me/584248888888?text=${encodedMsg}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,138,34,0.03),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/30 pb-2 inline-block">
                Contacto Directo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-main leading-tight">
                Hablemos de tu Próximo Proyecto
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Ya sea que necesites la memoria de cálculo para un edificio en Florida, los renders de tu desarrollo comercial, o estés buscando un terreno con financiamiento en la Isla de Margarita, estamos aquí para asesorarte.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone item */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-600 border border-gold-500/20">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider">Atención Telefónica</h4>
                  <p className="text-sm font-semibold text-navy-main">+58 424 888 8888</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-navy-main/10 text-navy-main border border-navy-main/20">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider">Correo Electrónico</h4>
                  <p className="text-sm font-semibold text-navy-main">contacto@theofer.com</p>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-600 border border-gold-500/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider">Oficina Física</h4>
                  <p className="text-sm font-semibold text-navy-main">Pampatar, Isla de Margarita, Venezuela</p>
                </div>
              </div>
            </div>

            {/* Note about automated triage */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white flex items-start gap-3 shadow-sm">
              <MessageSquareCode size={18} className="text-gold-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-navy-main">Filtro Inteligente:</strong> Al enviar este formulario, preclasificamos tu consulta técnica y te derivamos de forma automatizada al especialista correspondiente en WhatsApp para optimizar el tiempo de respuesta.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 shadow-md p-8 sm:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold-500 to-white"></div>
              
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-gold-500/10 text-gold-600 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-navy-main">¡Formulario Recibido!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Hemos estructurado tus datos. Serás redirigido a nuestro chat de WhatsApp para iniciar la videollamada de asesoría técnica.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-gold-600 font-bold uppercase tracking-wider animate-pulse">
                    Abriendo chat de ventas
                    <ArrowRight size={12} />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-navy-main">Solicitar Información o Cotización</h3>
                    <p className="text-xs text-slate-600">
                      Completa el formulario para estructurar los requerimientos de tu proyecto o inversión.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy-main focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Correo Electrónico</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ej. juan@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy-main focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Branch Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Línea de Interés</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy-main focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:bg-white transition-all"
                    >
                      <option value="proyectos">TheoFer Proyectos (Estudio de Ingeniería Digital)</option>
                      <option value="inversiones">TheoFer Inversiones (Terrenos y Obras Margarita)</option>
                    </select>
                  </div>

                  {/* Dynamic Fields */}
                  {formData.branch === "proyectos" ? (
                    <div className="space-y-1.5 animate-fade-in">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Tipo de Proyecto Digital</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy-main focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:bg-white transition-all"
                      >
                        <option value="estructural">Cálculo Estructural Sismorresistente</option>
                        <option value="electricidad">Diseño Eléctrico / Energía Fotovoltaica</option>
                        <option value="hidraulica">Ingeniería Hidráulica / Acueducto</option>
                        <option value="3d">Digitalización 3D y Renders</option>
                      </select>
                    </div>
                  ) : (
                    <div className="space-y-1.5 animate-fade-in">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Interés de Inversión</label>
                      <select
                        name="investmentType"
                        value={formData.investmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy-main focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:bg-white transition-all"
                      >
                        <option value="terreno">Deseo comprar un lote de terreno</option>
                        <option value="construccion">Deseo construir una villa (Llave en mano)</option>
                        <option value="ambos">Terreno + Construcción en Margarita</option>
                      </select>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Mensaje o Consulta</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe brevemente los requerimientos, dimensiones o ubicación de tu proyecto..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy-main focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs font-extrabold uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
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

export default function ContactForm() {
  return (
    <Suspense fallback={
      <section className="py-24 bg-slate-50 relative border-t border-slate-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
      </section>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
