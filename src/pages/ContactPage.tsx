import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Edinburgh Plumbing Trust</title>
        <meta 
          name="description" 
          content="Contact Edinburgh Plumbing Trust for all your plumbing needs. Available 24/7 for emergencies. Call us at 07428 693250 or fill out our contact form." 
        />
        <meta 
          name="keywords" 
          content="contact plumber edinburgh, plumbing emergency contact, plumber phone number, plumbing quote edinburgh" 
        />
      </Helmet>
      
      <PageHeader 
        title="Contact Us"
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
        backgroundImage="https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-primary-500 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin size={24} className="text-accent-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        Westburn Middlefield<br />
                        Edinburgh EH142TJ
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone size={24} className="text-accent-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:07428693250" className="hover:text-primary-500 transition-colors">
                          07428 693250
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail size={24} className="text-accent-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@edinburghplumbingtrust.co.uk" className="hover:text-primary-500 transition-colors">
                          contact@edinburghplumbingtrust.co.uk
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock size={24} className="text-accent-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 8am - 6pm</p>
                        <p>Saturday: 9am - 4pm</p>
                        <p>Sunday: Closed</p>
                        <p className="text-accent-500 font-semibold mt-1">
                          24/7 Emergency Service Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-lg mb-4">Emergency Service</h3>
                  <p className="text-gray-600 mb-4">
                    Plumbing emergency? Don't wait! Our team is available 24/7 for urgent plumbing issues throughout Edinburgh.
                  </p>
                  <a 
                    href="tel:07428693250" 
                    className="btn btn-accent w-full flex items-center justify-center animate-pulse-slow"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Our Emergency Line
                  </a>
                </div>
              </div>
              
              {/* Map or Additional Info */}
              <div className="mt-8 bg-primary-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve Edinburgh and surrounding areas including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>• Leith</li>
                  <li>• Portobello</li>
                  <li>• Stockbridge</li>
                  <li>• Morningside</li>
                  <li>• Newington</li>
                  <li>• Corstorphine</li>
                  <li>• Murrayfield</li>
                  <li>• Cramond</li>
                  <li>• Dalkeith</li>
                  <li>• Musselburgh</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-primary-500 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to request a service, ask a question, or get a free quote. We'll get back to you as soon as possible.
                </p>
                
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Free Quotes</h3>
              <p className="text-gray-600 mb-0">
                Request a no-obligation quote for any of our plumbing services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Same-Day Service</h3>
              <p className="text-gray-600 mb-0">
                Available for many non-emergency plumbing issues, subject to scheduling.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 mb-0">
                We're not happy until you're completely satisfied with our work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;