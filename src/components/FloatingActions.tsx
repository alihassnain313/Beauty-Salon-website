import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="floating-quick-actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="w-10 h-10 bg-white border border-[#E5E1D8] text-[#2C2C2C] hover:border-[#2C2C2C] shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Direct Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="w-12 h-12 bg-[#2C2C2C] text-white border border-[#A68A56] shadow-xl flex items-center justify-center sm:hidden"
        aria-label="Call Imperial Salon"
      >
        <Phone className="w-5 h-5 text-[#A68A56]" />
      </a>

      {/* Floating WhatsApp Chat Button */}
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#2C2C2C] text-white border border-[#25D366] shadow-2xl hover:bg-[#1f1f1f] transition-all duration-200"
        aria-label="Chat with Imperial Salon on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-[#25D366]" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-white hidden md:inline">
          WhatsApp 0333-8748899
        </span>
      </a>

    </div>
  );
};
