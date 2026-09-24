import { Images } from "lucide-react";
import { cn } from "@/lib/utils";

type PhotoCountProps = {
  count: number;
  className?: string;
};

export default function PhotoCount({ count, className }: PhotoCountProps) {
  if (count === 0) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm",
        className,
      )}
    >
      <Images size={14} aria-hidden="true" />
      {count} {count === 1 ? "photo" : "photos"}
    </span>
  );
}
