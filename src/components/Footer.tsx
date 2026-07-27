import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Instagram, Send, Shield, ChevronUp, MapPin, Phone, Mail, Sliders, Sparkles, User, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: (type?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { activePalette, setIsStudioOpen } = useTheme();
  const { openLoginModal, openAdminDashboard, isAdmin } = useAuth();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const instagramImages = [
    'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif',
    'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',
    'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-10 pb-6 border-t relative z-20 w-full transition-colors duration-500"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
        color: activePalette.textPrimary,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Sanctuary Status Bar */}
        <div
          className="mb-12 p-5 rounded-2xl border flex items-center justify-between gap-4 shadow-[var(--shadow-md)]"
          style={{
            backgroundColor: activePalette.bgPanel,
            borderColor: `${activePalette.accentGold}40`,
          }}
        >
          <div className="flex items-center space-x-3 text-xs w-full justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-semibold uppercase tracking-wider" style={{ color: activePalette.accentGold }}>
                Sanctuary Status: Active
              </span>
            </div>
            <span className="text-[11px] hidden sm:inline" style={{ color: activePalette.textSecondary }}>
              750 5th Ave, NYC • Open Today 5:00 AM – 11:00 PM • Valet Ready
            </span>
          </div>
        </div>

        {/* Instagram Gallery Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2" style={{ color: activePalette.accentGold }}>
              <Instagram size={18} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                @forgefitclub • Private Gallery
              </span>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline transition-colors"
              style={{ color: activePalette.textSecondary }}
            >
              Follow Gallery
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramImages.map((src, idx) => (
              <a
                key={idx}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-28 sm:h-36 rounded-xl overflow-hidden border transition-all"
                style={{ borderColor: `${activePalette.borderMain}80` }}
              >
                <img
                  src={src}
                  alt={`Forge Fit Instagram ${idx + 1}`}
                  className="w-full h-full object-cover image-zoom"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs"
                  style={{ backgroundColor: `${activePalette.bgMain}A0` }}
                >
                  <Instagram size={20} style={{ color: activePalette.accentGold }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Main Links Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b"
          style={{ borderColor: activePalette.borderMain }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 tracking-widest" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif' }}>
              FORGED FIT
            </h3>

            <p className="text-xs font-light leading-relaxed max-w-sm" style={{ color: activePalette.textSecondary }}>
              An ultra-premium private members athletic and wellness sanctuary. Tailored strength protocols, contrast hydrotherapy, and bespoke personal coaching.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest font-semibold block" style={{ color: activePalette.accentGold }}>
                Capped Global Membership • 2,000 Seats
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: activePalette.accentGold }}>
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs font-light" style={{ color: activePalette.textSecondary }}>
              <li><a href="#welcome" className="hover:opacity-100 transition-opacity">The Experience</a></li>
              <li><a href="#facilities" className="hover:opacity-100 transition-opacity">Facilities & Suites</a></li>
              <li><a href="#programs" className="hover:opacity-100 transition-opacity">Training Protocols</a></li>
              <li><a href="#coaches" className="hover:opacity-100 transition-opacity">Master Coaches</a></li>
              <li><a href="#wellness" className="hover:opacity-100 transition-opacity">Recovery & Biohacking</a></li>
            </ul>
          </div>

          {/* Column 3: Membership */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: activePalette.accentGold }}>
              Membership & Admin
            </h4>
            <ul className="space-y-2 text-xs font-light" style={{ color: activePalette.textSecondary }}>
              <li>
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="hover:underline text-amber-300 font-semibold flex items-center space-x-1"
                >
                  <User size={12} />
                  <span>Member Login Portal</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (isAdmin) {
                      openAdminDashboard();
                    } else {
                      openLoginModal();
                    }
                  }}
                  className="hover:underline text-emerald-400 font-semibold flex items-center space-x-1"
                >
                  <ShieldAlert size={12} />
                  <span>Admin Director Suite</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking('Day Pass')}
                  className="hover:underline text-amber-200"
                >
                  Claim VIP Day Pass
                </button>
              </li>
              <li><a href="#membership" className="hover:opacity-100 transition-opacity">Executive Tiers</a></li>
              <li><a href="#journal" className="hover:opacity-100 transition-opacity">Forge Fit Journal</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: activePalette.accentGold }}>
              Forge Fit Gazette
            </h4>
            <p className="text-xs font-light leading-relaxed" style={{ color: activePalette.textSecondary }}>
              Receive confidential essays on human longevity, biohacking, and private wellness events.
            </p>

            {subscribed ? (
              <div
                className="text-xs font-medium p-3 rounded-xl border"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: `${activePalette.accentGold}50`,
                  color: activePalette.accentGold,
                }}
              >
                ✓ Thank you. You are subscribed to private updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter private email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                  style={{
                    backgroundColor: activePalette.bgCard,
                    borderColor: activePalette.borderMain,
                    color: activePalette.textPrimary,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="w-full py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider font-button hover:opacity-90 transition-all"
                >
                  Join Gazette
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col items-center justify-center text-xs font-light gap-6" style={{ color: activePalette.textSecondary }}>
          <div className="w-full flex justify-center mb-2">
             <img src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785155757/c8e9cfa4-ba26-43b2-8f73-43361075ff01_hkoxml.jpg" alt="Forged Fit" className="w-[40px] h-[40px] rounded-full object-cover" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span>© 2026 Forge Fit Athletic & Wellness Sanctuary. All Rights Reserved.</span>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:underline">Privacy Protocol</a>
              <span>•</span>
              <a href="#" className="hover:underline">Terms of Sanctuary</a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              style={{ color: activePalette.accentGold }}
            >
              <span className="uppercase text-[10px] tracking-widest font-medium">Top of Page</span>
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
