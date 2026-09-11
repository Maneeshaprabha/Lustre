import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Search, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bottom components
import Recommendations from './Recommendations';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Campaigns', 'Editorials', 'Style Guide', 'Interviews', 'Behind The Scenes'
  ];

  // Dummy data for blog articles
  const articles = [
    {
      id: 1,
      title: "Mastering the Minimalist Wardrobe",
      category: "Style Guide",
      date: "Oct 12, 2026",
      readTime: "5 Min Read",
      excerpt: "Discover the essential pieces that form the foundation of a versatile, seasonless closet. Quality over quantity is the new standard.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      isFeatured: true
    },
    {
      id: 2,
      title: "The Fall/Winter 2026 Campaign",
      category: "Campaigns",
      date: "Sep 28, 2026",
      readTime: "3 Min Read",
      excerpt: "Explore the new collection. A visual journey through our latest silhouettes, inspired by brutalist architecture and organic textures.",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
      isFeatured: false
    },
    {
      id: 3,
      title: "In Conversation: Our Lead Designer",
      category: "Interviews",
      date: "Sep 15, 2026",
      readTime: "8 Min Read",
      excerpt: "We sit down to discuss the creative process, sustainable sourcing, and what it takes to build a timeless luxury brand.",
      image: "https://images.unsplash.com/photo-1550614000-4b95d4edaa19?q=80&w=1000&auto=format&fit=crop",
      isFeatured: false
    },
    {
      id: 4,
      title: "The Art of Tailoring",
      category: "Editorials",
      date: "Aug 30, 2026",
      readTime: "4 Min Read",
      excerpt: "A closer look at the craftsmanship and precision that goes into every Lustre suit. It's all in the details.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      isFeatured: false
    },
    {
      id: 5,
      title: "Transitioning Your Wardrobe for Autumn",
      category: "Style Guide",
      date: "Aug 18, 2026",
      readTime: "6 Min Read",
      excerpt: "Layering techniques and color palettes to seamlessly transition your summer pieces into the cooler months.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1000&auto=format&fit=crop",
      isFeatured: false
    },
    {
      id: 6,
      title: "Behind the Seams: Sustainable Fabrics",
      category: "Behind The Scenes",
      date: "Jul 22, 2026",
      readTime: "5 Min Read",
      excerpt: "Our commitment to the environment starts with our materials. Discover how we source our organic cotton and recycled cashmere.",
      image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1000&auto=format&fit=crop",
      isFeatured: false
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles.filter(a => !a.isFeatured) 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = articles.find(a => a.isFeatured);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* 1. EDITORIAL HERO SECTION */}
        <section className="w-full pt-32 pb-16 px-6 md:px-12 bg-white">
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="flex flex-col w-full md:w-1/2 lg:w-3/5">
              <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-10">
                <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
                <span className="mx-3">/</span>
                <span className="text-[#1A1A1A]">Journal</span>
              </nav>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6 text-[#1A1A1A]"
              >
                The <br className="hidden md:block"/> Journal.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.8 }} 
                className="max-w-md text-sm md:text-base text-[#1A1A1A]/70 font-medium leading-relaxed"
              >
                Stories, style guides, and behind-the-scenes insights from the world of Lustre. Explore our editorial vision.
              </motion.p>
            </div>

            {/* Featured Article Preview in Hero */}
            {featuredArticle && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2 lg:w-2/5 group cursor-pointer relative"
              >
                <Link to={`/blog/${featuredArticle.id}`} className="block w-full">
                  <div className="aspect-[4/3] bg-[#E9E3DB] overflow-hidden rounded-none mb-6 relative">
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-none text-[9px] font-black tracking-widest uppercase text-[#1A1A1A] z-10 shadow-sm border border-[#1A1A1A]/10">
                      Featured
                    </span>
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      className="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/50">
                      <span>{featuredArticle.category}</span>
                      <span className="w-1 h-1 bg-[#C4BEB6] rounded-full" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">
                      {featuredArticle.title}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        {/* 2. CATEGORY NAVIGATION BAR (Sticky) */}
        <nav className="sticky top-[88px] z-30 w-full bg-white border-y border-[#E9E3DB] transition-all">
          <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex justify-between items-center">
            
            <ul className="flex items-center gap-8 overflow-x-auto whitespace-nowrap py-6 hide-scrollbar w-full md:w-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase transition-colors relative ${
                      activeCategory === category ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'
                    }`}
                  >
                    {category}
                    {activeCategory === category && (
                      <motion.div layoutId="journalCategoryIndicator" className="absolute -bottom-6 left-0 right-0 h-[1px] bg-[#1A1A1A]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors cursor-pointer border-l border-[#C4BEB6]/40 pl-8">
              <Search size={18} strokeWidth={2} />
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Search</span>
            </div>
          </div>
        </nav>

        {/* 3. ARTICLES GRID */}
        <main className="max-w-[1500px] mx-auto px-6 md:px-12 py-16 md:py-24">
          
          {filteredArticles.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20">
              <p className="text-[#1A1A1A]/50 text-lg font-medium">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 border-b border-[#1A1A1A] text-[#1A1A1A] text-sm font-bold uppercase tracking-widest pb-1 hover:text-[#1A1A1A]/60 transition-colors"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <motion.div 
              variants={gridVariants} 
              initial="hidden" 
              animate="visible" 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              {filteredArticles.map((article) => (
                <motion.article 
                  key={article.id} 
                  variants={itemVariants} 
                  className="group flex flex-col cursor-pointer"
                >
                  <Link to={`/blog/${article.id}`} className="block w-full">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/5] bg-[#E9E3DB]/30 overflow-hidden mb-6 rounded-none">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/5 transition-colors duration-500" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-3 px-1">
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[9px] font-black tracking-[0.15em] uppercase text-[#1A1A1A]/50">
                          <span className="text-[#1A1A1A]">{article.category}</span>
                          <span className="w-1 h-1 bg-[#C4BEB6] rounded-full" />
                          <span className="flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors mt-1">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-[#1A1A1A]/70 font-medium leading-relaxed line-clamp-2 mt-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mt-4 group-hover:gap-3 transition-all duration-300">
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* SQUARE PAGINATION */}
          {filteredArticles.length > 0 && (
            <div className="flex items-center justify-between w-full mt-24 pt-8 border-t border-[#C4BEB6]/40">
              <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors rounded-none">
                <ArrowLeft size={16} /> Newer
              </button>
              
              <div className="hidden md:flex items-center gap-2">
                {[1, 2, 3].map((page, index) => (
                  <button 
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center rounded-none text-sm font-bold transition-all border ${
                      page === 1 
                      ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                      : 'border-transparent text-[#1A1A1A]/60 hover:border-[#C4BEB6] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors rounded-none">
                Older <ArrowRight size={16} />
              </button>
            </div>
          )}

        </main>
      </div>

      <Recommendations />
    </>
  );
};

export default BlogPage;