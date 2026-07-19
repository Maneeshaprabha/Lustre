import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Edit } from 'lucide-react';
import EditorialFeature from './EditorialFeature';
import LustreFeatureCard from './LustreFeatureCard';

const CategorySection = () => {
  const categories = [
    {
      title: "Womenswear",
      subtitle: "The Summer Edit",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-6 lg:col-span-5",
      aspect: "aspect-[3/4] md:aspect-[4/5]"
    },
    {
      title: "Menswear",
      subtitle: "Modern Tailoring",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-6 lg:col-span-7",
      aspect: "aspect-[3/4] md:aspect-[16/9]"
    },
    {
      title: "Accessories",
      subtitle: "The Finishing Touch",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-6 lg:col-span-7",
      aspect: "aspect-[3/4] md:aspect-[16/9]"
    },
    {
      title: "Kids",
      subtitle: "Playful Elegance",
      image: "https://images.unsplash.com/photo-1519238396246-be760086221c?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-6 lg:col-span-5",
      aspect: "aspect-[3/4] md:aspect-[4/5]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
   
    <section id="categories" className="w-full bg-white py-24 px-6 md:px-12 font-sans antialiased">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6"
        >
          <div>
            <p className="text-[#C4BEB6] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Curated Collections
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
              Shop by <span className="font-bold">Category.</span>
            </h2>
          </div>
        </motion.div>

        {/* Asymmetrical Masonry-style Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`${category.colSpan} relative group cursor-pointer overflow-hidden bg-[#E9E3DB]`}
            >
              {/* Image with subtle zoom on hover */}
              <div className={`w-full ${category.aspect} overflow-hidden`}>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <p className="text-[#E9E3DB]/80 text-xs md:text-sm font-medium tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {category.subtitle}
                </p>
                
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {category.title}
                  </h3>
                  
                  {/* Circular Arrow Button that slides in */}
                  <div className="w-12 h-12 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 ease-[0.25,0.46,0.45,0.94]">
                    <ArrowRight size={20} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <EditorialFeature />
      <LustreFeatureCard/>
    </section>
  );
};

export default CategorySection;