import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import { COACHES } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import ThreeDCardsCarousel from './lightswind-pro/3d-cards-carousel';

interface CoachesSectionProps {
  onOpenBooking: (type?: string, coachName?: string) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();

  const coachCards = COACHES.map((coach) => ({
    id: coach.id,
    image: coach.image,
    title: coach.name,
    subtitle: coach.role,
    content: (
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-white/70 text-sm">
          {coach.specialization} • {coach.experience}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenBooking('Private Training', coach.name);
          }}
          className="inline-flex items-center space-x-2 w-fit mt-2 text-[10px] font-bold uppercase tracking-widest hover:text-amber-300 transition-colors"
          style={{ color: activePalette.accentGold }}
        >
          <span>Book Session</span>
          <ArrowRight size={14} />
        </button>
      </div>
    )
  }));

  return (
    <section
      id="coaches"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-6 border shadow-sm backdrop-blur-md"
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
              Master Coaches
            </span>
          </div>

          <TextRevealHeading
            text="Faculty of Excellence"
            revealText="Masters of Kinetics"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4 mx-auto"
            style={{ color: activePalette.textSecondary }}
          >
            Train under the guidance of elite exercise physiologists, biometric specialists, and kinetic masters.
          </p>
        </div>

        <ThreeDCardsCarousel cards={coachCards} />
      </div>
    </section>
  );
};
