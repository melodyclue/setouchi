import { Icon } from "../icon";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "#app/utils/cn";
import { Link } from "@remix-run/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type TextGridProps = {
  title: string;
  icon?: string;
  link: string;
  description: string;
  color?: string;
  tags?: {
    title: string;
    color: string;
  }[];
};

export interface EnhancedTextGridProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  item: TextGridProps;
}

const TextGrid = React.forwardRef<HTMLDivElement, EnhancedTextGridProps>(
  ({ className, ...props }, ref) => {
    const item = props.item;

    return (
      <div
        className={cn(buttonVariants({ className }))}
        // className="p-4 md:p-6 h-full flex flex-col gap-2"
        ref={ref}
        {...props}
      >
        <Link to={item.link} className="h-full w-full p-4 md:p-6">
          <div className="flex items-center justify-between">
            {item.icon && (
              <Icon type={item.icon} color={item.color ?? "#fff"} />
            )}
          </div>

          <div className="mt-2">
            <div className="font-semibold line-clamp-1 text-foreground">
              {item.title}
            </div>
            <div className="mt-2 text-sm text-foreground/55 line-clamp-2">
              {item.description}
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

TextGrid.displayName = "TextGrid";

export { TextGrid, buttonVariants };
