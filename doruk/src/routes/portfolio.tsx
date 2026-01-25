import { PortfolioPage } from "@/pages/portfolio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});
