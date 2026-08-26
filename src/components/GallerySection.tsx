import React, { useState } from 'react';
import { Sparkles, Camera, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Lookbook' },
    { id: 'bridal', name: 'Bridal Glam' },
    { id: 'hair', name: 'Hair Mastery' },
    { id: 'skincare', name: 'Glowing Facials' },
    { id: 'nails', name: 'Nail Couture' },
    { id: 'spa', name: 'Spa Sanctuary' },
  ];

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7] relative border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A68A56] font-bold">
              Visual Lookbook & Portfolio
            </span>
            <div className="w-8 h-[1px] bg-[#A68A56]"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.05] tracking-tight">
            Imperial <span className="text-[#A68A56] italic font-normal">Artistry & Transformations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-light">
            Glimpse into our salon ambiance, couture bridal makeup artistry, custom balayage hair color transformations, and restorative spa suites.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#2C2C2C] text-white border border-[#2C2C2C]'
                  : 'bg-white text-[#2C2C2C] border border-[#E5E1D8] hover:border-[#2C2C2C]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveImage(item)}
              className="group relative overflow-hidden bg-stone-100 aspect-square cursor-pointer transition-all duration-300 border border-[#E5E1D8]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 via-[#2C2C2C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 border border-white/40 flex items-center justify-center text-white bg-black/30">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[9px] uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-[#A68A56] text-white mb-1.5 inline-block">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#2C2C2C] border border-[#E5E1D8]/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="lightbox-close-btn"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/70 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-stone-950 flex items-center justify-center">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-[#2C2C2C] text-white flex items-center justify-between border-t border-[#3E3E3E]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#A68A56] tracking-[0.25em]">
                    {activeImage.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    {activeImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-5 py-2.5 border border-white/20 hover:bg-white/10 text-[10px] uppercase tracking-widest font-bold text-white"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
