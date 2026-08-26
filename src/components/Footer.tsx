import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CATEGORIES } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#2C2C2C] text-white relative overflow-hidden border-t border-[#3E3E3E]">
      
      {/* Top Footer Strip with Brand Mission */}
      <div className="border-b border-[#3E3E3E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#A68A56] text-[#A68A56] text-[10px] font-bold uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gulshan-e-Iqbal’s Premier Beauty Sanctuary</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Experience Imperial Care?
              </h3>
              <p className="text-sm text-stone-300 max-w-xl font-light leading-relaxed">
                Experience bespoke hair transformation, clinical hydra-facials, and wedding day makeup with our certified artists.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 justify-center md:justify-end">
              <a
                id="footer-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-8 py-4 bg-[#A68A56] hover:bg-[#8e7443] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                id="footer-whatsapp-cta"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-4 space-y-5">
              <div>
                <div className="font-serif text-3xl font-bold tracking-tight text-white leading-none">
                  IMPERIAL
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#A68A56] font-bold mt-1">
                  Beauty Salon and Spa
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Karachi's dedicated haven for tailored hair artistry, clinical skincare, couture bridal glamour, and rejuvenating wellness rituals.
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#A68A56] font-bold mb-3">
                  Follow Our Lookbook
                </div>
                <div className="flex items-center gap-3">
                  <a
                    id="footer-social-instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#3E3E3E] hover:border-[#A68A56] flex items-center justify-center text-stone-300 hover:text-white transition-all duration-300"
                    aria-label="Imperial Salon Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    id="footer-social-facebook"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#3E3E3E] hover:border-[#A68A56] flex items-center justify-center text-stone-300 hover:text-white transition-all duration-300"
                    aria-label="Imperial Salon Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    id="footer-social-whatsapp"
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#3E3E3E] hover:border-[#25D366] flex items-center justify-center text-stone-300 hover:text-[#25D366] transition-all duration-300"
                    aria-label="Imperial Salon WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Treatment Menu Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
                Services Menu
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-300 font-light">
                {SERVICE_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                  <li key={cat.id}>
                    <a
                      href="#services"
                      className="hover:text-[#A68A56] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-[#A68A56]" />
                      <span>{cat.name}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#packages" className="hover:text-[#A68A56] transition-colors flex items-center gap-2 text-[#A68A56] font-medium">
                    <ChevronRight className="w-3 h-3 text-[#A68A56]" />
                    <span>Bridal & Pamper Packages</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Business & Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
                Salon Details
              </h4>
              
              <div className="space-y-3.5 text-xs text-stone-300 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A68A56] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-serif">Imperial - Beauty Salon and Spa</strong><br />
                    {BUSINESS_INFO.address}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#A68A56] flex-shrink-0" />
                  <div>
                    <span className="text-stone-400">Direct Line: </span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#A68A56] font-bold">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#A68A56] flex-shrink-0" />
                  <div>
                    <span>Mon - Sat: 10:30 AM – 8:30 PM | Sun: 11:00 AM – 8:00 PM</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    id="footer-google-maps-link"
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-[#A68A56] text-xs text-white hover:text-[#A68A56] transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A68A56]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-[#3E3E3E] py-6 text-xs text-stone-400 bg-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Imperial - Beauty Salon and Spa. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Gulshan-e-Iqbal, Block 4, Karachi, Pakistan</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
