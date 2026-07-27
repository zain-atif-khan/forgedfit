import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React from 'react';
import Stepper, { Step } from './Stepper';
import { useTheme } from '../context/ThemeContext';
import { Car, Key, Fingerprint, Dumbbell, Flame, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import ScrollFloat from './ScrollFloat';

interface SanctuaryTrailSectionProps {
  onOpenBooking: (type?: string, detail?: string) => void;
}

export const SanctuaryTrailSection: React.FC<SanctuaryTrailSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();

  const stepsData = [
    {
      title: '1. Private Valet & Discreet Arrival',
      subtitle: 'Subterranean Protected Entrance',
      icon: Car,
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg',
      description: 'Your sanctuary experience begins the moment you approach our private gated underground driveway. Complimentary white-glove valet service secures your vehicle while your personal biometric credential pre-activates your suite.',
      perks: ['Gated EV Fast-Charging Bay', 'Discreet Camera-Free Corridor', 'Automated Plate Recognition', 'Temperature-Controlled Holding']
    },
    {
      title: '2. Luxury Reception & Concierge Welcome',
      subtitle: 'Personalized Hospitality Greeting',
      icon: Key,
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',
      description: 'Step into the acoustic reception parlor. Our Executive Concierge greets you by name with your preferred pre-workout infusion, fresh organic linen, and custom athletic schedule prepared by your Master Coach.',
      perks: ['Single-Origin Ceremonial Elixir', 'Heated Egyptian Linen Towels', 'Private Soundproof Huddle Bays', 'Master Schedule Sync']
    },
    {
      title: '3. Biometric Scan & Private Suite',
      subtitle: 'InBody 770 & Italian Marble Vanity',
      icon: Fingerprint,
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
      description: 'Access your assigned biometric locker suite featuring heated Italian marble floors, Dyson vanity systems, and Grown Alchemist organic skin regimens. Complete a quick 60-second InBody scan before hitting the arena.',
      perks: ['InBody 770 Composition Scan', 'Dyson Supersonic & Airwrap Bay', 'Grown Alchemist Skin Bio-Care', 'Fresh Laundry Service']
    },
    {
      title: '4. Master Athletic Protocol & Arena',
      subtitle: 'Biomechanical Precision Training',
      icon: Dumbbell,
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
      description: 'Enter the Technogym Pure Strength arena. Guided 1-on-1 by your Master Trainer, follow a customized program adjusted live based on your HRV readiness score and kinetic telemetry.',
      perks: ['Technogym Artis Telemetry', 'HRV-Driven Load Calibration', '1-on-1 Master Coach Supervision', 'Oxygen-Enriched Microclimate']
    },
    {
      title: '5. Biohacking & Hydrotherapy Vault',
      subtitle: 'Contrast Plunge & Infrared Sauna',
      icon: Flame,
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
      description: 'Flush lactic acid and reset your nervous system in our 45°F triple-filtered cold plunge, followed by 115°F eucalyptus steam vaults, photobiomodulation red light beds, and hyperbaric oxygen pods.',
      perks: ['45°F Cryo Cold Plunge', 'Eucalyptus Steam & Cedar Sauna', 'Full-Spectrum Infrared Bed', 'Normatec 3 Compression']
    },
    {
      title: '6. Forge Fit Elixir Lounge & Departure',
      subtitle: 'Nutritional Micro-Restoration',
      icon: Coffee,
      image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
      description: 'Conclude your sanctuary ritual at the Elixir Bar. Sip a custom grass-fed collagen smoothie or electrolyte infusion crafted specifically for your biometric recovery profile while your vehicle is brought around.',
      perks: ['Custom Grass-Fed Protein Blend', 'Electrolyte Bio-Infusions', 'Valet Vehicle Retrieval Sync', 'Take-Home Macro Snack Pack']
    }
  ];

  return (
    <section id="trail" className="py-24 relative overflow-hidden transition-colors duration-500">
      {/* Background Glow */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: activePalette.accentGold }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
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
            <span>The Sanctuary Arrival Trail</span>
          </span>

          <TextRevealHeading
            text="An Unrivaled Member Journey"
            revealText="A Curated Executive Trail"
          />

          <p
            className="text-xs sm:text-sm font-light leading-relaxed"
            style={{ color: activePalette.textSecondary }}
          >
            From subterranean valet arrival to post-workout bio-restoration, experience how every touchpoint is curated for seamless luxury and peak human longevity.
          </p>
        </div>

        {/* Stepper Container */}
        <div className="max-w-5xl mx-auto">
          <BorderGlow
            backgroundColor={activePalette.bgCard}
            borderRadius={24}
            glowColor="40 80 80"
            glowIntensity={0.8}
            fillOpacity={0.7}
          >
            <Stepper
              initialStep={1}
              accentColor={activePalette.accentGold}
              borderColor={activePalette.borderMain}
              bgColor={activePalette.bgCard}
              textColor={activePalette.textPrimary}
              backButtonText="Previous Step"
              nextButtonText="Next Protocol Step"
              onFinalStepCompleted={() => onOpenBooking('Sanctuary Experience Pass', 'Full Trail Tour')}
            >
              {stepsData.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <Step key={idx}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
                      {/* Step Image */}
                      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border shadow-[var(--shadow-md)] group">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80"
                          style={{
                            backgroundImage: `linear-gradient(to top, ${activePalette.bgMain} 0%, transparent 80%)`,
                          }}
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                          <div
                            className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
                            style={{
                              borderColor: activePalette.accentGold,
                              backgroundColor: activePalette.bgMain,
                              color: activePalette.accentGold,
                            }}
                          >
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold block" style={{ color: activePalette.accentGold }}>
                              Protocol Stage {idx + 1}
                            </span>
                            <span className="font-serif text-sm font-medium text-[var(--text-ivory)]">
                              {step.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Step Description & Details */}
                      <div className="lg:col-span-7 space-y-5">
                        <div className="space-y-1">
                          <span
                            className="text-xs uppercase tracking-[0.2em] font-semibold"
                            style={{ color: activePalette.accentGold }}
                          >
                            Step {idx + 1} of 6
                          </span>
                          <h3
                            className="font-serif text-2xl sm:text-3xl font-normal leading-snug"
                            style={{ color: activePalette.textPrimary }}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p
                          className="text-xs sm:text-sm font-light leading-relaxed"
                          style={{ color: activePalette.textSecondary }}
                        >
                          {step.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {step.perks.map((perk, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-center space-x-2.5 p-2.5 rounded-xl border text-xs font-light"
                              style={{
                                backgroundColor: activePalette.bgMain,
                                borderColor: activePalette.borderMain,
                                color: activePalette.textPrimary,
                              }}
                            >
                              <CheckCircle2 size={14} className="shrink-0" style={{ color: activePalette.accentGold }} />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Step>
                );
              })}
            </Stepper>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};
