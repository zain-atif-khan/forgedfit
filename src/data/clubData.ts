import {
  NavItem,
  FloatingBadge,
  JourneyStep,
  Facility,
  TrainingProgram,
  Coach,
  Transformation,
  Review,
  MembershipTier,
  WellnessService,
  JournalArticle,
  FaqItem
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'trail', label: 'Trail Journey', href: '#trail' },
  { id: 'facilities', label: 'Facilities', href: '#facilities' },
  { id: 'programs', label: 'Programs', href: '#programs' },
  { id: 'coaches', label: 'Coaches', href: '#coaches' },
  { id: 'membership', label: 'Membership', href: '#membership' },
  { id: 'wellness', label: 'Wellness', href: '#wellness' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'calculator', label: 'Biometrics', href: '#calculator' },
  { id: 'journal', label: 'Journal', href: '#journal' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_BADGES: FloatingBadge[] = [
  { id: '1', icon: 'Star', value: '4.9 Rating', label: 'Verified Excellence' },
  { id: '2', icon: 'Award', value: '450+ Reviews', label: 'Google Verified' },
  { id: '3', icon: 'Users', value: '2,000+ Members', label: 'Cap Capped Exclusivity' },
  { id: '4', icon: 'Maximize2', value: '10,000 Sq Ft', label: 'Architectural Luxury' },
  { id: '5', icon: 'ShieldCheck', value: '15 Coaches', label: 'Master Specialists' },
  { id: '6', icon: 'Calendar', value: 'Est. 2018', label: 'Legacy of Quality' },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    id: 'arrival',
    title: 'Arrival & Valet',
    subtitle: 'Private Sanctuary Entry',
    description: 'Arrive at our discreet private entrance where complimentary valet parking and private elevator access escort you away from the city chaos into absolute calm.',
    icon: 'Car',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
    highlights: ['Complimentary Valet', 'Private Elevator Access', 'Aromatherapy Welcome', 'Discreet Security']
  },
  {
    step: 2,
    id: 'reception',
    title: 'Luxury Reception',
    subtitle: 'Bespoke Concierge Greeting',
    description: 'Welcomed by name by our private concierge team. Enjoy a glass of chilled electrolyte elixir or organic botanical infusion as your session prep begins.',
    icon: 'Sparkles',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    highlights: ['Keyless NFC Smart Ring', 'Signature Elixir Service', 'Dedicated Member Host', 'Customized Towel Service']
  },
  {
    step: 3,
    id: 'locker',
    title: 'Private Suite Locker',
    subtitle: 'Five-Star Italian Leather & Walnut',
    description: 'Step into climate-controlled walnut locker suites with personal biometric safes, heated Italian marble floors, Dyson vanity stations, and plush Egyptian cotton robes.',
    icon: 'KeyRound',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_1_ckpz5a.jpg',
    highlights: ['Biometric Smart Locker', 'Dyson Airwrap Suites', 'Heated Marble Flooring', 'Grown Alchemist Amenities']
  },
  {
    step: 4,
    id: 'coach',
    title: 'Personal Master Coach',
    subtitle: 'Bespoke Biometric Alignment',
    description: 'Meet your dedicated Master Coach for your pre-workout bio-check, reviewing heart-rate variability, muscle readiness, and custom session trajectory.',
    icon: 'UserCheck',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    highlights: ['InBody 770 Composition Scan', 'HRV & Nervous System Check', 'Custom Movement Prep', 'Private Suite Warmup']
  },
  {
    step: 5,
    id: 'training',
    title: 'Precision Training',
    subtitle: 'Custom Technogym & Artis Suite',
    description: 'Execute your custom protocol in ultra-spacious training zones equipped with bespoke brass dumbbells, Technogym Artis cardio, and custom power arenas.',
    icon: 'Dumbbell',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    highlights: ['Max 12 Members in Arena', 'Custom Brass Dumbbells', 'O2 Filtered Air Systems', 'Acoustic Sound Zones']
  },
  {
    step: 6,
    id: 'recovery',
    title: 'Recovery Lounge',
    subtitle: 'Infrared & Biohacking Suite',
    description: 'Transition into our quiet recovery sanctuary featuring Normatec compression suites, Theragun pro stations, and zero-gravity acoustic vibration loungers.',
    icon: 'HeartPulse',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif',
    highlights: ['Normatec 3 Compression', 'Zero-Gravity Loungers', 'Infrared Light Therapy', 'Guided Meditation Audio']
  },
  {
    step: 7,
    id: 'nutrition',
    title: 'Forge Fit Elixir Café',
    subtitle: 'Macro-Tailored Superfoods',
    description: 'Sip on post-workout collagen smoothies, cold-pressed green juices, and grass-fed protein bowls handcrafted according to your biometric nutrition targets.',
    icon: 'Coffee',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_1_ckpz5a.jpg',
    highlights: ['Artisanal Espresso & Matcha', 'Organic Grass-Fed Whey', 'Nutrient-Dense Adaptogens', 'Chef-Prepared Meal Bags']
  },
  {
    step: 8,
    id: 'steam',
    title: 'Eucalyptus Steam & Ice',
    subtitle: 'Contrast Hydrotherapy Suite',
    description: 'Reset your nervous system with alternating contrast therapy between our Finnish cedar wood sauna, eucalyptus steam sanctuary, and 45°F cold plunge pool.',
    icon: 'Flame',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    highlights: ['Eucalyptus Steam Vault', 'Filtered Cold Plunge Pool', 'Finnish Cedar Sauna', 'Chromotherapy Lights']
  },
  {
    step: 9,
    id: 'recharged',
    title: 'Leave Recharged',
    subtitle: 'Total Physical & Mental Elevation',
    description: 'Depart feeling rejuvenated, physically energized, and mentally focused, equipped with your next day protocol delivered via the Forge Fit Member App.',
    icon: 'Zap',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
    highlights: ['App Sync & Metrics', 'Valet Vehicle Delivery', 'Nutrient Package To-Go', 'Priority Next Booking']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'strength',
    name: 'Strength Zone',
    category: 'athletic',
    sqft: '2,800 Sq Ft',
    description: 'Custom matte-black steel racks, hand-milled solid brass dumbbells up to 150 lbs, Eleiko competition plates, and custom biometric strength machinery.',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    features: ['Custom Brass Dumbbells', 'Eleiko IPF Bumper Plates', 'Dual Cable Crossover Towers', 'Acoustic Impact Flooring'],
    equipmentHighlights: ['Technogym Pure Strength', 'Custom Power Racks', 'Hammer Strength Iso-Lateral', 'Pit Shark Belt Squat']
  },
  {
    id: 'functional',
    name: 'Functional Arena',
    category: 'athletic',
    sqft: '2,000 Sq Ft',
    description: 'Expansive 30-meter indoor turf track for athletic sprinting, sled pulls, kettlebell circuits, and multidirectional agility work under diffused ambient light.',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
    features: ['30m Shock-Absorbing Turf Track', 'ROGUE Monster Rig System', 'Custom Plyo Wooden Vaults', 'Hydraulic Prowler Sleds'],
    equipmentHighlights: ['Suples Bulgarian Bags', 'Concept2 Ergometers', 'Competition Kettlebells', 'Dynamax Wall Balls']
  },
  {
    id: 'yoga',
    name: 'Yoga & Movement Studio',
    category: 'wellness',
    sqft: '1,200 Sq Ft',
    description: 'Serene white-oak timber studio flooded with soft natural morning light. Temperature-controlled for Vinyasa, Yin Yoga, Sound Bath Therapy, and Breathwork.',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
    features: ['Radiant Heated Timber Floor', 'Organic Cork & Wool Mats', 'Crystal Singing Bowl Set', 'Infrared Ceiling Panels'],
    equipmentHighlights: ['Manduka Pro Yoga Mats', 'Silk Aerial Straps', 'Cedar Meditation Cushions', 'Aromatherapy Diffusers']
  },
  {
    id: 'steam',
    name: 'Steam Vault & Cold Plunge',
    category: 'wellness',
    sqft: '1,100 Sq Ft',
    description: 'Continuous contrast hydrotherapy chamber featuring dark travertine tiles, 115°F eucalyptus steam vault, Finnish dry cedar sauna, and dual 45°F cold plunges.',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    features: ['Organic Eucalyptus Vapor', 'Triple UV Filtered Water', '45°F Stainless Steel Cold Basin', '180°F Dry Cedar Sauna'],
    equipmentHighlights: ['Chromotherapy Lighting', 'Acoustic Rainfall Showers', 'Infrared Back Heating', 'Ice Towel Service']
  },
  {
    id: 'lockers',
    name: 'Luxury Locker Suites',
    category: 'private',
    sqft: '1,400 Sq Ft',
    description: 'Private dressing sanctuaries crafted with smoked glass, American walnut, and Italian Nero Marquina marble. Includes private rainfall showers and Dyson grooming stations.',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    features: ['Biometric Smart Lockers', 'Dyson Airwrap & Supersonic', 'Grown Alchemist Bodycare', 'Heated Marble Floors'],
    equipmentHighlights: ['Private Rainfall Showers', 'Plush Plush Linen Towels', 'Steamer & Shoe Shine Service', 'Individual Vanity Stations']
  },
  {
    id: 'cafe',
    name: 'Forge Fit Elixir & Protein Bar',
    category: 'culinary',
    sqft: '600 Sq Ft',
    description: 'Artisanal organic bar offering customized post-workout protein elixirs, cold-pressed green juices, ceremonial matcha, and chef-curated macro meal boxes.',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    features: ['Grass-Fed New Zealand Whey', 'Cold-Pressed Raw Organic Juices', 'Single-Origin Ceremonial Matcha', 'Pre-Ordered Meal Pickup'],
    equipmentHighlights: ['La Marzocco Espresso Machine', 'Vitamix Commercial Blenders', 'Custom Electrolyte Blends', 'Gluten-Free Macro Pastries']
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'strength-hypertrophy',
    title: 'Hypertrophy & Architectural Strength',
    subtitle: 'Bespoke Muscle Sculpting & Power',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    duration: '12-Week Protocol',
    intensity: 'Elite',
    summary: 'A meticulously periodized strength protocol focusing on mechanical tension, metabolic stress, and progressive overload to build lean athletic physique.',
    targetAudience: 'Executives & Athletes seeking targeted muscle density and structural posture.',
    schedule: '4 Days / Week • 60 Mins',
    keyFocus: ['Compound Barbell Movement', 'Time Under Tension (TUT)', 'Metabolic Conditioning', 'Structural Symmetry']
  },
  {
    id: 'body-transformation',
    title: 'Precision Body Transformation',
    subtitle: 'Comprehensive Fat Loss & Recomposition',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_1_ckpz5a.jpg',
    duration: '16-Week Flagship',
    intensity: 'High Performance',
    summary: 'Our signature transformation protocol pairing high-density metabolic resistance training with custom macronutrient coaching and weekly composition scans.',
    targetAudience: 'Members aiming for significant body recomposition and peak metabolic health.',
    schedule: '5 Days / Week • 60 Mins',
    keyFocus: ['Subcutaneous Fat Oxidation', 'Lean Muscle Preservation', 'Continuous InBody Tracking', 'Hormonal Alignment']
  },
  {
    id: 'functional-performance',
    title: 'Functional Athletic Performance',
    subtitle: 'Speed, Power & Multi-Planar Agility',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    duration: '8-Week Cycle',
    intensity: 'High Performance',
    summary: 'Develop explosive multi-planar movement, plyometric force production, and joint stability engineered for real-world sports and active lifestyles.',
    targetAudience: 'Golfers, Tennis players, Skiers, and Multi-sport enthusiasts.',
    schedule: '3-4 Days / Week • 50 Mins',
    keyFocus: ['Rotational Force Output', 'Unilateral Balance & Power', 'Deceleration Mechanics', 'Core Kinetic Transfer']
  },
  {
    id: 'yoga-longevity',
    title: 'Longevity Yoga & Mobility',
    subtitle: 'Fascial Release & Dynamic Flexibility',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    duration: 'Ongoing Weekly Practice',
    intensity: 'Balanced',
    summary: 'Harmonize joint articulation, fascial glide, and autonomic nervous system regulation through slow Vinyasa, Yin hold postures, and pranayama breathwork.',
    targetAudience: 'All members seeking stress reduction, lumbar alignment, and injury resilience.',
    schedule: 'Flexible • 60 Mins',
    keyFocus: ['Spinal Decompression', 'Parasympathetic Recovery', 'Hip & Shoulder Articulation', 'Mindful Focus']
  },
  {
    id: 'combat-boxing',
    title: 'Executive Boxing & Conditioning',
    subtitle: 'High-Octane Technical Combat',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_4_zi9gve.jpg',
    duration: '10-Week Masterclass',
    intensity: 'Elite',
    summary: 'Master authentic boxing footwork, defensive slips, and powerful punch combinations paired with heavy-bag anaerobic intervals.',
    targetAudience: 'Executives wanting high-intensity cardiovascular conditioning and mental focus.',
    schedule: '3 Days / Week • 50 Mins',
    keyFocus: ['Punches & Combinations', 'Reaction Speed & Agility', 'Anaerobic Lactic Capacity', 'Stress Decompression']
  },
  {
    id: 'hiit-metabolic',
    title: 'Forge Fit High-Velocity Conditioning',
    subtitle: 'Scientific Energy System Development',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg',
    duration: '6-Week Micro-Cycle',
    intensity: 'Elite',
    summary: 'Heart-rate monitored interval conditioning designed to boost VO2 max, elevate post-exercise oxygen consumption (EPOC), and burn calories for 24+ hours.',
    targetAudience: 'Members seeking time-efficient maximum cardiovascular stamina.',
    schedule: '3 Days / Week • 45 Mins',
    keyFocus: ['VO2 Max Expansion', 'EPOC Afterburn Effect', 'Lactate Threshold Training', 'Polar HR Tracking']
  }
];

