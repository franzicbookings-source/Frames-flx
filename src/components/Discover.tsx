import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Discover() {
  const navigate = useNavigate();

  const handleProductClick = (id: number, name: string, brand: string, price: string, image: string) => {
    navigate(`/product/${id}`, { state: { product: { id, name, brand, price, image } } });
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 md:mb-16 border-b border-gray-200 pb-6"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-black leading-[1.1] pr-4">
            Ceega's <br className="hidden md:block" />
            <span className="italic text-gray-400">Summer Selection</span>
          </h2>
          <div className="flex-shrink-0">
            <a href="#" className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
              Explore All
            </a>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
          {/* Large feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 group cursor-pointer"
            onClick={() => handleProductClick(1, 'LV Matte Sport Polarized', 'Louis Vuitton', 'R3500', 'https://i.ibb.co/fVxhSH4C/IMG-20260219-WA0047.jpg')}
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#f5f5f4] mb-6 shadow-sm rounded-sm">
              <img 
                src="https://i.ibb.co/fVxhSH4C/IMG-20260219-WA0047.jpg" 
                alt="LV Matte Sport Polarized"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif tracking-widest uppercase mb-3 text-black">LV Matte Sport</h3>
            <p className="text-sm md:text-base text-gray-500 tracking-wide leading-relaxed max-w-md">
              Sculptural frames, meticulously crafted for the bold. A true statement piece for the summer stage.
            </p>
          </motion.div>
          
          {/* Smaller features stacked */}
          <div className="md:col-span-5 flex flex-col justify-end space-y-16 md:pl-8 lg:pl-12 mt-10 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group cursor-pointer"
              onClick={() => handleProductClick(7, 'Gucci Oversized GG', 'Gucci', 'R3500', 'https://i.ibb.co/WW5HZRs4/IMG-20260219-WA0048.jpg')}
            >
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-[#f5f5f4] mb-6 shadow-sm rounded-sm">
                <img 
                  src="https://i.ibb.co/WW5HZRs4/IMG-20260219-WA0048.jpg" 
                  alt="Gucci Oversized GG"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                />
              </div>
              <h3 className="text-lg md:text-xl font-serif tracking-widest uppercase mb-2 text-black">Gucci Oversized</h3>
              <p className="text-sm text-gray-500 tracking-wide leading-relaxed">
                Geometric perfection for the modern muse.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group cursor-pointer"
              onClick={() => handleProductClick(15, 'Gucci Slim Rectangle', 'Gucci', 'R3500', 'https://i.ibb.co/TDwdvGmW/IMG-20260219-WA0057.jpg')}
            >
              <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-[#f5f5f4] mb-6 shadow-sm rounded-sm">
                <img 
                  src="https://i.ibb.co/TDwdvGmW/IMG-20260219-WA0057.jpg" 
                  alt="Gucci Slim Rectangle"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                />
              </div>
              <h3 className="text-lg md:text-xl font-serif tracking-widest uppercase mb-2 text-black">Gucci Slim</h3>
              <p className="text-sm text-gray-500 tracking-wide leading-relaxed">
                The classic rectangle, reimagined with architectural precision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
