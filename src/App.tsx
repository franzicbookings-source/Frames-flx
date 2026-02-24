import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import Discover from './components/Discover';
import BrandEthos from './components/BrandEthos';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';
import Wishlist from './components/Wishlist';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

function Home() {
  return (
    <main>
      <Hero />
      <ProductSlider title="MEN'S LUXURY SUNGLASSES" category="men" />
      <ProductSlider title="WOMEN'S LUXURY SUNGLASSES" category="women" />
      <ProductSlider title="UNISEX DESIGNER SUNGLASSES" category="unisex" />
      <ProductSlider title="OPTICAL FRAMES" category="optical" />
      <Discover />
      <BrandEthos />
      <Newsletter />
    </main>
  );
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-white text-black font-sans">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}
