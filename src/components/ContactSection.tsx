import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, Send, Sparkles } from 'lucide-react';
import GradualBlur from './GradualBlur';

interface ContactSectionProps {
  onOpenBooking: (type?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    experienceType: 'Complimentary Day Experience',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="pt-16 pb-8 sm:pt-20 sm:pb-10 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: activePalette.bgCard,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Banner Special Offer */}
        <div
          className="mb-20 p-8 sm:p-12 rounded-3xl border text-center relative overflow-hidden shadow-[var(--shadow-lg)] backdrop-blur-2xl"
          style={{
            backgroundColor: activePalette.bgPanel,
            borderColor: activePalette.accentGold,
          }}
        >
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-4">
            <div
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: `${activePalette.accentGold}60`,
                color: activePalette.accentGold,
              }}
            >
              <Sparkles size={12} />
              <span>Privileged Invitation</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-5xl font-light" style={{ color: activePalette.textPrimary }}>
              Book Your Complimentary Experience
            </h3>
            <p className="text-sm font-light max-w-xl" style={{ color: activePalette.textSecondary }}>
              Enjoy full 1-day access to our biometric strength arena, eucalyptus steam vaults, and private coaching orientation with zero obligation.
            </p>
            <button
              onClick={() => onOpenBooking('Complimentary Experience')}
              style={{
                backgroundColor: activePalette.accentGold,
                color: activePalette.bgMain,
              }}
              className="mt-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 hover:shadow-[0_0_30px_rgba(200,169,126,0.4)] transition-all font-button shadow-[var(--shadow-md)]"
            >
              Claim Experience Pass Now
            </button>
          </div>
        </div>

        {/* Architectural Layout: Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Location, Hours, Interactive Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold mb-2 block" style={{ color: activePalette.accentGold }}>
                Sanctuary Address
              </span>
              <TextRevealHeading
                text="Visit Forge Fit Club"
                revealText="Private Access"
                textClassName="font-serif text-3xl sm:text-4xl font-normal text-left"
              />
              <p className="text-xs font-light mt-2" style={{ color: activePalette.textSecondary }}>
                Located in the heart of the central financial & luxury district.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div
                className="p-5 rounded-2xl border flex items-start space-x-4"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                }}
              >
                <MapPin size={20} style={{ color: activePalette.accentGold }} className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg" style={{ color: activePalette.textPrimary }}>Location</h4>
                  <p className="text-xs font-light mt-0.5" style={{ color: activePalette.textSecondary }}>
                    750 Fifth Avenue, Suite 1400, New York, NY 10019
                  </p>
                  <span className="text-[10px] uppercase tracking-wider font-semibold block mt-1" style={{ color: activePalette.accentGold }}>
                    Complimentary Valet at Main Entrance
                  </span>
                </div>
              </div>

              <div
                className="p-5 rounded-2xl border flex items-start space-x-4"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                }}
              >
                <Clock size={20} style={{ color: activePalette.accentGold }} className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg" style={{ color: activePalette.textPrimary }}>Hours of Operation</h4>
                  <p className="text-xs font-light mt-0.5" style={{ color: activePalette.textSecondary }}>
                    Monday – Friday: 5:00 AM – 11:00 PM
                  </p>
                  <p className="text-xs font-light" style={{ color: activePalette.textSecondary }}>
                    Saturday – Sunday: 6:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

              <div
                className="p-5 rounded-2xl border flex items-start space-x-4"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                }}
              >
                <Phone size={20} style={{ color: activePalette.accentGold }} className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg" style={{ color: activePalette.textPrimary }}>Private Concierge Desk</h4>
                  <p className="text-xs font-light mt-0.5" style={{ color: activePalette.textSecondary }}>
                    Direct Line: +1 (212) 890-4422
                  </p>
                  <p className="text-xs font-light" style={{ color: activePalette.textSecondary }}>
                    Email: concierge@forgefitclub.com
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Map Preview */}
            <div
              className="relative rounded-2xl overflow-hidden border h-64 shadow-[var(--shadow-md)] group"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
              }}
            >
              <img
                src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg"
                alt="Forge Fit Location Architectural Map Preview"
                className="w-full h-full object-cover filter contrast-125 opacity-70 group-hover:opacity-90 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: `${activePalette.bgMain}60` }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-[var(--shadow-lg)] mb-2 animate-bounce"
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                >
                  <MapPin size={22} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: activePalette.bgMain,
                    borderColor: activePalette.accentGold,
                    color: activePalette.textPrimary,
                  }}
                >
                  Forge Fit Private Sanctuary • 5th Ave
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border shadow-[var(--shadow-lg)] relative"
            style={{
              backgroundColor: activePalette.bgMain,
              borderColor: activePalette.borderMain,
            }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold block mb-2" style={{ color: activePalette.accentGold }}>
              Concierge Inquiry
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl mb-6" style={{ color: activePalette.textPrimary }}>
              Inquire or Schedule a Tour
            </h3>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                <div
                  className="w-16 h-16 rounded-full border flex items-center justify-center"
                  style={{
                    backgroundColor: `${activePalette.accentGold}20`,
                    color: activePalette.accentGold,
                    borderColor: activePalette.accentGold,
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-2xl" style={{ color: activePalette.textPrimary }}>
                  Invitation Request Received
                </h4>
                <p className="text-xs max-w-md leading-relaxed font-light" style={{ color: activePalette.textSecondary }}>
                  Thank you, <span className="font-semibold" style={{ color: activePalette.textPrimary }}>{formData.name}</span>. Our Member Concierge will reach out to you within 2 hours at <span className="font-semibold" style={{ color: activePalette.accentGold }}>{formData.phone}</span> to confirm your private experience date.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border text-xs uppercase tracking-widest hover:border-amber-400"
                  style={{
                    borderColor: activePalette.borderMain,
                    color: activePalette.textPrimary,
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: activePalette.bgCard,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: activePalette.bgCard,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@vancecapital.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: activePalette.bgCard,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                      Preferred Visit Date
                    </label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: activePalette.bgCard,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                    Experience Preference
                  </label>
                  <select
                    value={formData.experienceType}
                    onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                    className="w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                    style={{
                      backgroundColor: activePalette.bgCard,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  >
                    <option value="Complimentary Day Experience">Complimentary Day Pass & Tour</option>
                    <option value="Annual Signature Membership Application">Annual Signature Membership</option>
                    <option value="Master Coach Consultation">Master Coach 1-on-1 Consultation</option>
                    <option value="Corporate / Private Office Suite">Corporate Office Suite Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                    Special Requirements or Health Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your fitness objectives or any preferred amenities..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                    style={{
                      backgroundColor: activePalette.bgCard,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 hover:shadow-[0_0_25px_rgba(200,169,126,0.4)] transition-all font-button flex items-center justify-center space-x-2 shadow-[var(--shadow-md)]"
                >
                  <Send size={14} />
                  <span>Submit Confidential Invitation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <GradualBlur position="bottom" height="6rem" strength={2} zIndex={10} />
    </section>
  );
};
