import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const categories = [
  {
    title: 'Electrical Equipment',
    description: 'Specialized in high-quality electrical equipment recycling',
    items: [
      'Polemount Transformers',
      'Padmount Transformers',
      'Substation Transformers',
      'Dry-Type Transformers',
      'Voltage Regulators',
      'Reclosers',
      'Switchgear',
    ],
  },
  {
    title: 'Automobile & Industrial',
    description: 'Professional automotive and industrial scrap processing',
    items: [
      'Engine blocks & transmissions',
      'Used batteries & alternators',
      'Scrap aluminum wheels',
      'Heavy machinery scrap',
      'Copper wiring and harnesses',
    ],
  },
  {
    title: 'Ferrous & Non-Ferrous',
    description: 'Expert handling of various metal types',
    items: [
      'Copper & brass scrap',
      'Aluminum scrap (extrusions, cast, turnings)',
      'Stainless steel scrap',
      'Insulated wire scrap',
      'High-grade alloys',
    ],
  },
];

const WhatWeBuyPage = () => {
  return (
    <Layout>
      <SEO
        title="What We Buy - Prithvi Metals"
        description="Explore the wide range of metal scrap and electrical equipment we purchase at Prithvi Metals."
      />
      
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Materials We Buy</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find the right category for your materials. We ensure competitive pricing and efficient processing for all types of metal scrap.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1121]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <h2 className="text-2xl font-bold text-white mb-3">{category.title}</h2>
                  <p className="text-gray-400 mb-8">{category.description}</p>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-900/80 mt-auto">
                  <a
                    href="/contact"
                    className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeBuyPage; 