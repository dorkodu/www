import { ScrollReveal, SpotlightCard } from "@/components/ui/animated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getBacklinks,
  mockNoteContent,
  mockNotes,
  parseTransclusions,
  parseWikiLinks,
} from "@/lib/notes";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, ChevronRight, Link2, Sparkles, Tag } from "lucide-react";
import { marked } from "marked";
import { useEffect, useMemo, useState } from "react";

export function NoteDetailPage() {
  const { slug } = useParams({ from: "/notes/$slug" });
  const [readingProgress, setReadingProgress] = useState(0);

  const note = useMemo(() => mockNotes.find((n) => n.slug === slug), [slug]);
  const backlinks = useMemo(() => getBacklinks(slug), [slug]);
  const linkedNotes = useMemo(
    () => note?.links.map((linkSlug) => mockNotes.find((n) => n.slug === linkSlug)).filter(Boolean) || [],
    [note]
  );

  const htmlContent = useMemo(() => {
    const rawContent = mockNoteContent[slug] || "";
    const withTransclusions = parseTransclusions(rawContent, (noteSlug) => mockNoteContent[noteSlug] || null);
    const withLinks = parseWikiLinks(withTransclusions);
    return marked.parse(withLinks);
  }, [slug]);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!note) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <ScrollReveal>
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-6">
            <Sparkles className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Note not found</h1>
          <p className="text-muted-foreground mb-8">
            The note "{slug}" doesn't exist yet.
          </p>
          <Button asChild variant="cta">
            <Link to="/notes" className="no-underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Notes
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${readingProgress / 100})` }}
      />

      <div className="relative">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="relative mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Breadcrumb */}
              <ScrollReveal>
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                  <Link to="/notes" className="hover:text-foreground transition-colors no-underline">
                    Notes
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground font-medium truncate">{note.title}</span>
                </nav>
              </ScrollReveal>

              {/* Note Header */}
              <ScrollReveal delay={100}>
                <header className="mb-10 pb-8 border-b border-border/50">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{note.title}</h1>
                  {note.description && (
                    <p className="text-xl text-muted-foreground mb-6">{note.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {note.date}
                    </span>
                    <span className="w-px h-4 bg-border" />
                    <div className="flex items-center gap-1.5">
                      <Tag className="h-4 w-4" />
                      <div className="flex gap-1.5">
                        {note.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </header>
              </ScrollReveal>

              {/* Note Content */}
              <ScrollReveal delay={200}>
                <div
                  className="prose prose-neutral dark:prose-invert max-w-none 
                    prose-headings:font-mono prose-headings:tracking-tight prose-headings:scroll-mt-20
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-a:text-link prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                    prose-code:text-sm prose-code:font-mono prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-border/50
                    prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                    prose-blockquote:border-l-2 prose-blockquote:border-link prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
                    prose-p:leading-relaxed prose-li:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </ScrollReveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Linked Notes */}
                {linkedNotes.length > 0 && (
                  <ScrollReveal delay={300}>
                    <SpotlightCard className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
                      <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
                        <Link2 className="h-4 w-4 text-link" />
                        Links
                        <Badge variant="secondary" className="text-xs ml-auto">{linkedNotes.length}</Badge>
                      </h3>
                      <div className="space-y-2">
                        {linkedNotes.map((linkedNote) => linkedNote && (
                          <Link
                            key={linkedNote.slug}
                            to="/notes/$slug"
                            params={{ slug: linkedNote.slug }}
                            className="group flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-muted transition-colors no-underline"
                          >
                            <span className="text-sm text-foreground truncate">{linkedNote.title}</span>
                            <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                )}

                {/* Backlinks */}
                {backlinks.length > 0 && (
                  <ScrollReveal delay={400}>
                    <SpotlightCard className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
                      <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
                        <ArrowLeft className="h-4 w-4 text-cta" />
                        Backlinks
                        <Badge variant="secondary" className="text-xs ml-auto">{backlinks.length}</Badge>
                      </h3>
                      <div className="space-y-2">
                        {backlinks.map((backlinkNote) => (
                          <Link
                            key={backlinkNote.slug}
                            to="/notes/$slug"
                            params={{ slug: backlinkNote.slug }}
                            className="group flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-muted transition-colors no-underline"
                          >
                            <span className="text-sm text-foreground truncate">{backlinkNote.title}</span>
                            <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                )}

                {linkedNotes.length === 0 && backlinks.length === 0 && (
                  <ScrollReveal delay={300}>
                    <div className="rounded-2xl border border-border/50 bg-card/30 p-6 text-center">
                      <p className="text-sm text-muted-foreground">No connections yet</p>
                    </div>
                  </ScrollReveal>
                )}

                {/* Back to notes */}
                <ScrollReveal delay={500}>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/notes" className="no-underline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      All Notes
                    </Link>
                  </Button>
                </ScrollReveal>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
