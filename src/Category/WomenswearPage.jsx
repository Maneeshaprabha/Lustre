import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const WomenswearPage = () => {
  const [isHovered, setIsHovered] = useState(null);

  // High-end editorial product data
  const products = [
    {
      id: 1,
      name: "Draped Silk Maxi Dress",
      price: "340.00",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      isNew: true
    },
    {
      id: 2,
      name: "Structured Wool Overcoat",
      price: "495.00",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop",
      isNew: false
    },
    {
      id: 3,
      name: "Ribbed Cashmere Turtleneck",
      price: "220.00",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
      isNew: false
    },
    {
      id: 4,
      name: "Pleated Wide-Leg Trouser",
      price: "185.00",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
      isNew: true
    },
    {
      id: 5,
      name: "Oversized Linen Blazer",
      price: "275.00",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      isNew: false
    },
    {
      id: 6,
      name: "Asymmetric Satin Blouse",
      price: "150.00",
      image: "https://images.unsplash.com/photo-1550614000-4b95d4edaa19?q=80&w=800&auto=format&fit=crop",
      isNew: false
    },
    {
      id: 7,
      name: "Tailored Crepe Vest",
      price: "135.00",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
      isNew: true
    },
    {
      id: 8,
      name: "Minimalist Leather Tote",
      price: "390.00",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      isNew: false
    }
  ];

  // Staggered grid animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
      
      {/* 1. EDITORIAL HEADER */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 flex flex-col items-center text-center bg-[#FBFBFA]">
        
        {/* Minimalist Breadcrumbs */}
        <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-8">
          <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">Shop</Link>
          <span className="mx-3">/</span>
          <span className="text-[#1A1A1A]">Womenswear</span>
        </nav>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6"
        >
          Womenswear
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl text-sm md:text-base text-[#1A1A1A]/70 font-medium leading-relaxed"
        >
          A curated collection of effortless silhouettes and refined tailoring. Designed with intention, crafted from premium fabrics for the modern wardrobe.
        </motion.p>
      </header>

      {/* 2. STICKY FILTER BAR */}
      <div className="sticky top-[88px] z-40 w-full bg-white/90 backdrop-blur-md border-y border-[#C4BEB6]/40 px-6 md:px-12 py-4 flex justify-between items-center transition-all">
        
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">
            <SlidersHorizontal size={14} />
            Filters
          </button>
        </div>

        <div className="flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
          <span className="hidden md:block text-[#1A1A1A]/40">{products.length} Products</span>
          
          <button className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">
            Sort By
            <ChevronDown size={14} />
          </button>
        </div>

      </div>

      {/* 3. PRODUCT GRID */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="group flex flex-col cursor-pointer relative"
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              
              {/* Wrapping the entire card content in a Link to the PDP */}
              <Link to={`/product/${product.id}`} className="block w-full">
                {/* Product Image Container */}
                <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 overflow-hidden mb-5">
                  
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-white text-[#1A1A1A] px-3 py-1 text-[9px] font-black tracking-widest uppercase z-10 shadow-sm">
                      New
                    </span>
                  )}

                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply"
                  />
                  
                  {/* Subtle gradient for Quick Add visibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-1.5 px-1">
                  <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium text-[#1A1A1A]/70">
                    ${product.price}
                  </span>
                </div>
              </Link>

              {/* Quick Add Overlay (Placed outside the Link to prevent conflict) */}
              <AnimatePresence>
                {isHovered === product.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-4 bottom-[65px] z-20" // Positioned above the text
                  >
                    <button 
                      onClick={(e) => {
                        e.preventDefault(); // This stops the Link from triggering when clicking Quick Add
                        console.log(`Added ${product.name} to cart`);
                      }}
                      className="w-full bg-[#1A1A1A] text-white py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-lg"
                    >
                      <Plus size={16} /> Quick Add
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </motion.div>
      </main>

    </div>
  );
};

export default WomenswearPage;