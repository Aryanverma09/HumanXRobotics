import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { Battery, Wifi, Gauge, Camera } from 'lucide-react';

const FeatureItem = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-start space-y-2 p-4 rounded-xl hover:bg-white/50 transition-colors">
    <Icon className="w-8 h-8 text-blue-500 mb-2" />
    <span className="text-2xl font-bold font-display text-gray-900">{value}</span>
    <span className="text-sm text-gray-500 uppercase tracking-wider">{label}</span>
  </div>
);

const NewArrival = () => {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Content Side */}
        <div className="flex-1 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest mb-2 block">New Arrival</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              DROW X3 PRO
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              With many valuable upgrades for aerial photography enthusiasts. 
              The Drow X-3 Pro features obstacle avoidance, high-video quality, 
              and many intelligent flight modes. An impressive rotation speed 
              and long flight time of up to 50 minutes give users the power to be creative.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-t border-b border-gray-200 py-8">
              <FeatureItem icon={Camera} value="8K" label="Video Type" />
              <FeatureItem icon={Wifi} value="15 km" label="Transmission" />
              <FeatureItem icon={Gauge} value="74 kph" label="Max Speed" />
              <FeatureItem icon={Battery} value="50 min" label="Flight Time" />
            </div>

            <div className="flex items-center gap-6">
              <div className="text-3xl font-bold text-gray-900">$1999.00</div>
              <Button variant="primary" size="lg">Buy Now</Button>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="flex-1 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
             {/* Using a different drone image placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2670&auto=format&fit=crop" 
              alt="Drow X3 Pro" 
              className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-0" />
          <div className="absolute right-0 top-0 text-[10rem] md:text-[15rem] font-bold text-white leading-none -z-0 select-none opacity-80">
            PRO
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NewArrival;
