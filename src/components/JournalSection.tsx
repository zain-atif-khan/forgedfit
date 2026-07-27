import TextRevealHeading from "./lightswind-pro/text-reveal-heading";
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { JOURNAL_ARTICLES } from '../data/clubData';
import { JournalArticle } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Clock, ArrowUpRight, X, User } from 'lucide-react';
import BorderGlow from './BorderGlow';

export const JournalSection: React.FC = () => {
  const { activePalette } = useTheme();
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const featuredArticle = JOURNAL_ARTICLES[0];
  const secondaryArticles = JOURNAL_ARTICLES.slice(1);

  return (
    <section
      id="journal"
      className="py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: activePalette.bgMain,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: activePalette.accentGold }}
          >
            Editorial Magazine
          </span>
          <TextRevealHeading
            text="The Forge Fit Journal"
            revealText="Exclusive Member Insights"
          />
          <p
            className="text-sm sm:text-base font-light max-w-2xl mt-4"
            style={{ color: activePalette.textSecondary }}
          >
            Curated essays on human performance, longevity science, contrast hydrotherapy, and nutritional architecture.
          </p>
        </div>

        {/* Featured Article + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Lead Story */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor={activePalette.bgCard}
              borderRadius={24}
              glowColor="40 80 80"
              glowIntensity={0.9}
              fillOpacity={0.6}
              className="h-full"
            >
              <div
                onClick={() => setSelectedArticle(featuredArticle)}
                className="rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-[var(--shadow-lg)] flex flex-col justify-between group h-full"
                style={{
                  backgroundColor: activePalette.bgCard,
                  borderColor: activePalette.borderMain,
                }}
              >
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover image-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background: `linear-gradient(to top, ${activePalette.bgCard} 0%, transparent 100%)`
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
                    Featured Lead • {featuredArticle.category}
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div
                      className="flex items-center space-x-4 text-xs"
                      style={{ color: activePalette.textSecondary }}
                    >
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock size={12} style={{ color: activePalette.accentGold }} />
                        <span>{featuredArticle.readTime}</span>
                      </span>
                    </div>

                    <h3
                      className="font-serif text-2xl sm:text-4xl leading-tight transition-colors"
                      style={{ color: activePalette.textPrimary }}
                    >
                      {featuredArticle.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm font-light leading-relaxed"
                      style={{ color: activePalette.textSecondary }}
                    >
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div
                    className="pt-4 flex items-center justify-between border-t mt-4"
                    style={{ borderColor: activePalette.borderMain }}
                  >
                    <span
                      className="text-xs font-medium"
                      style={{ color: activePalette.textPrimary }}
                    >
                      By {featuredArticle.author}
                    </span>

                    <span
                      className="text-xs uppercase tracking-widest font-semibold inline-flex items-center space-x-1"
                      style={{ color: activePalette.accentGold }}
                    >
                      <span>Read Article</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Secondary Articles Stack */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {secondaryArticles.map((article) => (
              <BorderGlow
                key={article.id}
                backgroundColor={activePalette.bgCard}
                borderRadius={24}
                glowColor="40 80 80"
                glowIntensity={0.8}
                fillOpacity={0.6}
              >
                <div
                  onClick={() => setSelectedArticle(article)}
                  className="rounded-3xl p-6 border transition-all duration-500 cursor-pointer shadow-[var(--shadow-md)] group flex flex-col sm:flex-row gap-6 items-center"
                  style={{
                    backgroundColor: activePalette.bgCard,
                    borderColor: activePalette.borderMain,
                  }}
                >
                  <div className="sm:w-1/3 w-full h-40 sm:h-36 rounded-2xl overflow-hidden relative shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover image-zoom"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="sm:w-2/3 w-full space-y-2">
                    <span
                      className="text-[10px] uppercase tracking-widest font-semibold block"
                      style={{ color: activePalette.accentGold }}
                    >
                      {article.category} • {article.readTime}
                    </span>
                    <h4
                      className="font-serif text-xl leading-snug line-clamp-2 transition-colors"
                      style={{ color: activePalette.textPrimary }}
                    >
                      {article.title}
                    </h4>
                    <p
                      className="text-xs font-light line-clamp-2 leading-relaxed"
                      style={{ color: activePalette.textSecondary }}
                    >
                      {article.excerpt}
                    </p>
                    <span
                      className="text-[11px] font-medium block pt-1"
                      style={{ color: activePalette.textPrimary }}
                    >
                      {article.author}
                    </span>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </div>

      {/* Full Article Modal Reader */}
      {selectedArticle && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 backdrop-blur-xl bg-[var(--overlay-bg)] animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedArticle(null);
          }}
        >
          <div
            className="border rounded-3xl max-w-3xl w-full overflow-hidden shadow-[var(--shadow-lg)] relative max-h-[90vh] flex flex-col my-auto"
            style={{
              backgroundColor: activePalette.bgCard,
              borderColor: activePalette.accentGold,
            }}
          >
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${activePalette.bgCard} 0%, transparent 100%)`
                }}
              />

              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center border focus:outline-none transition-transform hover:scale-110 z-10"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                  color: activePalette.textPrimary,
                }}
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className="text-xs uppercase tracking-widest font-semibold block mb-1"
                  style={{ color: activePalette.accentGold }}
                >
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <h3
                  className="font-serif text-2xl sm:text-4xl leading-tight"
                  style={{ color: activePalette.textPrimary }}
                >
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <div
                className="flex items-center space-x-3 text-xs pb-4 border-b"
                style={{
                  borderColor: activePalette.borderMain,
                  color: activePalette.textSecondary,
                }}
              >
                <User size={14} style={{ color: activePalette.accentGold }} />
                <span className="font-medium" style={{ color: activePalette.textPrimary }}>
                  By {selectedArticle.author}
                </span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div
                className="space-y-4 text-sm sm:text-base font-light leading-relaxed"
                style={{ color: activePalette.textPrimary }}
              >
                {selectedArticle.content && selectedArticle.content.length > 0 ? (
                  selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{selectedArticle.excerpt}</p>
                )}
              </div>

              <div
                className="pt-6 flex justify-end border-t"
                style={{ borderColor: activePalette.borderMain }}
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    backgroundColor: activePalette.accentGold,
                    color: activePalette.bgMain,
                  }}
                  className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest font-button hover:opacity-90 transition-opacity"
                >
                  Close Essay
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
