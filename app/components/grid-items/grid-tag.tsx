import { cva } from "class-variance-authority";
import React from "react";
import { Icon } from "../icon";
import { cn } from "#app/utils/cn";

const buttonVariants = cva(
  "whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-primary-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type TagGridProps = {
  tags: {
    title: string;
    color: string;
  }[];
  title: string;
  icon: string;
  color: string;
};

export interface EnhancedTagGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  item: TagGridProps;
}

const TagGrid = React.forwardRef<HTMLDivElement, EnhancedTagGridProps>(
  ({ className, ...props }, ref) => {
    const item = props.item;
    return (
      <div className={cn(buttonVariants({ className }))} ref={ref} {...props}>
        <div className="flex items-center justify-between">
          {item.icon && <Icon type={item.icon} color={item.color ?? "#fff"} />}
        </div>

        <div className="mt-2">
          <div className="font-semibold line-clamp-1 text-foreground/85">
            {item.title}
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags?.map((tag) => {
              return (
                <span
                  className="px-1 py-0.5 text-sm font-normal text-slate-500/90 rounded-lg hover:text-slate-700 transition-all"
                  key={tag.title}
                >
                  {tag.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

TagGrid.displayName = "TagGrid";

export { TagGrid, buttonVariants };
