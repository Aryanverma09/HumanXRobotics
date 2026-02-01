import React from 'react';
import { motion } from 'framer-motion';

// Simple utility to join classes if we don't have clsx/tailwind-merge yet
const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon: Icon,
  onClick,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wide";
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-black shadow-lg hover:shadow-xl border border-transparent",
    secondary: "bg-primary text-secondary hover:bg-primary-dark hover:text-white shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    ghost: "bg-transparent text-secondary hover:bg-gray-100",
    white: "bg-white text-secondary hover:bg-gray-100 shadow-md"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classNames(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </motion.button>
  );
};

export default Button;
