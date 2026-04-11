import React from 'react';
import img30km from '../assets/30_km_por_hora.png';
import imgtope from '../assets/topes_de_estacionamiento.png';
import imgvalla from '../assets/vallas_peatonales.png';

// Transformamos la lista simple en una lista de objetos con todos los datos necesarios
const listaProductos = [
  {
    id: 1,
    nombre: "Señales de Tránsito Provisorias y Definitivas",
    categoria: "Señalización",
    descripcion: "Letreros normativos de alta visibilidad, fabricados bajo estándares oficiales para la regulación segura del tránsito.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Senales+Transito"
  },
  {
    id: 2,
    nombre: "Defensa Caminera",
    categoria: "Contención",
    descripcion: "Barreras metálicas de acero galvanizado diseñadas para absorber impactos y prevenir salidas de la vía.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Defensa+Caminera"
  },
  {
    id: 3,
    nombre: "Cercos Perimetrales Acmafor",
    categoria: "Cierres",
    descripcion: "Sistemas de malla rígida de alta resistencia y durabilidad para la delimitación segura de terrenos y faenas.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Cercos+Acmafor"
  },
  {
    id: 4,
    nombre: "Vallas Peatonales",
    categoria: "Contención",
    descripcion: "Estructuras metálicas portátiles y modulares para encausar el flujo de personas y proteger áreas de trabajo.",
    imagen: imgvalla
  },
  {
    id: 5,
    nombre: "Tachas Reflectantes, Tachones e Hitos",
    categoria: "Demarcación",
    descripcion: "Dispositivos con alta retroreflectancia para delinear vías y mejorar la visibilidad nocturna o con lluvia.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Tachas+Hitos"
  },
  {
    id: 6,
    nombre: "Topes de Estacionamientos",
    categoria: "Ordenamiento",
    descripcion: "Topes de caucho o concreto de alta resistencia para delimitar correctamente los espacios de aparcamiento.",
    imagen: imgtope
  },
  {
    id: 7,
    nombre: "Reductores de velocidad (negro/amarillo)",
    categoria: "Control de Velocidad",
    descripcion: "Resaltos modulares de caucho con colores contrastantes para obligar a disminuir la velocidad en zonas críticas.",
    imagen: img30km
  },
  {
    id: 8,
    nombre: "Postes Zebra Zafe",
    categoria: "Señalización",
    descripcion: "Postes delineadores flexibles y abatibles de alta visibilidad para separar carriles o desvíos temporales.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Postes+Zebra"
  },
  {
    id: 9,
    nombre: "Delineadores Verticales",
    categoria: "Demarcación",
    descripcion: "Elementos cilíndricos con bandas reflectantes para guiar el tráfico en zonas de obra o peligro.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Delineadores"
  },
  {
    id: 10,
    nombre: "Postes Omega Galvanizado",
    categoria: "Soporte",
    descripcion: "Soportes metálicos perfilados de alta resistencia para la instalación segura de señales verticales.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Postes+Omega"
  },
  {
    id: 11,
    nombre: "Lomo de toro",
    categoria: "Control de Velocidad",
    descripcion: "Instalación de resaltos reductores de velocidad en vías públicas o privadas según normativa vigente.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Lomo+de+Toro"
  },
  {
    id: 12,
    nombre: "Captafaro abatible ojo de gato",
    categoria: "Demarcación",
    descripcion: "Elementos reflectantes flexibles que retornan a su posición original tras ser pisados por vehículos.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Captafaro+Abatible"
  },
  {
    id: 13,
    nombre: "Bandas alertadoras",
    categoria: "Demarcación",
    descripcion: "Franjas con relieve instaladas en la calzada que generan sonido y vibración para alertar al conductor.",
    imagen: "https://placehold.co/600x600/eeeeee/5C5E60?text=Bandas+Alertadoras"
  }
];

export default function Productos() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-cvial-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Suministro e instalación de artículos de seguridad vial de alta calidad, certificados y bajo la normativa vigente.
          </p>
        </div>
        
        {/* Grilla de Tarjetas (Cuadrados) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {listaProductos.map((producto) => (
            <div 
              key={producto.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100"
            >
              {/* Contenedor de la Imagen (Formato cuadrado) */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Etiqueta de Categoría flotante */}
                <div className="absolute top-3 right-3 bg-cvial-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {producto.categoria}
                </div>
              </div>

              {/* Contenedor de Textos */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-cvial-secondary mb-2 line-clamp-2 leading-tight">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {producto.descripcion}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}