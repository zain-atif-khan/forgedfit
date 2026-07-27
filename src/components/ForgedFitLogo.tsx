import React from 'react';

export interface ForgedFitLogoProps {
  variant?: 'full' | 'emblem' | 'horizontal' | 'compact';
  className?: string;
  size?: number | string;
  glow?: boolean;
}

export const ForgedFitLogo: React.FC<ForgedFitLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size,
  glow = true,
}) => {
  const imageUrl = "https://storage.googleapis.com/aistudio-build-artifacts-eu-prod/a681abdf7eb741279a0224608c0205e4.jpeg";

  // Render "F" Monogram Emblem
  if (variant === 'compact' || variant === 'emblem' || (variant as string) === 'monogram' || (variant as string) === 'f-icon') {
    const emblemSize = size ? (typeof size === 'number' ? `${size}px` : size) : (variant === 'compact' ? '40px' : '48px');
    return (
      <div
        className={`rounded-full border border-amber-500/60 bg-gradient-to-br from-[#2D2012] via-[#1C140B] to-[#0E0B07] flex items-center justify-center font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 text-lg sm:text-xl shadow-[0_2px_10px_rgba(0,0,0,0.8)] hover:border-amber-400 transition-all shrink-0 ${className} ${glow ? 'shadow-[0_0_15px_rgba(212,175,55,0.3)]' : ''}`}
        style={{ width: emblemSize, height: emblemSize, fontFamily: '"Cinzel Decorative", "Cinzel", serif' }}
      >
        F
      </div>
    );
  }

  // Render Horizontal Version (Navbar / Footer / Card Headers)
  if (variant === 'horizontal') {
    const iconSize = size ? (typeof size === 'number' ? `${size}px` : size) : '56px';
    const mobileIconSize = size ? (typeof size === 'number' ? `${size * 0.75}px` : size) : '40px';
    return (
      <div className={`inline-flex items-center space-x-2 sm:space-x-3 select-none shrink-0 ${className}`}>
        <div
          className={`shrink-0 flex items-center justify-center`}
        >
          <img src={imageUrl} alt="Forged Fit Logo" className="w-[40px] sm:w-[56px] h-auto object-contain drop-shadow-md rounded-sm" style={{ width: size ? iconSize : undefined }} />
        </div>
        <div className="hidden sm:flex flex-col justify-center leading-none min-w-0">
          <span className="font-serif text-sm sm:text-lg font-extrabold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-sm truncate" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif' }}>
            FORGED FIT
          </span>
          <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.3em] font-semibold text-amber-300/90 font-mono mt-0.5 sm:mt-1 truncate">
            PREMIUM FITNESS
          </span>
        </div>
      </div>
    );
  }

  // Render Full Crest + Typography Banner (Hero / Modals)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <div className={`rounded-full overflow-hidden border border-amber-500/50 mb-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 ${glow ? 'shadow-[0_0_25px_rgba(212,175,55,0.4)]' : ''}`}>
        <img src={imageUrl} alt="Forged Fit Logo" className="w-full h-full object-cover" />
      </div>

      {/* Main Brand Title */}
      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif' }}>
        FORGED FIT
      </h1>

      {/* Subtitle & EST Year */}
      <div className="flex items-center space-x-3 mt-2">
        <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-amber-400" />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-amber-200/90 font-mono">
          PREMIUM FITNESS
        </span>
        <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-amber-400" />
      </div>

      <div className="mt-1 text-[9px] uppercase tracking-[0.4em] font-serif text-amber-400/70 font-semibold">
        EST. 2024
      </div>
    </div>
  );
};

export default ForgedFitLogo;
