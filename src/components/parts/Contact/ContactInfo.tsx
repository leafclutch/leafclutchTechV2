import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

// Fade-in for each element
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Stagger container for sequential animation
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between children
    },
  },
};

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      className="lg:col-span-2 space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer} // parent container for stagger
    >
      {/* Heading */}
      <motion.div className="space-y-6" variants={fadeIn}>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary">
          Contact Information
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Reach out to us through any of these channels and we'll respond
          promptly.
        </p>
      </motion.div>

      {/* Contact blocks */}
      <motion.div className="space-y-10" variants={staggerContainer}>
        {/* Email */}
        <motion.div
          className="flex items-start space-x-6 group"
          variants={fadeIn}
        >
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-1 pt-1 text-left">
            <h3 className="text-xl font-bold text-primary">Email Us</h3>
            <div className="text-muted-foreground space-y-0.5 font-medium">
              <p>info@leafclutchtech.com.np</p>
              <p>careers@leafclutchtech.com.np</p>
            </div>
          </div>
        </motion.div>

        {/* Visit */}
        <motion.div
          className="flex items-start space-x-6 group"
          variants={fadeIn}
        >
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-1 pt-1 text-left">
            <h3 className="text-xl font-bold text-primary">Visit Us</h3>
            <div className="text-muted-foreground space-y-0.5 font-medium">
              <p>Siddharthanagar</p>
              <p>
                Rupandehi, Nepal{" "}
                <span className="text-[10px] font-bold text-accent">NP</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call */}
        <motion.div
          className="flex items-start space-x-6 group"
          variants={fadeIn}
        >
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-1 pt-1 text-left">
            <h3 className="text-xl font-bold text-primary">Call Us</h3>
            <div className="text-muted-foreground space-y-0.5 font-medium">
              <p>+977-9766715768</p>
              <p>+977-9766715666</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
