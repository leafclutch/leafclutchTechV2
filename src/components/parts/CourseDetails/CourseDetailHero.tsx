import React from "react";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { CourseDetailData } from "./types";

interface CourseDetailHeroProps {
  course: CourseDetailData;
  displayTitle: string;
  bgSource?: string;
}

const CourseDetailHero: React.FC<CourseDetailHeroProps> = ({
  course,
  displayTitle,
  bgSource,
}) => {
  // const navigate = useNavigate();
  const heroBackground: React.CSSProperties = {
    backgroundImage: `
  linear-gradient(
    rgba(9, 5, 54, 0.55),
    rgba(5, 4, 46, 0.85)
  ),
  url(${bgSource})
`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      style={heroBackground}
      className="bg-[#081E67] dark:bg-slate-900 pt-12 pb-32 px-4 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9] opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D69D] opacity-10 rounded-full blur-2xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate("/")}
          className="mb-10 flex items-center gap-2 text-[#0EA5E9] font-bold hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-[#0EA5E9] bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-40">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          Back to Catalog
        </motion.button> */}

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#00D69D] bg-opacity-15 border border-[#00D69D] border-opacity-30 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D69D] animate-pulse"></span>
              <span className="text-[#00D69D] font-black text-[12px] tracking-[0.15em] uppercase">
                {course.level}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-10 whitespace-pre-line tracking-tight">
              {displayTitle}
            </h1>

            <div className="flex flex-wrap justify-center gap-12 mt-4">
              <div className="text-center">
                <p className="text-white text-opacity-40 text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                  Duration
                </p>
                <p className="text-white text-xl font-bold">
                  {course.duration}
                </p>
              </div>
              <div className="w-[1px] h-12 bg-white bg-opacity-10 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-white text-opacity-40 text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                  Learning Mode
                </p>
                <p className="text-white text-xl font-bold">{course.mode}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailHero;
