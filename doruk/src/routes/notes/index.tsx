import { NotesListPage } from "@/pages/notes-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/")({
  component: NotesListPage,
});
