const listaProductos = [
  "Señales de Tránsito Provisorias y Definitivas",
  "Defensa Caminera",
  "Cercos Perimetrales Acmafor",
  "Vallas Peatonales",
  "Tachas Reflectantes, Tachones e Hitos",
  "Topes de Estacionamientos",
  "Reductores de velocidad (negro/amarillo)",
  "Postes Zebra Zafe",
  "Delineadores Verticales",
  "Postes Omega Galvanizado",
  "Lomo de toro",
  "Captafaro abatible ojo de gato",
  "Bandas alertadoras"
];

export default function Productos() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-cvial-light min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-cvial-secondary text-center mb-4">
          Catálogo de Productos
        </h2>
        <p className="text-center text-gray-600 mb-12">Suministro e instalación de artículos de seguridad vial de alta calidad.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listaProductos.map((producto, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex items-center gap-4 border-l-4 border-cvial-secondary hover:border-cvial-primary">
              <div className="w-3 h-3 bg-cvial-primary rounded-full"></div>
              <p className="font-semibold text-gray-700">{producto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}