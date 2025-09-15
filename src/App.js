import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import ProductPanel from "./components/ProductPanel";
import UserChat from "./components/UserChat";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./CartContext"; //  import CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap everything inside CartProvider */}
      <Router>
        <div className="app-container">
          <Banner />
          <ProductPanel />
          <UserChat />

          {/* Popup modal for product details */}
          <Routes>
            <Route path="/product/:prodid" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;