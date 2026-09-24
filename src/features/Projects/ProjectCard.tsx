import { ArrowUpRight, Github, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  contributors: string;
  description: string;
  purpose: string;
  achievements: string;
  link: string;
}

export function ProjectCard({
  image,
  title,
  category,
  contributors,
  description,
  purpose,
  achievements,
  link,
}: ProjectCardProps) {
  const members = contributors.split(",").map((name) => name.trim()).filter(Boolean);

  return (
    <Dialog>
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`Explore ${title}`}
            className="group flex flex-1 cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-orange-700"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-gray-100 bg-white">
              <img
                src={image}
                alt={`${title} logo`}
                className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-1 flex-col p-5">
              <span className="mb-3 w-fit rounded-md bg-orange-50 px-2.5 py-1 text-[11px] font-medium text-orange-700">
                {category}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-orange-700">{title}</h3>
              <p className="mt-3 mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
                {description}
              </p>
              <div className="mt-auto rounded-lg bg-gray-50 p-3">
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-700">
                  <Users size={14} aria-hidden="true" />
                  {members.length} {members.length === 1 ? "contributor" : "contributors"}
                </p>
                <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">{contributors}</p>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs font-medium text-gray-800">
                <span>Explore project</span>
                <span className="flex size-8 items-center justify-center rounded-full bg-orange-50 text-orange-700">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </div>
            </div>
          </button>
        </DialogTrigger>
        <div className="mx-5 border-t border-gray-100 py-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub (opens in a new tab)`}
            className="inline-flex items-center gap-2 rounded-sm text-xs font-medium text-gray-500 transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
          >
            <Github size={16} aria-hidden="true" /> View on GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </article>

      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-[760px] gap-6 overflow-y-auto rounded-xl bg-white p-5 text-gray-800 sm:p-8">
        <DialogHeader className="gap-2 pr-5 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">
            AKCSE McGill · {category}
          </p>
          <DialogTitle className="text-3xl font-semibold leading-tight tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="pt-2 text-sm leading-7 text-gray-600">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <img src={image} alt={`${title} logo`} className="h-48 w-full object-contain sm:h-56" loading="lazy" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <section className="rounded-xl bg-gray-50 p-5">
            <h3 className="mb-3 text-sm font-semibold text-gray-800">The idea</h3>
            <p className="text-sm leading-7 text-gray-600">{purpose}</p>
          </section>
          <section className="rounded-xl bg-orange-50 p-5">
            <h3 className="mb-3 text-sm font-semibold text-orange-700">What we built</h3>
            <p className="text-sm leading-7 text-gray-600">{achievements}</p>
          </section>
        </div>

        <section className="border-t border-gray-100 pt-5">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Users size={16} className="text-orange-700" aria-hidden="true" />
            The people behind the project
          </h3>
          <ul className="flex flex-wrap gap-2">
            {members.map((name) => (
              <li key={name} className="rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                {name}
              </li>
            ))}
          </ul>
        </section>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center justify-center gap-3 rounded-lg bg-orange-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
        >
          <Github size={17} aria-hidden="true" /> Explore on GitHub
          <ArrowUpRight size={17} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </DialogContent>
    </Dialog>
  );
}
