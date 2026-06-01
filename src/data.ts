import { FeatureItem, ClassProgram, MembershipPlan, Trainer, FAQItem } from "./types";

export const FEATURES: FeatureItem[] = [
  {
    id: "premium-equipment",
    iconName: "Dumbbell",
    title: "Olympic Equipment",
    description: "Premium biomechanically sound gear, customized Hammer Strength lifting platforms, and calibrated barbell sets."
  },
  {
    id: "expert-trainers",
    iconName: "ShieldAlert", // Adjusted to standard lucide icon names, let's use "Award"
    title: "Elite Coaching",
    description: "Certified trainers with master level nutrition, athletic biomechanics, and targeted longevity guidelines."
  },
  {
    id: "flexible-timings",
    iconName: "Clock",
    title: "Flexible Scheduling",
    description: "Open from 6:00 AM to 10:00 PM. Easily book and modify sessions using our intuitive online tracker."
  },
  {
    id: "vibrant-community",
    iconName: "Users",
    title: "Supportive Culture",
    description: "No-ego environment focusing on constructive transformation, internal health and personal breakthroughs."
  }
];

export const CLASSES_PROGRAMS: ClassProgram[] = [
  {
    id: "strength-power",
    name: "Hypertrophy & Biomechanics",
    duration: "60 mins",
    timing: "Mon / Wed / Fri at 07:00 AM",
    trainerName: "Coach Varun",
    description: "Focus on controlled muscular fatigue, posture optimization, and long-term strength architecture.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    category: "Strength"
  },
  {
    id: "metcon-hiit",
    name: "Metabolic Conditioning (MetCon)",
    duration: "45 mins",
    timing: "Tue / Thu at 06:30 PM",
    trainerName: "Coach Priya",
    description: "High intensity functional training circuits that boost cardiovascular endurance and oxygen threshold.",
    image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&w=600&q=80",
    category: "Cardio"
  },
  {
    id: "combat-boxing",
    name: "Combat Conditioning & Boxing",
    duration: "50 mins",
    timing: "Mon / Wed at 05:00 PM",
    trainerName: "Coach Vikrant",
    description: "Learn precise kickboxing combos, coordination footwork, and high-energy core burn drills.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80",
    category: "Combat"
  },
  {
    id: "power-yoga",
    name: "Vinyasa Flow & Restorative Movement",
    duration: "60 mins",
    timing: "Tue / Thu at 08:00 AM",
    trainerName: "Coach Anjali",
    description: "Spinal alignment exercises, restorative breath control, and core activation for bulletproof joints.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    category: "Mind & Body"
  },
  {
    id: "performance-agility",
    name: "Athletic Power & Footwork",
    duration: "60 mins",
    timing: "Saturdays at 09:00 AM",
    trainerName: "Coach Varun",
    description: "Explosive plyometrics, horizontal acceleration, and reactive stability to unlock pure sports agility.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=600&q=80",
    category: "High Performance" as any // Strength or Combat fallback
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "trial-membership",
    name: "Essential Trial Session",
    price: "₹0",
    billingPeriod: "1-Day complimentary pass",
    description: "Experience our premium layout firsthand. Meets standard access specifications.",
    features: [
      "Full locker access with security lock",
      "Full range strength & cardio rig access",
      "Complimentary physical biomechanics chat",
      "1 Structured group class booking"
    ],
    popular: false
  },
  {
    id: "championship-tier",
    name: "Core Transformation",
    price: "₹1,999",
    billingPeriod: "Monthly",
    description: "Most elected format for persistent performance and community training.",
    features: [
      "Unlimited access (6:00 AM to 10:00 PM)",
      "Complimentary goal setup & health mapping",
      "Full clean recovery shower facilities",
      "4 Dynamic group class bookings / month",
      "Dedicated secure device charging locker"
    ],
    popular: true,
    badge: "Most Popular"
  },
  {
    id: "peak-annual-tier",
    name: "Peak Performance Elite",
    price: "₹19,999",
    billingPeriod: "Annual",
    description: "Save big on long term commitment and unlock the highest health results.",
    features: [
      "Access to standard & high-tier clubs",
      "3 Biomonthly biomechanical evaluations",
      "Unlimited entry to all scheduled group classes",
      "Private VIP locker reservation",
      "6 Complimentary VIP guest day passes",
      "Exclusive community event VIP access"
    ],
    popular: false,
    badge: "Best Value (Save 15%)"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "trainer-varun",
    name: "Varun Sharma",
    specialty: "Strength & Power Architecture",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&h=600&q=80",
    certifications: ["CSCS *D", "ASCA Level 2 Master", "Sports Nutrition Precision Rx"],
    bio: "Varun specializes in heavy Olympic lifting posture rehabilitation and high-performance velocity preparation."
  },
  {
    id: "trainer-priya",
    name: "Priya Singh",
    specialty: "High Intensity MetCon & Body Composition",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&h=600&q=80",
    certifications: ["ACE Personal Trainer", "IKFF Certified Kettlebell", "FMS Movement Level 1"],
    bio: "Priya creates high-cadence metabolic routines that test your cardiovascular core limit while preserving joint health."
  },
  {
    id: "trainer-vikrant",
    name: "Vikrant Goel",
    specialty: "Combat Mastery & Functional Movement",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80",
    certifications: ["National Silver Kickboxing Champion", "ISSA Advanced Certified Trainer"],
    bio: "A disciplined martial athlete, Vikrant blends precise traditional ring combos with modern state core endurance."
  },
  {
    id: "trainer-anjali",
    name: "Anjali Mehta",
    specialty: "Asana Vinyasa & Core Alignment",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&h=600&q=80",
    certifications: ["RYT-500 Advanced Yoga Certified", "Dynamic Pilates Reformer Certified"],
    bio: "Anjali focuses on muscle connectivity pathways, mindfulness flow styles, and lower back postural posture recovery."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-hours",
    question: "What are the timings of Body By Inches, Sector 21A, Noida?",
    answer: "We are open Monday through Saturday from 6:00 AM to 10:00 PM. Sundays are CLOSED so our staff can rest and maintain the facility."
  },
  {
    id: "faq-trial",
    question: "How can I book my free trial pass?",
    answer: "You can book using our online form under the Member section, or simply click the WhatsApp floating badge at any time. We will arrange a convenient time with one of our certified trainers for you."
  },
  {
    id: "faq-freeze",
    question: "Can I freeze my membership if I am traveling?",
    answer: "Yes, members can freeze their plan once per calendar year for up to 30 days without any penalty or additional fee. Simply request a freeze form at the reception desk."
  },
  {
    id: "faq-amenities",
    question: "Does the gym offer changing rooms and showers?",
    answer: "Absolutely. We offer high-contrast premium separate locker rooms for men and women, equipped with hot showers, fresh vanity utilities, secure personal key lockers, and device charging units."
  },
  {
    id: "faq-diet",
    question: "Do membership packages include meal guides or diet plans?",
    answer: "Our 'Core Transformation' and 'Peak Performance' memberships come with a personalized nutritional assessment. Detail-oriented meal plans and macro-tracking guides are managed alongside training schedules."
  }
];
