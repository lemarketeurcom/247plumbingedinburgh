import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';
import { serviceData } from '../data/serviceData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Professional plumbing services you can trust. We provide expert solutions for all your plumbing needs throughout Edinburgh and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-plumbing" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={20} className="text-accent-500 mr-3 flex-shrink-0 mt-1" />
                <span>Westburn Middlefield<br />Edinburgh EH142TJ</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent-500 mr-3 flex-shrink-0" />
                <a href="tel:07428693250" className="hover:text-accent-500 transition-colors">
                  07428 693250
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent-500 mr-3 flex-shrink-0" />
                <a href="mailto:contact@edinburghplumbingtrust.co.uk" className="hover:text-accent-500 transition-colors">
                  contact@edinburghplumbingtrust.co.uk
                </a>
              </li>
              <li className="flex">
                <Clock size={20} className="text-accent-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat: 9am - 4pm</p>
                  <p className="text-accent-500">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Edinburgh Plumbing Trust. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-500 text-sm">
                Website designed with ❤ for quality service
              </p>
              {/* Backlinks */}
              <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 text-xs">
                <a 
                  href="https://www.edinburghplumbingtrust.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent-500 transition-colors"
                >
                  Edinburgh Plumbing Trust
                </a>
                <span className="text-gray-600 hidden md:inline">|</span>
                <a 
                  href="https://247plumbing.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent-500 transition-colors"
                >
                  24/7 Emergency Plumbing Edinburgh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;