import React, { createContext, useState, useContext, useEffect } from 'react';


const CartContext = createContext();

// This hook is intentionally exported from the context module so consumers can
// access the provider value without importing the context directly.
// eslint-disable-next-line react-refresh/only-export-components
export const useCarts = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart එකට අලුත් item එකක් දාන function එක
  const addToCart = (product, size, color) => {
    setCartItems((prevItems) => {
      // එකම item එක, එකම size එකෙන් සහ color එකෙන් තියෙනවද බලනවා
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === size && item.color.name === color.name
      );

      if (existingItemIndex > -1) {
        // තිබ්බොත් quantity එක 1කින් වැඩි කරනවා
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        // නැත්තම් අලුතින් cart එකට දානවා
        return [...prevItems, { ...product, size, color, quantity: 1 }];
      }
    });
    // Cart එකට දැම්ම ගමන් පැත්තෙන් cart එක open වෙන්න
    setIsCartOpen(true); 
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].quantity = newQuantity;
      return newItems;
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, removeFromCart, updateQuantity, 
      cartCount, cartTotal, isCartOpen, setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};