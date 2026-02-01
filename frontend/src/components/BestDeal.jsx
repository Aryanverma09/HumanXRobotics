import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Drow X3',
    description: 'Compact foldable drone with 4K camera and 30 min flight time.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2670&auto=format&fit=crop', // Placeholder
    isNew: false,
  },
  {
    id: 2,
    name: 'Drow X3 Pro',
    description: 'Professional grade aerial photography with 1-inch sensor.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2670&auto=format&fit=crop', // Placeholder
    isNew: true,
  },
  {
    id: 3,
    name: 'Drow S-10',
    description: 'High-speed racing drone with FPV goggles included.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2670&auto=format&fit=crop', // Placeholder
    isNew: false,
  },
];

const BestDeal = () => {
  return (
    <SectionWrapper id="products" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-secondary mb-4">BEST DEALS</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover our most popular models, engineered for perfection and ready to take flight.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BestDeal;
