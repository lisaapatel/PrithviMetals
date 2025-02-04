import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`
      bg-gray-900/50 backdrop-blur-sm 
      border border-gray-800 rounded-xl p-6 
      transition-all duration-300 
      hover:border-indigo-500/50 
      hover:-translate-y-1 hover:shadow-xl
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card; 