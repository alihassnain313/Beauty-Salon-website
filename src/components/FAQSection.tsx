import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/salonData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#FDFBF7] relative border-b border-[#E5E1D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Information & Guidance
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Frequently Asked <span className="text-[#A68A56] italic font-normal">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-xl mx-auto">
            Everything you need to know about our salon services, sterilization protocols, and bridal appointments.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-accordion-item-${idx}`}
                className="bg-white border border-[#E5E1D8] transition-all duration-200"
              >
                <button
                  id={`faq-toggle-btn-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FDFBF7] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-[#A68A56] tracking-widest font-mono">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-base sm:text-xl font-bold text-[#2C2C2C]">
                      {faq.question}
                    </span>
                  </div>

                  <div className="text-[#A68A56] flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-[#E5E1D8] font-light">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Prompt */}
        <div className="mt-12 p-8 bg-[#2C2C2C] text-white text-center max-w-md mx-auto space-y-4 border border-[#3E3E3E]">
          <h4 className="font-serif text-lg font-bold text-white">Have a custom question or bridal requirement?</h4>
          <p className="text-xs text-stone-300 font-light leading-relaxed">
            Our salon consultants are available directly on WhatsApp for tailored consultations.
          </p>
          <a
            id="faq-ask-whatsapp-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#A68A56] hover:bg-[#8e7443] text-white text-xs font-bold uppercase tracking-widest transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
