import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Background Image - Placeholder until we generate one */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 to-transparent/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2664&auto=format&fit=crop" 
          alt="Drone Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-blue-500 font-bold tracking-wider uppercase mb-2">The Future of Flight</h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
              DROW <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">X SERIES</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Experience the ultimate freedom with our most advanced drone yet. 
              Unmatched stability, 8K recording, and intelligent flight modes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                View Features
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-gray-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
