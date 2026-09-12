import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCarts } from '../context/CartContext';


const CheckoutPage = () => {
  const { cartItems, cartTotal, removeFromCart } = useCarts();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    country: 'United States',
    paymentMethod: 'card',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    setIsOrderPlaced(true);
  };

  // Shipping cost logic (Free over $150)
  const shippingCost = cartTotal > 150 ? 0 : 15.00;
  const finalTotal = cartTotal + (cartItems.length > 0 ? shippingCost : 0);

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center px-6 py-24 font-sans text-[#1A1A1A]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-[#FBFBFA] border border-[#1A1A1A] p-10 md:p-16 text-center rounded-none shadow-2xl"
        >
          <CheckCircle2 size={64} className="text-[#3d352e] mx-auto mb-6" strokeWidth={1.5} />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#3d352e] mb-2 block">Order Confirmed</span>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-[#1A1A1A]">Thank You For Your Order.</h1>
          <p className="text-sm text-[#1A1A1A]/70 font-medium leading-relaxed mb-8">
            We have received your order and our client concierge is preparing your shipment. A confirmation email has been dispatched to <strong className="text-[#1A1A1A]">{formData.email}</strong>.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 bg-[#3d352e] text-[#E9E3DB] px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors rounded-none border border-[#3d352e]"
          >
            Return to Homepage <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
      
      {/* Checkout Header */}
      <div className="w-full py-8 px-6 md:px-12 border-b border-[#C4BEB6]/40 bg-[#FBFBFA]">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-black tracking-[0.25em] uppercase text-[#1A1A1A]">
            Lustre <span className="text-[10px] font-bold tracking-widest text-[#3d352e] uppercase block md:inline md:ml-2">Secure Checkout</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/60">
            <Lock size={14} /> Encrypted & Secure
          </div>
        </div>
      </div>

      {/* Main Checkout Grid */}
      <main className="max-w-[1500px] mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        
        {/* LEFT: FORM (7 Columns) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-10">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-4">1. Contact Information</h2>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Email Address *</label>
                <input 
                  type="email" 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="victoria@example.com"
                  className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-4">2. Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">First Name *</label>
                  <input 
                    type="text" 
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Victoria"
                    className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Last Name *</label>
                  <input 
                    type="text" 
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Sterling"
                    className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Street Address *</label>
                  <input 
                    type="text" 
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="742 Madison Avenue"
                    className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Apartment, suite, etc. (optional)</label>
                  <input 
                    type="text" 
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Suite 4B"
                    className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">City *</label>
                    <input 
                      type="text" 
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Postal Code *</label>
                    <input 
                      type="text" 
                      required
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="10021"
                      className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Country *</label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors cursor-pointer"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-4">3. Payment Details</h2>
              <div className="border border-[#C4BEB6] p-6 flex flex-col gap-6 rounded-none bg-[#FBFBFA]">
                
                <div className="flex gap-4 items-center">
                  <input 
                    type="radio" 
                    id="card" 
                    name="paymentMethod" 
                    value="card" 
                    defaultChecked 
                    className="accent-[#3d352e]"
                  />
                  <label htmlFor="card" className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]">Credit / Debit Card (Secure)</label>
                </div>

                <div className="flex flex-col gap-4 pt-2 border-t border-[#C4BEB6]/30">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Card Number *</label>
                    <input 
                      type="text" 
                      required
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="4242 •••• •••• 4242"
                      className="w-full bg-white border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">Expiration (MM/YY) *</label>
                      <input 
                        type="text" 
                        required
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        placeholder="12/28"
                        className="w-full bg-white border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]/60">CVV Security Code *</label>
                      <input 
                        type="password" 
                        required
                        maxLength="4"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="•••"
                        className="w-full bg-white border border-[#C4BEB6] p-4 text-sm text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] rounded-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#3d352e] text-[#E9E3DB] py-5 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors shadow-2xl rounded-none border border-[#3d352e]"
            >
              Place Order (${finalTotal.toFixed(2)}) <Lock size={16} />
            </button>

          </form>
        </div>

        {/* RIGHT: ORDER SUMMARY (5 Columns) */}
        <div className="lg:col-span-5">
          <div className="bg-[#FBFBFA] border border-[#C4BEB6]/40 p-8 sticky top-32">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-6 pb-4 border-b border-[#C4BEB6]/40">
              Order Summary ({cartItems.length} items)
            </h2>

            {/* Items List */}
            <div className="flex flex-col gap-6 max-h-[380px] overflow-y-auto pr-2 mb-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <p className="text-xs text-[#1A1A1A]/50 font-medium py-6 text-center uppercase tracking-widest">Your cart is empty</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center justify-between border-b border-[#C4BEB6]/30 pb-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-16 aspect-[3/4] bg-[#E9E3DB]/30 overflow-hidden shrink-0">
                        <img src={item.images ? item.images[0] : item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#1A1A1A] leading-tight mb-1">{item.name}</h3>
                        <p className="text-[10px] font-medium text-[#1A1A1A]/60 uppercase tracking-wider">
                          {item.color?.name} / Size {item.size} (Qty: {item.quantity})
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#3d352e]">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            {/* Calculations */}
            <div className="flex flex-col gap-3 text-sm font-medium border-t border-[#C4BEB6]/40 pt-6 mb-6">
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Subtotal</span>
                <span className="font-bold text-[#1A1A1A]">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Shipping</span>
                <span className="font-bold text-[#1A1A1A]">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-black text-[#1A1A1A] pt-3 border-t border-[#C4BEB6]/40">
                <span>Total</span>
                <span className="text-[#3d352e]">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Security Note */}
            <div className="flex items-center gap-3 p-4 bg-white border border-[#C4BEB6]/40 text-xs text-[#1A1A1A]/70">
              <ShieldCheck size={20} className="text-[#3d352e] shrink-0" />
              <span>All transactions are secured with 256-bit SSL encryption.</span>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default CheckoutPage;