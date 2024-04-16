import { Icon } from "../icon";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "#app/utils/cn";
import { Link } from "@remix-run/react";

const socialVariants = cva(
  "whitespace-nowrap font-medium transition-colors focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-white text-primary-foreground",
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

export type SocialGridProps = {
  title: string;
  icon?: string;
  link: string;
  username?: string;
  description?: string;
  color?: string;
  iconColor?: string;
  buttonTitle?: string;
  buttonSecondaryText?: string;
};

export interface EnhancedSocialGridProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  item: SocialGridProps;
}

const SocialGrid = React.forwardRef<HTMLDivElement, EnhancedSocialGridProps>(
  ({ className, ...props }, ref) => {
    const item = props.item;

    return (
      <div className={cn(socialVariants({ className }))} {...props} {...ref}>
        <Link
          to={item.link}
          className="p-6 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between">
            {item.icon && (
              <Icon
                type={item.icon}
                color={item.color ?? "#fff"}
                className={item.iconColor}
              />
            )}
          </div>

          <div className="mt-2">
            <div className="font-semibold line-clamp-1 text-foreground/85">
              {item.title}
            </div>
            <div className="text-sm text-slate-500/70 font-normal">
              {item.username}
            </div>
            {item.description && (
              <div className="mt-2 font-normal text-sm text-slate-500/90 break-words whitespace-pre-wrap leading-6">
                {item.description}
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  }
);

SocialGrid.displayName = "SocialGrid";

export { SocialGrid, socialVariants };
