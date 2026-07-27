import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ThreeDCardProps {
  id: string | number;
  image: string;
  title: string;
  subtitle: string;
  content?: React.ReactNode;
}

export interface ThreeDCardsCarouselProps {
  cards: ThreeDCardProps[];
}

export default function ThreeDCardsCarousel({ cards }: ThreeDCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden perspective-[1000px]">
      <div className="relative w-full max-w-sm md:max-w-md h-full flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
            const isNext = index === (currentIndex + 1) % cards.length;
            
            if (!isActive && !isPrev && !isNext) return null;

            return (
              <motion.div
                key={card.id}
                initial={{ 
                  opacity: 0, 
                  x: isNext ? 200 : isPrev ? -200 : 0, 
                  scale: 0.8,
                  rotateY: isNext ? -45 : isPrev ? 45 : 0,
                  z: -100
                }}
                animate={{ 
                  opacity: isActive ? 1 : 0.5, 
                  x: isActive ? 0 : isNext ? 150 : -150, 
                  scale: isActive ? 1 : 0.8,
                  rotateY: isActive ? 0 : isNext ? -25 : 25,
                  z: isActive ? 0 : -100,
                  zIndex: isActive ? 30 : 10
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.8,
                  z: -100
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                className={`absolute w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-[var(--shadow-lg)] ${isActive ? '' : 'pointer-events-none blur-[2px]'}`}
                onClick={isActive ? undefined : (isNext ? handleNext : handlePrev)}
              >
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-serif text-[var(--text-ivory)] mb-2">{card.title}</h3>
                  <p className="text-sm uppercase tracking-widest text-amber-400 font-semibold mb-4">{card.subtitle}</p>
                  {card.content && (
                    <div className="text-white/80 font-light leading-relaxed">
                      {card.content}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-[var(--glass-bg)] backdrop-blur-md flex items-center justify-center text-[var(--text-ivory)] border border-[var(--glass-border)] hover:bg-black/60 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-[var(--glass-bg)] backdrop-blur-md flex items-center justify-center text-[var(--text-ivory)] border border-[var(--glass-border)] hover:bg-black/60 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
