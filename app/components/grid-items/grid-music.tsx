import { cva } from "class-variance-authority";
import React from "react";
import { Icon } from "../icon";
import { Link } from "@remix-run/react";
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

export type MusicGridProps = {
  link: string;
  title: string;
  songs: {
    title: string;
    link: string;
    color: string;
  }[];
  icon: string;
  color: string;
  layout: string;
};

export interface EnhancedMusicGridProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  item: MusicGridProps;
}

const MusicGrid = React.forwardRef<HTMLDivElement, EnhancedMusicGridProps>(
  ({ className, ...props }, ref) => {
    const item = props.item;
    return (
      <div className={cn(buttonVariants({ className }))} ref={ref} {...props}>
        <Link
          to={item.link}
          className="h-full w-full p-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between">
            {item.icon && (
              <Icon type={item.icon} color={item.color ?? "#fff"} />
            )}
          </div>

          <div className="mt-2">
            <div className="font-semibold line-clamp-1 text-foreground/85">
              {item.title}
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {item.songs?.map((song) => {
                return (
                  <span
                    className="px-2 py-0.5 text-sm font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-all"
                    key={song.link}
                  >
                    {song.title}
                  </span>
                );
              })}
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

MusicGrid.displayName = "MusicGrid";

export { MusicGrid, buttonVariants };
