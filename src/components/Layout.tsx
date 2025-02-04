import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center">
              <span className="font-poppins text-xl sm:text-2xl font-semibold text-white">
                Prithvi Metals
              </span>
            </Link>
            
            <div className="hidden sm:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/what-we-buy" className="text-gray-300 hover:text-white transition-colors">
                What We Buy
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-16 sm:pt-20">
        {children}
      </main>

      <footer className="bg-[#0B1121] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-start space-y-2">
              <span className="text-2xl font-bold text-white font-poppins">Prithvi Metals</span>
              <span className="text-gray-400">Sustainable metal scrap trading and recycling solutions</span>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <a href="tel:+19255776586" className="text-gray-400 hover:text-white transition-colors">
                +1 (925) 577-6586
              </a>
              <a href="mailto:prithvi.metals.pm@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                prithvi.metals.pm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 