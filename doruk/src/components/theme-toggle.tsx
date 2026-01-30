import { cn } from "@/lib/utils";
import { applyTheme, useThemeStore } from "@/stores/theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  // Determine effective theme (resolve "system" to actual light/dark)
  const getEffectiveTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
  };

  const effectiveTheme = getEffectiveTheme();

  const setLight = () => {
    setTheme("light");
    applyTheme("light");
  };

  const setDark = () => {
    setTheme("dark");
    applyTheme("dark");
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-full bg-muted/60 p-1 border border-border/50"
      role="radiogroup"
      aria-label="Theme selection"
    >
      <button
        onClick={setLight}
        className={cn(
          "rounded-full p-1.5 transition-all duration-200",
          effectiveTheme === "light"
            ? "bg-background text-amber-500 shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Light theme"
        aria-checked={effectiveTheme === "light"}
        role="radio"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={setDark}
        className={cn(
          "rounded-full p-1.5 transition-all duration-200",
          effectiveTheme === "dark"
            ? "bg-background text-link shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Dark theme"
        aria-checked={effectiveTheme === "dark"}
        role="radio"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
