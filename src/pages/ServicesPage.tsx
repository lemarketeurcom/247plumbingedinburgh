import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { serviceData } from '../data/serviceData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Edinburgh Plumbing Trust</title>
        <meta 
          name="description" 
          content="Comprehensive plumbing services in Edinburgh including emergency repairs, installations, maintenance, and more. Available 24/7 for all your plumbing needs." 
        />
      </Helmet>

      <PageHeader 
        title="Our Professional Services"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div 
                    className="relative h-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${service.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/70 to-primary-900/30 transition-opacity duration-300 group-hover:opacity-90" />
                    
                    <div className="relative p-8 h-full flex flex-col">
                      <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                      
                      <p className="text-gray-200 mb-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {service.shortDescription}
                      </p>
                      
                      <div className="mt-auto flex items-center text-accent-300 font-medium group-hover:text-accent-400 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;