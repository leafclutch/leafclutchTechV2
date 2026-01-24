import React from "react";
import { motion } from "framer-motion";

interface HardwareProps {
  hardware: string[];
}

const CourseDetailHardware: React.FC<HardwareProps> = ({ hardware }) => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-card border border-gray-100 dark:border-slate-800 transition-colors">
      <div className="flex items-center gap-6 mb-10">
        <div className="w-14 h-14 bg-gray-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#081E67] dark:text-secondary shadow-sm transition-colors">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-[#081E67] dark:text-white font-black text-2xl">
            Hardware Requirements
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-500 font-bold uppercase tracking-widest mt-1">
            Recommended Specifications
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardware.map((req, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-gray-100 dark:border-slate-700 flex items-start gap-4"
          >
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D69D] flex-shrink-0"></div>
            <span className="text-base font-bold text-[#081E67] dark:text-slate-300 leading-snug">
              {req}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseDetailHardware;
