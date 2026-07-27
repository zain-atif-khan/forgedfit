import React, { useRef, useState } from 'react';
import { HERO_BADGES } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import { AnimatedNumberText } from './CountUp';
import {
  Star,
  Award,
  Users,
  Maximize2,
  ShieldCheck,
  Calendar,
  ArrowDown,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (type?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ultra-realistic continuous hero video source requested by user
  const mainHeroVideo = 'https://res.cloudinary.com/akmdvmmw/video/upload/q_auto:best,f_auto/v1785064745/a_bit_longer_video_and_contino_ggmwjk.mp4';
  const backupVideo = 'https://assets.mixkit.co/videos/preview/mixkit-inside-a-modern-gym-with-weights-and-machinery-41563-large.mp4';

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star size={14} style={{ color: activePalette.accentGold }} />;
      case 'Award':
        return <Award size={14} style={{ color: activePalette.accentGold }} />;
      case 'Users':
        return <Users size={14} style={{ color: activePalette.accentGold }} />;
      case 'Maximize2':
        return <Maximize2 size={14} style={{ color: activePalette.accentGold }} />;
      case 'ShieldCheck':
        return <ShieldCheck size={14} style={{ color: activePalette.accentGold }} />;
      case 'Calendar':
        return <Calendar size={14} style={{ color: activePalette.accentGold }} />;
      default:
        return <Star size={14} style={{ color: activePalette.accentGold }} />;
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-20">
      {/* Background Ultra-Realistic Continuous Gym Machinery Video Layer (NO user controls, continuous loop) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-115 transition-all duration-1000 pointer-events-none"
            src={mainHeroVideo}
          >
            <source src={mainHeroVideo} type="video/mp4" />
            <source src={backupVideo} type="video/mp4" />
            <img
              src="https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg"
              alt="Forge Fit Gym Machinery"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </video>
        ) : (
          <img
            src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg"
            alt="Forge Fit Gym Machinery"
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
            referrerPolicy="no-referrer"
          />
        )}

        {/* Darkened Luxury Gradient Overlays for Maximum Text Contrast */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `linear-gradient(to top, ${activePalette.bgMain} 0%, ${activePalette.bgMain}B3 40%, ${activePalette.bgMain}80 100%)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,126,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center pt-8">
        
        {/* Top Floating Badge */}
        <div
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-6 border shadow-[var(--shadow-md)] backdrop-blur-xl mt-12"
          style={{
            borderColor: `${activePalette.accentGold}50`,
            backgroundColor: `${activePalette.bgCard}85`,
          }}
        >
          <Sparkles size={13} style={{ color: activePalette.accentGold }} />
          <span
            className="text-[11px] uppercase tracking-[0.25em] font-semibold"
            style={{ color: activePalette.textSecondary }}
          >
            Biometric Strength Machinery & Private Sanctuary
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-6 max-w-5xl drop-shadow-2xl"
          style={{ color: activePalette.textPrimary }}
        >
          Transform Your Body.{' '}
          <span
            className="italic font-normal block sm:inline"
            style={{ color: activePalette.accentGold }}
          >
            Elevate Your Lifestyle.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl font-light max-w-3xl mb-10 leading-relaxed drop-shadow"
          style={{ color: activePalette.textSecondary }}
        >
          Experience world-class biometric strength machinery, eucalyptus steam hydrotherapy, and a private sanctuary designed around your unique biology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mb-16">
          <button
            onClick={() => onOpenBooking('Complimentary Experience')}
            style={{
              backgroundColor: activePalette.accentGold,
              color: activePalette.bgMain,
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 hover:shadow-[0_0_30px_rgba(200,169,126,0.4)] transition-all duration-300 font-button shadow-[var(--shadow-lg)]"
          >
            Book Your Complimentary Experience
          </button>

          <a
            href="#membership"
            style={{
              borderColor: activePalette.borderMain,
              color: activePalette.textPrimary,
              backgroundColor: `${activePalette.bgCard}70`
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full border font-semibold text-xs uppercase tracking-[0.2em] hover:border-amber-400/80 transition-all duration-300 font-button text-center backdrop-blur-md"
          >
            Explore Membership
          </a>
        </div>

        {/* Floating Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full max-w-5xl mb-12">
          {HERO_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="p-3.5 rounded-xl border flex flex-col items-center text-center justify-center backdrop-blur-md"
              style={{
                backgroundColor: `${activePalette.bgCard}80`,
                borderColor: `${activePalette.borderMain}70`
              }}
            >
              <div className="flex items-center space-x-1.5 mb-1">
                {getBadgeIcon(badge.icon)}
                <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: activePalette.textPrimary }}>
                  <AnimatedNumberText text={badge.value} />
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: activePalette.textSecondary }}>
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#welcome"
          className="inline-flex flex-col items-center transition-colors group"
          style={{ color: activePalette.textSecondary }}
          aria-label="Scroll down to skip hero"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-2 font-medium">
            Scroll to Explore Sanctuary
          </span>
          <ArrowDown size={18} style={{ color: activePalette.accentGold }} />
        </a>
      </div>
    </section>
  );
};
