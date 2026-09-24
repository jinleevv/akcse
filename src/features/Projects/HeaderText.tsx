import { ArrowDown, Sparkles } from "lucide-react";

export default function HeaderText() {
  return (
    <header className="pt-7">
      <h1 className="text-3xl font-medium">AKCSE McGill Projects</h1>
      <div className="grid items-center gap-8 py-10 sm:gap-12 sm:py-12 lg:grid-cols-[1.1fr_1fr] lg:pb-16">
        <div>
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600">
            <span className="size-1.5 shrink-0 rounded-full bg-orange-700" />
            AKCSE McGill · Ideas in action
          </p>
          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl xl:text-[56px]">
            Get curious.<br />Build together.<br />
            <span className="text-orange-700">Make a difference.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-gray-600">
            Big ideas start with a little curiosity. Explore what happens when
            AKCSE members bring their skills together and turn what they’re
            learning into something real.
          </p>
          <a
            href="#explore-projects"
            className="mt-7 inline-flex items-center gap-6 rounded-lg bg-orange-700 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
          >
            Explore our projects <ArrowDown size={18} aria-hidden="true" />
          </a>
          <p className="mt-5 flex items-center gap-2 text-xs text-gray-600">
            <Sparkles size={17} className="shrink-0 text-orange-700" aria-hidden="true" />
            Different perspectives. Shared possibilities.
          </p>
        </div>
        <figure className="rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm">
          <img
            src="/activities/20252026/Ideathon/image2.webp"
            alt="AKCSE members sharing ideas and presenting at the Ideathon"
            className="aspect-[4/3] w-full rounded-lg object-cover"
            fetchPriority="high"
          />
          <figcaption className="flex items-center gap-2 px-1 pb-1 pt-3 text-xs text-gray-600">
            <Sparkles size={14} className="shrink-0 text-orange-700" aria-hidden="true" />
            From a conversation to a new possibility.
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
