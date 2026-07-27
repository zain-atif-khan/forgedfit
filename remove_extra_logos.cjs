const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(/<ForgedFitLogo[^>]*\/>/g, '');
fs.writeFileSync('src/components/Navbar.tsx', navbar);

let staggered = fs.readFileSync('src/components/StaggeredMenu.tsx', 'utf8');
staggered = staggered.replace(/<ForgedFitLogo[^>]*\/>/g, '');
fs.writeFileSync('src/components/StaggeredMenu.tsx', staggered);

console.log('Extra logos removed.');
