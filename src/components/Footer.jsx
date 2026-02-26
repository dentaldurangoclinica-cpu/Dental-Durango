import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5216181111518?text=Hola,%20quiero%20pedir%20información%20sobre%20las%20consultas%20en%20Dental%20Durango', '_blank');
  };

  return (
    <footer className="bg-[#000000] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span style={{ color: '#009fe3' }}>Dental</span>{' '}
              <span style={{ color: '#e6007e' }}>Durango</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Tu sonrisa en manos expertas. Atención dental profesional en Jardines de Durango con tecnología de vanguardia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/Dental.Dgo1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#009fe3' }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/dental.dgo1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#e6007e' }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-bold mb-4 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Enlaces Rápidos
            </span>
            <ul className="space-y-3">
              {['Inicio', 'Servicios', 'Beneficios', 'Testimonios', 'Ubicación', 'Contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace('ó', 'o').replace('í', 'i'))}
                    className="text-gray-400 hover:text-[#009fe3] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <span className="text-lg font-bold mb-4 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Horarios
            </span>
            <div className="space-y-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="flex items-start gap-2">
                <Clock size={20} className="mt-1 flex-shrink-0" style={{ color: '#12a19a' }} />
                <div className="text-gray-400">
                  <p className="font-semibold text-white">Lunes - Viernes</p>
                  <p className="text-sm">10:00 AM - 2:00 PM</p>
                  <p className="text-sm">4:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={20} className="mt-1 flex-shrink-0" style={{ color: '#12a19a' }} />
                <div className="text-gray-400">
                  <p className="font-semibold text-white">Sábado</p>
                  <p className="text-sm">10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={20} className="mt-1 flex-shrink-0" style={{ color: '#12a19a' }} />
                <div className="text-gray-400">
                  <p className="font-semibold text-white">Domingo</p>
                  <p className="text-sm">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <span className="text-lg font-bold mb-4 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contacto
            </span>
            <div className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" style={{ color: '#009fe3' }} />
                <p className="text-gray-400 text-sm">
                  Margarita 106<br />
                  Jardines de Durango<br />
                  34200 Durango, Dgo.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} style={{ color: '#e6007e' }} />
                <a href="tel:6181111518" className="text-gray-400 hover:text-white transition-colors">
                  618 111 1518
                </a>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: '#25D366', fontFamily: 'Poppins, sans-serif' }}
              >
                Agendar por WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p>© {new Date().getFullYear()} Dental Durango. Todos los derechos reservados.</p>
            <p className="mt-2">
              Dentista profesional en Durango | Servicios dentales de calidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;