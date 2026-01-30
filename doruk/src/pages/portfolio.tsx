import { ScrollReveal, TiltCard } from "@/components/ui/animated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { Activity, ArrowUpRight, Code, ExternalLink, GitFork, Github, Layers, Rocket, Sparkles, Star, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export function PortfolioPage() {
  const products = projects.filter((p) => p.type === "product");
  const opensource = projects.filter((p) => p.type === "opensource");

  return (
    <div className="relative">
      <PortfolioHero />
      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <section className="mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta to-cta/50 flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-background flex items-center justify-center text-xs">{products.length}</div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
                <p className="text-muted-foreground">Shipped to the world</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 80}><ProjectCard project={project} /></ScrollReveal>
            ))}
          </div>
        </section>
        <section className="mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-link to-link/50 flex items-center justify-center">
                  <Code className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-background flex items-center justify-center text-xs">{opensource.length}</div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Open Source</h2>
                <p className="text-muted-foreground">Free software for the community</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opensource.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 80}><ProjectCard project={project} variant="opensource" /></ScrollReveal>
            ))}
          </div>
        </section>
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-foreground to-foreground/50 flex items-center justify-center">
                <Github className="h-7 w-7 text-background" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">GitHub Activity</h2>
                <p className="text-muted-foreground">Contributions and code</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}><GitHubActivity /></ScrollReveal>
        </section>
      </div>
    </div>
  );
}

