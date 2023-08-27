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
    role: "Founder & Chief",
    description: `
      I founded Dorkodu to create social & gamified productivity apps, 
      also build open-source technology on decentralized web, semantic data, cryptoeconomics.
    `,
    timeFrame: "June 2018 – Present",
    location: "Istanbul, TR",
    link: {
      text: "dorkodu.com",
      to: "https://dorkodu.com",
    },
    tags: [
      "Software Engineering (Web)",
      "UI/UX Design",
      "Graphics",
      "Business",
      "Product Management",
      "Marketing",
      "Social Media",
    ],
  },
];

export const education: IEducation[] = [
  {
    place: "Boğaziçi University",
    role: "BA, Primary Education",
    timeFrame: "2023 – Present",
    status: "Freshman",
    image: "/images/logo-bogazici.png",
  },
  {
    place: "Vefa Lisesi",
    role: "High School",
    timeFrame: "2018 – 2023",
    status: "3.85/4.0 GPA",
    image: "/images/logo-vefa.png",
  },
];

export const projects: IProject[] = [
  {
    title: "Wander",
    tagline: "Decentralized Knowledge Protocol",
    description: <></>,
    links: [
      { text: "GitHub", to: "https://github.com/dorkodu/protocol" },
      { text: "Docs", to: "https://wander.dorkodu.com" },
    ],
    workList: [
      "Designed and wrote specifications/docs.",
      "Open source maintainer.",
      "Built all-in-one SDK in TypeScript.",
      "P2P Sync.",
      "Local-first offline PWA framework.",
      "Published package to NPM.",
      "Deployed on a self-hosted server.",
    ],
    tags: ["TypeScript", "Node.js", "Zustand", "Postgres", "Nginx", "Docker"],
  },
  {
    title: "Mindgarden",
    tagline: "Social & Gamified Note-taking App",
    description: <></>,
    links: [
      { text: "GitHub", to: "https://github.com/dorkodu/mindgarden" },
      { text: "Website", to: "https://mind.dorkodu.com" },
    ],
    workList: [
      "Applied gamification features on UX",
      "Implemented a Decentralized Local-Network Sync",
      "Created a unique Recommendation Algorithm on the “Discover” Page",
      "Created a new Markup Language",
      "Built Collaborative Block-based Editor",
      "Responsive/Adaptive UI Design ",
      "Deployed on a self-hosted server.",
    ],
    tags: [
      "TypeScript",
      "React",
      "NodeJS",
      "Zustand",
      "Mantine UI",
      "i18next",
      "Postgres",
      "Nginx",
      "Docker",
    ],
  },
];
