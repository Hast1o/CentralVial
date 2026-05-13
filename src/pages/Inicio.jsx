import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react'; // <-- Se agregó el icono X

// Importa aquí tus imágenes locales
import imgaerodromo from '../assets/aerodromo.png';
import imgvalla from '../assets/valla.png';
import paso from '../assets/paso_zebra.png';
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
import dgacLogo from '../assets/empresas/DGAC.png'; 

// Importa aquí las fotos de los trabajos realizados (EJEMPLOS)
// import trabajoMOP from '../assets/trabajos/trabajo_mop.jpg';
// import trabajoCurico from '../assets/trabajos/trabajo_curico.jpg';

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
// NOTA: Reemplaza 'imgaerodromo' o 'paso' por las fotos reales de tus trabajos
const clientes = [
  { id: 1, nombre: "Const. Independencia", rubro: "Constructora", logo: independencia, trabajoImagen: paso, trabajoDescripcion: "Demarcación de estacionamientos y pasos peatonales en nuevo proyecto habitacional." },
  { id: 2, nombre: "Const. Galilea", rubro: "Constructora", logo: galilea, trabajoImagen: imgvalla, trabajoDescripcion: "Instalación de señalética vertical y barreras de contención en zonas de curva." },
  { id: 3, nombre: "Const. Malpo", rubro: "Constructora", logo: malpo, trabajoImagen: imgaerodromo, trabajoDescripcion: "Pintura termoplástica en vías principales de loteo urbano." },
  { id: 4, nombre: "Municipalidad Curicó", rubro: "Municipio", logo: municurico, trabajoImagen: paso, trabajoDescripcion: "Renovación completa de pasos de cebra y lomos de toro en el centro cívico." },
  { id: 5, nombre: "Const. Demotrón", rubro: "Constructora", logo: demotron, trabajoImagen: imgvalla, trabajoDescripcion: "Suministro de elementos de mitigación para faenas viales de largo plazo." },
  { id: 7, nombre: "Const. Paso Ancho", rubro: "Constructora", logo: pasoancho, trabajoImagen: imgaerodromo, trabajoDescripcion: "Señalización de seguridad para cruces peligrosos en sector rural." },
  { id: 10, nombre: "Magotteaux Andino", rubro: "Empresa", logo: magotteaux, trabajoImagen: paso, trabajoDescripcion: "Demarcación de zonas de seguridad y tránsito de grúas horquilla en interior de planta industrial." },
  { id: 12, nombre: "Mantenimiento COPEC", rubro: "Servicios", logo: copec, trabajoImagen: imgvalla, trabajoDescripcion: "Pintura acrílica de alta resistencia para zonas de carga de combustible." },
  { id: 13, nombre: "Obras Viales MOP", rubro: "Sector Público", logo: mop, trabajoImagen: imgaerodromo, trabajoDescripcion: "Demarcación de eje central y bordes en ruta R-5, cumpliendo estándar normativo MOP." },
  { id: 11, nombre: "DGAC", rubro: "Entidad Aeronáutica", logo: dgacLogo, trabajoImagen: imgaerodromo, trabajoDescripcion: "Demarcación especializada de pistas de aterrizaje y zonas de rodaje en aeródromo local." },
  { id: 14, nombre: "Y muchas más...", rubro: "Varios", logo: mas, trabajoImagen: paso, trabajoDescripcion: "Cientos de proyectos exitosos avalan nuestra experiencia y compromiso con la seguridad vial." },
];

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // --- NUEVO ESTADO PARA EL MODAL ---
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- FUNCIONES PARA BLOQUEAR EL SCROLL CUANDO EL MODAL ESTÁ ABIERTO ---
  useEffect(() => {
    if (clienteSeleccionado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [clienteSeleccionado]);

  return (
    <div className="bg-cvial-light min-h-screen pb-10 relative">

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

      {/* --- SECCIÓN 2: CLIENTES (Tarjetas interactivas) --- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Confían en Nosotros
          </h2>
          <div className="w-24 h-1 bg-cvial-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hemos ejecutado exitosamente proyectos profesionales, trabajando con marcas, constructoras y entidades líderes en el rubro. <strong>Haz clic en los logos para ver nuestros trabajos.</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              onClick={() => setClienteSeleccionado(cliente)} // <-- Evento onClick agregado
              className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" // <-- cursor-pointer agregado
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

      {/* --- SECCIÓN 3: MODAL DE TRABAJO (Solo se renderiza si hay un cliente seleccionado) --- */}
      {clienteSeleccionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4 transition-opacity duration-300"
          onClick={() => setClienteSeleccionado(null)} // Cierra el modal si haces clic fuera de la tarjeta
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative transform transition-all"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro de la tarjeta cierre el modal
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setClienteSeleccionado(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10 backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Imagen del trabajo */}
            <div className="w-full h-64 md:h-80 bg-gray-200 relative">
              <img 
                src={clienteSeleccionado.trabajoImagen} 
                alt={`Trabajo realizado para ${clienteSeleccionado.nombre}`} 
                className="w-full h-full object-cover"
              />
              {/* Degradado en la parte inferior de la imagen para que el logo resalte */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Contenido (Logo y Descripción) */}
            <div className="px-6 md:px-10 pb-10 pt-2 relative -mt-12">
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg inline-block border border-gray-100">
                  <img 
                    src={clienteSeleccionado.logo} 
                    alt={clienteSeleccionado.nombre} 
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <div className="pb-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-cvial-secondary leading-tight">
                    {clienteSeleccionado.nombre}
                  </h3>
                  <span className="text-sm text-cvial-primary font-bold uppercase tracking-widest">
                    {clienteSeleccionado.rubro}
                  </span>
                </div>
              </div>
              
              <div className="w-16 h-1 bg-cvial-primary mb-6 rounded-full"></div>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {clienteSeleccionado.trabajoDescripcion}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}