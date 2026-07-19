import React from 'react';
import { motion } from 'framer-motion';

const CollectionSection = () => {
  // Staggered entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Header Section with New Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-20 gap-6 pr-4 md:pr-0">
          
          {/* Title and Description Group */}
          <div className="flex flex-col gap-3 pl-4 md:pl-8 max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-wide"
            >
              Collection
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#1A1A1A]/70 text-sm md:text-base font-medium leading-relaxed"
            >
              Explore our latest curated selection of premium apparel and accessories. Designed with modern elegance and crafted for everyday luxury.
            </motion.p>
          </div>
          
          {/* Action Button */}
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] text-[#E9E3DB] px-8 py-3 rounded-full text-xs font-bold tracking-[0.1em] uppercase hover:bg-[#1A1A1A]/80 transition-colors shadow-md whitespace-nowrap ml-4 md:ml-0"
          >
            See All Collection
          </motion.button>
        </div>

        {/* 
          Complex CSS Grid Layout 
          Exactly matching the 5-column structure of the reference image
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-5 auto-rows-[120px] md:auto-rows-[160px] gap-4 relative z-0"
        >
          
          {/* 1. Large Main Image (Left) - Spans 2 columns, 4 rows */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-4 bg-[#E9E3DB] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
              alt="Main Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* 2. Top Middle Left (Medium) - Spans 1 column, 2 rows */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 bg-[#C4BEB6]/40 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" 
              alt="Menswear"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
            />
          </motion.div>

          {/* 3. Top Middle Right (Medium) - Spans 1 column, 2 rows */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 bg-[#E9E3DB]/60 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800&auto=format&fit=crop" 
              alt="Footwear"
              className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* 4. Small Image Top (Right Column) - Spans 1 column, 1 row */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-1 bg-[#E9E3DB] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop" 
              alt="Accessory 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* 5. Small Image Second (Right Column) - Spans 1 column, 1 row */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-1 bg-[#C4BEB6]/30 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop" 
              alt="Accessory 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
            />
          </motion.div>

          {/* 6. Bottom Middle Left (Medium) - Spans 1 column, 2 rows */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 bg-[#E9E3DB] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1519238396246-be760086221c?q=80&w=800&auto=format&fit=crop" 
              alt="Kids Clothing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* 7. Bottom Middle Right (Medium) - Spans 1 column, 2 rows */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 bg-[#E9E3DB]/50 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop" 
              alt="Womenswear"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* 8. Small Image Third (Right Column) - Spans 1 column, 1 row */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-1 bg-[#C4BEB6]/30 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop" 
              alt="Accessory 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
            />
          </motion.div>

          {/* 9. Small Image Bottom (Right Column) - Spans 1 column, 1 row */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-1 bg-[#E9E3DB] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=600&auto=format&fit=crop" 
              alt="Accessory 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;