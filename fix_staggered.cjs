const fs = require('fs');
let code = fs.readFileSync('src/components/StaggeredMenu.tsx', 'utf8');
code = code.replace(/isAdmin \? \(\s*<img\s*src="https:\/\/res.cloudinary.com\/akmdvmmw\/image\/upload\/v1785155322\/watermarked_img_12614332792149984218_cptwyk.jpg"[^>]*\/>\s*\) : \(\s*\)/g, 'isAdmin && (\n<img src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785155322/watermarked_img_12614332792149984218_cptwyk.jpg" className="w-[110px] h-[24px] object-contain mb-2 brightness-0 invert opacity-80" alt="Forged Fit" />\n)');

code = code.replace(/isAdmin \? \([\s\S]*?\) : \([\s\S]*?\)/, function(match) {
  if (match.includes('<img')) {
     return match.replace(/isAdmin \? \([\s\S]*?\) : \([\s\S]*?\)/, 'isAdmin && (\n<img src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785155322/watermarked_img_12614332792149984218_cptwyk.jpg" className="w-[110px] h-[24px] object-contain mb-2 brightness-0 invert opacity-80" alt="Forged Fit" />\n)');
  }
  return match;
});
fs.writeFileSync('src/components/StaggeredMenu.tsx', code);
