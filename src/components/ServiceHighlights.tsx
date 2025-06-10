import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Wrench, ShowerHead, CookingPot, Flame, Pipette as PipeValve, ThermometerSnowflake, Factory, AlertTriangle, File as Toilet } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { serviceData } from '../data/serviceData';

const ServiceHighlights: React.FC = () => {
  const iconMap = {
    'leak-detection': <Droplets size={32} />,
    'drain-cleaning': <PipeValve size={32} />,
    'boiler-repair': <Flame size={32} />,
    'bathroom-plumbing': <ShowerHead size={32} />,
    'kitchen-plumbing': <CookingPot size={32} />,
    'pipe-repair': <Wrench size={32} />,
    'water-heater': <ThermometerSnowflake size={32} />,
    'commercial-plumbing': <Factory size={32} />,
    'emergency-plumbing': <AlertTriangle size={32} />,
    'toilet-repairs': <Toilet size={32} />,
  };

  return (
    <section className="section relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/8486916/pexels-photo-8486916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
      </div>

      <div className="container relative z-10">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Professional Plumbing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From emergency repairs to planned installations, our expert plumbers deliver quality solutions for all your plumbing needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {serviceData.slice(0, 6).map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={iconMap[service.slug as keyof typeof iconMap]}
              slug={service.slug}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <a href="/services" className="btn btn-outline">
              View All Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;