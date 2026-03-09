import React from 'react';

interface CardProps {
  variant?: 'standard' | 'featured' | 'sku';
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  variant = 'standard', 
  className = '', 
  children 
}) => {
  const baseStyles = 'bg-surface transition-all duration-300';
  
  const variants = {
    standard: 'border border-border-soft rounded-[16px] p-6 lg:p-7 hover:shadow-card hover:border-secondary-text/30 hover:-translate-y-1',
    featured: 'rounded-[20px] p-8 lg:p-10 shadow-card hover:shadow-card-hover hover:-translate-y-1',
    sku: 'border border-border-soft rounded-[16px] overflow-hidden hover:shadow-card'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
