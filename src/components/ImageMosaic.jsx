import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';

const ImageMosaic = () => {
  const images = [
    {
      url: 'https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/86cb006b65b4e0446f84cb224c22d545.png',
      alt: 'Senior woman with white hair smiling showing perfect dental results',
      testimonial: "¡Mi sonrisa ha transformado completamente mi confianza! Nunca pensé que me sentiría tan bien a mi edad."
    },
    {
      url: 'https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/db82d2d0833738aaa21ea1bdb613e339.png',
      alt: 'Professional man with beard showing confident smile after dental treatment',
      testimonial: "El equipo me hizo sentir muy cómodo y atendido en todo momento. Un trato verdaderamente profesional."
    },
    {
      url: 'https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/f97354dc98bd611b661f72cfa4baa725.png',
      alt: 'Young man with braces pointing to orthodontic treatment results',
      testimonial: "Atención profesional que realmente marca la diferencia. Explicaron cada paso de mi tratamiento."
    },
    {
      url: 'https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/ec09db952c81d80b7014289bddff2d72.png',
      alt: 'Happy woman smiling showing beautiful white teeth after dental care',
      testimonial: "Finalmente tengo la sonrisa que siempre había deseado. ¡Los resultados superaron mis expectativas!"
    },
    {
      url: 'https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/401ac98c05ae6c12b4fc94267c5b3d48.png',
      alt: 'Young man in gray shirt with healthy natural smile',
      testimonial: "Servicio excepcional y resultados hermosos. Recomiendo Dental Durango a toda mi familia."
    },
    {
      url: 'https://horizons-cdn.hostinger.com/5cc1f5c1-31f2-4123-92a7-7157da2bcdad/f97406af89fe479b53b42bc758ec8e67.png',
      alt: 'Young girl with red hair pointing to healthy smile',
      testimonial: "Dental Durango cambió por completo cómo me siento con mi sonrisa. ¡Gracias por todo!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#009fe3] font-semibold tracking-wider text-sm uppercase mb-2 block font-['Poppins']">
            Resultados Reales
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
          >
            Sonrisas que Transformamos
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Descubre las experiencias de quienes han confiado en nosotros para recuperar su salud y estética dental.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel images={images} />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageMosaic;