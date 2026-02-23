import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Product, Category } from '../types';

const products: Record<Category, Product[]> = {
  'men': [
    { id: 1, name: 'LV Matte Sport Polarized', brand: 'Louis Vuitton', price: 'R3500', image: 'https://i.ibb.co/fVxhSH4C/IMG-20260219-WA0047.jpg' },
    { id: 2, name: 'LV Black Signature', brand: 'Louis Vuitton', price: 'R3500', image: 'https://i.ibb.co/YBfPxK24/IMG-20260219-WA0049.jpg' },
    { id: 3, name: 'Burberry Metal Square', brand: 'Burberry', price: 'R3500', image: 'https://i.ibb.co/pjpg8xNt/IMG-20260219-WA0050.jpg' },
    { id: 4, name: 'Tom Ford Grey Square', brand: 'Tom Ford', price: 'R3500', image: 'https://i.ibb.co/qLPMrvqQ/IMG-20260219-WA0055.jpg' },
    { id: 5, name: 'Fendi Rimless Square', brand: 'Fendi', price: 'R3500', image: 'https://i.ibb.co/bMP2Q5rq/IMG-20260219-WA0061.jpg' },
    { id: 6, name: 'Maybach Executive', brand: 'Maybach', price: 'R3500', image: 'https://i.ibb.co/r8DnPFC/IMG-20260219-WA0062.jpg' },
  ],
  'women': [
    { id: 7, name: 'Gucci Oversized GG', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/WW5HZRs4/IMG-20260219-WA0048.jpg' },
    { id: 8, name: 'LV White Square', brand: 'Louis Vuitton', price: 'R3500', image: 'https://i.ibb.co/Kj7gHWgC/IMG-20260219-WA0051.jpg' },
    { id: 9, name: 'Valentino Geometric', brand: 'Valentino', price: 'R3500', image: 'https://i.ibb.co/sdFPB9WF/IMG-20260219-WA0052.jpg' },
    { id: 10, name: 'Gucci Crystal Logo', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/KcV7VXLP/IMG-20260219-WA0053.jpg' },
    { id: 11, name: 'Tiffany Spike Round', brand: 'Tiffany & Co.', price: 'R3500', image: 'https://i.ibb.co/B5wMX4Ym/IMG-20260219-WA0054.jpg' },
    { id: 12, name: 'Chanel Classic', brand: 'Chanel', price: 'R3500', image: 'https://i.ibb.co/21dFt7sQ/IMG-20260219-WA0056.jpg' },
    { id: 13, name: 'Bvlgari Gradient Round', brand: 'Bvlgari', price: 'R3500', image: 'https://i.ibb.co/nKXqcT5/IMG-20260219-WA0063.jpg' },
    { id: 14, name: 'Fendi Peach Gradient', brand: 'Fendi', price: 'R3500', image: 'https://i.ibb.co/cKVb56LW/IMG-20260219-WA0067.jpg' },
  ],
  'unisex': [
    { id: 15, name: 'Gucci Slim Rectangle', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/TDwdvGmW/IMG-20260219-WA0057.jpg' },
    { id: 16, name: 'Gucci Monogram Black', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/2mvGShr/IMG-20260219-WA0059.jpg' },
    { id: 17, name: 'Gucci Teal Cat-Eye', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/XxqwtbQQ/IMG-20260219-WA0058.jpg' },
    { id: 18, name: 'Gucci Rimless Rectangle', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/V08HwK7b/IMG-20260219-WA0060.jpg' },
  ],
  'optical': [
    { id: 19, name: 'Prada Optical Frame', brand: 'Prada', price: 'R3500', image: 'https://i.ibb.co/qMXCmN09/IMG-20260219-WA0069.jpg' },
  ]
};

export default function ProductSlider({ title, category }: { title: string, category: Category }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const items = products[category];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 border-b border-gray-200 pb-4 md:pb-6">
        <h2 className="text-sm sm:text-base md:text-xl font-serif tracking-[0.15em] text-black uppercase text-center md:text-left mb-4 md:mb-0">{title}</h2>
        <div className="flex items-center justify-center md:justify-end space-x-6">
          <a href="#" className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all whitespace-nowrap">
            Explore
          </a>
          <div className="hidden md:flex space-x-3">
            <button onClick={() => scroll('left')} className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 space-x-4 md:space-x-6 lg:space-x-8"
      >
        {items.map((product) => (
          <motion.div 
            key={product.id} 
            whileTap={{ scale: 0.98 }}
            onClick={() => handleProductClick(product)}
            className="group cursor-pointer flex-shrink-0 w-[42vw] sm:w-[30vw] md:w-[28vw] lg:w-[21vw] snap-start"
          >
            <div className="relative aspect-square md:aspect-[4/5] bg-[#f5f5f4] mb-4 md:mb-5 overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              
              {/* Mobile Indicator */}
              <div className="absolute top-2 right-2 lg:hidden">
                <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                  <Plus className="w-3 h-3 text-black" />
                </div>
              </div>

              {/* Desktop Quick View */}
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-out hidden lg:flex justify-center">
                <span className="bg-white text-black text-[9px] font-semibold tracking-[0.2em] uppercase px-6 py-2 md:px-8 md:py-3 shadow-lg hover:bg-black hover:text-white transition-colors">
                  Quick View
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start px-1">
              <div className="pr-2">
                <h3 className="text-[10px] md:text-sm font-medium tracking-widest uppercase mb-1 text-black truncate max-w-[120px] md:max-w-none">{product.name}</h3>
                <p className="text-[8px] md:text-[10px] font-medium text-gray-400 tracking-[0.15em] uppercase">{product.brand}</p>
              </div>
              <p className="text-[10px] md:text-sm font-serif tracking-wider text-black whitespace-nowrap">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
              >
                <X className="w-5 h-5 text-black" />
              </button>
              <div className="w-full md:w-1/2 bg-[#f5f5f4] aspect-square md:aspect-auto relative">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3">{selectedProduct.brand}</p>
                <h3 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-4 text-black leading-tight">{selectedProduct.name}</h3>
                <p className="text-xl font-serif tracking-wider text-black mb-6">{selectedProduct.price}</p>
                <div className="w-12 h-[1px] bg-gray-200 mb-6"></div>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 font-light">
                  Experience the perfect blend of luxury and everyday wear. These frames are meticulously crafted to provide unparalleled comfort and a bold, distinctive look for any occasion.
                </p>
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    navigate('/checkout', { state: { product: selectedProduct } });
                  }}
                  className="w-full bg-black text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
