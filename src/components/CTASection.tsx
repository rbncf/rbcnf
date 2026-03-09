import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to build your brand?",
  description = "Connect with our experts to discuss your requirements and get a customized quote for your skincare line.",
  primaryButtonText = "Contact Us Now",
  secondaryButtonText = "View Formula Library",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/formula-library"
}) => {
  return (
    <section className="bg-primary text-white section-padding">
      <div className="container-narrow text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="text-lg text-white/80 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to={primaryButtonLink}>
            <Button className="bg-white !text-primary hover:bg-sku-bg border-none w-full sm:w-auto">
              {primaryButtonText}
            </Button>
          </Link>
          <Link to={secondaryButtonLink}>
            <Button variant="secondary" className="!border-white !text-white hover:bg-white/10 w-full sm:w-auto">
              {secondaryButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
