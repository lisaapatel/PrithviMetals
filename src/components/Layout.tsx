import React, { useState } from 'react';
import { Link } from 'gatsby';
import AnimatedLink from './common/AnimatedLink';
import Button from './common/Button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0B1121]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            <Link 
              to="/" 
              className="text-white text-xl sm:text-2xl font-bold font-poppins hover:text-indigo-400 transition-colors duration-300"
            >
              Prithvi Metals
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <AnimatedLink to="/">Home</AnimatedLink>
              <AnimatedLink to="/about">About Us</AnimatedLink>
              <AnimatedLink to="/what-we-buy">What We Buy</AnimatedLink>
              <Button to="/contact" variant="secondary">Contact Us</Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          {/* Backdrop - Light */}
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel - Darker background */}
          <div
            className={`absolute top-0 right-0 w-[75%] max-w-sm h-full bg-[#050810] border-l border-gray-700 shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 bg-gradient-to-b from-[#0B1121] to-[#050810]">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:text-indigo-400 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <Link
                  to="/"
                  className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                  activeClassName="text-indigo-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                  activeClassName="text-indigo-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/what-we-buy"
                  className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                  activeClassName="text-indigo-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What We Buy
                </Link>
                <Link
                  to="/contact"
                  className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                  activeClassName="text-indigo-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 sm:pt-20">
        {children}
      </main>

      <footer className="bg-[#070B14] border-t border-gray-800">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-start space-y-2 w-full md:w-auto">
              <span className="text-2xl font-bold text-white font-poppins">Prithvi Metals</span>
              <span className="text-gray-400">Sustainable metal scrap trading and recycling solutions</span>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-2 w-full md:w-auto">
              <a href="tel:+19255776586" className="text-gray-400 hover:text-white transition-colors">
                +1 (925) 577-6586
              </a>
              <a href="mailto:prithvi.metals.pm@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                prithvi.metals.pm@gmail.com
              </a>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-gray-800/50 py-6">
            <div className="text-center text-sm text-gray-500">
              © {currentYear} Prithvi Metals. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 