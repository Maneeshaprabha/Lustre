import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: "USEFUL",
      links: ["Shop", "Collections", "About Us"]
    },
    {
      title: "LEGAL",
      links: ["Privacy Policy", "Terms of Service"]
    },
    {
      title: "UPDATES",
      links: ["Instagram", "Twitter", "Newsletter"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <footer className="w-full bg-[#1A1A1A] text-[#E9E3DB] pt-24 pb-4 px-6 md:px-12 font-sans overflow-hidden flex flex-col justify-between min-h-[60vh]">
      
      {/* Top Section: Tagline & Links */}
      <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-24 z-10">
        
        {/* Left: Branding & Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col max-w-xs"
        >
          {/* Abstract geometric mark mimicking the reference icon */}
          <div className="mb-6 opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" fill="#E9E3DB" />
              <circle cx="12" cy="4" r="1.5" fill="#E9E3DB" />
              <circle cx="12" cy="20" r="1.5" fill="#E9E3DB" />
              <circle cx="4" cy="12" r="1.5" fill="#E9E3DB" />
              <circle cx="20" cy="12" r="1.5" fill="#E9E3DB" />
              <circle cx="6.5" cy="6.5" r="1.5" fill="#E9E3DB" />
              <circle cx="17.5" cy="17.5" r="1.5" fill="#E9E3DB" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="#E9E3DB" />
              <circle cx="6.5" cy="17.5" r="1.5" fill="#E9E3DB" />
            </svg>
          </div>
          <p className="text-sm md:text-base font-medium text-[#E9E3DB]/80 leading-relaxed tracking-wide">
            Lustre is the essence you've been searching for.
          </p>
        </motion.div>

        {/* Right: Navigation Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24"
        >
          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              <motion.h4 variants={itemVariants} className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase">
                {column.title}
              </motion.h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link, linkIdx) => (
                  <motion.li key={linkIdx} variants={itemVariants}>
                    <a 
                      href={`${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-[#E9E3DB]/70 hover:text-[#E9E3DB] transition-colors duration-300 relative group inline-block"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C4BEB6] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section: Massive Typography */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full relative flex items-end justify-center mt-auto"
      >
        <h1 className="text-[25vw] leading-[0.75] font-black tracking-tighter text-[#E9E3DB] uppercase select-none flex items-start">
          LUSTRE
          <sup className="text-[4vw] font-light leading-none tracking-normal ml-2 mt-4 md:mt-8 opacity-80">
            &copy;
          </sup>
        </h1>
      </motion.div>
      
    </footer>
  );
};

export default Footer;