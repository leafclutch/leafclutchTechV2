import Benefits from "../../components/parts/Services/Benefits";
import Features from "../../components/parts/Services/Features";
import Hero from "../../components/parts/Services/Hero";
import { service } from "../../components/parts/TrainingInternship/data";
import FinalCTA from "../../components/parts/TrainingInternship/FinalCTA";
import PricingSection from "../../components/parts/TrainingInternship/PricingSection";
import ProgramStructure from "../../components/parts/TrainingInternship/ProgramStructure";

export default function TrainingInternship() {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        icon={service.icon}
        backgroundImage={service.heroImage}
        backgroundSize={service?.backgroundSize}
      />  
      <Features features={service.features} />
      <ProgramStructure phases={service.programStructure} />
      <Benefits benefits={service.benefits} />
      <PricingSection />
      <FinalCTA />
    </div>
  );
}
