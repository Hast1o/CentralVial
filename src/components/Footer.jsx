import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import logoCentralVial from '../assets/Logo.png'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cvial-secondary text-gray-300 pt-16 pb-8 border-t-4 border-cvial-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img 
                src={logoCentralVial} 
                alt="Central Vial Logo" 
                className="h-16 w-auto object-contain mb-4 filter brightness-0 invert" 
                // brightness-0 invert transforma el logo a blanco puro para que resalte sobre el fondo plomo oscuro
              />
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed max-w-xs">
              Especialistas en demarcaciones viales, proyectos de mitigación y suministro de elementos de seguridad vial de alta calidad.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="hover:text-cvial-primary transition-colors">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="hover:text-cvial-primary transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/servicios" className="hover:text-cvial-primary transition-colors">Servicios</Link></li>
              <li><Link to="/productos" className="hover:text-cvial-primary transition-colors">Productos</Link></li>
              <li><Link to="/contacto" className="hover:text-cvial-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="text-cvial-primary flex-shrink-0" size={20} />
                <span>Curicó / Molina, Región del Maule</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-cvial-primary flex-shrink-0" size={20} />
                <span>+56944301780</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-cvial-primary flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span>palfaro.centralvial@gmail.com</span>
                  <span>psoto.centralvial@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Derechos Reservados */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {currentYear} Central Vial SPA. Todos los derechos reservados.
          </p>
          
          {/* Texto de desarrollo (Opcional, puedes borrarlo si gustas) */}
          <div className="text-sm text-gray-500 text-center md:text-right flex flex-col">
            <p>Encargada de ventas: Paulina Alfaro Jeldres</p>
            <p>Supervisor de terreno: Patricio Ramírez</p>
          </div>
        </div>

      </div>
    </footer>
  );
}