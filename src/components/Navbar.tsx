import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div id="top-announcement-bar" className="bg-[#2C2C2C] text-[#E5E1D8] text-xs py-2.5 px-4 sm:px-8 border-b border-[#3E3E3E] transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#A68A56]" />
              <span className="tracking-wide">Block 4, Gulshan-e-Iqbal, Karachi</span>
            </div>
            <span className="hidden md:inline text-stone-600">•</span>
            <div className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#A68A56]" />
              <span className="tracking-wide">Mon - Sat: 10:30 AM - 8:30 PM | Sun: 11:00 AM - 8:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              id="top-bar-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#FDFBF7] hover:text-[#A68A56] transition-colors font-medium tracking-wider text-[11px]"
            >
              <Phone className="w-3 h-3 text-[#A68A56]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              id="top-bar-whatsapp-link"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#4ade80] transition-colors font-semibold tracking-wider text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs py-4 border-b border-[#E5E1D8]'
            : 'bg-[#FDFBF7] py-5 border-b border-[#E5E1D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a id="brand-logo-link" href="#hero" className="group flex flex-col">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tighter uppercase text-[#2C2C2C] leading-none">
              Imperial
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A68A56] mt-0.5">
              Beauty Salon & Spa
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="text-[#2C2C2C] hover:text-[#A68A56] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              id="nav-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 border border-[#2C2C2C] bg-[#2C2C2C] text-white hover:bg-transparent hover:text-[#2C2C2C] text-[10px] uppercase tracking-widest font-bold transition-all duration-200 flex items-center gap-2"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#A68A56]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#E5E1D8] text-[#2C2C2C] hover:bg-[#F9F6F1] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-dropdown" className="lg:hidden bg-[#FDFBF7] border-b border-[#E5E1D8] px-6 pt-4 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-xs uppercase tracking-widest font-semibold text-[#2C2C2C] hover:text-[#A68A56] hover:bg-[#F9F6F1] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E1D8] space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  id="mobile-menu-call-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-2.5 border border-[#2C2C2C] bg-[#2C2C2C] text-white text-[10px] uppercase tracking-wider font-bold text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A68A56]" />
                  <span>0333-8748899</span>
                </a>
                <a
                  id="mobile-menu-whatsapp-btn"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-[#25D366]/15 text-[#1a7f3e] border border-[#25D366]/30 text-[10px] uppercase tracking-wider font-bold text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
