import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] text-white flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center"
      >
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gray-400 mb-8 uppercase">
          Join The Inner Circle
        </p>
        <h2 className="text-[clamp(2rem,10vw,4rem)] sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-12 md:mb-16 leading-[1.1]">
          <span className="italic text-gray-500">See it.</span> Wear it. <span className="italic text-gray-500">Own it.</span>
        </h2>
        
        <form className="relative max-w-md mx-auto group">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full bg-transparent border-b border-white/20 pb-4 text-center text-xs md:text-sm tracking-[0.2em] placeholder-gray-600 outline-none focus:border-white transition-colors"
            required
          />
          <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 pb-4 opacity-40 hover:opacity-100 transition-opacity" aria-label="Subscribe">
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
