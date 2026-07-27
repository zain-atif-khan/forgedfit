import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ScrollFloat from '../ScrollFloat';

export interface TextRevealHeadingProps {
  text: string;
  revealText?: string;
  className?: string;
  textClassName?: string;
  baseColor?: string;
  revealColor?: string;
}

export default function TextRevealHeading({ 
  text, 
  className = '', 
  textClassName = 'text-3xl sm:text-5xl md:text-6xl text-center',
  baseColor, 
}: TextRevealHeadingProps) {
  const { activePalette } = useTheme();

  return (
    <div className={`w-full ${className}`}>
      <ScrollFloat 
        as="h2"
        textClassName={`font-serif font-light tracking-tight transition-opacity duration-500 ${textClassName}`} 
        style={{ color: baseColor || activePalette.textPrimary }}
      >
        {text}
      </ScrollFloat>
    </div>
  );
}
