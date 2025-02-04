import React from 'react';
import { Link } from 'gatsby';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1121] px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B1121]/50 to-[#0B1121]/80"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, rgba(11, 17, 33, 0.1) 100%)',
        }}></div>
      </div>
      <div className="container mx-auto relative z-10 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight font-poppins">
            Prithvi Metals: Transforming
            <br className="hidden sm:block" />
            <span className="sm:inline">Scrap into Opportunity</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Maximize value, minimize waste. Your trusted partner in sustainable metal recycling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/what-we-buy"
              className="w-full sm:w-auto bg-gray-900/50 hover:bg-gray-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border border-gray-700 transition duration-300 text-base sm:text-lg"
            >
              What We Buy
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gray-900/50 hover:bg-gray-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border border-gray-700 transition duration-300 text-base sm:text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1121] to-transparent"></div>
    </section>
  );
};

export default HeroSection; 