import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns within 14 days of delivery. Items must be unworn, in their original condition, and with all tags attached. Please visit our Shipping & Returns page for more details."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within South Africa. We are working on expanding our shipping options in the future."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has shipped, you will receive a confirmation email with a tracking number. You can use this number on our courier partner's website to track your package."
    },
    {
      question: "Are your sunglasses authentic?",
      answer: "Yes, all our sunglasses are 100% authentic and sourced directly from authorized distributors. They come with original packaging and certificates of authenticity where applicable."
    },
    {
      question: "Do you offer prescription lenses?",
      answer: "At this time, we only offer non-prescription sunglasses and optical frames. We recommend taking our frames to your local optometrist to have prescription lenses fitted."
    },
    {
      question: "How should I care for my sunglasses?",
      answer: "Please refer to our Care Guide for detailed instructions on how to clean and maintain your sunglasses to ensure their longevity."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest uppercase text-black mb-12 text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex justify-between items-center text-left text-sm md:text-base font-bold tracking-[0.1em] uppercase text-black hover:text-gray-600 transition-colors"
                >
                  {faq.question}
                  {openIndex === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 ml-4" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 ml-4" />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-4">Still have questions?</p>
            <a 
              href="mailto:hello@flexframes.co.za" 
              className="inline-block border border-black text-black px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
