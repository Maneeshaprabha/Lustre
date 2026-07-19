import React from 'react';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  return (
    <>
    {/* Wrapping the section in Warm Beige to separate it from white sections */}
    <section className="w-full bg-[#E9E3DB] py-16 px-6 md:px-12 font-sans overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row shadow-xl"
      >
        
        {/* Left Content Area (Replaced green with Charcoal Black) */}
        <div className="w-full md:w-1/2 bg-[#1A1A1A] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          
          {/* Subtitle using Muted Sand */}
          <span className="text-[#C4BEB6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Shine Brighter for Less — Lustre Discounts!
          </span>
          
          {/* Main Headline */}
          <h2 className="text-[#E9E3DB] text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] mb-6">
            Enjoy <span className="font-bold">25% off</span> this winter season and receive a special gift with your purchase!
          </h2>
          
          {/* Description Paragraph */}
          <p className="text-[#E9E3DB]/70 text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium">
            This winter, wrap yourself in style and savings! Enjoy an exclusive 25% OFF on our winter collection, featuring cozy sweaters, elegant jackets, and chic accessories. Plus, as a special treat, receive a complimentary gift with every purchase.
          </p>
          
          {/* Action Button */}
          <div>
            <button className="bg-[#E9E3DB] text-[#1A1A1A] px-10 py-3.5 rounded-full text-xs font-black tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300">
              Buy Now
            </button>
          </div>
          
        </div>

        {/* Right Image Area */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full relative overflow-hidden">
          {/* Using an Unsplash placeholder of a clothing rack to match the reference */}
          <img 
            src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Winter Collection Rack"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

      </motion.div>
      
    </section>
    </>
  );
};

export default PromoBanner;