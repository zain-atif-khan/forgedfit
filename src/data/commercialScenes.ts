export interface CommercialScene {
  id: number;
  title: string;
  subtitle: string;
  durationSeconds: number;
  videoUrl: string;
  fallbackImage: string;
  description: string;
  cameraSetting: string;
  lightingSetting: string;
  details: string[];
}

export const COMMERCIAL_SCENES: CommercialScene[] = [
  {
    id: 1,
    title: 'Scene 1 • Grand Entrance',
    subtitle: 'Architectural Arrival & Floor-to-Ceiling Glass',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-gym-room-interior-41561-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
    description: 'A luxurious fitness club entrance with floor-to-ceiling glass, warm golden lighting, elegant architecture, and automatic sliding doors as members enter.',
    cameraSetting: '24fps Anamorphic 35mm • Smooth Gimbal Forward Tracking',
    lightingSetting: 'Warm Amber Architectural Lighting & Evening Sunlight Glass Reflections',
    details: ['Floor-to-Ceiling Glass Facade', 'Valet Arrival Area', 'Bronze Architectural Portal']
  },
  {
    id: 2,
    title: 'Scene 2 • Reception & Lounge',
    subtitle: 'Marble Concierge Desk & Walnut Warmth',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-inside-a-modern-gym-with-weights-and-machinery-41563-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    description: 'A premium reception area featuring Italian marble counters, walnut wood finishes, brushed bronze accents, and private concierge staff welcoming members.',
    cameraSetting: 'Dolly Lateral Slide • Shallow Depth of Field (f/1.4)',
    lightingSetting: 'Soft Recessed Ceiling Spotlights & Champagne Backlit Walls',
    details: ['Italian Calacatta Marble', 'Private Keycard Biometrics', 'Fresh Espresso & Water Service']
  },
  {
    id: 3,
    title: 'Scene 3 • Strength Zone Arena',
    subtitle: 'Biometric Machines & Metallic Mastery',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gym-room-with-weights-and-dumbbells-41562-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_6_ploxod.jpg',
    description: 'Rows of pristine premium strength machines, cable crossovers, leg presses, Smith machines, and solid urethane dumbbell racks in warm moody lighting.',
    cameraSetting: 'Low-Angle Glide Track • 4K UHD 60fps',
    lightingSetting: 'High-Contrast Metallic Specular Highlights',
    details: ['Eleiko Power Racks', 'Laser-etched Forge Fit Weights', 'Italian Leather Benches']
  },
  {
    id: 4,
    title: 'Scene 4 • Heavy Training Focus',
    subtitle: 'Controlled Strength & Pure Determination',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-exercises-with-dumbbells-41565-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',
    description: 'Athletes performing slow-motion deadlifts, barbell squats, and heavy presses with perfect form. Controlled effort, determination, and powerful visuals.',
    cameraSetting: 'Cinematic Slow Motion (120fps) • Selective Focus',
    lightingSetting: 'Chiaroscuro Side Key Light & Subtle Chalk Dust Glow',
    details: ['120fps Slow-Mo Barbell Drop', 'Deep Muscular Tension', 'Breath Control']
  },
  {
    id: 5,
    title: 'Scene 5 • Machine Precision',
    subtitle: 'Chest Press, Lat Pulldowns & Hack Squats',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-exercising-her-legs-at-a-gym-41568-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
    description: 'Members using custom cable pulldowns, chest presses, and hack squats. Macro close-ups of weight stacks sliding effortlessly on polished chrome rods.',
    cameraSetting: 'Macro 85mm Cinema Lens • Smooth Vertical Crane Slide',
    lightingSetting: 'Warm Rim Lighting along Brushed Stainless Steel Cables',
    details: ['Weight Stack Glide', 'Polished Aluminum Knurling', 'Smooth Cable Tension']
  },
  {
    id: 6,
    title: 'Scene 6 • Functional Arena',
    subtitle: 'Battle Ropes, Sleds & Kettlebells',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-a-gym-41566-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    description: 'Dynamic battle rope waves in slow motion, heavy sled pushes across turf lanes, and kettlebell swings in a spacious functional training floor.',
    cameraSetting: 'Dynamic 360 Dolly Arc • High Frame Rate',
    lightingSetting: 'Natural Window Daylight Blended with Golden Ambient Overhead',
    details: ['Pure Heavy Battle Ropes', 'Acoustic Shock Turf Lane', 'Matte Cast Kettlebells']
  },
  {
    id: 7,
    title: 'Scene 7 • Master Personal Coaching',
    subtitle: '1-on-1 Biometric Correction & Celebration',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-trainer-assisting-a-woman-doing-exercises-41567-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif',
    description: 'A Master Coach analyzing posture on a digital tablet, correcting biomechanical form, encouraging a client, and sharing an authentic high-five after a set.',
    cameraSetting: 'Over-the-Shoulder Medium Close-up • Soft Bokeh',
    lightingSetting: 'Natural Soft Diffused Warm Studio Lights',
    details: ['Biomechanical Angle Adjustment', 'Instant Form Video Feedback', 'High-Five Victory']
  },
  {
    id: 8,
    title: 'Scene 8 • High-Performance Cardio',
    subtitle: 'Curved Treadmills & Panoramic Views',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-running-on-treadmills-in-a-gym-41564-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',
    description: 'Athletes in smooth rhythm on curved slat treadmills, indoor rowers, and ergometer bikes facing city skyline windows in sunset light.',
    cameraSetting: 'Parallax Tracking Shot along Treadmill Row',
    lightingSetting: 'Golden Hour Sunset Silhouette & Warm Room Fill',
    details: ['Woodway Slat Belts', 'Heart Rate Heart Sync', 'City Skyline Horizon']
  },
  {
    id: 9,
    title: 'Scene 9 • Macro Luxury Details',
    subtitle: 'Textured Leather, Steel & Chalk',
    durationSeconds: 1.5,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gym-room-with-weights-and-dumbbells-41562-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
    description: 'Macro detail close-ups of laser-etched gold Forge Fit crests on dumbbells, hand-stitched espresso leather seams, chalk dusting off hands, and iced eucalyptus towels.',
    cameraSetting: 'Extreme Macro 100mm Lens • Ultra Shallow Focus',
    lightingSetting: 'Single Point Highlight Reflection on Metallic Edge',
    details: ['Hand-Stitched Leather', 'Knurled Chrome Handles', 'Eucalyptus Cold Towel']
  },
  {
    id: 10,
    title: 'Scene 10 • Elite Community',
    subtitle: 'Camaraderie, Laughter & Shared Drive',
    durationSeconds: 1.5,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-inside-a-modern-gym-with-weights-and-machinery-41563-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_7_m0nyel.jpg',
    description: 'A diverse community of driven members talking between sets, sharing advice, celebrating personal bests, and enjoying the supportive private atmosphere.',
    cameraSetting: 'Handheld Steadycam • Natural Warm Flare',
    lightingSetting: 'Warm Lounge Ambient & Soft Glow',
    details: ['Post-Workout Smiles', 'Peer Encouragement', 'Exclusive Member Atmosphere']
  },
  {
    id: 11,
    title: 'Scene 11 • Hydrotherapy & Recovery',
    subtitle: 'Contrast Steam Vaults & Cold Plunge',
    durationSeconds: 1.5,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-gym-room-interior-41561-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    description: 'Steam softly billowing from cedar saunas, crystal-clear 45°F cold plunge pools with glowing underwater bronze LED spotlights, and zero-gravity compression lounges.',
    cameraSetting: 'Slow Atmospheric Push-In through Steam Mist',
    lightingSetting: 'Subtle Underwater Bronze Glow & Diffused Fog Light',
    details: ['Eucalyptus Vapor Cloud', '45°F Biometric Cold Plunge', 'Infrared Sauna Halo']
  },
  {
    id: 12,
    title: 'Scene 12 • Closing Sanctuary Vista',
    subtitle: 'The Ultimate Private Athletic Experience',
    durationSeconds: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gym-room-with-weights-and-dumbbells-41562-large.mp4',
    fallbackImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif',
    description: 'Wide cinematic master shot of the entire illuminated Forge Fit sanctuary at twilight, fading gracefully into dark espresso luxury wallpaper.',
    cameraSetting: 'Wide Anamorphic Master Shot • Slow Pull Back',
    lightingSetting: 'Twilight Golden Glow Fading to Deep Espresso Shadows',
    details: ['Wide Architectural Master', 'Sunset Glow', 'Fade to Dark Espresso']
  }
];
