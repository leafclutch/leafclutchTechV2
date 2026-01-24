import React from "react";
import { motion } from "framer-motion";

interface CardSkeletonProps {
  length?: number; // number of skeleton cards to show, default 6
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({ length = 6 }) => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length }).map((_, index) => (
        <motion.div
          key={index}
          className="group p-10 bg-card border border-border rounded-[2.5rem] flex flex-col h-full animate-pulse"
        >
          {/* Media placeholder */}
          <div className="flex items-center justify-center mb-8 h-40 bg-gray-300 rounded-2xl dark:bg-gray-700"></div>

          {/* Title placeholder */}
          <div className="h-6 w-3/4 bg-gray-300 rounded mb-5 dark:bg-gray-700"></div>

          {/* Description placeholder */}
          <div className="space-y-2 mb-10 flex-grow">
            <div className="h-4 w-full bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-4 w-4/6 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>

          {/* Button placeholder */}
          <div className="h-5 w-1/3 bg-gray-300 rounded dark:bg-gray-700"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardSkeleton;
