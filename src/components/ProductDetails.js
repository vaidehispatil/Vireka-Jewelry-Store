import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartContext from "../CartContext";
import "../App.css";

const products = [
  { id: 1, name: "Crystal Majesty Diamond Necklace", price: "₹45,000", stock: 2, image: "/images/diamond.jpg", description: "An elegant diamond necklace designed to make a royal statement.", manufacturer: "Vireka Jewelry Store" },
  { id: 2, name: "Timeless Beauty Diamond Set", price: "₹38,000", stock: 1, image: "/images/diamond2.jpg", description: "Classic and luxurious diamond jewelry for all occasions.", manufacturer: "Vireka Jewelry Store" },
  { id: 3, name: "Evening Splendor Diamond Choker", price: "₹42,000", stock: 2, image: "/images/diamond3.jpg", description: "A carefully crafted diamond choker featuring intricate designs.", manufacturer: " Vireka Jewelry Store." },
  { id: 4, name: "Golden Glam Accessories Pack", price: "₹2,200", stock: 10, image: "/images/accesories.jpg", description: "A mix of gold-toned accessories for everyday wear.", manufacturer: "Vireka Jewelry Store" },

  { id: 5, name: "Regal Pearl & Gold Set", price: "₹7,000", stock: 5, image: "/images/earring.jpg", description: "Traditional pearl and gold jewelry set for special events.", manufacturer: "Vireka Jewelry Store" },
  { id: 6, name: "Floral Radiance Jhumkas", price: "₹2,800", stock: 8, image: "/images/earring1.jpg", description: "Gold jhumka earrings with floral motifs and sparkling stones.", manufacturer: "Vireka Jewelry Store" },
  { id: 7, name: "Ruby Drop Jhumka Earrings", price: "₹3,200", stock: 6, image: "/images/earring2.jpg", description: "Designer jhumka earrings with red stone accents.", manufacturer: "Vireka Jewelry Store" },
  { id: 8, name: "Vireka's Festive Necklace Set", price: "₹17,500", stock: 2, image: "/images/vireka-special.jpg", description: "Multi-layered festive necklace set in gold finish.", manufacturer: "Vireka Jewelry Store" },

  { id: 9, name: "Enchanted Bridal Bangles", price: "₹5,400", stock: 7, image: "/images/red-bangles.jpg", description: "Traditional red bridal bangles with pearl tassels.", manufacturer: "Vireka Jewelry Store" },

];

export default function ProductDetails() {
  const { prodid } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id.toString() === prodid);
  if (!product) return null;

  const handleBuy = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => navigate("/")}>✖</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <div className="modal-details">
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Manufacturer:</strong> {product.manufacturer}</p>
          <button onClick={handleBuy}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

