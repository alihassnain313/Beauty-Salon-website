export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skincare' | 'nails' | 'makeup' | 'spa' | 'waxing';
  description: string;
  duration: string;
  priceStartingFrom: string;
  popular?: boolean;
  highlight?: string;
  includes: string[];
}

export interface ServiceCategory {
  id: 'all' | 'hair' | 'skincare' | 'nails' | 'makeup' | 'spa' | 'waxing';
  name: string;
  shortDesc: string;
  icon: string;
}

export interface SpaPackage {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  price: string;
  originalPrice?: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  area: string;
  comment: string;
  rating: number;
  service: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'skincare' | 'nails' | 'spa';
  imageUrl: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  address: string;
  landmark: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  openingHours: {
    days: string;
    hours: string;
    status: string;
  }[];
}
