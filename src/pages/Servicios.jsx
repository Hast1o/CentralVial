import React, { useState, useEffect } from 'react';
import { ChevronDown, Route, Wrench, Package, X, Image as ImageIcon } from 'lucide-react';


// Imports de imágenes desde assets/servicios
import imgTermoplastica from '../assets/servicios/pintura-termoplastica.jpg';
import imgSimbologia from '../assets/servicios/simbologia.png';
import imgPinturaAirless from '../assets/servicios/pintura-airless.jpg';
import imgDobleComponente from '../assets/servicios/doble-componente.png';
import imgPaceCote from '../assets/servicios/pace-cote.jpg';
import imgCanchas from '../assets/servicios/canchas.png';

// Imports para Instalación
import imgSeñalesTransito from '../assets/servicios/señales-transito.png';
import imgDefensasCamineras from '../assets/servicios/Defensas-camineras.jpg';
import imgCercosAcmafor from '../assets/servicios/cercos-acmafor.png';
import imgVallasPeatonales from '../assets/servicios/vallas-peatonales.png';
import imgTachasTachones from '../assets/servicios/tachas-tachones-hitos.png';
import imgTopesEstacionamiento from '../assets/servicios/topes-estacionamiento.png';
import imgReductoresVelocidad from '../assets/servicios/reductores-velocidad.png';
import imgZebraSafe from '../assets/servicios/zebra-safe.jpg';
import imgDelineadorVertical from '../assets/servicios/delineador-vertical.jpg';
import imgPostesOmega from '../assets/servicios/postes-omega.jpg';
import imgLomoToro from '../assets/servicios/lomo-de-toro.png';

// Imports para Materiales
import imgConosReflectantes from '../assets/servicios/Cono-reflectante.webp';
import imgBarrerasNewJersey from '../assets/servicios/barrerras-newjersey.png';
import imgTachasReflectantes from '../assets/servicios/tachas-reflectantes.webp';
import imgTopesCaucho from '../assets/servicios/tope-caucho.png';
import imgReductoresCaucho from '../assets/servicios/reductores-caucho.jpg';
import imgTachones from '../assets/servicios/tachones.png';
import imgInspeccion from '../assets/servicios/inspeccion.jpg';
import imgBarrerasCamineras from '../assets/servicios/camineras.jpg';
import imgPinturas from '../assets/servicios/pintura.jpg';
import imgKitPegamento from '../assets/servicios/pegamento.jpg';
import imgPostesOmegaAlt from '../assets/servicios/poste-ome.jpeg';
import imgCercosAcmaforAlt from '../assets/servicios/acmafor.webp';
import imgPareSiga from '../assets/servicios/pare-siga.webp';



// 2. ARREGLOS DE DATOS (Reemplaza las URL de 'imagen' por tus imports, ej: imagen: imgTermoplastica)
const demarcacionesData = [
  { id: 'd1', texto: "Pintura Termoplástica Blanca, Azul, Verde y amarilla con Sembrado de Microesferas.", imagen: imgTermoplastica },
  { id: 'd2', texto: "Simbología en pintura termo plástico, pintura acrílica y plantillas.", imagen: imgSimbologia },
  { id: 'd3', texto: "Pintura Acrílica Blanco, Azul, Amarillo, Verde y rojo con Sembrado de Microesferas, Tipo Airless.", imagen: imgPinturaAirless },
  { id: 'd4', texto: "Pintura Doble Componente blanco Verde y Amarillo con Sembrado de Microesferas.", imagen: imgDobleComponente },
  { id: 'd5', texto: "Pintura Pace cote.", imagen: imgPaceCote },
  { id: 'd6', texto: "Pintura Acrílica para Canchas de Tenis, Futbolito y Establecimientos Educacionales.", imagen: imgCanchas },
];

const instalacionData = [
  { id: 'i1', texto: "Señales de Tránsito Provisorias y Definitivas.", imagen: imgSeñalesTransito },
  { id: 'i2', texto: "Defensa Caminera.", imagen: imgDefensasCamineras },
  { id: 'i3', texto: "Cercos Perimetrales Acmafor.", imagen: imgCercosAcmafor },
  { id: 'i4', texto: "Vallas Peatonales.", imagen: imgVallasPeatonales },
  { id: 'i5', texto: "Tachas Reflectantes, Tachones e Hitos.", imagen: imgTachasTachones },
  { id: 'i6', texto: "Topes de Estacionamientos.", imagen: imgTopesEstacionamiento },
  { id: 'i7', texto: "Reductores de velocidad (negro/amarillo).", imagen: imgReductoresVelocidad },
  { id: 'i8', texto: "Postes Zebra Zafe.", imagen: imgZebraSafe },
  { id: 'i9', texto: "Delineadores Verticales.", imagen: imgDelineadorVertical },
  { id: 'i10', texto: "Postes Omega Galvanizado.", imagen: imgPostesOmega },
  { id: 'i11', texto: "Lomo de Toro.", imagen: imgLomoToro },
];

