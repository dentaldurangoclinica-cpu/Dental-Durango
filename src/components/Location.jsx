import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
          >
            Visítanos
          </h2>
          <p 
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Estamos ubicados en el corazón de Jardines de Durango
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/1154421855?badge=0&autopause=0&autoplay=1&loop=1&muted=1&background=1&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              title="Dental Durango"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#009fe315' }}
              >
                <MapPin size={24} style={{ color: '#009fe3' }} />
              </div>
              <div>
                <h3 
                  className="font-bold text-xl mb-2"
                  style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
                >
                  Dirección
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Margarita 106<br />
                  Jardines de Durango<br />
                  34200 Durango, Dgo.<br />
                  México
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#12a19a15' }}
              >
                <Clock size={24} style={{ color: '#12a19a' }} />
              </div>
              <div>
                <h3 
                  className="font-bold text-xl mb-4"
                  style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
                >
                  Horarios de Atención
                </h3>
                <div className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Lunes - Viernes:</span>
                    <span className="text-gray-600">10:00 AM - 2:00 PM<br />4:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-700 font-semibold">Sábado:</span>
                    <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-700 font-semibold">Domingo:</span>
                    <span className="text-red-600 font-semibold">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.7234567890123!2d-104.6789012!3d24.0234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDAxJzI0LjQiTiAxMDTCsDQwJzQ0LjAiVw!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dental Durango Location"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Location;