import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
  { name: "Notes", href: "/notes" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-foreground hover:text-foreground no-underline"
        >
          <span className="relative">
            <span className="relative z-10">doruk.eray</span>
            <span className="absolute inset-x-0 -bottom-0.5 h-2 bg-cta/20 group-hover:bg-cta/30 transition-colors rounded" />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          <div className="flex items-center rounded-full bg-muted/50 p-1 backdrop-blur-sm">
            {navigation.map((item) => {
              const isActive = currentPath === item.href ||
                (item.href !== "/" && currentPath.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full no-underline",
                    isActive
                      ? "text-foreground bg-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative"
          >
            <span className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-200",
              mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            )}>
              <Menu className="h-5 w-5" />
            </span>
            <span className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-200",
              mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            )}>
              <X className="h-5 w-5" />
            </span>
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {navigation.map((item, index) => {
            const isActive = currentPath === item.href ||
              (item.href !== "/" && currentPath.startsWith(item.href));

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block py-3 px-4 text-sm font-medium rounded-xl transition-all duration-200 no-underline",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
