const fs = require('fs');

// Navbar.tsx
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(
  /<ForgedFitLogo\n\s*variant="compact"\n\s*size=\{scrolled \? 36 : 42\}\n\s*glow=\{!scrolled\}\n\s*className="transition-all duration-300 transform group-hover:scale-105"\n\s*\/>/,
  `<img src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785155322/watermarked_img_12614332792149984218_cptwyk.jpg" alt="Forged Fit" className={\`rounded-full object-cover transition-all duration-300 transform group-hover:scale-105 \${scrolled ? 'w-[36px] h-[36px]' : 'w-[42px] h-[42px]'}\`} />`
);
fs.writeFileSync('src/components/Navbar.tsx', navbar);

// Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /<ForgedFitLogo variant="compact" size=\{40\} glow=\{false\} \/>/,
  `<img src="https://res.cloudinary.com/akmdvmmw/image/upload/v1785155322/watermarked_img_12614332792149984218_cptwyk.jpg" alt="Forged Fit" className="w-[40px] h-[40px] rounded-full object-cover" />`
);
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log('Logos replaced.');
