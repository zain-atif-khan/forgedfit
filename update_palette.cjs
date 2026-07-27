const fs = require('fs');

let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

content = content.replace(/id: 'warm-chocolate-amber'[\s\S]*?previewColors: \['#49301D', '#5A3922', '#D88A2A', '#F2EBDD'\]\n  },/,
`id: 'warm-chocolate-amber',
    name: 'Warm Chocolate & Amber',
    subtitle: 'Rich espresso and dark chocolate with golden orange highlights',
    bgMain: '#49301D',
    bgCard: '#5A3922',
    bgPanel: '#3A2617',
    borderMain: '#D88A2A',
    accentGold: '#D88A2A',
    accentHover: '#E59A33',
    textPrimary: '#F8F8F8',
    textSecondary: '#E6DCC8',
    previewColors: ['#49301D', '#5A3922', '#D88A2A', '#F2EBDD']
  },`);

fs.writeFileSync('src/context/ThemeContext.tsx', content);
