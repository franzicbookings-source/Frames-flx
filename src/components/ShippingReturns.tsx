import React from 'react';
import { motion } from 'motion/react';

export default function ShippingReturns() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest uppercase text-black mb-12 text-center">
            Shipping & Returns
          </h1>

          <div className="space-y-12 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-6 border-b border-gray-200 pb-2">Shipping Information</h2>
              <p className="mb-4">
                We offer complimentary express shipping on all orders within South Africa. Orders are typically processed within 1-2 business days.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Standard Delivery:</strong> 3-5 business days (Free)</li>
                <li><strong>Express Delivery:</strong> 1-3 business days (Free on orders over R2000)</li>
                <li><strong>International Shipping:</strong> Currently, we only ship within South Africa.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic">
                *Please note that delivery times are estimates and may vary depending on your location and courier schedules.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-6 border-b border-gray-200 pb-2">Return Policy</h2>
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. If for any reason you are not, we accept returns within 14 days of delivery.
              </p>
              <p className="mb-4">
                To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging with all tags attached.
              </p>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-black mt-6 mb-3">How to initiate a return:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Contact our customer service team at <a href="mailto:hello@flexframes.co.za" className="underline">hello@flexframes.co.za</a> with your order number.</li>
                <li>We will provide you with a return shipping label and instructions.</li>
                <li>Pack the item securely in its original packaging.</li>
                <li>Drop off the package at the designated courier location.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-serif tracking-widest uppercase text-black mb-6 border-b border-gray-200 pb-2">Refunds</h2>
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
