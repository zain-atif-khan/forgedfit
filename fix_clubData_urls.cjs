const fs = require('fs');

const REVERT_MAP = {
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=100&w=500&auto=format&fit=crop': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=500&auto=format&fit=crop': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=500&auto=format&fit=crop': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=100&w=500&auto=format&fit=crop': 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=100&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=500&auto=format&fit=crop': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=100&w=2000&auto=format&fit=crop'
};

const NEW_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=500&auto=format&fit=crop', // woman
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=500&auto=format&fit=crop', // man
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=100&w=500&auto=format&fit=crop', // woman
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=500&auto=format&fit=crop', // man
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=100&w=500&auto=format&fit=crop', // woman
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=100&w=500&auto=format&fit=crop'  // woman
];

const NEW_COACHES = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=100&w=500&auto=format&fit=crop', // man
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=500&auto=format&fit=crop', // woman
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=500&auto=format&fit=crop', // man
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=100&w=500&auto=format&fit=crop', // woman
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=500&auto=format&fit=crop', // man
];

let clubData = fs.readFileSync('src/data/clubData.ts', 'utf8');

// 1. Revert all portrait URLs back to gym URLs
for (const [portraitUrl, gymUrl] of Object.entries(REVERT_MAP)) {
  clubData = clubData.split(portraitUrl).join(gymUrl);
}

// 2. Fix avatar: fields (in testimonials etc)
let i = 0;
clubData = clubData.replace(/avatar: '.*?'/g, () => {
  const replacement = `avatar: '${NEW_AVATARS[i % NEW_AVATARS.length]}'`;
  i++;
  return replacement;
});

// 3. Fix image: fields only in the COACHES block
let startIndex = clubData.indexOf('export const COACHES');
if (startIndex !== -1) {
    let endIndex = clubData.indexOf(']', startIndex);
    if (endIndex !== -1) {
        let coachesBlock = clubData.substring(startIndex, endIndex);
        
        let j = 0;
        coachesBlock = coachesBlock.replace(/image: '.*?'/g, () => {
            const replacement = `image: '${NEW_COACHES[j % NEW_COACHES.length]}'`;
            j++;
            return replacement;
        });

        clubData = clubData.substring(0, startIndex) + coachesBlock + clubData.substring(endIndex);
    }
}

fs.writeFileSync('src/data/clubData.ts', clubData);
console.log('Fixed clubData URLs securely');