function PortfolioHero() {
  const [projectCount, setProjectCount] = useState(0);
  useEffect(() => {
    const target = projects.length;
    let count = 0;
    const interval = setInterval(() => {
      if (count >= target) { clearInterval(interval); return; }
      count++;
      setProjectCount(count);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cta/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-link/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <ScrollReveal><Badge variant="outline" className="mb-6"><Layers className="h-3 w-3 mr-1" />Work & Projects</Badge></ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                <span className="block">My</span>
                <span className="block bg-gradient-to-r from-cta via-link to-purple-500 bg-clip-text text-transparent">Portfolio</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}><p className="text-xl text-muted-foreground max-w-lg leading-relaxed">Products I've built and open source projects I maintain.</p></ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-8 md:mt-10">
                <a href="https://github.com/dorukeray" target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Button variant="outline" size="lg" className="h-12 sm:h-14 px-5 sm:px-6 text-sm sm:text-base rounded-xl group"><Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />View GitHub<ArrowUpRight className="h-4 w-4 ml-2 opacity-50 group-hover:opacity-100" /></Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={400} direction="left">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <TiltCard tiltMax={8} scale={1.02} className="rounded-2xl"><div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/50 text-center"><div className="text-3xl sm:text-4xl md:text-5xl font-black tabular-nums mb-1 sm:mb-2">{projectCount}</div><div className="text-xs sm:text-sm text-muted-foreground">Projects</div></div></TiltCard>
              <TiltCard tiltMax={8} scale={1.02} className="rounded-2xl"><div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/50 text-center"><div className="text-3xl sm:text-4xl md:text-5xl font-black text-cta mb-1 sm:mb-2">8+</div><div className="text-xs sm:text-sm text-muted-foreground">Years</div></div></TiltCard>
              <TiltCard tiltMax={8} scale={1.02} className="rounded-2xl"><div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/50 text-center"><div className="text-3xl sm:text-4xl md:text-5xl font-black text-link mb-1 sm:mb-2">30+</div><div className="text-xs sm:text-sm text-muted-foreground">Repos</div></div></TiltCard>
              <TiltCard tiltMax={8} scale={1.02} className="rounded-2xl"><div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/50 text-center"><div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-500 mb-1 sm:mb-2">2k+</div><div className="text-xs sm:text-sm text-muted-foreground">Commits</div></div></TiltCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, variant = "product" }: { project: Project; variant?: "product" | "opensource" }) {
  const href = project.url || project.github;
  return (
    <TiltCard tiltMax={6} scale={1.02} glare className="h-full rounded-2xl">
      <a href={href} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all hover:shadow-xl hover:border-border no-underline">
        <div className={`relative h-28 bg-gradient-to-br ${variant === "product" ? "from-cta/20 via-cta/10" : "from-link/20 via-link/10"} to-transparent p-5 flex items-start justify-between`}>
          <div className={`w-12 h-12 rounded-xl ${variant === "product" ? "bg-cta/20" : "bg-link/20"} flex items-center justify-center`}>
            {variant === "product" ? <Rocket className="h-6 w-6 text-cta" /> : <Terminal className="h-6 w-6 text-link" />}
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && <div className="h-8 w-8 rounded-lg bg-background/80 flex items-center justify-center"><Github className="h-4 w-4" /></div>}
            {project.url && <div className="h-8 w-8 rounded-lg bg-background/80 flex items-center justify-center"><ExternalLink className="h-4 w-4" /></div>}
          </div>
          {project.featured && <div className={`absolute bottom-3 left-5 flex items-center gap-1 px-2 py-1 rounded-full ${variant === "product" ? "bg-cta/20 text-cta" : "bg-link/20 text-link"} text-xs font-medium`}><Star className="h-3 w-3" />Featured</div>}
        </div>
        <div className="flex-1 p-5 pt-4 flex flex-col">
          <h3 className="font-bold text-lg mb-1">{project.name}</h3>
          <p className={`text-sm font-medium ${variant === "product" ? "text-cta" : "text-link"} mb-2`}>{project.tagline}</p>
          <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">{project.tech.slice(0, 3).map((t) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}</div>
        </div>
      </a>
    </TiltCard>
  );
}

function GitHubActivity() {
  const [activeTab, setActiveTab] = useState<"graph" | "stats">("graph");
  const stats = [
    { label: "Repos", value: "30+", icon: GitFork, color: "text-link" },
    { label: "Contributions", value: "2000+", icon: Activity, color: "text-cta" },
    { label: "Orgs", value: "3", icon: Layers, color: "text-purple-500" },
  ];
  return (
    <div className="rounded-3xl border border-border/50 bg-card/50 overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-border/50">
        <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-foreground/10 flex items-center justify-center"><Github className="h-5 w-5" /></div><div><div className="font-medium">@dorukeray</div><div className="text-sm text-muted-foreground">GitHub</div></div></div>
        <div className="flex rounded-xl border border-border overflow-hidden">
          <button onClick={() => setActiveTab("graph")} className={`px-4 py-2 text-sm font-medium ${activeTab === "graph" ? "bg-muted" : "text-muted-foreground"}`}>Graph</button>
          <button onClick={() => setActiveTab("stats")} className={`px-4 py-2 text-sm font-medium ${activeTab === "stats" ? "bg-muted" : "text-muted-foreground"}`}>Stats</button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === "graph" ? (
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-xl p-6 flex items-center justify-center min-h-[120px]">
              <a href="https://github.com/dorukeray" target="_blank" rel="noopener noreferrer" className="block no-underline">
                <img src="https://ghchart.rshah.org/dorukeray" alt="GitHub chart" className="max-w-full h-auto opacity-70 hover:opacity-100 dark:invert" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">{stats.map((s) => <div key={s.label} className="p-4 rounded-xl bg-muted/30 text-center"><s.icon className={`h-5 w-5 mx-auto mb-2 ${s.color}`} /><div className="font-bold text-xl">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></div>)}</div>
          </div>
        ) : (
          <div className="space-y-4">{stats.map((s) => <div key={s.label} className="flex items-center justify-between p-5 rounded-xl bg-muted/30"><div className="flex items-center gap-4"><div className={`h-12 w-12 rounded-xl bg-muted flex items-center justify-center ${s.color}`}><s.icon className="h-6 w-6" /></div><span className="font-medium">{s.label}</span></div><span className="text-2xl font-bold">{s.value}</span></div>)}</div>
        )}
      </div>
      <div className="p-6 pt-0"><Button asChild variant="outline" className="w-full h-12 rounded-xl"><a href="https://github.com/dorukeray" target="_blank" className="no-underline"><Github className="h-5 w-5 mr-2" />View Profile<ArrowUpRight className="h-4 w-4 ml-2" /></a></Button></div>
    </div>
  );
}
