import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Servicios', id: 'services' },
    { label: 'Beneficios', id: 'benefits' },
    { label: 'Testimonios', id: 'testimonials' },
    { label: 'Ubicación', id: 'location' },
    { label: 'Contacto', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('hero')}
          >
            <img 
              src="https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/3206603a6a6dc467a06424bb361bde05.png" 
              alt="Dental Durango Logo" 
              className="h-12 md:h-16 w-auto" 
              style={{ objectFit: 'contain' }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavigation(item.id)}
                className="text-gray-700 hover:text-[#009fe3] transition-colors font-medium text-sm lg:text-base"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              href="tel:6181111518"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold hover:opacity-90 transition-all text-sm lg:text-base"
              style={{ backgroundColor: '#009fe3', fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone size={18} />
              618 111 1518
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left py-3 text-gray-700 hover:text-[#009fe3] transition-colors font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </button>
            ))}

            <a
              href="tel:6181111518"
              className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: '#009fe3', fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone size={18} />
              618 111 1518
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;