import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Facebook, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5216181111518?text=Hola,%20quiero%20pedir%20información%20sobre%20las%20consultas%20en%20Dental%20Durango', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
          >
            Contáctanos
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Estamos listos para atenderte y resolver todas tus dudas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.a
            href="tel:6181111518"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#009fe3]/10 to-[#009fe3]/5 rounded-2xl p-8 text-center hover:shadow-xl transition-all group"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: '#009fe3' }}
            >
              <Phone size={28} color="white" />
            </div>
            <h3 
              className="font-bold text-xl mb-2"
              style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
            >
              Teléfono
            </h3>
            <p 
              className="text-gray-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              618 111 1518
            </p>
          </motion.a>

          <motion.button
            onClick={handleWhatsAppClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-2xl p-8 text-center hover:shadow-xl transition-all group"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={28} color="white" />
            </div>
            <h3 
              className="font-bold text-xl mb-2"
              style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
            >
              WhatsApp
            </h3>
            <p 
              className="text-gray-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Enviar mensaje
            </p>
          </motion.button>

          <motion.a
            href="https://facebook.com/Dental.Dgo1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#1877F2]/10 to-[#1877F2]/5 rounded-2xl p-8 text-center hover:shadow-xl transition-all group"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: '#1877F2' }}
            >
              <Facebook size={28} color="white" />
            </div>
            <h3 
              className="font-bold text-xl mb-2"
              style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
            >
              Facebook
            </h3>
            <p 
              className="text-gray-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Síguenos
            </p>
          </motion.a>

          <motion.a
            href="https://instagram.com/dental.dgo1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#E4405F]/10 to-[#E4405F]/5 rounded-2xl p-8 text-center hover:shadow-xl transition-all group"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: '#E4405F' }}
            >
              <Instagram size={28} color="white" />
            </div>
            <h3 
              className="font-bold text-xl mb-2"
              style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
            >
              Instagram
            </h3>
            <p 
              className="text-gray-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              @dental.dgo1
            </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#009fe3] to-[#12a19a] rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              ¿Listo para tu próxima cita?
            </h3>
            <p 
              className="text-white/90 text-lg mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Agenda tu consulta hoy mismo y comienza el camino hacia una sonrisa perfecta
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-[#009fe3] font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all shadow-xl inline-flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <MessageCircle size={24} />
              Agendar Ahora por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;