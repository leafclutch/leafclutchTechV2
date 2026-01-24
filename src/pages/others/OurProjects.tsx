import Projects from "../../components/parts/OurProjects/Project";
import Starting from "../../components/ui/Starting";

export default function OurProjects() {
  return (
    <div>
      <Starting
        pageName="Our Projects"
        srcImage="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=857&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Projects />
    </div>
  );
}
