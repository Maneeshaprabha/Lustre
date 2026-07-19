import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'Categories', 'Contact', 'Blog'];

  return (
   
    <nav className="w-full bg-white border-b border-[#C4BEB6]/40 sticky top-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center font-sans antialiased">
      
      {/* 1. Brand Logo */}
      <div className="text-2xl font-black tracking-[0.25em] uppercase cursor-pointer text-[#1A1A1A]">
        Lustre
      </div>

      {/* 2. Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300 relative pb-1
              ${activeTab === item 
                ? 'text-[#1A1A1A]' 
                : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]/80'}`}
          >
            {item}
            
            {/* Animated active state underline using Framer Motion */}
            {activeTab === item && (
              <motion.div 
                layoutId="navUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A]" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>


      <div className="flex items-center gap-6 text-[#1A1A1A]">
        <button className="hover:text-[#C4BEB6] transition-colors duration-300">
          <Search size={22} strokeWidth={1.5} />
        </button>
        <button className="hover:text-[#C4BEB6] transition-colors duration-300 relative group">
          <ShoppingBag size={22} strokeWidth={1.5} />
          {/* Minimalist Cart Counter Badge */}
          <span className="absolute -top-1.5 -right-2.5 bg-[#1A1A1A] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
            0
          </span>
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;