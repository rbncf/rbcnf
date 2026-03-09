import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-main-text">{label}</label>}
      <input
        className={`w-full px-4 py-3 bg-surface border border-border-soft rounded-[10px] text-main-text placeholder:text-secondary-text/50 focus:outline-none focus:border-primary transition-colors ${error ? 'border-error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-main-text">{label}</label>}
      <textarea
        className={`w-full px-4 py-3 bg-surface border border-border-soft rounded-[10px] text-main-text placeholder:text-secondary-text/50 focus:outline-none focus:border-primary transition-colors min-h-[120px] ${error ? 'border-error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
};
