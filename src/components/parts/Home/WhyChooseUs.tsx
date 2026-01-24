import React from "react";
import {
  ShieldCheck,
  Zap,
  Users,
  Maximize,
  Award,
  CheckCircle,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const stats = [
  { value: "5+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  {
    icon: <ShieldCheck className="text-accent" />,
    title: "Responsible AI",
    desc: "We prioritize ethical AI practices, ensuring transparency, fairness, and accountability.",
  },
  {
    icon: <Zap className="text-accent" />,
    title: "High Performance",
    desc: "Our solutions are optimized for speed and efficiency, delivering measurable improvements.",
  },
  {
    icon: <Users className="text-accent" />,
    title: "Client-First Approach",
    desc: "We listen, understand, and tailor our solutions to your specific needs.",
  },
  {
    icon: <Maximize className="text-accent" />,
    title: "Scalable Solutions",
    desc: "Built for growth, our systems scale seamlessly from startup to enterprise.",
  },
  {
    icon: <Award className="text-accent" />,
    title: "Expert Team",
    desc: "Our experienced engineers bring deep expertise across software, AI, data, and cloud.",
  },
  {
    icon: <CheckCircle className="text-accent" />,
    title: "Proven Results",
    desc: "We've helped businesses across industries achieve measurable growth and operational excellence.",
  },
];
// Motion Variants
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

const WhyUs: React.FC = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          className="text-left space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={slideLeft}>
            <p className="text-mint font-bold uppercase tracking-widest text-sm">
              Why Leafclutch
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Technology Partner <br /> You Can Trust
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              We combine technical excellence with a deep understanding of
              business needs to deliver solutions that truly make a difference.
              Our commitment to quality, transparency, and client success sets
              us apart.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-3 gap-8 pt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center md:text-left"
                variants={slideLeft}
              >
                <p className="text-3xl sm:text-5xl font-bold text-primary dark:text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-shadow"
              variants={slideRight}
            >
              <div className="p-2 bg-accent/10 w-fit rounded-lg mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
