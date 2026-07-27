const fs = require('fs');
let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

// Add helper function before ThemeProvider
const helperFunc = `
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
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
`;

if (!content.includes('hexToRgb')) {
  content = content.replace('export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {', helperFunc + '\nexport const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {');
}

// Inside useEffect, calculate isLightMode and set root variables
const newUseEffect = `
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
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.6)');
        root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.05)');
        root.style.setProperty('--shadow-sm', '0 4px 12px rgba(0, 0, 0, 0.05)');
        root.style.setProperty('--shadow-md', '0 8px 24px rgba(0, 0, 0, 0.08)');
        root.style.setProperty('--shadow-lg', '0 15px 35px rgba(0, 0, 0, 0.12)');
        root.style.setProperty('--shadow-glow', '0 0 25px rgba(200, 169, 126, 0.1)');
        root.style.setProperty('--overlay-bg', 'rgba(240, 235, 225, 0.3)');
        root.style.setProperty('--overlay-dark', 'rgba(10, 10, 10, 0.4)'); // Still need dark for hero text contrast
        root.style.setProperty('--card-hover-bg', 'rgba(0, 0, 0, 0.02)');
        root.style.setProperty('--btn-hover-opacity', '0.9');
        root.style.setProperty('--blur-intensity', 'blur(8px)');
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
  }, [activePalette, activeUIStyle, activeLighting]);
`;

content = content.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[activePalette, activeUIStyle, activeLighting\]\);/, newUseEffect.trim());

// Also add isLightMode to the context state
if (!content.includes('isLightMode: boolean;')) {
    content = content.replace('interface ThemeContextType {', 'interface ThemeContextType {\n  isLightMode: boolean;');
    content = content.replace('activeLighting,', 'activeLighting,\n        isLightMode: isLightColor(activePalette.bgMain),');
}

fs.writeFileSync('src/context/ThemeContext.tsx', content);
console.log('Updated ThemeContext.tsx');
