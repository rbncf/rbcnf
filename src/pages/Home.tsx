import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Package, Library, Zap } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { CTASection } from '../components/CTASection';
import { PRODUCTS, PROCESS_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <Badge variant="accent" className="mb-2">Factory-Direct B2B Supply</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="inline-block">Ready Stock Skincare</span> <br />
              <span className="text-primary inline-block">Ampoules for B2B Buyers</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text leading-relaxed max-w-xl">
              30ml ampoules with MOQ 3,000. <br />
              Factory-direct pricing, private label available, and ODM expansion support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/ready-stock">
                <Button className="w-full sm:w-auto px-8 py-4">View Ready Stock</Button>
              </Link>
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-4">Get Catalog</Button>
              <Link to="/contact">
                <Button variant="tertiary" className="w-full sm:w-auto px-8 py-4 flex gap-2">Send Inquiry <ArrowRight size={18} /></Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/skincare-hero-b2b/1200/1500" 
                alt="Skincare B2B Hero" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Why Buyers Choose Us */}
      <section className="bg-section-bg section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Fast Supply, Standardized Production, Scalable Support</h2>
              <p className="text-lg text-secondary-text leading-relaxed">
                We offer ready stock skincare ampoules designed for importers, distributors, resellers, and private label buyers. <br /><br />
                Our model helps buyers start with fast-moving products and expand into repeat orders or ODM production with less complexity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Package size={24} />, text: 'Ready Stock Available' },
                { icon: <Zap size={24} />, text: 'MOQ 3,000' },
                { icon: <CheckCircle2 size={24} />, text: 'Factory-Direct Pricing' },
                { icon: <Library size={24} />, text: 'Private Label Available' }
              ].map((item, i) => (
                <Card key={i} className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <p className="font-bold text-sm">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Ready Stock Ampoule Line</h2>
              <p className="text-secondary-text max-w-lg">High-performance formulations ready for immediate branding and distribution.</p>
            </div>
            <Link to="/ready-stock">
              <Button variant="secondary">View All Products</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <Card key={product.id} variant="sku" className="group">
                <div className="aspect-square overflow-hidden bg-section-bg">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{product.category}</span>
                    <Badge variant="primary">Ready Stock</Badge>
                  </div>
                  <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h4>
                  <p className="text-xs text-secondary-text line-clamp-2">{product.description}</p>
                  <div className="pt-4 flex items-center justify-between border-t border-border-soft">
                    <div className="bg-sku-bg px-2 py-1 rounded text-[10px] font-mono font-bold text-primary">
                      {product.sku}
                    </div>
                    <p className="text-xs text-secondary-text font-bold">MOQ: {product.moq}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How It Works */}
      <section className="bg-section-bg section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Simple B2B Ordering Process</h2>
            <p className="text-secondary-text">A streamlined path from selection to supply.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border-soft hidden md:block -z-0" />
            
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">{step.title}</h4>
                  <p className="text-sm text-secondary-text leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Private Label Starter */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Start Your Skincare Brand Faster</h2>
            <p className="text-lg text-secondary-text leading-relaxed">
              Our ready stock model is not just for inventory sales. <br /><br />
              It is also designed as a practical starter solution for new brands, resellers, and private label buyers who need faster launch timing and easier decision-making.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Standard packaging included',
                'Neutral label structure',
                'Easy formula selection',
                'ODM transition available'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/private-label" className="inline-block pt-4">
              <Button variant="secondary">Explore Private Label Options</Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[24px] overflow-hidden">
              <img 
                src="public/brand-starter.png" 
                alt="Brand Starter" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Capacity & Reliability */}
      <section className="bg-primary text-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Production Capacity for Growing Buyers</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                We operate with an in-house and outsourced production structure to support scalable supply. <br /><br />
                This allows us to respond to both ready stock sales and repeat ODM orders with better flexibility.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: 'In-house capacity', value: '70,000 units / month' },
                { label: 'Additional outsourced capacity', value: '100,000 units / month' },
                { label: 'Total response capacity', value: 'up to 170,000 units / month' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-8 rounded-2xl border border-white/10">
                  <p className="text-sm text-white/60 uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Final CTA */}
      <CTASection 
        title="Looking for Ready Stock Skincare Ampoules?"
        description="Request our product list, MOQ details, and private label options today."
        primaryButtonText="Get Catalog"
        secondaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default Home;
