import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

function Contacto() {
  // TODO: Reemplaza este número por el WhatsApp real de contacto de Central Vial
  const numeroWhatsApp = "56944301780"; 
  const mensajeWhatsApp = "Hola, vengo desde la página web de Central Vial y me gustaría cotizar un servicio.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <section className="py-16 px-6 bg-cvial-light min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-cvial-secondary mb-4">
            Ponte en contacto con nosotros y te ayudaremos en todo lo que necesites
          </h2>
          <p className="text-gray-600 mb-2 text-lg">
            Cotiza nuestros servicios de seguridad vial, demarcación o mitigación. Agenda una visita técnica y responderemos cualquier pregunta que tengas.
          </p>
          <p className="text-gray-600 text-lg">
            Por favor, rellena el siguiente formulario y te responderemos con la mayor brevedad posible.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL: Formulario + Datos directos */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          
          {/* FORMULARIO */}
          <div className="p-8 md:p-12">
            <form 
              // TODO: Reemplaza este correo por el correo real donde recibirán los mensajes
              action="https://formsubmit.co/palfaro.centralvial@gmail.com" 
              method="POST" 
              className="space-y-6"
            >
              {/* Opciones ocultas de FormSubmit */}
              <input type="hidden" name="_subject" value="¡Nueva consulta desde la página web de Central Vial!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://hast1o.github.io/CentralVial/#/contacto" />
              
              {/* Fila 1: Nombre y Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Nombre y apellido: <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="Nombre" 
                    required
                    placeholder="Nombre y apellido" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cvial-primary focus:ring-1 focus:ring-cvial-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Empresa u Organización:</label>
                  <input 
                    type="text" 
                    name="Empresa"
                    placeholder="Nombre de la empresa (Opcional)" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cvial-primary focus:ring-1 focus:ring-cvial-primary transition-colors"
                  />
                </div>
              </div>

              {/* Fila 2: Servicio, Email, Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    ¿En qué servicio estás interesado? <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="Servicio_de_interes" 
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cvial-primary focus:ring-1 focus:ring-cvial-primary bg-white transition-colors"
                  >
                    <option value="Aún no lo ha decidido">Aún no lo he decidido</option>
                    <option value="Demarcaciones Viales">Demarcaciones Viales</option>
                    <option value="Suministro e Instalación">Suministro e Instalación</option>
                    <option value="Mitigaciones en General">Mitigaciones en General</option>
                    <option value="Otros Servicios">Otros Servicios</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email: <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="Email_Contacto"
                    required
                    placeholder="Correo electrónico" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cvial-primary focus:ring-1 focus:ring-cvial-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Teléfono: <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="Telefono"
                    required
                    placeholder="Teléfono de contacto" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cvial-primary focus:ring-1 focus:ring-cvial-primary transition-colors"
                  />
                </div>
              </div>

              {/* Fila 3: Mensaje */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  ¿Cómo podemos ayudarte? <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="Mensaje"
                  required
                  rows="4" 
                  placeholder="Detalla tu proyecto o consulta aquí..." 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cvial-primary focus:ring-1 focus:ring-cvial-primary resize-none transition-colors"
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <button 
                type="submit" 
                className="w-full bg-cvial-primary hover:bg-opacity-90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 text-lg mt-4 shadow-md"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* SECCIÓN INFERIOR: Contacto Directo */}
          <div className="bg-gray-50 p-8 md:p-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-cvial-secondary mb-1">¿Prefieres trato directo?</h3>
              <p className="text-gray-600 text-sm md:text-base">Paulina Alfaro Jeldres | Supervisora Zonal</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-gray-700">
                <MapPin size={18} className="text-cvial-primary" />
                <span className="text-sm font-medium">Curicó / Molina, Región del Maule</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                // TODO: Actualiza el enlace con el Instagram real de Central Vial
                href="https://www.instagram.com/centralvial_spa/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm"
              >
                <SiInstagram color="#E1306C" size={20} /> Instagram
              </a>
              <a 
                href={linkWhatsApp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-sm"
              >
                <SiWhatsapp size={24} /> WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto;