import React from 'react';
import { CheckCircle2, Gem, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: 'Personalized Consultations',
      desc: 'Every treatment starts with a bespoke consultation evaluating skin profile, hair porosity, or lifestyle needs.'
    },
    {
      title: 'Private & Modest Suites',
      desc: 'Dedicated bridal suites, private facial cubicles, and quiet massage rooms for complete peace and modesty.'
    },
    {
      title: '100% Autoclave Sterilization',
      desc: 'Hospital-grade autoclave sterilization for all metal instruments, with disposable liners for each client.'
    },
    {
      title: 'Global Formulations',
      desc: 'Exclusively using genuine international brands: Olaplex, Kerastase, L\'Oréal, Dermalogica, and Rica.'
    }
  ];

  const brandBadges = [
    'Olaplex No.1 & No.2',
    'L’Oréal Professionnel',
    'Dermalogica Skincare',
    'Kerastase Paris',
    'Rica Italian Wax',
    'Janssen Cosmetics',
    'Huda Beauty',
    'Dior Backstage'
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDFBF7] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              About Imperial Sanctuary
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Where Modern Elegance Meets <br className="hidden sm:inline" />
            <span className="text-[#A68A56] italic font-normal">Pure Rejuvenation</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            Nestled in the heart of Gulshan-e-Iqbal Block 4, Imperial is an unhurried sanctuary curated for women who value pristine craftsmanship and uncompromising hygiene.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Images + Editorial Overlays) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden border border-[#E5E1D8] h-60 sm:h-72 bg-stone-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
                    alt="Imperial salon styling station"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden border border-[#E5E1D8] h-44 sm:h-52 bg-stone-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80"
                    alt="Skincare treatment session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="overflow-hidden border border-[#E5E1D8] h-44 sm:h-52 bg-stone-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
                    alt="Facial skincare and relaxation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden border border-[#E5E1D8] h-60 sm:h-72 bg-stone-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=80"
                    alt="Bridal makeup & styling chair"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Experience Pill Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2C2C2C] text-white p-5 border border-[#A68A56]/60 shadow-2xl text-center max-w-[210px]">
              <div className="font-serif text-4xl font-bold text-[#A68A56] leading-none">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-semibold text-stone-200 mt-1">
                Medical Autoclave & Pure Care
              </div>
            </div>
          </div>

          {/* Text Information & Pillars */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C2C2C] leading-snug">
                A Bespoke Beauty Retreat Crafted Exclusively for You
              </h3>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
                At <strong>Imperial - Beauty Salon and Spa</strong>, we believe genuine beauty begins with mindful precision. Situated in Block 4, Gulshan-e-Iqbal (directly behind Home Plus Store), our salon is engineered to provide a soothing, aromatic oasis away from traffic and routine stress.
              </p>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
                Whether you visit us for a signature haircut, an intensive hydra-infusion facial, full body massage, or your dream bridal transformation, our master stylists combine international product standards with personalized artistry.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#F9F6F1] border border-[#E5E1D8] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A68A56] flex-shrink-0" />
                    <span className="text-xs uppercase font-bold tracking-wider text-[#2C2C2C]">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed pl-6 font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Premium Brand Logos Strip */}
            <div className="pt-3 space-y-2.5 border-t border-[#E5E1D8]">
              <div className="text-[10px] font-bold text-[#A68A56] uppercase tracking-[0.25em] flex items-center gap-2">
                <Gem className="w-3.5 h-3.5 text-[#A68A56]" />
                <span>Authentic Global Product Formulations</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {brandBadges.map((brand, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-3 py-1.5 bg-white text-[#2C2C2C] border border-[#E5E1D8] uppercase tracking-wider"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <a
                id="about-explore-services-btn"
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-[#2C2C2C] text-white hover:bg-[#1C1917] font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A68A56]" />
              </a>

              <a
                id="about-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 border border-[#2C2C2C] bg-white hover:bg-[#F9F6F1] text-[#2C2C2C] font-bold text-xs uppercase tracking-widest text-center transition-colors"
              >
                Find Us on Google Maps
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
