import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemePalette {
  id: string;
  name: string;
  subtitle: string;
  bgMain: string;
  bgCard: string;
  bgPanel: string;
  borderMain: string;
  accentGold: string;
  accentHover: string;
  textPrimary: string;
  textSecondary: string;
  previewColors: string[];
}

export interface UIStyle {
  id: string;
  name: string;
  fontHeading: string;
  borderStyle: string;
  glassStyle: string;
}

export interface AtmosphereLighting {
  id: string;
  name: string;
  glowTop: string;
  glowBottom: string;
  filterOverlay: string;
}

export const PALETTES: ThemePalette[] = [
  {
    id: 'warm-chocolate-amber',
    name: 'Warm Chocolate & Amber',
    subtitle: 'Rich espresso and dark chocolate with golden orange highlights',
    bgMain: '#1A0F08',
    bgCard: '#2B190E',
    bgPanel: '#3D2414',
    borderMain: '#D88A2A',
    accentGold: '#D88A2A',
    accentHover: '#E59A33',
    textPrimary: '#F8F8F8',
    textSecondary: '#E6DCC8',
    previewColors: ['#1A0F08', '#2B190E', '#D88A2A', '#F2EBDD']
  },

  {
    id: 'obsidian-gold',
    name: 'Obsidian Espresso & Gold',
    subtitle: 'Original ultra-dark luxury espresso canvas with champagne gold',
    bgMain: '#0B0907',
    bgCard: '#15110E',
    bgPanel: '#1E1813',
    borderMain: '#3A2E25',
    accentGold: '#C8A97E',
    accentHover: '#E7D8C9',
    textPrimary: '#F8F5F2',
    textSecondary: '#C9B8A6',
    previewColors: ['#0B0907', '#15110E', '#C8A97E', '#3A2E25']
  },
  {
    id: 'emerald-sanctuary',
    name: 'Emerald & Eucalyptus Green',
    subtitle: 'Rich deep emerald sanctuary canvas with eucalyptus mint & sage accents',
    bgMain: '#08140E',
    bgCard: '#112219',
    bgPanel: '#193023',
    borderMain: '#2A4A37',
    accentGold: '#4E9F70',
    accentHover: '#82C49C',
    textPrimary: '#F0F7F2',
    textSecondary: '#A2C2AD',
    previewColors: ['#08140E', '#112219', '#4E9F70', '#2A4A37']
  },
  {
    id: 'sage-olive',
    name: 'Sage & Olive Botanical',
    subtitle: 'Earthy botanical olive canvas with muted warm sage & bronze accents',
    bgMain: '#111713',
    bgCard: '#1C241E',
    bgPanel: '#26312A',
    borderMain: '#3A4B40',
    accentGold: '#8CA899',
    accentHover: '#C2D6CB',
    textPrimary: '#F2F6F4',
    textSecondary: '#A5B8AC',
    previewColors: ['#111713', '#1C241E', '#8CA899', '#3A4B40']
  },
  {
    id: 'warm-beige',
    name: 'Dark Taupe & Champagne',
    subtitle: 'Sophisticated dark taupe brown canvas with champagne gold accents',
    bgMain: '#1C1916',
    bgCard: '#292521',
    bgPanel: '#38322D',
    borderMain: '#4A423B',
    accentGold: '#C49F6B',
    accentHover: '#DEB985',
    textPrimary: '#F4F0EB',
    textSecondary: '#B8B0A5',
    previewColors: ['#1C1916', '#292521', '#C49F6B', '#4A423B']
  },
  {
    id: 'desert-sand',
    name: 'Dark Cognac & Ivory',
    subtitle: 'Deep cognac brown canvas with rich gold highlights',
    bgMain: '#24180E',
    bgCard: '#332315',
    bgPanel: '#422D1D',
    borderMain: '#593E2B',
    accentGold: '#C99D69',
    accentHover: '#E0B888',
    textPrimary: '#F5ECE1',
    textSecondary: '#C4B09D',
    previewColors: ['#24180E', '#332315', '#C99D69', '#593E2B']
  },
  {
    id: 'pristine-white',
    name: 'Mahogany & Ivory',
    subtitle: 'Deep mahogany brown sanctuary with muted gold accents',
    bgMain: '#1A1110',
    bgCard: '#261A18',
    bgPanel: '#362624',
    borderMain: '#4D3835',
    accentGold: '#B8976C',
    accentHover: '#D1B48C',
    textPrimary: '#F7F3F0',
    textSecondary: '#BDAEAA',
    previewColors: ['#1A1110', '#261A18', '#B8976C', '#4D3835']
  },
  {
    id: 'imperial-crimson',
    name: 'Imperial Crimson & Onyx',
    subtitle: 'Deep black canvas with striking crimson and ruby red accents',
    bgMain: '#070505',
    bgCard: '#110C0C',
    bgPanel: '#1A1212',
    borderMain: '#331D1D',
    accentGold: '#991B1B',
    accentHover: '#DC2626',
    textPrimary: '#F8F2F2',
    textSecondary: '#C9A6A6',
    previewColors: ['#070505', '#110C0C', '#991B1B', '#331D1D']
  },
  {
    id: 'cobalt-abyss',
    name: 'Cobalt Abyss & Obsidian',
    subtitle: 'Midnight black with deep royal cobalt blue and sapphire',
    bgMain: '#04070A',
    bgCard: '#091118',
    bgPanel: '#0F1A26',
    borderMain: '#1A334D',
    accentGold: '#1E40AF',
    accentHover: '#3B82F6',
    textPrimary: '#F0F4F8',
    textSecondary: '#A2B3C9',
    previewColors: ['#04070A', '#091118', '#1E40AF', '#1A334D']
  },
  {
    id: 'aurum-onyx',
    name: 'Aurum Yellow & Onyx',
    subtitle: 'Absolute black contrasting with sharp, vibrant golden yellow',
    bgMain: '#050505',
    bgCard: '#111111',
    bgPanel: '#1A1A1A',
    borderMain: '#333333',
    accentGold: '#FACC15',
    accentHover: '#FEF08A',
    textPrimary: '#FAFAFA',
    textSecondary: '#A3A3A3',
    previewColors: ['#050505', '#111111', '#FACC15', '#333333']
  }
];

