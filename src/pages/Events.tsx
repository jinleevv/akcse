import { Label } from "@/components/ui/label";
import Timeline from "@/features/Events/Timeline";
import MobileTimeline from "@/features/Events/MobileTimeline";

export default function Events() {
  return (
    <section className="w-full h-full">
      <div className="flex w-full pt-7 pl-11">
        <Label className="w-full text-3xl ml-auto">
          2024 - 2025 Main Events Timeline
        </Label>
      </div>
      <div className="hidden lg:block">
        <Timeline />
      </div>
      <div className="black lg:hidden">
        <MobileTimeline />
      </div>
    </section>
  );
}
