import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5216181111518?text=Hola,%20quiero%20pedir%20información%20sobre%20las%20consultas%20en%20Dental%20Durango', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-20" 
          alt="Modern dental clinic with professional equipment"
         src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#009fe3]/90 to-[#12a19a]/80"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Tu sonrisa, en manos expertas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Atención dental profesional en Jardines de Durango con los mejores especialistas y tecnología de vanguardia
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-all shadow-xl"
              style={{ backgroundColor: '#e6007e', fontFamily: 'Poppins, sans-serif' }}
            >
              <MessageCircle size={24} />
              Agendar por WhatsApp
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl border-2"
              style={{ 
                backgroundColor: 'white', 
                color: '#009fe3',
                borderColor: '#009fe3',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <Calendar size={24} />
              Consulta General
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white"
          >
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>10+</div>
              <div className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>5000+</div>
              <div className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>Pacientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>15+</div>
              <div className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>Servicios dentales</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;