export const CUSTOM_DEFAULT_PALETTE: ThemePalette = {
  id: 'custom-bespoke',
  name: 'Bespoke Custom UI Color',
  subtitle: 'Engineered custom color palette crafted in UI Studio',
  bgMain: '#0B130E',
  bgCard: '#122018',
  bgPanel: '#192C21',
  borderMain: '#2B4837',
  accentGold: '#52A374',
  accentHover: '#86CDA2',
  textPrimary: '#F0F8F3',
  textSecondary: '#A3C7B1',
  previewColors: ['#0B130E', '#122018', '#52A374', '#2B4837']
};

export const UI_STYLES: UIStyle[] = [
  {
    id: 'classique',
    name: 'Classique Luxury Serif',
    fontHeading: "'Cormorant Garamond', 'Georgia', serif",
    borderStyle: '1px solid rgba(200, 169, 126, 0.25)',
    glassStyle: 'backdrop-blur-xl bg-opacity-40'
  },
  {
    id: 'royal-cinzel',
    name: 'Royal Cinzel Elegance',
    fontHeading: "'Cinzel Decorative', 'Cinzel', serif",
    borderStyle: '1px solid rgba(200, 169, 126, 0.4)',
    glassStyle: 'backdrop-blur-md bg-opacity-70'
  },
  {
    id: 'marcellus-grand',
    name: 'Marcellus Grand',
    fontHeading: "'Marcellus', 'Times New Roman', serif",
    borderStyle: '1px solid rgba(200, 169, 126, 0.5)',
    glassStyle: 'backdrop-blur-2xl bg-opacity-30'
  },
  {
    id: 'playfair-display',
    name: 'Playfair Majestic',
    fontHeading: "'Playfair Display', 'Georgia', serif",
    borderStyle: '1px solid rgba(200, 169, 126, 0.3)',
    glassStyle: 'backdrop-blur-xl bg-opacity-50'
  }
];

