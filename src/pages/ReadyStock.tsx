import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { CTASection } from '../components/CTASection';
import { PRODUCTS } from '../constants';

const ReadyStock: React.FC = () => {
  return (
    <Layout>
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6 mb-16">
            <Badge variant="primary">Fast B2B Supply</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Ready Stock Ampoules for Fast B2B Supply</h1>
            <p className="text-xl text-main-text font-medium leading-relaxed">
              Pre-produced 30ml skincare ampoules for buyers who need practical MOQ, faster lead time, and factory-direct pricing.
            </p>
            <p className="text-lg text-secondary-text leading-relaxed">
              Our ready stock line is built for buyers who want to move faster than traditional ODM development.
              Instead of waiting for a full development cycle, you can start with pre-prepared ampoule products and continue with repeat orders or ODM conversion later.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Available Product Line</h2>
              <p className="text-secondary-text">Our initial ready stock line starts with four core ampoule SKUs selected for broad market appeal and easier B2B sales development.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <Card key={product.id} variant="sku" className="group flex flex-col h-full">
                  <div className="aspect-square overflow-hidden bg-section-bg relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="primary">Ready Stock</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{product.category}</span>
                      <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                    </div>
                    <p className="text-sm text-secondary-text leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <div className="pt-6 border-t border-border-soft flex items-center justify-between">
                      <div className="bg-sku-bg px-3 py-1.5 rounded text-xs font-mono font-bold text-primary">
                        {product.sku}
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-secondary-text uppercase tracking-wider">MOQ</p>
                        <p className="text-sm font-bold text-main-text">{product.moq} Units</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-bg section-padding">
        <div className="container-standard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Basic Supply Conditions</h2>
              <div className="space-y-6">
                {[
                  { label: 'Volume', value: '30ml ampoule' },
                  { label: 'MOQ', value: '3,000 per SKU' },
                  { label: 'Packaging', value: 'Standard package structure available' },
                  { label: 'Private Label', value: 'Option available' },
                  { label: 'ODM Transition', value: 'Possible for repeat orders' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-border-soft pb-4">
                    <span className="text-secondary-text font-medium">{item.label}</span>
                    <span className="text-main-text font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface p-10 rounded-[20px] shadow-card border border-border-soft space-y-6">
              <h3 className="text-2xl font-bold">Request the Ready Stock List</h3>
              <p className="text-secondary-text text-sm">
                Send us your market, quantity, and target product. We will share the matching product list and inquiry details.
              </p>
              <div className="space-y-4 pt-4">
                <input 
                  type="email" 
                  placeholder="Your Work Email" 
                  className="w-full px-4 py-3 bg-background border border-border-soft rounded-[10px] focus:outline-none focus:border-primary"
                />
                <button className="w-full bg-primary text-white font-bold py-4 rounded-[10px] hover:bg-primary-hover transition-colors">
                  Request Product List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need a custom formulation?"
        description="If our ready stock doesn't match your vision, explore our formula library or request a custom ODM project."
        primaryButtonText="Contact ODM Team"
        secondaryButtonText="View Formula Library"
      />
    </Layout>
  );
};

export default ReadyStock;
