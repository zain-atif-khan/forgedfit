import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import LogoLoop from './LogoLoop';
import {
  Car,
  Sparkles,
  KeyRound,
  UserCheck,
  Dumbbell,
  HeartPulse,
  Coffee,
  Flame,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Award,
  Compass,
  Calendar
} from 'lucide-react';

export const MemberExperience: React.FC = () => {
  const { activePalette } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = JOURNEY_STEPS[activeStepIndex];

  const partnerLogos = [
    { node: <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80"><Sparkles size={14} className="shrink-0" /><span>Technogym Biocircuit</span></span> },
    { node: <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80"><Zap size={14} className="shrink-0" /><span>Hyperice Recovery</span></span> },
    { node: <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80"><Shield size={14} className="shrink-0" /><span>Oura Ring Sync</span></span> },
    { node: <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80"><Award size={14} className="shrink-0" /><span>Eleiko Sanctuary</span></span> },
    { node: <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80"><Compass size={14} className="shrink-0" /><span>Garmin Bio-Lab</span></span> },
    { node: <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80"><Calendar size={14} className="shrink-0" /><span>Whoop 4.0 Lab</span></span> },
  ];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'KeyRound': return <KeyRound size={18} />;
      case 'UserCheck': return <UserCheck size={18} />;
      case 'Dumbbell': return <Dumbbell size={18} />;
      case 'HeartPulse': return <HeartPulse size={18} />;
      case 'Coffee': return <Coffee size={18} />;
      case 'Flame': return <Flame size={18} />;
      case 'Zap': return <Zap size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section
      id="experience"
      className="py-24 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: activePalette.bgCard,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: activePalette.accentGold }}
          >
            The Member Journey
          </span>
          <TextRevealHeading
            text="A Seamless Ritual of Physical & Mental Restoration"
            revealText="Exclusive Member Journey"
            textClassName="font-serif text-3xl sm:text-5xl font-light tracking-tight text-center"
          />
          <p
            className="text-sm font-light max-w-xl mt-4"
            style={{ color: activePalette.textSecondary }}
          >
            From the moment you arrive to the moment you leave, every touchpoint is engineered for absolute comfort, privacy, and results.
          </p>
        </div>

        {/* Horizontal Timeline Steps Bar */}
        <div className="mb-12 pt-2">
          <div className="w-full">
            <LogoLoop 
              logos={JOURNEY_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPast = idx < activeStepIndex;

                return {
                  node: (
                    <button
                      key={step.id}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-300 ${
                        isActive ? 'scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border shadow-md"
                        style={{
                          backgroundColor: isActive
                            ? activePalette.accentGold
                            : isPast
                            ? activePalette.bgPanel
                            : activePalette.bgMain,
                          color: isActive
                            ? activePalette.bgMain
                            : activePalette.accentGold,
                          borderColor: isActive
                            ? activePalette.accentGold
                            : activePalette.borderMain,
                        }}
                      >
                        {getStepIcon(step.icon)}
                      </div>
                      <span
                        className="text-[10px] uppercase tracking-wider font-semibold mt-2.5 whitespace-nowrap transition-colors"
                        style={{
                          color: isActive ? activePalette.accentGold : activePalette.textSecondary,
                        }}
                      >
                        0{step.step}. {step.title.split('&')[0]}
                      </span>
                    </button>
                  )
                };
              })}
              speed={45} 
              direction="left" 
              logoHeight={80} 
              gap={56} 
              pauseOnHover={true} 
              fadeOut={true} 
              fadeOutColor={activePalette.bgCard} 
            />
          </div>
        </div>

        {/* Active Journey Card Details Showcase */}
        <div
          className="rounded-3xl border overflow-hidden shadow-[var(--shadow-lg)] p-6 sm:p-10 lg:p-12 transition-all duration-500"
          style={{
            backgroundColor: activePalette.bgMain,
            borderColor: activePalette.borderMain,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-7 relative group">
              <div
                className="relative rounded-2xl overflow-hidden border h-[340px] sm:h-[420px]"
                style={{ borderColor: activePalette.borderMain }}
              >
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover image-zoom"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `linear-gradient(to top, ${activePalette.bgMain} 0%, transparent 100%)`
                  }}
                />

                <div
                  className="absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest shadow"
                  style={{
                    backgroundColor: `${activePalette.bgMain}CC`,
                    borderColor: activePalette.accentGold,
                    color: activePalette.accentGold,
                  }}
                >
                  Step 0{currentStep.step} of 09
                </div>
              </div>
            </div>

            {/* Right Step Description */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <span
                  className="text-xs uppercase tracking-[0.25em] font-medium"
                  style={{ color: activePalette.accentGold }}
                >
                  {currentStep.subtitle}
                </span>
                <h3
                  className="font-serif text-3xl sm:text-4xl mt-1 font-normal"
                  style={{ color: activePalette.textPrimary }}
                >
                  {currentStep.title}
                </h3>
              </div>

              <p
                className="text-sm sm:text-base font-light leading-relaxed"
                style={{ color: activePalette.textSecondary }}
              >
                {currentStep.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wider block mb-3"
                  style={{ color: activePalette.textPrimary }}
                >
                  Signature Touches:
                </span>
                {currentStep.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-xs sm:text-sm"
                    style={{ color: activePalette.textSecondary }}
                  >
                    <CheckCircle2 size={16} className="shrink-0" style={{ color: activePalette.accentGold }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Prev / Next Controls */}
              <div
                className="flex items-center justify-between pt-6 border-t"
                style={{ borderColor: activePalette.borderMain }}
              >
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : JOURNEY_STEPS.length - 1))
                  }
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
                  style={{ color: activePalette.textSecondary }}
                >
                  <ChevronLeft size={16} />
                  <span>Previous Step</span>
                </button>

                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev < JOURNEY_STEPS.length - 1 ? prev + 1 : 0))
                  }
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: activePalette.accentGold }}
                >
                  <span>Next Step</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
