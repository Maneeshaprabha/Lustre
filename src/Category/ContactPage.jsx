import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

// Bottom components
import Recommendations from './Recommendations';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* HEADER / BREADCRUMBS */}
        <div className="w-full pt-32 pb-12 px-6 md:px-12 bg-white">
          <div className="max-w-[1500px] mx-auto">
            <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-8">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#1A1A1A]">Contact Us</span>
            </nav>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-[#1A1A1A]"
            >
              Get in Touch.
            </motion.h1>
          </div>
        </div>

        {/* MAIN SPLIT SECTION (Like Vinta Roofing layout) */}
        <main className="max-w-[1500px] mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT SIDE: CONTACT DETAILS (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#FBFBFA] border border-[#C4BEB6]/30 p-8 md:p-12 rounded-none"
          >
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                Client Concierge
              </h2>
              <p className="text-sm text-[#1A1A1A]/70 font-medium leading-relaxed mb-10">
                Whether you require assistance with an active order, styling advice, or bespoke inquiries, our client services team is at your disposal.
              </p>

              {/* Detail Items */}
              <div className="flex flex-col gap-8">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 rounded-none">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1A1A1A] mb-1">Flagship Flagship</h3>
                    <p className="text-sm text-[#1A1A1A]/70 font-medium leading-relaxed">
                      742 Madison Avenue, New York<br />NY 10021, United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 rounded-none">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1A1A1A] mb-1">Direct Line</h3>
                    <p className="text-sm text-[#1A1A1A]/70 font-medium leading-relaxed">
                      +1 (800) 555-LUSTRE<br />Mon - Fri: 9:00 AM - 7:00 PM EST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 rounded-none">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1A1A1A] mb-1">Electronic Mail</h3>
                    <p className="text-sm text-[#1A1A1A]/70 font-medium leading-relaxed">
                      concierge@lustre-luxury.com<br />support@lustre-luxury.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Hours Note */}
            <div className="mt-12 pt-8 border-t border-[#C4BEB6]/30 flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/50">
              <Clock size={16} /> Response Time: Within 24 Hours
            </div>

          </motion.div>

          {/* RIGHT SIDE: CONTACT FORM (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FBFBFA] border border-[#1A1A1A] p-12 text-center flex flex-col items-center justify-center rounded-none"
              >
                <CheckCircle2 size={48} className="text-[#1A1A1A] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-3">Message Dispatched</h3>
                <p className="text-sm text-[#1A1A1A]/70 font-medium max-w-md leading-relaxed mb-8">
                  Thank you for reaching out. A client advisor has received your inquiry and will be in contact with you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors rounded-none"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-2">
                    Send a Message
                  </h2>
                  <p className="text-sm text-[#1A1A1A]/70 font-medium">
                    Please fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Victoria Sterling"
                      className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="victoria@example.com"
                      className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Support">Order Support & Tracking</option>
                    <option value="Styling Consultation">Bespoke Styling Consultation</option>
                    <option value="Press & Media">Press & Media Relations</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Message *</label>
                  <textarea 
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How may we assist you today?"
                    className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-white py-5 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] border border-[#1A1A1A] transition-colors shadow-xl rounded-none mt-2"
                >
                  Submit Inquiry <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>

        </main>
      </div>

      {/* Recommendations at bottom */}
      <Recommendations />
    </>
  );
};

export default ContactPage;