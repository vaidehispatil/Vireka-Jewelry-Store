import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import CartContext from "../CartContext";
import "../App.css";

export default function Product({ id, name, price, stock: initialStock, image }) {
  const [stock, setStock] = useState(initialStock);
  const { addToCart } = useContext(CartContext); // ✅ get addToCart

  const handleBuy = () => {
    if (stock > 0) {
      setStock(stock - 1);       // decrease stock
      addToCart({ id, name, price, image }); // ✅ add product to cart
      alert(`${name} added to cart!`);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-name">{name}</div>
      <div className="product-details">
        <span className="product-price">{price}</span>
        <span className="separator">|</span>
        <span className="product-stock">Stock: {stock}</span>
      </div>

      <button className="buy-btn" onClick={handleBuy} disabled={stock === 0}>
        {stock === 0 ? "Out of Stock" : "Buy"}
      </button>

      <nav>
        <Link to={`/product/${id}`} className="view-link">
          View Product
        </Link>
      </nav>
    </div>
  );
}