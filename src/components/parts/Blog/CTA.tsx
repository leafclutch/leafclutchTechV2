import React from "react";
import { ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Our team is here to help. Reach out with any questions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-card text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-background transition-colors shadow-lg">
            Contact Support
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
