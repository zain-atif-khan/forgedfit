import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import { REVIEWS } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import BorderGlow from './BorderGlow';
import ScrollFloat from './ScrollFloat';
import GradualBlur from './GradualBlur';
import { AnimatedNumberText } from './CountUp';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import ScrollList from './lightswind/ScrollList';
import Particles from './Particles';

export const TestimonialsSection: React.FC = () => {
  const { activePalette } = useTheme();

  return (
    <section
      id="testimonials"
      className="py-24 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      {/* Particles Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={[activePalette.accentGold || '#C5A059', '#ffffff']}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      {/* Top and Bottom GradualBlur effects */}
      <GradualBlur
        position="top"
        height="5rem"
        strength={2.5}
        divCount={6}
        opacity={0.8}
        curve="ease-out"
        target="parent"
      />
      <GradualBlur
        position="bottom"
        height="5rem"
        strength={2.5}
        divCount={6}
        opacity={0.8}
        curve="ease-out"
        target="parent"
      />

      {/* Background Glow Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{ backgroundColor: activePalette.accentGold }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold px-4 py-1.5 rounded-full border inline-flex items-center space-x-2"
            style={{
              borderColor: activePalette.borderMain,
              color: activePalette.accentGold,
              backgroundColor: activePalette.bgCard,
            }}
          >
            <Quote size={14} />
            <span>Member Endorsements</span>
          </span>

          <TextRevealHeading
            text="Voices of the Forge Fit Sanctuary"
            revealText="Exclusive Member Endorsements"
          />

          <p
            className="text-xs sm:text-sm font-light max-w-xl leading-relaxed"
            style={{ color: activePalette.textSecondary }}
          >
            Explore unscripted endorsements from founders, architectural directors, and longevity specialists who call Forge Fit their physical sanctuary.
          </p>

          <div className="flex items-center space-x-2 pt-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-current"
                  style={{ color: activePalette.accentGold }}
                />
              ))}
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest ml-2"
              style={{ color: activePalette.textPrimary }}
            >
              <AnimatedNumberText text="4.9" />/5 Rating (<AnimatedNumberText text="450+" /> Verified Executive Reviews)
            </span>
          </div>
        </div>

        {/* Testimonials List with ScrollList */}
        <ScrollList
          data={REVIEWS}
          itemHeight={160}
          renderItem={(rev) => (
            <BorderGlow
              key={rev.id}
              backgroundColor={activePalette.bgCard}
              borderRadius={24}
              glowColor="40 80 80"
              glowIntensity={0.8}
              fillOpacity={0.6}
            >
              <div className="p-7 flex flex-col justify-between h-full space-y-6">
                {/* Rating & Quote Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={`star-${i}`}
                          size={14}
                          className="fill-current"
                          style={{ color: activePalette.accentGold }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest opacity-60"
                      style={{ color: activePalette.textSecondary }}
                    >
                      {rev.date}
                    </span>
                  </div>
                  <p
                    className="text-xs sm:text-sm font-light leading-relaxed italic"
                    style={{ color: activePalette.textPrimary }}
                  >
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3.5 pt-4 border-t" style={{ borderColor: activePalette.borderMain }}>
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border"
                    style={{ borderColor: activePalette.accentGold }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <h4
                        className="font-serif text-sm font-semibold truncate"
                        style={{ color: activePalette.textPrimary }}
                      >
                        {rev.author}
                      </h4>
                      <CheckCircle2 size={13} className="shrink-0" style={{ color: activePalette.accentGold }} />
                    </div>
                    <p
                      className="text-[11px] font-light truncate"
                      style={{ color: activePalette.textSecondary }}
                    >
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            </BorderGlow>
          )}
        />
      </div>
    </section>
  );
};

