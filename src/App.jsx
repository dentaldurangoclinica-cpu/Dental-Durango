import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageMosaic from '@/components/ImageMosaic';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Toaster } from '@/components/ui/toaster';

// Main Landing Page Component
const LandingPage = () => (
  <>
    <Hero />
    <ImageMosaic />
    <Services />
    <Benefits />
    <Testimonials />
    <FAQ />
    <Location />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Dental Durango - Dentista en Durango | Servicios Dentales Profesionales</title>
        <meta 
          name="description" 
          content="Dentista profesional en Jardines de Durango. Consultas, limpieza dental, blanqueamiento, ortodoncia, resinas, implantes. Lun-Vie 10am-8pm. WhatsApp 618 111 1518" 
        />
        <meta name="keywords" content="Dentista en Durango, Limpieza dental Durango, Blanqueamiento dental Durango, Resinas dentales Durango, Ortodoncia Durango, Consultorio dental Jardines de Durango, Servicios dentales Durango México, Dolor de muelas, Implantes dentales Durango" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;