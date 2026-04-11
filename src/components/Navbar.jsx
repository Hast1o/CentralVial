import { Link } from 'react-router-dom';
import logoCentralVial from '../assets/Logo.png'; 
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function Navbar() {
  // TODO: Reemplaza este número por el WhatsApp real de contacto
  const numeroWhatsApp = "56944301780"; 
  const mensajeWhatsApp = "Hola, vengo desde la página web de Central Vial y me gustaría realizar una consulta.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

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
          
          {/* Contenedor de Enlaces y Botón de WhatsApp */}
          <div className="flex items-center gap-8">
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
              <span className="hidden lg:inline">Cotizar ahora</span>
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
}