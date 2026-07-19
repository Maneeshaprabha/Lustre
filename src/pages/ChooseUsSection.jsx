import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChooseUsModern = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    {
      id: '01',
      title: 'Ethical Craftsmanship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Premium Materials',
      description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Timeless Aesthetic',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Modern Minimalist Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-[#1A1A1A] uppercase">
            The Lustre Difference
          </h2>
          <p className="text-xs md:text-sm font-medium tracking-wider text-[#1A1A1A]/50 uppercase max-w-xs md:text-right">
            Redefining luxury through intent and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Interactive Image Frame */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] bg-[#E9E3DB] overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={hoveredIndex !== null ? hoveredIndex : 'default'}
                src={hoveredIndex !== null ? reasons[hoveredIndex].image : reasons[0].image}
                alt="Lustre Quality"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Subtle overlay to ensure the image feels integrated and luxurious */}
            <div className="absolute inset-0 bg-[#1A1A1A]/5 pointer-events-none" />
          </div>

          {/* Right Column: Hover-Activated List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-pointer relative py-8 md:py-12 border-b border-[#C4BEB6]/40 first:border-t"
              >
                {/* Animated Highlight Line */}
                <div className="absolute bottom-[-1px] left-0 h-[2px] bg-[#1A1A1A] w-0 transition-all duration-500 ease-out group-hover:w-full z-10" />

                <div className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-opacity duration-500 ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'
                }`}>
                  
                  {/* Minimalist Superscript Number */}
                  <span className="text-sm md:text-base font-black tracking-widest text-[#C4BEB6] md:pt-2">
                    {reason.id}
                  </span>
                  
                  {/* Content Block */}
                  <div className="flex-1 flex flex-col md:flex-row justify-between gap-4 md:gap-8">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {reason.title}
                    </h3>
                    
                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed font-medium md:max-w-[280px]">
                      {reason.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseUsModern;