import React from "react";
import { motion } from "framer-motion";
import type { CourseDetailData } from "./types";

interface TrackSelectionProps {
  course: CourseDetailData;
  selectedSubSlug: string | null;
  onSelect: (slug: string) => void;
}

const CourseDetailTrackSelection: React.FC<TrackSelectionProps> = ({
  course,
  selectedSubSlug,
  onSelect,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-card border border-gray-100 dark:border-slate-800 transition-colors"
    >
      <h3 className="text-[#081E67] dark:text-white font-black text-2xl mb-8">
        {course.subCourses
          ? "Select Your Specialization"
          : "Everything Included in this Program"}
      </h3>

      <div className="flex flex-wrap gap-4">
        {course.subCourses
          ? course.subCourses.map((sub) => (
              <motion.button
                key={sub.slug}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(sub.slug)}
                className={`px-6 py-3.5 rounded-2xl font-black text-base transition-all border-2 ${
                  selectedSubSlug === sub.slug
                    ? "bg-[#081E67] dark:bg-secondary border-[#081E67] dark:border-secondary text-white dark:text-primary shadow-lg"
                    : "bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 text-[#081E67] dark:text-slate-300 hover:border-[#0EA5E9] shadow-sm"
                }`}
              >
                {sub.title}
              </motion.button>
            ))
          : course.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3.5 bg-[#081E67] dark:bg-secondary border-2 border-[#081E67] dark:border-secondary rounded-2xl flex items-center gap-3 shadow-md"
              >
                <div className="w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white dark:text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white dark:text-primary font-black text-sm tracking-tight">
                  {item}
                </span>
              </motion.div>
            ))}
      </div>
    </motion.section>
  );
};

export default CourseDetailTrackSelection;
