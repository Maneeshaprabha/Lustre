import React from 'react';
import { motion } from 'framer-motion';

const BrandMarqueeAnimated = () => {
  // Brand placeholders mimicking the typographic styles from your image
  const brands = [
    { name: 'G U C C I', style: 'font-serif tracking-[0.3em] text-lg md:text-xl' },
    { name: 'D&G', style: 'font-black font-sans tracking-tighter text-2xl md:text-4xl' },
    { name: 'Dior', style: 'font-serif text-3xl md:text-5xl capitalize' },
    { name: 'H&M', style: 'font-sans italic font-black tracking-tighter text-2xl md:text-4xl' },
    { name: 'PRADA', style: 'font-serif font-bold tracking-[0.2em] text-xl md:text-3xl' },
    { name: 'RALPH LAUREN', style: 'font-serif tracking-widest text-sm md:text-base' },
  ];

  // Duplicate the array to ensure a seamless infinite scroll loop
  const marqueeItems = [...brands, ...brands];

  return (
    <>
    {/* Background uses Warm Beige (#E9E3DB) */}
    <section className="w-full bg-[#E9E3DB] py-12 md:py-16 overflow-hidden flex items-center relative border-y border-[#C4BEB6]/40">
      
      {/* Luxury Detail: Fade masks on the edges to smooth the entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#E9E3DB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#E9E3DB] to-transparent z-10 pointer-events-none" />

      {/* The scrolling container */}
      <motion.div 
        className="flex w-fit items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 25 // Adjust this value to control the speed (higher = slower)
        }}
      >
        {marqueeItems.map((brand, index) => (
          <div 
            key={index} 
           
            className={`text-[#1A1A1A] opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer flex-shrink-0 text-center mx-10 md:mx-20 ${brand.style}`}
          >
            {brand.name}
          </div>
        ))}
      </motion.div>

    </section>
    </>
  );
};

export default BrandMarqueeAnimated;