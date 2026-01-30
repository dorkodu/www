import { StoryPage } from "@/pages/story";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/story")({
  component: StoryPage,
});
