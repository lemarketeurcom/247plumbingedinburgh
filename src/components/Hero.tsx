import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Clock, Award, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Plumbing Services in Edinburgh
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Professional, reliable plumbing solutions for your home or business. Available 24/7 for emergencies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CheckCircle size={20} className="text-accent-500 mr-2" />
                <span className="text-gray-200">Licensed & Insured</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CheckCircle size={20} className="text-accent-500 mr-2" />
                <span className="text-gray-200">100% Satisfaction</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CheckCircle size={20} className="text-accent-500 mr-2" />
                <span className="text-gray-200">Free Estimates</span>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="tel:07428693250" 
                  className="btn btn-accent btn-lg w-full sm:w-auto flex items-center justify-center"
                >
                  <Phone className="mr-2" size={20} />
                  Call Us Now
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="btn btn-outline btn-lg border-white text-white hover:bg-white/10 w-full sm:w-auto flex items-center justify-center"
                >
                  Request Service
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right content - Emergency Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md text-gray-800">
              <div className="flex items-center text-accent-500 mb-4">
                <Clock size={24} className="mr-3" />
                <h3 className="text-xl font-bold">24/7 Emergency Service</h3>
              </div>
              <p className="mb-6 text-gray-600">
                Plumbing emergencies don't wait for business hours. Neither do we. Our team is available 24/7 for urgent plumbing issues.
              </p>
              <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-md mb-6">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-primary-500 mr-2" />
                  <span className="font-semibold">Fast Response Time</span>
                </div>
                <p className="text-sm text-gray-600">
                  We aim to arrive within 60 minutes for emergency calls in Edinburgh.
                </p>
              </div>
              <a 
                href="tel:07428693250" 
                className="btn btn-primary btn-lg w-full flex items-center justify-center animate-pulse-slow"
              >
                <Phone className="mr-2" size={20} />
                07428 693250
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white opacity-10 animate-water-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white opacity-5 animate-water-wave" style={{ animationDelay: '-2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;