import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Input, Textarea } from '../components/Input';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare, FileText, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <Badge variant="primary">Contact Us</Badge>
                <h1 className="text-4xl md:text-5xl font-bold">Let’s Talk About Your Next Skincare Product</h1>
                <p className="text-xl md:text-2xl text-secondary-text leading-relaxed max-w-xl">
                  Send us your inquiry for ready stock, private label, or ODM supply.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sku-bg rounded-xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-sm text-secondary-text">For general inquiries:</p>
                    <p className="text-sm font-bold text-primary">info@ampoule-b2b.com</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sku-bg rounded-xl flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-sm text-secondary-text">Mon-Fri, 9am-6pm KST:</p>
                    <p className="text-sm font-bold text-primary">+82 2-1234-5678</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sku-bg rounded-xl flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Visit Us</h4>
                    <p className="text-sm text-secondary-text">Headquarters:</p>
                    <p className="text-sm font-bold text-primary">Seoul, Republic of Korea</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sku-bg rounded-xl flex items-center justify-center text-primary">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Live Chat</h4>
                    <p className="text-sm text-secondary-text">Available for partners:</p>
                    <p className="text-sm font-bold text-primary">Start Chatting</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border-soft space-y-6">
                <h4 className="font-bold text-2xl">Need Product List and MOQ Details?</h4>
                <p className="text-secondary-text leading-relaxed">
                  Contact us and we will share the matching product list, formula options, and supply information.
                </p>
                <div className="flex gap-4">
                  <Card className="p-4 flex items-center gap-4 hover:border-primary cursor-pointer flex-1">
                    <div className="w-10 h-10 bg-section-bg rounded flex items-center justify-center text-primary">
                      <FileText size={20} />
                    </div>
                    <span className="text-sm font-bold">Download Catalog</span>
                  </Card>
                  <Card className="p-4 flex items-center gap-4 hover:border-primary cursor-pointer flex-1">
                    <div className="w-10 h-10 bg-section-bg rounded flex items-center justify-center text-primary">
                      <Globe size={20} />
                    </div>
                    <span className="text-sm font-bold">Global Logistics</span>
                  </Card>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 lg:p-12 rounded-[20px] border border-border-soft">
              <h3 className="text-2xl font-bold mb-8">Inquiry Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="Company Name" placeholder="Your Brand Name" required />
                  <Input label="Country" placeholder="e.g. United States" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="Contact Person" placeholder="John Doe" required />
                  <Input label="Email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="Website or Social Media" placeholder="https://... or @account" />
                  <Input label="Interested Product" placeholder="e.g. AMP001" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="Quantity" placeholder="e.g. 3,000" />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-main-text">Inquiry Type</label>
                    <select className="w-full px-4 py-3 bg-surface border border-border-soft rounded-[10px] text-main-text focus:outline-none focus:border-primary transition-colors">
                      <option>Ready Stock</option>
                      <option>Private Label</option>
                      <option>ODM</option>
                      <option>Repeat Order</option>
                      <option>Sample Request</option>
                    </select>
                  </div>
                </div>
                <Textarea label="Message" placeholder="Tell us about your project requirements..." required />
                <Button type="submit" className="w-full py-4 text-lg">Send Inquiry</Button>
                <p className="text-center text-xs text-secondary-text">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
