const fs = require('fs');
let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

content = content.replace('const [activeLighting,\n        isLightMode: isLightColor(activePalette.bgMain), setActiveLighting] = useState<AtmosphereLighting>', 'const [activeLighting, setActiveLighting] = useState<AtmosphereLighting>');

fs.writeFileSync('src/context/ThemeContext.tsx', content);
