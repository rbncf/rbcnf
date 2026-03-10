import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Ready Stock', path: '/ready-stock' },
    { name: 'Formula Library', path: '/formula-library' },
    { name: 'Private Label', path: '/private-label' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border-soft py-4' : 'bg-transparent py-6'}`}>
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tighter text-primary">RB CNF</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-primary underline underline-offset-8' : 'text-secondary-text'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="primary" className="px-5 py-2.5 text-sm">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border-soft p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium text-secondary-text hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="block" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full">Contact Us</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
