import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ShoppingBag, Sparkles } from 'lucide-react'; // <-- Se agregaron ShoppingBag y Sparkles

// Importa aquí tus imágenes locales
import imgaerodromo from '../assets/aerodromo.png';
import imgvalla from '../assets/valla.png';
import paso from '../assets/paso_zebra.png';
import heroVideo from '../assets/hero.mp4';
import mop from '../assets/empresas/MOP.png';
import municurico from '../assets/empresas/municipalidad-curico.png';
import copec from '../assets/empresas/copec.png';
import magotteaux from '../assets/empresas/magotteaux.png';
import pasoancho from '../assets/empresas/paso-ancho.jpg';
import demotron from '../assets/empresas/demotron.png';
import galilea from '../assets/empresas/galilea.png';
import independencia from '../assets/empresas/independencia.png';
import mas from '../assets/empresas/mas.png';
import dgacLogo from '../assets/empresas/DGAC.png';
import shell from '../assets/empresas/shell.png';
import garces from '../assets/empresas/Garces.png';

// Importar imágenes de Copec
import copec1 from '../assets/copec/Screenshot 2026-06-10 141837.png';
import copec2 from '../assets/copec/Screenshot 2026-06-10 141844.png';
import copec3 from '../assets/copec/Screenshot 2026-06-10 141853.png';
import copec4 from '../assets/copec/Screenshot 2026-06-10 141858.png';
import copec5 from '../assets/copec/Screenshot 2026-06-10 142124.png';
import copec6 from '../assets/copec/Screenshot 2026-06-10 142130.png';
import copec7 from '../assets/copec/Screenshot 2026-06-10 142138.png';
import copec8 from '../assets/copec/WhatsApp Image 2026-06-10 at 09.09.27.jpeg';
import copec9 from '../assets/copec/WhatsApp Image 2026-06-10 at 09.09.28.jpeg';

// Importar imágenes de Shell
import shell1 from '../assets/Shell/WhatsApp Image 2026-06-10 at 08.53.01.jpeg';
import shell2 from '../assets/Shell/WhatsApp Image 2026-06-10 at 08.53.02 (1).jpeg';
import shell3 from '../assets/Shell/WhatsApp Image 2026-06-10 at 08.53.02.jpeg';

// Importar imágenes de Garcés Fruit
import garces1 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.47 (1).jpeg';
import garces2 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.47 (2).jpeg';
import garces3 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.47.jpeg';
import garces4 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.48 (1).jpeg';
import garces5 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.48.jpeg';
import garces6 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.49 (1).jpeg';
import garces7 from '../assets/Garces fruit/WhatsApp Image 2026-06-10 at 09.14.49.jpeg';

// Importar imágenes de Demotrón
import demotron1 from '../assets/demotron/WhatsApp Image 2026-06-10 at 09.07.50 (1).jpeg';
import demotron2 from '../assets/demotron/WhatsApp Image 2026-06-10 at 09.07.50.jpeg';
import demotron3 from '../assets/demotron/WhatsApp Image 2026-06-10 at 09.07.51.jpeg';

// Importar imágenes de DGAC
import dgac1 from '../assets/dgac/Screenshot 2026-06-10 141927.png';
import dgac2 from '../assets/dgac/Screenshot 2026-06-10 141933.png';
import dgac3 from '../assets/dgac/Screenshot 2026-06-10 141939.png';
import dgac4 from '../assets/dgac/Screenshot 2026-06-10 141945.png';
import dgac5 from '../assets/dgac/Screenshot 2026-06-10 141950.png';
import dgac6 from '../assets/dgac/Screenshot 2026-06-10 141955.png';
import dgac7 from '../assets/dgac/Screenshot 2026-06-10 141959.png';
import dgac8 from '../assets/dgac/Screenshot 2026-06-10 142004.png';
import dgac9 from '../assets/dgac/Screenshot 2026-06-10 142009.png';

// Importar imágenes de Galilea
import galilea1 from '../assets/galilea/WhatsApp Image 2026-06-10 at 08.56.54 (1).jpeg';
import galilea2 from '../assets/galilea/WhatsApp Image 2026-06-10 at 08.56.54.jpeg';
import galilea3 from '../assets/galilea/WhatsApp Image 2026-06-10 at 08.56.55.jpeg';

