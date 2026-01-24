import React from "react";
import { Target, Eye } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const AboutMission: React.FC = () => {
  return (
    <section className="pb-32 pt-32 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card - Slide from Left */}
        <motion.div
          className="p-10 bg-card border border-border rounded-[2rem] space-y-6 hover:shadow-lg transition-shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideLeft}
        >
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl">
            <Target className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To empower businesses with intelligent, scalable, and responsible
            technology solutions that drive measurable growth and competitive
            advantage. We are committed to delivering excellence through
            innovation, collaboration, and unwavering dedication to our clients'
            success.
          </p>
        </motion.div>

        {/* Vision Card - Slide from Right */}
        <motion.div
          className="p-10 bg-card border border-border rounded-[2rem] space-y-6 hover:shadow-lg transition-shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideRight}
        >
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl">
            <Eye className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To be the global leader in ethical AI and software solutions,
            recognized for our commitment to innovation, quality, and positive
            societal impact. We envision a world where technology serves as a
            catalyst for sustainable business growth and human progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;
