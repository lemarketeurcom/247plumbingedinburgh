import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WhatsAppButton from './components/WhatsAppButton';
import { serviceData } from './data/serviceData';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {serviceData.map((service) => (
              <Route 
                key={service.slug}
                path={`/services/${service.slug}`} 
                element={<ServicePage serviceId={service.id} />} 
              />
            ))}
            
            <Route path="*" element={<HomePage />} />
          </Routes>
          <WhatsAppButton phoneNumber="447428693250" />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;