import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
    } else {
      // Fallback if no state (e.g., direct URL access)
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [location, navigate]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-12 hover:text-gray-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Product Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[80vh] bg-[#f5f5f4] overflow-hidden shadow-sm flex items-center justify-center p-8 md:p-12"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Checkout Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="border-b border-gray-100 pb-8 mb-8">
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gray-400 mb-4 uppercase">
                {product.brand}
              </p>
              <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-black mb-4">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl font-serif text-black">
                {product.price}
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-black mb-4">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Masterfully curated, these {product.brand} frames feature premium acetate and polarized lenses for ultimate clarity and style. A testament to Durban's bold aesthetic vision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-5 h-5 mb-3 text-gray-400" />
                  <p className="text-[9px] font-bold tracking-[0.1em] uppercase">Free Shipping</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="w-5 h-5 mb-3 text-gray-400" />
                  <p className="text-[9px] font-bold tracking-[0.1em] uppercase">30-Day Returns</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-5 h-5 mb-3 text-gray-400" />
                  <p className="text-[9px] font-bold tracking-[0.1em] uppercase">2-Year Warranty</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-black text-white py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-all">
                Proceed to Payment
              </button>
              <p className="text-[10px] text-center text-gray-400 tracking-widest uppercase">
                Secure checkout powered by Flex Frames
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
