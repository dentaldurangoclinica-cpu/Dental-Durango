import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Cada cuánto tiempo debo visitar al dentista?',
      answer: 'Se recomienda visitar al dentista cada 6 meses para una limpieza dental profesional y revisión general. Esto ayuda a prevenir problemas mayores y mantener una salud bucal óptima.'
    },
    {
      question: '¿El blanqueamiento dental daña los dientes?',
      answer: 'No, el blanqueamiento dental profesional es seguro cuando se realiza bajo supervisión de un dentista. Utilizamos productos de calidad que no dañan el esmalte dental y obtenemos resultados naturales y duraderos.'
    },
    {
      question: '¿Qué es una resina dental y cuánto dura?',
      answer: 'La resina dental es un material estético utilizado para restaurar dientes con caries o fracturas. Con los cuidados adecuados, puede durar entre 5 a 10 años. Es importante mantener una buena higiene bucal y visitas regulares al dentista.'
    },
    {
      question: '¿Cuánto tiempo tarda un tratamiento de ortodoncia?',
      answer: 'El tiempo varía según cada caso, pero generalmente un tratamiento de ortodoncia puede durar entre 12 a 24 meses. En tu consulta inicial evaluaremos tu caso específico y te daremos un tiempo estimado más preciso.'
    },
    {
      question: '¿Qué debo hacer si tengo un dolor de muelas fuerte?',
      answer: 'Si experimentas dolor de muelas intenso, contáctanos inmediatamente. Ofrecemos atención de urgencias dentales y te atenderemos lo antes posible. Mientras tanto, puedes aplicar frío en la zona y evitar alimentos muy calientes o fríos.'
    },
    {
      question: '¿Los implantes dentales son permanentes?',
      answer: 'Los implantes dentales tienen una tasa de éxito muy alta y pueden durar toda la vida con los cuidados adecuados. Son la solución más duradera para reemplazar dientes perdidos y funcionan como dientes naturales.'
    },
    {
      question: '¿Aceptan seguros dentales o planes de pago?',
      answer: 'Actualmente trabajamos con pagos directos, pero ofrecemos precios muy accesibles y podemos discutir opciones de pago que se ajusten a tu presupuesto. Contáctanos para más información sobre nuestras facilidades de pago.'
    },
    {
      question: '¿Qué medidas de higiene y seguridad tienen?',
      answer: 'Seguimos estrictos protocolos de higiene y esterilización. Todo nuestro instrumental es esterilizado después de cada uso, utilizamos material desechable cuando es necesario, y mantenemos nuestras instalaciones impecablemente limpias para tu seguridad.'
    },
    {
      question: '¿A partir de qué edad pueden visitar al dentista los niños?',
      answer: 'Se recomienda la primera visita dental cuando aparece el primer diente del bebé o alrededor del primer año de edad. Esto ayuda a establecer buenos hábitos desde temprana edad y prevenir problemas futuros.'
    },
    {
      question: '¿Cuánto cuesta la consulta?',
      answer: 'Entendemos tu interés en conocer nuestros precios. El costo de una consulta o tratamiento puede variar dependiendo de las necesidades específicas de cada paciente y el tipo de servicio requerido. Te invitamos a contactarnos por WhatsApp para una atención personalizada, donde con gusto te brindaremos toda la información detallada y exploraremos las opciones que mejor se adapten a tu presupuesto, siempre buscando ofrecer precios preferenciales que cuiden de tu economía sin comprometer la calidad de nuestro servicio.'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            Preguntas Frecuentes
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Resolvemos tus dudas sobre tratamientos y cuidado dental
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all text-left flex items-center justify-between group"
              >
                <span 
                  className="font-bold text-lg pr-4"
                  style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: '#009fe3' }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="p-6 text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;