export const LIGHTING_PRESETS: AtmosphereLighting[] = [
  {
    id: 'warm-golden',
    name: 'Warm Golden Hour',
    glowTop: 'radial-gradient(circle, rgba(200, 169, 126, 0.22) 0%, transparent 70%)',
    glowBottom: 'radial-gradient(circle, rgba(92, 74, 59, 0.25) 0%, transparent 70%)',
    filterOverlay: 'sepia(10%) contrast(105%)'
  },
  {
    id: 'moody-obsidian',
    name: 'Moody Obsidian Shadows',
    glowTop: 'radial-gradient(circle, rgba(200, 169, 126, 0.1) 0%, transparent 60%)',
    glowBottom: 'radial-gradient(circle, rgba(20, 15, 12, 0.8) 0%, transparent 80%)',
    filterOverlay: 'contrast(115%) brightness(95%)'
  },
  {
    id: 'eucalyptus-mist',
    name: 'Eucalyptus Steam Glow',
    glowTop: 'radial-gradient(circle, rgba(110, 139, 116, 0.2) 0%, transparent 70%)',
    glowBottom: 'radial-gradient(circle, rgba(200, 169, 126, 0.15) 0%, transparent 70%)',
    filterOverlay: 'hue-rotate(5deg) contrast(102%)'
  }
];

interface ThemeContextType {
  isLightMode: boolean;
  activePalette: ThemePalette;
  activeUIStyle: UIStyle;
  activeLighting: AtmosphereLighting;
  customPalette: ThemePalette;
  setPalette: (id: string) => void;
  setUIStyle: (id: string) => void;
  setLighting: (id: string) => void;
  updateCustomColors: (colors: Partial<ThemePalette>) => void;
  isStudioOpen: boolean;
  setIsStudioOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const getLuminance = (r: number, g: number, b: number) => {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const isLightColor = (color: string) => {
  const rgb = hexToRgb(color);
  if (!rgb) return false;
  return getLuminance(rgb.r, rgb.g, rgb.b) > 0.179;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customPalette, setCustomPalette] = useState<ThemePalette>(() => {
    try {
      const saved = localStorage.getItem('forgefit_custom_palette');
      return saved ? JSON.parse(saved) : CUSTOM_DEFAULT_PALETTE;
    } catch {
      return CUSTOM_DEFAULT_PALETTE;
    }
  });

  const [activePalette,
        setActivePalette] = useState<ThemePalette>(() => {
    try {
      const saved = localStorage.getItem('forgefit_palette_id');
      if (saved === 'custom-bespoke') {
        const savedCustom = localStorage.getItem('forgefit_custom_palette');
        return savedCustom ? JSON.parse(savedCustom) : CUSTOM_DEFAULT_PALETTE;
      }
      return PALETTES.find((p) => p.id === saved) || PALETTES[0];
    } catch {
      return PALETTES[0];
    }
  });

  const [activeUIStyle, setActiveUIStyle] = useState<UIStyle>(() => {
    try {
      const saved = localStorage.getItem('forgefit_uistyle_id');
      return UI_STYLES.find((u) => u.id === saved) || UI_STYLES[0];
    } catch {
      return UI_STYLES[0];
    }
  });

  const [activeLighting, setActiveLighting] = useState<AtmosphereLighting>(() => {
    try {
      const saved = localStorage.getItem('forgefit_lighting_id');
      return LIGHTING_PRESETS.find((l) => l.id === saved) || LIGHTING_PRESETS[0];
    } catch {
      return LIGHTING_PRESETS[0];
    }
  });

  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);

