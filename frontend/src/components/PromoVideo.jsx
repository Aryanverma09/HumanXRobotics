import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Play } from 'lucide-react';

const PromoVideo = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-[500px] md:h-[600px] group cursor-pointer">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2670&auto=format&fit=crop" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/40 hover:bg-white hover:text-black transition-all duration-300 shadow-xl z-20"
          >
            <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              A New Generation of Drone
            </h2>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
              Capture cinematic footage with ease. The Drow X Series redefines what's possible 
              in personal aerial photography.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PromoVideo;
