import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  images: string[];
}

export function MemberModal({
  isOpen,
  onClose,
  name,
  images,
}: MemberModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-xl">{name}&apos;s Photos</DialogTitle>
             <VisuallyHidden>
                <DialogDescription>
                A gallery of photos for {name}
                </DialogDescription>
            </VisuallyHidden>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-6 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.length > 0 ? (
                images.map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] w-full overflow-hidden rounded-md border bg-muted">
                        <img
                        src={img}
                        alt={`${name} ${idx + 1}`}
                        className="w-full h-full object-cover transition-all hover:scale-105"
                        loading="lazy"
                        />
                    </div>
                ))
                ) : (
                    <div className="col-span-full flex flex-col justify-center items-center h-48 text-muted-foreground bg-muted/30 rounded-lg border-dashed border-2 border-muted">
                        <span>No photos available</span>
                    </div>
                )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
