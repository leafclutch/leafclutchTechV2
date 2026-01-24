import React from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingCTA: React.FC = () => {
  return (
    <section className=" max-w-[95rem] mx-auto mt-[6rem]">
      <div className="w-full bg-card border border-border rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary dark:text-foreground">
              Training & Internship Programs
            </h3>
            <p className="text-muted-foreground text-lg">
              Industry-focused learning in Data Science, AI, Software
              Development & more.
            </p>
          </div>
        </div>
        <Link to="/course/all">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center space-x-3 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span>Explore Programs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TrainingCTA;
