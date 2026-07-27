const fs = require('fs');

let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

const newPalette = `  {
    id: 'warm-chocolate-amber',
    name: 'Warm Chocolate & Amber',
    subtitle: 'Rich espresso and dark chocolate with golden orange highlights',
    bgMain: '#49301D',
    bgCard: '#5A3922',
    bgPanel: '#F2EBDD',
    borderMain: '#A89A8C',
    accentGold: '#D88A2A',
    accentHover: '#E59A33',
    textPrimary: '#F8F8F8',
    textSecondary: '#E6DCC8',
    previewColors: ['#49301D', '#5A3922', '#D88A2A', '#F2EBDD']
  },
`;

content = content.replace(/export const PALETTES: ThemePalette\[\] = \[/, 'export const PALETTES: ThemePalette[] = [\n' + newPalette);

fs.writeFileSync('src/context/ThemeContext.tsx', content);
