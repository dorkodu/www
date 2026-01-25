import { ScrollReveal, SpotlightCard, TiltCard } from "@/components/ui/animated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Coffee,
  ExternalLink,
  Flame,
  Gamepad2,
  GraduationCap,
  MapPin,
  MousePointer2,
  Rocket,
  Sparkles,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <InANutshell />
      <FeaturedProjects />
      <Interests />
    </div>
  );
}

// ============================================
// CREATIVE HERO SECTION
// ============================================

function Hero() {
  const roles = ["Founder", "Designer", "Engineer", "Polymath"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="absolute inset-0 bg-background" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-cta/10 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-link/10 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-[20%] left-[15%] w-4 h-4 rounded-full bg-cta/30 animate-float" />
      <div className="absolute top-[60%] left-[8%] w-3 h-3 rounded-full bg-link/30 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-[30%] right-[12%] w-6 h-6 rounded-full border-2 border-cta/20 animate-float" style={{ animationDelay: "-1s" }} />
      <div className="absolute bottom-[25%] right-[20%] w-4 h-4 rotate-45 bg-link/20 animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[70%] right-[8%] w-2 h-2 rounded-full bg-amber-500/30 animate-float" style={{ animationDelay: "-4s" }} />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* ===== LEFT: Content ===== */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Status badge */}
            <ScrollReveal direction="up" delay={0}>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
                </span>
                Available for opportunities
              </Badge>
            </ScrollReveal>

            {/* Name with gradient */}
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="block">Doruk</span>
                <span className="block bg-gradient-to-r from-cta via-link to-purple-500 bg-clip-text text-transparent">
                  Eray
                </span>
              </h1>
            </ScrollReveal>

            {/* Animated role */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex items-center gap-3 text-xl md:text-2xl">
                <span className="text-muted-foreground">I'm a</span>
                <span
                  className={`font-bold text-foreground transition-all duration-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                >
                  {roles[roleIndex]}
                </span>
                <span className="w-0.5 h-6 bg-cta animate-pulse" />
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I design products and build software at{" "}
                <a
                  href="https://dorkodu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-cta inline-flex items-center gap-1 transition-colors group"
                >
                  Dorkodu
                  <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                . Pursuing my mission to liberate humankind with meaningful technology.
              </p>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {socialLinks.slice(0, 5).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative h-11 w-11 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-lg no-underline"
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <div className="h-6 w-px bg-border" />
                <span className="text-sm text-muted-foreground">Let's connect</span>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={500}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="group h-14 px-8 text-base bg-foreground text-background hover:bg-foreground/90 rounded-xl">
                  <Link to="/portfolio" className="no-underline">
                    View Portfolio
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base rounded-xl border-2 hover:bg-muted">
                  <Link to="/resume" className="no-underline">Resume</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Scroll indicator */}
            <ScrollReveal direction="up" delay={700}>
              <div className="flex items-center gap-3 pt-8 text-sm text-muted-foreground">
                <MousePointer2 className="h-4 w-4 animate-bounce" />
                <span>Scroll to explore</span>
              </div>
            </ScrollReveal>
          </div>

          {/* ===== RIGHT: Creative Visual ===== */}
          <ScrollReveal direction="left" delay={400} className="order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end">
              {/* Orbiting rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-border/30 animate-spin" style={{ animationDuration: "60s" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cta/50" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-dashed border-border/20 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-link/50" />
                </div>
              </div>

              {/* Main photo placeholder */}
              <TiltCard tiltMax={10} scale={1.02} glare className="relative z-10 rounded-3xl">
                <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-3xl bg-gradient-to-br from-muted via-muted/50 to-muted/30 backdrop-blur-sm flex items-center justify-center border border-border/50 shadow-2xl overflow-hidden">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <span className="text-sm text-muted-foreground">Photo</span>
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cta/50 rounded-tl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-link/50 rounded-br-lg" />
                </div>
              </TiltCard>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 md:top-0 md:-right-8 z-20">
                <TiltCard tiltMax={15} className="rounded-xl">
                  <div className="px-4 py-3 rounded-xl bg-card border border-border shadow-lg">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium">8+ years exp</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              <div className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-12 z-20">
                <TiltCard tiltMax={15} className="rounded-xl">
                  <div className="px-4 py-3 rounded-xl bg-card border border-border shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cta" />
                      <span className="text-sm font-medium">Istanbul</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CREATIVE "IN A NUTSHELL" SECTION
// ============================================

function InANutshell() {
  return (
    <section className="relative border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cta/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-link/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Overview
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">In a nutshell</h2>
            <p className="text-muted-foreground max-w-md mx-auto">The quick rundown on who I am and what I do.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <ScrollReveal delay={0} className="md:col-span-7 md:row-span-2">
            <CurrentlyBuildingCard />
          </ScrollReveal>
          <ScrollReveal delay={100} className="md:col-span-5">
            <ExperienceCard />
          </ScrollReveal>
          <ScrollReveal delay={200} className="md:col-span-5">
            <LocationCard />
          </ScrollReveal>
          <ScrollReveal delay={300} className="md:col-span-6">
            <TerminalCard />
          </ScrollReveal>
          <ScrollReveal delay={400} className="md:col-span-6">
            <EducationCard />
          </ScrollReveal>
          <ScrollReveal delay={500} className="md:col-span-4">
            <StatusCard />
          </ScrollReveal>
          <ScrollReveal delay={600} className="md:col-span-4">
            <QuestCard />
          </ScrollReveal>
          <ScrollReveal delay={700} className="md:col-span-4">
            <FuelCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CurrentlyBuildingCard() {
  return (
    <TiltCard tiltMax={3} scale={1.01} className="h-full rounded-3xl">
      <SpotlightCard
        className="group h-full min-h-[320px] rounded-3xl border border-cta/20 bg-gradient-to-br from-cta/10 via-card to-card backdrop-blur-sm p-8 flex flex-col overflow-hidden relative"
        spotlightColor="16, 185, 129"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cta/20 rounded-full blur-3xl group-hover:bg-cta/30 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cta/10 rounded-full blur-2xl" />

        <div className="absolute top-8 right-8 w-24 h-24">
          <div className="absolute inset-0 rounded-full border border-cta/20 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-2 rounded-full border border-cta/30 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
          <div className="absolute inset-4 rounded-full bg-cta/10 flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-cta" />
          </div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="cta" className="px-3 py-1">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
              </span>
              Currently Building
            </Badge>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Founder & Chief</h3>
          <p className="text-xl text-cta font-semibold mb-4">@ Dorkodu</p>

          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            Leading the team, designing products, and building software. We create social & gamified products
            and open source technology to empower individuals worldwide.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://dorkodu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta-hover transition-colors group/link"
            >
              <span>Visit Dorkodu</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}

function ExperienceCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= 8) {
            clearInterval(interval);
            return 8;
          }
          return prev + 1;
        });
      }, 150);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TiltCard tiltMax={6} scale={1.02} className="h-full rounded-3xl">
      <SpotlightCard
        className="h-full min-h-[150px] rounded-3xl border border-link/20 bg-gradient-to-br from-link/10 via-card to-card backdrop-blur-sm p-6 flex flex-col justify-center relative overflow-hidden"
        spotlightColor="14, 165, 233"
      >
        <div className="absolute top-4 right-4 w-16 h-16">
          <div className="absolute inset-0 rounded-full border border-dashed border-link/30 animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-link/50" />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Code2 className="h-5 w-5 text-link" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Experience</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl md:text-6xl font-black text-foreground tabular-nums">{count}</span>
          <span className="text-2xl font-bold text-link">+</span>
        </div>
        <div className="text-sm text-muted-foreground mt-1">Years building for the web</div>
      </SpotlightCard>
    </TiltCard>
  );
}

function LocationCard() {
  return (
    <TiltCard tiltMax={6} scale={1.02} className="h-full rounded-3xl">
      <SpotlightCard
        className="h-full min-h-[150px] rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 flex items-center gap-5 relative overflow-hidden"
        spotlightColor="250, 250, 250"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-foreground/50 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-24 h-24 border border-foreground/30 rounded-full" />
          <div className="absolute top-[40%] left-[40%] w-8 h-8 border border-foreground/20 rounded-full" />
        </div>

        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0">
          <MapPin className="h-7 w-7 text-amber-500" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-card" />
        </div>
        <div className="relative">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Based in</div>
          <div className="font-bold text-xl text-foreground">Istanbul, Turkey</div>
          <div className="text-sm text-muted-foreground">🌍 Open to remote</div>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}

function TerminalCard() {
  const [text, setText] = useState("");
  const fullText = "npx create-dorkodu-app my-project";

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= fullText.length) {
          setText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TiltCard tiltMax={4} scale={1.01} className="h-full rounded-3xl">
      <div className="h-full min-h-[160px] rounded-3xl border border-border/50 bg-[#1a1a1a] overflow-hidden font-mono text-sm">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-[#666] ml-2">~/projects</span>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-cta">❯</span>
            <span className="text-[#e0e0e0]">{text}</span>
            <span className="w-2 h-5 bg-cta/70 animate-pulse" />
          </div>
          <div className="text-[#666] text-xs pt-2">
            <div>TypeScript • React • Node.js • Go</div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function EducationCard() {
  return (
    <TiltCard tiltMax={5} scale={1.02} className="h-full rounded-3xl">
      <SpotlightCard
        className="h-full min-h-[160px] rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-card to-card backdrop-blur-sm p-6 flex items-center gap-5 relative overflow-hidden"
        spotlightColor="168, 85, 247"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center shrink-0 relative">
          <GraduationCap className="h-8 w-8 text-purple-500" />
          <div className="absolute -top-1 -right-1 text-xl">🎓</div>
        </div>
        <div>
          <div className="font-bold text-lg text-foreground">Boğaziçi University</div>
          <div className="text-sm text-purple-400 font-medium">Cognitive Science</div>
          <div className="text-sm text-muted-foreground mt-1">Vefa Lisesi Graduate • Istanbul</div>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}

function StatusCard() {
  const statuses = [
    { emoji: "🎮", text: "Gaming" },
    { emoji: "🎸", text: "Music" },
    { emoji: "📚", text: "Reading" },
  ];

  return (
    <TiltCard tiltMax={6} scale={1.02} className="h-full rounded-3xl">
      <SpotlightCard
        className="h-full min-h-[140px] rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-card to-card backdrop-blur-sm p-5 relative overflow-hidden"
        spotlightColor="236, 72, 153"
      >
        <div className="flex items-center gap-2 mb-3">
          <Gamepad2 className="h-4 w-4 text-pink-500" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Also Into</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <div
              key={status.text}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/10 text-sm"
            >
              <span>{status.emoji}</span>
              <span className="text-foreground">{status.text}</span>
            </div>
          ))}
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}

function QuestCard() {
  return (
    <TiltCard tiltMax={6} scale={1.02} className="h-full rounded-3xl">
      <SpotlightCard
        className="h-full min-h-[140px] rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-card to-card backdrop-blur-sm p-5 relative overflow-hidden"
        spotlightColor="245, 158, 11"
      >
        <div className="absolute top-3 right-3">
          <Rocket className="h-5 w-5 text-amber-500 animate-bounce" style={{ animationDuration: "2s" }} />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Flame className="h-4 w-4 text-amber-500" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Mission</span>
        </div>
        <div className="font-semibold text-foreground text-sm leading-relaxed">
          Liberate humankind with meaningful technology
        </div>
        <div className="flex gap-1.5 mt-3">
          <Badge variant="secondary" className="text-xs">AI</Badge>
          <Badge variant="secondary" className="text-xs">Education</Badge>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}

function FuelCard() {
  return (
    <TiltCard tiltMax={6} scale={1.02} className="h-full rounded-3xl">
      <SpotlightCard
        className="h-full min-h-[140px] rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 relative overflow-hidden"
        spotlightColor="139, 92, 246"
      >
        <div className="flex items-center gap-2 mb-3">
          <Coffee className="h-4 w-4 text-amber-600" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Fuel</span>
        </div>

        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-lg">☕</span>
          ))}
          <span className="text-lg opacity-30">☕</span>
          <span className="text-lg opacity-30">☕</span>
        </div>
        <div className="text-xs text-muted-foreground">3/5 coffees today</div>
        <div className="text-xs text-amber-600 mt-1">+ unlimited curiosity</div>
      </SpotlightCard>
    </TiltCard>
  );
}

// ============================================
// FEATURED PROJECTS
// ============================================

function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="relative border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Selected Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex group">
              <Link to="/portfolio" className="no-underline">
                View all projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <TiltCard tiltMax={6} scale={1.02} glare className="h-full rounded-2xl">
                <a
                  href={project.url || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:border-border no-underline card-shine"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg text-foreground">{project.name}</h3>
                    <Badge variant="ghost" className="text-xs">
                      {project.type === "product" ? "Product" : "OSS"}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-link mb-2">{project.tagline}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-6 right-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/portfolio" className="no-underline">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// INTERESTS
// ============================================

function Interests() {
  const interests = [
    { name: "Software", emoji: "💻" },
    { name: "Music", emoji: "🎸" },
    { name: "AI", emoji: "🤖" },
    { name: "Cognitive Science", emoji: "🧠" },
    { name: "Philosophy", emoji: "📚" },
    { name: "UI/UX Design", emoji: "🎨" },
    { name: "Gamification", emoji: "🎮" },
    { name: "Cryptoeconomics", emoji: "🔐" },
    { name: "Decentralized Web", emoji: "🌐" },
    { name: "Industrial Design", emoji: "⚙️" },
  ];

  return (
    <section className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 gradient-radial opacity-30" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Passions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Things I Love</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <Badge
                key={interest.name}
                variant="secondary"
                className="text-sm py-2.5 px-5 hover:scale-105 hover:shadow-md transition-all cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="mr-2 text-base">{interest.emoji}</span>
                {interest.name}
              </Badge>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
