import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importa aquí tus imágenes locales
// import logoAfin from '../assets/logo_afin.png';
import imgaerodromo from '../assets/aerodromo.png';
import imgvalla from '../assets/valla.png';
import paso from '../assets/paso_zebra.png';
import imgafin from '../assets/AFIN/CITYCRIL-600x666.jpg';
import imgdoscril from '../assets/AFIN/DOSCRIL-600x666.jpg';
import imgralva from '../assets/AFIN/pintura-ralva.jpg';
import imgtwinB from '../assets/AFIN/pintura-Twincril-gris.jpg';
import imgtwinA from '../assets/AFIN/pintura-Twincril-rojo.jpg';
import mop from '../assets/empresas/MOP.png';
import municurico from '../assets/empresas/municipalidad-curico.png';
import copec from '../assets/empresas/copec.png';
import magotteaux from '../assets/empresas/magotteaux.png';
import pasoancho from '../assets/empresas/paso-ancho.jpg';
import demotron from '../assets/empresas/demotron.png';
import malpo from '../assets/empresas/malpo.png';
import galilea from '../assets/empresas/galilea.png';
import independencia from '../assets/empresas/independencia.png';
import mas from '../assets/empresas/mas.png';
import microesfera from '../assets/AFIN/Microesferas.png';
import doscrilrojo from '../assets/AFIN/Doscrilralvarojo.png';
import pegamento from '../assets/AFIN/Pegamento-epoxico-1.png';

const slides = [
  {
    id: 1,
    titulo: "Demarcaciones Viales Profesionales",
    descripcion: "Pintura termoplástica y acrílica de alta visibilidad bajo estrictas normativas.",
    imagen: imgaerodromo
  },
  {
    id: 2,
    titulo: "Proyectos de Mitigación",
    descripcion: "Soluciones integrales para garantizar la seguridad en zonas de alto tráfico y faenas.",
    imagen: imgvalla
  },
  {
    id: 3,
    titulo: "Suministro e Instalación",
    descripcion: "Equipamiento de seguridad, señales, cercos y reductores de velocidad de primera calidad.",
    imagen: paso
  }
];

// --- DATOS DE CLIENTES (13 Grillas) ---
const clientes = [
  { id: 1, nombre: "Const. Independencia", rubro: "Constructora", logo: independencia },
  { id: 2, nombre: "Const. Galilea", rubro: "Constructora", logo: galilea },
  { id: 3, nombre: "Const. Malpo", rubro: "Constructora", logo: malpo },
  { id: 4, nombre: "Municipalidad Curico", rubro: "Municipio", logo: municurico },
  { id: 5, nombre: "Const. Demotrón", rubro: "Constructora", logo: demotron },
  { id: 7, nombre: "Const. Paso Ancho", rubro: "Constructora", logo: pasoancho },
  { id: 10, nombre: "Magotteaux Andino", rubro: "Empresa", logo: magotteaux },
  { id: 12, nombre: "Mantenimiento COPEC", rubro: "Servicios", logo: copec },
  { id: 13, nombre: "Obras Viales MOP", rubro: "Sector Público", logo: mop },
  { id: 14, nombre: "y muchas mas", rubro: "varios", logo: mas },
];

// --- DATOS PRODUCTOS AFIN (8 Ítems) ---
const productosAfin = [
  { id: 1, nombre: "Pintura Acrílica Citycril", descripcion: "Base solvente para señalización", imagen: imgafin },
  { id: 2, nombre: "Plástico en Frío Doscril", descripcion: "Dos componentes de alta duración", imagen: imgdoscril },
  { id: 3, nombre: "Pintura Acrílica Señacril", descripcion: "Base solvente de secado rápido", imagen: imgralva },
  { id: 4, nombre: "Twincril Componente A", descripcion: "Señalización vial sistema 1:1", imagen: imgtwinA },
  { id: 5, nombre: "Twincril Componente B", descripcion: "Catalizador para sistema Twincril", imagen: imgtwinB },
  { id: 6, nombre: "Pegamento Epóxico", descripcion: "Para fijación de tachas viales", imagen: pegamento },
  { id: 7, nombre: "Doscril Rojo", descripcion: "Plástico en frío antideslizante", imagen: doscrilrojo },
  { id: 8, nombre: "Microesferas de Vidrio", descripcion: "Echostar 5 para retroreflectividad", imagen: microesfera }
];

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-cvial-light min-h-screen pb-10">

      {/* --- SECCIÓN 1: HERO / CARRUSEL --- */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img
              src={slide.imagen}
              alt={slide.titulo}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg transform translate-y-0">
                {slide.titulo}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 max-w-3xl drop-shadow-md">
                {slide.descripcion}
              </p>
              <a
                href="#/contacto"
                className="mt-8 bg-cvial-primary hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Cotizar Proyecto
              </a>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-cvial-primary p-2 md:p-3 rounded-full text-white transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-cvial-primary p-2 md:p-3 rounded-full text-white transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={30} />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-cvial-primary w-8' : 'bg-white/50 hover:bg-white'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN 2: CLIENTES (13 Tarjetas Flotantes) --- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Confían en Nosotros
          </h2>
          <div className="w-24 h-1 bg-cvial-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hemos ejecutado exitosamente proyectos profesionales, trabajando con marcas, constructoras y entidades líderes en el rubro.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-default"
            >
              <div className="h-16 md:h-20 w-full flex items-center justify-center mb-3">
                <img
                  src={cliente.logo}
                  alt={`Logo ${cliente.nombre}`}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-bold text-cvial-secondary text-center text-sm">{cliente.nombre}</h3>
              <p className="text-[10px] md:text-xs text-cvial-primary font-semibold uppercase tracking-wider mt-1 text-center">
                {cliente.rubro}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN 3: DISTRIBUIDORES AFIN SUMINISTROS --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-3xl border border-gray-200">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-gray-900 font-extrabold px-6 py-2 rounded-full mb-4 shadow-sm uppercase tracking-wider text-sm">
            Distribuidor Oficial
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            AFIN Suministros
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Garantizamos la mejor calidad en demarcación utilizando pinturas y materiales líderes en la industria de la señalización vial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosAfin.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center border-b-4 border-yellow-400 shadow-md hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 cursor-default group"
            >
              <div className="h-32 w-full flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className={`object-contain transition-transform duration-500 ${producto.id === 7
                      ? 'scale-[0.7] group-hover:scale-[0.8]' // Ajustado a 160% base y 175% en hover
                      : 'max-h-full max-w-full group-hover:scale-110' // Comportamiento normal para el resto
                    }`}
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center text-sm md:text-base leading-tight">
                {producto.nombre}
              </h3>
              <p className="text-xs text-yellow-600 font-semibold uppercase tracking-wider mt-2 text-center">
                {producto.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}