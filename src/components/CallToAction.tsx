import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Professional Plumber?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-md">
              Whether it's an emergency or a planned project, our expert team is ready to help with all your plumbing needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:07428693250" 
                className="btn btn-accent btn-lg flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <Link 
                to="/contact" 
                className="btn btn-outline btn-lg border-white text-white hover:bg-white/10 flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Schedule Service
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <div className="bg-primary-500 text-white p-4">
                <h3 className="text-xl font-semibold">Request a Quote</h3>
              </div>
              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition"
                    >
                      <option value="">Select Service</option>
                      <option value="leak-detection">Leak Detection & Repair</option>
                      <option value="drain-cleaning">Drain Cleaning</option>
                      <option value="boiler-repair">Boiler Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <button 
                      type="button" 
                      className="btn btn-primary btn-lg w-full"
                    >
                      Get Free Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;