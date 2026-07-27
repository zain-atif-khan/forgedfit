import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import CircularGallery from './CircularGallery';
import AnimatedList from './AnimatedList';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, ShieldCheck, Activity, HeartPulse, ChevronRight } from 'lucide-react';
import BorderGlow from './BorderGlow';

interface PersonalizedCareSectionProps {
  onOpenBooking: (type?: string, detail?: string) => void;
}

export const PersonalizedCareSection: React.FC<PersonalizedCareSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();
  const [selectedCareStepIndex, setSelectedCareStepIndex] = useState<number>(0);

  const galleryItems = [
    { image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif', text: 'Subterranean Valet' },
    { image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg', text: 'Acoustic Welcome' },
    { image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg', text: 'InBody Biometric' },
    { image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg', text: 'Kinetic Arena' },
    { image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif', text: 'Cryo & Hydro' },
    { image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg', text: 'Elixir Restoration' }
  ];

  const careSteps = [
    {
      title: '1. Subterranean Valet Arrival & EV Charging',
      subtitle: 'Camera-free private subterranean gate with white-glove valet and automated pre-check',
      category: 'Arrival Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
      detail: 'Our discreet valet team greets you at the private subterranean entrance, pre-activating your locker suite and placing your EV on fast-charge while you transition into sanctuary mode.',
      perks: ['Discreet Camera-Free Gate', 'Gated EV Fast Charging', 'Locker Suite Pre-Activation']
    },
    {
      title: '2. Acoustic Parlor Welcome & Fresh Infusions',
      subtitle: 'Ceremonial single-origin elixir, heated Egyptian towels, and concierge itinerary sync',
      category: 'Greeting Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
      detail: 'Sip a warm single-origin herbal infusion while our Executive Concierge confirms your custom schedule and presents heated organic linen.',
      perks: ['Ceremonial Herbal Infusion', 'Heated Egyptian Linen', 'Master Schedule Sync']
    },
    {
      title: '3. InBody 770 Composition & HRV Calibration',
      subtitle: '60-second medical scan assessing visceral fat, cellular hydration, and readiness score',
      category: 'Biometric Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
      detail: 'Step onto the InBody 770 for real-time cellular hydration and muscle balance telemetry, enabling live protocol adjustments before your workout.',
      perks: ['InBody 770 Telemetry', 'HRV Stress Analysis', 'Cellular Hydration Index']
    },
    {
      title: '4. Master Coach Kinetic Protocol Session',
      subtitle: 'Technogym Artis bio-telemetry adjusting training loads live based on kinetic feedback',
      category: 'Performance Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
      detail: 'Execute a bespoke 1-on-1 strength & conditioning program monitored in real-time by your Master Coach using Technogym Artis telemetry.',
      perks: ['Technogym Artis Sync', '1-on-1 Master Coach', 'Live Load Adjustments']
    },
    {
      title: '5. Contrast Hydrotherapy & Cryo Vault Reset',
      subtitle: '45°F triple-filtered cold plunge paired with 115°F eucalyptus steam and cedar sauna',
      category: 'Recovery Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
      detail: 'Immerse in our 45°F triple-filtered cold plunge followed by aromatic eucalyptus steam to flush metabolic waste and activate parasympathetic recovery.',
      perks: ['45°F Cold Plunge', '115°F Eucalyptus Steam', 'Autonomic Nervous System Reset']
    },
    {
      title: '6. Eucalyptus Steam & Cedar Oxygen Pods',
      subtitle: 'Full-spectrum photobiomodulation red light beds and hyperbaric oxygen cellular repair',
      category: 'Restoration Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg',
      detail: 'Relax in hyperbaric oxygen chambers or photobiomodulation red-light beds for mitochondrial restoration and accelerated muscle repair.',
      perks: ['Hyperbaric Oxygen Pods', 'Red-Light Photobiomodulation', 'Mitochondrial Repair']
    },
    {
      title: '7. Elixir Bar Customized Micro-Nutrients',
      subtitle: 'Grass-fed collagen blends and electrolyte bio-infusions delivered as vehicle approaches',
      category: 'Departure Phase',
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
      detail: 'Conclude your session with a bespoke bio-active electrolyte smoothie calibrated to your biometric profile while your valet retrieves your vehicle.',
      perks: ['Bespoke Bio-Active Smoothie', 'Electrolyte Re-Hydration', 'Seamless Valet Vehicle Sync']
    }
  ];

  const currentStep = careSteps[selectedCareStepIndex] || careSteps[0];

  return (
    <section
      id="personalized-care"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold px-4 py-1.5 rounded-full border inline-flex items-center space-x-2"
            style={{
              borderColor: activePalette.borderMain,
              color: activePalette.accentGold,
              backgroundColor: activePalette.bgCard,
            }}
          >
            <Sparkles size={14} />
            <span>Personalized Care Protocol</span>
          </span>

          <TextRevealHeading
            text="A Seamless Ritual of Physical & Mental Restoration"
            revealText="Orchestrated By Biometrics"
          />

          <p
            className="text-xs sm:text-base font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: activePalette.textSecondary }}
          >
            From subterranean arrival to post-workout cellular recovery, experience a flawlessly orchestrated sanctuary journey tailored to your biometrics.
          </p>
        </div>

        {/* 3D Circular Gallery Showcase */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium" style={{ color: activePalette.accentGold }}>
              Interactive 3D Sanctuary Gallery • Drag or Scroll horizontally
            </span>
          </div>
          <CircularGallery
            items={galleryItems}
            bend={2.5}
            textColor={activePalette.accentGold}
            borderRadius={0.06}
            scrollSpeed={2}
          />
        </div>

        {/* Interactive Personalized Care Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          {/* Left Column: Interactive Animated List */}
          <div className="lg:col-span-6">
            <BorderGlow
              backgroundColor={activePalette.bgCard}
              borderRadius={24}
              glowColor="40 80 80"
              glowIntensity={0.6}
              fillOpacity={0.8}
              className="p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: activePalette.accentGold }}>
                  Select Protocol Step
                </span>
                <span className="text-[10px] tracking-wider uppercase font-medium" style={{ color: activePalette.textSecondary }}>
                  Use Arrows or Click
                </span>
              </div>

              <AnimatedList
                items={careSteps}
                initialSelectedIndex={selectedCareStepIndex}
                onItemSelect={(_, index) => setSelectedCareStepIndex(index)}
                displayScrollbar={false}
              />
            </BorderGlow>
          </div>

          {/* Right Column: Active Care Step Detail Display */}
          <div className="lg:col-span-6">
            <BorderGlow
              backgroundColor={activePalette.bgCard}
              borderRadius={24}
              glowColor="40 80 80"
              glowIntensity={0.8}
              fillOpacity={0.9}
              className="p-6 sm:p-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: activePalette.borderMain }}>
                  <div className="flex items-center space-x-2">
                    <HeartPulse size={18} style={{ color: activePalette.accentGold }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: activePalette.accentGold }}>
                      {currentStep.category}
                    </span>
                  </div>
                  <span className="text-[10px] px-3 py-1 rounded-full font-semibold border uppercase tracking-wider" style={{ borderColor: activePalette.accentGold, color: activePalette.accentGold }}>
                    Step {selectedCareStepIndex + 1} of {careSteps.length}
                  </span>
                </div>

                {/* Architectural Preview Image Banner */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border shadow-[var(--shadow-sm)] group">
                  <img
                    src={currentStep.image}
                    alt={currentStep.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${activePalette.bgCard} 0%, transparent 80%)`
                    }}
                  />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border backdrop-blur-md" style={{ backgroundColor: `${activePalette.bgMain}90`, borderColor: activePalette.accentGold, color: activePalette.textPrimary }}>
                      {currentStep.subtitle.split('&')[0]}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug" style={{ color: activePalette.textPrimary }}>
                  {currentStep.title}
                </h3>

                <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: activePalette.textSecondary }}>
                  {currentStep.detail}
                </p>

                {/* Highlights / Perks */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold block" style={{ color: activePalette.accentGold }}>
                    Sanctuary Privileges:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentStep.perks.map((perk, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-2.5 rounded-xl border text-xs font-light"
                        style={{
                          backgroundColor: activePalette.bgMain,
                          borderColor: activePalette.borderMain,
                          color: activePalette.textPrimary,
                        }}
                      >
                        <ShieldCheck size={14} className="shrink-0" style={{ color: activePalette.accentGold }} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Action */}
              <div className="pt-8 mt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: activePalette.borderMain }}>
                <div>
                  <span className="text-[10px] uppercase tracking-widest block font-medium" style={{ color: activePalette.textSecondary }}>
                    Ready to Experience
                  </span>
                  <span className="text-sm font-medium" style={{ color: activePalette.textPrimary }}>
                    Forge Fit Sanctuary Pass
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking('Personalized Care Ritual', currentStep.title)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-button text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-[var(--shadow-sm)] hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                >
                  <span>Reserve Personalized Ritual</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
