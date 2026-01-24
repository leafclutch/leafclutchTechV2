import { motion } from "framer-motion";

type InternsSkeletonProps = {
  length?: number;
};

const InternCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card shadow-sm animate-pulse">
      {/* Photo */}
      <div className="w-48 h-48 mb-6 rounded-xl bg-muted" />

      {/* Text */}
      <div className="w-full text-center">
        <div className="h-5 w-3/4 mx-auto mb-2 rounded-md bg-muted" />
        <div className="h-4 w-1/2 mx-auto mb-2 rounded-md bg-muted" />
        <div className="h-3 w-2/3 mx-auto mb-4 rounded-md bg-muted" />

        {/* LinkedIn */}
        <div className="h-4 w-32 mx-auto rounded-md bg-muted" />
      </div>
    </div>
  );
};

export default function InternsSkeleton({ length = 8 }: InternsSkeletonProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      initial="hidden"
      animate="visible"
    >
      {Array.from({ length }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <InternCardSkeleton />
        </motion.div>
      ))}
    </motion.div>
  );
}
