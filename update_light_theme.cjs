const fs = require('fs');
let content = fs.readFileSync('src/context/ThemeContext.tsx', 'utf8');

const updatedLightVars = `
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
`;

content = content.replace(/root\.style\.setProperty\('--glass-bg', 'rgba\(255, 255, 255, 0\.6\)'\);[\s\S]*?root\.style\.setProperty\('--blur-intensity', 'blur\(8px\)'\);/, updatedLightVars.trim());

fs.writeFileSync('src/context/ThemeContext.tsx', content);
console.log('Updated light theme CSS variables');
