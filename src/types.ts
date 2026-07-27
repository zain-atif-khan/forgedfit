export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface FloatingBadge {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface JourneyStep {
  step: number;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: 'athletic' | 'wellness' | 'private' | 'culinary';
  sqft: string;
  description: string;
  image: string;
  features: string[];
  equipmentHighlights: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  intensity: 'Balanced' | 'High Performance' | 'Elite';
  summary: string;
  targetAudience: string;
  schedule: string;
  keyFocus: string[];
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  certifications: string[];
  specialization: string;
  bio: string;
  quote: string;
  clientSuccess: string;
}

export interface Transformation {
  id: string;
  name: string;
  title: string;
  duration: string;
  bodyFatChange: string;
  muscleGain: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
  story: string;
  programUsed: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  buttonText: string;
}

export interface WellnessService {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership' | 'Training' | 'Recovery' | 'Privileges';
}

export interface ExperienceBookingData {
  fullName: string;
  email: string;
  phone: string;
  visitDate: string;
  visitTime: string;
  primaryGoal: string;
  experienceType: string;
  specialNotes?: string;
}
