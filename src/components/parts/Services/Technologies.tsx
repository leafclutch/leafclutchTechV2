import React from "react";
import { Code2 } from "lucide-react";

interface TechnologiesProps {
  technologies: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-primary/40 dark:text-mint/40 mb-4">
            <Code2 className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">
              Modern Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white tracking-tight">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base font-medium">
            We utilize the most advanced tools and frameworks to ensure your
            product is scalable, secure, and future-proof.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, idx) => (
            <div key={idx} className="group relative">
              {/* Animated glow behind the badge */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-mint to-accent rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500" />

              <div className="relative px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center space-x-3 transition-all duration-300 group-hover:border-mint/50 group-hover:-translate-y-1 group-hover:shadow-xl cursor-default">
                <div className="w-2 h-2 rounded-full bg-mint shadow-[0_0_8px_rgba(92,242,177,0.8)] group-hover:scale-125 transition-transform" />
                <span className="text-base font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-mint transition-colors">
                  {tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle bottom indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === 2 ? "w-8 bg-mint" : "w-1.5 bg-gray-200 dark:bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
