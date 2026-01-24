import React from "react";

const statItems = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "50+" },
  { label: "Years Experience", value: "10+" },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-border bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {statItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                {item.value}
              </div>
              <div className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
