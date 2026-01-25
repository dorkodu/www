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
    location: "Istanbul, Turkey",
    period: "2019 – Present",
    description: "Leading the development of social & gamified products and open source technology.",
    highlights: [
      "Designed and built multiple web applications from scratch",
      "Led product development and UI/UX design",
      "Managed open source projects and community",
      "Built and maintained scalable infrastructure",
    ],
  },
  {
    title: "Software Engineer",
    company: "Freelance",
    location: "Remote",
    period: "2018 – 2019",
    description: "Worked on various web development projects for clients worldwide.",
    highlights: [
      "Built custom web applications and APIs",
      "Implemented responsive designs and UI components",
      "Collaborated with international clients",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Undergraduate Student",
    institution: "Boğaziçi University",
    institutionUrl: "https://boun.edu.tr",
    location: "Istanbul, Turkey",
    period: "2023 – Present",
    description: "Pursuing studies in Cognitive Science and related fields.",
  },
  {
    degree: "High School Diploma",
    institution: "Vefa Lisesi",
    location: "Istanbul, Turkey",
    period: "2019 – 2023",
    description: "Historical and well-established high school. Focused on Computer Science, Philosophy, and Industrial Design.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "PHP", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "Zustand", "TanStack Router", "TanStack Query"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Bun", "Express", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    name: "DevOps",
    skills: ["Linux", "Docker", "Nginx", "Git", "GitHub Actions", "Cloudflare"],
  },
  {
    name: "Design",
    skills: ["UI/UX Design", "Product Design", "Figma", "Industrial Design"],
  },
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
