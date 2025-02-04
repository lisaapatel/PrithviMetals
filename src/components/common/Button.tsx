import React from 'react';
import { Link } from 'gatsby';

interface ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ to, href, children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-6 py-3 rounded-lg font-semibold
    transform transition-all duration-300
    hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0 focus:outline-none
    ${variant === 'primary' 
      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
      : 'bg-gray-900/50 hover:bg-gray-800 text-white border border-gray-700'}
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
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button; 