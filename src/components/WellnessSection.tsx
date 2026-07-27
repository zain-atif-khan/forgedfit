import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import { WELLNESS_SERVICES } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import { Clock, ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';

interface WellnessSectionProps {
  onOpenBooking: (type?: string, serviceName?: string) => void;
}

export const WellnessSection: React.FC<WellnessSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();

  return (
    <section
      id="wellness"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: activePalette.bgCard,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: activePalette.accentGold }}
          >
            Holistic Sanctuary
          </span>
          <TextRevealHeading
            text="Biohacking, Contrast Hydrotherapy & Cellular Restoration"
            revealText="Accelerate Human Potential"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4"
            style={{ color: activePalette.textSecondary }}
          >
            Accelerate physical repair, regulate nervous system stress, and enhance mental focus through cutting-edge recovery science.
          </p>
        </div>

        {/* Wellness Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WELLNESS_SERVICES.map((service) => (
            <BorderGlow
              key={service.id}
              backgroundColor={activePalette.bgMain}
              borderRadius={24}
              glowColor="40 80 80"
              glowIntensity={0.8}
              fillOpacity={0.6}
              className="group h-full flex flex-col"
            >
              <div
                className="rounded-3xl border transition-all duration-500 overflow-hidden shadow-[var(--shadow-lg)] flex flex-col sm:flex-row h-full"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                }}
              >
                <div className="sm:w-1/2 relative h-64 sm:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover image-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background: `linear-gradient(to top, ${activePalette.bgMain} 0%, transparent 100%)`
                    }}
                  />

                  <div
                    className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border"
                    style={{
                      backgroundColor: `${activePalette.bgMain}CC`,
                      borderColor: activePalette.accentGold,
                      color: activePalette.accentGold,
                    }}
                  >
                    {service.category}
                  </div>
                </div>

                <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div
                      className="flex items-center space-x-1.5 text-xs font-semibold mb-1"
                      style={{ color: activePalette.accentGold }}
                    >
                      <Clock size={12} />
                      <span>{service.duration} Session</span>
                    </div>
                    <h3
                      className="font-serif text-2xl font-normal transition-colors mb-2"
                      style={{ color: activePalette.textPrimary }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs font-light leading-relaxed"
                      style={{ color: activePalette.textSecondary }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits list */}
                  <div
                    className="space-y-1.5 pt-3 border-t"
                    style={{ borderColor: activePalette.borderMain }}
                  >
                    <span
                      className="text-[10px] uppercase tracking-widest font-semibold block mb-1"
                      style={{ color: activePalette.accentGold }}
                    >
                      Cellular Benefits:
                    </span>
                    {service.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-[11px]"
                        style={{ color: activePalette.textSecondary }}
                      >
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: activePalette.accentGold }}
                        />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenBooking('Wellness Therapy', service.title)}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold font-button transition-colors hover:opacity-80"
                      style={{ color: activePalette.accentGold }}
                    >
                      <span>Reserve Session</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};
