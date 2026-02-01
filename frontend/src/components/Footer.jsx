import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col">
    <h4 className="font-bold text-gray-900 mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-gray-500 hover:text-blue-500 transition-colors text-sm">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 border-t border-gray-200 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-display font-bold text-secondary">
              DROW<span className="text-blue-500">X</span>
            </a>
            <p className="text-gray-500 text-sm">
              Capturing the world from above. Premium drones for professionals and enthusiasts.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-500"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          <FooterColumn 
            title="Where to Buy" 
            links={[
              { name: 'Online Store', href: '#' },
              { name: 'Flagship Stores', href: '#' },
              { name: 'Drone Aas', href: '#' },
              { name: 'Retail Stores', href: '#' },
            ]} 
          />

          <FooterColumn 
            title="Support" 
            links={[
              { name: 'Product Support', href: '#' },
              { name: 'Help Center', href: '#' },
              { name: 'After Sales Service', href: '#' },
              { name: 'Security and Privacy', href: '#' },
            ]} 
          />

          {/* Subscribe */}
          <div>
             <h4 className="font-bold text-gray-900 mb-4">Subscribe</h4>
             <p className="text-gray-500 text-sm mb-4">Get the latest news from Drow X</p>
             <div className="flex gap-2">
               <div className="relative flex-1">
                 <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
                 />
                 <Mail className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
               </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Drow X. All rights reserved.</p>
          <p>Designed by AI. Built by Antigravity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
