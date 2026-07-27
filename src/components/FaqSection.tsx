import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/clubData';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown, HelpCircle, MessageSquare, Search, Sparkles, ArrowRight, List } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { motion, AnimatePresence } from 'motion/react';

import AnimatedList from './AnimatedList';

interface FaqSectionProps {
  onOpenBooking: (type?: string, detail?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const { activePalette } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Membership', 'Training', 'Recovery', 'Privileges'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden transition-colors duration-700">
      {/* Background Interactive Fluid Splash Cursor */}

      {/* Background Subtle Gradient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: activePalette.accentGold }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span
            className="text-xs uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-full border inline-flex items-center space-x-2"
            style={{
              borderColor: activePalette.borderMain,
              color: activePalette.accentGold,
              backgroundColor: activePalette.bgCard,
            }}
          >
            <HelpCircle size={14} />
            <span>Executive Concierge Inquiry</span>
          </span>

          <TextRevealHeading
            text="Frequently Asked Questions"
            revealText="Exclusive Concierge Insights"
            textClassName="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-center"
          />

          <p
            className="text-xs sm:text-sm font-light leading-relaxed"
            style={{ color: activePalette.textSecondary }}
          >
            Clear insights regarding active membership tiers, sanctuary privacy, master coaching protocols, and our biohacking recovery vaults.
          </p>

          {/* Architectural Concierge Image Banner */}
          <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden border shadow-[var(--shadow-lg)] mt-6 group max-w-3xl mx-auto">
            <img
              src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg"
              alt="Forge Fit Executive Sanctuary Lounge & Concierge Desk"
              className="w-full h-full object-cover filter contrast-105 opacity-80 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${activePalette.bgCard} 10%, transparent 90%)`
              }}
            />
            <div className="absolute inset-0 flex items-end p-6 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border backdrop-blur-md" style={{ backgroundColor: `${activePalette.bgMain}90`, borderColor: activePalette.accentGold, color: activePalette.accentGold }}>
                    5th Avenue Sanctuary Concierge Lounge
                  </span>
                  <p className="text-xs font-light mt-1.5" style={{ color: activePalette.textPrimary }}>
                    Direct Private Line: +1 (212) 890-4422 • 24/7 Dedicated Patron Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Question Express Selector using AnimatedList */}
        <div className="max-w-3xl mx-auto mb-12">
          <BorderGlow
            backgroundColor={activePalette.bgCard}
            borderRadius={20}
            glowColor="40 80 80"
            glowIntensity={0.6}
            fillOpacity={0.7}
          >
            <div
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: activePalette.bgCard,
                borderColor: activePalette.borderMain,
              }}
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b" style={{ borderColor: activePalette.borderMain }}>
                <div className="flex items-center space-x-2">
                  <List size={16} style={{ color: activePalette.accentGold }} />
                  <span className="text-xs uppercase tracking-widest font-bold" style={{ color: activePalette.textPrimary }}>
                    Featured Quick Inquiry Navigator
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-mono opacity-70" style={{ color: activePalette.textSecondary }}>
                  Use ↑ ↓ Arrow Keys or Hover
                </span>
              </div>

              <AnimatedList
                items={FAQ_ITEMS.map((f) => ({
                  id: f.id,
                  title: f.question,
                  subtitle: `Category: ${f.category} • Tap to view response`,
                }))}
                onItemSelect={(item) => {
                  const selectedId = typeof item === 'string' ? '' : item.id;
                  if (selectedId) {
                    setOpenId(selectedId);
                  }
                }}
                showGradients={true}
                displayScrollbar={true}
                enableArrowNavigation={true}
                className="max-h-[220px]"
              />
            </div>
          </BorderGlow>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: activePalette.accentGold }}
            />
            <input
              type="text"
              placeholder="Search questions (e.g. cold plunge, guest policy, coaching)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border text-xs sm:text-sm font-light transition-all outline-none"
              style={{
                backgroundColor: activePalette.bgCard,
                borderColor: activePalette.borderMain,
                color: activePalette.textPrimary,
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 font-button"
                  style={{
                    backgroundColor: isSelected ? activePalette.accentGold : activePalette.bgCard,
                    color: isSelected ? activePalette.bgMain : activePalette.textSecondary,
                    borderColor: isSelected ? activePalette.accentGold : activePalette.borderMain,
                    borderWidth: '1px',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <BorderGlow
                  key={faq.id}
                  backgroundColor={activePalette.bgCard}
                  borderRadius={18}
                  glowColor="40 80 80"
                  glowIntensity={isOpen ? 1.0 : 0.5}
                  fillOpacity={0.6}
                  className="transition-all duration-300"
                >
                  <div
                    className="rounded-2xl border overflow-hidden transition-all duration-300"
                    style={{
                      borderColor: isOpen ? activePalette.accentGold : activePalette.borderMain,
                      backgroundColor: activePalette.bgCard,
                    }}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shrink-0 border"
                          style={{
                            backgroundColor: `${activePalette.accentGold}15`,
                            color: activePalette.accentGold,
                            borderColor: `${activePalette.accentGold}40`,
                          }}
                        >
                          {faq.category}
                        </span>
                        <h3
                          className="font-serif text-base sm:text-lg font-normal leading-snug"
                          style={{ color: activePalette.textPrimary }}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300"
                        style={{
                          borderColor: isOpen ? activePalette.accentGold : activePalette.borderMain,
                          backgroundColor: isOpen ? activePalette.accentGold : activePalette.bgMain,
                          color: isOpen ? activePalette.bgMain : activePalette.textPrimary,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    {/* Answer Collapsible Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-6 pb-6 pt-2 text-xs sm:text-sm font-light leading-relaxed border-t"
                            style={{
                              color: activePalette.textSecondary,
                              borderColor: activePalette.borderMain,
                            }}
                          >
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </BorderGlow>
              );
            })
          ) : (
            <div
              className="text-center py-12 p-8 rounded-2xl border"
              style={{
                backgroundColor: activePalette.bgCard,
                borderColor: activePalette.borderMain,
              }}
            >
              <HelpCircle size={32} className="mx-auto mb-3" style={{ color: activePalette.accentGold }} />
              <p className="text-sm font-light" style={{ color: activePalette.textPrimary }}>
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-4 text-xs font-semibold uppercase tracking-wider underline"
                style={{ color: activePalette.accentGold }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Concierge Contact Card */}
        <div className="max-w-3xl mx-auto mt-16">
          <BorderGlow
            backgroundColor={activePalette.bgPanel}
            borderRadius={24}
            glowColor="40 80 80"
            glowIntensity={0.9}
            fillOpacity={0.6}
          >
            <div
              className="rounded-3xl p-8 sm:p-10 border text-center space-y-4"
              style={{
                backgroundColor: activePalette.bgPanel,
                borderColor: activePalette.borderMain,
              }}
            >
              <div
                className="w-12 h-12 rounded-full border mx-auto flex items-center justify-center"
                style={{
                  borderColor: activePalette.accentGold,
                  backgroundColor: `${activePalette.accentGold}15`,
                  color: activePalette.accentGold,
                }}
              >
                <MessageSquare size={22} />
              </div>

              <h3
                className="font-serif text-2xl font-normal"
                style={{ color: activePalette.textPrimary }}
              >
                Have a Specific Question or Custom Request?
              </h3>

              <p
                className="text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed"
                style={{ color: activePalette.textSecondary }}
              >
                Our Executive Concierge team is available 7 days a week to assist with membership inquiries, private suite tours, or custom athletic arrangements.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenBooking('Concierge Inquiry', 'General FAQ Inquiry')}
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] font-button transition-all duration-300 hover:scale-105 shadow-[var(--shadow-md)] inline-flex items-center space-x-2"
                >
                  <span>Inquire with Concierge</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => onOpenBooking('Complimentary Experience', 'FAQ Sanctuary Pass')}
                  style={{
                    borderColor: activePalette.borderMain,
                    color: activePalette.textPrimary,
                    backgroundColor: activePalette.bgCard,
                  }}
                  className="px-8 py-3.5 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] font-button transition-all duration-300 hover:opacity-90"
                >
                  Request Day Pass
                </button>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};
