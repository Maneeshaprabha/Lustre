import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Recommendations = () => {
  // Reference for the scrolling container
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Scroll handler for the custom arrows
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Luxury fashion placeholder data tailored for Lustre
  const products = [
    {
      id: 1,
      name: 'Oversized Linen Blazer',
      category: 'Outerwear',
      price: '145.00',
      rating: 5.0,
      reviews: '1.2k',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
      isNew: true
    },
    {
      id: 2,
      name: 'Pleated Wide-Leg Trouser',
      category: 'Bottoms',
      price: '89.90',
      rating: 4.8,
      reviews: '850',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
      isNew: false
    },
    {
      id: 3,
      name: 'Ribbed Silk Turtleneck',
      category: 'Knitwear',
      price: '110.00',
      rating: 4.9,
      reviews: '2.1k',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
      isNew: false
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      category: 'Accessories',
      price: '220.00',
      rating: 5.0,
      reviews: '3.4k',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
      isNew: true
    },
    {
      id: 5,
      name: 'Classic Cotton Trench',
      category: 'Outerwear',
      price: '195.00',
      rating: 4.7,
      reviews: '412',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
      isNew: false
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans antialiased overflow-hidden border-t border-[#C4BEB6]/30">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Header & Navigation Arrows */}
        <div className="flex justify-between items-end mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] tracking-tight uppercase"
          >
            Explore our recommendations
          </motion.h2>
          
          <div className="hidden md:flex gap-4 pb-1">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#C4BEB6]/60 flex items-center justify-center text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors rounded-none"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#C4BEB6]/60 flex items-center justify-center text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors rounded-none"
              aria-label="Scroll Right"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Slider */}
        <div className="relative w-full">
          {/* 
            Hide scrollbar CSS is applied inline. 
            Ensure standard behavior using tailwind snap classes.
          */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-10 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="min-w-[260px] md:min-w-[300px] snap-start flex flex-col group relative"
              >
                {/* Product Link Wrapper */}
                <Link to={`/product/${product.id}`} className="block w-full cursor-pointer">
                  
                  {/* Image Container - Sharp Edges, 3:4 Aspect Ratio */}
                  <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 rounded-none overflow-hidden mb-5">
                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-none text-[9px] font-black tracking-widest uppercase text-[#1A1A1A] z-10 shadow-sm border border-[#1A1A1A]/10">
                      {product.category}
                    </span>
                    
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply"
                    />
                    
                    {/* Gradient overlay for depth on hover */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Product Details */}
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
                </Link>

                {/* Sharp Box Dual Action Buttons */}
                <div className="flex gap-2 mt-5 w-full">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Added ${product.name} to cart`);
                    }}
                    className="flex-1 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors text-center rounded-none"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product/${product.id}`);
                    }}
                    className="flex-1 py-3 bg-[#1A1A1A] border border-[#1A1A1A] text-white text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors text-center rounded-none"
                  >
                    Buy Now
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Recommendations;