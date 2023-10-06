export interface IWorkExperience {
  company: string;
  link: {
    text: string;
    to: string;
  };

  role: string;
  description: React.ReactNode;

  timeFrame: string;
  location: string;

  tags: string[];
}

export interface IProject {
  title: string;
  tagline: string;
  description: React.ReactNode;
  links: { text: string; to: string }[];
  workList: string[];
  tags: string[];
}

export interface IEducation {
  place: string;
  role: string;
  status: string;
  timeFrame: string;
  image: string;
}

export const experience: IWorkExperience[] = [
  {
    company: "Dorkodu",
    role: "Co-Founder & Chief Technologist",
    description: `
      I co-founded Dorkodu to create social & gamified productivity apps, 
      also build open-source technology on decentralized web, semantic data, cryptoeconomics.
    `,
    timeFrame: "June 2018 – Present",
    location: "Istanbul, TR",
    link: {
      text: "dorkodu.com",
      to: "https://dorkodu.com",
    },
    tags: [
      "Software Engineering",
      "UI/UX Design",
      "Business",
      "Product Management",
      "Systems Management",
      "Marketing",
      "Social Media",
    ],
  },
];

export const education: IEducation[] = [
  {
    place: "Istanbul University",
    role: "BA, Linguistics",
    timeFrame: "2023 – Present",
    status: "Freshman",
    image: "/images/logo-istanbul.png",
  },
  {
    place: "Vefa Lisesi",
    role: "High School",
    timeFrame: "2018 – 2023",
    status: "3.75/4.0 GPA",
    image: "/images/logo-vefa.png",
  },
];

export const projects: IProject[] = [
  {
    title: "Sage",
    tagline: "Data Exchange Protocol",
    description: <></>,
    links: [
      { text: "GitHub", to: "https://github.com/dorkodu/sage" },
      { text: "Docs", to: "https://github.com/dorkodu/sage/blob/master/DOCS.md" },
    ],
    workList: [
      "Designed and wrote specifications/docs",
      "Open source maintainer",
      "Built all-in-one library in TypeScript",
      "Published package to NPM",
      "Used in Dorkodu ID and Dorkodu Forum",
      "Build & consume fully typesafe APIs",
    ],
    tags: ["TypeScript"],
  },
  {
    title: "Dorkodu ID",
    tagline: "Digital Identity Service For Auth & SSO",
    description: <></>,
    links: [
      { text: "Website", to: "https://id.dorkodu.com" },
      { text: "GitHub", to: "https://github.com/dorkodu/id" },
    ],
    workList: [
      "Self-hosted mail server to cut costs",
      "Secure auth system using bcrypt & SHA256",
      "Localization & auto language detection",
      "Migrations to upgrade production database's schema",
      "Responsive layout for both mobile & desktop",
    ],
    tags: ["TypeScript", "React", "Mantine UI", "Zustand", "i18next", "Node.js", "Postgres", "Docker", "Nginx"],
  },
  {
    title: "Dorkodu Forum",
    tagline: "Social Discourse Platform",
    description: <></>,
    links: [
      { text: "Website", to: "https://forum.dorkodu.com" },
      { text: "GitHub", to: "https://github.com/dorkodu/forum" },
    ],
    workList: [
      "Used Dorkodu ID for authentication & authorization",
      "Dynamic web rendering framework for SEO & link previews",
      "Migrated database from Postgres 14 to 15",
      "Tested with +1000 users in real-time",
      "Automated database migrations and deployment",
      "Published package to NPM.",
    ],
    tags: ["TypeScript", "React", "Mantine UI", "Zustand", "i18next", "Node.js", "Postgres", "Docker", "Nginx"],
  },
  {
    title: "Lords and Lands",
    tagline: "Multiplayer Strategy Game",
    description: <></>,
    links: [
      { text: "Website", to: "https://lordsandlands.dorkodu.com" },
      { text: "GitHub", to: "https://github.com/dorkodu/lordsandlands" },
    ],
    workList: [
      "Fail-safe lobby system for up to 4 players",
      "Reduced network usage by deterministic simulation",
      "Offline-first capabilities with PWA",
      "Developed AI Bot players to play against",
      "Many iterations for best experience and ease-of-learning",
      "Invented algorithm for procedural map generation",
    ],
    tags: ["TypeScript", "React", "Mantine UI", "Zustand", "Node.js", "WebSockets", "Socket.IO", "Docker", "Nginx"],
  },
  {
    title: "SwipeQuest",
    tagline: "Active Swiper Game",
    description: <></>,
    links: [
      { text: "Website", to: "https://swipequest.dorkodu.com" },
      { text: "GitHub", to: "https://github.com/dorkodu/swipe-quest" },
    ],
    workList: [
      "Finished prototype in less than a week",
      "Fight with enemies & get rewards",
      "Progress through the campaign or climb the tower",
      "Upgrade monsters using alter & items in blacksmith",
      "Buy things from the store & complete daily missions",
      "Rebirth and keep playing endlessly",
      "Your favourite active (not idle) swiper (yes, not clicker) game"
    ],
    tags: ["TypeScript", "React", "Mantine UI", "Zustand"],
  },
];
