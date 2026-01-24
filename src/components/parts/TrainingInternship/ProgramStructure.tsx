import React from "react";
import type { ProgramPhase } from "./types";
import { ArrowDown, ArrowRight } from "lucide-react";

interface ProgramStructureProps {
  phases: ProgramPhase[];
}

const ProgramStructure: React.FC<ProgramStructureProps> = ({ phases }) => {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-6 py-2 bg-primary/5 dark:bg-mint/10 border border-primary/10 dark:border-mint/20 rounded-full mb-6">
            <span className="text-sm font-bold text-primary dark:text-mint uppercase">
              Your path to success
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white mb-4">
            Program <span className="text-gradient">Structure</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A clear roadmap from skill acquisition to professional contribution.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Top Overview Card */}
          <div className="relative group w-full md:w-7/12 mb-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-mint to-accent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/10 rounded-full mb-3">
                {/* <Zap className="w-3 h-3 text-mint" /> */}
                <span className="px-4 py-1.5 bg-mint/10 dark:bg-mint/5 text-mint text-xs font-bold uppercase tracking-widest rounded-full border border-mint/20">
                  3 months journey
                </span>
              </div>
              <h3 className="text-2xl font-black text-primary dark:text-white mb-4 transition-colors">
                Dual-Phase Evolution
              </h3>

              {/* <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                Our program is designed to transform beginners into
                professionals. We start with intensive skill building and
                transition directly into real-world workspace integration.
              </p> */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium px-4">
                Our program is designed to transform beginners into
                professionals. We start with intensive skill building and
                transition directly into real-world workspace integration.
              </p>
            </div>
          </div>

          {/* Directional Down Arrow - Styled like the horizontal one */}
          <div className="">
            <ArrowDown className="w-10 h-10 text-mint animate-pulse" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            {phases.map((phase, idx) => (
              <React.Fragment key={idx}>
                <div className="relative group flex-1 w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-mint to-accent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative p-8 bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-1.5 bg-mint/10 dark:bg-mint/5 text-mint text-xs font-bold uppercase tracking-widest rounded-full border border-mint/20">
                        {phase.duration}
                      </span>
                      {/* <Sparkles className="w-6 h-6 text-mint opacity-20 group-hover:opacity-100 transition-opacity" /> */}
                    </div>
                    <h3 className="text-2xl font-black text-primary dark:text-white mb-4 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {phase.description}
                    </p>
                  </div>
                </div>
                {idx < phases.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-10 h-10 text-mint animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-primary max-w-3xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400 italic">
            "Promotion depends on your skills, performance, and consistency.
            Highly capable candidates may be promoted earlier based on skill
            level."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
