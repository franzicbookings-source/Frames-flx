import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate totals (assuming price is formatted like "R3500")
  const subtotal = cart.reduce((total, item) => {
    const priceNum = parseInt(item.product.price.replace(/\D/g, ''), 10) || 0;
    return total + (priceNum * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-12 hover:text-gray-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </button>

        <h1 className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-black mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 mb-8 font-light">Your shopping cart is currently empty.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-black text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
            >
              Discover Collections
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Cart Items List */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              {cart.map((item, index) => (
                <motion.div 
                  key={item.product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 pb-8 relative"
                >
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-black transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="w-full sm:w-40 aspect-square bg-[#f5f5f4] flex-shrink-0 cursor-pointer" onClick={() => navigate(`/product/${item.product.id}`, { state: { product: item.product } })}>
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex flex-col flex-grow justify-between py-2">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2">{item.product.brand}</p>
                      <h3 className="text-lg md:text-xl font-serif tracking-widest uppercase text-black pr-8 mb-2 cursor-pointer hover:underline" onClick={() => navigate(`/product/${item.product.id}`, { state: { product: item.product } })}>{item.product.name}</h3>
                      <p className="text-xs text-gray-500 mb-4">Variation: Black</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-3 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-3 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-lg font-serif tracking-wider text-black">
                        R{(parseInt(item.product.price.replace(/\D/g, ''), 10) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/3"
            >
              <div className="bg-[#f5f5f4] p-8">
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-8 text-sm font-light">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-black">R{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Shipping</span>
                    <span className="text-black">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-6 mb-8 flex justify-between items-end">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase">Total</span>
                  <span className="text-2xl font-serif tracking-wider text-black">R{subtotal.toLocaleString()}</span>
                </div>
                
                <button className="w-full bg-black text-white py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all flex justify-center items-center gap-2">
                  Checkout
                </button>
                
                <p className="text-[9px] text-center text-gray-400 tracking-widest uppercase mt-6">
                  Secure checkout powered by Flex Frames
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
