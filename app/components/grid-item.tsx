import { cn } from "#app/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 overflow-hidden",
  {
    variants: {
      size: {
        "1x1": "col-span-1 row-span-1",
        "1x2": "md:col-span-1 col-span-2 row-span-2",
        "1x3": "md:col-span-3 col-span-3 row-span-1",
        "2x1": "col-span-4 row-span-1 xl:col-span-6",
        "2x2": "md:col-span-2 col-span-full row-span-2",
        "2x3": "md:col-span-2 col-span-full row-span-3",
        "4x2": "md:col-span-4 col-span-full row-span-2",
        "6x6": "col-span-6 row-span-6",
        "4x3":
          "md:col-span-4 xl:col-span-6 col-span-full row-span-3 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export interface EnhancedGridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export const GridItem = ({ size, children }: EnhancedGridItemProps) => {
  return (
    <motion.div
      data-size={size}
      initial={{
        scale: 0.9,
        y: 50,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            "hover:bg-slate-50/90 duration-75 transition-colors ease-in-out container shadow-card border border-secondary/5",
        })
      )}
    >
      {children}
    </motion.div>
  );
};
