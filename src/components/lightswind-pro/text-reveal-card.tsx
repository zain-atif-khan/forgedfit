import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ScrollFloat from '../ScrollFloat';

export interface TextRevealCardProps {
  text: string;
  revealText?: string;
  className?: string;
}

export default function TextRevealCard({ text, className = '' }: TextRevealCardProps) {
  const { activePalette } = useTheme();

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl p-12 sm:p-24 border ${className}`}
      style={{
        backgroundColor: activePalette.bgCard,
        borderColor: activePalette.borderMain,
      }}
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <ScrollFloat 
          as="h3" 
          textClassName="text-3xl sm:text-5xl md:text-6xl font-serif text-center font-bold" 
          style={{ color: activePalette.textPrimary }}
        >
          {text}
        </ScrollFloat>
      </div>
    </div>
  );
}
