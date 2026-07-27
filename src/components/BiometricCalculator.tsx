import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Activity, Dumbbell, Flame, Sparkles, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import GhostCursor from './GhostCursor';
import GradualBlur from './GradualBlur';
import BorderGlow from './BorderGlow';
import CountUp, { AnimatedNumberText } from './CountUp';

interface BiometricCalculatorProps {
  onOpenBooking: (type?: string, detail?: string) => void;
}

export const BiometricCalculator: React.FC<BiometricCalculatorProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();

  const [goal, setGoal] = useState<'hypertrophy' | 'recomp' | 'athletic' | 'longevity'>('hypertrophy');
  const [bodyWeight, setBodyWeight] = useState<number>(180);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(4);
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');

  // Dynamic calculations based on user selections
  const calculateMetrics = () => {
    let proteinTarget = Math.round(bodyWeight * 1.1); // ~1.1g per lb
    let muscleTarget = '6.5 - 9.0 lbs';
    let fatLossTarget = '10% - 14%';
    let coachMatch = 'Marcus Vance (Head of Performance)';
    let coachAvatar = 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_3_vssu0u.jpg';
    let programMatch = 'Hypertrophy & Architectural Strength';
    let recoveryProtocol = 'Normatec 3 Compression + Red Light Therapy';

    if (goal === 'hypertrophy') {
      proteinTarget = Math.round(bodyWeight * 1.15);
      muscleTarget = experienceLevel === 'beginner' ? '8.0 - 12.0 lbs' : '5.5 - 8.5 lbs';
      fatLossTarget = '8% - 12%';
      coachMatch = 'Marcus Vance (Head of Performance)';
      coachAvatar = 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_3_vssu0u.jpg';
      programMatch = 'Hypertrophy & Architectural Strength';
      recoveryProtocol = '45°F Cold Plunge + Infrared Red Light Bed';
    } else if (goal === 'recomp') {
      proteinTarget = Math.round(bodyWeight * 1.2);
      muscleTarget = '4.0 - 6.5 lbs';
      fatLossTarget = '12% - 16%';
      coachMatch = 'Amara Chen (Olympic Strength Coach)';
      coachAvatar = 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_5_nfyewv.jpg';
      programMatch = 'Precision Body Transformation';
      recoveryProtocol = 'Eucalyptus Steam Vault + Hyperbaric Oxygen Pod';
    } else if (goal === 'athletic') {
      proteinTarget = Math.round(bodyWeight * 1.05);
      muscleTarget = '3.5 - 5.5 lbs';
      fatLossTarget = '6% - 10%';
      coachMatch = 'Amara Chen (Combat & Explosive Power)';
      coachAvatar = 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_5_nfyewv.jpg';
      programMatch = 'Functional Athletic Performance';
      recoveryProtocol = 'Zero-Gravity Loungers + Contrast Hydrotherapy';
    } else if (goal === 'longevity') {
      proteinTarget = Math.round(bodyWeight * 0.95);
      muscleTarget = '2.5 - 4.5 lbs';
      fatLossTarget = '5% - 8%';
      coachMatch = 'Elena Rostova (Master Pilates & Movement)';
      coachAvatar = 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/images_2_hsw5nn.jpg';
      programMatch = 'Longevity Yoga & Mobility';
      recoveryProtocol = 'Infrared Sauna + Assisted Fascial Release';
    }

    return {
      proteinTarget,
      muscleTarget,
      fatLossTarget,
      coachMatch,
      coachAvatar,
      programMatch,
      recoveryProtocol,
    };
  };

  const results = calculateMetrics();

  return (
    <section
      id="calculator"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      {/* Dynamic Interactive Ghost Cursor Background behind Calculate Protocol */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%)',
        }}
      >
        <GhostCursor
          color={activePalette.accentGold || '#C5A059'}
          brightness={2.2}
          grainIntensity={0.03}
          bloomStrength={0.45}
          bloomRadius={1.2}
          trailLength={75}
          mixBlendMode="normal"
          zIndex={0}
        />
      </div>

      {/* Gradual Blur Top Edge Transition */}
      <GradualBlur position="top" height="5rem" strength={1.8} zIndex={5} />

      {/* Gradual Blur Bottom Edge Transition */}
      <GradualBlur position="bottom" height="5rem" strength={1.8} zIndex={5} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-4 border shadow-md backdrop-blur-md"
            style={{
              backgroundColor: `${activePalette.bgPanel}d0`,
              borderColor: `${activePalette.accentGold}60`,
            }}
          >
            <Activity size={14} style={{ color: activePalette.accentGold }} />
            <span
              className="text-[11px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: activePalette.accentGold }}
            >
              Interactive Biometric Engine
            </span>
          </div>

          <TextRevealHeading
            text="Calculate Your Bespoke Athletic Protocol"
            revealText="Precision Baseline Metrics"
            textClassName="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-center drop-shadow-lg"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4 leading-relaxed"
            style={{ color: activePalette.textSecondary }}
          >
            Tailor your 12-week body metamorphosis targets, nutrition macros, dedicated coach match, and biohacking recovery suite in real-time.
          </p>
        </div>

        {/* Main Calculator Interactive Card */}
        <BorderGlow
          backgroundColor={`${activePalette.bgCard}cc`}
          borderRadius={24}
          glowColor="40 80 80"
          glowIntensity={1.0}
          fillOpacity={0.4}
        >
          <div
            className="rounded-3xl border p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-lg)] transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 backdrop-blur-xl"
            style={{
              backgroundColor: `${activePalette.bgCard}d9`,
              borderColor: `${activePalette.borderMain}aa`,
            }}
          >
            {/* Left Inputs Column (Cols 1-6) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Goal Selection */}
              <div>
                <label
                  className="text-xs uppercase tracking-widest font-semibold block mb-3"
                  style={{ color: activePalette.textPrimary }}
                >
                  1. Select Primary Athletic Objective:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'hypertrophy', label: 'Hypertrophy & Muscle', icon: Dumbbell },
                    { id: 'recomp', label: 'Fat Oxidation & Recomp', icon: Flame },
                    { id: 'athletic', label: 'Athletic Power & Speed', icon: Trophy },
                    { id: 'longevity', label: 'Longevity & Mobility', icon: Sparkles },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = goal === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGoal(item.id as any)}
                        className="p-4 rounded-xl border flex flex-col items-center text-center space-y-2 transition-all duration-300 font-button"
                        style={{
                          backgroundColor: isSelected ? `${activePalette.accentGold}20` : activePalette.bgMain,
                          borderColor: isSelected ? activePalette.accentGold : activePalette.borderMain,
                          color: isSelected ? activePalette.accentGold : activePalette.textSecondary,
                        }}
                      >
                        <Icon size={20} style={{ color: isSelected ? activePalette.accentGold : activePalette.textSecondary }} />
                        <span className="text-xs font-semibold">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Body Weight Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: activePalette.textPrimary }}
                  >
                    2. Current Body Weight:
                  </label>
                  <span
                    className="font-serif text-lg font-bold"
                    style={{ color: activePalette.accentGold }}
                  >
                    <CountUp to={bodyWeight} duration={0.5} /> lbs
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={300}
                  step={5}
                  value={bodyWeight}
                  onChange={(e) => setBodyWeight(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px]" style={{ color: activePalette.textSecondary }}>
                  <span>100 lbs</span>
                  <span>200 lbs</span>
                  <span>300 lbs</span>
                </div>
              </div>

              {/* Days per Week Selection */}
              <div className="space-y-3">
                <label
                  className="text-xs uppercase tracking-widest font-semibold block"
                  style={{ color: activePalette.textPrimary }}
                >
                  3. Training Days Per Week:
                </label>
                <div className="flex space-x-3">
                  {[3, 4, 5, 6].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setDaysPerWeek(days)}
                      className="flex-1 py-3 rounded-xl border text-xs font-bold transition-all duration-300 font-button"
                      style={{
                        backgroundColor: daysPerWeek === days ? activePalette.accentGold : activePalette.bgMain,
                        color: daysPerWeek === days ? activePalette.bgMain : activePalette.textPrimary,
                        borderColor: daysPerWeek === days ? activePalette.accentGold : activePalette.borderMain,
                      }}
                    >
                      {days} Days / Wk
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-3">
                <label
                  className="text-xs uppercase tracking-widest font-semibold block"
                  style={{ color: activePalette.textPrimary }}
                >
                  4. Experience Level:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'beginner', label: 'Foundational' },
                    { id: 'intermediate', label: 'Intermediate' },
                    { id: 'advanced', label: 'Advanced Athlete' },
                  ].map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setExperienceLevel(exp.id as any)}
                      className="py-2.5 px-3 rounded-xl border text-[11px] font-medium transition-all duration-300"
                      style={{
                        backgroundColor: experienceLevel === exp.id ? `${activePalette.accentGold}25` : activePalette.bgMain,
                        borderColor: experienceLevel === exp.id ? activePalette.accentGold : activePalette.borderMain,
                        color: experienceLevel === exp.id ? activePalette.accentGold : activePalette.textSecondary,
                      }}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Calculated Blueprint Output (Cols 7-12) */}
            <div
              className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-6 shadow-inner"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
              }}
            >
              <div>
                <div className="flex items-center justify-between border-b pb-4 mb-6" style={{ borderColor: activePalette.borderMain }}>
                  <span className="text-xs uppercase tracking-widest font-bold" style={{ color: activePalette.accentGold }}>
                    Bespoke Protocol Output
                  </span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold uppercase tracking-wider border border-emerald-500/30">
                    Calculated Live
                  </span>
                </div>

                {/* Grid of Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl border" style={{ backgroundColor: activePalette.bgPanel, borderColor: activePalette.borderMain }}>
                    <span className="text-[10px] uppercase tracking-wider block mb-1 font-semibold" style={{ color: activePalette.textSecondary }}>
                      Target Protein / Day
                    </span>
                    <span className="font-serif text-2xl font-bold" style={{ color: activePalette.accentGold }}>
                      <CountUp to={results.proteinTarget} key={results.proteinTarget} />g
                    </span>
                    <span className="text-[10px] block mt-0.5 opacity-60" style={{ color: activePalette.textSecondary }}>
                      High-Bioavailability Grass-Fed Whey
                    </span>
                  </div>

                  <div className="p-4 rounded-xl border" style={{ backgroundColor: activePalette.bgPanel, borderColor: activePalette.borderMain }}>
                    <span className="text-[10px] uppercase tracking-wider block mb-1 font-semibold" style={{ color: activePalette.textSecondary }}>
                      Est. 12-Wk Lean Muscle
                    </span>
                    <span className="font-serif text-2xl font-bold" style={{ color: activePalette.textPrimary }}>
                      <AnimatedNumberText text={results.muscleTarget} key={results.muscleTarget} />
                    </span>
                    <span className="text-[10px] block mt-0.5 opacity-60" style={{ color: activePalette.textSecondary }}>
                      InBody 770 Scans Included
                    </span>
                  </div>
                </div>

                {/* Protocol Highlights List */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: activePalette.accentGold }} />
                    <div>
                      <span className="text-xs font-semibold block" style={{ color: activePalette.textPrimary }}>
                        Recommended Master Program:
                      </span>
                      <span className="text-xs font-light" style={{ color: activePalette.accentGold }}>
                        {results.programMatch}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-xl border" style={{ backgroundColor: activePalette.bgPanel, borderColor: activePalette.borderMain }}>
                    <img
                      src={results.coachAvatar}
                      alt={results.coachMatch}
                      className="w-10 h-10 rounded-full object-cover border shrink-0"
                      style={{ borderColor: activePalette.accentGold }}
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: activePalette.accentGold }}>
                        Matched Master Coach
                      </span>
                      <span className="text-xs font-semibold" style={{ color: activePalette.textPrimary }}>
                        {results.coachMatch}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: activePalette.accentGold }} />
                    <div>
                      <span className="text-xs font-semibold block" style={{ color: activePalette.textPrimary }}>
                        Custom Recovery Blueprint:
                      </span>
                      <span className="text-xs font-light" style={{ color: activePalette.textSecondary }}>
                        {results.recoveryProtocol}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-4 border-t" style={{ borderColor: activePalette.borderMain }}>
                <button
                  onClick={() => onOpenBooking('Biometric Custom Protocol', `${results.programMatch} (${bodyWeight} lbs)`)}
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-button shadow-[var(--shadow-lg)] flex items-center justify-center space-x-2"
                >
                  <span>Claim This Biometric Protocol Pass</span>
                  <ArrowRight size={15} />
                </button>
                <p className="text-[10px] text-center mt-2.5 font-light" style={{ color: activePalette.textSecondary }}>
                  Includes complimentary InBody 770 scan & private coach consultation upon arrival.
                </p>
              </div>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
};
