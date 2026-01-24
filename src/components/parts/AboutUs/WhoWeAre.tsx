import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "10+", label: "Team Members" },
  { value: "2", label: "Countries Served" },
];
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const WhoWeAre: React.FC = () => {
  return (
    <section className="section-padding bg-background relative transition-colors duration-500 border-b">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={slideLeft}
          >
            <p className="text-mint font-bold uppercase tracking-widest text-sm">
              Who We Are
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary leading-[1.1]">
              A Team of Passionate <br /> Technologists
            </h1>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              <p>
                Founded with a vision to bridge the gap between cutting-edge
                technology and practical business needs, Leafclutch Technologies
                Pvt. Ltd. has grown into a trusted partner for organizations
                worldwide.
              </p>
              <p>
                Our diverse team brings together expertise in software
                engineering, artificial intelligence, data science, and cloud
                infrastructure. We combine technical excellence with deep
                industry knowledge to deliver solutions that create real value.
              </p>
              <p>
                From startups seeking their first product to enterprises
                modernizing legacy systems, we've helped organizations of all
                sizes achieve their digital transformation goals.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="bg-secondary/40 border border-border p-12 rounded-[2.5rem] grid grid-cols-2 gap-y-12 gap-x-8 text-center shadow-sm backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={slideRight}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="space-y-1"
                variants={containerVariants} // stagger children inside stats
              >
                <motion.p
                  className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-foreground"
                  variants={slideRight}
                >
                  {stat.value}
                </motion.p>
                <motion.p
                  className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                  variants={slideRight}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
