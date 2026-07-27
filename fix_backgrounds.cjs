const fs = require('fs');

function fixFile(file) {
  let code = fs.readFileSync(file, 'utf8');
  
  // Temporarily mask avatars so they don't get replaced
  code = code.replace(/avatar:\s*'(.*?)'/g, (match) => match.replace('images_5_nfyewv.jpg', 'TEMP_AVATAR_5').replace('images_2_hsw5nn.jpg', 'TEMP_AVATAR_2').replace('images_3_vssu0u.jpg', 'TEMP_AVATAR_3'));
  
  // Replace the person images with other background images
  code = code.replace(/images_5_nfyewv\.jpg/g, 'images_1_ckpz5a.jpg');
  code = code.replace(/images_2_hsw5nn\.jpg/g, 'images_4_zi9gve.jpg');
  code = code.replace(/images_3_vssu0u\.jpg/g, 'fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif');

  // Restore avatars
  code = code.replace(/TEMP_AVATAR_5/g, 'images_5_nfyewv.jpg');
  code = code.replace(/TEMP_AVATAR_2/g, 'images_2_hsw5nn.jpg');
  code = code.replace(/TEMP_AVATAR_3/g, 'images_3_vssu0u.jpg');

  fs.writeFileSync(file, code);
}

fixFile('src/data/clubData.ts');
fixFile('src/data/commercialScenes.ts');

console.log('Backgrounds fixed.');

const components = fs.readdirSync('src/components').filter(f => f.endsWith('.tsx')).map(f => 'src/components/' + f);
components.forEach(fixFile);
console.log('Components fixed.');
