import React from "react";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="hero-bg pt-24 pb-32 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Person Icon */}
        <motion.div
          className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <UserPlus className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Gain real-world experience
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-primary mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Internships
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Work on live projects alongside our team. Build your portfolio, get
          mentorship, and prepare for a successful career in tech.
        </motion.p>

        {/* Button */}
        {/* <motion.button
          className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Enroll Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button> */}
      </div>
    </section>
  );
};
