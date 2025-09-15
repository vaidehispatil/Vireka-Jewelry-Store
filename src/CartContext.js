import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;