export const COACHES: Coach[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Athletic Performance',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
    experience: '14+ Years Experience',
    certifications: ['CSCS Certified Strength Coach', 'EXOS Performance Specialist', 'M.Sc. Kinesiology'],
    specialization: 'Hypertrophy, Biomechanics & Executive Transformation',
    bio: 'Former collegiate strength coach with over a decade of experience coaching Olympic athletes, CEOs, and high-performance individuals.',
    quote: 'True luxury in fitness is not just the environment—it is the precision of every single rep and protocol.',
    clientSuccess: 'Over 320+ Executive Body Transformations Completed'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Master Pilates & Movement Specialist',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_4_zi9gve.jpg',
    experience: '11+ Years Experience',
    certifications: ['Polestar Pilates Master', 'FRC Mobility Specialist', 'E-RYT 500 Yoga Master'],
    specialization: 'Postural Alignment, Fascial Release & Reformer Pilates',
    bio: 'Classically trained prima ballerina turned movement scientist, specializing in spinal health, core stability, and graceful functional posture.',
    quote: 'When your body moves with effortless alignment, energy flows without constraint.',
    clientSuccess: 'Restored Mobility for 200+ Chronic Back Pain Clients'
  },
  {
    id: 'julian-thorne',
    name: 'Julian Thorne',
    role: 'Director of Recovery & Biohacking',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg',
    experience: '12+ Years Experience',
    certifications: ['Certified Exercise Physiologist', 'Wim Hof Method Instructor', 'Precision Nutrition Level 2'],
    specialization: 'Autonomic Nervous System, HRV Optimization & Contrast Hydrotherapy',
    bio: 'Exercise physiologist specializing in recovery science, nervous system regulation, cold exposure, and hyperbaric oxygen protocols.',
    quote: 'Your workout creates the stimulus. Your recovery creates the transformation.',
    clientSuccess: 'Optimized HRV & Sleep Quality for 400+ Members'
  },
  {
    id: 'amara-chen',
    name: 'Amara Chen',
    role: 'Olympic Strength & Combat Coach',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_1_ckpz5a.jpg',
    experience: '10+ Years Experience',
    certifications: ['USA Weightlifting National Coach', 'Pro Boxing Trainer', 'NASM Master Trainer'],
    specialization: 'Olympic Weightlifting, Combat Conditioning & Explosive Power',
    bio: 'National weightlifting medalist with a passion for teaching precise technical barbell movements and high-octane boxing conditioning.',
    quote: 'Strength is the foundation upon which all physical capability is built.',
    clientSuccess: 'Coached 85+ Athletes to Competition Personal Bests'
  },
  {
    id: 'david-sterling',
    name: 'David Sterling',
    role: 'Elite Functional Specialist',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    experience: '9+ Years Experience',
    certifications: ['CrossFit Level 3', 'ACSM Certified Personal Trainer', 'Kettlebell Athletics'],
    specialization: 'Functional Training, Agility & Metabolic Conditioning',
    bio: 'Specializing in dynamic functional workouts, integrating high-intensity training with flawless technique to build enduring athletes.',
    quote: 'Fitness is about building a body that works as flawlessly as it looks.',
    clientSuccess: 'Enhanced Athletic Output for 150+ Top Executives'
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'david-s',
    name: 'David Sterling',
    title: 'Managing Director, Private Equity',
    duration: '16 Weeks',
    bodyFatChange: '-14.2% Body Fat',
    muscleGain: '+8.5 lbs Muscle',
    quote: 'Forge Fit completely re-engineered my lifestyle. I lost 28 pounds while doubling my energy levels for board meetings.',
    beforeImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152293/images_4_zi9gve.jpg',
    afterImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    story: 'Facing 70-hour work weeks, David needed a highly structured, time-efficient protocol. Through 4 weekly 50-minute personal sessions combined with targeted recovery and nutrition, he achieved his leanest physique since college.',
    programUsed: 'Precision Body Transformation'
  },
  {
    id: 'victoria-k',
    name: 'Victoria Kensington',
    title: 'Partner, International Law Firm',
    duration: '24 Weeks',
    bodyFatChange: '-11.8% Body Fat',
    muscleGain: '+6.0 lbs Muscle',
    quote: 'The privacy, world-class coaching, and recovery lounge make Forge Fit my favorite 2 hours of the day.',
    beforeImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_1_ckpz5a.jpg',
    afterImage: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    story: 'Victoria struggled with persistent lower back tightness and stagnant weight loss. Combining Reformer Pilates, targeted hyperbaric recovery, and precision strength work eliminated her back pain and sculpted her athletic posture.',
    programUsed: 'Hypertrophy & Architectural Strength'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Alexander Vance',
    role: 'Founder & CEO, Vance Capital',
    avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151103/images_3_vssu0u.jpg',
    rating: 5,
    comment: 'Forge Fit is in a league of its own. From the valet service to the InBody scans and eucalyptus steam vaults, it feels like an ultra-luxury 5-star hotel combined with the best training facility in North America.',
    date: '2 weeks ago'
  },
  {
    id: '2',
    author: 'Camilla Hayes',
    role: 'Architectural Director',
    avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_5_nfyewv.jpg',
    rating: 5,
    comment: 'As an architect, I am captivated by the spatial design, warm walnut millwork, and lighting. As a fitness enthusiast, the master coaches have transformed my strength numbers beyond expectation.',
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Harrison Thorne',
    role: 'Tech Entrepreneur',
    avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg',
    rating: 5,
    comment: 'The recovery suite alone is worth the annual membership. The contrast therapy and zero-gravity loungers clear my mind like nothing else. Indispensable part of my daily routine.',
    date: '3 weeks ago'
  },
  {
    id: '4',
    author: 'Seraphina Sterling',
    role: 'Managing Partner, Global Law',
    avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_5_nfyewv.jpg',
    rating: 5,
    comment: 'The absolute pinnacle of privacy, athletic science, and sanctuary hospitality. My 1-on-1 reformer sessions with Elena eliminated years of posture strain.',
    date: '1 month ago'
  },
  {
    id: '5',
    author: 'Marcus Brody',
    role: 'Venture Partner & Triathlete',
    avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151082/images_2_hsw5nn.jpg',
    rating: 5,
    comment: 'Technogym Artis gear, 45°F cold plunges, and hyperbaric oxygen therapy. Forge Fit gives me the exact competitive recovery edge I need to perform at peak level.',
    date: '2 weeks ago'
  },
  {
    id: '6',
    author: 'Dr. Evelyn Rousseau',
    role: 'Neuroscientist & Longevity Specialist',
    avatar: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151103/images_3_vssu0u.jpg',
    rating: 5,
    comment: 'As a neuroscientist, I inspect every biohacking protocol thoroughly. Forge Fit executes contrast hydrotherapy and red light photobiomodulation with flawless medical precision.',
    date: '1 week ago'
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'monthly',
    name: 'Executive Access',
    price: '$650',
    period: 'per month',
    description: 'Flexible luxury athletic membership for high-performing professionals.',
    features: [
      'Full Access to Athletic Zones & Cardio Suite',
      'Eucalyptus Steam Vault & Cold Plunge Access',
      '2 Complimentary Master Personal Coaching Sessions / mo',
      'InBody 770 Composition Scans Every 30 Days',
      'Luxury Locker & Grown Alchemist Amenities',
      'Access to Forge Fit App & Digital Metrics',
      'Guest Privileges (2 Passes per Month)'
    ],
    buttonText: 'Apply for Executive'
  },
  {
    id: 'annual-signature',
    name: 'Annual Signature Membership',
    price: '$550',
    period: 'per month ($6,600 / yr)',
    badge: 'Champagne Gold Capped Tier',
    isPopular: true,
    description: 'Our flagship all-inclusive sanctuary experience with priority coaching and unlimited biohacking.',
    features: [
      'Unlimited Access to Athletic, Recovery & Spa Vaults',
      '4 Master Personal Coaching Sessions / mo Included',
      'Unlimited Normatec Compression & Cryo Recovery',
      'Bi-Weekly InBody 770 & VO2 Max Performance Analysis',
      'Permanent Private Locker with Personalized Nameplate',
      'Complimentary Overnight Laundry & Shoe Shine',
      'Priority Booking for Peak Hours & Private Events',
      'Unlimited Guest Privileges (4 Passes per Month)',
      '15% Off Forge Fit Elixir Café & Wellness Products'
    ],
    buttonText: 'Claim Signature Membership'
  },
  {
    id: 'quarterly',
    name: 'Sanctuary Quarterly',
    price: '$590',
    period: 'per month ($1,770 / qtr)',
    description: 'Ideal commitment for seasonal residency and targeted 90-day transformations.',
    features: [
      'Full Access to All Athletic & Wellness Zones',
      '3 Master Personal Coaching Sessions / quarter',
      'Full Steam Vault & Sauna Hydropool Privileges',
      'Monthly Body Composition Scans',
      'Personalized Dressing Locker & Towel Service',
      'Access to Group Masterclasses & Yoga',
      'Guest Privileges (3 Passes per Quarter)'
    ],
    buttonText: 'Apply for Quarterly'
  }
];

