import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { CTASection } from '../components/CTASection';
import { FORMULAS } from '../constants';
import { Beaker, ShieldCheck, Target, Zap } from 'lucide-react';

const FormulaLibrary: React.FC = () => {
  return (
    <Layout>
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6 mb-16">
            <Badge variant="accent">R&D Database</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Formula Library for Faster Product Selection</h1>
            <p className="text-xl text-main-text font-medium leading-relaxed">
              Choose from standardized ampoule formulas and move more quickly toward private label or ODM supply.
            </p>
            <p className="text-lg text-secondary-text leading-relaxed">
              Our formula library is designed to help buyers identify products more easily using clear product codes and simple concept-based naming.
              This structure also supports smoother communication, inventory management, and future ODM conversion.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Core Ampoule Formulas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['AMP001 — Hyaluronic Hydration Ampoule', 'AMP002 — Vitamin C Brightening Ampoule', 'AMP003 — Niacinamide Tone-up Ampoule', 'AMP004 — Peptide Firming Ampoule'].map((item, i) => (
                  <Card key={i} className="p-6 border-l-4 border-primary">
                    <p className="font-bold text-primary">{item}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-secondary-text">Optional Future Line</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'AMP005 — Cica Calming Ampoule',
                  'AMP006 — Ceramide Barrier Ampoule',
                  'AMP007 — PDRN Repair Ampoule',
                  'AMP008 — Retinol Renewal Ampoule',
                  'AMP009 — Collagen Firming Ampoule',
                  'AMP010 — Propolis Nutrition Ampoule'
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-section-bg rounded-lg text-sm font-medium text-secondary-text border border-border-soft">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-bg section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why This Structure Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Target size={32} />, title: 'Easier Selection', desc: 'Simplified product identification for buyers.' },
              { icon: <Zap size={32} />, title: 'Faster Communication', desc: 'Streamlined inquiry and quotation process.' },
              { icon: <ShieldCheck size={32} />, title: 'Smooth Transition', desc: 'Better path from ready stock to ODM.' },
              { icon: <Beaker size={32} />, title: 'Scalable Expansion', desc: 'Easy line expansion over time.' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-primary mx-auto">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-secondary-text leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ask for Formula Library"
        description="Get the full technical details and ingredient lists for our standardized formulas."
        primaryButtonText="Request Library Details"
        secondaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default FormulaLibrary;
