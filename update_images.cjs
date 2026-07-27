const fs = require('fs');
const path = require('path');

const NEW_IMAGES = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593079831268-3381b0c13569?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536922246289-88c42f957773?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570829460005-c840387fc1fd?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596357395104-146fd01cc491?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=100&w=2000&auto=format&fit=crop',
];

const MAPPINGS = {
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785150987/images_1_ckpz5a.jpg': NEW_IMAGES[0],
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785151082/images_2_hsw5nn.jpg': NEW_IMAGES[1],
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785151103/images_3_vssu0u.jpg': NEW_IMAGES[2],
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785151125/images_4_zi9gve.jpg': NEW_IMAGES[3],
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785151139/images_5_nfyewv.jpg': NEW_IMAGES[4],
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785152285/images_6_ploxod.jpg': NEW_IMAGES[5],
  'https://res.cloudinary.com/akmdvmmw/image/upload/q_auto:best,f_auto/v1785152293/images_7_m0nyel.jpg': NEW_IMAGES[6],
};

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
      for (const [oldUrl, newUrl] of Object.entries(MAPPINGS)) {
        if (content.includes(oldUrl)) {
          content = content.split(oldUrl).join(newUrl);
          modified = true;
        }
      }

      // Also handle cases without q_auto:best,f_auto
      for (const [oldUrl, newUrl] of Object.entries(MAPPINGS)) {
        const altOldUrl1 = oldUrl.replace('q_auto:best,f_auto/', '');
        if (content.includes(altOldUrl1)) {
          content = content.split(altOldUrl1).join(newUrl);
          modified = true;
        }
        const altOldUrl2 = oldUrl.replace('q_auto:best,f_auto', 'q_100,f_auto');
        if (content.includes(altOldUrl2)) {
          content = content.split(altOldUrl2).join(newUrl);
          modified = true;
        }
      }

      // We should randomize Unsplash URLs if possible or keep mapping.
      // But MAPPING is fine for consistency. 

      // Some components might have hardcoded URLs that we missed.
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated images in ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
