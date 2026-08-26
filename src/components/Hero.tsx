import React from 'react';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Star, MapPin, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Hero: React.FC = () => {
  const quickCategories = [
    { title: 'Hair Styling', sub: 'Cuts, Color & Treatments' },
    { title: 'Skincare', sub: 'Deep Cleanse & Hydra-Glow' },
    { title: 'Nail Care', sub: 'Artistic Manicures & Gel' },
    { title: 'Bridal Glam', sub: 'Barat, Walima & Nikkah' },
    { title: 'Luxury Spa', sub: 'Body Massage & Serenity' },
    { title: 'Bespoke Packages', sub: 'All-Inclusive Radiance' },
  ];

  return (
    <section id="hero" className="relative border-b border-[#E5E1D8] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Column: Bold Editorial Content */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center lg:border-r border-[#E5E1D8] space-y-6">
          
          {/* Eyebrow badge */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Karachi’s Premier Sanctuary
            </span>
          </div>

          {/* Massive Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[0.95] text-[#2C2C2C] tracking-tight">
            Redefining <br />
            The Art of <br />
            <span className="italic text-[#A68A56] font-normal">Self-Care</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#666666] max-w-lg leading-relaxed font-light">
            Discover bespoke luxury treatments, medical-grade sterilizations, and personalized professional care in the heart of Gulshan-e-Iqbal, Karachi. Our sanctuary is curated for those who seek extraordinary elegance in every detail.
          </p>

          {/* Key Value Badges Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#2C2C2C]">
            <div className="flex items-center gap-1.5 bg-[#F9F6F1] px-3 py-1.5 border border-[#E5E1D8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A68A56]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">100% Sterilized</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F9F6F1] px-3 py-1.5 border border-[#E5E1D8]">
              <Award className="w-3.5 h-3.5 text-[#A68A56]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Master Stylists</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F9F6F1] px-3 py-1.5 border border-[#E5E1D8]">
              <Star className="w-3.5 h-3.5 text-[#A68A56] fill-[#A68A56]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">4.9/5 Rating</span>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <a
              id="hero-explore-services-btn"
              href="#services"
              className="bg-[#2C2C2C] text-white hover:bg-[#1C1917] px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A68A56]" />
            </a>

            <a
              id="hero-whatsapp-direct-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 border border-[#2C2C2C] bg-white text-[#2C2C2C] hover:bg-[#F9F6F1] text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Inquiries</span>
            </a>

            <div className="hidden xl:flex items-center gap-3 pl-2">
              <div className="w-10 h-[1px] bg-[#A68A56]"></div>
              <span className="text-[10px] uppercase tracking-widest text-[#A68A56] font-bold italic">
                Imperial Experience
              </span>
            </div>
          </div>

          {/* Direct Address Text */}
          <div className="pt-2">
            <a
              id="hero-address-link"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#666666] hover:text-[#2C2C2C] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#A68A56] flex-shrink-0" />
              <span>
                <strong className="text-[#2C2C2C]">Location:</strong> B-11, Behind Home Plus Store, Block 4, Gulshan-e-Iqbal, Karachi
              </span>
              <span className="text-[#A68A56] underline font-medium">Directions →</span>
            </a>
          </div>

        </div>

        {/* Right Column: Grid Categories & Hours / Location Info */}
        <div className="lg:col-span-5 flex flex-col bg-[#F9F6F1]">
          
          {/* Top: 2-Column Categories Showcase */}
          <div className="p-8 sm:p-10 grid grid-cols-2 gap-6 flex-grow border-b border-[#E5E1D8]">
            {quickCategories.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-center p-3 rounded-none border-b border-[#E5E1D8]/60 pb-3">
                <h3 className="text-base font-serif italic text-[#2C2C2C] mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[#777777] uppercase tracking-wider font-medium">
                  {item.sub}
                </p>
              </div>
            ))}

            <div className="col-span-2 pt-2 flex items-center justify-between">
              <a
                href="#services"
                className="w-full border border-[#A68A56] p-3 text-center hover:bg-[#A68A56] hover:text-white transition-all group"
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#A68A56] group-hover:text-white">
                  Explore Full Treatment Menu →
                </span>
              </a>
            </div>
          </div>

          {/* Bottom: Opening Hours & Location Info */}
          <div className="p-8 sm:p-10 space-y-4 bg-white">
            <div className="flex items-start gap-4">
              <div className="text-[#A68A56] mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#2C2C2C]">
                  Opening Hours
                </p>
                <p className="text-xs text-[#666666] mt-0.5">
                  Mon - Sat: 10:30 AM - 08:30 PM | Sun: 11:00 AM - 08:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#A68A56] mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#2C2C2C]">
                  Sanctuary Address
                </p>
                <p className="text-xs text-[#666666] mt-0.5">
                  Gulshan-e-Iqbal, Block 4, Behind Home Plus Store, Karachi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#A68A56] mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#2C2C2C]">
                  Phone Reception
                </p>
                <p className="text-xs text-[#666666] mt-0.5">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#2C2C2C] font-semibold hover:text-[#A68A56]">
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