// Importar imágenes de Independencia
import independencia1 from '../assets/independencia/WhatsApp Image 2026-06-10 at 09.00.19.jpeg';
import independencia2 from '../assets/independencia/WhatsApp Image 2026-06-10 at 09.03.14.jpeg';
import independencia3 from '../assets/independencia/WhatsApp Image 2026-06-10 at 09.03.15 (1).jpeg';
import independencia4 from '../assets/independencia/WhatsApp Image 2026-06-10 at 09.03.15 (2).jpeg';
import independencia5 from '../assets/independencia/WhatsApp Image 2026-06-10 at 09.03.15 (3).jpeg';
import independencia6 from '../assets/independencia/WhatsApp Image 2026-06-10 at 09.03.15.jpeg';

// Importar imágenes de Magotteaux
import magotteaux1 from '../assets/magotteaux/WhatsApp Image 2026-06-10 at 09.11.46.jpeg';
import magotteaux2 from '../assets/magotteaux/WhatsApp Image 2026-06-10 at 09.11.47 (1).jpeg';
import magotteaux3 from '../assets/magotteaux/WhatsApp Image 2026-06-10 at 09.11.47 (2).jpeg';
import magotteaux4 from '../assets/magotteaux/WhatsApp Image 2026-06-10 at 09.11.47.jpeg';

// Importar imágenes de Municipalidad de Curicó
import municurico1 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141647.png';
import municurico2 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141652.png';
import municurico3 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141658.png';
import municurico4 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141702.png';
import municurico5 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141715.png';
import municurico6 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141723.png';
import municurico7 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141731.png';
import municurico8 from '../assets/municipalidad de curico/Screenshot 2026-06-10 141739.png';

// Importar imágenes de Obras Viales MOP
import mop1 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.49.jpeg';
import mop2 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.50 (1).jpeg';
import mop3 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.50 (2).jpeg';
import mop4 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.50 (3).jpeg';
import mop5 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.50.jpeg';
import mop6 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.51 (1).jpeg';
import mop7 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.51 (2).jpeg';
import mop8 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.51 (3).jpeg';
import mop9 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.51 (4).jpeg';
import mop10 from '../assets/obras viales mop/WhatsApp Image 2026-06-10 at 08.53.51.jpeg';

// Importar imágenes de Paso Ancho
import pasoancho1 from '../assets/paso ancho/WhatsApp Image 2026-06-10 at 08.51.55 (1).jpeg';
import pasoancho2 from '../assets/paso ancho/WhatsApp Image 2026-06-10 at 08.51.55.jpeg';
import pasoancho3 from '../assets/paso ancho/WhatsApp Image 2026-06-10 at 08.51.56.jpeg'; 


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
  { id: 1, nombre: "Const. Independencia", rubro: "Constructora", logo: independencia },
  { id: 2, nombre: "Const. Galilea", rubro: "Constructora", logo: galilea },
  { id: 4, nombre: "Municipalidad Curicó", rubro: "Municipio", logo: municurico },
  { id: 5, nombre: "Const. Demotrón", rubro: "Constructora", logo: demotron },
  { id: 7, nombre: "Const. Paso Ancho", rubro: "Constructora", logo: pasoancho },
  { id: 10, nombre: "Magotteaux Andino", rubro: "Empresa", logo: magotteaux },
  { id: 12, nombre: "Mantenimiento COPEC", rubro: "Servicios", logo: copec },
  { id: 13, nombre: "Obras Viales MOP", rubro: "Sector Público", logo: mop },
  { id: 11, nombre: "DGAC", rubro: "Entidad Aeronáutica", logo: dgacLogo },
  { id: 15, nombre: "Shell", rubro: "Energía", logo: shell },
  { id: 16, nombre: "Garcés", rubro: "Constructora", logo: garces },
  { id: 14, nombre: "Y muchas más...", rubro: "Varios", logo: mas },
];

