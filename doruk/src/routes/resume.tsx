import { ResumePage } from "@/pages/resume";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
});
