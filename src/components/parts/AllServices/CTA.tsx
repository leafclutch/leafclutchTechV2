import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] bg-primary overflow-hidden p-12 md:p-20 text-center"
        >
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
              Let's discuss your requirements and create a solution that drives
              results. Our experts are ready to help you scale.
            </p>
            <a
              href="https://wa.me/9766722920?text=I%20want%20consultation%20about%20one%20of%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block cursor-pointer"
            >
              <button className="px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-mint hover:text-primary transition-all flex items-center gap-2 group mx-auto text-lg shadow-2xl">
                Get a Free Consultation
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
