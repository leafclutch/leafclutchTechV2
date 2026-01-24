import React from "react";
import { CheckCircle } from "lucide-react";

interface FeaturesProps {
  features: string[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            What We Offer
          </h2>
          <div className="w-20 h-1.5 bg-mint mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 group"
            >
              <div className="p-2 bg-mint/10 rounded-lg group-hover:bg-mint/20 transition-colors">
                <CheckCircle className="w-6 h-6 text-mint" />
              </div>
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
