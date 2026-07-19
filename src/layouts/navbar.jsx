import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const [isShopHovered, setIsShopHovered] = useState(false);

  // Updated navigation array matching your image
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
    { to: "/blog", label: "BLOG" },
  ];

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, transition: { duration: 0.2 } },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
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

        {/* Navigation */}
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
                
                {/* Chevron for Dropdown */}
                {item.hasDropdown && (
                  <motion.div
                    animate={{ rotate: isShopHovered ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </motion.div>
                )}

                {/* Active Tab Underline */}
                {activeTab === item.label && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>

              {/* Modern Luxury Dropdown Menu */}
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
                      {/* Invisible bridge to keep hover active between link and dropdown */}
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
                            className="px-6 py-2.5 text-sm font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#E9E3DB]/20 transition-all duration-300 flex items-center group"
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

        {/* Right Icons */}
        <div className="flex items-center gap-6 z-50 relative">
          <button className="text-[#1A1A1A] transition-opacity duration-300 hover:opacity-60">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button className="relative text-[#1A1A1A] transition-opacity duration-300 hover:opacity-60 group">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[9px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
              0
            </span>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;