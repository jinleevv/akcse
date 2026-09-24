import { ArrowUpRight, Lightbulb } from "lucide-react";
import ProjectsDisplay from "@/features/Projects/ProjectsDisplay";
import HeaderText from "@/features/Projects/HeaderText";

export default function Projects() {
  return (
    <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1400px] bg-white pb-12 text-gray-800 sm:w-[calc(100%-3.5rem)]">
      <HeaderText />
      <ProjectsDisplay />
      <section className="mt-12 flex flex-col items-start justify-between gap-7 rounded-xl bg-orange-50 p-7 sm:p-8 md:flex-row md:items-center" aria-labelledby="project-community-title">
        <div>
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">
            <Lightbulb size={16} aria-hidden="true" /> There’s room for your ideas
          </p>
          <h2 id="project-community-title" className="text-3xl font-semibold leading-tight tracking-tight">
            Learn something new.<br />Build something together.
          </h2>
        </div>
        <a
          href="https://www.instagram.com/akcse_mcgill/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-5 rounded-lg bg-orange-700 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
        >
          Connect on Instagram <ArrowUpRight size={18} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>
    </div>
  );
}
