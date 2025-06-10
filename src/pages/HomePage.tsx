import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edinburgh Plumbing Trust | Professional Plumbing Services</title>
        <meta 
          name="description" 
          content="Edinburgh Plumbing Trust provides professional plumbing services including emergency repairs, leak detection, drain cleaning, boiler installation and more. Available 24/7." 
        />
        <meta 
          name="keywords" 
          content="plumber edinburgh, emergency plumbing, leak repair, drain cleaning, boiler repair, bathroom plumbing, kitchen plumbing" 
        />
      </Helmet>
      
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;