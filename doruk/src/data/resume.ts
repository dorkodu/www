export interface WorkExperience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const workExperience: WorkExperience[] = [
  {
    title: "Founder & Chief",
    company: "Dorkodu",
    companyUrl: "https://dorkodu.com",
    location: "Istanbul, TR",
    period: "Mar 2019 – Present",
    description: "We build social & gamified apps and open-source tech focusing on decentralized web and crypto.",
    highlights: [
      "Built Wanderia – launchpad for decentralized & community-driven startups",
      "Built Trekie – gamified life dashboard with AI productivity companion",
      "Led product development, UI/UX design, and engineering",
      "Managed open source projects and developer community",
    ],
  },
  {
    title: "Tech Lead, Developer",
    company: "Underworld",
    location: "Remote, Belgium",
    period: "Feb 2024 – Nov 2025",
    description: "Built Necrovault, a superapp for NFTs communities, with marketplace, raffles, quests, auction features.",
    highlights: [
      "Launched 29 communities, scaled to +10k DAUs",
      "Built custom indexer for DAO and chains",
      "Implemented social logins and wallet integrations",
    ],
  },
  {
    title: "Software Engineer, Web",
    company: "Stargaze",
    location: "Remote, NYC",
    period: "Apr 2024 – Dec 2024",
    description: "Built the soft-staking platform (discontinued) of Stargaze network backed & governed by its DAO.",
    highlights: [
      "Developed onchain contracts and native support",
      "Integrated Injective and Polygon networks",
    ],
  },
  {
    title: "Applied Researcher",
    company: "Fission",
    location: "Remote, Canada",
    period: "Aug 2023 – May 2024",
    description: "Built decentralized web experiments involving identity, data and compute.",
    highlights: [
      "Developed protocols and libraries with p2p networking, encryption, auth, orchestration",
      "Worked with IPFS, IPLD, IPVM, Libp2p, Nostr, ATProto, Webnative SDK, UCAN, EverywhereComputer",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "BA, Educational Science",
    institution: "Boğaziçi University",
    institutionUrl: "https://boun.edu.tr",
    location: "Istanbul, Turkey",
    period: "2023 – Present",
    gpa: "3.16",
  },
  {
    degree: "High School",
    institution: "Vefa Lisesi",
    location: "Istanbul, Turkey",
    period: "2018 – 2023",
    gpa: "3.85",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "HTML", "CSS", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "Zustand", "TanStack Router", "TanStack Query"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Bun", "Express", "PostgreSQL", "Redis", "IPFS"],
  },
  {
    name: "Web3",
    skills: ["Ethereum", "Solidity", "Injective", "Polygon", "UCAN", "Libp2p"],
  },
  {
    name: "DevOps",
    skills: ["Linux", "Docker", "Nginx", "Git", "GitHub Actions", "Cloudflare"],
  },
  {
    name: "Design & Business",
    skills: ["Graphic Design", "Product Management", "Prototyping", "Gamification", "Marketing"],
  },
];

export const languages = [
  { name: "English", level: "Professional (C2)" },
  { name: "Turkish", level: "Native" },
];

export const interests = [
  "Software Engineering",
  "Music & Songwriting",
  "Artificial Intelligence",
  "Cognitive Science",
  "Philosophy",
  "Gamification",
  "Decentralized Web",
  "Industrial Design",
  "Cryptoeconomics",
];

export const achievements = [
  "Won awards at several national software contests, hackathons, student fairs",
  "Bootstrapped startups & side-hustles with friends since high school",
  "Learned management & organization with major roles in student clubs",
];
