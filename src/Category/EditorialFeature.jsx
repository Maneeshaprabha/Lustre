import React from 'react';
import { motion } from 'framer-motion';

const EditorialFeature = () => {
  // Floating animation for the detached items
  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* TOP SECTION: Massive Typography & Floating Elements */}
        <div className="relative text-center mb-24 md:mb-32 flex flex-col items-center z-10">
          
          {/* Floating Image 1 (Left) */}
          <motion.img 
            animate={floatAnimation}
            src="https://images.unsplash.com/photo-1574281570870-ea39bf2cd2c3?q=80&w=400&auto=format&fit=crop" // Placeholder: Small accessory/bag
            alt="Lustre Accessory"
            className="hidden md:block absolute top-0 left-[10%] w-32 lg:w-48 object-cover rounded-xl -rotate-12 drop-shadow-xl z-20 mix-blend-multiply"
          />

          {/* Floating Image 2 (Right) */}
          <motion.img 
            animate={floatAnimation}
            src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=400&auto=format&fit=crop" // Placeholder: Small accessory/hat
            alt="Lustre Detail"
            className="hidden md:block absolute top-12 right-[10%] w-32 lg:w-48 object-cover rounded-xl rotate-12 drop-shadow-xl z-20 mix-blend-multiply"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="flex flex-col items-center leading-[0.85] tracking-tighter"
          >
            <h2 className="text-[12vw] md:text-[9vw] font-black text-[#1A1A1A] uppercase">
              Curate Your
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <h2 className="text-[12vw] md:text-[9vw] font-black text-[#1A1A1A] uppercase">
                Signature
              </h2>
              {/* The outlined text effect from the reference */}
              <h2 
                className="text-[12vw] md:text-[9vw] font-black uppercase"
                style={{ 
                  WebkitTextStroke: '2px #C4BEB6', 
                  color: 'transparent' 
                }}
              >
                Aesthetic
              </h2>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Split Layout with Pill Ovals and Center Divider */}
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12 md:gap-4">
          
          {/* Left Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 md:w-[45%]"
          >
            {/* Left Text */}
            <div className="order-2 md:order-1 text-center md:text-left max-w-[200px]">
              <h4 className="text-[#1A1A1A] font-bold text-sm tracking-[0.15em] uppercase mb-3 relative inline-block">
                Premium Fabrics
                <span className="absolute -bottom-1 left-0 md:left-0 right-0 h-[2px] bg-[#C4BEB6]/60 w-1/2 mx-auto md:mx-0" />
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 font-medium leading-relaxed">
                Expertly crafted garments designed to breathe, move, and elevate your everyday presence.
              </p>
            </div>
            
            {/* Left Oval Image */}
            <div className="order-1 md:order-2 w-[280px] md:w-full max-w-[320px] aspect-[3/4] rounded-[150px] bg-[#E9E3DB] overflow-hidden flex items-center justify-center p-4">
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b95d4edaa19?q=80&w=800&auto=format&fit=crop" // Placeholder model
                alt="Lustre Look 1"
                className="w-full h-full object-cover rounded-[140px] mix-blend-multiply transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Center Vertical Divider */}
          <div className="hidden md:flex flex-col items-center justify-center w-[10%] relative">
            <div className="w-[1px] h-32 bg-[#C4BEB6]/40 mb-4" />
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-md">
              01
            </div>
            {/* Vertical Text */}
            <div className="my-8 flex-1 flex items-center justify-center">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#1A1A1A] uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                A Modern Approach to Luxury
              </p>
            </div>
            <div className="w-[1px] h-32 bg-[#C4BEB6]/40 mt-4" />
          </div>

          {/* Right Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 md:w-[45%]"
          >
            {/* Right Oval Image */}
            <div className="w-[280px] md:w-full max-w-[320px] aspect-[3/4] rounded-[150px] bg-[#E9E3DB] overflow-hidden flex items-center justify-center p-4">
              <img 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" // Placeholder model
                alt="Lustre Look 2"
                className="w-full h-full object-cover rounded-[140px] mix-blend-multiply transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Text */}
            <div className="text-center md:text-left max-w-[200px]">
              <h4 className="text-[#1A1A1A] font-bold text-sm tracking-[0.15em] uppercase mb-3 relative inline-block">
                Timeless Design
                <span className="absolute -bottom-1 left-0 md:left-0 right-0 h-[2px] bg-[#C4BEB6]/60 w-1/2 mx-auto md:mx-0" />
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 font-medium leading-relaxed">
                Including versatile silhouettes that seamlessly transition from day to evening wear.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EditorialFeature;