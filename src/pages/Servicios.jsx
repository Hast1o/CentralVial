import React, { useState } from 'react';
import { ChevronDown, Route, Wrench, Package } from 'lucide-react';

export default function Servicios() {
  const [openPanels, setOpenPanels] = useState({
    demarcaciones: false,
    instalacion: false,
    materiales: false
  });

  const togglePanel = (panel) => {
    setOpenPanels(prev => ({
      ...prev,
      [panel]: !prev[panel]
    }));
  };

  return (
    <div className="bg-cvial-light min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones integrales y profesionales para mejorar la seguridad en calles, carreteras y recintos privados.
          </p>
        </div>

        {/* Contenedor de las Tarjetas */}
        <div className="space-y-6">
          
          {/* 1. Demarcaciones Viales */}
          <div 
            onClick={() => togglePanel('demarcaciones')}
            className="bg-white p-6 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:border-cvial-primary hover:shadow-[0_0_20px_rgba(0,154,68,0.2)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <Route className="text-cvial-primary" size={36} />
                <h4 className="text-xl font-bold text-cvial-secondary uppercase tracking-wide">
                  Demarcaciones<br/>Viales
                </h4>
              </div>
              <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openPanels.demarcaciones ? 'rotate-180 text-cvial-primary' : ''}`} />
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${openPanels.demarcaciones ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <ul className="text-gray-600 space-y-4 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div> 
                  <span>Pintura Termoplástica Blanca, Azul, Verde y amarilla con Sembrado de Microesferas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div> 
                  <span>Simbología en pintura termo plástico, pintura acrílica y plantillas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div> 
                  <span>Pintura Acrílica Blanco, Azul, Amarillo, Verde y rojo con Sembrado de Microesferas, Tipo Airless.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div> 
                  <span>Pintura Doble Componente blanco Verde y Amarillo con Sembrado de Microesferas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div> 
                  <span>Pintura Pace cote.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div> 
                  <span>Pintura Acrílica para Canchas de Tenis, Futbolito y Establecimientos Educacionales.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Suministro e Instalación */}
          <div 
            onClick={() => togglePanel('instalacion')}
            className="bg-white p-6 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:border-cvial-primary hover:shadow-[0_0_20px_rgba(0,154,68,0.2)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <Wrench className="text-cvial-primary" size={36} />
                <h4 className="text-xl font-bold text-cvial-secondary uppercase tracking-wide">
                  Suministro e<br/>Instalación
                </h4>
              </div>
              <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openPanels.instalacion ? 'rotate-180 text-cvial-primary' : ''}`} />
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${openPanels.instalacion ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <ul className="text-gray-600 space-y-3 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Señales de Tránsito Provisorias y Definitivas.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Defensa Caminera.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Cercos Perimetrales Acmafor.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Vallas Peatonales.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Tachas Reflectantes, Tachones e Hitos.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Topes de Estacionamientos.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Reductores de velocidad (negro/amarillo).</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Postes Zebra Zafe.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Delineadores Verticales.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Postes Omega Galvanizado.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Lomo de Toro.</span></li>
              </ul>
            </div>
          </div>

          {/* 3. Suministro de Materiales */}
          <div 
            onClick={() => togglePanel('materiales')}
            className="bg-white p-6 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:border-cvial-primary hover:shadow-[0_0_20px_rgba(0,154,68,0.2)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <Package className="text-cvial-primary" size={36} />
                <h4 className="text-xl font-bold text-cvial-secondary uppercase tracking-wide">
                  Suministro de<br/>Materiales
                </h4>
              </div>
              <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openPanels.materiales ? 'rotate-180 text-cvial-primary' : ''}`} />
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${openPanels.materiales ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <ul className="text-gray-600 space-y-3 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Conos Reflectantes.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Barreras New Yersey.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Tachas reflectantes (rojas, amarillas, bicolor y solares).</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Topes de caucho.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Reductores de velocidad en caucho (negro / amarillo).</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Tachones.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Inspección Técnicas de Obras (ITO).</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Barreras camineras.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Pinturas (acrílica, alto tráfico, termo plástico, doble componente etc).</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Kit de pegamento.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Postes omega.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Cercos Acmafor.</span></li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2"></div><span>Paletas de Señalización Pare/Siga.</span></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}