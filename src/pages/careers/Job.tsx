import { Benefits } from "../../components/parts/Jobs/Benefits";
import { CTA } from "../../components/parts/Jobs/CTA";
import { JobList } from "../../components/parts/Jobs/JobList";
import { Hero } from "../../components/parts/Jobs/JobsHero";
import Starting from "../../components/ui/Starting";

export default function Job() {
  return (
    <div>
      <Starting
        pageName="Available Jobs"
        srcImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Hero />
      <Benefits />
      <JobList />
      <CTA />
    </div>
  );
}
