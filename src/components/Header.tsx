import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Clock } from 'lucide-react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import Logo from './Logo';
import { serviceData } from '../data/serviceData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-2" />
            <span className="hidden sm:inline">Available 24/7 for emergencies</span>
            <span className="inline sm:hidden">24/7 Service</span>
          </div>
          <a 
            href="tel:07428693250" 
            className="flex items-center text-sm hover:text-accent-200 transition-colors"
          >
            <Phone size={16} className="mr-1" />
            <span className="font-semibold">07428 693250</span>
          </a>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div 
        className={`${
          isScrolled ? 'py-3 bg-white/95 backdrop-blur-sm shadow-lg' : 'py-5 bg-white/95'
        } transition-all duration-300`}
        style={{
          backgroundImage: isScrolled ? 'none' : 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")'
        }}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Home
            </Link>
            
            <HeadlessMenu as="div" className="relative">
              {({ open }) => (
                <>
                  <HeadlessMenu.Button className="flex items-center font-medium hover:text-primary-500 transition-colors">
                    Services
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </HeadlessMenu.Button>
                  
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <HeadlessMenu.Items className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10 border border-gray-100">
                      {serviceData.map((service) => (
                        <HeadlessMenu.Item key={service.id}>
                          {({ active }) => (
                            <Link
                              to={`/services/${service.slug}`}
                              className={`${
                                active ? 'bg-primary-50 text-primary-500' : 'text-gray-700'
                              } block px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-500 transition-colors`}
                            >
                              {service.title}
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                      ))}
                    </HeadlessMenu.Items>
                  </Transition>
                </>
              )}
            </HeadlessMenu>
            
            <Link 
              to="/about" 
              className="font-medium hover:text-primary-500 transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-accent btn-md animate-pulse-slow shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={18} className="mr-2" />
              Request a Quote
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <Transition
        show={isMenuOpen}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
        className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <div className="container py-4 space-y-4">
          <Link 
            to="/" 
            className="block font-medium py-2 hover:text-primary-500 transition-colors"
          >
            Home
          </Link>
          
          <HeadlessMenu as="div" className="relative">
            {({ open }) => (
              <>
                <HeadlessMenu.Button className="flex items-center justify-between w-full font-medium py-2">
                  Services
                  <svg 
                    className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </HeadlessMenu.Button>
                
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-in"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <HeadlessMenu.Items className="pl-4 space-y-2">
                    {serviceData.map((service) => (
                      <HeadlessMenu.Item key={service.id}>
                        {({ active }) => (
                          <Link
                            to={`/services/${service.slug}`}
                            className={`${
                              active ? 'text-primary-500' : 'text-gray-700'
                            } block py-2 text-sm hover:text-primary-500 transition-colors`}
                          >
                            {service.title}
                          </Link>
                        )}
                      </HeadlessMenu.Item>
                    ))}
                  </HeadlessMenu.Items>
                </Transition>
              </>
            )}
          </HeadlessMenu>
          
          <Link 
            to="/about" 
            className="block font-medium py-2 hover:text-primary-500 transition-colors"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block font-medium py-2 hover:text-primary-500 transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/contact" 
            className="btn btn-accent btn-md w-full flex justify-center shadow-lg"
          >
            <Phone size={18} className="mr-2" />
            Request a Quote
          </Link>
        </div>
      </Transition>
    </header>
  );
};

export default Header;