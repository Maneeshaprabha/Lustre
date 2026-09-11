import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Recommendations from './Recommendations';

const CollectionPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();

  const categories = [
    'ALL', 'HOODIES', 'SWEATSHIRTS', 'T-SHIRTS', 'BOMBERS', 
    'WINDBREAKERS', 'ANORAKS', 'JOGGERS', 'SHORTS', 'ACCESSORIES'
  ];

  // Array for the 4 split hero images
  const heroImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550614000-4b95d4edaa19?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
  ];

  // Products mapped with a "span" property to create the asymmetrical grid
  const products = [
    // Row 1: Large (Left), Small (Right), Small (Right)
    { id: 1, name: "Contrast Collar Sweatshirt", price: "240.00", span: "large", isNew: true, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Essential Crewneck", price: "150.00", span: "small", isNew: false, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Heavyweight Boxy Tee", price: "95.00", span: "small", isNew: false, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" },
    
    // Row 2: Small (Left), Small (Left), Large (Right)
    { id: 4, name: "Logo Embossed Hoodie", price: "180.00", span: "small", isNew: true, image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Minimalist Quarter-Zip", price: "195.00", span: "small", isNew: false, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Oversized Rugby Polo", price: "220.00", span: "large", isNew: false, image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1000&auto=format&fit=crop" },
    
    // Row 3: Large (Left), Small (Right), Small (Right)
    { id: 7, name: "Knit Wool Pullover", price: "280.00", span: "large", isNew: true, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, name: "Classic French Terry", price: "140.00", span: "small", isNew: false, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
    { id: 9, name: "Signature Embroidery Tee", price: "110.00", span: "small", isNew: false, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" }
  ];

  // Animations
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* 1. EDITORIAL HERO SECTION (4-Panel Split) */}
        <section className="relative w-full h-[60vh] md:h-[75vh] flex overflow-hidden">
          {/* The 4 vertical image strips */}
          {heroImages.map((img, idx) => (
            <div key={idx} className="w-1/4 h-full relative overflow-hidden group">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={img} 
                alt={`Lustre Collection Look ${idx + 1}`}
                className="w-full h-full object-cover object-center grayscale-[20%] transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle dark overlay for text contrast */}
              <div className="absolute inset-0 bg-[#1A1A1A]/20 transition-opacity duration-500 group-hover:bg-[#1A1A1A]/10" />
            </div>
          ))}
          
          {/* Massive Overlapping Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-white uppercase drop-shadow-2xl"
            >
              Collection
            </motion.h1>
          </div>
        </section>

        {/* 2. CATEGORY NAVIGATION BAR */}
        <nav className="w-full border-b border-[#C4BEB6]/30 bg-white sticky top-[88px] z-40">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            {/* Hide scrollbar for a clean look */}
            <ul className="flex items-center gap-8 overflow-x-auto whitespace-nowrap py-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors relative ${
                      activeCategory === category ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'
                    }`}
                  >
                    {category}
                    {/* Sharp active indicator line under text */}
                    {activeCategory === category && (
                      <motion.div layoutId="categoryIndicator" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1A1A1A]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* 3. ASYMMETRICAL BENTO GRID */}
        <main className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <motion.div 
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {products.map((product) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                className={`group relative flex flex-col cursor-pointer ${product.span === 'large' ? 'col-span-2' : 'col-span-1'}`}
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                
                {/* Wrapping the content in Link to route to PDP */}
                <Link to={`/product/${product.id}`} className="block w-full">
                  {/* Product Image Container */}
                  <div className="relative w-full aspect-[4/5] bg-[#E9E3DB]/30 overflow-hidden mb-4 rounded-none">
                    
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-white text-[#1A1A1A] px-3 py-1 text-[9px] font-black tracking-widest uppercase z-10 shadow-sm rounded-none border border-[#1A1A1A]/10">
                        New
                      </span>
                    )}

                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:scale-105 mix-blend-multiply"
                    />
                    
                    {/* Gradient Overlay for Quick Add visibility */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Minimalist Product Info (Name Left, Price Right) */}
                  <div className="flex justify-between items-start gap-4 px-1">
                    <h3 className="text-xs md:text-sm font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xs md:text-sm font-medium text-[#1A1A1A] shrink-0">
                      ${product.price}
                    </span>
                  </div>
                </Link>

                {/* Quick Add Buttons Overlay */}
                <AnimatePresence>
                  {isHovered === product.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: 10 }} 
                      transition={{ duration: 0.3 }} 
                      className="absolute inset-x-4 bottom-[55px] z-20 pointer-events-auto"
                    >
                      <button 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          navigate(`/product/${product.id}`); 
                        }} 
                        className="w-full bg-[#1A1A1A] text-white py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-lg rounded-none border border-transparent hover:border-[#1A1A1A]"
                      >
                        <Plus size={16} /> Quick Add
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <div className="w-full flex justify-center mt-20">
            <button className="border border-[#1A1A1A] text-[#1A1A1A] px-12 py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
              Load More
            </button>
          </div>
        </main>

      </div>

      {/* Recommended Section at the bottom */}
      <Recommendations />
    </>
  );
};

export default CollectionPage;