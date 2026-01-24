import React from "react";
import { motion, easeInOut } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, Target } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 lg:py-32">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url('https://i.postimg.cc/N05X153v/Hero-Bg-Image.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <div className="container-custom relative z-10 w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs tracking-wider uppercase"
            >
              <Sparkles size={14} className="text-accent" />
              <span>Enterprise Software & AI Automation</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              We build intelligent <br />
              <span className="gradient-text">Software & AI.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Leafclutch Technologies delivers mission-critical engineering and
              <span className="font-semibold text-foreground">
                {" "}
                responsible AI automation{" "}
              </span>
              tailored for enterprise scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20">
                Get Started
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-transparent border border-foreground/20 text-foreground rounded-xl font-bold hover:bg-foreground/5 transition-colors">
                View Our Work
              </button>
            </motion.div>

            {/* Features Row */}
            <motion.div
              variants={itemVariants}
              className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border/50"
            >
              <div className="flex items-center gap-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                <Shield size={20} className="text-primary" />
                <span>Enterprise-Ready</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                <Zap size={20} className="text-warning" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                <Target size={20} className="text-mint" />
                <span>Responsible AI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
