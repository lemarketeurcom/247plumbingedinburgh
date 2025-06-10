import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, ThumbsUp, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Edinburgh Plumbing Trust</title>
        <meta 
          name="description" 
          content="Learn about Edinburgh Plumbing Trust - professional plumbers with over 15 years of experience serving Edinburgh and surrounding areas. Licensed, insured, and committed to excellence." 
        />
        <meta 
          name="keywords" 
          content="about edinburgh plumber, plumbing company edinburgh, professional plumbers, licensed plumber edinburgh, plumbing team edinburgh" 
        />
      </Helmet>
      
      <PageHeader 
        title="About Us"
        breadcrumbs={[{ name: 'About Us', path: '/about' }]}
        backgroundImage="https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Company Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
                Your Trusted Plumbing Partner in Edinburgh
              </h2>
              <p className="text-gray-700 mb-6">
                Edinburgh Plumbing Trust is a family-owned business with over 15 years of experience providing exceptional plumbing services throughout Edinburgh and surrounding areas. We take pride in our reputation for quality workmanship, reliability, and outstanding customer service.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of fully licensed and insured plumbers is committed to delivering the highest standards of service for both residential and commercial clients. Whether you need emergency repairs, routine maintenance, or complete plumbing installations, we have the expertise and equipment to get the job done right the first time.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <CheckCircle2 size={20} className="text-accent-500 mr-2" />
                  <span className="text-gray-700">Licensed & Insured</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <CheckCircle2 size={20} className="text-accent-500 mr-2" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <CheckCircle2 size={20} className="text-accent-500 mr-2" />
                  <span className="text-gray-700">5-Star Rated Service</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8486989/pexels-photo-8486989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Edinburgh Plumbing Trust team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary-500 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 max-w-3xl mx-auto"
            >
              These principles guide everything we do and define our commitment to providing exceptional plumbing services.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our dealings with customers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every job, from simple repairs to complex installations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up when promised and complete work in the timeframe we commit to.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction and aim to exceed expectations on every job.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary-500 mb-4"
            >
              Meet Our Expert Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 max-w-3xl mx-auto"
            >
              Our skilled and experienced plumbers are the backbone of our company, dedicated to solving your plumbing problems with expertise and care.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-card overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/8942990/pexels-photo-8942990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member - Michael Anderson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Anderson</h3>
                <p className="text-primary-500 font-medium mb-3">Founder & Master Plumber</p>
                <p className="text-gray-600">
                  With over 20 years of experience, Michael founded Edinburgh Plumbing Trust with a vision to provide exceptional plumbing services built on integrity and quality workmanship.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-card overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member - Sarah Mitchell"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Mitchell</h3>
                <p className="text-primary-500 font-medium mb-3">Senior Plumber</p>
                <p className="text-gray-600">
                  Sarah specializes in boiler installations and repairs. Her attention to detail and technical expertise ensure that heating systems work efficiently and reliably.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-card overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/8943081/pexels-photo-8943081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member - David Thompson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Thompson</h3>
                <p className="text-primary-500 font-medium mb-3">Plumbing Technician</p>
                <p className="text-gray-600">
                  David is our drain cleaning and leak detection expert. He utilizes the latest technology to identify and resolve complex plumbing issues quickly and effectively.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Plumbing</h2>
              <p className="text-primary-100 mb-6">
                At Edinburgh Plumbing Trust, we take a methodical and transparent approach to every plumbing job. Our process ensures quality results and complete customer satisfaction.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Thorough Assessment</h3>
                    <p className="text-primary-100">
                      We begin with a comprehensive evaluation of your plumbing system to accurately diagnose the issue and identify the root cause.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Quoting</h3>
                    <p className="text-primary-100">
                      We provide clear, detailed quotes with no hidden fees or surprises, ensuring you understand exactly what work is needed and why.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Execution</h3>
                    <p className="text-primary-100">
                      Our skilled plumbers use premium materials and proven techniques to complete the work efficiently and to the highest standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Thorough Testing</h3>
                    <p className="text-primary-100">
                      We rigorously test all repairs and installations to ensure everything functions perfectly before we consider the job complete.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Edinburgh Plumbing Trust plumber at work"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary-500 mb-4"
            >
              Our Certifications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 max-w-3xl mx-auto"
            >
              We maintain the highest standards through professional certifications and continuous training.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/8486916/pexels-photo-8486916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Gas Safe Registered"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">Gas Safe Registered</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="City & Guilds Qualified"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">City & Guilds Qualified</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/8486958/pexels-photo-8486958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Water Regulations Advisory Scheme"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">WRAS Approved</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-card text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/8486939/pexels-photo-8486939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Chartered Institute of Plumbing"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">CIPHE Member</h3>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default AboutPage;