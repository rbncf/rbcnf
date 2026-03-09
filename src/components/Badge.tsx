import React from 'react';

interface BadgeProps {
  variant?: 'neutral' | 'primary' | 'accent';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'neutral', 
  className = '', 
  children 
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full';
  
  const variants = {
    neutral: 'bg-section-bg text-secondary-text',
    primary: 'bg-sku-bg text-primary',
    accent: 'bg-[#F6EEE5] text-accent'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
