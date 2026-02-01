import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg bg-white/80' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-display font-bold text-secondary">
              DROW<span className="text-blue-500">X</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></span>
            </button>
            <Button variant="primary" size="sm" className="hidden lg:flex">
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-secondary"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 w-full flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-center">Log In</Button>
                <Button variant="primary" className="w-full justify-center">Shop Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
