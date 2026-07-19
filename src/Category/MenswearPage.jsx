import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenswearPage = () => {
  const [isHovered, setIsHovered] = useState(null);

  const products = [
    { id: 1, name: "Tailored Wool Overcoat", price: "550.00", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop", isNew: true },
    { id: 2, name: "Merino Wool Turtleneck", price: "180.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 3, name: "Classic Pleated Trouser", price: "195.00", image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 4, name: "Minimalist Leather Jacket", price: "680.00", image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=800&auto=format&fit=crop", isNew: true },
    { id: 5, name: "Heavyweight Cotton Tee", price: "85.00", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 6, name: "Double-Breasted Blazer", price: "420.00", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 7, name: "Relaxed Linen Shirt", price: "125.00", image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=800&auto=format&fit=crop", isNew: true },
    { id: 8, name: "Suede Loafers", price: "290.00", image: "https://images.unsplash.com/photo-1614252209825-92576b51c103?q=80&w=800&auto=format&fit=crop", isNew: false }
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 flex flex-col items-center text-center bg-[#FBFBFA]">
        <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-8">
          <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">Shop</Link>
          <span className="mx-3">/</span>
          <span className="text-[#1A1A1A]">Menswear</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6">Menswear</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-xl text-sm md:text-base text-[#1A1A1A]/70 font-medium leading-relaxed">
          Sharp tailoring and elevated casual essentials. Built with precision and uncompromised quality for the modern man.
        </motion.p>
      </header>

      <div className="sticky top-[88px] z-40 w-full bg-white/90 backdrop-blur-md border-y border-[#C4BEB6]/40 px-6 md:px-12 py-4 flex justify-between items-center transition-all">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors"><SlidersHorizontal size={14} />Filters</button>
        </div>
        <div className="flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
          <span className="hidden md:block text-[#1A1A1A]/40">{products.length} Products</span>
          <button className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">Sort By<ChevronDown size={14} /></button>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group flex flex-col cursor-pointer" onMouseEnter={() => setIsHovered(product.id)} onMouseLeave={() => setIsHovered(null)}>
              <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 overflow-hidden mb-5">
                {product.isNew && <span className="absolute top-4 left-4 bg-white text-[#1A1A1A] px-3 py-1 text-[9px] font-black tracking-widest uppercase z-10 shadow-sm">New</span>}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply" />
                <AnimatePresence>
                  {isHovered === product.id && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3 }} className="absolute inset-x-4 bottom-4 z-20">
                      <button className="w-full bg-[#1A1A1A] text-white py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-lg"><Plus size={16} /> Quick Add</button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">{product.name}</h3>
                <span className="text-sm font-medium text-[#1A1A1A]/70">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default MenswearPage;