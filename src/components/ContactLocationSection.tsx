import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Navigation, 
  Check, 
  Copy, 
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const ContactLocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Visit Us & Connect
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Conveniently Located in <br className="hidden sm:inline" />
            <span className="text-[#A68A56] italic font-normal">Block 4, Gulshan-e-Iqbal</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            Readily accessible from Allama Shabbir Ahmed Usmani Road with dedicated client parking and valet assistance.
          </p>
        </div>

        {/* 2-Column Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-8 border border-[#E5E1D8] space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#E5E1D8] bg-[#FDFBF7] flex items-center justify-center text-[#A68A56]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2C2C2C]">Salon Address</h3>
                    <p className="text-xs text-[#A68A56] font-semibold uppercase tracking-wider">Gulshan-e-Iqbal, Karachi</p>
                  </div>
                </div>

                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="px-3.5 py-1.5 bg-[#FDFBF7] border border-[#E5E1D8] hover:border-[#2C2C2C] text-[10px] text-[#2C2C2C] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-[#F9F6F1] border border-[#E5E1D8] text-xs sm:text-sm text-[#2C2C2C] leading-relaxed">
                <strong className="font-serif font-bold text-sm">Imperial - Beauty Salon and Spa</strong><br />
                {BUSINESS_INFO.address}
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-[#666666]">
                <span className="bg-[#FDFBF7] px-3 py-1 border border-[#E5E1D8]">
                  📍 Behind Home Plus Store
                </span>
                <span className="bg-[#FDFBF7] px-3 py-1 border border-[#E5E1D8]">
                  🚗 Dedicated Parking Available
                </span>
              </div>
            </div>

            {/* Direct Contact Numbers & CTAs */}
            <div className="bg-[#2C2C2C] text-white p-8 border border-[#3E3E3E] space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68A56] font-bold">
                    Direct Reception Line
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
                <div className="w-10 h-10 border border-[#A68A56] flex items-center justify-center text-[#A68A56]">
                  <Phone className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Secondary CTA: Call Now */}
                <a
                  id="contact-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-3.5 px-4 bg-white hover:bg-[#F9F6F1] text-[#2C2C2C] font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#A68A56]" />
                  <span>Call Reception</span>
                </a>

                {/* Secondary CTA: Chat on WhatsApp */}
                <a
                  id="contact-whatsapp-btn"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-[#A68A56] hover:bg-[#8e7443] text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-8 border border-[#E5E1D8] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#E5E1D8] bg-[#FDFBF7] flex items-center justify-center text-[#A68A56]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2C2C2C]">Opening Hours</h3>
                    <p className="text-xs text-[#777777]">Welcoming guests 7 days a week</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-emerald-300 bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open Daily</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {BUSINESS_INFO.openingHours.map((sched, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-[#E5E1D8] last:border-0 text-xs gap-1"
                  >
                    <span className="font-bold text-[#2C2C2C]">{sched.days}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#666666] font-light">{sched.hours}</span>
                      <span className="text-[9px] bg-[#F9F6F1] px-2 py-0.5 border border-[#E5E1D8] text-[#2C2C2C] uppercase font-semibold">
                        {sched.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 border border-[#E5E1D8] space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#A68A56]" />
                  <h3 className="font-serif text-xl font-bold text-[#2C2C2C]">
                    Location & Directions
                  </h3>
                </div>

                <a
                  id="gmaps-direct-open-link"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A68A56] hover:underline"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Visual Card with pin and interactive CTA */}
              <div className="relative overflow-hidden border border-[#E5E1D8] bg-stone-200 h-80 sm:h-96 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                  alt="Karachi Map Overview"
                  className="w-full h-full object-cover filter saturate-75 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Map Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[#2C2C2C]/30 backdrop-blur-[1px]" />

                {/* Central Location Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative animate-bounce duration-1000">
                    <div className="w-12 h-12 bg-[#2C2C2C] text-[#A68A56] border-2 border-[#A68A56] shadow-2xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="bg-[#2C2C2C] text-white px-4 py-2 border border-[#A68A56] text-center mt-2 whitespace-nowrap shadow-xl">
                    <div className="font-serif text-xs font-bold text-[#A68A56] tracking-wider">
                      IMPERIAL SALON & SPA
                    </div>
                    <div className="text-[10px] text-stone-300 font-light">
                      Block 4, Gulshan-e-Iqbal, Karachi
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Action Button */}
                <div className="absolute bottom-4 inset-x-4">
                  <a
                    id="gmaps-overlay-nav-btn"
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-white hover:bg-[#F9F6F1] text-[#2C2C2C] font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 border border-[#E5E1D8] shadow-lg transition-all"
                  >
                    <Navigation className="w-4 h-4 text-[#A68A56]" />
                    <span>Navigate in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Step-by-Step Landmark Directions */}
              <div className="p-5 bg-[#F9F6F1] border border-[#E5E1D8] space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A68A56]">
                  Driving Directions:
                </div>
                <ul className="text-xs text-[#666666] space-y-2 font-light">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2C]">01.</span>
                    <span>From Allama Shabbir Ahmed Usmani Road, turn towards Block 4 near Disco Bakery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2C]">02.</span>
                    <span>Turn onto Adnan Khalil Street right Behind Home Plus Store.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2C]">03.</span>
                    <span>Building B-11 features the Imperial Salon & Spa facade with front parking space.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
