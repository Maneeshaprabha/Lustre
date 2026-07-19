import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wind, Scissors, Diamond, ArrowRight } from 'lucide-react';

const LustreFeatureCard = () => {
  const features = [
    {
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
      title: "Premium",
      subtitle: "Quality"
    },
    {
      icon: <Wind size={20} strokeWidth={1.5} />,
      title: "Breathable",
      subtitle: "Fabrics"
    },
    {
      icon: <Scissors size={20} strokeWidth={1.5} />,
      title: "Tailored",
      subtitle: "Fit"
    },
    {
      icon: <Diamond size={20} strokeWidth={1.5} />,
      title: "Timeless",
      subtitle: "Design"
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 font-sans antialiased flex justify-center">
      
      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[1200px] bg-[#1A1A1A] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
      >
        
        {/* Background Image with Gradient Mask (Right Side) */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full pointer-events-none">
          {/* Subtle gradient to blend the image into the black background seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop" 
            alt="Lustre Craftsmanship"
            className="w-full h-full object-cover object-center opacity-40 grayscale mix-blend-luminosity"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col p-8 md:p-16 lg:p-20 h-full justify-between gap-12">
          
          {/* Top Section: Headers & Button */}
          <div className="flex flex-col items-start max-w-2xl">
            
            {/* Small Label matching reference */}
            <p className="text-[#C4BEB6] text-xs font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              <span className="text-[#E9E3DB] opacity-50">/</span> THE LUSTRE STANDARD
            </p>
            
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E9E3DB] leading-[1.1] tracking-tight mb-10">
              Designed For Elegance. <br className="hidden md:block" />
              <span className="font-bold">Built To Last.</span>
            </h2>
            
            {/* Action Button - Replaced Neon with Brand Warm Beige */}
            <button className="group flex items-center gap-3 bg-[#E9E3DB] text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(233,227,219,0.15)]">
              Discover More 
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
          </div>

          {/* Bottom Section: Feature Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-24 pt-8 border-t border-[#C4BEB6]/20">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-default">
                
                {/* Icon inside a subtle circle */}
                <div className="w-12 h-12 rounded-full bg-[#C4BEB6]/10 flex items-center justify-center text-[#C4BEB6] group-hover:bg-[#E9E3DB] group-hover:text-[#1A1A1A] transition-colors duration-500 shrink-0">
                  {feature.icon}
                </div>
                
                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[#E9E3DB] text-sm font-bold leading-tight">
                    {feature.title}
                  </span>
                  <span className="text-[#C4BEB6] text-xs font-medium leading-tight">
                    {feature.subtitle}
                  </span>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default LustreFeatureCard;