import React from 'react';
import { Crown, ShieldCheck, Sparkles, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#A68A56]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#A68A56]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#A68A56]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#A68A56]" />;
      default:
        return <Award className="w-5 h-5 text-[#A68A56]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F9F6F1] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              The Imperial Standards
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Why Women in Karachi Choose <br className="hidden sm:inline" />
            <span className="text-[#A68A56] italic font-normal">Imperial Beauty Sanctuary</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            We hold ourselves to uncompromising standards of medical-grade autoclave sterilization, certified artistic mastery, and genuine international product safety.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              id={`why-us-card-${idx}`}
              className="bg-white p-8 border border-[#E5E1D8] shadow-xs hover:border-[#A68A56] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FDFBF7] border border-[#E5E1D8] flex items-center justify-center group-hover:border-[#A68A56] transition-colors">
                  {getIcon(item.icon)}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] group-hover:text-[#A68A56] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#666666] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E1D8] flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#A68A56]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68A56]" />
                <span>Imperial Quality Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Location Banner Card */}
        <div className="mt-12 bg-[#2C2C2C] text-white p-8 border border-[#3E3E3E] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-12 h-12 border border-[#A68A56] flex items-center justify-center text-[#A68A56] flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#A68A56] font-bold">
                Prime Karachi Location
              </div>
              <div className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                Block 4, Allama Shabbir Ahmed Usmani Road, Gulshan-e-Iqbal
              </div>
              <div className="text-xs text-stone-300 mt-1 font-light">
                Behind Home Plus Store • Easy road access with secure parking assistance
              </div>
            </div>
          </div>

          <a
            id="why-us-map-btn"
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-[#2C2C2C] hover:bg-[#F9F6F1] font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap"
          >
            Open in Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};
