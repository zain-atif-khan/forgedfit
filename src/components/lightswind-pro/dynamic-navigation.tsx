import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export interface DynamicNavigationProps {
  items: { label: string; onClick?: () => void; icon?: React.ReactNode }[];
  defaultActive?: number;
  className?: string;
}

export default function DynamicNavigation({ items, defaultActive = 0, className = '' }: DynamicNavigationProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const { activePalette } = useTheme();

  const handleSelect = (index: number, onClick?: () => void) => {
    setActiveIndex(index);
    if (onClick) onClick();
  };

  return (
    <div className={`relative flex items-center p-1.5 rounded-full border shadow-sm ${className}`} style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            onClick={() => handleSelect(index, item.onClick)}
            className="relative px-4 py-2 flex items-center space-x-1.5 text-[10px] xl:text-xs font-semibold tracking-widest uppercase rounded-full transition-colors z-10 whitespace-nowrap"
            style={{ color: isActive ? activePalette.bgMain : activePalette.textPrimary }}
          >
            {isActive && (
              <motion.div
                layoutId="dynamic-nav-pill"
                className="absolute inset-0 rounded-full z-[-1]"
                style={{ backgroundColor: activePalette.accentGold }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
