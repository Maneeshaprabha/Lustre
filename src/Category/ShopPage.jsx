import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronRight, Star, SlidersHorizontal, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';

const ShopPage = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Product');

  // Fashion products customized for Lustre
  const products = [
    {
      id: 1,
      name: 'Structured Wool Coat',
      category: 'Outerwear',
      price: '299.90',
      rating: 5.0,
      reviews: '1.2k',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Silk Slip Dress',
      category: 'Dresses',
      price: '120.00',
      rating: 4.8,
      reviews: '850',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Cashmere Knit Sweater',
      category: 'Knitwear',
      price: '189.90',
      rating: 4.9,
      reviews: '2.1k',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Wide Leg Tailored Trousers',
      category: 'Bottoms',
      price: '150.00',
      rating: 4.7,
      reviews: '420',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Minimalist Leather Tote',
      category: 'Accessories',
      price: '350.00',
      rating: 5.0,
      reviews: '1.5k',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Classic Linen Blazer',
      category: 'Outerwear',
      price: '210.00',
      rating: 4.6,
      reviews: '310',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop'
    }
  ];

  // Animation for the product grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased pb-24">
      
      {/* 1. HERO SECTION (Massive Typography Over Image) */}
      <div className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-[#E9E3DB]">
        {/* Luxury Interior/Editorial Background */}
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop" 
          alt="Lustre Shop"
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-80"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/20" /> {/* Dark overlay for text contrast */}
        
        {/* Massive Overlapping Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[20vw] md:text-[18vw] font-black text-white z-10 leading-none tracking-tighter mix-blend-overlay select-none"
        >
          Shop
        </motion.h1>
      </div>

      {/* 2. OVERLAPPING SEARCH & FILTER BAR */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 -mt-8 md:-mt-12 mb-12">
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(26,26,26,0.1)] p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C4BEB6]/30">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A] whitespace-nowrap">
            Curate Your Style
          </h2>
          
          <div className="flex-1 w-full max-w-2xl flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1A1A1A]/40" size={20} />
              <input 
                type="text" 
                placeholder="Search on Lustre..." 
                className="w-full bg-[#E9E3DB]/30 border border-transparent focus:border-[#C4BEB6] rounded-full py-3 pl-12 pr-4 text-sm outline-none transition-colors"
              />
            </div>
            <button className="bg-[#1A1A1A] text-[#E9E3DB] px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#1A1A1A]/80 transition-colors shrink-0">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN LAYOUT (Sidebar + Grid) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* LEFT SIDEBAR (Categories & Filters matching the reference) */}
        <aside className="hidden lg:flex flex-col gap-8">
          
          {/* Category Tree */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <SlidersHorizontal size={20} /> Category
            </h3>
            
            <div className="flex flex-col gap-2">
              {/* Parent Category with Badge */}
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className={`flex items-center justify-between w-full p-3 rounded-xl transition-colors ${isCategoryOpen ? 'bg-[#E9E3DB]/40' : 'hover:bg-[#E9E3DB]/20'}`}
              >
                <span className="flex items-center gap-3 font-bold text-sm">
                  <ShoppingBag size={18} className={isCategoryOpen ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/60'} />
                  All Product
                </span>
                <div className="flex items-center gap-2">
                  {/* Badge matching the reference structure, but styled for luxury */}
                  <span className="bg-[#1A1A1A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">32</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Nested Categories (Visible when open) */}
              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col overflow-hidden pl-6 ml-5 border-l border-[#C4BEB6]/40 mt-2 gap-1"
                  >
                    {['For Women', 'For Men', 'Accessories', 'Footwear'].map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left py-2 text-sm font-medium transition-colors relative flex items-center before:content-[''] before:absolute before:-left-[25px] before:top-1/2 before:w-4 before:h-[1px] before:bg-[#C4BEB6]/40 ${activeCategory === cat ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Other Filter Sections */}
          <div className="flex flex-col gap-2 mt-4">
            {['New Arrival', 'Best Seller', 'On Discount'].map((filter) => (
              <button key={filter} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#E9E3DB]/20 transition-colors group">
                <span className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]">
                  <ChevronRight size={16} className="text-[#C4BEB6] group-hover:text-[#1A1A1A]" /> {filter}
                </span>
                <ChevronDown size={14} className="text-[#1A1A1A]/30 group-hover:text-[#1A1A1A]/60 -rotate-90" />
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT (Product Grid & Pagination) */}
        <div className="lg:col-span-3 flex flex-col">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div 
                key={product.id} 
                variants={itemVariants}
                className="bg-[#FBFBFA] border border-[#C4BEB6]/20 rounded-3xl p-5 flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                {/* Image & Top Tag */}
                <div className="relative w-full aspect-square bg-[#E9E3DB]/30 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-[#1A1A1A] z-10 shadow-sm">
                    {product.category}
                  </span>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-bold text-base text-[#1A1A1A] mb-2 truncate">
                    {product.name}
                  </h3>
                  
                  {/* Rating & Price Row */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A]/60 font-medium">
                      <Star size={14} className="fill-[#1A1A1A] text-[#1A1A1A]" />
                      <span className="text-[#1A1A1A] font-bold">{product.rating}</span> 
                      ({product.reviews} Reviews)
                    </div>
                    <span className="font-black text-lg text-[#1A1A1A]">
                      ${product.price}
                    </span>
                  </div>

                  {/* Dual Action Buttons matching reference */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 py-3 rounded-full border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider hover:bg-[#E9E3DB] transition-colors text-center">
                      Add to Cart
                    </button>
                    <button className="flex-1 py-3 rounded-full bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1A1A1A]/80 transition-colors text-center shadow-md">
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 4. PAGINATION (Bottom) */}
          <div className="flex items-center justify-between w-full mt-16 pt-8 border-t border-[#C4BEB6]/40">
            <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
              <ArrowLeft size={16} /> Previous
            </button>
            
            <div className="hidden md:flex items-center gap-2">
              {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                <button 
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${page === 1 ? 'bg-[#E9E3DB] text-[#1A1A1A]' : 'text-[#1A1A1A]/60 hover:bg-[#E9E3DB]/50 hover:text-[#1A1A1A]'}`}
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
      </div>
    </div>
  );
};

export default ShopPage;