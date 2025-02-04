import React from 'react';
import { Link } from 'gatsby';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedLink = ({ to, children, className = '' }: AnimatedLinkProps) => {
  const baseClasses = `
    relative text-gray-300 hover:text-white
    transition-colors duration-300
    after:content-['']
    after:absolute after:w-0 after:h-0.5
    after:bg-indigo-500 after:left-0 after:-bottom-1
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  return (
    <Link to={to} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default AnimatedLink; 