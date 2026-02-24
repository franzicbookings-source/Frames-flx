import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    alert(isLogin ? 'Logged in successfully!' : 'Account created successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-black mb-8 text-center">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="Enter your full name"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required 
              className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              required 
              className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors mt-8"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors underline underline-offset-4"
          >
            {isLogin ? 'Need an account? Create one' : 'Already have an account? Sign in'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
