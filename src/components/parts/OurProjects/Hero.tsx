import React from "react";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="hero-bg pt-24 pb-24 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Career Icon */}
        <motion.div
          className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Layers className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Our Projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-primary mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Success Stories That <span className="text-accent ">Inspire</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Explore our portfolio of successful projects and see how we've helped
          businesses achieve their goals.
        </motion.p>
      </div>
    </section>
  );
};
