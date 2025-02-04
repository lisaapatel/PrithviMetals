import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About Prithvi Metals - Sustainable Metal Scrap Trading & Recycling"
        description="Learn about Prithvi Metals, a second-generation metal scrap trading company committed to sustainable recycling and global trade."
      />
      <section className="bg-gray-900 py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Prithvi Metals</h1>
            <p className="text-lg sm:text-xl text-gray-400">Sustainable Metal Scrap Trading & Recycling</p>
          </div>
        </div>
      </section>
      
      <section className="bg-[#0B1121] py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden bg-gray-800">
              <StaticImage
                src="../images/earth.jpg"
                alt="Sustainable metal recycling"
                className="!absolute inset-0 w-full h-full"
                objectFit="cover"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                quality={95}
                style={{ position: 'absolute' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121]/50 to-transparent"></div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Who We Are</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Prithvi Metals Inc. is a second-generation metal scrap trading company specializing in sourcing, 
                  processing, and exporting high-quality electrical equipment and industrial scrap. Rooted in 
                  the principles of sustainability, we are committed to responsible recycling while ensuring 
                  seamless trade and efficient global logistics.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  The name Prithvi means "Earth" in Sanskrit, symbolizing our dedication to environmental 
                  responsibility. By recycling metal scrap, we contribute to reducing waste, conserving 
                  resources, and promoting a cleaner, greener planet.
                </p>
              </div>
              <div className="pt-4 sm:pt-6">
                <a 
                  href="/what-we-buy" 
                  className="w-full sm:w-auto inline-block bg-gray-900/50 hover:bg-gray-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border border-gray-700 transition duration-300 text-center"
                >
                  Explore What We Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 