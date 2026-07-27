import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { MemberExperience } from './components/MemberExperience';
import { SanctuaryTrailSection } from './components/SanctuaryTrailSection';
import { PersonalizedCareSection } from './components/PersonalizedCareSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TrainingPrograms } from './components/TrainingPrograms';
import { MachineShowcaseSection } from './components/MachineShowcaseSection';
import { CoachesSection } from './components/CoachesSection';
import { MembershipSection } from './components/MembershipSection';
import { WellnessSection } from './components/WellnessSection';
import { LegacySection } from './components/LegacySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JournalSection } from './components/JournalSection';
import { BiometricCalculator } from './components/BiometricCalculator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import Lanyard from './components/Lanyard';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LoginModal } from './components/LoginModal';
import { MemberDashboardModal } from './components/MemberDashboardModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { ExperienceStudio } from './components/ExperienceStudio';

import { ErrorBoundary } from './components/ErrorBoundary';

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function MainLayout() {
  const { activePalette, activeLighting } = useTheme();

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState('Complimentary Experience');
  const [bookingDetail, setBookingDetail] = useState('');

  const handleOpenBooking = (type = 'Complimentary Experience', detail = '') => {
    setBookingType(type);
    setBookingDetail(detail);
    setBookingModalOpen(true);
  };

  return (
    <React.Fragment>
      <div
        className="min-h-screen flex flex-col font-sans antialiased overflow-x-hidden relative transition-colors duration-700"
        style={{
          backgroundColor: activePalette.bgMain,
          color: activePalette.textPrimary,
          filter: activeLighting.filterOverlay,
        }}
      >
        {/* Dynamic Ambient Background Glows */}
        <div className="fixed inset-0 pointer-events-none opacity-40 z-0 transition-all duration-700">
          <div
            className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: activeLighting.glowTop }}
          />
          <div
            className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: activeLighting.glowBottom }}
          />
        </div>

        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Page Sections */}
        <main className="flex-grow w-full relative z-10">
          {/* 1. Hero Section */}
          <HeroSection onOpenBooking={handleOpenBooking} />

          {/* 2. Welcome & Philosophy */}
          <RevealSection>
            <WelcomeSection />
          </RevealSection>

          {/* 3. Member Experience Journey */}
          <RevealSection>
            <MemberExperience />
          </RevealSection>

          {/* 3b. Stepper Sanctuary Arrival Trail */}
          <RevealSection>
            <SanctuaryTrailSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 3c. Personalized Care & Physical/Mental Restoration Ritual */}
          <RevealSection>
            <PersonalizedCareSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 4. Facilities Gallery */}
          <RevealSection>
            <FacilitiesSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          <RevealSection>
            <MachineShowcaseSection />
          </RevealSection>

          {/* 5. Training Programs */}
          <RevealSection>
            <TrainingPrograms onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 6. Meet the Coaches */}
          <RevealSection>
            <CoachesSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 7. Membership Tiers */}
          <RevealSection>
            <MembershipSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 9. Wellness & Recovery */}
          <RevealSection>
            <WellnessSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 10. Member Testimonials (Flowing Menu) */}
          <RevealSection>
            <LegacySection />
          </RevealSection>

          <RevealSection>
            <TestimonialsSection />
          </RevealSection>

          {/* 11. Fitness Journal Magazine */}
          <RevealSection>
            <JournalSection />
          </RevealSection>

          {/* 11. Interactive Biometric & Protocol Calculator */}
          <RevealSection>
            <BiometricCalculator onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 12. Frequently Asked Questions (FAQ) */}
          <RevealSection>
            <FaqSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 13. Contact & Location */}
          <RevealSection>
            <ContactSection onOpenBooking={handleOpenBooking} />
          </RevealSection>

          {/* 13. Interactive 3D VIP Sanctuary Lanyard Access Pass */}
          <RevealSection>
            <section className="py-16 relative border-t overflow-hidden transition-colors duration-500" style={{ borderColor: activePalette.borderMain, backgroundColor: activePalette.bgMain }}>
              <div className="max-w-7xl mx-auto px-6 text-center mb-6">
                <span className="text-xs uppercase tracking-[0.3em] font-semibold block mb-2" style={{ color: activePalette.accentGold }}>
                  Interactive Access Key
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light" style={{ color: activePalette.textPrimary }}>
                  Your Forge Fit Executive Sanctuary Pass
                </h2>
                <p className="text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto" style={{ color: activePalette.textSecondary }}>
                  Click and drag the physical 3D lanyard pass below to test the kinetic response of your executive credentials.
                </p>
              </div>

              <ErrorBoundary name="3D Executive Pass">
                <Lanyard lanyardWidth={1.2} />
              </ErrorBoundary>
            </section>
          </RevealSection>
        </main>

        {/* Footer */}
        <Footer onOpenBooking={handleOpenBooking} />
      </div>

      {/* Modals & Portals (Moved outside the filter container to preserve fixed positioning relative to viewport) */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingType}
        initialProgramOrCoach={bookingDetail}
      />

      {/* UI Experience Studio Drawer Customizer */}
      <ExperienceStudio />

      {/* Member Authentication Modal */}
      <LoginModal />

      {/* Member Dashboard Modal */}
      <MemberDashboardModal />

      {/* Admin Dashboard Modal */}
      <AdminDashboardModal />
    </React.Fragment>
  );
}

export default function App() {
  return (
    <ErrorBoundary name="Application">
      <AuthProvider>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
