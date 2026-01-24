import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary dark:bg-gray-900 relative overflow-hidden border-t">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container-custom text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Limited Seats Available!
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10 leading-relaxed font-medium">
          Start learning today. Prove your skills and get promoted to an
          internship. Our team will guide you through the next steps.
        </p>

        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group w-full sm:w-auto px-10 py-5 bg-mint text-primary font-black rounded-2xl hover:bg-white transition-all shadow-[0_20px_40px_rgba(92,242,177,0.3)] flex items-center justify-center">
            <MessageSquare className="mr-2 w-6 h-6" />
            Apply via WhatsApp
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-col items-center sm:items-start text-white/60">
            <div className="flex items-center text-sm font-bold mb-1">
              <Phone className="w-4 h-4 mr-2" />
              Siddhartha Pathak: +977-9766722920
            </div>
            <div className="flex items-center text-sm font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Shubham Deo: +977-9867420560
            </div>
          </div>
        </div> */}
        {/* Streamlined Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Box 2: Contact - Siddhartha */}
          <a
            href="tel:+9779766722920"
            className="group flex items-center gap-4 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-mint/30"
          >
            <div className="w-10 h-10 bg-primary/40 rounded-xl flex items-center justify-center border border-white/5 text-mint shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div className="overflow-hidden flex flex-col">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-0.5 truncate">
                Shibika Nepal
              </h3>
              <p className="text-white/40 font-black text-sm tracking-[0.05rem] self-start">
                +977-9766715768
              </p>
            </div>
          </a>

          {/* Box 3: Contact - Shubham */}
          <a
            href="tel:+9779867420560"
            className="group flex items-center gap-4 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-accent/30"
          >
            <div className="w-10 h-10 bg-primary/40 rounded-xl flex items-center justify-center border border-white/5 text-accent shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div className="overflow-hiddenf flex flex-col">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-0.5 truncate">
                Shubham Kr. Deo
              </h3>
              <p className="text-white/40 font-black text-sm tracking-[0.05rem] self-start">
                +977-9766715666
              </p>
            </div>
          </a>

          {/* Box 1: Simple WhatsApp Action */}
          <a
            href="https://wa.me/9766715768?text=I%20want%20to%20apply"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block cursor-pointer"
          >
            <div className="relative h-full flex items-center justify-between p-5 bg-mint rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-primary  dark:text-blue-950" />
                </div>
                <h3 className="text-sm font-black text-primary dark:text-blue-950 leading-tight">
                  Apply via WhatsApp
                </h3>
              </div>

              <div className="p-2 bg-primary dark:text-blue-950 text-white rounded-lg group-hover:bg-primary-light transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