export const WELLNESS_SERVICES: WellnessService[] = [
  {
    id: 'infrared-sauna',
    title: 'Full-Spectrum Infrared & Red Light Bed',
    category: 'Cellular Regeneration',
    duration: '30 Minutes',
    description: 'Deep tissue infrared warmth penetrates muscles to promote ATP mitochondrial production, accelerate cellular repair, reduce inflammation, and enhance skin collagen.',
    benefits: ['Accelerated Muscle Recovery', 'Mitochondrial Energy Boost', 'Deep Collagen Production', 'Systemic Inflammation Reduction'],
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg'
  },
  {
    id: 'cold-plunge',
    title: '45°F Contrast Hydrotherapy Suite',
    category: 'Nervous System Reset',
    duration: '20 Minutes',
    description: 'Alternating between our 115°F eucalyptus steam vault and 45°F triple-filtered cold plunge pool to stimulate norepinephrine release, flush lactic acid, and sharpen alertness.',
    benefits: ['300% Dopamine Surge', 'Vagus Nerve Stimulation', 'Improved Vascular Tone', 'Instant Mental Clarity'],
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1784921214/samples/people/kitchen-bar.jpg'
  },
  {
    id: 'hyperbaric-oxygen',
    title: 'Hyperbaric Oxygen Chamber',
    category: 'Biohacking & Healing',
    duration: '45 Minutes',
    description: 'Relax inside a pressurized 1.5 ATA oxygen chamber, infusing high-purity oxygen directly into blood plasma to speed recovery from heavy training and brain fatigue.',
    benefits: ['Enhanced Tissue Oxygenation', 'Reduced Cognitive Fatigue', 'Accelerated Tendon Repair', 'Deep Parasympathetic Sleep'],
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_1_ckpz5a.jpg'
  },
  {
    id: 'stretch-mobility',
    title: 'Bespoke Assisted Stretch & Fascial Release',
    category: 'Mobility & Joint Health',
    duration: '50 Minutes',
    description: '1-on-1 practitioner-assisted stretching protocol targeting tight hip flexors, thoracic spine rigidity, and hamstring tension using PNF resistance techniques.',
    benefits: ['Increased Range of Motion', 'Reduced Post-Workout Soreness', 'Improved Athletic Posture', 'Joint Decompression'],
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785152285/images_1_ckpz5a.jpg'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: '1',
    title: 'The Science of Contrast Hydrotherapy: Why 45°F Plunges Elevate Executive Performance',
    category: 'Recovery',
    readTime: '6 min read',
    author: 'Julian Thorne, Director of Biohacking',
    date: 'July 18, 2026',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785064304/fKTBjaGZiCXXIiDzNzidU0KX0_xvynqn.avif',
    excerpt: 'Discover how strategic temperature modulation triggers norepinephrine release, flushes cellular metabolic waste, and fortifies mental stress resilience.',
    content: [
      'For centuries, ancient Finnish and Japanese wellness traditions recognized that exposing the human body to acute cold immediately following intense heat triggers profound physiological renewal.',
      'Modern neurobiology confirms this ancient wisdom. When you submerge in 45°F water for 3 to 5 minutes, blood vessels peripherally constrict, driving oxygenated blood into core organs. Upon exit, vasodilation floods tissues with fresh nutrients.',
      'Moreover, studies demonstrate a sustained 250% to 300% surge in synaptic dopamine lasting for hours after cold plunge therapy, granting executives effortless focus, mental calm, and mood stabilization throughout demanding workdays.'
    ]
  },
  {
    id: '2',
    title: 'Periodization for Busy Professionals: Optimizing Muscle Density in Under 4 Hours a Week',
    category: 'Training',
    readTime: '8 min read',
    author: 'Marcus Vance, Head of Performance',
    date: 'July 10, 2026',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785150987/images_1_ckpz5a.jpg',
    excerpt: 'You do not need 2 hours a day in the gym. Learn how high-yield multi-joint compound lifting with strict mechanical tension yields peak physical results.',
    content: [
      'The most common fallacy in executive fitness is confusing time spent with stimulus generated. In reality, skeletal muscle responds to mechanical tension, not arbitrary time duration.',
      'By selecting 4 primary compound exercises per session—such as trap-bar deadlifts, incline dumbbell presses, Bulgarian split squats, and weighted pull-ups—and performing them with progressive overload, 45 minutes four times per week is the ideal volume.',
      'This leaves ample recovery capacity for demanding business travel, family commitments, and stress management.'
    ]
  },
  {
    id: '3',
    title: 'Nutritional Architecture: Precision Macro Timing & Adaptogenic Recovery',
    category: 'Nutrition',
    readTime: '5 min read',
    author: 'Elena Rostova, Master Specialist',
    date: 'June 28, 2026',
    image: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151125/images_4_zi9gve.jpg',
    excerpt: 'How timing essential amino acids, tart cherry polyphenol extracts, and ashwagandha adaptogens restores glycogen and calms cortisol after sunset.',
    content: [
      'Nutritional timing acts as a hormonal orchestrator. Consuming 35 grams of fast-absorbing grass-fed whey within 30 minutes of resistance training initiates immediate muscle protein synthesis.',
      'Equally important is evening cortisol regulation. Integrating organic tart cherry concentrate and KSM-66 ashwagandha into your post-dinner elixir lowers evening core temperature and promotes deep slow-wave Delta sleep.'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Membership',
    question: 'What makes Forge Fit Athletic Club distinct from conventional luxury gyms?',
    answer: 'Forge Fit combines architectural sanctuary design with strictly capped membership numbers (preventing crowds), medical-grade biometric analysis (InBody 770, HRV tracking), world-class master coaches, private valet access, and an integrated biohacking recovery vault featuring contrast hydrotherapy and hyperbaric oxygen chambers.'
  },
  {
    id: 'faq-2',
    category: 'Membership',
    question: 'How does the capped membership policy work and is there a waitlist?',
    answer: 'To ensure zero waiting times for custom equipment, complete discretion, and an intimate sanctuary environment, total active memberships are capped. Once capacity is reached, prospective members can submit an application to join our vetted waitlist or experience the club via guest invitations.'
  },
  {
    id: 'faq-3',
    category: 'Training',
    question: 'Are private personal coaching and 3D biometric scans included?',
    answer: 'Yes. All membership tiers include monthly or bi-weekly InBody 770 3D body composition scans, HRV nervous system checks, and complimentary Master Personal Coaching sessions. Signature annual members enjoy up to 4 dedicated master coaching sessions every month.'
  },
  {
    id: 'faq-4',
    category: 'Privileges',
    question: 'Can I bring guests or business associates to the club?',
    answer: 'All members receive monthly guest privileges (2 to 4 passes per month depending on tier). Your guests enjoy complete access to the athletic arenas, eucalyptus steam vaults, cold plunges, and the Forge Fit Elixir Café.'
  },
  {
    id: 'faq-5',
    category: 'Privileges',
    question: 'What are the operating hours and valet parking arrangements?',
    answer: 'The club operates Monday through Friday from 5:00 AM to 11:00 PM, and Saturday & Sunday from 6:00 AM to 9:00 PM. Complimentary private valet parking with EV charging stations is available at our discreet private entrance.'
  },
  {
    id: 'faq-6',
    category: 'Membership',
    question: 'How can I trial the club before committing to a full membership?',
    answer: 'We offer prospective members a Complimentary Day Experience pass. This includes a private consultation, full access to our athletic zones and recovery vault, and a custom post-workout elixir at our café.'
  },
  {
    id: 'faq-7',
    category: 'Recovery',
    question: 'What biohacking and recovery amenities are in the sanctuary?',
    answer: 'Our recovery suite features 45°F triple-filtered cold plunge pools, 115°F eucalyptus steam vaults, Finnish dry cedar saunas, full-spectrum infrared red light therapy beds, Normatec 3 compression boots, hyperbaric oxygen chambers, and zero-gravity acoustic loungers.'
  },
  {
    id: 'faq-8',
    category: 'Privileges',
    question: 'What amenities and grooming services are provided in the locker suites?',
    answer: 'Our biometric smart locker suites feature Dyson Airwrap and Supersonic vanity stations, Grown Alchemist organic bodycare products, heated Italian marble floors, rainfall showers, plush Egyptian cotton robes, and complimentary overnight laundering for Signature members.'
  }
];
