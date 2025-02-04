import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: 'Scrap Metal Collection',
    description: 'Professional collection services for all types of metal waste.',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Metal Processing',
    description: 'State-of-the-art processing facilities for optimal recycling.',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v4" />
      </svg>
    ),
    title: 'Industrial Solutions',
    description: 'Customized recycling solutions for industrial clients.',
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Comprehensive metal recycling solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600/10 border border-indigo-500/20 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices; 