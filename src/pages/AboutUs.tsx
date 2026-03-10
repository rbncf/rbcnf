import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { CTASection } from '../components/CTASection';
import { CheckCircle2, History, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-8">
              <Badge variant="primary">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Factory-Based Supply with Scalable Production Support</h1>
              <p className="text-xl text-main-text font-medium leading-relaxed">
                We focus on practical pricing, fast response, and standardized production for B2B skincare buyers.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[24px] overflow-hidden">
                <img 
                  src="https://rbcnf.cafe24.com/rbcnf/factory-supply.png" 
                  alt="Factory Supply" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="text-lg text-secondary-text leading-relaxed">
                We are a manufacturing-based skincare supplier building a B2B model around ready stock sales, formula-based product selection, and ODM expansion. <br /><br />
                Our goal is to support buyers with easier decision-making, faster supply, and repeatable product operations.
              </p>
            </div>
            <div className="bg-section-bg p-10 rounded-[24px] space-y-8">
              <h2 className="text-3xl font-bold">Why Work With Us</h2>
              <div className="space-y-4">
                {[
                  'Manufacturing-based cost competitiveness',
                  'Standardized 30ml ampoule structure',
                  'Factory-direct pricing communication',
                  'Ready stock and ODM hybrid model',
                  'Scalable in-house + outsourced production response'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span className="font-medium text-lg leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
            <h2 className="text-3xl font-bold">Markets We Are Preparing For</h2>
            <p className="text-xl text-secondary-text leading-relaxed">
              Our early focus is on practical B2B markets where product speed, price competitiveness, and easy product concepts matter. <br /><br />
              Priority targets include <span className="text-primary font-bold">Southeast Asia</span> and the <span className="text-primary font-bold">Middle East</span>, followed by selected additional markets.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Southeast Asia', 'Middle East', 'Global Expansion'].map((market, i) => (
                <Badge key={i} variant="neutral" className="px-6 py-2 text-sm">{market}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Partner with a Factory-Direct Supplier"
        description="Ready to scale your skincare business with reliable production and fast supply?"
        primaryButtonText="Contact Our Sales Team"
        secondaryButtonText="View Ready Stock"
        primaryButtonLink="/contact"
        secondaryButtonLink="/ready-stock"
      />
    </Layout>
  );
};

export default About;
