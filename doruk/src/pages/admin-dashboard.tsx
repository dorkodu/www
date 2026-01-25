import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockNotes, type NoteMeta } from "@/lib/notes";
import { Edit, Eye, EyeOff, Lock, Plus, Save, Trash2, X } from "lucide-react";
import { useState } from "react";

// Simple password auth - in production, use a proper auth system
const ADMIN_PASSWORD = "doruk2024"; // You should change this!

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <Lock className="h-6 w-6" />
            </div>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter password to manage notes</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" variant="cta">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <NotesManager onLogout={() => setIsAuthenticated(false)} />;
}

function NotesManager({ onLogout }: { onLogout: () => void }) {
  const [notes, setNotes] = useState<NoteMeta[]>(mockNotes);
  const [editingNote, setEditingNote] = useState<NoteMeta | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleDelete = (slug: string) => {
    if (confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter((n) => n.slug !== slug));
    }
  };

  const handleSave = (note: NoteMeta) => {
    if (editingNote) {
      setNotes(notes.map((n) => (n.slug === editingNote.slug ? note : n)));
    } else {
      setNotes([...notes, note]);
    }
    setEditingNote(null);
    setIsCreating(false);
  };

  if (editingNote || isCreating) {
    return (
      <NoteEditor
        note={editingNote}
        onSave={handleSave}
        onCancel={() => {
          setEditingNote(null);
          setIsCreating(false);
        }}
      />
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notes Admin</h1>
          <p className="text-muted-foreground mt-1">Manage your digital garden</p>
        </div>
        <div className="flex gap-2">
          <Button variant="cta" onClick={() => setIsCreating(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Note
          </Button>
          <Button variant="outline" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <Card key={note.slug}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{note.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">{note.slug}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{note.date}</span>
                  <div className="flex gap-1">
                    {note.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => setEditingNote(note)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                  onClick={() => handleDelete(note.slug)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
        Total: {notes.length} notes
      </div>
    </div>
  );
}

function NoteEditor({
  note,
  onSave,
  onCancel,
}: {
  note: NoteMeta | null;
  onSave: (note: NoteMeta) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<NoteMeta>(
    note || {
      slug: "",
      title: "",
      description: "",
      tags: [],
      date: new Date().toISOString().split("T")[0] || "",
      links: [],
    }
  );
  const [tagsInput, setTagsInput] = useState(note?.tags.join(", ") || "");
  const [linksInput, setLinksInput] = useState(note?.links.join(", ") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      links: linksInput.split(",").map((l) => l.trim()).filter(Boolean),
    });
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">{note ? "Edit Note" : "New Note"}</h1>
        <Button variant="ghost" onClick={onCancel}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Note title"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Slug</label>
            <Input
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="note-slug"
              disabled={!!note}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Description</label>
          <Input
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Brief description"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium mb-2 block">Tags (comma-separated)</label>
            <Input
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="tag1, tag2, tag3"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Links (comma-separated slugs)</label>
            <Input
              value={linksInput}
              onChange={(e) => setLinksInput(e.target.value)}
              placeholder="other-note-slug"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Date</label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Content (Markdown)</label>
          <Textarea
            rows={12}
            placeholder="# Note content in Markdown..."
            className="font-mono text-sm"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Use [[slug]] for links and ![[slug]] for transclusions.
          </p>
        </div>

        <div className="flex gap-2">
          <Button type="submit" variant="cta">
            <Save className="h-4 w-4 mr-2" />
            Save Note
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
