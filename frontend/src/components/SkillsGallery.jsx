import React from 'react';
import SectionWrapper from './SectionWrapper';
import Button from './Button';

const GalleryItem = ({ src, size = "small" }) => (
  <div className={`relative rounded-xl overflow-hidden group ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}>
    <img 
      src={src} 
      alt="Gallery" 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
  </div>
);

const SkillsGallery = () => {
  return (
    <SectionWrapper id="features" className="bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Text Content */}
        <div className="flex-1 lg:max-w-md flex flex-col justify-center">
          <span className="text-blue-500 font-bold uppercase tracking-widest mb-2">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
            GREAT <br />SKILLS
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We are the ones who create beautiful movies and let Drow X helps us make those movies 
            more epic and profound. From cityscapes to mountain peaks, capture it all in stunning detail.
          </p>
          <div>
             <Button variant="primary" size="lg">
                View Gallery
             </Button>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px]">
           <div className="flex flex-col gap-4">
              <div className="h-64 rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 1" />
              </div>
              <div className="h-40 rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2664&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 2" />
              </div>
           </div>
           <div className="flex flex-col gap-4 pt-12">
               <div className="h-40 rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 3" />
              </div>
               <div className="h-64 rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 4" />
              </div>
           </div>
           <div className="flex flex-col gap-4 pt-6">
               <div className="h-56 rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 5" />
              </div>
               <div className="h-48 rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2674&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 6" />
              </div>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsGallery;
