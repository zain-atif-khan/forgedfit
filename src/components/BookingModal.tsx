import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, CheckCircle2, Sparkles, QrCode, Calendar, Clock, MapPin, ShieldCheck, Dumbbell, Info, Check, ArrowRight, User } from 'lucide-react';
import { FACILITIES, JOURNEY_STEPS, TRAINING_PROGRAMS, MEMBERSHIP_TIERS, WELLNESS_SERVICES } from '../data/clubData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialProgramOrCoach?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Complimentary Experience',
  initialProgramOrCoach = ''
}) => {
  const { activePalette } = useTheme();

  const [activeTab, setActiveTab] = useState<'overview' | 'form' | 'pass'>('form');

  const [formData, setFormData] = useState({
    fullName: 'Executive Guest',
    email: 'guest@forgefit.sanctuary',
    phone: '+1 (555) 389-9000',
    visitDate: '2026-07-28',
    visitTime: '10:00 AM',
    primaryGoal: 'Hypertrophy & Architectural Strength',
    specialNotes: ''
  });

  const [confirmed, setConfirmed] = useState(false);
  const [passNumber, setPassNumber] = useState(`AUR-${Math.floor(100000 + Math.random() * 900000)}`);

  // Matched detail item from club data
  const matchedFacility = FACILITIES.find(
    f => f.name.toLowerCase() === initialProgramOrCoach.toLowerCase() ||
         f.id.toLowerCase() === initialProgramOrCoach.toLowerCase()
  );

  const matchedStep = JOURNEY_STEPS.find(
    s => s.title.toLowerCase() === initialProgramOrCoach.toLowerCase() ||
         s.subtitle.toLowerCase() === initialProgramOrCoach.toLowerCase()
  );

  const matchedProgram = TRAINING_PROGRAMS.find(
    p => p.title.toLowerCase() === initialProgramOrCoach.toLowerCase()
  );

  const matchedMembership = MEMBERSHIP_TIERS.find(
    m => m.name.toLowerCase() === initialProgramOrCoach.toLowerCase()
  );

  const matchedWellness = WELLNESS_SERVICES.find(
    w => w.title.toLowerCase() === initialProgramOrCoach.toLowerCase()
  );

  useEffect(() => {
    if (isOpen) {
      setConfirmed(false);
      setPassNumber(`AUR-${Math.floor(100000 + Math.random() * 900000)}`);
      // Default to overview tab if we have matched facility or journey step details
      if (matchedFacility || matchedStep || matchedProgram || matchedWellness) {
        setActiveTab('overview');
      } else {
        setActiveTab('form');
      }
    }
  }, [isOpen, initialProgramOrCoach]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setActiveTab('pass');
  };

  const itemImage = matchedFacility?.image ||
                    matchedStep?.image ||
                    matchedProgram?.image ||
                    matchedWellness?.image ||
                    'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg';

  const itemDescription = matchedFacility?.description ||
                          matchedStep?.description ||
                          matchedProgram?.summary ||
                          matchedWellness?.description ||
                          matchedMembership?.description ||
                          'Experience absolute discretion, medical-grade biometric analysis, and custom strength protocols at Forge Fit Sanctuary.';

  const itemHighlights = matchedFacility?.features ||
                         matchedStep?.highlights ||
                         matchedProgram?.keyFocus ||
                         matchedWellness?.benefits ||
                         matchedMembership?.features ||
                         ['Complimentary Valet Parking', 'InBody 770 Composition Scan', 'Eucalyptus Steam Vault', 'Master Coach Consultation'];

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 backdrop-blur-xl bg-[var(--overlay-dark)] animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="border rounded-3xl max-w-3xl w-full overflow-hidden shadow-[var(--shadow-lg)] relative max-h-[92vh] flex flex-col transition-all duration-300"
        style={{
          backgroundColor: activePalette.bgCard,
          borderColor: activePalette.accentGold,
        }}
      >
        {/* Modal Top Header with Banner */}
        <div className="relative border-b overflow-hidden shrink-0" style={{ borderColor: activePalette.borderMain }}>
          {/* Background image preview if matched item exists */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img src={itemImage} alt="Sanctuary Feature" className="w-full h-full object-cover filter brightness-50 contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between gap-4">
            <div className="flex items-start space-x-3">
              <div
                className="w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 mt-1 shadow-[var(--shadow-sm)]"
                style={{
                  borderColor: activePalette.accentGold,
                  backgroundColor: `${activePalette.bgMain}EE`,
                }}
              >
                <Sparkles size={18} style={{ color: activePalette.accentGold }} />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span
                    className="text-[9px] uppercase tracking-[0.25em] font-bold px-2.5 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${activePalette.accentGold}60`,
                      color: activePalette.accentGold,
                      backgroundColor: `${activePalette.accentGold}15`
                    }}
                  >
                    {initialType}
                  </span>
                  {matchedFacility?.sqft && (
                    <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>
                      {matchedFacility.sqft}
                    </span>
                  )}
                </div>
                <h3
                  className="font-serif text-xl sm:text-2xl font-normal leading-snug"
                  style={{ color: activePalette.textPrimary }}
                >
                  {initialProgramOrCoach ? initialProgramOrCoach : 'Forge Fit Private Sanctuary Pass'}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center border focus:outline-none shrink-0 transition-transform hover:scale-110 active:scale-95"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
                color: activePalette.textPrimary,
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs if not confirmed */}
          {!confirmed && (
            <div className="relative z-10 px-6 flex items-center space-x-4 text-xs font-semibold uppercase tracking-widest border-t" style={{ borderColor: `${activePalette.borderMain}60` }}>
              {(matchedFacility || matchedStep || matchedProgram || matchedWellness) && (
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-3 flex items-center space-x-1.5 border-b-2 transition-all ${
                    activeTab === 'overview' ? 'border-amber-400 font-bold' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  style={{ color: activeTab === 'overview' ? activePalette.accentGold : activePalette.textPrimary }}
                >
                  <Info size={14} />
                  <span>Sanctuary Overview</span>
                </button>
              )}

              <button
                onClick={() => setActiveTab('form')}
                className={`py-3 flex items-center space-x-1.5 border-b-2 transition-all ${
                  activeTab === 'form' ? 'border-amber-400 font-bold' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                style={{ color: activeTab === 'form' ? activePalette.accentGold : activePalette.textPrimary }}
              >
                <Calendar size={14} />
                <span>Reserve Digital Pass</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Body Content Area */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW DETAILS */}
          {!confirmed && activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative rounded-2xl overflow-hidden border shadow-[var(--shadow-md)] aspect-video md:aspect-square">
                  <img src={itemImage} alt="Feature View" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono font-semibold" style={{ color: activePalette.accentGold }}>
                      Location: 750 Fifth Avenue • Fifth Ave Private Entrance
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: activePalette.textPrimary }}>
                    {itemDescription}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold block" style={{ color: activePalette.accentGold }}>
                      Featured Amenities & Specifications:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {itemHighlights.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs" style={{ color: activePalette.textPrimary }}>
                          <Check size={14} className="shrink-0" style={{ color: activePalette.accentGold }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab('form')}
                      style={{
                        backgroundColor: activePalette.accentGold,
                        color: activePalette.bgMain,
                      }}
                      className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all font-button flex items-center justify-center space-x-2 shadow-[var(--shadow-sm)]"
                    >
                      <span>Proceed to Access Reservation</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FORM / CONFIRMATION */}
          {!confirmed && activeTab === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in">
              <div className="p-3.5 rounded-2xl border flex items-center space-x-3 text-xs" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                <ShieldCheck size={18} className="shrink-0 text-emerald-400" />
                <span style={{ color: activePalette.textSecondary }}>
                  Reserving <strong style={{ color: activePalette.textPrimary }}>{initialProgramOrCoach || initialType}</strong>. Includes complimentary private valet access & electrolyte elixir service upon arrival.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Sterling"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                    Phone Number (SMS Dispatch) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 389-9000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@sterling.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.visitTime}
                    onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                    className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  >
                    <option value="08:00 AM">08:00 AM Morning Priority</option>
                    <option value="10:00 AM">10:00 AM Mid-Morning Suite</option>
                    <option value="02:00 PM">02:00 PM Afternoon Session</option>
                    <option value="06:00 PM">06:00 PM Evening Hydrotherapy</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                    Primary Goal / Interest
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  >
                    <option value="Hypertrophy & Architectural Strength">Strength & Hypertrophy</option>
                    <option value="Steam Vault & Cold Plunge Spa">Eucalyptus Hydrotherapy & Spa</option>
                    <option value="Biohacking & Compression Lounge">Biohacking & Recovery</option>
                    <option value="1-on-1 Master Coaching">1-on-1 Master Coaching</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: activePalette.textSecondary }}>
                  Concierge Notes or Dietary Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in InBody scan and private locker suite..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                  style={{
                    backgroundColor: activePalette.bgMain,
                    borderColor: activePalette.borderMain,
                    color: activePalette.textPrimary,
                  }}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all font-button shadow-[var(--shadow-md)] flex items-center justify-center space-x-2"
                >
                  <Sparkles size={16} />
                  <span>Generate Digital VIP Passkey</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: CONFIRMED PASS RECEIPT */}
          {confirmed && (
            <div className="space-y-6 text-center animate-in zoom-in-95">
              <div
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border"
                style={{
                  backgroundColor: `${activePalette.accentGold}20`,
                  borderColor: activePalette.accentGold,
                  color: activePalette.accentGold,
                }}
              >
                <CheckCircle2 size={16} />
                <span>Pass Issued & VIP Access Confirmed</span>
              </div>

              {/* Digital VIP Pass Card */}
              <div
                className="p-6 rounded-3xl border-2 text-left relative overflow-hidden shadow-[var(--shadow-lg)] space-y-6"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.accentGold,
                }}
              >
                <div className="flex justify-between items-start border-b pb-4" style={{ borderColor: activePalette.borderMain }}>
                  <div>
                    <span
                      className="font-serif text-2xl font-normal uppercase tracking-widest block"
                      style={{ color: activePalette.textPrimary }}
                    >
                      FORGE FIT
                    </span>
                    <span
                      className="text-[9px] uppercase tracking-widest block font-bold mt-0.5"
                      style={{ color: activePalette.accentGold }}
                    >
                      {initialProgramOrCoach ? `${initialProgramOrCoach} • VIP Guest Pass` : 'VIP Sanctuary Access Pass'}
                    </span>
                  </div>
                  <span
                    className="font-mono text-xs font-bold px-3 py-1 rounded-full border shadow-sm"
                    style={{
                      backgroundColor: activePalette.bgCard,
                      borderColor: activePalette.accentGold,
                      color: activePalette.accentGold,
                    }}
                  >
                    {passNumber}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase block" style={{ color: activePalette.textSecondary }}>Guest Name</span>
                    <span className="font-semibold" style={{ color: activePalette.textPrimary }}>{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase block" style={{ color: activePalette.textSecondary }}>Access Date</span>
                    <span className="font-semibold" style={{ color: activePalette.accentGold }}>{formData.visitDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase block" style={{ color: activePalette.textSecondary }}>Time Slot</span>
                    <span className="font-semibold" style={{ color: activePalette.textPrimary }}>{formData.visitTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase block" style={{ color: activePalette.textSecondary }}>Sanctuary Entrance</span>
                    <span className="font-semibold" style={{ color: activePalette.textPrimary }}>750 Fifth Ave, NYC</span>
                  </div>
                </div>

                <div
                  className="pt-4 border-t flex items-center justify-between"
                  style={{ borderColor: activePalette.borderMain }}
                >
                  <div className="flex items-center space-x-3 text-[11px]" style={{ color: activePalette.textSecondary }}>
                    <QrCode size={36} style={{ color: activePalette.accentGold }} />
                    <div>
                      <span className="font-bold block" style={{ color: activePalette.textPrimary }}>NFC & QR Digital Passkey</span>
                      <span className="text-[10px]">Present at Fifth Avenue Private Entrance Valet</span>
                    </div>
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md border"
                    style={{
                      borderColor: `${activePalette.accentGold}50`,
                      color: activePalette.accentGold,
                      backgroundColor: `${activePalette.accentGold}10`
                    }}
                  >
                    Valet Included
                  </span>
                </div>
              </div>

              <p className="text-xs font-light max-w-md mx-auto leading-relaxed" style={{ color: activePalette.textSecondary }}>
                A confirmation SMS and mobile calendar invite have been dispatched to <span className="font-semibold" style={{ color: activePalette.textPrimary }}>{formData.phone}</span>. Present this pass on your phone upon arrival.
              </p>

              <div className="pt-2 flex justify-center space-x-4">
                <button
                  onClick={onClose}
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest font-button shadow-[var(--shadow-md)] hover:opacity-90 transition-all"
                >
                  Close & View Sanctuary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
