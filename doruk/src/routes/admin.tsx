import { AdminDashboard } from "@/pages/admin-dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});
