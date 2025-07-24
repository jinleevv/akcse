import ProjectsDisplay from "../ui/Projects/ProjectsDisplay";
import HearderText from "../ui/Projects/HeaderText";

export default function ProjectsPage() {
  return (
    <section className="w-full h-full p-3 gap-2">
      <HearderText />
      <div className="mt-2 p-4">
        <ProjectsDisplay />
      </div>
    </section>
  );
}
