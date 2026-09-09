import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Heart, ShoppingBag, Truck, RefreshCcw, ShieldCheck, 
  Ruler, ArrowDown, ChevronRight, Box, Feather, Scissors, Maximize 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ProductDetailPage = () => {
  // Product Data
  const product = {
    name: "Essential Oversized Hoodie",
    price: 59.99,
    originalPrice: 89.99,
    discount: "33% OFF",
    rating: 4.8,
    reviews: 128,
    description: "Premium heavyweight cotton hoodie with an oversized fit for ultimate comfort and modern style. Designed to be a versatile staple for any wardrobe.",
    colors: [
      { name: 'Charcoal Gray', hex: '#333333' },
      { name: 'Heather Gray', hex: '#BDBDBD' },
      { name: 'Warm Sand', hex: '#E6D5C3' },
      { name: 'Onyx Black', hex: '#111111' }
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
    { id: 1, name: "Minimal Hoodie", price: "54.99", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Classic Sweatshirt", price: "49.99", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Zip Up Hoodie", price: "64.99", image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Essential Hoodie", price: "59.99", image: "https://images.unsplash.com/photo-1572495532056-8583af1cbf11?q=80&w=800&auto=format&fit=crop" }
  ];

  // State
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('Details');

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
      
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#1A1A1A] text-[#E9E3DB] py-2 px-6 flex justify-between items-center text-[10px] md:text-xs font-bold tracking-widest uppercase">
        <div className="hidden md:block w-20" /> {/* Spacer */}
        <div className="flex items-center justify-center flex-1 gap-2">
          <Truck size={14} /> Free Shipping on orders over $99
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          USD $ <ChevronDown size={12} />
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
                className={`relative w-full aspect-[3/4] overflow-hidden rounded-none border-2 transition-colors ${activeImage === idx ? 'border-[#1A1A1A]' : 'border-transparent hover:border-[#C4BEB6]'}`}
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
              className="w-full h-full object-cover object-center"
            />
            {/* Zoom Icon (Bottom Right) */}
            <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-none shadow-lg flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          
          {/* Tag & Title */}
          <div className="mb-6">
            <span className="inline-block bg-[#E9E3DB] text-[#1A1A1A] px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-4 rounded-none">
              New Arrival
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 text-sm text-[#1A1A1A]">
              <div className="flex text-[#1A1A1A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <span className="font-bold">{product.rating}</span>
              <span className="text-[#1A1A1A]/50">({product.reviews} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-lg text-[#1A1A1A]/40 line-through">${product.originalPrice}</span>
            <span className="bg-[#1A1A1A] text-white text-[10px] font-bold tracking-widest px-2 py-1 uppercase rounded-none">
              {product.discount}
            </span>
          </div>

          <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-8 border-b border-[#C4BEB6]/40 pb-8">
            {product.description}
          </p>

          {/* Color Selector (Square format for Lustre aesthetic) */}
          <div className="mb-8">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4">
              Color: <span className="text-[#1A1A1A]/60 font-medium ml-1">{selectedColor.name}</span>
            </h3>
            <div className="flex gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-none border-2 transition-all p-0.5 ${selectedColor.name === color.name ? 'border-[#1A1A1A]' : 'border-transparent hover:border-[#C4BEB6]'}`}
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
              <h3 className="text-xs font-bold tracking-widest uppercase">
                Size: <span className="text-[#1A1A1A]/60 font-medium ml-1">{selectedSize}</span>
              </h3>
              <button className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors border-b border-[#1A1A1A] pb-0.5">
                <Ruler size={12} /> Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-bold tracking-wider transition-all border rounded-none ${selectedSize === size ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' : 'border-[#C4BEB6]/60 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="flex-1 bg-[#1A1A1A] text-white py-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A]/80 transition-colors rounded-none">
              <ShoppingBag size={18} /> Add to Cart
            </button>
            <button className="w-14 shrink-0 border border-[#C4BEB6]/60 flex items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors rounded-none">
              <Heart size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-[#C4BEB6]/40">
            <div className="flex flex-col gap-1 items-start">
              <Truck size={18} className="text-[#1A1A1A] mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Free Shipping</span>
              <span className="text-[9px] text-[#1A1A1A]/50">On orders over $99</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <RefreshCcw size={18} className="text-[#1A1A1A] mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Easy Returns</span>
              <span className="text-[9px] text-[#1A1A1A]/50">30-day return policy</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <ShieldCheck size={18} className="text-[#1A1A1A] mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Secure Payment</span>
              <span className="text-[9px] text-[#1A1A1A]/50">100% secure checkout</span>
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
                className={`pb-4 text-xs font-bold tracking-widest uppercase transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A]" />
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
              {activeTab === 'Details' && (
                <div>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-8">
                    Crafted from high-quality heavyweight cotton, this hoodie delivers unmatched comfort and durability. The oversized fit and minimal design make it a versatile staple for any wardrobe.
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Maximize size={16} className="text-[#1A1A1A]/50" /> Oversized fit</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Feather size={16} className="text-[#1A1A1A]/50" /> Soft & heavyweight fabric</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Scissors size={16} className="text-[#1A1A1A]/50" /> Adjustable drawstring hood</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]"><Box size={16} className="text-[#1A1A1A]/50" /> Ribbed cuffs and hem</li>
                  </ul>
                </div>
              )}
              {/* Other tab contents would go here... */}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Large Detail Image */}
        <div className="w-full aspect-[4/3] bg-[#E9E3DB]/30 rounded-none overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1572495532056-8583af1cbf11?q=80&w=1200&auto=format&fit=crop" 
            alt="Fabric Detail"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-[#C4BEB6]/40">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">You May Also Like</h2>
          <Link to="/shop" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors border-b border-[#1A1A1A] pb-0.5">
            View All <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 rounded-none overflow-hidden mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#1A1A1A]/60 transition-colors">{item.name}</h3>
                  <span className="text-sm font-medium text-[#1A1A1A]">${item.price}</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductDetailPage;