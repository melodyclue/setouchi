import { cn } from "#app/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

export type SizeVariant = "4x1" | "4x3";

const variants = cva("shadow-grid rounded-3xl bg-white overflow-hidden", {
  variants: {
    size: {
      "4x1": "col-span-4 xl:col-span-6 row-span-1",
      "4x3":
        "md:col-span-4 xl:col-span-6 col-span-full row-span-3 relative overflow-hidden",
    },
  },
  defaultVariants: {
    size: "4x1",
  },
});

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
            "container border border-secondary/5 shadow-card transition-colors ease-in-out",
        }),
      )}
    >
      {children}
    </motion.div>
  );
};
