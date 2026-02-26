import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPosition = (index) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'left';
    if (index === (activeIndex + 1) % images.length) return 'right';
    return 'hidden';
  };

  const variants = {
    center: { 
      x: '0%', 
      scale: 1, 
      zIndex: 30, 
      opacity: 1,
      filter: 'blur(0px)' 
    },
    left: { 
      x: isMobile ? '-100%' : '-55%', 
      scale: 0.8, 
      zIndex: 20, 
      opacity: isMobile ? 0 : 0.6,
      filter: 'blur(2px)' 
    },
    right: { 
      x: isMobile ? '100%' : '55%', 
      scale: 0.8, 
      zIndex: 20, 
      opacity: isMobile ? 0 : 0.6,
      filter: 'blur(2px)' 
    },
    hidden: { 
      x: '0%', 
      scale: 0.5, 
      zIndex: 10, 
      opacity: 0,
      filter: 'blur(10px)' 
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[500px] perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {images.map((image, index) => {
            const position = getPosition(index);
            const isCenter = position === 'center';
            
            return (
              <motion.div
                key={index}
                animate={position}
                variants={variants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-[85%] md:w-[45%] h-[300px] md:h-[400px] rounded-2xl shadow-2xl overflow-hidden bg-white"
                style={{
                  display: position === 'hidden' ? 'none' : 'block'
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Testimonial Overlay */}
                  {isCenter && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-8 flex flex-col justify-end min-h-[40%]"
                    >
                      <p className="text-white font-medium text-lg md:text-xl italic font-['Poppins'] leading-relaxed drop-shadow-md">
                        "{image.testimonial}"
                      </p>
                      <div className="w-12 h-1 bg-[#009fe3] mt-3 rounded-full"></div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white text-[#009fe3] p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 border border-gray-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white text-[#009fe3] p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 border border-gray-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ${
              index === activeIndex 
                ? 'w-8 bg-[#009fe3]' 
                : 'w-2 bg-gray-300 hover:bg-[#009fe3]/50'
            } h-2 rounded-full shadow-sm`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;