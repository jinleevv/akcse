import ProjectsDisplay from "@/features/Projects/ProjectsDisplay";
import HearderText from "@/features/Projects/HeaderText";

export default function Projects() {
  return (
    <section className="w-full h-full p-3 gap-2">
      <HearderText />
      <div className="mt-2 p-4">
        <ProjectsDisplay />
      </div>
    </section>
  );
}
