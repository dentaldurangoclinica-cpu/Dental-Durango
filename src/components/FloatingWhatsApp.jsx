import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5216181111518?text=Hola,%20quiero%20pedir%20información%20sobre%20las%20consultas%20en%20Dental%20Durango', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 mb-2 mr-2"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs relative">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}>
                    ¿Necesitas agendar una cita?
                  </p>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Contáctanos por WhatsApp y con gusto te atenderemos
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group"
            style={{ backgroundColor: '#25D366' }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <MessageCircle size={32} color="white" />
            
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: '#25D366' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;