import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomerSupportUltraLuxe = () => {
  // The first item is open by default for immediate context
  const [openIndex, setOpenIndex] = useState(0);

  const supportItems = [
    {
      id: "01",
      title: "Client Concierge",
      description: "For cash on delivery orders, feel free to call us at +9477, +94703. Our dedicated concierge team will gladly assist with your inquiry, ensuring a seamless Lustre experience."
    },
    {
      id: "02",
      title: "Complimentary Delivery",
      description: "We offer free standard shipping on all orders over $50. For orders under $50, a minimal shipping fee applies. Every package is handled with the utmost care."
    },
    {
      id: "03",
      title: "Seamless Returns",
      description: "We offer a 30-day exchange policy on all items. If you are not completely satisfied with your purchase, simply return it within 30 days for an exchange or store credit."
    }
  ];

  return (
    <section className="w-full bg-[#E9E3DB] py-20 md:py-32 px-6 md:px-12 font-sans antialiased overflow-hidden border-t border-[#C4BEB6]/40">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Massive Editorial Typography */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#3d352e] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-8">
              Assistance
            </p>
            {/* Adjusted text size for mobile */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-light text-[#1A1A1A] tracking-tighter leading-[0.95]">
              Client <br className="hidden sm:block" /> Services.
            </h2>
          </motion.div>
        </div>

        {/* Right Column: Ultra-Minimalist Accordion */}
        <div className="lg:col-span-7 w-full border-t border-[#C4BEB6]/60 mt-4 lg:mt-0">
          {supportItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.id}
                className="border-b border-[#C4BEB6]/60 group cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {/* Accordion Header */}
                <div className="py-6 md:py-10 flex justify-between items-center pe-2 md:pe-4">
                  <div className="flex gap-4 md:gap-8 lg:gap-12 items-baseline">
                    <span className="text-xs md:text-sm lg:text-base font-black text-[#C4BEB6] group-hover:text-[#3d352e] tracking-widest transition-colors duration-500 shrink-0">
                      {item.id}
                    </span>
                    {/* Adjusted heading size and line-height for mobile */}
                    <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-500 tracking-tight leading-tight pr-4 ${isOpen ? 'font-medium text-[#1A1A1A]' : 'font-light text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]'}`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Minimalist Plus/Minus Indicator */}
                  <div className={`text-[#1A1A1A]/40 text-3xl font-light transition-transform duration-500 relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0 ${isOpen ? 'text-[#3d352e]' : 'group-hover:text-[#1A1A1A]'}`}>
                    <span className="absolute w-full h-[1px] md:h-[1.5px] bg-current" />
                    <span className={`absolute w-[1px] md:w-[1.5px] h-full bg-current transition-transform duration-500 ${isOpen ? 'rotate-90 scale-y-0' : 'scale-y-100'}`} />
                  </div>
                </div>

                {/* Accordion Content (Smooth Expand/Collapse) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      {/* Adjusted left padding for mobile to align with the title */}
                      <p className="pl-[2.5rem] sm:pl-[3.5rem] md:pl-[4.5rem] lg:pl-[5.5rem] pb-8 md:pb-10 text-xs sm:text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed max-w-lg font-medium pr-4">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CustomerSupportUltraLuxe;