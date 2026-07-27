const fs = require('fs');

let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

// Update warm-chocolate-amber
content = content.replace(
  /name: 'Warm Chocolate & Amber',[\s\S]*?bgMain: '#49301D',[\s\S]*?bgCard: '#5A3922',[\s\S]*?bgPanel: '#3A2617',/m,
  "name: 'Warm Chocolate & Amber',\n    subtitle: 'Rich espresso and dark chocolate with golden orange highlights',\n    bgMain: '#1A0F08',\n    bgCard: '#2B190E',\n    bgPanel: '#3D2414',"
);

// Update preview colors
content = content.replace(
  /previewColors: \['#49301D', '#5A3922', '#D88A2A', '#F2EBDD'\]/m,
  "previewColors: ['#1A0F08', '#2B190E', '#D88A2A', '#F2EBDD']"
);

// Update warm-beige
content = content.replace(
  /name: 'Warm Beige & Champagne',[\s\S]*?subtitle: 'Sophisticated warm beige light canvas with champagne gold accents',[\s\S]*?bgMain: '#F7F3EE',[\s\S]*?bgCard: '#FFFFFF',[\s\S]*?bgPanel: '#EFEAE3',[\s\S]*?borderMain: '#DCD4C9',[\s\S]*?accentGold: '#B88E52',[\s\S]*?accentHover: '#D9B37A',[\s\S]*?textPrimary: '#2C251E',[\s\S]*?textSecondary: '#7A6E62',[\s\S]*?previewColors: \['#F7F3EE', '#FFFFFF', '#B88E52', '#DCD4C9'\]/m,
  "name: 'Dark Taupe & Champagne',\n    subtitle: 'Sophisticated dark taupe brown canvas with champagne gold accents',\n    bgMain: '#1C1916',\n    bgCard: '#292521',\n    bgPanel: '#38322D',\n    borderMain: '#4A423B',\n    accentGold: '#C49F6B',\n    accentHover: '#DEB985',\n    textPrimary: '#F4F0EB',\n    textSecondary: '#B8B0A5',\n    previewColors: ['#1C1916', '#292521', '#C49F6B', '#4A423B']"
);

// Update desert-sand
content = content.replace(
  /name: 'Sahara Sand & Warm Ivory',[\s\S]*?subtitle: 'Warm sand and cashmere canvas with rich cognac gold highlights',[\s\S]*?bgMain: '#F4ECE1',[\s\S]*?bgCard: '#FAF5EE',[\s\S]*?bgPanel: '#EADECE',[\s\S]*?borderMain: '#D6C5B2',[\s\S]*?accentGold: '#A67C4A',[\s\S]*?accentHover: '#C99D69',[\s\S]*?textPrimary: '#2B2219',[\s\S]*?textSecondary: '#756555',[\s\S]*?previewColors: \['#F4ECE1', '#FAF5EE', '#A67C4A', '#D6C5B2'\]/m,
  "name: 'Dark Cognac & Ivory',\n    subtitle: 'Deep cognac brown canvas with rich gold highlights',\n    bgMain: '#24180E',\n    bgCard: '#332315',\n    bgPanel: '#422D1D',\n    borderMain: '#593E2B',\n    accentGold: '#C99D69',\n    accentHover: '#E0B888',\n    textPrimary: '#F5ECE1',\n    textSecondary: '#C4B09D',\n    previewColors: ['#24180E', '#332315', '#C99D69', '#593E2B']"
);

// Update pristine-white
content = content.replace(
  /name: 'Pristine White & Ivory',[\s\S]*?subtitle: 'Clean high-contrast bright white sanctuary with muted gold accents',[\s\S]*?bgMain: '#FAF8F5',[\s\S]*?bgCard: '#FFFFFF',[\s\S]*?bgPanel: '#F2EFE9',[\s\S]*?borderMain: '#E0D7CC',[\s\S]*?accentGold: '#9E7B4F',[\s\S]*?accentHover: '#C4A273',[\s\S]*?textPrimary: '#1A1816',[\s\S]*?textSecondary: '#635B52',[\s\S]*?previewColors: \['#FAF8F5', '#FFFFFF', '#9E7B4F', '#E0D7CC'\]/m,
  "name: 'Mahogany & Ivory',\n    subtitle: 'Deep mahogany brown sanctuary with muted gold accents',\n    bgMain: '#1A1110',\n    bgCard: '#261A18',\n    bgPanel: '#362624',\n    borderMain: '#4D3835',\n    accentGold: '#B8976C',\n    accentHover: '#D1B48C',\n    textPrimary: '#F7F3F0',\n    textSecondary: '#BDAEAA',\n    previewColors: ['#1A1110', '#261A18', '#B8976C', '#4D3835']"
);

fs.writeFileSync('src/context/ThemeContext.tsx', content);
console.log('Updated palettes to dark brown.');
