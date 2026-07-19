import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const NewCollectionBanner = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section className="relative w-full bg-white pt-24 md:pt-32 overflow-hidden font-sans antialiased">
      
      {/* Subtle Topographic/Wave Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 200 100, 300 200, 500 150 S 800 250, 1000 100' stroke='%231A1A1A' stroke-width='1' fill='none' /%3E%3Cpath d='M0 200 C 250 200, 350 300, 600 200 S 900 350, 1200 200' stroke='%231A1A1A' stroke-width='1' fill='none' /%3E%3Cpath d='M0 300 C 300 300, 400 400, 700 250 S 1000 450, 1400 300' stroke='%231A1A1A' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start">
          
          {/* Left Column: Tag */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-3 pt-2"
          >
            <span className="text-[#1A1A1A]/50 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
              New Collection
            </span>
          </motion.div>

          {/* Center Column: Main Typography */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-6 flex flex-col"
          >
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-[#1A1A1A] tracking-tight leading-[1.05] mb-8">
              The mountain <br className="hidden md:block" />
              is the measure.
            </h2>
            <p className="text-[#1A1A1A]/70 text-sm md:text-base font-medium leading-relaxed max-w-md">
              Precision-built outerwear for when conditions decide the outcome. From studio to summit — tested, trusted, refined in motion.
            </p>
          </motion.div>

          {/* Right Column: Link & Decorative Star */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-3 flex justify-between md:justify-end items-start pt-2 relative"
          >
            {/* 4-point star decoration mimicking the top right of your image */}
            <div className="hidden md:block absolute top-0 right-0 text-[#C4BEB6]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor" />
              </svg>
            </div>

            <a 
              href="#shop-jackets" 
              className="group flex items-center gap-2 border-b border-[#C4BEB6] pb-1 hover:border-[#1A1A1A] transition-colors mt-8 md:mt-24 md:mr-12"
            >
              <span className="text-[#1A1A1A] text-sm font-medium tracking-wide">
                Shop Jackets
              </span>
              <ArrowUpRight 
                size={16} 
                className="text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                strokeWidth={1.5}
              />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Full-width Image Area (Clothing Rack) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full mt-20 md:mt-28 relative h-[400px] md:h-[500px] lg:h-[600px] bg-[#E9E3DB]/20"
      >
        <img 
          src="https://images.unsplash.com/photo-1489987707023-afc824781ef5?q=80&w=2000&auto=format&fit=crop" 
          alt="Lustre Outerwear Collection on Rack"
          className="w-full h-full object-cover object-center mix-blend-multiply"
        />
      </motion.div>

    </section>
  );
};

export default NewCollectionBanner;