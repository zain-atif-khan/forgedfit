import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ScrollTimeline } from './lightswind/scroll-timeline';

const legacyEvents = [
  {
    year: "2015",
    title: "The Genesis",
    subtitle: "Forge Fit Foundation",
    description: "Established the first biomechanical performance center integrating medical-grade diagnostics with elite strength conditioning."
  },
  {
    year: "2018",
    title: "Sanctuary Expansion",
    subtitle: "Architectural Evolution",
    description: "Unveiled our signature subterranean recovery vaults, pioneering contrast hydrotherapy and hyperbaric oxygen protocols for executive members."
  },
  {
    year: "2021",
    title: "Global Recognition",
    subtitle: "Industry Excellence",
    description: "Awarded the international Pinnacle Design Award for our seamless integration of restorative architecture and longevity sciences."
  },
  {
    year: "2024",
    title: "The Future of Longevity",
    subtitle: "Next-Gen Biohacking",
    description: "Launched our proprietary AI-driven biometric analysis engine, offering real-time predictive health interventions for our elite roster."
  }
];

export const LegacySection: React.FC = () => {
  const { activePalette } = useTheme();

  return (
    <section
      id="legacy"
      className="relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      <ScrollTimeline
        events={legacyEvents}
        title="Our Legacy"
        subtitle="A Decade of Peak Performance Evolution"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
      />
    </section>
  );
};
