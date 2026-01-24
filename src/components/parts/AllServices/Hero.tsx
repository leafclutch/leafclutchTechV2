import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(9, 5, 54, 0.55),
            rgba(5, 4, 46, 0.85)
          ),
          url('https://plus.unsplash.com/premium_photo-1722859269438-dcacf0c6f26a?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        `,
      }}
    >
      {/* Subtle Background Abstract Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-mint mr-2 animate-pulse" />
          Our Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
        >
          Comprehensive <br className="hidden md:block" />
          Technology Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed"
        >
          From concept to deployment, we provide end-to-end technology services
          to help your business thrive in the digital landscape.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
