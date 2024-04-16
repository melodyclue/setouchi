import { cn } from "#app/utils/cn.js";
import { cva } from "class-variance-authority";
import React from "react";

const imageVariantts = cva(
  " whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
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

export type ImageGridProps = {
  image: string;
  link: string;
};

export interface EnhancedImageGridProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  item: ImageGridProps;
}

const ImageGrid = React.forwardRef<HTMLDivElement, EnhancedImageGridProps>(
  ({ className, ...props }, ref) => {
    const item = props.item;

    return (
      <div className={cn(imageVariantts({ className }))} ref={ref} {...props}>
        <div className="w-full h-full flex flex-col items-end justify-end overflow-hidden rounded-3xl relative">
          <a
            href={item.link}
            className="w-full h-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="z-0 object-cover object-center w-full h-full"
              src={item.image ?? ""}
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
);

ImageGrid.displayName = "ImageGrid";

export { ImageGrid, imageVariantts };
