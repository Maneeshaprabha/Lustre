import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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
    <section className="w-full bg-white py-24 px-6 md:px-12 font-sans flex justify-center items-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-2xl w-full flex flex-col items-center text-center"
      >
        
        {/* Main Heading */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-[2rem] font-medium text-[#1A1A1A] leading-snug mb-4"
        >
          Join our mailing list to stay informed about <br className="hidden md:block" />
          exciting new releases and updates!
        </motion.h2>
        
        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-xs md:text-sm text-[#1A1A1A]/50 font-medium mb-10 max-w-lg"
        >
          Sign up for Lustre updates and be the first to know about new arrivals, exclusive offers, and promotions!
        </motion.p>
        
        {/* Input and Button Container */}
        <motion.form 
          variants={itemVariants}
          className="relative w-full max-w-lg flex items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Mail Icon */}
          <div className="absolute left-6 text-[#1A1A1A]/40 pointer-events-none z-10">
            <Mail size={20} strokeWidth={1.5} />
          </div>
          
          {/* Email Input - Using a soft wash of Warm Beige for the background */}
          <input 
            type="email" 
            placeholder="Enter Your Email" 
            required
            className="w-full bg-[#E9E3DB]/40 text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 text-sm font-medium py-4 pl-14 pr-36 rounded-2xl outline-none focus:bg-[#E9E3DB]/70 transition-colors border border-transparent focus:border-[#C4BEB6]"
          />
          
          {/* Subscribe Button */}
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-[#1A1A1A] text-[#E9E3DB] px-6 md:px-8 rounded-xl text-sm font-bold tracking-wide hover:bg-[#1A1A1A]/80 transition-colors shadow-sm"
          >
            Subscribe
          </button>
        </motion.form>

      </motion.div>
    </section>
  );
};

export default Newsletter;