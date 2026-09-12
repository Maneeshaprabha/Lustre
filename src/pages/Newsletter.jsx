import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  // Animation variants for a smooth, staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section className="w-full bg-[#FBFBFA] border-y border-[#C4BEB6]/30 py-24 px-6 md:px-12 font-sans flex justify-center items-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-3xl w-full flex flex-col items-center text-center"
      >
        
        {/* Luxury Overline */}
        <motion.span 
          variants={itemVariants}
          className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#3d352e] uppercase mb-4"
        >
          The Lustre Archive
        </motion.span>
        
        {/* Main Heading */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-[0.9] mb-6"
        >
          Join The <br className="hidden md:block" />
          Inner Circle.
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="h-[2px] w-12 bg-[#3d352e] mb-6"
        />

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base text-[#1A1A1A]/70 font-medium mb-10 max-w-md leading-relaxed"
        >
          Sign up for Lustre updates and be the first to know about new editorial arrivals, exclusive collections, and bespoke promotions.
        </motion.p>
        
        {/* Sharp Edge Form Container */}
        <motion.form 
          variants={itemVariants}
          className="relative w-full max-w-xl flex flex-col sm:flex-row shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Input Area */}
          <div className="relative flex-grow flex">
            <div className="absolute left-5 top-0 bottom-0 flex items-center justify-center text-[#1A1A1A]/40 pointer-events-none z-10">
              <Mail size={18} strokeWidth={1.5} />
            </div>
            
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="w-full bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 text-sm font-medium py-5 pl-14 pr-4 rounded-none outline-none border border-[#C4BEB6]/60 border-b-0 sm:border-b sm:border-r-0 focus:border-[#3d352e] transition-colors"
            />
          </div>
          
          {/* Subscribe Button (Sharp & Brown) */}
          <button 
            type="submit"
            className="group flex items-center justify-center gap-3 bg-[#3d352e] text-[#E9E3DB] px-8 py-5 text-xs font-bold tracking-[0.2em] uppercase rounded-none border border-[#3d352e] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all whitespace-nowrap"
          >
            Subscribe
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </button>
        </motion.form>

        <motion.p 
          variants={itemVariants}
          className="text-[9px] text-[#1A1A1A]/40 font-bold tracking-widest uppercase mt-6"
        >
          By subscribing, you agree to our Terms of Service.
        </motion.p>

      </motion.div>
    </section>
  );
};

export default Newsletter;