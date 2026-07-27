import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface MorphCarouselProps {
  images: string[];
  morphSpeed?: number;
}

export default function MorphCarousel({ images, morphSpeed = 1.5 }: MorphCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl bg-black/5 border border-[var(--glass-border)] group cursor-pointer" onClick={handleNext}>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }}
          transition={{ duration: morphSpeed, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="pointer-events-auto w-12 h-12 rounded-full bg-[var(--glass-bg)] backdrop-blur-md flex items-center justify-center text-[var(--text-ivory)] hover:bg-black/40 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="pointer-events-auto w-12 h-12 rounded-full bg-[var(--glass-bg)] backdrop-blur-md flex items-center justify-center text-[var(--text-ivory)] hover:bg-black/40 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
