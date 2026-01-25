import { cn } from "@/lib/utils";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const router = useRouterState();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathRef = useState(router.location.pathname)[0];

  useEffect(() => {
    if (router.location.pathname !== prevPathRef) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);

        // Scroll to top on page change
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 200);

      return () => clearTimeout(timer);
    }
    setDisplayChildren(children);
    return undefined;
  }, [children, router.location.pathname, prevPathRef]);

  return (
    <div
      className={cn(
        "transition-all duration-200 ease-out",
        isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      )}
    >
      {displayChildren}
    </div>
  );
}

// Simpler variant using just CSS
export function SimplePageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-page-in">
      {children}
    </div>
  );
}