// Mapeo de imágenes de proyectos para cada cliente
const imagenesProyectos = {
  1: [independencia1, independencia2, independencia3, independencia4, independencia5, independencia6], // Independencia
  2: [galilea1, galilea2, galilea3], // Galilea
  4: [municurico1, municurico2, municurico3, municurico4, municurico5, municurico6, municurico7, municurico8], // Municipalidad Curicó
  5: [demotron1, demotron2, demotron3], // Demotrón
  7: [pasoancho1, pasoancho2, pasoancho3], // Paso Ancho
  10: [magotteaux1, magotteaux2, magotteaux3, magotteaux4], // Magotteaux
  11: [dgac1, dgac2, dgac3, dgac4, dgac5, dgac6, dgac7, dgac8, dgac9], // DGAC
  12: [copec1, copec2, copec3, copec4, copec5, copec6, copec7, copec8, copec9], // COPEC
  13: [mop1, mop2, mop3, mop4, mop5, mop6, mop7, mop8, mop9, mop10], // MOP
  15: [shell1, shell2, shell3], // Shell
  16: [garces1, garces2, garces3, garces4, garces5, garces6, garces7], // Garcés Fruit
};

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // --- NUEVO ESTADO PARA EL MODAL ---
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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
        {/* Video background: coloca tu archivo de video en src/assets/hero.mp4 o ajusta la ruta */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Controles manuales para avanzar las frases */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-cvial-primary p-2 md:p-3 rounded-full text-white transition-colors backdrop-blur-sm z-10"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-cvial-primary p-2 md:p-3 rounded-full text-white transition-colors backdrop-blur-sm z-10"
        >
          <ChevronRight size={30} />
        </button>

        {/* Overlay con los textos que antes mostraba el carrusel */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg pointer-events-auto">
            {slides[currentSlide].titulo}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl drop-shadow-md pointer-events-auto">
            {slides[currentSlide].descripcion}
          </p>
          <a
            href="#/contacto"
            className="mt-8 bg-cvial-primary hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 pointer-events-auto"
          >
            Cotizar Proyecto
          </a>
        </div>

        {/* Indicadores (dots) para seleccionar frase manualmente */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
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
            Hemos ejecutado exitosamente proyectos profesionales, trabajando con marcas, constructoras y entidades líderes en el rubro. <strong>Haz clic en los logos para ver la información de cada empresa.</strong>
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

      {/* --- SECCIÓN 3: PROMOCIÓN DE PRODUCTOS --- */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.7), 0 0 60px rgba(34, 197, 94, 0.5);
          }
        }
        .btn-productos {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 rounded-full opacity-10 blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles size={40} className="text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-cvial-secondary mb-4">
            Explora Nuestro Catálogo
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contamos con una amplia gama de productos de seguridad vial, señalética, iluminación y mucho más. Descubre las soluciones que necesitas para tus proyectos.
          </p>
          <a
            href="#/productos"
            className="btn-productos inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 text-xl transform hover:scale-105"
          >
            <ShoppingBag size={28} />
            Ver Productos
          </a>
        </div>
      </div>

      {/* --- SECCIÓN 4: MODAL DE TRABAJO (Solo se renderiza si hay un cliente seleccionado) --- */}
      {clienteSeleccionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4 transition-opacity duration-300"
          onClick={() => {
            setClienteSeleccionado(null);
            setImagenSeleccionada(0);
          }}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => {
                setClienteSeleccionado(null);
                setImagenSeleccionada(0);
              }}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10 backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Contenido */}
            <div className="px-6 md:px-10 pb-10 pt-10">
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

              {/* Galería de Imágenes */}
              {imagenesProyectos[clienteSeleccionado.id] && imagenesProyectos[clienteSeleccionado.id].length > 0 ? (
                <div>
                  {/* Imagen Principal */}
                  <div className="relative w-full mb-6 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center h-96">
                    <img
                      src={imagenesProyectos[clienteSeleccionado.id][imagenSeleccionada]}
                      alt={`Proyecto ${imagenSeleccionada + 1}`}
                      className="w-full h-full object-contain"
                    />

                    {/* Controles de la galería */}
                    {imagenesProyectos[clienteSeleccionado.id].length > 1 && (
                      <>
                        <button
                          onClick={() => setImagenSeleccionada((prev) => (prev === 0 ? imagenesProyectos[clienteSeleccionado.id].length - 1 : prev - 1))}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-cvial-secondary p-2 rounded-full transition-colors z-10"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={() => setImagenSeleccionada((prev) => (prev === imagenesProyectos[clienteSeleccionado.id].length - 1 ? 0 : prev + 1))}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-cvial-secondary p-2 rounded-full transition-colors z-10"
                        >
                          <ChevronRight size={24} />
                        </button>

                        {/* Contador */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {imagenSeleccionada + 1} / {imagenesProyectos[clienteSeleccionado.id].length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Miniaturas */}
                  <div className="flex gap-3 overflow-x-auto pb-4">
                    {imagenesProyectos[clienteSeleccionado.id].map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setImagenSeleccionada(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          imagenSeleccionada === index
                            ? 'border-cvial-primary scale-110'
                            : 'border-gray-200 hover:border-cvial-primary'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No hay imágenes disponibles para esta empresa.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}