import { Github, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/d0rukeray", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/d0rukeray", icon: Instagram },
  { name: "GitHub", href: "https://github.com/dorukeray", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/dorukeray", icon: Linkedin },
  { name: "Telegram", href: "https://t.me/dorukeray", icon: Send },
  { name: "Email", href: "mailto:doruk@dorkodu.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground mb-1">
              Doruk Eray
            </p>
            <p className="text-xs text-muted-foreground">
              Founder · Polymath · Craftsman
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl p-3 text-muted-foreground transition-all duration-200 hover:text-foreground no-underline"
                aria-label={link.name}
              >
                <span className="absolute inset-0 rounded-xl bg-muted/0 group-hover:bg-muted transition-colors" />
                <link.icon className="relative h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>Built with</span>
          <span className="text-foreground font-medium">React</span>
          <span>·</span>
          <span className="text-foreground font-medium">TypeScript</span>
          <span>·</span>
          <span className="animate-pulse-soft">❤️</span>
        </div>
      </div>
    </footer>
  );
}
