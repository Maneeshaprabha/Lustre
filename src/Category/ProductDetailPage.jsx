import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Heart, ShoppingBag, Truck, RefreshCcw, ShieldCheck, 
  Ruler, ArrowDown, Search, ArrowRight, Maximize, Feather, 
  Scissors, Box, Leaf, Globe, Droplet, Shield, User, MoveHorizontal, X
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  // Scroll to top when page loads or ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Product Data
  const product = {
    name: "Essential Oversized Hoodie",
    price: 59.99,
    originalPrice: 89.99,
    discount: "33% OFF",
    rating: 4.8,
    reviews: 128,
    description: "Premium heavyweight cotton hoodie with an oversized fit for ultimate comfort and modern style. Designed to be a versatile, seasonless staple for the modern wardrobe.",
    colors: [
      { name: 'Onyx Black', hex: '#1A1A1A' },
      { name: 'Rich Brown', hex: '#3d352e' },
      { name: 'Warm Sand', hex: '#E9E3DB' },
      { name: 'Heather Gray', hex: '#BDBDBD' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop", // Main
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1000&auto=format&fit=crop", // Alt 1
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop", // Alt 2
      "https://images.unsplash.com/photo-1572495532056-8583af1cbf11?q=80&w=1000&auto=format&fit=crop"  // Detail
    ]
  };

  const relatedProducts = [
    { id: 101, name: "Minimal Hoodie", price: "54.99", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
    { id: 102, name: "Classic Sweatshirt", price: "49.99", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" },
    { id: 103, name: "Zip Up Hoodie", price: "64.99", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
    { id: 104, name: "Essential Knit", price: "59.99", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" }
  ];

  // State
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('Details');
  
  // Modals State
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        size={14} 
        className={index < rating ? "text-[#3d352e] fill-[#3d352e]" : "text-[#C4BEB6] fill-[#C4BEB6]"} 
      />
    ));
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased relative">
      
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#1A1A1A] text-white py-2 px-6 flex justify-between items-center text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-[88px]">
        <div className="hidden md:block w-20" />
        <div className="flex items-center justify-center flex-1 gap-2">
          <Truck size={14} /> Free Shipping on orders over $150
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-4 text-[#C4BEB6]">
          <span>USD $</span>
        </div>
      </div>

      {/* Main Product Section */}
      <main className="max-w-[1500px] mx-auto px-6 md:px-12 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* LEFT: Image Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 h-[60vh] md:h-[80vh]">
          {/* Vertical Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-auto hide-scrollbar w-full md:w-24 shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`relative w-full aspect-[3/4] overflow-hidden rounded-none border-2 transition-colors ${activeImage === idx ? 'border-[#3d352e]' : 'border-transparent hover:border-[#C4BEB6]/60'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                {activeImage === idx && <div className="absolute inset-0 bg-[#1A1A1A]/10 pointer-events-none" />}
              </button>
            ))}
            <button className="w-full aspect-[3/4] border border-[#C4BEB6]/40 flex items-center justify-center text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors rounded-none">
              <ArrowDown size={20} />
            </button>
          </div>

          {/* Main Large Image */}
          <div className="relative w-full h-full bg-[#E9E3DB]/30 rounded-none overflow-hidden group">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.images[activeImage]} 
              alt={product.name}
              className="w-full h-full object-cover object-center cursor-zoom-in"
              onClick={() => setIsImageZoomed(true)}
            />
            {/* Zoom Icon */}
            <button 
              onClick={() => setIsImageZoomed(true)}
              className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-none shadow-lg flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors border border-[#C4BEB6]/30 z-10"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          
          {/* Tag & Title */}
          <div className="mb-6">
            <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-4">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-[#1A1A1A]">Hoodies</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-4 uppercase text-[#1A1A1A]">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-[#1A1A1A]">
              <div className="flex gap-0.5">
                {renderStars(product.rating)}
              </div>
              <span className="font-bold ml-1">{product.rating}</span>
              <span className="text-[#1A1A1A]/50">({product.reviews} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-black text-[#3d352e]">${product.price}</span>
            <span className="text-lg text-[#1A1A1A]/40 line-through font-medium">${product.originalPrice}</span>
            <span className="bg-[#3d352e] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-none">
              {product.discount}
            </span>
          </div>

          <p className="text-[#1A1A1A]/70 text-sm font-medium leading-relaxed mb-8 border-b border-[#C4BEB6]/40 pb-8">
            {product.description}
          </p>

          {/* Color Selector */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-[#1A1A1A]">
              Color: <span className="text-[#1A1A1A]/50 font-medium ml-1">{selectedColor.name}</span>
            </h3>
            <div className="flex gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-none border-2 transition-all p-0.5 ${selectedColor.name === color.name ? 'border-[#3d352e]' : 'border-transparent hover:border-[#C4BEB6]'}`}
                  aria-label={color.name}
                >
                  <div className="w-full h-full rounded-none" style={{ backgroundColor: color.hex }} />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
                Size: <span className="text-[#1A1A1A]/50 font-medium ml-1">{selectedSize}</span>
              </h3>
              {/* OPEN MODAL ON CLICK */}
              <button 
                onClick={() => setIsSizeGuideOpen(true)} 
                className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#3d352e] transition-colors border-b border-[#1A1A1A] hover:border-[#3d352e] pb-0.5"
              >
                <Ruler size={12} /> Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-bold tracking-wider transition-all border rounded-none ${selectedSize === size ? 'border-[#3d352e] bg-[#3d352e] text-white' : 'border-[#C4BEB6]/60 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="flex-1 bg-[#3d352e] text-white py-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] border border-[#3d352e] transition-colors rounded-none shadow-xl">
              <ShoppingBag size={18} /> Add to Cart
            </button>
            <button className="w-14 shrink-0 border border-[#C4BEB6]/60 flex items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A] hover:text-[#3d352e] transition-colors rounded-none">
              <Heart size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-[#C4BEB6]/40">
            <div className="flex flex-col gap-1 items-start">
              <Truck size={18} className="text-[#1A1A1A] mb-1" strokeWidth={1.5} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Free Shipping</span>
              <span className="text-[9px] text-[#1A1A1A]/50 font-medium">On orders over $150</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <RefreshCcw size={18} className="text-[#1A1A1A] mb-1" strokeWidth={1.5} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Easy Returns</span>
              <span className="text-[9px] text-[#1A1A1A]/50 font-medium">30-day return policy</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <ShieldCheck size={18} className="text-[#1A1A1A] mb-1" strokeWidth={1.5} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Secure Payment</span>
              <span className="text-[9px] text-[#1A1A1A]/50 font-medium">100% secure checkout</span>
            </div>
          </div>

        </div>
      </main>

      {/* TABS & DETAIL IMAGE SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 border-t border-[#C4BEB6]/40">
        
        {/* Left: Tabs */}
        <div>
          <div className="flex gap-8 border-b border-[#C4BEB6]/40 mb-8 overflow-x-auto hide-scrollbar">
            {['Details', 'Materials', 'Size & Fit', 'Shipping & Returns'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="pdpTabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A]" />
                )}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* DETAILS TAB */}
              {activeTab === 'Details' && (
                <div>
                  <p className="text-[#1A1A1A]/70 text-sm font-medium leading-relaxed mb-8">
                    Crafted from high-quality heavyweight cotton, this hoodie delivers unmatched comfort and durability. The architectural oversized fit and minimal design make it a versatile staple for any modern wardrobe.
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Maximize size={16} className="text-[#1A1A1A]/50" /> Signature oversized fit</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Feather size={16} className="text-[#1A1A1A]/50" /> Premium heavyweight fabric</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Scissors size={16} className="text-[#1A1A1A]/50" /> Adjustable drawstring hood</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Box size={16} className="text-[#1A1A1A]/50" /> Ribbed cuffs and hemline</li>
                  </ul>
                </div>
              )}

              {/* MATERIALS TAB */}
              {activeTab === 'Materials' && (
                <div>
                  <p className="text-[#1A1A1A]/70 text-sm font-medium leading-relaxed mb-8">
                    Our commitment to quality begins with our sourcing. This piece is crafted using sustainable practices and premium raw materials.
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Leaf size={16} className="text-[#1A1A1A]/50" /> 100% Organic Heavyweight Cotton (450 GSM)</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Globe size={16} className="text-[#1A1A1A]/50" /> Sourced from GOTS-certified ethical farms</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Droplet size={16} className="text-[#1A1A1A]/50" /> Dyed using eco-friendly, low-impact dyes</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Shield size={16} className="text-[#1A1A1A]/50" /> Pre-shrunk to maintain shape over time</li>
                  </ul>
                </div>
              )}

              {/* SIZE & FIT TAB */}
              {activeTab === 'Size & Fit' && (
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-[#1A1A1A]/70 text-sm font-medium leading-relaxed mb-6">
                      Designed with an intentional oversized silhouette. If you prefer a more tailored, classic look, we recommend sizing down.
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><User size={16} className="text-[#1A1A1A]/50" /> Model is 6'1" (185cm) and wears a Size Medium</li>
                      <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><MoveHorizontal size={16} className="text-[#1A1A1A]/50" /> Dropped shoulders for a draped look</li>
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="self-start border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors rounded-none"
                  >
                    View Size Chart
                  </button>
                </div>
              )}

              {/* SHIPPING & RETURNS TAB */}
              {activeTab === 'Shipping & Returns' && (
                <div>
                  <p className="text-[#1A1A1A]/70 text-sm font-medium leading-relaxed mb-8">
                    We want you to be completely satisfied with your purchase. Here is everything you need to know about our delivery and return process.
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Truck size={16} className="text-[#1A1A1A]/50" /> Complimentary standard shipping over $150</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><RefreshCcw size={16} className="text-[#1A1A1A]/50" /> 30-day return policy for unworn items</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><ShieldCheck size={16} className="text-[#1A1A1A]/50" /> Lustre tags must remain attached for refunds</li>
                  </ul>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Large Detail Image */}
        <div className="w-full aspect-[4/3] bg-[#E9E3DB]/30 rounded-none overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1572495532056-8583af1cbf11?q=80&w=1200&auto=format&fit=crop" 
            alt="Fabric Detail"
            className="w-full h-full object-cover grayscale-[15%]"
          />
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <section className="w-full bg-[#FBFBFA] py-16 md:py-24 px-6 md:px-12 border-t border-[#C4BEB6]/40">
        <div className="max-w-[1500px] mx-auto">
          
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#1A1A1A]">
              You May <br/>Also Like
            </h2>
            <Link to="/shop" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#3d352e] transition-colors border-b border-[#1A1A1A] hover:border-[#3d352e] pb-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group flex flex-col cursor-pointer">
                
                <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 rounded-none overflow-hidden mb-5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply" 
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                
                <div className="flex justify-between items-start gap-4 px-1">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#3d352e] transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-sm font-black text-[#1A1A1A]">${item.price}</span>
                  </div>
                  <button 
                    onClick={(e) => { e.preventDefault(); /* Add to wishlist logic */ }}
                    className="w-8 h-8 shrink-0 flex items-center justify-end text-[#1A1A1A]/30 hover:text-[#3d352e] transition-colors"
                  >
                    <Heart size={18} strokeWidth={2} />
                  </button>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SIZE GUIDE MODAL */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            
            {/* Backdrop Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="relative w-full max-w-2xl bg-white p-8 md:p-12 shadow-2xl rounded-none z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsSizeGuideOpen(false)} 
                className="absolute top-6 right-6 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors bg-[#FBFBFA] hover:bg-[#E9E3DB] p-2"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 text-[#1A1A1A]">Size Guide</h3>
              <p className="text-[#1A1A1A]/70 text-sm font-medium mb-8">All measurements are provided in inches.</p>

              {/* Modal Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#1A1A1A]">
                      <th className="py-4 px-3 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">Size</th>
                      <th className="py-4 px-3 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">Chest</th>
                      <th className="py-4 px-3 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">Length</th>
                      <th className="py-4 px-3 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-[#1A1A1A]/70">
                    <tr className="border-b border-[#C4BEB6]/40 hover:bg-[#FBFBFA] transition-colors">
                      <td className="py-4 px-3 font-bold text-[#1A1A1A]">S</td>
                      <td className="py-4 px-3">42 - 44</td>
                      <td className="py-4 px-3">27</td>
                      <td className="py-4 px-3">34.5</td>
                    </tr>
                    <tr className="border-b border-[#C4BEB6]/40 hover:bg-[#FBFBFA] transition-colors">
                      <td className="py-4 px-3 font-bold text-[#1A1A1A]">M</td>
                      <td className="py-4 px-3">44 - 46</td>
                      <td className="py-4 px-3">28</td>
                      <td className="py-4 px-3">35.5</td>
                    </tr>
                    <tr className="border-b border-[#C4BEB6]/40 hover:bg-[#FBFBFA] transition-colors">
                      <td className="py-4 px-3 font-bold text-[#1A1A1A]">L</td>
                      <td className="py-4 px-3">46 - 48</td>
                      <td className="py-4 px-3">29</td>
                      <td className="py-4 px-3">36.5</td>
                    </tr>
                    <tr className="border-b border-[#C4BEB6]/40 hover:bg-[#FBFBFA] transition-colors">
                      <td className="py-4 px-3 font-bold text-[#1A1A1A]">XL</td>
                      <td className="py-4 px-3">48 - 50</td>
                      <td className="py-4 px-3">30</td>
                      <td className="py-4 px-3">37.5</td>
                    </tr>
                    <tr className="border-b border-[#C4BEB6]/40 hover:bg-[#FBFBFA] transition-colors">
                      <td className="py-4 px-3 font-bold text-[#1A1A1A]">XXL</td>
                      <td className="py-4 px-3">50 - 52</td>
                      <td className="py-4 px-3">31</td>
                      <td className="py-4 px-3">38.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#C4BEB6]/40">
                <p className="text-xs text-[#1A1A1A]/60 font-medium">
                  Need further assistance with sizing? 
                  <Link 
                    to="/contact" 
                    onClick={() => setIsSizeGuideOpen(false)}
                    className="text-[#3d352e] border-b border-[#3d352e] font-bold pb-0.5 ml-1"
                  >
                    Contact Concierge
                  </Link>
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN IMAGE ZOOM MODAL */}
      <AnimatePresence>
        {isImageZoomed && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
            
            {/* Dark Backdrop Blur for Zoom */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsImageZoomed(false)}
              className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-md cursor-zoom-out"
            />
            
            {/* Zoomed Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="relative w-full h-full max-w-5xl flex items-center justify-center z-10 pointer-events-none"
            >
              <img 
                src={product.images[activeImage]} 
                alt={`${product.name} zoomed view`} 
                className="max-w-full max-h-full object-contain pointer-events-auto"
              />
              
              {/* Close Button for Zoom */}
              <button 
                onClick={() => setIsImageZoomed(false)} 
                className="absolute top-4 right-4 md:-right-12 md:top-0 text-white hover:text-[#C4BEB6] transition-colors pointer-events-auto p-2"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProductDetailPage;