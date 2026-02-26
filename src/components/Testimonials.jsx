import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      treatment: 'Blanqueamiento Dental',
      rating: 5,
      text: 'Excelente servicio. El Dr. me explicó todo el proceso del blanqueamiento y los resultados fueron increíbles. Mi sonrisa se ve mucho más blanca y natural. Totalmente recomendado.',
      image: 'Happy latina woman showing bright white teeth after dental whitening treatment'
    },
    {
      name: 'Carlos Ramírez',
      treatment: 'Implante Dental',
      rating: 5,
      text: 'Después de años con un diente faltante, finalmente me decidí por el implante. El equipo de Dental Durango fue muy profesional, sin dolor y el resultado es perfecto. Parece un diente natural.',
      image: 'Professional mexican man smiling confidently showing dental implant results'
    },
    {
      name: 'Ana Patricia López',
      treatment: 'Ortodoncia',
      rating: 5,
      text: 'Llevo 8 meses con ortodoncia y estoy muy contenta con los avances. La atención es personalizada, siempre puntuales con las citas y los precios son muy accesibles. Mi sonrisa está cambiando para bien.',
      image: 'Young woman with braces smiling happily at dental clinic'
    },
    {
      name: 'Roberto Hernández',
      treatment: 'Limpieza Dental',
      rating: 5,
      text: 'Vengo cada 6 meses para mi limpieza dental. El personal es muy amable y profesional. Me gusta que usan buenos materiales y todo está muy limpio. Los recomiendo ampliamente.',
      image: 'Middle aged man receiving professional dental cleaning at modern clinic'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#009fe3]/5 to-[#12a19a]/5">
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
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            La satisfacción de nuestros pacientes es nuestra mejor recompensa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={60} style={{ color: '#009fe3' }} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={`${testimonial.name} testimonial`}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div>
                  <h3 
                    className="font-bold text-lg"
                    style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {testimonial.name}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: '#12a19a', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {testimonial.treatment}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                ))}
              </div>

              <p 
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;