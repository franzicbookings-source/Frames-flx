import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full bg-[#f5f5f4] pt-8 pb-16 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 z-10 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
            <p className="text-[10px] md:text-sm font-medium tracking-[0.3em] text-gray-500 mb-4 md:mb-6 uppercase">
              The New Standard
            </p>
            <h1 className="text-[clamp(3rem,14vw,5rem)] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-serif leading-[0.85] md:leading-[0.9] tracking-tighter md:tracking-tight mb-6 md:mb-8 text-black">
              <span className="block italic text-gray-400">See it.</span>
              <span className="block">Wear it.</span>
              <span className="block">Own it.</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-8 md:mb-10 max-w-md leading-relaxed px-4 lg:px-0">
              Discover the latest collection of luxury designer eyewear. Curated for those who dare to stand out and define their own vision.
            </p>
            <div className="flex items-center gap-6">
              <button className="group flex items-center gap-4 bg-black text-white px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all">
                Shop Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/Kjw48xrN/Chat-GPT-Image-Feb-20-2026-01-18-35-PM.png"
                alt="Flex Frames Hero"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-12 md:-left-12 w-24 h-24 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl z-20">
              <div className="animate-[spin_20s_linear_infinite] w-full h-full relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full p-1 md:p-2 absolute">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[9px] md:text-[11px] font-medium tracking-[0.15em] uppercase fill-black">
                    <textPath href="#circlePath" startOffset="0%">
                      SEE IT • WEAR IT • OWN IT • SEE IT • WEAR IT • OWN IT • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <ArrowRight className="absolute w-4 h-4 md:w-6 md:h-6 text-black -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