  useEffect(() => {
    // Apply CSS Variables to document root reactively
    const root = document.documentElement;
    const isLight = isLightColor(activePalette.bgMain);
    
    // Add data attribute for easier CSS targeting
    root.setAttribute('data-theme-mode', isLight ? 'light' : 'dark');
    
    root.style.setProperty('--bg-espresso', activePalette.bgMain);
    root.style.setProperty('--bg-walnut', activePalette.bgCard);
    root.style.setProperty('--bg-cocoa', activePalette.bgPanel);
    root.style.setProperty('--border-bronze', activePalette.borderMain);
    root.style.setProperty('--accent-gold', activePalette.accentGold);
    root.style.setProperty('--accent-beige', activePalette.accentHover);
    root.style.setProperty('--text-ivory', activePalette.textPrimary);
    root.style.setProperty('--text-taupe', activePalette.textSecondary);

    // Adaptive Theme Variables based on Light/Dark
    if (isLight) {
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.04)');
        root.style.setProperty('--shadow-sm', '0 2px 8px rgba(0, 0, 0, 0.03)');
        root.style.setProperty('--shadow-md', '0 6px 16px rgba(0, 0, 0, 0.06)');
        root.style.setProperty('--shadow-lg', '0 12px 28px rgba(0, 0, 0, 0.08)');
        root.style.setProperty('--shadow-glow', '0 0 0px transparent'); // No glow on light mode
        root.style.setProperty('--overlay-bg', 'rgba(255, 255, 255, 0.7)');
        root.style.setProperty('--overlay-dark', 'rgba(0, 0, 0, 0.3)'); // Soft text overlay
        root.style.setProperty('--card-hover-bg', 'rgba(0, 0, 0, 0.02)');
        root.style.setProperty('--btn-hover-opacity', '0.85');
        root.style.setProperty('--blur-intensity', 'blur(4px)');
    } else {
        root.style.setProperty('--glass-bg', 'rgba(15, 12, 10, 0.6)');
        root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
        root.style.setProperty('--shadow-sm', '0 4px 12px rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--shadow-md', '0 8px 24px rgba(0, 0, 0, 0.3)');
        root.style.setProperty('--shadow-lg', '0 15px 35px rgba(0, 0, 0, 0.4)');
        root.style.setProperty('--shadow-glow', '0 0 30px rgba(200, 169, 126, 0.2)');
        root.style.setProperty('--overlay-bg', 'rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--overlay-dark', 'rgba(0, 0, 0, 0.7)');
        root.style.setProperty('--card-hover-bg', 'rgba(255, 255, 255, 0.03)');
        root.style.setProperty('--btn-hover-opacity', '0.95');
        root.style.setProperty('--blur-intensity', 'blur(12px)');
    }

    root.style.setProperty('--font-heading', activeUIStyle.fontHeading);
    root.style.setProperty('--glow-top', activeLighting.glowTop);
    root.style.setProperty('--glow-bottom', activeLighting.glowBottom);
    root.style.setProperty('--filter-overlay', activeLighting.filterOverlay);
  }, [activePalette,
        activeUIStyle, activeLighting]);

  const setPalette = (id: string) => {
    if (id === 'custom-bespoke') {
      setActivePalette(customPalette);
      try {
        localStorage.setItem('forgefit_palette_id', 'custom-bespoke');
      } catch {}
      return;
    }
    const found = PALETTES.find((p) => p.id === id);
    if (found) {
      setActivePalette(found);
      try {
        localStorage.setItem('forgefit_palette_id', id);
      } catch {
        // ignore localStorage errors in restricted environments
      }
    }
  };

  const updateCustomColors = (updatedFields: Partial<ThemePalette>) => {
    setCustomPalette((prev) => {
      const next: ThemePalette = {
        ...prev,
        ...updatedFields,
        previewColors: [
          updatedFields.bgMain || prev.bgMain,
          updatedFields.bgCard || prev.bgCard,
          updatedFields.accentGold || prev.accentGold,
          updatedFields.borderMain || prev.borderMain,
        ]
      };
      try {
        localStorage.setItem('forgefit_custom_palette', JSON.stringify(next));
        localStorage.setItem('forgefit_palette_id', 'custom-bespoke');
      } catch {}
      setActivePalette(next);
      return next;
    });
  };

  const setUIStyle = (id: string) => {
    const found = UI_STYLES.find((u) => u.id === id);
    if (found) {
      setActiveUIStyle(found);
      try {
        localStorage.setItem('forgefit_uistyle_id', id);
      } catch {
        // ignore localStorage errors
      }
    }
  };

  const setLighting = (id: string) => {
    const found = LIGHTING_PRESETS.find((l) => l.id === id);
    if (found) {
      setActiveLighting(found);
      try {
        localStorage.setItem('forgefit_lighting_id', id);
      } catch {
        // ignore localStorage errors
      }
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activePalette,
        isLightMode: isLightColor(activePalette.bgMain),
        activeUIStyle,
        activeLighting,
        customPalette,
        setPalette,
        setUIStyle,
        setLighting,
        updateCustomColors,
        isStudioOpen,
        setIsStudioOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
