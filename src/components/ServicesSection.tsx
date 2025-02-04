import React from 'react';
import { Link } from 'gatsby';

const ServicesSection = () => {
  return (
    <section className="bg-[#0B1121] py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Electrical Equipment */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Electrical Equipment</h3>
            <p className="text-gray-400 mb-6">Specialized in high-quality electrical equipment recycling</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Polemount Transformers
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Padmount Transformers
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Substation Transformers
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Dry-Type Transformers
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Voltage Regulators
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Reclosers
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Switchgear
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-gray-900/50 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg border border-gray-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Automotive & Industrial */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Automotive & Industrial</h3>
            <p className="text-gray-400 mb-6">Professional automotive and industrial scrap processing</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Engine blocks & transmissions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Used batteries & alternators
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Scrap aluminum wheels
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Heavy machinery scrap
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Copper wiring and harnesses
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Ferrous & Non-Ferrous */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Ferrous & Non-Ferrous</h3>
            <p className="text-gray-400 mb-6">Expert handling of various metal types</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Copper & brass scrap
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Aluminum scrap (extrusions, cast, turnings)
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Stainless steel scrap
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                Insulated wire scrap
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-indigo-500 mr-2">✓</span>
                High-grade alloys
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 