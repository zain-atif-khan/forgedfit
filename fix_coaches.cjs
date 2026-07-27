const fs = require('fs');

const NEW_AVATARS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=100&w=500&auto=format&fit=crop', // man (Marcus Vance)
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=500&auto=format&fit=crop', // woman (Elena Rostova)
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=500&auto=format&fit=crop', // man (Julian Thorne)
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=100&w=500&auto=format&fit=crop', // woman (Amara Chen)
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=500&auto=format&fit=crop', // man (David Sterling)
];

let clubData = fs.readFileSync('src/data/clubData.ts', 'utf8');

let startIndex = clubData.indexOf('export const COACHES');
if (startIndex !== -1) {
    let endIndex = clubData.indexOf(']', startIndex);
    if (endIndex !== -1) {
        let coachesBlock = clubData.substring(startIndex, endIndex);
        
        let i = 0;
        coachesBlock = coachesBlock.replace(/image: '.*?'/g, () => {
            const replacement = `image: '${NEW_AVATARS[i % NEW_AVATARS.length]}'`;
            i++;
            return replacement;
        });

        clubData = clubData.substring(0, startIndex) + coachesBlock + clubData.substring(endIndex);
        fs.writeFileSync('src/data/clubData.ts', clubData);
        console.log('Fixed coaches images');
    }
}
