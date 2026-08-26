import React, { useState, useMemo } from 'react';
import { 
  Scissors, 
  Flower2, 
  Palette, 
  HandMetal, 
  HeartPulse, 
  Flame, 
  Sparkles, 
  Clock, 
  Search, 
  Check, 
  Filter,
  MessageCircle
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.includes.some(inc => inc.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'hair':
        return <Scissors className="w-4 h-4" />;
      case 'skincare':
        return <Flower2 className="w-4 h-4" />;
      case 'makeup':
        return <Palette className="w-4 h-4" />;
      case 'nails':
        return <HandMetal className="w-4 h-4" />;
      case 'spa':
        return <HeartPulse className="w-4 h-4" />;
      case 'waxing':
        return <Flame className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F9F6F1] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Signature Treatments & Rituals
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Crafted for <span className="text-[#A68A56] italic font-normal">Perfection & Indulgence</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            Explore our comprehensive menu of couture hair transformations, medical-grade hydra facials, bridal styling, artistic nail extensions, and restorative spa rituals.
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#A68A56] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="service-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments (e.g., Hydra-Glow, Balayage, Keratin, Bridal)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5E1D8] text-xs uppercase tracking-wider text-[#2C2C2C] placeholder-stone-400 focus:outline-none focus:border-[#2C2C2C] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase font-bold text-stone-500 hover:text-stone-900 bg-stone-100 px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  id={`service-cat-${category.id}`}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2C2C2C] text-white border border-[#2C2C2C]'
                      : 'bg-white text-[#2C2C2C] border border-[#E5E1D8] hover:border-[#2C2C2C]'
                  }`}
                >
                  <span className={isActive ? 'text-[#A68A56]' : 'text-stone-400'}>
                    {getCategoryIcon(category.id)}
                  </span>
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#E5E1D8] p-8 max-w-lg mx-auto">
            <Filter className="w-8 h-8 text-stone-300 mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-[#2C2C2C]">No treatments found</h4>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              We couldn't find any service matching "{searchQuery}". Try a different keyword or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 bg-[#2C2C2C] text-white text-[10px] uppercase tracking-widest font-bold"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white p-7 border border-[#E5E1D8] hover:border-[#A68A56] transition-all duration-300 flex flex-col justify-between group relative shadow-xs"
              >
                {/* Popular Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-[#A68A56] text-white text-[9px] uppercase font-bold tracking-[0.2em] px-3 py-1">
                    {service.highlight}
                  </div>
                )}

                {/* Card Top: Category & Name */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#A68A56]">
                    <span className="flex items-center gap-1.5 uppercase font-bold tracking-widest text-[9px] bg-[#FDFBF7] px-2.5 py-1 border border-[#E5E1D8]">
                      {getCategoryIcon(service.category)}
                      {service.category.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1 text-[#666666] font-medium text-xs">
                      <Clock className="w-3.5 h-3.5 text-[#A68A56]" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2C2C] group-hover:text-[#A68A56] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Treatment Inclusions */}
                  <div className="pt-3 space-y-2 border-t border-[#E5E1D8]">
                    <div className="text-[10px] font-bold text-[#A68A56] uppercase tracking-[0.25em]">
                      Includes:
                    </div>
                    <ul className="space-y-1.5">
                      {service.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#2C2C2C]">
                          <Check className="w-3.5 h-3.5 text-[#A68A56] flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom: Price and Inquiries Link */}
                <div className="pt-6 mt-6 border-t border-[#E5E1D8] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold">Starting from</div>
                    <div className="font-serif text-lg font-bold text-[#2C2C2C]">
                      {service.priceStartingFrom}
                    </div>
                  </div>

                  <a
                    id={`inquire-service-btn-${service.id}`}
                    href={`https://wa.me/923338748899?text=Hello%20Imperial%20Salon!%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      service.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#E5E1D8] bg-[#FDFBF7] hover:border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white text-[#2C2C2C] font-bold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
