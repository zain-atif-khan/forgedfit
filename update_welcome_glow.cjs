const fs = require('fs');

let code = fs.readFileSync('src/components/WelcomeSection.tsx', 'utf8');

if (!code.includes('import BorderGlow')) {
  code = `import BorderGlow from './BorderGlow';\n` + code;
}

const divPattern = /<div\s+className="p-5 rounded-xl border transition-colors hover:border-amber-400\/60"[\s\S]*?<\/div>/g;

code = code.replace(divPattern, (match) => {
  return `<BorderGlow
                backgroundColor={activePalette.bgCard}
                borderRadius={12}
                glowColor="40 80 80"
                glowIntensity={0.6}
                fillOpacity={0.4}
              >
                ${match.replace('p-5 rounded-xl border transition-colors hover:border-amber-400/60', 'p-5 rounded-xl border-none')}
              </BorderGlow>`;
});

fs.writeFileSync('src/components/WelcomeSection.tsx', code);
