import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: string;
}

const FadeIn = ({ children, delay = '0ms' }: FadeInProps) => {
  return (
    <div
      className="animate-fade-in opacity-0"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default FadeIn; 