import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border-soft pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter text-primary">RB CNF</span>
            </Link>
            <p className="text-secondary-text text-sm leading-relaxed max-w-xs">
              Professional B2B skincare manufacturing partner specializing in high-potency ampoules and standardized formulations.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-main-text mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-secondary-text text-sm hover:text-primary">About Us</Link></li>
              <li><Link to="/ready-stock" className="text-secondary-text text-sm hover:text-primary">Ready Stock</Link></li>
              <li><Link to="/formula-library" className="text-secondary-text text-sm hover:text-primary">Formula Library</Link></li>
              <li><Link to="/private-label" className="text-secondary-text text-sm hover:text-primary">Private Label</Link></li>
              <li><Link to="/contact" className="text-secondary-text text-sm hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-main-text mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary-text">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@ampoule-b2b.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-text">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+82 2-1234-5678</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-text">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Seoul, Republic of Korea</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-text">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <span>WhatsApp: +82 10-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-text">
                <Instagram size={18} className="text-primary shrink-0" />
                <span>Instagram: @ampoule_b2b</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-text">
                <Linkedin size={18} className="text-primary shrink-0" />
                <span>LinkedIn: RB CNF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-soft flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-text">© 2026 RB CNF. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-secondary-text hover:text-primary">Terms of Service</a>
            <a href="#" className="text-xs text-secondary-text hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
