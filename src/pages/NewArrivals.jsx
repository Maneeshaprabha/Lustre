import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';

const NewArrivalsModern = () => {
  const products = [
    {
      id: 1,
      name: 'Colette Sweetheart Midi Dress',
      price: '20.00',
      originalPrice: '30.00',
      discount: '10% OFF',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Ribbed Knit Zip Sweater',
      price: '20.00',
      originalPrice: '30.00',
      discount: '10% OFF',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'High Waist Wide Leg Denim',
      price: '20.00',
      originalPrice: '30.00',
      discount: '10% OFF',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        size={12} 
        className={index < rating ? "text-[#1A1A1A] fill-[#1A1A1A]" : "text-[#C4BEB6]"} 
        strokeWidth={index < rating ? 0 : 1.5}
      />
    ));
  };

  return (
    <section className="w-full bg-[#E9E3DB] py-20 px-6 md:px-12 font-sans antialiased overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Modern Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-2"
            >
              New Arrivals
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "60px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-[3px] bg-[#1A1A1A]"
            />
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative pb-1 overflow-hidden text-[#1A1A1A] font-bold text-xs tracking-[0.2em] uppercase"
          >
            Explore All
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1A1A1A] transform origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C4BEB6] transform origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </motion.button>
        </div>

        {/* Editorial Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container - Tall Editorial Aspect Ratio */}
              <div className="relative w-full aspect-[3/4] bg-white overflow-hidden mb-5">
                
                {/* Minimalist Discount Tag */}
                <div className="absolute top-4 left-4 bg-[#C4BEB6] text-[#1A1A1A] px-3 py-1.5 text-[9px] font-black tracking-[0.2em] uppercase z-10 shadow-sm">
                  {product.discount}
                </div>

                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Modern Floating Action Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,0.46,0.45,0.94] z-20">
                  <button className="w-full bg-[#1A1A1A] text-[#E9E3DB] py-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase hover:bg-[#1A1A1A]/90 transition-colors">
                    <Plus size={16} /> Quick Add
                  </button>
                </div>
                
                {/* Subtle gradient overlay to make the button pop when sliding up */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Product Info - Cleanly separated from the image */}
              <div className="flex flex-col gap-1.5 px-1">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-base font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/70 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex gap-0.5 pt-1 shrink-0">
                    {renderStars(product.rating)}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm font-black text-[#1A1A1A]">
                    ${product.price}
                  </span>
                  <span className="text-xs text-[#1A1A1A]/50 line-through font-medium">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default NewArrivalsModern;