export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: "product" | "opensource";
  url?: string;
  github?: string;
  tech: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // Products
  {
    id: "dorkodu",
    name: "Dorkodu",
    tagline: "Humane Technology Company",
    description: "Social & gamified products and open source technology to liberate the humankind. Building the future of digital well-being.",
    type: "product",
    url: "https://dorkodu.com",
    github: "https://github.com/dorkodu",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    id: "wanderlust",
    name: "Wanderlust",
    tagline: "Gamified Life Experience Platform",
    description: "A platform to track, gamify and share your life experiences. Turn your daily adventures into achievements.",
    type: "product",
    url: "https://wanderlust.dorkodu.com",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "terraspark",
    name: "Terraspark",
    tagline: "Music & Art Project",
    description: "Original songs, guitar performances and artistic expressions. Where creativity meets technology.",
    type: "product",
    url: "https://instagram.com/theterraspark",
    tech: ["Music Production", "Guitar", "Songwriting"],
    featured: true,
  },

  // Open Source
  {
    id: "trekie",
    name: "Trekie",
    tagline: "Type-safe Backend Framework",
    description: "A minimalist, type-safe backend framework for building APIs with TypeScript. Zero runtime dependencies.",
    type: "opensource",
    github: "https://github.com/dorkodu/trekie",
    tech: ["TypeScript", "Node.js", "Bun"],
  },
  {
    id: "prense",
    name: "Prense",
    tagline: "State Management Library",
    description: "Lightweight state management for React applications. Simple, predictable, and efficient.",
    type: "opensource",
    github: "https://github.com/dorkodu/prense",
    tech: ["TypeScript", "React"],
  },
  {
    id: "sage",
    name: "Sage",
    tagline: "API Client Generator",
    description: "Generate type-safe API clients from OpenAPI specifications. Full TypeScript support.",
    type: "opensource",
    github: "https://github.com/dorkodu/sage",
    tech: ["TypeScript", "OpenAPI"],
  },
  {
    id: "lords",
    name: "Lords",
    tagline: "Next-gen Browser Game",
    description: "A strategic browser-based multiplayer game. Build your kingdom and conquer the realm.",
    type: "opensource",
    github: "https://github.com/dorkodu/lords",
    tech: ["TypeScript", "React", "WebSocket"],
  },
  {
    id: "wander",
    name: "Wander",
    tagline: "Location-based SDK",
    description: "SDK for building location-aware applications. Geofencing, tracking, and more.",
    type: "opensource",
    github: "https://github.com/dorkodu/wander",
    tech: ["TypeScript", "Geolocation API"],
  },
];
