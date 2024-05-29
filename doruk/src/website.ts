export interface WebsiteConfig {
  root: string;
  contact: { title: string; link: string }[];
}

export const website = {
  root: "https://doruk.dorkodu.com",
  contact: [
    {
      title: "Twitter",
      link: "https://twitter.com/dorkodu",
    },
    {
      title: "Instagram",
      link: "https://instagram.com/dorkodu",
    },
    {
      title: "GitHub",
      link: "https://github.com/dorkodu",
    },
    {
      title: "Substack",
      link: "https://dorkodu.substack.com",
    },
    {
      title: "YouTube",
      link: "https://youtube.com/@dorkodu",
    },
    {
      title: "TikTok",
      link: "https://tiktok.com/@dorkodu",
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/company/dorkodu",
    },
    {
      title: "Email",
      link: "mailto:hey@dorkodu.com",
    },
  ],
};
