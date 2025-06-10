import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';
import { serviceData } from '../data/serviceData';

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const navigate = useNavigate();
  const service = serviceData.find((s) => s.id === serviceId);
  
  if (!service) {
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);
    
    return null;
  }
  
  const relatedServices = serviceData
    .filter((s) => s.id !== serviceId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  return (
    <>
      <Helmet>
        <title>{`${service.title} | Edinburgh Plumbing Trust`}</title>
        <meta name="description" content={service.shortDescription} />
        <meta name="keywords" content={`edinburgh plumber, ${service.title.toLowerCase()}, plumbing services edinburgh, professional plumbers`} />
      </Helmet>
      
      <PageHeader 
        title={service.title}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` }
        ]}
        backgroundImage={service.imageUrl}
      />
      
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-lg overflow-hidden mb-8">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-3xl font-bold text-primary-600 mb-6">{service.title}</h2>
                  
                  <div className="prose max-w-none mb-8 text-gray-700">
                    <p className="text-lg">{service.fullDescription}</p>
                  </div>
                </div>
                
                <div className="bg-secondary-50 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-secondary-700 mb-6">Our Service Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                      >
                        <CheckCircle2 size={20} className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-accent-50 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-accent-700 mb-6">Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                      >
                        <CheckCircle2 size={20} className="text-accent-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* FAQs */}
                <div 
                  className="rounded-lg p-8"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {service.faqs.map((faq, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg shadow-sm"
                        >
                          <h4 className="text-lg font-semibold text-primary-700 mb-3">{faq.question}</h4>
                          <p className="text-gray-700">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Card */}
                <div 
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/8486989/pexels-photo-8486989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm p-8">
                    <h3 className="text-2xl font-bold text-primary-600 mb-4">Request This Service</h3>
                    <p className="text-gray-700 mb-6">
                      Contact us today to schedule an appointment or request a free quote for {service.title.toLowerCase()}.
                    </p>
                    <div className="space-y-4">
                      <a 
                        href="tel:07428693250" 
                        className="btn btn-primary w-full flex items-center justify-center"
                      >
                        <Phone size={18} className="mr-2" />
                        07428 693250
                      </a>
                      <Link 
                        to="/contact" 
                        className="btn btn-outline w-full flex items-center justify-center"
                      >
                        <Calendar size={18} className="mr-2" />
                        Schedule Service
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Related Services */}
                <div 
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/8486916/pexels-photo-8486916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-primary-900/90 backdrop-blur-sm p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Related Services</h3>
                    <ul className="space-y-4">
                      {relatedServices.map((relatedService) => (
                        <li key={relatedService.id}>
                          <Link 
                            to={`/services/${relatedService.slug}`}
                            className="group flex items-center text-white hover:text-accent-300 transition-colors"
                          >
                            <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                            <span>{relatedService.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Emergency Call */}
                <div 
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-accent-500/95 backdrop-blur-sm p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Emergency Service</h3>
                    <p className="text-white mb-6">
                      Available 24/7 for urgent plumbing emergencies. Don't wait - call us now!
                    </p>
                    <a 
                      href="tel:07428693250" 
                      className="btn bg-white text-accent-500 hover:bg-accent-50 w-full flex items-center justify-center animate-pulse-slow"
                    >
                      <Phone size={18} className="mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default ServicePage;