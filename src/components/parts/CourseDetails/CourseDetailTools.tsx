import React from "react";
import { motion } from "framer-motion";

interface ToolsProps {
  tools: string[];
}

const CourseDetailTools: React.FC<ToolsProps> = ({ tools }) => {
  return (
    <section className="bg-[#081E67] dark:bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl overflow-hidden relative transition-colors">
      <div className="absolute top-0 right-0 p-10 opacity-5">
        <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <h2 className="text-3xl font-black mb-10 dark:text-white">
        Professional Ecosystem
      </h2>
      <div className="flex flex-wrap gap-5">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: i * 0.05 }}
            className="px-8 py-4 bg-white bg-opacity-10 dark:bg-slate-800 border border-white border-opacity-10 dark:border-slate-700 rounded-2xl flex items-center gap-4 backdrop-blur-md"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D69D] shadow-[0_0_10px_#00D69D]"></div>
            <span className="font-black text-sm tracking-widest uppercase dark:text-slate-100">
              {tool}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseDetailTools;