const materialesData = [
  { id: 'm1', texto: "Conos Reflectantes.", imagen: imgConosReflectantes },
  { id: 'm2', texto: "Barreras New Yersey.", imagen: imgBarrerasNewJersey },
  { id: 'm3', texto: "Tachas reflectantes (rojas, amarillas, bicolor y solares).", imagen: imgTachasReflectantes },
  { id: 'm4', texto: "Topes de caucho.", imagen: imgTopesCaucho },
  { id: 'm5', texto: "Reductores de velocidad en caucho (negro / amarillo).", imagen: imgReductoresCaucho },
  { id: 'm6', texto: "Tachones.", imagen: imgTachones },
  { id: 'm7', texto: "Inspección Técnicas de Obras (ITO).", imagen: imgInspeccion },
  { id: 'm8', texto: "Barreras camineras.", imagen: imgBarrerasCamineras },
  { id: 'm9', texto: "Pinturas (acrílica, alto tráfico, termo plástico, doble componente etc).", imagen: imgPinturas },
  { id: 'm10', texto: "Kit de pegamento.", imagen: imgKitPegamento },
  { id: 'm11', texto: "Postes omega.", imagen: imgPostesOmegaAlt },
  { id: 'm12', texto: "Cercos Acmafor.", imagen: imgCercosAcmaforAlt },
  { id: 'm13', texto: "Paletas de Señalización Pare/Siga.", imagen: imgPareSiga },
];

export default function Servicios() {
  const [openPanels, setOpenPanels] = useState({
    demarcaciones: false,
    instalacion: false,
    materiales: false
  });

  // Estado para controlar qué ítem (y foto) mostrar en el modal
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanels(prev => ({
      ...prev,
      [panel]: !prev[panel]
    }));
  };

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (itemSeleccionado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [itemSeleccionado]);

  // Función para manejar el clic en un ítem de la lista
  const handleItemClick = (e, item) => {
    e.stopPropagation(); // Evita que el clic cierre el panel acordeón
    setItemSeleccionado(item);
  };

  return (
    <div className="bg-cvial-light min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones integrales y profesionales para mejorar la seguridad en calles, carreteras y recintos privados.
            <br/><span className="text-sm font-semibold text-cvial-primary mt-2 inline-block">Haz clic en los servicios para ver ejemplos.</span>
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
            
            <div className={`overflow-hidden transition-all duration-500 ${openPanels.demarcaciones ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <ul className="text-gray-600 space-y-3 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {demarcacionesData.map((item) => (
                  <li 
                    key={item.id}
                    onClick={(e) => handleItemClick(e, item)}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 hover:text-cvial-primary transition-colors cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform"></div> 
                    <span className="flex-1">{item.texto}</span>
                    <ImageIcon className="text-gray-300 group-hover:text-cvial-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" size={18} />
                  </li>
                ))}
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
            
            <div className={`overflow-hidden transition-all duration-500 ${openPanels.instalacion ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <ul className="text-gray-600 space-y-2 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {instalacionData.map((item) => (
                  <li 
                    key={item.id}
                    onClick={(e) => handleItemClick(e, item)}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 hover:text-cvial-primary transition-colors cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform"></div> 
                    <span className="flex-1">{item.texto}</span>
                    <ImageIcon className="text-gray-300 group-hover:text-cvial-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" size={18} />
                  </li>
                ))}
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
            
            <div className={`overflow-hidden transition-all duration-500 ${openPanels.materiales ? 'max-h-[1200px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <ul className="text-gray-600 space-y-2 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {materialesData.map((item) => (
                  <li 
                    key={item.id}
                    onClick={(e) => handleItemClick(e, item)}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 hover:text-cvial-primary transition-colors cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform"></div> 
                    <span className="flex-1">{item.texto}</span>
                    <ImageIcon className="text-gray-300 group-hover:text-cvial-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" size={18} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>

      {/* --- MODAL PARA MOSTRAR LA IMAGEN --- */}
      {itemSeleccionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4 transition-opacity duration-300"
          onClick={() => setItemSeleccionado(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative transform transition-all flex flex-col"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer click dentro del recuadro blanco
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setItemSeleccionado(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Contenedor de la Imagen */}
            <div className="w-full h-64 sm:h-96 md:h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src={itemSeleccionado.imagen} 
                alt={itemSeleccionado.texto}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Texto Descriptivo Inferior */}
            <div className="p-6 md:p-8 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-cvial-primary rounded-full flex-shrink-0 mt-2.5"></div>
                <p className="text-lg md:text-xl font-bold text-cvial-secondary leading-tight">
                  {itemSeleccionado.texto}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}