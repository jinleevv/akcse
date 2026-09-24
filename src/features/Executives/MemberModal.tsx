import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import PhotoCount from "@/components/PhotoCount";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  roleLabel: string;
  images: string[];
}

export function MemberModal({
  isOpen,
  onClose,
  name,
  roleLabel,
  images,
}: MemberModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-[760px] flex-col gap-6 overflow-y-auto rounded-xl bg-white p-5 sm:p-8">
        <DialogHeader className="gap-2 pr-6 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">
            AKCSE McGill · Meet the team
          </p>
          <DialogTitle className="text-3xl font-semibold tracking-tight text-gray-800">
            {name}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {roleLabel}
          </DialogDescription>
        </DialogHeader>
        <MemberPhotoGallery name={name} images={images} />
      </DialogContent>
    </Dialog>
  );
}

function MemberPhotoGallery({ name, images }: { name: string; images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-500">
        <Images size={28} aria-hidden="true" />
        No photos available yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <PhotoCount count={images.length} className="bg-orange-50 text-orange-700 shadow-none" />
        <p className="text-xs text-gray-500" aria-live="polite" aria-atomic="true">
          Photo {selectedIndex + 1} of {images.length}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
        <img
          src={images[selectedIndex]}
          alt={`${name} — photo ${selectedIndex + 1} of ${images.length}`}
          className="h-[min(48dvh,440px)] w-full object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-gray-500">A little more of {name.split(" ")[0]}.</p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => setSelectedIndex((index) => (index - 1 + images.length) % images.length)}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={() => setSelectedIndex((index) => (index + 1) % images.length)}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto p-1" role="group" aria-label={`Choose a photo of ${name}`}>
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                aria-label={`Show photo ${index + 1} of ${name}`}
                aria-pressed={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                className={`h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 sm:h-24 sm:w-24 ${selectedIndex === index ? "border-orange-700 ring-2 ring-orange-100" : "border-transparent hover:border-orange-300"}`}
              >
                <img src={image} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
