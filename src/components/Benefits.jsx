import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  Heart, 
  Clock 
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Award size={40} />,
      title: 'Atención Profesional',
      description: 'Equipo de dentistas certificados con años de experiencia en tratamientos dentales',
      color: '#009fe3'
    },
    {
      icon: <MapPin size={40} />,
      title: 'Ubicación Estratégica',
      description: 'En el corazón de Jardines de Durango, fácil acceso y estacionamiento disponible',
      color: '#12a19a'
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Precios Accesibles',
      description: 'Tratamientos de calidad a precios justos con opciones de pago flexibles',
      color: '#e6007e'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Materiales de Calidad',
      description: 'Utilizamos los mejores materiales y tecnología dental del mercado',
      color: '#009fe3'
    },
    {
      icon: <Heart size={40} />,
      title: 'Tratamientos Estéticos y Funcionales',
      description: 'Combinamos belleza y salud para resultados óptimos y duraderos',
      color: '#12a19a'
    },
    {
      icon: <Clock size={40} />,
      title: 'Seguridad y Puntualidad',
      description: 'Respetamos tu tiempo con citas puntuales y protocolos de higiene rigurosos',
      color: '#e6007e'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
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
            ¿Por Qué Elegirnos?
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción de nuestros pacientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <div style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;