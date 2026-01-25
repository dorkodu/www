// Note types and utilities for the Zettelkasten system

export interface NoteMeta {
  slug: string;
  title: string;
  description?: string;
  tags: string[];
  date: string;
  links: string[]; // slug references to other notes
}

export interface Note extends NoteMeta {
  content: string; // raw markdown
  html: string; // parsed HTML
  backlinks: NoteMeta[]; // notes that link to this note
}

// Mock notes data - in production, this would be loaded from markdown files
export const mockNotes: NoteMeta[] = [
  {
    slug: "welcome",
    title: "Welcome to My Digital Garden",
    description: "An introduction to my personal knowledge base and note-taking philosophy.",
    tags: ["meta", "zettelkasten"],
    date: "2024-01-15",
    links: ["zettelkasten-method", "knowledge-management"],
  },
  {
    slug: "zettelkasten-method",
    title: "The Zettelkasten Method",
    description: "Exploring the slip-box method for personal knowledge management.",
    tags: ["productivity", "learning", "zettelkasten"],
    date: "2024-01-10",
    links: ["knowledge-management", "atomic-notes"],
  },
  {
    slug: "knowledge-management",
    title: "Personal Knowledge Management",
    description: "How I organize and connect my thoughts and learnings.",
    tags: ["productivity", "learning"],
    date: "2024-01-08",
    links: ["zettelkasten-method"],
  },
  {
    slug: "atomic-notes",
    title: "Atomic Notes",
    description: "Writing notes that are focused, self-contained, and linkable.",
    tags: ["zettelkasten", "writing"],
    date: "2024-01-05",
    links: ["zettelkasten-method"],
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Design Patterns",
    description: "Common patterns and best practices for TypeScript development.",
    tags: ["typescript", "programming", "patterns"],
    date: "2024-01-20",
    links: ["react-architecture"],
  },
  {
    slug: "react-architecture",
    title: "React Application Architecture",
    description: "Structuring React applications for maintainability and scalability.",
    tags: ["react", "architecture", "programming"],
    date: "2024-01-18",
    links: ["typescript-patterns"],
  },
];

// Mock note content
export const mockNoteContent: Record<string, string> = {
  welcome: `
# Welcome to My Digital Garden

This is my personal knowledge base — a collection of interconnected notes, ideas, and learnings.

## What is a Digital Garden?

Unlike a traditional blog with polished articles, a digital garden is a space where ideas are planted, nurtured, and allowed to grow over time. Notes here range from seedlings (early ideas) to evergreen content.

## How to Navigate

- Use **tags** to explore topics
- Follow **links** to discover connections
- Check **backlinks** to see what references this note

See also: ![[zettelkasten-method]]
  `,
  "zettelkasten-method": `
# The Zettelkasten Method

The Zettelkasten (German for "slip-box") is a personal knowledge management system developed by sociologist Niklas Luhmann.

## Core Principles

1. **Atomic notes**: Each note contains one idea
2. **Links**: Notes are connected through links
3. **No hierarchy**: Knowledge emerges through connections

## My Implementation

I use markdown files with frontmatter for metadata:

\`\`\`yaml
---
title: Note Title
tags: [tag1, tag2]
links: [other-note-slug]
---
\`\`\`

See also: ![[atomic-notes]]
  `,
  "knowledge-management": `
# Personal Knowledge Management

PKM is the process of collecting, organizing, and sharing knowledge.

## My Tools

- **Markdown files** for portability
- **Git** for version control
- **Custom website** for publishing

## Key Practices

- Write to think
- Connect ideas actively
- Review and refine regularly

Related: ![[zettelkasten-method]]
  `,
  "atomic-notes": `
# Atomic Notes

An atomic note is:

- **Focused**: One concept per note
- **Self-contained**: Makes sense on its own
- **Linkable**: Can be referenced from other notes

## Benefits

- Easy to link and combine
- Reduces redundancy
- Enables emergent structures

This is a core concept in the [[zettelkasten-method]].
  `,
  "typescript-patterns": `
# TypeScript Design Patterns

Common patterns I use in TypeScript projects.

## Discriminated Unions

\`\`\`typescript
type Result<T, E> = 
  | { success: true; data: T }
  | { success: false; error: E };
\`\`\`

## Builder Pattern

Useful for complex object construction with fluent APIs.

See: ![[react-architecture]] for how I apply these in React.
  `,
  "react-architecture": `
# React Application Architecture

How I structure React applications.

## Folder Structure

\`\`\`
src/
  components/   # Reusable UI
  pages/        # Route components
  lib/          # Utilities
  stores/       # State management
  data/         # Configuration
\`\`\`

## Key Principles

- **Colocation**: Keep related code together
- **Composition**: Build from small components
- **Type safety**: Use TypeScript strictly

Related to [[typescript-patterns]].
  `,
};

// Transclusion syntax: ![[note-slug]] embeds the note content
// Link syntax: [[note-slug]] creates a link

export function parseTransclusions(content: string, getNote: (slug: string) => string | null): string {
  return content.replace(/!\[\[([^\]]+)\]\]/g, (_, slug) => {
    const noteContent = getNote(slug);
    if (noteContent) {
      // Get first paragraph as preview
      const preview = noteContent.split('\n\n')[1] || noteContent.substring(0, 200);
      return `<blockquote class="transclusion" data-slug="${slug}">${preview}</blockquote>`;
    }
    return `<span class="missing-note">[Note not found: ${slug}]</span>`;
  });
}

export function parseWikiLinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, slug) => {
    return `<a href="/notes/${slug}" class="wiki-link">${slug.replace(/-/g, ' ')}</a>`;
  });
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  mockNotes.forEach(note => note.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getNotesByTag(tag: string): NoteMeta[] {
  return mockNotes.filter(note => note.tags.includes(tag));
}

export function getBacklinks(slug: string): NoteMeta[] {
  return mockNotes.filter(note => note.links.includes(slug));
}
