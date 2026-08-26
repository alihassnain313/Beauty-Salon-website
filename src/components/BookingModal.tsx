import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || '');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('12:00 PM');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
      const s = SERVICES.find(srv => srv.id === initialServiceId);
      if (s) {
        setSelectedCategory(s.category);
      }
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  const generateWhatsAppMessage = () => {
    const serviceName = currentService ? currentService.name : 'General Consultation / Custom Service';
    const dateStr = preferredDate || 'Earliest Available Slot';
    const timeStr = preferredTime || 'Flexible';
    const nameStr = clientName.trim() || 'Client';
    const phoneStr = clientPhone.trim() || 'Not specified';
    const notesStr = specialNotes.trim() ? `\n• Notes: ${specialNotes.trim()}` : '';

    const text = `Hello Imperial Beauty Salon & Spa! ✨%0A%0AI would like to book an appointment:%0A• Client Name: ${encodeURIComponent(
      nameStr
    )}%0A• Phone: ${encodeURIComponent(phoneStr)}%0A• Treatment: ${encodeURIComponent(
      serviceName
    )}%0A• Preferred Date: ${encodeURIComponent(
      dateStr
    )}%0A• Preferred Time: ${encodeURIComponent(
      timeStr
    )}${encodeURIComponent(notesStr)}%0A%0APlease confirm availability. Thank you!`;

    return `https://wa.me/923338748899?text=${text}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="booking-appointment-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl border border-[#E5E1D8] shadow-2xl overflow-hidden my-8 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#2C2C2C] text-white p-8 relative border-b border-[#3E3E3E]">
          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#A68A56] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Reservation</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Book Your Imperial Experience
          </h2>
          <p className="text-xs text-stone-300 mt-1.5 font-light">
            Gulshan-e-Iqbal Block 4 • Direct WhatsApp & Phone Booking: 0333-8748899
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Step 1: Select Service */}
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#A68A56]">
                  01. Select Treatment / Service:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      id="modal-category-select"
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedServiceId('');
                      }}
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] font-medium focus:border-[#2C2C2C] focus:outline-none"
                    >
                      <option value="all">All Service Categories</option>
                      <option value="hair">Hair Styling & Care</option>
                      <option value="skincare">Skincare & Facials</option>
                      <option value="makeup">Bridal & Event Makeup</option>
                      <option value="nails">Nail Care & Extensions</option>
                      <option value="spa">Spa & Relaxation</option>
                      <option value="waxing">Waxing & Grooming</option>
                    </select>
                  </div>

                  <div>
                    <select
                      id="modal-service-select"
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] font-medium focus:border-[#2C2C2C] focus:outline-none"
                    >
                      <option value="">-- Choose Specific Treatment --</option>
                      {filteredServices.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.priceStartingFrom})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {currentService && (
                  <div className="p-4 bg-[#F9F6F1] border border-[#E5E1D8] text-xs space-y-1.5">
                    <div className="flex justify-between items-center font-bold text-[#2C2C2C] font-serif">
                      <span className="text-sm">{currentService.name}</span>
                      <span className="text-[#A68A56] font-sans">{currentService.priceStartingFrom}</span>
                    </div>
                    <p className="text-[#666666] text-xs font-light">{currentService.description}</p>
                    <div className="text-[10px] text-[#A68A56] font-semibold uppercase tracking-wider pt-1">
                      ⏱ Duration: {currentService.duration}
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Date & Time */}
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#A68A56]">
                  02. Preferred Date & Time:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="modal-date-input"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] focus:border-[#2C2C2C] focus:outline-none font-medium"
                    />
                  </div>

                  <div className="relative">
                    <Clock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="modal-time-select"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] focus:border-[#2C2C2C] focus:outline-none font-medium"
                    >
                      <option value="10:30 AM - Morning">10:30 AM (Opening Slot)</option>
                      <option value="11:30 AM - Morning">11:30 AM</option>
                      <option value="01:00 PM - Afternoon">01:00 PM</option>
                      <option value="02:30 PM - Afternoon">02:30 PM</option>
                      <option value="04:00 PM - Evening">04:00 PM</option>
                      <option value="05:30 PM - Evening">05:30 PM</option>
                      <option value="07:00 PM - Evening">07:00 PM (Late Slot)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#A68A56]">
                  03. Guest Details:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="modal-name-input"
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] placeholder-stone-400 focus:border-[#2C2C2C] focus:outline-none font-medium"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="modal-phone-input"
                      type="tel"
                      required
                      placeholder="Mobile / WhatsApp Number *"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] placeholder-stone-400 focus:border-[#2C2C2C] focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <textarea
                    id="modal-notes-input"
                    rows={2}
                    placeholder="Special requests, bridal event details, or stylist preference (Optional)..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#E5E1D8] text-xs text-[#2C2C2C] placeholder-stone-400 focus:border-[#2C2C2C] focus:outline-none font-light"
                  />
                </div>
              </div>

              {/* Fast WhatsApp / Instant Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  id="modal-whatsapp-direct-btn"
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#A68A56] hover:bg-[#8e7443] text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Appointment Request via WhatsApp</span>
                </a>

                <div className="flex items-center justify-between gap-3">
                  <a
                    id="modal-call-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-1/2 py-3 border border-[#E5E1D8] bg-white hover:bg-[#FDFBF7] text-[#2C2C2C] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A68A56]" />
                    <span>Call 0333-8748899</span>
                  </a>

                  <button
                    type="submit"
                    id="modal-submit-request-btn"
                    className="w-1/2 py-3 bg-[#2C2C2C] hover:bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Review Summary</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A68A56]" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A68A56]" />
                <span>Your information is strictly protected and used solely for appointment scheduling.</span>
              </div>

            </form>
          ) : (
            /* Submission Confirmation Screen */
            <div className="text-center py-6 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 border-2 border-[#A68A56] text-[#A68A56] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
                  Booking Summary Prepared
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] max-w-md mx-auto font-light">
                  Thank you, <strong>{clientName || 'valued guest'}</strong>. Click below to submit your appointment reservation directly to Imperial’s reception team on WhatsApp.
                </p>
              </div>

              {/* Summary Box */}
              <div className="p-6 bg-[#F9F6F1] border border-[#E5E1D8] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="font-bold text-[#2C2C2C] font-serif text-sm">
                  • Treatment: {currentService ? currentService.name : 'Custom Selection'}
                </div>
                <div className="text-[#666666]">
                  • Date & Time: {preferredDate || 'Earliest available'} at {preferredTime}
                </div>
                <div className="text-[#666666]">
                  • Phone: {clientPhone}
                </div>
                {specialNotes && (
                  <div className="text-[#666666] italic">
                    • Note: "{specialNotes}"
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  id="modal-confirm-whatsapp-btn"
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#A68A56] hover:bg-[#8e7443] text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (0333-8748899)</span>
                </a>

                <button
                  id="modal-done-btn"
                  onClick={resetForm}
                  className="w-full py-3 border border-[#E5E1D8] bg-white text-xs font-bold uppercase tracking-wider text-[#2C2C2C] hover:bg-[#FDFBF7] cursor-pointer"
                >
                  Close & Return to Website
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
