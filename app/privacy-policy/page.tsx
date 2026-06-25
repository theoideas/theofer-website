"use client";

import React from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative min-h-screen bg-slate-50 overflow-hidden pt-32 pb-24"
    >
      {/* Background radial gold glow for premium corporate feel */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
          <header className="mb-10 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center gap-3 mb-4">
              <span className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl border border-gold-500/20">
                <Shield size={24} />
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-main tracking-tight">
                  Política de Privacidad
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Última actualización: 13 de febrero de 2026 • TheoFer LLC
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              En TheoFer respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política detalla el tratamiento de la información recolectada en nuestra plataforma y servicios.
            </p>
          </header>

          <hr className="border-slate-200 my-8" />

          <div className="prose prose-sm sm:prose-base max-w-none text-slate-600">
            <p>
              TheoFer LLC gestiona este sitio web, incluidos los datos, el contenido, las funciones y los servicios para ofrecerle a usted, el cliente, una experiencia informativa y de contacto optimizada (los “Servicios”). Esta Política de Privacidad describe cómo recopilamos, utilizamos y divulgamos su información personal cuando visita, utiliza nuestros Servicios o cuando se comunica con nosotros para solicitar asesoría de ingeniería o inversiones inmobiliarias.
            </p>
            <p>
              Le rogamos que lea atentamente esta Política de Privacidad. Al utilizar y acceder a cualquiera de los Servicios, usted reconoce haber leído esta Política y entender la forma en que se recopila, utiliza y divulga su información personal, de conformidad con lo establecido en la presente.
            </p>

            <h2 className="text-navy-main">Información personal que recopilamos o tratamos</h2>
            <p>
              Cuando utilizamos el término &quot;información personal&quot;, nos referimos a cualquier dato que le identifique o que pueda vincularse razonablemente con usted. Podemos recopilar o tratar las siguientes categorías de información personal:
            </p>
            <ul>
              <li><strong className="text-navy-main">Detalles de contacto:</strong> incluidos su nombre, número de teléfono y dirección de correo electrónico provistos en nuestros formularios.</li>
              <li><strong className="text-navy-main">Información del proyecto o inversión:</strong> información técnica, ubicación, o detalles de los requerimientos de ingeniería e inversión que usted comparta con nosotros para evaluación.</li>
              <li><strong className="text-navy-main">Comunicaciones con nosotros:</strong> incluida la información que nos facilite en sus correos electrónicos o mensajes de contacto.</li>
              <li><strong className="text-navy-main">Información del dispositivo y uso:</strong> incluida información sobre su dispositivo, navegador o conexión de red, su dirección IP y datos de interacción con nuestra plataforma web para fines analíticos.</li>
            </ul>

            <h2 className="text-navy-main">Fuentes de información personal</h2>
            <p>
              Podemos recopilar información personal de las siguientes fuentes:
            </p>
            <ul>
              <li>Directamente de usted al completar nuestros formularios de contacto o solicitar evaluaciones estructurales o de inversión.</li>
              <li>Automáticamente a través de los Servicios mediante herramientas analíticas para entender la navegación en nuestro sitio web.</li>
            </ul>

            <h2 className="text-navy-main">Cómo utilizamos su información personal</h2>
            <p>
              Utilizamos su información personal estrictamente para los fines relacionados con nuestra actividad profesional:
            </p>
            <ul>
              <li><strong className="text-navy-main">Prestar el Servicio:</strong> Evaluar sus solicitudes, agendar asesorías virtuales y elaborar cotizaciones para sus proyectos.</li>
              <li><strong className="text-navy-main">Comunicaciones:</strong> Responder a sus consultas técnicas y mantener una comunicación fluida sobre el estado de sus proyectos de ingeniería o inversión.</li>
              <li><strong className="text-navy-main">Mejora de la plataforma:</strong> Analizar las tendencias de uso de la web para optimizar el contenido y la accesibilidad.</li>
              <li><strong className="text-navy-main">Motivos legales:</strong> Cumplir con normativas vigentes o proteger nuestros derechos.</li>
            </ul>

            <h2 className="text-navy-main">Cómo divulgamos la información personal</h2>
            <p>
              Mantenemos estricta confidencialidad sobre la información de sus proyectos. Solo divulgamos información en circunstancias justificadas:
            </p>
            <ul>
              <li>Con proveedores de servicios técnicos (servidores de alojamiento web o plataformas de comunicación como WhatsApp).</li>
              <li>Dentro de nuestro equipo de profesionales y especialistas involucrados en su proyecto.</li>
              <li>Cuando sea requerido legalmente ante las autoridades competentes.</li>
            </ul>

            <h2 className="text-navy-main">Sus derechos y opciones</h2>
            <p>
              Usted tiene control sobre su información. Es posible que tenga los siguientes derechos:
            </p>
            <ul>
              <li>Derecho de acceso a los datos que nos haya facilitado.</li>
              <li>Derecho a solicitar la rectificación o supresión de sus datos de contacto.</li>
              <li>Derecho a no recibir comunicaciones comerciales u ofertas que no haya solicitado.</li>
            </ul>

            <h2 className="text-navy-main">Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o deseas ejercer tus derechos de privacidad, por favor envíanos un correo electrónico a <strong className="text-navy-main">theoferinversionesproyectos@gmail.com</strong> o escríbenos a la siguiente dirección física:
            </p>
            <address className="not-italic bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-500 mt-2">
              <strong className="text-navy-main">TheoFer LLC</strong><br />
              6-17 NW 108th Ct, Doral, FL, 33178, US
            </address>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
