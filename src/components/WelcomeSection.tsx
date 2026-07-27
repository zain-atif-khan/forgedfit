import BorderGlow from './BorderGlow';
import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Compass, Sparkles, HeartPulse, ShieldCheck } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

export const WelcomeSection: React.FC = () => {
  const { activePalette } = useTheme();

  return (
    <section
      id="welcome"
      className="py-24 sm:py-32 relative overflow-hidden border-t transition-colors duration-500"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      {/* Background Subtle Accent Glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: activePalette.accentGold }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: activePalette.accentGold }}
          >
            Our Core Philosophy
          </span>
          <TextRevealHeading
            text="Where Fitness Transcends Exercise & Becomes an Art Form"
            revealText="Where Biology Meets Perfect Biomechanics"
            textClassName="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-center"
          />
          <div
            className="w-12 h-[1px] mt-6"
            style={{ backgroundColor: activePalette.accentGold }}
          />
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Imagery with Warm Overlay */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative rounded-2xl overflow-hidden border shadow-[var(--shadow-lg)] group"
              style={{ borderColor: activePalette.borderMain }}
            >
              <img
                src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg"
                alt="Forge Fit High-Performance Strength Sanctuary"
                className="w-full h-[520px] object-cover image-zoom"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80"
                style={{
                  backgroundImage: `linear-gradient(to top, ${activePalette.bgMain} 0%, transparent 70%)`,
                }}
              />

              {/* Floating Quote Card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-6 rounded-xl border backdrop-blur-xl shadow-[var(--shadow-lg)]"
                style={{
                  backgroundColor: `${activePalette.bgCard}D0`,
                  borderColor: activePalette.borderMain,
                }}
              >
                <p
                  className="font-serif italic text-base sm:text-lg leading-relaxed mb-2"
                  style={{ color: activePalette.textPrimary }}
                >
                  "We designed Forge Fit not as a gym, but as a private sanctuary where members cultivate longevity, physical majesty, and mental clarity."
                </p>
                <span
                  className="text-xs uppercase tracking-widest font-semibold block"
                  style={{ color: activePalette.accentGold }}
                >
                  — Julian V. Sterling, Founding Patron
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: activePalette.textSecondary }}
              >
                Not Just Workouts. A Refined Lifestyle.
              </span>
              <h3
                className="font-serif text-2xl sm:text-4xl font-normal leading-snug"
                style={{ color: activePalette.textPrimary }}
              >
                Personalized Care. Uncompromising Standards. World-Class Hospitality.
              </h3>
            </div>

            <p
              className="text-sm sm:text-base font-light leading-relaxed"
              style={{ color: activePalette.textSecondary }}
            >
              At Forge Fit, we believe physical transformation cannot exist in isolation.
              Traditional gyms offer crowds, noise, and generic routines. We offer bespoke architecture, capped membership, medical-grade biometrics, and one-on-one personal coaching integrated with holistic recovery.
            </p>

            {/* Philosophy Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <BorderGlow
                backgroundColor={activePalette.bgCard}
                borderRadius={12}
                glowColor="40 80 80"
                glowIntensity={0.6}
                fillOpacity={0.4}
              >
                <div
                className="p-5 rounded-xl border-none"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.borderMain,
                }}
              >
                <Sparkles size={20} style={{ color: activePalette.accentGold }} className="mb-3" />
                <h4 className="font-serif text-lg mb-1" style={{ color: activePalette.textPrimary }}>
                  Capped Membership
                </h4>
                <p className="text-xs leading-relaxed font-light" style={{ color: activePalette.textSecondary }}>
                  Strict limits on member numbers guarantee zero wait times for equipment or private suites.
                </p>
              </div>
              </BorderGlow>

              <BorderGlow
                backgroundColor={activePalette.bgCard}
                borderRadius={12}
                glowColor="40 80 80"
                glowIntensity={0.6}
                fillOpacity={0.4}
              >
                <div
                className="p-5 rounded-xl border-none"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.borderMain,
                }}
              >
                <HeartPulse size={20} style={{ color: activePalette.accentGold }} className="mb-3" />
                <h4 className="font-serif text-lg mb-1" style={{ color: activePalette.textPrimary }}>
                  Holistic Bio-Check
                </h4>
                <p className="text-xs leading-relaxed font-light" style={{ color: activePalette.textSecondary }}>
                  InBody scans, VO2 Max testing, and HRV monitoring inform every exercise prescribed.
                </p>
              </div>
              </BorderGlow>

              <BorderGlow
                backgroundColor={activePalette.bgCard}
                borderRadius={12}
                glowColor="40 80 80"
                glowIntensity={0.6}
                fillOpacity={0.4}
              >
                <div
                className="p-5 rounded-xl border-none"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.borderMain,
                }}
              >
                <Compass size={20} style={{ color: activePalette.accentGold }} className="mb-3" />
                <h4 className="font-serif text-lg mb-1" style={{ color: activePalette.textPrimary }}>
                  World-Class Coaches
                </h4>
                <p className="text-xs leading-relaxed font-light" style={{ color: activePalette.textSecondary }}>
                  Master trainers and movement scientists with decades of Olympic and professional experience.
                </p>
              </div>
              </BorderGlow>

              <BorderGlow
                backgroundColor={activePalette.bgCard}
                borderRadius={12}
                glowColor="40 80 80"
                glowIntensity={0.6}
                fillOpacity={0.4}
              >
                <div
                className="p-5 rounded-xl border-none"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.borderMain,
                }}
              >
                <ShieldCheck size={20} style={{ color: activePalette.accentGold }} className="mb-3" />
                <h4 className="font-serif text-lg mb-1" style={{ color: activePalette.textPrimary }}>
                  Spa-Grade Recovery
                </h4>
                <p className="text-xs leading-relaxed font-light" style={{ color: activePalette.textSecondary }}>
                  Eucalyptus steam, Finnish sauna, cold plunge, and infrared beds to leave you revitalized.
                </p>
              </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
