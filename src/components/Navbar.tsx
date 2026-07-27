import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import DynamicNavigation from './lightswind-pro/dynamic-navigation';
import {
  Menu,
  X,
  ChevronRight,
  User,
  Sparkles,
  LayoutDashboard,
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { activePalette, setPalette, setIsStudioOpen } = useTheme();
  const { isLoggedIn, user, isAdmin, openLoginModal, openDashboard, openAdminDashboard } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isChampagne = activePalette.id === 'warm-beige';

  const toggleTheme = () => {
    if (isChampagne) {
      setPalette('obsidian-gold');
    } else {
      setPalette('warm-beige');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when hamburger menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const menuSections = [
    { num: '01', category: 'PHILOSOPHY', label: 'Sanctuary Overview', href: '#welcome', desc: 'Our private members club manifesto & heritage' },
    { num: '02', category: 'EXPERIENCE', label: '8-Stage Member Journey', href: '#experience', desc: 'From valet arrival to post-workout recovery' },
    { num: '03', category: 'ARRIVAL', label: 'Sanctuary Arrival Trail', href: '#trail', desc: 'Interactive step-by-step sanctuary ritual' },
    { num: '04', category: 'RITUALS', label: 'Personalized Care', href: '#personalized-care', desc: 'Biometric alignment & custom protocols' },
    { num: '05', category: 'FACILITIES', label: 'Sanctuary Facilities', href: '#facilities', desc: 'Arena, steam vaults, and private suites' },
    { num: '06', category: 'THE ARSENAL', label: 'Training Protocols', href: '#programs', desc: 'Hypertrophy, combat, and athletic conditioning' },
    { num: '07', category: 'FACULTY', label: 'Master Coaches', href: '#coaches', desc: 'World-class trainers & exercise physiologists' },
    { num: '08', category: 'ACCESS', label: 'Membership Tiers', href: '#membership', desc: 'Private invitations & executive privileges' },
    { num: '09', category: 'RECOVERY', label: 'Wellness & Cryo Spa', href: '#wellness', desc: 'Contrast hydrotherapy & biohacking' },
    { num: '10', category: 'BIOMETRICS', label: 'Biometrics AI Protocol', href: '#calculator', desc: 'Calculate your personalized club protocol' },
    { num: '11', category: 'JOURNAL', label: 'Executive Journal', href: '#journal', desc: 'Essays on human performance & longevity' },
    { num: '12', category: 'REVIEWS', label: 'Member Testimonials', href: '#testimonials', desc: 'Perspectives from our executive community' },
    { num: '13', category: 'CONCIERGE', label: 'Contact & Valet Location', href: '#contact', desc: 'Directions, valet parking, and private inquiries' },
  ];

  const marqueeNavItems = [
    { label: 'Sanctuary Suite', href: '#sanctuary' },
    { label: 'Arsenal Arena', href: '#programs' },
    { label: 'Biometrics AI', href: '#calculator' },
    { label: 'Personal Care', href: '#personalized-care' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Membership', href: '#membership' },
    { label: 'Wellness Spa', href: '#wellness' },
    { label: 'Journal', href: '#journal' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  const handleAuthClick = () => {
    setMenuOpen(false);
    if (isLoggedIn) {
      if (isAdmin) {
        openAdminDashboard();
      } else {
        openDashboard();
      }
    } else {
      openLoginModal();
    }
  };

  const handleNavigate = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const dynamicNavItems = [
    {
      label: isLoggedIn ? (isAdmin ? 'Admin Portal' : 'Member Suite') : 'Member Login',
      onClick: handleAuthClick,
      icon: <User size={12} className="text-amber-400 shrink-0" />,
    },
    {
      label: 'Book Pass',
      onClick: () => onOpenBooking('Executive Sanctuary Access'),
      icon: <Calendar size={12} className="text-amber-400 shrink-0" />,
    },
    {
      label: 'UI Studio',
      onClick: () => setIsStudioOpen(true),
      icon: <Sparkles size={12} className="text-amber-400 shrink-0" />,
    },
    {
      label: 'Sanctuary',
      onClick: () => handleNavigate('#facilities'),
    },
    {
      label: 'Membership',
      onClick: () => handleNavigate('#membership'),
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full  ${
          scrolled ? 'backdrop-blur-xl border-b shadow-[var(--shadow-sm)] py-1.5' : 'py-2.5'
        }`}
        style={{
          backgroundColor: scrolled ? `${activePalette.bgCard}EE` : 'rgba(10,10,12,0.88)',
          borderColor: scrolled ? activePalette.borderMain : 'rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Brand Monogram Emblem */}
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('#hero');
              }}
              className="flex items-center gap-2.5 shrink-0 focus:outline-none group"
            >
              <img src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785155757/c8e9cfa4-ba26-43b2-8f73-43361075ff01_hkoxml.jpg" alt="Forged Fit" className={`rounded-full object-cover transition-all duration-300 transform group-hover:scale-105 ${scrolled ? 'w-[36px] h-[36px]' : 'w-[42px] h-[42px]'}`} />
              <div className="flex flex-col justify-center leading-none">
                <span
                  className="font-serif text-sm sm:text-base font-extrabold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-sm whitespace-nowrap"
                  style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif' }}
                >
                  FORGED FIT
                </span>
                <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.25em] font-semibold text-amber-300/80 font-mono mt-0.5 whitespace-nowrap">
                  PRIVATE SANCTUARY
                </span>
              </div>
            </a>

            {/* Desktop Center Gooey Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-2">
              <DynamicNavigation items={dynamicNavItems}  />
            </div>

            {/* Desktop & Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Theme Toggle Switcher (Espresso <-> Champagne) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-[10px] uppercase tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.accentGold,
                  color: activePalette.accentGold,
                }}
                title={`Switch to ${isChampagne ? 'Espresso (Dark)' : 'Champagne (Light)'} Theme`}
                aria-label="Toggle Theme"
              >
                {isChampagne ? (
                  <>
                    <Moon size={12} className="text-amber-500 shrink-0" />
                    <span className="font-mono">Espresso</span>
                  </>
                ) : (
                  <>
                    <Sun size={12} className="text-amber-400 shrink-0" />
                    <span className="font-mono">Champagne</span>
                  </>
                )}
              </button>

              {/* UI Studio Trigger */}
              <button
                onClick={() => setIsStudioOpen(true)}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-[10px] uppercase tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.accentGold,
                  color: activePalette.accentGold,
                }}
                title="Open UI Studio Customizer"
              >
                <Sparkles size={12} className="animate-pulse" />
                <span>UI Studio</span>
              </button>

              {/* Member Sign In / Dashboard */}
              <button
                onClick={handleAuthClick}
                className="hidden sm:flex items-center space-x-1.5 text-[10px] xl:text-xs uppercase tracking-widest font-semibold hover:opacity-80 transition-opacity px-3 py-1.5 rounded-full border whitespace-nowrap shrink-0"
                style={{ 
                  color: activePalette.textPrimary,
                  borderColor: activePalette.borderMain,
                  backgroundColor: activePalette.bgCard
                }}
              >
                {isLoggedIn ? (
                  <>
                    <LayoutDashboard size={13} style={{ color: activePalette.accentGold }} />
                    <span>{user?.name ? user.name.split(' ')[0] : 'Portal'}</span>
                  </>
                ) : (
                  <>
                    <User size={13} />
                    <span>Sign In</span>
                  </>
                )}
              </button>

              {/* Reserve Access CTA */}
              <button
                onClick={() => onOpenBooking('Priority Tour')}
                className="hidden md:flex px-4 py-2 rounded-full text-[9px] xl:text-[10px] uppercase tracking-widest font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 items-center space-x-1 border whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: activePalette.bgMain,
                  color: activePalette.accentGold,
                  borderColor: activePalette.accentGold,
                }}
              >
                <span>Reserve Access</span>
                <ChevronRight size={13} />
              </button>

              {/* Universal Luxury Animated Hamburger Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full border focus:outline-none transition-all duration-300 shadow-[var(--shadow-sm)] group hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: menuOpen ? activePalette.accentGold : activePalette.bgCard,
                  borderColor: activePalette.accentGold,
                  color: menuOpen ? activePalette.bgMain : activePalette.textPrimary,
                }}
                aria-label="Toggle Luxury Club Menu"
                aria-expanded={menuOpen}
              >
                {/* Animated Hamburger Lines */}
                <div className="w-4 h-3.5 relative flex flex-col justify-between items-center shrink-0">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-0.5 rounded-full block transition-colors"
                    style={{ backgroundColor: menuOpen ? activePalette.bgMain : activePalette.accentGold }}
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3/4 h-0.5 rounded-full block transition-colors self-start"
                    style={{ backgroundColor: menuOpen ? activePalette.bgMain : activePalette.accentGold }}
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-0.5 rounded-full block transition-colors"
                    style={{ backgroundColor: menuOpen ? activePalette.bgMain : activePalette.accentGold }}
                  />
                </div>

                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold font-mono">
                  {menuOpen ? 'CLOSE' : 'MENU'}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Animated Full-Screen Luxury Hamburger Drawer Overlay */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[999999] flex flex-col bg-[var(--overlay-dark)] backdrop-blur-2xl text-[var(--text-ivory)] overflow-hidden"
              style={{ backgroundColor: `${activePalette.bgMain}FA` }}
            >
              {/* Background Luxury Ambient Glows */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />

              {/* Drawer Top Header */}
              <div 
                className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-5 flex items-center justify-between border-b shrink-0 z-20"
                style={{ borderColor: activePalette.borderMain }}
              >
                <div className="flex items-center space-x-3">
                  
                  <div>
                    <span 
                      className="font-serif text-base sm:text-xl font-bold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 block"
                      style={{ fontFamily: '"Cinzel Decorative", serif' }}
                    >
                      FORGED FIT
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.25em] text-amber-300/80 font-mono block">
                      PRIVATE MEMBERS NAVIGATION
                    </span>
                  </div>
                </div>

                {/* Status Indicator, Theme Toggle & Close Button */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                    style={{
                      backgroundColor: activePalette.bgCard,
                      color: activePalette.accentGold,
                      borderColor: activePalette.accentGold,
                    }}
                    title={`Switch to ${isChampagne ? 'Espresso (Dark)' : 'Champagne (Light)'} Theme`}
                  >
                    {isChampagne ? (
                      <>
                        <Moon size={13} className="text-amber-500" />
                        <span>ESPRESSO</span>
                      </>
                    ) : (
                      <>
                        <Sun size={13} className="text-amber-400" />
                        <span>CHAMPAGNE</span>
                      </>
                    )}
                  </button>

                  <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-full border bg-amber-500/10 border-amber-500/30 text-[10px] uppercase tracking-widest text-amber-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>SANCTUARY OPEN • VALET READY</span>
                  </div>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full border transition-all hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: activePalette.accentGold,
                      color: activePalette.bgMain,
                      borderColor: activePalette.accentGold,
                    }}
                  >
                    <X size={16} />
                    <span className="text-xs uppercase tracking-widest font-bold">CLOSE</span>
                  </button>
                </div>
              </div>

              {/* Main Content Area (Scrollable Grid) */}
              <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 flex-grow overflow-y-auto no-scrollbar z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Staggered Section Navigation Links (Cols 1-7) */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-2 pr-0 lg:pr-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold mb-2 block" style={{ color: activePalette.accentGold }}>
                    EXPLORE SANCTUARY PROTOCOLS
                  </span>

                  {/* GooeyNav in Mobile Overlay */}
                  <div className="my-2 py-2 flex justify-center sm:hidden">
                    <DynamicNavigation items={dynamicNavItems.slice(0, 3)}  />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {menuSections.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.03 }}
                      >
                        <button
                          onClick={() => handleNavigate(item.href)}
                          className="w-full text-left p-3.5 rounded-2xl border transition-all duration-300 group hover:scale-[1.02] flex items-center justify-between cursor-pointer"
                          style={{
                            backgroundColor: `${activePalette.bgCard}B0`,
                            borderColor: activePalette.borderMain,
                          }}
                        >
                          <div className="flex items-center space-x-3.5 overflow-hidden">
                            <span className="font-mono text-xs font-bold text-amber-400/80 group-hover:text-amber-300 transition-colors shrink-0">
                              {item.num}
                            </span>
                            <div className="truncate">
                              <span className="text-[9px] uppercase tracking-widest font-mono text-amber-300/60 block mb-0.5">
                                {item.category}
                              </span>
                              <span 
                                className="font-serif text-base sm:text-lg font-medium group-hover:text-amber-300 transition-colors block truncate"
                                style={{ color: activePalette.textPrimary }}
                              >
                                {item.label}
                              </span>
                            </div>
                          </div>

                          <ArrowUpRight 
                            size={16} 
                            className="text-amber-400/40 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" 
                          />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Member Portal & Executive Quick Actions (Cols 8-12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5 lg:border-l lg:pl-8" style={{ borderColor: activePalette.borderMain }}>
                  
                  {/* Executive Portal Card */}
                  <div 
                    className="p-6 rounded-3xl border relative overflow-hidden backdrop-blur-md"
                    style={{
                      backgroundColor: `${activePalette.bgCard}E0`,
                      borderColor: activePalette.accentGold,
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-amber-500/40 bg-amber-500/10 text-amber-400">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-mono block">
                          AUTHENTICATED ACCESS
                        </span>
                        <h4 className="font-serif text-lg font-bold" style={{ color: activePalette.textPrimary }}>
                          Member Portal
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs font-light leading-relaxed mb-4" style={{ color: activePalette.textSecondary }}>
                      Manage your biometric workout schedule, review Master Coach assignments, and adjust your personal sanctuary preferences.
                    </p>

                    <button
                      onClick={handleAuthClick}
                      className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold border transition-all flex items-center justify-center space-x-2 shadow-[var(--shadow-sm)] hover:scale-105 active:scale-95 cursor-pointer"
                      style={{
                        backgroundColor: isLoggedIn ? activePalette.bgMain : activePalette.accentGold,
                        color: isLoggedIn ? activePalette.accentGold : activePalette.bgMain,
                        borderColor: activePalette.accentGold,
                      }}
                    >
                      {isLoggedIn ? (
                        <>
                          <LayoutDashboard size={15} />
                          <span>Open Member Dashboard</span>
                        </>
                      ) : (
                        <>
                          <User size={15} />
                          <span>Member Portal Sign In</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Booking & Priority Tour Action */}
                  <div 
                    className="p-5 rounded-3xl border flex flex-col space-y-3"
                    style={{
                      backgroundColor: `${activePalette.bgCard}80`,
                      borderColor: activePalette.borderMain,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-mono text-amber-300/80">
                        EXECUTIVE PRIVILEGES
                      </span>
                      <Calendar size={15} className="text-amber-400" />
                    </div>

                    <h5 className="font-serif text-base font-medium" style={{ color: activePalette.textPrimary }}>
                      Experience the Sanctuary First-Hand
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          onOpenBooking('Priority Tour');
                        }}
                        className="py-2.5 px-3 rounded-xl text-xs uppercase tracking-widest font-bold border transition-all flex items-center justify-center space-x-1.5 hover:bg-amber-500/10 cursor-pointer"
                        style={{
                          borderColor: activePalette.accentGold,
                          color: activePalette.accentGold,
                        }}
                      >
                        <span>Reserve Tour</span>
                        <ChevronRight size={13} />
                      </button>

                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setIsStudioOpen(true);
                        }}
                        className="py-2.5 px-3 rounded-xl text-xs uppercase tracking-widest font-bold border transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                        style={{
                          backgroundColor: activePalette.bgMain,
                          borderColor: activePalette.borderMain,
                          color: activePalette.textPrimary,
                        }}
                      >
                        <Sparkles size={13} className="text-amber-400" />
                        <span>UI Studio</span>
                      </button>
                    </div>
                  </div>

                  {/* Club Concierge Info Footer */}
                  <div className="p-4 rounded-2xl border text-xs space-y-2 font-light" style={{ borderColor: activePalette.borderMain, backgroundColor: `${activePalette.bgMain}A0` }}>
                    <div className="flex items-center space-x-2 text-amber-300/90 font-mono text-[11px]">
                      <MapPin size={13} className="shrink-0" />
                      <span className="truncate">750 5th Avenue • Executive District, NYC</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono" style={{ color: activePalette.textSecondary }}>
                      <div className="flex items-center space-x-1.5">
                        <Clock size={12} />
                        <span>Open 24/7 • Valet On Site</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Phone size={12} />
                        <span>+1 (212) 888-5500</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;

