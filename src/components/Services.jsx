import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Sparkles, 
  AlertCircle, 
  Scissors, 
  Droplet,
  Camera,
  Shield,
  Smile,
  Crown,
  Activity
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: 'Consulta Dental',
      description: 'Diagnóstico completo de tu salud dental con especialistas certificados',
      color: '#009fe3'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Limpieza Dental',
      description: 'Profilaxis profesional para mantener tus dientes sanos y brillantes',
      color: '#12a19a'
    },
    {
      icon: <AlertCircle size={32} />,
      title: 'Urgencias Dentales',
      description: 'Atención inmediata para dolor de muelas y emergencias',
      color: '#e6007e'
    },
    {
      icon: <Scissors size={32} />,
      title: 'Extracciones',
      description: 'Procedimientos seguros y sin dolor para extracción de piezas dentales',
      color: '#009fe3'
    },
    {
      icon: <Droplet size={32} />,
      title: 'Resinas Dentales',
      description: 'Restauración estética de dientes con materiales de alta calidad',
      color: '#12a19a'
    },
    {
      icon: <Camera size={32} />,
      title: 'Radiografía',
      description: 'Diagnóstico preciso con nuevas tecnologías',
      color: '#e6007e'
    },
    {
      icon: <Shield size={32} />,
      title: 'Selladores',
      description: 'Protección preventiva contra caries en dientes permanentes',
      color: '#009fe3'
    },
    {
      icon: <Smile size={32} />,
      title: 'Blanqueamiento',
      description: 'Sonrisa más blanca y brillante con tratamientos profesionales',
      color: '#12a19a'
    },
    {
      icon: <Crown size={32} />,
      title: 'Carillas y coronas estéticas',
      description: 'Soluciones estéticas y funcionales para recuperar tu sonrisa',
      color: '#e6007e'
    },
    {
      icon: <Crown size={32} />,
      title: 'Implantes dentales',
      description: 'Colocación el mismo día',
      color: '#e6007e'
    },
    {
      icon: <Activity size={32} />,
      title: 'Endodoncia',
      description: 'La última solución para salvar tu diente',
      color: '#009fe3'
    },
    {
      icon: <Activity size={32} />,
      title: 'Ortodóncia',
      description: 'Alinea tus dientes con brackets dentales',
      color: '#009fe3'
    },
    {
      icon: <Activity size={32} />,
      title: 'Cirugía bucal',
      description: 'Extracción de molares impactados y otras cirugías dentales',
      color: '#009fe3'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Nuestros Servicios Dentales
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ofrecemos una amplia gama de tratamientos dentales con tecnología de vanguardia y atención personalizada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <div style={{ color: service.color }}>
                  {service.icon}
                </div>
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;