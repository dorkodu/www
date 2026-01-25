import { NotesGraph } from "@/components/notes-graph";
import { ScrollReveal, TiltCard } from "@/components/ui/animated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/input";
import { getAllTags, mockNotes, type NoteMeta } from "@/lib/notes";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, FileText, LayoutGrid, Network, Sparkles, Tag } from "lucide-react";
import { useMemo, useState } from "react";

export function NotesListPage() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "graph">("grid");
  const allTags = useMemo(() => getAllTags(), []);

  const filteredNotes = useMemo(() => {
    return mockNotes.filter((note) => {
      const matchesSearch =
        search === "" ||
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description?.toLowerCase().includes(search.toLowerCase());

      const matchesTag = !selectedTag || note.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        {/* Header */}
        <ScrollReveal className="mb-12">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Digital Garden
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Notes</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            My personal Zettelkasten — interconnected notes, ideas, and learnings.
            A growing collection of evergreen thoughts.
          </p>
        </ScrollReveal>

        {/* Search & Filters */}
        <ScrollReveal delay={100} className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <SearchInput
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 max-w-md"
            />
            <div className="flex rounded-xl border border-border overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="rounded-none"
                title="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "graph" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("graph")}
                className="rounded-none"
                title="Graph view"
              >
                <Network className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedTag === null ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105"
              onClick={() => setSelectedTag(null)}
            >
              All notes
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "link" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollReveal>

        {/* Graph View */}
        {viewMode === "graph" && (
          <ScrollReveal delay={200} className="mb-10">
            <NotesGraph className="h-[500px] w-full" />
          </ScrollReveal>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note, index) => (
              <ScrollReveal key={note.slug} delay={index * 50}>
                <NoteCard note={note} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {viewMode === "grid" && filteredNotes.length === 0 && (
          <ScrollReveal>
            <div className="text-center py-20">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-6">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium">No notes found</p>
              <p className="text-muted-foreground mt-1">Try adjusting your search or filter</p>
            </div>
          </ScrollReveal>
        )}

        {/* Stats */}
        <ScrollReveal delay={300} className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-foreground" />
              <span><strong className="text-foreground">{mockNotes.length}</strong> notes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-link" />
              <span><strong className="text-foreground">{allTags.length}</strong> tags</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cta" />
              <span><strong className="text-foreground">{mockNotes.reduce((acc, n) => acc + n.links.length, 0)}</strong> connections</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function NoteCard({ note }: { note: NoteMeta }) {
  return (
    <TiltCard tiltMax={5} scale={1.02} glare className="h-full rounded-2xl">
      <Link
        to="/notes/$slug"
        params={{ slug: note.slug }}
        className="group block h-full no-underline"
      >
        <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:border-border card-shine">
          {/* Title */}
          <h3 className="font-bold text-lg mb-2 group-hover:text-foreground transition-colors line-clamp-2">
            {note.title}
          </h3>

          {/* Description */}
          {note.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {note.description}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-1">
              {note.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {note.tags.length > 2 && (
                <Badge variant="ghost" className="text-xs">
                  +{note.tags.length - 2}
                </Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {note.date}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute top-6 right-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
