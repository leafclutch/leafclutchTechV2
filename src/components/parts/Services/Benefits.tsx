import React from "react";
import type { Benefit } from "./types";


interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-mint/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1 bg-primary/5 dark:bg-mint/10 border border-primary/10 dark:border-mint/20 text-primary dark:text-mint text-xs font-bold uppercase tracking-[0.2em] rounded-lg mb-6 shadow-sm">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-6 tracking-tight">
            Key <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine strategic thinking with technical excellence to deliver
            results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Background with Glass Effect */}
              <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:border-mint/30 dark:group-hover:border-mint/30" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 p-5 bg-white dark:bg-gray-800 rounded-2xl text-primary dark:text-mint shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-mint group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(92,242,177,0.4)]">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-extrabold text-primary dark:text-white mb-4 transition-colors group-hover:text-primary dark:group-hover:text-mint">
                  {benefit.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>

                <div className="mt-6 w-0 h-1 bg-mint rounded-full transition-all duration-500 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
