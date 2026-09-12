import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bottom components
// import Recommendations from './Recommendations';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('WOMEN');

  // Category-wise featured product data
  const categoryProducts = {
    WOMEN: {
      name: "Asymmetric Silk Dress",
      subtitle: "Seasonless elegance",
      price: "240.00",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      id: 2
    },
    MENS: {
      name: "Tailored Wool Blazer",
      subtitle: "Architectural cut",
      price: "385.00",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      id: 205
    },
    KIDS: {
      name: "Organic Cotton Overalls",
      subtitle: "Playful comfort",
      price: "65.00",
      image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop",
      id: 207
    }
  };

  const currentProduct = categoryProducts[activeCategory];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white text-[#1A1A1A] font-sans antialiased overflow-hidden flex flex-col justify-between">
        
        <main className="max-w-[1500px] w-full mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative my-auto">
          
          {/* LEFT COLUMN: Typography and CTA */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-4 flex flex-col justify-center z-10"
          >
          

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6 text-[#1A1A1A] uppercase"
            >
              Shine in Style <br />
              Discover <br />
              <span className="font-light text-[#3d352e]/60">the</span> <span className="font-black text-[#3d352e] tracking-wide">LUSTRE</span> <span className="font-light text-[#3d352e]/60">Look</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-[#1A1A1A]/70 leading-relaxed mb-10 text-sm md:text-base font-medium max-w-[90%]"
            >
              Architectural silhouettes, rich brown and monochrome palettes, and uncompromised luxury engineered to define the modern wardrobe.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-start gap-10">
              {/* Sharp Edge Luxury CTA Button with Brown Accent */}
              <Link 
                to="/shop" 
                className="group flex items-center gap-3 bg-[#3d352e] text-[#E9E3DB] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-all duration-300 shadow-xl rounded-none border border-[#3d352e]"
              >
                Shop Collection 
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>

              {/* Minimalist scroll indicator */}
              <div className="w-6 h-10 border border-[#3d352e]/40 rounded-none flex justify-center p-1 mt-2">
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1 h-2 bg-[#3d352e] rounded-none"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* CENTER COLUMN: Cutout Model Image */}
          <div className="lg:col-span-4 flex justify-center relative h-[500px] md:h-[700px] lg:h-[750px] z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[#3d352e]/10 rounded-none filter blur-3xl -z-10 max-w-sm mx-auto my-auto aspect-square" />
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
              alt="Lustre Model"
              className="absolute bottom-0 w-auto h-[95%] object-cover object-top drop-shadow-2xl grayscale-[15%]"
              style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 12%)' }}
            />
          </div>

          {/* RIGHT COLUMN: Categories and Dynamic Product Card */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-8 z-10 pl-0 lg:pl-8">
            
            {/* Pill Tabs for Categories (Brown Active State) */}
            <div className="flex gap-3 justify-start lg:justify-end">
              {['WOMEN', 'MENS', 'KIDS'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 text-[10px] tracking-[0.2em] font-bold uppercase rounded-none transition-all duration-300 border ${
                    activeCategory === cat 
                      ? 'bg-[#3d352e] text-white border-[#3d352e]' 
                      : 'bg-transparent text-[#1A1A1A]/60 border-[#C4BEB6]/60 hover:border-[#3d352e] hover:text-[#3d352e]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dynamic Product Card matching editorial layout */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FBFBFA] border border-[#3d352e]/20 p-5 flex gap-5 relative group w-full max-w-[420px] ml-auto shadow-sm rounded-none"
              >
                
                {/* Inner Image Container */}
                <div className="w-[140px] h-[180px] bg-[#E9E3DB]/40 overflow-hidden shrink-0 rounded-none relative">
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Card Text Content */}
                <div className="flex flex-col justify-center pr-8">
                  <span className="text-[9px] font-black tracking-[0.15em] uppercase text-[#3d352e]/70 mb-1">{activeCategory} EDIT</span>
                  <h4 className="text-base font-bold text-[#1A1A1A] leading-tight mb-1">{currentProduct.name}</h4>
                  <p className="text-xs text-[#1A1A1A]/60 font-medium mb-3">{currentProduct.subtitle}</p>
                  <span className="text-sm font-bold text-[#3d352e] mb-3">${currentProduct.price}</span>
                  <div className="flex items-center gap-1 text-[10px] text-[#3d352e]">
                    <Star size={12} className="fill-[#3d352e]" />
                    <span className="text-[#3d352e] font-bold uppercase tracking-wider">Lustre Exclusive</span>
                  </div>
                </div>
                
                {/* Circular Brown Arrow Button linked to product detail */}
                <Link 
                  to={`/product/${currentProduct.id}`}
                  className="absolute top-4 right-4 w-9 h-9 bg-[#3d352e] text-white flex items-center justify-center hover:bg-[#1A1A1A] border border-[#3d352e] transition-all shadow-md rounded-none"
                  aria-label="View product"
                >
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>

              </motion.div>
            </AnimatePresence>

          </div>

        </main>
      </div>

      {/* Recommendations at bottom */}
      {/* <Recommendations /> */}
    </>
  );
};

export default Home;