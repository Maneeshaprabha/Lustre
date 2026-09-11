import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2,  Link as LinkIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Recommendations from './Recommendations';

const BlogDetail = () => {
  const { id } = useParams();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dummy article data (In a real app, you would fetch this based on the ID)
  const article = {
    id: id || 1,
    title: "Mastering the Minimalist Wardrobe",
    category: "Style Guide",
    date: "Oct 12, 2026",
    readTime: "5 Min Read",
    author: "Elena Rostova",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    contentImages: [
      "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1200&auto=format&fit=crop"
    ]
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* 1. ARTICLE HEADER */}
        <header className="w-full pt-32 pb-12 px-6 md:px-12 bg-white">
          <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
            
            <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-8">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
              <span className="mx-3">/</span>
              <Link to="/blog" className="hover:text-[#1A1A1A] transition-colors">Journal</Link>
              <span className="mx-3">/</span>
              <span className="text-[#1A1A1A]">{article.category}</span>
            </nav>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-[#1A1A1A] mb-8"
            >
              {article.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/50"
            >
              <span className="text-[#1A1A1A]">By {article.author}</span>
              <span className="w-1 h-1 bg-[#C4BEB6] rounded-full hidden sm:block" />
              <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
              <span className="w-1 h-1 bg-[#C4BEB6] rounded-full hidden sm:block" />
              <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
            </motion.div>
            
          </div>
        </header>

        {/* 2. COVER IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="w-full max-w-[1200px] mx-auto px-6 md:px-12 mb-16 md:mb-24"
        >
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#E9E3DB] overflow-hidden rounded-none">
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className="w-full h-full object-cover object-center grayscale-[15%]"
            />
          </div>
        </motion.div>

        {/* 3. ARTICLE CONTENT (Editorial Typograhpy) */}
        <main className="max-w-[800px] mx-auto px-6 md:px-12 pb-24">
          <motion.article 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="prose prose-lg md:prose-xl max-w-none text-[#1A1A1A]/80 font-medium leading-relaxed"
          >
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl leading-relaxed text-[#1A1A1A] mb-8 font-light">
              <span className="float-left text-6xl md:text-7xl font-black leading-none mr-4 mt-2 text-[#1A1A1A]">D</span>
              iscover the essential pieces that form the foundation of a versatile, seasonless closet. In a world of fleeting trends, building a wardrobe that stands the test of time is both an art and a sustainable practice. Quality over quantity is the new standard.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-8">
              The concept of a minimalist wardrobe isn't about restriction; it's about curation. It's about finding the perfect tailored blazer that fits like a glove, the crisp white shirt that instantly elevates any look, and the structured trouser that transitions seamlessly from boardroom to evening dinner.
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] mt-16 mb-6 uppercase">
              The Core Elements
            </motion.h2>

            <motion.p variants={fadeUp} className="mb-8">
              When building your foundation, focus on neutral palettes—black, white, camel, navy, and grey. These shades harmonize effortlessly, allowing you to mix and match with minimal effort. Invest in natural, breathable fabrics like organic cotton, silk, and responsibly sourced cashmere.
            </motion.p>

            {/* Editorial Blockquote */}
            <motion.blockquote variants={fadeUp} className="border-l-4 border-[#1A1A1A] pl-6 md:pl-10 py-4 my-12 italic text-2xl md:text-3xl font-light text-[#1A1A1A]">
              "Luxury is not about buying more; it's about buying better. A perfectly tailored coat can change the way you walk into a room."
            </motion.blockquote>

            <motion.p variants={fadeUp} className="mb-12">
              Accessories play a crucial role in minimalist styling. A sleek leather belt, a geometric gold cuff, or a structured tote bag can completely redefine a simple silhouette. The goal is intentionality—every piece should serve a purpose and bring you confidence.
            </motion.p>

            {/* Inline Content Image */}
            <motion.div variants={fadeUp} className="w-full aspect-[4/3] bg-[#E9E3DB] overflow-hidden rounded-none my-16">
              <img 
                src={article.contentImages[0]} 
                alt="Minimalist wardrobe styling" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] mt-12 mb-6 uppercase">
              Curating Your Collection
            </motion.h2>

            <motion.p variants={fadeUp} className="mb-8">
              Start by auditing your current closet. Remove pieces you haven't worn in the past year. Identify the gaps in your wardrobe and slowly fill them with high-quality, timeless items. Remember, building a Lustre-worthy wardrobe is a journey, not a sprint. Take your time to find the pieces that truly resonate with your personal style.
            </motion.p>

          </motion.article>

          {/* 4. SHARE & NAVIGATION FOOTER */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="w-full flex flex-col md:flex-row items-center justify-between border-t border-b border-[#C4BEB6]/40 py-8 mt-16 gap-6"
          >
            <Link to="/blog" className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors">
              <ArrowLeft size={16} /> Back to Journal
            </Link>

            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/50">Share Article</span>
              <div className="flex items-center gap-4">
                {/* <button className="text-[#1A1A1A] hover:text-[#1A1A1A]/50 transition-colors"><Twitter size={18} /></button> */}
                {/* <button className="text-[#1A1A1A] hover:text-[#1A1A1A]/50 transition-colors"><Facebook size={18} /></button> */}
                <button className="text-[#1A1A1A] hover:text-[#1A1A1A]/50 transition-colors"><LinkIcon size={18} /></button>
              </div>
            </div>
          </motion.div>

        </main>
      </div>

      {/* 5. MORE FROM THE JOURNAL (Related Posts) */}
      <div className="w-full bg-[#FBFBFA] py-24 px-6 md:px-12 border-t border-[#E9E3DB]">
        <div className="max-w-[1500px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 text-center">
            More From The Journal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 2, title: "The Fall/Winter 2026 Campaign", cat: "Campaigns", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" },
              { id: 4, title: "The Art of Tailoring", cat: "Editorials", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
              { id: 5, title: "Transitioning Your Wardrobe", cat: "Style Guide", img: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=800&auto=format&fit=crop" }
            ].map((item) => (
              <Link key={item.id} to={`/blog/${item.id}`} className="group flex flex-col cursor-pointer">
                <div className="relative w-full aspect-[4/5] bg-[#E9E3DB]/30 overflow-hidden mb-5 rounded-none">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <span className="text-[9px] font-black tracking-[0.15em] uppercase text-[#1A1A1A]/50 mb-2">{item.cat}</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight group-hover:text-[#1A1A1A]/60 transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Recommendations />
    </>
  );
};

export default BlogDetail;