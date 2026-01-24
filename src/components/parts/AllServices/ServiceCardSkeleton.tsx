import React from "react";
import { motion } from "framer-motion";

const ServiceCardSkeleton: React.FC<{ index?: number }> = ({ index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden animate-pulse"
    >
      {/* Top right decorative circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2F4F7] dark:bg-slate-800/50 rounded-bl-full -z-0 opacity-50" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Media placeholder */}
        <div className="w-1/2 h-[12rem] rounded-[1rem] flex items-center justify-center mb-4">
          <div className="p-6 bg-gray-200 dark:bg-slate-700 rounded-[1rem] w-full h-full" />
        </div>

        {/* Title placeholder */}
        <div className="h-8 w-3/4 bg-gray-200 dark:bg-slate-700 rounded mb-4" />

        {/* Description placeholder */}
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-slate-700 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-slate-700 rounded mb-2" />
        <div className="h-4 w-4/6 bg-gray-200 dark:bg-slate-700 rounded mb-8" />

        {/* Features placeholder */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-10 w-full place-items-center">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-700" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-slate-700 rounded" />
              </div>
            ))}
        </div>

        {/* Button placeholder */}
        <div className="w-[25%] p-4 px-6 h-12 bg-gray-200 dark:bg-slate-700 rounded-xl mb-4" />
      </div>

      {/* Gradient bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 opacity-70" />
    </motion.div>
  );
};

export default ServiceCardSkeleton;
