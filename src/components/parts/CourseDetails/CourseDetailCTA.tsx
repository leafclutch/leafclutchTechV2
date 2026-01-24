import React from "react";
import { motion } from "framer-motion";

const CourseDetailCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-600 dark:bg-slate-900 rounded-[2.5rem] p-12 text-center shadow-card dark:shadow-none border border-gray-100 dark:border-slate-800 transition-colors">
      <h3 className="text-3xl sm:text-5xl font-bold tracking-wide text-white dark:text-white mb-4">
        Start your transformation.
      </h3>
      <p className="text-gray-100 text-lg sm:text-xl dark:text-slate-400 font-bold mb-10  text-center">
        Enroll today and join a community of learners pushing boundaries in
        tech.
      </p>
      <div className="flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSehIqCJm6ITkjUJcu9djYG4H60Uku61Z4Wlg_naCjTLUTjqlQ/viewform?usp=sharing&ouid=102811312275506082295"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#081E67] dark:bg-secondary bg-white dark:text-primary px-16 py-5 rounded-2xl font-black shadow-xl w-full sm:w-auto"
          >
            Enroll Now
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default CourseDetailCTA;
