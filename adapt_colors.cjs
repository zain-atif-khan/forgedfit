const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;

      // Safe replacements for adaptive themes
      const replacements = {
        'bg-black/90': 'bg-[var(--overlay-dark)]',
        'bg-black/85': 'bg-[var(--overlay-dark)]',
        'bg-black/80': 'bg-[var(--overlay-bg)]',
        'bg-black/95': 'bg-[var(--overlay-dark)]',
        'bg-white/10': 'bg-[var(--card-hover-bg)]',
        'bg-white/5': 'bg-[var(--card-hover-bg)]',
        'border-white/10': 'border-[var(--glass-border)]',
        'border-white/20': 'border-[var(--glass-border)]',
        'border-black/10': 'border-[var(--glass-border)]',
        'border-black/40': 'border-[var(--glass-border)]',
        'bg-black/20': 'bg-[var(--glass-bg)]',
        'bg-black/40': 'bg-[var(--glass-bg)]',
        'bg-black/60': 'bg-[var(--glass-bg)]',
        'text-white': 'text-[var(--text-ivory)]',
        'text-black': 'text-[var(--text-ivory)]', // For some hardcoded black texts which should adapt? Maybe wait.
        'shadow-2xl': 'shadow-[var(--shadow-lg)]',
        'shadow-xl': 'shadow-[var(--shadow-md)]',
        'shadow-lg': 'shadow-[var(--shadow-sm)]'
      };

      for (const [oldVal, newVal] of Object.entries(replacements)) {
        if (oldVal === 'text-black') continue;
        if (content.includes(oldVal)) {
          // ensure word boundary for tailwind classes
          const regex = new RegExp(`(?<=[\\s"'\\\`])` + oldVal.replace(/\\//g, '\\/') + `(?=[\\s"'\\\`])`, 'g');
          content = content.replace(regex, newVal);
          modified = true;
        }
      }
      
      // Fix background overlays with specific hex or rgba manually
      if (content.includes('rgba(0,0,0,0.5)')) {
          content = content.replace(/rgba\(0,0,0,0\.5\)/g, 'var(--overlay-bg)');
          modified = true;
      }
      if (content.includes('rgba(0,0,0,0.7)')) {
          content = content.replace(/rgba\(0,0,0,0\.7\)/g, 'var(--overlay-dark)');
          modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Adapted colors in ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
