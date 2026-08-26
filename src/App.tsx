import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C2C2C]">
      {/* Sticky Header & Announcements */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <WhyChooseUs />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Actions */}
      <FloatingActions />
    </div>
  );
}
