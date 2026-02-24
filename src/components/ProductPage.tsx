import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Truck, Phone, ShoppingBag, Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product as Product;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wishlistFeedback, setWishlistFeedback] = useState<{ show: boolean, message: string }>({ show: false, message: '' });

  // Reviews state
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: 'Sarah M.', rating: 5, comment: 'Absolutely love these frames! The quality is outstanding and they fit perfectly.', date: '2026-01-15' },
    { id: 2, name: 'Anonymous', rating: 4, comment: 'Great sunglasses, very stylish. Shipping took a bit longer than expected.', date: '2026-02-02' }
  ]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [hoveredRating, setHoveredRating] = useState(0);

  const isProductInWishlist = product ? isInWishlist(product.id) : false;

  const handleWishlistToggle = () => {
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
      setWishlistFeedback({ show: true, message: 'Removed from Wishlist' });
    } else {
      addToWishlist(product);
      setWishlistFeedback({ show: true, message: 'Added to Wishlist' });
    }
    setTimeout(() => setWishlistFeedback({ show: false, message: '' }), 3000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;
    
    const review: Review = {
      id: Date.now(),
      name: newReview.name.trim() || 'Anonymous',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="bg-white min-h-screen pt-10 pb-24 relative">
      <AnimatePresence>
        {wishlistFeedback.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
          >
            <Heart className={`w-4 h-4 ${isProductInWishlist ? 'fill-white' : ''}`} />
            <span className="text-xs font-semibold tracking-widest uppercase">{wishlistFeedback.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div 
              className="w-full bg-[#f5f5f4] aspect-square md:aspect-[4/5] relative overflow-hidden cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-out ${isZoomed ? 'scale-[2]' : 'scale-100'}`}
                style={{
                  transformOrigin: isZoomed ? `${mousePos.x}% ${mousePos.y}%` : 'center center'
                }}
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

            {/* Add to Cart & Wishlist */}
            <div className="flex flex-col gap-3 mb-8">
              <button 
                onClick={() => {
                  addToCart(product);
                  navigate('/cart');
                }}
                className="w-full bg-black text-white py-5 flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button 
                onClick={handleWishlistToggle}
                className={`w-full py-5 flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase border transition-all duration-300 ${isProductInWishlist ? 'bg-gray-100 border-gray-200 text-black' : 'bg-white border-black text-black hover:bg-gray-50'}`}
              >
                <Heart className={`w-4 h-4 ${isProductInWishlist ? 'fill-black' : ''}`} />
                {isProductInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

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
                <a href="https://wa.me/27739844001" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black transition-colors">Order by WhatsApp</a>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200 mb-12">
              {/* Product Description */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-6 flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase"
                >
                  Product Description
                  {activeAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === 'description' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="text-xs text-gray-400 mb-4">Style 859558 J0740 1012</p>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                          The House's eyewear collection continues to reinterpret emblematic motifs, from the GG, Web, bamboo, Horsebit and equestrian inspirations, in sumptuous materials, intricate craftsmanship, and fresh hues. These frames are presented in premium acetate and feature an engraved signature plaque.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

            {/* Customer Reviews */}
            <div className="mt-8">
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-8 border-b border-gray-200 pb-4">Customer Reviews</h2>
              
              {/* Review Form */}
              <div className="bg-[#f5f5f4] p-6 mb-10">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-5 h-5 transition-colors ${
                              star <= (hoveredRating || newReview.rating) 
                                ? 'fill-black text-black' 
                                : 'text-gray-300'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="reviewerName" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Name (Optional)</label>
                    <input
                      type="text"
                      id="reviewerName"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reviewComment" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Review</label>
                    <textarea
                      id="reviewComment"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      required
                      rows={4}
                      className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-white resize-none"
                      placeholder="Share your thoughts about this product..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-black text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              {/* Reviews List */}
              <div className="space-y-8">
                {reviews.length === 0 ? (
                  <p className="text-sm text-gray-500 font-light">No reviews yet. Be the first to review this product!</p>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-3 h-3 ${star <= review.rating ? 'fill-black text-black' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-400">{review.date}</span>
                      </div>
                      <h4 className="text-xs font-bold tracking-widest uppercase mb-2">{review.name}</h4>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                )}
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
