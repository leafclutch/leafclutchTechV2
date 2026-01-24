import { CTA } from "../../components/parts/Internships/CTA";
import { Hero } from "../../components/parts/Internships/InternshipHero";
import { InternshipList } from "../../components/parts/Internships/InternshipList";
import { WhatIncluded } from "../../components/parts/Internships/WhatIncluded";
import Starting from "../../components/ui/Starting";

export default function Internship() {
  return (
    <div>
      <Starting
        pageName="Available Internships"
        srcImage="https://www.libra.com/wp-content/uploads/2023/03/internships-hero.jpg"
      />
      <Hero />
      <WhatIncluded />
      <InternshipList />
      <CTA />
    </div>
  );
}
