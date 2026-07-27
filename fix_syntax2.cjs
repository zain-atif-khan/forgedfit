const fs = require('fs');
let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

content = content.replace(/isLightMode: isLightColor\(activePalette\.bgMain\), setActivePalette\]/g, 'setActivePalette]');
content = content.replace(/isLightMode: isLightColor\(activePalette\.bgMain\), activeUIStyle, activeLighting\]\);/g, 'activeUIStyle, activeLighting]);');

fs.writeFileSync('src/context/ThemeContext.tsx', content);
