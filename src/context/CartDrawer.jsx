import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCarts } from './CartContext';



const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCarts();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 rounded-none border-l border-[#C4BEB6]/40"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#C4BEB6]/40 bg-[#FBFBFA]">
              <h2 className="text-xl font-black uppercase tracking-tighter text-[#1A1A1A]">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors p-2 hover:bg-[#E9E3DB] rounded-none"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#1A1A1A]">Your cart is empty</p>
                  <button onClick={() => setIsCartOpen(false)} className="text-xs border-b border-[#1A1A1A] pb-1 uppercase tracking-widest font-bold">Continue Shopping</button>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 border-b border-[#C4BEB6]/30 pb-6">
                    <div className="w-24 aspect-[3/4] bg-[#E9E3DB]/30 overflow-hidden shrink-0">
                      <img src={item.images ? item.images[0] : item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight">{item.name}</h3>
                          <button onClick={() => removeFromCart(index)} className="text-[#1A1A1A]/40 hover:text-[#3d352e] transition-colors">
                            <Trash2 size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-[10px] font-bold tracking-widest text-[#1A1A1A]/60 uppercase mb-2">
                          {item.color?.name} / Size {item.size}
                        </p>
                        <p className="text-sm font-black text-[#3d352e]">${item.price}</p>
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border border-[#C4BEB6] rounded-none">
                          <button onClick={() => updateQuantity(index, item.quantity - 1)} className="px-2 py-1 text-[#1A1A1A]/60 hover:text-[#1A1A1A]">
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(index, item.quantity + 1)} className="px-2 py-1 text-[#1A1A1A]/60 hover:text-[#1A1A1A]">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-[#FBFBFA] border-t border-[#C4BEB6]/40">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/60">Subtotal</span>
                  <span className="text-xl font-black text-[#1A1A1A]">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/50 font-medium mb-4 text-center">Shipping & taxes calculated at checkout</p>
                <Link 
                  to="/checkout" 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-[#3d352e] text-[#E9E3DB] py-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors rounded-none shadow-xl border border-[#3d352e] hover:border-[#1A1A1A]"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>
              </div>
            )}
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;