import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

// Fade-in variant
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const AboutAI: React.FC = () => {
  return (
    <section className="w-full bg-primary py-24 px-4 sm:px-6 lg:px-8 text-center text-primary-foreground transition-colors duration-500">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <p className="text-base font-bold uppercase tracking-[0.3em] text-mint">
          Our Commitment
        </p>
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
          Responsible AI Development
        </h2>
        <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
          We believe in developing AI solutions that are transparent, fair, and
          beneficial to all stakeholders. Our approach prioritizes ethical
          considerations, data privacy, and accountability at every stage of
          development. We're committed to building AI that augments human
          capabilities rather than replacing human judgment.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutAI;
