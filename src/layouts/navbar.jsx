import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, ChevronDown, Menu, X, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCarts } from "../context/CartContext";


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  // Cart Context එකෙන් අපිට ඕන දේවල් ගන්නවා
  const { cartCount, setIsCartOpen } = useCarts();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const navItems = [
    { to: "/", label: "HOME" },
    { 
      to: "/shop", 
      label: "SHOP",
      hasDropdown: true,
      dropdownItems: [
        { to: "/shop/womenswear", label: "Womenswear" },
        { to: "/shop/menswear", label: "Menswear" },
        { to: "/shop/accessories", label: "Accessories" },
        { to: "/shop/kids", label: "Kids" },
        { to: "/shop/all", label: "Shop All" },
      ]
    },
    { to: "/new-arrivals", label: "NEW ARRIVALS" },
    { to: "/collections", label: "COLLECTIONS" },
    { to: "/sale", label: "SALE" },
    { to: "/gift-card", label: "GIFT CARD" },
    { to: "/blog", label: "BLOG" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, transition: { duration: 0.2 } },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#C4BEB6]/40 px-6 md:px-12 py-6 font-sans antialiased">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setActiveTab("HOME")}
            className="text-2xl font-black tracking-[0.25em] uppercase text-[#1A1A1A] z-50 relative"
          >
            Lustre
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsShopHovered(true)}
                onMouseLeave={() => item.hasDropdown && setIsShopHovered(false)}
              >
                <Link
                  to={item.to}
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center gap-1.5 relative pb-1 uppercase tracking-[0.15em] text-xs xl:text-sm font-semibold transition-colors duration-300 ${
                    activeTab === item.label
                      ? "text-[#1A1A1A]"
                      : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                  }`}
                >
                  {item.label}
                  
                  {item.hasDropdown && (
                    <motion.div
                      animate={{ rotate: isShopHovered ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </motion.div>
                  )}

                  {activeTab === item.label && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {isShopHovered && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-6 w-56 bg-white border border-[#C4BEB6]/30 shadow-[0_20px_40px_-15px_rgba(26,26,26,0.1)] py-4 z-40"
                      >
                        <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                        
                        <div className="flex flex-col">
                          {item.dropdownItems.map((dropItem, idx) => (
                            <Link
                              key={idx}
                              to={dropItem.to}
                              onClick={() => {
                                setActiveTab("SHOP");
                                setIsShopHovered(false);
                              }}
                              className="px-6 py-2.5 text-sm font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#E9E3DB]/30 transition-all duration-300 flex items-center group"
                            >
                              <span className="relative overflow-hidden">
                                {dropItem.label}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A1A1A] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons & Hamburger Menu */}
          <div className="flex items-center gap-6 z-50 relative">
            <button className="text-[#1A1A1A] transition-opacity duration-300 hover:opacity-60">
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Shopping Bag Button - CONNECTED TO CART CONTEXT */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-[#1A1A1A] transition-opacity duration-300 hover:opacity-60 group"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              
              {/* Only show badge if cart has items */}
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-none bg-[#3d352e] text-[9px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu Toggle Button */}
            <button 
              onClick={toggleDrawer}
              className="text-[#1A1A1A] transition-opacity duration-300 hover:opacity-60 ml-2"
              aria-label="Open Menu Drawer"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </nav>

      {/* Slide-out Panel / Drawer (Mobile & Sidebar Navigation) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black z-[60]"
            />

            {/* Side Drawer Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#1A1A1A] text-white border-l border-white/10 z-[70] p-8 md:p-12 flex flex-col shadow-2xl overflow-y-auto"
            >
              {/* Header & Close Button */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-white font-black tracking-[0.25em] uppercase text-lg">Lustre.</span>
                <button 
                  onClick={toggleDrawer} 
                  className="text-[#C4BEB6] hover:text-white transition-all bg-white/5 hover:bg-white/10 p-2 rounded-full"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Navigation Links inside Drawer */}
              <div className="flex flex-col gap-3 mb-8 border-b border-white/10 pb-6">
                <p className="text-[10px] text-[#C4BEB6]/60 font-bold tracking-[0.2em] uppercase mb-1">Navigation</p>
                {navItems.map((link) => (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link 
                        to={link.to} 
                        onClick={() => {
                          if (!link.hasDropdown) toggleDrawer();
                        }}
                        className="text-sm font-bold tracking-[0.15em] text-gray-300 hover:text-white transition-colors uppercase py-1.5"
                      >
                        {link.label}
                      </Link>

                      {link.hasDropdown && (
                        <button 
                          onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                          className="text-[#C4BEB6] p-2 hover:text-white"
                        >
                          <ChevronDown size={16} className={`transform transition-transform duration-300 ${isMobileShopOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Expandable Mobile Submenu */}
                    {link.hasDropdown && isMobileShopOpen && (
                      <div className="flex flex-col pl-4 mt-1 gap-2 border-l border-white/10 mb-2">
                        {link.dropdownItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.to}
                            onClick={toggleDrawer}
                            className="text-xs font-medium uppercase tracking-widest text-[#C4BEB6]/80 hover:text-white transition-colors py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Contact & Location Links */}
              <div className="flex flex-col gap-6 mt-auto pt-2">
                <div>
                  <h3 className="text-white text-xl font-medium tracking-tight mb-1.5">Get in <span className="text-[#C4BEB6]">touch.</span></h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    Have questions about our collections or need assistance? Reach out to our team.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Location Link */}
                  <Link 
                    to="/location" 
                    onClick={toggleDrawer}
                    className="flex items-start gap-4 group p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#C4BEB6]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#C4BEB6]/60 uppercase tracking-widest mb-0.5">Location</p>
                      <p className="text-gray-300 text-xs sm:text-sm font-light">Explore our flagship store & studios.</p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-4 group p-2 -mx-2">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#C4BEB6]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#C4BEB6]/60 uppercase tracking-widest mb-0.5">Email</p>
                      <a href="mailto:hello@lustre.com" className="text-gray-300 text-xs sm:text-sm font-light hover:text-white transition-colors">hello@lustre.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group p-2 -mx-2">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#C4BEB6]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#C4BEB6]/60 uppercase tracking-widest mb-0.5">Phone</p>
                      <a href="tel:+94701234562" className="text-gray-300 text-xs sm:text-sm font-light hover:text-white transition-colors">+94 70 123 4562</a>
                    </div>
                  </div>
                </div>

                {/* Contact Us Page Button */}
                <Link 
                  to="/contact" 
                  onClick={toggleDrawer}
                  className="mt-2 flex items-center justify-center gap-3 border border-white/20 rounded-full text-white px-6 py-3.5 w-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase">
                    Contact Us Page
                  </span>
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;