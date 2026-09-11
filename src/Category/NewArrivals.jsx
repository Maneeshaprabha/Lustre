import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Plus, Search, Check, ArrowLeft, ArrowRight, X, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Bottom components
import Recommendations from './Recommendations';

const NewArrivals = () => {
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();

  // --- Layout Visibility States ---
  const [showDesktopFilters, setShowDesktopFilters] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Toggle States
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Active Filter States
  const [activeCategory, setActiveCategory] = useState('All Arrivals');
  const [activeColors, setActiveColors] = useState([]);
  const [activePrice, setActivePrice] = useState(null);
  const [sortOption, setSortOption] = useState('Featured');

  // New Arrivals products (All have isNew: true by default conceptually)
  const products = [
    { id: 101, name: "Asymmetric Silk Midi Dress", price: "420.00", priceNumber: 420, category: "Womenswear", colorHex: "#1A1A1A", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 5.0, reviews: 12 },
    { id: 102, name: "Double-Breasted Wool Coat", price: "650.00", priceNumber: 650, category: "Menswear", colorHex: "#8B4513", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 4.8, reviews: 8 },
    { id: 103, name: "Calfskin Leather Crossbody", price: "380.00", priceNumber: 380, category: "Accessories", colorHex: "#E9E3DB", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 4.9, reviews: 24 },
    { id: 104, name: "Oversized Cashmere Scarf", price: "185.00", priceNumber: 185, category: "Accessories", colorHex: "#C0C0C0", image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 5.0, reviews: 31 },
    { id: 105, name: "Pleated Wide-Leg Trouser", price: "210.00", priceNumber: 210, category: "Womenswear", colorHex: "#1A1A1A", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 4.7, reviews: 15 },
    { id: 106, name: "Minimalist Chelsea Boots", price: "320.00", priceNumber: 320, category: "Footwear", colorHex: "#1A1A1A", image: "https://images.unsplash.com/photo-1614252209825-92576b51c103?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 4.8, reviews: 19 },
    { id: 107, name: "Heavyweight Cotton Hoodie", price: "145.00", priceNumber: 145, category: "Menswear", colorHex: "#FFFFFF", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 4.6, reviews: 42 },
    { id: 108, name: "Geometric Gold Cuff", price: "275.00", priceNumber: 275, category: "Jewelry", colorHex: "#D4AF37", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", isNew: true, rating: 4.9, reviews: 7 }
  ];

  // --- FILTERING LOGIC ---
  const filteredProducts = products.filter(product => {
    const matchCategory = activeCategory === 'All Arrivals' || product.category === activeCategory;
    const matchColor = activeColors.length === 0 || activeColors.includes(product.colorHex);
    let matchPrice = true;
    if (activePrice === 'Under $200') matchPrice = product.priceNumber < 200;
    else if (activePrice === '$200 - $400') matchPrice = product.priceNumber >= 200 && product.priceNumber <= 400;
    else if (activePrice === 'Over $400') matchPrice = product.priceNumber > 400;
    return matchCategory && matchColor && matchPrice;
  });

  // --- SORTING LOGIC ---
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price: Low to High') return a.priceNumber - b.priceNumber;
    if (sortOption === 'Price: High to Low') return b.priceNumber - a.priceNumber;
    // For 'New Arrivals', everything is new, so 'Featured' or 'Newest' doesn't change much, but keeping the logic intact.
    return 0; 
  });

  const toggleColor = (color) => {
    setActiveColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };

  // --- REUSABLE FILTER COMPONENT ---
  const renderFilters = () => (
    <div className="flex flex-col gap-8 w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1A1A1A]/40" size={16} />
        <input 
          type="text" 
          placeholder="Search latest arrivals..." 
          className="w-full bg-transparent border border-[#C4BEB6]/60 p-3.5 pl-12 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-6">
        {/* CATEGORY FILTER */}
        <div className="border-b border-[#C4BEB6]/40 pb-6">
          <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group">
            <span className="font-bold text-sm tracking-wide uppercase">Category</span>
            <ChevronDown size={16} className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isCategoryOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col overflow-hidden pt-3 gap-2">
                {['All Arrivals', 'Womenswear', 'Menswear', 'Accessories', 'Footwear', 'Jewelry'].map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-left py-1 text-sm font-medium transition-colors flex items-center rounded-none ${activeCategory === cat ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}>
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* COLOR FILTER */}
        <div className="border-b border-[#C4BEB6]/40 pb-6">
          <button onClick={() => setIsColorOpen(!isColorOpen)} className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group">
            <span className="font-bold text-sm tracking-wide uppercase">Color</span>
            <ChevronDown size={16} className={`transition-transform duration-300 ${isColorOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isColorOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-wrap gap-3 pt-3 overflow-hidden">
                {['#1A1A1A', '#8B4513', '#D4AF37', '#C0C0C0', '#E9E3DB', '#FFFFFF'].map((color, idx) => {
                  const isActive = activeColors.includes(color);
                  return (
                    <button 
                      key={idx} onClick={() => toggleColor(color)} 
                      className={`w-6 h-6 border rounded-none hover:border-[#1A1A1A] transition-colors relative flex items-center justify-center ${isActive ? 'border-[#1A1A1A] ring-1 ring-offset-1 ring-[#1A1A1A]' : 'border-[#C4BEB6]/60'}`} 
                      style={{ backgroundColor: color }} aria-label={`Color ${idx}`}
                    />
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PRICE FILTER */}
        <div className="border-b border-[#C4BEB6]/40 pb-6">
          <button onClick={() => setIsPriceOpen(!isPriceOpen)} className="flex items-center justify-between w-full pb-2 rounded-none transition-colors group">
            <span className="font-bold text-sm tracking-wide uppercase">Price</span>
            <ChevronDown size={16} className={`transition-transform duration-300 ${isPriceOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isPriceOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-3 pt-3 overflow-hidden">
                {['Under $200', '$200 - $400', 'Over $400'].map((price) => (
                  <button key={price} onClick={() => setActivePrice(activePrice === price ? null : price)} className="flex items-center gap-3 text-sm group rounded-none">
                    <div className={`w-4 h-4 border rounded-none flex items-center justify-center transition-colors ${activePrice === price ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-[#C4BEB6]/60 group-hover:border-[#1A1A1A]'}`}>
                      {activePrice === price && <Check size={12} className="text-white" />}
                    </div>
                    <span className={`transition-colors ${activePrice === price ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]'}`}>{price}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* 1. MODERN EDITORIAL HERO SECTION */}
        <section className="w-full pt-32 pb-16 px-6 md:px-12 bg-white">
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="flex flex-col w-full md:w-1/2 lg:w-3/5">
              <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-10">
                <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
                <span className="mx-3">/</span>
                <Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">Shop</Link>
                <span className="mx-3">/</span>
                <span className="text-[#1A1A1A]">New Arrivals</span>
              </nav>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6 text-[#1A1A1A]">
                The <br className="hidden md:block"/> Latest.
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-md text-sm md:text-base text-[#1A1A1A]/70 font-medium leading-relaxed">
                Discover the newest additions to the Lustre collection. Uncompromised designs, fresh silhouettes, and the season's most coveted pieces.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1, ease: "easeOut" }} className="hidden md:block w-full md:w-1/2 lg:w-2/5 aspect-[4/3] bg-[#E9E3DB] overflow-hidden rounded-none">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop" alt="Latest Fashion Arrivals" className="w-full h-full object-cover object-top grayscale-[15%] hover:scale-105 transition-transform duration-1000" />
            </motion.div>
          </div>
        </section>

        {/* 2. STICKY FILTER & SORT BAR */}
        <div className="sticky top-[88px] z-30 w-full bg-white border-y border-[#E9E3DB] px-6 md:px-12 py-5 flex justify-between items-center transition-all">
          <div className="max-w-[1500px] mx-auto w-full flex justify-between items-center">
            
            {/* MOBILE Filter Button */}
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex lg:hidden items-center gap-3 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors"
            >
              <SlidersHorizontal size={16} strokeWidth={2} /> Filters
            </button>

            {/* DESKTOP Filter Toggle */}
            <button 
              onClick={() => setShowDesktopFilters(!showDesktopFilters)}
              className="hidden lg:flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors"
            >
              <SlidersHorizontal size={16} strokeWidth={2} /> Filters
            </button>
            
            {/* Right Side: Count & Sort Dropdown */}
            <div className="flex items-center gap-6 md:gap-10 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">
              <span className="text-[#1A1A1A]/40 hidden sm:block">
                {sortedProducts.length} Products
              </span>
              
              <div className="relative">
                <button onClick={() => setIsSortOpen(!isSortOpen)} className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">
                  Sort: {sortOption === 'Featured' ? 'Sort By' : sortOption} <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isSortOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute right-0 top-full mt-4 w-48 bg-white border border-[#C4BEB6]/40 shadow-xl z-50 flex flex-col">
                      {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                        <button 
                          key={option} onClick={() => { setSortOption(option); setIsSortOpen(false); }}
                          className={`text-left px-4 py-3 text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:bg-[#E9E3DB]/30 ${sortOption === option ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/50'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE FILTER DRAWER --- */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                onClick={() => setIsMobileFilterOpen(false)} 
                className="fixed inset-0 bg-[#1A1A1A]/50 z-40 lg:hidden backdrop-blur-sm"
              />
              <motion.div 
                initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col overflow-y-auto lg:hidden"
              >
                <div className="flex justify-between items-center p-6 border-b border-[#C4BEB6]/40 sticky top-0 bg-white z-10">
                  <span className="font-bold tracking-[0.15em] uppercase text-[#1A1A1A]">Filters</span>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-[#E9E3DB] transition-colors rounded-none">
                    <X size={20} className="text-[#1A1A1A]" />
                  </button>
                </div>
                <div className="p-6 flex-1">
                  {renderFilters()}
                </div>
                <div className="p-6 border-t border-[#C4BEB6]/40 sticky bottom-0 bg-white">
                  <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-[#1A1A1A] text-white py-4 font-bold tracking-[0.15em] uppercase text-xs rounded-none">
                    Show {sortedProducts.length} Results
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* 3. MAIN LAYOUT (Sidebar + Grid) */}
        <main className={`max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 ${showDesktopFilters ? 'lg:grid-cols-4' : 'lg:grid-cols-1'} gap-10 mt-12 md:mt-20 pb-24 transition-all duration-500`}>
          
          {/* DESKTOP SIDEBAR */}
          <AnimatePresence>
            {showDesktopFilters && (
              <motion.aside 
                initial={{ width: 0, opacity: 0 }} 
                animate={{ width: 'auto', opacity: 1 }} 
                exit={{ width: 0, opacity: 0, overflow: 'hidden' }}
                className="hidden lg:flex flex-col gap-8 col-span-1"
              >
                {renderFilters()}
              </motion.aside>
            )}
          </AnimatePresence>

          {/* RIGHT CONTENT (Product Grid) */}
          <div className={`flex flex-col ${showDesktopFilters ? 'lg:col-span-3' : 'w-full'}`}>
            
            {sortedProducts.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center py-20">
                <p className="text-[#1A1A1A]/50 text-lg font-medium">No products match your selected filters.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('All Arrivals'); setActiveColors([]); setActivePrice(null); setSortOption('Featured');
                  }}
                  className="mt-4 border-b border-[#1A1A1A] text-[#1A1A1A] text-sm font-bold uppercase tracking-widest pb-1 hover:text-[#1A1A1A]/60 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <motion.div 
                variants={containerVariants} initial="hidden" animate="visible" 
                className={`grid grid-cols-1 sm:grid-cols-2 ${showDesktopFilters ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-x-6 gap-y-16 transition-all duration-500`}
              >
                {sortedProducts.map((product) => (
                  <motion.div key={product.id} variants={itemVariants} className="group flex flex-col relative" onMouseEnter={() => setIsHovered(product.id)} onMouseLeave={() => setIsHovered(null)}>
                    
                    <Link to={`/product/${product.id}`} className="block w-full cursor-pointer">
                      <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 overflow-hidden mb-5 rounded-none">
                        {product.isNew && <span className="absolute top-4 left-4 bg-white text-[#1A1A1A] px-3 py-1 text-[9px] font-black tracking-widest uppercase z-10 shadow-sm rounded-none">New</span>}
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply" />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                      
                      <div className="flex flex-col gap-1.5 px-1">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">{product.name}</h3>
                          <span className="text-sm font-medium text-[#1A1A1A] shrink-0">${product.price}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-[#1A1A1A]/50 font-medium uppercase tracking-wider mt-1">
                          <Star size={12} className="fill-[#C4BEB6] text-[#C4BEB6]" />
                          <span>{product.rating}</span> 
                          <span>({product.reviews})</span>
                        </div>
                      </div>
                    </Link>

                    <AnimatePresence>
                      {isHovered === product.id && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3 }} className="absolute inset-x-4 bottom-[80px] z-20 pointer-events-auto">
                          <button onClick={(e) => { e.preventDefault(); navigate(`/product/${product.id}`); }} className="w-full bg-[#1A1A1A] text-white py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-lg rounded-none border border-transparent hover:border-[#1A1A1A]">
                            <Plus size={16} /> Quick Add
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SQUARE PAGINATION */}
            {sortedProducts.length > 0 && (
              <div className="flex items-center justify-between w-full mt-20 pt-8 border-t border-[#C4BEB6]/40">
                <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors rounded-none"><ArrowLeft size={16} /> Previous</button>
                <div className="hidden md:flex items-center gap-2">
                  {[1, 2, 3].map((page, index) => (
                    <button key={index} className={`w-10 h-10 flex items-center justify-center rounded-none text-sm font-bold transition-all border ${page === 1 ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' : 'border-transparent text-[#1A1A1A]/60 hover:border-[#C4BEB6] hover:text-[#1A1A1A]'}`}>
                      {page}
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors rounded-none">Next <ArrowRight size={16} /></button>
              </div>
            )}

          </div>
        </main>
      </div>

      <Recommendations />
    </>
  );
};

export default NewArrivals;