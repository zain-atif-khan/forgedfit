import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { TRAINING_PROGRAMS } from '../data/clubData';
import { TrainingProgram } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Clock, Gauge, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface TrainingProgramsProps {
  onOpenBooking: (type?: string, programName?: string) => void;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProgram = TRAINING_PROGRAMS[selectedIndex];

  return (
    <section
      id="programs"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgCard,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 max-w-2xl">
          <div
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-6 border shadow-sm backdrop-blur-md w-fit"
            style={{
              borderColor: `${activePalette.accentGold}40`,
              backgroundColor: `${activePalette.bgMain}80`,
            }}
          >
            <Sparkles size={13} style={{ color: activePalette.accentGold }} />
            <span
              className="text-[11px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: activePalette.accentGold }}
            >
              Bespoke Interactive Protocols
            </span>
          </div>

          <TextRevealHeading
            text="Engineered for Peak Potential"
            revealText="Interactive Kinetic Protocols"
            textClassName="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-left"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sidebar with Minimal Info */}
          <div className="lg:w-1/3 flex flex-col space-y-6 border-l" style={{ borderColor: activePalette.borderMain }}>
            {TRAINING_PROGRAMS.map((program, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <div 
                  key={program.id}
                  className="pl-6 relative cursor-pointer group"
                  onClick={() => setSelectedIndex(idx)}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300"
                      style={{ backgroundColor: activePalette.accentGold, transform: 'translateX(-1px)' }}
                    />
                  )}
                  
                  <div className="space-y-3">
                    <h3 
                      className="font-serif text-2xl transition-colors duration-300"
                      style={{ color: isActive ? activePalette.textPrimary : activePalette.textSecondary }}
                    >
                      {program.title}
                    </h3>
                    
                    {/* Minimal Info */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm font-light mb-4" style={{ color: activePalette.textSecondary }}>
                        {program.summary}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-medium mb-6">
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} style={{ color: activePalette.accentGold }} />
                          <span style={{ color: activePalette.textPrimary }}>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Gauge size={14} style={{ color: activePalette.accentGold }} />
                          <span style={{ color: activePalette.textPrimary }}>{program.intensity}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking('Program Inquiry', program.title);
                        }}
                        className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                        style={{ color: activePalette.accentGold }}
                      >
                        <span>Consult Coach</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase */}
          <div className="lg:w-2/3">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              {TRAINING_PROGRAMS.map((program, idx) => (
                <img
                  key={program.id}
                  src={program.image}
                  alt={program.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    idx === selectedIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div 
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(to top, ${activePalette.bgCard} 0%, transparent 60%)`,
                  opacity: 0.8
                }}
              />
              
              {/* Feature Highlights on Image */}
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProgram.keyFocus.slice(0, 4).map((focus, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 backdrop-blur-md p-3 rounded-xl border animate-in fade-in slide-in-from-bottom-4"
                      style={{ 
                        backgroundColor: `${activePalette.bgMain}90`,
                        borderColor: `${activePalette.borderMain}40`,
                        animationDelay: `${idx * 100}ms`
                      }}
                    >
                      <CheckCircle2 size={16} className="shrink-0" style={{ color: activePalette.accentGold }} />
                      <span className="text-xs font-medium" style={{ color: activePalette.textPrimary }}>{focus}</span>
                    </div>
                  ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
