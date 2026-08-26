import React from 'react';
import { Check, MessageCircle, Phone } from 'lucide-react';
import { PACKAGES, BUSINESS_INFO } from '../data/salonData';
import { SpaPackage } from '../types';

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#FDFBF7] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Curated Pamper & Bridal Experiences
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Signature Packages for <span className="text-[#A68A56] italic font-normal">Special Moments</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            Meticulously combined multi-treatment journeys designed to deliver comprehensive radiance, deep rejuvenation, and tailored savings.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg: SpaPackage) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.isPopular
                  ? 'bg-[#2C2C2C] text-white border-[#A68A56] shadow-xl'
                  : 'bg-white text-[#2C2C2C] border-[#E5E1D8] shadow-xs'
              }`}
            >
              {/* Badge & Duration */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span
                  className={`text-[9px] uppercase font-bold tracking-[0.25em] px-3 py-1 border ${
                    pkg.isPopular
                      ? 'bg-[#A68A56] text-white border-[#A68A56]'
                      : 'bg-[#F9F6F1] text-[#A68A56] border-[#E5E1D8]'
                  }`}
                >
                  {pkg.tag}
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    pkg.isPopular ? 'text-[#A68A56]' : 'text-[#777777]'
                  }`}
                >
                  {pkg.duration}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mb-6">
                <h3
                  className={`font-serif text-2xl sm:text-3xl font-bold leading-snug ${
                    pkg.isPopular ? 'text-white' : 'text-[#2C2C2C]'
                  }`}
                >
                  {pkg.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed font-light ${
                    pkg.isPopular ? 'text-stone-300' : 'text-[#666666]'
                  }`}
                >
                  {pkg.subtitle}
                </p>
              </div>

              {/* Pricing Section */}
              <div
                className={`py-4 px-5 mb-6 border ${
                  pkg.isPopular
                    ? 'bg-white/5 border-white/10'
                    : 'bg-[#F9F6F1] border-[#E5E1D8]'
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-serif text-3xl font-bold ${
                      pkg.isPopular ? 'text-[#A68A56]' : 'text-[#2C2C2C]'
                    }`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span
                      className={`text-xs line-through ${
                        pkg.isPopular ? 'text-stone-400' : 'text-stone-400'
                      }`}
                    >
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>
                <div
                  className={`text-[11px] mt-1 font-light ${
                    pkg.isPopular ? 'text-stone-300' : 'text-[#666666]'
                  }`}
                >
                  <strong className={pkg.isPopular ? 'text-white' : 'text-[#2C2C2C]'}>Ideal for:</strong> {pkg.recommendedFor}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8 flex-grow">
                <div
                  className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
                    pkg.isPopular ? 'text-[#A68A56]' : 'text-[#A68A56]'
                  }`}
                >
                  Included Treatments:
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed font-light">
                      <Check
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          pkg.isPopular ? 'text-[#A68A56]' : 'text-[#A68A56]'
                        }`}
                      />
                      <span className={pkg.isPopular ? 'text-stone-200' : 'text-[#2C2C2C]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-5 border-t border-[#E5E1D8]/40">
                <a
                  id={`whatsapp-package-btn-${pkg.id}`}
                  href={`https://wa.me/923338748899?text=Hello%20Imperial%20Salon!%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    pkg.title
                  )}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    pkg.isPopular
                      ? 'bg-[#A68A56] hover:bg-[#8e7443] text-white shadow-md'
                      : 'bg-[#2C2C2C] hover:bg-[#1C1917] text-white shadow-xs'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Inquiries</span>
                </a>

                <a
                  id={`call-package-btn-${pkg.id}`}
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className={`w-full py-2.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border ${
                    pkg.isPopular
                      ? 'bg-transparent hover:bg-white/10 text-stone-300 border-white/20'
                      : 'bg-white hover:bg-[#F9F6F1] text-[#2C2C2C] border-[#E5E1D8]'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#A68A56]" />
                  <span>Call Reception ({BUSINESS_INFO.phone})</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
