import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader; 