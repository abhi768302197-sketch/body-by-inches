export interface ClassProgram {
  id: string;
  name: string;
  duration: string;
  timing: string;
  trainerName: string;
  description: string;
  image: string;
  category: "Strength" | "Cardio" | "Mind & Body" | "Combat" | "Custom";
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  certifications: string[];
  bio: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  popular: boolean;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  iconName: string; // Used to look up the Lucide Icon
  title: string;
  description: string;
}
