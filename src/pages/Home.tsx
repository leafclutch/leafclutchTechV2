import CTA from "../components/parts/Home/CTA";
import Hero from "../components/parts/Home/Hero";
import Services from "../components/parts/Home/Services";
// import { Stats } from "../components/parts/Home/Stats";
import WhyChooseUs from "../components/parts/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <main>
        <Hero />
        {/* <Stats /> */}
        <Services />
        <WhyChooseUs />
        <CTA />
      </main>
    </div>
  );
}
