import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact Prithvi Metals - Get in Touch"
        description="Contact us for metal scrap trading and recycling solutions. We're here to help with your electrical equipment and industrial scrap needs."
      />
      
      <section className="bg-gray-900 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Looking to sell surplus electrical equipment or scrap metal? Let's work together!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-[#0B1121]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a href="tel:+19255776586" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      +1 (925) 577-6586
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a href="mailto:prithvi.metals.pm@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      prithvi.metals.pm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Location</p>
                    <p className="text-gray-400">California, USA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Markets</p>
                    <p className="text-gray-400">Exporting to: India & Other Global Markets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-600 transition-colors"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; 