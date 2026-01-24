import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container-custom text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10">
          Let's discuss your project needs and create a solution that delivers
          real results for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/9766722920?text=I%20want%20to%20schedule%20a%20call"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block cursor-pointer"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center">
              <MessageSquare className="mr-2 w-5 h-5" />
              Schedule a Call
            </button>
          </a>
          <Link to="/services/all-services">
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
