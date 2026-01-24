import React from "react";
import { motion } from "framer-motion";

interface OverviewProps {
  description: string;
  whoIsThisFor: string;
  outcomes: string[];
}

const CourseDetailOverview: React.FC<OverviewProps> = ({
  description,
  whoIsThisFor,
  outcomes,
}) => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 shadow-card border border-gray-100 dark:border-slate-800 transition-colors">
      <h2 className="text-3xl font-black text-[#081E67] dark:text-white mb-6">
        Program Overview
      </h2>
      <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-12">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 dark:bg-slate-800/40 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 transition-colors">
          <h4 className="text-[#081E67] dark:text-slate-100 font-black text-xl mb-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#00D69D]"></div> Who is
            this for?
          </h4>
          <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed font-bold">
            {whoIsThisFor}
          </p>
        </div>
        <div className="p-2">
          <h4 className="text-[#081E67] dark:text-slate-100 font-black text-xl mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#00D69D]"></div> Key
            Outcomes
          </h4>
          <ul className="space-y-4">
            {outcomes.map((outcome, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#00D69D] bg-opacity-10 flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-[#00D69D]"
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
                <span className="text-base font-bold text-[#081E67] dark:text-slate-300 opacity-80">
                  {outcome}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailOverview;
