import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Recommendations = () => {
  // Reference for the scrolling container
  const sliderRef = useRef(null);

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
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Pleated Wide-Leg Trouser',
      category: 'Bottoms',
      price: '89.90',
      rating: 4.8,
      reviews: '850',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Ribbed Silk Turtleneck',
      category: 'Knitwear',
      price: '110.00',
      rating: 4.9,
      reviews: '2.1k',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      category: 'Accessories',
      price: '220.00',
      rating: 5.0,
      reviews: '3.4k',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Classic Cotton Trench',
      category: 'Outerwear',
      price: '195.00',
      rating: 4.7,
      reviews: '412',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans antialiased overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header & Navigation Arrows */}
        <div className="flex justify-between items-end mb-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight"
          >
            Explore our recommendations
          </motion.h2>
          
          <div className="hidden md:flex gap-4 pb-2">
            <button 
              onClick={() => scroll('left')}
              className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
              aria-label="Scroll Right"
            >
              <ArrowRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Slider */}
        <div className="relative w-full">
          {/* 
            Hide scrollbar CSS:
            We use standard Tailwind classes but to hide the scrollbar completely 
            you can add a custom utility in your globals.css:
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] snap-start flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] md:aspect-square bg-[#E9E3DB]/40 rounded-3xl overflow-hidden mb-5 p-4 flex items-center justify-center">
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase text-[#1A1A1A] z-10 shadow-sm">
                    {product.category}
                  </span>
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-1 px-1">
                  
                  {/* Title & Price Row */}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-[#1A1A1A] text-base leading-tight truncate">
                      {product.name}
                    </h3>
                    <span className="font-black text-[#1A1A1A] text-base shrink-0">
                      ${product.price}
                    </span>
                  </div>

                  {/* Rating Row */}
                  <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A]/50 font-medium mb-6">
                    <Star size={14} className="fill-[#C4BEB6] text-[#C4BEB6]" />
                    <span className="text-[#1A1A1A] font-bold">{product.rating}</span> 
                    ({product.reviews} Reviews)
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 py-3 rounded-full border border-[#C4BEB6] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider hover:border-[#1A1A1A] transition-colors text-center whitespace-nowrap">
                      Add to Cart
                    </button>
                    <button className="flex-1 py-3 rounded-full bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1A1A1A]/80 transition-colors text-center shadow-md whitespace-nowrap">
                      Buy Now
                    </button>
                  </div>

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