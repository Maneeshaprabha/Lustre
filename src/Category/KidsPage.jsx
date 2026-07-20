import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, ShoppingBag, Plus, Star, ArrowLeft, ArrowRight, Search, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const KidsPage = () => {
  const [isHovered, setIsHovered] = useState(null);
  
  // Filter Open/Close States
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isCollectionOpen, setIsCollectionOpen] = useState(true); // Added for New Arrivals, etc.
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  
  // Active Filter States
  const [activeCategory, setActiveCategory] = useState('All Kids');
  const [activeCollections, setActiveCollections] = useState([]); // Added for checkboxes
  const [activeSizes, setActiveSizes] = useState([]);
  const [activePrice, setActivePrice] = useState(null);

  const products = [
    { id: 1, name: "Mini Classic Trench", price: "120.00", rating: 5.0, reviews: 42, image: "https://images.unsplash.com/photo-1519238396246-be760086221c?q=80&w=800&auto=format&fit=crop", isNew: true },
    { id: 2, name: "Organic Cotton Overalls", price: "65.00", rating: 4.8, reviews: 128, image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 3, name: "Chunky Knit Cardigan", price: "85.00", rating: 4.9, reviews: 85, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 4, name: "Linen Smock Dress", price: "70.00", rating: 4.7, reviews: 34, image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=800&auto=format&fit=crop", isNew: true },
    { id: 5, name: "Tailored Chino Short", price: "45.00", rating: 4.6, reviews: 56, image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 6, name: "Breton Stripe Longsleeve", price: "40.00", rating: 4.9, reviews: 210, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop", isNew: false },
    { id: 7, name: "Merino Wool Beanie", price: "35.00", rating: 5.0, reviews: 18, image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop", isNew: true },
    { id: 8, name: "Leather Mary Janes", price: "95.00", rating: 4.8, reviews: 92, image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=800&auto=format&fit=crop", isNew: false }
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };

  // Handlers for toggling multi-select filters
  const toggleSize = (size) => {
    setActiveSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const toggleCollection = (collection) => {
    setActiveCollections(prev => prev.includes(collection) ? prev.filter(c => c !== collection) : [...prev, collection]);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 flex flex-col items-center text-center bg-[#FBFBFA]">
        <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-8">
          <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">Shop</Link>
          <span className="mx-3">/</span>
          <span className="text-[#1A1A1A]">Kids</span>
        </nav>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6"
        >
          Kids
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="max-w-xl text-sm md:text-base text-[#1A1A1A]/70 font-medium leading-relaxed"
        >
          Playful elegance meets durability. Uncompromised comfort and timeless silhouettes tailored for the little ones.
        </motion.p>
      </header>

      {/* 2. RESPONSIVE TOP BAR */}
      <div className="w-full border-y border-[#C4BEB6]/40 bg-white sticky top-[88px] z-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <button className="flex lg:hidden items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">
            <SlidersHorizontal size={14} /> Filters
          </button>
          
          <div className="hidden lg:block text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/40">
            {products.length} Products
          </div>

          <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors ml-auto lg:ml-0">
            Sort By <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* 3. MAIN LAYOUT (Sidebar + Grid) */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-12 md:mt-20">
        
        {/* LEFT SIDEBAR (Search & Filters) */}
        <aside className="hidden lg:flex flex-col gap-8">
          
          {/* Boxy Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1A1A1A]/40" size={16} />
            <input 
              type="text" 
              placeholder="Search kids..." 
              className="w-full bg-transparent border border-[#C4BEB6]/60 p-3.5 pl-12 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-6">
            
            {/* CATEGORY FILTER */}
            <div className="border-b border-[#C4BEB6]/40 pb-6">
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group"
              >
                <span className="font-bold text-sm tracking-wide uppercase">Category</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col overflow-hidden pt-3 gap-2"
                  >
                    {['Baby (0-2Y)', 'Toddler (2-5Y)', 'Boys', 'Girls', 'Outerwear', 'Accessories'].map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left py-1 text-sm font-medium transition-colors flex items-center ${activeCategory === cat ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* COLLECTIONS / HIGHLIGHTS (Square Checkboxes) */}
            <div className="border-b border-[#C4BEB6]/40 pb-6">
              <button 
                onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group"
              >
                <span className="font-bold text-sm tracking-wide uppercase">Collections</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isCollectionOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCollectionOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-3 pt-3 overflow-hidden"
                  >
                    {['New Arrival', 'Best Seller', 'On Discount'].map((collection) => {
                      const isActive = activeCollections.includes(collection);
                      return (
                        <button 
                          key={collection}
                          onClick={() => toggleCollection(collection)}
                          className="flex items-center gap-3 text-sm group"
                        >
                          <div className={`w-4 h-4 border rounded-none flex items-center justify-center transition-colors ${isActive ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-[#C4BEB6]/60 group-hover:border-[#1A1A1A]'}`}>
                            {isActive && <Check size={12} className="text-white" />}
                          </div>
                          <span className={`transition-colors ${isActive ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]'}`}>
                            {collection}
                          </span>
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SIZE FILTER (Square Grid) */}
            <div className="border-b border-[#C4BEB6]/40 pb-6">
              <button 
                onClick={() => setIsSizeOpen(!isSizeOpen)}
                className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group"
              >
                <span className="font-bold text-sm tracking-wide uppercase">Size</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isSizeOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSizeOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="grid grid-cols-4 gap-2 pt-3 overflow-hidden"
                  >
                    {['0-3M', '3-6M', '6-12M', '1Y', '2Y', '3Y', '4Y', '5Y'].map((size) => {
                      const isActive = activeSizes.includes(size);
                      return (
                        <button 
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`py-2 text-[11px] font-bold tracking-wider transition-colors border rounded-none ${isActive ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' : 'border-[#C4BEB6]/60 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
                        >
                          {size}
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* COLOR FILTER (Square Swatches) */}
            <div className="border-b border-[#C4BEB6]/40 pb-6">
              <button 
                onClick={() => setIsColorOpen(!isColorOpen)}
                className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group"
              >
                <span className="font-bold text-sm tracking-wide uppercase">Color</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isColorOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isColorOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-wrap gap-3 pt-3 overflow-hidden"
                  >
                    {['#1A1A1A', '#E9E3DB', '#8B4513', '#4682B4', '#556B2F', '#D2B48C', '#FFFFFF'].map((color, idx) => (
                      <button 
                        key={idx}
                        className="w-6 h-6 border border-[#C4BEB6]/60 rounded-none hover:border-[#1A1A1A] transition-colors relative flex items-center justify-center"
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${idx}`}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRICE FILTER (Square Checkboxes) */}
            <div className="border-b border-[#C4BEB6]/40 pb-6">
              <button 
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group"
              >
                <span className="font-bold text-sm tracking-wide uppercase">Price</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isPriceOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isPriceOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-3 pt-3 overflow-hidden"
                  >
                    {['Under $50', '$50 - $100', '$100 - $200', 'Over $200'].map((price) => (
                      <button 
                        key={price}
                        onClick={() => setActivePrice(activePrice === price ? null : price)}
                        className="flex items-center gap-3 text-sm group"
                      >
                        <div className={`w-4 h-4 border rounded-none flex items-center justify-center transition-colors ${activePrice === price ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-[#C4BEB6]/60 group-hover:border-[#1A1A1A]'}`}>
                          {activePrice === price && <Check size={12} className="text-white" />}
                        </div>
                        <span className={`transition-colors ${activePrice === price ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]'}`}>
                          {price}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </aside>

        {/* RIGHT CONTENT (Product Grid) */}
        <div className="lg:col-span-3 flex flex-col">
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
          >
            {products.map((product) => (
              <motion.div 
                key={product.id} 
                variants={itemVariants} 
                className="group flex flex-col cursor-pointer" 
                onMouseEnter={() => setIsHovered(product.id)} 
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Image Container - Sharp Edges */}
                <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 rounded-none overflow-hidden mb-5">
                  
                  {/* Square Tag */}
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-none text-[9px] font-black tracking-widest uppercase text-[#1A1A1A] z-10 shadow-sm border border-[#1A1A1A]/10">
                      New
                    </span>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply" 
                  />
                  
                  <AnimatePresence>
                    {isHovered === product.id && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 10 }} 
                        transition={{ duration: 0.3 }} 
                        className="absolute inset-x-4 bottom-4 z-20"
                      >
                        {/* Sharp Box Quick Add Button */}
                        <button className="w-full bg-[#1A1A1A] text-white py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-lg rounded-none border border-transparent hover:border-[#1A1A1A]">
                          <Plus size={16} /> Quick Add
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                
                <div className="flex flex-col gap-1 px-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm font-medium text-[#1A1A1A] shrink-0">
                      ${product.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[11px] text-[#1A1A1A]/50 font-medium uppercase tracking-wider mt-1">
                    <Star size={12} className="fill-[#C4BEB6] text-[#C4BEB6]" />
                    <span>{product.rating}</span> 
                    <span>({product.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* SQUARE PAGINATION */}
          <div className="flex items-center justify-between w-full mt-16 pt-8 border-t border-[#C4BEB6]/40">
            <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
              <ArrowLeft size={16} /> Previous
            </button>
            
            <div className="hidden md:flex items-center gap-2">
              {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                <button 
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-none text-sm font-bold transition-all border ${
                    page === 1 
                    ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                    : 'border-transparent text-[#1A1A1A]/60 hover:border-[#C4BEB6] hover:text-[#1A1A1A]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">
              Next <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default KidsPage;