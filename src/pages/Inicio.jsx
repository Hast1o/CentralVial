import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgaerodromo from '../assets/aerodromo.png';
import imgvalla from '../assets/valla.png';
import paso from '../assets/paso_zebra.png';


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

// --- DATOS DE CLIENTES ---
const clientes = [
  {
    id: 1,
    nombre: "Aeródromo Curicó",
    rubro: "Infraestructura Pública",
    logo: "https://placehold.co/200x100/eeeeee/5C5E60?text=Logo+Aerodromo"
  },
  {
    id: 2,
    nombre: "Aeródromo Chillán",
    rubro: "Infraestructura Pública",
    logo: "https://placehold.co/200x100/eeeeee/5C5E60?text=Logo+Aerodromo"
  },
  {
    id: 3,
    nombre: "Municipalidad",
    rubro: "Sector Público",
    logo: "https://placehold.co/200x100/eeeeee/5C5E60?text=Logo+Muni"
  },
  {
    id: 4,
    nombre: "Constructora Privada",
    rubro: "Sector Privado",
    logo: "https://placehold.co/200x100/eeeeee/5C5E60?text=Logo+Empresa"
  }
];

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funciones para avanzar o retroceder el carrusel
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Autoplay del carrusel (cambia cada 5 segundos)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-cvial-light min-h-screen">
      
      {/* --- SECCIÓN 1: HERO / CARRUSEL --- */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-black">
        {/* Imágenes y Textos del Carrusel */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {/* Imagen de fondo con filtro oscuro para que resalte el texto */}
            <img 
              src={slide.imagen} 
              alt={slide.titulo} 
              className="w-full h-full object-cover opacity-60"
            />
            {/* Contenedor del Texto */}
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

        {/* Controles del Carrusel (Flechas) */}
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

        {/* Indicadores (Puntitos abajo) */}
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

      {/* --- SECCIÓN 2: CLIENTES (Tarjetas Flotantes) --- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Confían en Nosotros
          </h2>
          <div className="w-24 h-1 bg-cvial-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hemos ejecutado exitosamente proyectos profesionales a nivel zonal, destacándonos por la calidad y precisión de nuestro trabajo en terreno.
          </p>
        </div>

        {/* Grilla de Clientes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {clientes.map((cliente) => (
            <div 
              key={cliente.id}
              // Aquí está la magia del "efecto flotante"
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-default"
            >
              <div className="h-24 w-full flex items-center justify-center mb-4">
                <img 
                  src={cliente.logo} 
                  alt={`Logo ${cliente.nombre}`} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-bold text-cvial-secondary text-center">{cliente.nombre}</h3>
              <p className="text-xs text-cvial-primary font-semibold uppercase tracking-wider mt-1 text-center">
                {cliente.rubro}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}