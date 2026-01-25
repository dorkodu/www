import { ScrollReveal, TiltCard } from "@/components/ui/animated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import { Briefcase, Code, Download, GraduationCap, Heart, Mail, MapPin, Sparkles, Star } from "lucide-react";

export function ResumePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cta/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-link/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <Badge variant="outline" className="mb-4"><Sparkles className="h-3 w-3 mr-1" />Resume</Badge>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                <span className="block">Doruk</span>
                <span className="block bg-gradient-to-r from-cta via-link to-purple-500 bg-clip-text text-transparent">Eray</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">Founder · Designer · Engineer</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />Istanbul, Turkey</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" />doruk@dorkodu.com</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="cta" size="lg" className="group"><Download className="h-4 w-4 mr-2" />Download PDF</Button>
              <div className="flex gap-2">
                {socialLinks.slice(0, 4).map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors no-underline">
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Summary */}
        <ScrollReveal delay={100} className="mb-16">
          <TiltCard tiltMax={3} className="rounded-2xl">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><Star className="h-5 w-5 text-amber-500" />Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founder and Chief at Dorkodu with 8+ years of experience in product design and software development.
                I specialize in building gamified social products and open source technology. Currently studying
                Cognitive Science at Boğaziçi University, combining insights from psychology, philosophy, and AI.
              </p>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal delay={200} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-cta/10 flex items-center justify-center"><Briefcase className="h-5 w-5 text-cta" /></div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            <ExperienceCard title="Founder & Chief" company="Dorkodu" period="2017 – Present" description="Leading product design, engineering, and team operations. Built social and gamified products serving users worldwide. Created open source tools and libraries for the developer community." highlights={["Product Design & Strategy", "Full-Stack Development", "Team Leadership"]} />
            <ExperienceCard title="Software Engineer" company="Freelance" period="2015 – 2017" description="Developed web applications and websites for various clients. Gained foundational experience in modern web technologies." highlights={["Web Development", "Client Projects", "UI/UX Design"]} />
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={300} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center"><GraduationCap className="h-5 w-5 text-purple-500" /></div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            <EducationCard school="Boğaziçi University" degree="Cognitive Science" period="2022 – Present" />
            <EducationCard school="Vefa Lisesi" degree="High School" period="2018 – 2022" />
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal delay={400} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-link/10 flex items-center justify-center"><Code className="h-5 w-5 text-link" /></div>
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["TypeScript", "React", "Node.js", "Go", "UI/UX Design", "Product Strategy", "PostgreSQL", "System Design"].map((skill) => (
              <Badge key={skill} variant="secondary" className="justify-center py-2.5 text-sm">{skill}</Badge>
            ))}
          </div>
        </ScrollReveal>

        {/* Interests */}
        <ScrollReveal delay={500}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-pink-500/10 flex items-center justify-center"><Heart className="h-5 w-5 text-pink-500" /></div>
            <h2 className="text-2xl font-bold">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Cognitive Science", "AI", "Philosophy", "Music", "Gaming", "Decentralized Web"].map((interest) => (
              <Badge key={interest} variant="outline" className="py-2 px-4">{interest}</Badge>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, description, highlights }: { title: string; company: string; period: string; description: string; highlights: string[] }) {
  return (
    <TiltCard tiltMax={3} className="rounded-2xl">
      <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-cta font-medium">{company}</p>
          </div>
          <Badge variant="secondary">{period}</Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => <Badge key={h} variant="outline" className="text-xs">{h}</Badge>)}
        </div>
      </div>
    </TiltCard>
  );
}

function EducationCard({ school, degree, period }: { school: string; degree: string; period: string }) {
  return (
    <div className="p-5 rounded-xl border border-border/50 bg-card/50 flex items-center justify-between">
      <div>
        <h3 className="font-bold">{school}</h3>
        <p className="text-sm text-purple-400">{degree}</p>
      </div>
      <Badge variant="secondary">{period}</Badge>
    </div>
  );
}
