import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center lg:hidden">
          <button 
            className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button className="p-2 ml-1 hover:bg-gray-50 rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[11px] font-semibold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-max">
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-serif tracking-widest uppercase font-bold hover:opacity-70 transition-opacity">
            Flex Frames
          </Link>
        </div>

        <div className="flex items-center space-x-1 md:space-x-4">
          <button className="hidden lg:block p-2 hover:bg-gray-50 rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden lg:block p-2 hover:bg-gray-50 rounded-full transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 -mr-2 md:mr-0 hover:bg-gray-50 rounded-full transition-colors" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
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
              <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6 px-6">Explore Collections</p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-8 space-x-4"
              >
                {navLinks.map((link) => (
                  <motion.a
                    variants={itemVariants}
                    key={link.name}
                    href={link.href} 
                    className="flex-shrink-0 w-[75%] sm:w-[60%] aspect-[4/5] relative rounded-sm overflow-hidden snap-center group shadow-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img src={link.image} alt={link.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-serif tracking-widest uppercase text-white drop-shadow-md">
                          {link.name}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                          <ArrowRight className="w-4 h-4" />
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
                className="px-6 mt-2 flex flex-col space-y-6"
              >
                 <a href="#" className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-gray-100 pb-4 flex justify-between items-center hover:text-gray-500 transition-colors">
                   Stores
                   <ArrowRight className="w-4 h-4 text-gray-300" />
                 </a>
                 <a href="#" className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-gray-100 pb-4 flex justify-between items-center hover:text-gray-500 transition-colors">
                   Account
                   <User className="w-4 h-4 text-gray-300" />
                 </a>
                 <a href="#" className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-gray-100 pb-4 flex justify-between items-center hover:text-gray-500 transition-colors">
                   Search
                   <Search className="w-4 h-4 text-gray-300" />
                 </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
