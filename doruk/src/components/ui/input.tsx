import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";

export interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-base shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent focus-visible:shadow-md disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            icon && "pl-10",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

// Search input with icon built-in
const SearchInput = React.forwardRef<HTMLInputElement, Omit<InputProps, "icon" | "type">>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        icon={<Search className="h-4 w-4" />}
        className={className}
        {...props}
      />
    );
  }
);
SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
