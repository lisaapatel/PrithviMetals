import React from 'react';
import { Link } from 'gatsby';

interface ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ to, href, children, className = '' }: ButtonProps) => {
  const baseClasses = `
    inline-block bg-gray-900/50 hover:bg-gray-800 
    text-white font-semibold py-3 px-6 rounded-lg 
    border border-gray-700 transition-all duration-300
    transform hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0 active:shadow-md
  `;

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button; 