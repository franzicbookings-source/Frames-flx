import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand & Tagline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[clamp(2.5rem,10vw,4rem)] sm:text-5xl lg:text-6xl font-serif tracking-tight mb-10 text-black leading-[1.1]">
                <span className="italic text-gray-400">See it.</span> Wear it. <span className="italic text-gray-400">Own it.</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black"></div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black">
                  Durban, South Africa
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-10 lg:pl-12">
            <div className="flex flex-col">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">Shop</h3>
              <ul className="space-y-5 text-[13px] text-black font-medium tracking-widest">
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Sun</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Optical</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>New Arrivals</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Best Sellers</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">Support</h3>
              <ul className="space-y-5 text-[13px] text-black font-medium tracking-widest">
                <li><a href="mailto:hello@flexframes.co.za" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>hello@flexframes.co.za</a></li>
                <li><a href="https://wa.me/27739844001" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>073 984 4001</a></li>
                <li><Link to="/shipping-returns" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Shipping & Returns</Link></li>
                <li><Link to="/faq" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>FAQ</Link></li>
                <li><Link to="/care-guide" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Care Guide</Link></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">Social</h3>
              <ul className="space-y-5 text-[13px] text-black font-medium tracking-widest">
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Instagram</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>Pinterest</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors relative group w-fit block"><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Massive Logo */}
        <div className="w-full border-t border-black pt-12 mb-12 flex items-center justify-center overflow-hidden select-none">
          <h1 className="text-[clamp(3.5rem,16vw,18rem)] leading-[0.7] font-serif tracking-tighter text-black whitespace-nowrap opacity-100">
            FLEX FRAMES
          </h1>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold text-center md:text-left">
          <p className="mb-6 md:mb-0">&copy; {new Date().getFullYear()} FLEX FRAMES. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 sm:space-x-10">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
