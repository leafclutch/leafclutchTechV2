import React from "react";
import { motion } from "framer-motion";
// import { PROCESS_DATA } from "./constants";
import TimelineComponent from "./TimelineComponent";

// const Step: React.FC<{ step: (typeof PROCESS_DATA)[0]; index: number }> = ({
//   step,
//   index,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       className="text-center relative"
//     >
//       <div className="relative inline-block mb-8">
//         <span className="text-7xl md:text-8xl font-black text-slate-100 dark:text-slate-800 tracking-[0.3em] mr-[-0.3em] leading-none select-none">
//           {step.number}
//         </span>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center text-primary dark:text-mint border border-slate-200 dark:border-slate-800">
//           {step.icon}
//         </div>
//       </div>
//       <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
//         {step.title}
//       </h3>
//       <p className="text-slate-600 dark:text-slate-400 max-w-[200px] mx-auto text-sm md:text-base">
//         {step.description}
//       </p>
//     </motion.div>
//   );
// };

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidde bg-[#f8fafc] dark:bg-slate-800 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center ">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-mint dark:border-mint dark:border text-xs font-bold uppercase tracking-wider mb-4"
          >
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white "
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A proven methodology that ensures project success.
          </motion.p>
        </div>

        <>
          {/* 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 relative">
    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 z-0" />
    {PROCESS_DATA.map((step, index) => (
      <Step key={index} step={step} index={index} />
    ))}
  </div>
  */}
        </>

        <TimelineComponent />
      </div>
    </section>
  );
};

export default Process;
