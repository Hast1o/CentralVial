import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoCentralVial from '../assets/Logo.png'; 
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function Navbar() {
  // Estado para controlar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Reemplaza este número por el WhatsApp real de contacto
  const numeroWhatsApp = "56944301780"; 
  const mensajeWhatsApp = "Hola, vengo desde la página web de Central Vial y me gustaría realizar una consulta.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-cvial-secondary shadow-md border-b-[4px] border-cvial-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src={logoCentralVial} 
                alt="Central Vial Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
          </div>
          
          {/* Contenedor Desktop: Enlaces y Botón de WhatsApp */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-sm font-bold uppercase tracking-wider items-center">
              <li>
                <Link to="/" className="hover:text-cvial-primary transition-colors duration-300">Inicio</Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="hover:text-cvial-primary transition-colors duration-300">Quiénes Somos</Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-cvial-primary transition-colors duration-300">Servicios</Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-cvial-primary transition-colors duration-300">Productos</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-cvial-primary transition-colors duration-300">Contacto</Link>
              </li>
            </ul>

            {/* Botón Flotante/Llamativo de WhatsApp en el Navbar */}
            <a 
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <SiWhatsapp size={20} />
              <span>Cotizar ahora</span>
            </a>
          </div>

          {/* Controles Mobile: WhatsApp (solo icono) + Menú Hamburguesa */}
          <div className="flex items-center gap-4 md:hidden">
            <a 
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white p-2.5 rounded-full hover:bg-green-600 transition-all shadow-sm"
            >
              <SiWhatsapp size={20} />
            </a>

            <button 
              onClick={toggleMenu}
              className="text-cvial-secondary hover:text-cvial-primary focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              {/* Icono de SVG que cambia entre Hamburguesa (cerrado) y X (abierto) */}
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-40 pb-6">
          <ul className="flex flex-col px-6 pt-4 gap-6 text-sm font-bold uppercase tracking-wider">
            <li>
              <Link to="/" onClick={toggleMenu} className="block hover:text-cvial-primary transition-colors duration-300">Inicio</Link>
            </li>
            <li>
              <Link to="/quienes-somos" onClick={toggleMenu} className="block hover:text-cvial-primary transition-colors duration-300">Quiénes Somos</Link>
            </li>
            <li>
              <Link to="/servicios" onClick={toggleMenu} className="block hover:text-cvial-primary transition-colors duration-300">Servicios</Link>
            </li>
            <li>
              <Link to="/productos" onClick={toggleMenu} className="block hover:text-cvial-primary transition-colors duration-300">Productos</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={toggleMenu} className="block hover:text-cvial-primary transition-colors duration-300">Contacto</Link>
            </li>
            
            {/* Botón de WhatsApp extendido dentro del menú móvil */}
            <li className="pt-4 border-t border-gray-100">
              <a 
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="flex justify-center items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-sm"
              >
                <SiWhatsapp size={20} />
                Cotizar ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}