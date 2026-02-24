import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, X, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-10 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-12 text-black text-center">Your Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Heart className="w-16 h-16 text-gray-200 mb-6" />
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-8 text-center">Your wishlist is currently empty</p>
            <Link 
              to="/"
              className="bg-black text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {wishlist.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative flex flex-col"
              >
                <div 
                  className="aspect-square bg-[#f5f5f4] mb-4 overflow-hidden relative cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors z-10"
                  aria-label="Remove from wishlist"
                >
                  <X className="w-4 h-4 text-black" />
                </button>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-[10px] md:text-xs font-medium tracking-widest uppercase mb-1 text-black truncate pr-8">{product.name}</h3>
                    <p className="text-[10px] md:text-xs font-serif tracking-wider text-black mb-4">{product.price}</p>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart(product);
                      navigate('/cart');
                    }}
                    className="w-full bg-white border border-black text-black py-3 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors mt-auto"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
