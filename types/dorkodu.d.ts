export interface WorkRole {
  title: string;
  domain: string;
  tags: string[];
  summary?: string;
  location: string;
  type: string;
  responsibility?: string[];
  requirements?: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  about?: string;
  avatar?: string;
  icons?: string[];
}

export interface Project {
  title: string;
  tagline?: string;
  description?: string;
  type?: string;
  image?: string;
  link?: string;
}
