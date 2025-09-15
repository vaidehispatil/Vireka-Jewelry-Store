import React, { useContext, useRef, useState } from "react";
import CartContext from "../CartContext";
import "../App.css";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  
  const cardRef = useRef(); // For Card Number
  const cvvRef = useRef();  // For CVV

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      setShowCheckoutForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardNumber = cardRef.current.value;
    const cvv = cvvRef.current.value;

    if (!cardNumber || !cvv) {
      alert("Please fill in both fields!");
      return;
    }

    const lastFourDigits = cardNumber.slice(-4);
    alert(`Payment has been initiated for card ending with ${lastFourDigits}`);

    // Reset form and cart
    setShowCheckoutForm(false);
    setCartItems([]);
  };

  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>

      {cartItems.length === 0 ? (
        <p className="cart-prompt">Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} width="50" />
            <span>{item.name} - {item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      {/* Checkout button */}
      {!showCheckoutForm && cartItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckoutClick}>
          Check Out Cart
        </button>
      )}

      {/* Checkout form */}
      {showCheckoutForm && (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>Card Number:</label>
          <input type="text" ref={cardRef} placeholder="1234 5678 9012 3456" />

          <label>CVV:</label>
          <input type="password" ref={cvvRef} placeholder="123" />

          <button type="submit" className="pay-btn">Pay</button>
        </form>
      )}
    </div>
  );
}