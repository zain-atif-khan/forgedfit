import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { FACILITIES } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import { ChevronRight, Dumbbell, Sparkles } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import ScrollFloat from './ScrollFloat';

interface FacilitiesSectionProps {
  onOpenBooking?: (type?: string, detail?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'athletic', label: 'Athletic Zones' },
    { id: 'wellness', label: 'Spa & Wellness' },
    { id: 'private', label: 'Private Suites' },
    { id: 'culinary', label: 'Culinary' }
  ];

  const filteredFacilities = (
    filter === 'all'
      ? FACILITIES
      : FACILITIES.filter((fac) => fac.category === filter)
  ).slice(0, 6);

  return (
    <section
      id="facilities"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: activePalette.bgMain,
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
            Architectural Sanctuary
          </span>
          <TextRevealHeading
            text="World-Class Athletic & Wellness Facilities"
            revealText="Exclusive Executive Sanctuaries"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4"
            style={{ color: activePalette.textSecondary }}
          >
            10,000 square feet of curated athletic arenas, biometric strength suites, eucalyptus steam vaults, and private restoration lounges.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 font-button border"
                  style={{
                    backgroundColor: isActive ? activePalette.accentGold : activePalette.bgCard,
                    color: isActive ? activePalette.bgMain : activePalette.textSecondary,
                    borderColor: isActive ? activePalette.accentGold : activePalette.borderMain,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ScrollStack Interactive Stacking Facilities */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={50}
          itemScale={0.03}
          itemStackDistance={25}
          stackPosition="18%"
          scaleEndPosition="10%"
          baseScale={0.88}
          blurAmount={0.8}
        >
          {filteredFacilities.map((facility) => (
            <ScrollStackItem key={facility.id} itemClassName="max-w-4xl mx-auto mb-8">
              <div
                onClick={() => onOpenBooking?.('Facility Access', facility.name)}
                className="group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-[var(--shadow-lg)] grid grid-cols-1 md:grid-cols-12 gap-0"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.borderMain,
                }}
              >
                {/* Left Image Side (Cols 1-7) */}
                <div className="md:col-span-7 relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0 opacity-70 group-hover:opacity-40 transition-opacity"
                    style={{
                      background: `linear-gradient(to right, transparent 0%, ${activePalette.bgCard} 100%)`
                    }}
                  />

                  {/* Top Badge */}
                  <div
                    className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest border backdrop-blur-md"
                    style={{
                      backgroundColor: `${activePalette.bgMain}EE`,
                      borderColor: activePalette.accentGold,
                      color: activePalette.accentGold,
                    }}
                  >
                    {facility.sqft}
                  </div>
                </div>

                {/* Right Details Side (Cols 8-12) */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold block mb-1" style={{ color: activePalette.accentGold }}>
                      {facility.category} Zone
                    </span>
                    <h3
                      className="font-serif text-2xl sm:text-3xl transition-colors mb-3"
                      style={{ color: activePalette.textPrimary }}
                    >
                      {facility.name}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-light leading-relaxed mb-4"
                      style={{ color: activePalette.textSecondary }}
                    >
                      {facility.description}
                    </p>

                    {/* Feature Tags */}
                    <div
                      className="flex flex-wrap gap-2 pt-4 border-t"
                      style={{ borderColor: activePalette.borderMain }}
                    >
                      {facility.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-3 py-1 rounded-lg font-medium border"
                          style={{
                            backgroundColor: activePalette.bgPanel,
                            borderColor: activePalette.borderMain,
                            color: activePalette.textSecondary,
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold uppercase tracking-widest font-button" style={{ color: activePalette.accentGold }}>
                      Request Facility Access
                    </span>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all border group-hover:scale-110"
                      style={{
                        backgroundColor: activePalette.accentGold,
                        color: activePalette.bgMain,
                        borderColor: activePalette.accentGold,
                      }}
                    >
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};
