import React from "react";
import { ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-8">
          <Star className="w-4 h-4 fill-warning text-warning" />
          Voted "Best Workplace in Tech" 2024
        </div> */}
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Ready for Your Next Chapter?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          We're looking for talented individuals who are excited about building
          scalable, human-centric software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:careers@leafclutchtech.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center"
          >
            <button className="flex items-center border-2 border-primary  justify-center gap-2 bg-card text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-background transition-colors shadow-lg">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>

          <a
            href="mailto:hr@leafclutchtech.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-10 py-4 rounded-xl border-2 border-primary-foreground text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
