const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      const regex = /https:\/\/res\.cloudinary\.com\/akmdvmmw\/image\/upload\/v(\d+)\/images_/g;
      
      content = content.replace(regex, (match, p1) => {
        modified = true;
        return `https://res.cloudinary.com/akmdvmmw/image/upload/q_100,f_auto/v${p1}/images_`;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated quality in ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
