import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BrandEthos() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row w-full overflow-hidden shadow-sm bg-[#050505]"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative overflow-hidden group">
            <img 
              src="https://i.ibb.co/v6RbsKJS/Screenshot-20260218-005243-Instagram.jpg" 
              alt="Ceega Wa Meropa - Founder of Flex Frames" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-black/10 transition-colors duration-700 group-hover:bg-black/20" />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center text-white">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] mb-6 uppercase text-gray-400">
              The Visionary
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest uppercase mb-8 leading-[1.1]">
              Crafted for <br className="hidden md:block" /> the Bold
            </h2>
            
            <div className="space-y-6 text-sm md:text-base text-gray-300 leading-relaxed font-light">
              <p>
                For renowned house DJ <strong className="text-white font-medium">Ceega Wa Meropa</strong>, the stage is a sanctuary. But the glaring lights and constant travel demand a shield. Sunglasses became his signature—a way to maintain an aura of mystique while deeply connecting with the crowd's energy.
              </p>
              <p>
                Yet, finding frames that offered both the rugged durability needed for international touring and the unapologetic luxury that matched his aesthetic proved impossible. So, he engineered his own.
              </p>
              <p className="italic text-gray-400 border-l-2 border-gray-700 pl-4 my-6">
                "Flex Frames was born from the rhythm of the night. Designed for the creators, the visionaries, and those who move to their own beat."
              </p>
            </div>

            <button className="group/btn mt-10 inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-4 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-500 w-fit">
              Discover His Collection
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
