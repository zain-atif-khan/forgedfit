import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import { MEMBERSHIP_TIERS } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import { Check, Crown } from 'lucide-react';
import BorderGlow from './BorderGlow';
import ScrollFloat from './ScrollFloat';
import { AnimatedNumberText } from './CountUp';


interface MembershipSectionProps {
  onOpenBooking: (type?: string, tierName?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();

  return (
    <section
      id="membership"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      {/* Background Interactive Fluid Splash Cursor */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: activePalette.accentGold }}
          >
            Private Membership
          </span>
          <TextRevealHeading
            text="Strictly Capped Enrollment. Unrivaled Access."
            revealText="Exclusive Executive Tiers"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4"
            style={{ color: activePalette.textSecondary }}
          >
            To preserve absolute privacy and optimal member experience, membership is capped at <AnimatedNumberText text="2,000" /> active patrons worldwide.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isSignature = tier.isPopular;

            return (
              <BorderGlow
                key={tier.id}
                backgroundColor={isSignature ? activePalette.bgPanel : activePalette.bgCard}
                borderRadius={24}
                glowColor="40 80 80"
                glowIntensity={isSignature ? 1.2 : 0.8}
                fillOpacity={0.6}
                className={`h-full flex flex-col ${
                  isSignature ? 'lg:-translate-y-4' : ''
                }`}
              >
                <div
                  className="relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 shadow-[var(--shadow-lg)] border h-full"
                  style={{
                    backgroundColor: isSignature ? activePalette.bgPanel : activePalette.bgCard,
                    borderColor: isSignature ? activePalette.accentGold : activePalette.borderMain,
                  }}
                >
                  {/* Popular Badge */}
                  {isSignature && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[var(--shadow-sm)] flex items-center space-x-1.5 z-10"
                      style={{
                        backgroundColor: activePalette.accentGold,
                        color: activePalette.bgMain,
                      }}
                    >
                      <Crown size={12} />
                      <span>{tier.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Tier Cover Image */}
                    <div className="relative h-40 -mx-8 -mt-8 sm:-mx-10 sm:-mt-10 mb-6 overflow-hidden rounded-t-3xl border-b" style={{ borderColor: activePalette.borderMain }}>
                      <img
                        src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg"
                        alt={`${tier.name} Sanctuary Suite`}
                        className="w-full h-full object-cover filter contrast-105 opacity-80 transition-transform duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, ${isSignature ? activePalette.bgPanel : activePalette.bgCard} 0%, transparent 80%)`
                        }}
                      />
                    </div>

                    {/* Header */}
                    <div className="mb-6 text-center sm:text-left">
                      <h3
                        className="font-serif text-2xl sm:text-3xl mb-2 font-normal"
                        style={{ color: activePalette.textPrimary }}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className="text-xs font-light min-h-[36px]"
                        style={{ color: activePalette.textSecondary }}
                      >
                        {tier.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div
                      className="mb-8 p-6 rounded-2xl border text-center"
                      style={{
                        backgroundColor: activePalette.bgMain,
                        borderColor: activePalette.borderMain,
                      }}
                    >
                      <span
                        className="font-serif text-4xl sm:text-5xl font-light"
                        style={{ color: activePalette.accentGold }}
                      >
                        <AnimatedNumberText text={tier.price} />
                      </span>
                      <span
                        className="text-xs font-light block mt-1"
                        style={{ color: activePalette.textSecondary }}
                      >
                        {tier.period}
                      </span>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-3 mb-10">
                      <span
                        className="text-[10px] uppercase tracking-widest font-semibold block mb-4"
                        style={{ color: activePalette.accentGold }}
                      >
                        Privileges Included:
                      </span>
                      {tier.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 text-xs sm:text-sm"
                          style={{ color: activePalette.textPrimary }}
                        >
                          <Check size={16} className="shrink-0 mt-0.5" style={{ color: activePalette.accentGold }} />
                          <span className="font-light leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => onOpenBooking('Membership Application', tier.name)}
                    style={{
                      backgroundColor: isSignature ? activePalette.accentGold : activePalette.bgMain,
                      color: isSignature ? activePalette.bgMain : activePalette.textPrimary,
                      borderColor: activePalette.accentGold,
                    }}
                    className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] font-button transition-all duration-300 shadow-[var(--shadow-md)] border hover:opacity-90"
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </BorderGlow>
            );
          })}
        </div>

        {/* Corporate & Private Concierge Note */}
        <div
          className="mt-16 p-8 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: activePalette.bgCard,
            borderColor: activePalette.borderMain,
          }}
        >
          <div className="text-center sm:text-left">
            <h4
              className="font-serif text-xl"
              style={{ color: activePalette.textPrimary }}
            >
              Corporate Executive Suites & Private Family Office Memberships
            </h4>
            <p
              className="text-xs font-light mt-1"
              style={{ color: activePalette.textSecondary }}
            >
              Custom multi-member access, private suite reservations, and bespoke wellness retreats.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Corporate Membership')}
            style={{
              borderColor: activePalette.accentGold,
              color: activePalette.accentGold,
            }}
            className="px-6 py-3 rounded-full border text-xs uppercase tracking-widest font-semibold font-button transition-all shrink-0 hover:opacity-80"
          >
            Inquire Confidential Access
          </button>
        </div>
      </div>
    </section>
  );
};
