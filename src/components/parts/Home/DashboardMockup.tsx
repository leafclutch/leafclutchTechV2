import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck } from "lucide-react";

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px]">
      {/* Main Glass Window */}
      <motion.div
        className="w-full aspect-[4/3] glass-morphism rounded-3xl overflow-hidden shadow-2xl relative"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Window Controls */}
        <div className="p-4 flex gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>

        {/* Mock Content */}
        <div className="p-8 space-y-6">
          <div className="h-6 w-3/4 bg-white/10 rounded-full" />
          <div className="h-4 w-1/2 bg-white/5 rounded-full" />

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="h-24 rounded-2xl bg-white/5" />
            <div className="h-24 rounded-2xl bg-green-500/5 border border-green-500/20" />
          </div>

          <div className="h-4 w-5/6 bg-white/5 rounded-full" />
          <div className="h-4 w-2/3 bg-white/5 rounded-full" />
        </div>
      </motion.div>

      {/* Floating Stat Card 1: Velocity */}
      <motion.div
        className="absolute -top-6 -left-10 md:-left-12 p-4 glass-morphism rounded-2xl shadow-xl flex items-center gap-4 border border-white/10"
        initial={{ x: 0, y: 0 }}
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
          <Zap size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
            Velocity
          </p>
          <p className="text-2xl font-bold text-foreground">+98%</p>
        </div>
      </motion.div>

      {/* Floating Stat Card 2: Uptime */}
      <motion.div
        className="absolute -bottom-4 -right-4 md:-right-8 p-4 glass-morphism rounded-2xl shadow-xl flex items-center gap-4 border border-white/10"
        initial={{ x: 0, y: 0 }}
        animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
          <ShieldCheck size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-green-400 font-bold">
            Uptime
          </p>
          <p className="text-2xl font-bold text-foreground">99.9%</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
