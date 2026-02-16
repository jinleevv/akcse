import { BsGithub } from "react-icons/bs";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  image: string;
  title: string;
  contributors: string;
  description: string;
  link: string;
}

export function ProjectCard({
  image,
  title,
  contributors,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-orange-700 mb-3">{title}</h3>

        {/* Scrollable Description */}
        <div className="w-full flex-grow overflow-y-auto max-h-32 mb-4 pr-1 scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent">
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Contributors */}
        <div className="mb-4">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
            Contributors
          </span>
          <p className="text-xs text-gray-700 font-medium leading-relaxed">
            {contributors}
          </p>
        </div>

        {/* Footer / Link */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-orange-700 transition-colors"
            title="View on GitHub"
          >
           <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-50 hover:text-orange-700">
              <BsGithub size={20} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
