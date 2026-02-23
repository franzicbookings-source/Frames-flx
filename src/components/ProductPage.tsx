import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Truck, Phone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

export default function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product as Product;

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
        <button onClick={() => navigate('/')} className="ml-4 underline">Go back</button>
      </div>
    );
  }

  // Mock data for variations and angles
  const colors = [
    { name: 'Black', image: product.image },
    { name: 'Tortoise', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Grey', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000' }
  ];

  const images = [
    colors[selectedColor].image,
    'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1000', // Mock angle 1
    'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=1000', // Mock angle 2
  ];

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const handleColorSelect = (idx: number) => {
    setSelectedColor(idx);
    setSelectedImage(0); // Reset to main image of that color
  };

  return (
    <div className="bg-white min-h-screen pt-10 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Images */}
          <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible md:w-24 flex-shrink-0">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 border ${selectedImage === idx ? 'border-black' : 'border-transparent'} bg-[#f5f5f4] overflow-hidden`}
                >
                  <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="w-full bg-[#f5f5f4] aspect-square md:aspect-[4/5] relative overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-4 text-black">{product.name}</h1>
            <p className="text-xl font-serif tracking-wider text-black mb-8">{product.price}</p>

            {/* Color Variations */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4">
                Variation <span className="text-black ml-1">{colors[selectedColor].name}</span>
              </p>
              <div className="flex gap-4">
                {colors.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleColorSelect(idx)}
                    className={`w-14 h-14 border ${selectedColor === idx ? 'border-black' : 'border-gray-200'} flex items-center justify-center p-1 transition-colors bg-[#f5f5f4]`}
                  >
                    <img src={color.image} alt={color.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag */}
            <button 
              onClick={() => navigate('/checkout', { state: { product } })}
              className="w-full bg-black text-white py-5 flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors mb-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Delivery Info */}
            <div className="space-y-4 mb-12 text-sm text-gray-600 font-light">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  Estimated complimentary Express delivery: <br/>
                  <span className="font-medium text-black">1-3 Weeks</span>
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+27123456789" className="underline underline-offset-4 hover:text-black transition-colors">Order by Phone</a>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              {/* Product Description */}
              <div className="py-6 border-b border-gray-200">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4">Product Description</h3>
                <p className="text-xs text-gray-400 mb-4">Style 859558 J0740 1012</p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  The House's eyewear collection continues to reinterpret emblematic motifs, from the GG, Web, bamboo, Horsebit and equestrian inspirations, in sumptuous materials, intricate craftsmanship, and fresh hues. These frames are presented in premium acetate and feature an engraved signature plaque.
                </p>
              </div>

              {/* Product Details */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion('details')}
                  className="w-full py-6 flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase"
                >
                  Product Details
                  {activeAccordion === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === 'details' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-6 text-sm text-gray-600 font-light list-disc pl-5 space-y-2">
                        <li>Shiny black acetate frame</li>
                        <li>Shiny black acetate temples with logo</li>
                        <li>Solid grey lens</li>
                        <li>100% UVA/UVB protection</li>
                        <li>Frame height: 5cm; Frame width: 14.5cm</li>
                        <li>Made in Italy</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Materials & Care */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-6 flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase"
                >
                  Materials & Care
                  {activeAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === 'materials' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-gray-600 font-light leading-relaxed">
                        Our products are made with carefully selected materials. Please handle with care for longer product life.
                        <br/><br/>
                        Store in the provided case. Clean with a soft, dry cloth. If needed, use a damp cloth and mild detergent. Do not use solvents (e.g. alcohol, acetone) or aggressive detergents which may alter the features of the glasses.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Commitment */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion('commitment')}
                  className="w-full py-6 flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase"
                >
                  Our Commitment
                  {activeAccordion === 'commitment' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === 'commitment' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-gray-600 font-light leading-relaxed">
                        We are committed to implementing a culture of sustainability and responsibility. We constantly strive to reduce our environmental impact and promote positive social change.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32">
          <h2 className="text-2xl font-serif tracking-widest uppercase text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Mock related products */}
            {[
              { name: 'LV Black Signature', brand: 'Louis Vuitton', price: 'R3500', image: 'https://i.ibb.co/YBfPxK24/IMG-20260219-WA0049.jpg' },
              { name: 'Burberry Metal Square', brand: 'Burberry', price: 'R3500', image: 'https://i.ibb.co/pjpg8xNt/IMG-20260219-WA0050.jpg' },
              { name: 'Tom Ford Grey Square', brand: 'Tom Ford', price: 'R3500', image: 'https://i.ibb.co/qLPMrvqQ/IMG-20260219-WA0055.jpg' },
              { name: 'Gucci Slim Rectangle', brand: 'Gucci', price: 'R3500', image: 'https://i.ibb.co/TDwdvGmW/IMG-20260219-WA0057.jpg' }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => navigate('/product/related', { state: { product: { ...item, id: 100 + idx } } })}>
                <div className="aspect-square bg-[#f5f5f4] mb-4 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[10px] md:text-xs font-medium tracking-widest uppercase mb-1 text-black truncate">{item.name}</h3>
                <p className="text-[10px] md:text-xs font-serif tracking-wider text-black">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
