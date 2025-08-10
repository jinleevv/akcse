import { useState, useMemo } from "react";
import MobileTimelineYear from "./MobileTimelineYear";
import { eventsByYear } from "./events-data";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  data?: typeof eventsByYear; // allow override if you want
  defaultYear?: keyof typeof eventsByYear;
};

export default function MobileTimeline({
  data = eventsByYear,
  defaultYear,
}: Props) {
  const years = useMemo(
    () => Object.keys(data) as (keyof typeof data)[],
    [data]
  );
  const [year, setYear] = useState<keyof typeof data>(defaultYear ?? years[0]);

  return (
    <div className="mt-3 space-y-3 px-7">
      <Select
        value={year}
        onValueChange={(v) => setYear(v as keyof typeof data)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((y) => (
            <SelectItem key={y} value={y}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Year view */}
      <MobileTimelineYear events={data[year]} />
    </div>
  );
}
