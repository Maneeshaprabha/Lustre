import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        className={index < rating ? "text-[#3d352e] fill-[#3d352e]" : "text-[#C4BEB6]"} 
        strokeWidth={index < rating ? 0 : 1.5}
      />
    ));
  };

  return (
    <section className="w-full bg-[#FBFBFA] border-y border-[#C4BEB6]/30 py-24 px-6 md:px-12 font-sans antialiased overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Modern Header Section with Paragraph */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pr-4 md:pr-0">
          <div className="flex flex-col gap-4 max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-1"
            >
              New Arrivals
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-[3px] bg-[#3d352e]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[#1A1A1A]/70 text-sm md:text-base font-medium leading-relaxed mt-2"
            >
              Discover the latest additions to the Lustre archive. Fresh silhouettes, premium textures, and uncompromised craftsmanship designed for the modern wardrobe.
            </motion.p>
          </div>
          
          <Link to="/new-arrivals">
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative pb-1 overflow-hidden text-[#3d352e] font-bold text-xs tracking-[0.2em] uppercase mb-2 md:mb-0"
            >
              Explore All
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#3d352e] transform origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C4BEB6] transform origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.button>
          </Link>
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
              className="group flex flex-col cursor-pointer relative"
            >
              
              <Link to={`/product/${product.id}`} className="block w-full">
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] bg-[#E9E3DB]/30 overflow-hidden mb-5 rounded-none border border-transparent group-hover:border-[#C4BEB6]/30 transition-colors">
                  
                  {/* Minimalist Discount Tag */}
                  <div className="absolute top-4 left-4 bg-[#3d352e] text-[#E9E3DB] px-3 py-1.5 text-[9px] font-black tracking-[0.2em] uppercase z-10 shadow-sm rounded-none">
                    {product.discount}
                  </div>

                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:scale-105 mix-blend-multiply"
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-1.5 px-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm lg:text-base font-bold text-[#1A1A1A] leading-tight group-hover:text-[#3d352e] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex gap-0.5 pt-1 shrink-0">
                      {renderStars(product.rating)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm font-black text-[#3d352e]">
                      ${product.price}
                    </span>
                    <span className="text-xs text-[#1A1A1A]/40 line-through font-medium">
                      ${product.originalPrice}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Modern Floating Action Overlay (Quick Add Button) */}
              <div className="absolute inset-x-4 bottom-[85px] translate-y-4 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-[0.25,0.46,0.45,0.94] z-20">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Added ${product.name} to bag`);
                  }}
                  className="w-full bg-[#3d352e] text-[#E9E3DB] py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#3d352e] border border-transparent hover:border-[#3d352e] transition-colors shadow-xl rounded-none"
                >
                  <Plus size={16} /> Quick Add
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default NewArrivalsModern;