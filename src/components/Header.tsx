import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();

  const navLinks = [
    { name: 'Sun', href: '#', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop' },
    { name: 'Optical', href: '#', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop' },
    { name: 'Sale', href: '#', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop' },
    { name: 'Collections', href: '#', image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=800&auto=format&fit=crop' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Newsletter Top Bar */}
      <div className="bg-[#141414] text-white py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 relative">
        <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">Join the Flex Frames Club</p>
        <form className="flex items-center" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-transparent border-b border-white/30 text-white placeholder:text-white/50 px-2 py-1 text-[10px] focus:outline-none focus:border-white w-40 sm:w-48 transition-colors" 
            required 
          />
          <button type="submit" className="ml-3 text-[9px] font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors">
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        
        {/* Left Icons (Hamburger & Search) */}
        <div className="flex items-center space-x-1 sm:space-x-2 w-1/3 justify-start">
          <button 
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-gray-50 rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Logo (Center) */}
        <div className="flex-shrink-0 w-1/3 flex justify-center">
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-serif tracking-widest uppercase font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
            Flex Frames
          </Link>
        </div>

        {/* Right Icons (Wishlist & Cart) */}
        <div className="flex items-center space-x-1 sm:space-x-2 w-1/3 justify-end">
          <button 
            className="hidden sm:block p-2 hover:bg-gray-50 rounded-full transition-colors" 
            aria-label="Account"
            onClick={() => alert('Account feature coming soon!')}
          >
            <User className="w-5 h-5" />
          </button>
          <Link to="/wishlist" className="p-2 hover:bg-gray-50 rounded-full transition-colors relative" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
            )}
          </Link>
          <Link to="/cart" className="p-2 hover:bg-gray-50 rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-3 h-3 bg-black text-white text-[8px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-[70] lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <span className="text-xl font-serif tracking-widest uppercase font-bold ml-2">Flex Frames</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8">
              <p className="text-xs font-bold tracking-[0.25em] text-black uppercase mb-8 px-6 border-l-2 border-black ml-6 pl-4">Explore Collections</p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-12 space-x-6"
              >
                {navLinks.map((link) => (
                  <motion.a
                    variants={itemVariants}
                    key={link.name}
                    href={link.href} 
                    className="flex-shrink-0 w-[80%] sm:w-[60%] aspect-[4/5] relative rounded-lg overflow-hidden snap-center group shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img src={link.image} alt={link.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-500" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-serif tracking-widest uppercase text-white drop-shadow-lg">
                          {link.name}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:bg-white group-hover:text-black transition-all duration-300">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="px-6 mt-4 flex flex-col space-y-2"
              >
                 <button 
                   onClick={() => {
                     setIsMenuOpen(false);
                     alert('Account feature coming soon!');
                   }}
                   className="w-full text-left text-sm font-bold tracking-[0.2em] uppercase border-b border-gray-200 py-6 flex justify-between items-center hover:text-gray-500 transition-colors group"
                 >
                   Account
                   <div className="p-2 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                     <User className="w-5 h-5 text-black" />
                   </div>
                 </button>
                 <button 
                   onClick={() => {
                     setIsMenuOpen(false);
                     alert('Search feature coming soon!');
                   }}
                   className="w-full text-left text-sm font-bold tracking-[0.2em] uppercase border-b border-gray-200 py-6 flex justify-between items-center hover:text-gray-500 transition-colors group"
                 >
                   Search
                   <div className="p-2 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                     <Search className="w-5 h-5 text-black" />
                   </div>
                 </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
