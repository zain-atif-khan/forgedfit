const fs = require('fs');
let code = fs.readFileSync('src/data/clubData.ts', 'utf8');

// I need to change avatars specifically
code = code.replace(/avatar:\s*'https:\/\/res\.cloudinary\.com\/akmdvmmw\/image\/upload\/v1785142690\/images_3_vssu0u\.jpg',/, "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151103/images_3_vssu0u.jpg',");
code = code.replace(/avatar:\s*'https:\/\/res\.cloudinary\.com\/akmdvmmw\/image\/upload\/v1785152285\/images_5_nfyewv\.jpg',/, "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_5_nfyewv.jpg',");
code = code.replace(/avatar:\s*'https:\/\/res\.cloudinary\.com\/akmdvmmw\/image\/upload\/v1785152293\/images_2_hsw5nn\.jpg',/, "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg',");

fs.writeFileSync('src/data/clubData.ts', code);
