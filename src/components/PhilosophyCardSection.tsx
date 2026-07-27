import React from 'react';
import TextRevealCard from './lightswind-pro/text-reveal-card';
import { useTheme } from '../context/ThemeContext';

export const PhilosophyCardSection: React.FC = () => {
  const { activePalette } = useTheme();

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden" style={{ backgroundColor: activePalette.bgMain }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <TextRevealCard
          text="Forge your legacy."
          revealText="Master your kinetics."
        />
      </div>
    </section>
  );
};
