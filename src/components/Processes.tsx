import React from 'react';
import { processes } from '../data/processes';
import { Process } from '../types';

const Processes: React.FC = () => {
  return (
    <section className="py-8 sm:py-16 bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-xl text-gray-400">Simple and efficient steps to recycle your metal scrap</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processes.map((process: Process, index: number) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600/10 border border-indigo-500/20 mb-6">
                <span className="text-2xl font-bold text-indigo-400">{process.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {process.title}
              </h3>
              <p className="text-gray-400">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes; 