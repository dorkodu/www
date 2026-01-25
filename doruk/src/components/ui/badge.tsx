import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-foreground text-background shadow-sm",
        secondary:
          "border-transparent bg-muted text-foreground hover:bg-muted/80",
        outline:
          "text-foreground border-border hover:bg-muted hover:border-foreground/20",
        link:
          "border-transparent bg-link/10 text-link hover:bg-link/20",
        cta:
          "border-transparent bg-cta/10 text-cta hover:bg-cta/20",
        ghost:
          "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
