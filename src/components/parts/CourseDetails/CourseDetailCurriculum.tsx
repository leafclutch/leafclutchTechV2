import React from "react";
import { motion } from "framer-motion";
import type { CurriculumModule } from "./types";

interface CurriculumProps {
  curriculum: CurriculumModule[];
}

const CourseDetailCurriculum: React.FC<CurriculumProps> = ({ curriculum }) => {
  return (
    <section>
      <div className="mb-10 px-2">
        <h2 className="text-3xl font-black text-[#081E67] dark:text-white">
          Curriculum Roadmap
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-bold mt-2 uppercase tracking-widest text-sm">
          Step-by-step Mastery
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {curriculum.map((module, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-8 hover:shadow-lg transition-all border-l-8 border-l-[#00D69D]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex gap-8 items-center">
                <span className="text-6xl font-black text-gray-100 dark:text-slate-800 italic transition-colors group-hover:text-[#00D69D]">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[#081E67] dark:text-white">
                    {module.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {module.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-1.5 bg-[#F1F5F9] dark:bg-slate-800 text-gray-500 dark:text-slate-400 rounded-xl text-[12px] font-black uppercase tracking-widest transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseDetailCurriculum;
