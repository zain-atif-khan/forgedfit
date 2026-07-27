const fs = require('fs');

let data = fs.readFileSync('src/data/clubData.ts', 'utf8');

data = data.replace(
  "avatar: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',",
  "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg',"
);

data = data.replace(
  "avatar: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop',",
  "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',"
);

data = data.replace(
  "avatar: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',",
  "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',"
);

data = data.replace(
  "avatar: 'https://images.unsplash.com/photo-1590381105924-c7258977b363?q=80&w=1200&auto=format&fit=crop',",
  "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg',"
);

data = data.replace(
  "avatar: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',",
  "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151103/images_3_vssu0u.jpg',"
);

data = data.replace(
  "avatar: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',",
  "avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',"
);

fs.writeFileSync('src/data/clubData.ts', data);
