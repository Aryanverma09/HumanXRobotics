import React from 'react';

const SectionWrapper = ({ children, className, id, fullWidth = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full py-16 md:py-24 overflow-hidden ${className || ''}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
