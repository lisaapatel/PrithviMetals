import React from 'react';
import { Link, HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="min-h-screen flex items-center justify-center bg-[#0B1121]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-gray-900/50 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg border border-gray-700 transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="404: Not Found" />; 