import { NoteDetailPage } from "@/pages/note-detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/$slug")({
  component: NoteDetailPage,
});
