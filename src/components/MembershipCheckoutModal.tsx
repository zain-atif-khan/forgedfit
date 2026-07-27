import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, CheckCircle2, ShieldCheck, Sparkles, CreditCard, ArrowRight } from 'lucide-react';

interface MembershipCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  price?: string;
  billingPeriod?: string;
}

export const MembershipCheckoutModal: React.FC<MembershipCheckoutModalProps> = ({
  isOpen,
  onClose,
  planName = 'Executive Platinum VIP',
  price = '$850',
  billingPeriod = '/ Month'
}) => {
  const { activePalette } = useTheme();
  const [fullName, setFullName] = useState('Lord Sterling Vance');
  const [email, setEmail] = useState('sterling.vance@aureus.club');
  const [phone, setPhone] = useState('+1 (555) 389-9000');
  const [confirmed, setConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationCode(`AUR-RES-${Math.floor(100000 + Math.random() * 900000)}`);
    setConfirmed(true);
  };

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 backdrop-blur-2xl bg-[var(--overlay-dark)] animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          setConfirmed(false);
        }
      }}
    >
      <div
        className="relative max-w-lg w-full rounded-3xl border shadow-[var(--shadow-lg)] overflow-hidden p-8 sm:p-10 transition-all transform animate-in zoom-in-95"
        style={{
          backgroundColor: activePalette.bgCard,
          borderColor: activePalette.accentGold,
        }}
      >
        <button
          onClick={() => {
            onClose();
            setConfirmed(false);
          }}
          className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center border transition-transform hover:scale-110 active:scale-95"
          style={{
            backgroundColor: activePalette.bgMain,
            borderColor: activePalette.borderMain,
            color: activePalette.textPrimary,
          }}
        >
          <X size={18} />
        </button>

        {confirmed ? (
          <div className="space-y-6 text-center animate-in zoom-in-95">
            <div
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border mx-auto"
              style={{
                backgroundColor: `${activePalette.accentGold}20`,
                borderColor: activePalette.accentGold,
                color: activePalette.accentGold,
              }}
            >
              <CheckCircle2 size={16} />
              <span>Membership Reservation Confirmed</span>
            </div>

            <div className="p-6 rounded-2xl border text-left space-y-4" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.accentGold }}>
              <div className="flex justify-between items-start border-b pb-3" style={{ borderColor: activePalette.borderMain }}>
                <div>
                  <span className="font-serif text-xl font-bold block" style={{ color: activePalette.textPrimary }}>
                    {planName}
                  </span>
                  <span className="text-xs font-mono text-amber-300">
                    {price} {billingPeriod}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {reservationCode}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span style={{ color: activePalette.textSecondary }}>Reserved For:</span>
                  <span className="font-semibold" style={{ color: activePalette.textPrimary }}>{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: activePalette.textSecondary }}>Contact Phone:</span>
                  <span className="font-semibold" style={{ color: activePalette.textPrimary }}>{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: activePalette.textSecondary }}>Email Confirmation:</span>
                  <span className="font-semibold" style={{ color: activePalette.accentGold }}>{email}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Your membership reservation has been secured. Our Senior Concierge Officer will contact you within 2 hours to finalize your private orientation and biometric keycard issuance.
            </p>

            <button
              onClick={() => {
                onClose();
                setConfirmed(false);
              }}
              style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
              className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest font-button"
            >
              Return To Sanctuary
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="relative h-28 -mx-8 -mt-8 sm:-mx-10 sm:-mt-10 mb-2 overflow-hidden rounded-t-3xl border-b" style={{ borderColor: activePalette.borderMain }}>
              <img
                src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg"
                alt="Payment & Membership Suite"
                className="w-full h-full object-cover filter contrast-105 opacity-85"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${activePalette.bgCard} 0%, transparent 80%)`
                }}
              />
            </div>

            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-full border flex items-center justify-center"
                style={{
                  borderColor: activePalette.accentGold,
                  backgroundColor: `${activePalette.accentGold}15`,
                }}
              >
                <Sparkles size={20} style={{ color: activePalette.accentGold }} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold block" style={{ color: activePalette.accentGold }}>
                  Membership Checkout
                </span>
                <h3 className="font-serif text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                  {planName}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
              <div>
                <span className="text-xs font-bold block" style={{ color: activePalette.textPrimary }}>
                  Selected Membership Tier
                </span>
                <span className="text-[11px] font-light" style={{ color: activePalette.textSecondary }}>
                  Includes 24/7 Access, Cold Plunge, Sauna & Coach
                </span>
              </div>
              <div className="text-right">
                <span className="font-serif text-2xl font-bold" style={{ color: activePalette.accentGold }}>
                  {price}
                </span>
                <span className="text-[10px] block" style={{ color: activePalette.textSecondary }}>
                  {billingPeriod}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                  style={{
                    backgroundColor: activePalette.bgMain,
                    borderColor: activePalette.borderMain,
                    color: activePalette.textPrimary,
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl border flex items-center space-x-3 text-xs" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
                <span className="font-light" style={{ color: activePalette.textSecondary }}>
                  No payment required today. Reserving locks your private invitation rate.
                </span>
              </div>

              <button
                type="submit"
                style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
                className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all font-button shadow-[var(--shadow-md)] flex items-center justify-center space-x-2"
              >
                <span>Reserve Membership Invitation</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
