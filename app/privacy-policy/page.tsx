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
      className="relative min-h-screen bg-[#030712] overflow-hidden pt-32 pb-24"
    >
      {/* Background radial gold glow for premium corporate feel */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/10 shadow-2xl">
          <header className="mb-10 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center gap-3 mb-4">
              <span className="p-2.5 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
                <Shield size={24} />
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Política de Privacidad
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Última actualización: 13 de febrero de 2026 • TheoFer LLC
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              En TheoFer respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política detalla el tratamiento de la información recolectada en nuestra plataforma y servicios.
            </p>
          </header>

          <hr className="border-gray-900 my-8" />

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-gray-300">
            <p>
              theoferllc gestiona de esta tienda y este sitio web, incluidos los datos, el contenido, las funciones, las herramientas, los productos y los servicios para ofrecerle a usted, el cliente, una experiencia de compra seleccionada (los “Servicios”). theoferllc cuenta con tecnología de Shopify que nos permite ofrecerle los Servicios. Esta Política de privacidad describe cómo recopilamos, utilizamos y divulgamos su información personal cuando visita, utiliza o realiza una compra u otra transacción a través de los Servicios o cuando se comunica con nosotros por cualquier otro medio. En caso de conflicto entre nuestros Términos del Servicio y esta Política de privacidad, prevalecerá esta Política de privacidad en lo que respecta a la recopilación, el tratamiento y la divulgación de su información personal.
            </p>
            <p>
              Le rogamos que lea atentamente esta Política de privacidad. Al utilizar y acceder a cualquiera de los Servicios, usted reconoce haber leído esta Política de privacidad y entender la forma en que se recopila, utiliza y divulga su información personal, de conformidad con lo establecido en la presente Política de privacidad.
            </p>

            <h2>Información personal que recopilamos o tratamos</h2>
            <p>
              Cuando utilizamos el término &quot;información personal&quot;, nos referimos a cualquier dato que le identifique o que pueda vincularse razonablemente con usted o con otra persona. La información personal no incluye los datos recopilados de forma anónima ni aquellos que hayan sido desidentificados. Podemos recopilar o tratar las siguientes categorías de información personal:
            </p>
            <ul>
              <li><strong>Detalles de contacto:</strong> incluidos su nombre, dirección, dirección de facturación, dirección de envío, número de teléfono y dirección de correo electrónico.</li>
              <li><strong>Información financiera:</strong> incluidos los números de tarjeta de crédito, tarjeta de débito y cuentas financieras, la información de las tarjetas de pago, los datos de cuentas financieras, los detalles de las transacciones, la forma de pago, la confirmación del pago y otra información relacionada con el pago.</li>
              <li><strong>Información de la cuenta:</strong> incluidos su nombre de usuario, contraseña, preguntas de seguridad, preferencias y configuración.</li>
              <li><strong>Información sobre transacciones:</strong> incluidos los artículos que consulta, añade a su carrito, guarda en su lista de deseos o compra, devuelve, cambia o cancela, así como sus transacciones anteriores.</li>
              <li><strong>Comunicaciones con nosotros:</strong> incluida la información que nos facilite en sus comunicaciones con nosotros, por ejemplo, al enviar una reclamación al servicio de atención al cliente.</li>
              <li><strong>Información del dispositivo:</strong> incluida información sobre su dispositivo, navegador o conexión de red, su dirección IP y otros identificadores únicos.</li>
              <li><strong>Información sobre el uso:</strong> incluida la información relativa a su interacción con los Servicios, como el modo y el momento en que los utiliza o navega por ellos.</li>
            </ul>

            <h2>Fuentes de información personal</h2>
            <p>
              Podemos recopilar información personal de las siguientes fuentes:
            </p>
            <ul>
              <li>Directamente de usted cuando crea una cuenta, visita o utiliza los Servicios, se comunica con nosotros o nos proporciona su información personal por cualquier otro medio.</li>
              <li>Automáticamente a través de los Servicios (información procedente de su dispositivo cuando utiliza nuestros productos o visita nuestros sitios web, así como mediante el uso de cookies y tecnologías similares).</li>
              <li>De nuestros proveedores de servicios cuando los contratamos para habilitar determinada tecnología o cuando recopilan o tratan su información personal en nuestro nombre.</li>
              <li>De nuestros partners o de otros terceros.</li>
            </ul>

            <h2>Cómo utilizamos su información personal</h2>
            <p>
              Según cómo interactúe con nosotros o qué Servicios utilice, podemos utilizar su información personal para:
            </p>
            <ul>
              <li>Prestar, personalizar y mejorar los Servicios (cumplir contratos, procesar pagos, gestionar pedidos, recordar preferencias y ofrecer una experiencia de compra personalizada).</li>
              <li>Marketing y publicidad (enviar comunicaciones comerciales y mostrar anuncios en función de sus compras o intereses).</li>
              <li>Seguridad y prevención de fraudes (autenticar su cuenta, ofrecer pagos seguros, detectar actividades fraudulentas o malintencionadas).</li>
              <li>Comunicaciones con usted (ofrecer atención al cliente, responder a sus solicitudes y mantener la relación comercial).</li>
              <li>Motivos legales (cumplir con la legislación aplicable, responder a procedimientos legales y hacer cumplir nuestros términos).</li>
            </ul>

            <h2>Cómo divulgamos la información personal</h2>
            <p>
              En determinadas circunstancias, podemos divulgar su información personal a terceros por motivos legítimos, tales como:
            </p>
            <ul>
              <li>Con Shopify, proveedores y otros terceros que prestan servicios de TI, procesamiento de pagos, análisis de datos o envíos.</li>
              <li>Con partners comerciales y de marketing para mostrarle publicidad personalizada basada en su actividad.</li>
              <li>Cuando usted lo autorice o consienta (por ejemplo, widgets de redes sociales).</li>
              <li>Dentro de nuestro grupo empresarial.</li>
              <li>En relación con transacciones comerciales, fusiones o procesos legales válidos.</li>
            </ul>

            <h2>Relación con Shopify</h2>
            <p>
              Los Servicios se alojan en Shopify, que recopila y procesa información personal sobre su acceso y uso de los Servicios para proporcionarlos y mejorarlos. La información que envíe se transmitirá y compartirá con Shopify y con terceros que podrían estar ubicados en países diferentes al suyo.
            </p>

            <h2>Sus derechos y opciones</h2>
            <p>
              Según el lugar en el que resida, es posible que tenga los siguientes derechos en relación con su información personal (aunque no son absolutos y aplican con excepciones):
            </p>
            <ul>
              <li>Derecho de acceso a los datos recopilados.</li>
              <li>Derecho a solicitar la rectificación o supresión de datos.</li>
              <li>Derecho a la portabilidad de los datos a un tercero.</li>
              <li>Derecho a oponerse a la venta o cesión de datos para publicidad dirigida.</li>
            </ul>

            <h2>Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o deseas ejercer tus derechos de privacidad, por favor envíanos un correo electrónico a <strong>theoferinversionesproyectos@gmail.com</strong> o escríbenos a la siguiente dirección física:
            </p>
            <address className="not-italic bg-gray-950/60 p-4 rounded-xl border border-gray-950 text-gray-400 mt-2">
              <strong>theoferllc</strong><br />
              6-17 NW 108th Ct, Doral, FL, 33178, US
            </address>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
