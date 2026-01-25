import type { LucideIcon } from "lucide-react";
import { Github, Globe, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { name: "Twitter", href: "https://twitter.com/d0rukeray", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/d0rukeray", icon: Instagram },
  { name: "GitHub", href: "https://github.com/dorukeray", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/dorukeray", icon: Linkedin },
  { name: "Telegram", href: "https://t.me/dorukeray", icon: Send },
  { name: "Dorkodu", href: "https://dorkodu.com", icon: Globe },
  { name: "Email", href: "mailto:doruk@dorkodu.com", icon: Mail },
];
