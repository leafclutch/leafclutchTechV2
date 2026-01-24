
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Work on live client projects",
  "Daily standups with team",
  "Weekly mentorship sessions",
  "Performance reviews",
  "Job placement support",
  "Experience certificate"
];

export const WhatIncluded: React.FC = () => {
  return (
    <section className="py-24 bg-background px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          What's Included
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
              <span className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
