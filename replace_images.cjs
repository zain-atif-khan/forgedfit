const fs = require('fs');
const path = require('path');

const userImages = [
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_5_nfyewv.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151103/images_3_vssu0u.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785142690/images_rdktty.jpg',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif',
  'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg'
];

const unsplashImages = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=100&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=100&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=100&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536922246289-88c42f957773?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593079831268-3381b0c13569?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=100&w=2000&auto=format&fit=crop'
];

// Mapping unsplash to our new 10 images circularly
const mapping = {};
unsplashImages.forEach((u, i) => {
  mapping[u] = userImages[i % userImages.length];
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;

      for (const [oldVal, newVal] of Object.entries(mapping)) {
        if (content.includes(oldVal)) {
          const regex = new RegExp(escapeRegExp(oldVal), 'g');
          content = content.replace(regex, newVal);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Replaced images in ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
