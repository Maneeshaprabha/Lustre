import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, Mail, Plus, ChevronDown, Check, Info } from 'lucide-react';

// Bottom components
import Recommendations from './Recommendations';

const GiftCardPage = () => {
  const [amount, setAmount] = useState(100);
  const [activeTab, setActiveTab] = useState('digital'); // digital or physical
  const [openAccordion, setOpenAccordion] = useState('delivery'); // for details section

  const amounts = [50, 100, 250, 500, 1000];

  // Form states (optional for you to handle submissions)
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  // Animations
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* HEADER BREADCRUMBS */}
        <div className="w-full pt-32 pb-8 px-6 md:px-12 bg-white">
          <div className="max-w-[1500px] mx-auto">
            <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#1A1A1A]">Gift Card</span>
            </nav>
          </div>
        </div>

        {/* MAIN SPLIT LAYOUT */}
        <main className="max-w-[1500px] mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT SIDE: VISUALS (Sticky) */}
          <div className="relative">
            <div className="lg:sticky lg:top-[120px] flex flex-col gap-8">
              
              {/* Dynamic Digital Gift Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full aspect-[1.6/1] bg-[#1A1A1A] relative overflow-hidden flex flex-col justify-between p-8 md:p-10 shadow-2xl group rounded-none"
              >
                {/* Subtle Background Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full ease-in-out" />
                
                {/* Top Section */}
                <div className="flex justify-between items-start z-10">
                  <h2 className="text-[#E9E3DB] text-2xl md:text-3xl font-black tracking-widest uppercase">
                    Lustre
                  </h2>
                  <Gift className="text-[#E9E3DB]/50" size={28} strokeWidth={1.5} />
                </div>

                {/* Bottom Section (Dynamic Amount) */}
                <div className="flex justify-between items-end z-10">
                  <div className="flex flex-col">
                    <span className="text-[#E9E3DB]/60 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-1">
                      {activeTab === 'digital' ? 'Digital E-Gift Card' : 'Physical Gift Card'}
                    </span>
                    <span className="text-[#E9E3DB] text-4xl md:text-5xl font-light">
                      ${amount}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Lifestyle / Editorial Image */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="w-full aspect-[4/3] bg-[#E9E3DB] overflow-hidden rounded-none hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop" 
                  alt="Lustre Gifting" 
                  className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>

            </div>
          </div>

          {/* RIGHT SIDE: CONFIGURATION & ADD TO BAG */}
          <div className="flex flex-col">
            
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4 text-[#1A1A1A]">
                The Gift <br/> Of Choice.
              </h1>
              <p className="text-sm md:text-base text-[#1A1A1A]/70 font-medium leading-relaxed max-w-md">
                Give them exactly what they want. The Lustre Gift Card is the ultimate luxury, delivered instantly via email or beautifully packaged by post.
              </p>
            </motion.div>

            {/* Delivery Method Toggles */}
            <div className="flex gap-4 mb-10">
              <button 
                onClick={() => setActiveTab('digital')}
                className={`flex-1 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-colors rounded-none border ${activeTab === 'digital' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-[#C4BEB6]/60 hover:border-[#1A1A1A]'}`}
              >
                Digital (Email)
              </button>
              <button 
                onClick={() => setActiveTab('physical')}
                className={`flex-1 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-colors rounded-none border ${activeTab === 'physical' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-[#C4BEB6]/60 hover:border-[#1A1A1A]'}`}
              >
                Physical (Post)
              </button>
            </div>

            {/* Value Selector */}
            <div className="mb-10">
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#1A1A1A] mb-4">
                Select Value (USD)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {amounts.map((val) => (
                  <button 
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`py-4 text-sm font-bold transition-colors rounded-none border ${amount === val ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-[#C4BEB6]/60 hover:border-[#1A1A1A]'}`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60 mb-2">Recipient Name</label>
                  <input 
                    type="text" 
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-transparent border-b border-[#C4BEB6] py-3 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none"
                    placeholder="Their Name"
                  />
                </div>
                {activeTab === 'digital' && (
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60 mb-2">Recipient Email</label>
                    <input 
                      type="email" 
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-[#C4BEB6] py-3 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none"
                      placeholder="their@email.com"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60 mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#C4BEB6] py-3 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60 mb-2">Personal Message (Optional)</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none resize-none mt-2"
                  placeholder="Add a note to your gift..."
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-16">
              <button className="w-full bg-[#1A1A1A] text-white py-5 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] border border-[#1A1A1A] transition-colors shadow-xl rounded-none">
                <Plus size={18} /> Add To Bag — ${amount}
              </button>
            </div>

            {/* Accordions for Details */}
            <div className="border-t border-[#C4BEB6]/40">
              
              {/* Delivery Accordion */}
              <div className="border-b border-[#C4BEB6]/40">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === 'delivery' ? null : 'delivery')}
                  className="flex items-center justify-between w-full py-6 group rounded-none"
                >
                  <span className="font-bold text-sm tracking-wide uppercase text-[#1A1A1A]">Delivery Information</span>
                  <ChevronDown size={18} className={`text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-transform duration-300 ${openAccordion === 'delivery' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openAccordion === 'delivery' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 flex flex-col gap-4 text-sm text-[#1A1A1A]/70 font-medium leading-relaxed">
                        <div className="flex gap-3">
                          <Mail className="shrink-0 mt-0.5" size={16} />
                          <p><strong>Digital Cards</strong> are delivered instantly via email to the recipient, containing instructions to redeem them at checkout.</p>
                        </div>
                        <div className="flex gap-3">
                          <Gift className="shrink-0 mt-0.5" size={16} />
                          <p><strong>Physical Cards</strong> are shipped in our signature premium packaging. Standard delivery takes 3-5 business days.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Terms Accordion */}
              <div className="border-b border-[#C4BEB6]/40">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === 'terms' ? null : 'terms')}
                  className="flex items-center justify-between w-full py-6 group rounded-none"
                >
                  <span className="font-bold text-sm tracking-wide uppercase text-[#1A1A1A]">Terms & Conditions</span>
                  <ChevronDown size={18} className={`text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-transform duration-300 ${openAccordion === 'terms' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openAccordion === 'terms' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-sm text-[#1A1A1A]/70 font-medium leading-relaxed">
                        <ul className="list-disc pl-5 flex flex-col gap-2">
                          <li>Lustre Gift Cards do not expire.</li>
                          <li>Can be redeemed online or at any flagship store.</li>
                          <li>Non-refundable and cannot be exchanged for cash.</li>
                          <li>Lost or stolen cards cannot be replaced.</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </main>
      </div>

      {/* Recommendations Section */}
      <Recommendations />
    </>
  );
};

export default GiftCardPage;