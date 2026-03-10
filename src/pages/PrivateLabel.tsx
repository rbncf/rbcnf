import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const PrivateLabel: React.FC = () => {
  return (
    <Layout>
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-8">
              <Badge variant="accent">Full-Service ODM</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Private Label and ODM Support for Growing Brands</h1>
              <p className="text-xl text-main-text font-medium leading-relaxed">
                Start with ready stock. Expand with repeat production and ODM when your market response grows.
              </p>
              <p className="text-lg text-secondary-text leading-relaxed">
                This program is designed for importers, resellers, and new skincare brands that want a faster entry model.
                You can begin with standardized products and then move into repeat production, label changes, or ODM-based expansion.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/private-label-b2b/1200/900" 
                  alt="Private Label B2B" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <Card variant="featured" className="space-y-6">
              <h3 className="text-2xl font-bold">What’s Included in the Standard Supply</h3>
              <p className="text-secondary-text leading-relaxed">
                Our standard pricing structure includes the product contents, container, label, folding box, and filling/production-related costs.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {['Product Contents', 'Container', 'Label', 'Folding Box', 'Filling Costs', 'Production Costs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="standard" className="space-y-6 bg-section-bg border-none">
              <h3 className="text-2xl font-bold">What May Require Extra Cost</h3>
              <p className="text-secondary-text leading-relaxed">
                Special containers, custom printing, foil finishing, separate box production, new packaging design, or major formula changes may require additional quotation.
              </p>
              <ul className="space-y-2 pt-4">
                {['Specialized Containers', 'Custom Printing / Foil', 'Separate Box Production', 'New Packaging Design', 'Major Formula Changes'].map((item, i) => (
                  <li key={i} className="text-sm text-secondary-text flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-[24px] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/label-design/1200/800" 
                  alt="Label Design" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl font-bold">Neutral and Easy-to-Use Label Structure</h2>
              <p className="text-lg text-secondary-text leading-relaxed">
                Our standard direction is based on neutral, broadly usable label design so buyers can adapt products more easily to their own branding. <br /><br />
                The main focus is product name, key ingredient, and volume, with simple visual differentiation by SKU.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="neutral">Product Name Focus</Badge>
                <Badge variant="neutral">Key Ingredient Highlight</Badge>
                <Badge variant="neutral">Volume Clarity</Badge>
                <Badge variant="neutral">SKU Color Coding</Badge>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[32px] mb-24 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">From First Order to Repeat ODM Supply</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our business model is built to support more than one-time sales.
              After initial supply, we aim to continue with repeat production, label updates, or ODM-based expansion using the same or similar product base.
            </p>
            <div className="flex justify-center gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-bold">01</p>
                <p className="text-sm text-white/60">Initial Supply</p>
              </div>
              <ArrowRight className="mt-2 text-white/40" />
              <div className="text-center">
                <p className="text-3xl font-bold">02</p>
                <p className="text-sm text-white/60">Repeat Orders</p>
              </div>
              <ArrowRight className="mt-2 text-white/40" />
              <div className="text-center">
                <p className="text-3xl font-bold">03</p>
                <p className="text-sm text-white/60">ODM Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-bg section-padding">
        <div className="container-narrow text-center space-y-8">
          <h2 className="text-3xl font-bold">Tell Us Your Brand Plan</h2>
          <p className="text-lg text-secondary-text">
            Share your target market, preferred formula, and order quantity. We will guide you to the best ready stock or ODM option.
          </p>
          <div className="max-w-md mx-auto pt-4">
            <Link to="/contact">
              <Button className="w-full py-4 text-lg">Start Private Label Inquiry</Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Not ready for custom ODM?"
        description="Our Ready Stock and Formula Library offer faster market entry with lower MOQs."
        primaryButtonText="View Ready Stock"
        secondaryButtonText="Explore Library"
        primaryButtonLink="/ready-stock"
        secondaryButtonLink="/formula-library"
      />
    </Layout>
  );
};

export default PrivateLabel;
