import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F9F6F1] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Client Acclaim & Trust
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Loved Across <br className="hidden sm:inline" />
            <span className="text-[#A68A56] italic font-normal">Gulshan-e-Iqbal & Karachi</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            Read verified feedback from our brides, regular skincare guests, and hair transformation clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={`testimonial-card-${review.id}`}
              className="bg-white p-8 border border-[#E5E1D8] shadow-xs hover:border-[#A68A56] transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark Background */}
              <MessageSquareQuote className="w-10 h-10 text-[#E5E1D8]/60 absolute top-6 right-6 pointer-events-none group-hover:text-[#A68A56]/30 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#A68A56]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A68A56] text-[#A68A56]" />
                  ))}
                  <span className="text-xs font-bold text-[#2C2C2C] ml-2">5.0 / 5.0</span>
                </div>

                {/* Comment Text */}
                <p className="font-serif text-base sm:text-lg text-[#2C2C2C] leading-relaxed italic font-light">
                  "{review.comment}"
                </p>

                {/* Service Tag */}
                <div className="pt-2">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest bg-[#FDFBF7] text-[#A68A56] px-3 py-1 border border-[#E5E1D8]">
                    Treatment: {review.service}
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#E5E1D8] flex items-center justify-between">
                <div>
                  <div className="font-serif text-base font-bold text-[#2C2C2C] flex items-center gap-2">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A68A56]" title="Verified Client" />
                  </div>
                  <div className="text-xs text-[#777777] mt-0.5">
                    {review.role} • {review.area}
                  </div>
                </div>

                <div className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">
                  {review.date}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 text-center bg-white p-6 border border-[#E5E1D8] shadow-xs max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#2C2C2C] text-[#2C2C2C] font-bold flex items-center justify-center text-xs">
              ★
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider font-bold text-[#2C2C2C]">Google Verified Reviews</div>
              <div className="text-[11px] text-[#777777]">4.9 ★ Rating in Gulshan-e-Iqbal Block 4</div>
            </div>
          </div>

          <a
            id="testimonial-google-maps-link"
            href="https://maps.app.goo.gl/E7jhqGFrGScpc3C67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-[#A68A56] hover:underline"
          >
            Google Maps Reviews →
          </a>
        </div>

      </div>
    </section>
  );
};
