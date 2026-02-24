import React from 'react';
import { motion } from 'motion/react';

export default function CareGuide() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest uppercase text-black mb-12 text-center">
            Care Guide
          </h1>

          <div className="space-y-12 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-6 border-b border-gray-200 pb-2">General Care</h2>
              <p className="mb-4">
                To keep your sunglasses looking their best, always store them in the protective case provided when not in use. Avoid leaving them in direct sunlight or extreme heat (like the dashboard of a car) for extended periods, as this can damage the frames and lenses.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Always use two hands to put on and take off your sunglasses to prevent stretching the frames.</li>
                <li>Avoid placing your sunglasses face down on hard surfaces to prevent scratching the lenses.</li>
                <li>Keep them away from harsh chemicals, such as hairspray, perfume, and household cleaners.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-6 border-b border-gray-200 pb-2">Cleaning Instructions</h2>
              <p className="mb-4">
                Regular cleaning is essential to maintain the clarity and longevity of your lenses.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Rinse your sunglasses under lukewarm water to remove any loose dust or debris.</li>
                <li>Apply a small drop of mild dish soap to each lens and gently rub with your fingertips.</li>
                <li>Rinse thoroughly with lukewarm water.</li>
                <li>Dry gently with the microfiber cloth provided or a clean, soft, lint-free cloth.</li>
              </ol>
              <p className="mt-4 text-sm text-gray-500 italic">
                *Never use paper towels, tissues, or rough fabrics to clean your lenses, as they can cause micro-scratches.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-6 border-b border-gray-200 pb-2">Adjustments</h2>
              <p>
                If your sunglasses feel loose or uncomfortable, we recommend taking them to a professional optician for adjustment. Attempting to bend or adjust the frames yourself can cause irreversible damage.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
