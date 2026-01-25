import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SimplePageTransition } from "@/components/page-transition";
import { applyTheme, useThemeStore } from "@/stores/theme";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const { theme } = useThemeStore();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (useThemeStore.getState().theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SimplePageTransition>
          <Outlet />
        </SimplePageTransition>
      </main>
      <Footer />
    </div>
  );
}
