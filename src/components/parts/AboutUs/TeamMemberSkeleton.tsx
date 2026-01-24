import { motion, type Variants } from "framer-motion";

interface TeamMembersSkeletonProps {
  count?: number;
  staggerContainer: Variants;
  fadeIn: Variants;
}

export default function TeamMembersSkeleton({
  count = 6,
  staggerContainer,
  fadeIn,
}: TeamMembersSkeletonProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:gap-x-0"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="space-y-4 text-center"
          variants={fadeIn}
        >
          {/* Image Skeleton */}
          <div className="w-[90%] aspect-square mx-auto rounded-3xl bg-muted/60 animate-pulse" />

          {/* Text Skeletons */}
          <div className="space-y-2 px-1 animate-pulse">
            <div className="h-6 w-3/4 mx-auto rounded-md bg-muted/60" />
            <div className="h-4 w-1/2 mx-auto rounded-md bg-muted/50" />

            {/* LinkedIn Skeleton */}
            <div className="pt-2">
              <div className="h-4 w-20 mx-auto rounded-md bg-muted/40" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
