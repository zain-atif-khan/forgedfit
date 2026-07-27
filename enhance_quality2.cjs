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
      const regex = /q_100,f_auto/g;
      
      if (content.match(regex)) {
        content = content.replace(regex, 'q_auto:best,f_auto');
        modified = true;
      }
      
      const unsplashRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?q=\d+&w=\d+&auto=format&fit=crop/g;
      if (content.match(unsplashRegex)) {
         content = content.replace(unsplashRegex, (match) => {
             return match.replace('q=80', 'q=100').replace('w=1200', 'w=2000');
         });
         modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated quality in ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
