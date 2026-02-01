import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full"
    >
      <div className="relative h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold font-display text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <Button variant="ghost" className="p-2 hover:bg-blue-50 text-blue-500 rounded-full">
             <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-4">
            <Button variant="outline" className="w-full justify-center group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent transition-colors">
                Add to Cart
            </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
