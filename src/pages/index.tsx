import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import FeaturedServices from '../components/FeaturedServices';
import Features from '../components/Features';
import Processes from '../components/Processes';

const features = [
  {
    icon: '✅',
    title: 'Industry Expertise',
    description: 'Decades of experience in metal scrap trading and recycling.',
  },
  {
    icon: '✅',
    title: 'Ethical & Transparent',
    description: 'We value trust, integrity, and fair pricing.',
  },
  {
    icon: '✅',
    title: 'Global Reach',
    description: 'Seamless sourcing, shipping, and trade logistics from the USA to India.',
  },
  {
    icon: '✅',
    title: 'Competitive Pricing',
    description: 'Market-driven rates with fair deals for all types of metal scrap.',
  },
  {
    icon: '✅',
    title: 'Sustainability Commitment',
    description: 'Advocating responsible recycling for a better future.',
  },
];

const processes = [
  {
    step: '1',
    title: 'Material Assessment',
    description: 'We evaluate scrap materials for quality and composition.',
  },
  {
    step: '2',
    title: 'Competitive Pricing',
    description: 'Offering fair and transparent rates based on market trends.',
  },
  {
    step: '3',
    title: 'Logistics & Shipping',
    description: 'Managing end-to-end transportation and documentation.',
  },
  {
    step: '4',
    title: 'Payment & Completion',
    description: 'Ensuring smooth and timely transactions.',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Prithvi Metals - Sustainable Metal Scrap Trading & Recycling"
        description="Leading metal recycling company specializing in electrical equipment and industrial scrap. Committed to sustainable practices and fair pricing."
      />
      <HeroSection />
      <Processes />
      <Features />
      <FeaturedServices />
    </Layout>
  );
};

export default IndexPage; 