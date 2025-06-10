import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, ThumbsUp, BadgeCheck, HeartHandshake, PiggyBank } from 'lucide-react';

const features = [
  {
    icon: <Shield size={36} />,
    title: 'Licensed & Insured',
    description: 'We\'re fully licensed and insured for your peace of mind and protection.',
  },
  {
    icon: <Clock size={36} />,
    title: 'Prompt Service',
    description: 'We respect your time and arrive promptly for all scheduled appointments.',
  },
  {
    icon: <ThumbsUp size={36} />,
    title: 'Quality Workmanship',
    description: 'Our experienced plumbers deliver high-quality work that lasts.',
  },
  {
    icon: <BadgeCheck size={36} />,
    title: 'Guaranteed Results',
    description: 'We stand behind our work with satisfaction guarantees.',
  },
  {
    icon: <HeartHandshake size={36} />,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises. We provide clear, upfront pricing.',
  },
  {
    icon: <PiggyBank size={36} />,
    title: 'Competitive Rates',
    description: 'Professional service at fair and competitive prices.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Edinburgh Plumbing Trust is committed to delivering exceptional service and results for every customer.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;