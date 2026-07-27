import BorderGlow from "./BorderGlow";
import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import MorphCarousel from './lightswind-pro/morph-carousel';
import { Sparkles } from 'lucide-react';

const MACHINE_IMAGES = [
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
];

export const MachineShowcaseSection: React.FC = () => {
  const { activePalette } = useTheme();

  return (
    <section
      id="equipment"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
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
              Artisan Equipment
            </span>
          </div>

          <TextRevealHeading
            text="Biomechanical Masterpieces"
            revealText="Precision Engineered Arsenal"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4 mx-auto"
            style={{ color: activePalette.textSecondary }}
          >
            Experience our exclusive arsenal of custom-engineered kinetic machines, designed to optimize every phase of muscular contraction.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <BorderGlow
            backgroundColor={activePalette.bgCard}
            borderRadius={24}
            glowColor="40 80 80"
            glowIntensity={0.6}
            fillOpacity={0.8}
            className="p-4 sm:p-6 shadow-[var(--shadow-lg)]"
          >
            <MorphCarousel images={MACHINE_IMAGES} morphSpeed={1.5} />
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};
